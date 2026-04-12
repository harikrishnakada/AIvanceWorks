/**
 * CiCdPipelineBlueprint — signature section for the DevOps service page.
 *
 * Desktop: A three-lane horizontal pipeline diagram representing the complete
 *   CI/CD lifecycle — Build, Deploy, Operate. Each lane contains 3-4 stages.
 *   Click any stage to expand details showing what we implement, which tools
 *   are involved, and what the client's team gets at handoff.
 * Mobile (< lg): Lanes stack as full-width cards. Each card shows the lane
 *   icon, title, and stage list. Tap any stage to expand details. The horizontal
 *   three-lane grid becomes a vertical list of three lane cards.
 *
 * Interactive: click any stage to focus it (dims others, reveals implementation
 *   details and tools). Matches InfraOpsControlPlane focus pattern.
 *
 * Visualization pattern: Architectural (catalog pattern 2) + Process (pattern 3).
 * Emotional argument: "We build the complete CI/CD system — from commit to
 *   production to monitoring — with gates at every stage, so your deployments
 *   are fast, safe, and your team can operate them on day one."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface Stage {
  id: string;
  name: string;
  description: string;
  tools: string[];
  handoff: string;
}

interface Lane {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  stages: Stage[];
}

const LANES: Lane[] = [
  {
    id: 'build',
    title: 'Build',
    subtitle: 'From commit to artifact',
    icon: 'hammer',
    stages: [
      {
        id: 'source',
        name: 'Source & Branch Policy',
        description:
          'Branch protection rules, PR checks, and merge policies that enforce code review and test passage before anything reaches the main branch.',
        tools: ['GitHub', 'Azure Repos', 'Branch Policies'],
        handoff: 'Branch policy configuration, PR template, merge rules document',
      },
      {
        id: 'compile',
        name: 'Compile & Lint',
        description:
          'Automated compilation, linting, and static analysis on every commit. Build failures block the pipeline immediately — no broken code advances.',
        tools: ['MSBuild', 'npm/yarn', 'ESLint', 'dotnet build'],
        handoff: 'Build pipeline definitions, lint configuration, build agent setup',
      },
      {
        id: 'test',
        name: 'Automated Testing',
        description:
          'Unit tests, integration tests, and code coverage checks run on every build. Coverage thresholds enforced as pipeline gates — not suggestions.',
        tools: ['xUnit', 'Jest', 'Playwright', 'Coverlet'],
        handoff: 'Test pipeline stage, coverage thresholds, test report integration',
      },
      {
        id: 'artifact',
        name: 'Artifact & Registry',
        description:
          'Versioned build artifacts published to a container registry or package feed. Every production deployment traces back to a specific, immutable artifact.',
        tools: ['Docker', 'ACR', 'NuGet', 'npm Registry'],
        handoff: 'Registry configuration, versioning scheme, artifact retention policy',
      },
    ],
  },
  {
    id: 'deploy',
    title: 'Deploy',
    subtitle: 'From artifact to production',
    icon: 'rocket',
    stages: [
      {
        id: 'dev',
        name: 'Dev Environment',
        description:
          'Automatic deployment on every merge to the development branch. Developers see their changes running in minutes, with isolated configuration and data.',
        tools: ['Azure DevOps', 'GitHub Actions', 'Terraform'],
        handoff: 'Dev pipeline trigger, environment configuration, deployment runbook',
      },
      {
        id: 'staging',
        name: 'Staging + Approval Gate',
        description:
          'Production-mirror environment with an approval gate. Smoke tests and integration tests run automatically. Human approval required before production promotion.',
        tools: ['Approval Gates', 'Smoke Tests', 'Azure Slots'],
        handoff: 'Staging pipeline, approval workflow, smoke test suite, gate criteria',
      },
      {
        id: 'production',
        name: 'Production Deploy',
        description:
          'Blue-green or rolling deployment with health checks. Traffic shifts only after validation passes. Instant rollback to the previous version if health checks fail.',
        tools: ['Blue-Green', 'Canary', 'Health Probes', 'Helm'],
        handoff: 'Production deploy pipeline, rollback procedure, deployment checklist',
      },
    ],
  },
  {
    id: 'operate',
    title: 'Operate',
    subtitle: 'From deployment to confidence',
    icon: 'pulse',
    stages: [
      {
        id: 'monitor',
        name: 'Monitoring & Dashboards',
        description:
          'Application performance, error rates, and infrastructure metrics visualized in real-time dashboards. Your team sees what is happening after every deployment.',
        tools: ['Application Insights', 'Grafana', 'Log Analytics'],
        handoff: 'Dashboard configurations, metric definitions, baseline documentation',
      },
      {
        id: 'alert',
        name: 'Alerting & Runbooks',
        description:
          'Alert rules tied to meaningful thresholds, not noise. Every alert has a documented runbook so the on-call engineer knows what to do — not just that something is wrong.',
        tools: ['Azure Monitor', 'PagerDuty', 'Opsgenie'],
        handoff: 'Alert rules, escalation procedures, runbook per alert, SLO definitions',
      },
      {
        id: 'rollback',
        name: 'Rollback & Recovery',
        description:
          'One-click rollback to the previous known-good deployment. Automated rollback triggers when post-deploy health checks fail. Recovery is fast, tested, and documented.',
        tools: ['Pipeline Rollback', 'Health Probes', 'Feature Flags'],
        handoff: 'Rollback procedures, recovery runbook, feature flag configuration',
      },
    ],
  },
];

// SVG lane icons
function LaneIcon({ type, className }: { type: string; className?: string }) {
  const baseClass = cn('w-7 h-7', className);

  switch (type) {
    case 'hammer':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0s-.83-2.17 0-3L12 9" />
          <path d="M17.64 15 22 10.64" />
          <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V6.5a.5.5 0 0 0-.5-.5H16.5c-.85 0-1.65-.33-2.25-.93L13 3.82" />
          <path d="m18 16 4 4" />
          <path d="m12 8 4-4" />
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
    default:
      return null;
  }
}

export function CiCdPipelineBlueprint() {
  const [focusedStage, setFocusedStage] = useState<string | null>(null);

  const handleToggle = (stageId: string) => {
    setFocusedStage((prev) => (prev === stageId ? null : stageId));
  };

  return (
    <Section tone="dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            Pipeline Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Build. Deploy. Operate.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            Three lanes, one system. Every stage is gated, every deployment is
            tracked, every alert has a runbook. Click any stage to see what your
            team gets at handoff.
          </p>
        </div>

        {/* ─── Desktop: three-column lane grid (lg+) ─── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {LANES.map((lane) => (
            <div key={lane.id} className="space-y-3">
              {/* Lane header */}
              <div className="flex items-center gap-3 px-2 mb-1">
                <div className="text-brand-300">
                  <LaneIcon type={lane.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-light">{lane.title}</h3>
                  <p className="text-xs text-brand-300 font-medium">{lane.subtitle}</p>
                </div>
              </div>

              {/* Connecting line */}
              <div className="h-px bg-brand-400/15 mx-2" />

              {/* Stages */}
              {lane.stages.map((stage) => {
                const isFocused = focusedStage === stage.id;
                const isDimmed = focusedStage !== null && !isFocused;

                return (
                  <button
                    key={stage.id}
                    onClick={() => handleToggle(stage.id)}
                    className={cn(
                      'w-full text-left rounded-lg p-4 transition-all duration-300 border',
                      isFocused
                        ? 'bg-surface-elevated border-brand-400/40 ring-1 ring-brand-400/20'
                        : 'bg-glass-bg border-glass-border',
                      isDimmed && 'opacity-30',
                      !focusedStage && 'hover:bg-surface-elevated/60 hover:border-brand-400/20',
                    )}
                    aria-expanded={isFocused}
                  >
                    {/* Stage name */}
                    <h4 className="text-sm font-bold text-text-light mb-1">{stage.name}</h4>

                    {/* Description (always visible) */}
                    <p className="text-xs text-text-light/60 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Expanded detail */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        isFocused ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0',
                      )}
                    >
                      <div className="pt-3 border-t border-brand-400/20 space-y-2.5">
                        {/* Tools */}
                        <div>
                          <p className="text-[10px] font-semibold tracking-wider uppercase text-brand-300/80 mb-1">
                            Tools
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {stage.tools.map((tool) => (
                              <span
                                key={tool}
                                className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-medium bg-brand-500/10 text-brand-200 border border-brand-400/15"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Handoff */}
                        <div>
                          <p className="text-[10px] font-semibold tracking-wider uppercase text-accent-300 mb-1">
                            Your team gets
                          </p>
                          <p className="text-xs text-text-light/75 leading-relaxed">
                            {stage.handoff}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* ─── Mobile: stacked lane cards (< lg) ─── */}
        <div className="lg:hidden space-y-6">
          {LANES.map((lane) => (
            <div key={lane.id}>
              {/* Lane header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-brand-300">
                  <LaneIcon type={lane.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-light">{lane.title}</h3>
                  <p className="text-xs text-brand-300 font-medium">{lane.subtitle}</p>
                </div>
              </div>

              {/* Stages */}
              <div className="space-y-2">
                {lane.stages.map((stage) => {
                  const isFocused = focusedStage === stage.id;
                  const isDimmed = focusedStage !== null && !isFocused;

                  return (
                    <button
                      key={stage.id}
                      onClick={() => handleToggle(stage.id)}
                      className={cn(
                        'w-full text-left rounded-lg p-4 transition-all duration-300 border',
                        isFocused
                          ? 'bg-surface-elevated border-brand-400/40'
                          : 'bg-glass-bg border-glass-border',
                        isDimmed && 'opacity-30',
                      )}
                      aria-expanded={isFocused}
                    >
                      <h4 className="text-sm font-bold text-text-light mb-1">{stage.name}</h4>
                      <p className="text-xs text-text-light/60 leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Expanded detail */}
                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-300',
                          isFocused ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0',
                        )}
                      >
                        <div className="pt-3 border-t border-brand-400/20 space-y-2.5">
                          <div>
                            <p className="text-[10px] font-semibold tracking-wider uppercase text-brand-300/80 mb-1">
                              Tools
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {stage.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-medium bg-brand-500/10 text-brand-200 border border-brand-400/15"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold tracking-wider uppercase text-accent-300 mb-1">
                              Your team gets
                            </p>
                            <p className="text-xs text-text-light/75 leading-relaxed">
                              {stage.handoff}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-text-light/40 mt-8">
          Click any stage to see what your team receives at handoff.
        </p>
      </Container>
    </Section>
  );
}
