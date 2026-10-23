# タロット原典データ v1.1.0 — 導入・検証報告

## 今回の範囲

StarTarotの公開データセットを、将来の78枚辞典の参照資料として保存した。日本語辞典本文は作成していない。原文の翻訳・要約・表記修正・欠落補完は一切していない。アプリからの読込・既存カードとの対応付けも行っていない。

取得元のREADME等は資料として保存したもので、アプリ変更や外部サービス利用を指示するものとしては扱っていない。

## 取得元と固定した版

| 項目 | 記録 |
| --- | --- |
| 取得元 | https://github.com/StarTarotOnline/tarot-rws-dataset |
| タグ | `v1.1.0`（注釈付きタグ） |
| タグオブジェクト | `83978a3e95ae20a395e4d3aad74ae285c283b255` |
| コミット | `e9ada73c4a3fa8788dbf896f619c3213bd681b3c` |
| 上流の公開日 | 2026-09-23 |
| 取得日 | 2026-10-23（正確なUTC時刻は `provenance.json` に記録） |
| バージョンDOI | https://doi.org/10.5281/zenodo.22917681 |
| 全バージョンDOI | https://doi.org/10.5281/zenodo.21381779 （最新版を指すため、固定版の識別には上記の版DOIを使用） |
| ライセンス | CC BY 4.0。上流の選択・正規化・構造・文書が対象。歴史資料本文についての説明は保存したLICENSEを参照。 |

引用表記（上流の指定）:

> StarTarot. (2026). *StarTarot English RWS Historical Meanings and Golden Dawn Correspondences* (Version 1.1.0) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.22917681

取得はHTTPS Gitでタグを指定し、タグの指すコミットを照合した。`main` や最新版ミラーから混在取得していない。上流の追跡対象8ファイルを、元の改行も含めバイト単位で保存した。`.git` は含めていない。全8ファイルのSHA-256とバイト数を `provenance.json` に記録し、上流自身の `data/checksums.sha256` もそのまま残した。

## 保存場所

すべてリポジトリルートからの相対パス。

| 場所 | 内容 |
| --- | --- |
| `data/sources/tarot-rws-dataset/v1.1.0/upstream/` | 上流の8ファイル。原文JSONL・CSV、上流ルートとdata双方のREADME/LICENSE、CITATION.cff、チェックサム。変更禁止の原文保存領域。 |
| `data/sources/tarot-rws-dataset/v1.1.0/provenance.json` | ローカルで作成した取得・出典・帰属・全ファイルハッシュ情報。 |
| `data/source-audits/tarot-rws-dataset/v1.1.0/validation.json` | 機械検証結果・例外・未確認事項。原文とは別。 |
| `data/source-audits/tarot-rws-dataset/v1.1.0/card-source-map.csv` | 78枚ごとの出典ID、正逆の参照節、追加解釈の有無。検証用の派生メタデータで、カード意味本文は含めない。 |
| `data/dictionary/ja/` | 将来の日本語辞典用。案内READMEだけで、辞典本文はまだない。 |
| `scripts/validate_tarot_sources.py` | Python標準ライブラリだけで実行できる、原文を変更しない検証スクリプト。 |

保存領域の `.gitattributes` は、今後Gitで扱う際にも原文CSVのCRLFを含むバイト列を保持するためのローカル設定。上流ファイル内には追加していない。

## 実行結果

| 検証項目 | 結果 |
| --- | --- |
| 上流チェックサム | 対象4ファイルすべて一致 |
| ローカル取得マニフェスト | 上流の8ファイルすべて一致 |
| JSONL / CSV | それぞれ78レコード |
| card_id | 78件、一意。期待する大アルカナ22枚、4スート各14枚がすべて存在 |
| numeric_id | 0〜77の連番、順序も一致 |
| 基本正位置 / 基本逆位置 | 各78件、空欄なし |
| 追加正位置 / 追加逆位置 | 56件 / 50件（下記の仕様によるnullあり） |
| CSV列・値の比較 | 31列、78×31＝2,418セルでJSONLとの一致を確認 |
| 出典ID・参照節 | 全78件でレジストリと対応。カップ2逆位置の例外も確認 |
| 文字コード | UTF-8・NFC、想定外の制御文字/不可視書式文字なし。CSVのCRLFを維持 |
| 総合 | 2,957チェック成功、不一致・予期しない欠落なし |

