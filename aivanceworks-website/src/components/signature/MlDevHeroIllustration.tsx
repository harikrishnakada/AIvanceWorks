/**
 * MlDevHeroIllustration — inline SVG for the ML Development service hero.
 *
 * Visual concept: a closed ML lifecycle loop — labeled data flows into a model
 * (a small neural-net node graph), the model emits predictions, and a feedback
 * arc returns from monitoring back to the data stage. The loop is the message:
 * a trained model is maintained, not shipped once.
 *
 * Color strategy: all fills and strokes use CSS custom properties (var(--brand-*),
 * var(--accent-*)) so the illustration inherits the active data-theme automatically.
 * No hardcoded hex values.
 *
 * Accessibility: wrapped in a role="img" div with descriptive aria-label.
 * SVG has <title> and <desc>. Internal decorative elements use aria-hidden="true".
 */

export const MlDevHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Machine learning lifecycle diagram: labeled data feeds a neural network model that emits predictions, with a feedback loop returning from monitoring back to the data stage for retraining"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>ML Development Lifecycle Illustration</title>
      <desc>
        A closed machine learning loop showing labeled training data flowing into a
        neural network model, the model producing predictions in production, and a
        monitoring feedback arc returning to the data stage to trigger retraining.
      </desc>

      <defs>
        <linearGradient id="ml-bg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="ml-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="ml-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ml-model" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id="ml-serve" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-300)" stopOpacity="0.30" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.20" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="150" rx="190" ry="130" fill="url(#ml-glow)" />

      {/* Decorative particles */}
      <circle cx="30" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.28" />
      <circle cx="372" cy="60" r="1" fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="48" cy="262" r="1" fill="var(--brand-400)" fillOpacity="0.18" />
      <circle cx="356" cy="240" r="1.5" fill="var(--accent-400)" fillOpacity="0.22" />

      {/* ─── DATA stage (left) ─── */}
      <text x="58" y="62" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.7">LABELED DATA</text>
      <rect x="26" y="72" width="64" height="20" rx="4" fill="url(#ml-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="58" y="85" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.85">features</text>
      <rect x="26" y="98" width="64" height="20" rx="4" fill="url(#ml-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="58" y="111" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.85">labels</text>
      <rect x="26" y="124" width="64" height="20" rx="4" fill="url(#ml-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="58" y="137" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.85">train/test</text>

      {/* arrow data → model */}
      <path d="M92,108 L122,108" stroke="url(#ml-flow)" strokeWidth="1.5" fill="none" />
      <polygon points="122,103 130,108 122,113" fill="var(--brand-400)" fillOpacity="0.6" />
      <text x="110" y="100" textAnchor="middle" fontSize="6" fontWeight="700" letterSpacing="0.05em" fill="var(--brand-300)" fillOpacity="0.5">TRAIN</text>

      {/* ─── MODEL (center) — small neural net ─── */}
      <text x="200" y="62" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--brand-300)" fillOpacity="0.7">MODEL</text>
      <rect x="134" y="72" width="132" height="120" rx="10" fill="url(#ml-model)" stroke="var(--brand-400)" strokeWidth="0.9" strokeOpacity="0.5" />

      {/* net edges */}
      <g stroke="var(--brand-300)" strokeWidth="0.6" strokeOpacity="0.35">
        <line x1="156" y1="100" x2="200" y2="92" />
        <line x1="156" y1="100" x2="200" y2="132" />
        <line x1="156" y1="132" x2="200" y2="92" />
        <line x1="156" y1="132" x2="200" y2="132" />
        <line x1="156" y1="164" x2="200" y2="92" />
        <line x1="156" y1="164" x2="200" y2="132" />
        <line x1="200" y1="92" x2="244" y2="116" />
        <line x1="200" y1="132" x2="244" y2="116" />
      </g>
      {/* input nodes */}
      <circle cx="156" cy="100" r="5" fill="var(--brand-400)" fillOpacity="0.5" />
      <circle cx="156" cy="132" r="5" fill="var(--brand-400)" fillOpacity="0.5" />
      <circle cx="156" cy="164" r="5" fill="var(--brand-400)" fillOpacity="0.5" />
      {/* hidden nodes */}
      <circle cx="200" cy="92" r="5.5" fill="var(--brand-300)" fillOpacity="0.55" />
      <circle cx="200" cy="132" r="5.5" fill="var(--brand-300)" fillOpacity="0.55" />
      {/* output node */}
      <circle cx="244" cy="116" r="6" fill="var(--accent-400)" fillOpacity="0.6" />
      <text x="200" y="182" textAnchor="middle" fontSize="6.5" fill="var(--brand-300)" fillOpacity="0.55">train · fine-tune · evaluate</text>

      {/* arrow model → serve */}
      <path d="M266,116 L300,116" stroke="url(#ml-flow)" strokeWidth="1.5" fill="none" />
      <polygon points="300,111 308,116 300,121" fill="var(--accent-400)" fillOpacity="0.6" />
      <text x="287" y="108" textAnchor="middle" fontSize="6" fontWeight="700" letterSpacing="0.05em" fill="var(--accent-300)" fillOpacity="0.55">DEPLOY</text>

      {/* ─── SERVE / PREDICTIONS (right) ─── */}
      <text x="344" y="62" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fill="var(--accent-300)" fillOpacity="0.7">PREDICTIONS</text>
      <rect x="312" y="86" width="66" height="24" rx="5" fill="url(#ml-serve)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="345" y="101" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">scoring API</text>
      <rect x="312" y="116" width="66" height="24" rx="5" fill="url(#ml-serve)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="345" y="131" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">batch jobs</text>
      <rect x="312" y="146" width="66" height="24" rx="5" fill="url(#ml-serve)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="345" y="161" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.85">monitored</text>

      {/* ─── FEEDBACK LOOP: serve/monitor → back to data ─── */}
      <path
        d="M345,170 V238 Q345,252 331,252 H72 Q58,252 58,238 V148"
        stroke="var(--accent-400)"
        strokeWidth="1.4"
        strokeOpacity="0.5"
        strokeDasharray="6 4"
        fill="none"
      />
      <polygon points="52,156 58,144 64,156" fill="var(--accent-400)" fillOpacity="0.55" />
      <text x="200" y="247" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fill="var(--accent-300)" fillOpacity="0.7">
        DRIFT DETECTED → RETRAIN
      </text>

      {/* Bottom label strip */}
      <line x1="20" y1="270" x2="380" y2="270" stroke="var(--brand-400)" strokeWidth="0.5" strokeOpacity="0.2" />
      <text x="200" y="286" textAnchor="middle" fontSize="8" fontWeight="600" letterSpacing="0.05em" fill="var(--brand-300)" fillOpacity="0.5">
        Frame · Data · Train · Deploy · Monitor — a loop, not a handoff
      </text>
    </svg>
  </div>
);
