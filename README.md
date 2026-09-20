# 📚 Industrial Research Publisher (`industrial-research-publisher`)
**Automated Doctoral Monograph Compiler, Ed25519 Cryptographic Provenance & Zenodo DOI Minting Engine**
*Part of the 6-Repository Cyber-Physical Energy Research Suite (`@healthearthack`)*

[![Automated Monograph Publisher](https://github.com/healthearthack/industrial-research-publisher/actions/workflows/publish_monograph.yml/badge.svg)](https://github.com/healthearthack/industrial-research-publisher/actions)
[![Zenodo DOI Minting: Enabled](https://img.shields.io/badge/DOI-Automated%20Zenodo%20Minting-blue.svg)](https://zenodo.org)
[![Cryptographic Provenance: Ed25519](https://img.shields.io/badge/Signature-Ed25519%20SHA--256-brightgreen.svg)](src/)
[![Format: Typst & LaTeX](https://img.shields.io/badge/Output-Camera--Ready%20PDF-red.svg)](template/)

---

## 🔬 Purpose & Industrial Capability
This repository serves as **Puzzle Piece #5**: the automated research synthesizer and academic/corporate publishing powerhouse. Whenever upstream research runs converge:
1. **Aggregates Multi-Source Puzzle Pieces**:
   - Macro/Meso Atmospheric & Remote Sensing (`earth-atmospheric-telemetry`)
   - Reservoir Hydraulics, Thermodynamics & NIST SP 800-82 Invariants (`smackover-oil-lithium-energy`)
   - Statutory Compliance & Tax Credit Auditing (`energy-law-governance`)
   - Veterans Transition & Islamic Waqf Social Impact (`crescent-vets-energy-initiative`)
2. **Cryptographic Validation**: Signs all input data packages using Ed25519 and SHA-256 digests.
3. **Automated Document Synthesis**: Automatically compiles camera-ready, peer-reviewed industrial whitepapers and doctoral monographs via Typst / LaTeX CLI.
4. **Permanent DOI Registration**: Mints official, citable Digital Object Identifiers (DOIs) via the **Zenodo / DataCite REST API** (`10.5281/zenodo.xxxxxxx`).
5. **Downstream Syndication**: Emits a `repository_dispatch` event to `thepolka.cloud` to immediately syndicate the paper via RSS 2.0 and the 3D portal.

---

## 🚀 How Automated DOI Minting Works

```
┌──────────────────────────────────────────────┐
│  Upstream Data Artifacts (Repos 1, 2, 3, 4)  │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│       compile_monograph.py (Typst CLI)       │
│    Outputs: monograph.pdf & metadata.json    │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│       mint_doi.py (Zenodo REST API)          │
│    Deposits PDF -> Assigns Citable DOI       │
└──────────────────────┬───────────────────────┘
                       │ repository_dispatch
                       ▼
┌──────────────────────────────────────────────┐
│       thepolka.cloud (feed.xml & Portal)     │
└──────────────────────────────────────────────┘
```

---

## 📜 Canonical Monograph Output Specification
Each synthesized industrial whitepaper includes:
* Official Permanent DOI URL: `https://doi.org/10.5281/zenodo.XXXXX`
* Full Author Attribution & ORCID link.
* Machine-Generated BibTeX Citation Block.
* Cryptographic Verifiable Data Fingerprint.
* Camera-ready IEEE/Nature-styled two-column typesetting.
