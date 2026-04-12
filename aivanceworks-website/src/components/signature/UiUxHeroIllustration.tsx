/**
 * UiUxHeroIllustration — inline SVG for the UI/UX Design hero right column.
 *
 * Visual concept: a stylized interface layout with design-system elements —
 * a grid of component cards, spacing guides, and a color token strip —
 * representing the structured, buildable design artifacts the service delivers.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const UiUxHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="UI/UX design system illustration showing structured interface components, spacing guides, and color tokens"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>UI/UX Design System Illustration</title>
      <desc>
        A stylized design system layout showing a component grid with cards,
        spacing guides, and a color token strip — representing the structured,
        buildable design artifacts delivered by the UI/UX Design service.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="uxFrameGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.1" />
        </linearGradient>

        <linearGradient id="uxCardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.06" />
        </linearGradient>

        <linearGradient id="uxAccentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.08" />
        </linearGradient>

        <radialGradient id="uxGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="180" ry="140" fill="url(#uxGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="38" cy="45" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="362" cy="58" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="55" cy="275" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="345" cy="268" r="1" fill="var(--accent-400)" fillOpacity="0.25" />

      {/* ─── Main frame (browser/app chrome) ─── */}
      <rect
        x="60" y="35" width="280" height="250" rx="12"
        fill="url(#uxFrameGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1"
      />
      {/* Title bar dots */}
      <circle cx="80" cy="50" r="3" fill="var(--brand-400)" fillOpacity="0.4" />
      <circle cx="92" cy="50" r="3" fill="var(--accent-400)" fillOpacity="0.35" />
      <circle cx="104" cy="50" r="3" fill="var(--brand-300)" fillOpacity="0.25" />
      {/* Title bar line */}
      <line x1="60" y1="62" x2="340" y2="62" stroke="var(--brand-400)" strokeOpacity="0.15" strokeWidth="0.8" />

      {/* ─── Sidebar (nav structure) ─── */}
      <rect x="70" y="72" width="60" height="200" rx="6" fill="var(--brand-400)" fillOpacity="0.06" stroke="var(--brand-400)" strokeOpacity="0.12" strokeWidth="0.6" />
      {/* Nav items */}
      <rect x="78" y="82" width="44" height="5" rx="2" fill="var(--brand-400)" fillOpacity="0.25" />
      <rect x="78" y="95" width="36" height="4" rx="2" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="78" y="107" width="40" height="4" rx="2" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="78" y="119" width="32" height="4" rx="2" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="78" y="131" width="38" height="4" rx="2" fill="var(--accent-400)" fillOpacity="0.25" />
      <rect x="78" y="143" width="34" height="4" rx="2" fill="var(--brand-400)" fillOpacity="0.15" />

      {/* ─── Component card 1 (top-left) ─── */}
      <rect x="142" y="72" width="88" height="62" rx="6" fill="url(#uxCardGrad)" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.8" />
      {/* Card header bar */}
      <rect x="150" y="80" width="50" height="5" rx="2" fill="var(--brand-400)" fillOpacity="0.3" />
      {/* Card body lines */}
      <rect x="150" y="92" width="72" height="3" rx="1.5" fill="var(--brand-400)" fillOpacity="0.12" />
      <rect x="150" y="100" width="60" height="3" rx="1.5" fill="var(--brand-400)" fillOpacity="0.1" />
      {/* Card button */}
      <rect x="150" y="114" width="32" height="10" rx="4" fill="var(--brand-500)" fillOpacity="0.2" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.6" />
      <text x="166" y="122" textAnchor="middle" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.6">CTA</text>

      {/* ─── Component card 2 (top-right) ─── */}
      <rect x="240" y="72" width="88" height="62" rx="6" fill="url(#uxAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="0.8" />
      {/* Icon placeholder */}
      <circle cx="260" cy="90" r="8" fill="var(--accent-400)" fillOpacity="0.15" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="0.6" />
      <text x="260" y="93" textAnchor="middle" fontSize="8" fill="var(--accent-400)" fillOpacity="0.5">✦</text>
      {/* Card lines */}
      <rect x="275" y="85" width="44" height="4" rx="2" fill="var(--accent-400)" fillOpacity="0.2" />
      <rect x="275" y="95" width="36" height="3" rx="1.5" fill="var(--accent-400)" fillOpacity="0.12" />
      {/* Metric */}
      <text x="260" y="124" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--accent-400)" fillOpacity="0.5">4px</text>

      {/* ─── Spacing guide (middle) ─── */}
      <line x1="142" y1="146" x2="328" y2="146" stroke="var(--brand-400)" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="3 3" />
      {/* Spacing markers */}
      <line x1="165" y1="142" x2="165" y2="150" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.6" />
      <line x1="200" y1="142" x2="200" y2="150" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.6" />
      <line x1="235" y1="142" x2="235" y2="150" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.6" />
      <line x1="270" y1="142" x2="270" y2="150" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.6" />
      <line x1="305" y1="142" x2="305" y2="150" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.6" />
      {/* Grid label */}
      <text x="235" y="160" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.5">8px GRID</text>

      {/* ─── Component card 3 (bottom-left — form) ─── */}
      <rect x="142" y="168" width="88" height="62" rx="6" fill="url(#uxCardGrad)" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.8" />
      {/* Input fields */}
      <rect x="150" y="178" width="72" height="8" rx="3" fill="var(--brand-400)" fillOpacity="0.06" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.5" />
      <rect x="150" y="192" width="72" height="8" rx="3" fill="var(--brand-400)" fillOpacity="0.06" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.5" />
      {/* Submit button */}
      <rect x="150" y="208" width="72" height="12" rx="4" fill="var(--brand-500)" fillOpacity="0.2" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.6" />
      <text x="186" y="217" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.7">Submit</text>

      {/* ─── Component card 4 (bottom-right — tokens) ─── */}
      <rect x="240" y="168" width="88" height="62" rx="6" fill="url(#uxAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="0.8" />
      {/* Color token swatches */}
      <circle cx="260" cy="186" r="6" fill="var(--brand-500)" fillOpacity="0.35" />
      <circle cx="278" cy="186" r="6" fill="var(--brand-400)" fillOpacity="0.25" />
      <circle cx="296" cy="186" r="6" fill="var(--accent-500)" fillOpacity="0.35" />
      <circle cx="314" cy="186" r="6" fill="var(--accent-400)" fillOpacity="0.25" />
      {/* Token labels */}
      <text x="260" y="202" textAnchor="middle" fontSize="4.5" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.5">600</text>
      <text x="278" y="202" textAnchor="middle" fontSize="4.5" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.5">400</text>
      <text x="296" y="202" textAnchor="middle" fontSize="4.5" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.5">500</text>
      <text x="314" y="202" textAnchor="middle" fontSize="4.5" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.5">400</text>
      {/* Token header */}
      <text x="287" y="220" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.6">TOKENS</text>

      {/* ─── Corner labels ─── */}
      <text x="155" y="254" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">COMPONENTS</text>
      <text x="265" y="254" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">DESIGN SYSTEM</text>

      {/* ─── Outer measurement frame ─── */}
      <rect x="55" y="30" width="290" height="260" rx="14" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
