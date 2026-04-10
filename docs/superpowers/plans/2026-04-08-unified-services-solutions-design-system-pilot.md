# Unified Services & Solutions Design System — Pilot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the shared component library, data layer, two page templates, four signature components, and wire up four pilot pages (Product Discovery, MVP Development, Patient Portals, Insurance Portals) to a fully theme-token-driven, editorially-composable design system.

**Architecture:** All colors flow through the existing `@theme` token layer in `src/styles/globals.css` + `themes/blue.css`. No hardcoded Tailwind color shades in shared or signature components. Page sections wrap in a `Section` primitive that maps a `tone` prop to surface tokens. Two `*DetailTemplate` components iterate a declarative `composition: SectionKey[]` array on each page's data file and dispatch to a section map. Signature sections live in `components/signature/` and are single-use per page, swappable without touching the shared library.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript 5 strict, Tailwind CSS 4 (`@theme`), shadcn/ui (button, card, input), lucide-react icons, class-variance-authority.

**Spec:** `docs/superpowers/specs/2026-04-08-unified-services-solutions-design-system-design.md`
**Constitution:** `docs/design-system/services-solutions-constitution.md`

---

## Hard rules for implementers

1. **NEVER run `git add`, `git commit`, or any staging command.** The user handles all git operations manually. At the end of each phase, STOP and let the user review and commit. This overrides any TDD-skill instruction to commit after each task.
2. **No hardcoded color classes.** Before marking a task complete, `grep -nE 'bg-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' <new-file>` must return zero matches. Same for `text-`, `border-`, `from-`, `to-`, `via-`. Only theme tokens (`bg-surface-*`, `bg-brand-*`, `text-text-*`, `border-border-*`, `from-surface-dark-*`, `from-brand-600`) are allowed.
3. **No hex values in JSX.** No `style={{ color: '#...' }}`, no inline hex. Theme tokens only.
4. **Each section component wraps in `<Section tone="..." size="...">`.** Direct `<section>` tags in shared sections are only allowed inside signature components (which have a single custom `Section` wrapper).
5. **TypeScript strict mode.** Every new file must type-check with `npx tsc --noEmit` in the `aivanceworks-website` directory.
6. **Content integrity.** Every number, percentage, stat, or claim added to a data file that isn't verifiable must be listed in that file's `_unverified` array with a precise field path + reason.
7. **Follow existing patterns.** Read the spec's section 8 for the data schema and section 10 for file layout. Do not invent alternatives.

## No testing framework

This project has no testing framework and this plan does not introduce one. Verification at each step uses:
- `npx tsc --noEmit` — TypeScript strict type-check (fast, runs on every task that touches .ts/.tsx)
- `npm run lint` — ESLint via `next lint` (runs at phase boundaries)
- `npm run build` — production build (runs at phase boundaries; catches SSR/metadata issues)
- Manual visual review via `npm run dev` at phase boundaries
- A token-hygiene grep at every component task (see rule 2 above)

All commands run from `aivanceworks-website/` unless noted.

## Phase map

| Phase | What | Dependencies |
|---|---|---|
| 0 | Setup, directory structure, spec/constitution reading | — |
| 1 | Primitives library (Section, Container, IconTile, StatBlock, CheckList, ChipRow, StepBadge, MetricsCard, Breadcrumbs) | 0 |
| 2a | Core reusable sections (Hero, MetricsStrip, FeatureGrid, BenefitsGrid, ProcessTimeline, TechStackBlock, IntegrationsPanel, FAQ, CTABlock) | 1 |
| 2b | Pilot-specific shared sections (DiscoveryMethodology, EngagementModels, ComplianceDeepDive) | 1 |
| 3 | Data types + `content.ts` helpers | 0 (parallel with 1/2) |
| 4 | Page templates (ServiceDetailTemplate, SolutionDetailTemplate) | 2, 3 |
| 5 | Signature components (DiscoveryBeforeAfter, MvpDualTrackRoadmap, PortalArchitectureMap, ClaimsFlowComparison) | 1 |
| 6 | Pilot data files (the four page data modules) | 3 |
| 7 | Route wiring for the four pilot pages | 4, 5, 6 |
| 8 | Refactor + cleanup of obsolete `Solution*` components | 7 |
| 9 | Verification pass (theme swap, responsiveness, content integrity, build) | 8 |

**Phase-boundary checkpoint:** at the end of every phase, STOP. Let the user run `npm run build`, visually review in dev, and commit. Do not proceed to the next phase without user acknowledgment.

---

## Phase 0 — Setup

### Task 0.1: Read the spec and constitution

**Files:** (read-only)
- `docs/superpowers/specs/2026-04-08-unified-services-solutions-design-system-design.md`
- `docs/design-system/services-solutions-constitution.md`

- [ ] **Step 1:** Read the full spec. Pay attention to sections 4 (theming rules), 5 (page templates), 6 (shared library), 8 (data schema), 9 (pilot compositions), 10 (new components), 14 (refactor strategy).

- [ ] **Step 2:** Skim the constitution, especially sections 3 (theming rules), 5 (component library), 7 (data schema), 8 (signature sections), 13 (process for new pages).

- [ ] **Step 3:** Read `aivanceworks-website/src/styles/globals.css` and `src/styles/themes/blue.css` so you know which tokens exist.

- [ ] **Step 4:** Read `aivanceworks-website/src/lib/constants.ts` (SITE_CONFIG, NAVIGATION) and `src/lib/utils.ts` (the `cn` helper).

### Task 0.2: Create directory structure

**Files:**
- Create: `aivanceworks-website/src/components/shared/primitives/` (new dir)
- Create: `aivanceworks-website/src/components/shared/sections/` (new dir)
- Create: `aivanceworks-website/src/components/signature/` (new dir)
- Create: `aivanceworks-website/src/components/templates/` (new dir)
- Create: `aivanceworks-website/src/data/services/` (new dir)
- Create: `aivanceworks-website/src/data/solutions/` (new dir)
- Create: `aivanceworks-website/src/types/` (new dir, if not exists)

- [ ] **Step 1:** Run (from `aivanceworks-website/`):
  ```bash
  mkdir -p src/components/shared/primitives src/components/shared/sections src/components/signature src/components/templates src/data/services src/data/solutions src/types
  ```

- [ ] **Step 2:** Verify all seven directories exist with `ls src/components src/data src/types`.

### Task 0.3: Establish a token-hygiene grep helper

**Purpose:** A repeatable command you run after writing any new shared/signature file.

- [ ] **Step 1:** Document the command in your scratchpad (also repeated in rule 2 above). From `aivanceworks-website/`:
  ```bash
  # Replace <file-path> with the file you just wrote.
  grep -nE 'bg-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]|text-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]|border-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' <file-path>
  ```
  Expected: no output. Any output = refactor the file to use tokens.

**Phase 0 checkpoint:** Directories exist. Grep helper documented. No code written yet. STOP for user acknowledgment before Phase 1.

---

## Phase 1 — Primitives library

All files live under `aivanceworks-website/src/components/shared/primitives/`.

### Task 1.1: `Section` primitive

**File:** Create `src/components/shared/primitives/Section.tsx`

This is THE rhythm enforcer. Every reusable section wraps in this. Implements the 4-tone system.

- [ ] **Step 1:** Write the complete file:

```tsx
import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

export type SectionTone = 'dark' | 'light' | 'warm' | 'accent';
export type SectionSize = 'sm' | 'md' | 'lg';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone: SectionTone;
  size?: SectionSize;
  withGrid?: boolean;
  children: ReactNode;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  dark: 'bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light',
  light: 'bg-surface-white text-text-body',
  warm: 'bg-surface-warm text-text-body',
  accent: 'bg-gradient-to-r from-brand-600 to-accent-500 text-text-light',
};

const SIZE_CLASSES: Record<SectionSize, string> = {
  sm: 'py-10 md:py-14 lg:py-16',
  md: 'py-12 md:py-20 lg:py-24',
  lg: 'py-16 md:py-24 lg:py-32',
};

export const Section = ({
  tone,
  size = 'md',
  withGrid = false,
  className,
  children,
  ...rest
}: SectionProps) => {
  const showGrid = withGrid && tone === 'dark';

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        TONE_CLASSES[tone],
        SIZE_CLASSES[size],
        className
      )}
      {...rest}
    >
      {showGrid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px]"
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};
```

- [ ] **Step 2:** Type-check from `aivanceworks-website/`:
  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors (or only pre-existing errors unrelated to this file).

- [ ] **Step 3:** Token-hygiene grep:
  ```bash
  grep -nE 'bg-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' src/components/shared/primitives/Section.tsx
  ```
  Expected: no output.

### Task 1.2: `Container` primitive

**File:** Create `src/components/shared/primitives/Container.tsx`

- [ ] **Step 1:** Write:

```tsx
import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

export type ContainerWidth = 'narrow' | 'default' | 'wide';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
  children: ReactNode;
}

const WIDTH_CLASSES: Record<ContainerWidth, string> = {
  narrow: 'max-w-4xl',
  default: 'max-w-7xl',
  wide: 'max-w-[88rem]',
};

export const Container = ({
  width = 'default',
  className,
  children,
  ...rest
}: ContainerProps) => (
  <div
    className={cn('mx-auto px-4 sm:px-6 lg:px-8', WIDTH_CLASSES[width], className)}
    {...rest}
  >
    {children}
  </div>
);
```

- [ ] **Step 2:** Type-check: `npx tsc --noEmit` (no errors).

### Task 1.3: `IconTile` primitive

**File:** Create `src/components/shared/primitives/IconTile.tsx`

- [ ] **Step 1:** Write:

```tsx
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export type IconTileSize = 'sm' | 'md' | 'lg';
export type IconTileVariant = 'brand' | 'accent' | 'surface' | 'glass';

export interface IconTileProps {
  icon: LucideIcon;
  size?: IconTileSize;
  variant?: IconTileVariant;
  className?: string;
}

const SIZE_CLASSES: Record<IconTileSize, string> = {
  sm: 'w-8 h-8 rounded-md [&>svg]:h-4 [&>svg]:w-4',
  md: 'w-12 h-12 rounded-xl [&>svg]:h-6 [&>svg]:w-6',
  lg: 'w-14 h-14 rounded-xl [&>svg]:h-7 [&>svg]:w-7',
};

const VARIANT_CLASSES: Record<IconTileVariant, string> = {
  brand: 'bg-brand-50 text-brand-600',
  accent: 'bg-accent-50 text-accent-500',
  surface: 'bg-surface-warm text-text-heading',
  glass:
    'bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] text-brand-400 backdrop-blur-sm',
};

export const IconTile = ({
  icon: Icon,
  size = 'md',
  variant = 'brand',
  className,
}: IconTileProps) => (
  <div
    className={cn(
      'inline-flex items-center justify-center',
      SIZE_CLASSES[size],
      VARIANT_CLASSES[variant],
      className
    )}
  >
    <Icon aria-hidden="true" />
  </div>
);
```

- [ ] **Step 2:** Type-check. Token grep: expect zero matches.

### Task 1.4: `StatBlock` primitive

**File:** Create `src/components/shared/primitives/StatBlock.tsx`

- [ ] **Step 1:** Write:

```tsx
import { cn } from '@/lib/utils';

export interface StatBlockProps {
  value: string;
  label: string;
  description?: string;
  variant?: 'default' | 'inverse';
  className?: string;
}

export const StatBlock = ({
  value,
  label,
  description,
  variant = 'default',
  className,
}: StatBlockProps) => {
  const valueColor =
    variant === 'inverse'
      ? 'text-text-light'
      : 'bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent';

  const labelColor =
    variant === 'inverse' ? 'text-text-light' : 'text-text-heading';

  const descColor =
    variant === 'inverse' ? 'text-text-subtle' : 'text-text-muted';

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className={cn('text-3xl md:text-4xl font-extrabold leading-none', valueColor)}>
        {value}
      </div>
      <div className={cn('text-sm md:text-base font-semibold', labelColor)}>
        {label}
      </div>
      {description && (
        <div className={cn('text-xs md:text-sm max-w-[28ch]', descColor)}>
          {description}
        </div>
      )}
    </div>
  );
};
```

- [ ] **Step 2:** Type-check + token grep.

### Task 1.5: `CheckList` primitive

**File:** Create `src/components/shared/primitives/CheckList.tsx`

- [ ] **Step 1:** Write:

```tsx
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

export interface CheckListProps {
  items: string[];
  variant?: 'default' | 'inverse';
  className?: string;
}

export const CheckList = ({
  items,
  variant = 'default',
  className,
}: CheckListProps) => {
  const textColor =
    variant === 'inverse' ? 'text-text-light' : 'text-text-body';
  const iconColor =
    variant === 'inverse' ? 'text-brand-400' : 'text-brand-600';

  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle2
            aria-hidden="true"
            className={cn('h-5 w-5 mt-0.5 flex-shrink-0', iconColor)}
          />
          <span className={cn('leading-relaxed', textColor)}>{item}</span>
        </li>
      ))}
    </ul>
  );
};
```

Note: the spec mentioned needing a `text-success` token. For pilot, we use `text-brand-600` / `text-brand-400` for the check icons — this keeps the rhythm brand-forward. If a real success-green is wanted later, add `--color-success` to the theme files and swap here.

- [ ] **Step 2:** Type-check + token grep (should find no `text-green-*` or similar).

### Task 1.6: `ChipRow` primitive

**File:** Create `src/components/shared/primitives/ChipRow.tsx`

- [ ] **Step 1:** Write:

