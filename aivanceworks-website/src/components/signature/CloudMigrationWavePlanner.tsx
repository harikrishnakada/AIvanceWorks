/**
 * CloudMigrationWavePlanner — signature section for Cloud Migration & Modernization page.
 *
 * Desktop: A wave-based migration timeline showing 4 migration waves flowing left-to-right.
 *   Each wave is a column showing workload cards with their migration strategy badge.
 *   Between waves, a vertical "validation gate" bar indicates that migration proceeds
 *   only after the prior wave passes validation. Click any wave to focus it (dims others,
 *   shows wave details and validation criteria).
 * Mobile (< lg): Waves stack vertically as full-width cards. Each wave card shows its
 *   workloads as inline items with strategy badges. Validation gates render as horizontal
 *   dividers with a "✓ Validated" label between wave cards.
 *
 * Visualization pattern: Process / flow (catalog pattern 3) + data viz (pattern 1).
 * Emotional argument: "Your migration happens in controlled waves — each validated
 *   before the next begins. No chaotic all-at-once cutover."
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface WaveWorkload {
  name: string;
  strategy: 'Rehost' | 'Replatform' | 'Rearchitect';
  risk: 'Low' | 'Medium' | 'High';
}

interface MigrationWave {
  id: string;
  label: string;
  title: string;
  duration: string;
  description: string;
  workloads: WaveWorkload[];
  validationCriteria: string[];
}

const WAVES: MigrationWave[] = [
  {
    id: 'pilot',
    label: 'Wave 1',
    title: 'Pilot',
    duration: '2 weeks',
    description: 'Low-risk workloads that prove the migration approach. Quick wins that build confidence and calibrate the process.',
    workloads: [
      { name: 'Dev/Test Environments', strategy: 'Rehost', risk: 'Low' },
      { name: 'Static Websites', strategy: 'Rehost', risk: 'Low' },
      { name: 'Internal Tools', strategy: 'Replatform', risk: 'Low' },
    ],
    validationCriteria: [
      'Connectivity verified',
      'Performance baselined',
      'Monitoring operational',
      'Rollback tested',
    ],
  },
  {
    id: 'foundation',
    label: 'Wave 2',
    title: 'Foundation',
    duration: '3–4 weeks',
    description: 'Core infrastructure services that other workloads depend on. Migrated early so downstream waves have their dependencies in place.',
    workloads: [
      { name: 'Active Directory / IAM', strategy: 'Replatform', risk: 'Medium' },
      { name: 'File Shares & Storage', strategy: 'Rehost', risk: 'Low' },
      { name: 'DNS & Networking', strategy: 'Replatform', risk: 'Medium' },
    ],
    validationCriteria: [
      'Auth flows functional',
      'Data integrity confirmed',
      'Hybrid connectivity stable',
      'Security scan passed',
    ],
  },
  {
    id: 'core',
    label: 'Wave 3',
    title: 'Core Applications',
    duration: '4–6 weeks',
    description: 'Business-critical applications migrated with the most rigorous validation. Each cutover is orchestrated during maintenance windows with tested rollback.',
    workloads: [
      { name: 'CRM Platform', strategy: 'Rehost', risk: 'Medium' },
      { name: 'ERP System', strategy: 'Replatform', risk: 'High' },
      { name: 'Customer Portal', strategy: 'Rearchitect', risk: 'Medium' },
    ],
    validationCriteria: [
      'Full functional regression',
      'Load test at 120% baseline',
      'Integration endpoints verified',
      'Cutover rehearsal passed',
    ],
  },
  {
    id: 'optimize',
    label: 'Wave 4',
    title: 'Optimize & Decommission',
    duration: '2–3 weeks',
    description: 'Remaining workloads migrated, legacy infrastructure decommissioned. Post-migration optimization ensures cost efficiency from day one.',
    workloads: [
      { name: 'Data Warehouse', strategy: 'Rearchitect', risk: 'Medium' },
      { name: 'Batch Processing', strategy: 'Replatform', risk: 'Low' },
      { name: 'Legacy Retire Targets', strategy: 'Rehost', risk: 'Low' },
    ],
    validationCriteria: [
      'All workloads operational',
      'Cost baseline established',
      'Right-sizing applied',
      'Source decommission approved',
    ],
  },
];

const STRATEGY_STYLES: Record<string, string> = {
  Rehost: 'bg-brand-100 text-brand-700 border-brand-200',
  Replatform: 'bg-accent-100 text-accent-700 border-accent-200',
  Rearchitect: 'bg-brand-50 text-brand-600 border-brand-200',
};

const RISK_DOT: Record<string, string> = {
  Low: 'bg-brand-300',
  Medium: 'bg-accent-400',
  High: 'bg-brand-600',
};

function StrategyBadge({ strategy }: { strategy: string }) {
  return (
    <span className={cn(
      'inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded border',
      STRATEGY_STYLES[strategy]
    )}>
      {strategy}
    </span>
  );
}

function RiskDot({ risk }: { risk: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className={cn('w-1.5 h-1.5 rounded-full', RISK_DOT[risk])} />
      <span className="text-[10px] text-text-muted">{risk}</span>
    </span>
  );
}

function ValidationGate({ horizontal = false }: { horizontal?: boolean }) {
  if (horizontal) {
    return (
      <div className="flex items-center justify-center gap-2 py-4">
        <div className="flex-1 h-px bg-brand-400/30" />
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20">
          <svg className="w-3.5 h-3.5 text-brand-400" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[11px] font-semibold text-brand-300 uppercase tracking-wider">Validated</span>
        </div>
        <div className="flex-1 h-px bg-brand-400/30" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-1 px-2">
      <div className="w-px h-full min-h-[40px] bg-brand-400/30" />
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/15 border border-brand-400/25">
        <svg className="w-3 h-3 text-brand-400" viewBox="0 0 16 16" fill="none">
          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="w-px h-full min-h-[40px] bg-brand-400/30" />
    </div>
  );
}

export function CloudMigrationWavePlanner() {
  const [focusedWave, setFocusedWave] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedWave((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" id="signature">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            Migration Approach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Controlled Waves, Not Chaotic Cutovers
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            Every migration executes in validated waves. Each wave is proven working
            before the next begins — so risk is contained and your business stays operational.
          </p>
        </div>

        {/* ─── Desktop wave timeline (lg+) ─── */}
        <div className="hidden lg:flex items-stretch gap-0">
          {WAVES.map((wave, idx) => (
            <div key={wave.id} className="flex items-stretch">
              {/* Wave card */}
              <button
                onClick={() => handleToggle(wave.id)}
                className={cn(
                  'flex flex-col w-[220px] xl:w-[250px] rounded-xl border transition-all duration-300 text-left p-4',
                  focusedWave === null || focusedWave === wave.id
                    ? 'bg-surface-elevated border-border-dark shadow-card opacity-100 scale-100'
                    : 'bg-surface-elevated/50 border-border-dark/50 opacity-40 scale-[0.97]',
                  focusedWave === wave.id && 'ring-1 ring-brand-400/40'
                )}
                aria-expanded={focusedWave === wave.id}
                aria-label={`${wave.label}: ${wave.title}. Click to ${focusedWave === wave.id ? 'collapse' : 'expand'} details.`}
              >
                {/* Wave header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-brand-300">
                    {wave.label}
                  </span>
                  <span className="text-[11px] text-text-muted">{wave.duration}</span>
                </div>
                <h3 className="text-sm font-semibold text-text-light mb-2">{wave.title}</h3>

                {/* Workloads */}
                <div className="flex flex-col gap-1.5 mb-3">
                  {wave.workloads.map((wl) => (
                    <div key={wl.name} className="flex items-center justify-between gap-2">
                      <span className="text-xs text-text-light/80 truncate">{wl.name}</span>
                      <StrategyBadge strategy={wl.strategy} />
                    </div>
                  ))}
                </div>

                {/* Expanded details */}
                <div className={cn(
                  'overflow-hidden transition-all duration-300',
                  focusedWave === wave.id ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'
                )}>
                  <div className="pt-2 border-t border-border-dark">
                    <p className="text-xs text-text-light/70 mb-2">{wave.description}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-300 mb-1">
                      Validation gate:
                    </p>
                    <ul className="space-y-0.5">
                      {wave.validationCriteria.map((c) => (
                        <li key={c} className="flex items-center gap-1.5 text-[11px] text-text-light/70">
                          <svg className="w-3 h-3 text-brand-400 shrink-0" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>

              {/* Validation gate between waves */}
              {idx < WAVES.length - 1 && <ValidationGate />}
            </div>
          ))}
        </div>

        {/* ─── Mobile wave cards (< lg) ─── */}
        <div className="lg:hidden space-y-0">
          {WAVES.map((wave, idx) => (
            <div key={wave.id}>
              <button
                onClick={() => handleToggle(wave.id)}
                className={cn(
                  'w-full rounded-xl border bg-surface-elevated border-border-dark p-4 text-left transition-all duration-200',
                  focusedWave === wave.id && 'ring-1 ring-brand-400/40'
                )}
                aria-expanded={focusedWave === wave.id}
                aria-label={`${wave.label}: ${wave.title}. Tap to ${focusedWave === wave.id ? 'collapse' : 'expand'} details.`}
              >
                {/* Wave header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-brand-300">
                      {wave.label}
                    </span>
                    <span className="text-sm font-semibold text-text-light">{wave.title}</span>
                  </div>
                  <span className="text-[11px] text-text-muted">{wave.duration}</span>
                </div>

                {/* Workloads */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-2">
                  {wave.workloads.map((wl) => (
                    <div key={wl.name} className="flex items-center gap-1.5">
                      <RiskDot risk={wl.risk} />
                      <span className="text-xs text-text-light/80">{wl.name}</span>
                      <StrategyBadge strategy={wl.strategy} />
                    </div>
                  ))}
                </div>

                {/* Expanded details */}
                <div className={cn(
                  'overflow-hidden transition-all duration-300',
                  focusedWave === wave.id ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'
                )}>
                  <div className="pt-2 border-t border-border-dark">
                    <p className="text-xs text-text-light/70 mb-2">{wave.description}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-300 mb-1">
                      Validation gate:
                    </p>
                    <ul className="space-y-0.5">
                      {wave.validationCriteria.map((c) => (
                        <li key={c} className="flex items-center gap-1.5 text-[11px] text-text-light/70">
                          <svg className="w-3 h-3 text-brand-400 shrink-0" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>

              {/* Validation gate between waves */}
              {idx < WAVES.length - 1 && <ValidationGate horizontal />}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-text-light/60">
          <span className="flex items-center gap-1.5">
            <span className="inline-block px-2 py-0.5 rounded border bg-brand-100 text-brand-700 border-brand-200 text-[10px] font-semibold">REHOST</span>
            Lift & shift
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block px-2 py-0.5 rounded border bg-accent-100 text-accent-700 border-accent-200 text-[10px] font-semibold">REPLATFORM</span>
            Managed services
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block px-2 py-0.5 rounded border bg-brand-50 text-brand-600 border-brand-200 text-[10px] font-semibold">REARCHITECT</span>
            Cloud-native rebuild
          </span>
        </div>
      </Container>
    </Section>
  );
}
