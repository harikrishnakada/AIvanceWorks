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

import { Lightbulb, TrendingUp, Building2, ChevronRight } from 'lucide-react';

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

function StageCard({ stage, index }: { stage: StageData; index: number }) {
  const isMiddle = index === 1;

  return (
    <div
      className={`relative flex flex-col rounded-xl border p-6 transition-all ${
        isMiddle
          ? 'border-brand-500/30 bg-brand-500/[0.06] shadow-brand-panel'
          : 'border-border-dark bg-surface-elevated'
      }`}
    >
      {/* Stage badge */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            isMiddle
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
      <div className="mb-4 flex gap-4 text-xs">
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

      {/* Featured badge */}
      {isMiddle && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-0.5 text-xs font-semibold text-white">
          Most Common
        </div>
      )}
    </div>
  );
}

export function StartupGrowthTimeline() {
  return (
    <div className="w-full">
      {/* Section header */}
      <div className="mb-10 text-center">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-brand-400">
          Your Startup Journey
        </span>
        <h2 className="mb-3 text-3xl font-bold text-text-light sm:text-4xl">
          We grow with you
        </h2>
        <p className="mx-auto max-w-2xl text-base text-text-light/70">
          Your engineering needs change at every stage. Our engagement adapts — from
          a lean sprint team validating your MVP to a full-scale engineering org
          preparing for your in-house transition.
        </p>
      </div>

      {/* Desktop: horizontal 3-card layout with connecting bar */}
      <div className="hidden md:block">
        {/* Connecting progress bar */}
        <div className="relative mx-auto mb-8 flex max-w-4xl items-center justify-between px-12">
          {/* Background line */}
          <div className="absolute left-16 right-16 top-1/2 h-0.5 -translate-y-1/2 bg-brand-500/20" />
          {/* Progress fill */}
          <div className="absolute left-16 top-1/2 h-0.5 w-1/3 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-brand-400" />

          {/* Stage dots */}
          {['Seed', 'Series A', 'Series B+'].map((label, i) => (
            <div key={label} className="relative z-10 flex flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                  i === 0
                    ? 'border-brand-400 bg-brand-500/30'
                    : 'border-brand-500/30 bg-surface-dark'
                }`}
              >
                <span className="text-xs font-bold text-brand-300">{i + 1}</span>
              </div>
              <span className="mt-1.5 text-xs font-medium text-text-muted">{label}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6">
          {stages.map((stage, i) => (
            <StageCard key={stage.label} stage={stage} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack with connecting line */}
      <div className="md:hidden">
        <div className="relative space-y-6 pl-8">
          {/* Vertical connecting line */}
          <div className="absolute bottom-4 left-3 top-4 w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-brand-500/20" />

          {stages.map((stage, i) => (
            <div key={stage.label} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-400 bg-surface-dark">
                <span className="text-[10px] font-bold text-brand-300">{i + 1}</span>
              </div>

              <StageCard stage={stage} index={i} />

              {/* Arrow between cards */}
              {i < stages.length - 1 && (
                <div className="flex justify-center py-2">
                  <ChevronRight className="h-4 w-4 rotate-90 text-brand-400/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export type StartupGrowthTimelineProps = Record<string, never>;
