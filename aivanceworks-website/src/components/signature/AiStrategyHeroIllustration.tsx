/**
 * AiStrategyHeroIllustration — inline SVG for the AI Strategy & Consulting
 * hero right column.
 *
 * Visual concept: A compass-like central node (representing the "AI Strategy
 * Assessment") with four satellite deliverable orbits — AI Maturity Scorecard,
 * Use Case Matrix, AI Roadmap, and Governance Framework. Radiating lines
 * connect the center to each satellite. A subtle concentric-arc "signal" in the
 * background evokes a radar sweep, reinforcing the "assessment" metaphor. The
 * overall shape reads as "we point you in the right direction."
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 *
 * Mobile layout: the SVG scales fluidly via viewBox; no separate mobile variant
 * required. The illustration is constrained to max-w-md and centered.
 */

export const AiStrategyHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="AI strategy assessment illustration showing a central assessment compass with four deliverable outputs: AI Maturity Scorecard, Use Case Matrix, AI Roadmap, and Governance Framework"
  >
    <svg
      viewBox="0 0 400 360"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>AI Strategy &amp; Consulting Assessment Illustration</title>
      <desc>
        A compass-shaped assessment center connected by radiating lines to four
        satellite nodes representing the key deliverables: AI Maturity Scorecard,
        Use Case Matrix, AI Roadmap, and Governance Framework. Concentric arcs in
        the background evoke a radar sweep, representing structured assessment.
      </desc>

      {/* ─── Defs: gradients and clip ─── */}
      <defs>
        <radialGradient id="asGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="asNodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.28" />
        </linearGradient>

        <linearGradient id="asAccentNodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.22" />
        </linearGradient>

        <linearGradient id="asCenterGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="180" rx="190" ry="160" fill="url(#asGlow)" />

      {/* ─── Radar arcs (concentric, faint) ─── */}
      <circle cx="200" cy="180" r="140" fill="none"
        stroke="var(--brand-300)" strokeOpacity="0.08" strokeWidth="1"
        strokeDasharray="5 8"
      />
      <circle cx="200" cy="180" r="100" fill="none"
        stroke="var(--brand-300)" strokeOpacity="0.1" strokeWidth="1"
        strokeDasharray="4 7"
      />
      <circle cx="200" cy="180" r="62" fill="none"
        stroke="var(--brand-400)" strokeOpacity="0.12" strokeWidth="0.8"
        strokeDasharray="3 6"
      />

      {/* ─── Spoke lines (center → satellite nodes) ─── */}
      {/* Top-left: AI Maturity Scorecard */}
      <line x1="200" y1="180" x2="80" y2="68"
        stroke="var(--brand-400)" strokeOpacity="0.2"
        strokeWidth="1.2" strokeDasharray="4 4"
      />
      {/* Top-right: Use Case Matrix */}
      <line x1="200" y1="180" x2="320" y2="68"
        stroke="var(--accent-400)" strokeOpacity="0.2"
        strokeWidth="1.2" strokeDasharray="4 4"
      />
      {/* Bottom-left: AI Roadmap */}
      <line x1="200" y1="180" x2="68" y2="292"
        stroke="var(--brand-400)" strokeOpacity="0.2"
        strokeWidth="1.2" strokeDasharray="4 4"
      />
      {/* Bottom-right: Governance Framework */}
      <line x1="200" y1="180" x2="332" y2="292"
        stroke="var(--accent-400)" strokeOpacity="0.2"
        strokeWidth="1.2" strokeDasharray="4 4"
      />

      {/* ─── Center: Assessment Engine ─── */}
      {/* Outer ring */}
      <circle cx="200" cy="180" r="46" fill="none"
        stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5"
      />
      {/* Inner filled disc */}
      <circle cx="200" cy="180" r="38" fill="url(#asCenterGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1"
      />
      {/* Compass crosshairs */}
      <line x1="200" y1="148" x2="200" y2="212"
        stroke="var(--brand-300)" strokeOpacity="0.45" strokeWidth="0.8"
      />
      <line x1="168" y1="180" x2="232" y2="180"
        stroke="var(--brand-300)" strokeOpacity="0.45" strokeWidth="0.8"
      />
      {/* Compass needle (pointing upper-right, signifying "direction") */}
      <polygon
        points="200,152 196,180 200,174 204,180"
        fill="var(--brand-400)" fillOpacity="0.55"
      />
      <polygon
        points="200,208 196,180 200,186 204,180"
        fill="var(--brand-400)" fillOpacity="0.2"
      />
      {/* Center dot */}
      <circle cx="200" cy="180" r="3" fill="var(--brand-400)" fillOpacity="0.6" />
      {/* Label */}
      <text x="200" y="228" textAnchor="middle" fontSize="6.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.07em"
        fill="var(--text-subtle)" fillOpacity="0.75"
      >
        AI STRATEGY ASSESSMENT
      </text>

      {/* ─── Satellite 1 (top-left): AI Maturity Scorecard ─── */}
      <rect x="26" y="30" width="108" height="52" rx="9"
        fill="url(#asNodeGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1"
      />
      {/* Score bar mini-chart */}
      <rect x="38" y="48" width="12" height="18" rx="1.5"
        fill="var(--brand-400)" fillOpacity="0.45"
      />
      <rect x="54" y="43" width="12" height="23" rx="1.5"
        fill="var(--brand-400)" fillOpacity="0.55"
      />
      <rect x="70" y="52" width="12" height="14" rx="1.5"
        fill="var(--brand-400)" fillOpacity="0.35"
      />
      <text x="80" y="43" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        AI MATURITY
      </text>
      <text x="80" y="51" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        SCORECARD
      </text>

      {/* ─── Satellite 2 (top-right): Use Case Matrix ─── */}
      <rect x="266" y="30" width="108" height="52" rx="9"
        fill="url(#asAccentNodeGrad)"
        stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1"
      />
      {/* 2×2 matrix icon */}
      <rect x="278" y="40" width="12" height="12" rx="2"
        fill="var(--accent-400)" fillOpacity="0.4"
      />
      <rect x="292" y="40" width="12" height="12" rx="2"
        fill="var(--accent-400)" fillOpacity="0.6"
      />
      <rect x="278" y="54" width="12" height="12" rx="2"
        fill="var(--accent-400)" fillOpacity="0.25"
      />
      <rect x="292" y="54" width="12" height="12" rx="2"
        fill="var(--accent-400)" fillOpacity="0.45"
      />
      <text x="350" y="48" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        USE CASE
      </text>
      <text x="350" y="56" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        MATRIX
      </text>

      {/* ─── Satellite 3 (bottom-left): AI Roadmap ─── */}
      <rect x="14" y="265" width="108" height="52" rx="9"
        fill="url(#asNodeGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1"
      />
      {/* Horizontal roadmap bars */}
      <rect x="26" y="276" width="28" height="6" rx="1.5"
        fill="var(--brand-400)" fillOpacity="0.45"
      />
      <rect x="58" y="276" width="40" height="6" rx="1.5"
        fill="var(--brand-400)" fillOpacity="0.3"
      />
      <rect x="26" y="286" width="20" height="6" rx="1.5"
        fill="var(--brand-400)" fillOpacity="0.3"
      />
      <rect x="50" y="286" width="50" height="6" rx="1.5"
        fill="var(--brand-400)" fillOpacity="0.45"
      />
      <text x="68" y="306" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        AI ROADMAP
      </text>

      {/* ─── Satellite 4 (bottom-right): Governance Framework ─── */}
      <rect x="278" y="265" width="108" height="52" rx="9"
        fill="url(#asAccentNodeGrad)"
        stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1"
      />
      {/* Shield icon */}
      <path
        d="M298 275 L298 275 C298 275 310 272 310 272 C310 272 322 275 322 275 L322 288 C322 296 310 300 310 300 C310 300 298 296 298 288 Z"
        fill="none"
        stroke="var(--accent-400)" strokeOpacity="0.55" strokeWidth="1.2"
      />
      <line x1="310" y1="280" x2="310" y2="292"
        stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.8"
      />
      <line x1="304" y1="286" x2="316" y2="286"
        stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.8"
      />
      <text x="355" y="289" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        GOVERNANCE
      </text>
      <text x="355" y="297" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        FRAMEWORK
      </text>

      {/* ─── Decorative particles ─── */}
      <circle cx="198" cy="12" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="50" cy="165" r="1" fill="var(--brand-400)" fillOpacity="0.25" />
      <circle cx="350" cy="165" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="198" cy="348" r="1.5" fill="var(--brand-300)" fillOpacity="0.25" />
      <circle cx="168" cy="24" r="1" fill="var(--accent-300)" fillOpacity="0.2" />
      <circle cx="232" cy="24" r="1" fill="var(--brand-300)" fillOpacity="0.2" />

      {/* ─── Outer boundary (faint oval) ─── */}
      <ellipse cx="200" cy="180" rx="192" ry="165" fill="none"
        stroke="var(--brand-400)" strokeOpacity="0.05"
        strokeWidth="1" strokeDasharray="6 10"
      />
    </svg>
  </div>
);
