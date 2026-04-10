---
name: Services/Solutions imagery strategy — RESOLVED
description: Imagery decisions made and implemented for all 5 pilot pages (2026-04-10). Full workflow documented in constitution §11.5 v1.2 + Step 7.5.
type: project
---

Imagery decisions were made and implemented on 2026-04-10. See constitution §11.5 (v1.2), Step 7.5, and spec at `docs/superpowers/specs/2026-04-10-imagery-strategy-design.md`.

**Summary:**
- All heroes render inside a **box card** matching the homepage style (rounded corners, border, glow, grid)
- Solutions (patient-portals, insurance-portals, e-commerce-websites): Full-bleed background image in hero box card (opacity-40, gradient scrim for text readability) + 2 ImageFeature sections mid-page
- Services (product-discovery, mvp-development): SVG illustration in hero right column + scroll animations + interactive signatures
- Photos: Unsplash, **original colors** (no CSS filters). Stored in `public/images/solutions/{slug}/`
- Spot SVG illustrations for service feature sections: deferred to follow-up

**Workflow for new pages (constitution Step 7.5):**
1. Research photo subjects (solutions) or design SVG illustration (services)
2. Source from Unsplash / create SVG component
3. Store in `public/images/solutions/{slug}/` or `components/signature/`
4. Add `heroImage` + `imageFeatures` to data file (solutions) or pass `heroIllustration` from page route (services)
5. Add `'imageFeatures'` to composition array

**How to apply:** When adding new solution pages, follow the photo-driven pattern. When adding new service pages, follow the illustration-driven pattern. Constitution §11.5 and §13 Step 7.5 have full details. Prompt templates §14.1 and §14.2 include imagery deliverables.
