/**
 * AgenticAiHeroIllustration — inline SVG for the Agentic AI Development service hero.
 *
 * Visual concept: a central reasoning agent that plans, then acts on the world
 * through a row of tools (API, database, browser, function) — but every action
 * passes through a human-approval checkpoint and sits inside a guardrail boundary.
 * The message is the whole page in one picture: an agent that takes actions,
 * under your control. Generation alone never leaves the agent's head; agency is
 * the agent reaching out — and the checkpoint is what makes that safe.
 *
 * Color strategy: all fills and strokes use CSS custom properties (var(--brand-*),
 * var(--accent-*)) so the illustration inherits the active data-theme automatically.
 * No hardcoded hex values.
 *
 * Accessibility: wrapped in a role="img" div with descriptive aria-label.
 * SVG has <title> and <desc>. Internal decorative elements use aria-hidden="true".
 */

export const AgenticAiHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Agentic AI diagram: a central reasoning agent plans and then takes actions through tools such as APIs, databases, a browser, and functions, with every action passing through a human-approval checkpoint inside a guardrail boundary"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Agentic AI Development Illustration</title>
      <desc>
        A reasoning agent at the center plans a multi-step task and acts on external
        tools — an API, a database, a browser, and a function — through a human-approval
        checkpoint, with the whole system enclosed by a guardrail boundary.
      </desc>

      <defs>
        <linearGradient id="ag-bg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="ag-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="ag-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ag-agent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.24" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id="ag-tool" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-300)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="150" rx="190" ry="130" fill="url(#ag-glow)" />

      {/* Guardrail boundary — the whole system sits inside it */}
      <rect
        x="18"
        y="30"
        width="364"
        height="240"
        rx="16"
        fill="none"
        stroke="var(--brand-400)"
        strokeWidth="1"
        strokeOpacity="0.30"
        strokeDasharray="3 5"
      />
      <text x="200" y="46" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.12em" fill="var(--brand-300)" fillOpacity="0.7">
        GUARDRAIL BOUNDARY
      </text>

      {/* Decorative particles */}
      <circle cx="40" cy="64" r="1.5" fill="var(--brand-300)" fillOpacity="0.28" />
      <circle cx="360" cy="80" r="1" fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="52" cy="250" r="1" fill="var(--brand-400)" fillOpacity="0.18" />
      <circle cx="350" cy="246" r="1.5" fill="var(--accent-400)" fillOpacity="0.22" />

      {/* ─── AGENT (center-left) — reason + plan ─── */}
      <text x="96" y="86" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.7">AGENT</text>
      <rect x="46" y="94" width="100" height="92" rx="12" fill="url(#ag-agent)" stroke="var(--brand-400)" strokeWidth="0.9" strokeOpacity="0.5" />

      {/* plan steps inside the agent */}
      <circle cx="66" cy="116" r="3.5" fill="var(--brand-300)" fillOpacity="0.6" />
      <line x1="66" y1="119.5" x2="66" y2="134.5" stroke="var(--brand-300)" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="66" cy="138" r="3.5" fill="var(--brand-300)" fillOpacity="0.6" />
      <line x1="66" y1="141.5" x2="66" y2="156.5" stroke="var(--brand-300)" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="66" cy="160" r="3.5" fill="var(--accent-400)" fillOpacity="0.65" />
      <rect x="78" y="112" width="56" height="8" rx="2" fill="var(--brand-300)" fillOpacity="0.22" />
      <rect x="78" y="134" width="56" height="8" rx="2" fill="var(--brand-300)" fillOpacity="0.22" />
      <rect x="78" y="156" width="44" height="8" rx="2" fill="var(--accent-300)" fillOpacity="0.26" />
      <text x="96" y="180" textAnchor="middle" fontSize="6.5" fill="var(--brand-300)" fillOpacity="0.55">reason · plan · act</text>

      {/* ─── CHECKPOINT (center) — human approval gate ─── */}
      <text x="216" y="86" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.75">APPROVAL</text>
      <rect x="190" y="116" width="52" height="48" rx="8" fill="url(#ag-bg-grad)" stroke="var(--accent-400)" strokeWidth="1" strokeOpacity="0.55" />
      {/* check mark */}
      <path d="M204 140 l7 7 l11 -14" fill="none" stroke="var(--accent-300)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
      <text x="216" y="178" textAnchor="middle" fontSize="6.5" fill="var(--accent-300)" fillOpacity="0.6">human-in-the-loop</text>

      {/* arrow agent → checkpoint */}
      <path d="M146,140 L188,140" stroke="url(#ag-flow)" strokeWidth="1.5" fill="none" />
      <polygon points="186,135 194,140 186,145" fill="var(--accent-400)" fillOpacity="0.6" />

      {/* ─── TOOLS (right) — the agent acts on the world ─── */}
      <text x="330" y="86" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.7">TOOLS</text>

      {/* arrow checkpoint → tools (fan-out) */}
      <path d="M242,128 L286,104" stroke="url(#ag-flow)" strokeWidth="1.3" fill="none" strokeOpacity="0.7" />
      <path d="M242,138 L286,138" stroke="url(#ag-flow)" strokeWidth="1.3" fill="none" strokeOpacity="0.7" />
      <path d="M242,150 L286,172" stroke="url(#ag-flow)" strokeWidth="1.3" fill="none" strokeOpacity="0.7" />
      <path d="M242,156 L286,206" stroke="url(#ag-flow)" strokeWidth="1.3" fill="none" strokeOpacity="0.7" />

      <rect x="288" y="92" width="76" height="22" rx="5" fill="url(#ag-tool)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="326" y="106" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">API call</text>
      <rect x="288" y="127" width="76" height="22" rx="5" fill="url(#ag-tool)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="326" y="141" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">database</text>
      <rect x="288" y="162" width="76" height="22" rx="5" fill="url(#ag-tool)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="326" y="176" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">browser</text>
      <rect x="288" y="197" width="76" height="22" rx="5" fill="url(#ag-tool)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="326" y="211" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">function</text>

      {/* observe / result feeds back to the agent */}
      <path
        d="M326,219 V236 Q326,248 312,248 H110 Q96,248 96,236 V190"
        stroke="var(--brand-400)"
        strokeWidth="1.3"
        strokeOpacity="0.45"
        strokeDasharray="6 4"
        fill="none"
      />
      <polygon points="90,198 96,186 102,198" fill="var(--brand-400)" fillOpacity="0.5" />
      <text x="210" y="244" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="0.06em" fill="var(--brand-300)" fillOpacity="0.65">
        OBSERVE RESULT → REPLAN
      </text>

      {/* Bottom label strip */}
      <line x1="30" y1="262" x2="370" y2="262" stroke="var(--brand-400)" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  </div>
);