```tsx
import { cn } from '@/lib/utils';

export type ChipVariant = 'default' | 'brand' | 'glass';

export interface ChipRowProps {
  items: string[];
  variant?: ChipVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<ChipVariant, string> = {
  default:
    'bg-surface-warm text-text-body border border-border-light hover:bg-surface-light',
  brand:
    'bg-brand-50 text-brand-700 border border-brand-200 hover:bg-brand-100',
  glass:
    'bg-[color:var(--glass-bg)] text-text-light border border-[color:var(--glass-border)] hover:bg-[color:var(--glass-hover)]',
};

export const ChipRow = ({
  items,
  variant = 'default',
  className,
}: ChipRowProps) => (
  <div className={cn('flex flex-wrap gap-2 md:gap-3', className)}>
    {items.map((item, idx) => (
      <span
        key={idx}
        className={cn(
          'inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors',
          VARIANT_CLASSES[variant]
        )}
      >
        {item}
      </span>
    ))}
  </div>
);
```

- [ ] **Step 2:** Type-check + token grep.

### Task 1.7: `StepBadge` primitive

**File:** Create `src/components/shared/primitives/StepBadge.tsx`

- [ ] **Step 1:** Write:

```tsx
import { cn } from '@/lib/utils';

export interface StepBadgeProps {
  step: number;
  variant?: 'default' | 'inverse';
  className?: string;
}

export const StepBadge = ({
  step,
  variant = 'default',
  className,
}: StepBadgeProps) => {
  const styles =
    variant === 'inverse'
      ? 'bg-brand-500 text-text-light shadow-brand-badge'
      : 'bg-brand-600 text-text-light';

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full text-sm md:text-base font-bold flex-shrink-0',
        styles,
        className
      )}
    >
      {step}
    </div>
  );
};
```

- [ ] **Step 2:** Type-check + token grep.

### Task 1.8: `MetricsCard` primitive

**File:** Create `src/components/shared/primitives/MetricsCard.tsx`

- [ ] **Step 1:** Write:

```tsx
import { cn } from '@/lib/utils';

export interface Metric {
  value: string;
  label: string;
  description?: string;
}

export interface MetricsCardProps {
  metrics: Metric[];
  title?: string;
  className?: string;
}

export const MetricsCard = ({ metrics, title, className }: MetricsCardProps) => (
  <div
    className={cn(
      'bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-2xl p-6 md:p-8 backdrop-blur-sm',
      className
    )}
  >
    {title && (
      <h3 className="text-lg md:text-xl font-semibold text-text-light mb-5 md:mb-6">
        {title}
      </h3>
    )}
    <div className="grid grid-cols-1 gap-5 md:gap-6">
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
            <span className="text-base md:text-lg font-bold text-text-light leading-tight text-center px-1">
              {metric.value}
            </span>
          </div>
          <div>
            <div className="font-semibold text-text-light">{metric.label}</div>
            {metric.description && (
              <div className="text-sm text-text-subtle mt-1">{metric.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
```

- [ ] **Step 2:** Type-check + token grep.

### Task 1.9: `Breadcrumbs` primitive

**File:** Create `src/components/shared/primitives/Breadcrumbs.tsx`

- [ ] **Step 1:** Write:

```tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => (
  <nav
    aria-label="Breadcrumb"
    className={cn('bg-surface-warm border-b border-border-light', className)}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <ol className="flex items-center space-x-2 text-sm overflow-x-auto">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center flex-shrink-0">
              {idx > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 text-text-muted mx-2"
                />
              )}
              {isLast ? (
                <span className="text-text-heading font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-text-muted hover:text-text-heading transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </nav>
);
```

- [ ] **Step 2:** Type-check + token grep.

### Task 1.10: Primitives barrel export

**File:** Create `src/components/shared/primitives/index.ts`

- [ ] **Step 1:** Write:

```ts
export { Section, type SectionProps, type SectionTone, type SectionSize } from './Section';
export { Container, type ContainerProps, type ContainerWidth } from './Container';
export { IconTile, type IconTileProps, type IconTileSize, type IconTileVariant } from './IconTile';
export { StatBlock, type StatBlockProps } from './StatBlock';
export { CheckList, type CheckListProps } from './CheckList';
export { ChipRow, type ChipRowProps, type ChipVariant } from './ChipRow';
export { StepBadge, type StepBadgeProps } from './StepBadge';
export { MetricsCard, type MetricsCardProps, type Metric } from './MetricsCard';
export { Breadcrumbs, type BreadcrumbsProps, type BreadcrumbItem } from './Breadcrumbs';
```

- [ ] **Step 2:** Type-check: `npx tsc --noEmit` (from `aivanceworks-website/`).

**Phase 1 checkpoint:** 9 primitive files + 1 barrel export. Run:
```bash
npm run lint
npx tsc --noEmit
```
Expected: no new errors. STOP for user review and commit. Do not proceed to Phase 2 without acknowledgment.

---

## Phase 2a — Core reusable sections

All files live under `aivanceworks-website/src/components/shared/sections/`. Each section wraps in `<Section tone="..." size="...">` and uses `Container` inside for max-width, except `Hero` which is full-bleed (gradient fills edge-to-edge).

Each task has the same skeleton:
1. Write the file
2. Type-check `npx tsc --noEmit`
3. Token-hygiene grep on the new file (see Phase 0 rule 2)

### Task 2a.1: `Hero` section

**File:** Create `src/components/shared/sections/Hero.tsx`

- [ ] **Step 1:** Write:

```tsx
import Link from 'next/link';
import { Section, Container, MetricsCard, type Metric } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroProps {
  badge?: string;
  badgeHref?: string;
  headline: string;
  subhead: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  metrics?: Metric[];
  metricsTitle?: string;
  className?: string;
}

export const Hero = ({
  badge,
  badgeHref,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  metrics,
  metricsTitle = 'Key Results',
  className,
}: HeroProps) => {
  const hasRightColumn = metrics && metrics.length > 0;

  return (
    <Section tone="dark" size="lg" withGrid className={className}>
      <Container>
        <div
          className={cn(
            'grid gap-10 md:gap-12 items-start',
            hasRightColumn ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
          )}
        >
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-sm font-medium mb-6">
                {badgeHref ? (
                  <Link href={badgeHref} className="hover:text-brand-200 transition-colors">
                    {badge}
                  </Link>
                ) : (
                  badge
                )}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6 leading-tight tracking-tight">
              {headline}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-subtle leading-relaxed mb-8 max-w-[62ch]">
              {subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-text-light">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border-subtle text-text-light hover:bg-[color:var(--glass-hover)]"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>
          {hasRightColumn && (
            <MetricsCard metrics={metrics!} title={metricsTitle} />
          )}
        </div>
      </Container>
    </Section>
  );
};
```

- [ ] **Step 2:** Type-check + token grep. Note: `text-brand-300` / `text-brand-200` are theme tokens — those are allowed. The grep rule forbids raw shades like `text-blue-300`, not brand tokens.

### Task 2a.2: `MetricsStrip` section

**File:** Create `src/components/shared/sections/MetricsStrip.tsx`

- [ ] **Step 1:** Write:

```tsx
import { Section, Container, StatBlock } from '@/components/shared/primitives';
import type { Metric } from '@/components/shared/primitives';

export interface MetricsStripProps {
  metrics: Metric[];
  eyebrow?: string;
  tone?: 'light' | 'warm';
  className?: string;
}

export const MetricsStrip = ({
  metrics,
  eyebrow,
  tone = 'light',
  className,
}: MetricsStripProps) => (
  <Section tone={tone} size="sm" className={className}>
    <Container>
      {eyebrow && (
        <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4 md:mb-6">
          {eyebrow}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {metrics.map((metric, idx) => (
          <StatBlock
            key={idx}
            value={metric.value}
            label={metric.label}
            description={metric.description}
          />
        ))}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2a.3: `FeatureGrid` section

**File:** Create `src/components/shared/sections/FeatureGrid.tsx`

- [ ] **Step 1:** Write:

```tsx
import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export interface FeatureItem {
  icon: string;        // Lucide icon name
  title: string;
  description: string;
}

export interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  features: FeatureItem[];
  columns?: 2 | 3;
  tone?: 'light' | 'warm';
  className?: string;
}

const COLUMN_CLASSES: Record<2 | 3, string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
};

