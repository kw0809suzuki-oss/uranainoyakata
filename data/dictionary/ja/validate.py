"""Read-only prototype audit; stdlib validator for the schema keywords used here."""
import hashlib
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
FIELDS = ('upright', 'reversed', 'additional_upright', 'additional_reversed')
EXPECTED = {'00-fool', '01-magician', 'cups/two-of-cups'}
BASE = '0dd250333976cf9d6dd6ce47fb7866ecd4b35749'
CHECKS = 0


def check(condition, message):
    global CHECKS
    CHECKS += 1
    if not condition:
        raise ValueError(message)


def shape(value, schema, path='$'):
    supported = {'$schema', '$id', 'title', 'type', 'const', 'enum', 'minimum', 'maximum',
                 'pattern', 'minLength', 'items', 'required', 'properties', 'additionalProperties'}
    check(set(schema) <= supported, f'{path}: unsupported schema keyword')
    types = {'object': lambda x: isinstance(x, dict), 'array': lambda x: isinstance(x, list),
             'string': lambda x: isinstance(x, str), 'integer': lambda x: type(x) is int,
             'number': lambda x: type(x) in (int, float), 'null': lambda x: x is None,
             'boolean': lambda x: type(x) is bool}
    if 'type' in schema:
        kinds = schema['type'] if isinstance(schema['type'], list) else [schema['type']]
        check(any(types[k](value) for k in kinds), f'{path}: type')
    if 'const' in schema:
        check(value == schema['const'], f'{path}: const')
    if 'enum' in schema:
        check(value in schema['enum'], f'{path}: enum')
    if type(value) in (int, float):
        for key, test in [('minimum', lambda x: value >= x), ('maximum', lambda x: value <= x)]:
            if key in schema:
                check(test(schema[key]), f'{path}: {key}')
    if isinstance(value, str):
        if 'pattern' in schema:
            check(re.search(schema['pattern'], value) is not None, f'{path}: pattern')
        if 'minLength' in schema:
            check(len(value) >= schema['minLength'], f'{path}: minLength')
    if isinstance(value, dict):
        check(set(schema.get('required', [])) <= set(value), f'{path}: required')
        props = schema.get('properties', {})
        if schema.get('additionalProperties') is False:
            check(set(value) <= set(props), f'{path}: additionalProperties')
        for key, item in value.items():
            if key in props:
                shape(item, props[key], path + '.' + key)
    if isinstance(value, list) and 'items' in schema:
        for i, item in enumerate(value):
            shape(item, schema['items'], f'{path}[{i}]')


def tokens(text):
    return re.findall(r"[^\W_]+(?:['’-][^\W_]+)*", text, re.UNICODE)


