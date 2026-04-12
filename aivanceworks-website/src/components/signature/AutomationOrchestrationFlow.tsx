/**
 * AutomationOrchestrationFlow — signature section for Intelligent Automation page.
 *
 * Desktop: Two parallel vertical flows — "Traditional RPA" (left, muted) vs
 *   "Intelligent Automation" (right, highlighted) — across 5 workflow stages.
 *   Right-side stages expand on click to reveal AI components.
 * Mobile (< lg): stacks vertically — each stage shows RPA (dim card) then IA
 *   (highlighted card) stacked. Click-to-expand works on IA cards only.
 *
 * Interactive: click any Intelligent Automation stage to expand detail.
 *   RPA stages are static (read-only) for contrast.
 *
 * Visualization pattern: Comparison + Process/Flow (catalog patterns 4+3).
 * Emotional argument: "This isn't RPA that records and replays — it's AI
 *   that understands, reasons, and acts, with human oversight where it matters."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface FlowStage {
  id: string;
  rpa: { title: string; description: string };
  ia: {
    title: string;
    description: string;
    components: { name: string; detail: string }[];
    accent?: boolean;
  };
}

const STAGES: FlowStage[] = [
  {
    id: 'trigger',
    rpa: {
      title: 'Fixed Triggers',
      description: 'Scheduled runs or manual starts. Breaks when input format changes.',
    },
    ia: {
      title: 'Event-Driven Triggers',
      description: 'Email, form, API event, file upload — AI classifies and routes automatically',
      components: [
        { name: 'Multi-Channel Intake', detail: 'Email, web forms, API webhooks, file drops, and event streams — all monitored and classified in real time' },
        { name: 'Input Classification', detail: 'AI classifies incoming requests by type, urgency, and routing rules before the workflow begins' },
        { name: 'Adaptive Detection', detail: 'Handles format variations, new input types, and edge cases without manual reconfiguration' },
      ],
    },
  },
  {
    id: 'understand',
    rpa: {
      title: 'Screen Scraping',
      description: 'Reads fixed positions on a screen. Breaks when UI changes.',
    },
    ia: {
      title: 'Semantic Understanding',
      description: 'AI reads, interprets, and extracts meaning — not positions on a screen',
      accent: true,
      components: [
        { name: 'Document Intelligence', detail: 'LLM-powered extraction that understands document structure, context, and meaning — not just OCR character recognition' },
        { name: 'Entity Extraction', detail: 'Pulls names, dates, amounts, reference numbers, and custom fields from unstructured text and documents' },
        { name: 'Context Assembly', detail: 'Gathers data from multiple sources and systems to build the full context a decision requires' },
      ],
    },
  },
  {
    id: 'decide',
    rpa: {
      title: 'Rule-Based Only',
      description: 'If/then logic. Cannot handle ambiguity or exceptions.',
    },
    ia: {
      title: 'AI Decision Engine',
      description: 'LLM reasoning, confidence scoring, and rule evaluation combined',
      accent: true,
      components: [
        { name: 'LLM Reasoning', detail: 'Large language models evaluate complex criteria, weigh evidence, and produce structured recommendations for each case' },
        { name: 'Confidence Scoring', detail: 'Every AI decision carries a confidence score — high-confidence actions proceed, low-confidence cases route to human review' },
        { name: 'Hybrid Rules + AI', detail: 'Business rules handle the clear cases; AI handles the ambiguous ones. Both operate in the same workflow, not separate systems' },
      ],
    },
  },
  {
    id: 'act',
    rpa: {
      title: 'Brittle Execution',
      description: 'Replays recorded clicks. Fails silently when systems update.',
    },
    ia: {
      title: 'API-Native Orchestration',
      description: 'Direct system integration via APIs and webhooks — resilient and auditable',
      components: [
        { name: 'System Integration', detail: 'API calls to ERP, CRM, document management, and internal systems — not screen interaction that breaks on UI changes' },
        { name: 'Multi-Step Orchestration', detail: 'Complex workflows with branching, parallel execution, retries, and compensation logic for failed steps' },
        { name: 'Audit Trail', detail: 'Every action logged with decision context, confidence scores, and data lineage for compliance and debugging' },
      ],
    },
  },
  {
    id: 'review',
    rpa: {
      title: 'Fail and Queue',
      description: 'Exceptions go to an error queue. Human starts from scratch.',
    },
    ia: {
      title: 'Human-in-the-Loop',
      description: 'Confidence-based routing with context — reviewers approve, not rebuild',
      accent: true,
      components: [
        { name: 'Smart Escalation', detail: 'Low-confidence decisions route to human reviewers with full context, AI recommendation, and supporting evidence pre-filled' },
        { name: 'Review Interface', detail: 'Reviewers approve, modify, or reject — they refine the AI decision rather than processing from scratch' },
        { name: 'Feedback Loop', detail: 'Human decisions feed back into the system, improving confidence calibration and reducing escalation rates over time' },
      ],
    },
  },
];

export const AutomationOrchestrationFlow = () => {
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
            The Difference
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            RPA records clicks. We build understanding.
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-base lg:text-lg">
            Side by side — how traditional RPA handles your workflow versus how
            AI-augmented automation handles it. Same process, fundamentally different capability.
          </p>
          <p className="text-text-light/40 text-sm mt-3">
            Click any stage on the right to explore its components
          </p>
        </div>

        {/* Column headers — desktop only */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-surface-elevated text-text-light/40 border border-white/[0.06]">
              Traditional RPA
            </span>
          </div>
          <div className="text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-400/20">
              Intelligent Automation
            </span>
          </div>
        </div>

        {/* Flow comparison */}
        <div className="max-w-5xl mx-auto space-y-4 lg:space-y-5">
          {STAGES.map((stage, idx) => {
            const isFocused = focusedStage === stage.id;
            const isDimmed = focusedStage !== null && !isFocused;

            return (
              <div key={stage.id}>
                {/* Flow arrow between stages */}
                {idx > 0 && (
                  <div className="flex justify-center -mt-4 -mb-4 relative z-0">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-px h-3 lg:h-4 bg-brand-400/15" />
                      <svg width="8" height="6" viewBox="0 0 8 6" className="text-brand-400/25">
                        <path d="M0,0 L4,6 L8,0" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Stage row */}
                <div className={cn(
                  'grid gap-3 lg:grid-cols-2 lg:gap-6 transition-opacity duration-300',
                  isDimmed && 'opacity-40',
                )}>
                  {/* RPA side (static, muted) */}
                  <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] px-5 py-4 relative">
                    {/* Mobile label */}
                    <span className="lg:hidden inline-block text-[10px] font-semibold uppercase tracking-wider text-text-light/30 mb-2">
                      Traditional RPA
                    </span>
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold bg-white/[0.05] text-text-light/30 shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="text-sm lg:text-base font-semibold text-text-light/40">
                          {stage.rpa.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-text-light/25 mt-1">
                          {stage.rpa.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* IA side (interactive, highlighted) */}
                  <button
                    type="button"
                    onClick={() => handleStageClick(stage.id)}
                    aria-expanded={isFocused}
                    aria-label={`${stage.ia.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
                    className={cn(
                      'w-full text-left rounded-xl border transition-all duration-300 relative z-10',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                      stage.ia.accent
                        ? 'border-accent-500/20 bg-accent-500/[0.06]'
                        : 'border-brand-400/15 bg-brand-500/[0.06]',
                      isFocused && 'ring-1 ring-brand-400/30 shadow-glow',
                      isFocused && stage.ia.accent && 'ring-accent-400/30',
                    )}
                  >
                    <div className="px-5 py-4 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {/* Mobile label */}
                        <div>
                          <span className="lg:hidden inline-block text-[10px] font-semibold uppercase tracking-wider text-brand-300/60 mb-2">
                            Intelligent Automation
                          </span>
                          <div className="flex items-start gap-3">
                            <span className={cn(
                              'inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold shrink-0',
                              stage.ia.accent
                                ? 'bg-accent-500/20 text-accent-400'
                                : 'bg-brand-500/20 text-brand-400',
                            )}>
                              {idx + 1}
                            </span>
                            <div>
                              <h3 className="text-sm lg:text-base font-semibold text-text-light">
                                {stage.ia.title}
                              </h3>
                              <p className="text-xs lg:text-sm text-text-light/50 mt-1">
                                {stage.ia.description}
                              </p>
                            </div>
                          </div>
                        </div>
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

                    {/* Expanded detail */}
                    {isFocused && (
                      <div className="px-5 pb-5 border-t border-white/[0.06] pt-4">
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {stage.ia.components.map((comp) => (
                            <div
                              key={comp.name}
                              className={cn(
                                'rounded-lg p-3 border',
                                stage.ia.accent
                                  ? 'bg-accent-500/[0.04] border-accent-500/10'
                                  : 'bg-brand-500/[0.04] border-brand-400/10',
                              )}
                            >
                              <p className={cn(
                                'text-sm font-medium mb-1',
                                stage.ia.accent ? 'text-accent-400' : 'text-brand-300',
                              )}>
                                {comp.name}
                              </p>
                              <p className="text-xs text-text-light/50 leading-relaxed">
                                {comp.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Side annotations — desktop only */}
        <div className="hidden lg:flex justify-center gap-8 mt-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-light/20">
            Record → Replay → Break → Fix
          </p>
          <span className="text-text-light/10">vs</span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300/40">
            Trigger → Understand → Reason → Act → Review
          </p>
        </div>
      </Container>
    </Section>
  );
};
