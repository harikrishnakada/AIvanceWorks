/**
 * ApiRequestLifecycle — signature section for the API Development page.
 *
 * Visualization pattern: Hierarchical / architectural (catalog §8.3 #2) — the anatomy of a
 *   production-grade API. A single request descends through the hardening layers it must pass
 *   before it ever touches your data — gateway → authentication → rate limiting → validation →
 *   business logic → data — with the entire stack framed by one published, versioned contract
 *   and wrapped by observability.
 *
 * Emotional argument: "Returning JSON is easy. We build the layers around it that make an API
 *   safe to expose, version, and depend on." The layered descent shows that a production API is
 *   a sequence of guarantees, not a single endpoint — a relationship a FeatureGrid cannot express.
 *
 * Why this earns its place over a standard grid: a grid lists capabilities as peers; this shows
 *   their ORDER and CONTAINMENT — each layer protects the one beneath it, and all of them live
 *   inside a contract — which is exactly the mental model that separates a real API from a bare
 *   endpoint in a technical buyer's mind.
 *
 * Token discipline: layers use glass/brand tokens only; the business-logic/data core is brand-
 *   emphasized, the hardening layers are glass. No raw shades, no hex. Flipping data-theme
 *   re-skins cleanly.
 *
 * Desktop (lg+): a centered vertical stack of layer rows with a "Versioned contract" cap above
 *   and a "Your data" base below; flanking rails label the contract (left) and observability
 *   (right). Selecting a layer expands its guarantee detail inline and dims the others.
 *
 * Mobile (< lg): identical top-to-bottom flow — the stack is already vertical, so it simply goes
 *   full-width; the flanking contract/observability rails move to inline caption chips above and
 *   below the stack. Selecting a layer expands its detail beneath it. No horizontal scrolling.
 *
 * Accessibility: each layer is a real <button> with aria-expanded / aria-controls pointing at its
 *   detail region; connectors and the descent arrow are aria-hidden. Focus-visible ring on every
 *   control. Animation gated behind motion-safe:.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

type LayerAccent = 'guard' | 'core';

interface ApiLayer {
  id: string;
  label: string;
  role: string;
  /** what this layer guarantees — revealed on expand */
  guarantee: string;
  accent: LayerAccent;
}

const LAYERS: ApiLayer[] = [
  {
    id: 'gateway',
    label: 'Gateway & transport',
    role: 'A single, encrypted front door',
    guarantee:
      'Every request arrives over TLS at one managed entry point — so routing, policy, and certificates live in one place instead of scattered across services.',
    accent: 'guard',
  },
  {
    id: 'auth',
    label: 'Authentication & authorization',
    role: 'Who is calling — and what they may do',
    guarantee:
      'OAuth 2.0, OpenID Connect, API keys, or JWTs identify the caller; scope- and role-based rules decide what that caller is allowed to touch. Unidentified requests stop here.',
    accent: 'guard',
  },
  {
    id: 'rate-limit',
    label: 'Rate limiting & quotas',
    role: 'Fair, stable throughput for everyone',
    guarantee:
      'Per-consumer quotas and throttling keep one noisy or runaway caller from degrading the API for everyone else — and give you a deliberate lever for partner and tier limits.',
    accent: 'guard',
  },
  {
    id: 'validation',
    label: 'Validation & error contract',
    role: 'Malformed input rejected predictably',
    guarantee:
      'Requests are validated against the contract and rejected with consistent, documented error responses — so bad input never reaches your logic and consumers always get the same predictable shape.',
    accent: 'guard',
  },
  {
    id: 'logic',
    label: 'Business logic',
    role: 'Your actual capability',
    guarantee:
      'Only clean, authenticated, in-budget requests reach the code that does the real work — the part that produces the answer your consumers came for.',
    accent: 'core',
  },
  {
    id: 'data',
    label: 'Data access',
    role: 'Reads and writes, scoped to the caller',
    guarantee:
      'Data is read and written through a layer scoped to what this caller is permitted to see and change — keeping the persistence layer separate from transport and access concerns.',
    accent: 'core',
  },
];

