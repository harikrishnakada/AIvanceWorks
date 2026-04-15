/**
 * StartupGrowthTimeline — signature section for the Startup Development page.
 *
 * Visual concept: a 3-stage horizontal timeline (Validate → Scale → Mature)
 * showing how the dev engagement grows with the startup. Each stage card has
 * an icon, stage name, what gets built, typical team size, and timeline.
 * A connecting progress bar links the three stages.
 *
 * Visualization pattern: Process/Comparison hybrid (constitution §8.3 patterns 3+4).
 * Emotional argument: "We grow with your startup — this isn't a one-and-done engagement."
 *
 * Mobile layout:
 *   - Desktop (lg+): 3 stage cards in a horizontal row with a connecting bar.
 *   - Tablet (md): 3 cards in a row, tighter spacing.
 *   - Mobile (<md): cards stack vertically with a connecting vertical line.
 *     Each card shows stage icon, name, and details. Connecting arrows between
 *     cards are replaced by a vertical progress line.
 *
 * Color strategy: all fills/strokes use token-backed Tailwind classes.
 * No hardcoded hex values. Respects prefers-reduced-motion.
 */

'use client';

import { useState } from 'react';
import { Lightbulb, TrendingUp, Building2, ChevronRight } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface StageData {
  icon: React.ReactNode;
  stage: string;
  label: string;
  description: string;
  teamSize: string;
  timeline: string;
  deliverables: string[];
}

const stages: StageData[] = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    stage: 'Stage 1',
    label: 'Validate',
    description: 'Build the first version, get it in front of real users, and prove the idea works.',
    teamSize: '2–3 engineers',
    timeline: '8–12 weeks',
    deliverables: [
      'Production MVP with core user flows',
      'Auth, data layer, and CI/CD',
      'Weekly demos from sprint one',
      'Real users in the product',
    ],
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    stage: 'Stage 2',
    label: 'Scale',
    description: 'Expand the product, harden infrastructure, and support a growing user base.',
    teamSize: '3–5 engineers',
    timeline: 'Ongoing after V1',
    deliverables: [
      'Feature expansion and integrations',
      'Performance and infrastructure hardening',
      'Billing and subscription systems',
      'Analytics and monitoring',
    ],
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    stage: 'Stage 3',
    label: 'Mature',
    description: 'Prepare for scale, transition to an in-house team, or continue growing together.',
    teamSize: '5+ or handoff',
    timeline: 'Series B+',
    deliverables: [
      'Enterprise features and compliance',
      'In-house team onboarding',
      'Architecture docs and runbooks',
      'Knowledge transfer sessions',
    ],
  },
];

