/**
 * FinOpsCostWaterfall — signature section for FinOps & Cloud Cost Optimization page.
 *
 * Desktop (lg+): A cascading waterfall visualization. The top "Unoptimized Cloud Spend"
 *   tier is wide and dark, carrying chips that name the typical categories of waste we
 *   find. Below it, four optimization lever tiers step down in width — each labeled with
 *   the lever, the lens we apply, and the category of waste it attacks. The bottom tier
 *   ("Predictable, Governed Baseline") is brand-tinted and narrow, completing the visual
 *   argument that the bill is systematically narrowed by stacked, independent levers.
 * Mobile (< lg): Tiers stack full-width top-to-bottom, preserving the same cascade order.
 *   Width differentiation is dropped on mobile — instead, a left-side accent rail changes
 *   color to communicate progression. Chips and descriptions stay visible; the visual
 *   argument is now vertical flow rather than narrowing proportions.
 *
 * Interactive: click any lever tier to focus it (dims others, reveals the expanded
 *   description and example waste categories). Matches the focus pattern used in
 *   CloudReadinessMatrix and SaasArchitectureBlueprint for cross-signature consistency.
 *
 * Visualization pattern: Data viz / cascading waterfall (catalog pattern 1).
 * Emotional argument: "Your cloud bill is not one problem with one fix — it is a stack
 *   of independent waste sources, each addressed by a specific lever. We don't pull one;
 *   we pull all four in sequence and leave governance behind so the savings compound."
 *
 * Content integrity note: the tiers show categorical reductions with descriptive labels
 *   only. No specific percentage numbers are shown on the cascade — the visual proportions
 *   are stylized (stepped narrowing) and expressly do not represent claimed savings ratios.
 *   A footer note makes this explicit to the reader.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';
import {
  Eye,
  Scissors,
  TrendingDown,
  Shield,
  type LucideIcon,
} from 'lucide-react';

interface Lever {
  id: string;
  label: string;
  lens: string;
  description: string;
  wasteCategories: string[];
  icon: LucideIcon;
  /** Tailwind width classes, desktop only, stepping down the cascade */
  widthClass: string;
}

const LEVERS: Lever[] = [
  {
    id: 'visibility',
    label: 'Cost Visibility & Allocation',
    lens: 'Inform',
    description:
      'Tagging, showback, and attribution so every dollar has an owner and every team sees what they consume.',
    wasteCategories: [
      'Untagged resources',
      'Unattributed shared services',
      'Opaque tenant usage',
    ],
    icon: Eye,
    widthClass: 'lg:w-[88%]',
  },
  {
    id: 'rightsizing',
    label: 'Right-Sizing & Waste Elimination',
    lens: 'Optimize',
    description:
      'Oversized resources, idle workloads, orphaned storage, and expired capacity surfaced and remediated with evidence.',
    wasteCategories: [
      'Oversized VMs',
      'Idle workloads',
      'Orphaned disks & snapshots',
    ],
    icon: Scissors,
    widthClass: 'lg:w-[74%]',
  },
  {
    id: 'commitments',
    label: 'Rate & Commitment Optimization',
    lens: 'Optimize',
    description:
      'Reserved instances, savings plans, and spot strategy sized to your actual usage and growth profile — not vendor defaults.',
    wasteCategories: [
      'On-demand overspend',
      'Mismatched RIs',
      'Unused savings plans',
    ],
    icon: TrendingDown,
    widthClass: 'lg:w-[60%]',
  },
  {
    id: 'governance',
    label: 'Governance & Forecasting',
    lens: 'Operate',
    description:
      'Budget policies, anomaly detection, forecasting, and review cadence — so waste does not creep back in after the engagement ends.',
    wasteCategories: [
      'Budget drift',
      'Silent spend anomalies',
      'Forecast surprises',
    ],
    icon: Shield,
    widthClass: 'lg:w-[46%]',
  },
];

const LENS_STYLES: Record<string, string> = {
  Inform: 'bg-brand-100 text-brand-700 border-brand-200',
  Optimize: 'bg-accent-100 text-accent-700 border-accent-200',
  Operate: 'bg-brand-100 text-brand-700 border-brand-200',
};

