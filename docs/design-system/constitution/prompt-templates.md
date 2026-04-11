# Constitution — Prompt Templates

> Extracted from Services & Solutions Design Constitution §14.
> These are copy-paste-ready prompts for launching new Claude sessions to create service/solution pages.
> For the enforceable rules these prompts reference, see `../services-solutions-constitution.md`.

**Last updated:** 2026-04-10
**Source:** Constitution v1.5, Section 14

---

## 14. Prompt templates

These are copy-paste-ready prompts for future Claude sessions. Fill in the `<slot>` values, paste into Claude, and get back a correct page without re-explaining the system.

Every template ends with the explicit reminder: **deviations must be recorded in the constitution itself.**

### 14.1 Create new service page

```
Read docs/design-system/services-solutions-constitution.md. You are creating a new service page.

Service name: <e.g., Web App Development>

YOU MUST DO ALL OF THE FOLLOWING AUTONOMOUSLY. Do not ask the user for buyer persona, questions, trust issues, or content strategy — research and determine them yourself.

## Phase 1 — Research (do this BEFORE writing any code)

1. Read the company details in src/company details/markup/ (especially 02-services.md, 06-positioning.md, 10-website-content.md) to understand what this service covers and how it's positioned.
2. Identify the PRIMARY BUYER PERSONA by role, seniority, and what they're measured on. Use the buyer persona table in §2.3 of the constitution as a starting framework, then refine based on what this specific service actually sells.
3. Identify the TOP 3 QUESTIONS this buyer would type into Google or ask on a sales call. These drive composition order.
4. Identify the KEY TRUST ISSUE — what has burned this buyer before? What makes them skeptical?
5. Study 2-3 existing pilot pages as reference implementations (read their data files in src/data/services/ and src/data/solutions/).

## Phase 2 — Design (constitution §13 steps 1–6)

Follow steps 1–7 of the 13-step process. For every non-trivial decision, apply the self-challenge protocol (§9.6):
- State your default position.
- Run the audience test (§9.5): who sees this, do they care, will it generate value?
- Run the greenfield integrity test: can this be backed without fabricated outcomes?
- Run the counter-cost test: what do we lose by including this?
- Land on a conclusion.

## Phase 3 — Build (constitution §13 steps 7–10)

7. Create the data file. Apply the audience test (§9.5) to EVERY metric, feature description, benefit, and FAQ as you write them — not as an afterthought.
7.5. Source imagery per §11.5.
7.7. Audience test pass: walk every element through §9.5. Replace uncited % ranges with capability framing. Soften any "we delivered / we achieved / clients see" to capability language. Remove developer-lens content that the business buyer doesn't care about.
7.8. Populate relatedPages with 3 cross-links (mixed services/solutions). Add `pageType` to each entry. Write journey-aware descriptions unique to each source→destination pair. Update existing pages that should link back.
8. Content integrity pass (§9).
9. Responsiveness check.
10. Record deviations.

## Phase 4 — Wiring

- Add the slug to SERVICE_PAGE_MODULES in src/lib/content.ts.
- If a new signature component was created, add it to SIGNATURE_COMPONENTS in the page route and to the signature barrel (components/signature/index.ts).
- Run npx tsc --noEmit and npm run build. Both must pass.
- Run the token-hygiene grep on all created/modified files.
- Run the content-integrity grep.

Expected outputs:
- src/data/services/<slug>.ts with audience-tested copy and resolved _unverified list.
- app/services/<slug>/page.tsx (if the route doesn't already exist).
- A hero SVG illustration component at components/signature/<Name>HeroIllustration.tsx (per §11.5).
- Any new signature component at components/signature/<Name>.tsx.
- Any new shared component at components/shared/sections/<Name>.tsx (only if reused).
- Updated relatedPages on existing pages that cross-link to the new page (with journey-aware descriptions and `pageType`).
- Updated SERVICE_PAGE_MODULES in src/lib/content.ts.
- A diff to the constitution if you deviated.
- tsc clean, build clean, token-hygiene clean, content-integrity clean.

Reminder: deviations must be recorded in the constitution. No fabricated stats. The audience test (§9.5) is mandatory, not optional.
```

### 14.2 Create new solution page

