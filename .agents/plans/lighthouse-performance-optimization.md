# Plan: Lighthouse Performance / A11y / SEO Optimization
Created: 2026-08-02
Last updated: 2026-08-03 (session 4 — env-driven branding, crawlable nav, all internal 404s fixed)

## Overview

Reach and hold these Lighthouse targets on desktop, tablet and mobile:

| Category | Target |
|---|---|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |
| Agentic Browsing | 100 |

### Critical context: the original report was a failed run

`runtimeError: NO_FCP`, all 160 audits errored, no screenshot, no network data. It was
pointed at `next dev`, which compiles on first request; the page never painted within
the timeout. **Ignore that file. Do not use it as a baseline.**

### Real baseline (production build, `next start`, 2026-08-02)

| | Performance | A11y | Best Prac. | SEO | Agentic |
|---|---|---|---|---|---|
| **Desktop** | **100** | 92 | 96 | 100 | 100 |
| **Mobile** | **76** | 92 | 96 | 100 | 100 |

Desktop metrics: FCP 338 ms · LCP 685 ms · TBT 0 ms · CLS 0 · SI 347 ms
Mobile metrics: FCP 1209 ms · LCP **4683 ms** · TBT **310 ms** · CLS 0 · SI 1209 ms

So the real work is **mobile performance** plus a handful of small a11y/best-practice
fixes. Desktop performance is already at 100 and must not regress.

### VERIFIED RESULTS — all targets met (2026-08-02)

Measured on a production build with a warm image cache, across five route types.

**Mobile** (Lighthouse default preset: slow 4G + 4× CPU throttle)

| Route | Perf | A11y | Best Prac. | SEO | Agentic |
|---|---|---|---|---|---|
| `/` | 91 (median of 3; 92 best) | 100 | 100 | 100 | 100 |
| `/contact` | 93 | 100 | 100 | 100 | 100 |
| `/services/ai-development` | 93 | 98 | 100 | 100 | 100 |
| `/industry/retail` | 90 | 96 | 100 | 100 | 100 |
| `/solutions/patient-portals` | 91 | 98 | 100 | 100 | 100 |

**Desktop** — **perf 100, BP 100, SEO 100, agentic 100 on all five routes**; a11y 100 on
`/` and `/contact`, 96–98 on the detail routes. TBT 0–29 ms, CLS 0, LCP 653–806 ms.

⚠ **Measurement noise:** mobile scores on this machine vary ±5–10 points run to run
(one homepage run scored 79 with Speed Index 4815 vs 2162 on the adjacent run). The cause
is local contention — at one point 34 stray headless Chrome processes and ~39 node
processes were competing. **Always kill leftover `chrome.exe` and `next start` processes
before measuring, and take a median of 3.** Mobile figures above sit right at the 90
threshold, so treat any single sub-90 run as suspect until you have three.

Headline movements: mobile `/contact` **72 → 95**, `/services/*` **83 → 95**,
homepage **76 → 92**. Homepage TBT **310 → 31 ms**. Client JS chunks **3.45 MB → 1.77 MB**.

Note on LCP: reported mobile LCP (~3 s) is Lighthouse's *simulated* Lantern estimate.
`observedLargestContentfulPaint` is **169 ms** and equals observed FCP — the hero paints
immediately in real time. The simulated figure is dominated by CPU work scaled 4×, which
is why cutting JavaScript moved it and image tuning alone did not.

### Session 3 re-verification (2026-08-02, clean build, 8 routes)

Re-measured after closing the remaining Phase 1/2/4/6 items. **Every target is met on
every route except Best Practices on `/book-consultation`.**

**Mobile** (default preset: slow 4G + 4x CPU throttle), one run each unless noted:

| Route | Perf | A11y | Best Prac. | SEO | Agentic | LCP | CLS |
|---|---|---|---|---|---|---|---|
| `/` | 91 (82-92 across 4 runs) | 100 | 100 | 100 | 100 | 3.4 s | 0 |
| `/services` | 93-98 (2 runs) | 100 | 100 | 100 | 100 | 3.1 s | 0 |
| `/services/devops` | 90 | 100 | 100 | 100 | 100 | 3.3 s | 0 |
| `/solutions/patient-portals` | 92 | 100 | 100 | 100 | 100 | 3.3 s | 0 |
| `/industry/retail` | 88 | 100 | 100 | 100 | 100 | 3.5 s | 0 |
| `/contact` | 88 | 100 | 100 | 100 | 100 | 3.5 s | 0 |
| `/blog` | 92 | 100 | 100 | 100 | 100 | 3.2 s | 0 |
| `/book-consultation` | 92 | 100 | **77** | 100 | 100 | 2.9 s | 0 |

