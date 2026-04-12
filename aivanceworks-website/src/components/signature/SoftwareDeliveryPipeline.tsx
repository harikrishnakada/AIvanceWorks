/**
 * SoftwareDeliveryPipeline — signature section for Custom Software Development page.
 *
 * Desktop: 6 pipeline phases in a horizontal row connected by flow arrows. Each phase
 *   is a card that expands on click to reveal activities and deliverables.
 * Mobile (< lg): phases stack vertically as full-width cards. Flow arrows become
 *   vertical connectors between cards. Phase numbers provide ordering context.
 *
 * Interactive: click any phase to focus it (dims others, expands detail panel below).
 *   Matches SaasArchitectureBlueprint and MvpDualTrackRoadmap interaction pattern.
 *
 * Visualization pattern: Process/flow (catalog pattern 3).
 * Emotional argument: "This isn't a black box — here's exactly how your software
 *   gets built, phase by phase, with deliverables you can hold."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface PipelinePhase {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  activities: string[];
  deliverables: string[];
  accent?: boolean;
}

const PHASES: PipelinePhase[] = [
  {
    id: 'requirements',
    number: 1,
    title: 'Requirements & Scoping',
    subtitle: 'Define what gets built and why',
    activities: [
      'Stakeholder interviews and requirements gathering',
      'User journey mapping and workflow analysis',
      'Scope definition with prioritized backlog',
      'Risk assessment and constraint identification',
    ],
    deliverables: [
      'Scoped backlog with acceptance criteria',
      'Technical risk register',
      'Project timeline and milestone plan',
    ],
  },
  {
    id: 'architecture',
    number: 2,
    title: 'Architecture & Design',
    subtitle: 'Structure the system before writing code',
    activities: [
      'Technology stack selection with documented rationale',
      'System architecture design (API contracts, data models, integrations)',
      'Infrastructure design (cloud, CI/CD, environments)',
      'Security architecture (auth, encryption, access control)',
    ],
    deliverables: [
      'Architecture decision records (ADRs)',
      'API contract documentation',
      'Infrastructure as Code templates',
    ],
    accent: true,
  },
  {
    id: 'development',
    number: 3,
    title: 'Sprint Development',
    subtitle: 'Build in weekly increments with demos',
    activities: [
      'Feature development in weekly sprints',
      'Code reviews on every pull request',
      'Automated tests written alongside features',
      'Weekly demo on a live URL — no slides',
    ],
    deliverables: [
      'Working software every sprint',
      'Test suite growing with the codebase',
      'Sprint reports with velocity and scope tracking',
    ],
  },
  {
    id: 'quality',
    number: 4,
    title: 'Quality Engineering',
    subtitle: 'Test at every layer, not just at the end',
    activities: [
      'Unit, integration, and end-to-end testing',
      'Performance benchmarking under realistic load',
      'Security scanning (OWASP, dependency audit)',
      'Accessibility validation (WCAG 2.1 AA)',
    ],
    deliverables: [
      'Automated test suite in CI pipeline',
      'Performance benchmark baseline',
      'Security scan report',
    ],
    accent: true,
  },
  {
    id: 'deployment',
    number: 5,
    title: 'Deployment & DevOps',
    subtitle: 'Ship with confidence, roll back without panic',
    activities: [
      'CI/CD pipeline with automated quality gates',
      'Zero-downtime deployment strategy (blue-green or rolling)',
      'Environment parity (dev, staging, production)',
      'Production monitoring and alerting setup',
    ],
    deliverables: [
      'Production-deployed application',
      'CI/CD pipeline with automated gates',
      'Monitoring dashboards and alert rules',
    ],
  },
  {
    id: 'handoff',
    number: 6,
    title: 'Handoff & Support',
    subtitle: 'Your team takes over with full confidence',
    activities: [
      'Architecture documentation and runbooks',
      'Paired onboarding with your engineering team',
      'Knowledge transfer sessions (2–4 weeks)',
      'Post-launch support window',
    ],
    deliverables: [
      'Complete codebase with documentation',
      'Deployment runbook and incident playbook',
      'Architecture decision records',
    ],
    accent: true,
  },
];

export const SoftwareDeliveryPipeline = () => {
  const [focusedPhase, setFocusedPhase] = useState<string | null>(null);

  const handlePhaseClick = (id: string) => {
    setFocusedPhase((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" id="signature">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Delivery Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            No black boxes. Here is how your software gets built.
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-base lg:text-lg">
            Six phases from requirements to handoff — each with defined
            deliverables, weekly visibility, and no gaps where you wait weeks
            wondering what is happening.
          </p>
          <p className="text-text-light/40 text-sm mt-3">
            Click any phase to see what happens inside it
          </p>
        </div>

        {/* Pipeline phases */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop: horizontal grid */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-3">
            {PHASES.map((phase, idx) => {
              const isFocused = focusedPhase === phase.id;
              const isDimmed = focusedPhase !== null && !isFocused;

              return (
                <div key={phase.id} className="relative">
                  {/* Flow arrow between phases */}
                  {idx > 0 && (
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-0.5 z-0">
                      <svg width="6" height="10" viewBox="0 0 6 10" className="text-brand-400/25">
                        <path d="M0,0 L6,5 L0,10" fill="currentColor" />
                      </svg>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => handlePhaseClick(phase.id)}
                    aria-expanded={isFocused}
                    aria-label={`Phase ${phase.number}: ${phase.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
                    className={cn(
                      'w-full text-left rounded-xl border p-4 transition-all duration-300 relative z-10 h-full',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                      phase.accent
                        ? 'border-accent-500/20 bg-accent-500/[0.06]'
                        : 'border-brand-400/15 bg-brand-500/[0.06]',
                      isFocused && 'ring-1 shadow-glow',
                      isFocused && phase.accent && 'ring-accent-400/30',
                      isFocused && !phase.accent && 'ring-brand-400/30',
                      isDimmed && 'opacity-35',
                    )}
                  >
                    {/* Phase number */}
                    <span
                      className={cn(
                        'inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold mb-3',
                        phase.accent
                          ? 'bg-accent-500/20 text-accent-400'
                          : 'bg-brand-500/20 text-brand-400',
                      )}
                    >
                      {phase.number}
                    </span>

                    <h3 className="text-sm font-semibold text-text-light leading-tight mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-text-light/45 leading-relaxed">
                      {phase.subtitle}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical stack */}
          <div className="lg:hidden space-y-3">
            {PHASES.map((phase, idx) => {
              const isFocused = focusedPhase === phase.id;
              const isDimmed = focusedPhase !== null && !isFocused;

              return (
                <div key={phase.id}>
                  {/* Flow indicator between phases */}
                  {idx > 0 && (
                    <div className="flex justify-center -mt-3 -mb-3 relative z-0">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-px h-3 bg-brand-400/20" />
                        <svg width="8" height="6" viewBox="0 0 8 6" className="text-brand-400/30">
                          <path d="M0,0 L4,6 L8,0" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => handlePhaseClick(phase.id)}
                    aria-expanded={isFocused}
                    aria-label={`Phase ${phase.number}: ${phase.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
                    className={cn(
                      'w-full text-left rounded-xl border transition-all duration-300 relative z-10',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                      phase.accent
                        ? 'border-accent-500/20 bg-accent-500/[0.06]'
                        : 'border-brand-400/15 bg-brand-500/[0.06]',
                      isFocused && 'ring-1 shadow-glow',
                      isFocused && phase.accent && 'ring-accent-400/30',
                      isFocused && !phase.accent && 'ring-brand-400/30',
                      isDimmed && 'opacity-35',
                    )}
                  >
                    <div className="px-5 py-4 flex items-start gap-4">
                      <span
                        className={cn(
                          'inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold shrink-0',
                          phase.accent
                            ? 'bg-accent-500/20 text-accent-400'
                            : 'bg-brand-500/20 text-brand-400',
                        )}
                      >
                        {phase.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-text-light mb-1">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-text-light/45">
                          {phase.subtitle}
                        </p>
                      </div>
                      {/* Expand indicator */}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className={cn(
                          'mt-1 shrink-0 transition-transform duration-200 text-text-light/30',
                          isFocused && 'rotate-180',
                        )}
                      >
                        <path d="M4,6 L8,10 L12,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Expanded detail — mobile */}
                    {isFocused && (
                      <div className="px-5 pb-5 border-t border-white/[0.06] pt-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className={cn(
                              'text-xs font-semibold uppercase tracking-wider mb-2',
                              phase.accent ? 'text-accent-400' : 'text-brand-400',
                            )}>
                              Activities
                            </p>
                            <ul className="space-y-1.5">
                              {phase.activities.map((activity) => (
                                <li key={activity} className="text-xs text-text-light/60 leading-relaxed flex gap-2">
                                  <span className={cn(
                                    'mt-1.5 w-1 h-1 rounded-full shrink-0',
                                    phase.accent ? 'bg-accent-400/50' : 'bg-brand-400/50',
                                  )} />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className={cn(
                              'text-xs font-semibold uppercase tracking-wider mb-2',
                              phase.accent ? 'text-accent-400' : 'text-brand-400',
                            )}>
                              Deliverables
                            </p>
                            <ul className="space-y-1.5">
                              {phase.deliverables.map((deliverable) => (
                                <li key={deliverable} className="text-xs text-text-light/60 leading-relaxed flex gap-2">
                                  <span className={cn(
                                    'mt-1.5 w-1 h-1 rounded-full shrink-0',
                                    phase.accent ? 'bg-accent-400/50' : 'bg-brand-400/50',
                                  )} />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Desktop expanded detail panel — renders below the grid */}
          {focusedPhase && (
            <div className="hidden lg:block mt-6">
              {PHASES.filter((p) => p.id === focusedPhase).map((phase) => (
                <div
                  key={phase.id}
                  className={cn(
                    'rounded-xl border p-6 transition-all duration-300',
                    phase.accent
                      ? 'border-accent-500/20 bg-accent-500/[0.04]'
                      : 'border-brand-400/15 bg-brand-500/[0.04]',
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={cn(
                        'inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-bold',
                        phase.accent
                          ? 'bg-accent-500/20 text-accent-400'
                          : 'bg-brand-500/20 text-brand-400',
                      )}
                    >
                      {phase.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-text-light">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-text-light/50">{phase.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className={cn(
                        'text-xs font-semibold uppercase tracking-wider mb-3',
                        phase.accent ? 'text-accent-400' : 'text-brand-400',
                      )}>
                        What happens in this phase
                      </p>
                      <ul className="space-y-2">
                        {phase.activities.map((activity) => (
                          <li key={activity} className="text-sm text-text-light/60 leading-relaxed flex gap-2.5">
                            <span className={cn(
                              'mt-2 w-1.5 h-1.5 rounded-full shrink-0',
                              phase.accent ? 'bg-accent-400/50' : 'bg-brand-400/50',
                            )} />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className={cn(
                        'text-xs font-semibold uppercase tracking-wider mb-3',
                        phase.accent ? 'text-accent-400' : 'text-brand-400',
                      )}>
                        What you receive
                      </p>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable) => (
                          <li key={deliverable} className="text-sm text-text-light/60 leading-relaxed flex gap-2.5">
                            <span className={cn(
                              'mt-2 w-1.5 h-1.5 rounded-full shrink-0',
                              phase.accent ? 'bg-accent-400/50' : 'bg-brand-400/50',
                            )} />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Side annotations — desktop only */}
          <div className="hidden lg:block absolute -left-16 top-1/3 -translate-y-1/2">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300/40"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Your Visibility
            </p>
          </div>
          <div className="hidden lg:block absolute -right-16 top-1/3 -translate-y-1/2">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-300/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              Our Engineering
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