export function FinOpsCostWaterfall() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  return (
    <Section tone="dark" withGrid>
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            Optimization Framework
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Four Levers. Stacked. Then Governed.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg">
            Your cloud bill is not one problem with one fix — it is a stack of
            independent waste sources. We pull every lever in sequence, then leave
            governance behind so the savings compound.
          </p>
        </div>

        {/* ─── Top tier: Unoptimized Baseline ─── */}
        <div className="relative mx-auto max-w-5xl">
          <div className="lg:w-full rounded-2xl border border-border-dark bg-surface-elevated/60 p-5 lg:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-text-light/50 mb-1">
                  Starting Point
                </p>
                <h3 className="text-lg lg:text-xl font-bold text-text-light">
                  Unoptimized Cloud Spend
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Untagged resources',
                  'Oversized VMs',
                  'Idle workloads',
                  'On-demand overspend',
                  'Budget drift',
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium border border-border-dark text-text-light/70 bg-surface-dark"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Connector rail between tiers (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:flex justify-center my-2"
          >
            <div className="w-px h-6 bg-gradient-to-b from-border-dark to-brand-400/60" />
          </div>

          {/* ─── Lever cascade ─── */}
          <div className="mt-3 lg:mt-0 space-y-3 lg:space-y-0">
            {LEVERS.map((lever, idx) => {
              const isFocused = focusedId === lever.id;
              const isDimmed = focusedId !== null && !isFocused;
              const Icon = lever.icon;

              return (
                <div key={lever.id}>
                  {/* Desktop connector between levers */}
                  {idx > 0 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex justify-center my-2"
                    >
                      <div className="w-px h-6 bg-gradient-to-b from-brand-400/40 to-accent-400/60" />
                    </div>
                  )}

                  <button
                    onClick={() => handleToggle(lever.id)}
                    className={cn(
                      'group relative w-full text-left rounded-2xl border transition-all duration-300',
                      // Desktop width stepping: cascade narrows as the stack deepens
                      lever.widthClass,
                      'lg:mx-auto',
                      isFocused
                        ? 'bg-surface-elevated border-brand-400/40 shadow-brand-panel'
                        : 'bg-glass-bg border-glass-border hover:border-border-hover',
                      isDimmed && 'opacity-40',
                    )}
                    aria-expanded={isFocused}
                  >
                    {/* Mobile accent rail */}
                    <span
                      aria-hidden="true"
                      className="lg:hidden absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-brand-500 to-accent-500 opacity-80"
                    />

                    <div className="p-4 lg:p-5 pl-5 lg:pl-5">
                      <div className="flex items-start gap-4">
                        <span
                          className={cn(
                            'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center',
                            'bg-brand-500/10 text-brand-300 border border-brand-400/20',
                          )}
                        >
                          <Icon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-base lg:text-lg font-bold text-text-light">
                              {lever.label}
                            </h4>
                            <span
                              className={cn(
                                'inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border',
                                LENS_STYLES[lever.lens],
                              )}
                            >
                              {lever.lens}
                            </span>
                          </div>
                          <p className="text-sm text-text-light/70 leading-relaxed">
                            {lever.description}
                          </p>

                          {/* Waste category chips */}
                          <div
                            className={cn(
                              'mt-3 flex flex-wrap gap-1.5 overflow-hidden transition-all duration-300',
                              isFocused ? 'max-h-40 opacity-100' : 'max-h-8 opacity-90',
                            )}
                          >
                            {lever.wasteCategories.map((cat) => (
                              <span
                                key={cat}
                                className="inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium border border-border-dark text-text-light/60 bg-surface-dark"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Connector rail into baseline */}
          <div
            aria-hidden="true"
            className="hidden lg:flex justify-center my-2"
          >
            <div className="w-px h-6 bg-gradient-to-b from-accent-400/60 to-brand-500" />
          </div>

          {/* ─── Bottom tier: Governed Baseline ─── */}
          <div className="mt-3 lg:mt-0 lg:w-[32%] lg:mx-auto rounded-2xl border border-brand-400/40 bg-gradient-to-br from-brand-500/20 via-brand-500/10 to-accent-500/15 p-5 lg:p-6 shadow-brand-panel">
            <div className="flex flex-col lg:items-center lg:text-center gap-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-brand-300">
                End State
              </p>
              <h3 className="text-lg lg:text-xl font-bold text-text-light">
                Predictable, Governed Baseline
              </h3>
              <p className="text-sm text-text-light/75 leading-relaxed">
                Attributed spend. Controlled waste. Forecast accuracy. A review
                cadence your team runs after handover.
              </p>
            </div>
          </div>
        </div>

        {/* Footer note — content integrity disclosure */}
        <p className="text-center text-xs text-text-light/40 mt-8 max-w-2xl mx-auto">
          Illustrative cascade. Tier widths stylize the stacking effect of independent
          levers — they are not a claim about specific savings ratios. Your actual
          optimization potential is determined during the audit.
        </p>
      </Container>
    </Section>
  );
}