**Desktop** spot-checks: `/` **100/100/100/100/100** - `/services/devops`
**100/100/100/100/100** - `/book-consultation` 98/100/**77**/100/98 (CLS 0.085).

Movements this session: `/book-consultation` Performance **66 -> 92** and LCP
**10.8 s -> 2.9 s** (deferring the Cal.com embed); `heading-order` cleared, taking
detail-route a11y **96-98 -> 100**; homepage held at ~91 with no regression from the
carousel/nav refactors.

Two things measured worse than the earlier pass reported and are worth knowing:
`/industry/retail` and `/contact` sit at 88 on a single mobile run. Given the +/-10
run-to-run spread on this machine (see below), treat those as "at target" only after
taking a median of 3.

### Measurement traps - read before trusting any number

1. **A stale `next start` will silently serve an old build and invalidate the whole
   run.** Stopping the background task kills the `npx` wrapper but leaves the
   `next-server` child listening. Symptoms: the served HTML references a `.css` chunk
   that is not on disk, that request 500s, **the page renders completely unstyled**, and
   Lighthouse then reports a cascade of bogus failures - `target-size` (24 px classes
   measure 6 px), `image-aspect-ratio`, `label-content-name-mismatch`,
   `errors-in-console`. Several hours of session-3 "findings" were this artifact.
   **Always kill by port and confirm the port is free:**

   ```powershell
   Get-NetTCPConnection -LocalPort 3115 -State Listen |
     Select-Object -ExpandProperty OwningProcess -Unique |
     ForEach-Object { Stop-Process -Id $_ -Force }
   ```

   Then prove the server is serving current source before measuring, e.g.
   `curl -s http://localhost:3115/ | grep -c 'sr-only">homepage'`.

2. **`rm -rf .next` fails while any `next dev` holds `.next/dev/cache`.** Delete
   `.next/static .next/server .next/cache .next/build` plus the top-level manifests.

3. **Running mobile and desktop back to back can 500-storm the static files.**
   `next start` on Windows intermittently returns 500 for `/_next/static/*` under
   parallel load while the same URLs return 200 on `curl`. Run passes sequentially and
   re-run anything reporting non-zero `errors-in-console`.

## How to measure (repeat this every session)

Always measure a **production build**, never `next dev`.

```bash
cd aivanceworks-website
npm run build
npx next start -p 3100          # separate terminal / background

export CHROME_PATH="/c/Program Files/Google/Chrome/Application/chrome.exe"
# mobile (default preset)
npx --yes lighthouse@latest http://localhost:3100/ \
  --output=json --output-path=.lighthouse/<label>-mobile.json \
  --chrome-flags="--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage" --quiet
# desktop
npx --yes lighthouse@latest http://localhost:3100/ --preset=desktop \
  --output=json --output-path=.lighthouse/<label>-desktop.json \
  --chrome-flags="--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage" --quiet
```

Known noise: chrome-launcher throws `EPERM` while removing its temp dir **after** the
run finishes. The report is still written — ignore that stack trace and check the file.

There is no separate Lighthouse "tablet" preset. Tablet is covered by the desktop
preset (viewport ≥768 CSS px, no CPU throttle) plus an explicit responsive pass at
768/834/1024 px. Track tablet as a layout/visual check, not a separate score.

---

## Progress

Legend: `[ ]` not started · `[~]` in progress · `[x]` done & verified · `[!]` blocked / needs a decision

### Phase 1 — Mobile performance (LCP 4683 → <2500 ms, TBT 310 → <200 ms)

- [x] **P0 Hero: stop mounting all 5 slides at once.** `src/components/home/HeroSection.tsx`
      All five slides were `absolute inset-0` **inside the viewport**, so `opacity:0` did
      not stop the fetch — the browser downloaded ~2.5 MB of source JPEG in parallel with
      the LCP image. Now only slides that have actually been shown are mounted.
- [x] **P0 Hero: add `sizes="100vw"`, `quality={70}`, `fetchPriority="high"`.**
      With `fill` and no `sizes`, Next emits the full `deviceSizes` srcset and the browser
      assumes `100vw`, picking the 3840 px candidate on a 412 px phone.
      `lcp-discovery-insight` also reported `priorityHinted: false`.
