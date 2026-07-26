---
name: industry-directory-section
description: How a flagship SERVICE page links down into the /industry/* vertical pages — the industryDirectory section added in constitution v2.13
metadata:
  type: project
---

To link a SERVICE page into the industry vertical pages (`/industry/<slug>`), use the `industryDirectory` section — NOT `relatedPages`.

**Why:** `RelatedPageItem.pageType` is only `'service' | 'solution'` (an industry is neither and gets no correct badge), and `relatedPages` is a 2–3 link buyer-journey block, not a 6-vertical directory. Overloading it was rejected. Introduced by `/services/enterprise-software-development` (the flagship "how we build" page that sits above the verticals).

**How to apply (already wired, reuse as-is):**
- `SectionKey` has member `'industryDirectory'`; `ServicePageData` has optional `industryDirectory?: IndustryDirectoryData` (types in `src/types/pages.ts`: `IndustryDirectoryLink` = name/connector/href/icon; `IndustryDirectoryData` = eyebrow/title/highlightText/subtitle/items).
- Shared component `src/components/shared/sections/IndustryDirectory.tsx` (light tone, editorial full-width linked rows; mirrors industry-hub `IndustryServices` in reverse). `ServiceDetailTemplate` renders it; `SolutionDetailTemplate` maps the key to `() => null`.
- Just add `'industryDirectory'` to a service's `composition` and populate `data.industryDirectory`.

**Live verticals (only link these):** real-estate, retail, manufacturing-supply-chain, logistics, travel-hospitality, food-beverage. `banking` and `healthcare` data files exist but are commented out of `INDUSTRY_PAGE_MODULES` in `src/lib/content.ts` — their routes do NOT resolve, so do not link them until re-enabled. Route pattern is `/industry/<slug>` (singular).

Related: the flagship page used a `personaComparison` cherry-pick from Archetype A and dropped TechStackBlock/ProcessTimeline per Archetype B. See [[digital-transformation-pattern]] for the sibling flagship, and [[project_root]] for the path gotcha.
