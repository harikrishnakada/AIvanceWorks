/**
 * PocHeroIllustration — inline SVG for the Proof of Concept (PoC) Development
 * hero right column.
 *
 * Visual concept: a single fuzzy idea (dashed question node, top) funnels down through
 * a measurement gauge into a decision gate that branches into three honest outcomes —
 * a strong "go" path, a "pivot" path, and a muted "stop" path. The composition reads as
 * "one question in, a clear verdict out." It mirrors the page's signature argument in
 * miniature without duplicating its layout.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the active
 * data-theme automatically. No hardcoded hex values. Verdicts are differentiated by
 * brand/accent emphasis and iconography, NOT by raw semantic red/green (token discipline).
 */

export const PocHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="A single idea funneling through a measurement gauge into a three-way go, pivot, or stop decision"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Proof of Concept Feasibility Illustration</title>
      <desc>
        An abstract illustration showing one uncertain idea narrowing through a measurement
        gauge and a decision gate into three outcomes — greenlight, pivot, and stop —
        representing an evidence-backed feasibility verdict.
      </desc>

      <defs>
        <linearGradient id="pocLayerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--brand-600)" stopOpacity="0.07" />
        </linearGradient>
        <linearGradient id="pocAccentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.20" />
        </linearGradient>
        <radialGradient id="pocGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="170" rx="170" ry="140" fill="url(#pocGlow)" />

      {/* Decorative particles */}
      <circle cx="54"  cy="50"  r="1.5" fill="var(--brand-300)"  fillOpacity="0.28" />
      <circle cx="346" cy="58"  r="1"   fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="60"  cy="266" r="1"   fill="var(--brand-400)"  fillOpacity="0.18" />
      <circle cx="340" cy="256" r="1.5" fill="var(--accent-400)" fillOpacity="0.22" />

      {/* Outer boundary frame */}
      <rect x="42" y="12" width="316" height="296" rx="16" fill="none" stroke="var(--brand-400)" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="6 8" />

      {/* ── Top: the uncertain idea (dashed node with "?") ── */}
      <circle cx="200" cy="48" r="22" fill="url(#pocLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="4 4" />
      <text x="200" y="55" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.75">?</text>
      <text x="200" y="88" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--brand-300)" fillOpacity="0.5">RISKIEST ASSUMPTION</text>

      {/* Funnel walls (narrowing) */}
      <path d="M150,104 L250,104 L222,150 L178,150 Z" fill="url(#pocLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="200" y1="70" x2="200" y2="104" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 4" />

      {/* ── Middle: measurement gauge ── */}
      <g>
        <path d="M172,178 A28,28 0 0 1 228,178" fill="none" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.4" />
        {/* gauge ticks */}
        <line x1="172" y1="178" x2="177" y2="178" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1.2" />
        <line x1="200" y1="150" x2="200" y2="155" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1.2" />
        <line x1="228" y1="178" x2="223" y2="178" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="1.2" />
        {/* needle */}
        <line x1="200" y1="178" x2="216" y2="162" stroke="var(--accent-400)" strokeOpacity="0.8" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="200" cy="178" r="2.5" fill="var(--accent-400)" fillOpacity="0.7" />
        <text x="200" y="196" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.55">MEASURED VS. CRITERIA</text>
      </g>

      {/* Drop from gauge to gate */}
      <line x1="200" y1="200" x2="200" y2="218" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 4" />
      <polygon points="196,216 200,223 204,216" fill="var(--brand-400)" fillOpacity="0.35" />

      {/* Branch lines from a single gate point to three verdicts */}
      <line x1="200" y1="224" x2="96"  y2="252" stroke="var(--brand-400)"  strokeOpacity="0.22" strokeWidth="1" />
      <line x1="200" y1="224" x2="200" y2="252" stroke="var(--accent-400)" strokeOpacity="0.22" strokeWidth="1" />
      <line x1="200" y1="224" x2="304" y2="252" stroke="var(--text-subtle)" strokeOpacity="0.18" strokeWidth="1" />

      {/* ── Verdict: GO (brand, emphasized) ── */}
      <rect x="62" y="252" width="68" height="40" rx="9" fill="url(#pocLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.55" strokeWidth="1.2" />
      <circle cx="80" cy="268" r="6" fill="none" stroke="var(--brand-300)" strokeOpacity="0.7" strokeWidth="1" />
      <polyline points="77,268 79.5,271 84,265" fill="none" stroke="var(--brand-300)" strokeOpacity="0.85" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="96" y="271" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--brand-200)" fillOpacity="0.9">GO</text>
      <text x="96" y="285" fontSize="5.6" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.7">build it</text>

      {/* ── Verdict: PIVOT (accent) ── */}
      <rect x="166" y="252" width="68" height="40" rx="9" fill="url(#pocAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <path d="M181,272 L181,266 L189,266" fill="none" stroke="var(--accent-300)" strokeOpacity="0.8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M186,263 L190,266 L186,269" fill="none" stroke="var(--accent-300)" strokeOpacity="0.8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="196" y="271" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.9">PIVOT</text>
      <text x="196" y="285" fontSize="5.6" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.7">adjust</text>

      {/* ── Verdict: STOP (muted / subtle) ── */}
      <rect x="270" y="252" width="68" height="40" rx="9" fill="none" stroke="var(--text-subtle)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="288" cy="268" r="6" fill="none" stroke="var(--text-subtle)" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="284.5" y1="271.5" x2="291.5" y2="264.5" stroke="var(--text-subtle)" strokeOpacity="0.6" strokeWidth="1.1" strokeLinecap="round" />
      <text x="304" y="271" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.85">STOP</text>
      <text x="304" y="285" fontSize="5.6" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.6">save the spend</text>
    </svg>
  </div>
);