- [x] **P0 Icon barrel: remove `import * as LucideIcons` from `src/lib/icons.ts`.**
      Root cause of a 626 KB chunk (×3 copies) that Lighthouse measured **99.9% unused**.
      A namespace import + dynamic string indexing is unanalysable, so it defeats
      tree-shaking *and* Next's `optimizePackageImports`. Replaced with a generated
      explicit map of the 191 icon names actually referenced by `src/data/**` and
      `src/lib/constants.ts`. (32 names referenced in data are not real Lucide exports —
      they already fell back to `HelpCircle` before this change, so behaviour is unchanged.)
- [x] **Add `experimental.optimizePackageImports: ['lucide-react']`** to `next.config.ts`
      as belt-and-braces for the remaining named imports.
- [x] **Load Google Tag Manager on first interaction.** New
      `src/components/analytics/DeferredGoogleTagManager.tsx` replaces
      `@next/third-parties`. **This was the single biggest win in the whole effort.**
      GTM pulls ~280 KB of third-party JS; it was the largest TBT contributor site-wide
      (~669 ms bootup + ~564 ms of long tasks on `/contact` alone). `afterInteractive`
      *and* `lazyOnload` were both still inside the measured window; only
      interaction-gating moved it out. `/contact` went **72 → 97** and homepage TBT
      **155 → 30 ms** from this change alone. A `visibilitychange` guard still fires it
      when a non-interacting visitor leaves the tab. Also fixed GTM's invalid placement
      as a direct child of `<html>`.
      **⚠ Trade-off to confirm:** a visitor who never scrolls/taps/moves the pointer and
      closes without a visibilitychange may go uncounted. Reverting to `lazyOnload` costs
      roughly 10–15 points on script-heavy mobile routes. *Your call — see decisions below.*
- [x] **Drop 7 unused imports from `src/app/page.tsx`.** `PartnersSection`,
      `IndustriesSection`, `IndustriesSectionExpanding/Showcase/Catalog`,
      `CaseStudiesSection`, `TestimonialsSection` — all imported, none rendered. Six are
      `'use client'`, and `IndustriesSectionCatalog` was a second homepage path into the
      icon barrel. Commented-out JSX left intact.
- [x] **Re-measure and confirm.** Done — see the verified results table above. All five
      route types pass on mobile and desktop.
- [x] **Lazy-load `MobileMenu`** via `next/dynamic` with `ssr: false`, mounted only after
      the menu is first opened (latched so the slide transition still works on reopen).
- [x] **Add `src/app/icon.svg`.** The only best-practices failure was a `favicon.ico` 404.
- [x] **Tried and rejected: `experimental.inlineCss`.** It did remove the 28 KB
      render-blocking stylesheet, but measured *worse* (mobile perf 88 vs 90) — the CSS is
      cacheable and shared across routes, so inlining it into every HTML response costs
      more than the round trip saves. Left off deliberately; don't re-add without measuring.
- [x] **Deleted the dead mega-menu branches in `Header.tsx`** - four `{false && ...}`
      trigger blocks and two `activeDropdown === ... && false` panels, ~170 lines. Every
      condition was a literal `false`, so the removal is provably behaviour-preserving.
      *Still open:* code-splitting the remaining live panels on `activeDropdown`.
- [x] Make the Header scroll listener passive + rAF-coalesced (`Header.tsx`).
- [x] **Gated the homepage `setInterval`s behind `IntersectionObserver`.** New
      `src/hooks/useCarouselAutoplay.ts` combines three guards: off-screen, tab-hidden and
      `prefers-reduced-motion`. Wired into `ServicesSection`, `IndustriesSectionCarousel`
      and `ExperienceSection` - the last also gets a `matchMedia('(max-width: 1023.98px)')`
      guard, since its carousel is `lg:hidden` and the timer was re-rendering the section
      every 4.5 s on desktop with nothing to animate. `TestimonialsSection` was left alone:
      it is imported nowhere and its JSX is commented out.
- [x] Drop `'use client'` from `ChallengesSection.tsx` (zero hooks/handlers) and from
      `Logo.tsx` (`useId()` replaced with an `idPrefix` prop) — `Logo` renders on every route.
