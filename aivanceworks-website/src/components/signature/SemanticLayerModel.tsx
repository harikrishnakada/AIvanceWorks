/**
 * SemanticLayerModel — signature section for the Data Analytics service page.
 *
 * Desktop (lg+): a side-by-side comparison of two worlds built on the same Gold
 *   layer. LEFT ("Without a governed layer"): the Gold layer feeds four BI surfaces
 *   directly, and each team re-derives the metric its own way — so the four surfaces
 *   show four different numbers. RIGHT ("With analytics engineering"): the Gold layer
 *   feeds ONE governed semantic layer that defines the metric once, and every surface
 *   reads the identical number. A metric selector (MRR / Active User / Churn) swaps
 *   the definition and the numbers on both sides.
 * Mobile (< lg): the two panels stack vertically — the "without" panel on top, the
 *   "with" panel below, separated by the metric selector which stays sticky-adjacent
 *   at the top. Each panel's surface tiles reflow from a 2-column grid to a single
 *   column. Connector arrows are hidden below lg; the layer order (Gold → Semantic →
 *   Surfaces) is preserved by vertical stacking.
 *
 * Interactive: click any metric chip to change which metric is illustrated. The
 *   governed definition text and both sets of numbers update. Matches the
 *   click-to-focus interaction pattern of DataPipelineBlueprint.
 *
 * Visualization pattern: Comparison (catalog pattern 4) fused with an architectural
 *   layer diagram (pattern 2).
 * Emotional argument: "The gap between raw data and a trustworthy dashboard is the
 *   semantic layer — define each metric once, and five dashboards stop showing five
 *   different revenue numbers."
 *
 * Content integrity: the numbers shown are ILLUSTRATIVE of divergence vs. consistency,
 *   not client data. Flagged in the data file's _unverified list.
 *
 * Token compliance: all color references use token-backed Tailwind classes or CSS
 *   custom properties. No raw color shades or hex values.
 * Accessibility: metric selector is a radiogroup of buttons with aria-pressed; SVG
 *   glyphs are aria-hidden; section heading is an h2.
 */

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/shared/primitives';

interface MetricDef {
  id: string;
  label: string;
  short: string;
  definition: string;
  diverging: string[]; // one per surface — illustrative, deliberately inconsistent
  governed: string; // the single governed value every surface reads
}

const SURFACES = ['Power BI', 'Looker', 'Tableau', 'Finance sheet'];

const METRICS: MetricDef[] = [
  {
    id: 'mrr',
    label: 'Monthly Recurring Revenue',
    short: 'MRR',
    definition:
      'Active subscription revenue normalized to a monthly value — one-time fees, credits, and taxes excluded, recognized from each contract’s start date.',
    diverging: ['$4.21M', '$3.87M', '$4.55M', '$4.09M'],
    governed: '$4.21M',
  },
  {
    id: 'active',
    label: 'Active User',
    short: 'Active User',
    definition:
      'A user with at least one core action in the trailing 28 days — deduplicated across devices, with internal and service accounts excluded.',
    diverging: ['82,400', '91,100', '77,900', '88,200'],
    governed: '82,400',
  },
  {
    id: 'churn',
    label: 'Customer Churn',
    short: 'Churn',
    definition:
      'Logos lost in the period ÷ logos active at period start — measured on committed contracts, with downgrades and paused accounts excluded.',
    diverging: ['5.8%', '4.2%', '6.9%', '5.1%'],
    governed: '5.8%',
  },
];

// Small down-arrow connector used between the layers.
function LayerConnector({ className }: { className?: string }) {
  return (
    <div className={cn('flex justify-center py-2', className)} aria-hidden="true">
      <svg
        viewBox="0 0 24 28"
        className="w-5 h-6 text-brand-400/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 V22" strokeDasharray="4 3" />
        <path d="M6 17 L12 23 L18 17" />
      </svg>
    </div>
  );
}

function GoldChip() {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-accent-500/12 border border-accent-400/30 px-4 py-2.5">
      <span className="inline-block w-2 h-2 rounded-full bg-accent-400" aria-hidden="true" />
      <span className="text-sm font-semibold text-accent-200">Gold layer</span>
      <span className="text-xs text-accent-300/70">business-ready data</span>
    </div>
  );
}

