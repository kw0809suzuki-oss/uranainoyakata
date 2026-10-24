# タロット日本語辞典 v0.2｜78枚試作

状態：AI自己照合済みの試作。独立した人間の校閲と歴史資料画像との再校合は未実施。

要約候補は読みを尽くさない。原文の全文・別説・保留事項を併読する。

英語の引用・翻訳・解釈を区別する。帰属・変更表示は [ATTRIBUTION.md](ATTRIBUTION.md)。正本は `cards/*.json`。

## 愚者 — The Fool

ID: `00-fool` / numeric_id: 0 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L1)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.

愚行、狂気、浪費、酩酊、せん妄、狂乱、暴露。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Negligence, absence, distribution, carelessness, apathy, nullity, vanity.

怠慢、不在、分配、不注意、無関心、無価値、虚栄。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **mania / delirium / frenzy**（translation_choice）：狂気・せん妄・狂乱と訳し分けた。歴史的な列挙であり、現代の医学的診断との同一性を意味しない。
- `upright` / **extravagance**（unresolved）：浪費を暫定採用。行き過ぎ・突飛さの含意もあり、金銭だけに限定できない。
- `upright` / **bewrayment**（unresolved）：古語。暴露を暫定採用したが、裏切り・露呈などの語義選択は歴史的語法の追加確認が必要。原文の綴りは修正しない。
- `reversed` / **absence / distribution / nullity / vanity**（unresolved）：不在・分配・無価値・虚栄を暫定採用。不注意・散漫さへの一括言換えはしない。absenceの心の不在、nullityの無効、vanityの空虚さ等の可能性は未決着。

### 辞典としての独自解釈（候補）

**今回の要約候補**：判断や振る舞いの行き過ぎと、注意・関与の不足。これは今回の語句群をまとめた編集上の中心であり、カードの普遍的定義ではない。

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

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.

技量、外交手腕、応対の巧みさ、巧妙さ；病気、苦痛、喪失、災難、敵の罠；自信、意志；相談者が男性であれば、その相談者。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Physician, Magus, mental disease, disgrace, disquiet.

医師、魔術師、精神の病、不名誉、不安。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **address / subtlety**（translation_choice）：addressは住所・演説ではなく応対の巧みさ、subtletyは巧妙さを採用。機転・器用さ・狡猾さなどの含意は文脈で変わり得る。
- `upright` / **the Querent, if male**（translation_choice）：原文の男性条件を省略せず訳した。あらゆる性別の相談者に拡張する場合は別の現代的編集となる。
- `reversed` / **Physician, Magus**（translation_choice）：医師・魔術師という人物を指す語を、そのまま保持。逆位置だから詐欺師・悪い医師という意味にはしていない。
- `reversed` / **mental disease / disquiet**（translation_choice）：精神の病・不安を採用。disquietには動揺・不穏もあり得る。歴史的語句を診断や特定疾患へ接続しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：技量・自信・意志という働きと、苦痛・損失などの困難が併記される。肯定的な能力だけに絞らない編集上の要約。

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

## 女教皇 — The High Priestess

ID: `02-high-priestess` / numeric_id: 2 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L3)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.

秘密、神秘、まだ明かされていない未来；相談者が男性なら、その関心を引く女性；相談者が女性なら、その相談者自身；沈黙、粘り強さ；神秘、知恵、学知。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Passion, moral or physical ardour, conceit, surface knowledge.

情熱、精神的または肉体的な熱意、うぬぼれ、表面的な知識。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `upright` / **science / tenacity**（unresolved）：学知・粘り強さを暫定採用。scienceを現代の自然科学だけに限定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：秘められた事柄と知恵、表面的な理解と熱意という複数の方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：未公開の事柄や知る過程を読む候補。人物を指す条件もあり、神秘だけにまとめない。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：熱意やうぬぼれ、知識の表面性を読む候補。情熱そのものを悪と決めない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 女帝 — The Empress

ID: `03-empress` / numeric_id: 3 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L4)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.

実り豊かさ、行動、率先、長寿；未知のもの、秘密裏のもの；また困難、疑い、無知。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.

光、真実、複雑な事柄の解明、公の歓喜；別の読みによれば、動揺。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `reversed` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `upright` / **length of days / clandestine**（unresolved）：長寿・秘密裏のものと訳した。clandestineは対象を省略した語句なので、秘密の恋愛等を補完しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：実りや行動と、未知・困難が併記される。逆位置には解明と動揺という別の読み。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：実りや率先を読む候補と、疑い・困難を読む候補を併置する。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：明るみに出ることと、別説としての揺れを分けて読む候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 皇帝 — The Emperor

ID: `04-emperor` / numeric_id: 4 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L5)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.

安定、力、保護、実現；偉大な人物；援助、理性、確信；また権威と意志。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.

慈善、思いやり、信用；また敵を混乱させること、妨害、未熟さ。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `reversed` / **credit**（unresolved）：信用を暫定採用。信望・名声等の含意もあり、金銭的信用だけには限定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：安定・力・保護と、それを担う人物。逆位置にも慈善や信用がある。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：保護や実現を支える権威・意志を読む候補。人物指示も残す。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：思いやりや信用という読みと、妨害・未熟さという読みを併置する。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 教皇 — The Hierophant

ID: `05-hierophant` / numeric_id: 5 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L6)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.

結婚、同盟、囚われ、隷属；別説では、慈悲と善良さ；霊感；相談者が頼る男性。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Society, good understanding, concord, over-kindness, weakness.

交際、良好な理解、和合、過度の親切、弱さ。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `reversed` / **Society / over-kindness**（unresolved）：交際・過度の親切を暫定採用。societyは社会・社交・集団等もあり得る。上流が保持するover-kindnessの綴りを独自修正しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：結びつきと拘束、慈悲と依存先という異なる方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：結婚や同盟のつながりと、囚われや隷属の制約を同じものとせず読む候補。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：理解・和合と、過度の親切や弱さの両方を読む候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 恋人たち — The Lovers

ID: `06-lovers` / numeric_id: 6 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L7)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Attraction, love, beauty, trials overcome.

魅力、愛、美、乗り越えられた試練。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.

失敗、愚かな企て。別説は、妨げられた結婚と、あらゆる種類の不都合について述べる。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `reversed` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：惹かれ合うことと試練、企てや結婚が妨げられること。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：愛や美と、試練を乗り越えた状態を読む候補。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：失敗や企ての無理、別説として結婚への障害を読む候補。別離へ一律変換しない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 戦車 — The Chariot

ID: `07-chariot` / numeric_id: 7 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L8)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Succour, providence; also war, triumph, presumption, vengeance, trouble.

救援、摂理；また戦争、勝利、思い上がり、復讐、苦難。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Riot, quarrel, dispute, litigation, defeat.

暴動、口論、争い、訴訟、敗北。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **providence / presumption**（unresolved）：摂理・思い上がりを暫定採用。providenceには先見・備え、presumptionには推定等の幅もあり、文脈上の確定は保留。

### 辞典としての独自解釈（候補）

**今回の要約候補**：救援や勝利と、争い・思い上がりが同居する。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：勝つことだけでなく、争いの動機や救援の方向も読む候補。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：口論・争い・敗北の方向を読む候補。出来事の予告として固定しない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 力 — Strength

ID: `08-strength` / numeric_id: 8 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L9)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Power, energy, action, courage, magnanimity; also complete success and honours.

力、活力、行動、勇気、寛大さ；また完全な成功と栄誉。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Despotism, abuse of power, weakness, discord, sometimes even disgrace.

専制、力の乱用、弱さ、不和、ときには不名誉さえ。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **列挙語の訳語選択**（translation_choice）：語句の列挙を保持した暫定訳。独立した人間の校閲と同時代の語法の確認は未実施。明示した曖昧語がないことは語義の確定を意味しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：力や勇気の発揮と、その乱用・弱さという方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：勇気や寛大さを伴う力の発揮を読む候補。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：強さの乱用と弱さの両方を読む候補。単なる力不足にまとめない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 隠者 — The Hermit

ID: `09-hermit` / numeric_id: 9 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L10)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.

慎重さ、用心深さ；また、とりわけ裏切り、偽装、悪事、腐敗。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Concealment, disguise, policy, fear, unreasoned caution.

隠蔽、変装、策略、恐れ、理由のない用心。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `reversed` / **policy**（unresolved）：策略を暫定採用。方策・処世・慎重な対処等の含意もあり、悪意に限定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：慎重さと隠す働き、さらに裏切り・腐敗という方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：慎重さに加えて、とりわけと強調された否定的な語群も読む候補。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：隠蔽・策略・恐れを読む候補。孤独な内省だけには限定しない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 運命の輪 — Wheel of Fortune

ID: `10-wheel` / numeric_id: 10 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L11)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Destiny, fortune, success, elevation, luck, felicity.

運命、幸運、成功、地位の上昇、運、幸福。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Increase, abundance, superfluity.

増大、豊富、過剰。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：運や成功と、増大・豊富さから過剰までの広がり。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：幸運や上昇を読む候補。周期や転機はこの意味欄から自動追加しない。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：増えること、豊かさ、余剰を読む候補。逆位置だから不運とはしない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 正義 — Justice

ID: `11-justice` / numeric_id: 11 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L12)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Equity, rightness, probity, executive; triumph of the deserving side in law.

公平、正しさ、誠実さ、執行；法における、勝利に値する側の勝利。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Law in all its departments, legal complications, bigotry, bias, excessive severity.

法律のあらゆる部門、法的な紛糾、偏狭さ、偏り、過度の厳格さ。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **executive**（unresolved）：執行を暫定採用。執行力・執行を担う人物等、原文の名詞的な列挙の解釈は保留。

### 辞典としての独自解釈（候補）

**今回の要約候補**：公平と法・執行、偏りや過度の厳しさという方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：公平さや判断の正しさを読む候補。法廷での勝利を現実の保証にはしない。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：法的な複雑さ、偏り、厳格さを読む候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 吊るされた男 — The Hanged Man

ID: `12-hanged-man` / numeric_id: 12 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L13)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.

知恵、用心深さ、識別、試練、犠牲、直観、占い、予言。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Selfishness, the crowd, body politic.

