import { readdir, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { parseDictionary, meaningFields } from './dictionary';

const cardDirectory = new URL('../data/dictionary/ja/cards/', import.meta.url);
const sourceFile = new URL('../data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl', import.meta.url);
export async function loadDictionary(directory: URL = cardDirectory, originalFile: URL = sourceFile) {
  const names=(await readdir(directory)).filter(name=>name.endsWith('.json'));
  const cards=parseDictionary(await Promise.all(names.map(async name=>JSON.parse(await readFile(new URL(name,directory),'utf8')))));
  const originals=(await readFile(originalFile,'utf8')).trimEnd().split('\n').map(line=>JSON.parse(line));
  if(originals.length!==78)throw new Error('原典レコードの件数が不整合です');
  for(const card of cards){
    const original=originals[card.source.line_1based-1];
    if(!original||original.card_id!==card.card_id||original.numeric_id!==card.numeric_id||card.source.record_selector.card_id!==card.card_id)throw new Error('原典IDが不整合です');
    if(['numeric_id','arcana','suit','rank','number'].some(key=>card[key]!==original[key])||card.name_en!==original.name||card.source.source_id!==original.divinatory_meanings.source_id)throw new Error('原典との分類・名前・出典が不整合です');
    for(const key of meaningFields){
      const raw=card.source.fields[key],en=original.divinatory_meanings[key];
      const section=key.startsWith('additional_')?original.divinatory_meanings.additional_section:original.divinatory_meanings[`${key}_section`];
      if(raw.text_en!==en||raw.section!==section||raw.text_sha256!==(en===null?null:createHash('sha256').update(en).digest('hex')))throw new Error('原典の全文・参照節が不整合です');
    }
  }
  return cards;
}
