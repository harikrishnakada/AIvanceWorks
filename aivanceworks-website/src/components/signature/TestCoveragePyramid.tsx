/**
 * TestCoveragePyramid — signature section for Quality Engineering & Testing page.
 *
 * Desktop: 4 horizontal tiers stacked in a pyramid shape (widest at bottom),
 *   each expandable on click to reveal testing details. Unit tests at the base
 *   (widest), E2E at the top (narrowest). Each tier shows test type, tools,
 *   and what belongs there.
 * Mobile (< lg): tiers stack vertically as full-width cards. Pyramid visual
 *   simplifies to numbered cards with a left accent bar indicating tier width
 *   proportionally. Click-to-expand behavior is preserved.
 *
 * Interactive: click any tier to focus it (dims others, expands detail).
 *   Matches SaasArchitectureBlueprint layer-focus pattern.
 *
 * Visualization pattern: Hierarchical / data viz (catalog patterns 1+2).
 * Emotional argument: "We design test architecture — the right number of tests
 *   at the right layer. Not a pile of E2E tests that break on every deploy."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface PyramidTier {
  id: string;
  title: string;
  subtitle: string;
  widthPercent: number;
  tools: string[];
  details: { label: string; description: string }[];
  accent?: boolean;
}

const TIERS: PyramidTier[] = [
  {
    id: 'e2e',
    title: 'End-to-End Tests',
    subtitle: 'Critical user journeys — fewest in count, highest in confidence',
    widthPercent: 50,
    tools: ['Playwright', 'Cypress'],
    details: [
      { label: 'What belongs here', description: 'Complete user workflows — signup, checkout, core business flows. Only the journeys where a failure means lost revenue or broken trust.' },
      { label: 'Typical count', description: '20–50 tests covering 5–10 critical paths. More than this and the suite becomes slow and brittle.' },
      { label: 'Run cadence', description: 'On every PR (parallelized), nightly full suite against staging, pre-deploy gate against production.' },
    ],
  },
  {
    id: 'api',
    title: 'API & Contract Tests',
    subtitle: 'Service boundaries — verify integrations without a browser',
    widthPercent: 65,
    tools: ['Postman', 'Pact', 'Supertest'],
    accent: true,
    details: [
      { label: 'What belongs here', description: 'API endpoint validation, request/response schema contracts, authentication flows, error handling, and cross-service integration points.' },
      { label: 'Why this layer matters', description: 'API tests catch integration issues that unit tests miss — but run in seconds, not minutes. They are the most underused layer in most codebases.' },
      { label: 'Contract testing', description: 'Consumer-driven contracts (Pact) verify that API changes do not break downstream consumers, without running the full stack.' },
    ],
  },
  {
    id: 'integration',
    title: 'Integration Tests',
    subtitle: 'Component interactions — database, services, external systems',
    widthPercent: 80,
    tools: ['Jest', 'xUnit', 'Testcontainers'],
    details: [
      { label: 'What belongs here', description: 'Tests that verify how components work together — database queries, message queue handlers, cache interactions, and service-to-service calls using real (or containerized) dependencies.' },
      { label: 'Test isolation', description: 'Each test manages its own state via transactions, test containers, or dedicated fixtures. No shared mutable state between tests — that is where flakiness starts.' },
      { label: 'Run cadence', description: 'On every commit. Parallelized by module. Typical execution: 30–90 seconds for a well-structured suite.' },
    ],
  },
  {
    id: 'unit',
    title: 'Unit Tests',
    subtitle: 'Individual functions and modules — fast, focused, abundant',
    widthPercent: 100,
    tools: ['Jest', 'xUnit', 'NUnit', 'Vitest'],
    accent: true,
    details: [
      { label: 'What belongs here', description: 'Pure logic — calculations, transformations, validators, state machines, parsers. Anything that takes an input, produces an output, and has no external dependencies.' },
      { label: 'Typical coverage target', description: 'Business logic modules at high coverage. UI components and boilerplate at lower coverage. The target is risk-weighted, not a blanket percentage.' },
      { label: 'Run cadence', description: 'On every file save (watch mode) and every commit. Typical execution: under 10 seconds for the full unit suite.' },
    ],
  },
];

export const TestCoveragePyramid = () => {
  const [focusedTier, setFocusedTier] = useState<string | null>(null);

  const handleTierClick = (id: string) => {
    setFocusedTier((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" id="signature">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Test Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            The right tests at the right layer
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-base lg:text-lg">
            Not a pile of flaky E2E tests. A balanced test pyramid where each
            layer catches different categories of defects — fast feedback at the
            base, high confidence at the peak.
          </p>
          <p className="text-text-light/40 text-sm mt-3">
            Click any tier to explore what belongs there
          </p>
        </div>

        {/* Pyramid stack */}
        <div className="relative max-w-3xl mx-auto space-y-2 lg:space-y-3">
          {TIERS.map((tier, idx) => {
            const isFocused = focusedTier === tier.id;
            const isDimmed = focusedTier !== null && !isFocused;

            return (
              <div key={tier.id} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => handleTierClick(tier.id)}
                  aria-expanded={isFocused}
                  aria-label={`${tier.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
                  className={cn(
                    'text-left rounded-xl border transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                    tier.accent
                      ? 'border-accent-500/20 bg-accent-500/[0.06]'
                      : 'border-brand-400/15 bg-brand-500/[0.06]',
                    isFocused && 'ring-1 ring-brand-400/30 shadow-glow',
                    isFocused && tier.accent && 'ring-accent-400/30',
                    isDimmed && 'opacity-40',
                    // On mobile, all tiers are full-width
                    isFocused ? 'w-full' : 'w-full',
                  )}
                  style={{
                    // On desktop, pyramid width varies by tier
                    maxWidth: isFocused ? '100%' : undefined,
                  }}
                >
                  {/* Desktop: pyramid width via CSS variable */}
                  <div
                    className="lg:mx-auto transition-all duration-300"
                    style={{
                      width: '100%',
                      maxWidth: isFocused ? '100%' : `${tier.widthPercent}%`,
                    }}
                  >
                    {/* Tier header */}
                    <div className="px-5 py-4 lg:px-6 lg:py-5 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className={cn(
                              'inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold shrink-0',
                              tier.accent
                                ? 'bg-accent-500/20 text-accent-400'
                                : 'bg-brand-500/20 text-brand-400',
                            )}
                          >
                            {idx + 1}
                          </span>
                          <h3 className="text-base lg:text-lg font-semibold text-text-light">
                            {tier.title}
                          </h3>
                        </div>
                        <p className="text-sm text-text-light/50 ml-10">
                          {tier.subtitle}
                        </p>
                        {/* Tool chips */}
                        <div className="flex flex-wrap gap-1.5 mt-2 ml-10">
                          {tier.tools.map((tool) => (
                            <span
                              key={tool}
                              className={cn(
                                'text-[10px] font-medium px-2 py-0.5 rounded-full',
                                tier.accent
                                  ? 'bg-accent-500/10 text-accent-400/70'
                                  : 'bg-brand-500/10 text-brand-400/70',
                              )}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className={cn(
                          'mt-1.5 shrink-0 transition-transform duration-200 text-text-light/30',
                          isFocused && 'rotate-180',
                        )}
                      >
                        <path d="M4,6 L8,10 L12,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Expanded detail */}
                    {isFocused && (
                      <div className="px-5 pb-5 lg:px-6 lg:pb-6 border-t border-white/[0.06] pt-4">
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {tier.details.map((detail) => (
                            <div
                              key={detail.label}
                              className={cn(
                                'rounded-lg p-3 border',
                                tier.accent
                                  ? 'bg-accent-500/[0.04] border-accent-500/10'
                                  : 'bg-brand-500/[0.04] border-brand-400/10',
                              )}
                            >
                              <p className={cn(
                                'text-sm font-medium mb-1',
                                tier.accent ? 'text-accent-400' : 'text-brand-300',
                              )}>
                                {detail.label}
                              </p>
                              <p className="text-xs text-text-light/50 leading-relaxed">
                                {detail.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}

          {/* Side annotations — desktop only */}
          <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300/40"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Speed &amp; Volume
            </p>
          </div>
          <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-300/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              Confidence &amp; Scope
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
