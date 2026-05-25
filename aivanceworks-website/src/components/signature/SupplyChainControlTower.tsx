/**
 * SupplyChainControlTower — signature section for the Supply Chain Management
 * (SCM) solution page.
 *
 * Visualization pattern: Hierarchical / flow (§8.3 patterns 2 + 3) — six
 *   supply-chain lifecycle stages (Plan & Forecast → Source & Supplier
 *   Performance → Inbound & Lot/Serial Capture → Cold-Chain & In-Transit
 *   Visibility → Warehouse & Inventory Choreography → Deliver, Returns &
 *   Continuous Improvement) sitting on a shared engineering foundation
 *   (event ingestion & exceptions, lot/serial genealogy, partner & carrier
 *   connectivity, ERP/WMS/TMS/OMS coexistence). Framework names render as a
 *   top chip row.
 *
 * Argument: "One control tower for plan, source, move, and deliver — every
 *   lot, every shipment, every excursion in one place."
 *
 * Liability note: every label is engineering practice or design awareness,
 *   not a compliance certification. DSCSA compliance, FSMA traceability rule
 *   filings, GDP qualification, customs filings, and any regulatory or audit
 *   outcome remain the customer's responsibility, executed by the customer's
 *   Quality, Trade Compliance, and Regulatory functions.
 *
 * Desktop: framework chip row → 6-stage flow (3-col md, 6-col lg) → shared
 *   foundation bar beneath.
 *
 * Mobile (< md): stages stack vertically; foundation bar stacks below.
 */

import {
  LineChart,
  Handshake,
  PackageSearch,
  Thermometer,
  Warehouse,
  RotateCcw,
  Radio,
  Boxes,
  ShieldCheck,
  Network,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'Plan & Forecast',
    subtitle: 'Demand signals, S&OP inputs, and supply commitments in one view.',
    icon: LineChart,
  },
  {
    number: '02',
    title: 'Source & Suppliers',
    subtitle: 'Supplier onboarding, POs, qualification, and performance scoring.',
    icon: Handshake,
  },
  {
    number: '03',
    title: 'Inbound & Capture',
    subtitle: 'ASN, receiving, lot/serial capture, and document linkage.',
    icon: PackageSearch,
  },
  {
    number: '04',
    title: 'Cold-Chain & Transit',
    subtitle: 'Temperature, humidity, GPS, and excursion alerts across carriers.',
    icon: Thermometer,
  },
  {
    number: '05',
    title: 'Warehouse & Inventory',
    subtitle: 'Lot-level inventory, FEFO picks, and cycle-count discipline.',
    icon: Warehouse,
  },
  {
    number: '06',
    title: 'Deliver & Returns',
    subtitle: 'Outbound, OTIF, returns, recalls, and continuous improvement.',
    icon: RotateCcw,
  },
];

const FRAMEWORKS = [
  'DSCSA (Drug Supply Chain Security Act)',
  'FDA FSMA 204',
  'GDP (Good Distribution Practice)',
  'USP <1079>',
  'IATA CEIV Pharma',
  'ISO 28000',
  'ISA-95',
  'C-TPAT',
];

interface FoundationPillar {
  icon: React.ElementType;
  label: string;
}

const FOUNDATION_PILLARS: FoundationPillar[] = [
  { icon: Radio, label: 'Event ingestion & exception engine — disruptions surface as work, not noise' },
  { icon: Boxes, label: 'Lot, serial & batch genealogy — forward and backward trace as a query' },
  { icon: ShieldCheck, label: 'Audit-ready chain of custody — actor, timestamp, location, temperature' },
  { icon: Network, label: 'ERP, WMS, TMS, OMS & carrier coexistence — your existing stack stays put' },
];

const StageCard = ({ stage }: { stage: Stage }) => {
  const Icon = stage.icon;
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-5 h-full">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-brand-300" strokeWidth={2} aria-hidden="true" />
        </div>
        <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider">
          Stage {stage.number}
        </span>
      </div>
      <h3 className="text-base font-bold text-text-light leading-tight mb-1.5">
        {stage.title}
      </h3>
      <p className="text-xs md:text-sm text-text-subtle leading-relaxed">
        {stage.subtitle}
      </p>
    </div>
  );
};

export const SupplyChainControlTower = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The supply-chain control tower
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Six stages, one chain of custody. Plan, source, move, and deliver in one view.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Plan, source, inbound, cold-chain transit, warehouse, and deliver —
          every lot, every shipment, every excursion tied to a single record
          your planners, quality, and trade-compliance teams act on together.
        </p>
      </div>

      {/* Framework chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {FRAMEWORKS.map((fw) => (
          <span
            key={fw}
            className="text-[11px] md:text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-300 bg-brand-500/5"
          >
            {fw}
          </span>
        ))}
      </div>

      {/* Stage grid: 1 → 2 → 3 → 6 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {STAGES.map((stage) => (
          <StageCard key={stage.number} stage={stage} />
        ))}
      </div>

      {/* Foundation bar */}
      <div className="mt-6 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
        <div className="flex items-center gap-3 mb-4">
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
              Event-driven visibility, lot-level trace, and partner coexistence — by design
            </h3>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
          {FOUNDATION_PILLARS.map((cap, idx) => {
            const CapIcon = cap.icon;
            return (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs md:text-sm text-text-light/90"
              >
                <CapIcon
                  className="w-4 h-4 text-accent-300 mt-0.5 shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{cap.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  </Section>
);
