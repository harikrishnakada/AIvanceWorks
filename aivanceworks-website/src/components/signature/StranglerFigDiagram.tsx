/**
 * StranglerFigDiagram — signature section for Application Modernization page.
 *
 * Desktop: A phased modernization visualization showing a monolith being decomposed
 *   module by module into independent services. Each phase is clickable, highlighting
 *   which modules are extracted and their target state. A persistent "Production Live"
 *   indicator stays green throughout all phases.
 * Mobile (< lg): Phases stack as full-width cards. Each card shows the modules
 *   being extracted in that phase with their strategy and outcome. Tap to expand
 *   details about each phase's scope and deliverables.
 *
 * Interactive: click any phase card to focus it (dims others, expands detail).
 * Matches CloudReadinessMatrix click-to-focus pattern.
 *
 * Visualization pattern: Process / architectural hybrid (catalog patterns 2+3).
 * Emotional argument: "Your system stays live while we methodically extract services
 *   — no big-bang rewrite, no midnight cutovers. Each phase is independently deployable."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface ModuleExtraction {
  name: string;
  strategy: 'Extract' | 'Wrap' | 'Replatform' | 'Retire';
  outcome: string;
}

interface Phase {
  id: string;
  number: number;
  title: string;
  duration: string;
  description: string;
  modules: ModuleExtraction[];
  monolithState: string; // e.g., "100% legacy" → "60% legacy"
  productionStatus: 'Live' | 'Live';
}

const PHASES: Phase[] = [
  {
    id: 'assessment',
    number: 1,
    title: 'Assess & Plan',
    duration: 'Weeks 1–3',
    description:
      'Map every module, score complexity, identify boundaries. Produce a sequenced extraction backlog prioritized by business value and coupling risk.',
    modules: [
      { name: 'Dependency Map', strategy: 'Extract', outcome: 'Visual dependency graph' },
      { name: 'Complexity Scoring', strategy: 'Extract', outcome: 'Risk-ranked module list' },
      { name: 'Boundary Analysis', strategy: 'Extract', outcome: 'Service boundary proposals' },
    ],
    monolithState: '100% Legacy',
    productionStatus: 'Live',
  },
  {
    id: 'foundation',
    number: 2,
    title: 'Foundation Layer',
    duration: 'Weeks 3–5',
    description:
      'Stand up the target infrastructure: API gateway, service mesh, CI/CD pipelines, observability. Deploy the routing layer that enables strangler fig traffic shifting.',
    modules: [
      { name: 'API Gateway', strategy: 'Extract', outcome: 'Traffic routing ready' },
      { name: 'CI/CD Pipelines', strategy: 'Extract', outcome: 'Per-service deployment' },
      { name: 'Observability', strategy: 'Extract', outcome: 'Distributed tracing live' },
    ],
    monolithState: '95% Legacy',
    productionStatus: 'Live',
  },
  {
    id: 'extraction-1',
    number: 3,
    title: 'First Extractions',
    duration: 'Weeks 5–12',
    description:
      'Extract the first 2–3 high-value, low-coupling modules. Each extraction follows: build service → validate in parallel → shift traffic → confirm → decommission legacy module.',
    modules: [
      { name: 'Auth Module', strategy: 'Extract', outcome: 'Independent auth service' },
      { name: 'Notification System', strategy: 'Extract', outcome: 'Event-driven service' },
      { name: 'User Management', strategy: 'Wrap', outcome: 'API facade, legacy backend' },
    ],
    monolithState: '70% Legacy',
    productionStatus: 'Live',
  },
  {
    id: 'extraction-2',
    number: 4,
    title: 'Core Domain Extraction',
    duration: 'Weeks 12–20',
    description:
      'Extract core business logic modules — the higher-risk, higher-value domains. Database decomposition happens here: shared DB splits into service-owned stores with change data capture for sync.',
    modules: [
      { name: 'Order Processing', strategy: 'Extract', outcome: 'Domain service + own DB' },
      { name: 'Payment Engine', strategy: 'Replatform', outcome: 'Cloud-native service' },
      { name: 'Inventory System', strategy: 'Extract', outcome: 'Event-sourced service' },
    ],
    monolithState: '35% Legacy',
    productionStatus: 'Live',
  },
  {
    id: 'completion',
    number: 5,
    title: 'Decommission & Handover',
    duration: 'Weeks 20–24',
    description:
      'Retire remaining legacy modules (or retain those that are stable and decoupled). Performance validation, load testing, runbook creation, team knowledge transfer.',
    modules: [
      { name: 'Legacy Reporting', strategy: 'Retire', outcome: 'Replaced by analytics service' },
      { name: 'Admin Tools', strategy: 'Replatform', outcome: 'Modern admin dashboard' },
      { name: 'Legacy DB', strategy: 'Retire', outcome: 'Decommissioned after migration' },
    ],
    monolithState: '0% Legacy',
    productionStatus: 'Live',
  },
];

const STRATEGY_STYLES: Record<string, string> = {
  Extract: 'bg-brand-100 text-brand-700 border-brand-200',
  Wrap: 'bg-accent-100 text-accent-700 border-accent-200',
  Replatform: 'bg-accent-100 text-accent-700 border-accent-200',
  Retire: 'bg-surface-warm text-text-muted border-border-light',
};

function MonolithBar({ state, isFocused }: { state: string; isFocused: boolean }) {
  // Parse the percentage from the state string
  const match = state.match(/(\d+)%/);
  const percentage = match ? parseInt(match[1], 10) : 100;
  const modernPercentage = 100 - percentage;

  return (
    <div className={cn('transition-all duration-500', isFocused ? 'opacity-100' : 'opacity-70')}>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-text-light/60 font-medium">Legacy</span>
        <span className="text-text-light/60 font-medium">Modern</span>
      </div>
      <div className="h-3 rounded-full overflow-hidden flex bg-surface-elevated border border-border-dark">
        <div
          className="bg-brand-500/40 transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
        <div
          className="bg-accent-400/50 transition-all duration-700 ease-out"
          style={{ width: `${modernPercentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs mt-1">
        <span className="text-brand-300/70 font-semibold">{percentage}%</span>
        <span className="text-accent-300/70 font-semibold">{modernPercentage}%</span>
      </div>
    </div>
  );
}

export function StranglerFigDiagram() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  const currentPhase = focusedId
    ? PHASES.find((p) => p.id === focusedId)
    : PHASES[2]; // Default to Phase 3 for visual interest

  return (
    <Section tone="dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            Modernization Approach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            The Monolith Shrinks Sprint by Sprint
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            Each phase extracts modules independently while production stays live.
            Click any phase to see what gets extracted and the system state at that point.
          </p>
        </div>

        {/* ─── Monolith progress bar ─── */}
        <div className="max-w-md mx-auto mb-10">
          <MonolithBar
            state={currentPhase?.monolithState ?? '100% Legacy'}
            isFocused={focusedId !== null}
          />
        </div>

        {/* ─── Production status badge ─── */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated border border-border-dark">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-400" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-text-light/80">
              Production Live — All Phases
            </span>
          </div>
        </div>

        {/* ─── Desktop: Phase timeline (lg+) ─── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-3">
            {PHASES.map((phase) => {
              const isFocused2 = focusedId === phase.id;
              const isDimmed = focusedId !== null && !isFocused2;
              return (
                <button
                  key={phase.id}
                  onClick={() => handleToggle(phase.id)}
                  className={cn(
                    'text-left rounded-xl p-4 transition-all duration-300 border',
                    isFocused2
                      ? 'bg-surface-elevated border-brand-400/40 scale-[1.02] shadow-glow'
                      : 'bg-glass-bg border-glass-border hover:border-brand-400/20',
                    isDimmed && 'opacity-35 scale-[0.98]',
                  )}
                  aria-expanded={isFocused2}
                >
                  {/* Phase number */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold">
                      {phase.number}
                    </span>
                    <span className="text-xs text-text-light/50 font-medium">{phase.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-text-light mb-2 leading-tight">
                    {phase.title}
                  </h3>

                  {/* Module list (collapsed) */}
                  <div className="space-y-1">
                    {phase.modules.map((mod) => (
                      <div key={mod.name} className="flex items-center gap-1.5">
                        <span className={cn(
                          'inline-flex px-1.5 py-0.5 rounded text-[9px] font-semibold border leading-none',
                          STRATEGY_STYLES[mod.strategy],
                        )}>
                          {mod.strategy}
                        </span>
                        <span className="text-[11px] text-text-light/60 truncate">{mod.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expanded description */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isFocused2 ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0',
                    )}
                  >
                    <p className="text-xs text-text-light/70 leading-relaxed border-t border-border-dark pt-3">
                      {phase.description}
                    </p>
                    <div className="mt-2 space-y-1">
                      {phase.modules.map((mod) => (
                        <div key={mod.name} className="text-[10px] text-text-light/50">
                          <span className="font-semibold text-accent-300">{mod.name}</span>
                          {' → '}
                          <span>{mod.outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile: Phase cards (< lg) ─── */}
        <div className="lg:hidden space-y-3">
          {PHASES.map((phase) => {
            const isFocused2 = focusedId === phase.id;
            const isDimmed = focusedId !== null && !isFocused2;
            return (
              <button
                key={phase.id}
                onClick={() => handleToggle(phase.id)}
                className={cn(
                  'w-full text-left rounded-xl p-4 transition-all duration-300 border',
                  isFocused2
                    ? 'bg-surface-elevated border-brand-400/30'
                    : 'bg-glass-bg border-glass-border',
                  isDimmed && 'opacity-40',
                )}
                aria-expanded={isFocused2}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-600 text-white text-xs font-bold">
                      {phase.number}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-text-light">{phase.title}</span>
                      <span className="block text-xs text-text-light/50">{phase.duration}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-text-light/50">{phase.monolithState}</span>
                </div>

                {/* Module badges */}
                <div className="flex flex-wrap gap-1.5">
                  {phase.modules.map((mod) => (
                    <span
                      key={mod.name}
                      className={cn(
                        'inline-flex px-2 py-0.5 rounded text-[10px] font-semibold border',
                        STRATEGY_STYLES[mod.strategy],
                      )}
                    >
                      {mod.name}
                    </span>
                  ))}
                </div>

                {/* Expanded detail */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isFocused2 ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0',
                  )}
                >
                  <p className="text-sm text-text-light/70 leading-relaxed border-t border-border-dark pt-3 mb-2">
                    {phase.description}
                  </p>
                  <div className="space-y-1">
                    {phase.modules.map((mod) => (
                      <div key={mod.name} className="text-xs text-text-light/50">
                        <span className="font-semibold text-accent-300">{mod.name}</span>
                        {' → '}
                        <span>{mod.outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-text-light/40 mt-8">
          Sample modernization phases — your actual module extraction sequence is determined during the assessment based on your codebase.
        </p>
      </Container>
    </Section>
  );
}
