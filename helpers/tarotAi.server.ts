import type { InputType } from "../endpoints/tarot-reading_POST.schema";

export const READING_INSTRUCTIONS = "タロット占い師として、ケルト十字法の10枚を位置に即して関係的に読み解く。流儀は1現状 2交差する力（横向きだが正逆は独立）3基盤/潜在 4過去 5意識的目標 6近い未来 7自分 8周囲 9願望/恐れ 10結末。単独のカード意味を10件列挙するのではなく、1×2の中心対立、3×5の潜在と意識、4→1→6の流れ、7×8の自分と周囲、5×10の望みと結末、9×10の期待と見通しを具体的なカード名を挙げて統合する。カードの正逆は与えられた値を厳守。質問の情報が足りなければ推測で個人事情を断定しない。必ず『全体像』『核心の交差』『水面下と意識』『過去から近い未来へ』『自分と周囲』『願望と結末』『問いに持ち帰ること』の見出しで、丁寧だが冗長にならない日本語1000〜1500文字程度。未来を予言・確定せず、象徴的な内省の補助として述べる。";

export class ReadingError extends Error {
  constructor(message: string, public status: number, public code: string) {
    super(message);
  }
}

// Keep Floot's original integration available without requiring its private SDK
// to install, import or start the independently hosted application.
async function flootReading(input: InputType): Promise<string> {
  const sdkName = '@floot/ai';
  let sdk;
  try {
    sdk = await import(/* @vite-ignore */ sdkName);
  } catch {
    throw new ReadingError('Floot AI SDKが利用できません。独立実行ではOpenAI互換APIを設定してください。', 503, 'AI_NOT_CONFIGURED');
  }
  try {
    const result = await sdk.flootAi.chat({
      model: process.env.TAROT_AI_MODEL || 'gpt-6-luna',
      reasoning: { effort: 'medium' }, instructions: READING_INSTRUCTIONS,
      input: JSON.stringify(input), max_output_tokens: 2200,
    });
    return (result.output_text || result.output?.filter((x: any) => x.type === 'message')
      .flatMap((x: any) => x.content || []).filter((x: any) => x.type === 'output_text')
      .map((x: any) => x.text).join('\n') || '').trim();
  } catch (error) {
    if (sdk.FlootAiOutOfCreditsError && error instanceof sdk.FlootAiOutOfCreditsError) {
      throw new ReadingError('AIクレジットが不足しています', 503, 'OUT_OF_CREDITS');
    }
    throw new ReadingError('Floot AIへの接続に失敗しました。時間をおいて再度お試しください。', 502, 'AI_UPSTREAM_ERROR');
  }
}

export async function generateReading(input: InputType): Promise<string> {
  const provider = process.env.TAROT_AI_PROVIDER || 'openai';
  if (provider === 'floot') return flootReading(input);
  if (provider !== 'openai') throw new ReadingError('AI接続方式の設定を確認してください。', 503, 'AI_NOT_CONFIGURED');
  const key = process.env.TAROT_AI_API_KEY;
  if (!key) throw new ReadingError('AI読み解きは未設定です。サーバーのTAROT_AI_API_KEYを設定してください。', 503, 'AI_NOT_CONFIGURED');
  let url: URL;
  try {
    url = new URL((process.env.TAROT_AI_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '') + '/chat/completions');
    if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname))) throw new Error();
    if (url.username || url.password) throw new Error();
  } catch {
    throw new ReadingError('AI接続先URLを確認してください。HTTPSが必要です。', 503, 'AI_NOT_CONFIGURED');
  }
  const configuredTimeout = Number(process.env.TAROT_AI_TIMEOUT_MS || 60000);
  const timeout = Number.isFinite(configuredTimeout) && configuredTimeout > 0 ? configuredTimeout : 60000;
  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST', redirect: 'error', signal: AbortSignal.timeout(timeout),
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({ model: process.env.TAROT_AI_MODEL || 'gpt-4.1-mini',
        messages: [{ role: 'system', content: READING_INSTRUCTIONS }, { role: 'user', content: JSON.stringify(input) }],
        max_completion_tokens: 2200 }),
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      if (data?.error?.code === 'insufficient_quota') throw new ReadingError('AIクレジットが不足しています', 503, 'OUT_OF_CREDITS');
      if (response.status === 401 || response.status === 403) throw new ReadingError('AIサービスの認証設定を確認してください。', 502, 'AI_AUTH_ERROR');
      if (response.status === 429) throw new ReadingError('AIサービスが混み合っています。時間をおいて再度お試しください。', 503, 'AI_RATE_LIMIT');
      throw new ReadingError('AIサービスへの接続に失敗しました。時間をおいて再度お試しください。', 502, 'AI_UPSTREAM_ERROR');
    }
    const content = data?.choices?.[0]?.message?.content;
    return typeof content === 'string' ? content.trim() : '';
  } catch (error) {
    if (error instanceof ReadingError) throw error;
    if (error instanceof Error && ['TimeoutError', 'AbortError'].includes(error.name)) throw new ReadingError('読み解きが時間内に完了しませんでした。もう一度お試しください。', 504, 'AI_TIMEOUT');
    throw new ReadingError('AIサービスへの接続に失敗しました。時間をおいて再度お試しください。', 502, 'AI_UPSTREAM_ERROR');
  }
}