def main():
    schema = json.loads((HERE / 'card.schema.json').read_text())
    source_path = ROOT / 'data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl'
    source = {d['card_id']: (i, d) for i, line in enumerate(source_path.read_text().splitlines(), 1)
              for d in [json.loads(line)]}
    check(len(source) == 78, 'source 78')
    cards = [json.loads(f.read_text()) for f in sorted((HERE / 'cards').glob('*.json'))]
    check(len(cards) == 3 and {c['card_id'] for c in cards} == EXPECTED, 'prototype scope')
    for card in cards:
        cid = card['card_id']
        shape(card, schema, cid)
        line, original = source[cid]
        for field in ('numeric_id', 'arcana', 'suit', 'rank', 'number'):
            check(card[field] == original[field], f'{cid}: {field}')
        check(card['name_en'] == original['name'], f'{cid}: English name')
        s = card['source']
        check(s['local_commit'] == BASE, f'{cid}: fixed commit')
        check(s['dataset_version'] == '1.1.0', f'{cid}: version')
        check(s['upstream_commit'] == 'e9ada73c4a3fa8788dbf896f619c3213bd681b3c', f'{cid}: upstream')
        check(s['file'] == str(source_path.relative_to(ROOT)), f'{cid}: file')
        check(s['line_1based'] == line and s['record_selector']['card_id'] == cid, f'{cid}: selector')
        dm = original['divinatory_meanings']
        check(s['source_id'] == dm['source_id'], f'{cid}: source id')
        ids = set()
        for field in FIELDS:
            raw = s['fields'][field]
            tr = card['translation']['fields'][field]
            en = dm[field]
            check(raw['text_en'] == en, f'{cid}/{field}: verbatim')
            check(raw['json_pointer'] == '/divinatory_meanings/' + field, f'{cid}/{field}: pointer')
            section = dm['additional_section'] if field.startswith('additional_') else dm[field + '_section']
            check(raw['section'] == section, f'{cid}/{field}: section')
            check(raw['text_sha256'] == (hashlib.sha256(en.encode()).hexdigest() if en else None), f'{cid}/{field}: hash')
            check(raw['availability'] == ('present' if en is not None else 'not_applicable'), f'{cid}/{field}: availability')
            if en is None:
                check(tr['text_ja'] is None and tr['units'] == [] and tr['status'] == 'not_applicable', f'{cid}/{field}: no imputation')
                continue
            check(tr['status'] == 'provisional' and bool(tr['text_ja']), f'{cid}/{field}: provisional')
            check(tokens(' '.join(u['text_en'] for u in tr['units'])) == tokens(en), f'{cid}/{field}: complete English units')
            for i, unit in enumerate(tr['units']):
                check(unit['id'] == field + ':' + str(i) and unit['id'] not in ids, f'{cid}: unit id')
                check(unit['text_ja'] in tr['text_ja'], f'{cid}: Japanese unit retained')
                ids.add(unit['id'])
        for key in ('central', 'upright', 'reversed', 'application'):
            it = card['interpretation'][key]
            check(set(it['evidence_units']) <= ids, f'{cid}/{key}: evidence')
            check(it['kind'] == ('editorial_application' if key == 'application' else 'source_based_editorial'), f'{cid}/{key}: layer')
            check(bool(it['evidence_units']) if key != 'application' else not it['evidence_units'], f'{cid}/{key}: evidence boundary')
        for note in card['translation']['ambiguities']:
            check(note['field'] in FIELDS, f'{cid}: ambiguity field')
        check(card['verification']['independent_human_review'] == 'pending', f'{cid}: human review')
        check(card['verification']['historical_original_collation'] == 'not_performed' and s['historical_page_exact'] is None, f'{cid}: historical boundary')
        check((HERE / 'cards' / card['rights']['attribution_file']).is_file(), f'{cid}: attribution link')
        check(card['rights']['upstream_license'] == 'CC-BY-4.0' and not card['rights']['endorsement'], f'{cid}: rights')
    cups = next(c for c in cards if c['card_id'] == 'cups/two-of-cups')
    check(cups['source']['fields']['reversed']['text_en'] == 'Passion.', 'cups reversed exception')
    check(cups['source']['fields']['reversed']['text_en'] == cups['source']['fields']['additional_reversed']['text_en'], 'cups duplicate source, not independent evidence')
    # Prove the shape accepts the identities of all 78, without creating translations.
    import copy
    template = cards[0]
    for _, original in source.values():
        candidate = copy.deepcopy(template)
        for field in ('card_id', 'numeric_id', 'name_en', 'arcana', 'suit', 'rank', 'number'):
            candidate[field] = original['name'] if field == 'name_en' else original[field]
        shape(candidate, schema, 'identity-extension')
    print(json.dumps({'passed': True, 'checks': CHECKS, 'prototype_cards': 3,
                      'source_records': 78, 'identity_schema_extension': 78,
                      'schema_validation': 'stdlib subset; only keywords in this schema',
                      'semantic_translation_check': 'AI self review only; human review pending',
                      'historical_page_collation': 'not_performed'}, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
