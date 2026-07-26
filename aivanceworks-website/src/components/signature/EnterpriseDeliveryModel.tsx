/**
 * EnterpriseDeliveryModel — signature section for the Enterprise Software
 * Development page.
 *
 * The page's emotional argument: "You get the software you needed — not just
 * what you asked for." This is carried by our delivery model, the #1 trust
 * differentiator for custom enterprise builds. Three delivery disciplines flow
 * left-to-right into a single owned outcome — a FLOW relationship (catalog
 * pattern 3), which is why it earns a signature slot rather than a FeatureGrid.
 *
 * Desktop: three stage cards on a horizontal flow, connected by arrows in the
 *   gutters, feeding a distinct accent-toned outcome card on the right. Clicking
 *   a stage focuses it (dims the others) and reveals what it means in practice
 *   in a detail panel below the row — cards stay uniform height.
 * Mobile (< lg): the flow becomes vertical; each stage is a full-width card with
 *   a connector between cards and inline expansion, with the outcome card last.
 *
 * Interactive: click any stage to focus it. `'use client'` + useState. Matches
 *   the SoftwareDeliveryPipeline interaction pattern used site-wide.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

interface DeliveryStage {
  icon: string;
  label: string;
  title: string;
  summary: string;
  points: string[];
}

const STAGES: DeliveryStage[] = [
  {
    icon: 'FileText',
    label: 'Stage 1',
    title: 'Spec-First Engineering',
    summary:
      'Every engagement starts with a written REQUIREMENTS.md — what we are building, why, and how success is measured.',
    points: [
      'A written specification before any code',
      'Success criteria agreed up front',
      'No ambiguous briefs, no default scope creep',
    ],
  },
  {
    icon: 'Boxes',
    label: 'Stage 2',
    title: 'Product Engineering, Not Body Shopping',
    summary:
      'We own the architecture, the technical decisions, and the outcome — product thinking, not ticket execution against the clock.',
    points: [
      'We own architecture and technical direction',
      'Decisions made for your business, not billable hours',
      'Accountable for the result, not just the tasks',
    ],
  },
  {
    icon: 'Sparkles',
    label: 'Stage 3',
    title: 'AI-Augmented Delivery',
    summary:
      'Our engineers use AI tooling across the lifecycle — spec writing, code generation, testing, and documentation — as a workflow, not a slogan.',
    points: [
      'AI woven through the build, not bolted on',
      'Faster timelines at comparable price points',
      'More consistent quality and documentation',
    ],
  },
];

const OUTCOME = {
  icon: 'KeyRound',
  title: 'Software you can own',
  summary:
    'Built to your spec, owned by your team, and engineered to outlast the engagement.',
};

/** Chevron used as a flow connector in the gutters between cards. */
const FlowArrow = ({ accent = false }: { accent?: boolean }) => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    aria-hidden="true"
    className={accent ? 'text-accent-400/60' : 'text-brand-400/30'}
  >
    <path d="M0,0 L7,6 L0,12" fill="currentColor" />
  </svg>
);

