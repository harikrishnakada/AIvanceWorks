# Responsive Home Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the home page render correctly and deliberately at every width from 375px to 2560px, with one consistent content width, spacing rhythm, and type scale.

**Architecture:** A three-layer change. Layer 1 adds spacing/typography/container tokens to the Tailwind v4 `@theme` block in `globals.css` (which today holds colour tokens only). Layer 2 extends the `Container` and `Section` primitives and adds a `SectionHeader`, making them the *only* places width and padding are defined. Layer 3 migrates the 12 rendered home sections onto those primitives, deleting every hand-rolled `max-w-*` and `px-*`. Correctness is enforced by an automated measurement harness, not by eyeballing.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4 (`@theme`, CSS-first config), TypeScript, playwright-core (audit harness, driving installed Chrome).

**Spec:** [`docs/superpowers/specs/2026-08-19-responsive-home-design.md`](../specs/2026-08-19-responsive-home-design.md)

## Global Constraints

- **Tailwind v4, CSS-first.** Tokens go in the `@theme` block of `src/styles/globals.css`. `tailwind.config.ts` still exists for `fontFamily`/`animation`; do **not** add spacing or breakpoint config there.
- **`Container` is the only component allowed to set `max-width` or horizontal padding.** A `max-w-*` or `px-*` utility anywhere else is a defect (spec §3.0). The audit harness enforces this as INV-5.
- **One content width per page.** Single left/right edge; the only sanctioned departures are a declared `Section bleed` or a centred `Container narrow`/`prose` (spec §3.0).
- **Brand name:** never hardcode. Import `SITE_CONFIG` from `@/lib/constants` and use `SITE_CONFIG.name` (CLAUDE.md rule 8).
- **Do not weaken `src/styles/first-fold.css`.** Its height-keyed `[data-*]` overrides were measured, not guessed. They outrank utility classes and must keep winning. If a new clamp leaks through, raise the override — never lower the token.
- **Container caps by width** (spec §3.3): ≤1280 → 1280px · `xl` → 1344px · `2xl` → 1472px · `3xl` (1920+) → **1600px**.
- **Breakpoints:** `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536 · `3xl` **1920** (new).
- **Approved constitution supersessions** (spec §2.1): Container 1280→1600; `h1` cap 60px→88px; new one-content-width rule; section headers carry no width cap.
- **Commits:** the repo owner has a standing rule that commits happen only on explicit instruction. Prepare each commit and **ask before running `git commit`**.
- **Dev server** must be running on `:3000` for every audit step (`npm run dev`).

---

## File Structure

| File | Responsibility |
|---|---|
| `scripts/responsive-audit.mjs` | **Created.** Measurement harness + 7 invariants. The test command. |
| `src/styles/globals.css` | `@theme` tokens: `3xl` breakpoint, fluid type scale, container widths. |
| `src/components/shared/primitives/Container.tsx` | The only source of `max-width` + horizontal padding. Gains `prose`/`full`, responsive caps, `data-container` marker. |
| `src/components/shared/primitives/Section.tsx` | The only source of section vertical padding. Gains `flush` size, `bleed` prop, `data-bleed` marker. |
| `src/components/shared/primitives/SectionHeader.tsx` | **New.** eyebrow + `h2` + lead. No width cap of its own. |
| `src/components/shared/primitives/index.ts` | Export `SectionHeader`. |
| `src/components/layout/Header.tsx` | Nav onto the container scale. |
| `src/components/layout/Footer.tsx` | Footer onto the container scale. |
| `src/components/home/*.tsx` (12 files) | Migrated onto the primitives; all stray width/padding utilities removed. |
| `docs/design-system/services-solutions-constitution.md` | §10 amended per spec §8. |
| `docs/design-system/constitution/changelog.md` | Version entry. |

---

## Baseline (already established)

The harness has been written and run against the unmodified page. **194 violations across 7 viewports**, which is the failing test this plan makes pass:

| Invariant | Count | Meaning |
|---|---|---|
| INV-1 horizontal overflow | 2 | **Horizontal scrollbar at 1024px and 1280px** — `home-services` carousel track unclipped |
| INV-2 multiple left edges | 2 | 4 distinct edges at 375px, 2 at 768px |
| INV-3 not centred | 6 | `home-experience` off-axis |
| INV-5 stray width/padding | 84 | Hand-rolled `max-w-*`/`px-*` in all 12 sections |
| INV-6 prose > 75ch | 60 | Up to **424ch** in `home-experience` at 2560px |
| INV-7 type below floor | 40 | 30px headings / 12–16px body at 1920 and 2560 |

Re-run at any time: `node scripts/responsive-audit.mjs --report`

---

## Task 1: Lock in the audit harness

**Files:**
- Verify: `scripts/responsive-audit.mjs` (already created)
- Modify: `package.json` (add script)

**Interfaces:**
- Produces: `npm run audit:responsive` — exit 0 = all invariants hold, exit 1 = violations listed. Every later task uses this as its test command.
- Produces: `npm run audit:responsive -- --report` — prints the measurement table, always exits 0.
- Produces: `npm run audit:responsive -- --shots <dir>` — also writes full-page screenshots per viewport.

- [ ] **Step 1: Confirm the harness runs and currently fails**

Dev server must be up (`npm run dev`). Then:

```bash
node scripts/responsive-audit.mjs
```

Expected: prints a measurement table for 7 viewports, then
`FAIL — 194 violation(s):` and exits 1. The exact count may drift by a few if
content changed; what matters is that INV-1, INV-2, INV-5, INV-6 and INV-7 all appear.

- [ ] **Step 2: Add the npm scripts**

In `package.json`, inside `"scripts"`, after `"lint"`:

```json
    "audit:responsive": "node scripts/responsive-audit.mjs",
```

- [ ] **Step 3: Verify the script wiring**

```bash
npm run audit:responsive -- --report
```

Expected: same table, exit code 0 (because `--report` suppresses the failure exit).

- [ ] **Step 4: Capture the baseline screenshots**

```bash
npm run audit:responsive -- --report --shots ../.baseline-before
```

Expected: 7 PNGs written (`375-phone.png` … `2560-desktop-qhd.png`). These are the
before-images for every later visual comparison. Keep them for the whole task.

- [ ] **Step 5: Commit (ask first)**

```bash
git add scripts/responsive-audit.mjs package.json
git commit -m "test: add responsive measurement harness with 7 invariants"
```

---

## Task 2: Token layer — breakpoint, type scale, container widths

**Files:**
- Modify: `src/styles/globals.css` (inside the existing `@theme` block)

**Interfaces:**
- Produces: breakpoint `3xl` → `min-width: 1920px`, usable as `3xl:` on any utility.
- Produces: font-size utilities `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-h4`, `text-lead`, `text-body`, `text-body-sm`, `text-label`, each with a paired line-height.
- Produces: `--container-narrow|default|wide` custom properties, consumed by `Container` in Task 3 as `max-w-(--container-default)` etc.

- [ ] **Step 1: Write the failing test**

There is no unit-test framework here; the harness is the test. Confirm the type
invariant currently fails:

```bash
npm run audit:responsive 2>&1 | grep "INV-7" | head -5
```

Expected: several lines like
`[1920px] INV-7 home-services heading 30px below 44px floor`.

- [ ] **Step 2: Add the breakpoint and type scale**

In `src/styles/globals.css`, at the **end** of the existing `@theme { … }` block
(after the colour tokens), add:

```css
  /* ─── Breakpoint ───
     Tailwind v4 ships sm/md/lg/xl/2xl. 2xl (1536px) was the ceiling, which is why
     nothing on the site scaled past a 15" laptop. 3xl is the desktop tier. */
  --breakpoint-3xl: 120rem;            /* 1920px */

  /* ─── Fluid type scale ───
     Every step is clamp(min, intercept + slope*vw, max), locked so the min lands
     at a 375px viewport and the max at 1920px. Growth is continuous, so there is
     no snap at breakpoints and no size is ever "frozen" the way text-3xl was.
     Supersedes constitution §10.2, whose 60px h1 cap assumed a 1536px ceiling
     (approved 2026-08-19, see spec §2.1). */
  --text-display: clamp(2.125rem, 1.306rem + 3.5vw, 5.5rem);      /* 34 → 88 */
  --text-display--line-height: 1.05;
  --text-h1: clamp(2rem, 1.515rem + 2.07vw, 4rem);                /* 32 → 64 */
  --text-h1--line-height: 1.08;
  --text-h2: clamp(1.625rem, 1.291rem + 1.42vw, 3rem);            /* 26 → 48 */
  --text-h2--line-height: 1.15;
  --text-h3: clamp(1.25rem, 1.098rem + 0.65vw, 1.875rem);         /* 20 → 30 */
  --text-h3--line-height: 1.25;
  --text-h4: clamp(1.0625rem, 0.987rem + 0.32vw, 1.375rem);       /* 17 → 22 */
  --text-h4--line-height: 1.3;
  --text-lead: clamp(1.125rem, 1.034rem + 0.39vw, 1.5rem);        /* 18 → 24 */
  --text-lead--line-height: 1.5;
  --text-body: clamp(1rem, 0.954rem + 0.19vw, 1.1875rem);         /* 16 → 19 */
  --text-body--line-height: 1.65;
  --text-body-sm: clamp(0.875rem, 0.845rem + 0.13vw, 1rem);       /* 14 → 16 */
  --text-body-sm--line-height: 1.55;
  --text-label: clamp(0.6875rem, 0.657rem + 0.13vw, 0.8125rem);   /* 11 → 13 */
  --text-label--line-height: 1.4;

