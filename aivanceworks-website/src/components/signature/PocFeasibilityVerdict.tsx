/**
 * PocFeasibilityVerdict — signature section for the Proof of Concept (PoC) Development page.
 *
 * Visualization pattern: Process / flow + decision (catalog patterns 3 & 4) — a narrowing
 *   feasibility funnel that resolves into a three-way verdict. The funnel reads top-down:
 *   the riskiest assumption → a minimal experiment → measured against agreed criteria →
 *   a decision gate → one of three honest outcomes (Greenlight / Pivot / Stop).
 *
 * Emotional argument: "You leave with a clear, evidence-backed decision — even when the
 *   honest answer is don't build this." The presence of an equally-weighted Stop outcome
 *   IS the argument: a PoC that always says "build it" is worthless.
 *
 * Why this earns its place over a standard grid: the narrowing funnel shows commitment
 *   shrinking as certainty grows, and the three branching verdicts show that "no" is a
 *   first-class result — a relationship a FeatureGrid cannot express.
 *
 * Token discipline: verdicts are differentiated by brand/accent emphasis and iconography,
 *   NOT by raw semantic red/green. Greenlight = brand (emphasized), Pivot = accent,
 *   Stop = subtle/elevated. Flipping data-theme re-skins cleanly. No raw shades, no hex.
 *
 * Desktop (lg+): the funnel bands and gate render as a centered narrowing stack; the three
 *   verdict cards sit in a 3-column row below the gate. Selecting a verdict expands its
 *   detail panel inline and dims the other two.
 *
 * Mobile (< lg): identical vertical flow — bands stack full-width (already vertical), the
 *   verdict cards collapse from a 3-column row to a single column. Selecting a card expands
 *   its detail below it. No horizontal scrolling.
 *
 * Accessibility: each verdict is a real <button> with aria-expanded / aria-controls pointing
 *   at its detail region; funnel decoration is aria-hidden. Focus-visible ring on every
 *   control. Animation gated behind motion-safe:.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface FunnelStage {
  label: string;
  detail: string;
  /** Tailwind max-width utility controlling the narrowing band width */
  width: string;
}

const FUNNEL_STAGES: FunnelStage[] = [
  {
    label: 'The riskiest assumption',
    detail: 'The one thing that, if it fails, sinks the project.',
    width: 'max-w-2xl',
  },
  {
    label: 'A minimal experiment',
    detail: 'Only enough is built to test that one thing — nothing more.',
    width: 'max-w-xl',
  },
  {
    label: 'Measured against success criteria',
    detail: 'Pass/fail thresholds agreed up front — settled by data, not opinion.',
    width: 'max-w-md',
  },
];

type VerdictAccent = 'brand' | 'accent' | 'subtle';

interface Verdict {
  id: string;
  label: string;
  tagline: string;
  description: string;
  receive: string;
  accent: VerdictAccent;
}

const VERDICTS: Verdict[] = [
  {
    id: 'go',
    label: 'Greenlight',
    tagline: 'The assumption held.',
    description:
      'The experiment cleared the success criteria. The approach is sound and the path to a full build is clear.',
    receive:
      'You receive a validated approach, a mapped tech stack, and a full-build effort estimate — so development starts with the hard questions already answered.',
    accent: 'brand',
  },
  {
    id: 'pivot',
    label: 'Pivot',
    tagline: 'Promising, but not as designed.',
    description:
      'The core idea has merit, but the evidence points to a different approach, technology, or scope than you assumed.',
    receive:
      'You receive a documented alternative direction and the data behind it — so you can re-test a sharper hypothesis before over-committing.',
    accent: 'accent',
  },
  {
    id: 'stop',
    label: 'Stop',
    tagline: 'The evidence says no.',
    description:
      'The assumption did not hold, and no reasonable adjustment changes that. Building it would be expensive and unlikely to work.',
    receive:
      'You receive a clear, evidence-backed recommendation not to build — and the months of budget and effort you just protected by finding out now.',
    accent: 'subtle',
  },
];

const ACCENT_STYLES: Record<
  VerdictAccent,
  { card: string; active: string; badge: string; label: string }
