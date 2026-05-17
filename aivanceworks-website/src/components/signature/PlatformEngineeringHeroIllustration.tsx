/**
 * PlatformEngineeringHeroIllustration — inline SVG for the Platform
 * Engineering service hero right column.
 *
 * Visual concept: a layered platform stack — developer portal at the top
 * connected to golden paths in the middle and self-service infrastructure
 * modules at the bottom, with a left-side rail of developer "consumers"
 * pulling templates and infrastructure on demand. Communicates: an internal
 * developer platform is a layered system that developers self-serve from.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const PlatformEngineeringHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Internal developer platform stack — developer portal, golden paths, and self-service infrastructure with developers consuming templates on demand"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Platform Engineering Illustration</title>
      <desc>
        A layered developer platform diagram showing a developer portal at the
        top, a golden-paths layer in the middle, and self-service
        infrastructure modules at the bottom — with developers self-serving
        templates from the platform.
      </desc>

      <defs>
        <linearGradient id="peLayerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.22" />
        </linearGradient>

        <linearGradient id="peAccentLayer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.25" />
        </linearGradient>

        <radialGradient id="peGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="peFlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="220" cy="160" rx="190" ry="150" fill="url(#peGlow)" />

      {/* Decorative particles */}
      <circle cx="40" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="370" cy="50" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="50" cy="290" r="1" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="360" cy="280" r="1.5" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="200" cy="18" r="1" fill="var(--brand-300)" fillOpacity="0.25" />
      <circle cx="210" cy="305" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* Outer boundary ring */}
      <ellipse cx="220" cy="160" rx="195" ry="155" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />

      {/* ── Developer consumers (left rail) ── */}
      {[60, 130, 200, 270].map((y, idx) => (
        <g key={idx}>
          <circle cx="40" cy={y} r="9" fill="var(--brand-500)" fillOpacity="0.15" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="1" />
          {/* user glyph */}
          <circle cx="40" cy={y - 2} r="2.4" fill="var(--brand-300)" fillOpacity="0.8" />
          <path d={`M34,${y + 5} C34,${y + 1} 46,${y + 1} 46,${y + 5}`} fill="var(--brand-300)" fillOpacity="0.7" />
          {/* connector to portal */}
          <path
            d={`M50,${y} C75,${y} 75,90 105,90`}
            stroke="var(--brand-400)"
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="3 3"
            fill="none"
          />
        </g>
      ))}

      <text x="40" y="20" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" textAnchor="middle" fill="var(--brand-300)" fillOpacity="0.45">DEVS</text>

      {/* ── Tier 1: Developer Portal ── */}
      <rect x="105" y="65" width="240" height="50" rx="10" fill="url(#peLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.45" strokeWidth="1" />
      <text x="125" y="83" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.9">
        DEVELOPER PORTAL
      </text>
      {/* portal tiles */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={130 + i * 50} y={92} width="38" height="16" rx="3" fill="var(--brand-500)" fillOpacity="0.18" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.7" />
          <line x1={135 + i * 50} y1={97} x2={163 + i * 50} y2={97} stroke="var(--brand-300)" strokeOpacity="0.5" strokeWidth="0.7" />
          <line x1={135 + i * 50} y1={101} x2={158 + i * 50} y2={101} stroke="var(--brand-300)" strokeOpacity="0.35" strokeWidth="0.7" />
          <line x1={135 + i * 50} y1={104} x2={155 + i * 50} y2={104} stroke="var(--brand-300)" strokeOpacity="0.3" strokeWidth="0.7" />
        </g>
      ))}

      {/* Flow line between portal and golden paths */}
      <line x1="225" y1="115" x2="225" y2="135" stroke="url(#peFlow)" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* ── Tier 2: Golden Paths ── */}
      <rect x="105" y="135" width="240" height="50" rx="10" fill="url(#peLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="125" y="153" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.9">
        GOLDEN PATHS
      </text>
      {/* pipeline glyphs */}
      <g transform="translate(125,162)">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <circle cx={i * 42} cy="9" r="4" fill="var(--brand-500)" fillOpacity="0.25" stroke="var(--brand-400)" strokeOpacity="0.55" strokeWidth="0.7" />
            {i < 4 && <line x1={i * 42 + 4} y1="9" x2={i * 42 + 38} y2="9" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="2 2" />}
          </g>
        ))}
      </g>
      <text x="125" y="180" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--brand-300)" fillOpacity="0.5">
        SCAFFOLD → BUILD → SCAN → DEPLOY → OBSERVE
      </text>

      {/* Flow line between golden paths and self-service infra */}
      <line x1="225" y1="185" x2="225" y2="205" stroke="url(#peFlow)" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* ── Tier 3: Self-Service Infrastructure ── */}
      <rect x="105" y="205" width="240" height="55" rx="10" fill="url(#peAccentLayer)" stroke="var(--accent-400)" strokeOpacity="0.45" strokeWidth="1" />
      <text x="125" y="223" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.9">
        SELF-SERVICE INFRASTRUCTURE
      </text>
      {/* infra modules */}
      {[
        { x: 125, label: 'ENV' },
        { x: 170, label: 'DB' },
        { x: 215, label: 'IAM' },
        { x: 260, label: 'QUE' },
        { x: 305, label: 'OBS' },
      ].map((m, i) => (
        <g key={i}>
          <rect x={m.x} y={232} width="32" height="20" rx="4" fill="var(--accent-500)" fillOpacity="0.2" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
          <text x={m.x + 16} y={244} textAnchor="middle" fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">
            {m.label}
          </text>
        </g>
      ))}

      {/* ── Foundation strip ── */}
      <rect x="105" y="275" width="240" height="26" rx="6" fill="var(--brand-600)" fillOpacity="0.18" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 3" />
      <text x="225" y="291" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.10em" fill="var(--brand-300)" fillOpacity="0.75">
        CLOUD · IDENTITY · COST · OWNERSHIP
      </text>
    </svg>
  </div>
);