利己心、群衆、政治共同体。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **列挙語の訳語選択**（translation_choice）：語句の列挙を保持した暫定訳。独立した人間の校閲と同時代の語法の確認は未実施。明示した曖昧語がないことは語義の確定を意味しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：知恵・識別・犠牲と、利己心や集団という異なる焦点。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：試練や犠牲に伴う知恵・識別を読む候補。自己犠牲を求める命令にはしない。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：個人の利己心と群衆・共同体を分けて読む候補。集団を悪と決めない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 死神 — Death

ID: `13-death` / numeric_id: 13 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L14)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> End, mortality, destruction, corruption; also, for a man, the loss of a benefactor; for a woman, many contrarieties; for a maid, failure of marriage projects.

終わり、死、破壊、腐敗；また男性には恩人を失うこと、女性には多くの不都合、未婚の女性には結婚計画の失敗。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.

不活発、眠り、無気力、石化、夢遊；打ち砕かれた希望。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `upright` / **mortality / maid**（unresolved）：死・未婚の女性を暫定採用。mortalityは死すべき性質等も、maidは少女等も含み得る。人物条件を現代の適用規則へ拡張しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：終わりや破壊と、動きの停止・希望の喪失という方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：終わりや失うことを読む候補。原文の人物条件を保持するが、個人の死や結婚の失敗を予告する運用へは移さない。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：停滞や希望の失われた感覚を読む候補。眠り等の歴史的表現を診断にしない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 節制 — Temperance

ID: `14-temperance` / numeric_id: 14 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L15)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Economy, moderation, frugality, management, accommodation.

節約、節度、倹約、管理、調整。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.

教会、宗教、宗派、聖職者に関する事柄、ときには相談者の結婚式を執り行う聖職者さえ；また不和、不幸な組み合わせ、競合する利害。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **Economy / accommodation**（unresolved）：節約・調整を暫定採用。管理運営・融通・適応等の可能性もあり、家計だけに絞らない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：節度や調整と、宗教的な事柄・利害の不一致という方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：資源や行動を調整する読みの候補。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：宗教・聖職者への指示と、不和・利害競合を分けて読む候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 悪魔 — The Devil

ID: `15-devil` / numeric_id: 15 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L16)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.

荒廃、暴力、激しさ、並外れた努力、力、宿命；あらかじめ定められているが、そのために悪であるわけではないもの。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Evil fatality, weakness, pettiness, blindness.

悪しき宿命、弱さ、卑小さ、盲目。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **fatality**（unresolved）：宿命を暫定採用。不可避性・災難・死に関わる含意の選択は文脈の再確認が必要。現実の不可避な結果を意味するとは判定しない。
- `reversed` / **fatality**（unresolved）：宿命を暫定採用。不可避性・災難・死に関わる含意の選択は文脈の再確認が必要。現実の不可避な結果を意味するとは判定しない。
- `reversed` / **blindness**（unresolved）：盲目は原文の比喩・字義の選択を保留した訳。視覚障害を道徳的欠陥とする適用は原典の翻訳とは別であり行わない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：激しい力や宿命。正位置の宿命は、それだけで悪とはされていない。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：激しさ・努力・力を読む候補と、破壊的な働きを読む候補を併置する。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：弱さや見えなさ、悪しき宿命という歴史的な読みを扱う候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 塔 — The Tower

ID: `16-tower` / numeric_id: 16 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L17)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.

悲惨、苦悩、貧困、逆境、災厄、不名誉、欺き、破滅。とりわけ予期しない大災難のカードである。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> According to one account, the same in a lesser degree; also oppression, imprisonment, tyranny.

ある説によれば、同じ意味が程度を弱めて現れる；また圧迫、投獄、暴政。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `reversed` / **前の記述への参照・程度の限定**（translation_choice）：この欄は正位置等の前の記述を参照している。単独の語だけでは足りないため、前の欄と比較・限定を併読する。

### 辞典としての独自解釈（候補）

**今回の要約候補**：不意の崩壊や苦難と、圧迫・拘束という方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：予期しない崩壊や困難を読む候補。現実の災害発生の断定には使わない。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：正位置より弱い程度という説と、拘束・暴政という別の語群を残す候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 星 — The Star

ID: `17-star` / numeric_id: 17 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L18)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Loss, theft, privation, abandonment; another reading says—hope and bright prospects,

喪失、盗難、欠乏、見捨てられること；別の読みでは――希望と明るい見通し、

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Arrogance, haughtiness, impotence.

傲慢、高慢、無力。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `upright` / **bright prospects,**（unresolved）：上流が原資料の末尾コンマを保持している。訳文にも末尾の読点を残し、欠落した語句を創作しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：喪失・欠乏と、別説の希望が並ぶ。どちらか一方で全体を代表させない。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：喪失を読む候補と希望を読む候補を別の読みとして残す。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：傲慢や無力さを読む候補。正位置の希望を単に否定する形にはしない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 月 — The Moon

ID: `18-moon` / numeric_id: 18 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L19)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.

隠れた敵、危険、中傷、暗闇、恐怖、欺き、隠秘の力、誤り。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Instability, inconstancy, silence, lesser degrees of deception and error.

不安定、移り気、沈黙、より程度の弱い欺きと誤り。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `reversed` / **前の記述への参照・程度の限定**（translation_choice）：この欄は正位置等の前の記述を参照している。単独の語だけでは足りないため、前の欄と比較・限定を併読する。

### 辞典としての独自解釈（候補）

**今回の要約候補**：見えにくい危険や誤りと、不安定さ・沈黙という方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：不透明さや恐れ、誤認の可能性を読む候補。隠れた敵が実在すると断定しない。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：不安定さや沈黙に加え、欺き・誤りの程度が弱いという読みを保持する。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 太陽 — The Sun

ID: `19-sun` / numeric_id: 19 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L20)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Material happiness, fortunate marriage, contentment.

物質的な幸福、幸運な結婚、満足。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> The same in a lesser sense.

同じ意味が、より弱い意味合いで現れる。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `reversed` / **前の記述への参照・程度の限定**（translation_choice）：この欄は正位置等の前の記述を参照している。単独の語だけでは足りないため、前の欄と比較・限定を併読する。

### 辞典としての独自解釈（候補）

**今回の要約候補**：幸福・結婚・満足と、その程度の違い。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：満足や生活上の幸福を読む候補。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：正位置と同じ方向の意味を程度を弱めて読む候補。逆の不幸へ変換しない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 審判 — Judgement

ID: `20-judgement` / numeric_id: 20 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L21)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Change of position, renewal, outcome. Another account specifies total loss though lawsuit.

立場の変化、刷新、結果。別説は、訴訟にもかかわらず全面的な喪失と明記している。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.

弱さ、臆病、単純さ；また熟慮、決定、判決。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **though lawsuit**（unresolved）：原文はthoughのまま。「訴訟にもかかわらず」と暫定的に訳したが構文は不明瞭。上流はthroughの誤植の可能性を指摘する。原文の訂正や確定的な補読は行わない。
- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `reversed` / **simplicity**（unresolved）：単純さを暫定採用。素朴さ・無邪気さ・愚かさ等の評価方向は未確定。

### 辞典としての独自解釈（候補）

**今回の要約候補**：変化や刷新と、別説の全面的喪失。逆位置にも熟慮や決定がある。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：立場の変化や刷新を読む候補と、別説の喪失を分ける。原文thoughの箇所は校合待ち。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：弱さ・臆病と、熟慮・決定・判決を別の方向として読む候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## 世界 — The World

ID: `21-world` / numeric_id: 21 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L22)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §3

> Assured success, recompense, voyage, route, emigration, flight, change of place.

確かな成功、報い、航海、経路、移住、逃走、場所の変化。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §3

> Inertia, fixity, stagnation, permanence.

不活発、固定、停滞、永続。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / 非該当

原文はnull（非該当）。翻訳もnull。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / 非該当

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **列挙語の訳語選択**（translation_choice）：語句の列挙を保持した暫定訳。独立した人間の校閲と同時代の語法の確認は未実施。明示した曖昧語がないことは語義の確定を意味しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：成功や報いと移動、固定や永続という方向。

根拠語句ID：upright:0, reversed:0。分類：`source_based_editorial`。

**正位置**：成功・報いと、場所を変える読みの候補を残す。

根拠語句ID：upright:0。分類：`source_based_editorial`。

**逆位置**：固定・停滞・永続を読む候補。永続を必ず悪いものとはしない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドのエース — Ace of Wands

ID: `wands/ace-of-wands` / numeric_id: 22 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L23)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.

創造、発明、事業、それらをもたらす力；原理、始まり、源；誕生、家族、起源、そしてある意味でそれらの背後にある男性的な生殖力；事業の出発点；別説によれば、金銭、幸運、相続。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Fall, decadence, ruin, perdition, to perish; also a certain clouded joy.

転落、衰退、破滅、滅亡、滅びること；また、ある種の曇りを帯びた喜び。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Calamities of all kinds.

あらゆる種類の災厄。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A sign of birth.

誕生のしるし。

### 翻訳上の曖昧さ・選択

