# Services & Solutions Design Constitution — Reference

> Supplementary material for the [core constitution](services-solutions-constitution.md).
> Contains design philosophy narrative, rationale for key decisions, code reference implementations,
> and historical context. Agents CAN read this file when deeper context is needed on a specific rule.
> All enforceable rules live in the core constitution — this file contains NO rules.

**Version:** 2.0
**Last updated:** 2026-04-10

---

## Table of contents

- [§2 — Design philosophy (full narrative)](#2--design-philosophy-full-narrative)
- [§3.6 — Where existing components violate theming rules](#36--where-existing-components-violate-theming-rules)
- [§5.3 — Section primitive reference implementation](#53--section-primitive-reference-implementation)
- [§7.3 — Why integrations is a typed shape](#73--why-integrations-is-a-typed-shape)
- [§9.5 — Audience test rationale](#95--audience-test-rationale)
- [§9.6 — Self-challenge protocol rationale](#96--self-challenge-protocol-rationale)

---

## §2 — Design philosophy (full narrative)

Eight principles. Each has a **what** and a **why**. Understand the why or you will accidentally break the system.

### 2.1 Shared skeleton, two template variants

**What.** One component library in `components/shared/`. Two page templates: `ServiceTemplate` and `SolutionTemplate`. Both templates draw from the same component library but allow different section compositions because services and solutions serve different audiences.

**Why.** We considered three directions:

- **Option A — Fully uniform template.** Every service and solution page runs the exact same 8 sections in the exact same order. Rejected because it flattens two different buyer journeys into one experience, which serves the template rather than the buyer.
- **Option B — Shared library + two variants + per-page composition.** Single brand palette, single component library, but each page picks which sections to use and in what order. **Chosen.** This is the approach used by Thoughtworks, EPAM, Accenture, and Deloitte Digital, for the same reason.
- **Option C — Fully bespoke per page.** Every page designed from scratch. Rejected because it's expensive, drifts quickly, and makes pattern reuse impossible.

Option B is the middle ground. We get the cost savings of a shared library and the coherence of a shared design language, without sacrificing the storytelling each audience deserves.

### 2.2 Per-page editorial composition, not rigid ordering

**What.** Every page picks which sections it uses and in what order based on the buyer it's addressing. The section order is an **editorial decision**, not a mechanical one.

**Why.** Most traffic to these pages is long-tail Google search. Visitors land on one page, scroll it, and either convert or bounce. Cross-page consistency of section order has almost no benefit for a visitor who only sees one page, but optimal per-page storytelling has massive benefit. A healthcare CIO (risk-averse, long attention span, wants compliance early) and a startup founder (outcome-focused, short attention span, wants speed and cost) should not be forced into the same narrative order.

Structural anchors are fixed (Hero first, CTA last, FAQ near the end). Everything in between is composed to fit the audience.

### 2.3 Services and solutions serve different audiences

**What.** Two template variants exist because two distinct buyer personas exist.

| | Services page | Solutions page |
|---|---|---|
| **Buyer** | CTO, VP Eng, Tech Lead | VP Operations, Head of Digital, Business Owner |
| **Query** | "RAG framework consulting," "cloud migration experts" | "Reduce claims processing time," "HIPAA patient portal" |
| **Emotional driver** | Trust in technical competence | Risk reduction, outcome certainty |
| **Decision inputs** | Stack depth, engagement model, pricing clarity, process discipline | Industry metrics, compliance, subsystem integrations, case studies |
| **Shopper type** | Capability shopper | Outcome shopper |

This is why a services page leans on `TechStackBlock`, `EngagementModels`, and `ProcessTimeline`, while a solutions page leans on `IntegrationsPanel`, `ComplianceDeepDive`, and `CaseStudySpotlight`. Same library, different section menus.

### 2.4 Content, imagery, icons, and signature sections are the differentiation levers

**What.** Patient Portals does not look different from MVP Development because of color or layout. It looks different because:

- **Content** is written for a risk-averse healthcare administrator vs. a speed-obsessed founder.
- **Imagery** is clinical stock photography (color-graded to the brand palette) vs. whiteboard-and-roadmap scenes (also color-graded to the brand palette).
- **Iconography** pulls clinical Lucide icons (HeartPulse, Stethoscope, FileText) vs. developer icons (Rocket, GitBranch, Zap) — same library, different selections.
- **The signature section** for Patient Portals is a four-tier architecture map; MVP Development is a dual-track roadmap. One per page, single-use, unmistakable.

Color is not a differentiation lever. See the next principle.

### 2.5 Single brand palette

**What.** One palette. The existing blue theme (`src/styles/themes/blue.css`) is the brand. There is no "healthcare green" or "FinTech teal" variant of the services pages.

**Why.** Palette variation between pages creates visual chaos and makes navigation feel fragmented. The theme token system (`data-theme="blue" | "purple"`) exists so the **entire site** can be re-skinned in one switch, not so individual pages can diverge. Industry distinction is carried by the four levers in 2.4, not by hue.

Exploration of per-industry palettes was explicitly rejected during the design conversation that produced this constitution.

### 2.6 Theme-token discipline

**What.** All components reference theme tokens only. No raw Tailwind color shades, no hex values, no RGB literals.

**Why.** The testable guarantee: flipping `<html data-theme="blue">` to `<html data-theme="purple">` must re-skin every page with zero component edits. If any single `bg-gray-50`, `text-blue-600`, or `#3b82f6` leaks into a component, the guarantee breaks and the theme token system stops being useful. See [Section 3](services-solutions-constitution.md#3-theming-rules-hard) for the enforcement rules and code examples.

### 2.7 Audience-driven storytelling

**What.** The order of sections on a page is decided by three heuristics:

1. **Lead with what the buyer searched for.** Put that section right after the hero.
2. **Place the signature section at the natural narrative break.** Usually middle; near top for skeptical audiences; near bottom for persuasion-focused audiences.
3. **Proof before process** for outcome-focused buyers; **process before proof** for risk-averse buyers.

**Why.** These are not rules. They are guides for editorial judgment. The archetypes in [Section 6](services-solutions-constitution.md#6-page-template-approach-and-archetypes) encode these heuristics as starting recipes, but every page is free to deviate with justification.

### 2.8 Content integrity over marketing velocity

**What.** No fabricated statistics. No invented case studies. No unauthorized logos. Every public claim is verified, ranged-with-source, or omitted. See [Section 9](services-solutions-constitution.md#9-content-integrity-rules-hard).

**Why.** AIvanceWorks sells trust to risk-averse buyers (especially in regulated industries). A single fabricated stat discovered by a prospective client destroys years of trust-building. The `_unverified` list and human review gate exist so that marketing velocity can never outrun reality.

---

## §3.6 — Where existing components violate theming rules

The following components in `components/solutions/` violate the theming rules and **must be refactored or deleted** as part of the pilot migration:

| Component | Violation | Pilot action |
|---|---|---|
| `SolutionHero.tsx` | `bg-gray-50`, `from-gray-900 via-gray-800`, `bg-blue-500/20`, `text-blue-300`, `from-blue-500 to-indigo-600` | Delete. Replaced by shared `Hero` component using tokens. |
| `SolutionBenefits.tsx` | `bg-gray-50`, `text-gray-900`, `text-gray-600`, `bg-white`, `border-gray-200`, `bg-blue-50`, `text-blue-600` | Delete. Replaced by `BenefitsGrid`. |
| `SolutionFAQ.tsx` | `bg-white`, `text-gray-900`, `text-gray-600`, `bg-gray-50`, `hover:bg-gray-100` | Delete. Replaced by shared `FAQ`. |
| `SolutionCTA.tsx` | `from-blue-600 to-indigo-700`, `text-blue-100`, `text-blue-700`, `hover:bg-gray-100` | Delete. Replaced by `CTABlock` using `tone="accent"`. |
| `SolutionProcess.tsx` | (assumed similar) | Delete. Replaced by `ProcessTimeline`. |
| `SolutionTechStack.tsx` | (assumed similar) | Delete. Replaced by `TechStackBlock`. |
| `SolutionFeatures.tsx` | (assumed similar) | Delete. Replaced by `FeatureGrid`. |
| `SolutionRelated.tsx` | (assumed similar) | Delete. Not used in pilot; revisit post-pilot. |
| `unique/ComplianceShowcase.tsx` | Already partly token-compliant (uses `surface-dark-*`), but per-page specificity moves to `components/signature/`. | Fold its pattern into the new shared `ComplianceDeepDive` and a per-page `ComplianceShowcase` in `components/signature/` where needed. |
| `unique/PortalTypesComparison.tsx` | (assumed similar) | Retire — content moves into `FeatureGrid` or a signature diagram. |
| `unique/AiPoweredFeatures.tsx` | (assumed similar) | Retire — content moves into `FeatureGrid`. |

All of these must be gone by the end of the pilot migration. See [Section 15](services-solutions-constitution.md#15-reference--pilot-pages-and-their-compositions) for the refactor sequence.

The `scripts/token-hygiene.sh` script automates detection of these violations.

---

## §5.3 — Section primitive reference implementation

The `Section` component (`src/components/shared/primitives/Section.tsx`) is the single point of enforcement for tone and vertical rhythm. Full reference implementation:

```tsx
// components/shared/primitives/Section.tsx
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionTone = 'dark' | 'light' | 'warm' | 'accent';

interface SectionProps {
  tone?: SectionTone;
  id?: string;
  className?: string;
  /** Optional grid overlay on dark sections */
  withGrid?: boolean;
  /** Adjust vertical padding; defaults to the rhythm scale */
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const TONE_STYLES: Record<SectionTone, string> = {
  dark:
    'bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light',
  light: 'bg-surface-white text-text-heading',
  warm: 'bg-surface-warm text-text-heading',
  accent: 'bg-gradient-to-r from-brand-600 to-accent-500 text-white',
};

const SIZE_STYLES: Record<NonNullable<SectionProps['size']>, string> = {
  sm: 'py-10 sm:py-12 lg:py-16',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-20 lg:py-24',
};

export const Section = ({
  tone = 'light',
  id,
  className,
  withGrid = false,
  size = 'lg',
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn(
        'relative overflow-hidden',
        TONE_STYLES[tone],
        SIZE_STYLES[size],
        className
      )}
    >
      {tone === 'dark' && withGrid && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};
```

**Key properties:**

- `tone` is the only API surface for color. Components that consume `Section` never pick their own background.
- `SIZE_STYLES` encodes the vertical rhythm scale. `lg` is the default for major sections; `md` for tighter sections like `MetricsStrip`; `sm` for compressed spacers.
- `withGrid` emits the brand grid overlay used on dark sections. It uses a CSS var (`--brand-grid`) from the theme file, not a hardcoded color.
- The `data-tone` attribute enables child components to conditionally restyle (e.g., a card that needs to go glassy on a dark parent).
- **Nothing color-related** is visible in JSX consumers of `Section`. That's the point.

**Usage:**

```tsx
// In a page or reusable section:
<Section tone="warm">
  <Container>
    <h2 className="text-3xl font-bold text-text-heading">Features</h2>
    <FeatureGrid features={features} />
  </Container>
</Section>
```

**Every page section is wrapped in `Section`.** There are no exceptions in shared components. Signature sections (which live in `components/signature/`) also use `Section` unless they have a specialized layout that requires a bare `<section>` — and even then, they respect tone tokens.

---

## §7.3 — Why integrations is a typed shape

The old `SolutionData.integrations: string[]` shape cannot support the new `IntegrationsPanel` component, which needs a connection method per integration. The new shape is:

```ts
integrations: [
  {
    name: 'Epic',
    category: 'EHR',
    connectionMethod: 'HL7 FHIR R4, SMART on FHIR',
    capabilities: ['bi-directional sync', 'real-time patient context'],
  },
  {
    name: 'Guidewire PolicyCenter',
    category: 'Core Policy',
    connectionMethod: 'REST + SOAP',
    capabilities: ['policy lookup', 'endorsement write-back'],
  },
]
```

The `IntegrationGroup` interface uses structured fields (`name`, `category`, `connectionMethod`, `capabilities`) instead of `string[]` for three reasons:

1. **Display requirements.** The `IntegrationsPanel` component renders connection method labels and capability chips for each integration. A flat `string[]` cannot carry that data.
2. **Unification across verticals.** Both Patient Portals (EHR list) and Insurance Portals (core policy systems list) use the same `IntegrationsPanel` component, differing only in their data. The typed shape is the contract that makes this possible without component branching.
3. **Extensibility.** Future integration panels (FinTech, Legal-tech, Retail) can add new `category` values and new `capabilities` entries without changing the component — only the data file changes.

That's the whole win of the new shape.

---

## §9.5 — Audience test rationale

**Rationale (v1.3):** During the e-commerce migration (2026-04-10), three `metricsStrip` percentage ranges passed all other integrity checks but failed the audience test — a VP of Digital would read uncited % claims and lose trust. They were replaced with capability-framed metrics. Three feature/FAQ strings were softened from "we have experience" / "integrated" (implying past work) to "we build" / "integration" (describing capability). The audience test caught what the `_unverified` protocol alone did not: technically-honest-but-practically-misleading framing.

---

## §9.6 — Self-challenge protocol rationale

**Rationale (v1.3):** Validated twice during the pilot build. First on section-order flexibility (where self-challenge reversed the default from "rigid canonical order" to "flexible with archetypes"). Second on e-commerce integrations (where the initial recommendation to add an integration chip grid was reversed after the audience test revealed business buyers don't care about integration chips — they care about credibility and migration safety).
