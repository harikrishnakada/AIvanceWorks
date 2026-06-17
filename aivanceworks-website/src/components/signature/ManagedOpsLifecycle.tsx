/**
 * ManagedOpsLifecycle — signature section for Managed Infrastructure Services page.
 *
 * Visualization pattern: Process / flow (catalog pattern 3) — a continuous CLOSED LOOP
 *   expressing the always-on operational cycle. Distinct from InfraOpsControlPlane's
 *   linear four-quadrant build lifecycle; this is a day-2 operations loop.
 *
 * Emotional argument: "We run a continuous, transparent operations loop in your cloud —
 *   issues are caught, resolved, and engineered out, around the clock."
 *
 * Loop phases: Monitor → Detect → Respond → Remediate → Optimize → (back to Monitor)
 *
 * Severity strip: Shows Sev1 / Sev2 / Sev3 response-target framing as an additional
 *   data layer anchored to the Respond phase — capability-framed, not invented numbers
 *   (illustrative targets are listed in _unverified on the data file, not here).
 *
 * Perimeter note: "Runs in your cloud · shared visibility · documented runbooks."
 *
 * Desktop (lg+): Circular loop rendered as an SVG arc arrangement with 5 phase nodes
 *   arranged in a ring. Active phase focus dims others and reveals detail panel.
 *   Severity strip sits below the loop ring.
 *
 * Mobile (< lg): Loop linearizes to a vertical step list. Each phase is a full-width
 *   card with icon, title, and description. Severity strip collapses to a compact
 *   3-column grid below the step list. Circular SVG is hidden on mobile.
 *
 * Accessibility: each phase node has role="button", aria-expanded, and aria-controls
 *   pointing at the desktop detail panel; the SVG is aria-hidden. SVG nodes track
 *   keyboard focus in React state (onFocus/onBlur) and draw an explicit token-colored
 *   focus ring on Tab, since native focus outlines are unreliable on SVG elements.
 *   HTML buttons keep their focus-visible ring.
 *
 * Theming: token-only colors. Flipping data-theme re-skins cleanly. No raw shades,
 *   no hex literals, no inline style color values.
 *
 * Animation: all transitions are gated via the Tailwind motion-safe: prefix
 *   (transition-all / transition-opacity / transition-colors and the SVG node
 *   transition-[fill,…] / transition-opacity utilities). Under prefers-reduced-motion
 *   the focus/active state still updates visually, just without the transition.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface LoopPhase {
  id: string;
  label: string;
  tagline: string;
  description: string;
  /** SVG arc position in degrees (0 = top, clockwise) */
  angle: number;
}

const LOOP_PHASES: LoopPhase[] = [
  {
    id: 'monitor',
    label: 'Monitor',
    tagline: 'Always-on observability',
    description:
      'Continuous metric, log, and trace collection across your cloud environment. Dashboards and alert rules watch for anomalies, saturation, and SLO breaches — 24 hours a day, every day.',
    angle: 270, // top
  },
  {
    id: 'detect',
    label: 'Detect',
    tagline: 'Signal to alert, instantly',
    description:
      'Anomaly thresholds, composite alert rules, and runbook-linked policies convert raw signals into actionable incidents before they become user-facing outages.',
    angle: 342, // upper-right
  },
  {
    id: 'respond',
    label: 'Respond',
    tagline: 'Named engineers, SLA-backed',
    description:
      'On-call engineers acknowledge and begin investigation within severity-defined windows. No re-escalation loops, no offshore L1 — the same engineer who picks up the alert owns it through resolution.',
    angle: 54, // lower-right
  },
  {
    id: 'remediate',
    label: 'Remediate',
    tagline: 'Fix, document, verify',
    description:
      'Root cause resolved via documented runbook or bespoke fix, followed by verification testing and a post-mortem for every Sev1/Sev2 event. Every incident adds to the runbook library.',
    angle: 126, // lower-left
  },
  {
    id: 'optimize',
    label: 'Optimize',
    tagline: 'Engineer problems out',
    description:
      'Recurring incident patterns trigger proactive engineering work — autoscaling rules, capacity adjustments, cost rightsizing, patch cycles, and DR improvements — so the same issue does not recur.',
    angle: 198, // upper-left
  },
];

