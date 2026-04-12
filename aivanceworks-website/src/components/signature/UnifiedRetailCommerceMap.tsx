/**
 * UnifiedRetailCommerceMap — signature section for Retail Websites page.
 *
 * Desktop: three horizontal bands stacked top-to-bottom.
 *   Band 1 — Customer touchpoints (4 channel tiles)
 *   Band 2 — Unified Commerce Core (centered card with 4 pillars)
 *   Band 3 — Operational systems (4 tiles)
 * Soft gradient connectors suggest the flow between bands.
 *
 * Mobile (< md): bands collapse to single-column stack. Channel tiles reflow
 * 4 → 2 → 1. Core card stays prominent. Ops tiles reflow 4 → 2.
 *
 * Argument the visual carries: "One commerce core. Every channel and store
 * reads from — and writes to — the same inventory, customer, and order truth.
 * No siloed data, no cancelled orders, no duplicate loyalty accounts."
 *
 * Content integrity: no outcome numbers, no stats chips, no vendor name-drops.
 * Every tile is a capability description. Vendor names are woven into the
 * feature prose and FAQs elsewhere on the page where the buyer needs
 * credibility signals.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */

import {
  Globe,
  Smartphone,
  Store,
  Share2,
  Package,
  Users,
  ShoppingBag,
  Gift,
  ScanLine,
  Warehouse,
  LineChart,
  Megaphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Node {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const TOUCHPOINTS: ReadonlyArray<Node> = [
  {
    icon: Globe,
    title: 'Web storefront',
    sub: 'Brand-led editorial + commerce',
  },
  {
    icon: Smartphone,
    title: 'Mobile & PWA',
    sub: 'Native-feel shop, scan & pay',
  },
  {
    icon: Store,
    title: 'In-store POS',
    sub: 'Associate clienteling & endless aisle',
  },
  {
    icon: Share2,
    title: 'Social & marketplaces',
    sub: 'Shoppable posts, Amazon, eBay',
  },
];

const CORE_PILLARS: ReadonlyArray<Node> = [
  {
    icon: Package,
    title: 'Unified inventory',
    sub: 'Every store, every DC, one ledger',
  },
  {
    icon: Users,
    title: 'Single customer profile',
    sub: 'Shared across web, mobile & store',
  },
  {
    icon: ShoppingBag,
    title: 'Order orchestration',
    sub: 'BOPIS, ship-from-store, curbside',
  },
  {
    icon: Gift,
    title: 'Loyalty & wallet',
    sub: 'Earn anywhere, redeem anywhere',
  },
];

const OPERATIONAL: ReadonlyArray<Node> = [
  {
    icon: ScanLine,
    title: 'POS & ERP',
    sub: 'Connects to your store and finance stack',
  },
  {
    icon: Warehouse,
    title: 'Warehouse & 3PL',
    sub: 'Real-time stock and fulfilment',
  },
  {
    icon: Megaphone,
    title: 'CDP & marketing',
    sub: 'Segmentation, email, lifecycle',
  },
  {
    icon: LineChart,
    title: 'Analytics & BI',
    sub: 'One dataset, every dashboard',
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

const OpsTile = ({ node }: { node: Node }) => {
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

const CorePillar = ({ node }: { node: Node }) => {
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

export const UnifiedRetailCommerceMap = () => (
  <Section tone="dark" size="lg" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          Unified retail, one data spine
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Every channel, every store, one source of truth.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Shoppers don&rsquo;t think in channels — they think in brands. The site, the
          app, the store, and the marketplace all read from and write to the
          same inventory, customer, and order core.
        </p>
      </div>

      <div className="relative">
        {/* Band 1 — Customer touchpoints */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 md:mb-4">
            Customer touchpoints
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {TOUCHPOINTS.map((node, idx) => (
              <ChannelTile key={idx} node={node} />
            ))}
          </div>
        </div>

        <Connector label="Reads from · writes to" />

        {/* Band 2 — Unified Commerce Core */}
        <div className="relative">
          <div className="bg-gradient-to-br from-brand-700/40 via-brand-600/25 to-accent-500/25 border border-brand-400/40 rounded-2xl p-6 md:p-8 shadow-brand-panel">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5 md:mb-6">
              <div>
                <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">
                  Unified commerce core
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-text-light tracking-tight">
                  One inventory. One customer. One order book.
                </div>
              </div>
              <div className="hidden md:block text-xs text-text-subtle max-w-[18rem] text-right leading-snug">
                Headless APIs expose the same commerce truth to every channel
                above and every system below.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {CORE_PILLARS.map((node, idx) => (
                <CorePillar key={idx} node={node} />
              ))}
            </div>
          </div>
        </div>

        <Connector label="Syncs with · orchestrates" />

        {/* Band 3 — Operational systems */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-accent-400 mb-3 md:mb-4">
            Operational systems
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {OPERATIONAL.map((node, idx) => (
              <OpsTile key={idx} node={node} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