const ACCENT_STYLES: Record<
  LayerAccent,
  { card: string; active: string; badge: string; label: string }
> = {
  guard: {
    card: 'bg-glass-bg border-glass-border hover:border-brand-400/40',
    active: 'bg-surface-elevated border-brand-400/60',
    badge: 'bg-brand-500/20 text-brand-200',
    label: 'text-brand-200',
  },
  core: {
    card: 'bg-glass-bg border-glass-border hover:border-accent-400/40',
    active: 'bg-surface-elevated border-accent-400/50',
    badge: 'bg-accent-500/20 text-accent-200',
    label: 'text-accent-300',
  },
};

export function ApiRequestLifecycle() {
  const [openId, setOpenId] = useState<string | null>('auth');

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <Section tone="dark" withGrid>
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            The anatomy of a production API
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
            Returning JSON is easy. The layers around it are the work.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg leading-relaxed">
            A real API is what a request passes through before it ever reaches your data —
            and all of it lives inside one published, versioned contract. Here is every layer
            we build.
          </p>
        </div>

        {/* Contract cap */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-brand-400/40 bg-surface-elevated px-5 py-3 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-200">
              Versioned contract · OpenAPI / GraphQL
            </span>
            <p className="text-xs text-text-light/55 mt-1">
              The shape every request and response is held to — published before code.
            </p>
          </div>

          {/* Flanking rail chips (rendered inline on all sizes, kept lightweight) */}
          <div className="flex items-center justify-between gap-3 mt-3 text-[10px] font-semibold uppercase tracking-wider text-text-light/40">
            <span>↓ Request descends</span>
            <span>Observability wraps every layer</span>
          </div>

          {/* ── Layer stack ── */}
          <div className="mt-3 flex flex-col gap-2">
            {LAYERS.map((layer, i) => {
              const styles = ACCENT_STYLES[layer.accent];
              const isOpen = openId === layer.id;
              const isDimmed = openId !== null && !isOpen;
              const panelId = `api-layer-${layer.id}`;
              return (
                <div key={layer.id} className="flex flex-col">
                  <button
                    onClick={() => toggle(layer.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={cn(
                      'text-left rounded-xl border px-5 py-4 motion-safe:transition-all motion-safe:duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50',
                      isOpen ? styles.active : styles.card,
                      isDimmed && 'opacity-50',
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={cn(
                            'shrink-0 text-xs font-bold w-6 h-6 rounded flex items-center justify-center',
                            styles.badge,
                          )}
                        >
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <p className={cn('text-base font-bold leading-snug', styles.label)}>
                            {layer.label}
                          </p>
                          <p className="text-sm text-text-light/65 leading-relaxed">
                            {layer.role}
                          </p>
                        </div>
                      </div>
                      <span className="text-text-light/40 text-sm shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      className="mt-2 rounded-xl border border-glass-border bg-glass-bg p-5 motion-safe:animate-fade-in"
                    >
                      <p className="text-xs font-semibold tracking-widest uppercase text-brand-300 mb-2">
                        What this layer guarantees
                      </p>
                      <p className="text-sm text-text-light/75 leading-relaxed">
                        {layer.guarantee}
                      </p>
                    </div>
                  )}

                  {i < LAYERS.length - 1 && (
                    <span
                      className="self-center text-brand-400/40 text-sm leading-none my-0.5"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Data base */}
          <div className="mt-3 rounded-xl border border-accent-400/30 bg-surface-elevated px-5 py-3 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-300">
              Your data — reached only by requests that cleared every layer
            </span>
          </div>
        </div>

        {/* Perimeter note */}
        <p className="text-center text-xs text-text-light/35 mt-8 font-medium tracking-wide">
          One contract · hardened by default · versioned so consumers never break
        </p>
        <p className="text-center text-xs text-text-light/30 mt-4 hidden lg:block">
          Select any layer to see what it guarantees.
        </p>
      </Container>
    </Section>
  );
}
