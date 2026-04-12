/**
 * InfraOpsControlPlane — signature section for Cloud Infrastructure & Operations page.
 *
 * Desktop: A four-quadrant operational control plane. Each quadrant represents
 *   a lifecycle domain — Provision (IaC), Deploy (CI/CD), Observe (monitoring),
 *   and Recover (DR). Click any quadrant to expand details showing what we
 *   implement and what the client's team gets handed over.
 * Mobile (< lg): Quadrants stack as full-width cards. Each card shows the domain
 *   icon, title, summary, and an expand-to-reveal panel with deliverables.
 *   The 2×2 grid becomes a vertical list. Tap to expand.
 *
 * Interactive: click any quadrant to focus it (dims others, reveals deliverables
 *   and handoff artifacts). Matches CloudReadinessMatrix focus pattern.
 *
 * Visualization pattern: Architectural (catalog pattern 2) + Process (pattern 3).
 * Emotional argument: "We build a complete operational control plane — not just
 *   servers, but the full lifecycle from provisioning through recovery, designed
 *   for your team to own."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface Quadrant {
  id: string;
  domain: string;
  icon: string;
  tagline: string;
  description: string;
  tools: string[];
  handoff: string;
}

const QUADRANTS: Quadrant[] = [
  {
    id: 'provision',
    domain: 'Provision',
    icon: 'code',
    tagline: 'Infrastructure as Code',
    description:
      'Every resource defined in version-controlled Terraform or Bicep modules. Environments provisioned from code, drift-detected, peer-reviewed.',
    tools: ['Terraform', 'Bicep', 'Pulumi', 'Azure Landing Zones'],
    handoff: 'IaC repository with module documentation, PR-based change workflow, drift detection pipeline',
  },
  {
    id: 'deploy',
    domain: 'Deploy',
    icon: 'rocket',
    tagline: 'CI/CD Pipelines',
    description:
      'Automated deployment pipelines with environment promotion, testing gates, and one-click rollback. No manual deployments, no SSH-to-prod.',
    tools: ['Azure DevOps', 'GitHub Actions', 'Helm', 'ArgoCD'],
    handoff: 'Pipeline definitions, deployment runbooks, rollback procedures, environment promotion guide',
  },
  {
    id: 'observe',
    domain: 'Observe',
    icon: 'pulse',
    tagline: 'Monitoring & Alerting',
    description:
      'Full-stack observability: application performance, infrastructure metrics, log aggregation, and custom dashboards. Every alert has a documented runbook.',
    tools: ['Application Insights', 'Log Analytics', 'Grafana', 'Azure Monitor'],
    handoff: 'Dashboard configurations, alert rules with runbooks, escalation procedures, SLO definitions',
  },
  {
    id: 'recover',
    domain: 'Recover',
    icon: 'shield',
    tagline: 'Disaster Recovery',
    description:
      'Geo-redundant backups, failover automation, and tested recovery procedures. RPO/RTO targets defined per workload and verified through DR drills.',
    tools: ['Azure Site Recovery', 'Geo-Replication', 'Backup Policies', 'Failover Groups'],
    handoff: 'DR runbooks, tested recovery procedures, RPO/RTO documentation, DR drill schedule',
  },
];

// SVG icon paths for each domain
function QuadrantIcon({ type, className }: { type: string; className?: string }) {
  const baseClass = cn('w-8 h-8', className);

  switch (type) {
    case 'code':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="2" x2="12" y2="22" opacity="0.3" strokeDasharray="2 2" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case 'pulse':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

export function InfraOpsControlPlane() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            Operational Lifecycle
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Four Domains. One Control Plane.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            We don&apos;t just set up servers. We build the complete operational lifecycle
            — provision, deploy, observe, recover — so your infrastructure runs
            like a platform, not a collection of resources.
          </p>
        </div>

        {/* ─── Desktop 2×2 grid (lg+) ─── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {QUADRANTS.map((q) => {
            const isFocused = focusedId === q.id;
            const isDimmed = focusedId !== null && !isFocused;

            return (
              <button
                key={q.id}
                onClick={() => handleToggle(q.id)}
                className={cn(
                  'relative text-left rounded-xl p-6 transition-all duration-300 border',
                  isFocused
                    ? 'bg-surface-elevated border-brand-400/40 ring-1 ring-brand-400/20'
                    : 'bg-glass-bg border-glass-border',
                  isDimmed && 'opacity-35',
                  !focusedId && 'hover:bg-surface-elevated/60 hover:border-brand-400/20',
                )}
                aria-expanded={isFocused}
              >
                {/* Domain header */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-brand-300">
                    <QuadrantIcon type={q.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-light">{q.domain}</h3>
                    <p className="text-sm text-brand-300 font-medium">{q.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-light/70 leading-relaxed mb-3">
                  {q.description}
                </p>

                {/* Tools chips */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {q.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-brand-500/10 text-brand-200 border border-brand-400/15"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Expanded handoff detail */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isFocused ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0',
                  )}
                >
                  <div className="pt-3 border-t border-brand-400/20">
                    <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1.5">
                      What your team gets
                    </p>
                    <p className="text-sm text-text-light/80 leading-relaxed">
                      {q.handoff}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ─── Center connecting element (desktop) ─── */}
        <div className="hidden lg:flex justify-center -mt-[calc(50%_-_2rem)] pointer-events-none absolute inset-0 items-center">
          {/* Intentionally empty — the grid gap and visual alignment creates implicit connection */}
        </div>

        {/* ─── Mobile stacked cards (< lg) ─── */}
        <div className="lg:hidden space-y-3">
          {QUADRANTS.map((q) => {
            const isFocused = focusedId === q.id;
            const isDimmed = focusedId !== null && !isFocused;

            return (
              <button
                key={q.id}
                onClick={() => handleToggle(q.id)}
                className={cn(
                  'w-full text-left rounded-xl p-5 transition-all duration-300 border',
                  isFocused
                    ? 'bg-surface-elevated border-brand-400/40'
                    : 'bg-glass-bg border-glass-border',
                  isDimmed && 'opacity-35',
                )}
                aria-expanded={isFocused}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-brand-300">
                    <QuadrantIcon type={q.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-light">{q.domain}</h3>
                    <p className="text-xs text-brand-300 font-medium">{q.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-light/70 leading-relaxed mb-2">
                  {q.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {q.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-brand-500/10 text-brand-200 border border-brand-400/15"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Expanded handoff */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isFocused ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0',
                  )}
                >
                  <div className="pt-3 border-t border-brand-400/20">
                    <p className="text-xs font-semibold tracking-wider uppercase text-accent-300 mb-1.5">
                      What your team gets
                    </p>
                    <p className="text-sm text-text-light/80 leading-relaxed">
                      {q.handoff}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-text-light/40 mt-8">
          Click any domain to see what your team receives at handoff.
        </p>
      </Container>
    </Section>
  );
}
