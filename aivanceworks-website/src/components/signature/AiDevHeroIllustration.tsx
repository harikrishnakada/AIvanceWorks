/**
 * AiDevHeroIllustration — inline SVG for the AI Development (general / catch-all) service hero.
 *
 * Visual concept: a single problem node on the left fans out to a column of candidate AI
 * approaches (predictive · generative · vision · document · automation), and those paths
 * converge into one shipped solution node on the right. The fan-out-then-converge IS the
 * message: many possible approaches, one chosen build — "bring the problem, we pick the AI".
 *
 * Color strategy: all fills and strokes use CSS custom properties (var(--brand-*),
 * var(--accent-*)) so the illustration inherits the active data-theme automatically.
 * No hardcoded hex values.
 *
 * Accessibility: wrapped in a role="img" div with descriptive aria-label.
 * SVG has <title> and <desc>. Internal decorative elements use aria-hidden="true".
 */

export const AiDevHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Problem-first AI routing diagram: a single problem node fans out to five candidate AI approaches — predictive, generative, vision, document, and automation — which converge into one shipped solution"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>AI Development Approach-Selection Illustration</title>
      <desc>
        A diagram showing one business problem on the left connected to five candidate AI
        approaches in the centre, with the paths converging into a single built and deployed
        solution on the right.
      </desc>

      <defs>
        <linearGradient id="aidev-node" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id="aidev-out" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-300)" stopOpacity="0.30" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.20" />
        </linearGradient>
        <radialGradient id="aidev-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="150" rx="190" ry="130" fill="url(#aidev-glow)" />

      {/* Decorative particles */}
      <circle cx="30" cy="44" r="1.5" fill="var(--brand-300)" fillOpacity="0.28" />
      <circle cx="372" cy="64" r="1" fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="40" cy="258" r="1" fill="var(--brand-400)" fillOpacity="0.18" />
      <circle cx="360" cy="244" r="1.5" fill="var(--accent-400)" fillOpacity="0.22" />

      {/* Fan-out lines: problem (left, y=150) → each approach (centre) */}
      <g stroke="var(--brand-400)" strokeWidth="1.1" strokeOpacity="0.4" fill="none" strokeDasharray="4 3">
        <path d="M86,150 C130,150 130,66 168,66" />
        <path d="M86,150 C130,150 130,108 168,108" />
        <path d="M86,150 C130,150 130,150 168,150" />
        <path d="M86,150 C130,150 130,192 168,192" />
        <path d="M86,150 C130,150 130,234 168,234" />
      </g>

      {/* Converge lines: each approach (centre) → solution (right, y=150) */}
      <g stroke="var(--accent-400)" strokeWidth="1.1" strokeOpacity="0.4" fill="none" strokeDasharray="4 3">
        <path d="M256,66 C294,66 294,150 314,150" />
        <path d="M256,108 C294,108 294,150 314,150" />
        <path d="M256,150 C294,150 294,150 314,150" />
        <path d="M256,192 C294,192 294,150 314,150" />
        <path d="M256,234 C294,234 294,150 314,150" />
      </g>

      {/* Problem node (left) */}
      <text x="58" y="120" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.7">PROBLEM</text>
      <rect x="22" y="130" width="64" height="40" rx="8" fill="url(#aidev-node)" stroke="var(--brand-400)" strokeWidth="0.9" strokeOpacity="0.5" />
      <circle cx="54" cy="150" r="9" fill="none" stroke="var(--brand-300)" strokeWidth="1.2" strokeOpacity="0.6" />
      <path d="M52 150 a2 2 0 1 1 4 0 c0 1.5 -2 1.5 -2 3" fill="none" stroke="var(--brand-200)" strokeWidth="1.1" strokeOpacity="0.7" strokeLinecap="round" />
      <circle cx="54" cy="157" r="0.8" fill="var(--brand-200)" fillOpacity="0.7" />

      {/* Five approach nodes (centre) */}
      {[
        { y: 66, label: 'predictive' },
        { y: 108, label: 'generative' },
        { y: 150, label: 'vision' },
        { y: 192, label: 'document' },
        { y: 234, label: 'automation' },
      ].map((n) => (
        <g key={n.label}>
          <rect x="168" y={n.y - 12} width="88" height="24" rx="6" fill="url(#aidev-node)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.45" />
          <circle cx="180" cy={n.y} r="3" fill="var(--brand-300)" fillOpacity="0.6" />
          <text x="192" y={n.y + 3} fontSize="8" fontWeight="600" fill="var(--brand-100)" fillOpacity="0.85">{n.label}</text>
        </g>
      ))}
      <text x="212" y="44" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.7">APPROACHES</text>

      {/* Chosen-path highlight: the "generative" lane shown as the selected route */}
      <rect x="168" y="96" width="88" height="24" rx="6" fill="none" stroke="var(--accent-400)" strokeWidth="1.4" strokeOpacity="0.7" />

      {/* Solution node (right) */}
      <text x="346" y="120" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.7">SHIPPED</text>
      <rect x="314" y="130" width="64" height="40" rx="8" fill="url(#aidev-out)" stroke="var(--accent-400)" strokeWidth="0.9" strokeOpacity="0.5" />
      <path d="M338 150 l5 5 9 -10" fill="none" stroke="var(--accent-100)" strokeWidth="1.6" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Bottom label strip */}
      <line x1="20" y1="276" x2="380" y2="276" stroke="var(--brand-400)" strokeWidth="0.5" strokeOpacity="0.2" />
      <text x="200" y="291" textAnchor="middle" fontSize="8" fontWeight="600" letterSpacing="0.05em" fill="var(--brand-300)" fillOpacity="0.5">
        One problem · many approaches · one built solution
      </text>
    </svg>
  </div>
);
