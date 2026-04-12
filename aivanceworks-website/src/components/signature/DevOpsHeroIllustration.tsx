/**
 * DevOpsHeroIllustration — inline SVG for the DevOps service hero right column.
 *
 * Visual concept: a horizontal CI/CD pipeline flow showing code moving through
 * build, test, security scan, and deploy stages — connected by flow lines with
 * gate checkpoints between stages. Represents the structured, gated pipeline
 * architecture that is the core DevOps deliverable.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const DevOpsHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="CI/CD pipeline architecture showing code flowing through build, test, security, and deployment stages with approval gates"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>DevOps Pipeline Illustration</title>
      <desc>
        A CI/CD pipeline flow diagram showing code moving through build,
        test, security scan, and deploy stages, connected by flow lines
        with gate checkpoints at each promotion.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="doPipeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="doNodeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.22" />
        </linearGradient>

        <linearGradient id="doAccentNodeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.22" />
        </linearGradient>

        <radialGradient id="doGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="doFlowLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="180" ry="140" fill="url(#doGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="35" cy="50" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="365" cy="65" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="55" cy="270" r="1" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="345" cy="255" r="1.5" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="190" cy="20" r="1" fill="var(--brand-300)" fillOpacity="0.25" />
      <circle cx="220" cy="300" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Main pipeline flow line ─── */}
      <path
        d="M60,160 L340,160"
        stroke="url(#doFlowLine)"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
      />

      {/* ─── Branch lines (top: build track, bottom: deploy track) ─── */}
      {/* Code → Build */}
      <path
        d="M90,160 C110,160 110,90 130,90"
        stroke="var(--brand-400)"
        strokeOpacity="0.25"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        fill="none"
      />
      {/* Build → Test */}
      <line x1="168" y1="90" x2="198" y2="90" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* Test → Scan */}
      <line x1="236" y1="90" x2="266" y2="90" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* Scan → merge back */}
      <path
        d="M304,90 C320,90 320,160 340,160"
        stroke="var(--brand-400)"
        strokeOpacity="0.25"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        fill="none"
      />

      {/* Code → Environments (bottom track) */}
      <path
        d="M90,160 C110,160 110,230 130,230"
        stroke="var(--accent-400)"
        strokeOpacity="0.25"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        fill="none"
      />
      {/* Dev → Staging */}
      <line x1="168" y1="230" x2="198" y2="230" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* Staging → Prod */}
      <line x1="236" y1="230" x2="266" y2="230" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* Prod → merge back */}
      <path
        d="M304,230 C320,230 320,160 340,160"
        stroke="var(--accent-400)"
        strokeOpacity="0.25"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        fill="none"
      />

      {/* ─── Source node (Code) ─── */}
      <rect x="46" y="143" width="44" height="34" rx="8" fill="url(#doNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      {/* Code brackets icon */}
      <polyline points="58,155 53,160 58,165" fill="none" stroke="var(--brand-400)" strokeOpacity="0.7" strokeWidth="1" strokeLinecap="round" />
      <polyline points="74,155 79,160 74,165" fill="none" stroke="var(--brand-400)" strokeOpacity="0.7" strokeWidth="1" strokeLinecap="round" />
      <text x="68" y="172" textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.7">CODE</text>

      {/* ─── Build track nodes (top) ─── */}
      {/* Build */}
      <rect x="130" y="73" width="38" height="34" rx="8" fill="url(#doNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Hammer icon */}
      <path d="M145,84 L153,92 M149,80 L157,88" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      <text x="149" y="100" textAnchor="middle" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">BUILD</text>

      {/* Test */}
      <rect x="198" y="73" width="38" height="34" rx="8" fill="url(#doNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Checkmark icon */}
      <polyline points="210,90 215,95 226,84" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <text x="217" y="100" textAnchor="middle" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">TEST</text>

      {/* Scan */}
      <rect x="266" y="73" width="38" height="34" rx="8" fill="url(#doNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Shield icon */}
      <path d="M281,82 L285,80 L289,82 L289,90 A4,4 0 0 1 281,90 Z" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <text x="285" y="100" textAnchor="middle" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">SCAN</text>

      {/* ─── Deploy track nodes (bottom) ─── */}
      {/* Dev */}
      <rect x="130" y="213" width="38" height="34" rx="8" fill="url(#doAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="149" y="234" textAnchor="middle" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">DEV</text>

      {/* Staging */}
      <rect x="198" y="213" width="38" height="34" rx="8" fill="url(#doAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="217" y="234" textAnchor="middle" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">STAGE</text>

      {/* Prod */}
      <rect x="266" y="213" width="38" height="34" rx="8" fill="url(#doAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="285" y="234" textAnchor="middle" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">PROD</text>

      {/* ─── Gate checkpoints (diamonds between deploy nodes) ─── */}
      {/* Gate: Dev → Staging */}
      <g transform="translate(186,230)">
        <rect x="-5" y="-5" width="10" height="10" rx="1.5" transform="rotate(45)" fill="var(--accent-500)" fillOpacity="0.25" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      </g>
      {/* Gate: Staging → Prod */}
      <g transform="translate(254,230)">
        <rect x="-5" y="-5" width="10" height="10" rx="1.5" transform="rotate(45)" fill="var(--accent-500)" fillOpacity="0.25" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      </g>

      {/* ─── End node (Deploy complete) ─── */}
      <rect x="340" y="143" width="44" height="34" rx="8" fill="url(#doAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      {/* Rocket icon */}
      <path
        d="M358,165 C358,165 359,157 362,154 C365,151 370,152 370,155 C370,158 367,162 364,163 L362,168 L358,165 Z"
        fill="none"
        stroke="var(--accent-400)"
        strokeOpacity="0.7"
        strokeWidth="0.8"
      />
      <text x="362" y="172" textAnchor="middle" fontSize="5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.7">LIVE</text>

      {/* ─── Track labels ─── */}
      <text x="28" y="93" fontSize="6" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.4">BUILD</text>
      <text x="23" y="102" fontSize="6" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.35">TRACK</text>

      <text x="18" y="233" fontSize="6" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.4">DEPLOY</text>
      <text x="20" y="242" fontSize="6" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.35">TRACK</text>

      {/* ─── Outer boundary ring ─── */}
      <ellipse cx="200" cy="160" rx="185" ry="145" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
