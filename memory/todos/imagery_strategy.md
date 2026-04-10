---
name: Services/Solutions imagery strategy is deferred and research-driven
description: Pilot pages defer imagery to a per-page research phase before Phase 5/6 of the design system pilot
type: project
---

Imagery on services/solutions pages is a per-page lead-generation strategy decision, not a uniform technical default. The current design system pilot (see project_pilot_scope) explicitly ships without photographs in Phases 1–4 and will re-evaluate before Phase 5 (signature components) or Phase 6 (pilot data files).

**Why:** User wants each pilot page (Product Discovery, MVP Development, Patient Portals, Insurance Portals) to get its imagery treatment based on its specific conversion strategy — options range from no imagery (dark gradient hero only) to right-column hero image, full-bleed photo hero, or mid-page ImageFeature sections. The spec's current "no imagery" stance was chosen because no real case photos were approved; it is not a permanent design choice. Constitution §11 already allows Unsplash (color-graded) and inline SVG; the question is strategic placement per page, not whether imagery is allowed.

**How to apply:**
1. Before Phase 5 or Phase 6 starts, stop and ask the user for the per-page imagery decisions: (a) hero treatment, (b) mid-page photos, (c) source + brand grading approach. Do not guess.
2. If the user asks for imagery support to be added, the minimal shared-component changes are: extend `Hero` with optional `heroImage?: { src, alt }`, optionally add a new `ImageFeature` section (left-text / right-image), extend `BasePageData` types accordingly. Keep fields optional so pages opt in.
3. Do not pre-build speculative image components or add `imagePath` fields to data files before the research is in.
4. `CaseStudySpotlight` remains deferred until real case studies are approved — separate from the hero/mid-page imagery decision.
