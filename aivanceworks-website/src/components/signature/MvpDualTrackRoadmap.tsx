/**
 * MvpDualTrackRoadmap — signature section for MVP Development page.
 *
 * Desktop: 5 phases across, dual tracks stacked vertically per phase,
 *   connected by a glowing timeline line.
 * Mobile: phases collapse vertically; each phase is one card with
 *   both tracks stacked inside.
 *
 * Interactive: click any phase to focus it (dims others).
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface RoadmapPhase {
  weekLabel: string;
  phaseTitle: string;
  engineeringWork: string[];
  demoLabel: string;
  demoName: string;
  demoDescription: string;
  isLaunch?: boolean;
}

const PHASES: RoadmapPhase[] = [
  {
    weekLabel: 'Week 1',
    phaseTitle: 'Kickoff',
    engineeringWork: [
      'Scope lock & success criteria',
      'CI/CD + infra baseline',
      'Sprint 0 walkthrough',
    ],
    demoLabel: 'Demo 1',
    demoName: 'Working shell deployed',
    demoDescription: 'Live URL, auth stub, deploy pipeline',
  },
  {
    weekLabel: 'Weeks 2–4',
    phaseTitle: 'Core Build',
    engineeringWork: [
      'Auth + user model',
      'Primary data flows',
      'Happy-path UI',
    ],
    demoLabel: 'Demos 2–4',
    demoName: 'End-to-end happy path',
    demoDescription: 'A user can sign up & complete the primary job',
  },
  {
    weekLabel: 'Weeks 5–8',
    phaseTitle: 'Real Users',
    engineeringWork: [
      'Closed beta cohort',
      'Feedback loop & issue triage',
      'Weekly iteration cycles',
    ],
    demoLabel: 'Demos 5–8',
    demoName: 'Real usage data',
    demoDescription: 'Metrics dashboard with actual cohort behaviour',
  },
  {
    weekLabel: 'Weeks 9–11',
    phaseTitle: 'Harden',
    engineeringWork: [
      'Performance + observability',
      'Security review',
      'Billing + onboarding',
    ],
    demoLabel: 'Demos 9–11',
    demoName: 'Prod-ready walkthrough',
    demoDescription: 'Runbook, SLOs, security & billing live',
  },
  {
    weekLabel: 'Week 12',
    phaseTitle: 'V1 Launch',
    engineeringWork: [
      'Public deploy',
      'Handover & training',
      'Post-launch metrics setup',
    ],
    demoLabel: 'Launch',
    demoName: 'Paying customers',
    demoDescription: 'V1 live, support playbook, metrics tracking',
    isLaunch: true,
  },
];

export const MvpDualTrackRoadmap = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <Section tone="dark" size="md" withGrid>
      <Container>
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            A roadmap that shows both tracks
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
            12 weeks. 12 demos. Real users by week 5.
          </h2>
          <p className="text-base md:text-lg text-text-subtle leading-relaxed">
            Top track is engineering&apos;s view. Bottom track is your view — working software,
            demos, real users — every phase.
          </p>
        </div>

        <div className="hidden md:flex items-center justify-between text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
          <span className="text-brand-400">↑ Engineering track</span>
          <span className="text-accent-400">↓ Your view (demos &amp; deliverables)</span>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[4%] right-[4%] top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-brand-500/30 via-brand-500 to-accent-500 rounded-full"
          />

          <div className="grid gap-5 md:gap-4 grid-cols-1 md:grid-cols-5 relative">
            {PHASES.map((phase, idx) => {
              const isActive = activePhase === idx;
              const isDimmed = activePhase !== null && !isActive;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhase(isActive ? null : idx)}
                  aria-expanded={isActive}
                  aria-label={`${phase.phaseTitle} — ${phase.weekLabel}`}
                  className={cn(
                    'flex flex-col text-left transition-all duration-300',
                    isActive && 'scale-[1.03] z-10',
                    isDimmed && 'opacity-50',
                    !isActive && !isDimmed && 'hover:scale-[1.01]',
                  )}
                >
                  {/* Engineering track card */}
                  <div
                    className={cn(
                      'border border-b-0 rounded-t-xl p-4 md:p-5 transition-all duration-300',
                      isActive
                        ? 'border-brand-400/50 bg-brand-500/10'
                        : 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]',
                    )}
                  >
                    <div className="inline-block px-2 py-0.5 rounded-full bg-brand-500/25 text-brand-300 text-xs font-bold uppercase tracking-wide mb-2">
                      {phase.weekLabel}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-text-light mb-2 leading-tight">
                      {phase.phaseTitle}
                    </h3>
                    <ul className="space-y-1">
                      {phase.engineeringWork.map((work, workIdx) => (
                        <li
                          key={workIdx}
                          className="text-xs md:text-sm text-text-subtle leading-snug pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-brand-400 before:font-bold"
                        >
                          {work}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className="h-6 flex items-center justify-center relative"
                    aria-hidden="true"
                  >
                    <div
                      className={cn(
                        'w-4 h-4 rounded-full border-4 border-surface-dark transition-all duration-300',
                        phase.isLaunch ? 'bg-accent-400 shadow-glow' : 'bg-brand-500',
                        isActive && 'scale-150',
                      )}
                      style={{
                        boxShadow: isActive
                          ? phase.isLaunch
                            ? '0 0 0 6px rgba(99,102,241,0.5), 0 0 24px rgba(99,102,241,1)'
                            : '0 0 0 6px rgba(59,130,246,0.5), 0 0 24px rgba(59,130,246,1)'
                          : phase.isLaunch
                            ? '0 0 0 4px rgba(99,102,241,0.35), 0 0 16px rgba(99,102,241,0.8)'
                            : '0 0 0 3px rgba(59,130,246,0.2)',
                      }}
                    />
                  </div>

                  {/* Demo / deliverables card */}
                  <div
                    className={cn(
                      'border border-t-0 rounded-b-xl p-4 md:p-5 transition-all duration-300',
                      isActive
                        ? 'border-accent-400/50 bg-accent-500/10'
                        : 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]',
                    )}
                  >
                    <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent-400 mb-1">
                      <span aria-hidden="true">▶</span> {phase.demoLabel}
                    </div>
                    <div className="text-sm md:text-base font-bold text-text-light mb-1 leading-tight">
                      {phase.demoName}
                    </div>
                    <div className="text-xs md:text-sm text-text-subtle leading-snug">
                      {phase.demoDescription}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-center text-xs text-text-subtle mt-6 opacity-60">
          Click any phase to focus
        </p>
      </Container>
    </Section>
  );
};
