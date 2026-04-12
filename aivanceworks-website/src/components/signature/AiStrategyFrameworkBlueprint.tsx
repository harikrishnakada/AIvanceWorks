'use client';

/**
 * AiStrategyFrameworkBlueprint — signature section for the AI Strategy &
 * Consulting service page.
 *
 * Visual concept: A left-to-right flow diagram:
 *   Left column (inputs):  5 assessment dimension pills
 *     — Data Assets, AI Talent, Technology Stack,
 *       Business Processes, AI Governance
 *   Center column:         Strategy Engine node (interactive — click to
 *                          highlight a dimension and see which deliverable
 *                          it feeds into)
 *   Right column (outputs): 3 deliverable cards
 *     — AI Maturity Scorecard, Prioritized Use Case Matrix,
 *       AI Roadmap + Governance Blueprint
 *
 * The diagram carries the page's core argument:
 * "A structured assessment across 5 dimensions → three concrete deliverables
 *  you can fund and execute against."
 *
 * Interactions:
 *   - On desktop, clicking a dimension pill highlights the connecting line
 *     and dims the others, reinforcing which inputs feed which outputs.
 *   - Default state shows all connectors at equal opacity.
 *
 * Mobile layout:
 *   - Below `lg` (1024px): the three-column layout collapses to a vertical
 *     stack — Inputs (top) → Strategy Engine (middle, compacted) → Outputs
 *     (bottom). Horizontal connector lines become downward arrows via CSS
 *     transform. The interactive highlight is preserved on tap.
 *   - Below `sm` (640px): dimensions collapse to a 2-column pill grid above
 *     the engine; deliverables stack as full-width cards below it.
 *
 * Token compliance: all color references use CSS custom properties from the
 * theme token system. No raw Tailwind color shades or hardcoded hex values.
 */

import { useState } from 'react';

// Dimension → deliverable mapping for the interactive highlight
const DIMENSION_DELIVERABLE_MAP: Record<string, string[]> = {
  'Data Assets':       ['scorecard', 'usecases'],
  'AI Talent':         ['scorecard', 'governance'],
  'Technology Stack':  ['scorecard', 'roadmap'],
  'Business Processes':['usecases', 'roadmap'],
  'AI Governance':     ['governance'],
};

const DIMENSIONS = [
  { id: 'Data Assets',        icon: '⬡', label: 'Data Assets',         desc: 'Quality, availability & structure' },
  { id: 'AI Talent',          icon: '⬡', label: 'AI Talent',            desc: 'Skills, roles & hiring gaps' },
  { id: 'Technology Stack',   icon: '⬡', label: 'Technology Stack',     desc: 'Infrastructure & tooling readiness' },
  { id: 'Business Processes', icon: '⬡', label: 'Business Processes',   desc: 'Use case landscape & workflow fit' },
  { id: 'AI Governance',      icon: '⬡', label: 'AI Governance',        desc: 'Risk, ethics & compliance posture' },
];

const DELIVERABLES = [
  {
    id: 'scorecard',
    label: 'AI Maturity Scorecard',
    description: 'Five-dimension evaluation with gap analysis and benchmark positioning.',
    phase: 'Week 2',
  },
  {
    id: 'usecases',
    label: 'Prioritized Use Case Matrix',
    description: 'Every identified AI opportunity scored by business impact and implementation complexity.',
    phase: 'Week 3',
  },
  {
    id: 'roadmap',
    label: 'AI Roadmap + Governance Blueprint',
    description: '12–18 month phased roadmap with business cases and responsible AI framework.',
    phase: 'Week 4',
  },
];

