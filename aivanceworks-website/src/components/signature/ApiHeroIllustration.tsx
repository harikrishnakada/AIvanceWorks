/**
 * ApiHeroIllustration — inline SVG for the API Development hero right column.
 *
 * Visual concept: a central API node (a rounded endpoint block marked with a "{ }" glyph and
 * a small lock) sits inside a published-contract frame. Three consumer nodes — a web client,
 * a mobile client, and a partner/server — connect to it along secured channels, each channel
 * carrying a small lock badge. A version tag ("v1") anchors the contract. The composition reads
 * as "many consumers, one secured, versioned contract" — the page's argument in miniature.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties (--brand-*, --accent-*,
 * --text-subtle, --text-light) so the illustration inherits the active data-theme automatically.
 * No hardcoded hex values.
 */

export const ApiHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="A central API node inside a versioned contract frame, connecting securely to web, mobile, and partner consumers"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>API Development Illustration</title>
      <desc>
        A central API endpoint node, marked with a braces glyph and a lock, sits inside a
        published versioned contract frame and connects over secured channels to a web client,
        a mobile client, and a partner server — representing many consumers building on one
        secured, versioned API.
      </desc>

      <defs>
        <linearGradient id="apiNodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" />
          <stop offset="100%" stopColor="var(--brand-600, var(--brand-500))" />
        </linearGradient>
        <linearGradient id="apiPanelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-600)" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="apiGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="160" rx="180" ry="140" fill="url(#apiGlow)" />

      {/* Decorative particles */}
      <circle cx="48"  cy="44"  r="1.5" fill="var(--brand-300)"  fillOpacity="0.30" />
      <circle cx="352" cy="52"  r="1"   fill="var(--accent-300)" fillOpacity="0.24" />
      <circle cx="56"  cy="278" r="1"   fill="var(--brand-400)"  fillOpacity="0.20" />
      <circle cx="346" cy="270" r="1.5" fill="var(--accent-400)" fillOpacity="0.24" />

      {/* ── Published contract frame ── */}
      <rect x="128" y="96" width="144" height="128" rx="16"
        fill="url(#apiPanelGrad)" stroke="var(--brand-400)" strokeOpacity="0.30" strokeWidth="1.2"
        strokeDasharray="6 7" />
      <text x="200" y="86" textAnchor="middle" fontSize="7.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.12em"
        fill="var(--brand-300)" fillOpacity="0.7">PUBLISHED CONTRACT</text>

      {/* version tag */}
      <rect x="182" y="206" width="36" height="16" rx="8"
        fill="var(--surface-elevated, var(--brand-600))" fillOpacity="0.5"
        stroke="var(--accent-400)" strokeOpacity="0.45" strokeWidth="1" />
      <text x="200" y="217" textAnchor="middle" fontSize="8" fontWeight="800"
        fontFamily="system-ui, sans-serif" fill="var(--accent-300)">v1</text>

      {/* ── Central API node ── */}
      <rect x="162" y="132" width="76" height="58" rx="12" fill="url(#apiNodeGrad)" />
      {/* braces glyph */}
      <text x="200" y="160" textAnchor="middle" fontSize="20" fontWeight="800"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fill="var(--text-light, #f8fafc)" fillOpacity="0.95">{`{ }`}</text>
      <text x="200" y="178" textAnchor="middle" fontSize="9" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.14em"
        fill="var(--text-light, #f8fafc)" fillOpacity="0.85">API</text>
      {/* lock badge on the node */}
      <g transform="translate(224, 138)">
        <rect x="-6" y="-2" width="12" height="9" rx="2" fill="var(--accent-300)" fillOpacity="0.9" />
        <path d="M-3,-2 v-2 a3,3 0 0 1 6,0 v2" fill="none" stroke="var(--accent-200, var(--accent-300))"
          strokeWidth="1.3" strokeOpacity="0.9" />
      </g>

      {/* ── Secured channels to consumers ── */}
      {/* to web client (top-left) */}
      <line x1="162" y1="150" x2="78" y2="74" stroke="var(--brand-400)" strokeOpacity="0.35"
        strokeWidth="1.4" strokeDasharray="5 4" />
      {/* to mobile client (bottom-left) */}
      <line x1="162" y1="172" x2="78" y2="246" stroke="var(--brand-400)" strokeOpacity="0.35"
        strokeWidth="1.4" strokeDasharray="5 4" />
      {/* to partner server (right) */}
      <line x1="238" y1="161" x2="324" y2="161" stroke="var(--brand-400)" strokeOpacity="0.35"
        strokeWidth="1.4" strokeDasharray="5 4" />

      {/* tiny lock dots on each channel */}
      <circle cx="120" cy="112" r="3" fill="var(--accent-400)" fillOpacity="0.7" />
      <circle cx="120" cy="209" r="3" fill="var(--accent-400)" fillOpacity="0.7" />
      <circle cx="281" cy="161" r="3" fill="var(--accent-400)" fillOpacity="0.7" />

      {/* ── Consumer: web client (top-left) ── */}
      <g>
        <rect x="36" y="50" width="50" height="38" rx="6" fill="none"
          stroke="var(--brand-300)" strokeOpacity="0.55" strokeWidth="1.3" />
        <line x1="36" y1="60" x2="86" y2="60" stroke="var(--brand-300)" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="42" cy="55" r="1.2" fill="var(--brand-300)" fillOpacity="0.6" />
        <text x="61" y="102" textAnchor="middle" fontSize="6.5" fontWeight="600"
          fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
          fill="var(--text-subtle)" fillOpacity="0.75">WEB APP</text>
      </g>

      {/* ── Consumer: mobile client (bottom-left) ── */}
      <g>
        <rect x="46" y="224" width="28" height="46" rx="5" fill="none"
          stroke="var(--brand-300)" strokeOpacity="0.55" strokeWidth="1.3" />
        <line x1="55" y1="262" x2="65" y2="262" stroke="var(--brand-300)" strokeOpacity="0.5" strokeWidth="1.2" />
        <text x="60" y="284" textAnchor="middle" fontSize="6.5" fontWeight="600"
          fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
          fill="var(--text-subtle)" fillOpacity="0.75">MOBILE</text>
      </g>

      {/* ── Consumer: partner server (right) ── */}
      <g>
        <rect x="324" y="142" width="44" height="38" rx="5" fill="none"
          stroke="var(--brand-300)" strokeOpacity="0.55" strokeWidth="1.3" />
        <line x1="324" y1="155" x2="368" y2="155" stroke="var(--brand-300)" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="324" y1="167" x2="368" y2="167" stroke="var(--brand-300)" strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="331" cy="149" r="1.2" fill="var(--brand-300)" fillOpacity="0.6" />
        <circle cx="331" cy="161" r="1.2" fill="var(--brand-300)" fillOpacity="0.6" />
        <circle cx="331" cy="173" r="1.2" fill="var(--accent-400)" fillOpacity="0.6" />
        <text x="346" y="194" textAnchor="middle" fontSize="6.5" fontWeight="600"
          fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
          fill="var(--text-subtle)" fillOpacity="0.75">PARTNER</text>
      </g>
    </svg>
  </div>
);
