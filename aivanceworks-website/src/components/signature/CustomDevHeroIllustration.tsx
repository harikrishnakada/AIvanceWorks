/**
 * CustomDevHeroIllustration — inline SVG for the Custom Software Development hero right column.
 *
 * Visual concept: a modular application assembly diagram showing interconnected software
 * components — a frontend module, API layer, database, cloud infrastructure, and connecting
 * data flows. Represents the breadth of custom software development: full-stack, production-grade,
 * enterprise-ready.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const CustomDevHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Modular software architecture diagram showing frontend, API, database, and cloud layers connected by data flows"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Custom Software Architecture Illustration</title>
      <desc>
        A modular application assembly showing interconnected software components —
        frontend UI, API gateway, microservices, database layer, and cloud
        infrastructure — connected by flowing data lines representing a full-stack
        custom software system.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="customLayerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--brand-400)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="customAccentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.12" />
          <stop offset="50%" stopColor="var(--accent-400)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.12" />
        </linearGradient>

        <radialGradient id="customGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="customFlowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="190" ry="150" fill="url(#customGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="42" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="358" cy="55" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="50" cy="280" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="350" cy="265" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="175" cy="15" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="235" cy="305" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Central hub: API / Service layer ─── */}
      <rect x="130" y="130" width="140" height="60" rx="12" fill="url(#customAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="200" y="155" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">API GATEWAY</text>
      <text x="200" y="175" textAnchor="middle" fontSize="6.5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.5">REST · GraphQL · Events</text>

      {/* ─── Top: Frontend / UI module ─── */}
      <rect x="120" y="24" width="160" height="44" rx="10" fill="url(#customLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Browser icon */}
      <rect x="140" y="35" width="18" height="14" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="1" />
      <line x1="140" y1="41" x2="158" y2="41" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <circle cx="144" cy="38" r="1" fill="var(--accent-400)" fillOpacity="0.7" />
      <circle cx="148" cy="38" r="1" fill="var(--brand-400)" fillOpacity="0.5" />
      {/* Mobile icon */}
      <rect x="168" y="34" width="11" height="17" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="1" />
      <circle cx="173.5" cy="48" r="1" fill="var(--brand-400)" fillOpacity="0.5" />
      <text x="230" y="50" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">FRONTEND</text>

      {/* ─── Flow: Frontend → API ─── */}
      <line x1="175" y1="68" x2="175" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="225" y1="68" x2="225" y2="130" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* ─── Left: Microservices cluster ─── */}
      <rect x="16" y="115" width="88" height="34" rx="8" fill="url(#customLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1" />
      <text x="60" y="137" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">SERVICES</text>

      <rect x="16" y="158" width="88" height="34" rx="8" fill="url(#customLayerGrad)" stroke="var(--brand-500)" strokeOpacity="0.25" strokeWidth="1" />
      <text x="60" y="180" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">WORKERS</text>

      {/* ─── Flow: API → Services ─── */}
      <line x1="130" y1="150" x2="104" y2="135" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="130" y1="170" x2="104" y2="170" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* ─── Right: Security / Auth module ─── */}
      <rect x="296" y="115" width="88" height="34" rx="8" fill="url(#customAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1" />
      {/* Lock icon */}
      <rect x="312" y="128" width="8" height="7" rx="1" fill="none" stroke="var(--accent-400)" strokeOpacity="0.7" strokeWidth="1" />
      <path d="M313.5,128 L313.5,125 A2.5,2.5 0 0 1 318.5,125 L318.5,128" fill="none" stroke="var(--accent-400)" strokeOpacity="0.7" strokeWidth="1" />
      <text x="352" y="137" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">AUTH</text>

      <rect x="296" y="158" width="88" height="34" rx="8" fill="url(#customAccentGrad)" stroke="var(--accent-500)" strokeOpacity="0.25" strokeWidth="1" />
      <text x="340" y="180" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">MONITORING</text>

      {/* ─── Flow: API → Auth / Monitoring ─── */}
      <line x1="270" y1="150" x2="296" y2="135" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="270" y1="170" x2="296" y2="170" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* ─── Bottom: Database layer ─── */}
      <rect x="100" y="218" width="90" height="38" rx="8" fill="url(#customLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1" />
      {/* DB icon */}
      <ellipse cx="125" cy="232" rx="7" ry="3.5" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="118" y1="232" x2="118" y2="241" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="132" y1="232" x2="132" y2="241" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <ellipse cx="125" cy="241" rx="7" ry="3.5" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="165" y="242" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">DATA</text>

      {/* ─── Bottom: Cloud infrastructure ─── */}
      <rect x="210" y="218" width="90" height="38" rx="8" fill="url(#customAccentGrad)" stroke="var(--accent-500)" strokeOpacity="0.25" strokeWidth="1" />
      {/* Cloud icon */}
      <path d="M232,240 A6,6 0 0 1 238,233 A5,5 0 0 1 247,234 A4,4 0 0 1 252,240 Z" fill="none" stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <text x="275" y="242" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">CLOUD</text>

      {/* ─── Flow: API → Database / Cloud ─── */}
      <line x1="175" y1="190" x2="150" y2="218" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="225" y1="190" x2="250" y2="218" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* ─── Bottom: CI/CD pipeline strip ─── */}
      <rect x="84" y="276" width="232" height="28" rx="8" fill="url(#customLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1" />
      {/* Pipeline dots */}
      <circle cx="130" cy="290" r="3" fill="var(--brand-500)" fillOpacity="0.2" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="133" y1="290" x2="157" y2="290" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="160" cy="290" r="3" fill="var(--brand-500)" fillOpacity="0.2" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="163" y1="290" x2="187" y2="290" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="190" cy="290" r="3" fill="var(--accent-500)" fillOpacity="0.2" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="193" y1="290" x2="217" y2="290" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="220" cy="290" r="3" fill="var(--accent-500)" fillOpacity="0.2" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="223" y1="290" x2="247" y2="290" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="250" cy="290" r="3" fill="var(--brand-500)" fillOpacity="0.2" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <text x="290" y="293" textAnchor="middle" fontSize="6" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.5">CI/CD</text>

      {/* ─── Flow: Data/Cloud → Pipeline ─── */}
      <line x1="145" y1="256" x2="145" y2="276" stroke="var(--brand-400)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="255" y1="256" x2="255" y2="276" stroke="var(--accent-400)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />

      {/* ─── Side annotations ─── */}
      <text x="22" y="80" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.4" transform="rotate(-90, 22, 80)">FULL-STACK</text>

      <text x="378" y="240" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.4" transform="rotate(90, 378, 240)">PRODUCTION-GRADE</text>
    </svg>
  </div>
);