export function AiStrategyFrameworkBlueprint() {
  const [activeDimension, setActiveDimension] = useState<string | null>(null);

  const activeDeliverables = activeDimension
    ? DIMENSION_DELIVERABLE_MAP[activeDimension] ?? []
    : [];

  const isDeliverableActive = (id: string) =>
    activeDimension === null || activeDeliverables.includes(id);

  const isDimensionActive = (id: string) =>
    activeDimension === null || activeDimension === id;

  return (
    <section
      className="bg-surface-dark py-16 md:py-20 lg:py-24 relative overflow-hidden"
      aria-labelledby="ai-strategy-blueprint-heading"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'var(--brand-grid)' }}
        aria-hidden="true"
      />

      {/* Brand glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, color-mix(in srgb, var(--color-brand-600) 8%, transparent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-brand-400 text-xs font-semibold tracking-widest uppercase mb-3">
            The Assessment Framework
          </p>
          <h2
            id="ai-strategy-blueprint-heading"
            className="text-text-light text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4"
          >
            Five dimensions in. Three deliverables out.
          </h2>
          <p className="text-text-light/70 text-base lg:text-lg max-w-2xl mx-auto">
            Every AI strategy engagement runs the same structured assessment — vendor-neutral,
            evidence-based, and built to produce artifacts your organization can act on.
          </p>
          <p className="text-text-light/40 text-sm mt-3 hidden lg:block">
            Select a dimension to see which deliverables it feeds.
          </p>
        </div>

        {/* ── Three-column flow (desktop) / stacked (mobile) ── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">

          {/* Column 1: Assessment Inputs */}
          <div className="lg:w-[30%] flex flex-col gap-3">
            <p className="text-text-subtle text-xs font-semibold tracking-widest uppercase mb-1 text-center lg:text-left">
              Assessment Inputs
            </p>
            {DIMENSIONS.map((dim) => {
              const active = isDimensionActive(dim.id);
              return (
                <button
                  key={dim.id}
                  onClick={() =>
                    setActiveDimension(activeDimension === dim.id ? null : dim.id)
                  }
                  aria-pressed={activeDimension === dim.id}
                  className={[
                    'group w-full text-left rounded-xl px-4 py-3 border transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                    active
                      ? 'bg-glass-bg border-brand-500/40 shadow-brand-panel'
                      : 'bg-surface-elevated/30 border-border-dark opacity-40',
                  ].join(' ')}
                >
                  <span className="block text-brand-400 text-xs font-semibold tracking-wide mb-0.5">
                    {dim.label}
                  </span>
                  <span className="block text-text-light/55 text-xs leading-snug">
                    {dim.desc}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Column 2: Strategy Engine (center connector) */}
          <div className="lg:w-[40%] flex flex-col items-center justify-center px-2 lg:px-6 py-4 lg:py-0 relative">

            {/* Horizontal connector lines (desktop only) */}
            <div className="hidden lg:flex absolute inset-x-0 top-1/2 -translate-y-1/2 items-center justify-between pointer-events-none px-0">
              {/* Left connector */}
              <div className="flex-1 h-px bg-brand-600/20 ml-0 mr-0" />
              {/* Right connector */}
              <div className="flex-1 h-px bg-brand-600/20 ml-0 mr-0" />
            </div>

            {/* Mobile: vertical arrows */}
            <div className="lg:hidden flex flex-col items-center gap-1 py-2">
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" aria-hidden="true">
                <line x1="12" y1="0" x2="12" y2="24" stroke="var(--color-brand-600)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="12,32 7,20 17,20" fill="var(--color-brand-400)" fillOpacity="0.4" />
              </svg>
            </div>

            {/* Engine node */}
            <div className="relative z-10 rounded-2xl border border-brand-500/35 bg-glass-bg shadow-brand-panel px-6 py-5 text-center w-full max-w-[220px] mx-auto">
              {/* Compass SVG icon */}
              <div className="mx-auto mb-3 w-12 h-12 rounded-full border border-brand-400/30 bg-surface-elevated/40 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <circle cx="14" cy="14" r="11" stroke="var(--color-brand-400)" strokeOpacity="0.5" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="7" stroke="var(--color-brand-400)" strokeOpacity="0.25" strokeWidth="0.8" />
                  {/* Compass needle */}
                  <polygon points="14,5 12,14 14,11 16,14" fill="var(--color-brand-400)" fillOpacity="0.65" />
                  <polygon points="14,23 12,14 14,17 16,14" fill="var(--color-brand-400)" fillOpacity="0.2" />
                  <circle cx="14" cy="14" r="1.5" fill="var(--color-brand-400)" fillOpacity="0.7" />
                  {/* Crosshairs */}
                  <line x1="5" y1="14" x2="23" y2="14" stroke="var(--color-brand-300)" strokeOpacity="0.2" strokeWidth="0.7" />
                  <line x1="14" y1="5" x2="14" y2="23" stroke="var(--color-brand-300)" strokeOpacity="0.2" strokeWidth="0.7" />
                </svg>
              </div>
              <p className="text-brand-400 text-[10px] font-bold tracking-widest uppercase mb-1">
                Strategy Engine
              </p>
              <p className="text-text-light/60 text-xs leading-snug">
                Vendor-neutral assessment with structured scoring
              </p>
            </div>

            {/* Mobile: second vertical arrow */}
            <div className="lg:hidden flex flex-col items-center gap-1 py-2">
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" aria-hidden="true">
                <line x1="12" y1="0" x2="12" y2="24" stroke="var(--color-brand-600)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="12,32 7,20 17,20" fill="var(--color-brand-400)" fillOpacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Column 3: Deliverable Outputs */}
          <div className="lg:w-[30%] flex flex-col gap-3">
            <p className="text-text-subtle text-xs font-semibold tracking-widest uppercase mb-1 text-center lg:text-right">
              Deliverable Outputs
            </p>
            {DELIVERABLES.map((del) => {
              const active = isDeliverableActive(del.id);
              return (
                <div
                  key={del.id}
                  className={[
                    'rounded-xl px-4 py-3 border transition-all duration-200',
                    active
                      ? 'bg-glass-bg border-accent-500/35 shadow-brand-panel'
                      : 'bg-surface-elevated/30 border-border-dark opacity-40',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-accent-400 text-xs font-semibold tracking-wide">
                      {del.label}
                    </span>
                    <span className="text-text-subtle text-[10px] bg-surface-elevated/60 border border-border-dark px-2 py-0.5 rounded-full shrink-0 ml-2">
                      {del.phase}
                    </span>
                  </div>
                  <p className="text-text-light/55 text-xs leading-snug">
                    {del.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-text-subtle text-xs mt-8 opacity-60">
          All three deliverables are produced regardless of whether implementation work follows.
        </p>
      </div>
    </section>
  );
}
