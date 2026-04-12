/**
 * CloudMigrationHeroIllustration — inline SVG for the Cloud Migration hero right column.
 *
 * Visual concept: a series of server/workload shapes at the bottom flowing upward
 * through a migration arrow into a cloud shape at the top. The upward flow represents
 * the controlled migration path. Small validation checkmarks appear along the path
 * to reinforce the "validated at every stage" message.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const CloudMigrationHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Cloud migration illustration showing workloads flowing upward through validated checkpoints into a cloud environment"
  >
    <svg
      viewBox="0 0 400 340"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Cloud Migration Illustration</title>
      <desc>
        Server workloads at the bottom flow upward through a staged migration
        path with validation checkpoints into a cloud shape at the top,
        representing controlled, wave-based cloud migration.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="cmCloudGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="cmFlowGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="cmServerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-600)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.1" />
        </linearGradient>

        <radialGradient id="cmGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="140" rx="170" ry="140" fill="url(#cmGlow)" />

      {/* ─── Cloud shape (top) ─── */}
      <path
        d="M140 80 C140 50 170 30 200 30 C230 30 255 45 260 65 C280 55 310 65 310 90 C310 110 290 120 270 118 L140 118 C120 118 105 105 110 90 C113 78 125 72 140 80Z"
        fill="url(#cmCloudGrad)"
        stroke="var(--brand-400)"
        strokeWidth="1"
        strokeOpacity="0.4"
      />

      {/* Cloud internal detail */}
      <circle cx="185" cy="75" r="4" fill="var(--brand-400)" fillOpacity="0.3" />
      <circle cx="215" cy="68" r="3" fill="var(--accent-400)" fillOpacity="0.3" />
      <circle cx="240" cy="82" r="3.5" fill="var(--brand-300)" fillOpacity="0.25" />

      {/* ─── Migration flow path (center) ─── */}
      <path
        d="M200 125 L200 275"
        stroke="url(#cmFlowGrad)"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
      />

      {/* Flow arrow particles */}
      <circle cx="200" cy="145" r="2" fill="var(--brand-400)" fillOpacity="0.6">
        <animate attributeName="cy" values="270;130" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="190" r="1.5" fill="var(--accent-400)" fillOpacity="0.5">
        <animate attributeName="cy" values="270;130" dur="3s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="230" r="1.5" fill="var(--brand-300)" fillOpacity="0.5">
        <animate attributeName="cy" values="270;130" dur="3s" begin="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0" dur="3s" begin="2s" repeatCount="indefinite" />
      </circle>

      {/* ─── Validation checkpoints ─── */}
      {/* Checkpoint 1 */}
      <circle cx="200" cy="165" r="10" fill="var(--brand-500)" fillOpacity="0.12" stroke="var(--brand-400)" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M195 165 L198 168 L205 162" stroke="var(--brand-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Checkpoint 2 */}
      <circle cx="200" cy="210" r="10" fill="var(--accent-500)" fillOpacity="0.12" stroke="var(--accent-400)" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M195 210 L198 213 L205 207" stroke="var(--accent-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Checkpoint 3 */}
      <circle cx="200" cy="255" r="10" fill="var(--brand-500)" fillOpacity="0.12" stroke="var(--brand-400)" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M195 255 L198 258 L205 252" stroke="var(--brand-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* ─── Server workloads (bottom left) ─── */}
      <rect x="70" y="270" width="60" height="35" rx="4" fill="url(#cmServerGrad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="76" y="278" width="20" height="2" rx="1" fill="var(--brand-400)" fillOpacity="0.5" />
      <rect x="76" y="283" width="14" height="2" rx="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <rect x="76" y="288" width="18" height="2" rx="1" fill="var(--brand-400)" fillOpacity="0.4" />
      <circle cx="120" cy="280" r="2" fill="var(--brand-400)" fillOpacity="0.5" />
      <circle cx="120" cy="287" r="2" fill="var(--accent-400)" fillOpacity="0.4" />
      <circle cx="120" cy="294" r="2" fill="var(--brand-300)" fillOpacity="0.3" />

      {/* Server 2 (bottom left, stacked) */}
      <rect x="80" y="310" width="60" height="25" rx="4" fill="url(#cmServerGrad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.3" />
      <rect x="86" y="316" width="16" height="2" rx="1" fill="var(--brand-400)" fillOpacity="0.4" />
      <rect x="86" y="321" width="12" height="2" rx="1" fill="var(--brand-300)" fillOpacity="0.3" />

      {/* ─── Server workloads (bottom right) ─── */}
      <rect x="270" y="270" width="60" height="35" rx="4" fill="url(#cmServerGrad)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="276" y="278" width="20" height="2" rx="1" fill="var(--accent-400)" fillOpacity="0.5" />
      <rect x="276" y="283" width="14" height="2" rx="1" fill="var(--accent-300)" fillOpacity="0.3" />
      <rect x="276" y="288" width="18" height="2" rx="1" fill="var(--accent-400)" fillOpacity="0.4" />
      <circle cx="320" cy="280" r="2" fill="var(--accent-400)" fillOpacity="0.5" />
      <circle cx="320" cy="287" r="2" fill="var(--brand-400)" fillOpacity="0.4" />
      <circle cx="320" cy="294" r="2" fill="var(--accent-300)" fillOpacity="0.3" />

      {/* Server 2 (bottom right, stacked) */}
      <rect x="260" y="310" width="60" height="25" rx="4" fill="url(#cmServerGrad)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.3" />
      <rect x="266" y="316" width="16" height="2" rx="1" fill="var(--accent-400)" fillOpacity="0.4" />
      <rect x="266" y="321" width="12" height="2" rx="1" fill="var(--accent-300)" fillOpacity="0.3" />

      {/* ─── Connecting curves from servers to flow path ─── */}
      <path
        d="M130 280 C160 270 180 265 200 260"
        stroke="var(--brand-400)"
        strokeWidth="0.8"
        strokeOpacity="0.3"
        strokeDasharray="3 3"
        fill="none"
      />
      <path
        d="M270 280 C240 270 220 265 200 260"
        stroke="var(--accent-400)"
        strokeWidth="0.8"
        strokeOpacity="0.3"
        strokeDasharray="3 3"
        fill="none"
      />

      {/* ─── Labels ─── */}
      <text x="100" y="262" textAnchor="middle" className="text-[9px]" fill="var(--brand-300)" fillOpacity="0.7" fontFamily="inherit">
        On-Premises
      </text>
      <text x="300" y="262" textAnchor="middle" className="text-[9px]" fill="var(--accent-300)" fillOpacity="0.7" fontFamily="inherit">
        Workloads
      </text>
      <text x="200" y="50" textAnchor="middle" className="text-[10px]" fill="var(--brand-300)" fillOpacity="0.8" fontFamily="inherit" fontWeight="500">
        Cloud
      </text>

      {/* ─── Decorative dots ─── */}
      <circle cx="155" cy="140" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="250" cy="150" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="145" cy="200" r="1" fill="var(--brand-300)" fillOpacity="0.2" />
      <circle cx="260" cy="195" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />
      <circle cx="160" cy="240" r="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <circle cx="245" cy="235" r="1" fill="var(--accent-400)" fillOpacity="0.15" />
    </svg>
  </div>
);
