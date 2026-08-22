/**
 * AiApproachSelector — signature section for the AI Development (general / catch-all) page.
 *
 * The argument: this page is for buyers who have a problem but not a chosen technology. So the
 * signature is a problem-first ROUTER. One problem enters on the left; we assess it; it fans out
 * across the candidate AI approaches; and exactly ONE is chosen, built, and shipped on the right.
 * The fan-out-then-converge is the whole point — "you bring the problem, we pick the approach" —
 * and it is a relationship a FeatureGrid (a flat list of equally-weighted things) cannot express.
 *
 * Desktop (lg+): three columns — [Your problem] → [five approach lanes] → [Built & owned] —
 *   with connector lines fanning out from the problem node into the lanes and converging into the
 *   production node. Click any approach to focus it (dims the others, marks it the "chosen path",
 *   and reveals when it fits and what we build). Clicking shows the routing decision in action.
 * Mobile (< lg): the problem card sits on top, the five approach lanes stack vertically below it,
 *   and the production card sits at the bottom. Connectors become short vertical chevrons. Tap any
 *   lane to expand its detail. The top-to-bottom order preserves the problem → choose → ship story.
 *
 * Interactive: click/tap any approach to focus it. Matches the ModelLifecycleLoop /
 *   DataPipelineBlueprint interaction pattern (useState focus, dim siblings, aria-expanded).
 *
 * Collapse pattern — deliberately NOT `max-h-0 + opacity-0`. That approach kept
 *   each lane's detail in the DOM at `max-height: 0` inside a <button>, and iOS
 *   Safari did not honour the clamp: the block held its natural ~200px height
 *   while `opacity-0` kept it invisible, so on a real iPhone every lane carried
 *   ~200px of blank space (five lanes ≈ 1000px of dead scroll) while Chrome
 *   DevTools rendered it correctly. The detail is now mounted only when focused,
 *   so there is no height for a browser to get wrong, and no invisible text left
 *   in the accessibility tree. Entrance comes from `.signature-detail-in`, which
 *   animates opacity/transform only. Sibling signature components still use the
 *   max-height pattern and have the same latent bug.
 *
 * Visualization pattern: comparison / decision + convergent flow (catalog #4 + #3).
 * Emotional argument: "You bring the problem, not the technology. We pick the AI approach that
 *   fits — or tell you when you don't need AI — then build and ship the one that does."
 *
 * Token compliance: all color references use token-backed Tailwind classes or CSS custom
 *   properties (var(--brand-*)). No raw color shades or hex values.
 * Accessibility: interactive buttons have aria-expanded; all SVG icons have aria-hidden="true";
 *   section heading is an h2; prefers-reduced-motion respected via globals.css transition handling.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface Approach {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  whenItFits: string;
  whatWeBuild: string;
}

const APPROACHES: Approach[] = [
  {
    id: 'predictive',
    title: 'Predictive ML',
    tagline: 'Forecast, score, rank, flag',
    icon: 'trending',
    whenItFits:
      'Your problem is a prediction — demand forecasting, churn, fraud or anomaly detection, recommendation, or ranking — and you have historical data to learn from.',
    whatWeBuild:
      'A custom model trained on your data, evaluated honestly on data it has never seen, and served behind an API or batch job your systems can call.',
  },
  {
    id: 'generative',
    title: 'Generative AI / LLM',
    tagline: 'Generate, summarize, answer',
    icon: 'sparkles',
    whenItFits:
      'Your problem is language — drafting, summarizing, answering questions from your own documents, or automating multi-step work that needs reasoning.',
    whatWeBuild:
      'A retrieval-augmented (RAG) or agent system with grounding in your sources, guardrails against hallucination, and monitoring built in from the first sprint.',
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    tagline: 'See and classify images',
    icon: 'eye',
    whenItFits:
      'Your data is images or video — visual inspection, defect detection, object counting, or classification that a person currently does by eye.',
    whatWeBuild:
      'A vision pipeline for detection or classification, evaluated on your real imagery and deployed to where the images are captured.',
  },
  {
    id: 'document',
    title: 'Language & Document AI',
    tagline: 'Read, extract, route',
    icon: 'file',
    whenItFits:
      'You are drowning in documents, forms, emails, or free text that has to be read, extracted, classified, and routed before anyone can act on it.',
    whatWeBuild:
      'Extraction, classification, and routing pipelines that turn unstructured documents into structured data your existing process can consume.',
  },
  {
    id: 'automation',
    title: 'Automation / No AI',
    tagline: 'Sometimes you don’t need a model',
    icon: 'route',
    whenItFits:
      'The task is rule-shaped and predictable, or your data is not ready for a model yet. Reaching for AI here would add cost and risk for no gain.',
    whatWeBuild:
      'Straightforward automation that solves the problem now — and the honest advice that a model is not worth building, so you spend on what works.',
  },
];

function ApproachIcon({ type, className }: { type: string; className?: string }) {
  const base = cn('w-6 h-6', className);
  switch (type) {
    case 'trending':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m3 17 6-6 4 4 8-8" />
          <path d="M17 7h4v4" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3l1.8 4.9L18.7 9.7 13.8 11.5 12 16.4 10.2 11.5 5.3 9.7l4.9-1.8Z" />
          <path d="M19 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
        </svg>
      );
    case 'eye':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'file':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6M8 13h8M8 17h6" />
        </svg>
      );
    case 'route':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="6" cy="19" r="3" />
          <circle cx="18" cy="5" r="3" />
          <path d="M9 19h6a3 3 0 0 0 3-3V8" />
        </svg>
      );
    default:
      return null;
  }
}

// Small fan-out / converge chevron used between columns on desktop.
function FanArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0 self-center" aria-hidden="true">
      <svg viewBox="0 0 32 24" className="w-7 h-6 text-brand-400/50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12 H28" strokeDasharray="4 3" />
        <path d="M22 6 L28 12 L22 18" />
      </svg>
    </div>
  );
}

function VerticalConnector({ tone = 'brand' }: { tone?: 'brand' | 'accent' }) {
  const color = tone === 'accent' ? 'text-accent-400/45' : 'text-brand-400/40';
  return (
    <div className="lg:hidden flex justify-center py-1" aria-hidden="true">
      <svg viewBox="0 0 24 28" className={cn('w-6 h-7', color)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 V24" strokeDasharray="4 3" />
        <path d="M6 18 L12 24 L18 18" />
      </svg>
    </div>
  );
}

export interface AiApproachSelectorProps {
  /**
   * `true` when the diagram is hosted inside another section (the homepage
   * BlueprintShowcase). Drops this component's own <Section>/<Container> shell
   * and its <h2> header — the host already owns the section chrome and the
   * heading level — and renders only the diagram. Default `false` keeps the
   * standalone service-page rendering untouched.
   */
  embedded?: boolean;
}

