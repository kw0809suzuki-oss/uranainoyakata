# タロット日本語辞典 v0.1｜3枚試作

状態：AI自己照合済みの試作。独立した人間の校閲と歴史資料画像との再校合は未実施。

英語の引用・翻訳・解釈を区別する。帰属・変更表示は [ATTRIBUTION.md](ATTRIBUTION.md)。正本は `cards/*.json`。

## 愚者 — The Fool

ID: `00-fool` / numeric_id: 0 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L1)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳

参照：`/divinatory_meanings/upright` / Part III §3

> Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.

愚行、狂気、浪費、酩酊、せん妄、狂乱、暴露。

### 逆位置｜原文と忠実訳

参照：`/divinatory_meanings/reversed` / Part III §3

> Negligence, absence, distribution, carelessness, apathy, nullity, vanity.

怠慢、不在、分配、不注意、無関心、無価値、虚栄。

### 追加正位置｜原文と忠実訳

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **mania / delirium / frenzy**（translation_choice）：狂気・せん妄・狂乱と訳し分けた。歴史的な列挙であり、現代の医学的診断との同一性を意味しない。
- `upright` / **extravagance**（unresolved）：浪費を暫定採用。行き過ぎ・突飛さの含意もあり、金銭だけに限定できない。
- `upright` / **bewrayment**（unresolved）：古語。暴露を暫定採用したが、裏切り・露呈などの語義選択は歴史的語法の追加確認が必要。原文の綴りは修正しない。
- `reversed` / **absence / distribution / nullity / vanity**（unresolved）：不在・分配・無価値・虚栄を暫定採用。不注意・散漫さへの一括言換えはしない。absenceの心の不在、nullityの無効、vanityの空虚さ等の可能性は未決着。

### 辞典としての独自解釈

**中心**：判断や振る舞いの行き過ぎと、注意・関与の不足。これは今回の語句群をまとめた編集上の中心であり、カードの普遍的定義ではない。

根拠語句ID：upright:0, upright:2, upright:3, upright:5, reversed:0, reversed:3, reversed:4, reversed:6。分類：`source_based_editorial`。

**正位置**：衝動や熱狂に押され、節度を失っている可能性を検討する。暴露の語は暫定訳のため断定的な読みには使わない。

根拠語句ID：upright:0, upright:2, upright:3, upright:5。分類：`source_based_editorial`。

**逆位置**：注意を向けないこと、関与の薄さ、見栄を検討する。distributionを直ちに散漫と読み替えない。

根拠語句ID：reversed:0, reversed:3, reversed:4, reversed:6。分類：`source_based_editorial`。

**原典にはない実用上の問い**：いま勢いに任せている点、確認を省いている点は何か、という問いに使える。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

evidence_unitsで指した原文語句から編集者が整理した読み。原文の翻訳でも、唯一の解釈でもない。applicationは原典にはない問いかけである。

「自由」「新しい旅立ち」「無限の可能性」は今回翻訳した意味欄にないため、翻訳にも原典由来の中心意味にも追加していない。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 魔術師 — The Magician

ID: `01-magician` / numeric_id: 1 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L2)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳

参照：`/divinatory_meanings/upright` / Part III §3

> Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.

技量、外交手腕、応対の巧みさ、巧妙さ；病気、苦痛、喪失、災難、敵の罠；自信、意志；相談者が男性であれば、その相談者。

### 逆位置｜原文と忠実訳

参照：`/divinatory_meanings/reversed` / Part III §3

> Physician, Magus, mental disease, disgrace, disquiet.

医師、魔術師、精神の病、不名誉、不安。

### 追加正位置｜原文と忠実訳

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **address / subtlety**（translation_choice）：addressは住所・演説ではなく応対の巧みさ、subtletyは巧妙さを採用。機転・器用さ・狡猾さなどの含意は文脈で変わり得る。
- `upright` / **the Querent, if male**（translation_choice）：原文の男性条件を省略せず訳した。あらゆる性別の相談者に拡張する場合は別の現代的編集となる。
- `reversed` / **Physician, Magus**（translation_choice）：医師・魔術師という人物を指す語を、そのまま保持。逆位置だから詐欺師・悪い医師という意味にはしていない。
- `reversed` / **mental disease / disquiet**（translation_choice）：精神の病・不安を採用。disquietには動揺・不穏もあり得る。歴史的語句を診断や特定疾患へ接続しない。

