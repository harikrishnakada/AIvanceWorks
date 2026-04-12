/**
 * FinOpsHeroIllustration — inline SVG for the FinOps & Cloud Cost Optimization hero
 * right column.
 *
 * Visual concept: a cloud shape at the top emitting a cascading descent of cost bars.
 * Each bar is successively narrower — visualizing the waterfall optimization narrative
 * of the signature section in miniature. At the base, a governance "target band" with
 * a steady horizontal line suggests the governed baseline state. Ticker dots along the
 * descent suggest the four optimization levers being applied in sequence.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const FinOpsHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="FinOps cost optimization framework: cloud spend cascading through optimization levers into a governed baseline"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>FinOps Cost Waterfall Illustration</title>
      <desc>
        A cloud shape at the top cascades down through four progressively narrower
        cost bars, each representing an optimization lever — visibility, right-sizing,
        commitment optimization, and governance — converging into a steady governed
        baseline at the bottom.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="fiCloudGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.18" />
        </linearGradient>

        <linearGradient id="fiBarGrad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="fiBarGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient id="fiBarGrad3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.34" />
        </linearGradient>
        <linearGradient id="fiBarGrad4" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.24" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.38" />
        </linearGradient>

        <linearGradient id="fiBaselineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* ─── Cloud shape (top) ─── */}
      <g>
        <path
          d="M110,60 Q110,35 140,35 Q155,15 180,20 Q205,8 230,25 Q260,20 268,45 Q295,50 295,75 Q295,95 270,95 L130,95 Q105,95 105,75 Q105,62 110,60 Z"
          fill="url(#fiCloudGrad)"
          stroke="var(--brand-400)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        {/* Dollar symbol inside cloud */}
        <text
          x="200"
          y="72"
          textAnchor="middle"
          fontSize="22"
          fontWeight="700"
          fill="var(--brand-300)"
          opacity="0.9"
        >
          $
        </text>
      </g>

      {/* ─── Cascade connector (vertical dotted rail) ─── */}
      <line
        x1="200"
        y1="95"
        x2="200"
        y2="280"
        stroke="var(--brand-400)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />

      {/* ─── Lever ticker dots along the rail ─── */}
      {[128, 168, 208, 248].map((y, i) => (
        <circle
          key={y}
          cx="200"
          cy={y}
          r="4"
          fill={i % 2 === 0 ? 'var(--brand-400)' : 'var(--accent-400)'}
          fillOpacity="0.9"
        />
      ))}

      {/* ─── Cascading cost bars ─── */}
      {/* Bar 1 — widest (Unoptimized) */}
      <rect
        x="80"
        y="118"
        width="240"
        height="18"
        rx="4"
        fill="url(#fiBarGrad1)"
        stroke="var(--brand-400)"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {/* Bar 2 */}
      <rect
        x="95"
        y="158"
        width="210"
        height="18"
        rx="4"
        fill="url(#fiBarGrad2)"
        stroke="var(--accent-400)"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      {/* Bar 3 */}
      <rect
        x="115"
        y="198"
        width="170"
        height="18"
        rx="4"
        fill="url(#fiBarGrad3)"
        stroke="var(--brand-400)"
        strokeOpacity="0.42"
        strokeWidth="1"
      />
      {/* Bar 4 */}
      <rect
        x="140"
        y="238"
        width="120"
        height="18"
        rx="4"
        fill="url(#fiBarGrad4)"
        stroke="var(--accent-400)"
        strokeOpacity="0.45"
        strokeWidth="1"
      />

      {/* ─── Governed baseline band (bottom) ─── */}
      <rect
        x="150"
        y="280"
        width="100"
        height="8"
        rx="4"
        fill="url(#fiBaselineGrad)"
      />
      {/* Steady-state horizontal pulse line extending beyond the band */}
      <line
        x1="80"
        y1="300"
        x2="320"
        y2="300"
        stroke="var(--brand-400)"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      {/* Target tick marks on the steady line */}
      {[100, 200, 300].map((x) => (
        <circle
          key={x}
          cx={x}
          cy="300"
          r="2.5"
          fill="var(--brand-400)"
          fillOpacity="0.6"
        />
      ))}
    </svg>
  </div>
);