- `upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。
- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：創造や出発と衰退。追加欄には災厄と誕生という別方向もある。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：始まり・創造を読む候補と、追加欄の災厄を別々に保持する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：衰退や曇った喜びと、追加欄の誕生を分けて読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの2 — Two of Wands

ID: `wands/two-of-wands` / numeric_id: 23 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L24)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world's wealth.

これらの異なる読みを両立させることはできない；一方には富、幸運、壮麗さ、他方には肉体的苦痛、病気、落胆、悲しみ、屈辱がある。図柄は一つの示唆を与える；ここには領地を見下ろし、また地球儀を眺める領主がいる；それは、この世の富の壮大さのただ中にあるアレクサンドロスの病、屈辱、悲しみのように見える。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Surprise, wonder, enchantment, emotion, trouble, fear.

驚き、驚嘆、魅惑、感情、苦難、恐れ。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A young lady may expect trivial disappointments.

若い女性は、ささいな失望を予期してよい。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。
- `upright` / **mortification**（unresolved）：屈辱を暫定採用。苦悶・落胆や禁欲等の含意もあり得るが、今回の文脈での採用語義の独立確認は未実施。
- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `upright` / **no marriage possible**（unresolved）：ここは異なる読みの両立ができないという比喩。結婚できないという占意にはしない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：富や壮麗さと苦痛・悲しみ。原文が両立不能とする読みの並存。

根拠語句ID：upright:0, reversed:0, additional_upright:0。分類：`source_based_editorial`。

**正位置**：富と苦悩を一つの成功物語へ統合せず、異なる読みの候補として扱う。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：驚き・魅惑から苦難・恐れまで、評価方向の異なる反応を読む候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの3 — Three of Wands

ID: `wands/three-of-wands` / numeric_id: 24 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L25)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.

彼は確立された力、事業、努力、交易、商業、発見を象徴する；海を渡っているのは、彼の商品を積んだ彼の船である。このカードはまた、事業での有能な協力を意味する。あたかも成功した商人の王が、自分の側からあなたの側を見て、援助しようとしているかのようである。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> The end of troubles, suspension or cessation of adversity, toil and disappointment.

苦難の終わり、逆境・労苦・失望の中断または停止。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A very good card; collaboration will favour enterprise.

非常によいカード；共同作業が事業に有利に働く。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：確立された力と事業・協力、苦難の終わり。

根拠語句ID：upright:0, reversed:0, additional_upright:0。分類：`source_based_editorial`。

**正位置**：努力や交易と、援助や協力を読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：苦難が終わる・中断する方向を読む候補。逆位置を失敗に固定しない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの4 — Four of Wands

ID: `wands/four-of-wands` / numeric_id: 25 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L26)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> They are for once almost on the surface—country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.

その意味は、この場合にはほぼ表面に現れている――田園生活、避難の港、ある種の家庭的な収穫祝い、休息、一致、調和、繁栄、平和、そしてこれらの完成した成果。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.

意味は変わらない；繁栄、増大、幸福、美、装飾である。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Unexpected good fortune.

予期しない幸運。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A married woman will have beautiful children.

既婚女性は美しい子供を持つことになる。

### 翻訳上の曖昧さ・選択

- `reversed` / **前の記述への参照・程度の限定**（translation_choice）：この欄は正位置等の前の記述を参照している。単独の語だけでは足りないため、前の欄と比較・限定を併読する。
- `additional_upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：休息・調和・繁栄。正逆で意味が変わらないという記述を保持。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：暮らしや仕事が実ること、休息や平和を読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：正位置と連続する繁栄や美を読む候補。追加欄の子供に関する予言を現実の保証にはしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの5 — Five of Wands

ID: `wands/five-of-wands` / numeric_id: 26 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L27)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.

模倣、たとえば模擬戦のようなもの、しかしまた富や幸運を求める激しい競争と闘争。この意味で、人生の戦いと結びつく。そのため、ある解釈では金、利益、豊かさのカードとされる。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Litigation, disputes, trickery, contradiction.

訴訟、争い、策略、反論。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Success in financial speculation.

金銭的な投機での成功。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Quarrels may be turned to advantage.

口論を有利に転じることができる。

### 翻訳上の曖昧さ・選択

- `upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。
- `reversed` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：模擬的な争いと現実の競争、そこから得る利益という方向。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：競争・模倣・利益への努力を読む候補。追加欄の投機の成功は保証にしない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：対立や策略と、口論を役立てる可能性を別の読みとして保持する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの6 — Six of Wands

ID: `wands/six-of-wands` / numeric_id: 27 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L28)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King's courier; it is expectation crowned with its own desire, the crown of hope, and so forth.

このカードは、いくつもの意味を担えるように描かれている；表面上は勝利を喜ぶ勝者だが、王の使者が威儀をもって運ぶような大きな知らせでもある；それは、望むものを得て冠を戴いた期待、希望の冠、などである。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.

門前の勝ち誇る敵を前にするような懸念、恐れ；敵のために門を開くような裏切り、不忠；また期限の定まらない遅延。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Servants may lose the confidence of their masters; a young lady may be betrayed by a friend.

召使いは主人の信頼を失うかもしれない；若い女性は友人に裏切られるかもしれない。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Fulfilment of deferred hope.

先延ばしにされた希望の実現。

### 翻訳上の曖昧さ・選択

- `upright` / **列挙語の訳語選択**（translation_choice）：語句の列挙を保持した暫定訳。独立した人間の校閲と同時代の語法の確認は未実施。明示した曖昧語がないことは語義の確定を意味しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：勝利・知らせ・期待と、恐れ・裏切り・遅延。追加欄の方向も異なる。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：勝利や期待の成就と、追加欄の信頼喪失を別々の候補として残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：恐れや遅延を読む候補と、追加欄の延期された希望の成就を併置する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの7 — Seven of Wands

ID: `wands/seven-of-wands` / numeric_id: 28 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L29)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business—negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.

勇敢さのカードである。表面上は六人が一人を攻めているが、その一人は有利な位置にいるからである。知的な面では議論、言葉の争いを意味する；事業では交渉、商戦、物々交換、競争。また成功のカードでもある。戦う者は高い所におり、敵は彼に届かないかもしれないからである。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Perplexity, embarrassments, anxiety. It is also a caution against indecision.

当惑、困難、不安。また優柔不断に対する警告でもある。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A dark child.

色の濃い子供。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `additional_upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：有利な位置での対抗・交渉と、迷いや不安。

根拠語句ID：upright:0, reversed:0, additional_upright:0。分類：`source_based_editorial`。

**正位置**：立場の有利さ、勇敢さ、競争を読む候補。成功の条件となる位置関係も残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：当惑や不安、決めかねる状態を読む候補。追加の人物描写は別に保持する。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの8 — Eight of Wands

ID: `wands/eight-of-wands` / numeric_id: 29 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L30)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.

企てにおける活動、その活動の道筋、速達の使者のような速さ；大きな急ぎ、大きな希望、確かな幸福を約束する結末に向かう速さ；一般に、動いているもの；また愛の矢。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.

嫉妬の矢、内部の争い、良心の痛み、口論；既婚者には家庭内の争い。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Domestic disputes for a married person.

既婚者の家庭内の争い。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **列挙語の訳語選択**（translation_choice）：語句の列挙を保持した暫定訳。独立した人間の校閲と同時代の語法の確認は未実施。明示した曖昧語がないことは語義の確定を意味しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：速い活動や希望・愛と、嫉妬や内部の争い。

根拠語句ID：upright:0, reversed:0, additional_upright:0。分類：`source_based_editorial`。

**正位置**：動きの速さと希望を読む候補。追加欄の家庭内の争いを削除しない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：嫉妬、良心の痛み、内輪の争いを読む候補。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの9 — Nine of Wands

ID: `wands/nine-of-wands` / numeric_id: 30 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L31)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts—delay, suspension, adjournment.

このカードは、対抗する中での強さを意味する。攻撃されれば、その人物は猛攻に勇敢に立ち向かう；その体格は、手ごわい敵になり得ることを示す。この主要な意味に伴って、そのすべての付随し得るもの――遅延、中断、延期――がある。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Obstacles, adversity, calamity.

障害、逆境、災厄。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Generally speaking, a bad card.

一般的に言って、悪いカード。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：対抗する強さと、それに伴う遅れや中断。

根拠語句ID：upright:0, reversed:0, additional_upright:0。分類：`source_based_editorial`。

**正位置**：抵抗や防衛の力と、延期を読む候補。強さだけにまとめない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：障害や逆境を読む候補。災厄の到来の断定にはしない。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドの10 — Ten of Wands

ID: `wands/ten-of-wands` / numeric_id: 31 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L32)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.

多くの意味を持つカードであり、読みのいくつかは調和させられない。私は、これを名誉と誠実さに結びつける読みを脇に置く。主な意味は単に圧迫だが、幸運、利益、あらゆる種類の成功でもあり、その場合にはそれらによる圧迫である。また偽りの外観、偽装、背信のカードでもある。人物が近づいている場所は、彼の運ぶ棒によって被害を受けるかもしれない。ソードの9が後に続くなら成功は無にされ、訴訟の問いなら確実な損失となる。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Contrarieties, difficulties, intrigues, and their analogies.

不都合、困難、陰謀、およびそれらに類するもの。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Difficulties and contradictions, if near a good card.

よいカードの近くにあるなら、困難と矛盾。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

原文はnull（非該当）。翻訳もnull。

### 翻訳上の曖昧さ・選択

- `upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。
- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `additional_upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `additional_upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `upright` / **honour and good faith / certain loss**（unresolved）：語り手が脇に置くと述べた読みを、採用した中心意味へ戻さない。lossは損失と訳し、敗訴のみに限定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：圧迫と、成功が生む重圧。別の読みや隣接条件もある。

根拠語句ID：upright:0, reversed:0, additional_upright:0。分類：`source_based_editorial`。

**正位置**：重圧・利益・偽装を別々の候補として保持する。後続カードや訴訟の条件を落とさない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：困難や陰謀を読む候補。正位置と同様、周囲の条件を含めて検討する。

根拠語句ID：reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドのペイジ — Page of Wands

ID: `wands/page-of-wands` / numeric_id: 32 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L33)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.

色の濃い若い男性、忠実な者、恋人、使者、郵便配達人。男性の隣なら、その男性に有利な証言をする。カップのペイジが後に続くなら、危険な恋敵。このスートの主な性質を持つ。家族に関する知らせを意味することもある。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.

逸話、発表、悪い知らせ。また優柔不断と、それに伴う不安定さ。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Young man of family in search of young lady.

若い女性を探している、家柄のある若い男性。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Bad news.

悪い知らせ。

### 翻訳上の曖昧さ・選択

- `upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。
- `upright` / **intelligence**（unresolved）：知らせと知性の両方の語義がある。今回、family/speedy/bad intelligenceでは知らせ、人物の能力記述では知性と訳し分けた。
- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：人物・使者・知らせと、隣接によって変わる役割。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：忠実な使者や知らせの読みの候補。恋敵の読みはカップのペイジが後続する条件付き。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：知らせや迷い、不安定さを読む候補。原文の人物条件は保持する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドのナイト — Knight of Wands

ID: `wands/knight-of-wands` / numeric_id: 33 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L34)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.

