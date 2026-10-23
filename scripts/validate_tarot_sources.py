#!/usr/bin/env python3
"""Read-only validation of the pinned StarTarot v1.1.0 import (stdlib only).

Writes derived audit files only when --output-dir is supplied. Never edits sources.
"""
import argparse
import collections
import csv
import hashlib
import io
import json
from pathlib import Path
import unicodedata

REPO = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = REPO / 'data/sources/tarot-rws-dataset/v1.1.0'
MEANING_SOURCE = 'waite-pictorial-key-1910-part-iii'
CORRESPONDENCE_SOURCE = 'equinox-1912-liber-lxxviii'
MAJOR_IDS = ['00-fool', '01-magician', '02-high-priestess', '03-empress', '04-emperor', '05-hierophant', '06-lovers', '07-chariot', '08-strength', '09-hermit', '10-wheel', '11-justice', '12-hanged-man', '13-death', '14-temperance', '15-devil', '16-tower', '17-star', '18-moon', '19-sun', '20-judgement', '21-world']
RANKS = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'page', 'knight', 'queen', 'king']
SUITS = {'wands': 'Fire', 'cups': 'Water', 'swords': 'Air', 'pentacles': 'Earth'}
EXPECTED_MISSING_ADDITIONAL = {f'wands/{rank}-of-wands' for rank in ['two', 'three', 'seven', 'eight', 'nine', 'ten']}
# CSV is the documented projection; descriptive notes remain JSONL-only.
COLUMN_PATHS = {
    **{k: k for k in ['card_id', 'numeric_id', 'name', 'arcana', 'suit', 'rank', 'number', 'suit_element']},
    'waite_upright': 'divinatory_meanings.upright',
    'waite_reversed': 'divinatory_meanings.reversed',
    'waite_upright_section': 'divinatory_meanings.upright_section',
    'waite_reversed_section': 'divinatory_meanings.reversed_section',
    'golden_dawn_title': 'correspondence.title',
    'golden_dawn_kind': 'correspondence.kind',
    'golden_dawn_value': 'correspondence.value',
    'golden_dawn_additional_attribution': 'correspondence.additional_attribution',
    'golden_dawn_planet': 'correspondence.planet',
    'golden_dawn_zodiac': 'correspondence.zodiac',
    'decan_degree_start': 'correspondence.degree_start',
    'decan_degree_end': 'correspondence.degree_end',
    'meaning_source_id': 'source_ids.0',
    'correspondence_source_id': 'source_ids.1',
    'golden_dawn_hebrew_letter': 'correspondence.hebrew_letter',
    'golden_dawn_hebrew_letter_char': 'correspondence.hebrew_letter_char',
    'waite_additional_upright': 'divinatory_meanings.additional_upright',
    'waite_additional_reversed': 'divinatory_meanings.additional_reversed',
    'waite_additional_section': 'divinatory_meanings.additional_section',
    'golden_dawn_court_sphere_from_sign': 'correspondence.court_sphere_from_sign',
    'golden_dawn_court_sphere_from_degree': 'correspondence.court_sphere_from_degree',
    'golden_dawn_court_sphere_to_sign': 'correspondence.court_sphere_to_sign',
    'golden_dawn_court_sphere_to_degree': 'correspondence.court_sphere_to_degree',
}


def get_path(record, path):
    value = record
    for part in path.split('.'):
        value = value[int(part)] if isinstance(value, list) else value[part]
    return value


