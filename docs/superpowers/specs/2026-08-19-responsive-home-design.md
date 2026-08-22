# Design: Fully Responsive Home Page (375px → 2560px)

Created: 2026-08-19
Status: approved, pending implementation plan
Scope: home page + shared primitives + layout chrome. Remaining pages are a fast follow.

---

## 1. Problem

The site is mobile-first and then stops. It is tuned for 375–1440px and degrades badly
above that. Measured evidence from the current codebase:

**Breakpoint usage across the whole app:**

| Prefix | Count |
|--------|-------|
| `md:`  | 1274 |
| `lg:`  | 953 |
| `xl:`  | 46 |
| `2xl:` | **0** |

Every layout, type size and pad freezes at `lg` (1024px). A 2560px monitor renders a
layout designed for a 1024px one.

**Four systemic gaps, not a set of one-off bugs.** Ordered by how much they damage the
page — this ordering was corrected after inspecting the rendered page at 2560×1440, and
is deliberately *not* the order a code-only reading suggests.

### Gap 1 — there is no single content width (the dominant defect)

Measured at 2560×1440, the left edge and width of the constrained content in each
section, in render order:

| Section | Content left edge | Content width |
|---|---|---|
| `home-hero` | 760 | 1024 |
| `home-statement` | 824 | 896 |
| `home-why-choose-us-services` | 696 | 1152 |
| `home-delivery` | 696 | 1152 |
| `home-services` | **888** | 768 |
| `home-blueprints` | 632 | 1280 |
| `home-experience` | **1653** | 512 |
| `home-why-choose-us` | 936 | 672 |
| `home-industries-carousel` | 632 | 1280 |
| `home-featured-articles` | 632 | 1280 |
| `home-cta` | 888 | 768 |
| `home-faq` | 632 | 1280 |

**Eight distinct left edges; no two consecutive sections align.** The eye never finds a
stable vertical line, so the page reads as twelve unrelated templates. On a 1440px
laptop the margins are narrow enough to mask it; at 2560px it is the first thing seen.

### Gap 2 — section headers are orphaned from the content they label

Card grids carry no `max-width` and run the section's full 2545px, while their own
headers are capped far narrower. `home-services` caps its header at 768px over cards
spanning 2545px — the label sits ~830px inside the content it introduces.
`home-why-choose-us` does the same at 672px. They read as two unrelated components.

A second-order effect: cards stretched to ~800px hold 16px body text filling only the
left ~60%, leaving ~250px of trailing dead space per card. That reads as a rendering
bug rather than a design choice.

### Gap 3 — containers and grids terminate at `lg`

`lg:max-w-6xl` (1152px) and `lg:grid-cols-3` / `lg:grid-cols-2` are terminal states.
`Container`'s widest option is `max-w-7xl` (1280px). Note the fix is a **convergence,
not a widening**: the card grids at 2545px must come *in*, while `home-industries-carousel`
and `home-faq` at 1280px must go *out*. Both land on the same edge.

### Gap 4 — type ceiling is `text-3xl`, and no shared spacing rhythm

All 12 sections top out at `text-3xl` (30px) for their heading; body text is 16px. On a
27–32" display at normal viewing distance this is quiet rather than broken. `HeroSection`
uses a hardcoded pixel ladder (`text-[32px]` … `text-[76px]`) with no `clamp()`.

Separately: nine distinct horizontal padding ladders across 12 sections; vertical padding
from `py-2` to `py-8 lg:py-14` with no pattern; card grids at `gap-1.5` (6px). The
`@theme` block in `globals.css` defines **color tokens only** — no spacing or typography
tokens exist.

### Three further rendering defects found on inspection

- **The whole site scrolled horizontally at 1024px and 1280px.** `Footer`'s email link
  used `inline-flex`, which sizes to content; an email address offers no break
  opportunity, so the link rendered 247px wide inside a 176px grid column and pushed the
  document to 1105px at a 1024px viewport and 1319px at 1280px. Found by the audit
  harness (§9.2), not by inspection, and the most severe bug in the set — it affected
  the most common desktop resolutions and every page, not just large monitors.
  **Fixed 2026-08-19** (`flex` + `min-w-0` + `break-all`); INV-1 now clean.
  *A first diagnosis blamed `home-services`' carousel track; that was wrong — the track
  is already clipped, and clipped children cannot extend `scrollWidth`.*
