/**
 * RandomizationSupplyControlPlane — signature section for the Randomization
 * and Trial Supply Management (RTSM / IRT) solution page.
 *
 * Visualization pattern: hierarchical / role-aware (§8.3 patterns 2 + 4) —
 * three horizontal bands (design → conduct → supply) each split by a vertical
 * blinding boundary into a blinded lane (what study coordinators, CRAs, and
 * sites see) and an unblinded lane (what the unblinded pharmacist,
 * statistician, and clinical supply manager see).
 *
 *   Band 1 — Design plane
 *     · Blinded:   Protocol & visit schedule, stratification factors (display)
 *     · Unblinded: Randomization list, treatment arms, drug pool plan
 *
 *   Band 2 — Conduct plane
 *     · Blinded:   Subject screen → randomization request → kit ID at visit
 *     · Unblinded: Treatment assignment, drug pool consumption, lot detail
 *
 *   Band 3 — Supply plane
 *     · Blinded:   Site kit count (numbers only, no arm detail)
 *     · Unblinded: Depot inventory, shipments, expiry / resupply forecast
 *
 * Argument the visual carries: "Randomization, dispensation, and resupply sit
 * on one engine — and the blinding boundary is enforced in the data model,
 * not in a spreadsheet your team is hoping nobody shares."
 *
 * Desktop: three bands, each rendered as a 2-column grid split by a vertical
 * dashed "blinding boundary" with role labels at top. A design-awareness
 * perimeter wraps the whole diagram with framework chips and a bottom note.
 *
 * Mobile (< md): each band collapses to a single column. The blinded panel
 * stacks above the unblinded panel within each band. The vertical boundary
 * becomes a labeled divider between the two panels. Bands remain ordered
 * top-to-bottom.
 *
 * Content integrity: no outcome numbers, no vendor names, no fixed durations
 * inside the diagram. Every tile is a capability description. Framework names
 * appear only inside the design-awareness perimeter.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */

import {
  ClipboardList,
  Layers,
  Shuffle,
  FlaskConical,
  UserCheck,
  PackageCheck,
  Pill,
  Boxes,
  Warehouse,
  TrendingUp,
  EyeOff,
  Eye,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Node {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const BAND_1_BLINDED: ReadonlyArray<Node> = [
  {
    icon: ClipboardList,
    title: 'Protocol & visit schedule',
    sub: 'Schedule of events, visit windows, dispense rules',
  },
  {
    icon: Layers,
    title: 'Stratification factors',
    sub: 'Site, region, cohort labels visible to study teams',
  },
];

const BAND_1_UNBLINDED: ReadonlyArray<Node> = [
  {
    icon: Shuffle,
    title: 'Randomization list',
    sub: 'Statistician-provided schedule, block / dynamic',
  },
  {
    icon: FlaskConical,
    title: 'Treatment arms & drug pool',
    sub: 'Arm definitions, kit-type mix, dose levels',
  },
];

const BAND_2_BLINDED: ReadonlyArray<Node> = [
  {
    icon: UserCheck,
    title: 'Screen & enrol',
    sub: 'Eligibility, screen-fail, randomization request',
  },
  {
    icon: PackageCheck,
    title: 'Kit ID at visit',
    sub: 'Kit number returned to site, dispense confirmation',
  },
];

const BAND_2_UNBLINDED: ReadonlyArray<Node> = [
  {
    icon: Pill,
    title: 'Treatment assignment',
    sub: 'Arm and dose per subject, recorded once, immutable',
  },
  {
    icon: Boxes,
    title: 'Drug pool consumption',
    sub: 'Kit-to-lot mapping, lot-level usage by visit',
  },
];

const BAND_3_BLINDED: ReadonlyArray<Node> = [
  {
    icon: PackageCheck,
    title: 'Site kit count',
    sub: 'Available kits per site — quantities only, no arm detail',
  },
];

const BAND_3_UNBLINDED: ReadonlyArray<Node> = [
  {
    icon: Warehouse,
    title: 'Depot inventory & shipments',
    sub: 'Lot, expiry, quarantine, depot-to-site shipments',
  },
  {
    icon: TrendingUp,
    title: 'Resupply & expiry forecast',
    sub: 'Projected demand, expiry-aware lot selection, triggers',
  },
];

const COMPLIANCE_LABELS = [
  '21 CFR Part 11',
  'ICH-GCP',
  'EU Annex 11',
  'GAMP 5',
  'HIPAA',
  'GDPR',
  'CDISC',
];

const NodeCard = ({
  node,
  emphasis,
}: {
  node: Node;
  emphasis?: 'primary' | 'secondary';
}) => {
  const Icon = node.icon;
  const classes =
    emphasis === 'primary'
      ? 'bg-gradient-to-b from-accent-500/20 to-brand-500/15 border-accent-500/40'
      : emphasis === 'secondary'
      ? 'bg-brand-500/10 border-brand-500/30'
      : 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]';

  return (
    <div className={`rounded-xl border p-4 md:p-5 h-full ${classes}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300 border border-brand-500/30">
          <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="text-sm md:text-base font-bold text-text-light leading-tight">
          {node.title}
        </span>
      </div>
      <p className="text-xs md:text-sm text-text-subtle leading-relaxed">
        {node.sub}
      </p>
    </div>
  );
};

const LaneHeader = ({
  icon: Icon,
  label,
  role,
}: {
  icon: LucideIcon;
  label: string;
  role: string;
}) => (
  <div className="flex items-center gap-2 mb-3">
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-500/15 text-brand-400 border border-brand-400/30">
      <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
    </span>
    <div className="flex flex-col leading-tight">
      <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-brand-400">
        {label}
      </span>
      <span className="text-[11px] md:text-xs text-text-subtle">{role}</span>
    </div>
  </div>
);

const BandLabel = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => (
  <div className="mb-4 md:mb-5 text-center">
    <div className="inline-block text-[11px] md:text-xs font-semibold uppercase tracking-wider text-brand-400">
      {eyebrow}
    </div>
    <h3 className="text-lg md:text-xl font-bold text-text-light mt-1">
      {title}
    </h3>
  </div>
);

const Band = ({
  eyebrow,
  title,
  blinded,
  unblinded,
  emphasis,
}: {
  eyebrow: string;
  title: string;
  blinded: ReadonlyArray<Node>;
  unblinded: ReadonlyArray<Node>;
  emphasis?: 'primary' | 'secondary';
}) => (
  <div>
    <BandLabel eyebrow={eyebrow} title={title} />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 relative">
      {/* Blinding boundary — vertical on desktop, horizontal divider on mobile */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-brand-400/40"
      />
      <div className="lg:pr-6">
        <LaneHeader
          icon={EyeOff}
          label="Blinded lane"
          role="Study coordinators, CRAs, sites"
        />
        <div
          className={`grid gap-3 md:gap-4 ${
            blinded.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
          }`}
        >
          {blinded.map((node) => (
            <NodeCard key={node.title} node={node} emphasis={emphasis} />
          ))}
        </div>
      </div>
      <div className="lg:pl-6 relative">
        <div
          aria-hidden="true"
          className="lg:hidden flex items-center gap-3 my-4"
        >
          <span className="h-px flex-1 bg-brand-400/30" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-400">
            Blinding boundary
          </span>
          <span className="h-px flex-1 bg-brand-400/30" />
        </div>
        <LaneHeader
          icon={Eye}
          label="Unblinded lane"
          role="Unblinded pharmacist, statistician, supply"
        />
        <div
          className={`grid gap-3 md:gap-4 ${
            unblinded.length === 1
              ? 'grid-cols-1'
              : 'grid-cols-1 sm:grid-cols-2'
          }`}
        >
          {unblinded.map((node) => (
            <NodeCard key={node.title} node={node} emphasis={emphasis} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Connector = () => (
  <div className="hidden md:flex justify-center my-5" aria-hidden="true">
    <span className="text-brand-400/60 text-base">▼</span>
  </div>
);

export const RandomizationSupplyControlPlane = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          How it all connects
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          One control plane. One blinding boundary. Every kit, every visit.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Randomization design flows down through subject visits and out into
          depot and site supply — with a blinding boundary engineered into the
          data model so the right role sees the right view, every time.
        </p>
      </div>

      <div className="relative">
        {/* Design-awareness perimeter */}
        <div className="border-2 border-dashed border-brand-400/40 rounded-2xl p-4 sm:p-6 md:p-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
              One randomization &amp; supply engine
            </span>
          </div>

          <Band
            eyebrow="Band 1 · Design"
            title="What your biostatistics and supply leads configure"
            blinded={BAND_1_BLINDED}
            unblinded={BAND_1_UNBLINDED}
            emphasis="secondary"
          />

          <Connector />

          <Band
            eyebrow="Band 2 · Conduct"
            title="Where subjects, visits, and kits actually meet"
            blinded={BAND_2_BLINDED}
            unblinded={BAND_2_UNBLINDED}
            emphasis="primary"
          />

          <Connector />

          <Band
            eyebrow="Band 3 · Supply"
            title="What keeps sites stocked and depots accountable"
            blinded={BAND_3_BLINDED}
            unblinded={BAND_3_UNBLINDED}
            emphasis="secondary"
          />

          {/* Bottom design-awareness bar */}
          <div className="mt-6 pt-4 border-t border-brand-400/20 flex flex-wrap justify-center gap-2 md:gap-3">
            {COMPLIANCE_LABELS.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-400"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-[11px] md:text-xs text-text-subtle text-center mt-3 max-w-2xl mx-auto leading-relaxed">
            Designed to fit alongside the EDC, CTMS, eTMF, eCOA, depot, and CMO
            systems your team already runs.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);
