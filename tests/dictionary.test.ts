import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { parseDictionary, filterDictionary, cardSlug } from '../helpers/dictionary';
import { loadDictionary } from '../helpers/dictionary.server';
import { app } from '../app.server';
const directory = new URL('../data/dictionary/ja/cards/', import.meta.url);
async function rawCards() { return Promise.all((await readdir(directory)).filter(f=>f.endsWith('.json')).map(async f=>JSON.parse(await readFile(new URL(f,directory),'utf8')))); }

test('canonical 78 cards load without dropping any content or changing nulls', async()=>{
 const raw=await rawCards();const cards=parseDictionary(raw);
 assert.equal(cards.length,78);assert.deepEqual(cards,raw.sort((a,b)=>a.numeric_id-b.numeric_id));
 assert.equal(cards.filter(c=>c.arcana==='major').length,22);
 assert.equal(cards.reduce((n,c)=>n+Object.values(c.translation.fields).filter(f=>f.text_ja===null).length,0),50);
});
test('classification and Japanese/English name filters preserve card IDs',async()=>{
 const cards=await loadDictionary();assert.equal(filterDictionary(cards,{arcana:'major'}).length,22);assert.equal(filterDictionary(cards,{arcana:'minor'}).length,56);
 for(const suit of ['wands','cups','swords','pentacles'])assert.equal(filterDictionary(cards,{suit}).length,14);
 assert.deepEqual(filterDictionary(cards,{q:' 愚者 '}).map(c=>c.card_id),['00-fool']);assert.deepEqual(filterDictionary(cards,{q:'THE FOOL'}).map(c=>c.card_id),['00-fool']);
 assert.equal(filterDictionary(cards,{q:'存在しないカード'}).length,0);assert.equal(cardSlug('cups/two-of-cups'),'cups--two-of-cups');
});
test('missing, duplicate and malformed records fail rather than show a partial dictionary',async()=>{
 const raw=await rawCards();assert.throws(()=>parseDictionary(raw.slice(1)));assert.throws(()=>parseDictionary([...raw.slice(1),raw[1]]));
 const broken=structuredClone(raw);delete broken[0].translation.fields.reversed;assert.throws(()=>parseDictionary(broken));
});
test('loading validates each English field against its pinned original',async()=>{
 const cards=await loadDictionary();assert.equal(cards.length,78);
 const cups=cards.find(c=>c.card_id==='cups/two-of-cups')!;
 assert.equal(cups.source.fields.reversed.text_en,'Passion.');assert.match(cups.source.fields.reversed.section!,/§4/);
});
test('dictionary API returns complete plain JSON',async()=>{
 const r=await app.request('/_api/dictionary');assert.equal(r.status,200);const value=await r.json();assert.equal(parseDictionary(value.cards).length,78);
});

test('loader rejects a source-text mismatch and missing files',async t=>{
 const {mkdtemp,writeFile,rm}=await import('node:fs/promises');const {tmpdir}=await import('node:os');const {join}=await import('node:path');const {pathToFileURL}=await import('node:url');
 const temporary=await mkdtemp(join(tmpdir(),'dictionary-loader-'));t.after(()=>rm(temporary,{recursive:true,force:true}));
 const raw=(await readFile(new URL('../data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl',import.meta.url),'utf8')).trimEnd().split('\n').map(line=>JSON.parse(line));raw[0].divinatory_meanings.upright='Wrong source text';
 const file=join(temporary,'source.jsonl');await writeFile(file,raw.map(r=>JSON.stringify(r)).join('\n'));
 await assert.rejects(()=>loadDictionary(undefined,pathToFileURL(file)),/原典の全文/);
 await assert.rejects(()=>loadDictionary(pathToFileURL(temporary+'/missing/')));
});

test('comparison coverage and all evidence targets are required for present text',async()=>{
 for(const mutate of [
  (card:any)=>{card.translation.fields.upright.units=[];},
  (card:any)=>{card.interpretation.central.evidence_units=['reversed:999'];},
  (card:any)=>{card.translation.fields.upright.units[0].text_en='Missing original qualifiers';},
  (card:any)=>{card.translation.fields.upright.units[0].id='upright:999';},
 ]){const cards=await rawCards();mutate(cards[0]);assert.throws(()=>parseDictionary(cards));}
});
test('loader rejects classification and English-name drift from original',async t=>{
 const {mkdtemp,writeFile,rm}=await import('node:fs/promises');const {tmpdir}=await import('node:os');const {join}=await import('node:path');const {pathToFileURL}=await import('node:url');
 const temporary=await mkdtemp(join(tmpdir(),'dictionary-classification-'));t.after(()=>rm(temporary,{recursive:true,force:true}));
 const records=await rawCards();records[0].arcana='minor';records[0].suit='cups';records[0].name_en='Changed name';
 await Promise.all(records.map(c=>writeFile(join(temporary,`${c.numeric_id}.json`),JSON.stringify(c))));
 await assert.rejects(()=>loadDictionary(pathToFileURL(temporary+'/')),/原典.*分類/);
});
