# Tarot RWS dataset: Waite's meanings and Golden Dawn correspondences for all 78 cards

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21381779.svg)](https://doi.org/10.5281/zenodo.21381779)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

One structured record for each of the 78 cards of the Rider–Waite–Smith tarot deck:

- **A. E. Waite's divinatory meanings** from *The Pictorial Key to the Tarot* (1911), upright and
  reversed, plus his shorter "additional meanings" for the 56 minor cards;
- **the Golden Dawn correspondences** as printed in *The Equinox*, vol. I, no. 8 (1912): card
  titles, elemental, planetary and zodiacal attributions, decans, the Hebrew letters of the trumps
  and the celestial spheres of the court cards.

Compiled from the historical sources themselves (a transcription and page images of Waite's book,
a facsimile of the 1912 *Equinox*), not from any modern tarot dataset. Every value was checked
against page images of the sources. No card images are included.

**Current version: 1.1.0** · English · 78 records ·
DOI [10.5281/zenodo.22917681](https://doi.org/10.5281/zenodo.22917681)

## Files

The release package lives in [`data/`](data/), byte for byte the same as on Zenodo, Hugging Face and
Kaggle:

| File | What it is |
|---|---|
| [`data/cards.jsonl`](data/cards.jsonl) | One nested JSON record per card (recommended). |
| [`data/cards.csv`](data/cards.csv) | The same data as a flat UTF-8 table, 31 columns. |
| [`data/README.md`](data/README.md) | Full documentation: sources, method, field guide, quality control, limitations. |
| [`data/LICENSE`](data/LICENSE) | Licence and source-material notice. |
| [`data/checksums.sha256`](data/checksums.sha256) | SHA-256 of the four files above (`cd data && sha256sum -c checksums.sha256`). |

## Quick start

```python
import pandas as pd

cards = pd.read_json(
    "https://raw.githubusercontent.com/StarTarotOnline/tarot-rws-dataset/main/data/cards.jsonl",
    lines=True,
)
fool = cards.set_index("card_id").loc["00-fool"]
print(fool["divinatory_meanings"]["upright"])
# Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.
```

With the Hugging Face `datasets` library:

```python
from datasets import load_dataset

cards = load_dataset("StarTarotOnline/tarot-rws-historical-meanings", split="train")
```

A record, shortened:

```json
{
  "card_id": "00-fool",
  "name": "The Fool",
  "arcana": "major",
  "divinatory_meanings": {
    "upright": "Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.",
    "reversed": "Negligence, absence, distribution, carelessness, apathy, nullity, vanity."
  },
  "correspondence": { "system": "Golden Dawn Book T / Liber LXXVIII", "...": "..." }
}
```

Every field is described in the [field guide](data/README.md#field-guide).

## Versions

| Version | Released | DOI | What changed |
|---|---|---|---|
| [1.1.0](https://github.com/StarTarotOnline/tarot-rws-dataset/releases/tag/v1.1.0) | 2026-09-23 | [10.5281/zenodo.22917681](https://doi.org/10.5281/zenodo.22917681) | Values corrected against page images of the sources; added Waite's additional meanings, the Hebrew letters as characters and the celestial spheres of the court cards. See the [change log](data/README.md#changes-in-110). |
| [1.0.0](https://github.com/StarTarotOnline/tarot-rws-dataset/releases/tag/v1.0.0) | 2026-07-15 | [10.5281/zenodo.21381780](https://doi.org/10.5281/zenodo.21381780) | First release. |

Each version is a tagged commit, so `git diff v1.0.0 v1.1.0 -- data/cards.csv` shows every corrected
value. The concept DOI [10.5281/zenodo.21381779](https://doi.org/10.5281/zenodo.21381779) always
resolves to the latest version.

## Mirrors

- Zenodo (archival record and DOIs): https://doi.org/10.5281/zenodo.21381779
- Hugging Face: https://huggingface.co/datasets/StarTarotOnline/tarot-rws-historical-meanings
- Kaggle: https://www.kaggle.com/datasets/startarot/startarot-tarot-card-meanings-all-78-rws-cards
- Documentation in nine languages: https://startarot.online/open-data

## Citation

Cite the DOI of the version you used (GitHub's "Cite this repository" gives the same):

> StarTarot. (2026). *StarTarot English RWS Historical Meanings and Golden Dawn Correspondences*
> (Version 1.1.0) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.22917681

## Licence

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) for the dataset selection, normalization,
structure and documentation. Waite's text (1911) and *The Equinox* (1912) are in the public domain;
see [`LICENSE`](LICENSE) for the full notice.

## About

Compiled and maintained by [StarTarot](https://startarot.online/), a tarot and astrology website in
nine languages, where the same Golden Dawn layer appears on every page of the
[tarot card guide](https://startarot.online/tarot-cards). Corrections are welcome as issues here or
at help@startarot.online; confirmed corrections are published as a new version with a change log.
