/**
 * CloudReadinessMatrix — signature section for Cloud Strategy & Assessment page.
 *
 * Desktop: A matrix visualization showing workload categories mapped against
 *   readiness dimensions (complexity, business value, migration risk) with
 *   recommended migration strategy per workload. Click any workload row to
 *   expand details about the recommended approach.
 * Mobile (< lg): Matrix rows stack as full-width cards. Each card shows the
 *   workload name, dimension scores as inline badges, and the recommended
 *   strategy. Tap to expand details.
 *
 * Interactive: click any workload row to focus it (dims others, expands
 *   strategy rationale). Matches SaasArchitectureBlueprint layer-focus pattern.
 *
 * Visualization pattern: Data viz / matrix (catalog pattern 1).
 * Emotional argument: "We don't just say 'move to the cloud' — we assess
 *   every workload individually and give you a prioritized, evidence-based plan."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface WorkloadRow {
  id: string;
  name: string;
  type: string;
  complexity: 'Low' | 'Medium' | 'High';
  businessValue: 'Low' | 'Medium' | 'High';
  migrationRisk: 'Low' | 'Medium' | 'High';
  strategy: string;
  rationale: string;
  wave: string;
}

const WORKLOADS: WorkloadRow[] = [
  {
    id: 'crm',
    name: 'CRM Platform',
    type: 'SaaS Application',
    complexity: 'Low',
    businessValue: 'High',
    migrationRisk: 'Low',
    strategy: 'Rehost',
    rationale: 'Already cloud-ready. Move to managed hosting with minimal changes. Quick win that demonstrates cloud value to stakeholders.',
    wave: 'Wave 1',
  },
  {
    id: 'erp',
    name: 'ERP System',
    type: 'Core Business',
    complexity: 'High',
    businessValue: 'High',
    migrationRisk: 'High',
    strategy: 'Replatform',
    rationale: 'High business value justifies investment. Modernize database layer and middleware to cloud-native services while preserving business logic.',
    wave: 'Wave 3',
  },
  {
    id: 'data-warehouse',
    name: 'Data Warehouse',
    type: 'Analytics',
    complexity: 'Medium',
    businessValue: 'High',
    migrationRisk: 'Medium',
    strategy: 'Rearchitect',
    rationale: 'Migrate to cloud-native analytics (Azure Synapse / Redshift). Modern architecture unlocks real-time analytics and significant cost reduction.',
    wave: 'Wave 2',
  },
  {
    id: 'legacy-app',
    name: 'Legacy Internal Tool',
    type: 'Internal App',
    complexity: 'High',
    businessValue: 'Low',
    migrationRisk: 'Medium',
    strategy: 'Retire',
    rationale: 'Low business value with high maintenance cost. Replace with cloud-native alternative or consolidate into existing platforms.',
    wave: 'Wave 1',
  },
  {
    id: 'compliance',
    name: 'Compliance System',
    type: 'Regulatory',
    complexity: 'Medium',
    businessValue: 'High',
    migrationRisk: 'High',
    strategy: 'Retain',
    rationale: 'Regulatory constraints require on-premises data residency. Retain with hybrid connectivity to cloud services for reporting and analytics.',
    wave: 'Phase 2',
  },
];

const DIMENSIONS = ['Complexity', 'Business Value', 'Migration Risk'] as const;

const STRATEGY_STYLES: Record<string, string> = {
  Rehost: 'bg-brand-100 text-brand-700 border-brand-200',
  Replatform: 'bg-accent-100 text-accent-700 border-accent-200',
  Rearchitect: 'bg-brand-100 text-brand-700 border-brand-200',
  Retire: 'bg-surface-warm text-text-muted border-border-light',
  Retain: 'bg-surface-light text-text-muted border-border-light',
};

const LEVEL_DOT: Record<string, string> = {
  Low: 'bg-brand-200',
  Medium: 'bg-accent-300',
  High: 'bg-brand-500',
};

function LevelIndicator({ level }: { level: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('w-2 h-2 rounded-full', LEVEL_DOT[level])} />
      <span className="text-xs text-text-muted">{level}</span>
    </span>
  );
}

export function CloudReadinessMatrix() {
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
            Assessment Framework
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Every Workload Gets Its Own Strategy
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            No blanket lift-and-shift. Each workload is assessed against complexity,
            business value, and migration risk — then assigned the right approach
            and sequenced into the roadmap.
          </p>
        </div>

        {/* ─── Desktop matrix (lg+) ─── */}
        <div className="hidden lg:block">
          {/* Column headers */}
          <div className="grid grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr_0.8fr_0.6fr] gap-3 px-4 pb-3 border-b border-border-dark">
            <span className="text-xs font-semibold tracking-wider uppercase text-text-light/60">Workload</span>
            {DIMENSIONS.map((d) => (
              <span key={d} className="text-xs font-semibold tracking-wider uppercase text-text-light/60 text-center">{d}</span>
            ))}
            <span className="text-xs font-semibold tracking-wider uppercase text-text-light/60 text-center">Strategy</span>
            <span className="text-xs font-semibold tracking-wider uppercase text-text-light/60 text-center">Wave</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border-dark">
            {WORKLOADS.map((w) => {
              const isFocused = focusedId === w.id;
              const isDimmed = focusedId !== null && !isFocused;
              return (
                <div key={w.id}>
                  <button
                    onClick={() => handleToggle(w.id)}
                    className={cn(
                      'grid grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr_0.8fr_0.6fr] gap-3 w-full px-4 py-4 text-left transition-all duration-300 rounded-lg',
                      isFocused && 'bg-surface-elevated',
                      isDimmed && 'opacity-40',
                      !focusedId && 'hover:bg-surface-elevated/50',
                    )}
                    aria-expanded={isFocused}
                  >
                    <div>
                      <span className="text-sm font-semibold text-text-light">{w.name}</span>
                      <span className="block text-xs text-text-light/50 mt-0.5">{w.type}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <LevelIndicator level={w.complexity} />
                    </div>
                    <div className="flex items-center justify-center">
                      <LevelIndicator level={w.businessValue} />
                    </div>
                    <div className="flex items-center justify-center">
                      <LevelIndicator level={w.migrationRisk} />
                    </div>
                    <div className="flex items-center justify-center">
                      <span className={cn(
                        'inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold border',
                        STRATEGY_STYLES[w.strategy],
                      )}>
                        {w.strategy}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-xs font-medium text-text-light/70">{w.wave}</span>
                    </div>
                  </button>

                  {/* Expanded detail */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isFocused ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className="px-4 pb-4 pl-8">
                      <p className="text-sm text-text-light/70 leading-relaxed max-w-3xl">
                        <span className="font-semibold text-brand-300">Rationale: </span>
                        {w.rationale}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile cards (< lg) ─── */}
        <div className="lg:hidden space-y-3">
          {WORKLOADS.map((w) => {
            const isFocused = focusedId === w.id;
            const isDimmed = focusedId !== null && !isFocused;
            return (
              <button
                key={w.id}
                onClick={() => handleToggle(w.id)}
                className={cn(
                  'w-full text-left rounded-xl p-4 transition-all duration-300 border',
                  isFocused
                    ? 'bg-surface-elevated border-brand-400/30'
                    : 'bg-glass-bg border-glass-border',
                  isDimmed && 'opacity-40',
                )}
                aria-expanded={isFocused}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-sm font-semibold text-text-light">{w.name}</span>
                    <span className="block text-xs text-text-light/50">{w.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      'inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold border',
                      STRATEGY_STYLES[w.strategy],
                    )}>
                      {w.strategy}
                    </span>
                    <span className="text-xs font-medium text-text-light/60">{w.wave}</span>
                  </div>
                </div>

                {/* Dimension badges */}
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-text-light/50">Complexity: <LevelIndicator level={w.complexity} /></span>
                  <span className="text-text-light/50">Value: <LevelIndicator level={w.businessValue} /></span>
                  <span className="text-text-light/50">Risk: <LevelIndicator level={w.migrationRisk} /></span>
                </div>

                {/* Expanded rationale */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isFocused ? 'max-h-32 opacity-100 mt-3' : 'max-h-0 opacity-0',
                  )}
                >
                  <p className="text-sm text-text-light/70 leading-relaxed">
                    <span className="font-semibold text-brand-300">Rationale: </span>
                    {w.rationale}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-text-light/40 mt-8">
          Sample assessment matrix — your actual workloads and strategies will be determined during the engagement.
        </p>
      </Container>
    </Section>
  );
}
