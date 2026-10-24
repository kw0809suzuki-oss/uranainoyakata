// Test fixture only. Production always calls the configured real AI service.
import { createServer } from 'node:http';
const server = createServer(async (req, res) => {
  let raw = '';for await (const chunk of req) raw += chunk;
  const body = JSON.parse(raw);
  const input = JSON.parse(body.messages[1].content);
  res.setHeader('Content-Type', 'application/json');
  if (input.question === 'quota') {res.writeHead(429);res.end(JSON.stringify({error:{code:'insufficient_quota'}}));return;}
  res.end(JSON.stringify({ choices: [{ message: { content: '全体像\n' + input.cards.map(c => c.name).join('、') + '\n問いに持ち帰ること\n検証用の読み解きです。' } }] }));
});
server.listen(44334, '127.0.0.1');
process.on('SIGTERM', () => server.close());