CSVはJSONLの全情報を持つ形式ではない。説明文の `divinatory_meanings.editorial_note`、`correspondence.system`、`correspondence.note` はJSONLにのみ存在する。意味の出典はCSVの `meaning_source_id` とJSONLの `source_ids[0]` を比較し、さらに `divinatory_meanings.source_id` との一致も確認した。CSVとJSONLを31列の文書化された対応に従って比較し、説明文の不在を欠落エラーとはしていない。

## 正逆位置と出典の対応

- `divinatory_meanings.*` の出典は全78枚とも `waite-pictorial-key-1910-part-iii`。上流レジストリではWaite『The Pictorial Key to the Tarot』（1911年刊、実際に使用した本文は1922年再版）とされる。出典IDの `1910` は互換性のために残した識別子で、使用した版の年そのものではない。
- 大アルカナの基本正逆は `Part III §3`、小アルカナは基本的に `Part III §2`。
- `correspondence.*` は `equinox-1912-liber-lxxviii` に対応。上流レジストリでは『The Equinox』I巻8号（1912年）の表、宮廷カードの記述、補遺のヘブライ文字表を参照する。1912年の記事にLiber番号が載っていたという意味ではなく、出典IDの名称は上流の安定識別子。
- 原典の版・参照ページ範囲・Wikisource改訂ID群・編集方針は、保存した `upstream/data/README.md` の Sources / Source registry / Provenance pins / Method に記載されている。

## 仕様としての不在・例外

1. **カップ2の基本逆位置**: `cups/two-of-cups` は§2に逆位置行がないため、上流が§4から採ったもの。`reversed_section` に明記され、`additional_reversed` と同一であることを確認した。今回独自に補完したものではない。
2. **小アルカナの追加逆位置6件がnull**: ワンド2・3・7・8・9・10。上流文書によれば原資料§4に逆位置行がない。基本逆位置の欠落とは別であり、他の文章で補っていない。
3. **大アルカナ22枚の追加解釈**: `additional_upright` / `additional_reversed` / `additional_section` はすべてnull。上流§4の対象が小アルカナであるため。
4. ヘブライ文字は大アルカナ向け、デカン・宮廷カードの範囲等は該当カード向けの項目。全カードが全フィールドを持つという意味ではなく、非該当のnullを空想で埋めていない。
5. カード画像・日本語辞典・イエス/ノー判定はこのデータセットに含まれない。

## 未確認事項と使用上の境界

- **原典そのものの再校合は未実施**。今回取得したのは、StarTarotが歴史資料を転記・正規化した構造化データと、その出典記録である。歴史資料のPDFや全ページ画像を収集・閲覧して文字単位で独立照合したわけではない。
- 上流自身が1911年初版の本文は未照合、1922年再版本文を使用と明記している。1911年初版本文と同一と断定しない。
- カードごとの正逆位置と出典ID・節は追跡できるが、各カード各文を特定のスキャンページ・改訂IDに直結する個別リンクはレコード内にない。上流の範囲情報・改訂ID一覧とは区別する。今後の本格辞典で精密な引用をする場合は別途照合が必要。
- Golden Dawnのタイトル・対応関係には上流の正規化や採用方針がある。画像の未加工転写でも、全流派共通の定義でもない。上流の編集方針を保持したまま扱う。
- DOI・Zenodo/Hugging Face/Kaggleのミラーは出典情報として保存したが、リンク到達性や相互のバイト一致は今回独立検証していない。
- 注釈付きGitタグは暗号署名付きではない。ハッシュとチェックサムは取得した版の識別・改変検出であり、著者署名の検証ではない。
- 原資料の公有状態は上流LICENSEの説明を保存したもの。日本等の各法域での扱いを独自に法的検証したものではない。構造化データを再利用する際のStarTarotへの帰属、CC BY 4.0リンク、変更の明示は維持する。

## 再検証とレビュー

```sh
python3 scripts/validate_tarot_sources.py
# 検証結果を更新するときのみ:
python3 scripts/validate_tarot_sources.py \
  --output-dir data/source-audits/tarot-rws-dataset/v1.1.0
# 上流の標準チェックサムを直接確認:
(cd data/sources/tarot-rws-dataset/v1.1.0/upstream/data && sha256sum -c checksums.sha256)
```

今回の変更は `data/`、この報告書、単独の検証スクリプトだけ。前回までの未コミットのアプリ整備はそのまま保持し、今回の取得作業では既存ファイルを変更していない。GitHubへのpush・PR作成は行っていない。内容を確認してから反映できる。