出発、不在、逃走、移住。色の濃い若い男性、友好的。住居の変更。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Rupture, division, interruption, discord.

断絶、分裂、中断、不和。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A bad card; according to some readings, alienation.

悪いカード；ある読みでは、疎遠。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> For a woman, marriage, but probably frustrated.

女性には結婚、しかしおそらく妨げられる。

### 翻訳上の曖昧さ・選択

- `upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。
- `additional_upright` / **alienation**（unresolved）：一般の関係では疎遠、mental alienationでは精神の錯乱と暫定的に訳し分けた。歴史的な精神状態の記述と現代の診断分類を同一視しない。
- `additional_reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：移動や不在と、中断・分裂。人物指示も含む。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：移動や転居、友好的な人物を読む候補と、追加欄の疎遠を分けて残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：断絶や中断を読む候補。追加欄の結婚は人物条件と不確かさを伴う。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドのクイーン — Queen of Wands

ID: `wands/queen-of-wands` / numeric_id: 34 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L35)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business.

色の濃い女性、田舎の女性、友好的、貞淑、愛情深く、名誉を重んじる。隣のカードが男性を意味するなら、その男性に好意を持つ；女性なら、相談者に関心を持つ。また金銭への愛、または事業でのある程度の成功。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Good, economical, obliging, serviceable. Signifies also—but in certain positions and in the neighbourhood of other cards tending in such directions—opposition, jealousy, even deceit and infidelity.

善良、倹約家、親切、役に立つ。また――ただし特定の位置にあり、その方向を示す他のカードの近くにある場合には――対立、嫉妬、さらには欺きや不貞さえ意味する。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A good harvest, which may be taken in several senses.

よい収穫。これはいくつかの意味に取ることができる。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Good-will towards the Querent, but without the opportunity to exercise it.

相談者への好意、しかしそれを行使する機会がない。

### 翻訳上の曖昧さ・選択

- `upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。
- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：好意や実務的な働きと、配置条件付きの対立・嫉妬。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：好意や事業の読みと、隣の人物カードによる条件を残す候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：善良さ・有用性を保ち、嫉妬や不貞は位置と隣接の条件付きとして扱う候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ワンドのキング — King of Wands

ID: `wands/king-of-wands` / numeric_id: 35 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L36)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.

色の濃い男性、友好的、田舎の男性、一般に既婚、正直で良心的。このカードは常に正直さを意味し、また、ほどなく得られる予期しない相続に関する知らせを意味することもある。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Good, but severe; austere, yet tolerant.

善良だが厳しい；厳格だが寛容。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Generally favourable; may signify a good marriage.

一般に好ましい；よい結婚を意味することもある。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Advice that should be followed.

従うべき助言。

### 翻訳上の曖昧さ・選択

- `upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。
- `additional_reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：正直で友好的な人物、厳しさと寛容さ。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：正直さや友好、知らせの方向を読む候補。相続の時期を現実に保証しない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：善良さ・厳しさ・寛容さを併せて読む候補。逆位置を悪人としない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップのエース — Ace of Cups

ID: `cups/ace-of-cups` / numeric_id: 36 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L37)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.

真実の心の家、喜び、満足、住まい、滋養、豊かさ、多産；聖なる食卓、それによる幸福。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> House of the false heart, mutation, instability, revolution.

偽りの心の家、変化、不安定、変革。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Inflexible will, unalterable law.

不屈の意志、不変の法。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Unexpected change of position.

予期しない立場の変化。

### 翻訳上の曖昧さ・選択

- `upright` / **Holy Table**（unresolved）：聖なる食卓という暫定訳。宗教上の具体的な指示対象や含意は未確定。

### 辞典としての独自解釈（候補）

**今回の要約候補**：満ち足りた心や滋養と、偽り・変化。不屈の意志という追加の読みもある。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：喜びや滋養を読む候補と、追加欄の意志・法を併置する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：偽りや不安定な変化を読む候補。変化すべてを悪としない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの2 — Two of Cups

ID: `cups/two-of-cups` / numeric_id: 37 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L38)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and—as a suggestion apart from all offices of divination—that desire which is not in Nature, but by which Nature is sanctified.

愛、情熱、友情、親和性、結合、調和、共感、男女の相互関係、そして――占いのあらゆる営みとは別の示唆として――自然のうちにはないが、それによって自然が聖化される、あの欲望。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §4 (additional meaning; §2 has no reversed line)

> Passion.

情熱。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Favourable in things of pleasure and business, as well as love; also wealth and honour.

楽しみや仕事、そして愛においても好ましい。また、富と名誉。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Passion.

情熱。

### 翻訳上の曖昧さ・選択

- `upright` / **affinity / union / sympathy**（translation_choice）：親和性・結合・共感を採用。unionを結婚、sympathyを同情に限定しない。
- `upright` / **the interrelation of the sexes**（translation_choice）：男女の相互関係と訳した。原文の歴史的な性別表現を保持したもので、現代の関係の範囲を限定する編集方針ではない。
- `upright` / **that desire which is not in Nature, but by which Nature is sanctified**（unresolved）：欲望／自然／聖化という対比を保持。宗教的・哲学的な含意の確定は保留。「運命の恋」等へ置換しない。
- `reversed` / **Passion.**（unresolved）：情熱を暫定採用。激情・欲情・受苦などの語義のうち、ここで何を強調するかは単語一語からは確定しない。「不和」「別離」とは訳さない。
- `additional_upright` / **business / honour**（translation_choice）：仕事・名誉を採用。businessは事業・商売も含み得る。正位置の本欄と§4の追加欄は混ぜない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：愛・友情・共感など、人と人との親和や結びつき。逆位置も情熱という同じ語を含み、単純な反対語にはならない。

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

## カップの3 — Three of Cups

ID: `cups/three-of-cups` / numeric_id: 38 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L39)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing.

豊かさ、完全さ、陽気さのうちに、ある事柄が結末を迎えること；幸福な結果、勝利、成就、慰め、癒やし。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.

迅速な遂行、処理、達成、終わり。また肉体的な楽しみや感覚的な快楽における過剰の面も意味する。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Unexpected advancement for a military man.

軍人にとって、予期しない昇進。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Consolation, cure, end of the business.

慰め、治癒、その事柄の終わり。

### 翻訳上の曖昧さ・選択

- `upright` / **列挙語の訳語選択**（translation_choice）：語句の列挙を保持した暫定訳。独立した人間の校閲と同時代の語法の確認は未実施。明示した曖昧語がないことは語義の確定を意味しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：成就や結末・慰めと、楽しみの過剰。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：豊かに結実することや慰めを読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：迅速な達成と楽しみの過剰を別の方向として残す。治癒は歴史的表現として扱う。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの4 — Four of Cups

ID: `cups/four-of-cups` / numeric_id: 39 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L40)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.

倦怠、嫌悪、忌避、想像上の悩み。まるでこの世の酒が満腹感しかもたらさなかったかのようである；今や妖精の贈り物のように別の酒が放蕩者に差し出されるが、彼はそこに慰めを見いださない。これはまた、混じり合った喜びのカードでもある。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Novelty, presage, new instruction, new relations.

新奇さ、予兆、新しい教え、新しい関係。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Contrarieties.

不都合。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Presentiment.

予感。

### 翻訳上の曖昧さ・選択

- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：満たされても慰めがない状態と、新しいものへの方向。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：倦怠や嫌悪だけでなく、混じり合った喜びも読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：新しい関係・教え・予感を読む候補。正位置の停滞をそのまま移さない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの5 — Five of Cups

ID: `cups/five-of-cups` / numeric_id: 40 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L41)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.

喪失のカードだが、残るものがある；三つは取り去られたが、二つは残っている；相続、父祖の財産、伝承のカードだが、期待に応えるものではない；ある解釈者にとっては結婚のカードだが、苦さや挫折がないわけではない。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> News, alliances, affinity, consanguinity, ancestry, return, false projects.

知らせ、同盟、姻戚関係、血縁、祖先、帰還、誤った計画。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Generally favourable; a happy marriage; also patrimony, legacies, gifts, success in enterprise.

一般に好ましい；幸福な結婚；また父祖の財産、遺産、贈り物、事業の成功。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Return of some relative who has not been seen for long.

長く会っていなかった親族の帰還。

### 翻訳上の曖昧さ・選択

- `reversed` / **affinity**（unresolved）：この欄では血縁・祖先との並びを踏まえ姻戚関係を暫定採用。一般的な親和性という語義を排除したわけではない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：喪失と残存、期待に届かない継承。追加欄には幸福な結婚もある。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：失ったものと残るものを両方読む候補。追加欄の好ましい読みを消さない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：帰還や縁のつながりと、誤った計画を別の方向として読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの6 — Six of Cups

ID: `cups/six-of-cups` / numeric_id: 41 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L42)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> A card of the past and of memories, looking back, as—for example—on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.

過去と記憶のカードで、たとえば子供時代を振り返ること；幸福、楽しみ、ただし主として過去から来るもの；消え去ったもの。別の読みはこれを逆転させ、新しい関係、新しい知識、新しい環境とし、その場合、子供たちは見知らぬ場所で遊んでいることになる。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> The future, renewal, that which will come to pass presently.

未来、刷新、まもなく起こること。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Pleasant memories.

楽しい記憶。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Inheritance to fall in quickly.

ほどなく得られる相続。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `reversed` / **presently**（unresolved）：まもなくと訳した。具体的な日付・期間は原文にない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：過去の記憶と、別説の新しい関係・環境、未来。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：懐かしさを読む候補と、新しい環境を読む別説を分けて残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：未来や刷新を読む候補。相続の時期を確定しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの7 — Seven of Cups

ID: `cups/seven-of-cups` / numeric_id: 42 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L43)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.

妖精の恩恵、反映された像、感情、想像、観想の鏡に見られるもの；これらの段階でのある程度の達成はあるが、永続的または実質的なものは示唆されない。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Desire, will, determination, project.

欲望、意志、決意、計画。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Fair child; idea, design, resolve, movement.

色の明るい子供；考え、構想、決意、動き。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Success, if accompanied by the Three of Cups.

カップの3を伴うなら、成功。

### 翻訳上の曖昧さ・選択

- `upright` / **images of reflection**（unresolved）：反映された像を暫定採用。映像・省察の像等の可能性があり、観想の鏡という比喩と併せて確認が必要。
- `additional_upright` / **fair**（unresolved）：人物描写では色の明るいという暫定訳。色白・髪色・美しさ等の語義選択は文脈確認が必要。一般的なよさや公平さへ一律に置換しない。
- `additional_reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：想像や像の世界と、その非永続性、意志や計画。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：想像による達成と、実質性や永続性が示されないという限定を共に読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：意志や計画を読む候補。追加欄の成功はカップの3を伴う条件付き。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの8 — Eight of Cups

