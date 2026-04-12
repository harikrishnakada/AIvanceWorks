/**
 * IntelligentAutoHeroIllustration — inline SVG for the Intelligent Automation
 * hero right column.
 *
 * Visual concept: a central workflow orchestration hub (rounded rectangle)
 * with process inputs flowing in from the left (triggers), passing through
 * an AI decision layer (center), and routing to two output paths — automated
 * actions (right) and human review (bottom-right). A feedback loop arrow
 * connects human review back to the AI layer.
 *
 * The visual carries the core argument: processes flow through AI reasoning,
 * not just mechanical replay, with human oversight built into the path.
 *
 * Color strategy: all fills/strokes resolve through CSS custom properties
 * (--brand-*, --accent-*, --text-subtle) so the illustration inherits the
 * active data-theme automatically. No hardcoded hex values.
 */

export const IntelligentAutoHeroIllustration = () => (
  <div
    className="w-full max-w-md mx-auto"
    role="img"
    aria-label="Intelligent automation workflow showing process triggers flowing through an AI decision engine to automated actions and human review, with a feedback loop"
  >
    <svg
      viewBox="0 0 400 340"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Intelligent Automation Workflow Illustration</title>
      <desc>
        Process triggers on the left flow into a central AI decision engine.
        High-confidence decisions route right to automated actions. Low-confidence
        decisions route down to human review. A feedback loop connects human
        review back to the AI engine, representing continuous learning.
      </desc>

      {/* ─── Defs: gradients ─── */}
      <defs>
        <linearGradient id="iaHubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="iaNodeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="iaAccentNodeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-500)" stopOpacity="0.2" />
        </linearGradient>

        <radialGradient id="iaGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--brand-400)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Background glow ─── */}
      <ellipse cx="200" cy="155" rx="180" ry="140" fill="url(#iaGlow)" />

      {/* ─── Decorative particles ─── */}
      <circle cx="40" cy="40" r="1.5" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="360" cy="55" r="1" fill="var(--accent-300)" fillOpacity="0.25" />
      <circle cx="50" cy="290" r="1.5" fill="var(--brand-400)" fillOpacity="0.2" />
      <circle cx="350" cy="285" r="1" fill="var(--accent-400)" fillOpacity="0.25" />
      <circle cx="180" cy="15" r="1" fill="var(--brand-300)" fillOpacity="0.3" />
      <circle cx="320" cy="320" r="1.5" fill="var(--accent-300)" fillOpacity="0.2" />

      {/* ─── Trigger nodes (left column) ─── */}
      {/* Email trigger */}
      <rect x="18" y="55" width="75" height="32" rx="7" fill="url(#iaNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <rect x="30" y="64" width="10" height="7" rx="1" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <path d="M30,64 L35,69 L40,64" fill="none" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.6" />
      <text x="62" y="75" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">EMAIL</text>

      {/* Form trigger */}
      <rect x="18" y="100" width="75" height="32" rx="7" fill="url(#iaNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <rect x="30" y="108" width="10" height="12" rx="1.5" fill="none" stroke="var(--brand-400)" strokeOpacity="0.6" strokeWidth="0.8" />
      <line x1="33" y1="112" x2="38" y2="112" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <line x1="33" y1="115" x2="37" y2="115" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.5" />
      <text x="63" y="120" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">FORM</text>

      {/* API trigger */}
      <rect x="18" y="145" width="75" height="32" rx="7" fill="url(#iaNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <text x="34" y="166" fontSize="7" fontWeight="700" fontFamily="system-ui, monospace" fill="var(--brand-400)" fillOpacity="0.6">{'{ }'}</text>
      <text x="65" y="165" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">API</text>

      {/* Event trigger */}
      <rect x="18" y="190" width="75" height="32" rx="7" fill="url(#iaNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M32,200 L36,205 L34,205 L37,212 L33,206 L35,206 Z" fill="var(--brand-400)" fillOpacity="0.5" />
      <text x="63" y="210" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" fill="var(--text-subtle)" fillOpacity="0.85">EVENT</text>

      {/* ─── Flow lines: triggers → hub ─── */}
      <line x1="93" y1="71" x2="145" y2="130" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 3" />
      <line x1="93" y1="116" x2="145" y2="140" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 3" />
      <line x1="93" y1="161" x2="145" y2="155" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 3" />
      <line x1="93" y1="206" x2="145" y2="170" stroke="var(--brand-400)" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 3" />

      {/* ─── Central AI Decision Engine ─── */}
      <rect
        x="145"
        y="110"
        width="120"
        height="90"
        rx="14"
        fill="url(#iaHubGrad)"
        stroke="var(--brand-400)"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      {/* Inner box */}
      <rect
        x="155"
        y="120"
        width="100"
        height="70"
        rx="8"
        fill="var(--brand-400)"
        fillOpacity="0.06"
        stroke="none"
      />
      {/* Hub label */}
      <text
        x="205"
        y="148"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.1em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        AI DECISION
      </text>
      <text
        x="205"
        y="160"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.1em"
        fill="var(--text-subtle)"
        fillOpacity="0.9"
      >
        ENGINE
      </text>
      <text
        x="205"
        y="177"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
        fill="var(--text-subtle)"
        fillOpacity="0.45"
      >
        UNDERSTAND · REASON · SCORE
      </text>

      {/* ─── Confidence split indicator ─── */}
      {/* High confidence → right */}
      <line x1="265" y1="140" x2="305" y2="100" stroke="var(--accent-400)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Low confidence → down-right */}
      <line x1="265" y1="170" x2="305" y2="250" stroke="var(--brand-400)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ─── Confidence labels ─── */}
      <text x="278" y="112" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.5" transform="rotate(-25, 278, 112)">HIGH CONF</text>
      <text x="278" y="218" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.5" transform="rotate(25, 278, 218)">LOW CONF</text>

      {/* ─── Automated Actions (top right) ─── */}
      <rect x="300" y="55" width="85" height="90" rx="10" fill="url(#iaAccentNodeGrad)" stroke="var(--accent-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Lightning icon */}
      <path d="M335,70 L340,78 L337,78 L342,88 L337,80 L340,80 Z" fill="var(--accent-400)" fillOpacity="0.5" />
      <text x="342" y="103" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">AUTOMATED</text>
      <text x="342" y="113" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">ACTIONS</text>
      {/* Sub-labels */}
      <text x="342" y="127" textAnchor="middle" fontSize="4.5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.4">API calls · Updates</text>
      <text x="342" y="135" textAnchor="middle" fontSize="4.5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.4">Notifications</text>

      {/* ─── Human Review (bottom right) ─── */}
      <rect x="300" y="235" width="85" height="75" rx="10" fill="url(#iaNodeGrad)" stroke="var(--brand-400)" strokeOpacity="0.35" strokeWidth="1" />
      {/* Person icon */}
      <circle cx="335" cy="252" r="5" fill="none" stroke="var(--brand-400)" strokeOpacity="0.5" strokeWidth="0.8" />
      <path d="M328,268 Q335,260 342,268" fill="none" stroke="var(--brand-400)" strokeOpacity="0.4" strokeWidth="0.8" />
      <text x="342" y="278" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">HUMAN</text>
      <text x="342" y="288" textAnchor="middle" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.08em" fill="var(--text-subtle)" fillOpacity="0.85">REVIEW</text>
      <text x="342" y="301" textAnchor="middle" fontSize="4.5" fontWeight="500" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.4">Context · Approve</text>

      {/* ─── Feedback loop: human review → AI engine ─── */}
      <path
        d="M300,280 C240,300 160,280 165,200"
        fill="none"
        stroke="var(--brand-400)"
        strokeOpacity="0.15"
        strokeWidth="1.2"
        strokeDasharray="3 4"
      />
      {/* Arrow head on feedback loop */}
      <polygon points="162,204 168,204 165,195" fill="var(--brand-400)" fillOpacity="0.2" />

      {/* ─── Feedback label ─── */}
      <text x="210" y="295" textAnchor="middle" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">FEEDBACK LOOP</text>

      {/* ─── Corner labels ─── */}
      <text x="18" y="40" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">TRIGGERS</text>

      <text x="340" y="40" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">EXECUTE</text>

      <text x="18" y="310" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.35">CLASSIFY</text>
      <text x="18" y="320" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--brand-300)" fillOpacity="0.3">ROUTE</text>

      <text x="340" y="325" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.35">LEARN</text>
      <text x="340" y="335" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif" fill="var(--accent-300)" fillOpacity="0.3">IMPROVE</text>

      {/* ─── Outer boundary ring ─── */}
      <ellipse cx="200" cy="170" rx="190" ry="160" fill="none" stroke="var(--brand-400)" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  </div>
);
