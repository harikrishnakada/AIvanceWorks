---
name: auditnote-brand-name
description: Literal "AIvanceWorks" in a data-file legal disclaimer (auditNote) is the intended house convention, not a Brand Name Rule violation
metadata:
  type: feedback
---

The token-hygiene grep `grep -rn "AIvanceWorks" src/...` will flag the `complianceDetail.auditNote` legal-liability sentence in regulated solution data files. This is NOT a violation — leave it.

**Why:** The Brand Name Rule (CLAUDE.md #8) governs `SITE_CONFIG.name` usage for *display/branding in components/JSX*. The legal disclaimer string ("AIvanceWorks is a software engineering partner... does not represent, attest, or warrant compliance...") is a deliberate, uniform convention across all ~14 regulated sibling data files (SCM, MES, MOM, LIMS, EBR, CTMS, etc.). It is data, not component branding, and intentionally uses the literal legal name.

**How to apply:** when running the token-hygiene grep on a new regulated solution data file, expect exactly one `AIvanceWorks` hit in the auditNote. Confirm it's the legal disclaimer (matching the sibling pattern) and treat the grep as clean. Do NOT replace it with `SITE_CONFIG.name` — data files are plain TS objects consumed by the template, and the siblings hardcode it. See [[mfg-supply-chain-pattern]].
