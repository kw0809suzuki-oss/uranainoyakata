import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
import { fileURLToPath } from 'node:url';
import { handle } from './endpoints/tarot-reading_POST';
import superjson from 'superjson';
import { loadDictionary } from './helpers/dictionary.server';

const app = new Hono();
const root = fileURLToPath(new URL('.', import.meta.url));
app.get('/_health', c => c.json({ status: 'ok' }));
app.post('/_api/tarot-reading', c => handle(c.req.raw));
app.get('/_api/dictionary', async c => {
  c.header('Cache-Control', 'no-store');
  try { return c.json({ cards: await loadDictionary() }); }
  catch { return c.json({ error: '辞典データを読み込めませんでした。78枚の正本と原典の構造・対応を確認してください。' }, 503); }
});
app.all('/_api/*', () => new Response(superjson.stringify({ error: 'APIが見つかりません', code: 'NOT_FOUND' }), { status: 404, headers: { 'Content-Type': 'application/json' } }));
// Floot's development notes are source material, not public app assets.
app.all('/__dev/*', c => c.notFound());
app.use('/*', serveStatic({ root: `${root}static` }));
app.use('/*', serveStatic({ root: `${root}dist` }));
app.get('*', serveStatic({ path: `${root}dist/index.html` }));
export { app };
