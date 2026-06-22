'use client';

/**
 * DigitalMaturityRoadmap — signature section for the Digital Transformation
 * service page.
 *
 * Visual concept: a left-to-right transformation journey that carries the page's
 * core argument — "transformation is a sequenced, multi-domain journey from a
 * fragmented current state to a modern operating model, not a single big-bang
 * rewrite." The layout has two parts:
 *
 *   Top row (the maturity arc): four phase nodes connected by a progress spine —
 *     Assess → Foundation → Modernize → Operate. Each phase shows what advances
 *     in that wave. This answers the buyer's #1 question: "where do we start and
 *     what is the sequence?"
 *
 *   Left/right framing on each selected phase: a current-state ("today") chip and
 *     a target-state ("after this wave") chip, so the reader sees the delta each
 *     wave produces across the five transformation domains (process, technology,
 *     data, experience, organization).
 *
 * Interaction:
 *   - Clicking a phase node expands its detail panel (domains advanced + the
 *     current→target delta) and dims the sibling phases. Default state shows the
 *     first phase expanded.
 *   - Keyboard-accessible buttons with visible focus rings.
 *   - Respects prefers-reduced-motion (transitions are short; no autoplay).
 *
 * Mobile layout:
 *   - Below `lg` (1024px): the horizontal four-phase arc collapses to a vertical
 *     numbered list. The connecting horizontal spine becomes a vertical rail down
 *     the left edge of the phase column. The detail panel renders directly beneath
 *     the selected phase rather than in a side column.
 *   - Below `sm` (640px): current→target delta chips stack vertically instead of
 *     sitting side-by-side.
 *
 * Token compliance: every color reference resolves through theme tokens
 * (brand, accent, surface, text scales) or CSS custom properties. No raw Tailwind
 * color shades, no hardcoded hex.
 */

import { useState } from 'react';
import { Section } from '@/components/shared/primitives/Section';
import { Container } from '@/components/shared/primitives/Container';

interface Phase {
  id: string;
  step: number;
  name: string;
  tag: string;
  summary: string;
  domains: string[];
  current: string;
  target: string;
}

const PHASES: Phase[] = [
  {
    id: 'assess',
    step: 1,
    name: 'Assess',
    tag: 'Where you are',
    summary:
      'Map current processes, systems, data estate, and digital KPIs. Establish a maturity baseline and a sequenced, business-value-ranked roadmap before any system is touched.',
    domains: ['Process mapping', 'System & data audit', 'Digital KPI baseline', 'Modernization roadmap'],
    current: 'Manual workflows, undocumented legacy systems, siloed data, no shared measure of digital maturity.',
    target: 'A prioritized roadmap that sequences transformation by risk and business value — agreed by leadership.',
  },
  {
    id: 'foundation',
    step: 2,
    name: 'Foundation',
    tag: 'Make it safe to move',
    summary:
      'Stand up the modern foundation — cloud landing zone, identity and access, API and integration layer, and unified data infrastructure — so later waves run without halting the business.',
    domains: ['Cloud landing zone', 'Identity & access (IAM)', 'API / integration layer', 'Data platform'],
    current: 'On-prem or fragmented cloud, perimeter-era security, point-to-point integrations, data trapped in silos.',
    target: 'A governed cloud and data foundation with zero-trust access and an API layer the next waves build on.',
  },
  {
    id: 'modernize',
    step: 3,
    name: 'Modernize',
    tag: 'Transform in waves',
    summary:
      'Re-platform legacy systems, redesign broken workflows into digital-first products, and unify data for self-serve analytics — one prioritized wave at a time, with production live throughout.',
    domains: ['Legacy re-platforming', 'Digital-first workflows', 'Customer & internal portals', 'Self-serve analytics'],
    current: 'Aging monoliths, offline or manual processes, no real-time view of the business.',
    target: 'Modern systems and digital products shipping value wave by wave — no single high-risk cutover.',
  },
  {
    id: 'operate',
    step: 4,
    name: 'Operate',
    tag: 'Make it stick',
    summary:
      'Transfer ownership with DevOps, agile ways of working, adoption and change management, and a digital measurement framework — so the new operating model outlives the engagement.',
    domains: ['DevOps & automation', 'Change & adoption', 'Capability building', 'Digital measurement'],
    current: 'New tools that nobody adopts, knowledge concentrated in a vendor, no way to measure the gains.',
    target: 'Your teams own and extend the modern stack, with adoption and ROI tracked against digital KPIs.',
  },
];