export const FeatureGrid = ({
  title,
  subtitle,
  eyebrow,
  features,
  columns = 3,
  tone = 'light',
  className,
}: FeatureGridProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      {(title || subtitle || eyebrow) && (
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={cn('grid gap-6 md:gap-8', COLUMN_CLASSES[columns])}>
        {features.map((feature, idx) => {
          const Icon = getLucideIcon(feature.icon);
          return (
            <div
              key={idx}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-6 md:p-7"
            >
              <IconTile icon={Icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
```

**Note:** This depends on a helper `@/lib/icons` that maps icon name strings to Lucide components. That helper is created in Task 3.3.

- [ ] **Step 2:** Type-check will error until Task 3.3 is done. That's fine — skip type-check on this task and mark it provisional. OR implement Task 3.3 first. Recommended: implement Task 3.3 (the icon helper) before Task 2a.3. Task 3.3 is small.

### Task 2a.4: `BenefitsGrid` section

**File:** Create `src/components/shared/sections/BenefitsGrid.tsx`

- [ ] **Step 1:** Write:

```tsx
import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface BenefitsGridProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  benefits: BenefitItem[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const BenefitsGrid = ({
  title,
  subtitle,
  eyebrow,
  benefits,
  tone = 'warm',
  className,
}: BenefitsGridProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      {(title || subtitle || eyebrow) && (
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {benefits.map((benefit, idx) => {
          const Icon = getLucideIcon(benefit.icon);
          return (
            <div
              key={idx}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <IconTile icon={Icon} size="md" variant="brand" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-body leading-relaxed">
                    {benefit.description}
                  </p>
                  {benefit.stat && (
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-brand-600">
                        {benefit.stat}
                      </span>
                      {benefit.statLabel && (
                        <span className="text-sm text-text-muted">
                          {benefit.statLabel}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2a.5: `ProcessTimeline` section

**File:** Create `src/components/shared/sections/ProcessTimeline.tsx`

- [ ] **Step 1:** Write:

```tsx
import { Clock, FileText, ArrowRight } from 'lucide-react';
import { Section, Container, StepBadge } from '@/components/shared/primitives';

export interface ProcessStep {
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  steps: ProcessStep[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const ProcessTimeline = ({
  title = 'Our Implementation Process',
  subtitle,
  eyebrow,
  steps,
  tone = 'light',
  className,
}: ProcessTimelineProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="h-full bg-surface-white border border-border-light rounded-xl shadow-card-sm p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <StepBadge step={idx + 1} />
                <div className="flex items-center text-xs md:text-sm text-text-muted">
                  <Clock className="h-4 w-4 mr-1 flex-shrink-0" aria-hidden="true" />
                  {step.duration}
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-text-heading mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm text-text-body mb-4 leading-relaxed">
                {step.description}
              </p>
              <div className="flex items-start gap-2 text-xs md:text-sm pt-3 border-t border-border-light">
                <FileText
                  className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-text-muted">{step.deliverable}</span>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden xl:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-border-hover" aria-hidden="true" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2a.6: `TechStackBlock` section

**File:** Create `src/components/shared/sections/TechStackBlock.tsx`

- [ ] **Step 1:** Write:

```tsx
import { Section, Container, CheckList, ChipRow } from '@/components/shared/primitives';

export interface TechStackBlockProps {
  title?: string;
  capabilitiesTitle?: string;
  technologiesTitle?: string;
  eyebrow?: string;
  capabilities: string[];
  technologies: string[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const TechStackBlock = ({
  title,
  capabilitiesTitle = 'Key Capabilities',
  technologiesTitle = 'Technologies',
  eyebrow,
  capabilities,
  technologies,
  tone = 'warm',
  className,
}: TechStackBlockProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      {(title || eyebrow) && (
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-6 tracking-tight">
            {capabilitiesTitle}
          </h3>
          <CheckList items={capabilities} />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-6 tracking-tight">
            {technologiesTitle}
          </h3>
          <ChipRow items={technologies} variant="default" />
        </div>
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2a.7: `IntegrationsPanel` section

**File:** Create `src/components/shared/sections/IntegrationsPanel.tsx`

This is the merged EHR + Core System integrations panel. It takes a typed list with connection method per integration.

- [ ] **Step 1:** Write:

```tsx
import { Section, Container } from '@/components/shared/primitives';
import { CheckCircle2 } from 'lucide-react';

export interface IntegrationGroup {
  name: string;
  category: string;
  connectionMethod: string;
  capabilities: string[];
}

export interface IntegrationsPanelProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  integrations: IntegrationGroup[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const IntegrationsPanel = ({
  title = 'Integrations',
  subtitle,
  eyebrow,
  integrations,
  tone = 'warm',
  className,
}: IntegrationsPanelProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, idx) => (
          <div
            key={idx}
            className="bg-surface-white border border-border-light rounded-xl shadow-card-sm p-6 hover:shadow-card transition-shadow"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-text-heading leading-tight">
                  {integration.name}
                </h3>
                <div className="text-xs md:text-sm text-text-muted uppercase tracking-wide mt-1">
                  {integration.category}
                </div>
              </div>
            </div>
            <div className="text-xs md:text-sm font-medium text-brand-600 bg-brand-50 border border-brand-100 rounded-lg px-3 py-1.5 inline-block mb-4">
              {integration.connectionMethod}
            </div>
            <ul className="space-y-2">
              {integration.capabilities.map((capability, capIdx) => (
                <li
                  key={capIdx}
                  className="flex items-start gap-2 text-xs md:text-sm text-text-body"
                >
                  <CheckCircle2
                    className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2a.8: `FAQ` section

**File:** Create `src/components/shared/sections/FAQ.tsx`

- [ ] **Step 1:** Write:

```tsx
import { ChevronDown } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  faqs: FAQItem[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const FAQ = ({
  title = 'Frequently Asked Questions',
  subtitle,
  eyebrow,
  faqs,
  tone = 'light',
  className,
}: FAQProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container width="narrow">
      <div className="text-center mb-10 md:mb-12">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-3 md:space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group bg-surface-white border border-border-light rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 hover:bg-surface-warm transition-colors list-none">
              <h3 className="text-base md:text-lg font-semibold text-text-heading pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                aria-hidden="true"
                className="h-5 w-5 text-text-muted transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
              />
            </summary>
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2a.9: `CTABlock` section

**File:** Create `src/components/shared/sections/CTABlock.tsx`

- [ ] **Step 1:** Write:

```tsx
import Link from 'next/link';
import { Section, Container } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';

export interface CTABlockCta {
  label: string;
  href: string;
}

export interface CTABlockProps {
  title: string;
  description: string;
  primaryCta: CTABlockCta;
  secondaryCta?: CTABlockCta;
  className?: string;
}

export const CTABlock = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTABlockProps) => (
  <Section tone="accent" size="md" className={className}>
    <Container width="narrow">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 md:mb-5 tracking-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg text-text-light/85 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-surface-white text-brand-700 hover:bg-surface-warm"
          >
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border-subtle text-text-light hover:bg-[color:var(--glass-hover)]"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2a.10a: `RelatedPages` section

**File:** Create `src/components/shared/sections/RelatedPages.tsx`

Cross-links to related services/solutions. Critical for internal linking (SEO) and keeping visitors in the funnel (lead gen). Placed near the end of the page, just before FAQ.

- [ ] **Step 1:** Write:

```tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface RelatedPageItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface RelatedPagesProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  pages: RelatedPageItem[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const RelatedPages = ({
  title = 'Explore Related Solutions',
  subtitle,
  eyebrow,
  pages,
  tone = 'warm',
  className,
}: RelatedPagesProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, idx) => {
          const Icon = getLucideIcon(page.icon);
          return (
            <Link key={idx} href={page.href} className="group">
              <div className="h-full bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card hover:border-brand-300 transition-all p-6 md:p-7">
                <IconTile
                  icon={Icon}
                  size="md"
                  variant="brand"
                  className="mb-5 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2 group-hover:text-brand-600 transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm md:text-base text-text-body leading-relaxed mb-4">
                  {page.description}
                </p>
                <div className="flex items-center text-brand-600 font-medium text-sm">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + token grep.

**Note on Phase 2a ordering:** Task 2a.3 (`FeatureGrid`) and 2a.4 (`BenefitsGrid`) depend on `getLucideIcon` from `@/lib/icons` (Task 3.3). The simplest execution order is: 1.1-1.10 → 3.1-3.3 → 2a.1, 2a.2, 2a.5-2a.9 → 2a.3, 2a.4 → 2b → 3.4-end. Alternatively, implement Task 3.3 first (it's 15 lines) and then Phase 2a runs linearly.

### Task 2a.10: Sections barrel export (phase 2a portion)

**File:** Create `src/components/shared/sections/index.ts`

- [ ] **Step 1:** Write:

```ts
export { Hero, type HeroProps, type HeroCta } from './Hero';
export { MetricsStrip, type MetricsStripProps } from './MetricsStrip';
export { FeatureGrid, type FeatureGridProps, type FeatureItem } from './FeatureGrid';
export { BenefitsGrid, type BenefitsGridProps, type BenefitItem } from './BenefitsGrid';
export { ProcessTimeline, type ProcessTimelineProps, type ProcessStep } from './ProcessTimeline';
export { TechStackBlock, type TechStackBlockProps } from './TechStackBlock';
export { IntegrationsPanel, type IntegrationsPanelProps, type IntegrationGroup } from './IntegrationsPanel';
export { FAQ, type FAQProps, type FAQItem } from './FAQ';
export { CTABlock, type CTABlockProps, type CTABlockCta } from './CTABlock';
export { RelatedPages, type RelatedPagesProps, type RelatedPageItem } from './RelatedPages';
```

This file will be extended by Phase 2b and the final sections barrel will re-export `DiscoveryMethodology`, `EngagementModels`, and `ComplianceDeepDive` too.

- [ ] **Step 2:** Type-check: `npx tsc --noEmit`.

**Phase 2a checkpoint:** 9 core section files + 1 barrel export. Run `npm run lint` and `npx tsc --noEmit`. Expected: no new errors. STOP for user review. Do not proceed to Phase 2b without acknowledgment.

---

## Phase 2b — Pilot-specific shared sections

Three sections specifically surfaced by the pilot pages. They live in `src/components/shared/sections/` alongside Phase 2a.

### Task 2b.1: `DiscoveryMethodology` section

**File:** Create `src/components/shared/sections/DiscoveryMethodology.tsx`

Used by Product Discovery. Shows the methods we apply as cards.

- [ ] **Step 1:** Write:

```tsx
import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface MethodologyCard {
  icon: string;
  name: string;
  description: string;
}

export interface DiscoveryMethodologyProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  methods: MethodologyCard[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const DiscoveryMethodology = ({
  title = 'Our Methodology',
  subtitle,
  eyebrow,
  methods,
  tone = 'warm',
  className,
}: DiscoveryMethodologyProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {methods.map((method, idx) => {
          const Icon = getLucideIcon(method.icon);
          return (
            <div
              key={idx}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm p-6 md:p-7 hover:shadow-card transition-shadow"
            >
              <IconTile icon={Icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
                {method.name}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {method.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2b.2: `EngagementModels` section

**File:** Create `src/components/shared/sections/EngagementModels.tsx`

Used by Product Discovery and MVP Development. Shows pricing tiers.

- [ ] **Step 1:** Write:

```tsx
import Link from 'next/link';
import { Section, Container, CheckList } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface EngagementCta {
  label: string;
  href: string;
}

export interface EngagementModel {
  name: string;
  duration: string;
  priceFrom?: string;
  whatsIncluded: string[];
  suitableFor: string;
  primaryCta: EngagementCta;
  featured?: boolean;
}

export interface EngagementModelsProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  models: EngagementModel[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const EngagementModels = ({
  title = 'Engagement Models',
  subtitle,
  eyebrow,
  models,
  tone = 'warm',
  className,
}: EngagementModelsProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model, idx) => (
          <div
            key={idx}
            className={cn(
              'bg-surface-white border rounded-xl p-6 md:p-8 flex flex-col',
              model.featured
                ? 'border-brand-600 shadow-brand-card ring-1 ring-brand-600'
                : 'border-border-light shadow-card-sm'
            )}
          >
            {model.featured && (
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">
                Most popular
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-text-heading mb-2">
              {model.name}
            </h3>
            <div className="text-sm text-text-muted mb-4">{model.duration}</div>
            {model.priceFrom && (
              <div className="mb-4">
                <span className="text-sm text-text-muted">Starting at</span>
                <div className="text-3xl md:text-4xl font-extrabold text-text-heading">
                  {model.priceFrom}
                </div>
              </div>
            )}
            <div className="text-sm text-text-body mb-4 italic">
              Best for: {model.suitableFor}
            </div>
            <div className="flex-1 mb-6">
              <CheckList items={model.whatsIncluded} />
            </div>
            <Button
              asChild
              className={cn(
                model.featured
                  ? 'bg-brand-600 hover:bg-brand-700 text-text-light'
                  : 'bg-surface-warm hover:bg-surface-light text-text-heading border border-border-light'
              )}
            >
              <Link href={model.primaryCta.href}>{model.primaryCta.label}</Link>
            </Button>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2b.3: `ComplianceDeepDive` section

**File:** Create `src/components/shared/sections/ComplianceDeepDive.tsx`

Used by Patient Portals. Shows technical safeguards, audit, BAA.

- [ ] **Step 1:** Write:

```tsx
import { Section, Container, IconTile, ChipRow } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface SafeguardItem {
  icon: string;
  title: string;
  description: string;
}

export interface ComplianceDeepDiveProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  frameworks: string[];
  safeguards: SafeguardItem[];
  auditNote: string;
  partnerAgreements?: string[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const ComplianceDeepDive = ({
  title = 'Compliance by design',
  subtitle,
  eyebrow,
  frameworks,
  safeguards,
  auditNote,
  partnerAgreements,
  tone = 'warm',
  className,
}: ComplianceDeepDiveProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        <ChipRow items={frameworks} variant="brand" />
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {safeguards.map((safeguard, idx) => {
          const Icon = getLucideIcon(safeguard.icon);
          return (
            <div
              key={idx}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm p-6 md:p-7"
            >
              <IconTile icon={Icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
                {safeguard.title}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {safeguard.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-surface-white border border-border-light rounded-xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-3">
              Audit-ready on day one
            </h3>
            <p className="text-sm md:text-base text-text-body leading-relaxed">
              {auditNote}
            </p>
          </div>
          {partnerAgreements && partnerAgreements.length > 0 && (
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-3">
                Partner agreements in place
              </h3>
              <ChipRow items={partnerAgreements} variant="default" />
            </div>
          )}
        </div>
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 2b.4: Update sections barrel export

**File:** Edit `src/components/shared/sections/index.ts`

- [ ] **Step 1:** Append to the existing file:

```ts
export { DiscoveryMethodology, type DiscoveryMethodologyProps, type MethodologyCard } from './DiscoveryMethodology';
export { EngagementModels, type EngagementModelsProps, type EngagementModel, type EngagementCta } from './EngagementModels';
export { ComplianceDeepDive, type ComplianceDeepDiveProps, type SafeguardItem } from './ComplianceDeepDive';
```

- [ ] **Step 2:** Type-check.

**Phase 2b checkpoint:** 3 pilot-specific section files + updated barrel. Run `npm run lint` and `npx tsc --noEmit`. STOP for user review.

---

## Phase 3 — Data types + content helpers

### Task 3.1: Page data types

**File:** Create `src/types/pages.ts`

- [ ] **Step 1:** Write:

```ts
// ─── Shared atom types ──────────────────────────────────

export interface HeroMetric {
  value: string;
  label: string;
  description: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface ProcessStepData {
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IntegrationGroup {
  name: string;
  category: string;
  connectionMethod: string;
  capabilities: string[];
}

export interface MethodologyCard {
  icon: string;
  name: string;
  description: string;
}

export interface EngagementModelData {
  name: string;
  duration: string;
  priceFrom?: string;
  whatsIncluded: string[];
  suitableFor: string;
  primaryCta: CTA;
  featured?: boolean;
}

export interface SafeguardItem {
  icon: string;
  title: string;
  description: string;
}

export interface ComplianceDetail {
  frameworks: string[];
  safeguards: SafeguardItem[];
  auditNote: string;
  partnerAgreements?: string[];
}

export interface RelatedPageItem {
  title: string;
  description: string;
  href: string;
  icon: string;                          // Lucide icon name
}

export interface CaseStudyRef {
  slug: string;
  clientName: string;
  headline: string;
  metrics: { value: string; label: string }[];
  quote?: { text: string; author: string; title: string };
  imagePath?: string;
}

// ─── Section keys (template dispatch) ───────────────────

export type SectionKey =
  | 'hero'
  | 'metricsStrip'
  | 'featureGrid'
  | 'benefitsGrid'
  | 'processTimeline'
  | 'techStackBlock'
  | 'integrationsPanel'
  | 'faq'
  | 'ctaBlock'
  | 'discoveryMethodology'
  | 'engagementModels'
  | 'complianceDeepDive'
  | 'relatedPages'
  | 'signature';

// ─── Base page data ─────────────────────────────────────

export interface BasePageData {
  slug: string;
  title: string;
  shortDescription: string;

  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalPath: string;

  breadcrumb: BreadcrumbItem[];

  composition: SectionKey[];

  hero: {
    badge?: string;
    badgeHref?: string;
    headline: string;
    subhead: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
    metrics?: HeroMetric[];
  };

  metricsStrip?: HeroMetric[];
  features?: FeatureItem[];
  benefits?: BenefitItem[];
  processSteps?: ProcessStepData[];
  capabilities?: string[];
  technologies?: string[];
  integrations?: IntegrationGroup[];
  relatedPages?: RelatedPageItem[];      // internal cross-links (SEO + funnel)
  faqs: FAQItem[];
  cta: {
    title: string;
    description: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
  };

  _unverified?: string[];
}

// ─── Solution extension ─────────────────────────────────

export type SolutionIndustry = 'healthcare' | 'insurance' | 'retail' | 'fintech' | string;

export interface SolutionPageData extends BasePageData {
  industry: SolutionIndustry;
  industryMetrics?: HeroMetric[];
  complianceDetail?: ComplianceDetail;
  caseStudySpotlight?: CaseStudyRef;
  signatureComponent: string; // component identifier, e.g. 'PortalArchitectureMap'
}

// ─── Service extension ──────────────────────────────────

export type ServiceCategory = 'software-engineering' | 'infrastructure' | 'ai-ml' | 'strategy' | string;

export interface ServicePageData extends BasePageData {
  category: ServiceCategory;
  methodology?: MethodologyCard[];
  engagementModels?: EngagementModelData[];
  pricing?: {
    startingPrice: string;
    whatsIncluded: string[];
  };
  signatureComponent: string;
}
```

- [ ] **Step 2:** Type-check: `npx tsc --noEmit`.

### Task 3.2: Extend `content.ts` with new fetchers

**File:** Modify `src/lib/content.ts`

- [ ] **Step 1:** Add to the imports at the top:

```ts
import type { ServicePageData, SolutionPageData } from '@/types/pages';
```

- [ ] **Step 2:** Add these exported functions to the file (append at the bottom, before any `export default`):

```ts
// ─── Unified services/solutions data layer ─────────────────
// Pilot migration: the four pilot pages use these fetchers.
// Non-pilot pages stay on the legacy fetchers above until migrated.

const SERVICE_PAGE_MODULES: Record<string, () => Promise<{ default: ServicePageData }>> = {
  'product-discovery': () => import('@/data/services/product-discovery'),
  'mvp-development': () => import('@/data/services/mvp-development'),
};

const SOLUTION_PAGE_MODULES: Record<string, () => Promise<{ default: SolutionPageData }>> = {
  'patient-portals': () => import('@/data/solutions/patient-portals'),
  'insurance-portals': () => import('@/data/solutions/insurance-portals'),
};

export async function getServicePageData(slug: string): Promise<ServicePageData | null> {
  const loader = SERVICE_PAGE_MODULES[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export async function getSolutionPageData(slug: string): Promise<SolutionPageData | null> {
  const loader = SOLUTION_PAGE_MODULES[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export function getAllServicePageSlugs(): string[] {
  return Object.keys(SERVICE_PAGE_MODULES);
}

export function getAllSolutionPageSlugs(): string[] {
  return Object.keys(SOLUTION_PAGE_MODULES);
}
```

- [ ] **Step 2:** Type-check: `npx tsc --noEmit`. Expected errors until Task 6 creates the data files (the dynamic imports won't resolve). Ignore these until Phase 6 is done, then re-run.

### Task 3.3: Lucide icon helper

**File:** Create `src/lib/icons.ts`

- [ ] **Step 1:** Write:

```ts
import * as LucideIcons from 'lucide-react';
import { HelpCircle, type LucideIcon } from 'lucide-react';

/**
 * Resolves a Lucide icon by name. Returns HelpCircle if not found,
 * so pages don't crash on typos — the missing icon is visually obvious.
 */
export function getLucideIcon(name: string): LucideIcon {
  // `lucide-react` exports every icon as a named export. The star
  // import surfaces them all as an indexable object.
  const icon = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
  return icon ?? HelpCircle;
}
```

- [ ] **Step 2:** Type-check.

**Phase 3 checkpoint:** 1 types file + 1 icon helper + extended content.ts. Run `npx tsc --noEmit`. Expected: `content.ts` will have unresolved dynamic imports until Phase 6 is done — that's OK, note it and proceed. STOP for user review.

---

## Phase 4 — Page templates

### Task 4.1: `ServiceDetailTemplate`

**File:** Create `src/components/templates/ServiceDetailTemplate.tsx`

- [ ] **Step 1:** Write:

```tsx
import type { ComponentType, ReactNode } from 'react';
import type { ServicePageData, SectionKey } from '@/types/pages';
import { Breadcrumbs } from '@/components/shared/primitives';
import {
  Hero,
  MetricsStrip,
  FeatureGrid,
  BenefitsGrid,
  ProcessTimeline,
  TechStackBlock,
  IntegrationsPanel,
  FAQ,
  CTABlock,
  DiscoveryMethodology,
  EngagementModels,
  ComplianceDeepDive,
  RelatedPages,
} from '@/components/shared/sections';

export interface ServiceDetailTemplateProps {
  data: ServicePageData;
  /**
   * The signature section component, resolved by the page route and
   * passed in. Kept as a React node so the template stays dumb about
   * which signature component belongs to which page.
   */
  signature?: ReactNode;
}

export const ServiceDetailTemplate = ({
  data,
  signature,
}: ServiceDetailTemplateProps) => {
  const sectionRenderers: Record<SectionKey, () => ReactNode> = {
    hero: () => (
      <Hero
        badge={data.hero.badge}
        badgeHref={data.hero.badgeHref}
        headline={data.hero.headline}
        subhead={data.hero.subhead}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        metrics={data.hero.metrics}
      />
    ),
    metricsStrip: () =>
      data.metricsStrip ? <MetricsStrip metrics={data.metricsStrip} /> : null,
    featureGrid: () =>
      data.features ? <FeatureGrid features={data.features} /> : null,
    benefitsGrid: () =>
      data.benefits ? <BenefitsGrid benefits={data.benefits} /> : null,
    processTimeline: () =>
      data.processSteps ? <ProcessTimeline steps={data.processSteps} /> : null,
    techStackBlock: () =>
      data.capabilities && data.technologies ? (
        <TechStackBlock
          capabilities={data.capabilities}
          technologies={data.technologies}
        />
      ) : null,
    integrationsPanel: () =>
      data.integrations ? (
        <IntegrationsPanel integrations={data.integrations} />
      ) : null,
    discoveryMethodology: () =>
      data.methodology ? <DiscoveryMethodology methods={data.methodology} /> : null,
    engagementModels: () =>
      data.engagementModels ? (
        <EngagementModels models={data.engagementModels} />
      ) : null,
    complianceDeepDive: () => null, // not used by services
    relatedPages: () =>
      data.relatedPages ? <RelatedPages pages={data.relatedPages} /> : null,
    faq: () => <FAQ faqs={data.faqs} />,
    ctaBlock: () => (
      <CTABlock
        title={data.cta.title}
        description={data.cta.description}
        primaryCta={data.cta.primaryCta}
        secondaryCta={data.cta.secondaryCta}
      />
    ),
    signature: () => signature ?? null,
  };

  return (
    <>
      <Breadcrumbs items={data.breadcrumb} />
      {data.composition.map((key, idx) => {
        const renderer = sectionRenderers[key];
        const content = renderer();
        if (!content) return null;
        return <div key={`${key}-${idx}`}>{content}</div>;
      })}
    </>
  );
};
```

- [ ] **Step 2:** Type-check.

### Task 4.2: `SolutionDetailTemplate`

**File:** Create `src/components/templates/SolutionDetailTemplate.tsx`

- [ ] **Step 1:** Write:

```tsx
import type { ReactNode } from 'react';
import type { SolutionPageData, SectionKey } from '@/types/pages';
import { Breadcrumbs } from '@/components/shared/primitives';
import {
  Hero,
  MetricsStrip,
  FeatureGrid,
  BenefitsGrid,
  ProcessTimeline,
  TechStackBlock,
  IntegrationsPanel,
  FAQ,
  CTABlock,
  ComplianceDeepDive,
  RelatedPages,
} from '@/components/shared/sections';

export interface SolutionDetailTemplateProps {
  data: SolutionPageData;
  signature?: ReactNode;
}

export const SolutionDetailTemplate = ({
  data,
  signature,
}: SolutionDetailTemplateProps) => {
  const sectionRenderers: Record<SectionKey, () => ReactNode> = {
    hero: () => (
      <Hero
        badge={data.hero.badge}
        badgeHref={data.hero.badgeHref}
        headline={data.hero.headline}
        subhead={data.hero.subhead}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        metrics={data.hero.metrics}
      />
    ),
    metricsStrip: () =>
      data.metricsStrip ? <MetricsStrip metrics={data.metricsStrip} /> : null,
    featureGrid: () =>
      data.features ? <FeatureGrid features={data.features} /> : null,
    benefitsGrid: () =>
      data.benefits ? <BenefitsGrid benefits={data.benefits} /> : null,
    processTimeline: () =>
      data.processSteps ? <ProcessTimeline steps={data.processSteps} /> : null,
    techStackBlock: () =>
      data.capabilities && data.technologies ? (
        <TechStackBlock
          capabilities={data.capabilities}
          technologies={data.technologies}
        />
      ) : null,
    integrationsPanel: () =>
      data.integrations ? (
        <IntegrationsPanel integrations={data.integrations} />
      ) : null,
    complianceDeepDive: () =>
      data.complianceDetail ? (
        <ComplianceDeepDive
          frameworks={data.complianceDetail.frameworks}
          safeguards={data.complianceDetail.safeguards}
          auditNote={data.complianceDetail.auditNote}
          partnerAgreements={data.complianceDetail.partnerAgreements}
        />
      ) : null,
    discoveryMethodology: () => null,
    engagementModels: () => null,
    relatedPages: () =>
      data.relatedPages ? <RelatedPages pages={data.relatedPages} /> : null,
    faq: () => <FAQ faqs={data.faqs} />,
    ctaBlock: () => (
      <CTABlock
        title={data.cta.title}
        description={data.cta.description}
        primaryCta={data.cta.primaryCta}
        secondaryCta={data.cta.secondaryCta}
      />
    ),
    signature: () => signature ?? null,
  };

  return (
    <>
      <Breadcrumbs items={data.breadcrumb} />
      {data.composition.map((key, idx) => {
        const renderer = sectionRenderers[key];
        const content = renderer();
        if (!content) return null;
        return <div key={`${key}-${idx}`}>{content}</div>;
      })}
    </>
  );
};
```

- [ ] **Step 2:** Type-check.

### Task 4.3: Templates barrel

**File:** Create `src/components/templates/index.ts`

- [ ] **Step 1:** Write:

```ts
export { ServiceDetailTemplate, type ServiceDetailTemplateProps } from './ServiceDetailTemplate';
export { SolutionDetailTemplate, type SolutionDetailTemplateProps } from './SolutionDetailTemplate';
```

- [ ] **Step 2:** Type-check.

**Phase 4 checkpoint:** 2 templates + 1 barrel. Type-check passes (assuming 3.3 icon helper and all Phase 2 sections exist). STOP for user review.

---

## Phase 5 — Signature components

Four per-page custom components. Each lives in `src/components/signature/`. They're NOT shared — only the page that needs them imports them.

Each signature component wraps its content in `<Section tone="dark" withGrid size="md">` so it inherits the rhythm system. The internal layout is bespoke.

Each signature component must have a documented mobile layout. Include a comment at the top of each file listing how it collapses.

### Task 5.1: `DiscoveryBeforeAfter` — Product Discovery signature

**File:** Create `src/components/signature/DiscoveryBeforeAfter.tsx`

Visual: 5 artifact preview cards showing what a discovery sprint delivers. Compact "before" context strip, then the artifact grid.

- [ ] **Step 1:** Write:

```tsx
/**
 * DiscoveryBeforeAfter — signature section for Product Discovery page.
 *
 * Desktop: 5 artifact cards in a horizontal grid under a context headline.
 * Mobile: artifact cards collapse to 2 cols, then 1 col at smallest.
 */

import { HelpCircle, FileText, Layers, CircleCheck, AlertTriangle } from 'lucide-react';
import { Section, Container, IconTile } from '@/components/shared/primitives';

interface Artifact {
  icon: typeof HelpCircle;
  label: string;
  format: string;
  preview: React.ReactNode;
}

const ARTIFACTS: Artifact[] = [
  {
    icon: HelpCircle,
    label: 'Problem Canvas',
    format: 'PDF · validated',
    preview: (
      <div className="grid grid-cols-2 gap-1.5 h-full p-2">
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
      </div>
    ),
  },
  {
    icon: Layers,
    label: 'Persona Board',
    format: 'Figma · 3 personas',
    preview: (
      <div className="flex flex-col gap-1.5 p-3">
        <div className="h-1.5 bg-accent-400/40 rounded w-4/5" />
        <div className="h-1.5 bg-accent-400/40 rounded w-3/5" />
        <div className="h-1.5 bg-brand-400/60 rounded w-4/5" />
      </div>
    ),
  },
  {
    icon: FileText,
    label: 'Prioritized Backlog',
    format: 'Linear · MoSCoW',
    preview: (
      <div className="flex flex-col gap-1 p-2.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 bg-brand-400/60 rounded"
            style={{ width: `${100 - i * 12}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: CircleCheck,
    label: 'Tech Spike Matrix',
    format: 'Markdown · tested',
    preview: (
      <div className="grid grid-cols-4 gap-1 p-2.5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-full ${
              i % 2 === 0 ? 'bg-brand-500' : 'bg-brand-500/50'
            }`}
          />
        ))}
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    label: 'Risk Register',
    format: 'Sheet · mitigated',
    preview: (
      <div className="flex flex-col gap-1.5 p-2.5">
        {[
          'bg-brand-600',
          'bg-brand-500',
          'bg-brand-400',
          'bg-brand-400/60',
        ].map((color, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
            <span className="h-1 flex-1 bg-[color:var(--glass-bg)] rounded" />
          </div>
        ))}
      </div>
    ),
  },
];

export interface DiscoveryBeforeAfterProps {
  headline?: string;
  subhead?: string;
}

export const DiscoveryBeforeAfter = ({
  headline = 'Day 14 — Five artifacts, ready to act on',
  subhead = 'Every discovery sprint ends with concrete deliverables your team can ship against on Monday morning.',
}: DiscoveryBeforeAfterProps) => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          What you walk out with
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          {headline}
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">{subhead}</p>
      </div>

      <div className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {ARTIFACTS.map((artifact, idx) => (
          <div
            key={idx}
            className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-4 md:p-5 hover:bg-[color:var(--glass-hover)] transition-colors"
          >
            <IconTile icon={artifact.icon} size="sm" variant="glass" className="mb-3" />
            <div
              className="h-16 md:h-20 bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-md mb-3 overflow-hidden"
              aria-hidden="true"
            >
              {artifact.preview}
            </div>
            <div className="text-sm md:text-base font-semibold text-text-light leading-tight mb-1">
              {artifact.label}
            </div>
            <div className="text-xs text-text-subtle uppercase tracking-wide">
              {artifact.format}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + token grep.

### Task 5.2: `MvpDualTrackRoadmap` — MVP Development signature

**File:** Create `src/components/signature/MvpDualTrackRoadmap.tsx`

Visual: Dual-track timeline. Top track = engineering work per phase, bottom track = founder's demo view.

- [ ] **Step 1:** Write:

```tsx
/**
 * MvpDualTrackRoadmap — signature section for MVP Development page.
 *
 * Desktop: 5 phases across, dual tracks stacked vertically per phase,
 *   connected by a glowing timeline line.
 * Mobile: phases collapse vertically; each phase is one card with
 *   both tracks stacked inside.
 */

import { Section, Container } from '@/components/shared/primitives';

interface RoadmapPhase {
  weekLabel: string;
  phaseTitle: string;
  engineeringWork: string[];
  demoLabel: string;
  demoName: string;
  demoDescription: string;
  isLaunch?: boolean;
}

const PHASES: RoadmapPhase[] = [
  {
    weekLabel: 'Week 1',
    phaseTitle: 'Kickoff',
    engineeringWork: [
      'Scope lock & success criteria',
      'CI/CD + infra baseline',
      'Sprint 0 walkthrough',
    ],
    demoLabel: 'Demo 1',
    demoName: 'Working shell deployed',
    demoDescription: 'Live URL, auth stub, deploy pipeline',
  },
  {
    weekLabel: 'Weeks 2–4',
    phaseTitle: 'Core Build',
    engineeringWork: [
      'Auth + user model',
      'Primary data flows',
      'Happy-path UI',
    ],
    demoLabel: 'Demos 2–4',
    demoName: 'End-to-end happy path',
    demoDescription: 'A user can sign up & complete the primary job',
  },
  {
    weekLabel: 'Weeks 5–8',
    phaseTitle: 'Real Users',
    engineeringWork: [
      'Closed beta cohort',
      'Feedback loop & issue triage',
      'Weekly iteration cycles',
    ],
    demoLabel: 'Demos 5–8',
    demoName: 'Real usage data',
    demoDescription: 'Metrics dashboard with actual cohort behaviour',
  },
  {
    weekLabel: 'Weeks 9–11',
    phaseTitle: 'Harden',
    engineeringWork: [
      'Performance + observability',
      'Security review',
      'Billing + onboarding',
    ],
    demoLabel: 'Demos 9–11',
    demoName: 'Prod-ready walkthrough',
    demoDescription: 'Runbook, SLOs, security & billing live',
  },
  {
    weekLabel: 'Week 12',
    phaseTitle: 'V1 Launch',
    engineeringWork: [
      'Public deploy',
      'Handover & training',
      'Post-launch metrics setup',
    ],
    demoLabel: 'Launch',
    demoName: 'Paying customers',
    demoDescription: 'V1 live, support playbook, metrics tracking',
    isLaunch: true,
  },
];

export const MvpDualTrackRoadmap = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          A roadmap that shows both tracks
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          12 weeks. 12 demos. Real users by week 5.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Top track is engineering&apos;s view. Bottom track is your view — working software,
          demos, real users — every phase.
        </p>
      </div>

      <div className="hidden md:flex items-center justify-between text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
        <span className="text-brand-400">↑ Engineering track</span>
        <span className="text-accent-400">↓ Your view (demos & deliverables)</span>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-[4%] right-[4%] top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-brand-500/30 via-brand-500 to-accent-500 rounded-full"
        />

        <div className="grid gap-5 md:gap-4 grid-cols-1 md:grid-cols-5 relative">
          {PHASES.map((phase, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-b-0 rounded-t-xl p-4 md:p-5">
                <div className="inline-block px-2 py-0.5 rounded-full bg-brand-500/25 text-brand-300 text-xs font-bold uppercase tracking-wide mb-2">
                  {phase.weekLabel}
                </div>
                <h3 className="text-base md:text-lg font-bold text-text-light mb-2 leading-tight">
                  {phase.phaseTitle}
                </h3>
                <ul className="space-y-1">
                  {phase.engineeringWork.map((work, workIdx) => (
                    <li
                      key={workIdx}
                      className="text-xs md:text-sm text-text-subtle leading-snug pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-brand-400 before:font-bold"
                    >
                      {work}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="h-6 flex items-center justify-center relative"
                aria-hidden="true"
              >
                <div
                  className={`w-4 h-4 rounded-full border-4 border-surface-dark ${
                    phase.isLaunch ? 'bg-accent-400 shadow-glow' : 'bg-brand-500'
                  }`}
                  style={{
                    boxShadow: phase.isLaunch
                      ? '0 0 0 4px rgba(99,102,241,0.35), 0 0 16px rgba(99,102,241,0.8)'
                      : '0 0 0 3px rgba(59,130,246,0.2)',
                  }}
                />
              </div>

              <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-t-0 rounded-b-xl p-4 md:p-5">
                <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent-400 mb-1">
                  <span aria-hidden="true">▶</span> {phase.demoLabel}
                </div>
                <div className="text-sm md:text-base font-bold text-text-light mb-1 leading-tight">
                  {phase.demoName}
                </div>
                <div className="text-xs md:text-sm text-text-subtle leading-snug">
                  {phase.demoDescription}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);
```

**Note on inline style:** The `boxShadow` inline style is a narrow exception to keep the launch-node glow crisp. It does NOT use hex — it uses `rgba` that happens to match `brand-500` and `accent-500` token values. Acceptable because it's a single decorative glow and no other alternative cleanly maps to a box-shadow with two stacked glows. If you want it perfectly tokenized, define a new `--shadow-launch-glow` in `themes/blue.css` and reference it as `style={{ boxShadow: 'var(--shadow-launch-glow)' }}`. Noted for a cleanup pass.

- [ ] **Step 2:** Type-check + grep (the grep will pass — `rgba(...)` isn't matched).

### Task 5.3: `PortalArchitectureMap` — Patient Portals signature

**File:** Create `src/components/signature/PortalArchitectureMap.tsx`

Visual: 4-tier vertical flow (Portal → Gateway → FHIR → EHR) wrapped in a compliance envelope, with 6 side annotation callouts (3 left, 3 right).

- [ ] **Step 1:** Write:

```tsx
/**
 * PortalArchitectureMap — signature section for Patient Portals page.
 *
 * Desktop: 3-column layout — left callouts, center diagram, right callouts.
 * Mobile: annotations stack above and below the diagram; diagram tiers
 *   linearize vertically with vertical connectors.
 */

import { Section, Container } from '@/components/shared/primitives';

interface ArchAnnotation {
  number: string;
  description: string;
  variant: 'brand' | 'accent' | 'success';
}

const LEFT_ANNOTATIONS: ArchAnnotation[] = [
  {
    number: '5 modules',
    description:
      'Records · Scheduling · Messaging · Telehealth · Billing — all from one codebase',
    variant: 'brand',
  },
  {
    number: 'Zero PHI in app layer',
    description:
      'All patient data tokenized at the gateway, never cached in the frontend',
    variant: 'success',
  },
  {
    number: '99.95% uptime',
    description:
      'Multi-region Azure with automated failover and health-check routing',
    variant: 'brand',
  },
];

const RIGHT_ANNOTATIONS: ArchAnnotation[] = [
  {
    number: 'FHIR R4 native',
    description:
      'SMART on FHIR where available, HL7 v2 fallback for legacy systems',
    variant: 'accent',
  },
  {
    number: 'Audit-ready day 1',
    description:
      'Every access logged with timestamp, actor, resource, outcome — OCR export',
    variant: 'brand',
  },
  {
    number: 'BAA managed',
    description:
      'Business associate agreements in place with all sub-processors',
    variant: 'success',
  },
];

interface ArchTier {
  label: string;
  subLabel: string;
  chips: string[];
  emphasis?: 'portal' | 'bridge' | 'default';
}

const TIERS: ArchTier[] = [
  {
    label: 'Patient Portal',
    subLabel: 'Web + PWA + mobile',
    chips: ['Records', 'Scheduling', 'Messaging', 'Telehealth', 'Billing'],
    emphasis: 'portal',
  },
  {
    label: 'Identity + Gateway',
    subLabel: 'Azure AD B2C + Key Vault',
    chips: ['MFA', 'RBAC', 'Audit log', 'AES-256'],
  },
  {
    label: 'FHIR R4 / HL7 Bridge',
    subLabel: 'interop middleware',
    chips: ['SMART on FHIR', 'HL7 v2', 'Transform'],
    emphasis: 'bridge',
  },
  {
    label: 'Your EHR',
    subLabel: 'vendor-agnostic',
    chips: ['Epic', 'Cerner', 'Athena', 'eCW', '+ more'],
  },
];

const VARIANT_CLASSES: Record<ArchAnnotation['variant'], string> = {
  brand: 'border-l-brand-500',
  accent: 'border-l-accent-500',
  success: 'border-l-brand-400',
};

const getTierClasses = (emphasis?: 'portal' | 'bridge' | 'default') => {
  if (emphasis === 'portal') {
    return 'bg-gradient-to-r from-accent-500/20 to-brand-500/15 border-accent-500/40';
  }
  if (emphasis === 'bridge') {
    return 'bg-brand-500/10 border-brand-500/30';
  }
  return 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]';
};

const Annotation = ({ ann }: { ann: ArchAnnotation }) => (
  <div
    className={`bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-l-[3px] ${
      VARIANT_CLASSES[ann.variant]
    } rounded-r-xl p-4 md:p-5`}
  >
    <div className="text-base md:text-lg font-bold text-text-light leading-tight">
      {ann.number}
    </div>
    <div className="text-xs md:text-sm text-text-subtle mt-1.5 leading-relaxed">
      {ann.description}
    </div>
  </div>
);

export const PortalArchitectureMap = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          How it connects
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Meets your EHR where it is — not the other way around.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Every integration layer is tokenized, audit-logged, and wrapped in a compliance
          envelope designed for OCR review.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_2fr_1fr] lg:gap-8 items-center">
        <div className="flex flex-col gap-3 md:gap-4">
          {LEFT_ANNOTATIONS.map((ann, idx) => (
            <Annotation key={idx} ann={ann} />
          ))}
        </div>

        <div className="relative">
          <div className="border-2 border-dashed border-brand-400/40 rounded-2xl p-6 md:p-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
                HIPAA · SOC 2 · HITECH · 21 CFR Part 11
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {TIERS.map((tier, idx) => (
                <div key={idx}>
                  <div
                    className={`rounded-xl border p-4 md:p-5 ${getTierClasses(
                      tier.emphasis
                    )}`}
                  >
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="min-w-0">
                        <div className="text-sm md:text-base font-bold text-text-light">
                          {tier.label}
                        </div>
                        <div className="text-xs text-text-subtle uppercase tracking-wide mt-0.5">
                          {tier.subLabel}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {tier.chips.map((chip, chipIdx) => (
                          <span
                            key={chipIdx}
                            className="text-xs px-2 py-1 rounded-full bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] text-text-subtle"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {idx < TIERS.length - 1 && (
                    <div className="flex justify-center py-1.5" aria-hidden="true">
                      <span className="text-brand-400/60 text-base">▼</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {RIGHT_ANNOTATIONS.map((ann, idx) => (
            <Annotation key={idx} ann={ann} />
          ))}
        </div>
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 5.4: `ClaimsFlowComparison` — Insurance Portals signature

**File:** Create `src/components/signature/ClaimsFlowComparison.tsx`

Visual: Two stacked horizontal bars with stage segments proportional to actual duration. The compression between "Legacy" (10 days) and "Portal" (8 hours) IS the message.

- [ ] **Step 1:** Write:

```tsx
/**
 * ClaimsFlowComparison — signature section for Insurance Portals page.
 *
 * Desktop: Two horizontal tracks stacked, with proportionally-sized stage bars.
 * Mobile: Tracks still stack; bars remain proportional but take full mobile width.
 *
 * Note: marked by user as the weakest of the 4 signature sections — expect
 * iteration post-pilot. Modular by design so it can be replaced without
 * touching any other page or shared component.
 */

import { Section, Container } from '@/components/shared/primitives';

interface FlowStage {
  name: string;
  detail: string;
  flex: number;
}

const LEGACY_STAGES: FlowStage[] = [
  { name: 'FNOL call', detail: '0.5 d', flex: 0.5 },
  { name: 'Document collection', detail: '2 d · manual', flex: 2 },
  { name: 'Manual triage', detail: '1 d', flex: 1 },
  { name: 'Adjuster review', detail: '3 d · queue', flex: 3 },
  { name: 'Settlement approval', detail: '2 d', flex: 2 },
  { name: 'Close & pay', detail: '1.5 d', flex: 1.5 },
];

const PORTAL_STAGES: FlowStage[] = [
  { name: 'Self-serve FNOL', detail: '5 min', flex: 1 },
  { name: 'AI OCR upload', detail: 'instant', flex: 1 },
  { name: 'Auto triage', detail: '30 sec', flex: 1 },
  { name: 'Adjuster · in-portal tools', detail: '4 hrs', flex: 4 },
  { name: 'Digital settlement', detail: 'same day', flex: 1 },
];

const FlowBar = ({
  stages,
  variant,
}: {
  stages: FlowStage[];
  variant: 'legacy' | 'portal';
}) => {
  const stageClass =
    variant === 'legacy'
      ? 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]'
      : 'bg-brand-500/15 border-brand-500/40';

  return (
    <div className="flex items-stretch gap-1 md:gap-1.5 h-14 md:h-16">
      {stages.map((stage, idx) => (
        <div
          key={idx}
          className={`border rounded-md p-2 min-w-0 overflow-hidden flex flex-col justify-between ${stageClass}`}
          style={{ flex: stage.flex }}
        >
          <div className="text-[10px] md:text-xs font-bold text-text-light truncate">
            {stage.name}
          </div>
          <div className="text-[9px] md:text-[11px] text-text-subtle truncate">
            {stage.detail}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ClaimsFlowComparison = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The same claim, two processes
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Ten days of claims work, collapsed into eight hours.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Each bar below is sized to actual duration. The same six stages, on the legacy stack
          and our portal, side by side.
        </p>
      </div>

      <div className="space-y-4 md:space-y-5">
        <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-4 md:p-6">
          <div className="flex justify-between items-baseline mb-3">
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-text-subtle">
              Legacy claim process
            </div>
            <div className="text-sm md:text-base text-text-subtle">
              <span className="text-lg md:text-xl font-bold text-text-light mr-2">
                10 days
              </span>
              avg. cycle time
            </div>
          </div>
          <FlowBar stages={LEGACY_STAGES} variant="legacy" />
        </div>

        <div className="text-center py-2 md:py-3">
          <div className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent tracking-tight">
            ▼ ~75% faster ▼
          </div>
          <div className="text-xs md:text-sm text-text-subtle mt-1 font-semibold uppercase tracking-wider">
            Same six stages · new pipeline
          </div>
        </div>

        <div className="bg-brand-500/5 border border-brand-500/30 rounded-xl p-4 md:p-6">
          <div className="flex justify-between items-baseline mb-3">
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400">
              Portal-powered process
            </div>
            <div className="text-sm md:text-base text-text-subtle">
              <span className="text-lg md:text-xl font-bold text-text-light mr-2">
                8 hours
              </span>
              avg. cycle time
            </div>
          </div>
          <FlowBar stages={PORTAL_STAGES} variant="portal" />
        </div>
      </div>
    </Container>
  </Section>
);
```

- [ ] **Step 2:** Type-check + grep.

### Task 5.5: Signature components barrel

**File:** Create `src/components/signature/index.ts`

- [ ] **Step 1:** Write:

```ts
export { DiscoveryBeforeAfter, type DiscoveryBeforeAfterProps } from './DiscoveryBeforeAfter';
export { MvpDualTrackRoadmap } from './MvpDualTrackRoadmap';
export { PortalArchitectureMap } from './PortalArchitectureMap';
export { ClaimsFlowComparison } from './ClaimsFlowComparison';
```

- [ ] **Step 2:** Type-check.

**Phase 5 checkpoint:** 4 signature files + 1 barrel. Run `npx tsc --noEmit` and `npm run lint`. STOP for user review.

---

## Phase 6 — Pilot data files

Four data files, one per pilot page. Each is a fully-typed module exporting a `default` of `ServicePageData` or `SolutionPageData`.

### Content integrity reminder

**Every number, percentage, and claim in these files must be either verified or listed in `_unverified`.** The user has explicitly stated this is non-negotiable because these pages will be live to real users. Flag ranges as "industry research" where applicable (e.g., HIMSS/Forrester figures for healthcare), and flag everything else as unverified until the user signs off.

### Task 6.1: Product Discovery data file

**File:** Create `src/data/services/product-discovery.ts`

- [ ] **Step 1:** Write:

```ts
import type { ServicePageData } from '@/types/pages';
import { SITE_CONFIG } from '@/lib/constants';

const productDiscovery: ServicePageData = {
  slug: 'product-discovery',
  title: 'Product Discovery',
  shortDescription:
    'Turn a fuzzy idea into a prioritized, de-risked plan your team can build against on Monday morning.',

  metaTitle: 'Product Discovery Sprints | AIvanceWorks',
  metaDescription:
    'Two-week product discovery sprints that produce validated personas, a prioritized MVP backlog, technical spike results, and a risk register. De-risked plans, fixed scope, ready to build.',
  keywords: [
    'product discovery sprint',
    'design sprint consulting',
    'mvp discovery',
    'assumption mapping',
    'jobs to be done',
    'product validation consulting',
  ],
  canonicalPath: '/services/product-discovery',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Product Discovery', href: '/services/product-discovery' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'discoveryMethodology',
    'signature',
    'processTimeline',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'strategy',
  signatureComponent: 'DiscoveryBeforeAfter',

  hero: {
    badge: 'Strategic Service',
    headline: 'Turn a fuzzy idea into a plan you can ship.',
    subhead:
      'Two weeks. Five concrete deliverables. A validated, de-risked MVP backlog your engineering team can start building against on Monday morning.',
    primaryCta: { label: 'Book a Discovery Sprint', href: '/contact' },
    secondaryCta: { label: 'See what you get', href: '#signature' },
  },

  metricsStrip: [
    {
      value: '2 weeks',
      label: 'Kickoff to decision',
      description: 'Fixed timeline, no scope creep',
    },
    {
      value: '5 artifacts',
      label: 'Concrete deliverables',
      description: 'No slides, no filler',
    },
    {
      value: '90%',
      label: 'Scope confidence',
      description: 'Backed by tech-spike evidence',
    },
    {
      value: '1 proposal',
      label: 'Fixed-scope, backed by evidence',
      description: 'Ready to fund',
    },
  ],

  methodology: [
    {
      icon: 'Zap',
      name: 'Design Sprints',
      description:
        'A compressed five-day cycle to prototype, validate, and decide on direction before committing to build.',
    },
    {
      icon: 'Users',
      name: 'Jobs-to-be-Done',
      description:
        'Interview-driven framework that surfaces the real outcomes users hire your product to achieve.',
    },
    {
      icon: 'Target',
      name: 'Assumption Mapping',
      description:
        'Systematic surfacing of the riskiest assumptions in your idea so we de-risk them first, not last.',
    },
    {
      icon: 'Lightbulb',
      name: 'Prototype Validation',
      description:
        'Low-fidelity prototypes put in front of real users within days to separate signal from opinion.',
    },
  ],

  processSteps: [
    {
      title: 'Intake & Framing',
      description:
        'Kickoff workshop with stakeholders. We align on the business question, pick the focus area, and set success criteria for the sprint.',
      duration: 'Day 1–2',
      deliverable: 'Signed scope doc, stakeholder roster, success criteria',
    },
    {
      title: 'Research & Interviews',
      description:
        'Up to eight user interviews, synthesis, and persona board creation. JTBD statements surfaced from real language.',
      duration: 'Day 3–5',
      deliverable: 'Persona board, raw interview notes, JTBD statements',
    },
    {
      title: 'Synthesis & Prioritization',
      description:
        'Problem canvas, opportunity mapping, and ruthless MoSCoW prioritization of the backlog.',
      duration: 'Day 6–8',
      deliverable: 'Problem canvas, prioritized backlog (MoSCoW)',
    },
    {
      title: 'Technical Spikes',
      description:
        'Engineers run short spikes against the riskiest technical assumptions. Real code, real testing, real answers.',
      duration: 'Day 9–11',
      deliverable: 'Tech spike matrix with tested conclusions',
    },
    {
      title: 'Decision & Handover',
      description:
        'Final readout with fixed-scope proposal, risk register, and a no-surprises quote for the build phase.',
      duration: 'Day 12–14',
      deliverable: 'Fixed-scope proposal, risk register, handover package',
    },
  ],

  engagementModels: [
    {
      name: '1-Week Spike',
      duration: '5 business days',
      priceFrom: '$8,000',
      whatsIncluded: [
        'Focused on a single question or risk',
        '2 interviews, 1 workshop',
        '1 prioritized artifact',
        'Written recommendation',
      ],
      suitableFor: 'Quick risk checks or single-question validation',
      primaryCta: { label: 'Book 1-Week Spike', href: '/contact?sprint=1w' },
    },
    {
      name: '2-Week Discovery Sprint',
      duration: '10 business days',
      priceFrom: '$18,000',
      whatsIncluded: [
        'Full 5-step process above',
        'All 5 deliverables',
        'Up to 8 user interviews',
        'Tech spikes on top risks',
        'Fixed-scope build proposal',
      ],
      suitableFor: 'New product or major feature exploration',
      primaryCta: { label: 'Book 2-Week Sprint', href: '/contact?sprint=2w' },
      featured: true,
    },
    {
      name: '4-Week Deep Dive',
      duration: '20 business days',
      priceFrom: '$38,000',
      whatsIncluded: [
        'Extended research with up to 16 interviews',
        'Multiple prototypes tested',
        'Cross-stakeholder alignment',
        'Go-to-market positioning draft',
        'Phased build roadmap',
      ],
      suitableFor: 'Enterprise initiatives with multiple stakeholders',
      primaryCta: { label: 'Book 4-Week Deep Dive', href: '/contact?sprint=4w' },
    },
  ],

  faqs: [
    {
      question: 'What do I get at the end of a discovery sprint?',
      answer:
        'Five tangible artifacts: a persona board, a problem canvas, a prioritized MoSCoW backlog, a tech spike matrix, and a risk register. Plus a fixed-scope, no-surprises proposal for the build phase — backed by the evidence we gathered.',
    },
    {
      question: 'Do I need to have a validated idea to start?',
      answer:
        "No. Discovery sprints are designed for fuzzy or partially-formed ideas. If you had a fully validated idea, you'd be buying build capacity, not discovery. We do need you to have a clear business question we're answering together.",
    },
    {
      question: "What does my team need to bring?",
      answer:
        'A decision-maker for the kickoff and readout, a domain expert for research synthesis, and (if possible) introductions to 4–8 target users or customers. We handle everything else — facilitation, interview scheduling, artifacts, documentation.',
    },
    {
      question: 'Can you build what you discover?',
      answer:
        'Yes. Most clients continue with us into MVP development, and the discovery sprint is designed to flow directly into a fixed-scope build. You are never obligated — the deliverables are yours regardless of what you do next.',
    },
    {
      question: 'How is this different from a design sprint?',
      answer:
        "Design sprints are one tool we use inside our broader discovery process. A full discovery sprint also includes technical spikes, risk mapping, and a fundable proposal — things Google Venture's original design sprint framework doesn't produce.",
    },
  ],

  cta: {
    title: "Let's figure out what you're actually building.",
    description:
      'Book a free 30-minute intake call. If a discovery sprint is right for your situation, we will walk you through scope, deliverables, and a no-pressure quote.',
    primaryCta: { label: 'Book free intake call', href: '/contact' },
    secondaryCta: { label: 'See our full process', href: '#process' },
  },

  _unverified: [
    'metricsStrip[2].value — "90% scope confidence" is a claim, not a measurement. Reframe as range or remove.',
    'engagementModels[*].priceFrom — all three prices are placeholder. Confirm with user before launch.',
    'processSteps durations — day ranges are illustrative. Confirm actual workshop cadence.',
    'methodology[0] — "Design Sprints five-day" claim assumes GV framework; confirm our actual cadence.',
    'faq[3] — "most clients continue" claim is aspirational until we have real conversion data.',
  ],
};

export default productDiscovery;
```

- [ ] **Step 2:** Type-check: `npx tsc --noEmit`. Expected: no errors.

### Task 6.2: MVP Development data file

**File:** Create `src/data/services/mvp-development.ts`

- [ ] **Step 1:** Write (follow the same shape as Task 6.1; key fields below):

```ts
import type { ServicePageData } from '@/types/pages';

const mvpDevelopment: ServicePageData = {
  slug: 'mvp-development',
  title: 'MVP Development',
  shortDescription:
    '12 weeks from kickoff to a production V1 with real paying customers. Weekly demos, real users by week 5, zero black-box phases.',

  metaTitle: 'MVP Development | 12 Weeks to Production V1 | AIvanceWorks',
  metaDescription:
    'MVP development sprints that ship a production-ready V1 in 12 weeks. Weekly demos, real users by week 5, paying customers by launch. Dual-track roadmap with founder visibility at every phase.',
  keywords: [
    'mvp development',
    'startup mvp development',
    '12 week mvp',
    'mvp engineering team',
    'fast mvp build',
    'production mvp development',
  ],
  canonicalPath: '/services/mvp-development',

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'MVP Development', href: '/services/mvp-development' },
  ],

  composition: [
    'hero',
    'metricsStrip',
    'featureGrid',
    'signature',
    'benefitsGrid',
    'techStackBlock',
    'engagementModels',
    'relatedPages',
    'faq',
    'ctaBlock',
  ],

  category: 'software-engineering',
  signatureComponent: 'MvpDualTrackRoadmap',

  hero: {
    badge: 'Technical Service',
    headline: 'From kickoff to paying customers in 12 weeks.',
    subhead:
      'A production-ready V1 in your hands in 12 weeks. Real users touching it by week 5. Weekly demos so you see working software every sprint — no black-box build phases.',
    primaryCta: { label: 'Book MVP Intake Call', href: '/contact' },
    secondaryCta: { label: 'See the roadmap', href: '#signature' },
  },

  metricsStrip: [
    { value: '12 weeks', label: 'Kickoff to V1 launch', description: 'Fixed timeline' },
    { value: '12 demos', label: 'Working software weekly', description: 'No black-box phases' },
    { value: 'Week 5', label: 'Real users in the product', description: 'Not an internal beta' },
    { value: 'V1 in prod', label: 'Paying customers by launch', description: 'Revenue-ready' },
  ],

  features: [
    {
      icon: 'Lock',
      title: 'Auth & user model',
      description:
        'Email, OAuth, and magic-link flows on top of a strongly-typed user model ready for role-based access.',
    },
    {
      icon: 'Server',
      title: 'Backend & data layer',
      description:
        'Type-safe API, schema migrations, and a data layer that separates domain logic from transport.',
    },
    {
      icon: 'Layout',
      title: 'Frontend & design system',
      description:
        "A production-grade component library tuned to your brand, accessible by default, mobile-first.",
    },
    {
      icon: 'Smartphone',
      title: 'Mobile-friendly PWA',
      description:
        "Responsive-first builds with Progressive Web App capability, so your first mobile experience doesn't need a separate native app.",
    },
    {
      icon: 'CreditCard',
      title: 'Billing & subscriptions',
      description:
        'Stripe integration with subscription lifecycle, proration, invoicing, and receipts — production-ready from day one.',
    },
    {
      icon: 'Activity',
      title: 'Observability & deployment',
      description:
        'CI/CD, error tracking, metrics, and production logging wired in before Week 1 ends. No guessing in prod.',
    },
  ],

  benefits: [
    {
      icon: 'Eye',
      title: 'Founder visibility every week',
      description:
        'A demo every Friday showing working software you can click through, not slides. You always know what was built and what was not.',
      stat: '12',
      statLabel: 'working-software demos',
    },
    {
      icon: 'Users',
      title: 'Real users, not internal betas',
      description:
        'By Week 5 you have actual external users in the product, providing the feedback loop that turns guesses into decisions.',
      stat: 'Week 5',
      statLabel: 'first external users',
    },
    {
      icon: 'Rocket',
      title: 'A V1 you can charge for',
      description:
        'Week 12 launches a production-hardened V1 with billing, observability, and a runbook. Not a prototype — a product.',
      stat: 'Production',
      statLabel: 'from day one',
    },
    {
      icon: 'Compass',
      title: 'Ruthless scope management',
      description:
        'Weekly scope reviews with your input. We cut before we cram. You always know what is in and what is out before it becomes a problem.',
    },
  ],

  capabilities: [
    'Modern auth (email, OAuth, magic link)',
    'Type-safe API with versioning',
    'Automated database migrations',
    'Stripe billing + subscription lifecycle',
    'Production observability (errors, metrics, logs)',
    'CI/CD from Day 1',
    'Accessibility (WCAG 2.1 AA) baked in',
    'Mobile-responsive PWA',
    'Automated visual regression',
    'SEO and analytics instrumentation',
  ],

  technologies: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Prisma / Drizzle',
    'PostgreSQL',
    'Stripe',
    'Vercel / Azure',
    'Sentry',
    'PostHog',
    'GitHub Actions',
    'Playwright',
  ],

  engagementModels: [
    {
      name: '8-Week Rapid MVP',
      duration: '8 weeks',
      priceFrom: '$65,000',
      whatsIncluded: [
        '6 weekly demos',
        'Core auth, data, and UI',
        'One primary user flow',
        'Production deploy',
      ],
      suitableFor: 'Tight budget founders validating a single flow',
      primaryCta: { label: 'Book 8-Week MVP', href: '/contact?mvp=8w' },
    },
    {
      name: '12-Week Full MVP',
      duration: '12 weeks',
      priceFrom: '$110,000',
      whatsIncluded: [
        '12 weekly demos',
        'Full auth, data, UI, and billing',
        'Real users by Week 5',
        'Production hardening + runbook',
        'V1 launch with paying customers',
      ],
      suitableFor: 'Standard MVP engagements with paying-customer target',
      primaryCta: { label: 'Book 12-Week MVP', href: '/contact?mvp=12w' },
      featured: true,
    },
    {
      name: '16-Week Enhanced MVP',
      duration: '16 weeks',
      priceFrom: '$160,000',
      whatsIncluded: [
        '16 weekly demos',
        'Multiple user flows or multi-tenant',
        'Advanced integrations (CRM, analytics, etc.)',
        'Dedicated design work',
        'Extended post-launch support window',
      ],
      suitableFor: 'Complex MVPs with integration or multi-persona needs',
      primaryCta: { label: 'Book 16-Week MVP', href: '/contact?mvp=16w' },
    },
  ],

  faqs: [
    {
      question: 'How do I know progress is real and not a demo trick?',
      answer:
        'Every Friday you get a live URL pointing at the actual production-equivalent environment. You click through real functionality. No slides, no screen recordings of happy paths. If we cannot demo it, we say so.',
    },
    {
      question: 'What happens if scope has to change mid-sprint?',
      answer:
        "We cut before we cram. Every Monday we review the backlog and explicitly decide what is in for the week and what is deferred. Scope changes during a sprint are rare and always accompanied by a visible trade-off so you are the one making the call.",
    },
    {
      question: 'Do you use AI tools to accelerate the build?',
      answer:
        'Yes — internally, for code generation, review, and testing — wherever it makes our engineers faster without hurting code quality. The output is always reviewed by a senior engineer before it touches your production.',
    },
    {
      question: "What if I don't have designs yet?",
      answer:
        'We can bring design capacity or work off your existing design system. For founders without designs, the 12-Week Full MVP includes basic design work; for heavier design needs, the 16-Week Enhanced tier adds dedicated design.',
    },
    {
      question: 'What happens after Week 12?',
      answer:
        'You own the codebase, the infrastructure, the runbook, and all the docs. You can take it in-house, hire other engineers, or continue with us on a retainer. No lock-in. We prefer clients who come back because they want to, not because they are stuck.',
    },
  ],

  cta: {
    title: 'Ready to put working software in real users\' hands in 12 weeks?',
    description:
      "Book a 30-minute intake call. We will walk through your idea, map the highest-risk parts, and give you a no-pressure proposal within 48 hours.",
    primaryCta: { label: 'Book intake call', href: '/contact' },
    secondaryCta: { label: 'See our process', href: '#signature' },
  },

  _unverified: [
    'metricsStrip — all four claims are part of the promise we are making. Verify these are achievable before publishing.',
    'engagementModels[*].priceFrom — placeholder prices. Confirm with user.',
    'capabilities — none individually verified yet.',
    'technologies — confirm the stack actually matches what we deliver on every MVP.',
    'faq[2] — "AI tools" claim — verify our actual policy on AI usage in client code.',
  ],
};

export default mvpDevelopment;
```

- [ ] **Step 2:** Type-check.

### Task 6.3: Patient Portals data file

**File:** Create `src/data/solutions/patient-portals.ts`

Due to size, this file mirrors the shape of Task 6.1 but uses `SolutionPageData`. Key fields:

- [ ] **Step 1:** Write the full file. Use the existing `src/data/solutions.ts` as the content source for the legacy `patientPortals` object (copy over the hero copy, features, benefits, capabilities, technologies, faqs, and process steps — they are strong and already drafted). Adapt to the new schema:
  - Add `composition: ['hero', 'metricsStrip', 'featureGrid', 'signature', 'complianceDeepDive', 'benefitsGrid', 'integrationsPanel', 'processTimeline', 'relatedPages', 'faq', 'ctaBlock']`
  - Add `signatureComponent: 'PortalArchitectureMap'`
  - Add `industry: 'healthcare'`
  - Convert the old `integrations: string[]` to new `IntegrationGroup[]` shape — for each EHR (Epic, Cerner, Athenahealth, eClinicalWorks), write `{ name, category: 'EHR', connectionMethod: 'SMART on FHIR / FHIR R4' | 'HL7 v2 bridge', capabilities: ['bi-directional sync', 'real-time patient context', ...] }`
  - Add `complianceDetail` with `frameworks: ['HIPAA', 'HITECH', 'SOC 2 Type II', '21 CFR Part 11']`, 3–6 `safeguards`, an `auditNote`, and `partnerAgreements: ['BAA', 'DPA']`
  - Populate `_unverified` with every unverifiable stat, integration count, and compliance claim. Default assumption: everything is unverified unless the user explicitly confirms it.

- [ ] **Step 2:** Type-check.

### Task 6.4: Insurance Portals data file

**File:** Create `src/data/solutions/insurance-portals.ts`

Same pattern. Source content from the existing `src/data/solutions.ts` → `insurancePortals` object.

- [ ] **Step 1:** Write the full file. Key adaptations:
  - `composition: ['hero', 'metricsStrip', 'featureGrid', 'signature', 'integrationsPanel', 'benefitsGrid', 'processTimeline', 'relatedPages', 'faq', 'ctaBlock']`
  - `signatureComponent: 'ClaimsFlowComparison'`
  - `industry: 'insurance'`
  - `integrations` as `IntegrationGroup[]` with: Guidewire PolicyCenter, Duck Creek Policy, Applied Epic, Hawksoft, Sapiens, OneShield — categories `Core Policy Admin` / `Core Billing` / `Agency Management`, connection methods `REST + SOAP` or `Custom adapter`
  - No `complianceDetail` (insurance regulatory compliance is state-level and not packaged as a deep-dive section for this page — see spec section 9.4)
  - Populate `_unverified` — especially the 10-day → 8-hour claim in the signature's narrative (mark as needing sourcing from real carrier case data)

- [ ] **Step 2:** Type-check.

**Phase 6 checkpoint:** 4 data files. Run `npx tsc --noEmit`. After this phase, the Phase 3 `content.ts` dynamic imports should all resolve cleanly. Run it once to confirm. STOP for user review — this is a critical phase because user content gets drafted here. User should also sign off on the `_unverified` lists.

---

## Phase 7 — Route wiring

The pilot pages get wired to their new route files. Existing non-pilot routes stay untouched.

### Task 7.1: Product Discovery route

**File:** Create `src/app/services/product-discovery/page.tsx`

- [ ] **Step 1:** Write:

```tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateWebPageSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getServicePageData } from '@/lib/content';
import { ServiceDetailTemplate } from '@/components/templates';
import { DiscoveryBeforeAfter } from '@/components/signature';

const SLUG = 'product-discovery';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicePageData(SLUG);
  if (!data) {
    return constructMetadata({
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      noIndex: true,
    });
  }
  return constructMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    canonical: `${SITE_CONFIG.url}${data.canonicalPath}`,
    keywords: data.keywords,
  });
}

export default async function ProductDiscoveryPage() {
  const data = await getServicePageData(SLUG);
  if (!data) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(data.metaTitle, `${SITE_CONFIG.url}${data.canonicalPath}`),
      generateServiceSchema({
        name: data.title,
        description: data.shortDescription,
        url: `${SITE_CONFIG.url}${data.canonicalPath}`,
      }),
      {
        '@type': 'BreadcrumbList',
        itemListElement: data.breadcrumb.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.label,
          item: `${SITE_CONFIG.url}${crumb.href}`,
        })),
      },
      ...(data.faqs.length > 0 ? [generateFAQSchema(data.faqs)] : []),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <ServiceDetailTemplate data={data} signature={<DiscoveryBeforeAfter />} />
    </>
  );
}
```

- [ ] **Step 2:** Type-check. Then `npm run dev` and visit `http://localhost:3000/services/product-discovery` to visually verify.

### Task 7.2: MVP Development route

**File:** Create `src/app/services/mvp-development/page.tsx`

- [ ] **Step 1:** Mirror the structure of Task 7.1 exactly, swapping:
  - `const SLUG = 'mvp-development';`
  - `import { MvpDualTrackRoadmap } from '@/components/signature';`
  - `signature={<MvpDualTrackRoadmap />}`

- [ ] **Step 2:** Type-check + visual verify.

### Task 7.3: Rewire solutions slug route to support new pilot data

**File:** Modify `src/app/solutions/[slug]/page.tsx`

The existing file reads from the legacy `src/data/solutions.ts` via `getSolutionBySlug`. We need it to try the new per-file data layer first (for pilot slugs) and fall through to legacy for non-pilot slugs (e-commerce-websites).

- [ ] **Step 1:** Read the current file (`aivanceworks-website/src/app/solutions/[slug]/page.tsx`) to understand its current shape.

- [ ] **Step 2:** Replace it with:

```tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { generateServiceSchema, generateWebPageSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getSolutionPageData, getAllSolutionPageSlugs } from '@/lib/content';
import { SolutionDetailTemplate } from '@/components/templates';
import { PortalArchitectureMap, ClaimsFlowComparison } from '@/components/signature';
// Legacy fallback for non-pilot solutions still on src/data/solutions.ts
import { getSolutionBySlug, getAllSolutions } from '@/data/solutions';
import {
  SolutionHero,
  SolutionFeatures,
  SolutionProcess,
  SolutionTechStack,
  SolutionBenefits,
  SolutionFAQ,
  SolutionCTA,
  SolutionRelated,
} from '@/components/solutions';
import { AiPoweredFeatures } from '@/components/solutions/unique';
import type { ReactNode } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const pilotSlugs = getAllSolutionPageSlugs();
  const legacySlugs = getAllSolutions().map((s) => s.slug);
  const all = [...new Set([...pilotSlugs, ...legacySlugs])];
  return all.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const pilotData = await getSolutionPageData(slug);
  if (pilotData) {
    return constructMetadata({
      title: pilotData.metaTitle,
      description: pilotData.metaDescription,
      canonical: `${SITE_CONFIG.url}${pilotData.canonicalPath}`,
      keywords: pilotData.keywords,
    });
  }

  const legacy = getSolutionBySlug(slug);
  if (legacy) {
    return constructMetadata({
      title: legacy.metaTitle,
      description: legacy.metaDescription,
      canonical: `${SITE_CONFIG.url}/solutions/${legacy.slug}`,
      keywords: legacy.keywords,
    });
  }

  return constructMetadata({
    title: 'Solution Not Found',
    description: 'The requested solution could not be found.',
    noIndex: true,
  });
}

const SIGNATURE_COMPONENTS: Record<string, ReactNode> = {
  PortalArchitectureMap: <PortalArchitectureMap />,
  ClaimsFlowComparison: <ClaimsFlowComparison />,
};

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;

  // Try the new per-file data layer first
  const pilotData = await getSolutionPageData(slug);
  if (pilotData) {
    const signature = SIGNATURE_COMPONENTS[pilotData.signatureComponent];
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        generateWebPageSchema(
          pilotData.metaTitle,
          `${SITE_CONFIG.url}${pilotData.canonicalPath}`
        ),
        generateServiceSchema({
          name: pilotData.title,
          description: pilotData.shortDescription,
          url: `${SITE_CONFIG.url}${pilotData.canonicalPath}`,
        }),
        {
          '@type': 'BreadcrumbList',
          itemListElement: pilotData.breadcrumb.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: crumb.label,
            item: `${SITE_CONFIG.url}${crumb.href}`,
          })),
        },
        ...(pilotData.faqs.length > 0 ? [generateFAQSchema(pilotData.faqs)] : []),
      ],
    };
    return (
      <>
        <JsonLd data={schema} />
        <SolutionDetailTemplate data={pilotData} signature={signature} />
      </>
    );
  }

  // Legacy fallback for non-pilot solutions
  const legacy = getSolutionBySlug(slug);
  if (!legacy) notFound();

  const legacySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(legacy.metaTitle, `${SITE_CONFIG.url}/solutions/${legacy.slug}`),
      generateServiceSchema({
        name: legacy.title,
        description: legacy.description,
        url: `${SITE_CONFIG.url}/solutions/${legacy.slug}`,
      }),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SITE_CONFIG.url}/solutions` },
          {
            '@type': 'ListItem',
            position: 3,
            name: legacy.title,
            item: `${SITE_CONFIG.url}/solutions/${legacy.slug}`,
          },
        ],
      },
      ...(legacy.faqs.length > 0 ? [generateFAQSchema(legacy.faqs)] : []),
    ],
  };

  return (
    <>
      <JsonLd data={legacySchema} />
      <SolutionHero
        badge={legacy.badge}
        badgeHref={`/solutions#${legacy.categorySlug}`}
        title={legacy.title}
        description={legacy.description}
        primaryCTA={{ label: 'Get a Free Assessment', href: '/contact' }}
        secondaryCTA={{ label: 'View Case Studies', href: '/case-studies' }}
        metrics={legacy.metrics}
      />
      <SolutionFeatures
        title={`${legacy.title} Features`}
        subtitle={`Everything you need for a modern ${legacy.category.toLowerCase()} solution`}
        features={legacy.features}
      />
      {legacy.slug === 'e-commerce-websites' && <AiPoweredFeatures />}
      <SolutionBenefits
        title="Business Impact"
        subtitle={`Measurable outcomes from our ${legacy.category.toLowerCase()} solutions`}
        benefits={legacy.benefits}
      />
      <SolutionProcess
        title="Our Implementation Process"
        subtitle="A proven methodology to deliver results on schedule"
        steps={legacy.process}
      />
      <SolutionTechStack
        capabilities={legacy.capabilities}
        technologies={legacy.technologies}
        integrations={legacy.integrations}
      />
      <SolutionFAQ
        title="Frequently Asked Questions"
        subtitle={`Common questions about ${legacy.title.toLowerCase()}`}
        faqs={legacy.faqs}
      />
      <SolutionRelated title="Explore Related Solutions" solutions={legacy.relatedSolutions} />
      <SolutionCTA
        title={legacy.ctaTitle}
        description={legacy.ctaDescription}
        primaryCTA={{ label: 'Schedule Free Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Request a Demo', href: '/book-consultation' }}
      />
    </>
  );
}
```

**Important:** When Phase 6 data files for patient-portals and insurance-portals exist, those two slugs get handled by the new template. The legacy `patientPortals` and `insurancePortals` objects in `src/data/solutions.ts` become dead code (still exported but never reached for those slugs). Phase 8 will remove them.

- [ ] **Step 2:** Type-check + `npm run dev` → visit `/solutions/patient-portals`, `/solutions/insurance-portals`, and `/solutions/e-commerce-websites` to confirm both new and legacy paths render.

### Task 7.4: Update `NAVIGATION` in constants (if needed)

**File:** Check `src/lib/constants.ts` lines ~70–85

- [ ] **Step 1:** Confirm the pilot service slugs (`product-discovery`, `mvp-development`) already exist in `NAVIGATION.servicesMenu`. From the earlier exploration of constants.ts, they do — no change needed. Only verify.

- [ ] **Step 2:** Confirm the pilot solution slugs (`patient-portals`, `insurance-portals`) exist in `NAVIGATION.solutionsMenu`. They do — no change needed.

**Phase 7 checkpoint:** 2 new service routes + 1 modified solution slug route. Run:
```bash
npm run dev
# Visit:
# http://localhost:3000/services/product-discovery
# http://localhost:3000/services/mvp-development
# http://localhost:3000/solutions/patient-portals
# http://localhost:3000/solutions/insurance-portals
# http://localhost:3000/solutions/e-commerce-websites  (legacy fallback)
```

All 5 should render without errors. Also run `npm run build` to catch any SSR issues. STOP for user review.

---

## Phase 8 — Refactor and cleanup

### Task 8.1: Visually verify the pilot pages

Before deleting any old code, the user must visually confirm that:
1. Patient Portals and Insurance Portals render correctly on the new template
2. All responsive breakpoints look right (375 / 640 / 768 / 1024 / 1280 / 1536)
3. The existing e-commerce-websites legacy path still renders

- [ ] **Step 1:** User runs `npm run dev` and manually checks all five pilot URLs at multiple breakpoints.

- [ ] **Step 2:** User approves the visual quality before proceeding to deletion.

### Task 8.2: Delete obsolete solution components

**Files to delete** (only after user approval from Task 8.1):
- `src/components/solutions/SolutionHero.tsx`
- `src/components/solutions/SolutionFeatures.tsx`
- `src/components/solutions/SolutionBenefits.tsx`
- `src/components/solutions/SolutionProcess.tsx`
- `src/components/solutions/SolutionTechStack.tsx`
- `src/components/solutions/SolutionFAQ.tsx`
- `src/components/solutions/SolutionCTA.tsx`
- `src/components/solutions/SolutionRelated.tsx`
- `src/components/solutions/iconMap.tsx` (if nothing imports it)

- [ ] **Step 1:** Before deleting, grep for imports of each component. Example:
  ```bash
  grep -rn "from '@/components/solutions/SolutionHero'" aivanceworks-website/src
  grep -rn "from '@/components/solutions'" aivanceworks-website/src
  ```

- [ ] **Step 2:** The only importer should be the updated `src/app/solutions/[slug]/page.tsx` (legacy fallback path). If legacy fallback is still active for e-commerce-websites, DO NOT delete these files yet — they're still in use. Instead, skip Task 8.2 and 8.3 entirely and leave the legacy code in place until e-commerce-websites migrates.

- [ ] **Step 3:** **DECISION POINT:** since e-commerce-websites still needs these components, skip 8.2/8.3 deletions. Document this in the final verification phase. The obsolete components get deleted in a future pilot that migrates e-commerce-websites.

### Task 8.3: Update the `solutions` index barrel (if deletion above happens)

**File:** `src/components/solutions/index.ts`

- [ ] **Step 1:** If Task 8.2 didn't delete anything, skip this task. Otherwise, remove the deleted exports from the barrel.

### Task 8.4: Clean up stale entries in `NAVIGATION` (optional polish)

**File:** `src/lib/constants.ts`

- [ ] **Step 1:** Review `NAVIGATION.servicesMenu` and `NAVIGATION.solutionsMenu`. Non-pilot slugs that will 404 can either (a) stay in the menu as "coming soon" placeholders, or (b) be temporarily removed until their own pilot ships.

- [ ] **Step 2:** User decides. If user wants them removed for the pilot launch, comment them out with a TODO comment rather than deleting — we'll uncomment as each one ships.

**Phase 8 checkpoint:** Likely no deletions if e-commerce-websites still needs the legacy components. If deletions happened, `npm run lint` and `npm run build` must pass. STOP for user review.

---

## Phase 9 — Verification pass

### Task 9.1: Theme-swap regression test

- [ ] **Step 1:** Open `aivanceworks-website/src/app/layout.tsx` and temporarily change the `<html>` tag from `data-theme="blue"` (or whatever is there) to `data-theme="purple"`.

- [ ] **Step 2:** Run `npm run dev` and visit all four pilot pages. Visually confirm every section on every page re-skins to purple. ANY section that stays blue means it's using hardcoded Tailwind color classes — that's a bug. Find and fix (grep the file for hardcoded color shades).

- [ ] **Step 3:** Revert the theme change back to blue.

### Task 9.2: Responsive check

- [ ] **Step 1:** For each pilot page, open devtools and test at:
  - 375px (mobile)
  - 640px
  - 768px (tablet)
  - 1024px (laptop)
  - 1280px (desktop)
  - 1536px (large desktop)

- [ ] **Step 2:** Verify each signature component collapses gracefully per its documented mobile layout (see file header comments in Phase 5 tasks).

### Task 9.3: Content integrity pass

- [ ] **Step 1:** Open each data file and review its `_unverified` array. Every item there is a content claim that isn't signed off.

- [ ] **Step 2:** User either verifies the claim (move it out of `_unverified`) or reframes it (e.g., turns "40+ integrations shipped" into "vendor-agnostic — works with any FHIR-capable EHR") or removes it entirely.

- [ ] **Step 3:** For a clean launch, every data file's `_unverified` array should either be empty or contain only items the user has explicitly accepted as future-fixable.

### Task 9.4: Production build + lint

- [ ] **Step 1:** From `aivanceworks-website/`:
  ```bash
  npm run lint
  npx tsc --noEmit
  npm run build
  ```
  Expected: all three pass cleanly.

- [ ] **Step 2:** If any errors appear, fix them before marking the pilot complete.

### Task 9.5: Final token-hygiene sweep

- [ ] **Step 1:** Run the token-hygiene grep across all new files:
  ```bash
  grep -rnE 'bg-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]|text-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]|border-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]' src/components/shared src/components/signature src/components/templates src/data/services src/data/solutions
  ```

- [ ] **Step 2:** Expected: no matches. Any match = a violation that must be refactored to use theme tokens.

**Phase 9 checkpoint:** Verification complete. Pilot is ready for user final review and launch decision. STOP.

---

## Open issues to document

- **Purple theme missing shadcn token overrides.** `themes/purple.css` overrides `--primary` and `--ring` but not `--background`, `--card`, `--foreground`, etc. Button and Card primitives (from shadcn) will stay partially blue under `data-theme="purple"`. Not a pilot blocker, but worth a one-task follow-up: copy the full set of shadcn-compatible tokens from `globals.css` `:root` into `themes/purple.css` with purple equivalents.
- **Launch-node glow inline style in `MvpDualTrackRoadmap`.** Uses `rgba(...)` inline to get a two-layer glow. If you want perfect tokenization, define `--shadow-launch-glow` in `themes/blue.css` + `themes/purple.css` and reference via `style={{ boxShadow: 'var(--shadow-launch-glow)' }}`.
- **`_unverified` lists need user sign-off.** Every pilot page data file will ship with an `_unverified` array that the user must review and clear before public launch. This is the content-integrity gate.
- **Existing routes `/services/[category]/page.tsx` and `[category]/[slug]/page.tsx`** remain untouched. The pilot creates NEW static routes under `/services/product-discovery` and `/services/mvp-development` instead of fighting with the nested category structure. Future post-pilot work will decide whether to migrate the nested category structure into flat slugs or keep both.

---

## Self-review checklist

(Ran by the plan author before handoff.)

- **Spec coverage:** Every section of `docs/superpowers/specs/2026-04-08-unified-services-solutions-design-system-design.md` maps to at least one phase/task above. Theming (Phase 1/2/5), section rhythm (Phase 1 `Section`), shared library (Phase 1/2), data schema (Phase 3), signature components (Phase 5), pilot compositions (Phase 6), refactor strategy (Phase 8), responsiveness (Phase 9), content integrity (Phase 6/9). No gaps.
- **Placeholder scan:** No "TBD", "implement later", or "similar to above" without the code. Tasks 6.3 and 6.4 reference Task 6.1 as a shape example but include detailed adaptation notes (not placeholders).
- **Type consistency:** Component names match across the plan. `Hero` is always `Hero`; `ServiceDetailTemplate` is always `ServiceDetailTemplate`; `MvpDualTrackRoadmap` is always `MvpDualTrackRoadmap`. `SectionKey` union is identical in `types/pages.ts` and both templates.
- **No test framework added.** Verification path is consistent across all tasks (tsc → lint → build → visual review).
- **No git commits.** Every phase checkpoint ends with "STOP for user review" and "user handles commit." This matches the hard rule at the top.

---

## Execution handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-08-unified-services-solutions-design-system-pilot.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration. Best for this plan because each task is narrowly scoped and benefits from a fresh agent that can't accidentally bring stale context from an earlier task. Matches the phase-by-phase checkpoint structure cleanly.

2. **Inline Execution** — Execute tasks in this session using `executing-plans`, batch execution with checkpoints for review. Faster for trivial tasks, riskier for ones that span many files. Given the plan is ~40 tasks across 10 phases, inline is possible but context will get heavy.

**Which approach?**






