/**
 * SaasHeroIllustration — inline SVG for the SaaS Development hero right column.
 *
 * Visual concept: a vertical stack of horizontal platform layers connected by
 * flowing data lines — representing the multi-tenant SaaS architecture from
 * client apps at the top through API gateway, core services, data layer, to
 * cloud infrastructure at the base. Each layer is a rounded strip with a label
 * and an icon glyph. Connecting lines pulse subtly between layers.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const SaasHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Layered SaaS platform architecture from client applications through API, services, and data to cloud infrastructure"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>SaaS Platform Architecture Illustration</title>
      <desc>
        A vertical stack of five horizontal platform layers — Client Apps, API
        Gateway, Core SaaS Services, Data Layer, and Cloud Infrastructure —
        connected by flowing data lines, representing a multi-tenant SaaS
        architecture.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="saasLayerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--brand-400)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="saasAccentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-500)" stopOpacity="0.12" />
          <stop offset="50%" stopColor="var(--accent-400)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.12" />
        </linearGradient>

        <linearGradient id="saasFlowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.5" />
        </linearGradient>

        <radialGradient id="saasGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="190" ry="150" fill="url(#saasGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="38" cy="35" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="362" cy="50" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="45" cy="285" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="355" cy="270" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="170" cy="12" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="240" cy="308" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Connecting flow lines ─── */}
      {/* Layer 1 → 2 */}
      <line x1="140" y1="62" x2="140" y2="82" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="200" y1="62" x2="200" y2="82" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="260" y1="62" x2="260" y2="82" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Layer 2 → 3 */}
      <line x1="150" y1="120" x2="130" y2="140" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="200" y1="120" x2="200" y2="140" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="250" y1="120" x2="270" y2="140" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* Layer 3 → 4 */}
      <line x1="140" y1="178" x2="140" y2="198" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="200" y1="178" x2="200" y2="198" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="260" y1="178" x2="260" y2="198" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* Layer 4 → 5 */}
      <line x1="160" y1="236" x2="160" y2="256" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="200" y1="236" x2="200" y2="256" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="240" y1="236" x2="240" y2="256" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* ─── Layer 1: Client Apps ─── */}
      <rect x="72" y="24" width="256" height="38" rx="8" fill="url(#saasLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Web icon (simplified browser) */}
      <rect x="92" y="34" width="16" height="12" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="1" />
      <line x1="92" y1="39" x2="108" y2="39" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <circle cx="96" cy="36.5" r="1" fill="var(--accent-400)" fillOpacity="0.7" />
      {/* Mobile icon */}
      <rect x="118" y="33" width="10" height="16" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="1" />
      <circle cx="123" cy="46" r="1" fill="var(--brand-400)" fillOpacity="0.5" />
      {/* API consumer icon */}
      <text x="140" y="46" fontSize="6" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.6" fontWeight="500">{'{ }'}</text>
      {/* Label */}
      <text x="200" y="48" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">CLIENT APPS</text>

      {/* ─── Layer 2: API Gateway + Auth ─── */}
      <rect x="84" y="82" width="232" height="38" rx="8" fill="url(#saasLayerGrad)" stroke="var(--brand-500)" strokeOpacity="0.3" strokeWidth="1" />
      {/* Lock icon */}
      <rect x="104" y="96" width="8" height="7" rx="1" fill="none" stroke="var(--accent-400)" strokeOpacity="0.7" strokeWidth="1" />
      <path d="M105.5,96 L105.5,93 A2.5,2.5 0 0 1 110.5,93 L110.5,96" fill="none" stroke="var(--accent-400)" strokeOpacity="0.7" strokeWidth="1" />
      {/* Label */}
      <text x="200" y="106" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">API GATEWAY + AUTH</text>

      {/* ─── Layer 3: Core SaaS Services (wider) ─── */}
      <rect x="56" y="140" width="288" height="38" rx="8" fill="url(#saasAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1" />
      {/* Service dots */}
      <circle cx="100" cy="159" r="4" fill="var(--brand-500)" fillOpacity="0.2" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="100" y="161.5" textAnchor="middle" fontSize="4.5" fontWeight="700" fill="var(--brand-400)" fillOpacity="0.8">B</text>
      <circle cx="148" cy="159" r="4" fill="var(--brand-500)" fillOpacity="0.2" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="148" y="161.5" textAnchor="middle" fontSize="4.5" fontWeight="700" fill="var(--brand-400)" fillOpacity="0.8">T</text>
      <circle cx="252" cy="159" r="4" fill="var(--accent-500)" fillOpacity="0.2" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="252" y="161.5" textAnchor="middle" fontSize="4.5" fontWeight="700" fill="var(--accent-400)" fillOpacity="0.8">F</text>
      <circle cx="300" cy="159" r="4" fill="var(--accent-500)" fillOpacity="0.2" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="300" y="161.5" textAnchor="middle" fontSize="4.5" fontWeight="700" fill="var(--accent-400)" fillOpacity="0.8">N</text>
      {/* Label */}
      <text x="200" y="155" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">BILLING  ·  TENANTS  ·  FLAGS  ·  NOTIFY</text>

      {/* ─── Layer 4: Data Layer ─── */}
      <rect x="72" y="198" width="256" height="38" rx="8" fill="url(#saasLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1" />
      {/* DB icons */}
      <ellipse cx="104" cy="214" rx="6" ry="3" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="98" y1="214" x2="98" y2="221" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="110" y1="214" x2="110" y2="221" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <ellipse cx="104" cy="221" rx="6" ry="3" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      {/* Second DB (tenant isolation) */}
      <ellipse cx="136" cy="214" rx="6" ry="3" fill="none" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="130" y1="214" x2="130" y2="221" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="142" y1="214" x2="142" y2="221" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <ellipse cx="136" cy="221" rx="6" ry="3" fill="none" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      {/* Label */}
      <text x="230" y="222" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">DATA · CACHE · QUEUE</text>

      {/* ─── Layer 5: Cloud Infrastructure ─── */}
      <rect x="84" y="256" width="232" height="38" rx="8" fill="url(#saasAccentGrad)" stroke="var(--accent-500)" strokeOpacity="0.25" strokeWidth="1" />
      {/* Cloud icon */}
      <path d="M102,278 A5,5 0 0 1 107,272 A4,4 0 0 1 114,273 A3.5,3.5 0 0 1 118,278 Z" fill="none" stroke="var(--accent-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      {/* Label */}
      <text x="210" y="280" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">AZURE / AWS · IaC · CDN · MONITOR</text>

      {/* ─── Side annotations ─── */}
      {/* Multi-tenant callout */}
      <text x="24" y="162" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.5" transform="rotate(-90, 24, 162)">MULTI-TENANT</text>

      {/* Scalable callout */}
      <text x="376" y="162" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.5" transform="rotate(90, 376, 162)">SCALABLE</text>
    </svg>
  </div>
);
