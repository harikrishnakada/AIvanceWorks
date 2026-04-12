/**
 * QualityEngHeroIllustration — inline SVG for the Quality Engineering hero right column.
 *
 * Visual concept: a vertical "quality pipeline" — code flows from a source block
 * at the top through three quality gate checkpoints (unit, integration, E2E) with
 * pass indicators, arriving at a "deploy" block at the bottom. Each gate is a
 * horizontal bar with a check icon and label.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const QualityEngHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Quality engineering pipeline showing code flowing through unit, integration, and E2E test gates before deployment"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Quality Engineering Pipeline Illustration</title>
      <desc>
        A vertical pipeline where code flows from a source block through three
        quality gates — unit tests, integration tests, and end-to-end tests —
        each with a pass indicator, before reaching a deploy block at the bottom.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="qeGateGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--brand-400)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="qeAccentGateGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.12" />
          <stop offset="50%" stopColor="var(--accent-400)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.12" />
        </linearGradient>

        <linearGradient id="qeFlowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.5" />
        </linearGradient>

        <radialGradient id="qeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="190" ry="150" fill="url(#qeGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="40" cy="38" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="360" cy="52" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="48" cy="282" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="352" cy="268" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="175" cy="14" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="235" cy="306" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Source block (top) ─── */}
      <rect x="140" y="18" width="120" height="36" rx="8" fill="url(#qeGateGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      {/* Code brackets icon */}
      <text x="158" y="41" fontSize="11" fontWeight="600" fontFamily="monospace" fill="var(--brand-400)" fillOpacity="0.7">{'</'}</text>
      <text x="176" y="41" fontSize="11" fontWeight="600" fontFamily="monospace" fill="var(--brand-400)" fillOpacity="0.5">{'>'}</text>
      <text x="240" y="41" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SOURCE</text>

      {/* ─── Flow line: Source → Gate 1 ─── */}
      <line x1="200" y1="54" x2="200" y2="78" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />
      <svg x="196" y="72" width="8" height="6" viewBox="0 0 8 6">
        <path d="M0,0 L4,6 L8,0" fill="var(--brand-400)" fillOpacity="0.3" />
      </svg>

      {/* ─── Gate 1: Unit Tests ─── */}
      <rect x="96" y="78" width="208" height="36" rx="8" fill="url(#qeGateGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Check icon */}
      <circle cx="118" cy="96" r="8" fill="var(--brand-500)" fillOpacity="0.15" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <path d="M113.5,96 L116.5,99 L122.5,93" fill="none" stroke="var(--brand-400)" strokeOpacity="0.8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Label */}
      <text x="220" y="100" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">UNIT TESTS</text>
      {/* Count badge */}
      <rect x="270" y="87" width="24" height="16" rx="4" fill="var(--brand-500)" fillOpacity="0.12" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.6" />
      <text x="282" y="98" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--brand-400)" fillOpacity="0.7">PASS</text>

      {/* ─── Flow line: Gate 1 → Gate 2 ─── */}
      <line x1="200" y1="114" x2="200" y2="142" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 3" />
      <svg x="196" y="136" width="8" height="6" viewBox="0 0 8 6">
        <path d="M0,0 L4,6 L8,0" fill="var(--brand-400)" fillOpacity="0.25" />
      </svg>

      {/* ─── Gate 2: Integration Tests ─── */}
      <rect x="96" y="142" width="208" height="36" rx="8" fill="url(#qeAccentGateGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Check icon */}
      <circle cx="118" cy="160" r="8" fill="var(--accent-500)" fillOpacity="0.15" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <path d="M113.5,160 L116.5,163 L122.5,157" fill="none" stroke="var(--accent-400)" strokeOpacity="0.8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Label */}
      <text x="220" y="164" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">INTEGRATION TESTS</text>
      {/* Count badge */}
      <rect x="270" y="151" width="24" height="16" rx="4" fill="var(--accent-500)" fillOpacity="0.12" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="0.6" />
      <text x="282" y="162" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--accent-400)" fillOpacity="0.7">PASS</text>

      {/* ─── Flow line: Gate 2 → Gate 3 ─── */}
      <line x1="200" y1="178" x2="200" y2="206" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 3" />
      <svg x="196" y="200" width="8" height="6" viewBox="0 0 8 6">
        <path d="M0,0 L4,6 L8,0" fill="var(--accent-400)" fillOpacity="0.25" />
      </svg>

      {/* ─── Gate 3: E2E Tests ─── */}
      <rect x="96" y="206" width="208" height="36" rx="8" fill="url(#qeGateGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Check icon */}
      <circle cx="118" cy="224" r="8" fill="var(--brand-500)" fillOpacity="0.15" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <path d="M113.5,224 L116.5,227 L122.5,221" fill="none" stroke="var(--brand-400)" strokeOpacity="0.8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Label */}
      <text x="220" y="228" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">E2E TESTS</text>
      {/* Count badge */}
      <rect x="270" y="215" width="24" height="16" rx="4" fill="var(--brand-500)" fillOpacity="0.12" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.6" />
      <text x="282" y="226" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--brand-400)" fillOpacity="0.7">PASS</text>

      {/* ─── Flow line: Gate 3 → Deploy ─── */}
      <line x1="200" y1="242" x2="200" y2="266" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />
      <svg x="196" y="260" width="8" height="6" viewBox="0 0 8 6">
        <path d="M0,0 L4,6 L8,0" fill="var(--accent-400)" fillOpacity="0.3" />
      </svg>

      {/* ─── Deploy block (bottom) ─── */}
      <rect x="140" y="266" width="120" height="36" rx="8" fill="url(#qeAccentGateGrad)" stroke="var(--accent-500)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Rocket / deploy icon */}
      <path d="M162,288 L168,278 L174,288" fill="none" stroke="var(--accent-400)" strokeOpacity="0.7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="168" y1="278" x2="168" y2="285" stroke="var(--accent-400)" strokeOpacity="0.7" strokeWidth="1" strokeLinecap="round" />
      <text x="240" y="289" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">DEPLOY</text>

      {/* ─── Side annotations ─── */}
      {/* Left: coverage */}
      <text x="68" y="162" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.4" transform="rotate(-90, 68, 162)">COVERAGE GATES</text>

      {/* Right: confidence */}
      <text x="332" y="162" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.4" transform="rotate(90, 332, 162)">RELEASE CONFIDENCE</text>

      {/* ─── Outer boundary ring ─── */}
      <ellipse cx="200" cy="160" rx="185" ry="145" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
