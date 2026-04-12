/**
 * StartupHeroIllustration — inline SVG for the Startup Development hero right column.
 *
 * Visual concept: an ascending staircase of three platform blocks (Seed → Growth → Scale)
 * with a small rocket figure climbing the steps. Each step is wider and taller than the
 * previous, representing startup growth stages. Decorative particles and connecting
 * lines suggest momentum and progression.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const StartupHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Ascending staircase representing startup growth from seed stage through scale, with a rocket climbing the steps"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Startup Growth Illustration</title>
      <desc>
        Three ascending platform blocks labeled Seed, Growth, and Scale form a
        staircase. A small rocket climbs the steps, representing a startup
        progressing through development stages with increasing capability.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="startupStepGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.18" />
          <stop offset="50%" stopColor="var(--brand-400)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.18" />
        </linearGradient>

        <linearGradient id="startupAccentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.14" />
          <stop offset="50%" stopColor="var(--accent-400)" stopOpacity="0.24" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.14" />
        </linearGradient>

        <linearGradient id="startupRocketGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" />
          <stop offset="100%" stopColor="var(--brand-600, var(--brand-500))" />
        </linearGradient>

        <linearGradient id="startupFlameGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.1" />
        </linearGradient>

        <radialGradient id="startupGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="startupPathGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="185" ry="140" fill="url(#startupGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="35" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="365" cy="55" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="50" cy="260" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="350" cy="245" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="175" cy="15" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="300" cy="20" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />
      <circle cx="80" cy="140" r="2" fill="var(--brand-500)" fillOpacity="0.12" />
      <circle cx="330" cy="130" r="2" fill="var(--accent-500)" fillOpacity="0.12" />

      {/* ─── Ascending dotted path (connecting the steps) ─── */}
      <path
        d="M 80,240 Q 130,230 160,200 Q 190,170 220,160 Q 250,150 280,110 Q 310,70 340,55"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />

      {/* ─── Step 1: Seed (bottom-left, smallest) ─── */}
      <rect
        x="52"
        y="218"
        width="120"
        height="48"
        rx="8"
        fill="url(#startupStepGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {/* Seed icon (small seedling) */}
      <circle cx="80" cy="237" r="8" fill="var(--brand-500)" fillOpacity="0.15" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="80" y1="240" x2="80" y2="233" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="1" />
      <path d="M76,235 Q80,230 84,235" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      {/* Label */}
      <text x="130" y="240" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SEED</text>
      <text x="130" y="252" textAnchor="middle" fontSize="5.5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.55">2–3 engineers</text>

      {/* ─── Step 2: Growth (middle, medium) ─── */}
      <rect
        x="148"
        y="148"
        width="136"
        height="52"
        rx="8"
        fill="url(#startupAccentGrad)"
        stroke="var(--accent-400)"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      {/* Growth icon (trending up) */}
      <circle cx="180" cy="170" r="8" fill="var(--accent-500)" fillOpacity="0.15" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <polyline points="174,174 178,170 182,172 186,166" fill="none" stroke="var(--accent-400)" strokeOpacity="0.7" strokeWidth="1" />
      <polygon points="185,164 188,166 185,168" fill="var(--accent-400)" fillOpacity="0.6" />
      {/* Label */}
      <text x="236" y="172" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SERIES A</text>
      <text x="236" y="184" textAnchor="middle" fontSize="5.5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.55">3–5 engineers</text>

      {/* ─── Step 3: Scale (top-right, largest) ─── */}
      <rect
        x="248"
        y="72"
        width="130"
        height="56"
        rx="8"
        fill="url(#startupStepGrad)"
        stroke="var(--brand-500)"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      {/* Scale icon (building) */}
      <circle cx="280" cy="96" r="8" fill="var(--brand-500)" fillOpacity="0.15" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <rect x="276" y="92" width="8" height="8" rx="1" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <line x1="278" y1="95" x2="282" y2="95" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.6" />
      <line x1="278" y1="97.5" x2="282" y2="97.5" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.6" />
      {/* Label */}
      <text x="336" y="98" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SERIES B+</text>
      <text x="336" y="110" textAnchor="middle" fontSize="5.5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.55">5+ or handoff</text>

      {/* ─── Small rocket on the path ─── */}
      {/* Positioned at the growth step transition */}
      <g transform="translate(195, 130) rotate(-35)">
        {/* Nosecone */}
        <polygon points="0,-12 -5,0 5,0" fill="url(#startupRocketGrad)" />
        {/* Body */}
        <rect x="-5" y="-1" width="10" height="14" rx="1.5" fill="url(#startupRocketGrad)" />
        {/* Window */}
        <circle cx="0" cy="5" r="2.5" fill="var(--brand-300)" fillOpacity="0.5" stroke="var(--brand-200, var(--brand-300))" strokeWidth="0.8" strokeOpacity="0.6" />
        {/* Left fin */}
        <polygon points="-5,8 -9,14 -5,12" fill="var(--brand-500)" fillOpacity="0.9" />
        {/* Right fin */}
        <polygon points="5,8 9,14 5,12" fill="var(--brand-500)" fillOpacity="0.9" />
        {/* Flame */}
        <ellipse cx="0" cy="18" rx="4" ry="6" fill="url(#startupFlameGrad)" fillOpacity="0.7" />
        <ellipse cx="0" cy="16" rx="2" ry="3.5" fill="var(--accent-200)" fillOpacity="0.6" />
      </g>

      {/* ─── Side annotations ─── */}
      <text x="22" y="180" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.4" transform="rotate(-90, 22, 180)">YOUR JOURNEY</text>

      <text x="388" y="160" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.4" transform="rotate(90, 388, 160)">WE GROW WITH YOU</text>
    </svg>
  </div>
);
