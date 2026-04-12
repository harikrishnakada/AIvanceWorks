/**
 * ComputerVisionHeroIllustration — inline SVG for the Computer Vision service hero right column.
 *
 * Visual concept: Three input source nodes (CAMERA, VIDEO, STREAM) at the top flow into
 * a central Vision Engine hub (DETECT · CLASSIFY · CONFIRM). The hub connects outward to
 * two side process nodes (MODELS and EDGE) and downward to three output nodes (ALERT,
 * APPROVE, IMPROVE). The flow represents raw visual data transformed into structured,
 * actionable decisions — the core value proposition of a production computer vision system.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const ComputerVisionHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Computer vision pipeline showing camera and video sources flowing through a detection and classification engine into actionable alert, approval, and model improvement outputs"
  >
    <svg
      viewBox="0 0 400 340"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Computer Vision Pipeline Illustration</title>
      <desc>
        Three input source nodes at the top (Camera, Video, Stream) connect through
        flow lines to a central Vision Engine hub labeled Detect, Classify, Confirm.
        Side nodes (Models and Edge) extend from the hub. Below the hub, three output
        nodes (Alert, Approve, Improve) receive the processed results — representing
        the transformation from raw visual input to structured, actionable decisions.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="cvHubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="cvSourceGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="cvOutputGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <radialGradient id="cvGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="170" rx="180" ry="150" fill="url(#cvGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="50" cy="30" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="350" cy="45" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="40" cy="290" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="360" cy="285" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="180" cy="10" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="230" cy="328" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Bounding-box decoration (background layer) ─── */}
      {/* Suggests a detection overlay on a scene */}
      <rect x="85" y="55" width="24" height="18" rx="1" fill="none" stroke="var(--brand-300)" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="2 3" />
      <rect x="290" y="52" width="20" height="16" rx="1" fill="none" stroke="var(--accent-300)" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="2 3" />
      <rect x="310" y="270" width="22" height="16" rx="1" fill="none" stroke="var(--brand-300)" strokeOpacity="0.15" strokeWidth="0.8" strokeDasharray="2 3" />

      {/* ─── Flow lines: sources → hub ─── */}
      <line x1="120" y1="62" x2="170" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="200" y1="55" x2="200" y2="125" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="280" y1="62" x2="230" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Flow lines: hub → side nodes ─── */}
      <line x1="160" y1="170" x2="75" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1="240" y1="170" x2="325" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 4" />

      {/* ─── Flow lines: hub → outputs ─── */}
      <line x1="175" y1="210" x2="120" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="200" y1="215" x2="200" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="225" y1="210" x2="280" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Source nodes (top row): CAMERA, VIDEO, STREAM ─── */}

      {/* CAMERA */}
      <rect x="80" y="28" width="78" height="34" rx="8" fill="url(#cvSourceGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Camera body */}
      <rect x="93" y="37" width="14" height="10" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.9" />
      {/* Camera lens */}
      <circle cx="100" cy="42" r="3.5" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.7" />
      <circle cx="100" cy="42" r="1.5" fill="var(--brand-400)" fillOpacity="0.3" />
      {/* Flash bump */}
      <rect x="107" y="37" width="3" height="2.5" rx="0.5" fill="var(--brand-400)" fillOpacity="0.3" />
      <text x="131" y="49" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">CAMERA</text>

      {/* VIDEO */}
      <rect x="161" y="22" width="78" height="34" rx="8" fill="url(#cvSourceGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Play/film icon: rectangle + triangle */}
      <rect x="174" y="33" width="12" height="10" rx="1.5" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <polygon points="178,36 178,44 184,40" fill="var(--brand-400)" fillOpacity="0.35" />
      <text x="215" y="43" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">VIDEO</text>

      {/* STREAM */}
      <rect x="242" y="28" width="78" height="34" rx="8" fill="url(#cvSourceGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Waveform icon */}
      <path d="M255,45 Q257.5,37 260,45 Q262.5,53 265,45 Q267.5,37 270,45" fill="none" stroke="var(--brand-400)" strokeOpacity="0.55" strokeWidth="0.9" />
      <text x="296" y="49" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">STREAM</text>

      {/* ─── Central Vision Engine hub ─── */}
      <path
        d="M200,125 L240,145 L240,195 L200,215 L160,195 L160,145 Z"
        fill="url(#cvHubGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      {/* Inner hexagon */}
      <path
        d="M200,138 L228,152 L228,188 L200,202 L172,188 L172,152 Z"
        fill="var(--brand-400)"
        fillOpacity="0.06"
        stroke="none"
      />
      {/* Target reticle inside hub */}
      <circle cx="200" cy="157" r="6" fill="none" stroke="var(--brand-300)" strokeOpacity="0.35" strokeWidth="0.8" />
      <circle cx="200" cy="157" r="2.5" fill="var(--brand-400)" fillOpacity="0.25" />
      <line x1="200" y1="149" x2="200" y2="151" stroke="var(--brand-300)" strokeOpacity="0.4" strokeWidth="0.7" />
      <line x1="200" y1="163" x2="200" y2="165" stroke="var(--brand-300)" strokeOpacity="0.4" strokeWidth="0.7" />
      <line x1="192" y1="157" x2="194" y2="157" stroke="var(--brand-300)" strokeOpacity="0.4" strokeWidth="0.7" />
      <line x1="206" y1="157" x2="208" y2="157" stroke="var(--brand-300)" strokeOpacity="0.4" strokeWidth="0.7" />
      {/* Hub label */}
      <text x="200" y="178" textAnchor="middle" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.9">
        VISION ENGINE
      </text>
      <text x="200" y="191" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.5">
        DETECT · CLASSIFY · CONFIRM
      </text>

      {/* ─── Side nodes: MODELS (left), EDGE (right) ─── */}

      {/* MODELS */}
      <rect x="18" y="153" width="58" height="34" rx="8" fill="url(#cvOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Stacked layers icon = models */}
      <ellipse cx="36" cy="166" rx="7" ry="2.5" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <ellipse cx="36" cy="170" rx="7" ry="2.5" fill="none" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.7" />
      <ellipse cx="36" cy="174" rx="7" ry="2.5" fill="none" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="0.6" />
      <text x="56" y="174" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">MODELS</text>

      {/* EDGE */}
      <rect x="324" y="153" width="58" height="34" rx="8" fill="url(#cvOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Chip/processor icon */}
      <rect x="337" y="161" rx="2" ry="2" width="12" height="12" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <rect x="340" y="164" rx="1" ry="1" width="6" height="6" fill="var(--accent-400)" fillOpacity="0.25" />
      <line x1="337" y1="164" x2="334" y2="164" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <line x1="337" y1="167" x2="334" y2="167" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <line x1="337" y1="170" x2="334" y2="170" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <line x1="349" y1="164" x2="352" y2="164" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <line x1="349" y1="167" x2="352" y2="167" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <line x1="349" y1="170" x2="352" y2="170" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <text x="367" y="174" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">EDGE</text>

      {/* ─── Output nodes (bottom row): ALERT, APPROVE, IMPROVE ─── */}

      {/* ALERT */}
      <rect x="80" y="268" width="78" height="34" rx="8" fill="url(#cvOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Bell icon */}
      <path d="M97,282 Q97,276 103,276 Q109,276 109,282 L110,288 L96,288 Z" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="103" y1="288" x2="103" y2="291" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <text x="131" y="289" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">ALERT</text>

      {/* APPROVE */}
      <rect x="161" y="274" width="78" height="34" rx="8" fill="url(#cvOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Check mark icon */}
      <circle cx="178" cy="291" r="6" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <path d="M175,291 L177.5,293.5 L182,288" fill="none" stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <text x="215" y="295" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">APPROVE</text>

      {/* IMPROVE */}
      <rect x="242" y="268" width="78" height="34" rx="8" fill="url(#cvOutputGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Refresh/loop icon */}
      <path d="M257,281 Q257,275 263,275 Q270,275 270,281 Q270,287 263,287" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <polygon points="261,285 263,288 265,285" fill="var(--accent-400)" fillOpacity="0.45" />
      <text x="296" y="289" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">IMPROVE</text>

      {/* ─── Subtle annotation labels ─── */}
      <text x="50" y="110" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">IMAGE</text>
      <text x="50" y="120" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">QUALITY</text>

      <text x="330" y="110" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">CONFIDENCE</text>
      <text x="330" y="120" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">THRESHOLD</text>

      <text x="50" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">DETECTION</text>
      <text x="50" y="250" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">RESULTS</text>

      <text x="330" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">RETRAIN</text>
      <text x="330" y="250" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">PIPELINE</text>

      {/* ─── Outer boundary ring ─── */}
      <ellipse cx="200" cy="170" rx="185" ry="155" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
