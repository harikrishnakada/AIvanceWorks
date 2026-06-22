/**
 * AiStrategyAdvisoryHeroIllustration — inline SVG for the C10 AI Strategy hero.
 *
 * Visual concept: a scatter of unsorted "AI ideas" on the left is drawn
 * through a central governance / risk-tiering lens and emerges on the right as
 * a sequenced, risk-tagged roadmap with three deliverable chips — Risk-Tiered
 * Roadmap, Governance Framework, Board Business Case. A perimeter of framework
 * badges (NIST AI RMF, EU AI Act, ISO 42001) frames the whole thing. The
 * message: "scattered AI ambition becomes a defensible, governed portfolio."
 *
 * Deliberately distinct from AiStrategyHeroIllustration (the AI-pillar page's
 * 5-input → engine → 3-output flow): this one foregrounds prioritization +
 * risk tiering, the governance-forward angle of the C10 Advisory practice.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 *
 * Mobile layout: the SVG scales fluidly via viewBox; no separate mobile
 * variant required. Constrained to max-w-md and centered.
 */

export const AiStrategyAdvisoryHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="AI strategy illustration: a scatter of unsorted AI ideas passes through a governance and risk-tiering lens and emerges as a sequenced, risk-tagged roadmap with three deliverables — a risk-tiered roadmap, a governance framework, and a board business case — framed by NIST AI RMF, EU AI Act, and ISO 42001 badges."
  >
    <svg
      viewBox="0 0 400 360"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>AI Strategy for Governed Enterprises</title>
      <desc>
        Unsorted AI use-case ideas on the left are drawn through a central
        governance and risk-tiering lens and emerge on the right as a sequenced
        roadmap tagged by AI-risk tier, alongside three deliverable cards — a
        risk-tiered roadmap, a responsible-AI governance framework, and a
        board-ready business case — framed by NIST AI RMF, EU AI Act, and ISO
        42001 framework badges.
      </desc>

      <defs>
        <radialGradient id="asGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="asLensGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.30" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.20" />
        </linearGradient>
        <linearGradient id="asCardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="asAccentCardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.24" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="180" rx="190" ry="150" fill="url(#asGlow)" />

      {/* Framework perimeter badges */}
      <rect x="20" y="14" width="92" height="22" rx="11" fill="url(#asCardGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="66" y="28" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.9">NIST AI RMF</text>

      <rect x="158" y="14" width="84" height="22" rx="11" fill="url(#asAccentCardGrad)" stroke="var(--accent-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="200" y="28" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.9">EU AI ACT</text>

      <rect x="288" y="14" width="92" height="22" rx="11" fill="url(#asCardGrad)" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="1" />
      <text x="334" y="28" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.9">ISO 42001</text>

      {/* ── LEFT: unsorted AI ideas ── */}
      <text x="74" y="78" textAnchor="middle" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.7">AI USE-CASE IDEAS</text>
      {/* scattered dots */}
      <circle cx="42" cy="110" r="7" fill="var(--brand-400)" fillOpacity="0.4" stroke="var(--brand-300)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="84" cy="98" r="6" fill="var(--accent-400)" fillOpacity="0.35" stroke="var(--accent-300)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="60" cy="146" r="8" fill="var(--brand-400)" fillOpacity="0.35" stroke="var(--brand-300)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="100" cy="138" r="6" fill="var(--brand-400)" fillOpacity="0.45" stroke="var(--brand-300)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="38" cy="186" r="6" fill="var(--accent-400)" fillOpacity="0.4" stroke="var(--accent-300)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="82" cy="190" r="7" fill="var(--brand-400)" fillOpacity="0.4" stroke="var(--brand-300)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="56" cy="226" r="6" fill="var(--accent-400)" fillOpacity="0.35" stroke="var(--accent-300)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="98" cy="232" r="7" fill="var(--brand-400)" fillOpacity="0.35" stroke="var(--brand-300)" strokeOpacity="0.5" strokeWidth="1" />

      {/* flow lines into lens */}
      <path d="M 100 138 Q 150 150 168 168" fill="none" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 4" />
      <path d="M 98 232 Q 150 210 170 196" fill="none" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 4" />
      <path d="M 84 98 Q 150 130 170 158" fill="none" stroke="var(--accent-400)" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="3 4" />

      {/* ── CENTER: governance / risk-tiering lens ── */}
      <circle cx="200" cy="182" r="46" fill="none" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="200" cy="182" r="38" fill="url(#asLensGrad)" stroke="var(--brand-400)" strokeOpacity="0.45" strokeWidth="1" />
      {/* shield glyph */}
      <path d="M 200 162 L 216 169 L 216 184 Q 216 200 200 206 Q 184 200 184 184 L 184 169 Z" fill="var(--brand-400)" fillOpacity="0.22" stroke="var(--brand-300)" strokeOpacity="0.55" strokeWidth="1.2" />
      <path d="M 193 184 L 198 190 L 208 177" fill="none" stroke="var(--brand-200)" strokeOpacity="0.75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="150" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.12em" fill="var(--text-subtle)" fillOpacity="0.85">GOVERNANCE</text>
      <text x="200" y="224" textAnchor="middle" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.1em" fill="var(--text-subtle)" fillOpacity="0.7">RISK-TIERED</text>

      {/* flow lines out of lens to deliverables */}
      <line x1="238" y1="168" x2="280" y2="92" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 4" />
      <line x1="244" y1="182" x2="284" y2="182" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 4" />
      <line x1="238" y1="196" x2="280" y2="272" stroke="var(--brand-400)" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 4" />

      {/* ── RIGHT: three deliverables ── */}
      {/* Risk-tiered roadmap (top) */}
      <rect x="280" y="66" width="106" height="50" rx="9" fill="url(#asCardGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <rect x="292" y="80" width="30" height="5" rx="2" fill="var(--brand-400)" fillOpacity="0.5" />
      <rect x="292" y="89" width="50" height="5" rx="2" fill="var(--brand-400)" fillOpacity="0.3" />
      <circle cx="372" cy="82" r="3.5" fill="var(--brand-400)" fillOpacity="0.6" />
      <circle cx="372" cy="92" r="3.5" fill="var(--accent-400)" fillOpacity="0.6" />
      <text x="333" y="109" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">RISK-TIERED ROADMAP</text>

      {/* Governance framework (middle) */}
      <rect x="284" y="158" width="102" height="48" rx="9" fill="url(#asAccentCardGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      <g transform="translate(296, 170)">
        <rect x="0" y="0" width="9" height="9" rx="1.5" fill="var(--accent-400)" fillOpacity="0.5" />
        <rect x="11" y="0" width="9" height="9" rx="1.5" fill="var(--accent-400)" fillOpacity="0.3" />
        <rect x="0" y="11" width="9" height="9" rx="1.5" fill="var(--accent-400)" fillOpacity="0.3" />
        <rect x="11" y="11" width="9" height="9" rx="1.5" fill="var(--accent-400)" fillOpacity="0.55" />
      </g>
      <text x="335" y="199" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">GOVERNANCE FRAMEWORK</text>

      {/* Board business case (bottom) */}
      <rect x="280" y="248" width="106" height="50" rx="9" fill="url(#asCardGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <rect x="292" y="262" width="10" height="16" rx="1.5" fill="var(--brand-400)" fillOpacity="0.35" />
      <rect x="306" y="266" width="10" height="12" rx="1.5" fill="var(--brand-400)" fillOpacity="0.5" />
      <rect x="320" y="258" width="10" height="20" rx="1.5" fill="var(--accent-400)" fillOpacity="0.5" />
      <text x="333" y="291" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">BOARD BUSINESS CASE</text>

      {/* Decorative particles */}
      <circle cx="150" cy="80" r="1.2" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="250" cy="120" r="1.2" fill="var(--accent-300)" fillOpacity="0.3" />
      <circle cx="150" cy="300" r="1.4" fill="var(--brand-400)" fillOpacity="0.25" />
      <circle cx="252" cy="300" r="1.2" fill="var(--accent-400)" fillOpacity="0.25" />
    </svg>
  </div>
);
