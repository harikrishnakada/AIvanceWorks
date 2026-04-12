/**
 * ItConsultingHeroIllustration — inline SVG for the IT Consulting hero.
 *
 * Visual concept: a central "IT Decision" node framed by a regulatory
 * ring of framework badges (HIPAA, SOC 2, SOX, PCI-DSS, ISO 27001, GDPR)
 * with three deliverable satellites — Technology Roadmap, Vendor
 * Selection Matrix, and Build-vs-Buy / Due Diligence. The message:
 * "every technology decision is framed by the regulations you answer to."
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits
 * the active data-theme automatically. No hardcoded hex values.
 *
 * Mobile layout: the SVG scales fluidly via viewBox; no separate mobile
 * variant required. The illustration is constrained to max-w-md and
 * centered.
 */

export const ItConsultingHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="IT consulting illustration: a central IT Decision node ringed by regulatory framework badges and connected to three deliverable satellites — Technology Roadmap, Vendor Selection Matrix, and Build-vs-Buy Due Diligence."
  >
    <svg
      viewBox="0 0 400 360"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>IT Consulting for Regulated Industries</title>
      <desc>
        A central decision node labeled IT Decision, surrounded by a regulatory
        ring of six framework badges (HIPAA, SOC 2, SOX, PCI-DSS, ISO 27001,
        GDPR) and connected to three deliverable cards — Technology Roadmap,
        Vendor Matrix, and Build vs. Buy — illustrating how regulated-industry
        technology decisions are framed by the compliance regimes they inherit.
      </desc>

      <defs>
        <radialGradient id="icGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="icCenterGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="icDeliverableGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.28" />
        </linearGradient>

        <linearGradient id="icAccentDeliverableGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.22" />
        </linearGradient>

        <linearGradient id="icBadgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.24" />
        </linearGradient>

        <linearGradient id="icAccentBadgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.22" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="180" rx="190" ry="160" fill="url(#icGlow)" />

      {/* Regulatory perimeter ring — the "audit boundary" */}
      <ellipse
        cx="200"
        cy="180"
        rx="170"
        ry="140"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="2 5"
      />
      <ellipse
        cx="200"
        cy="180"
        rx="148"
        ry="118"
        fill="none"
        stroke="var(--accent-400)"
        strokeOpacity="0.12"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      {/* Connection lines: center → deliverables */}
      <line x1="200" y1="180" x2="74" y2="64" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 4" />
      <line x1="200" y1="180" x2="326" y2="64" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 4" />
      <line x1="200" y1="180" x2="200" y2="300" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 4" />

      {/* Regulatory framework badges around the ring */}
      {/* HIPAA — top-left outer */}
      <rect x="24" y="150" width="64" height="24" rx="12" fill="url(#icBadgeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="56" y="165" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.9">HIPAA</text>

      {/* SOC 2 — top */}
      <rect x="168" y="16" width="64" height="24" rx="12" fill="url(#icBadgeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="200" y="31" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.9">SOC 2</text>

      {/* SOX — top-right outer */}
      <rect x="312" y="150" width="64" height="24" rx="12" fill="url(#icAccentBadgeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="344" y="165" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.9">SOX</text>

      {/* PCI-DSS — bottom-left outer */}
      <rect x="18" y="204" width="74" height="24" rx="12" fill="url(#icAccentBadgeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="55" y="219" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.9">PCI-DSS</text>

      {/* ISO 27001 — bottom-right outer */}
      <rect x="308" y="204" width="76" height="24" rx="12" fill="url(#icBadgeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="346" y="219" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.9">ISO 27001</text>

      {/* GDPR — bottom center (between bottom-left and bottom-right) */}
      <rect x="168" y="332" width="64" height="24" rx="12" fill="url(#icAccentBadgeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="200" y="347" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.9">GDPR</text>

      {/* Center: IT Decision node */}
      <circle
        cx="200"
        cy="180"
        r="50"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      <circle
        cx="200"
        cy="180"
        r="42"
        fill="url(#icCenterGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      {/* Decision compass glyph */}
      <line x1="200" y1="146" x2="200" y2="214" stroke="var(--brand-300)" strokeOpacity="0.4" strokeWidth="0.8" />
      <line x1="166" y1="180" x2="234" y2="180" stroke="var(--brand-300)" strokeOpacity="0.4" strokeWidth="0.8" />
      <polygon points="200,150 196,180 200,174 204,180" fill="var(--brand-400)" fillOpacity="0.6" />
      <polygon points="200,210 196,180 200,186 204,180" fill="var(--brand-400)" fillOpacity="0.22" />
      <circle cx="200" cy="180" r="3" fill="var(--brand-400)" fillOpacity="0.65" />

      {/* Center label */}
      <text
        x="200"
        y="160"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.12em"
        fill="var(--text-subtle)"
        fillOpacity="0.85"
      >
        IT DECISION
      </text>
      <text
        x="200"
        y="204"
        textAnchor="middle"
        fontSize="6"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.1em"
        fill="var(--text-subtle)"
        fillOpacity="0.7"
      >
        VENDOR-NEUTRAL
      </text>

      {/* Deliverable 1 — Technology Roadmap (top-left) */}
      <rect x="18" y="36" width="112" height="58" rx="9" fill="url(#icDeliverableGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Roadmap bars */}
      <rect x="30" y="50" width="30" height="6" rx="1.5" fill="var(--brand-400)" fillOpacity="0.5" />
      <rect x="64" y="50" width="44" height="6" rx="1.5" fill="var(--brand-400)" fillOpacity="0.3" />
      <rect x="30" y="60" width="22" height="6" rx="1.5" fill="var(--brand-400)" fillOpacity="0.3" />
      <rect x="56" y="60" width="52" height="6" rx="1.5" fill="var(--brand-400)" fillOpacity="0.45" />
      <text x="74" y="80" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">TECHNOLOGY</text>
      <text x="74" y="89" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">ROADMAP</text>

      {/* Deliverable 2 — Vendor Matrix (top-right) */}
      <rect x="270" y="36" width="112" height="58" rx="9" fill="url(#icAccentDeliverableGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* 3x2 matrix mini icon */}
      <g transform="translate(286, 48)">
        <rect x="0" y="0" width="10" height="10" rx="1.5" fill="var(--accent-400)" fillOpacity="0.5" />
        <rect x="12" y="0" width="10" height="10" rx="1.5" fill="var(--accent-400)" fillOpacity="0.3" />
        <rect x="24" y="0" width="10" height="10" rx="1.5" fill="var(--accent-400)" fillOpacity="0.6" />
        <rect x="0" y="12" width="10" height="10" rx="1.5" fill="var(--accent-400)" fillOpacity="0.35" />
        <rect x="12" y="12" width="10" height="10" rx="1.5" fill="var(--accent-400)" fillOpacity="0.55" />
        <rect x="24" y="12" width="10" height="10" rx="1.5" fill="var(--accent-400)" fillOpacity="0.25" />
      </g>
      <text x="340" y="60" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">VENDOR</text>
      <text x="340" y="69" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">MATRIX</text>
      <text x="340" y="85" textAnchor="middle" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.55">SCORED</text>

      {/* Deliverable 3 — Build vs. Buy / Due Diligence (bottom center) */}
      <rect x="132" y="262" width="136" height="52" rx="9" fill="url(#icDeliverableGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Build vs Buy split icon */}
      <g transform="translate(148, 276)">
        <rect x="0" y="0" width="20" height="16" rx="2" fill="var(--brand-400)" fillOpacity="0.5" />
        <text x="10" y="11" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.9">B</text>
        <line x1="24" y1="8" x2="34" y2="8" stroke="var(--brand-300)" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="38" y="0" width="20" height="16" rx="2" fill="var(--accent-400)" fillOpacity="0.4" />
        <text x="48" y="11" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" fill="var(--text-subtle)" fillOpacity="0.9">B</text>
      </g>
      <text x="200" y="306" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">BUILD vs. BUY · DUE DILIGENCE</text>

      {/* Decorative particles */}
      <circle cx="42" cy="46" r="1.3" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="358" cy="48" r="1.2" fill="var(--accent-300)" fillOpacity="0.3" />
      <circle cx="28" cy="310" r="1.4" fill="var(--brand-400)" fillOpacity="0.25" />
      <circle cx="372" cy="310" r="1.2" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="118" cy="28" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="282" cy="28" r="1" fill="var(--brand-300)" fillOpacity="0.25" />
    </svg>
  </div>
);
