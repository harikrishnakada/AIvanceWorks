/**
 * ConversationalAiHeroIllustration — inline SVG for the Conversational AI hero right column.
 *
 * Visual concept: a central dialogue hub (rounded rectangle) with channel
 * nodes at the top (web, mobile, Teams, Slack) flowing into the hub, and
 * output nodes at the bottom (resolution, handoff, analytics). Represents
 * the managed conversational AI system — messages in from any channel,
 * intelligence applied, outcomes delivered.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const ConversationalAiHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Conversational AI architecture showing messages flowing from multiple channels through a dialogue engine to resolution, handoff, and analytics"
  >
    <svg
      viewBox="0 0 400 340"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Conversational AI Architecture Illustration</title>
      <desc>
        A central dialogue engine connected to channel nodes at the top
        (web chat, mobile, Teams, Slack) and output nodes at the bottom
        (resolution, human handoff, analytics), representing a multi-channel
        conversational AI system.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="caiHubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="caiNodeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="caiAccentNodeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <radialGradient id="caiGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="170" rx="180" ry="150" fill="url(#caiGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="50" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="350" cy="55" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="60" cy="290" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="340" cy="275" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="180" cy="15" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="230" cy="320" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Flow lines: channels → hub ─── */}
      <line x1="80" y1="58" x2="155" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="160" y1="55" x2="175" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="240" y1="55" x2="225" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="320" y1="58" x2="245" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Flow lines: hub → outputs ─── */}
      <line x1="170" y1="210" x2="115" y2="268" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="200" y1="215" x2="200" y2="268" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="230" y1="210" x2="285" y2="268" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Channel nodes (top row) ─── */}
      {/* Web Chat */}
      <rect x="42" y="28" width="72" height="32" rx="8" fill="url(#caiNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Chat bubble icon */}
      <rect x="53" y="37" width="11" height="8" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <path d="M56,45 L59,49 L62,45" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.6" />
      <text x="89" y="48" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">WEB</text>

      {/* Mobile */}
      <rect x="122" y="22" width="72" height="32" rx="8" fill="url(#caiNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Phone icon */}
      <rect x="136" y="30" width="8" height="14" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <line x1="138" y1="40" x2="142" y2="40" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <text x="168" y="42" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">MOBILE</text>

      {/* Teams */}
      <rect x="206" y="22" width="72" height="32" rx="8" fill="url(#caiNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Grid icon for Teams */}
      <rect x="219" y="32" width="5" height="5" rx="0.5" fill="var(--brand-400)" fillOpacity="0.4" />
      <rect x="226" y="32" width="5" height="5" rx="0.5" fill="var(--brand-400)" fillOpacity="0.3" />
      <rect x="219" y="39" width="5" height="5" rx="0.5" fill="var(--brand-400)" fillOpacity="0.3" />
      <rect x="226" y="39" width="5" height="5" rx="0.5" fill="var(--brand-400)" fillOpacity="0.4" />
      <text x="253" y="42" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">TEAMS</text>

      {/* Slack */}
      <rect x="286" y="28" width="72" height="32" rx="8" fill="url(#caiNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Hash icon for Slack */}
      <text x="301" y="49" fontSize="10" fontWeight="700" fontFamily="system-ui, monospace" fill="var(--brand-400)" fillOpacity="0.5">#</text>
      <text x="337" y="48" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SLACK</text>

      {/* ─── Central dialogue hub ─── */}
      <rect
        x="145"
        y="128"
        width="110"
        height="85"
        rx="16"
        fill="url(#caiHubGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      {/* Inner rounded rect */}
      <rect
        x="155"
        y="138"
        width="90"
        height="65"
        rx="10"
        fill="var(--brand-400)"
        fillOpacity="0.06"
        stroke="none"
      />
      {/* Hub label */}
      <text
        x="200"
        y="163"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.1em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        DIALOGUE
      </text>
      <text
        x="200"
        y="177"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
        fill="var(--text-subtle)"
        fillOpacity="0.5"
      >
        UNDERSTAND · RETRIEVE · RESPOND
      </text>

      {/* ─── Side labels ─── */}
      {/* Left: Knowledge */}
      <rect x="18" y="152" width="58" height="34" rx="8" fill="url(#caiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="47" y="173" textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">KNOWLEDGE</text>
      <line x1="76" y1="170" x2="145" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 4" />

      {/* Right: Safety */}
      <rect x="324" y="152" width="58" height="34" rx="8" fill="url(#caiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="353" y="173" textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">GUARDRAILS</text>
      <line x1="255" y1="170" x2="324" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 4" />

      {/* ─── Output nodes (bottom row) ─── */}
      {/* Resolution */}
      <rect x="75" y="268" width="78" height="34" rx="8" fill="url(#caiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Check icon */}
      <path d="M90,284 L94,289 L102,279" fill="none" stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round" />
      <text x="131" y="289" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">RESOLVE</text>

      {/* Handoff */}
      <rect x="161" y="274" width="78" height="34" rx="8" fill="url(#caiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Arrow icon */}
      <path d="M176,291 L182,285 L176,279" fill="none" stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="185" cy="285" r="4" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.7" />
      <text x="216" y="295" textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">HANDOFF</text>

      {/* Analytics */}
      <rect x="247" y="268" width="78" height="34" rx="8" fill="url(#caiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Chart bars */}
      <rect x="261" y="284" width="3" height="10" rx="0.5" fill="var(--accent-400)" fillOpacity="0.4" />
      <rect x="266" y="280" width="3" height="14" rx="0.5" fill="var(--accent-400)" fillOpacity="0.5" />
      <rect x="271" y="282" width="3" height="12" rx="0.5" fill="var(--accent-400)" fillOpacity="0.4" />
      <text x="303" y="289" textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">ANALYTICS</text>

      {/* ─── Corner labels ─── */}
      <text x="50" y="110" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">INTENT</text>
      <text x="50" y="120" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">CONTEXT</text>

      <text x="335" y="110" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">EVALUATE</text>
      <text x="335" y="120" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">IMPROVE</text>

      <text x="50" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">RETRIEVE</text>
      <text x="50" y="250" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">GROUND</text>

      <text x="335" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">VALIDATE</text>
      <text x="335" y="250" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">FILTER</text>

      {/* ─── Outer boundary ring ─── */}
      <ellipse cx="200" cy="170" rx="185" ry="155" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
