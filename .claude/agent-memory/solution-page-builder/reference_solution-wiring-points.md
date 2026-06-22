---
name: solution-wiring-points
description: The exact files to edit to register a new /solutions/<slug> page (data, signature, route, content layer, nav, cross-links)
metadata:
  type: reference
---

To wire a new solution page end-to-end (all paths under `aivanceworks-website/`):

1. **Data file:** `src/data/solutions/<slug>.ts` — export a named const + `export default`. Type `SolutionPageData` from `@/types/pages`.
2. **Signature component (if new):** `src/components/signature/<Name>.tsx`. Render inside `<Section tone=... >` + `<Container>` from `@/components/shared/primitives`. Token-only colors (brand-*/accent-*/surface-*/text-*); no raw Tailwind shades or hex. File-header comment must document the mobile collapse layout (§10.7).
3. **Barrel export:** add `export { <Name> } from './<Name>';` to `src/components/signature/index.ts`.
4. **Signature registry (2 edits, same file):** `src/app/solutions/[slug]/page.tsx` — add to the multi-import from `@/components/signature` AND add `<Name>: <Name />,` to the `SIGNATURE_COMPONENTS` record. (Editing only the import without the registry triggers a transient "declared but never read" hint — ignore if both edits are in the same batch.)
5. **Content layer:** add `'<slug>': () => import('@/data/solutions/<slug>'),` to `SOLUTION_PAGE_MODULES` in `src/lib/content.ts`. This single registration drives `generateStaticParams` — no per-slug page directory needed (dynamic route handles all).
6. **Nav:** add a `{ label, href, icon }` link to the right `heading` group in `src/lib/constants.ts` (icon = Lucide name string).
7. **Cross-links (symmetry rule §10):** new page's `relatedPages` (services-first, max one same-vertical peer-solution). Also back-link from the peer solution's `relatedPages` with a journey-aware description.

**Verify:** `npx tsc --noEmit` and `npm run build` from `aivanceworks-website/` (both must be exit 0). Confirm `.next/server/app/solutions/<slug>.html` exists.

Templates: `SolutionDetailTemplate` reads `data.composition` (array of `SectionKey`) and renders each section if its data field is present. `signature` composition key renders the registered component; `discoveryMethodology`/`engagementModels` keys are no-ops for solutions.
