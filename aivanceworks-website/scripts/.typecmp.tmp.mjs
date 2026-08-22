import { chromium } from 'playwright-core';

const TARGETS = [
  ['deployed', 'https://devsolves.vercel.app'+(process.env.P??'/')],
  ['local',    'http://localhost:3000'+(process.env.P??'/')],
];
const WIDTHS = process.argv.slice(2).map(Number);

const probe = () => {
  const out = { headings: [], hist: {}, chars: {}, docWidth: document.documentElement.scrollWidth };
  const walk = document.querySelectorAll('body *');
  for (const el of walk) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    // text-bearing leaf: has direct text nodes
    let txt = '';
    for (const n of el.childNodes) if (n.nodeType === 3) txt += n.textContent;
    txt = txt.trim();
    if (!txt) continue;
    const fs = Math.round(parseFloat(cs.fontSize) * 10) / 10;
    out.hist[fs] = (out.hist[fs] || 0) + 1;
    out.chars[fs] = (out.chars[fs] || 0) + txt.length;
    if (/^H[1-4]$/.test(el.tagName)) out.headings.push([el.tagName, fs, txt.slice(0, 40)]);
  }
  return out;
};

const browser = await chromium.launch({ channel: 'msedge' });
for (const w of WIDTHS) {
  const res = {};
  for (const [name, url] of TARGETS) {
    const page = await browser.newPage({ viewport: { width: w, height: 1080 } });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
    await page.waitForTimeout(1200);
    res[name] = await page.evaluate(probe);
    await page.close();
  }
  console.log(`\n${'='.repeat(60)}\nVIEWPORT ${w}px\n${'='.repeat(60)}`);
  for (const [name, r] of Object.entries(res)) {
    const totalChars = Object.values(r.chars).reduce((a,b)=>a+b,0);
    const wavg = Object.entries(r.chars).reduce((a,[fs,c])=>a+fs*c,0)/totalChars;
    const dominant = Object.entries(r.hist).sort((a,b)=>b[1]-a[1]).slice(0,5);
    console.log(`\n-- ${name} -- docWidth=${r.docWidth}`);
    console.log(`   char-weighted avg font-size: ${wavg.toFixed(2)}px`);
    console.log(`   top sizes (count): ${dominant.map(([s,c])=>`${s}px×${c}`).join('  ')}`);
    console.log(`   headings: ${r.headings.slice(0,8).map(([t,fs,x])=>`${t}=${fs}px "${x}"`).join(' | ')}`);
  }
}
await browser.close();
