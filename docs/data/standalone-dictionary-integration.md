# 独立起動環境と辞典閲覧機能の統合

## 基準と依存関係

確認時のGitHub mainは `ed9ee30232b20310888eb41d579ce38b0b6a741d`。原典データと日本語辞典78枚は登録済みだが、package.json、lockfile、HTML/React入口、Vite設定、独立サーバーは未登録だった。

辞典閲覧機能だけを反映しても起動できないため、前回の独立起動環境と一緒に反映する。React入口→App→占い/辞典ルート、Vite→画面ビルド、Hono→本番HTML/辞典API/AI APIという依存関係。開発時はViteからHonoへAPIを転送する。辞典APIはdata以下の正本JSONと原典JSONLを読む。生成した意味データの副本には依存しない。

AIはサーバー専用アダプターで元の日本語指示を維持。公開npmにないFloot SDKは明示選択時だけ読み込み、標準では設定したOpenAI互換APIへ接続する。AI設定がなくてもカード抽選・編集・辞典は利用できる。実サービスの認証・応答品質は未検証で、ローカルHTTPフィクスチャと通信経路の検証を区別する。

## 反映対象

- 実行環境: package.json/lockfile/pnpm方針/Node設定、HTML/React入口、Vite設定、Hono配信、開発同時起動、任意の環境変数読込、空欄の.env.example、生成物/秘密の除外設定。
- 既存占いの維持: 78枚・意味文・正逆・抽選・ケルト十字・編集・localStorageキー/形式を保持。変更は辞典へのリンク、モバイル幅の修正、AI移植とエラー表示/入力検証。元のFloot経路も保持。
- 辞典: 読取専用API、一覧/検索/分類/詳細、原典と暫定訳の全文比較、根拠・要約候補・未解決・null・校閲状態の表示。
- 検証と説明: API/ヘルパー/Chromiumテスト、原典と辞典の既存検証器を実行するCI、READMEと移植/閲覧報告。

原典・日本語辞典・既存検証器に変更は加えない。既存データの検証結果JSONも再生成して上書きしない。依存宣言/lockfileは凍結インストールで照合する。

## 除外するローカルファイル

- `global.css`: テーマ定義がbase.cssと重複し、参照されていない。
- `static/__dev/scheduled-jobs.json`: 空で、実行経路から参照されていない。
- `docs/superpowers/`: 内部の作業手順・設計メモ。利用・保守に必要な説明はREADMEと検証報告に記載する。
- node_modules、dist、.env、env.json、ログ、ブラウザ検証出力: 生成物またはローカル設定。秘密の値は反映しない。

これらは既存のローカル作業として残し、無関係な削除やコミットをしない。

## 検証方法と境界

ステージした反映対象のファイルだけを別ディレクトリへ展開し、既存node_modules、dist、env.jsonやリポジトリ外の補助コードがなくても導入・ビルド・テストできることを確認する。実行するコマンドは以下。

```sh
pnpm install --frozen-lockfile
python3 scripts/validate_tarot_sources.py
python3 data/dictionary/ja/validate.py
pnpm build
pnpm test
pnpm test:e2e
```

反映対象41ファイルだけをステージから展開した別ディレクトリ（既存node_modules・dist・env.jsonなし）で、固定lockfileから436パッケージを再導入し、本番ビルドに成功した。原典2,957チェック、辞典36,248チェック、API等18件・ヘルパー15件・ブラウザ9件はすべて成功、スキップなし。ブラウザ検証には全78枚×4欄の英日比較と既存占いの抽選・編集保存・AI通信を含む。

最終レビューで反映を妨げる問題なし。原典・辞典等のdata以下102ファイルと既存検証器は基準mainから変更なし。

実AI/Flootの接続、翻訳の人間校閲、歴史資料ページの独立照合、全TypeScript型検査、全ブラウザ/実機は今回も未検証。既存ライブラリのpeer/非推奨警告は移植報告に記録した。ローカルで成功した検証と、push後のGitHub Actionsの実行結果は区別する。