```

**No container tokens.** An earlier draft of this plan defined ten `--container-*`
custom properties. Only `Container` ever reads them, so they were indirection with no
consumer — the widths live directly in `Container` (Task 3) instead. One place to look,
one place to change.

- [ ] **Step 3: Verify the utilities generate**

```bash
npm run build
```

Expected: build succeeds. Tailwind v4 derives `text-display`, `text-h2`, … and the
`3xl:` variant automatically from the `--text-*` and `--breakpoint-*` tokens.

- [ ] **Step 4: Understand why you cannot verify the tokens yet**

Tailwind v4 **tree-shakes unused `@theme` variables.** Until a component actually
references `text-h2`, neither the utility nor the `--text-h2` custom property appears
in the output — a probe that injects the class at runtime, or reads the variable off
`:root`, will read 16px and look like a failure when nothing is wrong.

Do not chase this. The tokens are verified in Task 6, by the first section that uses
them. Confirm only that the build is clean:

```bash
npm run build
```

- [ ] **Step 5: Commit (ask first)**

```bash
git add src/styles/globals.css
git commit -m "feat: add fluid type scale, 3xl breakpoint, container width tokens"
```

---

## Task 3: `Container` — the single source of width and gutter

**Files:**
- Modify: `src/components/shared/primitives/Container.tsx`

**Interfaces:**
- Consumes: `--container-*` tokens from Task 2.
- Produces: `<Container width?: 'prose' | 'narrow' | 'default' | 'wide' | 'full'>`, default `'default'`. Renders `data-container` so the audit harness can distinguish sanctioned padding from stray padding (INV-5).

- [ ] **Step 1: Write the failing test**

```bash
npm run audit:responsive 2>&1 | grep "INV-5" | wc -l
```

Expected: `84`. Every one is a hand-rolled width or padding utility that this task
plus Task 6 will remove.

- [ ] **Step 2: Replace the file**

`src/components/shared/primitives/Container.tsx`:

```tsx
import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

