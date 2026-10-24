"""Regenerate PREVIEW.md from card JSON; changes only the reading view."""
import json
from pathlib import Path
out=Path(__file__).resolve().parent
md=['# タロット日本語辞典 v0.2｜78枚試作','', '状態：AI自己照合済みの試作。独立した人間の校閲と歴史資料画像との再校合は未実施。','', '要約候補は読みを尽くさない。原文の全文・別説・保留事項を併読する。','', '英語の引用・翻訳・解釈を区別する。帰属・変更表示は [ATTRIBUTION.md](ATTRIBUTION.md)。正本は `cards/*.json`。','']
for p in sorted((out/'cards').glob('*.json'), key=lambda f: json.loads(f.read_text())['numeric_id']):
 d=json.loads(p.read_text()); md += [f"## {d['name_ja']} — {d['name_en']}",'',f"ID: `{d['card_id']}` / numeric_id: {d['numeric_id']} / [固定原文]({d['source']['record_url']})",'',f"出典：{d['source']['bibliography']} / `{d['source']['source_id']}`。カード固有の印刷ページは未確認。",'']
 for field,label in [('upright','正位置'),('reversed','逆位置'),('additional_upright','追加正位置'),('additional_reversed','追加逆位置')]:
  f=d['source']['fields'][field]; t=d['translation']['fields'][field]
  md += [f'### {label}｜原文と忠実訳（暫定）','',f"参照：`{f['json_pointer']}` / {f['section'] or '非該当'}",'']
  if f['text_en'] is None: md+=['原文はnull（非該当）。翻訳もnull。','']; continue
  md += ['> '+f['text_en'],'',t['text_ja'],'']
 md+=['### 翻訳上の曖昧さ・選択','']
 for n in d['translation']['ambiguities']:md += [f"- `{n['field']}` / **{n['term_en']}**（{n['status']}）：{n['note_ja']}"]
 md+=['','### 辞典としての独自解釈（候補）','']
 for key,label in [('central','今回の要約候補'),('upright','正位置'),('reversed','逆位置'),('application','原典にはない実用上の問い')]:
  it=d['interpretation'][key];md += [f"**{label}**：{it['text_ja']}",'',f"根拠語句ID：{', '.join(it['evidence_units']) or 'なし（独自の利用提案）'}。分類：`{it['kind']}`。",'']
 md += [d['interpretation']['rationale_ja'],'',d['interpretation']['supplement_boundary'],'','### 未確認事項','', '- 歴史資料画像との独立再校合、個別の印刷ページの特定。','- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。','']
(out/'PREVIEW.md').write_text('\n'.join(md))

index=['# タロット日本語辞典 v0.2｜78枚索引','','原文・翻訳・解釈を別層で保持した試作。全カードがAI自己確認のみ、人間の校閲は未実施。要約は今回の候補であり、解釈の全体を尽くさない。','','[本文を読む](PREVIEW.md) · [形式と編集方針](README.md) · [検証結果](REVIEW.md)','','| 数値ID | カード | card_id | 未解決の語義注記数 |','| --- | --- | --- | --- |']
for f in sorted((out/'cards').glob('*.json'),key=lambda f:json.loads(f.read_text())['numeric_id']):
 d=json.loads(f.read_text());n=sum(a['status']=='unresolved' for a in d['translation']['ambiguities'])
 index.append(f"| {d['numeric_id']} | [{d['name_ja']}](cards/{f.name}) | `{d['card_id']}` | {n} |")
index+=['','注記数が0でも語義や翻訳が確定したことを意味しない。全訳文は暫定。数値IDは上流の0〜77を継承する。','']
(out/'INDEX.md').write_text('\n'.join(index))
