# Lighthouse Optimisations — Deferred Backlog
Created: 2026-08-03

Work identified during the Lighthouse effort that is **not yet done**. The completed
work and the verified score history live in
[`lighthouse-performance-optimization.md`](./lighthouse-performance-optimization.md);
this file is only the outstanding list.

**Current state: all targets met on every route measured, except Best Practices on
`/book-consultation`.** Nothing below is required to hold the targets — these are
headroom, coverage and hygiene items.

Before measuring anything here, read the "Measurement traps" section of the main plan.
A stale `next start` will silently serve an old build and produce a page of fictional
failures.

---

## 1. Mobile performance headroom

Mobile sits at 88–94 depending on route, i.e. only just above the 90 target, and
run-to-run noise on this machine is ±10. These are the measured levers.

### 1.1 Render-blocking CSS — the largest remaining lever
- **Cost:** 28.2 KB blocking ~456 ms. Mobile LCP is dominated by *element render
  delay* (~930 ms observed), not image fetch (~291 ms).
- **Already tried and rejected:** `experimental.inlineCss`. It removed the blocking
  request but measured **worse** (mobile perf 88 vs 90) — the stylesheet is cacheable
  and shared across all routes, so inlining it into every HTML response costs more
  than the round trip saves. There is a comment in `next.config.ts` recording this.
  **Do not re-add it without measuring.**
- **What is actually left:** route-level CSS splitting, so a service page does not
  download the homepage carousel and blog styles. This is real work with an uncertain
  payoff — scope it before committing to it.

### 1.2 Code-split the live mega-menu panels
The four panels are now always in the DOM (deliberately — see §3.1 of the main plan;
it is what made the nav crawlable). They add ~8 KB gzip to every page's HTML.
Measured impact on the homepage was nil (median 91 before and after), so this is
cleanup rather than a fix. If the panels grow, revisit.

### 1.3 Hero image re-encoding
- Re-encode the 5 homepage hero slides to ≤1920w / ≤180 KB.
- Re-crop `twisted_build.jpg` — it is 1920×**2687**, a portrait image in a 16:9
  stage, so roughly 70% of the decoded pixels are discarded.

Not Lighthouse-scored at this point (the hero already downloads in ~52 ms locally),
but it is real bandwidth for users on slow connections.

---

## 2. Coverage gaps

### 2.1 Routes never measured
Only 8 of 111 routes have been audited. Still unmeasured:
`/about`, `/team`, `/careers`, `/case-studies`, `/case-studies/[slug]`,
`/resources/*`, `/legal/*`, `/faq`, `/industry`, and individual blog posts.

Cheapest high-value item in this file. `/team` is worth doing first: it publishes
FAQPage structured data, so an error there is visible to Google.

### 2.2 Tablet
No Lighthouse preset covers it. Needs an explicit responsive pass at 768 / 834 /
1024 px as a layout check, not a score.

---

## 3. Known-remaining defects

### 3.1 `/book-consultation` Best Practices 77
The only two failing audits are `third-party-cookies` (weight 5) and
`inspector-issues` (weight 1), both caused by Cal.com setting `__cf_bm` and two
`next-auth` cookies. Inherent to embedding Cal.com at all.

The embed is already proximity-loaded (mounts within 800 px of the viewport), which
took the page from Performance 66 to 94. The only way to reach BP 95+ is click-to-load,
which puts a click in front of the booking flow. **Recommendation: accept 77 here.**

### 3.2 Desktop CLS on `/book-consultation` is 0.085, not 0
Inside the "good" threshold (<0.1) but not zero. The holder is a fixed-height
internal-scroll container, so the skeleton→iframe swap is zero-shift; the residual
originates inside the Cal.com iframe and is not directly controllable.

### 3.3 `valid-source-maps`
Weight 0, purely cosmetic. Consider `productionBrowserSourceMaps: true` if you want
readable stack traces in production error reporting.

### 3.4 WebMCP form attributes
Optional. `webmcp-form-coverage` and `webmcp-schema-validity` are satisfied by
declarative `toolname` / `tooldescription` attributes on `<form>`, not by a JS
`registerTool` call. Currently `notApplicable`, so the category scores 100 without
them. Only worth doing if a future Lighthouse release starts scoring them.

---

## 4. Brand consistency — partially resolved

**Done (2026-08-03):** every brand string in `src/lib/constants.ts` is now env-driven
(`NEXT_PUBLIC_SITE_NAME`, `NEXT_PUBLIC_BRAND_PREFIX`, `NEXT_PUBLIC_COMPANY_LEGAL_NAME`,
plus URL, description, slogan, socials and address). `.env.example` documents the full
set. Verified with a test build: overriding the vars swapped the `<title>`, canonical,
logo abbreviation, footer legal name and schema — with **zero** occurrences of any
hardcoded brand left in the prerendered HTML.

**Still outstanding:** the *content* has not been renamed.
- **"AIvanceWorks" appears in 48 source files** and reaches **40 prerendered pages**.
  These are prose and metadata strings in page components and data files, not
  `SITE_CONFIG` references. Highest-risk instances:
  - all 7 `/team` FAQ entries, which are published as FAQPage structured data;
  - legal disclaimers in ~12 solution data files, which name the wrong legal entity
    in operative text — worth a legal read, not just a find-and-replace.
