/**
 * AppModHeroIllustration — inline SVG for the Application Modernization hero right column.
 *
 * Visual concept: a monolith block on the left being progressively decomposed into
 * independent service modules on the right, connected by extraction arrows.
 * Represents the incremental strangler fig approach — the monolith shrinks
 * as modern services grow alongside it.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const AppModHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Application modernization diagram showing a monolith being decomposed into independent microservices"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Application Modernization Illustration</title>
      <desc>
        A monolithic application block on the left progressively decomposing
        into independent service modules on the right, connected by extraction
        arrows, representing the strangler fig modernization pattern.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="amMonolithGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--brand-600)" stopOpacity="0.25" />
        </linearGradient>

        <linearGradient id="amServiceGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.25" />
        </linearGradient>

        <linearGradient id="amArrowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.5" />
        </linearGradient>

        <radialGradient id="amGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="180" ry="140" fill="url(#amGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="35" cy="45" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="365" cy="60" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="45" cy="275" r="1" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="355" cy="270" r="1.5" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="200" cy="12" r="1" fill="var(--brand-300)" fillOpacity="0.3" />

      {/* ─── Monolith (left side) ─── */}
      <rect
        x="40"
        y="60"
        width="110"
        height="200"
        rx="6"
        fill="url(#amMonolithGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />

      {/* Monolith internal module separators (tightly coupled) */}
      <line x1="50" y1="100" x2="140" y2="100" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.8" />
      <line x1="50" y1="140" x2="140" y2="140" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.8" />
      <line x1="50" y1="180" x2="140" y2="180" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.8" />
      <line x1="50" y1="220" x2="140" y2="220" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="0.8" />

      {/* Monolith module labels */}
      <text x="95" y="85" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.6">AUTH</text>
      <text x="95" y="124" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.6">ORDERS</text>
      <text x="95" y="164" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.6">PAYMENTS</text>
      <text x="95" y="204" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.5">INVENTORY</text>
      <text x="95" y="244" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.4">NOTIFY</text>

      {/* Monolith label */}
      <text x="95" y="285" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.7">MONOLITH</text>

      {/* ─── Extraction arrows ─── */}
      {/* Arrow 1 — Auth */}
      <path d="M150,80 C180,80 200,52 240,52" fill="none" stroke="url(#amArrowGrad)" strokeWidth="1.2" strokeDasharray="4 3" />
      <polygon points="238,48 246,52 238,56" fill="var(--accent-400)" fillOpacity="0.5" />

      {/* Arrow 2 — Orders */}
      <path d="M150,120 C185,120 210,112 240,112" fill="none" stroke="url(#amArrowGrad)" strokeWidth="1.2" strokeDasharray="4 3" />
      <polygon points="238,108 246,112 238,116" fill="var(--accent-400)" fillOpacity="0.5" />

      {/* Arrow 3 — Payments */}
      <path d="M150,160 C185,160 210,172 240,172" fill="none" stroke="url(#amArrowGrad)" strokeWidth="1.2" strokeDasharray="4 3" />
      <polygon points="238,168 246,172 238,176" fill="var(--accent-400)" fillOpacity="0.5" />

      {/* Arrow 4 — Inventory */}
      <path d="M150,200 C180,200 205,232 240,232" fill="none" stroke="url(#amArrowGrad)" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />
      <polygon points="238,228 246,232 238,236" fill="var(--accent-400)" fillOpacity="0.35" />

      {/* Arrow 5 — Notify (faded - future phase) */}
      <path d="M150,240 C175,245 205,275 240,275" fill="none" stroke="url(#amArrowGrad)" strokeWidth="1" strokeDasharray="3 5" opacity="0.35" />

      {/* ─── Modern services (right side) ─── */}
      {/* Service 1 — Auth (fully extracted) */}
      <rect x="248" y="36" width="110" height="32" rx="6" fill="url(#amServiceGrad)" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="262" cy="52" r="4" fill="var(--accent-400)" fillOpacity="0.3" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.6" />
      <text x="310" y="55" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)" fillOpacity="0.85">AUTH SERVICE</text>

      {/* Service 2 — Orders (fully extracted) */}
      <rect x="248" y="96" width="110" height="32" rx="6" fill="url(#amServiceGrad)" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="262" cy="112" r="4" fill="var(--accent-400)" fillOpacity="0.3" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.6" />
      <text x="310" y="115" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)" fillOpacity="0.85">ORDER SERVICE</text>

      {/* Service 3 — Payments (fully extracted) */}
      <rect x="248" y="156" width="110" height="32" rx="6" fill="url(#amServiceGrad)" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="262" cy="172" r="4" fill="var(--accent-400)" fillOpacity="0.3" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.6" />
      <text x="310" y="175" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)" fillOpacity="0.85">PAYMENT SERVICE</text>

      {/* Service 4 — Inventory (in progress - lighter) */}
      <rect x="248" y="216" width="110" height="32" rx="6" fill="url(#amServiceGrad)" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="262" cy="232" r="4" fill="var(--accent-400)" fillOpacity="0.15" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="0.6" />
      <text x="310" y="235" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)" fillOpacity="0.5">INVENTORY SVC</text>

      {/* Service 5 — Notify (planned - very faint) */}
      <rect x="248" y="262" width="110" height="28" rx="6" fill="none" stroke="var(--accent-400)" strokeOpacity="0.15" strokeWidth="0.8" strokeDasharray="3 4" />
      <text x="303" y="279" textAnchor="middle" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.04em" fill="var(--text-subtle)" fillOpacity="0.3">NOTIFY SVC</text>

      {/* ─── Phase indicators ─── */}
      <text x="303" y="24" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.6">MODERN SERVICES</text>

      {/* ─── Status indicators ─── */}
      {/* Green dot = extracted */}
      <circle cx="364" cy="52" r="3" fill="var(--brand-400)" fillOpacity="0.5" />
      <circle cx="364" cy="112" r="3" fill="var(--brand-400)" fillOpacity="0.5" />
      <circle cx="364" cy="172" r="3" fill="var(--brand-400)" fillOpacity="0.5" />
      {/* Yellow dot = in progress */}
      <circle cx="364" cy="232" r="3" fill="var(--accent-400)" fillOpacity="0.4" />

      {/* ─── Production live indicator ─── */}
      <rect x="155" y="290" width="90" height="18" rx="9" fill="var(--brand-400)" fillOpacity="0.1" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.8" />
      <circle cx="170" cy="299" r="3" fill="var(--brand-400)" fillOpacity="0.6" />
      <text x="205" y="303" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.7">PROD LIVE</text>

      {/* ─── Outer ring (transformation boundary) ─── */}
      <ellipse cx="200" cy="160" rx="185" ry="145" fill="none" stroke="var(--brand-400)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
