/**
 * PolicyLifecycleControlPlane — signature section for Policy Administration Systems.
 *
 * Desktop: three horizontal bands stacked top-to-bottom.
 *   Band 1 — Product factory (4 input tiles: rate decks, forms, coverages, eligibility)
 *   Band 2 — Policy lifecycle engine (centered core card with 6 stage pillars)
 *   Band 3 — Evidence & integration layer (4 output tiles: audit, filing, billing/claims, reinsurance)
 * Soft gradient connectors suggest the flow between bands — configuration flows
 * down into the lifecycle, evidence flows up and out to downstream systems.
 *
 * Mobile (< md): bands collapse to single-column stack. Factory tiles reflow
 * 4 → 2 → 1. Core card stays prominent. Lifecycle pillars reflow 6 → 3 → 2.
 * Evidence tiles reflow 4 → 2.
 *
 * Argument the visual carries: "One control plane owns every policy. Product
 * changes flow down through the lifecycle; filed-rate and audit evidence flow
 * up and out to every downstream system. Not a box of modules — a control plane."
 *
 * Content integrity: no outcome numbers, no stats chips, no vendor name-drops
 * inside the diagram. Every tile is a capability description. Vendor names are
 * woven into feature prose and integration panel elsewhere on the page where
 * the buyer needs the credibility signal.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */

import {
  Layers,
  FileStack,
  ShieldCheck,
  Filter,
  Calculator,
  FileSignature,
  FileCheck,
  RefreshCw,
  Repeat,
  XCircle,
  Activity,
  Send,
  Receipt,
  BarChart3,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Node {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const FACTORY_INPUTS: ReadonlyArray<Node> = [
  {
    icon: Layers,
    title: 'Rate decks',
    sub: 'Per state, per line, versioned',
  },
  {
    icon: FileStack,
    title: 'Coverage forms',
    sub: 'Endorsement library & versions',
  },
  {
    icon: ShieldCheck,
    title: 'Coverages & limits',
    sub: 'Product definitions, eligibility',
  },
  {
    icon: Filter,
    title: 'Rules & guardrails',
    sub: 'Appetite, authority, referrals',
  },
];

const LIFECYCLE_STAGES: ReadonlyArray<Node> = [
  {
    icon: Calculator,
    title: 'Quote',
    sub: 'Rated, stamped, versioned',
  },
  {
    icon: FileSignature,
    title: 'Bind',
    sub: 'Rate version locked in',
  },
  {
    icon: FileCheck,
    title: 'Issue',
    sub: 'Documents, notices, billing',
  },
  {
    icon: RefreshCw,
    title: 'Endorse',
    sub: 'Mid-term change, pro-rata math',
  },
  {
    icon: Repeat,
    title: 'Renew',
    sub: 'Batch, configurable rules',
  },
  {
    icon: XCircle,
    title: 'Cancel / Reinstate',
    sub: 'Short-rate, auditable reasons',
  },
];

const EVIDENCE_OUTPUTS: ReadonlyArray<Node> = [
  {
    icon: Activity,
    title: 'Event-sourced audit',
    sub: 'Every action, replayable',
  },
  {
    icon: Send,
    title: 'SERFF filing packages',
    sub: 'Rate-version traceable',
  },
  {
    icon: Receipt,
    title: 'Billing & claims bridge',
    sub: 'Policy-event driven',
  },
  {
    icon: BarChart3,
    title: 'Reinsurance & reporting',
    sub: 'Cession ledger, DOI exports',
  },
];

const FactoryTile = ({ node }: { node: Node }) => {
  const Icon = node.icon;
  return (
    <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-4 md:p-5 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-3">
        <Icon className="h-5 w-5 text-brand-300" aria-hidden="true" />
      </div>
      <div className="text-sm md:text-base font-bold text-text-light leading-tight">
        {node.title}
      </div>
      <div className="text-xs md:text-sm text-text-subtle leading-snug mt-1">
        {node.sub}
      </div>
    </div>
  );
};

const EvidenceTile = ({ node }: { node: Node }) => {
  const Icon = node.icon;
  return (
    <div className="bg-surface-elevated border border-border-dark rounded-xl p-4 md:p-5 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-accent-500/15 border border-accent-500/30 flex items-center justify-center mb-3">
        <Icon className="h-5 w-5 text-accent-400" aria-hidden="true" />
      </div>
      <div className="text-sm md:text-base font-bold text-text-light leading-tight">
        {node.title}
      </div>
      <div className="text-xs md:text-sm text-text-subtle leading-snug mt-1">
        {node.sub}
      </div>
    </div>
  );
};

const LifecycleStage = ({ node }: { node: Node }) => {
  const Icon = node.icon;
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-brand-500/25 border border-brand-400/40 flex items-center justify-center flex-shrink-0">
        <Icon className="h-4 w-4 text-brand-200" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-sm md:text-base font-bold text-text-light leading-tight">
          {node.title}
        </div>
        <div className="text-xs md:text-sm text-text-subtle leading-snug mt-0.5">
          {node.sub}
        </div>
      </div>
    </div>
  );
};

const Connector = ({ label }: { label: string }) => (
  <div
    className="relative flex items-center justify-center py-4 md:py-6"
    aria-hidden="true"
  >
    <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    <div className="relative bg-surface-dark px-4 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-text-subtle">
      {label}
    </div>
  </div>
);

export const PolicyLifecycleControlPlane = () => (
  <Section tone="dark" size="lg" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          One control plane, every policy
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Product flows down. Evidence flows up. Every policy, every state.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Configurable rate decks, forms, and rules feed the lifecycle engine
          from above. Every policy event writes an append-only audit trail that
          feeds filings, billing, claims, and reinsurance from below. One
          system of truth &mdash; not a box of modules stitched together at
          monthly close.
        </p>
      </div>

      <div className="relative">
        {/* Band 1 — Product factory */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 md:mb-4">
            Product factory &mdash; configuration, not code
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {FACTORY_INPUTS.map((node, idx) => (
              <FactoryTile key={idx} node={node} />
            ))}
          </div>
        </div>

        <Connector label="Configures · versions" />

        {/* Band 2 — Policy lifecycle engine */}
        <div className="relative">
          <div className="bg-gradient-to-br from-brand-700/40 via-brand-600/25 to-accent-500/25 border border-brand-400/40 rounded-2xl p-6 md:p-8 shadow-brand-panel">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5 md:mb-6">
              <div>
                <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">
                  Policy lifecycle engine
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-text-light tracking-tight">
                  Event-sourced. Replayable. Rate-version stamped.
                </div>
              </div>
              <div className="hidden md:block text-xs text-text-subtle max-w-[20rem] text-right leading-snug">
                Every policy event is an append-only record &mdash; with actor,
                inputs, rules fired, and outcome &mdash; persisted for replay,
                audit, and point-in-time reconstruction.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {LIFECYCLE_STAGES.map((node, idx) => (
                <LifecycleStage key={idx} node={node} />
              ))}
            </div>
          </div>
        </div>

        <Connector label="Emits · evidences · hands off" />

        {/* Band 3 — Evidence & integration layer */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-accent-400 mb-3 md:mb-4">
            Evidence & integration layer
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {EVIDENCE_OUTPUTS.map((node, idx) => (
              <EvidenceTile key={idx} node={node} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