- **"C10 " appears in 19 source files**, mostly as navigation label prefixes.
  `BRAND_PREFIX` now drives the nav labels, so check whether these are leftovers.

A blanket find-and-replace is not safe here because the legal copy needs to name the
correct registered entity. Do the `/team` FAQ and the legal disclaimers deliberately.

---

## 5. Environment — one deploy blocker

`NEXT_PUBLIC_SITE_URL` is `http://localhost:3000` in both `.env` and `.env.local`.
That is correct for local development, but **any production build that inherits those
files ships localhost canonicals sitewide** and fails the `canonical` audit. Confirmed:
the built pages emit `<link rel="canonical" href="http://localhost:3000/...">`.

Set it explicitly in the hosting provider's environment. The domain has not been
decided — `.env.example` says `aivanceworks.com`, the `constants.ts` fallback says
`devsolve.io`.

Note the `NEXT_PUBLIC_*` values are inlined at **build** time (all 111 routes are
statically prerendered), so changing one requires a rebuild, not just a restart.

---

## 6. Content / asset cleanup

### 6.1 19.6 MB of orphaned images — awaiting a decision
~42% of `public/images` is never referenced from `src/`. **Not actioned.** Largest:
- `home_hero/home_hero_slide3a_arch.jpg` — 1.6 MB, 6000×4000, zero references
- `home_hero/home_hero_slide1.jpg` — 845 KB
- `hero_slide_1a.jpg` — 726 KB
- `home_hero_slide2.jpg` — 721 KB
- **9 byte-identical copies** of `services/*/hero.jpg` — 615 KB each = 5.5 MB
- `feature-1.jpg` (2.9 MB) and `feature-2.jpg` (1.4 MB)

These do not affect Lighthouse (unreferenced files are never fetched) but they inflate
the repo and every deploy.

### 6.2 Two industry pages exist as data but are disabled
`healthcare` and `banking` have full data files in `src/data/industries/` but are
commented out of `INDUSTRY_PAGE_MODULES` in `src/lib/content.ts`, so `/industry/healthcare`
and `/industry/banking` 404. The dangling link to healthcare has been removed from
`IndustriesSection.tsx`; the data files are untouched. **Decide:** ship them or delete them.

### 6.3 `/industries-preview` is an internal scratch page
Three Industries variants stacked for comparison. Already `noindex` and unlinked. Its
own header comment says "Delete once a variant ships" — `IndustriesSectionCarousel` has
shipped on the homepage, so this can probably go.

### 6.4 `/solutions` is noindex
31 built pages, deliberately `noindex` and excluded from the sitemap until the section
gets a nav entry. To ship it, reverse **all three** together: remove `noIndex` from
`src/app/solutions/page.tsx` and `src/app/solutions/[slug]/page.tsx`, re-add the URLs
in `src/app/sitemap.ts`, and uncomment the nav entry in `src/lib/navigation.ts`.

---

## 7. Watch items

- **`.env` contains live secrets** (a Sanity API token and a Resend key). It is
  gitignored and untracked, so nothing is committed — but rotate them if that file has
  ever been shared.
- **Internal links are currently 100% clean** (99/99 resolve). Nine 404s were fixed on
  2026-08-03; five of them were homepage service cards. Re-run the sweep after any nav
  or data change:

  ```bash
  # extract every internal href from the prerendered HTML, then check each
  node -e "const fs=require('fs'),path=require('path'),l=new Set();(function w(d){
    for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name);
    if(e.isDirectory())w(f);else if(e.name.endsWith('.html'))
      for(const m of fs.readFileSync(f,'utf8').matchAll(/href=\"(\\/[^\"#?]*)/g)){
        const u=m[1];if(/^\\/(_next|images)|\\.(svg|xml|txt|ico)$/.test(u))continue;
        l.add(u.replace(/\\/$/,'')||'/');}}})('.next/server/app');
    console.log([...l].sort().join('\\n'))" > links.txt
  while read -r u; do c=$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:3124$u");
    [ "$c" != 200 ] && echo "$c $u"; done < links.txt
  ```

- **GTM is interaction-gated.** Biggest single performance win in the effort, but a
  visitor who never scrolls, taps or moves the pointer *and* closes without firing
  `visibilitychange` may go uncounted. Reverting to `lazyOnload` costs roughly 10–15
  points on script-heavy mobile routes. Business call, recorded in the main plan.

---

## Suggested order

1. **Set `NEXT_PUBLIC_SITE_URL` in the deploy environment** (§5) — blocks a correct launch.
2. **Rename the `/team` FAQ and the solution legal disclaimers** (§4) — structured data
   and legal copy currently name the wrong entity.
3. **Measure the 10 unaudited routes** (§2.1) — cheap, and the only way to know the
   scores hold sitewide.
4. Decide on the orphaned images, the two disabled industry pages, and `/solutions` (§6).
5. Only then consider render-blocking CSS (§1.1), which is the most effort for the
   least certain gain.
