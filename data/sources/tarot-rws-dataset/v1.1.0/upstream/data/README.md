---
language:
- en
license: cc-by-4.0
pretty_name: StarTarot English RWS Historical Meanings and Golden Dawn Correspondences
language_creators:
- found
multilinguality:
- monolingual
source_datasets:
- original
size_categories:
- n<1K
tags:
- tarot
- rider-waite-smith
- golden-dawn
- cultural-heritage
- digital-humanities
- tabular
- text
configs:
- config_name: default
  data_files:
  - split: train
    path: cards.jsonl
---

# StarTarot English RWS Historical Meanings and Golden Dawn Correspondences

Version 1.1.0 · English · 78 cards · DOI: https://doi.org/10.5281/zenodo.22917681 ·
all versions: https://doi.org/10.5281/zenodo.21381779

[Project website](https://startarot.online/) ·
[Dataset documentation](https://startarot.online/open-data) ·
[Tarot card guide](https://startarot.online/tarot-cards) ·
[Tarot spreads](https://startarot.online/tarot-spreads)

## Summary

This dataset gives one structured record for each of the 78 cards of the
Rider–Waite–Smith (RWS) tarot deck. Each record combines:

- A. E. Waite's divinatory meanings from Part III of *The Pictorial Key to the
  Tarot* (1911): the upright and reversed meaning of every card and, for the 56
  minor cards, his second, shorter set of "additional meanings";
- the Golden Dawn titles, the elemental, planetary, zodiacal and decan
  attributions, the Hebrew letters of the trumps and the celestial spheres of
  the court cards, as printed in *The Equinox*, vol. I, no. 8 (1912).

The data are compiled from the historical sources themselves — a transcription
and page images of Waite's book and a facsimile of the 1912 *Equinox* — and not
from any contemporary tarot dataset. Every value in this version was checked
against page images of those sources (see *Quality control*). No card images
are included.

## Changes in 1.1.0

Changes from 1.0.0 (DOI 10.5281/zenodo.21381780). No record, identifier or existing field was removed, renamed or re-typed, and the first 22 CSV columns keep their order.

Corrected values:

| Card | Field (CSV column) | 1.0.0 | 1.1.0 | Reason | Evidence |
|---|---|---|---|---|---|
| `04-emperor` | `correspondence.title` (`golden_dawn_title`) | Son of the Morning, Chief among the Mighty | Sun of the Morning, Chief among the Mighty | Correction: The 1912 printing reads "Sun of the Morning, chief among the Mighty"; "Son" is the reading of a modern re-keyed e-text. | The Equinox I(8), 1912, p. 150 |
| `wands/knight-of-wands` | `correspondence.title` (`golden_dawn_title`) | The Lord of the Flame and the Lightning; the King of the Spirits of Fire | The Lord of the Flame and Lightning; the King of the Spirits of Fire | Consistency: Every other title follows the table "The Titles of the Symbols", which prints "The Lord of the Flame and Lightning"; 1.0.0 had the wording of the later section heading (p. 159), which adds "the" (as does Crowley's 777, 1909). | The Equinox I(8), 1912, p. 147 |
| `cups/ace-of-cups` | `divinatory_meanings.upright` (`waite_upright`) | House of the true heart, joy, content, abode, nourishment, abun[U+00AD]dance, fertility; Holy Table, felicity hereof. | House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof. | Normalization: Removed an invisible soft hyphen (U+00AD) that the transcription copied from the scan's OCR layer; the print breaks the word across a line. | The Pictorial Key to the Tarot, 1922 reprint, p. 224 |
| `pentacles/three-of-pentacles` | `divinatory_meanings.upright` (`waite_upright`) | Métier, trade, skilled labour; usually, how-ever, regarded as a card of nobility, aristocracy, renown, glory. | Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory. | Emendation: The transcription kept a line-break hyphen; the print breaks "how-/ever" across a line. | The Pictorial Key to the Tarot, 1922 reprint, p. 276 |
| `pentacles/page-of-pentacles` | `divinatory_meanings.reversed` (`waite_reversed`) | Prodigality, dissipation, liberality. luxury; unfavourable news. | Prodigality, dissipation, liberality, luxury; unfavourable news. | Emendation: The transcription reads a full stop where the print has a comma with a worn tail (it descends below the baseline like the other commas on the page; the next word is lower-case). | The Pictorial Key to the Tarot, 1922 reprint, p. 260 |
| `05-hierophant` | `correspondence.hebrew_letter` (`golden_dawn_hebrew_letter`) | Vav | Vau | Consistency: Hebrew letter names now follow the list printed in the same issue of The Equinox; the letter itself is unchanged (see correspondence.hebrew_letter_char). | The Equinox I(8), 1912, Supplement (Sepher Sephiroth), p. xvi |
| `09-hermit` | `correspondence.hebrew_letter` (`golden_dawn_hebrew_letter`) | Yod | Yodh | Consistency: Hebrew letter names now follow the list printed in the same issue of The Equinox; the letter itself is unchanged (see correspondence.hebrew_letter_char). | The Equinox I(8), 1912, Supplement (Sepher Sephiroth), p. xvi |
| `21-world` | `correspondence.hebrew_letter` (`golden_dawn_hebrew_letter`) | Tav | Tau | Consistency: Hebrew letter names now follow the list printed in the same issue of The Equinox; the letter itself is unchanged (see correspondence.hebrew_letter_char). | The Equinox I(8), 1912, Supplement (Sepher Sephiroth), p. xvi |

Added:

- `correspondence.hebrew_letter_char` (CSV column `golden_dawn_hebrew_letter_char`): The Hebrew letter of a trump as a Unicode character (22 cards; null otherwise).
- `correspondence.hebrew_letter` (CSV column `golden_dawn_hebrew_letter`): Existing JSONL field, now also exported to the CSV.
- `divinatory_meanings.additional_upright` (CSV column `waite_additional_upright`): Waite's additional meaning from Part III §4 (56 minor cards; null for trumps).
- `divinatory_meanings.additional_reversed` (CSV column `waite_additional_reversed`): Waite's additional reversed meaning from Part III §4 (50 minor cards; null where the print has none and for trumps).
- `divinatory_meanings.additional_section` (CSV column `waite_additional_section`): "Part III §4" where an additional meaning is given; null for trumps.
- `correspondence.court_sphere_from_sign` (CSV column `golden_dawn_court_sphere_from_sign`): Start sign of the celestial sphere of a Knight, Queen or King (12 cards; null otherwise).
- `correspondence.court_sphere_from_degree` (CSV column `golden_dawn_court_sphere_from_degree`): Start degree within that sign (always 20).
- `correspondence.court_sphere_to_sign` (CSV column `golden_dawn_court_sphere_to_sign`): End sign of the sphere (the next sign).
- `correspondence.court_sphere_to_degree` (CSV column `golden_dawn_court_sphere_to_degree`): End degree within that sign (always 20).

Documentation: the source citations now name the edition that was actually transcribed and the exact pages used; the README adds a source registry, a complete field guide, the normalization and emendation rules, a versioning policy and a citation with year and version.

## Intended uses

Historical and cultural research, digital humanities, education, cataloguing,
information retrieval, and source-aware software that needs structured English
tarot reference data. It may be used as model input only when downstream
developers preserve source context, document transformations, evaluate
generated claims, and apply appropriate safety controls.

The release is not a benchmark, a labelled prediction task, or evidence that
tarot can predict events. It contains no personal data, user content,
conversation logs, card artwork, model outputs, or internal StarTarot editorial
prompts.

## Files

- `cards.jsonl` — recommended machine-readable form; one nested JSON record per card.
- `cards.csv` — flattened UTF-8 table for spreadsheets and analysis.
- `README.md` — this document: scope, sources, method, field guide, limitations.
- `LICENSE` — licensing and source-material notice.
- `checksums.sha256` — SHA-256 checksums of the four files above.

## Sources

### Primary sources

1. **Waite.** Arthur Edward Waite, *The Pictorial Key to the Tarot: Being
   Fragments of a Secret Tradition under the Veil of Divination*, with 78 plates
   from designs by Pamela Colman Smith. London: William Rider & Son, 1911 (date
   on the title page; the book was reviewed in *The Occult Review* of January
   1911, so it was on sale by late 1910). Library of Congress record 50041090.
   - Text actually used: the **1922 reprint** (London: William Rider & Son
     Limited; verso: "First Published 1910 / Reprinted 1922"), as transcribed
     on Wikisource — `Index:The_Pictorial_Key_to_the_Tarot.pdf`, pages 176 and
     178–329 (Part III), all proofread twice ("validated"); each page at its
     latest revision as of 26 May 2026 (newest revision 15981315). The
     published wording comes from 67 of these pages; their revision IDs are
     listed under *Provenance pins*. Main text taken 14 July 2026, §4 on
     23 September 2026; both collated with the page images on 23 September 2026.
     https://en.wikisource.org/wiki/Index:The_Pictorial_Key_to_the_Tarot.pdf
   - Page images of the same reprint: Wikimedia Commons,
     `File:The_Pictorial_Key_to_the_Tarot.pdf` (SHA-1
     `de71095d2be61794af94c3d8eb68ecb7f65e9740`).
     https://commons.wikimedia.org/wiki/File:The_Pictorial_Key_to_the_Tarot.pdf
   - Version 1.0.0 cited Wikisource revision 15274510 of the page
     `The_Pictorial_Key_to_the_Tarot/Part_3`. That page only transcludes the
     Index pages above and does not fix their text, so it is not a pin.
2. **The Equinox.** [Golden Dawn "Book T" material; no byline — the epigraph
   is credited "Fra. P." and the closing note is signed "O. M.", both Aleister
   Crowley; the issue was edited by Soror Virakam.] "A Description of the Cards
   of the Tarot with Their Attributions; Including a Method of Divination by
   Their Use." *The Equinox* 1, no. 8 (September 1912): 143–210. London:
   Wieland & Co. The article carries no Liber number in 1912; Crowley's A∴A∴
   syllabus later catalogued it as "Liber LXXVIII" (*The Equinox* 1, no. 10,
   1913, p. 47).
   - Facsimile used: photographic scan of an original copy, 100th Monkey Press,
     https://100thmonkeypress.com/biblio/acrowley/books/equinox_1_8_1912/equinox_1_8_text.pdf
   - The Hebrew letter names follow the list printed in the Supplement of the
     same issue ("Sepher Sephiroth", p. xvi).

Crowley's *777* (London: Walter Scott, 1909) had already printed most of these
correspondences in its tables: the titles of the trumps, Aces, court and small
cards, the decans, and the celestial spheres of the court cards (cols.
LXXI–LXXIV). It differs from the 1912 *Equinox* in a few readings ("the Oracle
of the Mighty Gods", "the Lord of the Gate of Death", the Hermit's two titles in
reverse order, "Pleasure" for the Four of Cups, and "the Lord of the Flame and
the Lightning", the wording of the 1912 heading on p. 159); the dataset follows
the 1912 *Equinox* throughout. *777* was checked in a photographic reprint of
its tables (Israel Regardie, ed., *777 and Other Qabalistic Writings of Aleister
Crowley*, Samuel Weiser; first published 1973 as *The Qabalah of Aleister
Crowley*), not in a copy of the 1909 printing.

### Source registry

Every record lists its sources in `source_ids`.

| `source_id` | Source | Used for | Pages |
|---|---|---|---|
| `waite-pictorial-key-1910-part-iii` | Waite, *The Pictorial Key to the Tarot*, Part III (1911; text of the 1922 reprint) | `divinatory_meanings.*` | §2 (minor cards) pp. 170–282; §3 (trumps) pp. 283–287; §4 (additional meanings) pp. 288–293 |
| `equinox-1912-liber-lxxviii` | *The Equinox* 1, no. 8 (1912), "A Description of the Cards of the Tarot…" | `correspondence.*` | table "The Titles of the Symbols", pp. 147–152 (Aces and court cards pp. 147–148; small cards pp. 148–149; trumps pp. 150–152); court labels pp. 157, 159; court spheres pp. 158–171; Hebrew letter names, Supplement p. xvi |

The identifiers are opaque and stable. "1910" and "liber-lxxviii" inside them
are labels kept from 1.0.0, not bibliographic claims; the same holds for the
string "Liber LXXVIII" in `correspondence.system`. Page numbers for Waite are
those of the 1922 reprint; it collates like the first edition (xii + 340
pages), but the first edition's pagination was not checked.

### Transcriptions consulted but not used as sources

- The sacred-texts.com transcription of Waite's book (J. B. Hare, 2000/2003,
  labelled "[1911]") and L. W. de Laurence's *The Illustrated Key to the Tarot*
  (Chicago: de Laurence, Scott & Co., 1916; the Library of Congress
  copyright-deposit copy, Internet Archive `illustratedkeyto01dela`), an
  unauthorized, edited resetting of Waite's text, served as witnesses for
  collation only. A 1918 printing of de Laurence's book (Internet Archive
  `illustratedkeyto00dela`) has the same setting.
- The Celephaïs Press / O.T.O. e-text of *The Equinox* I(8) and the
  sacred-texts.com page "Liber LXXVIII" are re-keyed texts from one keying,
  with errors: "Son of the Morning" (e-text), "The Magus of Bet" and "Koph"
  for Kaph (sacred-texts), "Flame and Lighting" (both). They were not used;
  all Golden Dawn values were checked against the 1912 facsimile.

### Secondary and contextual literature

None of these works was used to derive any field.

- Emily E. Auger, review of T. Susan Chang, *36 Secrets: A Decanic Journey
  through the Minor Arcana of the Tarot* (2021); T. Susan Chang and M. M.
  Meleen, *Tarot Deciphered: Decoding Esoteric Symbolism in Modern Tarot*
  (2021); and T. Susan Chang, *Tarot Correspondences: Ancient Secrets for
  Everyday Readers* (2018). *Correspondences* 10, no. 2 (2022): 415–419.
  A short account of Book T's contents and its place in the English esoteric
  tarot tradition.
- S. L. MacGregor Mathers, *The Tarot: Its Occult Signification, Use in
  Fortune-Telling, and Method of Play, &c.* London: George Redway, 1888.
- Papus [Gérard Encausse], *Le Tarot des Bohémiens: le plus ancien livre du
  monde*. Paris: Georges Carré, 1889. English translation by A. P. Morton,
  *The Tarot of the Bohemians: Absolute Key to Occult Science*. London:
  Chapman and Hall, 1892.
- P. D. Ouspensky, *The Symbolism of the Tarot: Philosophy of Occultism in
  Pictures and Numbers*, translated by A. L. Pogossky. St Petersburg: Trood
  Printing and Publishing Co., 1913.
- A. E. Thierens, *The General Book of the Tarot*, with an introduction by
  A. E. Waite. London: Rider & Co., n.d. [c. 1928–1930]; US issue
  Philadelphia: David McKay, [1930].

## Method

### Waite's divinatory meanings (§2 and §3)

- `upright` is the text that follows the printed label "Divinatory Meanings:"
  (minor cards, §2) or the card's heading (trumps, §3), up to "Reversed:";
  `reversed` is the text after "Reversed:". Interpretive sentences inside the
  picture descriptions that precede the label are not included.
- The Two of Cups has no reversed line in §2. Its `reversed` value comes from
  §4 ("Two.—… Reversed: Passion."), as in 1.0.0, and `reversed_section` says
  so; it therefore equals its `additional_reversed`.
- The wording follows the Wikisource transcription — British and archaic
  spellings ("shews", "connexion"), capitals ("Querent"), punctuation — except
  for the editorial interventions below. Typography is normalized as in the
  transcription: no space before ";" and ":" (the print sets one), ASCII
  apostrophes, no italics, em dashes closed up as printed, and words broken
  at line ends joined.
- Errors of the print itself are kept as printed, listed here so that nobody
  "fixes" them silently: The Star, upright, ends with a comma ("bright
  prospects,"); Judgement, upright, reads "total loss though lawsuit"
  (probably for "through"); the Knight of Pentacles, reversed, begins with a
  lower-case "inertia". The Four of Pentacles prints "Reversed ;" with a
  semicolon; the split into `upright` and `reversed` is unaffected.
- Three words break at a hyphen that ends a printed line, so the page itself
  cannot show whether the hyphen belongs to the word: "over-/kindness" (The
  Hierophant, reversed), "inter-/relation" (Two of Cups, upright) and
  "Good-/will" (Queen of Wands, additional reversed). The dataset keeps the
  transcription's resolutions, "over-kindness", "interrelation" and
  "Good-will", as editorial decisions. Other evidence supports two of them:
  §4 prints "ill-will" with a hyphen in mid-line twice (pp. 289, 291), and
  de Laurence's resetting (see *Sources*) prints "over-kindness" and
  "Good-will" in mid-line. For "interrelation" the evidence is divided: de
  Laurence sets "inter-relation" here but "interrelation" at the only other
  occurrence of the word in the book (p. 63, where the 1922 reprint again
  breaks it at the end of a line).

### Waite's additional meanings (§4)

- Part III §4, "Some Additional Meanings of the Lesser Arcana", gives a second,
  shorter set of meanings for each of the 56 minor cards. `additional_upright`
  is the text after the entry heading (for example "Wands. King.—") up to
  "Reversed:", `additional_reversed` the text after it, and
  `additional_section` is `Part III §4`. Trumps have none (null).
- Six Wands entries — the Ten, Nine, Eight, Seven, Three and Two — have no
  reversed line in print; their `additional_reversed` is null.
- Waite himself warns that these meanings are "very often in disagreement with
  those previously given" (p. 294); both sets are kept side by side.
- The same transcription and normalization rules apply as for §2 and §3.

### Editorial interventions

Each intervention corrects the transcription against the page images and is
also listed under *Changes* for the version that introduced it:

| Card | Field | Transcription | Published | Reason | Evidence |
|---|---|---|---|---|---|
| Ace of Cups | upright | abun[U+00AD]dance | abundance | Invisible soft hyphen (U+00AD) copied from the scan's OCR layer; the print breaks the word across a line (abun- / dance). | 1922 reprint, p. 224 |
| Three of Pentacles | upright | how-ever | however | Line-break hyphen kept by the transcription; the print breaks the word across a line (how- / ever). | 1922 reprint, p. 276 |
| Page of Pentacles | reversed | liberality. luxury | liberality, luxury | The mark after "liberality" is a comma whose tail did not print: it descends below the baseline like the commas on the same page, not like its full stops, and the next word is lower-case in a comma list. The sacred-texts transcription and de Laurence's 1916 text also read a comma. | 1922 reprint, p. 260 |
| Three of Cups | additional_upright | advancement for military man | advancement for a military man | The transcription omits the word "a" printed at the end of the line ("for a" / "military man"). | 1922 reprint, p. 290 |
| Three of Cups | additional_reversed | cure. end | cure, end | The mark after "cure" is a comma whose tail did not print: at 300 ppi it reaches about 3 px below the baseline, like the head of a comma, while the full stop on the same line ends on the baseline; the next word is lower-case in a comma list. The sacred-texts transcription and de Laurence's 1916 text also read a comma. | 1922 reprint, p. 290 |
| Ten of Pentacles | additional_upright | de- rives | derives | The word is hyphenated across a page break ("de-" at the foot of p. 292, "rives" at the head of p. 293); the transcription left the halves apart. | 1922 reprint, pp. 292–293 |

Hashes, each the SHA-256 of `json.dumps(meanings, ensure_ascii=False,
sort_keys=True)` encoded as UTF-8, where `meanings` maps each card `name` to
the listed fields:

- §2/§3 (`upright`, `reversed`, `upright_section`, `reversed_section`):
  published text `b3059f5ac8bcdb4ff44677ed54123a05fcee42351c9e40059b3f6ce1c5c18d2c` (reproducible from `cards.jsonl`); frozen
  extraction before the interventions `b72bdaae70f432dd1e68fc662f5d611c639a35e4916673b2531be0618e6a0bb7`.
- §4 (`additional_upright`, `additional_reversed`, the 56 minor cards only):
  published text `ff2d708aa51b5506bbc8b0de966f4c14dd21e96e9bfa9501f59ca95c94341a60`; frozen extraction before the
  interventions `4cf8b5f1ec7b26681b5ac5c4d1c4edb98e46b13b95ae9aef4415fe383e275abb`.

### Golden Dawn correspondences

- Source: the table "The Titles of the Symbols" in *The Equinox* (pp. 147–152).
  It gives the titles of the four Aces and sixteen court cards; for each of the
  36 small cards, "Lord of …" with the planet ruling its decan and the sign;
  and for each of the 22 trumps its title, Hebrew letter and attribution.
- **Court cards.** *The Equinox* itself labels the Golden Dawn King, Prince and
  Princess as Knight, King and Knave (table, pp. 147–148). Its note on p. 159
  explains: "Note that the Kings are now called Knights, and the Princes are
  now called Kings. … Remember only that the horsed figures refer to the Yod of
  Tetragrammaton, the charioted figures to the Vau." P. 157: "The Four
  Princesses are the Knaves of the Tarot Pack". Each court card's description
  also prints its element formula ("△ of △" and so on). The dataset keeps these
  labels, with the Knave as the RWS Page: Knight = Fire, Queen = Water,
  King = Air, Page = Earth of the suit's element. Modern systems that give the
  King Fire and the Knight Air follow a different convention.
- **Titles** are normalized: principal words are capitalized ("Chief",
  "Life", "Dweller", "Restored", "Unfulfilled"); a second title introduced by
  "the" is joined with "; " (the table uses ":", ";" or ","), while the
  Emperor's "Sun of the Morning, Chief among the Mighty" keeps its comma;
  "The" is prefixed to the Ace and small-card titles ("The Root of the Powers
  of Fire", "The Lord of Strife"); the Greek word in the Fool's title,
  "The Spirit of Αἰθήρ", is transliterated "Aether"; spellings are as printed
  ("Valour", "Illusionary"). Where the source varies internally, the table
  reading is used (the list on p. 174 has "Abundant Success" for the Eight of
  Cups; the table and the card's heading have "Abandoned Success").
- **Hebrew letters** are printed as glyphs in the table. `hebrew_letter_char`
  gives the glyph (regular, not final, forms); `hebrew_letter` gives the name
  as spelled in the letter list of the same issue (Supplement, p. xvi):
  Aleph, Beth, Gimel, Daleth, Heh, Vau, Zayin, Cheth, Teth, Yodh, Kaph, Lamed,
  Mem, Nun, Samekh, Ayin, Peh, Tzaddi, Qoph, Resh, Shin, Tau. The list prints
  "Kheth (Cheth)"; the dataset keeps "Cheth", the form in parentheses, which is
  also the value of 1.0.0.
- **Judgement and The World** carry two printed attributions each: "Spirit
  and Fire" and "Earth and Saturn". The dataset stores the attribution of the
  letter's class in `value` (Shin is a mother letter, Fire; Tau is a double
  letter, Saturn) and the other in `additional_attribution`, as the Supplement
  of the same issue explains: Shin and Tau "also serve to signify the Elements
  of Spirit and of Earth" (p. xvi).
- **Decans.** The table prints the ruling planet and the sign in decan order
  but no degrees; `degree_start` and `degree_end` (0–10, 10–20, 20–30,
  half-open) are derived from that order. *The Equinox* counts the decans from
  the star Regulus ("Cor Leonis", p. 176), so the degrees are positions within
  the sign, not longitudes in the tropical zodiac.
- **Court spheres.** Each Knight, Queen and King rules 30 degrees of the zodiac,
  from the 20th degree of one sign to the 20th degree of the next (pp. 159–171);
  the twelve ranges cover the zodiac exactly once. Some are printed "from
  above" a degree or in decans ("to the First Two Decans of Sagittarius"); all
  of them mean the 20th degree, as *777* confirms by giving the same twelve
  ranges in degrees (cols. LXXI–LXXIV; for example 20° Cancer to 20° Leo where
  the 1912 text reads "to the second Decan of Leo"). The dataset makes no claim
  about open or closed ends. The Knaves (the Golden Dawn Princesses, the RWS
  Pages) rule the four quadrants of the heavens around the North Pole and are
  the thrones of the Aces (pp. 158, 162, 165, 168, 171); they have no zodiacal
  range, so their `court_sphere_*` fields are null.
- **Printing faults** of the 1912 issue that the dataset reads through: the
  table sets Scorpio with the Virgo sort in four cells (the Five, Six and Seven
  of Cups, and Death), and so does the sphere of the Knight of Wands (p. 159);
  the sphere of the Queen of Pentacles (p. 170) sets Capricorn with an unusual
  sort. The sign order and the card descriptions admit only one reading. The
  Knave of Swords is printed "Throne of the Ace of Wands" (p. 168), a slip for
  Swords; the Knaves carry no data field, so nothing depends on it.
- **Numbering** follows the RWS deck: Strength is 8 and Justice 11 (*The
  Equinox* numbers Fortitude 11 and Justice 8). Attributions follow the card:
  Strength is Teth/Leo, Justice is Lamed/Libra.
- Not included: the Golden Dawn card descriptions and meanings, and the method
  of divination.
- A yes/no field is deliberately absent: it is a reading convention, not a
  property of the historical sources.

## Field guide

### `cards.jsonl`

| Field | Type | Description |
|---|---|---|
| `card_id` | string | Stable identifier: `00-fool` … `21-world`; `<suit>/<rank>-of-<suit>` for minor cards. |
| `numeric_id` | integer 0–77 | Stable ordinal: trumps 0–21, then wands, cups, swords, pentacles, each Ace…Ten, Page, Knight, Queen, King. |
| `name` | string | English card name as on RWS cards ("Strength", "Judgement", "Wheel of Fortune"). |
| `arcana` | `major` \| `minor` | |
| `suit` | string or null | `wands`, `cups`, `swords`, `pentacles`; null for trumps. |
| `rank` | string or null | `Ace`, `Page`, `Knight`, `Queen`, `King`; null for trumps and for the numbered cards Two–Ten. |
| `number` | integer 0–21 | Trump number (RWS order); 1–10 for Ace–Ten; Page 11, Knight 12, Queen 13, King 14 (a StarTarot ordering, not in the sources). |
| `suit_element` | string or null | Fire (wands), Water (cups), Air (swords), Earth (pentacles); null for trumps. |
| `divinatory_meanings.upright` | string | Waite's wording, see *Method*. |
| `divinatory_meanings.reversed` | string | Waite's reversed wording. |
| `divinatory_meanings.upright_section`, `reversed_section` | string | `Part III §2` (minor cards) or `Part III §3` (trumps); Two of Cups reversed: `Part III §4 (additional meaning; §2 has no reversed line)`. |
| `divinatory_meanings.source_id` | string | `waite-pictorial-key-1910-part-iii`. |
| `divinatory_meanings.editorial_note` | string | Constant caution about historical wording. |
| `divinatory_meanings.additional_upright` | string or null | Waite's additional meaning from §4; null for trumps. Added in 1.1.0. |
| `divinatory_meanings.additional_reversed` | string or null | Waite's additional reversed meaning from §4; null for trumps and for six Wands cards without one. Added in 1.1.0. |
| `divinatory_meanings.additional_section` | string or null | `Part III §4` for minor cards; null for trumps. Added in 1.1.0. |
| `correspondence.system` | string | `Golden Dawn Book T / Liber LXXVIII`; court cards add `, mapped to RWS labels` (a label kept from 1.0.0: the labels are those printed in *The Equinox*, see *Method*). |
| `correspondence.title` | string | Golden Dawn title, normalized (see *Method*). |
| `correspondence.hebrew_letter` | string or null | Name of the trump's Hebrew letter as spelled in *The Equinox*; null for minor cards. |
| `correspondence.hebrew_letter_char` | string or null | The same letter as a Unicode character; null for minor cards. Added in 1.1.0. |
| `correspondence.kind` | string | `element` (3 trumps), `planet` (7), `zodiac` (12), `root` (4 Aces), `decan` (36 small cards), `court_element` (16). |
| `correspondence.value` | string | Primary attribution: element, planet or sign; `Root of Fire` etc. for Aces; `Mars in Aries` etc. for decans; `Fire of Air` etc. for court cards (element of the rank, then of the suit). |
| `correspondence.additional_attribution` | string or null | `Spirit` (Judgement), `Earth` (The World); otherwise null. |
| `correspondence.planet` | string or null | Planet of planetary trumps and of decans. |
| `correspondence.zodiac` | string or null | Sign of zodiacal trumps and of decans. |
| `correspondence.degree_start`, `degree_end` | integer or null | Decan range within the sign: 0–10, 10–20 or 20–30 (half-open); null otherwise. |
| `correspondence.note` | string | Short methodological note. |
| `correspondence.court_sphere_from_sign`, `court_sphere_from_degree` | string / integer or null | Start of the celestial sphere of a Knight, Queen or King (degree always 20); null for all other cards, including the Pages. Added in 1.1.0. |
| `correspondence.court_sphere_to_sign`, `court_sphere_to_degree` | string / integer or null | End of that sphere: the 20th degree of the next sign. Added in 1.1.0. |
| `source_ids` | array of strings | See *Source registry*. |

### `cards.csv`

UTF-8 without BOM, comma-separated, RFC 4180 quoting, CRLF line endings, one
header row; an empty cell means null. Columns 1–22 are those of 1.0.0;
columns 23–31 were appended in 1.1.0.

| Column | JSONL field |
|---|---|
| `card_id` … `suit_element` | same names |
| `waite_upright`, `waite_reversed` | `divinatory_meanings.upright`, `.reversed` |
| `waite_upright_section`, `waite_reversed_section` | `divinatory_meanings.upright_section`, `.reversed_section` |
| `golden_dawn_title`, `golden_dawn_kind`, `golden_dawn_value` | `correspondence.title`, `.kind`, `.value` |
| `golden_dawn_additional_attribution` | `correspondence.additional_attribution` |
| `golden_dawn_planet`, `golden_dawn_zodiac` | `correspondence.planet`, `.zodiac` |
| `decan_degree_start`, `decan_degree_end` | `correspondence.degree_start`, `.degree_end` |
| `meaning_source_id`, `correspondence_source_id` | the two entries of `source_ids` |
| `golden_dawn_hebrew_letter`, `golden_dawn_hebrew_letter_char` | `correspondence.hebrew_letter`, `.hebrew_letter_char` |
| `waite_additional_upright`, `waite_additional_reversed`, `waite_additional_section` | `divinatory_meanings.additional_upright`, `.additional_reversed`, `.additional_section` |
| `golden_dawn_court_sphere_from_sign`, `…_from_degree`, `…_to_sign`, `…_to_degree` | `correspondence.court_sphere_from_sign`, `.court_sphere_from_degree`, `.court_sphere_to_sign`, `.court_sphere_to_degree` |

`divinatory_meanings.editorial_note`, `correspondence.system` and
`correspondence.note` are descriptive notes and appear only in the JSONL.

The Hugging Face viewer loads `cards.jsonl` as its `train` split; "train" is
the platform's split name, not a statement that the records are training
labels.

## Quality control

- Waite, §2 and §3: each of the 155 published strings was read against the
  page images of the 1922 reprint, word by word and mark by mark, and compared
  with the Wikisource transcription (identical apart from the listed
  interventions) and with an independent transcription (sacred-texts.com);
  doubtful marks were measured on the native scan pixels.
- Waite, §4: each of the 106 strings (56 upright, 50 reversed) was read against
  the page images (pp. 288–293) and compared with the Wikisource and
  sacred-texts transcriptions and with de Laurence's 1916 text.
- Golden Dawn: all 78 records were compared with the 1912 facsimile
  (pp. 147–152, 157–171) and the letter list in its Supplement (p. xvi); the
  twelve court spheres were read on the page images.
- Package checks: 78 unique identifiers; `cards.csv` and `cards.jsonl` agree;
  text is UTF-8 in NFC with no control or invisible format characters and no
  letters outside the Latin script except the Hebrew glyphs; the twelve court
  spheres cover the zodiac exactly once; released files match their recorded
  checksums; the differences from the previous version are exactly the ones
  listed under *Changes*. These checks run in StarTarot's build validation,
  whose code is not public.
- Not checked: the text of the first edition (1911). The readings are those of
  the 1922 reprint.

## Provenance pins

Wikisource pages of `Index:The_Pictorial_Key_to_the_Tarot.pdf` that carry the
published wording, as `scan page:revision`: 183:15966459 185:15928032 187:15928028 189:15928026 191:15928022 193:15928019 195:15963432 197:15963433 199:15928011 201:15928008 203:15973250 205:15973255 207:15973256 209:15927999 211:15927995 213:15927993 215:15927991 217:15928084 219:15946070 221:15966227 223:15969118 225:15927980 227:15973258 229:15973236 231:15973313 233:15973315 235:15970820 237:15927964 239:15927962 241:15927957 243:15966224 245:15965937 247:15965933 249:15959384 251:15959385 253:15927941 255:15927938 257:15959386 259:15959410 261:15927929 263:15927927 265:15927925 267:15927923 269:15927921 271:15927917 273:15927915 275:15927913 277:15927911 279:15966228 281:15973319 283:15927898 285:15973320 287:15973321 289:15973322 291:15973328 293:15973784 296:15974236 297:15927879 298:15973325 299:15974507 300:15974505 301:15974508 302:15981227 303:15981234 304:15981240 305:15981245 306:15981253.

## Accuracy boundary

This is a historical and cultural reference dataset, not a scientific model of
prediction. Tarot meanings vary by school, period, deck, spread, surrounding
cards, and reader. Waite's wording is sometimes archaic or person-specific and
should be contextualized rather than treated as a demographic description or
literal forecast. The data must not replace medical, legal, financial, or
mental-health advice.

## License and source-material notice

StarTarot's selection, normalization, structure and documentation are licensed
under CC BY 4.0 (see `LICENSE`). The quoted wording and the attributions come
from works in the public domain in the United States and in the European Union
and the United Kingdom; the license creates no new exclusive rights in them.

When you adapt the data, credit StarTarot, link to CC BY 4.0 and indicate your
changes. We also ask — this is a request, not a license condition — that you
keep the source registry, and please do not imply endorsement by the
historical authors or by StarTarot.

## Versioning and mirrors

- Versioning: MAJOR for renaming, removing, re-ordering or re-typing an existing
  field, changing identifiers or removing records; MINOR for appended fields,
  columns or files; PATCH for corrected values and documentation. A release that
  both corrects values and appends a field is MINOR.
- Zenodo holds the archival record of every version and its DOI; the concept DOI
  https://doi.org/10.5281/zenodo.21381779 always resolves to the latest version. Earlier
  versions stay available there.
- Hugging Face (tag `v1.1.0`) and Kaggle host byte-identical mirrors. Match the
  version number and the SHA-256 checksums before combining copies from different
  services.

## Citation

Cite the DOI of the version you used:

StarTarot. (2026). *StarTarot English RWS Historical Meanings and Golden Dawn Correspondences* (Version 1.1.0) [Data set]. Zenodo.
https://doi.org/10.5281/zenodo.22917681

```bibtex
@misc{startarot_rws_1_1_0,
  author    = {{StarTarot}},
  title     = {StarTarot English RWS Historical Meanings and Golden Dawn Correspondences},
  year      = {2026},
  version   = {1.1.0},
  publisher = {Zenodo},
  doi       = {10.5281/zenodo.22917681},
  note      = {Data set}
}
```

## Curator

Compiled and maintained by [StarTarot](https://startarot.online/), a tarot and
astrology website in nine languages. The same Golden Dawn layer appears as the
"System attribution" on every card page of its
[tarot card guide](https://startarot.online/tarot-cards), and the
[dataset page](https://startarot.online/open-data) documents this release in
all nine languages.

## Contact

Corrections and questions: help@startarot.online (https://startarot.online/contact).
Confirmed corrections are published as a new version with a change log.
