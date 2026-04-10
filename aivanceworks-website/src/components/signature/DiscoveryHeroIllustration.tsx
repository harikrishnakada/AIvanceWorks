/**
 * DiscoveryHeroIllustration — inline SVG for the Product Discovery hero right column.
 *
 * Concept: Abstract journey from uncertainty → research/validation → confirmed plan.
 * Three geometric nodes (question, search, target) connected by dashed arrow paths
 * with decorative particles scattered throughout.
 *
 * All colors use CSS variables so they respond to theme switching.
 */

export const DiscoveryHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Abstract diagram showing the product discovery journey: from an open question through research and validation to a confirmed plan"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Product Discovery Journey</title>
      <desc>
        Three connected nodes illustrating the discovery process: Idea (question mark hexagon),
        Validate (magnifying glass circle), and Ship (target diamond) — joined by animated
        dashed paths with decorative particles.
      </desc>

      <defs>
        {/* Node glow gradient — brand primary */}
        <radialGradient id="dhi-glow-brand" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0" />
        </radialGradient>

        {/* Node glow gradient — accent */}
        <radialGradient id="dhi-glow-accent" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0" />
        </radialGradient>

        {/* Node fill gradient — brand */}
        <linearGradient id="dhi-fill-brand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand-600)" stopOpacity="0.28" />
        </linearGradient>

        {/* Node fill gradient — accent */}
        <linearGradient id="dhi-fill-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.28" />
        </linearGradient>

        {/* Node fill gradient — brand mid (center node) */}
        <linearGradient id="dhi-fill-mid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--brand-300)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.22" />
        </linearGradient>

        {/* Dashed path gradient */}
        <linearGradient id="dhi-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.5" />
          <stop offset="50%" stopColor="var(--brand-300)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.5" />
        </linearGradient>

        {/* Filter: soft glow for nodes */}
        <filter id="dhi-blur-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
        </filter>

        {/* Filter: very soft glow for particles */}
        <filter id="dhi-blur-xs" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      {/* ── Background ambient glow blobs ── */}
      <ellipse cx="75" cy="130" rx="60" ry="55" fill="url(#dhi-glow-brand)" />
      <ellipse cx="200" cy="120" rx="50" ry="45" fill="url(#dhi-glow-brand)" />
      <ellipse cx="325" cy="130" rx="60" ry="55" fill="url(#dhi-glow-accent)" />

      {/* ── Dashed connector: Node 1 → Node 2 ── */}
      {/*
        Path curves gently downward then back up — creates organic flow.
        The marker at the end provides the arrow.
      */}
      <defs>
        <marker
          id="dhi-arrow"
          markerWidth="7"
          markerHeight="7"
          refX="3.5"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 7 3.5, 0 7"
            fill="var(--brand-400)"
            fillOpacity="0.7"
          />
        </marker>
        <marker
          id="dhi-arrow-accent"
          markerWidth="7"
          markerHeight="7"
          refX="3.5"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 7 3.5, 0 7"
            fill="var(--accent-400)"
            fillOpacity="0.7"
          />
        </marker>
      </defs>

      {/* Connection line 1 → 2 */}
      <path
        d="M 118 130 C 145 110, 168 110, 158 130"
        stroke="var(--brand-400)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd="url(#dhi-arrow)"
      />

      {/* Connection line 2 → 3 */}
      <path
        d="M 242 130 C 265 110, 285 110, 282 130"
        stroke="var(--accent-400)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd="url(#dhi-arrow-accent)"
      />

      {/* ── Node 1: Idea — Hexagon ── */}
      {/* Glow halo */}
      <circle cx="75" cy="130" r="38" fill="url(#dhi-glow-brand)" filter="url(#dhi-blur-sm)" />
      {/* Hexagon shape */}
      <polygon
        points="75,96 104,113 104,147 75,164 46,147 46,113"
        fill="url(#dhi-fill-brand)"
        stroke="var(--brand-400)"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
      {/* Inner hexagon ring */}
      <polygon
        points="75,104 98,117 98,143 75,156 52,143 52,117"
        fill="none"
        stroke="var(--brand-300)"
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      {/* Question mark symbol — abstract geometric form */}
      {/* Arc top of question mark */}
      <path
        d="M 68 118 C 68 112, 82 112, 82 118 C 82 124, 75 124, 75 130"
        stroke="var(--brand-300)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Dot of question mark */}
      <circle cx="75" cy="136" r="1.8" fill="var(--brand-300)" />

      {/* ── Node 2: Validate — Circle ── */}
      {/* Glow halo */}
      <circle cx="200" cy="130" r="38" fill="url(#dhi-glow-brand)" filter="url(#dhi-blur-sm)" />
      {/* Outer ring */}
      <circle
        cx="200"
        cy="130"
        r="32"
        fill="url(#dhi-fill-mid)"
        stroke="var(--brand-400)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      {/* Inner dashed ring */}
      <circle
        cx="200"
        cy="130"
        r="24"
        fill="none"
        stroke="var(--brand-300)"
        strokeOpacity="0.25"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      {/* Magnifying glass handle */}
      <line
        x1="213"
        y1="143"
        x2="220"
        y2="150"
        stroke="var(--brand-300)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Magnifying glass lens circle */}
      <circle
        cx="206"
        cy="136"
        r="9"
        fill="none"
        stroke="var(--brand-300)"
        strokeWidth="2"
      />
      {/* Inner lens highlight */}
      <circle
        cx="203"
        cy="133"
        r="2.5"
        fill="var(--brand-400)"
        fillOpacity="0.5"
      />

      {/* ── Node 3: Ship — Diamond ── */}
      {/* Glow halo */}
      <circle cx="325" cy="130" r="38" fill="url(#dhi-glow-accent)" filter="url(#dhi-blur-sm)" />
      {/* Diamond (rotated square) */}
      <rect
        x="292"
        y="97"
        width="66"
        height="66"
        rx="6"
        fill="url(#dhi-fill-accent)"
        stroke="var(--accent-400)"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        transform="rotate(45 325 130)"
      />
      {/* Inner diamond ring */}
      <rect
        x="298"
        y="103"
        width="54"
        height="54"
        rx="4"
        fill="none"
        stroke="var(--accent-300)"
        strokeOpacity="0.2"
        strokeWidth="1"
        transform="rotate(45 325 130)"
      />
      {/* Target / checkmark reticle — outer ring */}
      <circle
        cx="325"
        cy="130"
        r="13"
        fill="none"
        stroke="var(--accent-300)"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      {/* Checkmark */}
      <polyline
        points="317,130 322,136 334,122"
        stroke="var(--accent-300)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ── Decorative particles ── */}
      {/* Cluster around Node 1 */}
      <circle cx="38" cy="102" r="2" fill="var(--brand-400)" fillOpacity="0.4" />
      <circle cx="112" cy="104" r="1.5" fill="var(--brand-300)" fillOpacity="0.35" />
      <circle cx="40" cy="158" r="1.5" fill="var(--brand-500)" fillOpacity="0.4" />
      <circle cx="108" cy="160" r="2" fill="var(--brand-400)" fillOpacity="0.3" />
      <circle cx="55" cy="90" r="1" fill="var(--brand-300)" fillOpacity="0.5" />
      <circle cx="95" cy="168" r="1" fill="var(--brand-400)" fillOpacity="0.45" />

      {/* Cluster around Node 2 */}
      <circle cx="165" cy="100" r="1.5" fill="var(--brand-300)" fillOpacity="0.4" />
      <circle cx="235" cy="98" r="2" fill="var(--brand-400)" fillOpacity="0.35" />
      <circle cx="168" cy="162" r="1.5" fill="var(--brand-500)" fillOpacity="0.35" />
      <circle cx="233" cy="163" r="1.5" fill="var(--brand-300)" fillOpacity="0.4" />
      <circle cx="178" cy="88" r="1" fill="var(--brand-400)" fillOpacity="0.3" />
      <circle cx="222" cy="172" r="1" fill="var(--brand-500)" fillOpacity="0.4" />

      {/* Cluster around Node 3 */}
      <circle cx="290" cy="100" r="2" fill="var(--accent-400)" fillOpacity="0.4" />
      <circle cx="362" cy="102" r="1.5" fill="var(--accent-300)" fillOpacity="0.35" />
      <circle cx="288" cy="160" r="1.5" fill="var(--accent-500)" fillOpacity="0.4" />
      <circle cx="360" cy="158" r="2" fill="var(--accent-400)" fillOpacity="0.3" />
      <circle cx="313" cy="90" r="1" fill="var(--accent-300)" fillOpacity="0.5" />
      <circle cx="338" cy="170" r="1" fill="var(--accent-400)" fillOpacity="0.45" />

      {/* Scattered field particles */}
      <circle cx="140" cy="88" r="1.5" fill="var(--brand-400)" fillOpacity="0.25" />
      <circle cx="260" cy="175" r="1.5" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="155" cy="172" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="248" cy="88" r="1" fill="var(--brand-500)" fillOpacity="0.3" />

      {/* ── Labels below each node ── */}
      <text
        x="75"
        y="192"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.08em"
        fill="var(--text-subtle)"
        fontFamily="inherit"
      >
        IDEA
      </text>

      <text
        x="200"
        y="192"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.08em"
        fill="var(--text-subtle)"
        fontFamily="inherit"
      >
        VALIDATE
      </text>

      <text
        x="325"
        y="192"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.08em"
        fill="var(--text-subtle)"
        fontFamily="inherit"
      >
        SHIP
      </text>

      {/* ── Fine grid overlay — depth texture ── */}
      {/* Vertical grid lines */}
      {[50, 100, 150, 200, 250, 300, 350].map((x) => (
        <line
          key={`vg-${x}`}
          x1={x}
          y1="60"
          x2={x}
          y2="180"
          stroke="var(--brand-500)"
          strokeOpacity="0.04"
          strokeWidth="1"
        />
      ))}
      {/* Horizontal grid lines */}
      {[80, 110, 130, 150, 170].map((y) => (
        <line
          key={`hg-${y}`}
          x1="20"
          y1={y}
          x2="380"
          y2={y}
          stroke="var(--brand-500)"
          strokeOpacity="0.04"
          strokeWidth="1"
        />
      ))}
    </svg>
  </div>
);
