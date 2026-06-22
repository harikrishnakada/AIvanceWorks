/**
 * EnterpriseAiHeroIllustration — inline SVG for the Enterprise AI Development service hero.
 *
 * Visual concept: a central AI core (a small chip / node graph) enclosed by concentric
 * protective rings — the enterprise delivery wrapper — with small shield, lock, scale, and
 * pulse glyphs riding the rings. The message mirrors the signature: the model is the core,
 * and the layers wrapped around it are the work that reaches production.
 *
 * Color strategy: all fills and strokes use CSS custom properties (var(--brand-*),
 * var(--accent-*)) so the illustration inherits the active data-theme automatically.
 * No hardcoded hex values.
 *
 * Accessibility: wrapped in a role="img" div with descriptive aria-label. SVG has <title>
 * and <desc>. Internal decorative elements are aria-hidden via the parent role="img".
 */

export const EnterpriseAiHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="An enterprise AI core at the center, wrapped in concentric protective layers representing security, data governance, scalable architecture, operations, and adoption — the delivery wrapper that takes AI to production"
  >
    <svg viewBox="0 0 400 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <title>Enterprise AI Delivery Wrapper Illustration</title>
      <desc>
        A central AI capability surrounded by concentric enterprise-grade layers — security
        and access, data governance, scalable architecture, observability and operations, and
        adoption — all framed as governed enterprise production.
      </desc>

      <defs>
        <radialGradient id="eai-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="eai-core" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-300)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.20" />
        </linearGradient>
      </defs>

      {/* background glow */}
      <ellipse cx="200" cy="160" rx="185" ry="150" fill="url(#eai-glow)" />

      {/* decorative particles */}
      <circle cx="34" cy="48" r="1.5" fill="var(--brand-300)" fillOpacity="0.28" />
      <circle cx="368" cy="70" r="1" fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="52" cy="280" r="1" fill="var(--brand-400)" fillOpacity="0.18" />
      <circle cx="356" cy="262" r="1.5" fill="var(--accent-400)" fillOpacity="0.22" />

      {/* concentric wrapper rings (outer → inner) */}
      <circle cx="200" cy="160" r="138" fill="none" stroke="var(--brand-400)" strokeWidth="1" strokeOpacity="0.16" strokeDasharray="3 5" />
      <circle cx="200" cy="160" r="112" fill="none" stroke="var(--brand-400)" strokeWidth="1" strokeOpacity="0.22" />
      <circle cx="200" cy="160" r="86" fill="none" stroke="var(--brand-400)" strokeWidth="1.1" strokeOpacity="0.30" />
      <circle cx="200" cy="160" r="60" fill="none" stroke="var(--brand-300)" strokeWidth="1.2" strokeOpacity="0.38" />

      {/* ring glyphs — small tokens of each layer */}
      {/* shield (security) — top */}
      <g transform="translate(200 22)" stroke="var(--brand-200)" strokeWidth="1.4" strokeOpacity="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 -7 C 5 -4, 9 -4, 9 -4 L 9 1 C 9 6, 4 9, 0 11 C -4 9, -9 6, -9 1 L -9 -4 C -9 -4, -5 -4, 0 -7 Z" />
        <path d="M-3.5 1 L -0.5 4 L 4 -2" />
      </g>
      {/* lock (governance) — right */}
      <g transform="translate(338 160)" stroke="var(--brand-200)" strokeWidth="1.4" strokeOpacity="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-7" y="-2" width="14" height="10" rx="2" />
        <path d="M-4 -2 V-5 a4 4 0 0 1 8 0 V-2" />
      </g>
      {/* scale / boxes (architecture) — bottom */}
      <g transform="translate(200 298)" stroke="var(--brand-200)" strokeWidth="1.4" strokeOpacity="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-9" y="-5" width="7" height="7" rx="1" />
        <rect x="2" y="-5" width="7" height="7" rx="1" />
        <rect x="-3.5" y="3" width="7" height="7" rx="1" />
      </g>
      {/* pulse (operations) — left */}
      <g transform="translate(62 160)" stroke="var(--brand-200)" strokeWidth="1.4" strokeOpacity="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-9 0 H-3 L-1 -6 L2 6 L4 0 H9" />
      </g>

      {/* center core — chip with mini node graph */}
      <rect x="170" y="130" width="60" height="60" rx="12" fill="url(#eai-core)" stroke="var(--accent-400)" strokeWidth="1.2" strokeOpacity="0.6" />
      {/* chip pins */}
      <g stroke="var(--accent-300)" strokeWidth="1.1" strokeOpacity="0.5" strokeLinecap="round">
        <path d="M178 130 V124M192 130 V124M206 130 V124M220 130 V124" />
        <path d="M178 190 V196M192 190 V196M206 190 V196M220 190 V196" />
        <path d="M170 142 H164M170 156 H164M170 170 H164" />
        <path d="M230 142 H236M230 156 H236M230 170 H236" />
      </g>
      {/* mini node graph inside */}
      <g stroke="var(--accent-200)" strokeWidth="0.8" strokeOpacity="0.45">
        <line x1="184" y1="150" x2="200" y2="144" />
        <line x1="184" y1="150" x2="200" y2="168" />
        <line x1="184" y1="170" x2="200" y2="144" />
        <line x1="184" y1="170" x2="200" y2="168" />
        <line x1="200" y1="144" x2="216" y2="160" />
        <line x1="200" y1="168" x2="216" y2="160" />
      </g>
      <circle cx="184" cy="150" r="3" fill="var(--accent-300)" fillOpacity="0.7" />
      <circle cx="184" cy="170" r="3" fill="var(--accent-300)" fillOpacity="0.7" />
      <circle cx="200" cy="144" r="3.2" fill="var(--accent-200)" fillOpacity="0.75" />
      <circle cx="200" cy="168" r="3.2" fill="var(--accent-200)" fillOpacity="0.75" />
      <circle cx="216" cy="160" r="3.4" fill="var(--accent-100)" fillOpacity="0.8" />

      {/* core label */}
      <text x="200" y="214" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="0.08em" fill="var(--accent-200)" fillOpacity="0.8">
        AI CORE
      </text>

      {/* bottom strip label */}
      <text x="200" y="314" textAnchor="middle" fontSize="7.5" fontWeight="600" letterSpacing="0.05em" fill="var(--brand-300)" fillOpacity="0.5">
        Security · Governance · Scale · Operations · Adoption
      </text>
    </svg>
  </div>
);
