import { test, expect } from '@playwright/test';

test('draw ten distinct cards, inspect all positions, redraw and render on mobile', async ({ page }) => {
  const errors: string[] = [];page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');await expect(page.getByRole('heading', { name: '私だけのタロット' })).toBeVisible();
  await page.getByRole('button', { name: '10枚のカードを引く' }).click();
  const cards = page.locator('button[aria-label*="番 "]');await expect(cards).toHaveCount(10);
  const names = await cards.locator('b').allTextContents();expect(new Set(names).size).toBe(10);
  for (let i=0;i<10;i++) {await cards.nth(i).click(i === 0 ? { position: { x: 12, y: 8 } } : {});await expect(page.getByText(`第${i+1}の位置 ·`, { exact:false })).toBeVisible();await expect(cards.nth(i).locator('small')).toHaveText(/正位置|逆位置/);}
  await page.getByRole('button', { name: /もう一度10枚を引く/ }).click();await expect(cards).toHaveCount(10);
  expect(new Set(await cards.locator('b').allTextContents()).size).toBe(10);
  await page.setViewportSize({width:390,height:844});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});

test('all major arcana edits and world setting persist across reload', async ({ page }) => {
  await page.goto('/');await page.getByRole('button', { name:'◇ カードを作る' }).click();
  const deck = page.locator('button').filter({ hasText:'編集する' });await expect(deck).toHaveCount(22);
  await page.locator('input').first().fill('星と海の世界');
  await page.getByRole('button', { name:/00 愚者/ }).click();
  const fields = page.locator('input');await fields.nth(1).fill('自作の愚者');await fields.nth(2).fill('新しい旅');await fields.nth(3).fill('立ち止まる');await fields.nth(4).fill('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
  await page.getByRole('button', { name:'このカードを保存' }).click();await page.reload();
  await page.getByRole('button', { name:'◇ カードを作る' }).click();await expect(page.locator('input').first()).toHaveValue('星と海の世界');
  await page.getByRole('button', { name:/00 自作の愚者/ }).click();await expect(fields.nth(2)).toHaveValue('新しい旅');await expect(fields.nth(3)).toHaveValue('立ち止まる');await expect(fields.nth(4)).toHaveValue(/^data:image/);
  await page.getByRole('button',{name:'戻る',exact:true}).click();await expect(page.getByRole('button',{name:/00 自作の愚者/}).locator('img')).toBeVisible();
});

test('AI uses real app endpoint and compatible upstream HTTP contract', async ({ page }) => {
  await page.goto('/');await page.getByRole('button',{name:'10枚のカードを引く'}).click();
  await page.getByRole('button',{name:'AIで全体を読み解く'}).click();
  await expect(page.locator('article')).toContainText('全体像');
  const names=await page.locator('button[aria-label*="番 "] b').allTextContents();
  for(const name of names)await expect(page.locator('article')).toContainText(name);
});

test('AI credit shortage is visible and drawing remains usable', async ({ page }) => {
  await page.goto('/');await page.locator('input').first().fill('quota');await page.getByRole('button',{name:'10枚のカードを引く'}).click();
  await page.getByRole('button',{name:'AIで全体を読み解く'}).click();await expect(page.getByText('AIクレジットが不足しています')).toBeVisible();
  await page.getByRole('button',{name:/もう一度10枚を引く/}).click();await expect(page.locator('button[aria-label*="番 "]')).toHaveCount(10);
});