ID: `cups/eight-of-cups` / numeric_id: 43 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L44)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> The card speaks for itself on the surface, but other readings are entirely antithetical—giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence—either for good or evil.

表面上はカード自身が語っているが、ほかの読みはまったく正反対であり、喜び、穏やかさ、臆病、名誉、慎みを挙げる。実際には、このカードは通常、ある事柄の衰え、または重要と思われていた事柄が、よい意味でも悪い意味でも実はささいなものだったことを示すとされる。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Great joy, happiness, feasting.

大きな喜び、幸福、宴。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Marriage with a fair woman.

色の明るい女性との結婚。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Perfect satisfaction.

完全な満足。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `additional_upright` / **fair**（unresolved）：人物描写では色の明るいという暫定訳。色白・髪色・美しさ等の語義選択は文脈確認が必要。一般的なよさや公平さへ一律に置換しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：事柄の衰えや重要度の変化と、反対方向の喜び・名誉。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：衰えを読む候補と、原文が反対とする喜び・名誉の読みを統合せず残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：喜びや満足を読む候補。逆位置を失意としない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの9 — Nine of Cups

ID: `cups/nine-of-cups` / numeric_id: 44 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L45)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.

和合、満足、身体的な安楽；また勝利、成功、利益；相談者またはそのために相談が行われる人物の満足。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.

真実、忠誠、自由；ただし読みはさまざまで、誤り、不完全さなども含む。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Of good augury for military men.

軍人にとって、よい兆し。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Good business.

よい商売。

### 翻訳上の曖昧さ・選択

- `reversed` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：満足・成功と、真実・自由から誤りまでの異なる読み。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：満足や安楽、利益を読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：真実・忠誠・自由と、誤りや不完全さを併置する。逆位置を過剰な満足だけで説明しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップの10 — Ten of Cups

ID: `cups/ten-of-cups` / numeric_id: 45 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L46)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent's interests; also the town, village or country inhabited by the Querent.

満足、心全体の安らぎ、その状態の完成；また人間の愛と友情の完成；複数の絵札とともにあれば、相談者の利害を引き受けている人物；また相談者が暮らす町、村、国。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Repose of the false heart, indignation, violence.

偽りの心の安らぎ、憤り、暴力。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> For a male Querent, a good marriage and one beyond his expectations.

男性の相談者には、よい結婚、しかも期待を上回るもの。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Sorrow; also a serious quarrel.

悲しみ；また深刻な口論。

### 翻訳上の曖昧さ・選択

- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：心の安らぎと関係の完成、人物・居住地への指示。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：安らぎや友情に加え、絵札を伴う人物条件や場所の読みを残す候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：偽りの安らぎ、憤り、悲しみを読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップのペイジ — Page of Cups

ID: `cups/page-of-cups` / numeric_id: 46 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L47)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.

色の明るい若い男性、奉仕しようとし、相談者と関わりを持つ者；勉学に励む若者；知らせ、伝言；専心、省察、瞑想；また、これらが事業に向けられること。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Taste, inclination, attachment, seduction, deception, artifice.

好み、傾向、愛着、誘惑、欺き、技巧。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Good augury; also a young man who is unfortunate in love.

よい兆し；また恋に不運な若い男性。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Obstacles of all kinds.

あらゆる種類の障害。

### 翻訳上の曖昧さ・選択

- `upright` / **fair**（unresolved）：人物描写では色の明るいという暫定訳。色白・髪色・美しさ等の語義選択は文脈確認が必要。一般的なよさや公平さへ一律に置換しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：若い人物・知らせ・省察と、愛着や欺きという方向。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：奉仕や学び、知らせを読む候補と、追加欄の恋の不運を分けて保持する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：好み・愛着と、誘惑・欺きを別の読みの候補として扱う。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップのナイト — Knight of Cups

ID: `cups/knight-of-cups` / numeric_id: 47 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L48)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Arrival, approach—sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.

到着、接近――ときには使者の接近；働きかけ、提案、振る舞い、招待、扇動。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Trickery, artifice, subtlety, swindling, duplicity, fraud.

策略、技巧、巧妙さ、詐取、二枚舌、詐欺。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A visit from a friend, who will bring unexpected money to the Querent.

友人の訪問。その友人は相談者に予期しない金銭をもたらす。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Irregularity.

不規則さ。

### 翻訳上の曖昧さ・選択

- `upright` / **列挙語の訳語選択**（translation_choice）：語句の列挙を保持した暫定訳。独立した人間の校閲と同時代の語法の確認は未実施。明示した曖昧語がないことは語義の確定を意味しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：接近・提案・招待と、策略や不誠実さ。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：訪れや提案を読む候補。招待と扇動の違いも残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：技巧が欺きに働く読みや、不規則さの候補を残す。実在の人物の詐欺を断定しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップのクイーン — Queen of Cups

ID: `cups/queen-of-cups` / numeric_id: 48 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L49)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.

善良で色の明るい女性；正直で献身的で、相談者のために尽くす女性；愛情ある知性、そこから来る幻視の賜物；成功、幸福、喜び；また知恵、美徳；完全な配偶者、よい母親。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.

説は分かれる；善良な女性；別の説では、傑出しているが信用できない女性；道を外れた女性；悪徳、不名誉、堕落。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Sometimes denotes a woman of equivocal character.

ときには、品性の疑わしい女性を示す。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A rich marriage for a man and a distinguished one for a woman.

男性には富裕な結婚、女性には名誉ある結婚。

### 翻訳上の曖昧さ・選択

- `upright` / **fair**（unresolved）：人物描写では色の明るいという暫定訳。色白・髪色・美しさ等の語義選択は文脈確認が必要。一般的なよさや公平さへ一律に置換しない。
- `upright` / **intelligence**（unresolved）：知らせと知性の両方の語義がある。今回、family/speedy/bad intelligenceでは知らせ、人物の能力記述では知性と訳し分けた。
- `reversed` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `additional_reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `upright` / **gift of vision**（unresolved）：幻視の賜物という暫定訳。洞察・霊視等の意味の範囲は未決着であり、人物の超常能力の存在を確認したものではない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：献身や知恵を持つ人物と、互いに異なる人物評。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：愛情や知恵の人物像と、追加欄の疑わしい人物像を分けて保持する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：善良という説と信用できないという説を統合しない候補。歴史的な人物評を人の価値の判定にしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## カップのキング — King of Cups

ID: `cups/king-of-cups` / numeric_id: 49 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L50)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.

色の明るい男性、実業・法律・神学に携わる男性；責任感があり、相談者の役に立とうとする；また公平、芸術と学知、および学問・法律・芸術を職とする人々；創造的な知性。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.

不正直で二枚舌の男性；悪事、強要、不正、悪徳、醜聞、略奪、大きな損失。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Beware of ill-will on the part of a man of position, and of hypocrisy pretending to help.

地位ある男性からの悪意と、助けるふりをする偽善に注意。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Loss.

喪失。

### 翻訳上の曖昧さ・選択

- `upright` / **fair**（unresolved）：人物描写では色の明るいという暫定訳。色白・髪色・美しさ等の語義選択は文脈確認が必要。一般的なよさや公平さへ一律に置換しない。
- `upright` / **intelligence**（unresolved）：知らせと知性の両方の語義がある。今回、family/speedy/bad intelligenceでは知らせ、人物の能力記述では知性と訳し分けた。

### 辞典としての独自解釈（候補）

**今回の要約候補**：責任ある知性と専門職、また不正・強要・損失。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：公平さや創造的知性と、追加欄の偽善への注意を別の読みとして扱う。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：不正や強要、損失を読む候補。肩書きだけで人物を決めない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードのエース — Ace of Swords

ID: `swords/ace-of-swords` / numeric_id: 50 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L51)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.

勝利、あらゆるものにおける過度の程度、征服、力の勝利。愛においても憎しみにおいても、大きな力のカードである。冠は、通常の占いの領域に収まるよりも、はるかに高い意味を持つかもしれない。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> The same, but the results are disastrous; another account says—conception, childbirth, augmentation, multiplicity.

同じ意味だが、結果は破滅的；別説では――受胎、出産、増加、多数性。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Great prosperity or great misery.

大きな繁栄、または大きな悲惨。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Marriage broken off, for a woman, through her own imprudence.

女性には、自身の不慎重さによって結婚が破談になること。

### 翻訳上の曖昧さ・選択

- `upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。
- `reversed` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `reversed` / **前の記述への参照・程度の限定**（translation_choice）：この欄は正位置等の前の記述を参照している。単独の語だけでは足りないため、前の欄と比較・限定を併読する。
- `additional_reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：強い力とその過度、繁栄と悲惨という両方向。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：力の勝利だけでなく、その過度や愛憎の両面を読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：破滅的な結果という説と、別説の受胎・増加を別々に保持する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの2 — Two of Swords

ID: `swords/two-of-swords` / numeric_id: 51 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L52)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.

一致と、それが示唆する均衡、勇気、友情、武装した状態での和合；別の読みでは優しさ、愛情、親密さ。調和の示唆やほかの好ましい読みには留保を付けて考える必要がある。ソードは一般に、人間の営みにおける恵みの力の象徴ではないからである。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Imposture, falsehood, duplicity, disloyalty.

詐称、虚偽、二枚舌、不忠。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Gifts for a lady, influential protection for a man in search of help.

女性には贈り物、援助を探す男性には有力な保護。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Dealings with rogues.

悪党との取引。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `additional_upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：武装下での均衡や和合と、そこに付された留保。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：友情・調和を読む候補。ただし武装下の状態や原文の留保を落とさない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：虚偽・不忠・取引相手への懸念を読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの3 — Three of Swords