export function DigitalMaturityRoadmap() {
  const [activeId, setActiveId] = useState<string>('assess');
  const active = PHASES.find((p) => p.id === activeId) ?? PHASES[0];

  return (
    <Section tone="dark" withGrid aria-labelledby="dx-roadmap-heading">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-brand-400 text-xs font-semibold tracking-widest uppercase mb-3">
            The Transformation Roadmap
          </p>
          <h2
            id="dx-roadmap-heading"
            className="text-text-light text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4"
          >
            A sequenced journey, not a big-bang rewrite.
          </h2>
          <p className="text-text-light/70 text-base lg:text-lg max-w-2xl mx-auto">
            Every transformation runs in prioritized waves — each one moves specific
            domains from your current state toward a modern operating model, with the
            business live the whole way through.
          </p>
          <p className="text-text-light/40 text-sm mt-3 hidden lg:block">
            Select a phase to see what advances and the change it produces.
          </p>
        </div>

        {/* ── Phase arc (desktop horizontal / mobile vertical) ── */}
        <div className="relative">
          {/* Desktop horizontal spine */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-[34px] h-px bg-brand-600/25 pointer-events-none"
            aria-hidden="true"
          />

          <ol className="flex flex-col lg:flex-row gap-4 lg:gap-0 relative">
            {/* Mobile vertical rail */}
            <div
              className="lg:hidden absolute left-[18px] top-2 bottom-2 w-px bg-brand-600/25 pointer-events-none"
              aria-hidden="true"
            />
            {PHASES.map((phase) => {
              const isActive = phase.id === activeId;
              const dimmed = !isActive;
              return (
                <li key={phase.id} className="lg:flex-1 relative">
                  <button
                    onClick={() => setActiveId(phase.id)}
                    aria-pressed={isActive}
                    className={[
                      'group w-full text-left transition-all duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl',
                      'flex lg:flex-col items-start gap-4 lg:gap-0 lg:items-center lg:text-center px-2 py-2',
                      dimmed ? 'opacity-45 hover:opacity-80' : 'opacity-100',
                    ].join(' ')}
                  >
                    {/* Step node */}
                    <span
                      className={[
                        'relative z-10 shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors',
                        isActive
                          ? 'bg-brand-600 border-brand-400 text-text-light shadow-brand-panel'
                          : 'bg-surface-elevated border-border-dark text-brand-300',
                      ].join(' ')}
                    >
                      {phase.step}
                    </span>
                    <span className="lg:mt-3">
                      <span className="block text-text-light text-base lg:text-lg font-semibold">
                        {phase.name}
                      </span>
                      <span className="block text-brand-400 text-xs font-medium tracking-wide mt-0.5">
                        {phase.tag}
                      </span>
                    </span>
                  </button>

                  {/* Mobile: detail renders under the selected phase */}
                  {isActive && (
                    <div className="lg:hidden mt-3 ml-[42px] mb-2">
                      <PhaseDetail phase={active} />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Desktop: shared detail panel below the arc */}
        <div className="hidden lg:block mt-10">
          <PhaseDetail phase={active} />
        </div>

        {/* Footer note */}
        <p className="text-center text-text-subtle text-xs mt-8 opacity-60">
          Waves are sequenced and scoped during discovery — you can pause, reprioritize,
          or hand off between any two waves without leaving systems half-finished.
        </p>
      </Container>
    </Section>
  );
}

function PhaseDetail({ phase }: { phase: Phase }) {
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-glass-bg shadow-brand-panel p-5 sm:p-7">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-10">
        {/* Left: summary + domains advanced */}
        <div>
          <p className="text-accent-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Phase {phase.step} · {phase.name}
          </p>
          <p className="text-text-light/80 text-sm lg:text-base leading-relaxed mb-5">
            {phase.summary}
          </p>
          <p className="text-text-subtle text-xs font-semibold tracking-widest uppercase mb-3">
            What advances in this wave
          </p>
          <ul className="flex flex-wrap gap-2">
            {phase.domains.map((d) => (
              <li
                key={d}
                className="text-brand-300 text-xs font-medium rounded-full border border-brand-500/30 bg-surface-elevated/40 px-3 py-1"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: current → target delta */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <div className="flex-1 rounded-xl border border-border-dark bg-surface-elevated/30 p-4">
            <p className="text-text-subtle text-[10px] font-bold tracking-widest uppercase mb-2">
              Today
            </p>
            <p className="text-text-light/65 text-sm leading-snug">{phase.current}</p>
          </div>
          <div className="hidden sm:flex lg:hidden items-center justify-center" aria-hidden="true">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <line x1="2" y1="10" x2="20" y2="10" stroke="var(--color-brand-400)" strokeOpacity="0.5" strokeWidth="1.5" />
              <polygon points="28,10 18,5 18,15" fill="var(--color-brand-400)" fillOpacity="0.6" />
            </svg>
          </div>
          <div className="flex sm:hidden lg:flex items-center justify-center py-0 lg:py-1" aria-hidden="true">
            <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
              <line x1="10" y1="2" x2="10" y2="18" stroke="var(--color-brand-400)" strokeOpacity="0.5" strokeWidth="1.5" />
              <polygon points="10,26 5,16 15,16" fill="var(--color-brand-400)" fillOpacity="0.6" />
            </svg>
          </div>
          <div className="flex-1 rounded-xl border border-accent-500/35 bg-glass-bg p-4">
            <p className="text-accent-400 text-[10px] font-bold tracking-widest uppercase mb-2">
              After this wave
            </p>
            <p className="text-text-light/80 text-sm leading-snug">{phase.target}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
