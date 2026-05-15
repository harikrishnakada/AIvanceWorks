/**
 * WorkforceHeroIllustration — inline SVG for the Human Capital Management
 * service hero right column.
 *
 * Visual concept: a workforce-lifecycle ring of five phase nodes
 * (Attract → Hire & Onboard → Develop & Engage → Perform & Reward →
 * Transition) connected to a central "one record" hub, with a thin "people
 * data fabric" ribbon underneath. Communicates the page's core argument
 * in one glance: every employee flows through one platform, one record,
 * one audit trail.
 *
 * Color strategy: all fills and strokes resolve through CSS custom
 * properties (--brand-*, --accent-*, --text-subtle) so the illustration
 * inherits the active data-theme automatically. No hardcoded hex values.
 */

export const WorkforceHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Workforce lifecycle illustration showing five employee-journey phases connected to a single workforce record"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Workforce Lifecycle Illustration</title>
      <desc>
        Five lifecycle phases — Attract, Hire and Onboard, Develop and
        Engage, Perform and Reward, and Transition — connected to a central
        one-record hub with a people-data-fabric ribbon beneath.
      </desc>

      <defs>
        <linearGradient id="hcmNodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0.08" />
        </linearGradient>

        <linearGradient id="hcmHubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.18" />
        </linearGradient>

        <radialGradient id="hcmGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="hcmRibbonGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.05" />
          <stop offset="50%" stopColor="var(--accent-500)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="150" rx="190" ry="140" fill="url(#hcmGlow)" />

      {/* Decorative particles */}
      <circle cx="40" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="360" cy="60" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="48" cy="270" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="352" cy="260" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="175" cy="18" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="235" cy="295" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* Lifecycle ring — dashed circle */}
      <circle
        cx="200"
        cy="150"
        r="110"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.22"
        strokeWidth="1.2"
        strokeDasharray="4 5"
      />

      {/* Central hub: "One Record" */}
      <circle
        cx="200"
        cy="150"
        r="42"
        fill="url(#hcmHubGrad)"
        stroke="var(--accent-400)"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />
      <text
        x="200"
        y="146"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        ONE
      </text>
      <text
        x="200"
        y="158"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        RECORD
      </text>
      <text
        x="200"
        y="170"
        textAnchor="middle"
        fontSize="6"
        fontWeight="500"
        fontFamily="system-ui, sans-serif"
        fill="var(--text-subtle)"
        fillOpacity="0.5"
      >
        hire → retire
      </text>

      {/* Five phase nodes around the ring */}
      {/* 1. Attract — top */}
      <g>
        <circle
          cx="200"
          cy="40"
          r="22"
          fill="url(#hcmNodeGrad)"
          stroke="var(--brand-400)"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <text
          x="200"
          y="38"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          01
        </text>
        <text
          x="200"
          y="48"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          ATTRACT
        </text>
      </g>

      {/* 2. Hire & Onboard — top right */}
      <g>
        <circle
          cx="305"
          cy="92"
          r="22"
          fill="url(#hcmNodeGrad)"
          stroke="var(--brand-400)"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <text
          x="305"
          y="90"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          02
        </text>
        <text
          x="305"
          y="100"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          ONBOARD
        </text>
      </g>

      {/* 3. Develop & Engage — bottom right */}
      <g>
        <circle
          cx="285"
          cy="218"
          r="22"
          fill="url(#hcmNodeGrad)"
          stroke="var(--accent-400)"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <text
          x="285"
          y="216"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          03
        </text>
        <text
          x="285"
          y="226"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          DEVELOP
        </text>
      </g>

      {/* 4. Perform & Reward — bottom left */}
      <g>
        <circle
          cx="115"
          cy="218"
          r="22"
          fill="url(#hcmNodeGrad)"
          stroke="var(--accent-400)"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <text
          x="115"
          y="216"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          04
        </text>
        <text
          x="115"
          y="226"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          REWARD
        </text>
      </g>

      {/* 5. Transition — top left */}
      <g>
        <circle
          cx="95"
          cy="92"
          r="22"
          fill="url(#hcmNodeGrad)"
          stroke="var(--brand-400)"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <text
          x="95"
          y="90"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          05
        </text>
        <text
          x="95"
          y="100"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.06em"
          fill="var(--text-subtle)"
          fillOpacity="0.85"
        >
          TRANSIT
        </text>
      </g>

      {/* Spokes from hub to each phase node */}
      <line x1="200" y1="108" x2="200" y2="62" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="232" y1="125" x2="287" y2="100" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="232" y1="178" x2="270" y2="205" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="168" y1="178" x2="130" y2="205" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="168" y1="125" x2="113" y2="100" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />

      {/* People Data Fabric ribbon at the bottom */}
      <rect
        x="36"
        y="278"
        width="328"
        height="26"
        rx="10"
        fill="url(#hcmRibbonGrad)"
        stroke="var(--accent-400)"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <text
        x="200"
        y="295"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.08em"
        fill="var(--text-subtle)"
        fillOpacity="0.7"
      >
        PEOPLE DATA FABRIC · AUDIT TRAIL · MULTI-STATE POLICY · SSO
      </text>

      {/* Side annotations */}
      <text
        x="22"
        y="160"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.08em"
        fill="var(--brand-300)"
        fillOpacity="0.45"
        transform="rotate(-90, 22, 160)"
      >
        HIRE TO RETIRE
      </text>
      <text
        x="378"
        y="160"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.08em"
        fill="var(--accent-300)"
        fillOpacity="0.45"
        transform="rotate(90, 378, 160)"
      >
        ONE WORKFORCE RECORD
      </text>
    </svg>
  </div>
);