ID: `swords/three-of-swords` / numeric_id: 52 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L53)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.

移動、不在、遅延、分裂、断絶、散開、そして図柄が自然に意味するすべて。図柄はあまりにも単純明白で、具体的な列挙を要しない。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Mental alienation, error, loss, distraction, disorder, confusion.

精神の錯乱、誤り、喪失、取り乱すこと、無秩序、混乱。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> For a woman, the flight of her lover.

女性には、恋人の逃走。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A meeting with one whom the Querent has compromised; also a nun.

相談者が不名誉な立場に陥れた人物との出会い；また修道女。

### 翻訳上の曖昧さ・選択

- `reversed` / **alienation**（unresolved）：一般の関係では疎遠、mental alienationでは精神の錯乱と暫定的に訳し分けた。歴史的な精神状態の記述と現代の診断分類を同一視しない。
- `additional_upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `additional_reversed` / **compromis**（unresolved）：不名誉な立場に陥れる／陥るという暫定訳。信用や立場が危うくなる含意を含むが、単なる妥協とは訳さない。
- `upright` / **Removal / dispersion**（unresolved）：移動・散開を暫定採用。離去・除去・散逸等の候補も残り、恋愛上の別離だけには限定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：離れることや断絶・遅延と、混乱や喪失。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：不在・分裂・延期など、離れる働きを読む候補。恋愛だけに限定しない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：混乱や誤り、再会や人物への指示を別々に読む候補。精神状態を診断しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの4 — Four of Swords

ID: `swords/four-of-swords` / numeric_id: 53 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L54)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Vigilance, retreat, solitude, hermit's repose, exile, tomb and coffin. It is these last that have suggested the design.

警戒、退避、孤独、隠者の休息、追放、墓と棺。この最後の二つが図柄の着想となった。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Wise administration, circumspection, economy, avarice, precaution, testament.

賢明な管理、用心深さ、節約、貪欲、予防、遺言。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A bad card, but if reversed a qualified success may be expected by wise administration of affairs.

悪いカードだが、逆位置なら、物事の賢明な管理によって条件付きの成功を期待できる。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A certain success following wise administration.

賢明な管理に続く、ある程度の成功。

### 翻訳上の曖昧さ・選択

- `additional_upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `additional_reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：退避・休息と警戒、管理・用心という方向。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：休息だけでなく警戒・追放・墓の語も残す候補。死の予告へ転換しない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：賢明な管理と節約を読む候補だが、貪欲や遺言も別に保持する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの5 — Five of Swords

ID: `swords/five-of-swords` / numeric_id: 54 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L55)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.

失墜、破壊、撤回、悪名、不名誉、喪失、およびそれらの変種や類似のもの。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> The same; burial and obsequies.

同じ意味；埋葬と葬儀。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> An attack on the fortune of the Querent.

相談者の財産への攻撃。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A sign of sorrow and mourning.

悲しみと服喪のしるし。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `reversed` / **前の記述への参照・程度の限定**（translation_choice）：この欄は正位置等の前の記述を参照している。単独の語だけでは足りないため、前の欄と比較・限定を併読する。
- `additional_upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：失墜・喪失と、それに類する方向。逆位置にも同じ意味が続く。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：喪失や不名誉を読む候補。実在の攻撃の証拠とはしない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：同じ方向の喪失と弔いを読む候補。誰かの死を予告しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの6 — Six of Swords

ID: `swords/six-of-swords` / numeric_id: 55 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L56)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Journey by water, route, way, envoy, commissionary, expedient.

水路の旅、経路、道、使者、代理人、便法。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Declaration, confession, publicity; one account says that it is a proposal of love.

表明、告白、公表；ある説では、愛の申し出。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> The voyage will be pleasant.

その航海は快適なものになる。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Unfavourable issue of lawsuit.

訴訟の好ましくない結果。

### 翻訳上の曖昧さ・選択

- `upright` / **列挙語の訳語選択**（translation_choice）：語句の列挙を保持した暫定訳。独立した人間の校閲と同時代の語法の確認は未実施。明示した曖昧語がないことは語義の確定を意味しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：移動や道筋・仲介と、表明・公表。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：旅や経路、代理・便法を読む候補。移動だけに狭めない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：告白・公表と、追加欄の訴訟の結果を分けて読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの7 — Seven of Swords

ID: `swords/seven-of-swords` / numeric_id: 56 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L57)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.

企て、試み、願い、希望、自信；また口論、失敗するかもしれない計画、いらだち。意味が互いに大きく食い違うので、図柄の含意は定かではない。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Good advice, counsel, instruction, slander, babbling.

よい助言、相談、教え、中傷、おしゃべり。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Dark girl; a good card; it promises a country life after a competence has been secured.

色の濃い少女；よいカード；暮らしに十分な財産が確保された後の田園生活を約束する。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Good advice, probably neglected.

よい助言、おそらく無視される。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `additional_upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：計画・希望と失敗の可能性、助言と中傷という食い違い。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：希望や自信と、失敗し得る計画を併置し、原文の不確定さを保持する候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：よい助言と中傷を分けて読む候補。助言が無視され得るという追加も残す。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの8 — Eight of Swords

ID: `swords/eight-of-swords` / numeric_id: 57 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L58)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.

悪い知らせ、激しい落胆、危機、非難、束縛された力、対立、中傷；また病気。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.

不安、困難、反対、事故、裏切り；予期しないもの；宿命。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> For a woman, scandal spread in her respect.

女性には、その女性に関して広まる醜聞。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Departure of a relative.

親族の出発。

### 翻訳上の曖昧さ・選択

- `reversed` / **fatality**（unresolved）：宿命を暫定採用。不可避性・災難・死に関わる含意の選択は文脈の再確認が必要。現実の不可避な結果を意味するとは判定しない。
- `additional_upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：力の束縛と危機・非難、不安や予期しないもの。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：束縛された力や非難を読む候補。病気や中傷の実在を確定しない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：不安・反対・予想外の出来事を読む候補。原文の宿命を不可避の未来とはしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの9 — Nine of Swords

ID: `swords/nine-of-swords` / numeric_id: 58 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L59)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Death, failure, miscarriage, delay, deception, disappointment, despair.

死、失敗、流産、遅延、欺き、失望、絶望。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Imprisonment, suspicion, doubt, reasonable fear, shame.

投獄、疑惑、疑い、理由のある恐れ、恥。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> An ecclesiastic, a priest; generally, a card of bad omen.

聖職者、司祭；一般に、悪い兆しのカード。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Good ground for suspicion against a doubtful person.

疑わしい人物を疑う十分な根拠。

### 翻訳上の曖昧さ・選択

- `upright` / **miscarriage**（unresolved）：流産を暫定採用。企ての失敗・不首尾という語義もあり、身体的出来事だけに限定する根拠は今回の列挙だけでは十分でない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：失敗や絶望、疑い・恐れという厳しい語群。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：喪失や失望を読む候補。死・流産は歴史的語句として保持し、現実の予告に転用しない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：疑い・恐れ・恥を読む候補。カード自体を他人への疑惑の証拠にはしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードの10 — Ten of Swords

ID: `swords/ten-of-swords` / numeric_id: 59 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L60)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.

図柄が示唆するすべて；また痛み、苦悩、涙、悲しみ、荒涼。とくに暴力的な死のカードというわけではない。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Advantage, profit, success, favour, but none of these are permanent; also power and authority.

有利さ、利益、成功、恩恵、ただしそのどれも永続しない；また力と権威。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Followed by Ace and King, imprisonment; for girl or wife, treason on the part of friends.

エースとキングが後に続くなら投獄；少女または妻には、友人たちによる裏切り。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Victory and consequent fortune for a soldier in war.

戦争における兵士の勝利と、それに続く幸運。

### 翻訳上の曖昧さ・選択

