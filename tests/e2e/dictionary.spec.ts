import { test, expect } from '@playwright/test';
import { readFile, readdir } from 'node:fs/promises';
import { cardSlug, meaningFields, type DictionaryCard } from '../../helpers/dictionary';
const directory=new URL('../../data/dictionary/ja/cards/',import.meta.url);
async function cards(): Promise<DictionaryCard[]> {return Promise.all((await readdir(directory)).filter(f=>f.endsWith('.json')).map(async f=>JSON.parse(await readFile(new URL(f,directory),'utf8'))));}

test('78 cards, classification, Japanese/English search, empty result and URL navigation',async({page})=>{
 await page.goto('/dictionary');const tiles=page.getByTestId('dictionary-card');await expect(tiles).toHaveCount(78);
 await page.getByRole('combobox',{name:'アルカナ',exact:true}).selectOption('major');await expect(tiles).toHaveCount(22);
 await page.getByRole('combobox',{name:'アルカナ',exact:true}).selectOption('minor');await expect(tiles).toHaveCount(56);
 for(const suit of ['wands','cups','swords','pentacles']){await page.getByRole('combobox',{name:'スート',exact:true}).selectOption(suit);await expect(tiles).toHaveCount(14);}
 await page.getByRole('button',{name:'条件をクリア'}).click();await page.getByRole('searchbox').fill('THE FOOL');await expect(tiles).toHaveCount(1);await expect(tiles).toContainText('愚者');
 await page.getByRole('searchbox').fill('カップの2');await expect(tiles).toHaveCount(1);await tiles.first().click();await expect(page.getByRole('heading',{name:'カップの2',exact:true})).toBeVisible();
 await page.getByRole('link',{name:'← 一覧へ戻る'}).click();await expect(page.getByRole('searchbox')).toHaveValue('カップの2');await expect(tiles).toHaveCount(1);
 await page.getByRole('searchbox').fill('存在しないカード');await expect(tiles).toHaveCount(0);await expect(page.getByText('該当するカードはありません。検索語や分類を変更してください。')).toBeVisible();
});

test('all 78 cards and 312 source/translation fields match canonical JSON',async({page})=>{
 test.setTimeout(180000);const records=(await cards()).sort((a,b)=>a.numeric_id-b.numeric_id);
 for(const card of records){
  await page.goto(`/dictionary/${cardSlug(card.card_id)}`);await expect(page.getByRole('heading',{name:card.name_ja,exact:true})).toBeVisible();
  for(const position of ['upright','reversed'] as const){
   await page.getByRole('tab',{name:position==='upright'?'正位置':'逆位置',exact:true}).click();
   for(const key of meaningFields.filter(k=>k===position||k===`additional_${position}`)){
    const en=page.getByTestId(`${key}-en`),ja=page.getByTestId(`${key}-ja`);
    if(card.source.fields[key].text_en===null)await expect(en).toHaveText('原文の記載なし／非該当（null）');else expect(await en.textContent()).toBe(card.source.fields[key].text_en);
    if(card.translation.fields[key].text_ja===null)await expect(ja).toHaveText('訳文なし／非該当（null）');else expect(await ja.textContent()).toBe(card.translation.fields[key].text_ja);
   }
   expect(await page.getByTestId(`candidate-${position}`).locator('> p').first().textContent()).toBe(card.interpretation[position].text_ja);
  }
  expect(await page.getByTestId('candidate-central').locator('> p').first().textContent()).toBe(card.interpretation.central.text_ja);
 }
});

test('source links, evidence anchors, null, unresolved and editorial boundaries remain visible',async({page})=>{
 await page.goto('/dictionary/00-fool');await expect(page.getByRole('link',{name:'固定版の原典レコード ↗'})).toHaveAttribute('href',/0dd250333976cf9d6dd6ce47fb7866ecd4b35749.*#L1$/);
 await expect(page.getByRole('heading',{name:'今回の要約候補（唯一の意味ではありません）'})).toBeVisible();
 await expect(page.getByRole('heading',{name:'原典にない編集上の補足・問いかけ'})).toBeVisible();
 await expect(page.getByText('未確認・解決記録なし（null）')).toHaveCount(2);
 await expect(page.getByText('未実施［not_performed］')).toHaveCount(2);await expect(page.getByText('未確認・保留［pending］')).toBeVisible();
 await expect(page.getByTestId('additional_upright-ja')).toContainText('非該当');
 await page.getByTestId('candidate-central').getByRole('link',{name:'reversed:0',exact:true}).click();
 await expect(page.getByRole('tab',{name:'逆位置',exact:true})).toHaveAttribute('aria-selected','true');await expect(page.locator('#unit-reversed-0')).toBeVisible();
 await page.getByText('正本JSONの全項目を見る',{exact:true}).click();await expect(page.locator('pre')).toContainText('bewrayment');
 await page.goto('/dictionary/cups--two-of-cups?position=reversed');await expect(page.getByTestId('reversed-en')).toHaveText('Passion.');await expect(page.getByTestId('meaning-reversed')).toContainText('§2 has no reversed line');await expect(page.getByTestId('additional_reversed-en')).toHaveText('Passion.');
 await page.goto('/dictionary/17-star');await expect(page.getByTestId('upright-ja')).toContainText('喪失');await expect(page.getByTestId('upright-ja')).toContainText('別の読み');await expect(page.getByTestId('upright-ja')).toContainText('希望');
 await page.goto('/dictionary/wands--ten-of-wands?position=reversed');await expect(page.getByTestId('additional_reversed-en')).toContainText('null');
});

test('mobile list and comparison stay within viewport; keyboard tabs and invalid ID work',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/dictionary');await expect(page.getByTestId('dictionary-card')).toHaveCount(78);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/dictionary/pentacles--five-of-pentacles');await expect(page.getByTestId('upright-ja')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.getByRole('tab',{name:'正位置',exact:true}).focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('tab',{name:'逆位置',exact:true})).toHaveAttribute('aria-selected','true');
 await page.goto('/dictionary/not-a-card');await expect(page.getByRole('heading',{name:'カードが見つかりません'})).toBeVisible();
 await page.goto('/');await expect(page.getByRole('link',{name:'辞典を読む'})).toBeVisible();
});

test('network and malformed or incomplete data show explicit errors and retry recovers',async({page})=>{
 let mode='network';const records=await cards();
 await page.route('**/_api/dictionary',async route=>{
  if(mode==='network')return route.abort();
  if(mode==='malformed')return route.fulfill({status:200,contentType:'application/json',body:'not json'});
  if(mode==='partial')return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({cards:records.slice(1)})});
  if(mode==='server')return route.fulfill({status:503,contentType:'application/json',body:JSON.stringify({error:'failed'})});
  return route.continue();
 });
 await page.goto('/dictionary');await expect(page.getByRole('alert')).toContainText('辞典データを読み込めませんでした');
 for(const next of ['malformed','partial','server']){mode=next;await page.getByRole('button',{name:'再読み込み'}).click();await expect(page.getByRole('alert')).toBeVisible();await expect(page.getByTestId('dictionary-card')).toHaveCount(0);}
 mode='normal';await page.getByRole('button',{name:'再読み込み'}).click();await expect(page.getByTestId('dictionary-card')).toHaveCount(78);
});
