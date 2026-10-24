import { schema, type OutputType } from './tarot-reading_POST.schema';
import { generateReading, ReadingError } from '../helpers/tarotAi.server';
import superjson from 'superjson';

function json(value: unknown, status = 200) {
  return new Response(superjson.stringify(value), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}

export async function handle(request: Request): Promise<Response> {
  let input;
  try {
    input = schema.parse(superjson.parse(await request.text()));
  } catch {
    return json({ error: '質問と10枚のカードの入力を確認してください。', code: 'INVALID_INPUT' }, 400);
  }
  try {
    const reading = await generateReading(input);
    if (!reading) return json({ error: '読み解きが空でした', code: 'AI_EMPTY_RESPONSE' }, 502);
    return json({ reading } satisfies OutputType);
  } catch (error) {
    if (error instanceof ReadingError) return json({ error: error.message, code: error.code }, error.status);
    return json({ error: '読み解きに失敗しました。もう一度お試しください。', code: 'AI_INTERNAL_ERROR' }, 500);
  }
}
