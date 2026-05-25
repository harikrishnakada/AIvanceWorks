/**
 * MesShopFloorControlPlane — signature section for the MES solution page.
 *
 * Visualization pattern: Hierarchical / flow (§8.3 patterns 2 + 3) — six
 *   manufacturing lifecycle stages (Order Release → Material & Genealogy →
 *   EBR Execution → In-Process Review-by-Exception → Release & Genealogy
 *   Closure → Yield, Deviations & CI) sitting on a shared engineering
 *   foundation (audit trail, e-signatures, material lineage, ISA-95 / ERP /
 *   automation coexistence). Regulatory framework chips render as a top row,
 *   not as a wrapping perimeter — keeps focus on the batch journey and avoids
 *   overlapping labels at narrow widths.
 *
 * Argument: "Every batch carries an unbroken electronic record from order
 *   release to genealogy closure — that's the MES."
 *
 * Liability note: every label is engineering practice or design awareness, not
 *   compliance certification. Computer-system validation, IQ/OQ/PQ authoring,
 *   GMP qualification, and any inspection outcome remain with the customer.
 *
 * Desktop: regulatory chip row → 6-stage horizontal flow (3-col md, 6-col lg)
 *   → foundation bar beneath.
 *
 * Mobile (< md): stages stack vertically; foundation bar stacks below.
 */

import {
  PlayCircle,
  Boxes,
  FileSignature,
  ClipboardCheck,
  PackageCheck,
  TrendingUp,
  Settings,
  Activity,
  ShieldCheck,
  Network,
  Cloud,
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
    title: 'Order Release',
    subtitle: 'Manufacturing orders, recipes, and equipment assigned.',
    icon: PlayCircle,
  },
  {
    number: '02',
    title: 'Material & Genealogy',
    subtitle: 'Dispensing, lot/serial linkage, forward and backward trace.',
    icon: Boxes,
  },
  {
    number: '03',
    title: 'EBR Execution',
    subtitle: 'Operator-guided steps, in-line data, e-signatures.',
    icon: FileSignature,
  },
  {
    number: '04',
    title: 'In-Process Review',
    subtitle: 'Checks, deviations, and review-by-exception queues.',
    icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Release & Closure',
    subtitle: 'Disposition, genealogy closure, and record archive.',
    icon: PackageCheck,
  },
  {
    number: '06',
    title: 'Yield & CI',
    subtitle: 'OEE, deviations, and continuous improvement signals.',
    icon: TrendingUp,
  },
];

const REGULATORY_FRAMEWORKS = [
  '21 CFR Part 11',
  '21 CFR Part 211',
  'EU GMP Annex 11',
  'ICH Q7 / Q9 / Q10',
  'GAMP 5',
  'ISA-95',
  'ISO 13485',
  'MHRA Data Integrity',
];

interface FoundationPillar {
  icon: React.ElementType;
  label: string;
}

const FOUNDATION_PILLARS: FoundationPillar[] = [
  { icon: Settings, label: 'PAS-X execution layer — configured to your master recipes, SOPs, review gates' },
  { icon: Cloud, label: 'Microsoft Cloud for Manufacturing landing zone — Azure identity, networking, IaC' },
  { icon: Network, label: 'ISA-95-aligned integration — ERP, automation, historian, LIMS, QMS' },
  { icon: Activity, label: 'Power BI on the PAS-X data layer — batch status, OEE, deviations, review backlog' },
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

export const MesShopFloorControlPlane = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The shop-floor flow
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Six stages, one electronic batch record. The way your line actually runs.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Order release, material genealogy, EBR execution, in-process review,
          release, and yield — each stage configured to your master recipes,
          all running on a shared engineering foundation built for paperless
          throughput, live visibility, and trusted batch records.
        </p>
      </div>

      {/* Regulatory framework chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {REGULATORY_FRAMEWORKS.map((fw) => (
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
              PAS-X on Microsoft Cloud for Manufacturing — integrated, configured & lifecycle-managed
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
