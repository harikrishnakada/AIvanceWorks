/**
 * ArchitectureAdvisoryHeroIllustration — inline SVG for the Architecture Advisory
 * hero right column.
 *
 * Visual concept: A layered system stack (three horizontal tiers — UI, API, Data)
 * with assessment callout arrows pointing to quality dimensions (Scalability,
 * Reliability, Security, Cost). A small "ADR" document icon at the bottom
 * represents the output of the assessment process. The layers communicate
 * "we evaluate your whole stack, layer by layer."
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const ArchitectureAdvisoryHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Architecture assessment illustration showing a layered system stack with quality dimension callouts and an ADR document output"
  >
    <svg
      viewBox="0 0 400 340"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Architecture Advisory Assessment Illustration</title>
      <desc>
        A three-tier system stack — Frontend, API, and Data layers — with
        assessment arrows pointing to quality dimensions (Scalability,
        Reliability, Security, Cost Efficiency) and an ADR document at the
        bottom, representing structured architecture evaluation.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="aaLayerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.22" />
        </linearGradient>

        <linearGradient id="aaAccentLayerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.18" />
        </linearGradient>

        <linearGradient id="aaAdrGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.15" />
        </linearGradient>

        <radialGradient id="aaGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="155" rx="185" ry="145" fill="url(#aaGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="45" cy="50" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="355" cy="65" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="55" cy="290" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="345" cy="275" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="190" cy="18" r="1" fill="var(--brand-300)" fillOpacity="0.3" />

      {/* ─── Vertical connection line (layers to ADR) ─── */}
      <line
        x1="200" y1="220" x2="200" y2="268"
        stroke="var(--brand-400)" strokeOpacity="0.2"
        strokeWidth="1.5" strokeDasharray="4 3"
      />

      {/* ─── Layer 1: Frontend (top) ─── */}
      <rect x="110" y="55" width="180" height="40" rx="8"
        fill="url(#aaLayerGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1"
      />
      {/* Browser icon */}
      <rect x="124" y="66" width="16" height="12" rx="2" fill="none"
        stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8"
      />
      <line x1="124" y1="71" x2="140" y2="71"
        stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.6"
      />
      <circle cx="128" cy="68.5" r="1" fill="var(--brand-400)" fillOpacity="0.4" />
      <circle cx="132" cy="68.5" r="1" fill="var(--brand-400)" fillOpacity="0.4" />
      <text x="200" y="80" textAnchor="middle" fontSize="8" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.85"
      >
        FRONTEND
      </text>

      {/* ─── Connection: Layer 1 → Layer 2 ─── */}
      <line x1="200" y1="95" x2="200" y2="110"
        stroke="var(--brand-400)" strokeOpacity="0.2"
        strokeWidth="1.5" strokeDasharray="3 3"
      />

      {/* ─── Layer 2: API (middle) ─── */}
      <rect x="110" y="110" width="180" height="40" rx="8"
        fill="url(#aaLayerGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1"
      />
      {/* API icon — brackets */}
      <text x="130" y="135" fontSize="11" fontWeight="600"
        fontFamily="system-ui, monospace"
        fill="var(--brand-400)" fillOpacity="0.6"
      >
        {'{'}
      </text>
      <text x="139" y="135" fontSize="11" fontWeight="600"
        fontFamily="system-ui, monospace"
        fill="var(--brand-400)" fillOpacity="0.6"
      >
        {'}'}
      </text>
      <text x="200" y="135" textAnchor="middle" fontSize="8" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.85"
      >
        API LAYER
      </text>

      {/* ─── Connection: Layer 2 → Layer 3 ─── */}
      <line x1="200" y1="150" x2="200" y2="170"
        stroke="var(--brand-400)" strokeOpacity="0.2"
        strokeWidth="1.5" strokeDasharray="3 3"
      />

      {/* ─── Layer 3: Data (bottom) ─── */}
      <rect x="110" y="170" width="180" height="40" rx="8"
        fill="url(#aaAccentLayerGrad)"
        stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1"
      />
      {/* Database icon */}
      <ellipse cx="132" cy="185" rx="7" ry="3" fill="none"
        stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="0.8"
      />
      <line x1="125" y1="185" x2="125" y2="195"
        stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8"
      />
      <line x1="139" y1="185" x2="139" y2="195"
        stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8"
      />
      <ellipse cx="132" cy="195" rx="7" ry="3" fill="none"
        stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8"
      />
      <text x="200" y="195" textAnchor="middle" fontSize="8" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
        fill="var(--text-subtle)" fillOpacity="0.85"
      >
        DATA LAYER
      </text>

      {/* ─── Assessment dimension callouts (left side) ─── */}
      {/* Scalability */}
      <line x1="110" y1="70" x2="55" y2="55"
        stroke="var(--brand-400)" strokeOpacity="0.25"
        strokeWidth="1" strokeDasharray="3 4"
      />
      <rect x="8" y="42" width="52" height="26" rx="6"
        fill="url(#aaLayerGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.8"
      />
      <text x="34" y="59" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.05em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        SCALABILITY
      </text>

      {/* Security */}
      <line x1="110" y1="185" x2="55" y2="200"
        stroke="var(--accent-400)" strokeOpacity="0.25"
        strokeWidth="1" strokeDasharray="3 4"
      />
      <rect x="8" y="189" width="52" height="26" rx="6"
        fill="url(#aaAccentLayerGrad)"
        stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="0.8"
      />
      <text x="34" y="206" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.05em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        SECURITY
      </text>

      {/* ─── Assessment dimension callouts (right side) ─── */}
      {/* Reliability */}
      <line x1="290" y1="130" x2="345" y2="115"
        stroke="var(--brand-400)" strokeOpacity="0.25"
        strokeWidth="1" strokeDasharray="3 4"
      />
      <rect x="338" y="102" width="54" height="26" rx="6"
        fill="url(#aaLayerGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.8"
      />
      <text x="365" y="119" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.05em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        RELIABILITY
      </text>

      {/* Cost Efficiency */}
      <line x1="290" y1="190" x2="345" y2="205"
        stroke="var(--accent-400)" strokeOpacity="0.25"
        strokeWidth="1" strokeDasharray="3 4"
      />
      <rect x="332" y="192" width="64" height="26" rx="6"
        fill="url(#aaAccentLayerGrad)"
        stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="0.8"
      />
      <text x="364" y="209" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.05em"
        fill="var(--text-subtle)" fillOpacity="0.8"
      >
        COST
      </text>

      {/* ─── ADR Document output ─── */}
      <rect x="165" y="270" width="70" height="50" rx="6"
        fill="url(#aaAdrGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1"
      />
      {/* Document lines */}
      <line x1="176" y1="282" x2="224" y2="282"
        stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.8"
      />
      <line x1="176" y1="289" x2="218" y2="289"
        stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.6"
      />
      <line x1="176" y1="296" x2="222" y2="296"
        stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.6"
      />
      <line x1="176" y1="303" x2="210" y2="303"
        stroke="var(--brand-400)" strokeOpacity="0.15" strokeWidth="0.6"
      />
      {/* ADR label */}
      <text x="200" y="330" textAnchor="middle" fontSize="7" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.08em"
        fill="var(--text-subtle)" fillOpacity="0.7"
      >
        ADR OUTPUT
      </text>

      {/* ─── Corner labels: assessment areas ─── */}
      <text x="66" y="120" fontSize="5" fontWeight="600"
        fontFamily="system-ui, sans-serif"
        fill="var(--brand-300)" fillOpacity="0.35"
      >
        MODULARITY
      </text>
      <text x="66" y="130" fontSize="5" fontWeight="600"
        fontFamily="system-ui, sans-serif"
        fill="var(--brand-300)" fillOpacity="0.3"
      >
        COUPLING
      </text>

      <text x="310" y="65" fontSize="5" fontWeight="600"
        fontFamily="system-ui, sans-serif"
        fill="var(--brand-300)" fillOpacity="0.35"
      >
        OBSERVABILITY
      </text>
      <text x="310" y="75" fontSize="5" fontWeight="600"
        fontFamily="system-ui, sans-serif"
        fill="var(--brand-300)" fillOpacity="0.3"
      >
        DEV EXPERIENCE
      </text>

      {/* ─── Outer assessment boundary ─── */}
      <ellipse cx="200" cy="170" rx="190" ry="150" fill="none"
        stroke="var(--brand-400)" strokeOpacity="0.06"
        strokeWidth="1" strokeDasharray="6 8"
      />
    </svg>
  </div>
);
