/**
 * MobileDevHeroIllustration — inline SVG for the Mobile Development hero right column.
 *
 * Visual concept: Two phone outlines (iOS left, Android right) connected by shared
 * code lines flowing from a central "shared" element. Each phone has simple UI
 * wireframe lines inside suggesting real app screens. Decorative particles and
 * connecting paths suggest a unified development approach.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const MobileDevHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Two mobile phones connected by shared code paths, representing cross-platform development for iOS and Android from a single codebase"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Cross-Platform Mobile Development Illustration</title>
      <desc>
        Two phone outlines side by side — one representing iOS, one Android — connected
        by flowing lines from a central shared-code element, illustrating how a single
        codebase produces apps for both platforms.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="mobilePhoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--brand-600, var(--brand-500))" stopOpacity="0.08" />
        </linearGradient>

        <linearGradient id="mobileAccentGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.08" />
        </linearGradient>

        <linearGradient id="mobileSharedGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
          <stop offset="50%" stopColor="var(--brand-400)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.25" />
        </linearGradient>

        <linearGradient id="mobileFlowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.4" />
        </linearGradient>

        <radialGradient id="mobileGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="150" rx="185" ry="140" fill="url(#mobileGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="40" cy="50" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="360" cy="45" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="55" cy="250" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="345" cy="255" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="200" cy="20" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="95" cy="140" r="2" fill="var(--brand-500)" fillOpacity="0.12" />
      <circle cx="305" cy="140" r="2" fill="var(--accent-500)" fillOpacity="0.12" />

      {/* ─── Connecting flow lines (shared code → both phones) ─── */}
      <path
        d="M 200,135 Q 165,130 130,100"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M 200,135 Q 235,130 270,100"
        fill="none"
        stroke="var(--accent-400)"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M 200,165 Q 165,170 130,200"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.2"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <path
        d="M 200,165 Q 235,170 270,200"
        fill="none"
        stroke="var(--accent-400)"
        strokeOpacity="0.2"
        strokeWidth="1"
        strokeDasharray="4 3"
      />

      {/* ─── Left phone (iOS) ─── */}
      <g>
        <rect
          x="62"
          y="52"
          width="76"
          height="136"
          rx="12"
          fill="url(#mobilePhoneGrad)"
          stroke="var(--brand-400)"
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />
        {/* Notch */}
        <rect x="86" y="52" width="28" height="6" rx="3" fill="var(--brand-500)" fillOpacity="0.15" />
        {/* Screen content wireframe */}
        <rect x="72" y="68" width="56" height="6" rx="2" fill="var(--brand-400)" fillOpacity="0.2" />
        <rect x="72" y="80" width="40" height="4" rx="1.5" fill="var(--brand-300)" fillOpacity="0.15" />
        <rect x="72" y="92" width="56" height="24" rx="4" fill="var(--brand-500)" fillOpacity="0.1" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.6" />
        <rect x="72" y="124" width="56" height="24" rx="4" fill="var(--brand-500)" fillOpacity="0.08" stroke="var(--brand-400)" strokeOpacity="0.15" strokeWidth="0.6" />
        <rect x="72" y="156" width="56" height="8" rx="4" fill="var(--brand-500)" fillOpacity="0.18" />
        {/* Home indicator */}
        <rect x="88" y="175" width="24" height="3" rx="1.5" fill="var(--brand-400)" fillOpacity="0.25" />
        {/* Platform label */}
        <text x="100" y="203" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">iOS</text>
        {/* App Store badge */}
        <rect x="78" y="212" width="44" height="14" rx="3" fill="var(--brand-500)" fillOpacity="0.1" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.6" />
        <text x="100" y="222" textAnchor="middle" fontSize="5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.6">App Store</text>
      </g>

      {/* ─── Right phone (Android) ─── */}
      <g>
        <rect
          x="262"
          y="52"
          width="76"
          height="136"
          rx="12"
          fill="url(#mobileAccentGrad)"
          stroke="var(--accent-400)"
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />
        {/* Camera dot */}
        <circle cx="300" cy="58" r="2.5" fill="var(--accent-500)" fillOpacity="0.2" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="0.6" />
        {/* Screen content wireframe */}
        <rect x="272" y="68" width="56" height="6" rx="2" fill="var(--accent-400)" fillOpacity="0.2" />
        <rect x="272" y="80" width="40" height="4" rx="1.5" fill="var(--accent-300)" fillOpacity="0.15" />
        <rect x="272" y="92" width="56" height="24" rx="4" fill="var(--accent-500)" fillOpacity="0.1" stroke="var(--accent-400)" strokeOpacity="0.2" strokeWidth="0.6" />
        <rect x="272" y="124" width="56" height="24" rx="4" fill="var(--accent-500)" fillOpacity="0.08" stroke="var(--accent-400)" strokeOpacity="0.15" strokeWidth="0.6" />
        <rect x="272" y="156" width="56" height="8" rx="4" fill="var(--accent-500)" fillOpacity="0.18" />
        {/* Nav buttons */}
        <rect x="284" y="175" width="8" height="3" rx="1" fill="var(--accent-400)" fillOpacity="0.2" />
        <circle cx="300" cy="176.5" r="2" fill="var(--accent-400)" fillOpacity="0.2" />
        <rect x="308" y="175" width="8" height="3" rx="1" fill="var(--accent-400)" fillOpacity="0.2" />
        {/* Platform label */}
        <text x="300" y="203" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">Android</text>
        {/* Play Store badge */}
        <rect x="278" y="212" width="44" height="14" rx="3" fill="var(--accent-500)" fillOpacity="0.1" stroke="var(--accent-400)" strokeOpacity="0.25" strokeWidth="0.6" />
        <text x="300" y="222" textAnchor="middle" fontSize="5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.6">Play Store</text>
      </g>

      {/* ─── Central shared code element ─── */}
      <g>
        <rect
          x="168"
          y="125"
          width="64"
          height="50"
          rx="8"
          fill="url(#mobileSharedGrad)"
          stroke="url(#mobileFlowGrad)"
          strokeWidth="1"
        />
        {/* Code brackets icon */}
        <text x="200" y="148" textAnchor="middle" fontSize="16" fontWeight="300" fontFamily="monospace" fill="var(--brand-300)" fillOpacity="0.7">{'{ }'}</text>
        <text x="200" y="166" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.7">SHARED CODE</text>
      </g>

      {/* ─── Side annotations ─── */}
      <text x="22" y="155" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.4" transform="rotate(-90, 22, 155)">ONE CODEBASE</text>
      <text x="388" y="155" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.4" transform="rotate(90, 388, 155)">BOTH PLATFORMS</text>

      {/* ─── Bottom label ─── */}
      <text x="200" y="260" textAnchor="middle" fontSize="6" fontWeight="500" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)" fillOpacity="0.45">React Native · Flutter · .NET MAUI</text>
    </svg>
  </div>
);
