/**
 * ClientWealthCanvas — signature section for Wealth & Investment Management.
 *
 * Desktop: three horizontal bands stacked top-to-bottom.
 *   Band 1 — How wealth gets in (4 input tiles: manual entry, custodian feeds,
 *            bank account aggregation, planning & document feeds)
 *   Band 2 — The unified client (centered core card with a client-type strip
 *            — Individual · Household · Trust · Family Office · Institutional —
 *            and 6 wealth-domain pillars: real estate & titled assets,
 *            business interests & private equity, brokerage & retirement,
 *            cash & liquid across banks, insurance / trusts / alternatives,
 *            liabilities & mortgages. Live net-worth callout in the header.)
 *   Band 3 — What the advisor does next (4 output tiles: proposed allocation &
 *            IPS, budget plan & cash flow, meeting deck & quarterly review,
 *            suitability / KYC / source-of-wealth file)
 * Soft gradient connectors suggest the flow between bands — every wealth
 * source flows down into the unified client canvas; advisor actions flow out
 * of it into the practice.
 *
 * Mobile (< md): bands collapse to single-column stack. Source tiles reflow
 * 4 → 2 → 1. Core card stays prominent. Wealth-domain pillars reflow
 * 6 → 3 → 2. Client-type strip wraps. Output tiles reflow 4 → 2.
 *
 * Argument the visual carries: "One screen, every asset, every entity. The
 * advisor opens the client's profile and walks the meeting from there —
 * across individual, household, trust, family office, and institutional
 * relationships, custodied and non-custodied wealth alike."
 *
 * Content integrity: no outcome numbers, no advisor productivity stats, no
 * vendor name-drops inside the diagram. Every tile is a capability
 * description. Vendor names (Schwab, Fidelity, Pershing, Salesforce FSC,
 * eMoney, Plaid, etc.) live in feature prose and the integration panel where
 * the buyer needs the credibility signal.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */

import {
  PencilLine,
  Database,
  Landmark,
  ClipboardList,
  Home,
  Briefcase,
  LineChart,
  Wallet,
  Gem,
  CreditCard,
  PieChart,
  Calculator,
  Presentation,
  ClipboardCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Node {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const SOURCE_INPUTS: ReadonlyArray<Node> = [
  {
    icon: PencilLine,
    title: 'Manual entry',
    sub: 'Homes, businesses, art, partnership stakes',
  },
  {
    icon: Database,
    title: 'Custodian feeds',
    sub: 'Positions, transactions, tax lots',
  },
  {
    icon: Landmark,
    title: 'Bank & account aggregation',
    sub: 'Multi-bank cash, held-away accounts, liabilities',
  },
  {
    icon: ClipboardList,
    title: 'Planning & document feeds',
    sub: 'Plans, goals, KYC, source-of-wealth',
  },
];

const WEALTH_DOMAINS: ReadonlyArray<Node> = [
  {
    icon: Home,
    title: 'Real estate & titled assets',
    sub: 'Homes, vehicles, collectibles, ownership entity',
  },
  {
    icon: Briefcase,
    title: 'Business interests & private equity',
    sub: 'LLC stakes, partnership interests, K-1 entities',
  },
  {
    icon: LineChart,
    title: 'Brokerage & retirement',
    sub: 'Taxable, IRA, 401(k), 529, deferred comp',
  },
  {
    icon: Wallet,
    title: 'Cash & liquid across banks',
    sub: 'Multi-bank checking, savings, money market',
  },
  {
    icon: Gem,
    title: 'Insurance, trusts & alternatives',
    sub: 'Cash value, trust holdings, alts, hedge stakes',
  },
  {
    icon: CreditCard,
    title: 'Liabilities & mortgages',
    sub: 'Mortgages, lines of credit, secured loans',
  },
];

const ADVISOR_OUTPUTS: ReadonlyArray<Node> = [
  {
    icon: PieChart,
    title: 'Proposed allocation & IPS',
    sub: 'Risk-fit proposal, IPS, acceptance tracking',
  },
  {
    icon: Calculator,
    title: 'Budget plan & cash flow',
    sub: 'Income, expenses, surplus, goal funding',
  },
  {
    icon: Presentation,
    title: 'Meeting deck & quarterly review',
    sub: 'Performance, drift, goals, action items',
  },
  {
    icon: ClipboardCheck,
    title: 'Suitability, KYC & source-of-wealth',
    sub: 'Risk profile, accredited status, file complete',
  },
];

const CLIENT_TYPES: ReadonlyArray<string> = [
  'Individual',
  'Household',
  'Trust',
  'Family Office',
  'Institutional',
];

const SourceTile = ({ node }: { node: Node }) => {
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

const OutputTile = ({ node }: { node: Node }) => {
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

const DomainPillar = ({ node }: { node: Node }) => {
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

export const ClientWealthCanvas = () => (
  <Section tone="dark" size="lg" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          One screen, every asset, every entity
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          The advisor opens the client&apos;s profile and walks the meeting from
          there.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Custodied positions, multi-bank cash, real estate, business interests,
          trusts, and liabilities &mdash; assembled into one unified client
          canvas across individual, household, trust, family office, and
          institutional relationships. Manual where wealth lives outside the
          custodian; connected where the data lives in your bank, custodial,
          and planning stack.
        </p>
      </div>

      <div className="relative">
        {/* Band 1 — How wealth gets in */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 md:mb-4">
            How wealth gets in &mdash; manual + connected
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {SOURCE_INPUTS.map((node, idx) => (
              <SourceTile key={idx} node={node} />
            ))}
          </div>
        </div>

        <Connector label="Ingested · attributed · valued" />

        {/* Band 2 — The unified client */}
        <div className="relative">
          <div className="bg-gradient-to-br from-brand-700/40 via-brand-600/25 to-accent-500/25 border border-brand-400/40 rounded-2xl p-6 md:p-8 shadow-brand-panel">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5 md:mb-6">
              <div>
                <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">
                  The unified client
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-text-light tracking-tight">
                  Every account, every entity. Live net worth.
                </div>
              </div>
              <div className="hidden md:block text-xs text-text-subtle max-w-[20rem] text-right leading-snug">
                One canvas across custodied and non-custodied wealth, multi-entity
                ownership, and every account in the relationship &mdash; computed
                live as the picture changes.
              </div>
            </div>

            {/* Client-type strip */}
            <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
              {CLIENT_TYPES.map((type, idx) => (
                <span
                  key={idx}
                  className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-brand-100 bg-brand-700/40 border border-brand-400/40 rounded-full px-3 py-1"
                >
                  {type}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {WEALTH_DOMAINS.map((node, idx) => (
                <DomainPillar key={idx} node={node} />
              ))}
            </div>
          </div>
        </div>

        <Connector label="Proposed · planned · reviewed" />

        {/* Band 3 — What the advisor does next */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-accent-400 mb-3 md:mb-4">
            What the advisor does next &mdash; the practice, in motion
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {ADVISOR_OUTPUTS.map((node, idx) => (
              <OutputTile key={idx} node={node} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
