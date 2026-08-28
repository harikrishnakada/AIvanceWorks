/**
 * ModelLifecycleLoop — signature section for the ML Development service page.
 *
 * Desktop (lg+): Five lifecycle stages arranged as a horizontal flow —
 *   Frame → Data & Features → Train & Evaluate → Deploy & Serve → Monitor —
 *   with an explicit feedback edge looping Monitor back to Data & Features.
 *   That return edge IS the argument: a model is not a one-time deliverable,
 *   it is a loop you keep alive. Click any stage to focus it (dims others,
 *   reveals what we implement and what your team receives).
 * Mobile (< lg): Stages stack as full-width cards in lifecycle order — Frame
 *   (top) through Monitor (bottom). Vertical connectors replace horizontal
 *   arrows. A dedicated "retrain loop" card sits below Monitor, pointing back
 *   up to Data & Features, preserving the closed-loop argument on small screens.
 *   Tap any card to expand implementation detail.
 *
 * Interactive: click/tap any stage to focus it. Matches the DataPipelineBlueprint
 *   / InfraOpsControlPlane interaction pattern (useState focus, dim siblings).
 *
 * Visualization pattern: Process / flow + cyclical (catalog pattern 3). A standard
 *   FeatureGrid cannot express the feedback edge — the loop from Monitor back to
 *   Data is the entire emotional argument and a grid of cards flattens it away.
 * Emotional argument: "A trained model is the start, not the finish. We build the
 *   loop that keeps it accurate after the data shifts — so your model survives
 *   contact with production instead of quietly rotting."
 *
 * Token compliance: all color references use token-backed Tailwind classes or
 *   CSS custom properties (var(--brand-*)). No raw color shades or hex values.
 * Accessibility: interactive buttons have aria-expanded, all SVG icons have
 *   aria-hidden="true", section heading is an h2, prefers-reduced-motion respected
 *   via globals.css transition handling.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface LifecycleStage {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  role: string;
  tools: string[];
  whatWeImplement: string;
  handoff: string;
}

const STAGES: LifecycleStage[] = [
  {
    id: 'frame',
    number: 1,
    title: 'Frame',
    subtitle: 'Define the problem',
    icon: 'target',
    role: 'Translate the business question into a measurable ML problem with a success metric you can defend.',
    tools: ['Problem framing', 'Baseline analysis', 'Success metrics', 'Feasibility check'],
    whatWeImplement:
      'A precise problem statement, the prediction target, an offline evaluation metric tied to the business outcome, and an honest baseline (heuristic or simple model) so every gain is measured against something real — not a vanity score.',
    handoff: 'Problem definition, target and metric specification, baseline results, feasibility assessment',
  },
  {
    id: 'data',
    number: 2,
    title: 'Data & Features',
    subtitle: 'Build the inputs',
    icon: 'layers',
    role: 'Assemble training data and engineer features in a pipeline that reproduces in production.',
    tools: ['Feature pipelines', 'Labeling', 'Train/test splits', 'Leakage checks'],
    whatWeImplement:
      'Reproducible feature pipelines, leakage-safe train/validation/test splits, and dataset versioning so a model can be retrained on the exact same logic later. PII is identified and handled at this layer, not bolted on after.',
    handoff: 'Versioned datasets, feature pipeline code, data documentation, split methodology',
  },
  {
    id: 'train',
    number: 3,
    title: 'Train & Evaluate',
    subtitle: 'Model and prove it',
    icon: 'cpu',
    role: 'Train candidate models and evaluate them on data they have never seen — not just the training set.',
    tools: ['Model training', 'Fine-tuning', 'Cross-validation', 'Error analysis'],
    whatWeImplement:
      'Model training and fine-tuning with experiment tracking, cross-validation, and slice-based error analysis so we know where the model fails — not just its headline accuracy. Every experiment is logged and reproducible.',
    handoff: 'Trained model artifacts, evaluation report with error slices, experiment tracking history',
  },
  {
    id: 'deploy',
    number: 4,
    title: 'Deploy & Serve',
    subtitle: 'Cross the prod gap',
    icon: 'rocket',
    role: 'Package the model behind a versioned API or batch job that your systems can actually call.',
    tools: ['Model serving', 'Batch & real-time', 'Versioning', 'Rollback'],
    whatWeImplement:
      'Containerized model serving — real-time inference API or scheduled batch scoring — with model versioning, staged rollout, and a rollback path. The training-to-production gap is where most models die; this is where we close it.',
    handoff: 'Serving infrastructure, inference API or batch job, deployment runbook, rollback procedure',
  },
  {
    id: 'monitor',
    number: 5,
    title: 'Monitor & Retrain',
    subtitle: 'Keep it alive',
    icon: 'activity',
    role: 'Watch for drift and degradation, then feed signals back into the next training cycle.',
    tools: ['Drift detection', 'Performance tracking', 'Alerting', 'Retraining triggers'],
    whatWeImplement:
      'Data-drift and prediction-drift monitoring, performance tracking against live outcomes where labels are available, and alerting that fires before accuracy quietly erodes. Drift signals flow back into the Data stage to trigger retraining.',
    handoff: 'Monitoring dashboards, drift and performance alerts, retraining playbook, model registry',
  },
];

function StageIcon({ type, className }: { type: string; className?: string }) {
  const baseClass = cn('w-7 h-7', className);

  switch (type) {
    case 'target':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );
    case 'layers':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m12 2 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 17 9 5 9-5" opacity="0.5" />
        </svg>
      );
    case 'cpu':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        </svg>
      );
    case 'activity':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    default:
      return null;
  }
}

// Horizontal flow arrow between stages (desktop only)
function FlowArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center w-7 flex-shrink-0 self-start mt-20" aria-hidden="true">
      <svg viewBox="0 0 32 24" className="w-7 h-6 text-brand-400/50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12 H28" strokeDasharray="4 3" />
        <path d="M22 6 L28 12 L22 18" />
      </svg>
    </div>
  );
}

// Vertical connector between stages (mobile only)
function VerticalConnector() {
  return (
    <div className="lg:hidden flex justify-center py-1" aria-hidden="true">
      <svg viewBox="0 0 24 32" className="w-6 h-8 text-brand-400/40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4 V28" strokeDasharray="4 3" />
        <path d="M6 22 L12 28 L18 22" />
      </svg>
    </div>
  );
}

export function ModelLifecycleLoop() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark">
      <Container>
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            The Model Lifecycle
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            The never-ending loop.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            Training a model is the easy 20%. The other 80% is the loop for conscious
            deployment — and that&apos;s what we build.
          </p>
        </div>

        {/* ─── Desktop: horizontal lifecycle (lg+) ─── */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="flex items-start justify-center gap-0">
            {STAGES.map((stage, index) => {
              const isFocused = focusedId === stage.id;
              const isDimmed = focusedId !== null && !isFocused;

              return (
                <div key={stage.id} className="flex items-start">
                  <button
                    onClick={() => handleToggle(stage.id)}
                    aria-expanded={isFocused}
                    className={cn(
                      'relative text-left rounded-xl p-5 transition-all duration-300 border w-48',
                      isFocused
                        ? 'bg-surface-elevated border-brand-400/40 ring-1 ring-brand-400/20'
                        : 'bg-glass-bg border-glass-border',
                      isDimmed && 'opacity-30',
                      !focusedId && 'hover:bg-surface-elevated/60 hover:border-brand-400/20',
                    )}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/20 border border-brand-400/30 text-xs font-bold text-brand-300">
                        {stage.number}
                      </span>
                      <span className="text-xs font-semibold tracking-wider uppercase text-brand-300/70">
                        {stage.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-brand-300">
                        <StageIcon type={stage.icon} />
                      </div>
                      <h3 className="text-lg font-bold text-text-light">{stage.title}</h3>
                    </div>

                    <p className="text-xs text-text-light/65 leading-relaxed mb-3">
                      {stage.role}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {stage.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-brand-500/10 text-brand-200 border border-brand-400/15"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        isFocused ? 'max-h-72 opacity-100 mt-4' : 'max-h-0 opacity-0',
                      )}
                    >
                      <div className="pt-3 border-t border-brand-400/20 space-y-3">
                        <div>
                          <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                            What we implement
                          </p>
                          <p className="text-xs text-text-light/75 leading-relaxed">
                            {stage.whatWeImplement}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                            What your team gets
                          </p>
                          <p className="text-xs text-text-light/75 leading-relaxed">
                            {stage.handoff}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>

                  {index < STAGES.length - 1 && <FlowArrow />}
                </div>
              );
            })}
          </div>

          {/* Feedback loop edge: Monitor → back to Data & Features */}
          <div className="relative mt-6 mx-auto max-w-5xl" aria-hidden="true">
            <svg viewBox="0 0 1000 70" className="w-full h-auto text-accent-400/55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
              {/* starts under Monitor (right), curves back to under Data & Features (left) */}
              <path d="M920 6 V34 Q920 50 904 50 H236 Q220 50 220 34 V6" strokeDasharray="7 5" />
              <path d="M214 18 L220 6 L226 18" />
            </svg>
            <p className="text-center text-xs font-semibold tracking-wider uppercase text-accent-300/80 -mt-2">
              Drift detected → retrain on fresh data
            </p>
          </div>
        </div>

        {/* ─── Mobile: vertical stack (< lg) ─── */}
        <div className="lg:hidden space-y-0 max-w-lg mx-auto">
          {STAGES.map((stage, index) => {
            const isFocused = focusedId === stage.id;
            const isDimmed = focusedId !== null && !isFocused;

            return (
              <div key={stage.id}>
                <button
                  onClick={() => handleToggle(stage.id)}
                  aria-expanded={isFocused}
                  className={cn(
                    'w-full text-left rounded-xl p-5 transition-all duration-300 border',
                    isFocused
                      ? 'bg-surface-elevated border-brand-400/40'
                      : 'bg-glass-bg border-glass-border',
                    isDimmed && 'opacity-30',
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/20 border border-brand-400/30 text-xs font-bold text-brand-300 flex-shrink-0">
                      {stage.number}
                    </span>
                    <div className="text-brand-300 flex-shrink-0">
                      <StageIcon type={stage.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-light leading-tight">{stage.title}</h3>
                      <p className="text-xs text-brand-300/70">{stage.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs text-text-light/65 leading-relaxed mb-2">
                    {stage.role}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {stage.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-brand-500/10 text-brand-200 border border-brand-400/15"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isFocused ? 'max-h-80 opacity-100 mt-3' : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className="pt-3 border-t border-brand-400/20 space-y-3">
                      <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          What we implement
                        </p>
                        <p className="text-xs text-text-light/75 leading-relaxed">
                          {stage.whatWeImplement}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          What your team gets
                        </p>
                        <p className="text-xs text-text-light/75 leading-relaxed">
                          {stage.handoff}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>

                {index < STAGES.length - 1 && <VerticalConnector />}
              </div>
            );
          })}

          {/* Mobile retrain-loop card preserving the closed-loop argument */}
          <div className="lg:hidden flex justify-center py-1" aria-hidden="true">
            <svg viewBox="0 0 24 32" className="w-6 h-8 text-accent-400/45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4 V28" strokeDasharray="4 3" />
              <path d="M6 22 L12 28 L18 22" />
            </svg>
          </div>
          <div className="rounded-xl p-4 border border-accent-400/25 bg-accent-500/10 text-center">
            <p className="text-xs font-semibold tracking-wider uppercase text-accent-200 mb-1">
              The loop closes here
            </p>
            <p className="text-xs text-text-light/75 leading-relaxed">
              Drift signals from Monitor feed back into Data &amp; Features to trigger retraining.
              The model stays accurate instead of quietly degrading.
            </p>
          </div>
        </div>

        {/* Interaction hint */}
        <p className="text-center text-xs text-text-light/35 mt-8">
          Click any stage to see what we implement and what your team receives at handoff.
        </p>
      </Container>
    </Section>
  );
}
