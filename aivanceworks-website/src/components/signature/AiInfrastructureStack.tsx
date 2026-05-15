/**
 * AiInfrastructureStack — signature section for the C10 AI Infrastructure
 * solution page.
 *
 * Visualization pattern: Hierarchical / architectural (§8.3 pattern 2) —
 * four horizontal tiers of an AI infrastructure stack (Workloads → Compute &
 * Orchestration → Data & Memory → Network, Identity & Cost foundation), with
 * left/right engineering annotations and a workload anchor caption beneath.
 *
 * Argument: "AI infrastructure is a stack of decisions — workload, compute,
 * data, and foundation. We engineer each tier with portability, cost
 * guardrails, and observability designed in from day one."
 *
 * Liability note: every label on this component is written as engineering
 * capability or design awareness, not as a partnership, certification, or
 * vendor endorsement. Final architecture choices, cloud-provider selection,
 * and operational ownership remain with the customer.
 *
 * Desktop: stacked horizontal tiers with side annotations flanking the stack.
 * Mobile (< lg): tiers stack vertically. Side annotations move below the
 *   stack as a 2-column grid (or 1-column on very narrow screens).
 */

import {
  Brain,
  Cpu,
  Database,
  Network,
  Layers,
  Workflow,
  Boxes,
  Gauge,
  Activity,
  ShieldCheck,
  Lock,
  TrendingDown,
  CloudCog,
  Server,
  HardDrive,
  GitBranch,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface TierItem {
  icon: React.ElementType;
  label: string;
}

interface Tier {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  emphasis: 'primary' | 'secondary';
  items: TierItem[];
}

const TIERS: Tier[] = [
  {
    number: '01',
    title: 'AI Workload Tier',
    subtitle: 'The work your platform exists to run',
    icon: Brain,
    emphasis: 'primary',
    items: [
      { icon: Cpu, label: 'Model training & fine-tuning workloads' },
      { icon: Activity, label: 'Real-time inference & batch scoring' },
      { icon: Workflow, label: 'Agentic, RAG, and multi-step AI pipelines' },
      { icon: GitBranch, label: 'Versioned model and prompt rollouts' },
    ],
  },
  {
    number: '02',
    title: 'Compute & Orchestration Tier',
    subtitle: 'Right-sized capacity, scheduled to fit',
    icon: Server,
    emphasis: 'primary',
    items: [
      { icon: Cpu, label: 'GPU and CPU pools with workload affinity' },
      { icon: Boxes, label: 'Container orchestration and autoscaling' },
      { icon: Workflow, label: 'Job scheduling and queue isolation' },
      { icon: TrendingDown, label: 'Spot, reserved, and on-demand cost mixing' },
    ],
  },
  {
    number: '03',
    title: 'Data & Memory Tier',
    subtitle: 'Where your AI workloads actually feed from',
    icon: Database,
    emphasis: 'primary',
    items: [
      { icon: HardDrive, label: 'Object, block, and lakehouse storage' },
      { icon: Database, label: 'Vector stores and embedding pipelines' },
      { icon: Layers, label: 'Feature stores and offline / online splits' },
      { icon: GitBranch, label: 'Dataset versioning and lineage tracking' },
    ],
  },
];

const FOUNDATION_ITEMS: TierItem[] = [
  { icon: Network, label: 'Network fabric with private routing and zone isolation' },
  { icon: Lock, label: 'Identity, secrets, and key management with least-privilege defaults' },
  { icon: TrendingDown, label: 'Cost guardrails, budgets, and chargeback by workload' },
  { icon: Gauge, label: 'Observability for compute, data, model, and cost' },
];

interface Annotation {
  title: string;
  description: string;
  variant: 'brand' | 'accent' | 'success';
}

const LEFT_ANNOTATIONS: Annotation[] = [
  {
    title: 'Designed for portability',
    description:
      'Infrastructure described as code with provider-aware abstractions, so a workload can move across regions or cloud providers without rewriting the platform.',
    variant: 'brand',
  },
  {
    title: 'Cost guardrails baked in from day one',
    description:
      'Budgets, quotas, and per-workload chargeback are platform features — not a quarterly cleanup after a runaway GPU bill.',
    variant: 'accent',
  },
];

const RIGHT_ANNOTATIONS: Annotation[] = [
  {
    title: 'Observability across every tier',
    description:
      'Compute utilization, data freshness, model performance, and spend are surfaced through one telemetry layer — so platform, data, and AI teams read the same dashboard.',
    variant: 'brand',
  },
  {
    title: 'Resilience designed, not assumed',
    description:
      'Failure domains, retry semantics, queue isolation, and recovery paths are explicit engineering decisions — so a single zone, model, or job failure does not cascade across the platform.',
    variant: 'success',
  },
];

const VARIANT_BORDERS: Record<Annotation['variant'], string> = {
  brand: 'border-l-brand-500',
  accent: 'border-l-accent-500',
  success: 'border-l-brand-400',
};

const TierCard = ({ tier }: { tier: Tier }) => {
  const Icon = tier.icon;
  return (
    <div
      className={
        'rounded-2xl border p-5 md:p-6 ' +
        (tier.emphasis === 'primary'
          ? 'bg-gradient-to-b from-accent-500/15 to-brand-500/10 border-accent-500/40'
          : 'bg-brand-500/10 border-brand-500/30')
      }
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-brand-300" strokeWidth={2} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
            Tier {tier.number}
          </span>
          <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
            {tier.title}
          </h3>
          <p className="text-xs md:text-sm text-text-subtle leading-relaxed mt-1">
            {tier.subtitle}
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
        {tier.items.map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs md:text-sm text-text-light/90"
            >
              <ItemIcon
                className="w-4 h-4 text-brand-400 mt-0.5 shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="leading-relaxed">{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const AnnotationCard = ({ ann }: { ann: Annotation }) => (
  <div
    className={
      'bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-l-[3px] rounded-r-xl p-4 md:p-5 ' +
      VARIANT_BORDERS[ann.variant]
    }
  >
    <div className="text-sm md:text-base font-bold text-text-light leading-tight">
      {ann.title}
    </div>
    <div className="text-xs md:text-sm text-text-subtle mt-1.5 leading-relaxed">
      {ann.description}
    </div>
  </div>
);

export const AiInfrastructureStack = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The AI infrastructure stack
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Four tiers of AI infrastructure on one engineering foundation.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Workloads, compute, data, and a network-identity-cost-observability
          foundation. We engineer each tier with portability, cost guardrails,
          and observability designed in from day one — so the platform scales
          with your AI roadmap instead of fighting it.
        </p>
      </div>

      {/* Desktop: annotations flank the stack. Mobile: stack first, annotations below. */}
      <div className="grid gap-6 lg:grid-cols-[1fr_3fr_1fr] lg:gap-8 items-start">
        {/* Left annotations (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4">
          {LEFT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>

        {/* Center: the layered stack */}
        <div className="relative">
          <div className="border-2 border-dashed border-brand-400/40 rounded-3xl p-4 sm:p-6 md:p-8 relative">
            {/* Top label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
                Engineered as one platform
              </span>
            </div>

            {/* Stacked tiers */}
            <div className="space-y-4 md:space-y-5">
              {TIERS.map((tier) => (
                <TierCard key={tier.number} tier={tier} />
              ))}
            </div>

            {/* Foundation bar */}
            <div className="mt-5 md:mt-6 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/40 flex items-center justify-center shrink-0">
                  <ShieldCheck
                    className="w-5 h-5 text-accent-300"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent-300">
                    The foundation
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
                    Network, identity, cost & observability — by design
                  </h3>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                {FOUNDATION_ITEMS.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs md:text-sm text-text-light/90"
                    >
                      <ItemIcon
                        className="w-4 h-4 text-accent-300 mt-0.5 shrink-0"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom anchor caption */}
            <div className="mt-4 flex flex-wrap justify-center items-center gap-2 text-[10px] sm:text-xs text-brand-400">
              <CloudCog className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
              <span className="uppercase tracking-wider font-semibold">
                Prototype → Pilot → Production → Multi-region → Steady-state
              </span>
            </div>
          </div>
        </div>

        {/* Right annotations (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4">
          {RIGHT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>
      </div>

      {/* Mobile annotations — under the stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 lg:hidden">
        {[...LEFT_ANNOTATIONS, ...RIGHT_ANNOTATIONS].map((ann, idx) => (
          <AnnotationCard key={idx} ann={ann} />
        ))}
      </div>
    </Container>
  </Section>
);
