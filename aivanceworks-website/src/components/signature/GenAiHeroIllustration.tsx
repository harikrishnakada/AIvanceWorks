/**
 * GenAiHeroIllustration — inline SVG for the Generative AI hero right column.
 *
 * Visual concept: a central AI orchestration hub (hexagonal node) with data
 * flowing in from source nodes (top) through processing layers to output
 * channels (bottom). Represents the managed AI pipeline — data in,
 * intelligence applied, production output, all monitored.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const GenAiHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Generative AI pipeline showing data flowing through orchestration, model selection, and guardrail layers to production output"
  >
    <svg
      viewBox="0 0 400 340"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Generative AI Pipeline Illustration</title>
      <desc>
        A central AI orchestration hub surrounded by data source nodes at
        the top, model nodes on the sides, and output channels at the
        bottom, connected by flowing data lines — representing a managed
        generative AI pipeline from ingestion to production.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="gaiHubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="gaiNodeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="gaiAccentNodeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <radialGradient id="gaiGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="170" rx="180" ry="150" fill="url(#gaiGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="45" cy="35" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="355" cy="50" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="55" cy="295" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="345" cy="280" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="175" cy="12" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="235" cy="325" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Flow lines: sources → hub ─── */}
      <line x1="120" y1="62" x2="170" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="200" y1="55" x2="200" y2="125" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="280" y1="62" x2="230" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Flow lines: hub → models ─── */}
      <line x1="160" y1="170" x2="75" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1="240" y1="170" x2="325" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 4" />

      {/* ─── Flow lines: hub → outputs ─── */}
      <line x1="175" y1="210" x2="120" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="200" y1="215" x2="200" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="225" y1="210" x2="280" y2="268" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Data Source nodes (top row) ─── */}
      {/* Documents */}
      <rect x="80" y="28" width="78" height="34" rx="8" fill="url(#gaiNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <rect x="92" y="38" width="10" height="14" rx="1.5" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <line x1="95" y1="44" x2="100" y2="44" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <line x1="95" y1="47" x2="100" y2="47" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <text x="131" y="49" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">DOCS</text>

      {/* Databases */}
      <rect x="161" y="22" width="78" height="34" rx="8" fill="url(#gaiNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <ellipse cx="178" cy="35" rx="6" ry="3" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <line x1="172" y1="35" x2="172" y2="45" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="184" y1="35" x2="184" y2="45" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <ellipse cx="178" cy="45" rx="6" ry="3" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="215" y="43" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">DATA</text>

      {/* APIs */}
      <rect x="242" y="28" width="78" height="34" rx="8" fill="url(#gaiNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="259" y="50" fontSize="8" fontWeight="700" fontFamily="system-ui, monospace" fill="var(--brand-400)" fillOpacity="0.6">{'{ }'}</text>
      <text x="296" y="49" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">APIs</text>

      {/* ─── Central orchestration hub ─── */}
      {/* Hexagonal shape */}
      <path
        d="M200,125 L240,145 L240,195 L200,215 L160,195 L160,145 Z"
        fill="url(#gaiHubGrad)"
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
      {/* Hub label */}
      <text
        x="200"
        y="166"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.1em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        ORCHESTRATE
      </text>
      <text
        x="200"
        y="180"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
        fill="var(--text-subtle)"
        fillOpacity="0.5"
      >
        RETRIEVE · REASON · ACT
      </text>

      {/* ─── Model nodes (sides) ─── */}
      {/* Left: LLM models */}
      <rect x="18" y="153" width="58" height="34" rx="8" fill="url(#gaiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Brain icon */}
      <circle cx="35" cy="170" r="6" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <path d="M32,167 Q35,163 38,167" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.6" />
      <text x="55" y="174" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">LLMs</text>

      {/* Right: Vector store */}
      <rect x="324" y="153" width="58" height="34" rx="8" fill="url(#gaiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Grid icon */}
      <rect x="337" y="162" width="5" height="5" rx="0.5" fill="var(--accent-400)" fillOpacity="0.4" />
      <rect x="344" y="162" width="5" height="5" rx="0.5" fill="var(--accent-400)" fillOpacity="0.3" />
      <rect x="337" y="169" width="5" height="5" rx="0.5" fill="var(--accent-400)" fillOpacity="0.3" />
      <rect x="344" y="169" width="5" height="5" rx="0.5" fill="var(--accent-400)" fillOpacity="0.4" />
      <text x="367" y="174" textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.8">VECTORS</text>

      {/* ─── Output nodes (bottom row) ─── */}
      {/* Chat/API output */}
      <rect x="80" y="268" width="78" height="34" rx="8" fill="url(#gaiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Chat bubble */}
      <rect x="92" y="278" width="12" height="9" rx="2" fill="none" stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <path d="M95,287 L98,291 L101,287" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.6" />
      <text x="131" y="289" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">CHAT</text>

      {/* API endpoint */}
      <rect x="161" y="274" width="78" height="34" rx="8" fill="url(#gaiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="178" y="296" fontSize="7" fontWeight="700" fontFamily="system-ui, monospace" fill="var(--accent-400)" fillOpacity="0.6">/api</text>
      <text x="215" y="295" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">REST</text>

      {/* Agent actions */}
      <rect x="242" y="268" width="78" height="34" rx="8" fill="url(#gaiAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Lightning bolt */}
      <path d="M258,278 L262,283 L260,283 L263,290 L259,284 L261,284 Z" fill="var(--accent-400)" fillOpacity="0.5" />
      <text x="296" y="289" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">AGENTS</text>

      {/* ─── Guardrail indicators (surrounding) ─── */}
      {/* Left guardrail line */}
      <line x1="145" y1="90" x2="145" y2="250" stroke="var(--accent-400)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 6" />
      {/* Right guardrail line */}
      <line x1="255" y1="90" x2="255" y2="250" stroke="var(--accent-400)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 6" />

      {/* ─── Corner labels ─── */}
      <text x="50" y="110" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">EMBED</text>
      <text x="50" y="120" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">CHUNK</text>

      <text x="335" y="110" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">EVALUATE</text>
      <text x="335" y="120" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">MONITOR</text>

      <text x="50" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">FINE-TUNE</text>
      <text x="50" y="250" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">OPTIMIZE</text>

      <text x="335" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">GUARDRAIL</text>
      <text x="335" y="250" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">VALIDATE</text>

      {/* ─── Outer boundary ring ─── */}
      <ellipse cx="200" cy="170" rx="185" ry="155" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