export function AiApproachSelector({ embedded = false }: AiApproachSelectorProps = {}) {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  const diagram = (
    <>
      {/* ─── Desktop: problem → approaches → production (lg+) ─── */}
        <div className="hidden lg:flex items-stretch justify-center gap-0 max-w-6xl mx-auto">
          {/* Problem node */}
          <div className="w-56 flex-shrink-0 self-center">
            <div className="rounded-xl p-5 border border-glass-border bg-glass-bg">
              <p className="text-label font-semibold tracking-wider uppercase text-brand-300/70 mb-2">
                You bring
              </p>
              <h3 className="text-lg font-bold text-text-light mb-2">Your problem</h3>
              <p className="text-label text-text-light/65 leading-relaxed">
                A business problem and the data you have — not a chosen technology. We frame it and
                set an honest baseline before recommending anything.
              </p>
            </div>
          </div>

          <FanArrow />

          {/* Approach lanes */}
          <div className="flex-1 max-w-xl space-y-2">
            <p className="text-center text-label font-semibold tracking-wider uppercase text-accent-300/80 mb-2">
              We weigh the candidate approaches
            </p>
            {APPROACHES.map((a) => {
              const isFocused = focusedId === a.id;
              const isDimmed = focusedId !== null && !isFocused;
              return (
                <button
                  key={a.id}
                  onClick={() => handleToggle(a.id)}
                  aria-expanded={isFocused}
                  className={cn(
                    'w-full text-left rounded-xl p-4 transition-all duration-300 border',
                    isFocused
                      ? 'bg-surface-elevated border-brand-400/40 ring-1 ring-brand-400/20'
                      : 'bg-glass-bg border-glass-border',
                    isDimmed && 'opacity-30',
                    !focusedId && 'hover:bg-surface-elevated/60 hover:border-brand-400/20',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn('flex-shrink-0', isFocused ? 'text-accent-300' : 'text-brand-300')}>
                      <ApproachIcon type={a.icon} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-copy font-bold text-text-light leading-tight">{a.title}</h4>
                      <p className="text-label text-brand-300/70">{a.tagline}</p>
                    </div>
                    {isFocused && (
                      <span className="flex-shrink-0 inline-flex px-2 py-0.5 rounded text-label font-bold tracking-wider uppercase bg-accent-500/15 text-accent-200 border border-accent-400/25">
                        Chosen path
                      </span>
                    )}
                  </div>

                  {/* Mounted only while focused — see the note on the collapse
                      pattern at the top of this file. */}
                  {isFocused && (
                    <div className="signature-detail-in mt-3 pt-3 border-t border-brand-400/20 space-y-3">
                      <div>
                        <p className="text-label font-semibold tracking-wider uppercase text-brand-300 mb-1">
                          When it fits
                        </p>
                        <p className="text-label text-text-light/75 leading-relaxed">{a.whenItFits}</p>
                      </div>
                      <div>
                        <p className="text-label font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          What we build
                        </p>
                        <p className="text-label text-text-light/75 leading-relaxed">{a.whatWeBuild}</p>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <FanArrow />

          {/* Production node */}
          <div className="w-56 flex-shrink-0 self-center">
            <div className="rounded-xl p-5 border border-accent-400/30 bg-accent-500/10">
              <p className="text-label font-semibold tracking-wider uppercase text-accent-300/80 mb-2">
                You get
              </p>
              <h3 className="text-lg font-bold text-text-light mb-2">One built solution</h3>
              <p className="text-label text-text-light/70 leading-relaxed">
                The chosen approach — built, deployed to production, monitored, and handed over as a
                system you own. Not a demo, and not five options to choose between.
              </p>
            </div>
          </div>
        </div>

        {/* ─── Mobile: vertical problem → approaches → production (< lg) ─── */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="rounded-xl p-5 border border-glass-border bg-glass-bg">
            <p className="text-label font-semibold tracking-wider uppercase text-brand-300/70 mb-1">
              You bring
            </p>
            <h3 className="text-copy font-bold text-text-light mb-1">Your problem</h3>
            <p className="text-label text-text-light/65 leading-relaxed">
              A business problem and the data you have — not a chosen technology.
            </p>
          </div>

          <VerticalConnector />
          <p className="text-center text-label font-semibold tracking-wider uppercase text-accent-300/80 mb-2">
            We weigh the approaches
          </p>

          <div className="space-y-2">
            {APPROACHES.map((a) => {
              const isFocused = focusedId === a.id;
              const isDimmed = focusedId !== null && !isFocused;
              return (
                <button
                  key={a.id}
                  onClick={() => handleToggle(a.id)}
                  aria-expanded={isFocused}
                  className={cn(
                    'w-full text-left rounded-xl p-4 transition-all duration-300 border',
                    isFocused
                      ? 'bg-surface-elevated border-brand-400/40'
                      : 'bg-glass-bg border-glass-border',
                    isDimmed && 'opacity-30',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn('flex-shrink-0', isFocused ? 'text-accent-300' : 'text-brand-300')}>
                      <ApproachIcon type={a.icon} className="w-5 h-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-copy-sm font-bold text-text-light leading-tight">{a.title}</h4>
                      <p className="text-label text-brand-300/70">{a.tagline}</p>
                    </div>
                    {isFocused && (
                      <span className="flex-shrink-0 inline-flex px-2 py-0.5 rounded text-label font-bold tracking-wider uppercase bg-accent-500/15 text-accent-200 border border-accent-400/25">
                        Chosen
                      </span>
                    )}
                  </div>

                  {isFocused && (
                    <div className="signature-detail-in mt-3 pt-3 border-t border-brand-400/20 space-y-3">
                      <div>
                        <p className="text-label font-semibold tracking-wider uppercase text-brand-300 mb-1">
                          When it fits
                        </p>
                        <p className="text-label text-text-light/75 leading-relaxed">{a.whenItFits}</p>
                      </div>
                      <div>
                        <p className="text-label font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          What we build
                        </p>
                        <p className="text-label text-text-light/75 leading-relaxed">{a.whatWeBuild}</p>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <VerticalConnector tone="accent" />

          <div className="rounded-xl p-5 border border-accent-400/30 bg-accent-500/10">
            <p className="text-label font-semibold tracking-wider uppercase text-accent-300/80 mb-1">
              You get
            </p>
            <h3 className="text-copy font-bold text-text-light mb-1">One built solution</h3>
            <p className="text-label text-text-light/70 leading-relaxed">
              The chosen approach — built, deployed, monitored, and handed over as a system you own.
            </p>
          </div>
        </div>

    </>
  );

  if (embedded) return diagram;

  return (
    <Section tone="dark">
      <Container>
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-copy-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            How We Choose
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            One problem in. The right approach out.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            You don&apos;t need to know which kind of AI you need. Bring the problem — we weigh the
            approaches against it and build the one that fits, even when that means no AI at all.
          </p>
        </div>

        {diagram}

        {/* Interaction hint. Lives in the standalone branch only — an embedding
            host supplies its own, so keeping it here avoided a duplicate. */}
        <p className="text-center text-label text-text-light/35 mt-8">
          Click any approach to see when it fits and what we build.
        </p>
      </Container>
    </Section>
  );
}