export type ContainerWidth = 'narrow' | 'default' | 'wide';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
  children: ReactNode;
}

/* Container is the ONLY place in the codebase permitted to set max-width or
   horizontal padding (spec §3.0). That rule is what gives the page a single
   left edge; before it, twelve sections hand-rolled their own widths and the
   content edge moved eight times down the page.

   The caps grow past `lg` and stop at 1600px. They stop because line length,
   not available glass, is the constraint on readable text — but they grow that
   far because 1280px content on a 2560px display leaves 640px dead per side. */
const WIDTH_CLASSES: Record<ContainerWidth, string> = {
  narrow: 'max-w-[56rem] xl:max-w-[60rem] 3xl:max-w-[64rem]',
  default: 'max-w-[80rem] xl:max-w-[84rem] 2xl:max-w-[92rem] 3xl:max-w-[100rem]',
  wide: 'max-w-[88rem] 2xl:max-w-[100rem] 3xl:max-w-[110rem]',
};

/* One gutter ladder, replacing the nine different ones the sections used. */
const GUTTER = 'px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12';

export const Container = ({
  width = 'default',
  className,
  children,
  ...rest
}: ContainerProps) => (
  <div
    data-container={width}
    className={cn('mx-auto w-full', GUTTER, WIDTH_CLASSES[width], className)}
    {...rest}
  >
    {children}
  </div>
);
```

- [ ] **Step 3: Verify the caps resolve at each tier**

```bash
node -e "
const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  for (const w of [1024, 1280, 1536, 1920, 2560]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto('http://localhost:3000');
    const got = await p.evaluate(() => {
      const d = document.createElement('div');
      d.className = 'mx-auto w-full max-w-(--container-default) xl:max-w-(--container-default-xl) 2xl:max-w-(--container-default-2xl) 3xl:max-w-(--container-default-3xl)';
      document.body.appendChild(d);
      const v = getComputedStyle(d).maxWidth;
      d.remove();
      return v;
    });
    console.log(w + 'px ->', got);
    await p.close();
  }
  await b.close();
})();
"
```

Expected exactly:

```
1024px -> 1280px
1280px -> 1344px
1536px -> 1472px
1920px -> 1600px
2560px -> 1600px
```

- [ ] **Step 4: Confirm no build regression**

```bash
npm run build
```

Expected: success. Existing `Container` callers (`BlueprintShowcase`,
`FeaturedArticlesSection`, `IndustriesSectionCarousel`, `IndustriesSectionCatalog`,
and the `shared/sections/*` components used by other routes) keep working — the
`width` union only gained members, and `'default'` is still the default.

- [ ] **Step 5: Commit (ask first)**

```bash
git add src/components/shared/primitives/Container.tsx
git commit -m "feat: Container owns width and gutter, caps at 1600px on 3xl"
```

---

## Task 4: `Section` — padding scale and declared bleed

**Files:**
- Modify: `src/components/shared/primitives/Section.tsx`

**Interfaces:**
- Consumes: nothing from Task 3 (independent).
- Produces: `<Section tone size?: 'flush' | 'sm' | 'md' | 'lg' bleed?: boolean withGrid?: boolean>`. Default `size` stays `'md'`. Renders `data-bleed="true"` when `bleed` is set, which the harness reads to exempt the section from INV-2/3/4.

- [ ] **Step 1: Note the current values are half the documented scale**

```bash
grep -A5 "SIZE_CLASSES" src/components/shared/primitives/Section.tsx
```

Expected: `py-6 md:py-8 lg:py-10`, `py-8 md:py-10 lg:py-12`, `py-10 md:py-14 lg:py-16` —
versus the `py-12 / py-16 / py-20-24` the constitution §10.4 documents.

- [ ] **Step 2: Replace `SIZE_CLASSES` and add `bleed`**

In `src/components/shared/primitives/Section.tsx`, change the type, the size map,
and the component signature:

```tsx
export type SectionSize = 'flush' | 'sm' | 'md' | 'lg';
```

```tsx
/* Grows with the viewport, but deliberately restrained below `lg`.

   Measured before choosing these numbers: the home page is already 10852px —
   16.3 screens of scroll — at 375px, and section padding accounts for only 476px
   of that. The constitution's documented py-12/16/20-24 scale would have added
   ~680px of padding to the breakpoint that is already the longest and that has
   no reported problem. Making the phone scroll further to fix a desktop
   complaint is a net UX loss, so the low end moves only modestly (+~480px,
   ~4%) and the real growth happens from `lg` up, where the cramping actually is.

   `flush` exists for the first-fold sections, whose height comes from the fold
   wrapper in app/page.tsx rather than from their own padding. */
