/**
 * WebAppHeroIllustration — inline SVG for the Web App Development hero right column.
 *
 * Visual concept: a browser window frame containing abstract UI elements (navigation,
 * cards, buttons, form fields) with floating responsive device indicators (tablet,
 * mobile) on the right side. Represents the output: a production-quality, responsive
 * web application.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const WebAppHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Browser window displaying a responsive web application with navigation, content cards, and data visualizations, alongside tablet and mobile device previews"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Web Application Development Illustration</title>
      <desc>
        A browser window frame showing an abstract web application interface with
        a navigation bar, content cards, a chart, and action buttons. Smaller
        tablet and mobile device frames on the right display the same application
        at responsive breakpoints.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="webAppBrowserGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0.06" />
        </linearGradient>

        <linearGradient id="webAppAccentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.08" />
        </linearGradient>

        <linearGradient id="webAppBarGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.2" />
        </linearGradient>

        <radialGradient id="webAppGlow" cx="40%" cy="45%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="180" cy="155" rx="185" ry="145" fill="url(#webAppGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="32" cy="28" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="370" cy="42" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="25" cy="260" r="1" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="385" cy="285" r="1.5" fill="var(--accent-400)" fillOpacity="0.2" />
      <circle cx="200" cy="10" r="1" fill="var(--brand-300)" fillOpacity="0.25" />

      {/* ─── Main browser window ─── */}
      {/* Browser chrome */}
      <rect x="30" y="30" width="260" height="240" rx="10" fill="url(#webAppBrowserGrad)" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1" />

      {/* Title bar */}
      <rect x="30" y="30" width="260" height="24" rx="10" fill="var(--brand-500)" fillOpacity="0.12" />
      <rect x="30" y="44" width="260" height="10" fill="var(--brand-500)" fillOpacity="0.12" />

      {/* Traffic lights */}
      <circle cx="46" cy="42" r="3.5" fill="var(--accent-400)" fillOpacity="0.5" />
      <circle cx="58" cy="42" r="3.5" fill="var(--brand-300)" fillOpacity="0.35" />
      <circle cx="70" cy="42" r="3.5" fill="var(--brand-400)" fillOpacity="0.25" />

      {/* URL bar */}
      <rect x="84" y="37" width="120" height="10" rx="5" fill="var(--brand-400)" fillOpacity="0.08" stroke="var(--brand-400)" strokeOpacity="0.15" strokeWidth="0.5" />
      <circle cx="92" cy="42" r="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.8" />
      <text x="100" y="44.5" fontSize="5" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.4">app.example.com</text>

      {/* ─── App navbar ─── */}
      <rect x="36" y="58" width="248" height="18" rx="2" fill="var(--brand-500)" fillOpacity="0.08" />
      {/* Nav logo placeholder */}
      <rect x="42" y="62" width="24" height="10" rx="2" fill="var(--brand-400)" fillOpacity="0.25" />
      {/* Nav links */}
      <rect x="76" y="65" width="20" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.2" />
      <rect x="102" y="65" width="16" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.2" />
      <rect x="124" y="65" width="22" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.2" />
      {/* CTA button */}
      <rect x="240" y="62" width="36" height="10" rx="5" fill="var(--brand-500)" fillOpacity="0.3" />
      <rect x="246" y="65.5" width="24" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.5" />

      {/* ─── App content: hero area ─── */}
      <rect x="42" y="84" width="110" height="6" rx="2" fill="var(--brand-400)" fillOpacity="0.3" />
      <rect x="42" y="94" width="80" height="4" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.15" />
      <rect x="42" y="101" width="90" height="4" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.12" />
      {/* Hero CTA */}
      <rect x="42" y="112" width="44" height="12" rx="6" fill="var(--brand-500)" fillOpacity="0.25" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.5" />
      <rect x="50" y="116.5" width="28" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.4" />

      {/* ─── App content: card grid ─── */}
      {/* Card 1 */}
      <rect x="42" y="134" width="74" height="52" rx="6" fill="var(--brand-400)" fillOpacity="0.06" stroke="var(--brand-400)" strokeOpacity="0.12" strokeWidth="0.5" />
      <circle cx="56" cy="148" r="6" fill="var(--brand-500)" fillOpacity="0.12" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.5" />
      <rect x="68" y="145" width="38" height="3.5" rx="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <rect x="68" y="151" width="28" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.12" />
      <rect x="48" y="162" width="60" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.1" />
      <rect x="48" y="168" width="50" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.08" />
      <rect x="48" y="176" width="30" height="6" rx="3" fill="var(--accent-500)" fillOpacity="0.2" />

      {/* Card 2 */}
      <rect x="124" y="134" width="74" height="52" rx="6" fill="var(--brand-400)" fillOpacity="0.06" stroke="var(--brand-400)" strokeOpacity="0.12" strokeWidth="0.5" />
      <circle cx="138" cy="148" r="6" fill="var(--accent-500)" fillOpacity="0.12" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="0.5" />
      <rect x="150" y="145" width="38" height="3.5" rx="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <rect x="150" y="151" width="32" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.12" />
      <rect x="130" y="162" width="58" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.1" />
      <rect x="130" y="168" width="44" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.08" />
      <rect x="130" y="176" width="30" height="6" rx="3" fill="var(--accent-500)" fillOpacity="0.2" />

      {/* ─── App content: mini chart ─── */}
      <rect x="206" y="84" width="74" height="52" rx="6" fill="var(--brand-400)" fillOpacity="0.06" stroke="var(--brand-400)" strokeOpacity="0.12" strokeWidth="0.5" />
      {/* Chart bars */}
      <rect x="216" y="114" width="8" height="14" rx="1.5" fill="var(--brand-500)" fillOpacity="0.2" />
      <rect x="228" y="106" width="8" height="22" rx="1.5" fill="var(--brand-400)" fillOpacity="0.25" />
      <rect x="240" y="110" width="8" height="18" rx="1.5" fill="var(--accent-500)" fillOpacity="0.2" />
      <rect x="252" y="100" width="8" height="28" rx="1.5" fill="var(--brand-500)" fillOpacity="0.3" />
      <rect x="264" y="104" width="8" height="24" rx="1.5" fill="var(--accent-400)" fillOpacity="0.25" />
      {/* Chart label */}
      <rect x="212" y="90" width="30" height="3.5" rx="1.5" fill="var(--brand-400)" fillOpacity="0.2" />

      {/* ─── App content: data table hint ─── */}
      <rect x="206" y="144" width="74" height="42" rx="6" fill="var(--brand-400)" fillOpacity="0.06" stroke="var(--brand-400)" strokeOpacity="0.12" strokeWidth="0.5" />
      {/* Table header */}
      <rect x="212" y="150" width="62" height="4" rx="1" fill="var(--brand-400)" fillOpacity="0.12" />
      {/* Table rows */}
      <line x1="212" y1="158" x2="274" y2="158" stroke="var(--brand-400)" strokeOpacity="0.08" strokeWidth="0.5" />
      <rect x="212" y="161" width="40" height="3" rx="1" fill="var(--text-subtle)" fillOpacity="0.1" />
      <rect x="258" y="161" width="16" height="3" rx="1" fill="var(--accent-400)" fillOpacity="0.12" />
      <line x1="212" y1="168" x2="274" y2="168" stroke="var(--brand-400)" strokeOpacity="0.08" strokeWidth="0.5" />
      <rect x="212" y="171" width="36" height="3" rx="1" fill="var(--text-subtle)" fillOpacity="0.1" />
      <rect x="258" y="171" width="16" height="3" rx="1" fill="var(--brand-400)" fillOpacity="0.12" />
      <line x1="212" y1="178" x2="274" y2="178" stroke="var(--brand-400)" strokeOpacity="0.08" strokeWidth="0.5" />

      {/* ─── App footer hint ─── */}
      <rect x="36" y="196" width="248" height="16" rx="2" fill="var(--brand-500)" fillOpacity="0.05" />
      <rect x="56" y="202" width="30" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.1" />
      <rect x="96" y="202" width="24" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.1" />
      <rect x="130" y="202" width="28" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.1" />

      {/* ─── Tablet device (right side) ─── */}
      <rect x="308" y="60" width="70" height="100" rx="6" fill="url(#webAppAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1" />
      {/* Tablet screen */}
      <rect x="313" y="68" width="60" height="84" rx="3" fill="var(--brand-400)" fillOpacity="0.04" />
      {/* Tablet nav */}
      <rect x="316" y="72" width="54" height="8" rx="1.5" fill="var(--brand-500)" fillOpacity="0.08" />
      <rect x="319" y="74.5" width="12" height="3" rx="1" fill="var(--brand-400)" fillOpacity="0.2" />
      {/* Tablet content blocks */}
      <rect x="316" y="84" width="54" height="4" rx="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="316" y="91" width="40" height="3" rx="1" fill="var(--text-subtle)" fillOpacity="0.1" />
      <rect x="316" y="98" width="24" height="18" rx="3" fill="var(--brand-400)" fillOpacity="0.06" stroke="var(--brand-400)" strokeOpacity="0.1" strokeWidth="0.5" />
      <rect x="344" y="98" width="24" height="18" rx="3" fill="var(--accent-400)" fillOpacity="0.06" stroke="var(--accent-400)" strokeOpacity="0.1" strokeWidth="0.5" />
      {/* Tablet chart hint */}
      <rect x="316" y="120" width="54" height="24" rx="3" fill="var(--brand-400)" fillOpacity="0.04" stroke="var(--brand-400)" strokeOpacity="0.08" strokeWidth="0.5" />
      <rect x="320" y="130" width="5" height="10" rx="1" fill="var(--brand-500)" fillOpacity="0.15" />
      <rect x="328" y="126" width="5" height="14" rx="1" fill="var(--brand-400)" fillOpacity="0.18" />
      <rect x="336" y="128" width="5" height="12" rx="1" fill="var(--accent-500)" fillOpacity="0.15" />
      <rect x="344" y="124" width="5" height="16" rx="1" fill="var(--brand-500)" fillOpacity="0.2" />

      {/* ─── Mobile device (bottom right) ─── */}
      <rect x="330" y="180" width="42" height="76" rx="6" fill="url(#webAppAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1" />
      {/* Mobile screen */}
      <rect x="334" y="188" width="34" height="60" rx="3" fill="var(--brand-400)" fillOpacity="0.04" />
      {/* Mobile nav (hamburger) */}
      <rect x="337" y="191" width="28" height="6" rx="1" fill="var(--brand-500)" fillOpacity="0.08" />
      <rect x="339" y="193" width="4" height="1.5" rx="0.5" fill="var(--brand-400)" fillOpacity="0.3" />
      <rect x="339" y="195" width="4" height="0.5" rx="0.25" fill="var(--brand-400)" fillOpacity="0.2" />
      {/* Mobile content */}
      <rect x="337" y="200" width="28" height="3" rx="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="337" y="206" width="20" height="2.5" rx="1" fill="var(--text-subtle)" fillOpacity="0.1" />
      {/* Mobile card */}
      <rect x="337" y="212" width="28" height="16" rx="2" fill="var(--brand-400)" fillOpacity="0.05" stroke="var(--brand-400)" strokeOpacity="0.08" strokeWidth="0.5" />
      <rect x="340" y="216" width="16" height="2.5" rx="1" fill="var(--brand-400)" fillOpacity="0.12" />
      <rect x="340" y="221" width="22" height="2" rx="1" fill="var(--text-subtle)" fillOpacity="0.08" />
      {/* Mobile CTA */}
      <rect x="337" y="232" width="28" height="8" rx="4" fill="var(--brand-500)" fillOpacity="0.18" />
      <rect x="342" y="234.5" width="18" height="3" rx="1.5" fill="var(--text-subtle)" fillOpacity="0.35" />
      {/* Mobile home indicator */}
      <rect x="345" y="244" width="12" height="2" rx="1" fill="var(--text-subtle)" fillOpacity="0.15" />

      {/* ─── Connecting lines (responsive indication) ─── */}
      <line x1="290" y1="100" x2="308" y2="100" stroke="var(--brand-400)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="290" y1="170" x2="330" y2="200" stroke="var(--accent-400)" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 3" />

      {/* ─── Side annotations ─── */}
      <text x="14" y="155" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.45" transform="rotate(-90, 14, 155)">RESPONSIVE</text>

      <text x="390" y="165" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.45" transform="rotate(90, 390, 165)">PRODUCTION</text>
    </svg>
  </div>
);
