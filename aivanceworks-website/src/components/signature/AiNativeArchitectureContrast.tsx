/**
 * AiNativeArchitectureContrast — signature section for the Native AI Development page.
 *
 * The argument: most teams "add AI" by stapling a chatbot or copilot onto a system that was
 * designed before AI existed — the model lives at the edge, an afterthought bolted to a legacy
 * CRUD core. AI-native development inverts that: a foundation model is a core layer of the
 * architecture from day one, with prompt management, AI-native UX, and the serving / evals /
 * cost infrastructure built around it. The CONTRAST between the two architectures is the whole
 * emotional argument, and it is a relationship a FeatureGrid (a flat list of peers) cannot show.
 *
 * Why a NEW signature (Component Reuse Rule §8.4): no existing AI signature expresses a
 * bolted-on-vs-native architectural contrast. AiApproachSelector is a problem→modality router;
 * ModelLifecycleLoop is a cyclical ML lifecycle; GenAiPipelineArchitecture is a single RAG/guardrail
 * pipeline (one architecture, not a before/after of two); AgentAutonomySpectrum is a control
 * gradient; EnterpriseAiDeliveryWrapper is a core-protected-by-enclosing-layers containment. None
 * is a side-by-side comparison of two whole-system architectures.
 *
 * Desktop (lg+): two architecture cards side by side — "AI bolted on" (left, dimmed/legacy) and
 *   "AI-native" (right, emphasized). Each card stacks its layers. Click any AI-native layer to
 *   focus it and reveal what we build at that layer; siblings dim. The visual weight is deliberately
 *   unequal — the bolted-on card reads as thin and brittle, the native card reads as deep and
 *   load-bearing.
 * Mobile (< lg): the two cards stack vertically (bolted-on on top, native below) with a "the
 *   difference" divider between them. Layer order is preserved within each card. Tap any native
 *   layer to expand its detail.
 *
 * Interactive: click/tap any native layer to focus it. Matches the AiApproachSelector /
 *   ModelLifecycleLoop interaction pattern (useState focus, dim siblings, aria-expanded).
 *
 * Visualization pattern: comparison / before-after (catalog #4).
 * Emotional argument: "Bolting a chatbot onto yesterday's architecture gets you a demo. Designing
 *   the foundation model in as a core layer gets you a product. We build the second kind."
 *
 * Token compliance: all color references use token-backed Tailwind classes or CSS custom
 *   properties. No raw color shades or hex values.
 * Accessibility: interactive buttons have aria-expanded; SVG icons are aria-hidden; the section
 *   heading is an h2; prefers-reduced-motion respected via globals.css transition handling.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface NativeLayer {
  id: string;
  label: string;
  role: string;
  detail: string;
}

// The AI-native architecture, top (surface) to bottom (foundation).
const NATIVE_LAYERS: NativeLayer[] = [
  {
    id: 'ux',
    label: 'AI-Native UX',
    role: 'Interfaces designed around AI interaction',
    detail:
      'Chat, copilot, voice, and assistive flows designed as the primary way users work — with streaming, suggestions, and graceful fallbacks — rather than a chat box wedged into a traditional form-and-table screen.',
  },
  {
    id: 'prompt',
    label: 'Prompt Management',
    role: 'Structured, versioned, evaluated prompts',
    detail:
      'Prompts treated as first-class assets: structured templates, version control, and an evaluation harness so a wording change is tested before it ships — not edited live in production and hoped for.',
  },
  {
    id: 'foundation',
    label: 'Foundation Model Layer',
    role: 'A pre-trained model as a core component',
    detail:
      'A pre-trained foundation model (OpenAI, Anthropic, Gemini, or open-source) wired in as a core architectural layer the application is designed around — with a provider-agnostic interface so you are not married to one vendor.',
  },
  {
    id: 'infra',
    label: 'AI Infrastructure',
    role: 'Serving, embeddings, evals, cost control',
    detail:
      'The layer that keeps it production-grade: model serving and inference handling, embedding pipelines, observability and evals to watch model behavior live, and token / cost controls so spend stays predictable.',
  },
];

function LayerIcon({ type, className }: { type: string; className?: string }) {
  const base = cn('w-5 h-5', className);
  switch (type) {
    case 'ux':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      );
    case 'prompt':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m4 6 4 6-4 6" />
          <path d="M13 18h7" />
        </svg>
      );
    case 'foundation':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9zM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
        </svg>
      );
    case 'infra':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      );
    default:
      return null;
  }
}

export function AiNativeArchitectureContrast() {
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
            Bolted On vs. AI-Native
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Where the model sits decides what you get.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            Stapling a chatbot onto yesterday&apos;s architecture gets you a demo. Designing the
            foundation model in as a core layer gets you a product. We build the second kind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {/* ─── LEFT: AI bolted on ─── */}
          <div className="rounded-2xl p-5 sm:p-6 border border-glass-border bg-glass-bg/60">
            <div className="mb-4">
              <p className="text-xs font-semibold tracking-wider uppercase text-text-light/45 mb-1">
                The common path
              </p>
              <h3 className="text-xl font-bold text-text-light/70">AI bolted on</h3>
              <p className="text-xs text-text-light/50 mt-1 leading-relaxed">
                A model stapled to the edge of a system designed before AI existed.
              </p>
            </div>

            {/* thin AI widget */}
            <div className="rounded-lg p-3 border border-dashed border-text-light/20 bg-surface-dark/40 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-text-light/40">
                  <LayerIcon type="ux" className="w-4 h-4" />
                </span>
                <p className="text-sm font-semibold text-text-light/55">Chatbot / copilot widget</p>
              </div>
              <p className="text-[11px] text-text-light/40 mt-1 leading-relaxed">
                Bolted on after the fact. No prompt versioning, no evals, no cost ceiling.
              </p>
            </div>

            <div className="flex justify-center py-1" aria-hidden="true">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-text-light/30">
                stapled to
              </span>
            </div>

            {/* legacy core */}
            <div className="rounded-lg p-4 border border-text-light/15 bg-surface-dark/40">
              <p className="text-sm font-semibold text-text-light/55 mb-2">Legacy CRUD application</p>
              <div className="space-y-1.5">
                {['Forms & tables', 'Business logic', 'Database'].map((l) => (
                  <div key={l} className="rounded px-3 py-1.5 bg-surface-dark/60 border border-text-light/10">
                    <p className="text-xs text-text-light/45">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-text-light/40 mt-4 leading-relaxed border-t border-text-light/10 pt-3">
              The model never touches the core. It demos well, then stalls — brittle prompts,
              runaway token spend, and an experience that still feels like the old app with a box
              taped to the side.
            </p>
          </div>

          {/* ─── RIGHT: AI-native ─── */}
          <div className="rounded-2xl p-5 sm:p-6 border border-brand-400/40 bg-surface-elevated ring-1 ring-brand-400/15">
            <div className="mb-4">
              <p className="text-xs font-semibold tracking-wider uppercase text-accent-300/80 mb-1">
                How we build
              </p>
              <h3 className="text-xl font-bold text-text-light">AI-native architecture</h3>
              <p className="text-xs text-text-light/60 mt-1 leading-relaxed">
                The foundation model is a core layer the whole system is designed around.
              </p>
            </div>

            <div className="space-y-2">
              {NATIVE_LAYERS.map((layer) => {
                const isFocused = focusedId === layer.id;
                const isDimmed = focusedId !== null && !isFocused;
                const isCore = layer.id === 'foundation';
                return (
                  <button
                    key={layer.id}
                    onClick={() => handleToggle(layer.id)}
                    aria-expanded={isFocused}
                    className={cn(
                      'w-full text-left rounded-lg p-3.5 transition-all duration-300 border',
                      isFocused
                        ? 'bg-surface-dark/60 border-accent-400/45 ring-1 ring-accent-400/20'
                        : isCore
                          ? 'bg-brand-500/15 border-brand-400/40'
                          : 'bg-surface-dark/40 border-glass-border',
                      isDimmed && 'opacity-35',
                      !focusedId && 'hover:border-brand-400/30',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn('flex-shrink-0', isFocused ? 'text-accent-300' : isCore ? 'text-brand-200' : 'text-brand-300')}>
                        <LayerIcon type={layer.id} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-text-light leading-tight">{layer.label}</h4>
                        <p className="text-[11px] text-text-light/55">{layer.role}</p>
                      </div>
                      {isCore && !isFocused && (
                        <span className="flex-shrink-0 inline-flex px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-brand-500/20 text-brand-100 border border-brand-400/30">
                          Core
                        </span>
                      )}
                    </div>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        isFocused ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0',
                      )}
                    >
                      <div className="pt-3 border-t border-accent-400/20">
                        <p className="text-[11px] font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          What we build
                        </p>
                        <p className="text-xs text-text-light/75 leading-relaxed">{layer.detail}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-text-light/60 mt-4 leading-relaxed border-t border-brand-400/15 pt-3">
              Every layer is designed to work with the model, not around it — so the AI experience
              is the product, prompts are tested before they ship, spend is governed, and you can
              swap the underlying model without re-architecting.
            </p>
          </div>
        </div>

        {/* Interaction hint */}
        <p className="text-center text-xs text-text-light/35 mt-8">
          Click any layer of the AI-native architecture to see what we build there.
        </p>
      </Container>
    </Section>
  );
}
