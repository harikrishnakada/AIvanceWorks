/**
 * MvpHeroIllustration — inline SVG for the MVP Development hero right column.
 *
 * Visual concept: a rocket launches upward through dashed elliptical orbit
 * loops (numbered sprint cycles 1–4), arriving at a "V1 LAUNCH" destination
 * node. Decorative particles scatter the field. Labels — Kickoff, Sprint
 * Cycles, Ship — anchor the three narrative beats.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const MvpHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Rocket launches through sprint iteration cycles toward the V1 launch milestone"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>MVP Launch Illustration</title>
      <desc>
        A rocket launches upward through four numbered sprint orbit loops and
        arrives at the V1 Launch destination node, representing the 12-week MVP
        journey from kickoff to ship.
      </desc>

      {/* ─── Defs: gradients & filters ─── */}
      <defs>
        {/* Rocket body gradient */}
        <linearGradient id="rocketGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" />
          <stop offset="100%" stopColor="var(--brand-600, var(--brand-500))" />
        </linearGradient>

        {/* Rocket flame gradient */}
        <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.1" />
        </linearGradient>

        {/* V1 node glow gradient */}
        <radialGradient id="v1Glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0" />
        </radialGradient>

        {/* Trail gradient */}
        <linearGradient id="trailGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0" />
          <stop offset="60%" stopColor="var(--brand-400)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--brand-300)" stopOpacity="0.9" />
        </linearGradient>

        {/* Sprint marker gradient */}
        <radialGradient id="sprintGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" />
          <stop offset="100%" stopColor="var(--brand-500)" />
        </radialGradient>
      </defs>

      {/* ─── Background field: subtle radial glow ─── */}
      <ellipse
        cx="200"
        cy="150"
        rx="180"
        ry="130"
        fill="var(--brand-500)"
        fillOpacity="0.04"
      />

      {/* ─── Decorative particles ─── */}
      {/* Far background */}
      <circle cx="32"  cy="42"  r="1.5" fill="var(--brand-300)" fillOpacity="0.35" />
      <circle cx="368" cy="58"  r="1"   fill="var(--accent-300)" fillOpacity="0.3" />
      <circle cx="350" cy="185" r="1.5" fill="var(--brand-400)" fillOpacity="0.25" />
      <circle cx="55"  cy="200" r="1"   fill="var(--accent-200)" fillOpacity="0.3" />
      <circle cx="310" cy="270" r="1.5" fill="var(--brand-300)" fillOpacity="0.2" />
      <circle cx="80"  cy="265" r="1"   fill="var(--brand-400)" fillOpacity="0.25" />
      <circle cx="160" cy="20"  r="1"   fill="var(--accent-400)" fillOpacity="0.3" />
      <circle cx="258" cy="30"  r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      {/* Mid scatter */}
      <circle cx="42"  cy="130" r="2"   fill="var(--brand-500)" fillOpacity="0.15" />
      <circle cx="358" cy="130" r="2"   fill="var(--accent-500)" fillOpacity="0.15" />
      <circle cx="140" cy="285" r="2"   fill="var(--brand-400)" fillOpacity="0.18" />
      <circle cx="260" cy="285" r="2"   fill="var(--accent-400)" fillOpacity="0.18" />

      {/* ─── Orbit ellipses (dashed, 3 sizes) ─── */}
      {/* Orbit 1 — innermost, tightest */}
      <ellipse
        cx="200"
        cy="168"
        rx="58"
        ry="22"
        fill="none"
        stroke="var(--brand-500)"
        strokeOpacity="0.35"
        strokeWidth="1.2"
        strokeDasharray="5 4"
      />
      {/* Orbit 2 */}
      <ellipse
        cx="200"
        cy="160"
        rx="90"
        ry="34"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.28"
        strokeWidth="1.2"
        strokeDasharray="6 5"
      />
      {/* Orbit 3 */}
      <ellipse
        cx="200"
        cy="152"
        rx="124"
        ry="48"
        fill="none"
        stroke="var(--brand-300)"
        strokeOpacity="0.2"
        strokeWidth="1"
        strokeDasharray="7 6"
      />
      {/* Orbit 4 — outermost */}
      <ellipse
        cx="200"
        cy="148"
        rx="158"
        ry="62"
        fill="none"
        stroke="var(--accent-500)"
        strokeOpacity="0.15"
        strokeWidth="1"
        strokeDasharray="8 7"
      />

      {/* ─── Sprint marker bubbles (numbered 1–4) ─── */}
      {/* Sprint 1 — right of orbit 1 */}
      <circle cx="258" cy="168" r="10" fill="url(#sprintGrad)" fillOpacity="0.9" />
      <text
        x="258" y="172"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        fill="var(--text-light, #f8fafc)"
      >1</text>

      {/* Sprint 2 — left of orbit 2 */}
      <circle cx="110" cy="160" r="10" fill="url(#sprintGrad)" fillOpacity="0.85" />
      <text
        x="110" y="164"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        fill="var(--text-light, #f8fafc)"
      >2</text>

      {/* Sprint 3 — right of orbit 3 */}
      <circle cx="324" cy="152" r="10" fill="url(#sprintGrad)" fillOpacity="0.8" />
      <text
        x="324" y="156"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        fill="var(--text-light, #f8fafc)"
      >3</text>

      {/* Sprint 4 — left of orbit 4 */}
      <circle cx="42" cy="148" r="10" fill="url(#sprintGrad)" fillOpacity="0.75" />
      <text
        x="42" y="152"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        fill="var(--text-light, #f8fafc)"
      >4</text>

      {/* ─── Vertical launch trail ─── */}
      <rect
        x="198"
        y="100"
        width="4"
        height="80"
        rx="2"
        fill="url(#trailGrad)"
        fillOpacity="0.55"
      />

      {/* ─── Rocket body (simple geometric) ─── */}
      {/* Nosecone */}
      <polygon
        points="200,56 192,82 208,82"
        fill="url(#rocketGrad)"
      />
      {/* Body fuselage */}
      <rect
        x="192"
        y="80"
        width="16"
        height="28"
        rx="2"
        fill="url(#rocketGrad)"
      />
      {/* Window */}
      <circle
        cx="200"
        cy="90"
        r="4"
        fill="var(--brand-300)"
        fillOpacity="0.5"
        stroke="var(--brand-200, var(--brand-300))"
        strokeWidth="1"
        strokeOpacity="0.7"
      />
      {/* Left fin */}
      <polygon
        points="192,100 184,112 192,108"
        fill="var(--brand-500)"
        fillOpacity="0.9"
      />
      {/* Right fin */}
      <polygon
        points="208,100 216,112 208,108"
        fill="var(--brand-500)"
        fillOpacity="0.9"
      />
      {/* Exhaust nozzle */}
      <rect
        x="195"
        y="108"
        width="10"
        height="5"
        rx="1"
        fill="var(--brand-400)"
        fillOpacity="0.8"
      />

      {/* ─── Flame plume ─── */}
      {/* Outer flame */}
      <ellipse
        cx="200"
        cy="122"
        rx="7"
        ry="12"
        fill="url(#flameGrad)"
        fillOpacity="0.7"
      />
      {/* Inner flame core */}
      <ellipse
        cx="200"
        cy="118"
        rx="3.5"
        ry="7"
        fill="var(--accent-200)"
        fillOpacity="0.6"
      />

      {/* ─── V1 LAUNCH destination node ─── */}
      {/* Ambient glow halo */}
      <circle cx="200" cy="248" r="32" fill="url(#v1Glow)" />
      {/* Outer ring */}
      <circle
        cx="200"
        cy="248"
        r="22"
        fill="none"
        stroke="var(--accent-400)"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      {/* Solid node */}
      <circle
        cx="200"
        cy="248"
        r="16"
        fill="var(--accent-500)"
        fillOpacity="0.18"
        stroke="var(--accent-400)"
        strokeWidth="1.5"
      />
      {/* V1 label */}
      <text
        x="200" y="244"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="800"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.05em"
        fill="var(--accent-400)"
      >V1</text>
      <text
        x="200" y="254"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.08em"
        fill="var(--accent-400)"
        fillOpacity="0.85"
      >LAUNCH</text>

      {/* ─── Text labels ─── */}
      {/* Kickoff — below rocket */}
      <text
        x="200" y="140"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
        fill="var(--text-subtle)"
        fillOpacity="0.75"
      >KICKOFF</text>

      {/* Sprint Cycles — left side, mid-field */}
      <text
        x="74" y="112"
        textAnchor="middle"
        fontSize="7"
        fontWeight="500"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.05em"
        fill="var(--text-subtle)"
        fillOpacity="0.6"
        transform="rotate(-18, 74, 112)"
      >SPRINT CYCLES</text>

      {/* Ship — above V1 node */}
      <text
        x="200" y="222"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
        fill="var(--text-subtle)"
        fillOpacity="0.75"
      >SHIP</text>
    </svg>
  </div>
);
