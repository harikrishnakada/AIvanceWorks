/**
 * EnterpriseAiDeliveryWrapper — signature section for the Enterprise AI Development service.
 *
 * Desktop (lg+): A nested-frame containment diagram. An outer frame labeled
 *   "Governed enterprise production" encloses five concentric enterprise-grade layers —
 *   Adoption & Handoff → Observability & Operations → Scalable Architecture →
 *   Data Governance & Privacy → Security & Access Control — which in turn wrap a central
 *   core: "Your AI capability (model, GenAI, or agent)." Each layer's label is a button;
 *   clicking it focuses the layer (brightens it, dims siblings) and reveals what we build
 *   and what the team receives in the detail panel below. The CONTAINMENT is the argument:
 *   the model sits at the center, and the work is everything wrapped around it.
 * Mobile (< lg): the concentric frames linearize into a vertical stack of cards, ordered
 *   outermost (Adoption & Handoff) at the top down to Security & Access, with the AI core
 *   card at the very bottom (most protected). A short "wraps" connector sits between cards.
 *   Each card is tap-to-expand for the same detail. The nesting is preserved as visual
 *   indentation cues and the ordering, not as concentric boxes (which don't fit narrow
 *   screens).
 *
 * Interactive: click/tap any layer or the core to focus it (useState focus, dim siblings) —
 *   matches the ModelLifecycleLoop / DataPipelineBlueprint interaction pattern.
 *
 * Visualization pattern: Hierarchical / architectural — containment (catalog pattern 2).
 *   A standard FeatureGrid is a flat grid of equals; it structurally cannot show that the
 *   AI core is wrapped by protective layers. The wrapping relationship IS the page thesis.
 * Emotional argument: "A model is a demo. The security, governance, scale, operations, and
 *   adoption layers wrapped around it are what carry it across the pilot-to-production gap
 *   and keep it alive in your enterprise."
 *
 * Token compliance: all color references use token-backed Tailwind classes or CSS custom
 *   properties (var(--brand-*)). No raw color shades or hex values.
 * Accessibility: interactive buttons have aria-expanded; SVG icons are aria-hidden; the
 *   section heading is an h2; prefers-reduced-motion is respected via globals.css.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface WrapperLayer {
  id: string;
  label: string;
  tagline: string;
  icon: string;
  whatWeBuild: string;
  whatYouGet: string;
}

// Ordered outermost → innermost (the order they wrap the core on desktop and stack on mobile).
const LAYERS: WrapperLayer[] = [
  {
    id: 'adoption',
    label: 'Adoption & Handoff',
    tagline: 'So the organization actually uses it',
    icon: 'users',
    whatWeBuild:
      'Rollout planning, role-based onboarding, documentation, and structured knowledge transfer to your team.',
    whatYouGet:
      'A system your people adopt and your engineers can operate and extend — without staying dependent on us.',
  },
  {
    id: 'operations',
    label: 'Observability & Operations',
    tagline: 'So day-2 is designed for, not discovered',
    icon: 'activity',
    whatWeBuild:
      'Monitoring, quality and drift checks, audit logging, alerting, and on-call runbooks for the operating team.',
    whatYouGet:
      'You run the system from a dashboard with clear runbooks — not from a production incident.',
  },
  {
    id: 'architecture',
    label: 'Scalable, Cloud-Native Architecture',
    tagline: 'So it survives real load',
    icon: 'boxes',
    whatWeBuild:
      'Containerized, horizontally scalable services on your cloud, across separate dev, staging, and production environments.',
    whatYouGet:
      'What works for ten internal users keeps working when the whole organization depends on it.',
  },
  {
    id: 'governance',
    label: 'Data Governance & Privacy',
    tagline: 'So data stays inside your rules',
    icon: 'lock',
    whatWeBuild:
      'PII handling at the data layer, access boundaries, data lineage, and retention controls.',
    whatYouGet:
      'A traceable record of what data the AI can reach and why — supporting your governance program, not working around it.',
  },
  {
    id: 'security',
    label: 'Security & Access Control',
    tagline: 'So it passes InfoSec review',
    icon: 'shield',
    whatWeBuild:
      'Single sign-on (SAML / OIDC), role-based access control, encryption in transit and at rest, and managed secrets.',
    whatYouGet:
      'A system built to your security baseline, so review is a checkpoint you pass — not a wall at the end.',
  },
];

const CORE = {
  id: 'core',
  label: 'Your AI capability',
  tagline: 'ML model · generative AI · agent',
  icon: 'cpu',
  whatWeBuild:
    'The AI itself — a custom model, a generative-AI system (RAG, agents, LLM features), or an autonomous agent, scoped with you.',
  whatYouGet:
    'The capability that creates the value — wrapped in everything around it that production actually requires.',
};

function LayerIcon({ type, className }: { type: string; className?: string }) {
  const base = cn('w-5 h-5', className);
  switch (type) {
    case 'users':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'activity':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'boxes':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
          <path d="m7 16.5-4.74-2.85M7 16.5l5-3M7 16.5v5.17" />
          <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
          <path d="m17 16.5-5-3M17 16.5l4.74-2.85M17 16.5v5.17M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
          <path d="M12 8 7.26 5.15M12 8l4.74-2.85M12 8v5.5" />
        </svg>
      );
    case 'lock':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'cpu':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
        </svg>
      );
    default:
      return null;
  }
}

// "wraps" connector for the mobile vertical stack
function WrapConnector() {
  return (
    <div className="lg:hidden flex flex-col items-center py-1" aria-hidden="true">
      <svg viewBox="0 0 24 20" className="w-5 h-5 text-brand-400/40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 V16" strokeDasharray="3 3" />
        <path d="M7 11 L12 16 L17 11" />
      </svg>
    </div>
  );
}

export function EnterpriseAiDeliveryWrapper() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  const allItems = [...LAYERS, CORE];
  const focused = allItems.find((i) => i.id === focusedId) ?? null;

  return (
    <Section tone="dark">
      <Container>
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            The Enterprise Delivery Wrapper
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            The model is the easy part.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            A working model is the center, not the finish line. What carries it across the
            pilot-to-production gap is everything wrapped around it — and that wrapper is
            what we build.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
          {/* ─── Desktop: concentric nested frames (lg+) ─── */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl border border-brand-400/25 bg-glass-bg p-4">
              <p className="absolute -top-3 left-6 px-2 bg-surface-dark text-xs font-semibold tracking-wider uppercase text-brand-300/80">
                Governed enterprise production
              </p>

              {/* nest the layers, outermost first */}
              {(() => {
                // build from innermost (core) outward so each layer contains the next
                let node = (
                  <button
                    onClick={() => handleToggle(CORE.id)}
                    aria-expanded={focusedId === CORE.id}
                    className={cn(
                      'group w-full rounded-xl border text-center px-4 py-5 transition-all duration-300',
                      focusedId === CORE.id
                        ? 'bg-accent-500/15 border-accent-400/50 ring-1 ring-accent-400/30'
                        : 'bg-accent-500/10 border-accent-400/30 hover:border-accent-400/50',
                      focusedId !== null && focusedId !== CORE.id && 'opacity-40',
                    )}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1 text-accent-200">
                      <LayerIcon type={CORE.icon} />
                      <span className="text-sm font-bold text-text-light">{CORE.label}</span>
                    </div>
                    <span className="text-xs text-accent-200/70">{CORE.tagline}</span>
                  </button>
                );

                // wrap inner→outer: iterate LAYERS reversed (security innermost ... adoption outermost)
                for (let i = LAYERS.length - 1; i >= 0; i--) {
                  const layer = LAYERS[i];
                  const isFocused = focusedId === layer.id;
                  const isDimmed = focusedId !== null && !isFocused;
                  const inner = node;
                  node = (
                    <div
                      key={layer.id}
                      className={cn(
                        'rounded-xl border p-3 transition-all duration-300',
                        isFocused
                          ? 'bg-surface-elevated border-brand-400/50 ring-1 ring-brand-400/25'
                          : 'bg-brand-500/[0.06] border-brand-400/20',
                        isDimmed && 'opacity-40',
                      )}
                    >
                      <button
                        onClick={() => handleToggle(layer.id)}
                        aria-expanded={isFocused}
                        className="w-full flex items-center gap-2 mb-2 text-left rounded-lg px-1 py-0.5 hover:text-brand-200"
                      >
                        <span className="text-brand-300 flex-shrink-0">
                          <LayerIcon type={layer.icon} />
                        </span>
                        <span className="text-sm font-semibold text-text-light leading-tight">
                          {layer.label}
                        </span>
                      </button>
                      {inner}
                    </div>
                  );
                }
                return node;
              })()}
            </div>
            <p className="text-center text-xs text-text-light/35 mt-4">
              Click any layer to see what we build and what your team receives.
            </p>
          </div>

          {/* ─── Detail panel (desktop) ─── */}
          <div className="hidden lg:block">
            {focused ? (
              <div className="rounded-2xl border border-brand-400/30 bg-surface-elevated p-7">
                <div className="flex items-center gap-3 mb-1">
                  <span className={cn(focused.id === 'core' ? 'text-accent-300' : 'text-brand-300')}>
                    <LayerIcon type={focused.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-xl font-bold text-text-light">{focused.label}</h3>
                </div>
                <p className="text-sm text-brand-300/70 mb-5">{focused.tagline}</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                      What we build
                    </p>
                    <p className="text-sm text-text-light/80 leading-relaxed">{focused.whatWeBuild}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                      What your team gets
                    </p>
                    <p className="text-sm text-text-light/80 leading-relaxed">{focused.whatYouGet}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-glass-border bg-glass-bg p-7">
                <p className="text-lg font-semibold text-text-light mb-3">
                  Why pilots stall — and why this one won&apos;t.
                </p>
                <p className="text-sm text-text-light/75 leading-relaxed mb-4">
                  Enterprise AI rarely fails because the model is wrong. It fails because the
                  wrapper around it was never built: it couldn&apos;t pass InfoSec review,
                  couldn&apos;t scale past the demo, broke a governance rule, or had no plan
                  for the day after launch.
                </p>
                <p className="text-sm text-text-light/75 leading-relaxed">
                  Each layer here is one of those gates. We build them in from the first sprint
                  so the AI reaches production — and stays there.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ─── Mobile: vertical stack, outermost → core (< lg) ─── */}
        <div className="lg:hidden max-w-lg mx-auto">
          <p className="text-center text-xs font-semibold tracking-wider uppercase text-brand-300/80 mb-4">
            Governed enterprise production — outer to core
          </p>
          {LAYERS.map((layer) => {
            const isFocused = focusedId === layer.id;
            const isDimmed = focusedId !== null && !isFocused;
            return (
              <div key={layer.id}>
                <button
                  onClick={() => handleToggle(layer.id)}
                  aria-expanded={isFocused}
                  className={cn(
                    'w-full text-left rounded-xl p-4 border transition-all duration-300',
                    isFocused
                      ? 'bg-surface-elevated border-brand-400/50'
                      : 'bg-brand-500/[0.06] border-brand-400/20',
                    isDimmed && 'opacity-40',
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-brand-300 flex-shrink-0">
                      <LayerIcon type={layer.icon} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-text-light leading-tight">{layer.label}</h3>
                      <p className="text-xs text-brand-300/70">{layer.tagline}</p>
                    </div>
                  </div>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isFocused ? 'max-h-72 opacity-100 mt-3' : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className="pt-3 border-t border-brand-400/20 space-y-3">
                      <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          What we build
                        </p>
                        <p className="text-xs text-text-light/75 leading-relaxed">{layer.whatWeBuild}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                          What your team gets
                        </p>
                        <p className="text-xs text-text-light/75 leading-relaxed">{layer.whatYouGet}</p>
                      </div>
                    </div>
                  </div>
                </button>
                <WrapConnector />
              </div>
            );
          })}

          {/* Core card (most protected, at the bottom) */}
          <button
            onClick={() => handleToggle(CORE.id)}
            aria-expanded={focusedId === CORE.id}
            className={cn(
              'w-full text-left rounded-xl p-4 border transition-all duration-300',
              focusedId === CORE.id
                ? 'bg-accent-500/15 border-accent-400/50'
                : 'bg-accent-500/10 border-accent-400/30',
              focusedId !== null && focusedId !== CORE.id && 'opacity-40',
            )}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-accent-200 flex-shrink-0">
                <LayerIcon type={CORE.icon} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-text-light leading-tight">{CORE.label}</h3>
                <p className="text-xs text-accent-200/70">{CORE.tagline}</p>
              </div>
            </div>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                focusedId === CORE.id ? 'max-h-72 opacity-100 mt-3' : 'max-h-0 opacity-0',
              )}
            >
              <div className="pt-3 border-t border-accent-400/25 space-y-3">
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                    What we build
                  </p>
                  <p className="text-xs text-text-light/75 leading-relaxed">{CORE.whatWeBuild}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1">
                    What your team gets
                  </p>
                  <p className="text-xs text-text-light/75 leading-relaxed">{CORE.whatYouGet}</p>
                </div>
              </div>
            </div>
          </button>

          <p className="text-center text-xs text-text-light/35 mt-6">
            Tap any layer to see what we build and what your team receives.
          </p>
        </div>
      </Container>
    </Section>
  );
}