### 辞典としての独自解釈

**中心**：技量・自信・意志という働きと、苦痛・損失などの困難が併記される。肯定的な能力だけに絞らない編集上の要約。

根拠語句ID：upright:0, upright:1, upright:4, upright:6, upright:9, upright:10, reversed:0, reversed:1, reversed:3, reversed:4。分類：`source_based_editorial`。

**正位置**：技量や交渉力、自信を使う場面として読める一方、病気・苦痛・喪失・災難・敵の罠も原文にある。どの語群を採るかは問いと状況に依存し、成功を保証しない。

根拠語句ID：upright:0, upright:1, upright:4, upright:6, upright:9, upright:10。分類：`source_based_editorial`。

**逆位置**：不名誉や不安を検討できる。医師・魔術師という人物指示も残るため、すべてを能力不足・欺瞞という一義的な読みにはまとめない。

根拠語句ID：reversed:0, reversed:1, reversed:3, reversed:4。分類：`source_based_editorial`。

**原典にはない実用上の問い**：自分の技量を何に使っているか、自信と実際の準備が対応しているか、という問いに使える。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

evidence_unitsで指した原文語句から編集者が整理した読み。原文の翻訳でも、唯一の解釈でもない。applicationは原典にはない問いかけである。

「創造」「具現化」「逆位置は必ず詐欺・才能の浪費」といった定型句は今回の意味欄からは導入していない。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの2 — Two of Cups

ID: `cups/two-of-cups` / numeric_id: 37 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L38)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳

参照：`/divinatory_meanings/upright` / Part III §2

> Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and—as a suggestion apart from all offices of divination—that desire which is not in Nature, but by which Nature is sanctified.

愛、情熱、友情、親和性、結合、調和、共感、男女の相互関係、そして――占いのあらゆる営みとは別の示唆として――自然のうちにはないが、それによって自然が聖化される、あの欲望。

### 逆位置｜原文と忠実訳

参照：`/divinatory_meanings/reversed` / Part III §4 (additional meaning; §2 has no reversed line)

> Passion.

情熱。

### 追加正位置｜原文と忠実訳

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Favourable in things of pleasure and business, as well as love; also wealth and honour.

楽しみや仕事、そして愛においても好ましい。また、富と名誉。

### 追加逆位置｜原文と忠実訳

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Passion.

情熱。

### 翻訳上の曖昧さ・選択

- `upright` / **affinity / union / sympathy**（translation_choice）：親和性・結合・共感を採用。unionを結婚、sympathyを同情に限定しない。
- `upright` / **the interrelation of the sexes**（translation_choice）：男女の相互関係と訳した。原文の歴史的な性別表現を保持したもので、現代の関係の範囲を限定する編集方針ではない。
- `upright` / **that desire which is not in Nature, but by which Nature is sanctified**（unresolved）：欲望／自然／聖化という対比を保持。宗教的・哲学的な含意の確定は保留。「運命の恋」等へ置換しない。
- `reversed` / **Passion.**（unresolved）：情熱を暫定採用。激情・欲情・受苦などの語義のうち、ここで何を強調するかは単語一語からは確定しない。「不和」「別離」とは訳さない。
- `additional_upright` / **business / honour**（translation_choice）：仕事・名誉を採用。businessは事業・商売も含み得る。正位置の本欄と§4の追加欄は混ぜない。

### 辞典としての独自解釈

**中心**：愛・友情・共感など、人と人との親和や結びつき。逆位置も情熱という同じ語を含み、単純な反対語にはならない。

根拠語句ID：upright:0, upright:2, upright:4, upright:5, upright:6, additional_upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：愛情、友情、共感、調和を通じた結びつきを検討する。恋愛成立や結婚の確定にはしない。§4には楽しみ・仕事・愛に好ましく、富と名誉という追加の読みもある。

根拠語句ID：upright:0, upright:2, upright:4, upright:5, upright:6, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：情熱の強さや働き方を検討する。ただし原文はPassion.一語であり、それが健全か過剰か、関係が悪化するかはこの語だけでは決められない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：お互いが何を共有し、何を望んでいるかを確認する問いに使える。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

evidence_unitsで指した原文語句から編集者が整理した読み。原文の翻訳でも、唯一の解釈でもない。applicationは原典にはない問いかけである。

逆位置を「別離」「不和」「片思い」とする補完は行っていない。正位置の宗教的な末尾も削除せず翻訳に残した。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。