```
Read docs/design-system/services-solutions-constitution.md. You are creating a new solution page.

Solution name: <e.g., Hospital Management Systems>
Industry: <healthcare | insurance | retail | fintech | ...>

YOU MUST DO ALL OF THE FOLLOWING AUTONOMOUSLY. Do not ask the user for buyer persona, questions, integrations, or content strategy — research and determine them yourself.

## Phase 1 — Research (do this BEFORE writing any code)

1. Read the company details in src/company details/markup/ (especially 02-services.md, 06-positioning.md, 10-website-content.md) to understand what this solution covers and how it's positioned.
2. Research the industry context: what regulations apply? What systems does this buyer already use? What integrations matter?
3. Identify the PRIMARY BUYER PERSONA by role, seniority, and what they're measured on. Solution buyers are typically business decision-makers (VP Operations, Head of Digital, Business Owner) — not engineers.
4. Identify the TOP 3 QUESTIONS this buyer asks. These drive composition order.
5. Identify the KEY TRUST ISSUE — what has burned this buyer before?
6. Study 2-3 existing pilot pages as reference implementations (read their data files in src/data/solutions/).

## Phase 2 — Design (constitution §13 steps 1–6)

Follow steps 1–7 of the 13-step process. For every non-trivial decision, apply the self-challenge protocol (§9.6).

Archetype guidance: regulated industries default to Archetype C unless the buyer's KPI is purely commercial (then D). When in doubt, the audience test (§9.5) resolves it — ask "does this buyer answer to a regulator or to a revenue target?"

## Phase 3 — Build (constitution §13 steps 7–10)

7. Create the data file. Apply the audience test (§9.5) to EVERY element as you write it.
7.5. Source imagery per §11.5 (3 photos: hero + 2 features).
7.7. Audience test pass (§9.5). This is where the hard decisions happen:
   - Uncited % ranges → replace with capability-framed metrics or cite a real source.
   - "We delivered / achieved / clients see" → "Architected for / built to / designed to" (greenfield integrity).
   - Developer-lens content → cut or reframe for business buyers.
   - Vendor names → "we build with" not "we have shipped with" (greenfield honesty).
   - Integration chip grids → weave vendor names into feature prose if the buyer needs credibility signals; omit the grid if the audience doesn't care about the plumbing.
7.8. Populate relatedPages with 3 cross-links (mixed services/solutions). Add `pageType` to each entry. Write journey-aware descriptions unique to each source→destination pair. Update existing pages.
8. Content integrity pass (§9).
9. Responsiveness check.
10. Record deviations.

## Phase 4 — Wiring

- Add the slug to SOLUTION_PAGE_MODULES in src/lib/content.ts.
- Add signature to SIGNATURE_COMPONENTS in src/app/solutions/[slug]/page.tsx and to the barrel.
- Run npx tsc --noEmit and npm run build. Both must pass.
- Token-hygiene grep + content-integrity grep.

Expected outputs:
- src/data/solutions/<slug>.ts with audience-tested copy and resolved _unverified list.
- 3 photos in public/images/solutions/<slug>/ (hero.jpg, feature-1.jpg, feature-2.jpg).
- 'imageFeatures' in the composition array (after 'featureGrid').
- app/solutions/<slug>/page.tsx (if the route doesn't already exist — or confirm the dynamic [slug] route handles it).
- Any new signature component at components/signature/<Name>.tsx.
- Updated relatedPages on existing pages that cross-link (with journey-aware descriptions and `pageType`).
- Updated SOLUTION_PAGE_MODULES in src/lib/content.ts.
- A diff to the constitution if deviated.
- tsc clean, build clean, token-hygiene clean, content-integrity clean.

Reminder: content integrity rules are non-negotiable. The audience test (§9.5) is mandatory. No fabricated stats. Deviations must be recorded in the constitution.
```

### 14.3 Design a new signature section for page X

