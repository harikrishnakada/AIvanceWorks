---
name: Rebuild /solutions listing page with pilot primitives
description: Deferred from the e-commerce migration feature (2026-04-09). The solutions listing page at /solutions still uses raw Tailwind colors and does not theme-swap with the rest of the site.
type: project
---

The solutions listing page at `src/app/solutions/page.tsx` was NOT fully migrated during the e-commerce migration feature (2026-04-09). Only the `DynamicIcon` import was swapped out (so legacy deletion could proceed). The rest of the file still has pre-existing raw Tailwind color violations:

- Hero section: `bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900`, `bg-blue-500/20 text-blue-300`, `from-blue-400 to-indigo-400` (rainbow gradient headline)
- Category sections: `bg-white` / `bg-gray-50` alternation, `text-gray-900`, `bg-blue-50`, `text-blue-600`
- Card hover states: `border-gray-200 hover:border-blue-300`
- CTA section: `bg-gradient-to-r from-blue-600 to-indigo-700` (rainbow), `text-blue-100`, `bg-white text-blue-700`

**Why:** Scope discipline on the e-commerce migration feature — we intentionally deferred full tokenization of the listing page because (a) it's unrelated to legacy cleanup, (b) it's a visible design decision of its own (does it get a Hero primitive? How are category sections styled? What happens to the "Don't see your industry?" CTA?), and (c) folding it in would have doubled the feature's scope.

**Visible consequence:** When the site theme is toggled between blue and purple, `/solutions` does NOT theme-swap with the rest of the site. It stays stuck looking blue-ish and slightly older than all the pages it links to.

**How to apply:** When the user is ready to take on the next small design feature, surface this as a candidate. The rebuild should:

1. Use `Section` primitive for every section with appropriate `tone` / `size`.
2. Use `Container` for max-width / padding consistency.
3. Either use the `Hero` shared section for the top of the page, or build a page-specific header that uses theme tokens only.
4. Replace all raw color classes with `bg-brand-*` / `bg-accent-*` / `bg-surface-*` / `text-text-*` / `border-border-*` tokens.
5. Run the token-hygiene grep on the file and verify zero matches.
6. Consider whether the "Don't see your industry?" CTA is still the right closing treatment or if it should be replaced with the shared `CTABlock` section.
7. Preserve the NAVIGATION.solutionsMenu driven category structure — the content is fine, only the styling is the problem.

**Estimated scope:** single session, one subagent, probably similar in size to extracting a single pilot section.
