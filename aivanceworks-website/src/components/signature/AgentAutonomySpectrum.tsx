/**
 * AgentAutonomySpectrum — signature section for the Agentic AI Development service page.
 *
 * Desktop (lg+): Four autonomy levels arranged left-to-right along a gradient
 *   "autonomy" axis — Assist → Recommend → Act with Approval → Bounded Autonomy.
 *   Left means more human control; right means more agent autonomy. Each level
 *   names what the agent does, where the human stays in control, and the guardrail
 *   that makes that level safe. Click any level to focus it (dims the others and
 *   reveals what we implement at that level).
 * Mobile (< lg): The four levels stack as full-width cards in order (Assist at top,
 *   Bounded Autonomy at the bottom). A vertical "more autonomy ↓" rail replaces the
 *   horizontal axis. Tap any card to expand its implementation detail. The
 *   left-control / right-autonomy framing becomes top-control / bottom-autonomy.
 *
 * Interactive: click/tap any level to focus it. Matches the ModelLifecycleLoop /
 *   DataPipelineBlueprint interaction pattern (useState focus, dim siblings).
 *
 * Visualization pattern: Comparison / spectrum (catalog pattern 4) + a gradient axis.
 *   A standard FeatureGrid flattens these into peers — but the entire argument is that
 *   they are an ordered gradient of control you choose along, not a menu of equals. The
 *   left-to-right ordering and the human-control / guardrail pairing at each step is the
 *   message, and a grid of cards cannot carry an axis.
 * Emotional argument: "Autonomy is a dial you control, not a switch you flip. We build
 *   agents that act with exactly the oversight each task warrants — and never with more
 *   autonomy than you have authorized."
 *
 * This signature also doubles as the page's liability boundary: it states plainly that
 *   the human sets the level and the guardrails, the agent never exceeds them, and every
 *   action is logged — capability framing only, no claimed outcomes.
 *
 * Token compliance: all color references use token-backed Tailwind classes or CSS custom
 *   properties (var(--brand-*)). No raw color shades or hex values.
 * Accessibility: interactive buttons have aria-expanded, all SVG icons have
 *   aria-hidden="true", section heading is an h2, prefers-reduced-motion respected via
 *   globals.css transition handling.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface AutonomyLevel {
  id: string;
  number: number;
  name: string;
  tagline: string;
  icon: string;
  agentDoes: string;
  humanRole: string;
  guardrail: string;
  whatWeImplement: string;
}

const LEVELS: AutonomyLevel[] = [
  {
    id: 'assist',
    number: 1,
    name: 'Assist',
    tagline: 'Agent suggests, you decide',
    icon: 'sparkle',
    agentDoes:
      'Gathers context, drafts options, and surfaces what it found — but takes no action on any system itself.',
    humanRole: 'You stay in full control and perform every action yourself.',
    guardrail: 'Read-only. The agent can look and propose, never act.',
    whatWeImplement:
      'A reasoning agent wired to your knowledge and read-only data sources, returning drafts and recommendations into the tool your team already works in. No write access exists yet — so there is nothing the agent can break.',
  },
  {
    id: 'recommend',
    number: 2,
    name: 'Recommend',
    tagline: 'Agent proposes a specific action',
    icon: 'list',
    agentDoes:
      'Reasons over the task and proposes a specific next action, with the rationale and the exact change it would make.',
    humanRole: 'You approve or reject each proposed action before anything runs.',
    guardrail: 'Every action requires an explicit human approval to execute.',
    whatWeImplement:
      'Tool and function definitions the agent can plan against, plus an approval step that shows the precise call and arguments before execution. Nothing reaches a live system until a person clicks approve.',
  },
  {
    id: 'supervised',
    number: 3,
    name: 'Act with Approval',
    tagline: 'Autonomous on the routine, gated on the risky',
    icon: 'gate',
    agentDoes:
      'Executes low-risk steps on its own and runs the workflow end to end — pausing at defined checkpoints for high-impact or irreversible actions.',
    humanRole: 'You approve only the consequential steps; the routine ones run without you.',
    guardrail: 'Policy gates: irreversible or high-value actions stop for approval; everything is logged.',
    whatWeImplement:
      'A human-in-the-loop runtime where each tool is tagged by risk and reversibility. Safe steps execute automatically; flagged steps pause for sign-off. A full action log records what ran, with what inputs, and who approved it.',
  },
  {
    id: 'bounded',
    number: 4,
    name: 'Bounded Autonomy',
    tagline: 'Agent completes the task within your envelope',
    icon: 'shield',
    agentDoes:
      'Completes whole workflows end to end inside a policy envelope you define — allowed tools, spend limits, scopes, and stop conditions.',
    humanRole: 'You set the bounds and monitor; you can pause or intervene at any time.',
    guardrail: 'A hard policy envelope plus a kill switch and full audit trail; anything outside the bounds escalates.',
    whatWeImplement:
      'A bounded-autonomy agent constrained to an explicit allow-list of tools, budgets, and scopes, with loop and step limits, an operator kill switch, and observability on every run. Outside its envelope, it stops and escalates rather than improvising.',
  },
];

function LevelIcon({ type, className }: { type: string; className?: string }) {
  const baseClass = cn('w-7 h-7', className);

  switch (type) {
    case 'sparkle':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" opacity="0.6" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'list':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6h11M9 12h11M9 18h11" />
          <path d="m3 6 1.5 1.5L7 4" />
          <circle cx="4" cy="12" r="1" />
          <circle cx="4" cy="18" r="1" />
        </svg>
      );
    case 'gate':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 21V5a2 2 0 0 1 2-2h8l-2 3 2 3H6" />
          <path d="M16 21V8" />
          <path d="m18.5 13.5 1.5 1.5 3-3.5" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

// Horizontal flow arrow between levels (desktop only)
function FlowArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center w-6 flex-shrink-0 self-start mt-24" aria-hidden="true">
      <svg viewBox="0 0 32 24" className="w-6 h-6 text-brand-400/45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12 H28" strokeDasharray="4 3" />
        <path d="M22 6 L28 12 L22 18" />
      </svg>
    </div>
  );
}

// Vertical connector between levels (mobile only)
function VerticalConnector() {
  return (
    <div className="lg:hidden flex justify-center py-1" aria-hidden="true">
      <svg viewBox="0 0 24 32" className="w-6 h-8 text-brand-400/40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4 V28" strokeDasharray="4 3" />
        <path d="M6 22 L12 28 L18 22" />
      </svg>
    </div>
  );
}

export function AgentAutonomySpectrum() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark">
      <Container>
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            The Autonomy Spectrum
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Autonomy is a dial. You set it.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            An agent that acts is only safe if you decide how far it can go. We build across
            four levels of autonomy — each with the human oversight and guardrails that level
            warrants. You choose the level per task, and you can always pull it back.
          </p>
        </div>

        {/* ─── Desktop: horizontal spectrum (lg+) ─── */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="flex items-start justify-center gap-0">
            {LEVELS.map((level, index) => {
              const isFocused = focusedId === level.id;
              const isDimmed = focusedId !== null && !isFocused;

              return (
                <div key={level.id} className="flex items-start">
                  <button
                    onClick={() => handleToggle(level.id)}
                    aria-expanded={isFocused}
                    className={cn(
                      'relative text-left rounded-xl p-5 transition-all duration-300 border w-52',
                      isFocused
                        ? 'bg-surface-elevated border-brand-400/40 ring-1 ring-brand-400/20'
                        : 'bg-glass-bg border-glass-border',
                      isDimmed && 'opacity-30',
                      !focusedId && 'hover:bg-surface-elevated/60 hover:border-brand-400/20',
                    )}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/20 border border-brand-400/30 text-xs font-bold text-brand-300">
                        {level.number}
                      </span>
                      <span className="text-xs font-semibold tracking-wider uppercase text-brand-300/70">
                        Level {level.number}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-brand-300">
                        <LevelIcon type={level.icon} />
                      </div>
                      <h3 className="text-lg font-bold text-text-light">{level.name}</h3>
                    </div>

                    <p className="text-xs font-medium text-accent-200/80 mb-3">{level.tagline}</p>

                    <p className="text-xs text-text-light/65 leading-relaxed mb-3">
                      {level.agentDoes}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-1.5">
                        <span className="text-xs font-semibold text-brand-300/80 whitespace-nowrap">You:</span>
                        <span className="text-xs text-text-light/70 leading-snug">{level.humanRole}</span>
                      </div>
                      <div className="rounded-md bg-accent-500/10 border border-accent-400/20 px-2 py-1.5">
                        <p className="text-[0.65rem] font-semibold tracking-wide uppercase text-accent-300/80 mb-0.5">
                          Guardrail
                        </p>
                        <p className="text-xs text-text-light/75 leading-snug">{level.guardrail}</p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        isFocused ? 'max-h-72 opacity-100 mt-4' : 'max-h-0 opacity-0',
                      )}
                    >
                      <div className="pt-3 border-t border-brand-400/20">
                        <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          What we implement
                        </p>
                        <p className="text-xs text-text-light/75 leading-relaxed">
                          {level.whatWeImplement}
                        </p>
                      </div>
                    </div>
                  </button>

                  {index < LEVELS.length - 1 && <FlowArrow />}
                </div>
              );
            })}
          </div>

          {/* Autonomy axis */}
          <div className="relative mt-8 mx-auto max-w-5xl" aria-hidden="true">
            <div className="h-1.5 rounded-full bg-gradient-to-r from-brand-500/40 via-brand-400/40 to-accent-400/60" />
            <div className="flex justify-between mt-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-300/70">
                More human control
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-accent-300/70">
                More agent autonomy
              </span>
            </div>
          </div>
        </div>

        {/* ─── Mobile: vertical stack (< lg) ─── */}
        <div className="lg:hidden space-y-0 max-w-lg mx-auto">
          <p className="text-center text-xs font-semibold tracking-wider uppercase text-brand-300/70 mb-3">
            More human control
          </p>
          {LEVELS.map((level, index) => {
            const isFocused = focusedId === level.id;
            const isDimmed = focusedId !== null && !isFocused;

            return (
              <div key={level.id}>
                <button
                  onClick={() => handleToggle(level.id)}
                  aria-expanded={isFocused}
                  className={cn(
                    'w-full text-left rounded-xl p-5 transition-all duration-300 border',
                    isFocused
                      ? 'bg-surface-elevated border-brand-400/40'
                      : 'bg-glass-bg border-glass-border',
                    isDimmed && 'opacity-30',
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/20 border border-brand-400/30 text-xs font-bold text-brand-300 flex-shrink-0">
                      {level.number}
                    </span>
                    <div className="text-brand-300 flex-shrink-0">
                      <LevelIcon type={level.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-light leading-tight">{level.name}</h3>
                      <p className="text-xs text-accent-200/80">{level.tagline}</p>
                    </div>
                  </div>

                  <p className="text-xs text-text-light/65 leading-relaxed mb-2">
                    {level.agentDoes}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start gap-1.5">
                      <span className="text-xs font-semibold text-brand-300/80 whitespace-nowrap">You:</span>
                      <span className="text-xs text-text-light/70 leading-snug">{level.humanRole}</span>
                    </div>
                    <div className="rounded-md bg-accent-500/10 border border-accent-400/20 px-2 py-1.5">
                      <p className="text-[0.65rem] font-semibold tracking-wide uppercase text-accent-300/80 mb-0.5">
                        Guardrail
                      </p>
                      <p className="text-xs text-text-light/75 leading-snug">{level.guardrail}</p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isFocused ? 'max-h-80 opacity-100 mt-3' : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className="pt-3 border-t border-brand-400/20">
                      <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                        What we implement
                      </p>
                      <p className="text-xs text-text-light/75 leading-relaxed">
                        {level.whatWeImplement}
                      </p>
                    </div>
                  </div>
                </button>

                {index < LEVELS.length - 1 && <VerticalConnector />}
              </div>
            );
          })}
          <p className="text-center text-xs font-semibold tracking-wider uppercase text-accent-300/70 mt-3">
            More agent autonomy
          </p>
        </div>

        {/* Interaction hint */}
        <p className="text-center text-xs text-text-light/35 mt-8">
          Click any level to see what we implement to keep it safe.
        </p>
      </Container>
    </Section>
  );
}
