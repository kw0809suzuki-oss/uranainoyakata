import './loadEnv.js';
import { serve } from '@hono/node-server';
import { app } from './app.server';

const port = Number(process.env.PORT || 3333);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be an integer between 1 and 65535');
const server = serve({ fetch: app.fetch, hostname: process.env.HOST || '0.0.0.0', port }, info => {
  console.log(`Tarot server listening on port ${info.port}`);
});
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.once(signal, () => {
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 5000).unref();
  });
}