def validate(source):
    upstream = source / 'upstream'
    errors, checks = [], []

    def check(name, condition):
        checks.append({'check': name, 'passed': bool(condition)})
        if not condition:
            errors.append(name)

    metadata = json.loads((source / 'provenance.json').read_text(encoding='utf-8'))
    check('pinned_version_and_commit', metadata['version'] == '1.1.0' and metadata['tag'] == 'v1.1.0' and metadata['commit'] == 'e9ada73c4a3fa8788dbf896f619c3213bd681b3c' and metadata['tag_object'] == '83978a3e95ae20a395e4d3aad74ae285c283b255')
    check('version_DOI', metadata['version_doi'] == '10.5281/zenodo.22917681')
    expected_files = {'LICENSE', 'README.md', 'CITATION.cff', 'data/LICENSE', 'data/README.md', 'data/cards.csv', 'data/cards.jsonl', 'data/checksums.sha256'}
    check('complete_upstream_file_inventory', {p.relative_to(upstream).as_posix() for p in upstream.rglob('*') if p.is_file()} == expected_files)
    check('complete_manifest_inventory', len(metadata['files']) == 8 and {f['path'] for f in metadata['files']} == expected_files)
    for item in metadata['files']:
        if item['path'] not in expected_files:
            raise ValueError('Unexpected manifest path')
        content = (upstream / item['path']).read_bytes()
        check(f'manifest_sha256:{item["path"]}', hashlib.sha256(content).hexdigest() == item['sha256'] and len(content) == item['bytes'])
    checksum_entries = {}
    for line in (upstream / 'data/checksums.sha256').read_text(encoding='utf-8').splitlines():
        digest, name = line.split()
        if name not in {'LICENSE', 'README.md', 'cards.csv', 'cards.jsonl'}:
            raise ValueError('Unexpected upstream checksum path')
        checksum_entries[name] = digest
        check(f'upstream_sha256:{name}', hashlib.sha256((upstream / 'data' / name).read_bytes()).hexdigest() == digest)
    check('upstream_checksums_cover_four_files', set(checksum_entries) == {'LICENSE', 'README.md', 'cards.csv', 'cards.jsonl'})
    for name in expected_files:
        content = (upstream / name).read_bytes()
        text = content.decode('utf-8', errors='strict')
        check(f'utf8_nfc:{name}', unicodedata.normalize('NFC', text) == text)
        check(f'no_unexpected_controls:{name}', not any(unicodedata.category(c) in {'Cc', 'Cf'} and c not in '\n\r\t' for c in text))
    check('license_files_identical', (upstream / 'LICENSE').read_bytes() == (upstream / 'data/LICENSE').read_bytes())
    check('CC_BY_4_license_notice', 'https://creativecommons.org/licenses/by/4.0/legalcode' in (upstream / 'LICENSE').read_text(encoding='utf-8'))
    citation = (upstream / 'CITATION.cff').read_text(encoding='utf-8')
    check('citation_version_and_DOI', 'version: "1.1.0"' in citation and '10.5281/zenodo.22917681' in citation)
    documentation = (upstream / 'data/README.md').read_text(encoding='utf-8')
    check('source_registry_present', all(f'| `{s}` |' in documentation for s in [MEANING_SOURCE, CORRESPONDENCE_SOURCE]))

    lines = (upstream / 'data/cards.jsonl').read_text(encoding='utf-8').splitlines()
    check('jsonl_has_78_nonblank_lines', len(lines) == 78 and all(line.strip() for line in lines))
    records = [json.loads(line) for line in lines]
    check('jsonl_78_records', len(records) == 78)
    ids = [r['card_id'] for r in records]
    expected_ids = MAJOR_IDS + [f'{suit}/{rank}-of-{suit}' for suit in SUITS for rank in RANKS]
    check('all_78_expected_ids_in_documented_order', ids == expected_ids)
    check('unique_card_ids', len(set(ids)) == len(ids))
    check('numeric_ids_exact_0_to_77', [r['numeric_id'] for r in records] == list(range(78)))
    check('arcana_22_major_56_minor', collections.Counter(r['arcana'] for r in records) == {'major': 22, 'minor': 56})
    check('four_suits_14_each', collections.Counter(r['suit'] for r in records if r['arcana'] == 'minor') == {s: 14 for s in SUITS})
    audit = []
    for r in records:
        name, meanings, corr = r['card_id'], r['divinatory_meanings'], r['correspondence']
        major = r['arcana'] == 'major'
        check(f'nonempty_names_and_meanings:{name}', all(isinstance(v, str) and v.strip() for v in [r['name'], meanings['upright'], meanings['reversed'], corr['title'], corr['value']]))
        check(f'source_ids_and_meaning_source:{name}', r['source_ids'] == [MEANING_SOURCE, CORRESPONDENCE_SOURCE] and meanings['source_id'] == MEANING_SOURCE)
        upright_section = 'Part III §3' if major else 'Part III §2'
        reversed_section = 'Part III §4 (additional meaning; §2 has no reversed line)' if name == 'cups/two-of-cups' else upright_section
        check(f'orientation_sections:{name}', meanings['upright_section'] == upright_section and meanings['reversed_section'] == reversed_section)
        if major:
            check(f'major_identity:{name}', r['number'] == r['numeric_id'] and all(r[k] is None for k in ['suit', 'rank', 'suit_element']))
            check(f'no_additional_meanings_for_major:{name}', all(meanings[k] is None for k in ['additional_upright', 'additional_reversed', 'additional_section']))
            check(f'hebrew_fields_for_major:{name}', bool(corr['hebrew_letter']) and len(corr['hebrew_letter_char']) == 1)
        else:
            rank = name.split('/')[1].split('-of-')[0]
            number = RANKS.index(rank) + 1
            check(f'minor_identity:{name}', r['number'] == number and r['suit_element'] == SUITS[r['suit']] and r['rank'] == (rank.title() if rank in ['ace', 'page', 'knight', 'queen', 'king'] else None))
            check(f'additional_meanings_for_minor:{name}', bool(meanings['additional_upright']) and meanings['additional_section'] == 'Part III §4' and ((meanings['additional_reversed'] is None) if name in EXPECTED_MISSING_ADDITIONAL else bool(meanings['additional_reversed'])))
        if name == 'cups/two-of-cups':
            check('two_of_cups_reversed_equals_additional', meanings['reversed'] == meanings['additional_reversed'])
        audit.append({'card_id': name, 'numeric_id': r['numeric_id'], 'arcana': r['arcana'], 'meaning_source_id': meanings['source_id'], 'upright_section': meanings['upright_section'], 'reversed_section': meanings['reversed_section'], 'additional_section': meanings['additional_section'], 'additional_upright_present': meanings['additional_upright'] is not None, 'additional_reversed_present': meanings['additional_reversed'] is not None, 'correspondence_source_id': r['source_ids'][1]})

    raw_csv = (upstream / 'data/cards.csv').read_bytes()
    check('csv_no_BOM_and_CRLF', not raw_csv.startswith(b'\xef\xbb\xbf') and b'\n' in raw_csv and b'\n' not in raw_csv.replace(b'\r\n', b''))
    reader = csv.DictReader(io.StringIO(raw_csv.decode('utf-8'), newline=''))
    csv_records = list(reader)
    check('csv_31_documented_columns', reader.fieldnames == list(COLUMN_PATHS))
    check('csv_78_records', len(csv_records) == 78)
    check('csv_same_card_order', [r['card_id'] for r in csv_records] == ids)
    compared_cells = 0
    for index, (json_record, csv_record) in enumerate(zip(records, csv_records)):
        check(f'csv_no_malformed_row:{index}', None not in csv_record and all(v is not None for v in csv_record.values()))
        for column, path in COLUMN_PATHS.items():
            value = get_path(json_record, path)
            expected = '' if value is None else str(value)
            check(f'csv_matches_jsonl:{json_record["card_id"]}:{column}', csv_record[column] == expected)
            compared_cells += 1

    missing_additional = [r['card_id'] for r in records if r['arcana'] == 'minor' and r['divinatory_meanings']['additional_reversed'] is None]
    result = {
        'dataset_version': '1.1.0', 'source_commit': metadata['commit'],
        'passed': not errors, 'checks_total': len(checks), 'checks_passed': len(checks) - len(errors), 'errors': errors,
        'summary': {'jsonl_records': len(records), 'csv_records': len(csv_records), 'unique_card_ids': len(set(ids)), 'arcana': dict(collections.Counter(r['arcana'] for r in records)), 'minor_suits': dict(collections.Counter(r['suit'] for r in records if r['arcana'] == 'minor')), 'primary_upright_present': sum(bool(r['divinatory_meanings']['upright']) for r in records), 'primary_reversed_present': sum(bool(r['divinatory_meanings']['reversed']) for r in records), 'additional_upright_present': sum(r['divinatory_meanings']['additional_upright'] is not None for r in records), 'additional_reversed_present': sum(r['divinatory_meanings']['additional_reversed'] is not None for r in records), 'csv_columns': len(reader.fieldnames), 'csv_cells_compared': compared_cells, 'upstream_checksum_files': len(checksum_entries), 'manifest_files': len(metadata['files'])},
        'documented_absences': {'minor_additional_reversed_null': missing_additional, 'major_additional_meanings': 'All 22 null by upstream design', 'card_images': 'Not included in upstream dataset'},
        'source_exception': audit[ids.index('cups/two-of-cups')],
        'limitations': ['Primary source page images were not independently collated.', 'Per-card exact scan-page links are not fields in this dataset; source IDs, broad source-page ranges, sections and Wikisource revision pins are documented upstream.', 'DOIs and external mirrors were recorded but not independently resolved or byte-compared.', 'Git annotated tag is not cryptographically signed.', 'Historical meanings and Golden Dawn correspondences do not supply Japanese dictionary entries or artwork.'],
    }
    return result, audit


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=DEFAULT_SOURCE)
    parser.add_argument('--output-dir', type=Path)
    args = parser.parse_args()
    try:
        result, audit = validate(args.source)
    except (ValueError, KeyError, TypeError, OSError, IndexError) as exc:
        print(json.dumps({'passed': False, 'error': str(exc)}, ensure_ascii=False))
        return 1
    if args.output_dir:
        if args.output_dir.resolve().is_relative_to(args.source.resolve()):
            parser.error('Audit output must be outside the source import directory')
        args.output_dir.mkdir(parents=True, exist_ok=True)
        (args.output_dir / 'validation.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        with (args.output_dir / 'card-source-map.csv').open('w', encoding='utf-8', newline='') as stream:
            writer = csv.DictWriter(stream, fieldnames=list(audit[0]))
            writer.writeheader()
            writer.writerows(audit)
    print(json.dumps({k: result[k] for k in ['passed', 'checks_total', 'checks_passed', 'summary', 'errors']}, ensure_ascii=False, indent=2))
    return 0 if result['passed'] else 1


if __name__ == '__main__':
    raise SystemExit(main())
