/**
 * DataPipelineBlueprint — signature section for the Data Engineering service page.
 *
 * Desktop: A four-stage lakehouse architecture diagram displayed as a horizontal
 *   pipeline: Ingest → Store → Transform → Serve. Each stage is a column card
 *   with a stage label, toolchain chips, and a one-line role description.
 *   Click any stage to expand implementation details and what is handed off.
 * Mobile (< lg): Stages stack as full-width cards in vertical order — Ingest (top)
 *   through Serve (bottom). Horizontal flow arrows become vertical connectors.
 *   Each card shows the stage icon, title, tools, and an expand-to-reveal panel.
 *   Tap any card to expand implementation detail.
 *
 * Interactive: click/tap any stage to focus it (dims others, reveals implementation
 *   details and handoff artifacts). Matches InfraOpsControlPlane interaction pattern.
 *
 * Visualization pattern: Architectural (catalog pattern 2).
 * Emotional argument: "Here is every layer of your data stack — each stage has
 *   a defined responsibility, a toolchain, and clear handoff artifacts. No black boxes."
 *
 * Token compliance: all color references use token-backed Tailwind classes or
 *   CSS custom properties (var(--brand-*)). No raw color shades or hex values.
 * Accessibility: interactive buttons have aria-expanded, all SVG icons have
 *   aria-hidden="true", section heading is an h2.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface PipelineStage {
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

const STAGES: PipelineStage[] = [
  {
    id: 'ingest',
    number: 1,
    title: 'Ingest',
    subtitle: 'Bring data in',
    icon: 'arrow-down',
    role: 'Raw data arrives exactly as the source sends it — no transformation, no loss.',
    tools: ['Airbyte', 'Fivetran', 'Kafka', 'Custom connectors'],
    whatWeImplement:
      'Source connectors for SaaS systems, databases, and event streams. CDC for real-time sources. Idempotent runs with schema drift detection at the point of ingestion.',
    handoff: 'Connector configurations, ingestion DAGs, schema registry, source inventory documentation',
  },
  {
    id: 'store',
    number: 2,
    title: 'Store',
    subtitle: 'Raw + curated layers',
    icon: 'database',
    role: 'Bronze holds raw. Silver is cleaned and joined. Gold is business-ready.',
    tools: ['Snowflake', 'BigQuery', 'Databricks', 'Redshift'],
    whatWeImplement:
      'Medallion architecture (Bronze / Silver / Gold) with environment separation (dev, staging, prod). Role-based access control at schema level. PII column masking on Silver and above.',
    handoff: 'Warehouse schema design, RBAC configuration, data access policies, environment runbooks',
  },
  {
    id: 'transform',
    number: 3,
    title: 'Transform',
    subtitle: 'Model and test',
    icon: 'settings',
    role: 'SQL transformations version-controlled, tested in CI, and documented for analysts.',
    tools: ['dbt', 'Airflow', 'Prefect', 'Great Expectations'],
    whatWeImplement:
      'dbt models for Silver cleansing and Gold aggregation. Schema tests, not-null checks, and referential integrity on every model. CI pipeline runs the test suite on every pull request before merge.',
    handoff: 'dbt project with full test coverage, CI pipeline config, auto-generated data docs, model ownership assignments',
  },
  {
    id: 'serve',
    number: 4,
    title: 'Serve',
    subtitle: 'Analysts trust it',
    icon: 'bar-chart',
    role: 'Curated Gold tables feed BI tools and APIs — freshness SLAs enforced and monitored.',
    tools: ['Power BI', 'Looker', 'Tableau', 'Reverse ETL'],
    whatWeImplement:
      'Freshness SLA assertions in the orchestrator, pipeline health dashboards, and anomaly alerts before analysts see stale data. Reverse ETL for operational use cases where Gold data flows back into SaaS tools.',
    handoff: 'Observability dashboard, alert runbooks, freshness SLA documentation, BI connection guide',
  },
];

// SVG icons for each pipeline stage
function StageIcon({ type, className }: { type: string; className?: string }) {
  const baseClass = cn('w-7 h-7', className);

  switch (type) {
    case 'arrow-down':
      return (
        <svg
          className={baseClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2v16" />
          <path d="m6 14 6 6 6-6" />
          <path d="M4 6h16" opacity="0.35" strokeDasharray="2 2" />
        </svg>
      );
    case 'database':
      return (
        <svg
          className={baseClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'settings':
      return (
        <svg
          className={baseClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'bar-chart':
      return (
        <svg
          className={baseClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    default:
      return null;
  }
}

// Flow arrow between stages (desktop only)
function FlowArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0" aria-hidden="true">
      <svg
        viewBox="0 0 32 24"
        className="w-8 h-6 text-brand-400/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        viewBox="0 0 24 32"
        className="w-6 h-8 text-brand-400/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4 V28" strokeDasharray="4 3" />
        <path d="M6 22 L12 28 L18 22" />
      </svg>
    </div>
  );
}

export function DataPipelineBlueprint() {
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
            Lakehouse Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Four Stages. One Trusted Stack.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            Every layer has a defined responsibility and a handoff artifact.
            No black-box pipelines — your team gets code, tests, documentation, and runbooks.
          </p>
        </div>

        {/* ─── Desktop: horizontal pipeline (lg+) ─── */}
        <div className="hidden lg:flex items-start gap-0 max-w-5xl mx-auto">
          {STAGES.map((stage, index) => {
            const isFocused = focusedId === stage.id;
            const isDimmed = focusedId !== null && !isFocused;

            return (
              <div key={stage.id} className="flex items-start">
                {/* Stage card */}
                <button
                  onClick={() => handleToggle(stage.id)}
                  aria-expanded={isFocused}
                  className={cn(
                    'relative text-left rounded-xl p-5 transition-all duration-300 border w-52',
                    isFocused
                      ? 'bg-surface-elevated border-brand-400/40 ring-1 ring-brand-400/20'
                      : 'bg-glass-bg border-glass-border',
                    isDimmed && 'opacity-30',
                    !focusedId && 'hover:bg-surface-elevated/60 hover:border-brand-400/20',
                  )}
                >
                  {/* Stage number badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/20 border border-brand-400/30 text-xs font-bold text-brand-300">
                      {stage.number}
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-300/70">
                      {stage.subtitle}
                    </span>
                  </div>

                  {/* Icon + title */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-brand-300">
                      <StageIcon type={stage.icon} />
                    </div>
                    <h3 className="text-lg font-bold text-text-light">{stage.title}</h3>
                  </div>

                  {/* Role description */}
                  <p className="text-xs text-text-light/65 leading-relaxed mb-3">
                    {stage.role}
                  </p>

                  {/* Tool chips */}
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

                  {/* Expanded detail */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isFocused ? 'max-h-56 opacity-100 mt-4' : 'max-h-0 opacity-0',
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

                {/* Flow arrow (between stages, not after last) */}
                {index < STAGES.length - 1 && <FlowArrow />}
              </div>
            );
          })}
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
                  {/* Stage header */}
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

                  {/* Role */}
                  <p className="text-xs text-text-light/65 leading-relaxed mb-2">
                    {stage.role}
                  </p>

                  {/* Tools */}
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

                  {/* Expanded detail */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isFocused ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0',
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

                {/* Vertical connector (between stages, not after last) */}
                {index < STAGES.length - 1 && <VerticalConnector />}
              </div>
            );
          })}
        </div>

        {/* Interaction hint */}
        <p className="text-center text-xs text-text-light/35 mt-8">
          Click any stage to see what we implement and what your team receives at handoff.
        </p>
      </Container>
    </Section>
  );
}