> = {
  brand: {
    card: 'bg-glass-bg border-glass-border hover:border-brand-400/40',
    active: 'bg-surface-elevated border-brand-400/60',
    badge: 'bg-brand-500/20 text-brand-200',
    label: 'text-brand-200',
  },
  accent: {
    card: 'bg-glass-bg border-glass-border hover:border-accent-400/40',
    active: 'bg-surface-elevated border-accent-400/50',
    badge: 'bg-accent-500/20 text-accent-200',
    label: 'text-accent-300',
  },
  subtle: {
    card: 'bg-glass-bg border-glass-border hover:border-border-hover',
    active: 'bg-surface-elevated border-border-hover',
    badge: 'bg-surface-elevated text-text-subtle',
    label: 'text-text-subtle',
  },
};

export function PocFeasibilityVerdict() {
  const [openId, setOpenId] = useState<string | null>('go');

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <Section tone="dark" withGrid>
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            How we reach a verdict
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
            One question in. A clear verdict out.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg leading-relaxed">
            A proof of concept narrows a fuzzy bet down to a single measured answer — and
            the answer is allowed to be no. That honesty is the whole point.
          </p>
        </div>

        {/* ── Narrowing funnel ── */}
        <div className="flex flex-col items-center gap-0 mb-2" aria-hidden="false">
          {FUNNEL_STAGES.map((stage, i) => (
            <div key={stage.label} className="w-full flex flex-col items-center">
              <div
                className={cn(
                  'w-full rounded-xl border border-glass-border bg-glass-bg px-6 py-4 text-center',
                  stage.width,
                )}
              >
                <p className="text-sm font-bold text-text-light">{stage.label}</p>
                <p className="text-xs text-text-light/60 mt-1 leading-relaxed">
                  {stage.detail}
                </p>
              </div>
              {i < FUNNEL_STAGES.length - 1 && (
                <span
                  className="text-brand-400/50 text-lg leading-none my-1.5"
                  aria-hidden="true"
                >
                  ↓
                </span>
              )}
            </div>
          ))}

          {/* Gate */}
          <span className="text-brand-400/50 text-lg leading-none my-1.5" aria-hidden="true">
            ↓
          </span>
          <div className="rounded-full border border-brand-400/40 bg-surface-elevated px-5 py-2">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-200">
              Decision gate
            </span>
          </div>
        </div>

        {/* ── Three verdicts ── */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {VERDICTS.map((v) => {
            const styles = ACCENT_STYLES[v.accent];
            const isOpen = openId === v.id;
            const isDimmed = openId !== null && !isOpen;
            const panelId = `poc-verdict-${v.id}`;
            return (
              <div key={v.id} className="flex flex-col">
                <button
                  onClick={() => toggle(v.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={cn(
                    'text-left rounded-xl border p-5 motion-safe:transition-all motion-safe:duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50',
                    isOpen ? styles.active : styles.card,
                    isDimmed && 'opacity-50',
                  )}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={cn(
                        'text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide',
                        styles.badge,
                      )}
                    >
                      {v.label}
                    </span>
                    <span className="text-text-light/40 text-xs">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  <p className={cn('text-base font-bold leading-snug', styles.label)}>
                    {v.tagline}
                  </p>
                  <p className="text-sm text-text-light/70 leading-relaxed mt-2">
                    {v.description}
                  </p>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    className="mt-3 rounded-xl border border-glass-border bg-glass-bg p-5 motion-safe:animate-fade-in"
                  >
                    <p className="text-xs font-semibold tracking-widest uppercase text-brand-300 mb-2">
                      What you receive
                    </p>
                    <p className="text-sm text-text-light/75 leading-relaxed">
                      {v.receive}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Perimeter note */}
        <p className="text-center text-xs text-text-light/35 mt-8 font-medium tracking-wide">
          Fixed scope · success criteria agreed up front · the verdict is yours to act on
        </p>
        <p className="text-center text-xs text-text-light/30 mt-4 hidden lg:block">
          Select any verdict to see what you walk away with.
        </p>
      </Container>
    </Section>
  );
}
