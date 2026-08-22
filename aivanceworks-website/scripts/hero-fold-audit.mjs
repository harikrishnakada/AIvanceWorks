#!/usr/bin/env node
/**
 * Page hero fold audit.
 *
 * Measures the shared `Hero` on every service and solution page and reports how
 * far its section bottom lands from the fold. This is the test command for
 * src/styles/page-hero-fold.css: 0 means the hero ends exactly at the viewport
 * bottom, negative means it stops short and the next section peeks in, positive
 * means the copy outgrew the fold and the page needs a scroll.
 *
 *   node scripts/hero-fold-audit.mjs                 # summary per viewport
 *   node scripts/hero-fold-audit.mjs --detail 1440x900   # per-page at one size
 *
 * Env: BASE_URL (default http://localhost:3000). Point it at `next start`, not
 * `next dev` — dev's injected overlay shifts nothing here, but the unminified
 * CSS load order has bitten this measurement before.
 */
import { chromium } from 'playwright-core';

const BASE = process.env.BASE_URL ?? 'http://localhost:3000';
const args = process.argv.slice(2);
const DETAIL = args.includes('--detail') ? args[args.indexOf('--detail') + 1] : null;

/** Heights chosen to straddle every tier boundary in page-hero-fold.css. */
const VIEWPORTS = [
  { w: 375, h: 667 },
  { w: 390, h: 844 },
  { w: 414, h: 896 },
  { w: 768, h: 1024 },
  { w: 1024, h: 768 },
  { w: 1280, h: 720 },
  { w: 1366, h: 768 },
  { w: 1440, h: 900 },
  { w: 1920, h: 1080 },
  { w: 2560, h: 1440 },
];

const browser = await chromium.launch({ channel: 'chrome' });

/* Solution pages are not in the sitemap, so they come off the listing page. */
const discover = await browser.newPage();
await discover.goto(`${BASE}/sitemap.xml`);
const services = [
  ...new Set(
    [...(await discover.content()).matchAll(/(\/services\/[a-z0-9-]+)</g)].map((m) => m[1])
  ),
];
await discover.goto(`${BASE}/solutions`);
const solutions = [
  ...new Set(
    [...(await discover.content()).matchAll(/href="(\/solutions\/[a-z0-9-]+)"/g)].map((m) => m[1])
  ),
];
await discover.close();

const PAGES = [...services, ...solutions];

/** Section bottom relative to the fold, plus the copy metrics that explain it. */
const probe = () => {
  const section = document.querySelector('[data-section="hero"]');
  if (!section) return null;
  const h1 = section.querySelector('h1');
  const lede = section.querySelector('[data-hero-lede]');
  const metrics = section.querySelector('[data-hero-metrics]');
  const lines = (el) =>
    el ? Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight)) : 0;
  return {
    bottom: Math.round(section.getBoundingClientRect().bottom),
    h1Lines: lines(h1),
    ledeLines: lines(lede),
    ledeChars: lede ? lede.textContent.trim().length : 0,
    metrics: metrics ? metrics.children.length : 0,
  };
};

const measure = async (vp) => {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
  const rows = [];
  for (const url of PAGES) {
    await page.goto(BASE + url, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => document.fonts.ready);
    const r = await page.evaluate(probe);
    if (r) rows.push({ url, delta: r.bottom - vp.h, ...r });
  }
  await page.close();
  return rows;
};

console.log(`${PAGES.length} pages (${services.length} services, ${solutions.length} solutions)`);

if (DETAIL) {
  const [w, h] = DETAIL.split('x').map(Number);
  const rows = (await measure({ w, h })).sort((a, b) => b.delta - a.delta);
  console.log(`\n${DETAIL} — delta  h1L ledeL ledeChars met  url`);
  for (const r of rows) {
    console.log(
      `${String(r.delta > 0 ? '+' + r.delta : r.delta).padStart(11)}  ` +
        `${String(r.h1Lines).padEnd(3)} ${String(r.ledeLines).padEnd(5)} ` +
        `${String(r.ledeChars).padEnd(9)} ${String(r.metrics).padEnd(4)} ${r.url}`
    );
  }
} else {
  console.log('\nvp            exact   over>4px  medianOver  worst');
  for (const vp of VIEWPORTS) {
    const rows = await measure(vp);
    const over = rows.filter((r) => r.delta > 4).map((r) => r.delta).sort((a, b) => a - b);
    const worst = rows.reduce((a, r) => (r.delta > a.delta ? r : a), rows[0]);
    console.log(
      `${`${vp.w}x${vp.h}`.padEnd(13)} ` +
        `${`${rows.filter((r) => Math.abs(r.delta) <= 4).length}/${rows.length}`.padEnd(7)} ` +
        `${String(over.length).padEnd(9)} ` +
        `${String(over.length ? over[Math.floor(over.length / 2)] : 0).padEnd(11)} ` +
        `${worst.url} +${worst.delta}`
    );
  }
}

await browser.close();