- `additional_upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `additional_reversed` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。
- `additional_upright` / **Ace and King**（unresolved）：原文はスートを明記せずエースとキングとだけ述べる。特定スートを補完しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：苦悩・荒涼と、永続しない利益や成功。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：苦悩を読む候補。原文が暴力的な死に特化していないと述べる限定を守る。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：利益や成功を読む候補と、その非永続性を共に保持する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードのペイジ — Page of Swords

ID: `swords/page-of-swords` / numeric_id: 60 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L61)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.

権威、監督、秘密活動、警戒、偵察、調査、およびそれらに属する性質。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> More evil side of these qualities; what is unforeseen, unprepared state; sickness is also intimated.

これらの性質の、より悪い面；予期しないもの、準備のできていない状態；病気も示唆される。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> An indiscreet person will pry into the Querent's secrets.

慎みのない人物が相談者の秘密を詮索する。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Astonishing news.

驚くべき知らせ。

### 翻訳上の曖昧さ・選択

- `reversed` / **前の記述への参照・程度の限定**（translation_choice）：この欄は正位置等の前の記述を参照している。単独の語だけでは足りないため、前の欄と比較・限定を併読する。

### 辞典としての独自解釈（候補）

**今回の要約候補**：監督・調査・警戒と、その悪い面や準備不足。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：調査や警戒を読む候補。監視や詮索との違いも考える。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：悪い面の現れや準備不足、驚く知らせを読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードのナイト — Knight of Swords

ID: `swords/knight-of-swords` / numeric_id: 61 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L62)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.

技量、勇敢さ、能力、防御、応対の巧みさ、敵意、怒り、戦争、破壊、対立、抵抗、破滅。したがって死を意味する面もあるが、この意味を持つのは、ほかの宿命を示すカードの近くにある場合だけである。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Imprudence, incapacity, extravagance.

不慎重、無能力、浪費。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A soldier, man of arms, satellite, stipendiary; heroic action predicted for soldier.

兵士、武人、従者、俸給を受ける者；兵士には英雄的行動が予言される。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Dispute with an imbecile person; for a woman, struggle with a rival, who will be conquered.

愚かな人物との争い；女性には、打ち負かされることになる恋敵との闘争。

### 翻訳上の曖昧さ・選択

- `upright` / **fatality**（unresolved）：宿命を暫定採用。不可避性・災難・死に関わる含意の選択は文脈の再確認が必要。現実の不可避な結果を意味するとは判定しない。
- `upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `additional_upright` / **satellite**（unresolved）：従者を暫定採用。追随者・取り巻き等の歴史的な人物指示を想定したが、同時代用例の独立確認は未実施。
- `additional_reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `additional_reversed` / **imbecile person**（unresolved）：愚かな人物という暫定訳。歴史的な侮蔑表現であり、現代の知的能力・疾患の判定にはしない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：技量・防御・勇敢さと、敵意や破壊の併存。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：能力や防衛と破壊的な方向を別々に読む候補。死への言及に付いた隣接条件を落とさない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：不慎重さや力の不足・浪費を読む候補。歴史的な蔑称を現代の人物診断にしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードのクイーン — Queen of Swords

ID: `swords/queen-of-swords` / numeric_id: 62 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L63)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.

寡婦であること、女性の悲しみと困惑、不在、不妊、服喪、欠乏、離別。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Malice, bigotry, artifice, prudery, bale, deceit.

悪意、偏狭さ、策略、堅苦しい潔癖さ、災い、欺き。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A widow.

寡婦。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A bad woman, with ill-will towards the Querent.

相談者に悪意を抱く悪い女性。

### 翻訳上の曖昧さ・選択

- `upright` / **sterility**（unresolved）：不妊を暫定採用。実りのなさ・不毛という含意も検討が必要。身体状態の確定には使わない。
- `reversed` / **bale**（unresolved）：災いを暫定採用した古語。悲しみ・害悪等の含意と、原文文脈での選択の確認は未実施。

### 辞典としての独自解釈（候補）

**今回の要約候補**：不在・別離・喪失と、悪意や策略という歴史的な人物像。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：喪失や別離を読む候補。原文の女性条件や身体に関する語を一般的診断にしない。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：悪意や欺きの働きを読む候補。カードから実在の女性を悪人と確定しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ソードのキング — King of Swords

ID: `swords/king-of-swords` / numeric_id: 63 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L64)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Whatsoever arises out of the idea of judgment and all its connexions—power, command, authority, militant intelligence, law, offices of the crown, and so forth.

判断という考えとそのあらゆる関連から生じるものすべて――力、指揮、権威、戦闘的な知性、法律、王権の官職など。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Cruelty, perversity, barbarity, perfidy, evil intention.

残酷さ、倒錯、野蛮、背信、悪意。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A lawyer, senator, doctor.

法律家、元老院議員、医師。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A bad man; also a caution to put an end to a ruinous lawsuit.

悪い男性；また破滅を招く訴訟を終わらせるようにという警告。

### 翻訳上の曖昧さ・選択

- `upright` / **intelligence**（unresolved）：知らせと知性の両方の語義がある。今回、family/speedy/bad intelligenceでは知らせ、人物の能力記述では知性と訳し分けた。
- `additional_upright` / **doctor**（unresolved）：医師を暫定採用。博士・学識者という語義もあり、肩書きの確定は保留。

### 辞典としての独自解釈（候補）

**今回の要約候補**：判断と権威・法律、それが残酷さや背信に働く方向。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：判断や指揮、専門職・公職を読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：残酷さや悪意を読む候補。訴訟への警告は史料の読みとして残し、法的判断の代用にしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルのエース — Ace of Pentacles

ID: `pentacles/ace-of-pentacles` / numeric_id: 64 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L65)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.

完全な満足、幸福、恍惚；また素早い知らせ；金。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> The evil side of wealth, bad intelligence; also great riches. In any case it shews prosperity, comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is reversed or not.

富の悪い面、悪い知らせ；また大きな富。いずれにしても繁栄し、物質的に快適な状態を示すが、それが持ち主にとって有益かどうかは、カードが逆位置かどうかによる。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> The most favourable of all cards.

すべてのカードの中で最も好ましい。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A share in the finding of treasure.

宝の発見の分け前。

### 翻訳上の曖昧さ・選択

- `upright` / **intelligence**（unresolved）：知らせと知性の両方の語義がある。今回、family/speedy/bad intelligenceでは知らせ、人物の能力記述では知性と訳し分けた。
- `reversed` / **intelligence**（unresolved）：知らせと知性の両方の語義がある。今回、family/speedy/bad intelligenceでは知らせ、人物の能力記述では知性と訳し分けた。

### 辞典としての独自解釈（候補）

**今回の要約候補**：満足や富・繁栄と、その利益・不利益の違い。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：物質的な満足や知らせを読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：富や快適さを残したまま、その悪い面や有益さへの疑問を読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの2 — Two of Pentacles

ID: `pentacles/two-of-pentacles` / numeric_id: 65 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L66)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.

一方では、図柄の題材である陽気さ、気晴らし、それらに関連するもののカードとされる；しかし書面の知らせや伝言、障害、動揺、苦難、紛糾とも読まれる。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.

強いられた陽気さ、装った楽しみ、文字どおりの意味、手書き、文章作成、為替手形。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Troubles are more imaginary than real.

苦難は、現実よりも想像の中に多い。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Bad omen, ignorance, injustice.

悪い兆し、無知、不正。

### 翻訳上の曖昧さ・選択

- `reversed` / **letters of exchange**（unresolved）：為替手形を暫定採用。歴史的な商業用語としての用法の確認が必要。

### 辞典としての独自解釈（候補）

**今回の要約候補**：楽しみや気晴らしと、知らせ・障害・紛糾の併存。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：陽気さと困難を別々の候補として保持する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：楽しみを装うことと、書面・手形への指示を分けて読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの3 — Three of Pentacles

ID: `pentacles/three-of-pentacles` / numeric_id: 66 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L67)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.

職業、生業、熟練労働；しかし通常は、高貴さ、貴族階級、名声、栄光のカードと見なされる。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Mediocrity, in work and otherwise, puerility, pettiness, weakness.

仕事においてもそれ以外でも凡庸さ、幼稚さ、卑小さ、弱さ。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> If for a man, celebrity for his eldest son.

男性についてなら、その長男の名声。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Depends on neighbouring cards.

隣接するカードによる。

### 翻訳上の曖昧さ・選択

- `additional_upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。
- `additional_reversed` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：熟練の仕事と社会的な名声、凡庸さや未熟さ。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：熟練労働を読む候補と、高貴さ・名声という読みを保持する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：凡庸さや弱さを読む候補。追加欄は隣接カード次第という保留のまま扱う。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの4 — Four of Pentacles

ID: `pentacles/four-of-pentacles` / numeric_id: 67 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L68)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.

所有物の確かさ、持っているものにしがみつくこと、贈り物、遺贈、相続。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Suspense, delay, opposition.

宙ぶらりんの状態、遅延、反対。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> For a bachelor, pleasant news from a lady.

未婚男性には、女性からの楽しい知らせ。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Observation, hindrances.

観察、妨害。

### 翻訳上の曖昧さ・選択

- `additional_reversed` / **Observation**（unresolved）：観察という字義を保持したが、原文のこの列挙での意図は未確認。妨害と同義にまとめない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：所有の確かさと固執、受け取ること、遅延や妨害。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：守ることとしがみつくことを分けて読む候補。贈与・相続も残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：未決着や遅延、妨害を読む候補。追加の観察という語も削除しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの5 — Five of Pentacles

ID: `pentacles/five-of-pentacles` / numeric_id: 68 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L69)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> The card foretells material trouble above all, whether in the form illustrated—that is, destitution—or otherwise. For some cartomancists, it is a card of love and lovers—wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.

このカードは何よりも物質的な苦難を予告する。図示された形、すなわち困窮であれ、別の形であれ同じである。あるカード占い師にとっては、愛と愛し合う人々――妻、夫、友人、愛人――のカードであり、また一致、親和である。これらの別の読みを調和させることはできない。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Disorder, chaos, ruin, discord, profligacy.

無秩序、混沌、破滅、不和、放蕩。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Conquest of fortune by reason.

理性による財運の獲得。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Troubles in love.

恋愛における苦難。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `additional_upright` / **fortune**（unresolved）：幸運・財産・財運等の幅がある。周辺の金銭・成功の記述に応じて訳し分けたが、単一語義へ固定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：物質的な苦難と、両立できない別説の愛・親和。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：困窮を読む候補と愛や親和を読む候補を分ける。両立不能という原文の記述を残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：無秩序や不和を読む候補。恋愛の苦難は追加欄として区別する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの6 — Six of Pentacles

ID: `pentacles/six-of-pentacles` / numeric_id: 69 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L70)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Presents, gifts, gratification; another account says attention, vigilance; now is the accepted time, present prosperity, etc.

贈り物、贈与、満足；別説では注意、警戒；今こそ受け入れられる時、現在の繁栄、など。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Desire, cupidity, envy, jealousy, illusion.

欲望、貪欲、羨望、嫉妬、幻想。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> The present must not be relied on.

現在を当てにしてはならない。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A check on the Querent's ambition.

相談者の野心への抑止。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `additional_upright` / **The present**（unresolved）：現在を暫定採用。贈り物という語義との関係を含め、文脈上の選択の独立確認は未実施。

### 辞典としての独自解釈（候補）

**今回の要約候補**：贈与・満足・現在の繁栄と、警戒や欲望。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：贈与や好機を読む候補と、追加欄の現在を当てにしないという読みを分けて保持する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：欲望や嫉妬、野心への抑止を読む候補。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの7 — Seven of Pentacles

ID: `pentacles/seven-of-pentacles` / numeric_id: 70 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L71)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrel—and another innocence, ingenuity, purgation.

これらの意味はきわめて矛盾している；主として金銭、事業、物々交換のカードだが、ある読みでは口論、争い――別の読みでは無垢、工夫、浄化となる。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Cause for anxiety regarding money which it may be proposed to lend.

貸そうと考えているかもしれない金銭について、不安の理由があること。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Improved position for a lady's future husband.

女性の将来の夫の地位の改善。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Impatience, apprehension, suspicion.

焦り、懸念、疑い。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `upright` / **innocence / ingenuity / purgation**（unresolved）：無垢・工夫・浄化を暫定採用。素朴さ、巧妙さ、清め等の含意を含めた語義選択は保留。

### 辞典としての独自解釈（候補）

