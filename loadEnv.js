import fs from 'node:fs';

// env.json remains supported for Floot exports, but external environment
// variables (including .env loaded by the Node CLI) always take precedence.
const configFile = new URL('./env.json', import.meta.url);
if (fs.existsSync(configFile)) {
  const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
  for (const [key, value] of Object.entries(config)) {
    if (process.env[key] === undefined && typeof value === 'string') process.env[key] = value;
  }
}
