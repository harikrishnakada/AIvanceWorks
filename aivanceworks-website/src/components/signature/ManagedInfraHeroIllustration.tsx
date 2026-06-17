/**
 * ManagedInfraHeroIllustration — inline SVG for the Managed Infrastructure Services
 * hero right column.
 *
 * Visual concept: an always-on monitoring heartbeat running above a cluster of
 * infrastructure nodes (server, database, network hub). A rotating orbit ring
 * suggests continuous observation. Alert and check badges float near critical nodes
 * indicating active monitoring with healthy status. The overall composition is
 * calm and "under control" — communicating 24/7 oversight, not chaos.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 *
 * Structure mirrors CloudInfraHeroIllustration for consistency.
 */

export const ManagedInfraHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Always-on infrastructure monitoring illustration with heartbeat pulse over server, database, and network nodes"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Managed Infrastructure Monitoring Illustration</title>
      <desc>
        An abstract illustration showing a continuous heartbeat monitoring line running
        above a cluster of infrastructure nodes — server, database, and network hub —
        with an orbit ring and status badges indicating 24/7 active operations oversight.
      </desc>

      {/* ─── Defs ─── */}
      <defs>
        <linearGradient id="miLayerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--brand-600)" stopOpacity="0.07" />
        </linearGradient>

        <linearGradient id="miAccentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.18" />
        </linearGradient>

        <linearGradient id="miPulseGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.2" />
          <stop offset="40%" stopColor="var(--brand-300)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.4" />
        </linearGradient>

        <radialGradient id="miGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.07" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        {/* Orbit path for dashed ring */}
        <ellipse id="miOrbitPath" cx="200" cy="195" rx="110" ry="44" />
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="180" rx="170" ry="135" fill="url(#miGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="52"  cy="48"  r="1.5" fill="var(--brand-300)"  fillOpacity="0.28" />
      <circle cx="348" cy="60"  r="1"   fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="58"  cy="270" r="1"   fill="var(--brand-400)"  fillOpacity="0.18" />
      <circle cx="342" cy="258" r="1.5" fill="var(--accent-400)" fillOpacity="0.22" />
      <circle cx="180" cy="16"  r="1"   fill="var(--brand-300)"  fillOpacity="0.28" />
      <circle cx="252" cy="300" r="1"   fill="var(--accent-300)" fillOpacity="0.18" />

      {/* ─── Monitoring heartbeat pulse (top) ─── */}
      {/* Flat baseline → spike → trough → spike → flat baseline */}
      <polyline
        points="50,72  100,72  115,72  124,42  132,98  140,55  148,72  200,72  215,72  224,44  232,96  240,56  248,72  300,72  350,72"
        fill="none"
        stroke="url(#miPulseGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* "MONITORING" label */}
      <text
        x="200"
        y="26"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.12em"
        fill="var(--brand-300)"
        fillOpacity="0.55"
      >
        MONITORING — 24 / 7
      </text>

      {/* Pulse baseline track */}
      <line
        x1="50" y1="72" x2="350" y2="72"
        stroke="var(--brand-400)"
        strokeOpacity="0.08"
        strokeWidth="1"
      />

      {/* ─── Orbit ring (dashed ellipse around infra cluster) ─── */}
      <ellipse
        cx="200"
        cy="200"
        rx="112"
        ry="48"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="5 7"
      />

      {/* ─── Central: Server node ─── */}
      <rect
        x="163" y="158" width="74" height="58"
        rx="10"
        fill="url(#miLayerGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      {/* Server slots */}
      <rect x="173" y="168" width="54" height="6" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.7" />
      <rect x="173" y="178" width="54" height="6" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.7" />
      <rect x="173" y="188" width="54" height="6" rx="2" fill="none" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.7" />
      {/* Status LED dots */}
      <circle cx="218" cy="171" r="2"   fill="var(--accent-400)" fillOpacity="0.7" />
      <circle cx="218" cy="181" r="2"   fill="var(--accent-400)" fillOpacity="0.5" />
      <circle cx="218" cy="191" r="2"   fill="var(--brand-400)"  fillOpacity="0.4" />
      <text x="200" y="207" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.6">SERVER</text>

      {/* ─── Left: Database node ─── */}
      <rect
        x="72" y="168" width="62" height="50"
        rx="9"
        fill="url(#miLayerGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      {/* DB cylinder icon */}
      <ellipse cx="103" cy="180" rx="14" ry="5"   fill="none" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line  x1="89" y1="180" x2="89" y2="196"    stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="0.8" />
      <line  x1="117" y1="180" x2="117" y2="196"   stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="0.8" />
      <ellipse cx="103" cy="196" rx="14" ry="5"   fill="none" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="0.8" />
      <text x="103" y="210" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.55">DATABASE</text>

      {/* ─── Right: Network hub node ─── */}
      <rect
        x="266" y="168" width="62" height="50"
        rx="9"
        fill="url(#miAccentGrad)"
        stroke="var(--accent-400)"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      {/* Hub spokes */}
      <circle cx="297" cy="188" r="4"   fill="none" stroke="var(--accent-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <line  x1="297" y1="180" x2="297" y2="184" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <line  x1="297" y1="192" x2="297" y2="198" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <line  x1="289" y1="188" x2="278" y2="188" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <line  x1="305" y1="188" x2="316" y2="188" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.7" />
      <circle cx="297" cy="188" r="1.5" fill="var(--accent-400)" fillOpacity="0.5" />
      <text x="297" y="210" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.55">NETWORK</text>

      {/* ─── Connecting lines: server ↔ db, server ↔ network ─── */}
      <line x1="162" y1="187" x2="134" y2="187" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="237" y1="187" x2="266" y2="187" stroke="var(--accent-400)" strokeOpacity="0.22" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* ─── Vertical drop from pulse to server ─── */}
      <line x1="200" y1="82"  x2="200" y2="158" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 4" />
      <polygon points="196,156 200,163 204,156" fill="var(--brand-400)" fillOpacity="0.35" />

      {/* ─── Status badge: "All healthy" floating top-right ─── */}
      <rect x="298" y="96" width="68" height="22" rx="6" fill="url(#miLayerGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="0.8" />
      <circle cx="310" cy="107" r="3.5" fill="var(--accent-400)" fillOpacity="0.55" />
      <text x="321" y="111" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.8">All healthy</text>

      {/* ─── Alert acknowledged badge: floating bottom-left ─── */}
      <rect x="35" y="222" width="76" height="22" rx="6" fill="url(#miLayerGrad)" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="0.8" />
      {/* Check icon */}
      <circle cx="47" cy="233" r="4" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.7" />
      <polyline points="44.5,233 46.5,235.5 50,230.5" fill="none" stroke="var(--brand-300)" strokeOpacity="0.7" strokeWidth="0.8" />
      <text x="59" y="237" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.75">On-call active</text>

      {/* ─── Outer boundary frame ─── */}
      <rect x="42" y="12" width="316" height="296" rx="16" fill="none" stroke="var(--brand-400)" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="6 8" />

      {/* ─── "OBSERVE" label alongside pulse ─── */}
      <text x="56" y="60" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--brand-300)" fillOpacity="0.4" transform="rotate(-90,56,60)">OBSERVE</text>

      {/* ─── DR / Backup annotation ─── */}
      <rect x="148" y="238" width="104" height="16" rx="5" fill="var(--brand-500)" fillOpacity="0.08" stroke="var(--brand-400)" strokeOpacity="0.18" strokeWidth="0.7" />
      <text x="200" y="250" textAnchor="middle" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.55">Backup verified · DR drill scheduled</text>
    </svg>
  </div>
);
