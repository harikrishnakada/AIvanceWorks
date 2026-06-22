/**
 * AiNativeHeroIllustration — inline SVG for the Native AI Development service hero.
 *
 * Visual concept: a foundation model sits at the CENTER of the architecture (not the edge),
 * with the application's layers — AI-native UX on top, prompt management and infrastructure
 * around it — orbiting and connected to that core. The model-at-the-center is the message:
 * AI is foundational, not bolted on.
 *
 * Color strategy: all fills and strokes use CSS custom properties (var(--brand-*),
 * var(--accent-*)) so the illustration inherits the active data-theme automatically.
 * No hardcoded hex values.
 *
 * Accessibility: wrapped in a role="img" div with descriptive aria-label.
 * SVG has <title> and <desc>. Internal decorative elements use aria-hidden="true".
 */

export const AiNativeHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="AI-native architecture diagram: a foundation model at the center of an application, connected to AI-native UX, prompt management, and supporting infrastructure layers that surround it"
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Native AI Development Architecture Illustration</title>
      <desc>
        A foundation model node placed at the center of a software architecture, with connector
        lines reaching out to surrounding layers — AI-native user experience, prompt management,
        model serving, and cost and evaluation infrastructure — showing the model as a core
        component rather than a bolt-on.
      </desc>

      <defs>
        <linearGradient id="nai-bg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id="nai-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nai-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-300)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.28" />
        </radialGradient>
        <linearGradient id="nai-node" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-300)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="150" rx="190" ry="130" fill="url(#nai-glow)" />

      {/* Decorative particles */}
      <circle cx="34" cy="44" r="1.5" fill="var(--brand-300)" fillOpacity="0.28" />
      <circle cx="368" cy="56" r="1" fill="var(--accent-300)" fillOpacity="0.22" />
      <circle cx="44" cy="256" r="1" fill="var(--brand-400)" fillOpacity="0.18" />
      <circle cx="360" cy="246" r="1.5" fill="var(--accent-400)" fillOpacity="0.22" />

      {/* ─── connector lines: core → surrounding layers ─── */}
      <g stroke="var(--brand-300)" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="5 4">
        <line x1="200" y1="150" x2="200" y2="66" />
        <line x1="200" y1="150" x2="200" y2="234" />
        <line x1="200" y1="150" x2="92" y2="110" />
        <line x1="200" y1="150" x2="308" y2="110" />
        <line x1="200" y1="150" x2="92" y2="190" />
        <line x1="200" y1="150" x2="308" y2="190" />
      </g>

      {/* ─── CORE: foundation model (center) ─── */}
      <circle cx="200" cy="150" r="40" fill="url(#nai-core)" stroke="var(--brand-300)" strokeWidth="1.1" strokeOpacity="0.55" />
      <circle cx="200" cy="150" r="40" fill="none" stroke="var(--brand-400)" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 3" />
      {/* tiny net inside the core */}
      <g stroke="var(--brand-100)" strokeWidth="0.6" strokeOpacity="0.4">
        <line x1="186" y1="140" x2="200" y2="150" />
        <line x1="186" y1="160" x2="200" y2="150" />
        <line x1="200" y1="150" x2="214" y2="140" />
        <line x1="200" y1="150" x2="214" y2="160" />
      </g>
      <circle cx="186" cy="140" r="3" fill="var(--brand-100)" fillOpacity="0.6" />
      <circle cx="186" cy="160" r="3" fill="var(--brand-100)" fillOpacity="0.6" />
      <circle cx="200" cy="150" r="3.5" fill="var(--accent-200)" fillOpacity="0.7" />
      <circle cx="214" cy="140" r="3" fill="var(--brand-100)" fillOpacity="0.6" />
      <circle cx="214" cy="160" r="3" fill="var(--brand-100)" fillOpacity="0.6" />
      <text x="200" y="186" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fill="var(--brand-100)" fillOpacity="0.85">FOUNDATION MODEL</text>

      {/* ─── surrounding layer nodes ─── */}
      {/* top: AI-native UX */}
      <rect x="156" y="40" width="88" height="26" rx="6" fill="url(#nai-node)" stroke="var(--accent-400)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="200" y="56" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent-100)" fillOpacity="0.9">AI-native UX</text>

      {/* bottom: cost / evals */}
      <rect x="150" y="234" width="100" height="26" rx="6" fill="url(#nai-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.45" />
      <text x="200" y="250" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.9">cost · evals</text>

      {/* upper-left: prompts */}
      <rect x="30" y="97" width="78" height="26" rx="6" fill="url(#nai-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.45" />
      <text x="69" y="113" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.9">prompts</text>

      {/* upper-right: serving */}
      <rect x="292" y="97" width="80" height="26" rx="6" fill="url(#nai-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.45" />
      <text x="332" y="113" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.9">serving</text>

      {/* lower-left: embeddings */}
      <rect x="24" y="177" width="84" height="26" rx="6" fill="url(#nai-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.45" />
      <text x="66" y="193" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.9">embeddings</text>

      {/* lower-right: observability */}
      <rect x="292" y="177" width="84" height="26" rx="6" fill="url(#nai-bg-grad)" stroke="var(--brand-400)" strokeWidth="0.8" strokeOpacity="0.45" />
      <text x="334" y="193" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="var(--brand-200)" fillOpacity="0.9">observability</text>

      {/* Bottom label strip */}
      <line x1="20" y1="276" x2="380" y2="276" stroke="var(--brand-400)" strokeWidth="0.5" strokeOpacity="0.2" />
      <text x="200" y="292" textAnchor="middle" fontSize="8" fontWeight="600" letterSpacing="0.05em" fill="var(--brand-300)" fillOpacity="0.55">
        The model at the center — designed in, not bolted on
      </text>
    </svg>
  </div>
);
