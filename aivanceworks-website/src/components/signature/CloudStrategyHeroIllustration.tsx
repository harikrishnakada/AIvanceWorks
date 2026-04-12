/**
 * CloudStrategyHeroIllustration — inline SVG for the Cloud Strategy hero right column.
 *
 * Visual concept: a central cloud shape with radiating assessment dimensions —
 * cost, risk, compliance, workloads — connected by dashed evaluation lines.
 * Represents the structured assessment lens through which we evaluate
 * every aspect of the client's cloud readiness.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const CloudStrategyHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Cloud strategy assessment framework showing workload evaluation dimensions radiating from a central cloud"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Cloud Strategy Assessment Illustration</title>
      <desc>
        A central cloud shape surrounded by four assessment dimensions —
        Workloads, TCO, Risk, and Governance — connected by evaluation
        lines, representing the structured cloud readiness assessment
        framework.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="csCloudGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="csDimGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="csAccentDimGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <radialGradient id="csGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="180" ry="140" fill="url(#csGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="42" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="358" cy="55" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="50" cy="280" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="350" cy="265" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="180" cy="15" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="230" cy="305" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Connection lines (center to dimensions) ─── */}
      {/* Top — Workloads */}
      <line x1="200" y1="130" x2="200" y2="72" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Right — TCO */}
      <line x1="240" y1="160" x2="310" y2="160" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Bottom — Governance */}
      <line x1="200" y1="190" x2="200" y2="252" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Left — Risk */}
      <line x1="160" y1="160" x2="90" y2="160" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Diagonal connection lines ─── */}
      <line x1="228" y1="138" x2="280" y2="90" stroke="var(--brand-400)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="228" y1="182" x2="280" y2="230" stroke="var(--accent-400)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="172" y1="138" x2="120" y2="90" stroke="var(--brand-400)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="172" y1="182" x2="120" y2="230" stroke="var(--accent-400)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 4" />

      {/* ─── Central cloud shape ─── */}
      <path
        d="M155,185 A30,30 0 0 1 140,155 A35,35 0 0 1 175,125 A40,40 0 0 1 230,128 A30,30 0 0 1 260,155 A25,25 0 0 1 245,185 Z"
        fill="url(#csCloudGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />
      {/* Inner cloud highlight */}
      <path
        d="M165,178 A22,22 0 0 1 155,158 A25,25 0 0 1 180,138 A30,30 0 0 1 222,140 A22,22 0 0 1 245,158 A18,18 0 0 1 235,178 Z"
        fill="var(--brand-400)"
        fillOpacity="0.06"
        stroke="none"
      />
      {/* Cloud label */}
      <text
        x="200"
        y="163"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.08em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        ASSESS
      </text>

      {/* ─── Dimension 1: Workloads (top) ─── */}
      <rect x="140" y="38" width="120" height="34" rx="8" fill="url(#csDimGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Server icon */}
      <rect x="152" y="48" width="12" height="14" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <line x1="152" y1="53" x2="164" y2="53" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.6" />
      <line x1="152" y1="57" x2="164" y2="57" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.6" />
      <text x="210" y="59" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">WORKLOADS</text>

      {/* ─── Dimension 2: TCO (right) ─── */}
      <rect x="310" y="143" width="72" height="34" rx="8" fill="url(#csDimGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Dollar sign */}
      <text x="324" y="165" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--brand-400)" fillOpacity="0.6">$</text>
      <text x="360" y="164" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">TCO</text>

      {/* ─── Dimension 3: Governance (bottom) ─── */}
      <rect x="140" y="252" width="120" height="34" rx="8" fill="url(#csAccentDimGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Shield icon */}
      <path d="M156,262 L162,259 L168,262 L168,272 A6,6 0 0 1 156,272 Z" fill="none" stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <text x="215" y="273" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">GOVERNANCE</text>

      {/* ─── Dimension 4: Risk (left) ─── */}
      <rect x="18" y="143" width="72" height="34" rx="8" fill="url(#csAccentDimGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Warning triangle */}
      <path d="M36,169 L42,158 L48,169 Z" fill="none" stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <circle cx="42" cy="166" r="0.8" fill="var(--accent-400)" fillOpacity="0.6" />
      <text x="63" y="164" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">RISK</text>

      {/* ─── Corner detail: migration strategies ─── */}
      {/* Top-right */}
      <text x="296" y="86" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.4">REHOST</text>
      <text x="296" y="96" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">REPLATFORM</text>

      {/* Bottom-right */}
      <text x="296" y="232" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.4">REARCHITECT</text>
      <text x="296" y="242" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">RETIRE</text>

      {/* Top-left */}
      <text x="76" y="86" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.4">RETAIN</text>
      <text x="76" y="96" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">REFACTOR</text>

      {/* Bottom-left */}
      <text x="76" y="232" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.4">COMPLIANCE</text>
      <text x="76" y="242" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">READINESS</text>

      {/* ─── Outer ring (assessment boundary) ─── */}
      <ellipse cx="200" cy="160" rx="175" ry="135" fill="none" stroke="var(--brand-400)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