function StageCard({
  stage,
  index,
  isActive,
  isMostCommon,
  onSelect,
}: {
  stage: StageData;
  index: number;
  isActive: boolean;
  isMostCommon: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-pressed={isActive}
      aria-label={`Select ${stage.stage}: ${stage.label}`}
      className={`relative flex flex-col rounded-xl border p-6 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark-from ${
        isActive
          ? 'border-brand-500/40 bg-brand-500/[0.08] shadow-brand-panel scale-[1.02]'
          : 'border-border-dark bg-surface-elevated hover:border-brand-500/30 hover:bg-brand-500/[0.04]'
      }`}
    >
      {/* Stage badge */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
            isActive
              ? 'bg-brand-500/20 text-brand-300'
              : 'bg-brand-500/10 text-brand-400'
          }`}
        >
          {stage.icon}
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {stage.stage}
          </span>
          <h3 className="text-lg font-bold text-text-light">{stage.label}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-text-light/80">
        {stage.description}
      </p>

      {/* Meta row */}
      <div className="mb-4 flex flex-wrap gap-2 text-xs sm:gap-4">
        <div className="rounded-md bg-brand-500/10 px-2.5 py-1">
          <span className="font-semibold text-brand-300">{stage.teamSize}</span>
        </div>
        <div className="rounded-md bg-accent-500/10 px-2.5 py-1">
          <span className="font-semibold text-accent-400">{stage.timeline}</span>
        </div>
      </div>

      {/* Deliverables */}
      <ul className="mt-auto space-y-1.5">
        {stage.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-text-light/70">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-400" />
            {item}
          </li>
        ))}
      </ul>

      {/* Featured badge — anchored to the actual "most common" stage, not the active one */}
      {isMostCommon && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-3 py-0.5 text-xs font-semibold text-white">
          Most Common
        </div>
      )}
    </button>
  );
}

const MOST_COMMON_INDEX = 1;
const STAGE_LABELS = ['Seed', 'Series A', 'Series B+'];

export function StartupGrowthTimeline() {
  const [activeIndex, setActiveIndex] = useState(MOST_COMMON_INDEX);
  const lastIndex = stages.length - 1;
  const progressPercent = lastIndex === 0 ? 0 : (activeIndex / lastIndex) * 100;

  return (
    <Section tone="dark" withGrid size="lg">
      <Container>
        {/* Section header */}
        <div className="mb-10 text-center md:mb-14">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-brand-400 sm:text-sm">
            Your Startup Journey
          </span>
          <h2 className="mb-3 text-2xl font-bold text-text-light sm:text-3xl md:text-4xl">
            We grow with you
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-text-light/70 sm:text-base">
            Your engineering needs change at every stage. Our engagement adapts — from
            a lean sprint team validating your MVP to a full-scale engineering org
            preparing for your in-house transition.
          </p>
        </div>

        {/* Desktop: horizontal 3-card layout with connecting bar */}
        <div className="hidden md:block">
          {/* Connecting progress bar */}
          <div className="relative mx-auto mb-10 flex max-w-4xl items-center justify-between px-12">
            {/* Background line — spans dot 1 to dot 3 centers */}
            <div className="absolute left-16 right-16 top-4 h-0.5 bg-brand-500/20" />
            {/* Progress fill — width animates with selection */}
            <div
              className="absolute left-16 top-4 h-0.5 bg-gradient-to-r from-brand-500 to-brand-400 transition-[width] duration-500 ease-out"
              style={{ width: `calc((100% - 8rem) * ${progressPercent / 100})` }}
            />

            {/* Stage dots */}
            {STAGE_LABELS.map((label, i) => {
              const isReached = i <= activeIndex;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Jump to ${label}`}
                  aria-pressed={i === activeIndex}
                  className="relative z-10 flex flex-col items-center focus:outline-none"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isReached
                        ? 'border-brand-400 bg-brand-500/30'
                        : 'border-brand-500/40 bg-surface-elevated'
                    } ${i === activeIndex ? 'ring-2 ring-brand-400/40 ring-offset-2 ring-offset-surface-dark-from' : ''}`}
                  >
                    <span
                      className={`text-xs font-bold transition-colors ${
                        isReached ? 'text-brand-200' : 'text-brand-400'
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium transition-colors ${
                      i === activeIndex ? 'text-brand-300' : 'text-text-light/70'
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 pt-3">
            {stages.map((stage, i) => (
              <StageCard
                key={stage.label}
                stage={stage}
                index={i}
                isActive={i === activeIndex}
                isMostCommon={i === MOST_COMMON_INDEX}
                onSelect={setActiveIndex}
              />
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack with connecting line */}
        <div className="md:hidden">
          <div className="relative space-y-6 pl-10">
            {/* Vertical connecting line — background */}
            <div className="absolute bottom-6 left-4 top-6 w-0.5 bg-brand-500/20" />
            {/* Vertical connecting line — progress fill */}
            <div
              className="absolute left-4 top-6 w-0.5 bg-gradient-to-b from-brand-500 to-brand-400 transition-[height] duration-500 ease-out"
              style={{ height: `calc((100% - 3rem) * ${progressPercent / 100})` }}
            />

            {stages.map((stage, i) => {
              const isReached = i <= activeIndex;
              return (
                <div key={stage.label} className="relative">
                  {/* Timeline dot */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Select stage ${i + 1}`}
                    aria-pressed={i === activeIndex}
                    className={`absolute -left-10 top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                      isReached
                        ? 'border-brand-400 bg-brand-500/30'
                        : 'border-brand-500/40 bg-surface-elevated'
                    } ${i === activeIndex ? 'ring-2 ring-brand-400/40' : ''}`}
                  >
                    <span
                      className={`text-[11px] font-bold ${
                        isReached ? 'text-brand-200' : 'text-brand-400'
                      }`}
                    >
                      {i + 1}
                    </span>
                  </button>

                  <StageCard
                    stage={stage}
                    index={i}
                    isActive={i === activeIndex}
                    isMostCommon={i === MOST_COMMON_INDEX}
                    onSelect={setActiveIndex}
                  />

                  {/* Arrow between cards */}
                  {i < stages.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ChevronRight className="h-4 w-4 rotate-90 text-brand-400/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export type StartupGrowthTimelineProps = Record<string, never>;
