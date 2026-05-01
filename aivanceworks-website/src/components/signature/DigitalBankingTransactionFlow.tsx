/**
 * DigitalBankingTransactionFlow — signature section for Digital Banking & Wallets.
 *
 * Rewritten 2026-04-29 for the operator-stack positioning (was: bank-as-buyer
 * single integrated platform). Component name preserved to avoid registry +
 * import-path churn; the file's argument is what changed.
 *
 * Desktop: three horizontal bands stacked top-to-bottom.
 *   Band 1 (top) — Your operator product surface (5 input tiles: Mobile App,
 *     Web, Embedded SDK, Wallet, Partner channels)
 *   Band 2 (middle) — AIvanceWorks integration layer (centered core card with
 *     6 integration responsibilities: Identity orchestration, Funding flows,
 *     Transaction routing, AML/monitoring routing, Reconciliation, Examiner
 *     export)
 *   Band 3 (bottom) — Ecosystem partners (6 output tiles: Sponsor bank, BaaS
 *     provider, Core platform, KYC vendor, AML vendor, Card issuer)
 * Soft gradient connectors suggest the flow between bands — operator product
 * traffic flows down into AIvanceWorks integration responsibilities, vendor
 * obligations flow up from the ecosystem partners.
 *
 * Mobile (< md): bands collapse to single-column stack. Tile grids reflow
 * 5/6 → 3 → 2 → 1. Core card stays prominent. Integration responsibilities
 * reflow 6 → 3 → 2.
 *
 * Argument the visual carries: "You ship one product. We integrate the stack
 * underneath it. The BaaS provider, sponsor bank, KYC vendor, AML vendor, and
 * card issuer collectively are the engine — we orchestrate them on your behalf
 * so you ship one coherent operator product."
 *
 * Content integrity: no outcome numbers, no stats chips, no vendor
 * name-drops as standalone logos or endorsements. Vendor names appear
 * as category-example captions in the bottom-band tile descriptions
 * (e.g., "Unit, Treasury Prime, Synctera, Column, Stripe" as examples
 * of BaaS providers); these are prose descriptions of category
 * partners, not partner badges. Full vendor list also appears in the
 * integration panel elsewhere on the page.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */

import {
  Smartphone,
  Globe,
  Wallet,
  ArrowLeftRight,
  Code2,
  UserCheck,
  Banknote,
  ArrowRightLeft,
  Activity,
  FileCheck,
  Building2,
  ServerCog,
  Database,
  ShieldCheck,
  Eye,
  CreditCard,
  BookOpen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Node {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const CHANNEL_INPUTS: ReadonlyArray<Node> = [
  {
    icon: Smartphone,
    title: 'Mobile app',
    sub: 'Your branded iOS / Android product',
  },
  {
    icon: Globe,
    title: 'Web',
    sub: 'Your authenticated web experience',
  },
  {
    icon: Code2,
    title: 'Embedded SDK',
    sub: 'Finance features inside your product',
  },
  {
    icon: Wallet,
    title: 'Wallet',
    sub: 'Stored value, P2P, contactless',
  },
  {
    icon: ArrowLeftRight,
    title: 'Partner channels',
    sub: 'Marketplace, gig, B2B integrations',
  },
];

const ORCHESTRATION_STAGES: ReadonlyArray<Node> = [
  {
    icon: UserCheck,
    title: 'Identity orchestration',
    sub: 'KYC / KYB across multiple vendors',
  },
  {
    icon: Banknote,
    title: 'Funding flows',
    sub: 'ACH, debit, external account linking',
  },
  {
    icon: ArrowRightLeft,
    title: 'Transaction routing',
    sub: 'Rails, holds, limits, dispute paths',
  },
  {
    icon: Activity,
    title: 'AML / monitoring routing',
    sub: 'Vendor rules + case workflows',
  },
  {
    icon: BookOpen,
    title: 'Reconciliation',
    sub: 'Platform ledger ↔ partner-bank ledger',
  },
  {
    icon: FileCheck,
    title: 'Examiner export',
    sub: 'Evidence packages on demand',
  },
];

const INFRA_OUTPUTS: ReadonlyArray<Node> = [
  {
    icon: Building2,
    title: 'Sponsor bank',
    sub: 'Lead, Cross River, Sutton, Pacific West',
  },
  {
    icon: ServerCog,
    title: 'BaaS provider',
    sub: 'Unit, Treasury Prime, Synctera, Column, Stripe',
  },
  {
    icon: Database,
    title: 'Core platform',
    sub: 'Mambu, Thought Machine, Finxact, sdk.finance',
  },
  {
    icon: ShieldCheck,
    title: 'KYC vendor',
    sub: 'Alloy, Persona, Socure, Sumsub',
  },
  {
    icon: Eye,
    title: 'AML vendor',
    sub: 'Hummingbird, Unit21, Sardine, Feedzai',
  },
  {
    icon: CreditCard,
    title: 'Card issuer',
    sub: 'Marqeta, Galileo, Lithic, Stripe Issuing',
  },
];

const ChannelTile = ({ node }: { node: Node }) => {
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

const InfraTile = ({ node }: { node: Node }) => {
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

const OrchestrationStage = ({ node }: { node: Node }) => {
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

export const DigitalBankingTransactionFlow = () => (
  <Section tone="dark" size="lg" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          One product on top. One stack underneath.
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          You ship one product. We integrate the stack underneath it.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Your operator product surface flows down into the integration layer
          we engineer for you. The BaaS provider, sponsor bank, KYC vendor,
          AML vendor, and card issuer collectively carry the regulated weight
          &mdash; we orchestrate them on your behalf so your customers see
          one coherent product.
        </p>
      </div>

      <div className="relative">
        {/* Band 1 — Digital channels */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 md:mb-4">
            Your operator product surface &mdash; what your customers touch
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {CHANNEL_INPUTS.map((node, idx) => (
              <ChannelTile key={idx} node={node} />
            ))}
          </div>
        </div>

        <Connector label="Customer requests \u00B7 product events" />

        {/* Band 2 — Transaction orchestration engine */}
        <div className="relative">
          <div className="bg-gradient-to-br from-brand-700/40 via-brand-600/25 to-accent-500/25 border border-brand-400/40 rounded-2xl p-6 md:p-8 shadow-brand-panel">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5 md:mb-6">
              <div>
                <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">
                  AIvanceWorks integration layer
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-text-light tracking-tight">
                  Identity. Funding. Transactions. Reconciliation. Evidence.
                </div>
              </div>
              <div className="hidden md:block text-xs text-text-subtle max-w-[20rem] text-right leading-snug">
                Six integration responsibilities woven across your BaaS,
                sponsor bank, KYC, AML, and card-issuer vendors &mdash; so
                your team ships product, not vendor glue.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {ORCHESTRATION_STAGES.map((node, idx) => (
                <OrchestrationStage key={idx} node={node} />
              ))}
            </div>
          </div>
        </div>

        <Connector label="Vendor APIs \u00B7 ledgers \u00B7 evidence" />

        {/* Band 3 — Infrastructure & payment rails */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-accent-400 mb-3 md:mb-4">
            Ecosystem partners &mdash; who carries the regulated weight
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {INFRA_OUTPUTS.map((node, idx) => (
              <InfraTile key={idx} node={node} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
