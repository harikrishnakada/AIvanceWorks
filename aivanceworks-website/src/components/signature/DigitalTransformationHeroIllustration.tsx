/**
 * DigitalTransformationHeroIllustration — inline SVG for the Digital
 * Transformation service hero right column.
 *
 * Visual concept: a left-to-right "before → after" estate. On the left, a cluster
 * of fragmented, disconnected legacy blocks (siloed systems). A transformation
 * spine runs through the middle. On the right, a unified, layered modern operating
 * model — connected nodes orbiting a central hub — representing process, technology,
 * data, experience, and organization brought into one coherent platform. The image
 * reads as "we turn a fragmented estate into a modern, connected operating model."
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the active
 * data-theme automatically. No hardcoded hex values.
 *
 * Mobile layout: the SVG scales fluidly via viewBox; no separate mobile variant
 * required. Constrained to max-w-md and centered.
 */

export const DigitalTransformationHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Digital transformation illustration showing fragmented legacy systems on the left transforming through a central spine into a unified, connected modern operating model on the right"
  >
    <svg
      viewBox="0 0 400 360"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Digital Transformation Illustration</title>
      <desc>
        Fragmented, disconnected legacy system blocks on the left connect through a
        transformation spine to a unified modern operating model on the right, shown
        as connected nodes orbiting a central platform hub.
      </desc>

      <defs>
        <radialGradient id="dxGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dxHubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="dxNodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.28" />
        </linearGradient>
      </defs>

      {/* Background glow centered on the modern hub */}
      <ellipse cx="270" cy="180" rx="160" ry="150" fill="url(#dxGlow)" />

      {/* ─── LEFT: fragmented legacy estate ─── */}
      <text x="78" y="40" textAnchor="middle" fontSize="7" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.08em"
        fill="var(--text-subtle)" fillOpacity="0.6">
        LEGACY ESTATE
      </text>
      {/* Disconnected blocks, slightly skewed to feel chaotic */}
      <rect x="34" y="64" width="46" height="34" rx="5"
        fill="none" stroke="var(--text-subtle)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" />
      <rect x="92" y="92" width="40" height="30" rx="5"
        fill="none" stroke="var(--text-subtle)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" />
      <rect x="30" y="124" width="44" height="32" rx="5"
        fill="none" stroke="var(--text-subtle)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" />
      <rect x="86" y="160" width="42" height="30" rx="5"
        fill="none" stroke="var(--text-subtle)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" />
      <rect x="40" y="196" width="40" height="30" rx="5"
        fill="none" stroke="var(--text-subtle)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" />
      {/* Broken connector stubs between blocks */}
      <line x1="80" y1="82" x2="92" y2="100" stroke="var(--text-subtle)" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="74" y1="140" x2="86" y2="172" stroke="var(--text-subtle)" strokeOpacity="0.2" strokeWidth="1" />

      {/* ─── CENTER: transformation spine ─── */}
      <line x1="140" y1="180" x2="196" y2="180"
        stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5 4" />
      <polygon points="206,180 192,173 192,187" fill="var(--brand-400)" fillOpacity="0.6" />
      <text x="170" y="168" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.08em"
        fill="var(--brand-400)" fillOpacity="0.7">
        TRANSFORM
      </text>

      {/* ─── RIGHT: unified modern operating model ─── */}
      <text x="288" y="40" textAnchor="middle" fontSize="7" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.08em"
        fill="var(--text-subtle)" fillOpacity="0.7">
        MODERN OPERATING MODEL
      </text>

      {/* Orbit ring */}
      <circle cx="288" cy="184" r="92" fill="none"
        stroke="var(--brand-300)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 7" />
      <circle cx="288" cy="184" r="64" fill="none"
        stroke="var(--brand-400)" strokeOpacity="0.1" strokeWidth="0.8" strokeDasharray="3 6" />

      {/* Spokes from hub to satellite domains */}
      <line x1="288" y1="184" x2="288" y2="100" stroke="var(--brand-400)" strokeOpacity="0.22" strokeWidth="1.2" />
      <line x1="288" y1="184" x2="356" y2="150" stroke="var(--accent-400)" strokeOpacity="0.22" strokeWidth="1.2" />
      <line x1="288" y1="184" x2="350" y2="232" stroke="var(--brand-400)" strokeOpacity="0.22" strokeWidth="1.2" />
      <line x1="288" y1="184" x2="226" y2="232" stroke="var(--accent-400)" strokeOpacity="0.22" strokeWidth="1.2" />
      <line x1="288" y1="184" x2="222" y2="150" stroke="var(--brand-400)" strokeOpacity="0.22" strokeWidth="1.2" />

      {/* Central platform hub */}
      <circle cx="288" cy="184" r="32" fill="url(#dxHubGrad)"
        stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1.2" />
      <circle cx="288" cy="184" r="6" fill="var(--brand-400)" fillOpacity="0.6" />
      <line x1="270" y1="184" x2="306" y2="184" stroke="var(--brand-300)" strokeOpacity="0.35" strokeWidth="0.8" />
      <line x1="288" y1="166" x2="288" y2="202" stroke="var(--brand-300)" strokeOpacity="0.35" strokeWidth="0.8" />
      <text x="288" y="226" textAnchor="middle" fontSize="6" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.07em"
        fill="var(--text-subtle)" fillOpacity="0.75">
        UNIFIED PLATFORM
      </text>

      {/* Satellite domain nodes (process / technology / data / experience / organization) */}
      {/* top */}
      <circle cx="288" cy="100" r="14" fill="url(#dxNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="288" y="103" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.85">PROC</text>
      {/* upper-right */}
      <circle cx="356" cy="150" r="14" fill="url(#dxNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="356" y="153" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.85">TECH</text>
      {/* lower-right */}
      <circle cx="350" cy="232" r="14" fill="url(#dxNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="350" y="235" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.85">DATA</text>
      {/* lower-left */}
      <circle cx="226" cy="232" r="14" fill="url(#dxNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="226" y="235" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.85">EXP</text>
      {/* upper-left */}
      <circle cx="222" cy="150" r="14" fill="url(#dxNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="222" y="153" textAnchor="middle" fontSize="5.5" fontWeight="700"
        fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.85">ORG</text>

      {/* Decorative particles */}
      <circle cx="150" cy="60" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="380" cy="100" r="1.5" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="288" cy="298" r="1.5" fill="var(--brand-300)" fillOpacity="0.25" />
      <circle cx="196" cy="280" r="1" fill="var(--accent-400)" fillOpacity="0.2" />
    </svg>
  </div>
);
