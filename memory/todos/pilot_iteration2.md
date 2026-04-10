---
name: Services/Solutions pilot — second iteration backlog
description: Known improvements deferred from the first pilot build, still pending. Items that moved into the standalone e-commerce migration feature are noted inline.
type: project
---

The first iteration of the unified services/solutions design system pilot (4 pages: Product Discovery, MVP Development, Patient Portals, Insurance Portals) shipped end-to-end on 2026-04-09. User reviewed the rendered pages and said "we can still do better, but we can do that in a second iteration" — signaling acceptance to ship v1 and capture improvements for a follow-up.

A focused **extraction follow-up** also shipped on 2026-04-09 after v1, adding two new shared sections (`ComplianceSpotlight`, `PersonaComparison`) extracted from the orphaned legacy `ComplianceShowcase` and `PortalTypesComparison` components. Patient Portals and Insurance Portals were updated to use these new sections. The legacy orphan files were deleted.

**Why:** User wanted to validate the architecture (shared primitives, template dispatch, signature components, data-file-driven composition) before polishing every page. Shipping with known-but-deferred improvements is intentional; the design system itself is validated even if individual pages will get stronger in v2.

**How to apply:** When the user asks about "pilot v2," "second iteration," or "what's left" on services/solutions, consult this list. Items previously marked `[→ e-commerce feature]` are now resolved (see "Completed items" below).

## Still in this backlog (pilot v2 work)

1. **Imagery strategy is still open** (see `memory/project_imagery_strategy.md`). Per-page decisions never made; pages ship with dark-gradient-only heroes. v2 should collect user's per-page hero treatment + mid-page photo decisions. Applies to all 5 pages once e-commerce is migrated.

2. **Every `_unverified` array still has items pending user sign-off.** Counts as of 2026-04-09:
   - Product Discovery: 5 items
   - MVP Development: 5 items
   - Patient Portals: 13 items (10 original + 3 added by extraction for ComplianceSpotlight)
   - Insurance Portals: 10 items (8 original + 2 added by extraction for PersonaComparison)
   - The "10 days → 8 hours" claim in `ClaimsFlowComparison` (Insurance Portals signature narrative) is the highest-priority item — it's the page's headline claim.

3. **Placeholder prices in engagement models.** All 6 price points on Product Discovery and MVP Development are marked as placeholder.

4. **`ClaimsFlowComparison` signature noted as weakest of the 4 signatures in the plan itself** — expect iteration post-pilot. Modular by design so it can be replaced without touching other pages.

5. **Inline `boxShadow` rgba values in `MvpDualTrackRoadmap`** — noted as an intentional exception. If you want perfect token purity, define `--shadow-launch-glow` in `themes/blue.css` + `themes/purple.css` and reference via `style={{ boxShadow: 'var(--shadow-launch-glow)' }}`. Low priority.

6. **No `CaseStudySpotlight`, `TestimonialStrip`, or `LogoWall` sections** — deferred because no real case studies / testimonials / logos approved. Should be built when real content exists. E-commerce page deliberately omits caseStudySpotlight (Decision B in the migration spec).

7. **Insurance Portals `personaComparison` placement updated.** Moved from position 4 (after featureGrid) to position 3 (after metricsStrip, before featureGrid) per Decision E of the e-commerce migration. Visual rhythm: intro → metrics → who → what → transformation → plumbing → close.

## Resolved by the e-commerce migration (2026-04-10)

These items were originally on the v2 backlog and have been completed by the e-commerce migration + legacy cleanup feature:

- `[DONE 2026-04-10]` **`relatedPages` data populated on all 5 pages** — symmetric 3-per-page matrix (Decision D).
- `[DONE 2026-04-10]` **Legacy `Solution*` components deleted** — entire `src/components/solutions/` tree (12 files) removed.
- `[DONE 2026-04-10]` **`AiPoweredFeatures` ported as tokenized `EcommerceAiShowcase` signature** — prop-less, A/B/C variant rotation, theme-token-only.
- `[DONE 2026-04-10]` **`/solutions/e-commerce-websites` migrated to pilot `SolutionDetailTemplate`**.
- `[DONE 2026-04-10]` **`src/data/solutions.ts` deleted** — all solution data now in per-file modules.
- `[DONE 2026-04-10]` **`[slug]/page.tsx` rewritten** — single pilot path, no legacy fallback branch.
- `[DONE 2026-04-10]` **`DynamicIcon` migrated to `getLucideIcon`** on the /solutions listing page.
- `[DONE 2026-04-10]` **Insurance Portals `personaComparison` reordered** — moved from position 4 → 3 (Decision E).
- `[DONE 2026-04-10]` **E-commerce `_unverified` list reviewed** — audience-test applied, 3 metricsStrip % ranges replaced with capability framing, 3 features/FAQ strings softened, 15 items resolved, 2 content-team reminders remain.

## Completed items (for reference)

- `[DONE 2026-04-09]` Extract `ComplianceShowcase` → new shared `ComplianceSpotlight` section (tokenized, data-driven)
- `[DONE 2026-04-09]` Extract `PortalTypesComparison` → new shared `PersonaComparison` section (tokenized, generalized)
- `[DONE 2026-04-09]` Wire `ComplianceSpotlight` into Patient Portals data file and composition (placed between `featureGrid` and `signature` for narrative flow)
- `[DONE 2026-04-09]` Wire `PersonaComparison` into Insurance Portals data file and composition (placed between `featureGrid` and `signature`)
- `[DONE 2026-04-09]` Delete orphaned `ComplianceShowcase.tsx` and `PortalTypesComparison.tsx` from `src/components/solutions/unique/`
- `[DONE 2026-04-09]` Update `unique/index.ts` barrel to only export `AiPoweredFeatures`

Do not spontaneously fix items in this backlog unless the user asks — they are known and accepted. Flag them only when the user re-engages on these pages.
