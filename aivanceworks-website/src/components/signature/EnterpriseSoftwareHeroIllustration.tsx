/**
 * EnterpriseSoftwareHeroIllustration — inline SVG for the Enterprise Software
 * Development hero right column.
 *
 * Visual concept: a bespoke enterprise platform assembled from interconnected
 * modules around a central hub — the opposite of a rigid off-the-shelf box.
 * Distinct module tiles (operations, data, portal, integration, AI) wire into
 * a central core, with connectors showing systems that finally share data.
 * The message: software shaped around how a business actually operates.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const EnterpriseSoftwareHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Interconnected enterprise software modules wired into a central platform core, representing custom systems built around how a business operates"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Enterprise Platform Illustration</title>
      <desc>
        Five distinct software modules — operations, data, portal, integration,
        and AI — connected by data lines to a central platform core, forming a
        custom enterprise system rather than a single off-the-shelf box.
      </desc>

      <defs>
        <linearGradient id="esdCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" />
          <stop offset="100%" stopColor="var(--brand-600, var(--brand-500))" />
        </linearGradient>
        <linearGradient id="esdModule" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="esdModuleAccent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id="esdCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background field */}
      <ellipse cx="200" cy="150" rx="185" ry="135" fill="var(--brand-500)" fillOpacity="0.04" />

      {/* Connector lines (systems that share data) */}
      <g stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
        <line x1="200" y1="150" x2="86" y2="70" />
        <line x1="200" y1="150" x2="314" y2="70" />
        <line x1="200" y1="150" x2="70" y2="220" />
        <line x1="200" y1="150" x2="330" y2="220" />
        <line x1="200" y1="150" x2="200" y2="256" />
      </g>

      {/* Module: Operations (top-left) */}
      <g>
        <rect x="44" y="44" width="84" height="52" rx="8" fill="url(#esdModule)" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="54" y="55" width="30" height="5" rx="2.5" fill="var(--brand-300)" fillOpacity="0.7" />
        <rect x="54" y="66" width="52" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.4" />
        <rect x="54" y="75" width="44" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.3" />
        <text x="54" y="91" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)">OPERATIONS</text>
      </g>

      {/* Module: Portal (top-right) */}
      <g>
        <rect x="272" y="44" width="84" height="52" rx="8" fill="url(#esdModuleAccent)" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="286" cy="60" r="5" fill="var(--accent-400)" fillOpacity="0.7" />
        <rect x="296" y="57" width="46" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.4" />
        <rect x="282" y="71" width="60" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.35" />
        <rect x="282" y="79" width="40" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.3" />
        <text x="282" y="93" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)">PORTAL</text>
      </g>

      {/* Module: Integration (bottom-left) */}
      <g>
        <rect x="30" y="196" width="84" height="52" rx="8" fill="url(#esdModule)" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="46" cy="214" r="4" fill="var(--brand-300)" fillOpacity="0.8" />
        <circle cx="66" cy="214" r="4" fill="var(--brand-300)" fillOpacity="0.5" />
        <line x1="50" y1="214" x2="62" y2="214" stroke="var(--brand-300)" strokeWidth="1.5" strokeOpacity="0.6" />
        <rect x="40" y="226" width="56" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.35" />
        <text x="40" y="242" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.03em" fill="var(--text-subtle)">INTEGRATION</text>
      </g>

      {/* Module: Data (bottom-right) */}
      <g>
        <rect x="286" y="196" width="84" height="52" rx="8" fill="url(#esdModule)" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="1.5" />
        <ellipse cx="302" cy="212" rx="9" ry="3.5" fill="none" stroke="var(--brand-300)" strokeWidth="1.4" strokeOpacity="0.7" />
        <path d="M293 212 v8 a9 3.5 0 0 0 18 0 v-8" fill="none" stroke="var(--brand-300)" strokeWidth="1.4" strokeOpacity="0.5" />
        <rect x="320" y="209" width="42" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.35" />
        <rect x="320" y="218" width="34" height="4" rx="2" fill="var(--text-subtle)" fillOpacity="0.3" />
        <text x="296" y="242" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)">DATA</text>
      </g>

      {/* Module: AI (bottom-center) */}
      <g>
        <rect x="158" y="258" width="84" height="34" rx="8" fill="url(#esdModuleAccent)" stroke="var(--accent-400)" strokeOpacity="0.55" strokeWidth="1.5" />
        <circle cx="176" cy="275" r="6" fill="none" stroke="var(--accent-400)" strokeWidth="1.4" strokeOpacity="0.8" />
        <circle cx="176" cy="275" r="2" fill="var(--accent-400)" fillOpacity="0.9" />
        <text x="190" y="278" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--accent-400)">AI LAYER</text>
      </g>

      {/* Central platform core */}
      <circle cx="200" cy="150" r="44" fill="url(#esdCoreGlow)" />
      <rect x="164" y="122" width="72" height="56" rx="12" fill="url(#esdCore)" />
      <rect x="176" y="134" width="48" height="6" rx="3" fill="var(--text-light, #f8fafc)" fillOpacity="0.85" />
      <rect x="176" y="146" width="34" height="5" rx="2.5" fill="var(--text-light, #f8fafc)" fillOpacity="0.55" />
      <rect x="176" y="156" width="42" height="5" rx="2.5" fill="var(--text-light, #f8fafc)" fillOpacity="0.4" />
      <text x="200" y="192" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)">YOUR PLATFORM</text>

      {/* Connector nodes on the core edge */}
      <circle cx="200" cy="150" r="46" fill="none" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 4" />
    </svg>
  </div>
);
