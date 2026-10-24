# 占いの館 — 私のタロット / Celtic Cross

Floot製「私のタロット — Celtic Cross」を、React / Vite / Honoで独立実行するリポジトリです。元の画面・カード定義・解釈・保存形式を維持しています。原本の説明は [docs/README.floot.md](docs/README.floot.md)、調査と移植範囲は [docs/migration.md](docs/migration.md) を参照してください。

## できること

- 78枚（大アルカナ22枚・小アルカナ56枚）から重複なしで10枚を抽選し、正位置・逆位置を表示。
- ケルト十字の10位置を選択して、各カードの意味と他の位置との関係を確認。
- 質問を添え、10枚全体を統合したAI読み解きを表示。
- 大アルカナの名前・正逆の意味・画像URLを一枚ずつ編集。世界観と編集内容をブラウザのlocalStorageに保存。
- 独立した日本語辞典の閲覧：78枚一覧、日英検索、分類、正逆切替、原典・暫定訳・解釈候補・未解決事項の比較。
- モバイル対応。世界観によるAI画像生成は原本と同じく未実装で、画面にも明示しています。

## 必要な環境

Node.js 22.9以上（検証: 24.19.0）、pnpm 11.25.0。必要なら `npm install -g pnpm@11.25.0` で導入してください。DB、Flootのアカウント、認証サーバーは通常機能には不要です。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

`dev` はViteの画面とHonoのAPIを同時起動します。Viteの `/_api` リクエストをHonoへ転送します。APIは既定3333番、画面はViteの既定5173番です。個別に動かす場合は `pnpm dev:server` と `pnpm dev:client` をそれぞれ実行してください。開発画面を編集するとHMRが反映されます。

本番ビルドと起動:

```sh
pnpm build
pnpm start
```

`start` は3333番で `dist`、公開アセット、AI APIを配信します。`GET /_health` が `{"status":"ok"}`、`GET /` がアプリのHTMLを返します。ビルドを先に実行してください。停止はCtrl+Cです。

## 日本語辞典の閲覧

占い画面の「辞典を読む」または `/dictionary` から一覧へ進めます。詳細の例は `/dictionary/00-fool` と `/dictionary/cups--two-of-cups?position=reversed`。検索・分類はURLに保存されます。

`data/dictionary/ja/cards/*.json` の78枚を正本とし、読取専用APIが原典との対応も確認して返します。原文・暫定訳・要約候補・解釈候補・未解決事項を分けて表示し、不在や未校閲を補完しません。辞典は占い用の意味データとは独立しています。詳しくは [閲覧機能の検証報告](docs/data/dictionary-viewer-v0.1.md) を参照してください。

本番配備には `dist` だけでなくサーバーコード・依存関係・`data/` の辞典と原典が必要です。静的ホスティングだけではAI APIと辞典APIは動きません。

## AI読み解きの接続

通常の抽選・編集はAI設定なしで利用できます。AI読み解きは本物のサービスの設定が必要です。未設定時は説明付き503を返し、画面に表示します。ダミーの占い結果は返しません。

```sh
cp .env.example .env
```

`.env` の `TAROT_AI_API_KEY` に自分のキーを設定してください。キーはチャットやGitに貼らず、ホスティング環境では安全な環境変数管理を使用してください。

| 変数 | 既定値・役割 |
| --- | --- |
| `TAROT_AI_PROVIDER` | `openai`。OpenAI互換Chat Completions API。 |
| `TAROT_AI_API_KEY` | サーバー専用キー。AI実行時に必要。 |
| `TAROT_AI_BASE_URL` | `https://api.openai.com/v1`。互換APIではそのサービスのベースURL。HTTPS必須、ローカル検証のみloopback HTTP可。 |
| `TAROT_AI_MODEL` | `gpt-4.1-mini`。契約先で利用可能なChat Completions対応モデルを指定。 |
| `TAROT_AI_TIMEOUT_MS` | `60000`。OpenAI互換APIのタイムアウト。 |
| `PORT` / `HOST` | `3333` / `0.0.0.0`。API・本番サーバーの待受。 |

APIはBearer認証、`messages`、`max_completion_tokens`、`choices[0].message.content` に対応するサービスを想定しています。元の日本語指示、位置間の関係、カード名、正逆、質問を維持しています。モデル変更で文章自体は変わります。

Floot SDKを正規に利用できる環境は `TAROT_AI_PROVIDER=floot` を指定できます。元の `flootAi.chat` とクレジット不足の扱いを残しています。この経路は非公開の `@floot/ai` とFloot側の実行環境が必要で、公開npmだけでは導入できません。Flootモードの既定モデルは原本の `gpt-6-luna` です。

`.env` はdev/startで読み込みます。従来の `env.json` も任意で読み込み、外部から設定した変数を優先します。`.env` と `env.json` はGit対象外です。`VITE_` 接頭辞で秘密を定義しないでください。既存のenv.jsonを使う場合でも、devのポート指定は `.env` またはシェル環境で統一してください。

公開リポジトリにしてもサービスが自動公開されることはありません。インターネットにアプリを公開する前に、ホスト側でアクセス制限やリクエスト制限を設けてください。この移植では元アプリ同様にユーザー認証を追加していません。

## 検証

```sh
python3 scripts/validate_tarot_sources.py
python3 data/dictionary/ja/validate.py
pnpm build
pnpm test
pnpm exec playwright install chromium
pnpm test:e2e
```

- `test`: API・HTTP通信・設定・配信をNodeテストランナーで、既存ヘルパーをVitest/jsdomで検証。
- `test:e2e`: 別ポートでアプリとローカルAIテストサーバーを起動し、Chromiumで辞典78枚×4欄の対応・検索分類・null・取得エラー、抽選・位置選択・再抽選・カード/世界観保存・モバイル表示・AI成功/クレジット不足を検証。実モデルの課金や呼び出しはしません。
- 既存のシステムChromiumを自動検出します。別の実行ファイルは `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` で指定できます。
- `.github/workflows/ci.yml` が同じインストール・ビルド・テストを実行します。

## Codexクラウド環境

この環境では既存の独立した `/workspace/uranainoyakata` を使用します。明示的な依頼がない限りGit worktreeを増やす必要はありません。ホーム領域への書き込みが制限される場合は、実行前に次を設定してください。

```sh
export XDG_DATA_HOME=/workspace/.local/share
export XDG_CACHE_HOME=/workspace/.cache
export npm_config_cache=/workspace/.npm-cache
pnpm install --store-dir /workspace/.pnpm-store --frozen-lockfile
```

標準のVite設定だけでビルドでき、`/workspace/setup-tools` 等の外部補助ファイルには依存しません。