**今回の要約候補**：金銭や事業と、口論・無垢・浄化という互いに異なる読み。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：事業や交換を読む候補と、対立・無垢・浄化を統合せず残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：貸付への不安、焦りや疑いを読む候補。現実の貸付判断の根拠にはしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの8 — Eight of Pentacles

ID: `pentacles/eight-of-pentacles` / numeric_id: 71 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L72)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.

仕事、雇用、委託、職人技、技芸や事業の技能、おそらく準備段階にあるもの。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.

実を結ばない野心、虚栄、貪欲、強要、高利貸し。また、工夫に富む心が狡猾さと陰謀に向けられるという意味で、技能を持っていることを意味する場合もある。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A young man in business who has relations with the Querent; a dark girl.

相談者と関わりのある、事業に携わる若い男性；色の濃い少女。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> The Querent will be compromised in a matter of money-lending.

相談者は金銭の貸付の件で、不名誉な立場に陥る。

### 翻訳上の曖昧さ・選択

- `additional_upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。
- `additional_reversed` / **compromis**（unresolved）：不名誉な立場に陥れる／陥るという暫定訳。信用や立場が危うくなる含意を含むが、単なる妥協とは訳さない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：仕事や技能と、その準備・悪用の方向。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：雇用や委託、技能を読む候補。準備段階かもしれないという限定を残す。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：技能の不足だけでなく、技能が策略へ向く読みも保持する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの9 — Nine of Pentacles

ID: `pentacles/nine-of-pentacles` / numeric_id: 72 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L73)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Prudence, safety, success, accomplishment, certitude, discernment.

慎重さ、安全、成功、達成、確信、識別。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Roguery, deception, voided project, bad faith.

悪事、欺き、無効になった計画、不誠実。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Prompt fulfilment of what is presaged by neighbouring cards.

隣接するカードによって予示されることの、速やかな実現。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Vain hopes.

むなしい希望。

### 翻訳上の曖昧さ・選択

- `additional_upright` / **人物・配置・隣接等の条件**（translation_choice）：原文の人物や配置の条件はその文の適用範囲。条件を外して単独カードの無条件の意味にしない。歴史的な性別・身分の描写を現代の人物分類へ一般化しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：慎重さや達成と、不誠実さ・計画の不成立。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：安全や達成を読む候補。追加欄の実現内容は隣接カードに依存する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：欺きや計画の不成立を読む候補。希望が必ず無駄と断定しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルの10 — Ten of Pentacles

ID: `pentacles/ten-of-pentacles` / numeric_id: 73 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L74)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Gain, riches; family matters, archives, extraction, the abode of a family.

利益、富；家族の事柄、記録文書、家系、家族の住まい。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.

偶然、宿命、喪失、盗難、賭け事；ときには贈り物、持参金、年金。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Represents house or dwelling, and derives its value from other cards.

家または住居を表し、ほかのカードからその意味合いを得る。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> An occasion which may be fortunate or otherwise.

幸運かもしれず、そうでないかもしれない機会。

### 翻訳上の曖昧さ・選択

- `upright` / **extraction**（unresolved）：家系を暫定採用。家族・記録文書との並びを根拠とするが、独立した語義確認は未実施。
- `reversed` / **fatality**（unresolved）：宿命を暫定採用。不可避性・災難・死に関わる含意の選択は文脈の再確認が必要。現実の不可避な結果を意味するとは判定しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：富や家族・住居と、偶然性・喪失から贈与までの幅。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：家族や住まい、資産を読む候補。場所の意味は他のカードにも依存する。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：偶然・損失と贈与・年金を別の方向として残す。機会の良否を固定しない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルのペイジ — Page of Pentacles

ID: `pentacles/page-of-pentacles` / numeric_id: 74 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L75)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Application, study, scholarship, reflection; another reading says news, messages and the bringer thereof; also rule, management.

専心、勉学、学識、省察；別の読みでは知らせ、伝言、その運び手；また統治、管理。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Prodigality, dissipation, liberality, luxury; unfavourable news.

浪費、放蕩、気前のよさ、贅沢；好ましくない知らせ。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A dark youth; a young officer or soldier; a child.

色の濃い若者；若い将校または兵士；子供。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> Sometimes degradation and sometimes pillage.

ときには失墜、ときには略奪。

### 翻訳上の曖昧さ・選択

- `upright` / **別説・矛盾・反対の読み**（translation_choice）：原文が別の読み、食い違い、矛盾を示す箇所。異なる意味を一つの因果関係へ整形しない。
- `reversed` / **liberality**（unresolved）：気前のよさを採用。浪費や放蕩に並ぶためといって、悪い意味だけに訳さない。
- `additional_upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：学びや管理、知らせを運ぶ人物と、支出や不利な知らせ。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：学び・省察と、使者・管理の方向を読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：浪費と気前のよさを同じ評価にまとめず、知らせや喪失の方向も残す。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルのナイト — Knight of Pentacles

ID: `pentacles/knight-of-pentacles` / numeric_id: 75 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L76)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Utility, serviceableness, interest, responsibility, rectitude—all on the normal and external plane.

有用性、役に立つこと、利害、責任、廉直さ――すべて通常の外面的な領域において。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.

不活発、怠惰、その種の休息、停滞；また平静、落胆、不注意。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> An useful man; useful discoveries.

有用な男性；有用な発見。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> A brave man out of employment.

職を失っている勇敢な男性。

### 翻訳上の曖昧さ・選択

- `upright` / **interest**（unresolved）：利害を暫定採用。関心・利益・関与等の幅があり、この列挙での選択は要確認。
- `reversed` / **inertia**（unresolved）：上流の先頭小文字を原文引用で維持する。訳文はその表記差を占いの意味として解釈しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：実務的な有用性や責任と、停滞・平静の幅。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：有用さ・責任・廉直さを、通常の外面的領域という限定と共に読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：停滞や落胆と、平静や休息を別の候補として保持する。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルのクイーン — Queen of Pentacles

ID: `pentacles/queen-of-pentacles` / numeric_id: 76 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L77)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Opulence, generosity, magnificence, security, liberty.

豊かさ、寛大さ、壮麗さ、安全、自由。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Evil, suspicion, suspense, fear, mistrust.

悪、疑惑、宙ぶらりんの状態、恐れ、不信。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> Dark woman; presents from a rich relative; rich and happy marriage for a young man.

色の濃い女性；裕福な親族からの贈り物；若い男性には、裕福で幸福な結婚。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> An illness.

病気。

### 翻訳上の曖昧さ・選択

- `additional_upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。

### 辞典としての独自解釈（候補）

**今回の要約候補**：豊かさや寛大さ・自由と、不信や恐れ。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：豊かさ・安全と、贈り物や人物の条件を読む候補。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：疑惑や不信を読む候補。追加欄の病気は診断や予告にしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。

## ペンタクルのキング — King of Pentacles

ID: `pentacles/king-of-pentacles` / numeric_id: 77 / [固定原文](https://github.com/kw0809suzuki-oss/uranainoyakata/blob/0dd250333976cf9d6dd6ce47fb7866ecd4b35749/data/sources/tarot-rws-dataset/v1.1.0/upstream/data/cards.jsonl#L78)

出典：Arthur Edward Waite, The Pictorial Key to the Tarot (1911; text of the 1922 reprint). / `waite-pictorial-key-1910-part-iii`。カード固有の印刷ページは未確認。

### 正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/upright` / Part III §2

> Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.

勇敢さ、実現に結びつく知性、事業の才覚と通常の知的適性、ときには数学的な才能やこの種の達成；これらの道での成功。

### 逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/reversed` / Part III §2

> Vice, weakness, ugliness, perversity, corruption, peril.

悪徳、弱さ、醜さ、倒錯、腐敗、危険。

### 追加正位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_upright` / Part III §4

> A rather dark man, a merchant, master, professor.

やや色の濃い男性、商人、主人、教授。

### 追加逆位置｜原文と忠実訳（暫定）

参照：`/divinatory_meanings/additional_reversed` / Part III §4

> An old and vicious man.

年老いた悪徳のある男性。

### 翻訳上の曖昧さ・選択

- `upright` / **intelligence**（unresolved）：知らせと知性の両方の語義がある。今回、family/speedy/bad intelligenceでは知らせ、人物の能力記述では知性と訳し分けた。
- `additional_upright` / **dark**（unresolved）：色の濃いという暫定訳。髪・目・肌など、どの外見的特徴を指すかはこの欄だけでは確定しない。邪悪さや特定の民族を意味する語に置換しない。
- `upright` / **realizing intelligence**（unresolved）：実現に結びつく知性という暫定訳。知覚・理解・実現能力のどの含意を中心にするかは要確認。

### 辞典としての独自解釈（候補）

**今回の要約候補**：実務的な知性や適性・達成と、腐敗や危険。

根拠語句ID：upright:0, reversed:0, additional_upright:0, additional_reversed:0。分類：`source_based_editorial`。

**正位置**：事業や知的能力、達成を読む候補。数学的才能はときにという限定付き。

根拠語句ID：upright:0, additional_upright:0。分類：`source_based_editorial`。

**逆位置**：腐敗や危険を読む候補。年齢や外見から道徳性を判断する規則にはしない。

根拠語句ID：reversed:0, additional_reversed:0。分類：`source_based_editorial`。

**原典にはない実用上の問い**：このカードの各読みのうち、今の問いに関係するものはどれか。関係しない読みや、まだ決められない点は何か。

根拠語句ID：なし（独自の利用提案）。分類：`editorial_application`。

根拠IDは英日対照の段落を指す。要約候補と正逆の読みはAIによる独自の整理で、訳文や唯一の定義ではない。対照全文にある条件・別説・未採用の語句へ戻って読み直せる。

今回の要約候補は引用した意味欄の一部の関係を整理したもの。本文に残る他の語句・別説・保留は消えない。図像説明、他章、Golden Dawn対応、現代の定型解説を未採用とすることは、それらの解釈の成立を否定する判定ではない。実用上の問いは原典にない独自の補足。

### 未確認事項

- 歴史資料画像との独立再校合、個別の印刷ページの特定。
- 人間による語義・訳文・解釈の校閲。上記のunresolved語義は保留。