export const EnterpriseDeliveryModel = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (idx: number) => setActive((prev) => (prev === idx ? null : idx));

  const OutcomeIcon = getLucideIcon(OUTCOME.icon);

  return (
    <Section tone="dark" size="md" withGrid>
      <Container>
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            How we work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
            You get the software you needed — not just what you asked for.
          </h2>
          <p className="text-base md:text-lg text-text-subtle leading-relaxed">
            The most common complaint about custom software is &ldquo;they built exactly what we
            asked for, not what we actually needed.&rdquo; Our delivery model is built to close that gap.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          {/* ---------- Desktop: horizontal flow ---------- */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr] gap-4 items-stretch">
            {STAGES.map((stage, idx) => {
              const Icon = getLucideIcon(stage.icon);
              const isActive = active === idx;
              const isDimmed = active !== null && !isActive;
              return (
                <div key={idx} className="relative h-full">
                  {idx > 0 && (
                    <div className="absolute -left-[11px] top-[38px] z-0">
                      <FlowArrow />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isActive}
                    aria-label={`${stage.title} — ${stage.label}`}
                    className={cn(
                      'group relative z-10 flex h-full w-full flex-col rounded-xl border p-5 text-left transition-all duration-300',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                      isActive
                        ? 'border-brand-400/40 bg-brand-500/10 ring-1 ring-brand-400/30 shadow-glow'
                        : 'border-brand-400/15 bg-brand-500/[0.06] hover:border-brand-400/35',
                      isDimmed && 'opacity-40',
                    )}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-300/70">
                        {stage.label}
                      </span>
                    </div>
                    <h3 className="mb-2 text-base font-bold leading-tight text-text-light text-balance">
                      {stage.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-subtle">
                      {stage.summary}
                    </p>
                    <span
                      className={cn(
                        'mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold transition-colors',
                        isActive ? 'text-brand-300' : 'text-brand-300/50 group-hover:text-brand-300/80',
                      )}
                    >
                      {isActive ? 'Hide detail' : 'In practice'}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className={cn('transition-transform duration-200', isActive && 'rotate-180')}
                      >
                        <path d="M4,6 L8,10 L12,6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Outcome — the flow's destination */}
            <div className="relative h-full">
              <div className="absolute -left-[11px] top-[38px] z-0">
                <FlowArrow accent />
              </div>
              <div className="flex h-full flex-col justify-center rounded-xl border border-accent-400/40 bg-accent-500/10 p-5">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/20 text-accent-300">
                  <OutcomeIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-base font-bold leading-tight text-text-light text-balance">
                  {OUTCOME.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-subtle">
                  {OUTCOME.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: detail panel below the row */}
          {active !== null && (
            <div className="mt-4 hidden rounded-xl border border-brand-400/15 bg-brand-500/[0.04] p-6 lg:block">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-400">
                {STAGES[active].title} — in practice
              </p>
              <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-3">
                {STAGES[active].points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-text-subtle">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ---------- Mobile: vertical flow ---------- */}
          <div className="space-y-3 lg:hidden">
            {STAGES.map((stage, idx) => {
              const Icon = getLucideIcon(stage.icon);
              const isActive = active === idx;
              return (
                <div key={idx}>
                  {idx > 0 && (
                    <div className="relative z-0 -mb-3 -mt-3 flex justify-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="h-3 w-px bg-brand-400/20" />
                        <svg width="8" height="6" viewBox="0 0 8 6" aria-hidden="true" className="text-brand-400/30">
                          <path d="M0,0 L4,6 L8,0" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isActive}
                    aria-label={`${stage.title} — ${stage.label}`}
                    className={cn(
                      'relative z-10 w-full rounded-xl border text-left transition-all duration-300',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                      isActive
                        ? 'border-brand-400/40 bg-brand-500/10'
                        : 'border-brand-400/15 bg-brand-500/[0.06]',
                    )}
                  >
                    <div className="flex items-start gap-4 px-5 py-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-300/70">
                          {stage.label}
                        </div>
                        <h3 className="text-base font-bold leading-tight text-text-light">
                          {stage.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-subtle">
                          {stage.summary}
                        </p>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className={cn('mt-1 shrink-0 text-text-subtle transition-transform duration-200', isActive && 'rotate-180')}
                      >
                        <path d="M4,6 L8,10 L12,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {isActive && (
                      <div className="border-t border-white/[0.06] px-5 pb-5 pt-4">
                        <ul className="space-y-2">
                          {stage.points.map((point) => (
                            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-text-subtle">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400/60" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}

            {/* Connector into outcome */}
            <div className="relative z-0 -mb-3 -mt-3 flex justify-center">
              <div className="flex flex-col items-center gap-0.5">
                <div className="h-3 w-px bg-accent-400/25" />
                <svg width="8" height="6" viewBox="0 0 8 6" aria-hidden="true" className="text-accent-400/40">
                  <path d="M0,0 L4,6 L8,0" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Outcome — mobile */}
            <div className="rounded-xl border border-accent-400/40 bg-accent-500/10 px-5 py-4">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/20 text-accent-300">
                  <OutcomeIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold leading-tight text-text-light">
                    {OUTCOME.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-subtle">
                    {OUTCOME.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-text-subtle opacity-60">
          Click any stage to see what it means in practice
        </p>
      </Container>
    </Section>
  );
};
