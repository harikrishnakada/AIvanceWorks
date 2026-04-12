/**
 * CloudInfraHeroIllustration — inline SVG for the Cloud Infrastructure hero right column.
 *
 * Visual concept: a layered infrastructure stack showing three tiers (compute,
 * networking, storage) connected by deployment pipeline arrows flowing down
 * from a CI/CD badge at the top. Monitoring pulse lines run alongside.
 * Represents the full operational lifecycle — everything managed, everything connected.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const CloudInfraHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Cloud infrastructure stack showing compute, networking, and storage layers connected by CI/CD pipelines with monitoring"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Cloud Infrastructure Stack Illustration</title>
      <desc>
        A layered infrastructure diagram with compute, networking, and storage
        tiers connected by deployment pipeline arrows, with monitoring pulse
        lines running alongside — representing production-grade cloud operations.
      </desc>

      {/* ─── Defs ─── */}
      <defs>
        <linearGradient id="ciLayerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--brand-600)" stopOpacity="0.08" />
        </linearGradient>

        <linearGradient id="ciAccentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="ciPipeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.3" />
        </linearGradient>

        <radialGradient id="ciGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="175" ry="140" fill="url(#ciGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="55" cy="50" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="345" cy="65" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="60" cy="270" r="1" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="340" cy="255" r="1.5" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="175" cy="18" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="250" cy="300" r="1" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── CI/CD Badge (top) ─── */}
      <rect x="150" y="22" width="100" height="30" rx="8" fill="url(#ciLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="170" cy="37" r="6" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <polyline points="167,37 170,40 174,34" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <text x="220" y="41" textAnchor="middle" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">CI / CD</text>

      {/* ─── Pipeline arrow (CI/CD → Compute) ─── */}
      <line x1="200" y1="52" x2="200" y2="85" stroke="url(#ciPipeGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="196,83 200,90 204,83" fill="var(--brand-400)" fillOpacity="0.5" />

      {/* ─── Layer 1: Compute ─── */}
      <rect x="90" y="90" width="220" height="52" rx="10" fill="url(#ciLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Container icons */}
      <rect x="110" y="103" width="18" height="14" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <rect x="113" y="106" width="4" height="8" rx="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="119" y="106" width="4" height="8" rx="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="138" y="103" width="18" height="14" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <rect x="141" y="106" width="4" height="8" rx="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="147" y="106" width="4" height="8" rx="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="166" y="103" width="18" height="14" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <rect x="169" y="106" width="4" height="8" rx="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <rect x="175" y="106" width="4" height="8" rx="1" fill="var(--brand-400)" fillOpacity="0.15" />
      <text x="110" y="133" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.7">Kubernetes / Container Apps</text>
      {/* Layer label */}
      <text x="293" y="120" textAnchor="end" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--brand-300)" fillOpacity="0.6">COMPUTE</text>

      {/* ─── Pipeline arrow (Compute → Network) ─── */}
      <line x1="200" y1="142" x2="200" y2="162" stroke="url(#ciPipeGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
      <polygon points="197,160 200,166 203,160" fill="var(--brand-400)" fillOpacity="0.4" />

      {/* ─── Layer 2: Networking ─── */}
      <rect x="90" y="168" width="220" height="52" rx="10" fill="url(#ciAccentGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Network topology dots */}
      <circle cx="120" cy="190" r="4" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <circle cx="148" cy="190" r="4" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <circle cx="176" cy="190" r="4" fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="124" y1="190" x2="144" y2="190" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.8" />
      <line x1="152" y1="190" x2="172" y2="190" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.8" />
      <circle cx="120" cy="190" r="1.5" fill="var(--accent-400)" fillOpacity="0.3" />
      <circle cx="148" cy="190" r="1.5" fill="var(--accent-400)" fillOpacity="0.3" />
      <circle cx="176" cy="190" r="1.5" fill="var(--accent-400)" fillOpacity="0.3" />
      <text x="110" y="210" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.7">VNets / Private Endpoints / NSGs</text>
      <text x="293" y="197" textAnchor="end" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--accent-300)" fillOpacity="0.6">NETWORK</text>

      {/* ─── Pipeline arrow (Network → Storage) ─── */}
      <line x1="200" y1="220" x2="200" y2="240" stroke="url(#ciPipeGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
      <polygon points="197,238 200,244 203,238" fill="var(--accent-400)" fillOpacity="0.4" />

      {/* ─── Layer 3: Storage & Data ─── */}
      <rect x="90" y="246" width="220" height="52" rx="10" fill="url(#ciLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Database icon */}
      <ellipse cx="122" cy="264" rx="10" ry="4" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="112" y1="264" x2="112" y2="276" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line x1="132" y1="264" x2="132" y2="276" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <ellipse cx="122" cy="276" rx="10" ry="4" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="110" y="292" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.7">Databases / Blobs / Key Vault</text>
      <text x="293" y="275" textAnchor="end" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--brand-300)" fillOpacity="0.6">DATA</text>

      {/* ─── Monitoring pulse (left side) ─── */}
      <polyline
        points="60,95 60,130 65,135 55,145 60,150 60,190 65,195 55,205 60,210 60,250 65,255 55,265 60,270 60,295"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <text x="60" y="87" textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em" fill="var(--brand-300)" fillOpacity="0.5">OBSERVE</text>

      {/* ─── Security shield (right side) ─── */}
      <path d="M345,100 L355,95 L365,100 L365,135 A15,15 0 0 1 345,135 Z" fill="none" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M345,165 L355,160 L365,165 L365,200 A15,15 0 0 1 345,200 Z" fill="none" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M345,240 L355,235 L365,240 L365,275 A15,15 0 0 1 345,275 Z" fill="none" stroke="var(--accent-400)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />
      <text x="355" y="87" textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em" fill="var(--accent-300)" fillOpacity="0.5">SECURE</text>

      {/* ─── Outer boundary ─── */}
      <rect x="45" y="14" width="310" height="295" rx="16" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