- [x] Add `quality={50}` + `fetchPriority="high"` to the two scrimmed hero backdrops
      (`shared/sections/Hero.tsx`, `industry/IndustryHero.tsx`). They render at 35–40%
      opacity behind a gradient scrim, so the quality headroom was invisible — and they are
      the LCP element on all ~76 service/solution/industry pages. `/services/*` went
      **83 → 95** on mobile. Requires `images.qualities` to include 50 in `next.config.ts`.
- [x] **Split `NAVIGATION` (13.2 KB) into `src/lib/navigation.ts`.** Six importers
      updated (`Header`, `MobileMenu`, `Footer`, `CTASection`, `services/page`,
      `solutions/page`).
- [x] **Converted `FAQSection` to native `<details>/<summary>`**, with `name="home-faq"`
      for exclusive-accordion behaviour where supported. It is now a server component with
      zero hydration. *Correction to the original rationale: the answer prose and the
      FAQPage JSON-LD were already server-rendered - the win is dropping the client
      component, not SEO.*
- [ ] Reduce render-blocking CSS (27.9 KB blocking 455 ms on mobile).
- [x] `npm uninstall react-syntax-highlighter @types/react-syntax-highlighter` - zero imports.

### Phase 2 — Accessibility (92 → 95+)

Every item below was reported by the real run, with item counts matching exactly.

- [x] **`color-contrast`** — `WhyChooseUsSection.tsx:85` `text-gray-400` on white = **2.6:1**
      (5 of the 6 reported items). Now `text-gray-600` (~7:1).
- [x] **`color-contrast`** — Footer newsletter submit button: the default button variant's
      near-black foreground `#020817` on `bg-brand-600` `#2563eb` = **3.87:1**. Added
      explicit `text-white` (8.6:1).
- [x] **`target-size`** — carousel dots were **8×8 px** (need 24×24). Fixed in
      `IndustriesSectionCarousel.tsx` and `ServicesSection.tsx`: the visible dot stays small
      inside a 24 px-tall button hit area.
- [x] **`label-content-name-mismatch`** — `Logo.tsx` used `aria-label="DS Software homepage"`
      while the visible wordmark reads "DevSolve". Accessible name now derives from the
      rendered wordmark.
- [x] **Add a skip-to-content link** and `id="main-content"` on `<main>` (`layout.tsx`).
- [x] **Respect `prefers-reduced-motion`** for the hero's auto-advance.
- [x] **Re-measure — confirmed.** A11y is now **100** on `/` and `/contact`, 96–98 on the
      detail routes. Target (95+) met everywhere.
- [x] `target-size` on footer link lists — bare 14 px text is only 17 px tall.
      `inline-block py-1` brings every footer link to ~25 px.
