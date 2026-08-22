#!/usr/bin/env node
/**
 * Responsive audit harness.
 *
 * Measures the home page at every target width and asserts the invariants from
 * docs/superpowers/specs/2026-08-19-responsive-home-design.md. This is the test
 * command for the responsive work: visual review catches taste, this catches
 * regressions.
 *
 *   node scripts/responsive-audit.mjs                  # assert, exit 1 on failure
 *   node scripts/responsive-audit.mjs --report         # print measurements, always exit 0
 *   node scripts/responsive-audit.mjs --url /services  # audit another page
 *   node scripts/responsive-audit.mjs --shots <dir>    # also write screenshots
 *
 * Env: BASE_URL (default http://localhost:3000)
 */
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:3000';
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const val = (n, d) => (args.includes(n) ? args[args.indexOf(n) + 1] : d);

const PATH_ = val('--url', '/');
const REPORT_ONLY = flag('--report');
const SHOT_DIR = val('--shots', null);

/** Widths that must be correct. Heights chosen to exercise first-fold.css tiers. */
const VIEWPORTS = [
  { w: 375, h: 667, label: 'phone' },
  { w: 768, h: 1024, label: 'tablet' },
  { w: 1024, h: 768, label: 'small-laptop' },
  { w: 1280, h: 720, label: 'laptop-720' },
  { w: 1440, h: 900, label: 'laptop-900' },
  { w: 1920, h: 1080, label: 'desktop-fhd' },
  { w: 2560, h: 1440, label: 'desktop-qhd' },
];

/** Container `default` caps, keyed by the breakpoint floor that applies. */
function expectedContainerCap(vw) {
  if (vw >= 2560) return 2048;
  if (vw >= 1920) return 1680;
  if (vw >= 1536) return 1440;
  if (vw >= 1280) return 1344;
  return 1280;
}

const measure = () =>
  // Runs in the page. Returns per-section geometry plus page-level facts.
  ({
    docWidth: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
    sections: [...document.querySelectorAll('section[data-section]')].map((s) => {
      const bleed = s.dataset.bleed === 'true';

      // The constrained content box: the widest descendant carrying a max-width
      // that is actually limiting it. This is what the reader perceives as the
      // section's edge.
      let box = null;
      for (const el of s.querySelectorAll('*')) {
        const cs = getComputedStyle(el);
        if (cs.maxWidth === 'none') continue;
        if (cs.position === 'absolute' || cs.position === 'fixed') continue;
        const r = el.getBoundingClientRect();
        if (r.width < 200 || r.height < 24) continue;
        if (!box || r.width > box.width) {
          // Auto side margins == the element is meant to sit on the page axis.
          // Left-aligned copy inside a centred container is not a defect.
          const autoCentred = cs.marginLeft === cs.marginRight
            && Math.abs(parseFloat(cs.marginLeft) - parseFloat(cs.marginRight)) < 1
            && el.matches('[data-container], .mx-auto, [class*="mx-auto"]');
          box = { width: Math.round(r.width), left: Math.round(r.left), autoCentred: !!autoCentred };
        }
      }

      // Any hand-rolled max-w-* / px-* outside Container is a spec violation
      // (spec 3.0). Container marks itself so we can tell them apart.
      const strays = [];
      for (const el of s.querySelectorAll('*')) {
        if (el.closest('[data-container]')) continue;
        const cls = typeof el.className === 'string' ? el.className : '';
        const m = cls.match(/(?:^|\s)(?:(?:sm|md|lg|xl|2xl|3xl):)?(?:max-w-|px-)[^\s]+/g);
        if (m) strays.push(...m.map((x) => x.trim()));
      }

      const h = s.querySelector('h1, h2');
      const p = s.querySelector('p');
      const px = (el) => (el ? Math.round(parseFloat(getComputedStyle(el).fontSize)) : null);

      // Longest ACTUAL prose line, for the 70ch rule (spec 3.3).
      //
      // An earlier version divided element width by average glyph width, which
      // measured the box rather than the text: a 2048px-wide <p> holding eight
      // words reported 325ch and flagged every section on the page. What matters
      // for readability is how far the eye actually travels, so count the real
      // characters per rendered line: text length / number of visual lines.
      let maxCh = 0;
      for (const el of s.querySelectorAll('p, li, dd')) {
        const text = (el.textContent || '').trim();
        if (text.length < 40) continue;              // too short to wrap badly
        const cs = getComputedStyle(el);
        // Line-clamped text is deliberately truncated: its box is shorter than
        // its content, so text.length / visualLines overestimates the real line
        // length (it reported 92ch on a 375px phone, which cannot happen). The
        // clamp already bounds what the reader sees, so skip these.
        const clamp = cs.webkitLineClamp || cs.getPropertyValue('-webkit-line-clamp');
        if (clamp && clamp !== 'none') continue;
        if (cs.textOverflow === 'ellipsis') continue;
        const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.4;
        const r = el.getBoundingClientRect();
        if (r.width < 80 || r.height < 4) continue;
        const lines = Math.max(1, Math.round(r.height / lh));
        maxCh = Math.max(maxCh, Math.round(text.length / lines));
      }

      return {
        name: s.dataset.section,
        bleed,
        contentWidth: box?.width ?? null,
        leftEdge: box?.left ?? null,
        autoCentred: box?.autoCentred ?? false,
        headingPx: px(h),
        bodyPx: px(p),
        maxCh,
        strays: [...new Set(strays)],
      };
    }),
  });

