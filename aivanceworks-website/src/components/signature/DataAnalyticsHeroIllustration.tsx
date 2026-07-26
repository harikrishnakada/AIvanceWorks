/**
 * DataAnalyticsHeroIllustration — inline SVG for the Data Analytics service hero.
 *
 * Visual concept: a decision-intelligence surface (a BI dashboard card holding a KPI
 * tile, a bar chart, and a trend line) rising out of two governed foundation bars —
 * a "Semantic layer" bar on top of a "Gold layer" bar. An upward insight signal ties
 * the trusted foundation to the answer on the surface. This deliberately contrasts
 * with the Data Engineering hero (a left-to-right source → warehouse → BI pipeline):
 * here the emphasis is the analytics surface and the insight it yields, not the plumbing.
 *
 * Color strategy: all fills and strokes use CSS custom properties (var(--brand-*),
 * var(--accent-*)) so the illustration inherits the active data-theme automatically.
 * No hardcoded hex values.
 *
 * Accessibility: wrapped in a role="img" div with a descriptive aria-label. SVG has
 * <title> and <desc>. Internal decorative elements use aria-hidden.
 */

export const DataAnalyticsHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="A business intelligence dashboard with a KPI figure, bar chart, and trend line, resting on a governed semantic layer and a Gold data layer"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Data Analytics Decision-Intelligence Illustration</title>
      <desc>
        A dashboard surface showing a key performance indicator, a rising bar chart, and
        a trend line, built on top of a governed semantic layer and the Gold data layer —
        representing analytics and business intelligence grounded in trusted data.
      </desc>

      <defs>
        <linearGradient id="da-bg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="da-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand-300)" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="da-bar-accent" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent-300)" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="da-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="da-semantic" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.32" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.22" />
        </linearGradient>
        <radialGradient id="da-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.09" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="130" rx="195" ry="135" fill="url(#da-glow)" />

      {/* Decorative particles */}
      <circle cx="34" cy="46" r="1.5" fill="var(--brand-300)" fillOpacity="0.28" />
      <circle cx="366" cy="40" r="1" fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="356" cy="118" r="1.5" fill="var(--accent-400)" fillOpacity="0.2" />
      <circle cx="30" cy="150" r="1" fill="var(--brand-400)" fillOpacity="0.18" />
      <circle cx="186" cy="20" r="1" fill="var(--brand-300)" fillOpacity="0.22" />

      {/* ─── Dashboard surface card ─── */}
      <rect x="66" y="30" width="268" height="150" rx="12" fill="url(#da-bg-grad)" stroke="var(--brand-400)" strokeWidth="1" strokeOpacity="0.4" />

      {/* Card top bar */}
      <line x1="66" y1="54" x2="334" y2="54" stroke="var(--brand-400)" strokeWidth="0.75" strokeOpacity="0.25" />
      <circle cx="80" cy="42" r="2.5" fill="var(--brand-400)" fillOpacity="0.5" />
      <circle cx="90" cy="42" r="2.5" fill="var(--brand-400)" fillOpacity="0.35" />
      <circle cx="100" cy="42" r="2.5" fill="var(--brand-400)" fillOpacity="0.25" />
      <text x="322" y="45" textAnchor="end" fontSize="7" fontWeight="600" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.6">DASHBOARD</text>

      {/* KPI tile */}
      <rect x="82" y="70" width="104" height="52" rx="7" fill="var(--brand-500)" fillOpacity="0.1" stroke="var(--brand-400)" strokeWidth="0.75" strokeOpacity="0.35" />
      <text x="94" y="86" textAnchor="start" fontSize="6.5" fontWeight="600" letterSpacing="0.05em" fill="var(--brand-300)" fillOpacity="0.7">MONTHLY REVENUE</text>
      <text x="94" y="106" textAnchor="start" fontSize="19" fontWeight="700" fill="var(--brand-100)" fillOpacity="0.95">$4.21M</text>
      {/* KPI up-trend chip */}
      <path d="M158 112 l5 -6 l5 6" fill="none" stroke="var(--accent-300)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="152" y="118" fontSize="6.5" fontWeight="600" fill="var(--accent-200)" fillOpacity="0.8">+12%</text>

      {/* Bar chart */}
      <g>
        <rect x="200" y="102" width="12" height="20" rx="2" fill="url(#da-bar)" />
        <rect x="218" y="92" width="12" height="30" rx="2" fill="url(#da-bar)" />
        <rect x="236" y="82" width="12" height="40" rx="2" fill="url(#da-bar)" />
        <rect x="254" y="70" width="12" height="52" rx="2" fill="url(#da-bar-accent)" />
        <line x1="198" y1="122" x2="272" y2="122" stroke="var(--brand-400)" strokeWidth="0.6" strokeOpacity="0.3" />
      </g>

      {/* Trend line panel */}
      <rect x="82" y="130" width="190" height="40" rx="6" fill="var(--brand-500)" fillOpacity="0.06" stroke="var(--brand-400)" strokeWidth="0.6" strokeOpacity="0.2" />
      <polyline
        points="90,158 116,150 140,154 166,140 192,144 218,132 246,136 264,126"
        fill="none"
        stroke="var(--accent-300)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.85"
      />
      <circle cx="264" cy="126" r="2.4" fill="var(--accent-200)" />

      {/* Insight signal from foundation to KPI */}
      <path d="M200 210 L200 190" stroke="var(--brand-400)" strokeWidth="1.4" strokeDasharray="3 3" strokeOpacity="0.5" fill="none" />
      <polygon points="196,190 200,182 204,190" fill="var(--brand-300)" fillOpacity="0.6" />

      {/* ─── Semantic layer bar ─── */}
      <rect x="66" y="210" width="268" height="30" rx="7" fill="url(#da-semantic)" stroke="var(--brand-400)" strokeWidth="0.9" strokeOpacity="0.5" />
      <circle cx="86" cy="225" r="3.4" fill="none" stroke="var(--brand-200)" strokeWidth="1.1" strokeOpacity="0.7" />
      <circle cx="86" cy="225" r="1.2" fill="var(--brand-200)" fillOpacity="0.8" />
      <text x="100" y="223" fontSize="8.5" fontWeight="700" fill="var(--brand-100)" fillOpacity="0.9">Semantic layer</text>
      <text x="100" y="233" fontSize="6.5" fill="var(--brand-200)" fillOpacity="0.6">one definition per metric · governed</text>

      {/* ─── Gold layer bar ─── */}
      <rect x="66" y="248" width="268" height="30" rx="7" fill="url(#da-gold)" stroke="var(--accent-400)" strokeWidth="0.9" strokeOpacity="0.55" />
      <circle cx="86" cy="263" r="3" fill="var(--accent-300)" fillOpacity="0.8" />
      <text x="100" y="261" fontSize="8.5" fontWeight="700" fill="var(--accent-100)" fillOpacity="0.9">Gold layer</text>
      <text x="100" y="271" fontSize="6.5" fill="var(--accent-200)" fillOpacity="0.6">trusted, business-ready data</text>

      {/* connector between the two foundation bars */}
      <path d="M200 240 L200 248" stroke="var(--accent-400)" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  </div>
);