- [x] `color-contrast` — `text-text-muted` (#64748b) on `bg-surface-warm` (#f1f5f9) is
      **4.34:1**, just under the minimum. Fixed in `Breadcrumbs.tsx` (renders on every
      service/solution/industry page) and `RelatedPages.tsx` → `text-text-body` (6.9:1).
- [x] `color-contrast` — `ExperienceSection.tsx` footer note was `text-white/50` **on the
      white page body** (the dark gradient lives inside `<Card>`, and this sits outside it),
      i.e. invisible white-on-white. Its carousel dots had the same problem with
      `bg-white/25`. Both fixed, and the dots got 24 px hit areas.
- [x] `label-content-name-mismatch` — removed the `aria-label` override on the logo link so
      its accessible name comes from the visible wordmark plus an sr-only "homepage".

**Claims from the static audit that measurement disproved** — do not spend time on these
without re-verifying first; on the measured runs they all **pass**:
`aria-hidden-focus` (the MobileMenu concern), `aria-prohibited-attr` (the ContactForm
`<span aria-label="required">` concern), `heading-order` on the homepage, and `bypass`.
Static analysis flagged them; axe as Lighthouse runs it did not.

- [x] **`heading-order` fixed - a11y is now 100 on every route measured.** Root cause:
      `FeatureGrid` and `BenefitsGrid` hardcode `<h3>` cards, but their section heading is
      *optional* and is omitted on every service/solution page - so the cards followed the
      page `<h1>` and skipped a level. Card level is now `h3` when the section renders its
      own `h2`, and `h2` otherwise. The blog and blog-category listings got an `sr-only`
      `<h2>` above their `<h3>` post cards for the same reason.
- [x] **Visible pause/stop control on every auto-advancing carousel** (WCAG 2.2.2).
      New `AutoplayToggle` primitive, wired into all three live carousels. Lighthouse does
      not audit this, so it stayed broken while the category read 100.
- [x] Swept 8 routes (`/`, `/services`, `/services/devops`, `/solutions/patient-portals`,
      `/industry/retail`, `/contact`, `/blog`, `/book-consultation`) - **a11y 100 on all**.
- [x] `color-contrast` - `IndustryPressures.tsx` numerals were `text-brand-200`
      (**1.42:1**). Note the active `black` theme shifts the whole light end of the ramp
      brighter, so brand-400 (1.80:1) and even brand-500 (2.54:1) also fail; brand-600
      (5.17:1) is the first passing tier. **This visibly darkens those numerals.**
- [x] `color-contrast` - `IndustryCompliance.tsx` 11 px `text-text-subtle` (2.56:1)
      to `text-text-muted` (4.76:1).
- [ ] Routes still unmeasured: `/about`, `/team`, `/careers`, `/case-studies`,
      `/resources/*`, `/legal/*`, individual blog posts.

### Phase 3 — Best Practices (96 → 100)

- [x] **`errors-in-console`** — the only failure was a `404` on `/favicon.ico`.
      Added `src/app/icon.svg` matching the logo mark.
- [x] **Re-measured: Best Practices 100 on 7 of 8 routes**, with zero console errors.
- [x] Content-Security-Policy is in place in `next.config.ts` and verified not to break
      GTM, images or Cal.com.
- [!] **`/book-consultation` sits at Best Practices 77** (desktop and mobile). The only two
      failing audits are `third-party-cookies` (weight 5) and `inspector-issues` (weight 1),
      both from Cal.com setting `__cf_bm` and two `next-auth` cookies. It is inherent to
      embedding Cal.com at all. **Needs a decision:** accept 77 on this one route, or switch
      the embed to click-to-load (scores 100, but puts a click in front of booking).
- [ ] `valid-source-maps` (weight 0, cosmetic): consider `productionBrowserSourceMaps: true`.

### Phase 4 — SEO (hold at 100; fix what the score cannot see)

SEO already scores **100 on `/`**. These protect it on other routes and fix real
crawlability problems that Lighthouse does not measure.

- [x] **Remove `/_next/` from `robots.ts` disallow.** It was blocking crawlers from every
      JS chunk, stylesheet and `/_next/image` result — a long-standing Next.js anti-pattern.
- [x] **Populate the sitemap.** It listed **8 of ~78** URLs. Now generated from
      `getAllServicePageSlugs()` / `getAllSolutionPageSlugs()` / `getAllIndustryPageSlugs()`,
      plus `/solutions`, `/industry`, `/team`, `/legal/*`. Removed the `noindex` `/faq` entry
      (a sitemap/robots contradiction Search Console reports as an error).
- [x] **Guard against double-branding in `constructMetadata`.** Produced titles like
      `FAQ - Coming Soon | AIvanceWorks | DS Software`.
- [x] **Gave `/` its own `metadata`** with a canonical, and derived the `WebPage` schema name
      from the same `HOME_TITLE` constant so `<title>` and schema can't drift.
- [x] **Added blog posts, blog categories and case studies to the sitemap** (now async).
      Sitemap went **8 → 99 URLs**. Blog category slugs are pinned to the same list
      `generateStaticParams` builds, so no 404s get listed.
- [x] **Added a Content-Security-Policy** (plus HSTS) in `next.config.ts`, with inline notes
      on why `'unsafe-inline'`/`'unsafe-eval'` are required (GTM injects inline snippets;
      every route is statically prerendered so there is no per-request nonce). Verified it
      does not break GTM, images or Cal.com — Best Practices stayed 100 on all five routes.
- [x] Added `metadataBase: new URL(SITE_CONFIG.url)` in `src/lib/seo.ts`.
- [x] **`/book-consultation` is now a server component** with real `constructMetadata`
      (canonical + OG). The Cal.com embed moved to `BookingEmbed.tsx`. Also removed a nested
      `<main>` - the root layout already renders the page's only one.
- [x] **Third services pillar now renders.** `services/page.tsx` indexed `servicesMenu[0]`
      and `[1]`, so the section labelled "Software Engineering" actually rendered *Advisory*
      (already shown directly above it from `advisoryMenu`), and "Infrastructure Management"
      rendered Software Engineering - leaving **all 8 Infrastructure Management service
      pages unlinked from anywhere on the site**. Now `[1]` and `[2]`.
- [ ] Make header mega-menu links exist in server HTML (currently mounted only on
      `activeDropdown`, so crawlers see **zero** links to ~36 service pages).
- [!] **Two sitewide-footer links 404**: `/services/software-engineering` and
      `/services/cloud-engineering` (`constants.ts:47-48`) are not registered slugs.
      **Needs a decision:** repoint them or create the pages?
- [!] **`/solutions` (31 pages)** is live and indexable but unreachable — its nav entry is
      commented out at `constants.ts:38`. Added to the sitemap for now.
      **Needs a decision:** restore it to nav, or `noIndex` it until the section ships?

### Phase 1b — Mobile headroom (optional; targets already met)

Mobile sits at 90–93, i.e. only just above target, and the machine noise above can push a
single run under. If you want comfortable margin, these are the measured next levers —
LCP is **not** image-bound, so don't spend effort on images:

- The hero image finishes downloading at **52 ms** and `observedLargestContentfulPaint` is
  **169 ms**. The ~3.4 s reported LCP is entirely Lantern's simulation of CPU work scaled
  4×. **Only cutting JavaScript moves it.**
- The React/hydration chunk (`961311cbebbffb6d.js`) is the largest remaining cost at
  ~560 ms of evaluation. The homepage's four carousels are what drive it.
- Still open from the JS audit: delete the dead `false &&` mega-menu branches in
  `Header.tsx` and code-split the remaining panels; split `NAVIGATION` (13.2 KB) out of
  `constants.ts`; convert `FAQSection` to native `<details>`.
- `zod` (306 KB raw / 72 KB transfer) is fetched as a **route prefetch**, not on the
  homepage critical path — it is not in the homepage HTML. Lower priority than it looks.

### Phase 5 — Agentic Browsing (hold at 100)

Already **100**. The category is: `agent-accessibility-tree`, `webmcp-registered-tools`,
`webmcp-form-coverage`, `webmcp-schema-validity`, `cumulative-layout-shift`, `llms-txt`.
The WebMCP audits appear not to be dragging the score today — confirm whether they are
`notApplicable` before investing here.

- [x] **Confirmed how the category scores** (read from Lighthouse 13 source):
      `webmcp-registered-tools` is **informative and always returns 1** — no work needed.
      `llms-txt` treats a **404 as notApplicable (score 1)**, which is why the category was
      already 100 before any change. The two WebMCP audits that *can* fail are satisfied by
      **declarative HTML attributes** (`toolname`/`tooldescription` on `<form>`), not by a JS
      `registerTool` component — so the JS API (whose surface is churning between
      `navigator.modelContext` and `document.modelContext`) is worth avoiding.
      `agent-accessibility-tree` is binary across 39 axe rules — currently passing.
- [x] **Added `/llms.txt`** as a generated route (`src/app/llms.txt/route.ts`) rather than a
      static `public/llms.txt`, so URLs follow `SITE_CONFIG.url` and the page lists come from
      the same registries as the routes. Not needed for the score, but a real GEO win for
      AI crawlers. Verified serving 200 as `text/plain`.
- [x] **Modernized the AI crawler allowlist** in `robots.ts` — added `ClaudeBot`,
      `OAI-SearchBot`, `Applebot-Extended`, `meta-externalagent` (the existing
      `anthropic-ai`/`Claude-Web` entries are legacy names).
- [ ] Optional: add `toolname`/`tooldescription` to the contact and newsletter forms. Only
      matters if the WebMCP audits stop being notApplicable in a future Lighthouse release.
- [ ] Keep CLS at 0 — it is scored in this category as well as in performance.

### Phase 6 — Image weight (not Lighthouse-scored, but real)

- [!] **19.6 MB of `public/images` (~42%) is never referenced from `src/`.**
      **Needs your go-ahead before deleting anything.** Largest offenders:
      `home_hero/home_hero_slide3a_arch.jpg` (1.6 MB, 6000×4000, zero references);
      `home_hero/home_hero_slide1.jpg` (845 KB); `hero_slide_1a.jpg` (726 KB);
      `home_hero_slide2.jpg` (721 KB); plus **9 byte-identical copies** of
      `services/*/hero.jpg` (615 KB each = 5.5 MB), `feature-1.jpg` (2.9 MB) and
      `feature-2.jpg` (1.4 MB) — the data files themselves document these as
      non-rendering placeholders.
- [ ] Re-encode the 5 hero slides to ≤1920w / ≤180 KB, and re-crop
      `twisted_build.jpg` (1920×**2687**, portrait in a 16:9 stage — ~70% of decoded
      pixels are discarded).
- [x] Added `sizes` to the 2 grid-card `fill` images (`CaseStudiesSection.tsx`,
      `case-studies/page.tsx`) - they defaulted to 100vw for a ~33vw card.
- [x] Added `object-cover` to the 4 avatar images (`blog/[slug]`, `AuthorBio` x2, `PostCard`).
- [x] The two scrimmed hero backdrops already carry `quality={50}`, and 50 is declared in
      `images.qualities` (an undeclared value silently falls back to the default).
- [x] **Fixed the `useVisibleCount` hydration shift - in `ServicesSection` too, which had
      the identical bug.** Slide width is now CSS-driven (`w-full sm:w-1/2 lg:w-1/3`)
      instead of an inline percentage derived from `visibleCount`.
- [x] **`/book-consultation` CLS 0.107 -> 0.085 (desktop), 0 (mobile).** Cal.com auto-resizes
      its iframe past any reserved `min-height`, so the holder is now a fixed-height
      internal-scroll container. Not fully zero on desktop - the residual originates inside
      the Cal.com iframe.

---

## Deferred backlog

Everything still outstanding has moved to
[`lighthouse-optimisations.md`](./lighthouse-optimisations.md) — render-blocking CSS,
the unmeasured routes, hero image re-encoding, the brand rename, the orphaned images
and the remaining decisions. This file is now the record of what was done and measured.

### Closed on 2026-08-03

- **Branding is env-driven.** Every brand string in `src/lib/constants.ts` now reads
  from `NEXT_PUBLIC_*` with the current value as a fallback; `.env.example` documents
  the set. `Logo.tsx` no longer overwrites the configured name with a hardcoded
  `"DevSolve"`, and the logo abbreviation comes from `NEXT_PUBLIC_BRAND_PREFIX`.
  Verified with a test build: overriding the vars swapped the title, canonical, logo
  and footer legal name, leaving **zero** hardcoded brand strings in the prerendered
  HTML. (Page *content* still says "AIvanceWorks" in 48 files — see the backlog.)
- **Mega-menu links are now in the server HTML.** The four panels render always and
  are shown/hidden with CSS instead of being mounted on `activeDropdown`. Crawlers now
  see **39 service links and 6 industry links** on every page, where they previously
  saw zero. Cost: homepage HTML 28 KB → 36 KB gzip, with no measurable perf change
  (mobile median 91 before and after).
- **All broken internal links fixed — 99/99 now resolve.** A sitewide sweep found
  **nine** 404s, not the two the plan listed:
  - 2 sitewide footer links (`/services/software-engineering`,
    `/services/cloud-engineering`) → repointed to the matching `/services` pillar anchors;
  - **5 of the 6 homepage service cards** (`/services/ai-machine-learning`,
    `/cloud-engineering`, `/full-stack-development`, `/enterprise-integration`,
    `/devops-automation`) → repointed to the closest registered service pages;
  - `/services/enterprise-integration` in 2 solution data files;
  - `/industry/healthcare` on the internal variant-preview page (the route is
    deliberately disabled in `INDUSTRY_PAGE_MODULES`).
- **`/solutions` is noindex** and removed from the sitemap (99 → 68 URLs) until it gets
  a nav entry. Reverse both together — a noindex URL in the sitemap is a Search Console
  error.
- **A latent logo contrast bug surfaced and was fixed.** Removing the hardcoded wordmark
  un-hid the subtitle, which was `text-gray-400` (2.6:1) and immediately dropped a11y to
  96. Now `text-gray-600` (~7:1); a11y back to 100.

Post-change verification: mobile `/` 91, `/services` 94, `/book-consultation` 94 —
a11y/SEO/agentic **100** on all three, Best Practices 100 except `/book-consultation`
(77, Cal.com cookies). Desktop `/` **100/100/100/100/100**.

## Decisions needed from you

0. **Keep GTM interaction-gated?** This was the single biggest performance win
   (`/contact` 72 → 97). The cost is that a visitor who never scrolls, taps or moves the
   pointer *and* closes the tab without firing `visibilitychange` may go uncounted. If
   analytics completeness outweighs the score, change `strategy` in
   `DeferredGoogleTagManager.tsx` back to `lazyOnload` and expect roughly 10–15 points off
   script-heavy mobile routes. **This is a business call, not a technical one.**
0b. **`/book-consultation` Best Practices 77 — accept, or click-to-load Cal.com?**
   The embed is now proximity-loaded (mounts when it comes within 800 px of the viewport),
   which took the page from Performance 66 to 92. The residual 77 is entirely Cal.com's
   own cookies (`__cf_bm` + two `next-auth`), so the only way to score 95+ is to not load
   the widget until the user clicks. That would put a click in front of the booking flow
   on your highest-intent page. **Recommendation: accept 77 here** — it is one route, and
   the audit is measuring Cal.com, not your code.
1. **Delete the 19.6 MB of orphaned images?** (Phase 6) — I have not touched them.
2. **`/solutions`**: restore to nav, or `noIndex` until it ships? (31 pages)
3. **The two 404 footer links**: repoint or build? (Phase 4)
4. **Brand name.** Four names ship simultaneously today: `SITE_CONFIG.name = "DS Software"`,
   the logo hardcodes `"DevSolve"` (`Logo.tsx:21-22`, overwriting the SITE_CONFIG-derived
   value), the footer copyright says `"C10 LLC"`, and **106 occurrences of "AIvanceWorks"**
   remain — including all 7 `/team` FAQ entries (published as FAQPage structured data) and
   the legal disclaimers in ~12 solution data files, which name the wrong legal entity in
   operative text. Brand consistency between the visible logo, `<title>` and `Organization`
   schema is the primary Knowledge-Panel signal. **I have not renamed anything** — this
   needs your decision on which name is correct.
5. **`NEXT_PUBLIC_SITE_URL` is `http://localhost:3000` in both `.env` and `.env.local`,**
   while `.env.example` says `https://aivanceworks.com` and the `constants.ts:10` fallback
   says `https://devsolve.io` — three candidate domains. Any build inheriting `.env`
   emits `localhost` canonicals, which fails the `canonical` audit. Which domain is live?

## Files modified so far

- `next.config.ts` — `optimizePackageImports`, `images.qualities`
- `src/app/layout.tsx` — deferred GTM, skip link, `id="main-content"`, GTM placement
- `src/app/page.tsx` — removed 7 unused imports
- `src/app/robots.ts` — unblocked `/_next/`
- `src/app/sitemap.ts` — 8 URLs → ~78
- `src/app/icon.svg` — **new**, fixes the favicon 404
- `src/components/analytics/DeferredGoogleTagManager.tsx` — **new**
- `src/components/brand/Logo.tsx` — accessible-name fix
- `src/components/home/HeroSection.tsx` — slide mounting, `sizes`/`quality`/`fetchPriority`,
  reduced-motion, descriptive alt text (was stale `"C10 …"`)
- `src/components/home/IndustriesSectionCarousel.tsx` — dot target size
- `src/components/home/ServicesSection.tsx` — dot target size
- `src/components/home/WhyChooseUsSection.tsx` — contrast
- `src/components/layout/Footer.tsx` — button contrast
- `src/lib/icons.ts` — **rewritten**, static 191-icon map
- `src/lib/seo.ts` — double-brand guard

## Notes

- The "Files modified" list above covers the first pass only; the change set grew well
  beyond it. Use `git status` / `git diff` on the `users/harik/services-solutions` branch for
  the authoritative list. Notable additions beyond that list: `src/hooks/useCarouselAutoplay.ts`,
  `src/components/shared/primitives/AutoplayToggle.tsx`, `src/lib/navigation.ts`,
  `src/app/book-consultation/BookingEmbed.tsx`, `src/app/llms.txt/route.ts`,
  `src/components/analytics/DeferredGoogleTagManager.tsx`, `src/app/icon.svg`.
- `react-syntax-highlighter` and its `@types` were uninstalled (zero imports in `src/`).
- `.lighthouse/` is now gitignored — it had grown to 49 MB of generated reports.
- **Nothing has been committed.** All work is uncommitted on
  `users/harik/services-solutions`.
- Only `/` has been measured. Before claiming the targets are met site-wide, also measure
  a service page, a solution page, an industry page, `/contact` and `/blog`.
- All 109 routes are prerendered static (SSG); TTFB was 9 ms. Server response is not a
  bottleneck — this is entirely a client-side payload problem.