- **`home-hero`** — a 1024px text island in a 2560px photograph, with ~250px of dead
  vertical space between the subheadline and the CTA. The CTA is bottom-anchored, so the
  taller the viewport, the larger the void.
- **`home-delivery`** — the left column is vertically centred against a nine-row list,
  producing a ~400px void above its heading.

Sections therefore fail to agree with each other at *any* width, and cannot scale
past 1024px at all.

**Aggravating factor:** the constitution already documents the intended standard in
§10 (fluid `clamp()` headings, 70ch prose cap, `py-12`/`py-16`/`py-20-24` section
padding) and the code does not implement it. `Section`'s `SIZE_CLASSES` ship
`py-6/8/10`, `py-8/10/12`, `py-10/14/16` — roughly half the documented values.

## 2. Decisions taken (requester-confirmed)

| Decision | Choice |
|---|---|
| Large-screen strategy | **Hybrid** — text containers cap at 1600px; visuals go full-bleed; type and spacing keep scaling to 1920px |
| Top tuned width | **2560px**; new `3xl` breakpoint at 1920px. Above 2560 stays graceful, not specifically tuned |
| Approach | **Token layer + migrate home sections onto primitives** |
| Verification | **Playwright screenshots per section at every breakpoint**, baseline captured before any edit |
| Spacing scale | **Drift — grow the scale**, but restrained below `lg`. Revised from "adopt §10.4 verbatim" once page length was measured; see §3.5 |
| First fold | **Keep one viewport, cap hero height** (880px from `xl` up); surplus height goes to spacing |
| Full-bleed set | Delegated to implementer; recommendation in §5 below, adjustable on review |

### 2.1 Constitution supersessions (requester-approved 2026-08-19)

The requester's standing instruction: the constitution is the default for day-to-day
work, but where responsive quality and the guideline conflict, responsive quality wins —
subject to explicit approval per case. Four cases were raised and **all four approved**.

| # | Constitution | Supersedes with | Rationale |
|---|---|---|---|
| 1 | §308: `Container` is *always* `max-w-7xl` (1280px) | 1280 → **1600px** at `3xl` | 1280px on a 2560px viewport leaves 640px dead per side |
| 2 | §10.2: `h1` caps at 3.75rem (60px) | hero **88px**, `h2` **48px** | The 60px cap was written against a 1536px ceiling; it under-reads at 1920–2560 |
| 3 | *(no such rule exists)* | **New: one content width per page** | The absence of this rule is what permitted the eight-edge zigzag in Gap 1 |
| 4 | §10.4 is the only spacing rule | **Section headers may not carry their own width cap** | Direct cause of the orphaned headers in Gap 2 |

Supersession 3 is the load-bearing one: it is a genuine gap in the design system rather
than a value change, and without it this regresses the next time a section is added.

## 3. Token layer (`globals.css` `@theme`)

### 3.0 The width rule (supersession 3)

**A page has one content width.** Every section's constrained content shares a single
container, and therefore a single left and right edge.

Two, and only two, sanctioned departures:

1. **Declared full-bleed** — a background, photograph, or scrolling track that spans the
   viewport, set via `Section bleed`. It must be a deliberate `bleed` prop, never the
   incidental result of a missing `max-width`. Text never bleeds.
2. **Declared narrower** — prose or a centred CTA that uses `Container narrow`.
   Because these are centred within the same page container, they stay
   symmetric about the same axis and do not introduce a new left edge.

What is forbidden is the third case, which is what the page does today: content that is
narrower or wider *by accident*, because a section hand-rolled its own `max-w-*`.

Enforcement: `Container` is the only component permitted to set `max-width` or horizontal
padding. A `max-w-*` or `px-*` utility in a section or card is a defect.

