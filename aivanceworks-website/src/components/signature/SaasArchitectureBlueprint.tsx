/**
 * SaasArchitectureBlueprint — signature section for SaaS Development page.
 *
 * Desktop: 5 horizontal architecture layers in a vertical stack, each
 *   expandable on click to reveal component details. Connected by flow
 *   indicators between layers.
 * Mobile (< lg): layers stack vertically as full-width cards. Side
 *   annotations become inline labels above each card. Flow indicators
 *   simplify to vertical arrows between cards.
 *
 * Interactive: click any layer to focus it (dims others, expands detail).
 *   Matches MvpDualTrackRoadmap phase-focus pattern.
 *
 * Visualization pattern: Hierarchical / architectural (catalog pattern 2).
 * Emotional argument: "We've thought through every layer of your SaaS
 *   platform — this isn't a web app with billing bolted on."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface ArchitectureLayer {
  id: string;
  title: string;
  subtitle: string;
  components: { name: string; detail: string }[];
  accent?: boolean;
}

const LAYERS: ArchitectureLayer[] = [
  {
    id: 'clients',
    title: 'Client Applications',
    subtitle: 'Web, mobile, and API consumers',
    components: [
      { name: 'Web App (React / Next.js)', detail: 'Server-rendered SPA with tenant-aware routing and white-label theming' },
      { name: 'Mobile (React Native / PWA)', detail: 'Cross-platform mobile with offline sync and push notifications' },
      { name: 'Public API', detail: 'Versioned REST API with OpenAPI docs for third-party integrations' },
    ],
  },
  {
    id: 'gateway',
    title: 'API Gateway & Auth',
    subtitle: 'Tenant resolution, identity, and rate limiting',
    components: [
      { name: 'Tenant Resolution', detail: 'Subdomain, header, or path-based tenant identification on every request' },
      { name: 'Authentication', detail: 'JWT with refresh rotation, SSO via SAML/OIDC, MFA for enterprise tenants' },
      { name: 'Rate Limiting', detail: 'Per-tenant, per-plan quotas enforced at the gateway layer' },
    ],
  },
  {
    id: 'services',
    title: 'Core SaaS Services',
    subtitle: 'Billing, tenants, flags, notifications, analytics',
    accent: true,
    components: [
      { name: 'Subscription Billing', detail: 'Stripe integration — plans, metering, proration, dunning, invoicing' },
      { name: 'Tenant Management', detail: 'Provisioning, configuration, branding, and lifecycle for each tenant' },
      { name: 'Feature Flags', detail: 'Per-tenant and per-plan feature toggles for controlled rollouts' },
      { name: 'Notifications', detail: 'Email, in-app, and webhook delivery with tenant-scoped templates' },
      { name: 'Analytics Engine', detail: 'MRR, churn, usage, and tenant health metrics in real time' },
    ],
  },
  {
    id: 'data',
    title: 'Data Layer',
    subtitle: 'Tenant-isolated storage, cache, and messaging',
    components: [
      { name: 'Tenant Databases', detail: 'Per-tenant or row-level isolation with connection pooling and migrations' },
      { name: 'Cache (Redis)', detail: 'Tenant-scoped caching for sessions, feature flags, and hot data' },
      { name: 'Message Queue', detail: 'Async job processing for billing events, notifications, and data pipelines' },
    ],
  },
  {
    id: 'infra',
    title: 'Cloud Infrastructure',
    subtitle: 'Azure or AWS, IaC, monitoring, CDN',
    accent: true,
    components: [
      { name: 'Infrastructure as Code', detail: 'Terraform or Bicep for reproducible, auditable infrastructure' },
      { name: 'Autoscaling & Deploys', detail: 'Horizontal scaling with zero-downtime blue-green deployments' },
      { name: 'Observability', detail: 'Structured logging, distributed tracing, and alerting per tenant and service' },
    ],
  },
];

export const SaasArchitectureBlueprint = () => {
  const [focusedLayer, setFocusedLayer] = useState<string | null>(null);

  const handleLayerClick = (id: string) => {
    setFocusedLayer((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" id="signature">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            Platform Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Every layer, purpose-built for SaaS
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-base lg:text-lg">
            Not a web app with billing bolted on. A platform architecture
            designed from the data layer up for multi-tenancy, subscription
            monetisation, and horizontal scale.
          </p>
          <p className="text-text-light/40 text-sm mt-3">
            Click any layer to explore its components
          </p>
        </div>

        {/* Architecture stack */}
        <div className="relative max-w-3xl mx-auto space-y-3 lg:space-y-4">
          {LAYERS.map((layer, idx) => {
            const isFocused = focusedLayer === layer.id;
            const isDimmed = focusedLayer !== null && !isFocused;

            return (
              <div key={layer.id}>
                {/* Flow indicator between layers */}
                {idx > 0 && (
                  <div className="flex justify-center -mt-3 -mb-3 lg:-mt-4 lg:-mb-4 relative z-0">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-px h-3 lg:h-4 bg-brand-400/20" />
                      <svg width="8" height="6" viewBox="0 0 8 6" className="text-brand-400/30">
                        <path d="M0,0 L4,6 L8,0" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Layer card */}
                <button
                  type="button"
                  onClick={() => handleLayerClick(layer.id)}
                  aria-expanded={isFocused}
                  aria-label={`${layer.title} — ${isFocused ? 'click to collapse' : 'click to expand'}`}
                  className={cn(
                    'w-full text-left rounded-xl border transition-all duration-300 relative z-10',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                    layer.accent
                      ? 'border-accent-500/20 bg-accent-500/[0.06]'
                      : 'border-brand-400/15 bg-brand-500/[0.06]',
                    isFocused && 'ring-1 ring-brand-400/30 shadow-glow',
                    isFocused && layer.accent && 'ring-accent-400/30',
                    isDimmed && 'opacity-40',
                  )}
                >
                  {/* Layer header */}
                  <div className="px-5 py-4 lg:px-6 lg:py-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className={cn(
                            'inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold',
                            layer.accent
                              ? 'bg-accent-500/20 text-accent-400'
                              : 'bg-brand-500/20 text-brand-400',
                          )}
                        >
                          {idx + 1}
                        </span>
                        <h3 className="text-base lg:text-lg font-semibold text-text-light">
                          {layer.title}
                        </h3>
                      </div>
                      <p className="text-sm text-text-light/50 ml-10">
                        {layer.subtitle}
                      </p>
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
                        {layer.components.map((comp) => (
                          <div
                            key={comp.name}
                            className={cn(
                              'rounded-lg p-3 border',
                              layer.accent
                                ? 'bg-accent-500/[0.04] border-accent-500/10'
                                : 'bg-brand-500/[0.04] border-brand-400/10',
                            )}
                          >
                            <p className={cn(
                              'text-sm font-medium mb-1',
                              layer.accent ? 'text-accent-400' : 'text-brand-300',
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
            );
          })}

          {/* Side annotations — desktop only */}
          <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300/40"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Multi-Tenant Isolation
            </p>
          </div>
          <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-300/40"
              style={{ writingMode: 'vertical-rl' }}
            >
              Horizontal Scale
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
