/**
 * WebAppBuildPipeline — signature section for Web App Development page.
 *
 * Desktop: 5 horizontal pipeline stages in a row, connected by quality-gate
 *   markers. Each stage is clickable to reveal engineering activities.
 *   A feedback loop indicator connects Monitor back to Scope.
 * Mobile (< lg): stages stack vertically as full-width cards with quality
 *   gate markers between them. Feedback loop becomes a return arrow on
 *   the left side.
 *
 * Interactive: click any stage to focus it (dims others, expands detail).
 *   Matches SaasArchitectureBlueprint phase-focus pattern.
 *
 * Visualization pattern: Process / flow (catalog pattern 3).
 * Emotional argument: "Every line of code goes through five engineering
 *   gates before production. That's why our web apps work in the real
 *   world, not just in demos."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface PipelineStage {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  activities: { name: string; detail: string }[];
  accent?: boolean;
}

const STAGES: PipelineStage[] = [
  {
    id: 'scope',
    title: 'Scope',
    subtitle: 'Requirements, architecture, environment',
    icon: 'S',
    activities: [
      { name: 'Requirements Workshop', detail: 'Stakeholder alignment on features, user flows, and acceptance criteria' },
      { name: 'Architecture Design', detail: 'Stack selection, data model, API contracts, and infrastructure blueprint' },
      { name: 'Environment Setup', detail: 'CI/CD, staging, production infrastructure — live before the first feature' },
    ],
  },
  {
    id: 'build',
    title: 'Build',
    subtitle: 'Components, APIs, data models',
    icon: 'B',
    activities: [
      { name: 'Frontend Components', detail: 'Typed design system with accessible, responsive components built for reuse' },
      { name: 'API & Business Logic', detail: 'Type-safe endpoints, domain services, validation, and error handling' },
      { name: 'Data Layer', detail: 'Schema design, automated migrations, query optimization, and caching' },
      { name: 'Authentication', detail: 'OAuth, SSO, RBAC — built as an architectural layer, not bolted on' },
    ],
    accent: true,
  },
  {
    id: 'test',
    title: 'Test',
    subtitle: 'Automated checks at every level',
    icon: 'T',
    activities: [
      { name: 'Unit Tests', detail: 'Business logic and component tests written alongside every feature' },
      { name: 'Integration Tests', detail: 'API contract tests, database integration, and service boundary validation' },
      { name: 'End-to-End Tests', detail: 'Full user-flow testing with Playwright across browsers and viewports' },
      { name: 'Security Scanning', detail: 'Dependency audit, OWASP checks, and secrets detection in the CI pipeline' },
    ],
  },
  {
    id: 'ship',
    title: 'Ship',
    subtitle: 'Staging validation, zero-downtime deploy',
    icon: 'D',
    activities: [
      { name: 'Staging Validation', detail: 'Every release runs in a production-mirror environment before going live' },
      { name: 'Zero-Downtime Deploy', detail: 'Blue-green or rolling deployment strategy with automatic rollback' },
      { name: 'Database Migrations', detail: 'Schema changes applied safely with rollback scripts and data verification' },
    ],
    accent: true,
  },
  {
    id: 'monitor',
    title: 'Monitor',
    subtitle: 'Errors, performance, user analytics',
    icon: 'M',
    activities: [
      { name: 'Error Tracking', detail: 'Real-time error capture with stack traces, user context, and alert routing' },
      { name: 'Performance Monitoring', detail: 'Core Web Vitals, API latency, and database query performance tracked continuously' },
      { name: 'Structured Logging', detail: 'Queryable logs with request correlation, user context, and audit trails' },
      { name: 'Feedback Loop', detail: 'Monitoring insights feed back into the next sprint — fix before users report' },
    ],
  },
];

export const WebAppBuildPipeline = () => {
  const [focusedStage, setFocusedStage] = useState<string | null>(null);

  const handleStageClick = (id: string) => {
    setFocusedStage((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" id="signature">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Build Pipeline
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Five gates between your code and production
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-base lg:text-lg">
            Every feature goes through a repeatable engineering pipeline — scoped,
            built, tested, shipped, and monitored. Nothing reaches production
            that has not been verified at every stage.
          </p>
          <p className="text-text-light/40 text-sm mt-3">
            Click any stage to see what happens inside
          </p>
        </div>

        {/* Pipeline stages */}
        <div className="relative max-w-3xl mx-auto">
          {/* Desktop: horizontal flow indicator */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-brand-400/10 via-brand-400/20 to-brand-400/10 z-0" />

          {/* Stage cards */}
          <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-3">
            {STAGES.map((stage, idx) => {
              const isFocused = focusedStage === stage.id;
              const isDimmed = focusedStage !== null && !isFocused;

              return (
                <div key={stage.id} className="relative z-10">
                  {/* Mobile: quality gate marker between stages */}
                  {idx > 0 && (
                    <div className="flex justify-center -mt-1.5 -mb-1.5 lg:hidden relative z-0">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-px h-2 bg-brand-400/20" />
                        <div className={cn(
                          'w-5 h-5 rotate-45 rounded-sm border flex items-center justify-center',
                          'bg-brand-500/10 border-brand-400/25',
                        )}>
                          <svg width="8" height="8" viewBox="0 0 8 8" className="text-brand-400/60 -rotate-45">
                            <path d="M1.5,4 L3.5,6 L6.5,2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="w-px h-2 bg-brand-400/20" />
                      </div>
                    </div>
                  )}

                  {/* Stage card */}
                  <button
                    type="button"
                    onClick={() => handleStageClick(stage.id)}
                    aria-expanded={isFocused}
                    aria-label={`${stage.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
                    className={cn(
                      'w-full text-left rounded-xl border transition-all duration-300',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                      stage.accent
                        ? 'border-accent-500/20 bg-accent-500/[0.06]'
                        : 'border-brand-400/15 bg-brand-500/[0.06]',
                      isFocused && 'ring-1 ring-brand-400/30 shadow-glow lg:col-span-5 lg:z-20',
                      isFocused && stage.accent && 'ring-accent-400/30',
                      isDimmed && 'opacity-40',
                    )}
                  >
                    {/* Stage header */}
                    <div className="px-4 py-3 lg:px-3 lg:py-4">
                      <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
                        {/* Stage number badge */}
                        <span
                          className={cn(
                            'inline-flex items-center justify-center w-8 h-8 lg:w-7 lg:h-7 rounded-lg text-sm lg:text-xs font-bold shrink-0',
                            stage.accent
                              ? 'bg-accent-500/20 text-accent-400'
                              : 'bg-brand-500/20 text-brand-400',
                          )}
                        >
                          {idx + 1}
                        </span>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base lg:text-sm font-semibold text-text-light">
                            {stage.title}
                          </h3>
                          <p className="text-sm lg:text-xs text-text-light/50 mt-0.5">
                            {stage.subtitle}
                          </p>
                        </div>

                        {/* Expand indicator (mobile) */}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          className={cn(
                            'shrink-0 transition-transform duration-200 text-text-light/30 lg:hidden',
                            isFocused && 'rotate-180',
                          )}
                        >
                          <path d="M4,6 L8,10 L12,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded detail */}
                    {isFocused && (
                      <div className="px-4 pb-4 lg:px-3 lg:pb-3 border-t border-white/[0.06] pt-3">
                        <div className="space-y-2.5">
                          {stage.activities.map((activity) => (
                            <div
                              key={activity.name}
                              className={cn(
                                'rounded-lg px-3 py-2.5',
                                stage.accent
                                  ? 'bg-accent-500/[0.06]'
                                  : 'bg-brand-500/[0.06]',
                              )}
                            >
                              <p className={cn(
                                'text-sm font-medium mb-0.5',
                                stage.accent ? 'text-accent-300' : 'text-brand-300',
                              )}>
                                {activity.name}
                              </p>
                              <p className="text-xs text-text-light/50 leading-relaxed">
                                {activity.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Feedback loop indicator */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-brand-400/20" />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-400/15 bg-brand-500/[0.04]">
              <svg width="14" height="14" viewBox="0 0 14 14" className="text-brand-400/50">
                <path d="M11,7 A4,4 0 1,1 7,3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M7,1 L7,3.5 L9,3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-medium text-text-light/40 tracking-wide">
                Monitoring feeds back into next sprint
              </span>
            </div>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-brand-400/20" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
