# 占いの館｜タロット日本語辞典 v0.1

愚者・魔術師・カップの2の3枚だけを作成した試作。78枚への展開とアプリ組込みは行わない。

- [3枚の閲覧用本文](PREVIEW.md)
- [出典・帰属・変更表示](ATTRIBUTION.md)
- [検証報告と次工程の条件](REVIEW.md)
- `cards/*.json`：カード別の正本。
- `card.schema.json`：JSON Schema 2020-12。
- `render.py`：JSONから閲覧用Markdownを再生成する。
- `validate.py`：標準ライブラリで原文対応・語句漏れ・参照先・状態を検査する読取専用スクリプト。

## 形式の選択

JSONを正本にする。翻訳、原文参照、根拠語句、複数の曖昧語、未決着の事項を階層で保持でき、アプリでも利用できるため。CSVではこれらの一対多の関係とnullの意味が崩れやすい。Markdownだけでは機械検証が難しい。`PREVIEW.md`はJSONから生成した閲覧用の副本で、修正時はJSONと同期して再生成する。

## 構造と編集規約

| フィールド | 内容 |
| --- | --- |
| `source` | 上流版・コミット、ローカル固定コミット、card_id選択、JSONL行、フィールドのJSON Pointer、出典ID・節、英語引用とSHA-256。行番号だけで同定しない。 |
| `translation.fields` | 正位置・逆位置・追加正位置・追加逆位置を個別に保持。全文訳と語句単位の英日対照。 |
| `translation.ambiguities` | 語義の選択理由・未決着点。`unresolved`を採用済みと扱わない。 |
| `interpretation` | 原文語句を根拠とする編集上の要約・読みと、根拠を持たない独自の実用上の問いを分類。すべて翻訳と別。 |
| `verification` | データ照合、AI自己確認、人間の校閲、歴史資料再校合、公開状態を別々に保持。 |
| `unresolved` | 未確認の問い、状態、未解決ならnullの解決記録。 |
| `rights` | 帰属文書への参照、上流ライセンス、今回の変更、非推薦。 |

語句IDは`upright:0`等。英語引用は原典フィールドをそのまま保持し、語句分割だけは今回の編集。句読点は分割時に外れるため全文引用も保持する。訳文の文体調整や古語の多義性は注記し、都合のよい語だけ抜き取らない。

`null`は値の不在を保持する。`source.fields.*.availability`は`present` / `not_applicable` / `unknown`を区別し、推測で補完しない。現在の大アルカナ追加欄は`not_applicable`。未確認の印刷ページと未解決の解決記録もnull。

翻訳は`provisional` / `reviewed` / `not_applicable` / `pending`、独立校閲は`pending` / `complete`、歴史資料校合は`not_performed` / `complete`。今回は人間の校閲はpendingのまま。将来completeへ変更する際は確認者・対象・根拠を記録し、語義の未解決点を消さずに判断を追記する。

## 78枚への拡張

上流card_idをそのまま使い、ファイル名だけ`/`を`--`にする。`numeric_id`を独自採番しない。大／小アルカナ・スート・数値・宮廷rankを保持でき、同一スキーマで78枚を扱う。小アルカナの追加逆位置6件のnull等は上流に応じて`not_applicable`とする。データセットにない値は`unknown`等で保留する。今回は3枚だけを検証対象に固定し、全78枚の完成と誤認させない。

出典はStarTarotによる転記・正規化データ。今回、歴史資料の画像を直接照合したわけではない。`historical_page_exact`は未確認のままnull。出典ID中の1910を使用版の年と解釈しない。Golden Dawn対応は意味欄と別系統のため今回使用しない。

## 再検証

リポジトリルートから：

```sh
python3 scripts/validate_tarot_sources.py
python3 data/dictionary/ja/validate.py
# JSONを編集した後の閲覧用本文の再生成：
python3 data/dictionary/ja/render.py
# jsonschemaが利用できる環境ではスキーマも検査できる：
python3 -c 'import json,pathlib,jsonschema; p=pathlib.Path("data/dictionary/ja"); s=json.loads((p/"card.schema.json").read_text()); [jsonschema.Draft202012Validator(s).validate(json.loads(f.read_text())) for f in (p/"cards").glob("*.json")]'
```

機械検証は語義や占いの有効性を証明しない。本文と曖昧語の確認は[検証報告](REVIEW.md)を参照。
