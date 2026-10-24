import { defineConfig } from '@playwright/test';
import { existsSync } from 'node:fs';
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);
export default defineConfig({
  testDir: './tests/e2e', workers: 1, fullyParallel: false,
  use: { baseURL: 'http://127.0.0.1:44333', launchOptions: { executablePath }, trace: 'retain-on-failure' },
  webServer: [
    { command: 'node tests/fixtures/ai-provider.mjs', port: 44334, reuseExistingServer: false },
    { command: 'node_modules/.bin/tsx server.ts', url: 'http://127.0.0.1:44333/_health', reuseExistingServer: false,
      env: { PORT: '44333', HOST: '127.0.0.1', TAROT_AI_PROVIDER: 'openai', TAROT_AI_API_KEY: 'test-only-key', TAROT_AI_BASE_URL: 'http://127.0.0.1:44334/v1', TAROT_AI_MODEL: 'test-model' } },
  ],
});