// playwright-core ships no browser, and the ms-playwright cache is usually
// pinned to a different build number than this package expects. Use the
// installed Chrome instead: no download step, and it is the engine the design
// is actually reviewed in. CHROME_PATH overrides for CI.
const browser = await chromium.launch(
  process.env.CHROME_PATH
    ? { executablePath: process.env.CHROME_PATH }
    : { channel: 'chrome' }
);
const results = [];
if (SHOT_DIR) mkdirSync(SHOT_DIR, { recursive: true });

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
  await page.goto(BASE + PATH_, { waitUntil: 'networkidle' });
  await page.addStyleTag({
    content: `*,*::before,*::after{animation:none!important;transition:none!important}
              html{scroll-behavior:auto!important}`,
  });
  const data = await page.evaluate(measure);
  results.push({ ...vp, ...data });

  if (SHOT_DIR) {
    await page.screenshot({ path: join(SHOT_DIR, `${vp.w}-${vp.label}.png`), fullPage: true });
  }
  await page.close();
}
await browser.close();

// ─── Report ───────────────────────────────────────────────────────────────
for (const r of results) {
  console.log(`\n=== ${r.w}x${r.h} (${r.label}) ===`);
  console.log('section'.padEnd(32) + 'left'.padStart(6) + 'width'.padStart(7) +
              'head'.padStart(6) + 'body'.padStart(6) + 'ch'.padStart(5));
  for (const s of r.sections) {
    console.log(
      (s.name + (s.bleed ? ' *bleed' : '')).padEnd(32) +
        String(s.leftEdge ?? '-').padStart(6) +
        String(s.contentWidth ?? '-').padStart(7) +
        String(s.headingPx ?? '-').padStart(6) +
        String(s.bodyPx ?? '-').padStart(6) +
        String(s.maxCh || '-').padStart(5)
    );
  }
}

// ─── Assertions ───────────────────────────────────────────────────────────
const failures = [];
const fail = (m) => failures.push(m);

for (const r of results) {
  const at = `${r.w}px`;

  // INV-1 no horizontal overflow, any width.
  if (r.docWidth > r.viewport + 1) {
    fail(`[${at}] INV-1 horizontal overflow: document ${r.docWidth} > viewport ${r.viewport}`);
  }

  const capped = r.sections.filter((s) => !s.bleed && s.leftEdge !== null);

  // INV-2 one left edge (spec 3.0). Centred-narrower content is symmetric about
  // the same axis, so we compare centres, and check the widest sections agree on
  // the actual edge.
  const cap = expectedContainerCap(r.w);
  const full = capped.filter((s) => s.contentWidth >= Math.min(cap, r.w) - 64);
  const edges = [...new Set(full.map((s) => s.leftEdge))];
  if (edges.length > 1) {
    fail(`[${at}] INV-2 ${edges.length} distinct left edges among full-width sections: ${edges.join(', ')}`);
  }

  for (const s of capped) {
    // INV-3 applies only to blocks that are SUPPOSED to be centred (auto side
    // margins). An earlier version asserted it for every constrained element,
    // which flagged left-aligned hero copy sitting inside a centred container —
    // solutions-hero, industry-hero and the blog category rail are all correct
    // by design. The container's centring is what matters, and INV-2/INV-4
    // already cover that.
    if (s.autoCentred) {
      const centre = s.leftEdge + s.contentWidth / 2;
      if (Math.abs(centre - r.viewport / 2) > 2) {
        fail(`[${at}] INV-3 ${s.name} not centred: centre ${Math.round(centre)} vs ${r.viewport / 2}`);
      }
    }
    // INV-4 nothing exceeds the container cap for this width.
    if (s.contentWidth > cap + 2) {
      fail(`[${at}] INV-4 ${s.name} width ${s.contentWidth} exceeds cap ${cap}`);
    }
  }

  // INV-5 no hand-rolled width/padding outside Container (spec 3.0).
  for (const s of r.sections) {
    if (s.strays.length) {
      fail(`[${at}] INV-5 ${s.name} has ${s.strays.length} stray width/padding utils: ${s.strays.slice(0, 6).join(' ')}`);
    }
  }

  // INV-6 prose line length (spec 3.3 / constitution 10.3).
  for (const s of r.sections) {
    if (s.maxCh > 75) fail(`[${at}] INV-6 ${s.name} prose ${s.maxCh}ch exceeds 75ch`);
  }

  // INV-7 type scale floors at the widest sizes (spec 3.2).
  if (r.w >= 1920) {
    for (const s of r.sections) {
      if (s.headingPx !== null && s.headingPx < 44) {
        fail(`[${at}] INV-7 ${s.name} heading ${s.headingPx}px below 44px floor`);
      }
      if (s.bodyPx !== null && s.bodyPx < 18) {
        fail(`[${at}] INV-7 ${s.name} body ${s.bodyPx}px below 18px floor`);
      }
    }
  }
}

console.log('\n' + '─'.repeat(70));
if (failures.length === 0) {
  console.log(`PASS — all invariants hold across ${VIEWPORTS.length} viewports.`);
  process.exit(0);
}
console.log(`FAIL — ${failures.length} violation(s):\n`);
for (const f of failures) console.log('  ' + f);
process.exit(REPORT_ONLY ? 0 : 1);
