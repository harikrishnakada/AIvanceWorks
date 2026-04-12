/**
 * SecurityComplianceHeroIllustration — inline SVG for the Security & Compliance hero.
 *
 * Visual concept: a central shield representing the unified security program,
 * surrounded by six compliance-framework badges (HIPAA, SOC 2, PCI-DSS, ISO 27001,
 * NIST, GDPR) connected by a zero-trust perimeter ring. Locks and key glyphs on
 * the inner shield convey identity + data protection. The message: one program,
 * many auditors — not six separate projects.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const SecurityComplianceHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Unified security program represented as a central shield surrounded by compliance framework badges and a zero-trust perimeter"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Security & Compliance Unified Program</title>
      <desc>
        A central shield inside a zero-trust perimeter ring with six compliance
        framework badges (HIPAA, SOC 2, PCI-DSS, ISO 27001, NIST, GDPR) orbiting
        around it — visualizing how one unified security control set satisfies
        multiple regulatory frameworks at once.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="scShieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.18" />
        </linearGradient>

        <linearGradient id="scBadgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.22" />
        </linearGradient>

        <linearGradient id="scAccentBadgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.22" />
        </linearGradient>

        <radialGradient id="scGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="160" rx="180" ry="140" fill="url(#scGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="42" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="358" cy="55" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="50" cy="280" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="350" cy="265" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="180" cy="15" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="230" cy="305" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Zero-trust perimeter ring ─── */}
      <ellipse
        cx="200"
        cy="160"
        rx="160"
        ry="125"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="2 5"
      />
      <ellipse
        cx="200"
        cy="160"
        rx="140"
        ry="108"
        fill="none"
        stroke="var(--accent-400)"
        strokeOpacity="0.12"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      {/* ─── Connection lines (shield to framework badges) ─── */}
      {/* Top-left — HIPAA */}
      <line x1="172" y1="140" x2="80" y2="64" stroke="var(--brand-400)" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="3 4" />
      {/* Top-right — SOC 2 */}
      <line x1="228" y1="140" x2="320" y2="64" stroke="var(--brand-400)" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="3 4" />
      {/* Left — PCI-DSS */}
      <line x1="162" y1="165" x2="42" y2="160" stroke="var(--accent-400)" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="3 4" />
      {/* Right — ISO 27001 */}
      <line x1="238" y1="165" x2="358" y2="160" stroke="var(--accent-400)" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="3 4" />
      {/* Bottom-left — NIST */}
      <line x1="172" y1="192" x2="80" y2="264" stroke="var(--brand-400)" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="3 4" />
      {/* Bottom-right — GDPR */}
      <line x1="228" y1="192" x2="320" y2="264" stroke="var(--accent-400)" strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="3 4" />

      {/* ─── Central shield ─── */}
      <path
        d="M200,104 L240,120 L240,168 Q240,196 200,212 Q160,196 160,168 L160,120 Z"
        fill="url(#scShieldGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.55"
        strokeWidth="1.4"
      />
      {/* Inner highlight */}
      <path
        d="M200,116 L230,128 L230,166 Q230,188 200,200 Q170,188 170,166 L170,128 Z"
        fill="var(--brand-400)"
        fillOpacity="0.08"
        stroke="none"
      />

      {/* Lock glyph inside shield */}
      <rect
        x="188"
        y="156"
        width="24"
        height="20"
        rx="3"
        fill="none"
        stroke="var(--brand-300)"
        strokeOpacity="0.75"
        strokeWidth="1.2"
      />
      <path
        d="M193,156 L193,150 Q193,143 200,143 Q207,143 207,150 L207,156"
        fill="none"
        stroke="var(--brand-300)"
        strokeOpacity="0.75"
        strokeWidth="1.2"
      />
      <circle cx="200" cy="166" r="1.6" fill="var(--brand-300)" fillOpacity="0.8" />

      {/* Shield label */}
      <text
        x="200"
        y="135"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.1em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        ZERO TRUST
      </text>
      <text
        x="200"
        y="192"
        textAnchor="middle"
        fontSize="7"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.08em"
        fill="var(--text-subtle)"
        fillOpacity="0.7"
      >
        ONE PROGRAM
      </text>

      {/* ─── Framework badge: HIPAA (top-left) ─── */}
      <rect x="32" y="44" width="74" height="30" rx="15" fill="url(#scBadgeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="69" y="63" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.92">HIPAA</text>

      {/* ─── Framework badge: SOC 2 (top-right) ─── */}
      <rect x="292" y="44" width="74" height="30" rx="15" fill="url(#scBadgeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="329" y="63" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.92">SOC 2</text>

      {/* ─── Framework badge: PCI-DSS (left) ─── */}
      <rect x="2" y="144" width="82" height="30" rx="15" fill="url(#scAccentBadgeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="43" y="163" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.92">PCI-DSS</text>

      {/* ─── Framework badge: ISO 27001 (right) ─── */}
      <rect x="316" y="144" width="82" height="30" rx="15" fill="url(#scAccentBadgeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="357" y="163" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.92">ISO 27001</text>

      {/* ─── Framework badge: NIST (bottom-left) ─── */}
      <rect x="32" y="244" width="74" height="30" rx="15" fill="url(#scBadgeGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="69" y="263" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.92">NIST</text>

      {/* ─── Framework badge: GDPR (bottom-right) ─── */}
      <rect x="292" y="244" width="74" height="30" rx="15" fill="url(#scAccentBadgeGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="329" y="263" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.92">GDPR</text>

      {/* ─── Corner annotations ─── */}
      <text x="60" y="94" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.4">PHI</text>
      <text x="60" y="104" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">SAFEGUARDS</text>

      <text x="322" y="94" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.4">TRUST</text>
      <text x="322" y="104" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">SERVICES</text>

      <text x="60" y="230" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.4">CONTROLS</text>
      <text x="60" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">CATALOG</text>

      <text x="322" y="230" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.4">DATA</text>
      <text x="322" y="240" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">RESIDENCY</text>
    </svg>
  </div>
);