### 3.1 Breakpoint

Tailwind v4 already provides `xl` 1280 and `2xl` 1536. Add:

```css
--breakpoint-3xl: 120rem;   /* 1920px */
```

### 3.2 Fluid type scale

Every step is a `clamp()` locked between **375px** and **1920px** viewport width, so
type grows continuously rather than jumping at breakpoints. Derivation: for a size
going `a`px at 375 → `b`px at 1920, slope = `(b-a)/15.45` vw and intercept
= `a - 0.2427(b-a)` px.

| Token | Purpose | @375 | @1024 | @1440 | @1920 | Definition |
|---|---|---|---|---|---|---|
| `text-display` | hero h1 | 34 | 57 | 71 | **88** | `clamp(2.125rem, 1.306rem + 3.5vw, 5.5rem)` |
| `text-h1` | page titles | 32 | 45 | 54 | **64** | `clamp(2rem, 1.515rem + 2.07vw, 4rem)` |
| `text-h2` | section headings | 26 | 35 | 41 | **48** | `clamp(1.625rem, 1.291rem + 1.42vw, 3rem)` |
| `text-h3` | card titles | 20 | 24 | 27 | **30** | `clamp(1.25rem, 1.098rem + 0.65vw, 1.875rem)` |
| `text-h4` | sub-headings | 17 | 19 | 21 | **22** | `clamp(1.0625rem, 0.987rem + 0.32vw, 1.375rem)` |
| `text-lead` | section lead copy | 18 | 21 | 22 | **24** | `clamp(1.125rem, 1.034rem + 0.39vw, 1.5rem)` |
| `text-body` | body copy | 16 | 17 | 18 | **19** | `clamp(1rem, 0.954rem + 0.19vw, 1.1875rem)` |
| `text-body-sm` | secondary copy | 14 | 15 | 16 | **16** | `clamp(0.875rem, 0.845rem + 0.13vw, 1rem)` |
| `text-label` | eyebrows, badges | 11 | 12 | 13 | **13** | `clamp(0.6875rem, 0.657rem + 0.13vw, 0.8125rem)` |

Paired line-heights, set via `--text-<name>--line-height`:

| Token | Line height |
|---|---|
| `display` | 1.05 |
| `h1` | 1.08 |
| `h2` | 1.15 |
| `h3` | 1.25 |
| `h4` | 1.3 |
| `lead` | 1.5 |
| `body` | 1.65 |
| `body-sm` | 1.55 |
| `label` | 1.4 |

These **supersede** the constitution §10.2 reference clamps, which capped `h1` at
3.75rem and were never implemented. §10 is amended accordingly (see §8).

### 3.3 Container width scale

Text content caps at 1600px. Values as `--container-*` tokens consumed by `Container`:

| Width | ≤lg | `xl` | `2xl` | `3xl` |
|---|---|---|---|---|
| `narrow` | 56rem / 896 | 60rem / 960 | — | 64rem / 1024 |
| `default` | 80rem / 1280 | 84rem / 1344 | 92rem / 1472 | **100rem / 1600** |
| `wide` | 88rem / 1408 | — | 100rem / 1600 | 110rem / 1760 |

Three widths, not five. A `prose` and a `full` variant were specified in an earlier
draft and cut: nothing on the home page needed either, and the 70ch prose rule is
better applied to the paragraph that needs it than to a whole container. Values live
in `Container` directly rather than in `@theme` tokens — only `Container` reads them,
so tokens would be indirection with no second consumer.

