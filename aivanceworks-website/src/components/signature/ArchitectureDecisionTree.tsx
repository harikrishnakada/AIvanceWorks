/**
 * ArchitectureDecisionTree — signature section for Architecture Advisory page.
 *
 * Desktop (lg+): Three option columns side by side, each showing tradeoff
 *   indicators (favorable / neutral / unfavorable). Click any option to focus
 *   it — others dim, verdict expands. The recommended option has a highlighted
 *   border and "Recommended" badge. Below: the ADR summary card showing
 *   context → decision → rationale.
 * Mobile (< lg): Option columns stack as full-width cards. Tap to focus.
 *   ADR summary card sits below the options as a full-width card.
 *
 * Interactive: click any option card to focus it (dims others, shows verdict).
 *   Matches CloudReadinessMatrix focus pattern.
 *
 * Visualization pattern: Data viz / comparison matrix (catalog pattern 1).
 * Emotional argument: "We don't just give opinions — we document every decision
 *   with context, options evaluated, tradeoffs weighed, and consequences recorded."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

type TradeoffScore = 'Favorable' | 'Neutral' | 'Unfavorable';

interface Tradeoff {
  dimension: string;
  score: TradeoffScore;
}

interface ArchOption {
  id: string;
  name: string;
  tradeoffs: Tradeoff[];
  verdict: string;
  recommended: boolean;
}

interface SampleADR {
  question: string;
  context: string;
  constraints: { label: string; detail: string }[];
  options: ArchOption[];
  decision: string;
  rationale: string;
}

const SAMPLE_ADR: SampleADR = {
  question: 'Should we adopt event-driven architecture?',
  context:
    'Growing monolith hitting scaling limits. Team of 12 engineers, mostly experienced with request-response patterns. Financial transaction subsystem requires strong consistency.',
  constraints: [
    { label: 'Team Experience', detail: 'Request-response background' },
    { label: 'Timeline', detail: '6-month migration window' },
    { label: 'Consistency', detail: 'Strong consistency for financials' },
  ],
  options: [
    {
      id: 'full-es',
      name: 'Full Event Sourcing',
      tradeoffs: [
        { dimension: 'Team Fit', score: 'Unfavorable' },
        { dimension: 'Scalability', score: 'Favorable' },
        { dimension: 'Data Consistency', score: 'Unfavorable' },
        { dimension: 'Migration Risk', score: 'Unfavorable' },
      ],
      verdict:
        'Maximum scalability but steep learning curve and eventual-consistency challenges conflict with financial transaction requirements.',
      recommended: false,
    },
    {
      id: 'cqrs-bus',
      name: 'CQRS + Event Bus',
      tradeoffs: [
        { dimension: 'Team Fit', score: 'Neutral' },
        { dimension: 'Scalability', score: 'Favorable' },
        { dimension: 'Data Consistency', score: 'Favorable' },
        { dimension: 'Migration Risk', score: 'Neutral' },
      ],
      verdict:
        'Balances scalability with team capability. Synchronous writes for financial transactions, async events for everything else. Phased adoption over 3 months reduces risk.',
      recommended: true,
    },
    {
      id: 'enhanced-rr',
      name: 'Enhanced Request-Response',
      tradeoffs: [
        { dimension: 'Team Fit', score: 'Favorable' },
        { dimension: 'Scalability', score: 'Neutral' },
        { dimension: 'Data Consistency', score: 'Favorable' },
        { dimension: 'Migration Risk', score: 'Favorable' },
      ],
      verdict:
        'Lowest risk but limited scalability improvement. Delays the architectural reckoning — revisit in 12 months.',
      recommended: false,
    },
  ],
  decision: 'CQRS + Event Bus',
  rationale:
    'Adopt CQRS with a message bus for inter-service communication. Maintain synchronous writes for financial transactions. Migrate domain boundaries incrementally over 3 months. Re-evaluate full event sourcing at the 6-month mark when team has async experience.',
};

const SCORE_STYLES: Record<TradeoffScore, { dot: string; label: string }> = {
  Favorable: { dot: 'bg-brand-400', label: 'text-brand-300' },
  Neutral: { dot: 'bg-accent-300', label: 'text-accent-200' },
  Unfavorable: { dot: 'bg-text-muted', label: 'text-text-muted' },
};

const SCORE_LIGHT_STYLES: Record<TradeoffScore, { dot: string; label: string }> = {
  Favorable: { dot: 'bg-brand-500', label: 'text-brand-700' },
  Neutral: { dot: 'bg-accent-400', label: 'text-accent-700' },
  Unfavorable: { dot: 'bg-text-muted', label: 'text-text-muted' },
};

function TradeoffIndicator({
  tradeoff,
  variant = 'dark',
}: {
  tradeoff: Tradeoff;
  variant?: 'dark' | 'light';
}) {
  const styles = variant === 'dark' ? SCORE_STYLES[tradeoff.score] : SCORE_LIGHT_STYLES[tradeoff.score];
  return (
    <div className="flex items-center gap-2">
      <span className={cn('w-2 h-2 rounded-full shrink-0', styles.dot)} />
      <span className={cn('text-xs', styles.label)}>
        {tradeoff.dimension}
      </span>
    </div>
  );
}

export function ArchitectureDecisionTree() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            Sample ADR
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Every Decision Documented With Evidence
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            Architecture Decision Records trace every recommendation from your
            constraints through evaluated options to a documented decision with
            tradeoffs.
          </p>
        </div>

        {/* Context bar */}
        <div className="rounded-xl bg-glass-bg border border-glass-border p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
            <div className="shrink-0">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-300">
                Question
              </span>
              <p className="text-sm font-semibold text-text-light mt-1">
                {SAMPLE_ADR.question}
              </p>
            </div>
            <div className="hidden sm:block w-px bg-border-dark self-stretch" />
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-300">
                Context
              </span>
              <p className="text-xs text-text-light/70 mt-1 leading-relaxed">
                {SAMPLE_ADR.context}
              </p>
            </div>
          </div>
          {/* Constraint chips */}
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border-dark">
            <span className="text-xs text-text-light/50 mr-1 self-center">Constraints:</span>
            {SAMPLE_ADR.constraints.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-elevated text-xs text-text-light/80 border border-border-dark"
              >
                <span className="font-medium">{c.label}</span>
                <span className="text-text-light/50">·</span>
                <span className="text-text-light/60">{c.detail}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── Option cards ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {SAMPLE_ADR.options.map((opt) => {
            const isFocused = focusedId === opt.id;
            const isDimmed = focusedId !== null && !isFocused;

            return (
              <button
                key={opt.id}
                onClick={() => handleToggle(opt.id)}
                className={cn(
                  'text-left rounded-xl p-5 transition-all duration-300 border relative',
                  opt.recommended
                    ? 'border-brand-400/40 bg-surface-elevated'
                    : 'border-glass-border bg-glass-bg',
                  isFocused && 'ring-1 ring-brand-400/50',
                  isDimmed && 'opacity-35',
                  !focusedId && 'hover:bg-surface-elevated/60',
                )}
                aria-expanded={isFocused}
              >
                {/* Recommended badge */}
                {opt.recommended && (
                  <span className="absolute -top-2.5 left-4 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-500 text-white">
                    Recommended
                  </span>
                )}

                {/* Option name */}
                <h3 className="text-sm font-bold text-text-light mb-4 mt-1">
                  {opt.name}
                </h3>

                {/* Tradeoff indicators */}
                <div className="space-y-2.5">
                  {opt.tradeoffs.map((t) => (
                    <TradeoffIndicator key={t.dimension} tradeoff={t} />
                  ))}
                </div>

                {/* Expanded verdict */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isFocused ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0',
                  )}
                >
                  <div className="pt-3 border-t border-border-dark">
                    <p className="text-xs text-text-light/70 leading-relaxed">
                      {opt.verdict}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ─── ADR Decision card ─── */}
        <div className="rounded-xl bg-surface-elevated border border-brand-400/20 p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold tracking-wider uppercase text-brand-300">
              ADR Decision
            </span>
            <span className="h-px flex-1 bg-border-dark" />
          </div>
          <p className="text-lg font-bold text-text-light mb-2">
            {SAMPLE_ADR.decision}
          </p>
          <p className="text-sm text-text-light/70 leading-relaxed max-w-3xl">
            {SAMPLE_ADR.rationale}
          </p>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-text-light/40 mt-8">
          Sample Architecture Decision Record — your actual ADRs will reflect your
          system, constraints, and team context.
        </p>
      </Container>
    </Section>
  );
}