const SEV_ROWS = [
  {
    level: 'Sev1',
    label: 'Critical — service down',
    target: 'Immediate acknowledgment target',
    accent: true,
  },
  {
    level: 'Sev2',
    label: 'Major — degraded or at risk',
    target: 'Rapid acknowledgment target',
    accent: false,
  },
  {
    level: 'Sev3',
    label: 'Minor — non-critical issue',
    target: 'Standard response target',
    accent: false,
  },
];

/** Convert polar angle (degrees, 0=top, clockwise) to SVG cartesian coords */
function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

// SVG canvas constants
const CX = 160;
const CY = 160;
const RING_R = 105;
const NODE_R = 22;

// Stable id for the desktop detail panel controlled by the phase nodes
const DETAIL_PANEL_ID = 'managed-ops-lifecycle-detail';

export function ManagedOpsLifecycle() {
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [keyboardFocusId, setKeyboardFocusId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  const focusedPhase = LOOP_PHASES.find((p) => p.id === focusedId) ?? null;

  // Build arrow paths between phases (small arc segments on the ring)
  function buildArrowPath(fromAngle: number, toAngle: number): string {
    let end = toAngle;
    if (end < fromAngle) end += 360;
    // trim the arc slightly before the destination node
    const trimEnd = end - 18;
    const startPt = polarToXY(CX, CY, RING_R, fromAngle + 18);
    const endPt = polarToXY(CX, CY, RING_R, trimEnd);
    // large-arc = 0 for < 180 deg arcs
    const largeArc = trimEnd - (fromAngle + 18) > 180 ? 1 : 0;
    return `M ${startPt.x} ${startPt.y} A ${RING_R} ${RING_R} 0 ${largeArc} 1 ${endPt.x} ${endPt.y}`;
  }

  return (
    <Section tone="dark" withGrid>
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            Operations Lifecycle
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
            A closed loop, always running.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg leading-relaxed">
            We operate a continuous cycle in your cloud — detecting issues before they become
            outages, resolving them with documented runbooks, and engineering root causes
            out so they stop recurring.
          </p>
        </div>

        {/* ─── Desktop: SVG loop ring + detail panel (lg+) ─── */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 items-center max-w-5xl mx-auto">

          {/* Left: SVG loop ring */}
          <div className="flex justify-center">
            <div className="relative">
              <svg
                viewBox="0 0 320 320"
                className="w-full max-w-[360px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ── Glow background ── */}
                <radialGradient id="molGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.07" />
                  <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0" />
                </radialGradient>
                <circle cx={CX} cy={CY} r={CX - 10} fill="url(#molGlow)" />

                {/* ── Outer dashed ring ── */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={RING_R}
                  fill="none"
                  stroke="var(--brand-600)"
                  strokeOpacity="0.15"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />

                {/* ── Arrow arcs between nodes ── */}
                {LOOP_PHASES.map((phase, i) => {
                  const next = LOOP_PHASES[(i + 1) % LOOP_PHASES.length];
                  return (
                    <path
                      key={`arc-${phase.id}`}
                      d={buildArrowPath(phase.angle, next.angle)}
                      fill="none"
                      stroke="var(--brand-400)"
                      strokeOpacity={focusedId && focusedId !== phase.id ? 0.08 : 0.35}
                      strokeWidth="1.5"
                      markerEnd="url(#molArrow)"
                      className="motion-safe:transition-opacity motion-safe:duration-300"
                    />
                  );
                })}

                {/* Arrow marker */}
                <defs>
                  <marker
                    id="molArrow"
                    markerWidth="6"
                    markerHeight="6"
                    refX="3"
                    refY="3"
                    orient="auto"
                  >
                    <path
                      d="M0,1 L3,3 L0,5"
                      fill="none"
                      stroke="var(--brand-400)"
                      strokeOpacity="0.6"
                      strokeWidth="0.8"
                    />
                  </marker>
                </defs>

                {/* Center label */}
                <text
                  x={CX}
                  y={CY - 7}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="system-ui, sans-serif"
                  letterSpacing="0.1em"
                  fill="var(--brand-300)"
                  fillOpacity="0.6"
                >
                  ALWAYS-ON
                </text>
                <text
                  x={CX}
                  y={CY + 9}
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight="500"
                  fontFamily="system-ui, sans-serif"
                  fill="var(--text-subtle)"
                  fillOpacity="0.5"
                >
                  24/7 loop
                </text>

                {/* ── Phase nodes ── */}
                {LOOP_PHASES.map((phase) => {
                  const { x, y } = polarToXY(CX, CY, RING_R, phase.angle);
                  const isFocused = focusedId === phase.id;
                  const isDimmed = focusedId !== null && !isFocused;
                  const isKeyboardFocused = keyboardFocusId === phase.id;

                  return (
                    <g key={phase.id}>
                      {/* Glow ring on focused */}
                      {isFocused && (
                        <circle
                          cx={x}
                          cy={y}
                          r={NODE_R + 5}
                          fill="none"
                          stroke="var(--brand-400)"
                          strokeOpacity="0.25"
                          strokeWidth="1"
                        />
                      )}
                      {/* Keyboard focus ring — visible focus cue on Tab */}
                      {isKeyboardFocused && (
                        <circle
                          cx={x}
                          cy={y}
                          r={NODE_R + 4}
                          fill="none"
                          stroke="var(--brand-400)"
                          strokeWidth="2"
                        />
                      )}
                      {/* Node button */}
                      <circle
                        cx={x}
                        cy={y}
                        r={NODE_R}
                        fill={isFocused ? 'var(--brand-600)' : 'var(--surface-elevated)'}
                        fillOpacity={isDimmed ? 0.2 : 1}
                        stroke="var(--brand-400)"
                        strokeOpacity={isDimmed ? 0.1 : isFocused ? 0.7 : 0.3}
                        strokeWidth={isFocused ? 1.5 : 1}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleToggle(phase.id)}
                        role="button"
                        tabIndex={0}
                        aria-label={`${phase.label}: ${phase.tagline}`}
                        aria-expanded={isFocused}
                        aria-controls={DETAIL_PANEL_ID}
                        onFocus={() => setKeyboardFocusId(phase.id)}
                        onBlur={() =>
                          setKeyboardFocusId((prev) => (prev === phase.id ? null : prev))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleToggle(phase.id);
                          }
                        }}
                        className="motion-safe:transition-[fill,fill-opacity,stroke-opacity,stroke-width] motion-safe:duration-200 focus-visible:outline-none"
                      />
                      <text
                        x={x}
                        y={y + 4}
                        textAnchor="middle"
                        fontSize="8.5"
                        fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                        fill={isFocused ? 'var(--text-light)' : 'var(--brand-200)'}
                        fillOpacity={isDimmed ? 0.2 : 1}
                        className="pointer-events-none motion-safe:transition-opacity motion-safe:duration-200"
                      >
                        {phase.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Perimeter note */}
              <p className="text-center text-xs text-text-light/35 mt-2 font-medium tracking-wide">
                Runs in your cloud · shared visibility · documented runbooks
              </p>
            </div>
          </div>

          {/* Right: detail panel */}
          <div id={DETAIL_PANEL_ID} className="flex flex-col justify-center min-h-[280px]">
            {focusedPhase ? (
              <div className="bg-glass-bg border border-glass-border rounded-xl p-7 motion-safe:animate-fade-in">
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-300 mb-2">
                  {focusedPhase.label}
                </p>
                <h3 className="text-xl font-bold text-text-light mb-3 leading-snug">
                  {focusedPhase.tagline}
                </h3>
                <p className="text-text-light/75 leading-relaxed text-sm">
                  {focusedPhase.description}
                </p>
                <button
                  onClick={() => setFocusedId(null)}
                  className="mt-5 text-xs text-brand-300 hover:text-brand-200 motion-safe:transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  ← Back to loop
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {LOOP_PHASES.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => handleToggle(phase.id)}
                    className={cn(
                      'w-full text-left rounded-lg px-5 py-3 border motion-safe:transition-all motion-safe:duration-200',
                      'bg-glass-bg border-glass-border',
                      'hover:bg-surface-elevated/60 hover:border-brand-400/20',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50',
                    )}
                  >
                    <span className="text-sm font-bold text-text-light">{phase.label}</span>
                    <span className="text-text-light/50 text-xs ml-2">{phase.tagline}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ─── Mobile: linearized vertical step list (< lg) ─── */}
        <div className="lg:hidden space-y-3">
          {LOOP_PHASES.map((phase, i) => {
            const isFocused = focusedId === phase.id;
            const isDimmed = focusedId !== null && !isFocused;
            return (
              <button
                key={phase.id}
                onClick={() => handleToggle(phase.id)}
                className={cn(
                  'w-full text-left rounded-xl p-5 border motion-safe:transition-all motion-safe:duration-200',
                  isFocused
                    ? 'bg-surface-elevated border-brand-400/40'
                    : 'bg-glass-bg border-glass-border',
                  isDimmed && 'opacity-40',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50',
                )}
                aria-expanded={isFocused}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-600/30 border border-brand-500/40 text-brand-300 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm font-bold text-text-light">{phase.label}</span>
                  {i < LOOP_PHASES.length - 1 && (
                    <span className="ml-auto text-brand-400/40 text-xs">→</span>
                  )}
                  {i === LOOP_PHASES.length - 1 && (
                    <span className="ml-auto text-brand-400/40 text-xs">↺</span>
                  )}
                </div>
                <p className="text-xs text-brand-300 font-medium mb-1 pl-9">{phase.tagline}</p>
                {isFocused && (
                  <p className="text-sm text-text-light/70 leading-relaxed pl-9 mt-2">
                    {phase.description}
                  </p>
                )}
              </button>
            );
          })}

          {/* Perimeter note */}
          <p className="text-center text-xs text-text-light/35 pt-1 font-medium tracking-wide">
            Runs in your cloud · shared visibility · documented runbooks
          </p>
        </div>

        {/* ─── Severity / Response strip (both breakpoints) ─── */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-wider uppercase text-brand-300/70 mb-4">
            Incident Severity &amp; Response Framing
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SEV_ROWS.map((row) => (
              <div
                key={row.level}
                className={cn(
                  'rounded-lg border px-4 py-3',
                  row.accent
                    ? 'bg-surface-elevated border-brand-400/30'
                    : 'bg-glass-bg border-glass-border',
                )}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={cn(
                      'text-xs font-bold px-2 py-0.5 rounded',
                      row.accent
                        ? 'bg-brand-500/20 text-brand-200'
                        : 'bg-brand-500/10 text-brand-300',
                    )}
                  >
                    {row.level}
                  </span>
                </div>
                <p className="text-xs text-text-light/70 font-medium">{row.label}</p>
                <p className="text-xs text-text-light/45 mt-0.5">{row.target}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-text-light/30 mt-3">
            Response targets defined per engagement during onboarding.
          </p>
        </div>

        {/* Instruction note */}
        <p className="text-center text-xs text-text-light/30 mt-6 hidden lg:block">
          Select any phase to explore what happens at that stage.
        </p>
      </Container>
    </Section>
  );
}