The 70ch line-length rule from constitution §10.3 — currently honoured in exactly one
place in the codebase — is applied as `max-w-[70ch]` on the paragraphs that need it
(chiefly `SectionHeader`'s lead), not as a container variant.

### 3.4 Gutter ladder

One canonical horizontal padding ladder, replacing all nine current variants:

```
px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12
```

**Only `Container` sets horizontal padding.** Sections and cards must not.

### 3.5 Section vertical padding scale

Adopts constitution §10.4 (`py-12` / `py-16` / `py-20-24`) and extends it with `xl`
and `3xl` tiers:

| Size | base | `md` | `lg` | `xl` | `3xl` |
|---|---|---|---|---|---|
| `flush` | `py-0` | | | | |
| `sm` | `py-8` | `py-10` | `py-12` | `py-14` | `py-16` |
| `md` | `py-10` | `py-12` | `py-16` | `py-20` | `py-24` |
| `lg` | `py-12` | `py-16` | `py-20` | `py-24` | `py-32` |

**Revised 2026-08-19, superseding the "adopt §10.4 verbatim" decision in §2.** Measured
page length before committing to numbers:

| Viewport | Page height | Screens of scroll | Section padding total |
|---|---|---|---|
| 375×667 | 10852px | **16.3** | 476px |
| 768×1024 | 9856px | 9.6 | 608px |
| 1440×900 | 7847px | 8.7 | 752px |
| 1920×1080 | 7987px | 7.4 | 784px |

The phone page is already 16.3 screens long and padding is only 476px of that — the
length is content, not air. Applying §10.4's `py-12` at the base would have added ~680px
of padding to the longest, least-problematic breakpoint. Making the phone scroll further
to fix a desktop complaint is a net UX loss, so the base grows only ~4% and the real
growth lands from `lg` up, where the cramping actually is.

`flush` exists for the first-fold sections, which derive their height from the fold
wrapper rather than from padding.

### 3.6 Grid gap scale

Card grids move off `gap-1.5` (6px) onto this literal class ladder (applied at the grid,
not tokenised — a gap token has no single-utility form in Tailwind v4):

```
gap-4 md:gap-5 lg:gap-6 xl:gap-8 3xl:gap-10
```

## 4. Primitives

### 4.1 `Container` (modify)

- `width` union extends to `'prose' | 'narrow' | 'default' | 'wide' | 'full'`.
- Applies the §3.4 gutter ladder and the §3.3 responsive caps.
- `full` applies the gutter but no cap — used by bleeding sections for their inner text.

### 4.2 `Section` (modify)

- `size` union extends to `'flush' | 'sm' | 'md' | 'lg'`, mapped to §3.5.
- New `bleed?: boolean` — when set, the section's background/media layer spans the full
  viewport while inner content still passes through a `Container`.
- Existing `tone` and `withGrid` behaviour is unchanged.

### 4.3 `SectionHeader` (new)

The eyebrow / `h2` / lead trio is hand-rolled in 12 sections with 12 different sets of
classes. One primitive:

```
SectionHeader { eyebrow?, title, lead?, align?: 'left' | 'center', className? }
```

Emits `text-label`, `text-h2`, `text-lead`, and `max-w-[70ch]` on the lead.

**Per supersession 4, `SectionHeader` carries no width cap of its own.** It inherits the
section's container, so a header always spans the same edges as the content it labels.
The 70ch cap applies to the lead paragraph's *text* only (line-length control) and
must not be applied to the header block. This is the change that fixes Gap 2.

## 5. Full-bleed decision

**Bleed:**
- Hero background image — full viewport width at every size; hero text stays in `Container`.
- Accent and dark CTA band backgrounds — band bleeds, inner content capped at `narrow`.
- Industries carousel track — cards run edge-to-edge with the track bleeding off-screen,
  which also signals that it scrolls.

**Do not bleed:**
- `BlueprintShowcase` — it is a technical diagram; legibility requires a bounded width.
  Gets the `wide` container instead.
- All text, all card grids.

## 6. First fold

The fold contract in `app/page.tsx` (hero + `StatementSection` == exactly one viewport)
is preserved. Change: from `xl` up, the hero stage gains a max height of 880px. The
fold wrapper's surplus height is distributed to the hero's internal spacing rather than
to photo height, so a 1440p or 4K display does not render one enormous photograph above
a small caption. The scroll cue remains.

`HeroSection`'s hardcoded pixel ladder is replaced by `text-display`.

## 7. Migration plan — the 12 rendered sections

### 7.0 Phase order

Sequenced so the dominant defect is fixed first and is independently reviewable. This
ordering supersedes an earlier draft that led with the type scale — inspection at 2560px
showed type to be the *third* problem, not the first.

| Phase | Work | Fixes |
|---|---|---|
| 0 | Baseline screenshots at all six widths, before any edit | — |
| 1 | `Container` width scale + gutter ladder; migrate all 12 sections onto one container; strip every hand-rolled `max-w-*` / `px-*` | **Gap 1** — the single left edge |
| 2 | `SectionHeader`; remove header width caps | **Gap 2** — orphaned headers |
| 3 | Grid terminal columns, gap scale, card content width | **Gap 3** + stretched cards |
| 4 | Fluid type scale; `Section` padding scale | **Gap 4** |
| 5 | Hero height cap and void; `home-delivery` alignment | the two rendering defects |
| 6 | Constitution amendment + changelog | §8 |

Phase 1 is the one that has to land cleanly; phases 2–5 are refinements on top of it.
Review after phase 1 before continuing — if the single-edge result is wrong, everything
after it is built on the wrong edge.

### 7.1 Section-by-section targets

Sections in render order from `app/page.tsx`. `H` = current heading cap, `C` = current
terminal container/grid.

| # | Section | Now | Target |
|---|---|---|---|
| 1 | `HeroSection` | H: `text-[76px]` hardcoded; 7-step ad-hoc `px` ladder | `text-display`; `Section bleed`, `Container default`; height cap per §6 |
| 2 | `StatementSection` | `max-w-4xl`, `px-6 sm:px-8 lg:px-12` | `Section flush`, `Container narrow` |
| 3 | `WhyChooseUsServicesSection` | H: `text-3xl`; C: `lg:max-w-6xl`, `lg:grid-cols-2` | `SectionHeader`; `Container default`; grid stays 2-col, gap scale |
| 4 | `OurDelivery` | C: `lg:max-w-6xl`, `lg:grid-cols-[22rem_1fr]` | `Container default`; rail column grows at `2xl`/`3xl` |
| 5 | `ServicesSection` | H: `text-3xl`; `max-w-3xl`; 29KB file | `SectionHeader`; `Container wide` |
| 6 | `BlueprintShowcase` | `py-6 md:py-8 lg:py-14`; `max-w-3xl` | `Section lg`; `Container wide` (no bleed, per §5) |
| 7 | `ExperienceSection` | 20+ ad-hoc `px`/`py`/`gap` values; `grid-cols-3 lg:grid-cols-2` | Normalise onto the scales; `Container default` |
| 8 | `WhyChooseUsSection` | 6 cards, `lg:grid-cols-3` terminal; `gap-1.5` | `2xl:grid-cols-3` retained (6/3 = 2 clean rows); gap scale |
| 9 | `IndustriesSectionCarousel` | `max-w-3xl`, ad-hoc `px-1 px-2` | `Section bleed`; bleeding track per §5 |
| 10 | `FeaturedArticlesSection` | 3 cards, `lg:grid-cols-3`; `gap-1.5` | 3-col retained; gap scale; `Container default` |
| 11 | `CTASection` | `py-7 sm:py-9 lg:py-12`; 8 `px` values | `Section accent bleed`; `Container narrow` |
| 12 | `FAQSection` | `max-w-7xl`; `px-3.5 px-4 sm:px-5 sm:px-6 lg:px-8` | `Container narrow`; `SectionHeader` |

**Grid rule:** a 4th column is added at `2xl` only where the card count divides cleanly.
For the 6-card and 3-card grids on this page, 3 columns remains the correct terminal
state — the extra width goes to card size and gap, not to an orphaned row.

**Layout chrome** (`Header`, `Footer`) must move onto the same container scale in the
same pass. A header still pinned to 1280px above content that now reaches 1600px would
undo the work, and both appear on every page.

## 8. Constitution amendment (required by CLAUDE.md rule 9)

`docs/design-system/services-solutions-constitution.md`:

- **§10.1** — add 1920px and 2560px to the tested-widths list; add the `3xl` breakpoint.
- **§10.2** — replace the reference clamps with the §3.2 table (the shipped scale).
- **§10.3** — note that `max-w-[70ch]` on prose paragraphs is the mechanism, and that
  the audit harness checks it as INV-6.
- **§10.4** — replace with the §3.5 five-tier table.
- **New §10.10** — the gutter ladder rule ("only `Container` sets horizontal padding"),
  the container width scale, and the full-bleed policy from §5.
- `constitution/changelog.md` — new version entry recording the responsive scale.

## 9. Verification

**Widths:** 375, 768, 1024, 1440, 1920, 2560.
**Heights that must be re-checked explicitly:** 1280×720 and 1440×900.

**Baseline first.** Capture all six widths before any edit. Without a baseline there is
no way to distinguish an intended change from a regression, and the spacing scale
change means the sub-1280px views *will* legitimately differ.

**Per section:** capture after each migration and compare against baseline at all six
widths.

**`first-fold.css` is the primary regression risk.** It is a measured, height-keyed
override system whose own comments state its thresholds were measured rather than
guessed. Its `[data-*]` attribute selectors have higher specificity than the utility
classes the new clamps land on, so it continues to win — but this must be *verified*,
not assumed, at 1280×720 and 1440×900. If a clamp does leak through, the fix is to
raise the override, never to weaken the token.

**Gates:** `npm run build` clean; `scripts/token-hygiene.sh` clean; no horizontal body
scroll at any of the six widths; body prose ≤ 70ch at 1920 and 2560.

### 9.2 The audit harness

`scripts/responsive-audit.mjs` (run via `npm run audit:responsive`) is the enforcement
mechanism, not a convenience. It drives the installed Chrome via `playwright-core`,
measures all 12 sections at all 7 viewports, and asserts seven invariants:

| Invariant | Asserts | Baseline violations |
|---|---|---|
| INV-1 | no horizontal overflow at any width | 2 |
| INV-2 | one left edge among full-width sections | 2 |
| INV-3 | capped content centred on the viewport axis | 6 |
| INV-4 | nothing exceeds the container cap for its width | 0 |
| INV-5 | no `max-w-*` / `px-*` outside `Container` (§3.0) | 84 |
| INV-6 | prose ≤ 75ch (§3.3) | 60 |
| INV-7 | heading ≥ 44px, body ≥ 18px at 1920+ (§3.2) | 40 |

**Baseline: 194 violations.** That is the failing test this work makes pass. A visual
review catches taste; the harness catches regression — and it found INV-1, which
inspection had missed.

Thresholds come from this spec. Getting to green by relaxing an invariant is a defect,
not a pass.

## 9.1 Incidental defect found during inspection

Not responsive, but visible in the first fold and worth fixing in the same pass since the
file is being touched anyway:

- `StatementSection` reads **"HIPAA, SOC 2, GDPR complaint"** — should be **"compliant"**.

Flagged separately from the responsive work so it can be dropped if the requester wants
copy changes kept out of this branch.

## 10. Out of scope

- Other pages (`/services`, `/solutions`, `/industry`, `/blog`, …). They inherit the
  token layer and become a follow-up pass.
- The unused `IndustriesSection*` variants, `PartnersSection`, `CaseStudiesSection`,
  `TestimonialsSection`, `ChallengesSection` — not rendered on the home page. Not
  migrated, not deleted.
- Color, tone, copy, imagery, information architecture.
- Widths above 2560px — graceful, not specifically tuned.

## 11. Known consequences

1. **Sub-1280px views change.** Adopting the documented spacing scale makes sections
   noticeably airier on mobile and laptop. This is intended and was confirmed, but it is
   not a no-op and the baseline diff will show it everywhere.
2. **Section headings jump 30px → 48px at 1920px.** A large shift. Flagged for review
   after the first screenshots; dialing the `text-h2` maximum back to ~2.75rem is a
   one-line token change if it reads too loud.
3. **`ServicesSection` is 29KB.** Migrating it is the largest single unit of work on the
   page and may warrant splitting — to be assessed during implementation, not
   pre-committed here.
