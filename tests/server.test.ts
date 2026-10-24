import { test } from 'node:test';
import assert from 'node:assert/strict';
import { app } from '../app.server';

test('health and built application are served', async () => {
  assert.deepEqual(await (await app.request('/_health')).json(), { status: 'ok' });
  const r = await app.request('/');assert.equal(r.status,200);assert.match(await r.text(), /id="root"/);
});
test('unknown API returns 404 instead of the SPA and dev notes stay private', async () => {
  assert.equal((await app.request('/_api/missing')).status,404);
  assert.equal((await app.request('/__dev/system-prompt.md')).status,404);
});
test('legacy config is optional and external variables take precedence', async t => {
  const { mkdtempSync, copyFileSync, writeFileSync, rmSync } = await import('node:fs');
  const { tmpdir } = await import('node:os');
  const { join } = await import('node:path');
  const { spawnSync } = await import('node:child_process');
  const directory = mkdtempSync(join(tmpdir(), 'tarot-env-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  copyFileSync(new URL('../loadEnv.js', import.meta.url), join(directory, 'loadEnv.mjs'));
  const run = () => spawnSync(process.execPath, ['--input-type=module', '-e', "import './loadEnv.mjs'; console.log(process.env.PORT)"], { cwd: directory, env: { ...process.env, PORT: '44123' }, encoding: 'utf8' });
  const absent = run();assert.equal(absent.status, 0);assert.equal(absent.stdout.trim(), '44123');
  writeFileSync(join(directory, 'env.json'), JSON.stringify({ PORT: '1000' }));
  const existing = run();assert.equal(existing.status, 0);assert.equal(existing.stdout.trim(), '44123');
});