```
Read docs/design-system/services-solutions-constitution.md, specifically section 8 (signature sections).

You are designing a new signature section for: <page slug, e.g., /services/ai-strategy-consulting>

Context:
- Archetype: <A/B/C/D>
- Primary buyer persona: <persona>
- The page's emotional argument: <e.g., "We turn vague AI ambitions into a shortlist of 3 validated pilots in 4 weeks">
- The section must communicate: <the one thing the visitor will remember>

Step 1 — Review the four pilot signature components as exemplars:
- components/signature/DiscoveryBeforeAfter.tsx (Product Discovery — before/after comparison pattern)
- components/signature/MvpDualTrackRoadmap.tsx (MVP Development — dual-track timeline pattern)
- components/signature/PortalArchitectureMap.tsx (Patient Portals — hierarchical tier map pattern)
- components/signature/ClaimsFlowComparison.tsx (Insurance Portals — proportional bar comparison pattern)

Step 2 — Propose 2–3 signature section options:
  For each option provide:
  - Component name (PascalCase, page-specific).
  - Visualization pattern from the catalog in §8.3 (data viz, hierarchical, process/flow, comparison, interactive, illustrative, or a new pattern you justify).
  - One-sentence argument it carries.
  - Rough sketch / ASCII mockup of the desktop layout.
  - Mobile collapse strategy.
  - Why this option fits this buyer better than the other options.

Step 3 — Recommend one.

Step 4 — After alignment, write the TSX component in components/signature/<Name>.tsx, wrapped in <Section tone="dark"> (unless section 4.4 deviation applies). Document mobile layout as a header comment.

Reminder: signature components obey all theme-token rules. Flipping data-theme must re-skin them. If you invent a new visual pattern not in the catalog, add it to section 8.3 of the constitution as a deviation.
```

### 14.4 Add a new reusable section to the shared library

```
Read docs/design-system/services-solutions-constitution.md, specifically section 5 (shared component library).

You are adding a new reusable section to components/shared/sections/.

Section name: <e.g., PricingComparisonTable>
What it does: <short description>
Which pages will use it (must be at least 2): <list page slugs>
If only one current consumer, justify why it belongs in shared instead of signature.

Requirements:
1. Wrap the section in <Section tone={...}>. The tone may be a prop.
2. Use only theme tokens. Run through the allowed-tokens list in §3.2 — any class outside that list is forbidden.
3. Design for the target density (6–10 sections per page). Don't make it so tall that it dominates.
4. Mobile-responsive per §10 rules.
5. Accept its data as props matching an interface in src/types/pages.ts. If a new data type is needed, add it to pages.ts and update BasePageData / ServicePageData / SolutionPageData as appropriate.
6. Export the component and its props type.
7. Add a brief docblock with: purpose, when to use, example usage, and any accessibility notes.

Deliverables:
- components/shared/sections/<Name>.tsx
- Updated src/types/pages.ts if new types added
- Updated components/shared/index.ts barrel
- Updated docs/design-system/services-solutions-constitution.md §5.2 with the new entry

Reminder: if the new section introduces a new data type or a new rule, that rule goes in the constitution. Drift is not allowed.
```

### 14.5 Audit an existing page against the constitution

```
Read docs/design-system/services-solutions-constitution.md.

Audit the following page against the constitution:
Page: <e.g., /solutions/patient-portals>
Files:
  - app/solutions/patient-portals/page.tsx
  - src/data/solutions/patient-portals.ts
  - any page-specific components imported by the above

Check:
1. Theming (§3) — grep the page file and all imported components for forbidden classes: any bg-/text-/border-/from-/to-/via- followed by slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose. Grep for hex values (#[0-9a-f]{3,8}). Report every violation with file and line.
2. Rhythm (§4) — map out the section order with tones. Flag adjacent darks, more than 2 darks total, missing accent CTA.
3. Composition (§6) — identify the archetype the page should be. Compare the actual composition to the archetype recipe. Flag undocumented deviations.
4. Data schema (§7) — confirm the data file matches ServicePageData or SolutionPageData. Flag missing required fields.
5. Content integrity (§9) — list every number, quote, logo, and stat in the data file. For each, identify whether it is verified, ranged, unverified (in _unverified list), or invented (removed). Flag any stat not in _unverified that looks unverifiable.
6. Responsiveness (§10) — confirm the signature section has a mobile layout comment. Flag any grid that doesn't collapse predictably.
7. Iconography / imagery (§11) — confirm Lucide only, alt text on every image.

Output format: one section per check, with PASS / FAIL / WARN and specific file:line references for any failures.

At the end, recommend a remediation order by priority. Do not modify any files — just audit.

Reminder: if the audit surfaces a legitimate new pattern that the constitution doesn't cover, that's a deviation — flag it and recommend a constitution update.
```

---
