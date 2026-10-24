import { z } from 'zod';

export const meaningFields = ['upright', 'reversed', 'additional_upright', 'additional_reversed'] as const;
export type MeaningField = typeof meaningFields[number];
export const fieldLabels: Record<MeaningField, string> = { upright: '基本・正位置', reversed: '基本・逆位置', additional_upright: '追加・正位置', additional_reversed: '追加・逆位置' };
export const suitLabels: Record<string, string> = { wands: 'ワンド', cups: 'カップ', swords: 'ソード', pentacles: 'ペンタクル' };
const text = z.string().min(1);
const object = <T extends z.ZodRawShape>(shape: T) => z.object(shape).passthrough();
const rawField = object({ json_pointer: text, section: text.nullable(), text_en: text.nullable(), text_sha256: text.nullable(), availability: text });
const unit = object({ id: text, text_en: text, text_ja: text });
const translationField = object({ text_ja: text.nullable(), units: z.array(unit), status: text, notes: z.array(text) });
const fields = <T extends z.ZodTypeAny>(schema: T) => object({ upright: schema, reversed: schema, additional_upright: schema, additional_reversed: schema });
const interpretation = object({ text_ja: text.nullable(), kind: text, evidence_units: z.array(text), status: text });
const cardSchema = object({
  schema_version: text, dictionary_version: text, card_id: text, numeric_id: z.number().int().min(0).max(77), name_en: text, name_ja: text,
  arcana: z.enum(['major','minor']), suit: z.enum(['wands','cups','swords','pentacles']).nullable(), number: z.number().int(), rank: text.nullable(),
  source: object({ dataset_id: text, dataset_version: text, upstream_commit: text, local_commit: text, file: text, line_1based: z.number().int().positive(), record_selector: object({card_id:text}), record_url: text, source_id: text, bibliography: text, registry_path: text, historical_page_exact: z.unknown().nullable(), historical_page_check: text, fields: fields(rawField), excluded_fields: z.array(text) }),
  translation: object({ language: text, method: text, fields: fields(translationField), ambiguities: z.array(object({ field: z.enum(meaningFields), term_en: text, note_ja: text, status: text })) }),
  interpretation: object({ central: interpretation, upright: interpretation, reversed: interpretation, application: interpretation, supplement_boundary: text.nullable(), rationale_ja: text.nullable() }),
  verification: object({ dataset_alignment: text, translation_review: text, independent_human_review: text, historical_original_collation: text, publication_status: text, reviewed_on: text.nullable(), reviewer: text.nullable() }),
  unresolved: z.array(object({ id: text, question_ja: text, status: text, resolution: z.unknown().nullable() })),
  rights: object({ attribution_file: text, upstream_license: text, upstream_license_url: text, changes: text, endorsement: z.boolean() }),
});
export type DictionaryCard = z.infer<typeof cardSchema>;

export function parseDictionary(input: unknown): DictionaryCard[] {
  const cards = z.array(cardSchema).length(78).parse(input).sort((a,b)=>a.numeric_id-b.numeric_id);
  if (new Set(cards.map(c=>c.card_id)).size !== 78 || cards.some((c,i)=>c.numeric_id!==i)) throw new Error('辞典のID・件数が不整合です');
  const tokens = (value: string) => value.match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu) || [];
  for (const card of cards) {
    const unitIds = new Set<string>();
    for (const key of meaningFields) {
      const raw=card.source.fields[key], translated=card.translation.fields[key];
      if ((raw.text_en===null)!==(translated.text_ja===null) || (raw.text_en===null && translated.units.length)) throw new Error('原文と訳文の不在が不整合です');
      if (raw.text_en !== null) {
        if (!translated.units.length || JSON.stringify(tokens(translated.units.map(u=>u.text_en).join(' '))) !== JSON.stringify(tokens(raw.text_en))) throw new Error('英日対照の原文範囲が不整合です');
        translated.units.forEach((unit,index)=>{
          if (unit.id!==`${key}:${index}` || unitIds.has(unit.id) || !translated.text_ja?.includes(unit.text_ja)) throw new Error('英日対照単位が不整合です');
          unitIds.add(unit.id);
        });
      }
    }
    for (const key of ['central','upright','reversed','application'] as const) {
      const candidate=card.interpretation[key];
      if (candidate.evidence_units.some(id=>!unitIds.has(id)) || (key==='application' ? candidate.evidence_units.length>0 : candidate.evidence_units.length===0)) throw new Error('解釈候補の根拠参照が不整合です');
    }
  }
  return cards;
}
export function filterDictionary(cards: DictionaryCard[], filters: {q?:string;arcana?:string;suit?:string}) {
  const q=(filters.q||'').normalize('NFKC').trim().toLocaleLowerCase();
  return cards.filter(c=>(!filters.arcana||c.arcana===filters.arcana)&&(!filters.suit||c.suit===filters.suit)&&(!q||[c.name_ja,c.name_en].some(name=>name.normalize('NFKC').toLocaleLowerCase().includes(q))));
}
export function cardSlug(id: string) { return id.replaceAll('/', '--'); }
export function sourceLink(path: string, commit: string) {
  return `https://github.com/kw0809suzuki-oss/uranainoyakata/blob/${encodeURIComponent(commit)}/${path.split('/').map(encodeURIComponent).join('/').replaceAll('%23','#')}`;
}
const statuses: Record<string,string> = {
  provisional:'暫定',reviewed:'校閲済み',not_applicable:'非該当・記載なし',pending:'未確認・保留',unknown:'不明・未確認',present:'記載あり',not_performed:'未実施',
  checked_against_pinned_local_dataset:'固定した原典データと機械照合済み',ai_self_review_complete:'AI自己確認済み（人間の校閲ではない）',prototype:'試作',draft:'草案',open:'未解決',unresolved:'未解決',translation_choice:'訳語の選択',source_based_editorial:'原文に基づく編集上の候補',editorial_application:'原典にはない編集上の問いかけ',
};
export function statusLabel(value: string) { return statuses[value] ? `${statuses[value]}［${value}］` : `未定義の状態［${value}］`; }