function SurfaceTile({
  name,
  value,
  consistent,
}: {
  name: string;
  value: string;
  consistent: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-lg border px-3 py-3 text-center transition-colors',
        consistent
          ? 'bg-brand-500/10 border-brand-400/30'
          : 'bg-glass-bg border-glass-border',
      )}
    >
      <div className="text-[11px] font-medium tracking-wide text-text-light/55 mb-1">
        {name}
      </div>
      <div
        className={cn(
          'text-lg font-bold tabular-nums',
          consistent ? 'text-brand-200' : 'text-text-light/90',
        )}
      >
        {value}
      </div>
    </div>
  );
}

export function SemanticLayerModel() {
  const [activeId, setActiveId] = useState<string>('mrr');
  const metric = METRICS.find((m) => m.id === activeId) ?? METRICS[0];

  return (
    <Section tone="dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-300 mb-3">
            Analytics Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4 text-balance">
            One Metric. One Definition. Every Dashboard.
          </h2>
          <p className="text-text-light/80 max-w-2xl mx-auto text-lg text-pretty">
            The gap between trusted data and a dashboard people believe is the semantic
            layer. Define each metric once — and five dashboards stop showing five
            different revenue numbers.
          </p>
        </div>

        {/* Metric selector */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="radiogroup"
          aria-label="Choose a metric to compare"
        >
          <span className="text-xs uppercase tracking-wider text-text-light/40 mr-1 w-full text-center sm:w-auto sm:text-left">
            Pick a metric
          </span>
          {METRICS.map((m) => {
            const isActive = m.id === activeId;
            return (
              <button
                key={m.id}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setActiveId(m.id)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold border transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60',
                  isActive
                    ? 'bg-brand-500/20 border-brand-400/50 text-brand-100'
                    : 'bg-glass-bg border-glass-border text-text-light/70 hover:border-brand-400/30 hover:text-text-light',
                )}
              >
                {m.short}
              </button>
            );
          })}
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* LEFT — without governed layer */}
          <div className="rounded-2xl border border-glass-border bg-glass-bg p-6 lg:p-7">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-text-light/50">
                Without a governed layer
              </span>
            </div>
            <p className="text-sm text-text-light/65 mb-6 leading-relaxed">
              Every team re-derives{' '}
              <span className="text-text-light font-medium">{metric.short}</span> in
              their own tool. Same Gold data, four definitions.
            </p>

            <GoldChip />
            <LayerConnector />

            <div className="grid grid-cols-2 gap-3">
              {SURFACES.map((name, i) => (
                <SurfaceTile
                  key={name}
                  name={name}
                  value={metric.diverging[i]}
                  consistent={false}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-surface-elevated/50 px-3 py-2.5">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-accent-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
              <span className="text-xs text-text-light/70">
                Four surfaces, four numbers. Which one does the board see?
              </span>
            </div>
          </div>

          {/* RIGHT — with analytics engineering */}
          <div className="rounded-2xl border border-brand-400/30 bg-surface-elevated p-6 lg:p-7 ring-1 ring-brand-400/10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-300">
                With analytics engineering
              </span>
            </div>
            <p className="text-sm text-text-light/70 mb-6 leading-relaxed">
              <span className="text-text-light font-medium">{metric.short}</span> is
              defined once in a governed semantic layer. Every surface reads the same
              number.
            </p>

            <GoldChip />
            <LayerConnector />

            {/* Semantic layer card */}
            <div className="rounded-xl border border-brand-400/40 bg-brand-500/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-brand-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                  <path d="M2 12.5a1 1 0 0 0 .59.91l8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 .59-.91" />
                  <path d="M2 17a1 1 0 0 0 .59.91l8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9A1 1 0 0 0 22 17" />
                </svg>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-200">
                  Semantic layer
                </span>
                <span className="ml-auto text-[11px] text-brand-300/70 font-medium">
                  {metric.label}
                </span>
              </div>
              <p className="text-xs text-text-light/75 leading-relaxed">
                {metric.definition}
              </p>
            </div>
            <LayerConnector />

            <div className="grid grid-cols-2 gap-3">
              {SURFACES.map((name) => (
                <SurfaceTile
                  key={name}
                  name={name}
                  value={metric.governed}
                  consistent
                />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-brand-500/10 px-3 py-2.5">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-brand-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-xs text-text-light/80">
                Defined once. Governed. Identical everywhere.
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-text-light/35 mt-8">
          Illustrative comparison — switch metrics to see how a governed definition holds
          across every dashboard.
        </p>
      </Container>
    </Section>
  );
}