const SIZE_CLASSES: Record<SectionSize, string> = {
  flush: 'py-0',
  sm: 'py-8 md:py-10 lg:py-12 xl:py-14 3xl:py-16',
  md: 'py-10 md:py-12 lg:py-16 xl:py-20 3xl:py-24',
  lg: 'py-12 md:py-16 lg:py-20 xl:py-24 3xl:py-32',
};
```

Then update the component to accept and mark `bleed`:

```tsx
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone: SectionTone;
  size?: SectionSize;
  withGrid?: boolean;
  /* Declares that this section's background or media intentionally spans the
     viewport. Inner content must still pass through a Container. A bleed must
     be declared here — never achieved by omitting a max-width, which is what
     produced the eight-edge zigzag this work is fixing. */
  bleed?: boolean;
  children: ReactNode;
}
```

```tsx
export const Section = ({
  tone,
  size = 'md',
  withGrid = false,
  bleed = false,
  className,
  children,
  ...rest
}: SectionProps) => {
  const showGrid = withGrid && tone === 'dark';

  return (
    <section
      data-bleed={bleed ? 'true' : undefined}
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

- [ ] **Step 3: Build**

```bash
npm run build
```

Expected: success. `size` and `bleed` are additive; existing `Section` callers on
other routes pass `size="sm|md|lg"` which all still resolve.

- [ ] **Step 4: Sanity-check the padding grew**

```bash
npm run audit:responsive -- --report --shots ../.after-task4
```

Compare `../.after-task4/1920-desktop-fhd.png` against
`../.baseline-before/1920-desktop-fhd.png`. Expected: sections that already used the
`Section` primitive are visibly airier. Sections that don't use it yet are unchanged —
that is correct at this point, they are migrated in Task 6.

- [ ] **Step 5: Commit (ask first)**

```bash
git add src/components/shared/primitives/Section.tsx
git commit -m "feat: Section adopts documented padding scale, adds flush size and bleed"
```

---

## Task 5: `SectionHeader` — headers that share their content's edges

**Files:**
- Create: `src/components/shared/primitives/SectionHeader.tsx`
- Modify: `src/components/shared/primitives/index.ts`

**Interfaces:**
- Consumes: `text-label` / `text-h2` / `text-lead` from Task 2.
- Produces: `<SectionHeader eyebrow?: string title: ReactNode lead?: ReactNode align?: 'left' | 'center' className?: string />`.

- [ ] **Step 1: Confirm the defect this fixes**

```bash
npm run audit:responsive -- --report 2>&1 | grep -A14 "2560x1440"
```

Expected: `home-services` content width 768 and `home-why-choose-us` 672, while their
card grids run the section's full width — the orphaned-header problem (spec Gap 2).

- [ ] **Step 2: Create the component**

`src/components/shared/primitives/SectionHeader.tsx`:

```tsx
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/* The eyebrow/h2/lead trio was hand-rolled in twelve sections with twelve
   different sets of classes, and — worse — with its own max-width. That is what
   put the "Custom Software Development Services" heading 830px inside the cards
   it labels.

   So this component carries NO width cap. It inherits the section's Container,
   which means a header always spans the same edges as the content beneath it
   (spec §2.1 supersession 4). The only width constraint is `prose` on the lead
   paragraph, which limits line LENGTH without moving the block's edges. */
export const SectionHeader = ({
  eyebrow,
  title,
  lead,
  align = 'center',
  className,
}: SectionHeaderProps) => (
  <div
    className={cn(
      'flex flex-col gap-3 md:gap-4',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
      className
    )}
  >
    {eyebrow && (
      <span className="text-label font-semibold uppercase tracking-[0.18em] text-brand-600">
        {eyebrow}
      </span>
    )}
    <h2 className="text-h2 font-bold tracking-tight text-balance">{title}</h2>
    {lead && (
      <p
        className={cn(
          'text-lead max-w-[70ch] text-text-muted text-pretty',
          align === 'center' && 'mx-auto'
        )}
      >
        {lead}
      </p>
    )}
  </div>
);
```

- [ ] **Step 3: Export it**

In `src/components/shared/primitives/index.ts`, add alongside the existing exports:

```ts
export { SectionHeader } from './SectionHeader';
export type { SectionHeaderProps } from './SectionHeader';
```

- [ ] **Step 4: Build**

```bash
npm run build
```

Expected: success. Nothing consumes `SectionHeader` yet.

- [ ] **Step 5: Commit (ask first)**

```bash
git add src/components/shared/primitives/SectionHeader.tsx src/components/shared/primitives/index.ts
git commit -m "feat: add SectionHeader primitive with no width cap of its own"
```

---

## Task 6: Migrate the 12 home sections — one left edge

This is the load-bearing task. **Do the sections one at a time**, running the audit
after each. Do not batch them: a single mis-migrated section reintroduces a second
left edge and the invariant fails without telling you which section caused it.

**Files:** all under `src/components/home/`, in render order —
`HeroSection.tsx`, `StatementSection.tsx`, `WhyChooseUsServicesSection.tsx`,
`OurDelivery.tsx`, `ServicesSection.tsx`, `BlueprintShowcase.tsx`,
`ExperienceSection.tsx`, `WhyChooseUsSection.tsx`, `IndustriesSectionCarousel.tsx`,
`FeaturedArticlesSection.tsx`, `CTASection.tsx`, `FAQSection.tsx`

**Interfaces:**
- Consumes: `Container` (Task 3), `Section` (Task 4), `SectionHeader` (Task 5), type tokens (Task 2).
- Produces: no new exports. Each section's public component name is unchanged, so `src/components/home/index.ts` and `src/app/page.tsx` need no edits.

### The recipe, applied to every section

- [ ] **Step 1: Pick the next section and record its current numbers**

```bash
npm run audit:responsive -- --report 2>&1 | grep "<section-name>"
```

Note its `left`, `width` and stray-utility count so you can tell whether your change
helped.

- [ ] **Step 2: Delete every stray width and padding utility**

Find them:

```bash
grep -nE '(max-w-|px-)' src/components/home/<Section>.tsx
```

Remove all of them **except**: `max-w-[70ch]`-style prose caps on paragraphs, and
`px-*` on interactive elements (buttons, inputs, badges) where the padding is the
component's own chrome rather than page gutter. Everything else goes.

- [ ] **Step 3: Wrap the content in the primitives**

Replace the hand-rolled wrapper:

```tsx
// before — hand-rolled, one of nine different ladders
<section data-section="home-example" className="py-8 md:py-10 bg-surface-white">
  <div className="mx-auto lg:max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-2xl md:text-3xl font-bold">Who we are</h2>
      <p className="text-base text-text-muted">We combine deep technical…</p>
    </div>
    {/* cards, with no max-width, running the full 2545px */}
  </div>
</section>

// after — one container, header shares its edges
<Section tone="light" size="md" data-section="home-example">
  <Container width="default">
    <SectionHeader title="Who we are" lead="We combine deep technical…" />
    {/* cards, now bounded by the same container as the header */}
  </Container>
</Section>
```

- [ ] **Step 4: Move type onto the scale**

| Replace | With |
|---|---|
| `text-2xl md:text-3xl` (section heading) | `text-h2` (via `SectionHeader`) |
| `text-xl` / `text-lg` (card title) | `text-h3` |
| `text-base` (body) | `text-body` |
| `text-sm` (secondary) | `text-body-sm` |
| `text-xs` / `text-[10px]` / `text-[11px]` (eyebrow, badge) | `text-label` |
| `gap-1.5` / `gap-2` on a **card grid** | `gap-4 md:gap-5 lg:gap-6 xl:gap-8 3xl:gap-10` |

Leave `gap-*` alone where it spaces icons or inline chips rather than grid cards.

- [ ] **Step 5: Run the audit**

```bash
npm run audit:responsive
```

Expected: the violation count drops, and no **new** INV-2 or INV-3 line names the
section you just touched. If a new INV-2 appears, this section's container does not
match the others — recheck `width="default"`.

- [ ] **Step 6: Compare screenshots**

```bash
npm run audit:responsive -- --report --shots ../.after-<section>
```

Open the 1920 and 2560 images beside `../.baseline-before/`. Then check 375 and 1280
for regressions — the spacing scale legitimately changes those, but nothing should
overlap, clip, or overflow.

- [ ] **Step 7: Commit this section (ask first), then return to Step 1**

```bash
git add src/components/home/<Section>.tsx
git commit -m "refactor(home): migrate <Section> onto container and type scale"
```

### Section-specific notes

Apply the recipe above, plus:

- [ ] **`HeroSection`** — replace the hardcoded ladder
  `text-[32px] sm:text-[46px] md:text-[60px] lg:text-[68px] xl:text-[76px]` with a
  single `text-display`. Use `<Section bleed>` so the photograph spans the viewport
  while the text sits in `Container width="default"`. **Do not touch
  `first-fold.css`** — verify at 1280×720 and 1440×900 that its height-tier
  overrides still win over `text-display`.
- [ ] **`StatementSection`** — `Section size="flush"` (its height comes from the fold
  wrapper), `Container width="narrow"`. While here, fix the copy typo: **"GDPR
  complaint" → "GDPR compliant"** (spec §9.1).
- [ ] **`ServicesSection`** — 29KB, the largest on the page; migrate it alone and
  commit it alone. Header goes to `Container width="wide"` to match its cards.
  **Note:** an earlier draft of this plan blamed this section's carousel track for
  the INV-1 overflow. That was wrong — the track already has `overflow-hidden`, and
  the offscreen slides it clips cannot extend `scrollWidth`. The real cause was the
  footer email link (see Task 7), already fixed. Do not add redundant clipping here.
- [ ] **`OurDelivery`** — fixes the ~400px void: the left column is vertically
  centred against a nine-row list. Change the grid to `items-start` and let the rail
  column grow at `2xl`/`3xl` instead of staying pinned at `22rem`.
- [ ] **`BlueprintShowcase`** — `Container width="wide"`, **no bleed**. It is a
  technical diagram; legibility needs a bounded width (spec §5).
- [ ] **`ExperienceSection`** — the worst offender: 17 stray utilities, off-centre
  content (INV-3), and 424ch prose at 2560px. Expect this one to take the longest.
  Its `text-[7px]`–`text-[11px]` sizes are certification-badge chrome; replace with
  `text-label` where they are text, keep explicit sizes only where a logo lockup
  genuinely requires it.
- [ ] **`WhyChooseUsSection`** — 6 cards. Keep `lg:grid-cols-3` as the terminal
  state: at a 1600px container that is ~510px per card across two clean rows. Do
  **not** add a 4th column; 6/4 leaves an orphan.
- [ ] **`IndustriesSectionCarousel`** — `Section bleed`, with the card track bleeding
  off-screen to signal that it scrolls. Verify INV-1 stays clean — a bleeding track
  must be clipped by the section, not allowed to widen the document.
- [ ] **`FeaturedArticlesSection`** — 3 cards, `lg:grid-cols-3` terminal.
- [ ] **`CTASection`** — `Section tone="accent" bleed`, `Container width="narrow"`.
- [ ] **`FAQSection`** — `Container width="narrow"`; the `<details>` accordions must
  stay native for keyboard access (constitution §10.6).

---

## Task 7: Layout chrome — Header and Footer

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `Container` (Task 3).

- [ ] **Step 1: Observe the problem**

Open `../.baseline-before/2560-desktop-qhd.png`. The header has no container: the
logo is flush to the far left and "Contact Us" to the far right, ~1900px apart, while
the nav links sit centred. A header pinned differently from the content it sits above
undoes Task 6's single edge.

- [ ] **Step 2: Wrap the header bar in a Container**

In `src/components/layout/Header.tsx`, replace the hand-rolled inner wrapper with:

```tsx
<Container width="default" className="flex h-full items-center justify-between gap-8">
```

Keep the outer `<header>` full-width — the glass/blur background *should* span the
viewport. Only the bar's contents are constrained.

- [ ] **Step 3: Same for the Footer**

In `src/components/layout/Footer.tsx`, wrap the footer columns in
`<Container width="default">`, removing any hand-rolled `max-w-*` / `px-*`.

- [ ] **Step 4: Verify alignment**

```bash
npm run audit:responsive -- --report --shots ../.after-chrome
```

At 1920 and 2560, the logo's left edge must line up with the first section's content
left edge. Check the mobile menu still opens and traps focus at 375px.

- [ ] **Step 5: Commit (ask first)**

```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx
git commit -m "refactor(layout): align header and footer to the container scale"
```

---

## Task 8: Hero height cap and the first-fold void

**Files:**
- Modify: `src/components/home/HeroSection.tsx`
- Modify: `src/app/page.tsx` (fold wrapper only, if needed)

**Interfaces:**
- Consumes: `Section` (Task 4), the migrated hero (Task 6).

- [ ] **Step 1: Measure the void**

```bash
node -e "
const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  const p = await b.newPage({ viewport: { width: 2560, height: 1440 } });
  await p.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  const gap = await p.evaluate(() => {
    const sub = document.querySelector('[data-hero-sub]');
    const cta = document.querySelector('[data-hero-cta]');
    if (!sub || !cta) return 'markers not found';
    return Math.round(cta.getBoundingClientRect().top - sub.getBoundingClientRect().bottom);
  });
  console.log('subheadline -> CTA gap at 2560x1440:', gap, 'px');
  await b.close();
})();
"
```

Expected: a gap of roughly 250px — dead photograph between the copy and the buttons.

- [ ] **Step 2: Cap the hero stage height from `xl` up**

On the hero stage element in `HeroSection.tsx` (the one currently carrying
`sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]`), add a maximum:

```tsx
className="flex flex-1 flex-col relative w-full overflow-hidden
  sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]
  xl:max-h-[880px]"
```

The fold wrapper in `app/page.tsx` still owns the one-viewport contract; capping the
stage means surplus height on a tall display goes to the statement below and to the
hero's internal spacing instead of stretching the photograph.

- [ ] **Step 3: Close the gap**

The hero body currently pushes the CTA to the bottom. Constrain that distribution so
the copy block and CTA stay grouped: change the body's vertical distribution from
`justify-between` to `justify-center` with an explicit `gap`, keeping the scroll cue
absolutely positioned at the bottom so it does not participate in the flow.

- [ ] **Step 4: Re-measure and check the fold contract at every height**

Re-run Step 1's script. Expected: gap under ~80px.

Then confirm the fold still holds — hero plus statement occupy exactly one viewport,
with the next section not leaking in:

```bash
node -e "
const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  for (const [w,h] of [[375,667],[1280,720],[1440,900],[1920,1080],[2560,1440]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    await p.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    const r = await p.evaluate(() => {
      const st = document.querySelector('[data-section=home-statement]');
      const next = document.querySelector('[data-section=home-why-choose-us-services]');
      return {
        statementBottom: Math.round(st.getBoundingClientRect().bottom),
        nextTop: Math.round(next.getBoundingClientRect().top),
      };
    });
    const ok = r.statementBottom <= h + 2 && r.nextTop >= h - 2;
    console.log(w + 'x' + h, JSON.stringify(r), ok ? 'OK' : 'FOLD BROKEN');
    await p.close();
  }
  await b.close();
})();
"
```

Expected: `OK` on every line. `1280x720` and `1440x900` are the ones that exercise
`first-fold.css`; if either breaks, raise the override in that file rather than
changing the token.

- [ ] **Step 5: Commit (ask first)**

```bash
git add src/components/home/HeroSection.tsx src/app/page.tsx
git commit -m "fix(home): cap hero height above xl and close the CTA void"
```

---

## Task 9: Full green audit and visual review

**Files:** none — verification only.

- [ ] **Step 1: Run the full audit**

```bash
npm run audit:responsive
```

Expected: `PASS — all invariants hold across 7 viewports.` and exit 0.

If violations remain, fix them before proceeding. Do **not** relax an invariant to
get green — the thresholds come from the spec. The one legitimate exception: INV-7's
44px heading floor assumes every section has an `h2`; a section that deliberately has
no heading (e.g. a pure media band) should be given `data-bleed` or excluded
explicitly in the harness, with a comment saying why.

- [ ] **Step 2: Confirm the specific bugs are gone**

```bash
npm run audit:responsive -- --report 2>&1 | grep -E "INV-1|INV-2"
```

Expected: no output. Specifically: no horizontal overflow at 1024 or 1280, and one
left edge at every width including 375.

- [ ] **Step 3: Build and lint**

```bash
npm run build && npm run lint && bash scripts/token-hygiene.sh
```

Expected: all clean.

- [ ] **Step 4: Capture the after-set and review side by side**

```bash
npm run audit:responsive -- --report --shots ../.after-final
```

Review all 7 pairs against `../.baseline-before/`. Confirm for each width:
no horizontal scrollbar; one content edge; headers aligned with their cards; no card
with a large trailing void; touch targets ≥ 48px at 375px.

- [ ] **Step 5: Present to the requester before the docs task**

Two judgement calls were flagged in spec §11 for review at exactly this point:

1. Section headings now reach 48px at 1920px. If that reads too loud, change
   `--text-h2`'s max from `3rem` to `2.75rem` — a one-line token edit.
2. The spacing scale changed the sub-1280px views. Confirm the laptop and phone
   renderings are wanted, not merely tolerated.

Get a decision on both before Task 10.

---

## Task 10: Amend the constitution

**Files:**
- Modify: `docs/design-system/services-solutions-constitution.md`
- Modify: `docs/design-system/constitution/changelog.md`

CLAUDE.md rule 9 requires deviations to be recorded in the constitution itself. All
four supersessions were approved 2026-08-19 (spec §2.1).

- [ ] **Step 1: §10.1 — breakpoints**

Add `1920px — 3xl` and `2560px` to the tested-widths list. Change the shippability
line to require validation at 375, 768, 1280 **and 1920** at minimum.

- [ ] **Step 2: §10.2 — replace the reference clamps**

Replace the four example clamps with the shipped nine-token table from spec §3.2.
Note that the previous 3.75rem `h1` cap was written against a 1536px ceiling and is
superseded.

- [ ] **Step 3: §10.3 — line length**

Note that `Container width="prose"` is the enforcement mechanism, and that the audit
harness checks it as INV-6.

- [ ] **Step 4: §10.4 — replace the padding scale**

Replace with the five-tier `flush/sm/md/lg` table from spec §3.5.

- [ ] **Step 5: Add §10.10 — the width rule**

Write the rule from spec §3.0: one content width per page; `Container` is the only
component permitted to set `max-width` or horizontal padding; the two sanctioned
departures (declared `bleed`, centred `narrow`/`prose`); the full-bleed policy from
spec §5. Also correct §308, which currently reads "always `max-w-7xl`".

- [ ] **Step 6: Changelog entry**

In `docs/design-system/constitution/changelog.md`, add a version entry recording:
the `3xl` breakpoint, the fluid type scale, the container scale to 1600px, the
one-content-width rule, the `SectionHeader` primitive, and the audit harness as the
enforcement mechanism.

- [ ] **Step 7: Commit (ask first)**

```bash
git add docs/design-system/
git commit -m "docs: amend constitution §10 with the responsive scale and width rule"
```

---

## Task 11: Sweep the remaining pages (follow-up)

**Files:** `src/app/**/page.tsx`, `src/components/{services,solutions,industry,blog,templates}/`

Out of scope for the home-page spec, but the token layer now exists site-wide and the
harness accepts a `--url`. Left as a follow-up so the home page can ship first.

- [ ] **Step 1: Measure every route**

```bash
for p in / /services /solutions /industry /about /contact /blog /careers /faq /team /case-studies; do
  echo "=== $p ==="
  npm run audit:responsive -- --url "$p" --report 2>&1 | tail -4
done
```

- [ ] **Step 2: Rank by violation count and migrate worst-first**

Apply the Task 6 recipe per page. The `shared/sections/*` components are used across
`/services` and `/solutions`, so migrating those covers many routes at once — do them
before the individual pages.

- [ ] **Step 3: Report the ranked list to the requester**

Present counts per route and a recommended order before starting; this is a
separately-scoped piece of work, not an automatic continuation.

---

## Notes

- Screenshot sets are written outside the Next.js project root (`../.baseline-before`,
  `../.after-*`) so the dev server does not try to watch them. Add them to
  `.gitignore` if they end up inside the repo.
- The harness drives the installed Google Chrome via `channel: 'chrome'`. The
  `ms-playwright` cache on this machine holds build 1226 while `playwright-core`
  1.62.1 expects 1234, so `chromium.launch()` with no channel fails. `CHROME_PATH`
  overrides the executable for CI.
- `--report` exits 0 even with violations; plain invocation exits 1. Use plain in
  gates, `--report` when you just want the numbers.
