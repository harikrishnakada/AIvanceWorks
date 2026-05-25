/**
 * MomOperationsPlatformMap — signature section for the Manufacturing
 * Operations Management (MOM) solution page.
 *
 * Visualization pattern: Hierarchical / layered (§8.3 pattern 2). Five MOM
 *   disciplines (Execution / MES, Advanced Planning & Scheduling, Quality,
 *   Manufacturing Intelligence, R&D Formula & NPI) sitting side-by-side as
 *   parallel pillars on a shared engineering foundation (Siemens Opcenter as
 *   the MOM product suite, Microsoft Azure as the landing zone, ISA-95-aligned
 *   integration to ERP / automation / historian / QMS, BI on top). Standards /
 *   reference-model chips render as a top row, not a wrapping perimeter — same
 *   pattern as MES and SCM signatures for visual coherence.
 *
 * Argument: "One MOM platform, five disciplines — execution, planning,
 *   quality, intelligence, and R&D on the same digital thread, instead of
 *   five disconnected products held together by spreadsheets."
 *
 * Liability note: every label is engineering practice or design awareness, not
 *   compliance certification. Validation execution (CSV / IQ / OQ / PQ),
 *   GMP / FDA / ISO / IATF audit qualification, and any regulatory or
 *   inspection outcome remain with the customer's Quality and Validation
 *   functions.
 *
 * Desktop: standards chip row → 5-pillar discipline grid (1 → 2 → 3 → 5 cols)
 *   → shared foundation bar beneath.
 *
 * Mobile (< md): pillars stack vertically; foundation bar stacks below.
 */

import {
  Factory,
  CalendarClock,
  ShieldCheck,
  Activity,
  FlaskConical,
  Settings,
  Cloud,
  Network,
  BarChart3,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Execution (MES)',
    subtitle:
      'Operator-guided work, electronic work instructions, genealogy, and as-built records.',
    icon: Factory,
  },
  {
    number: '02',
    title: 'Planning & Scheduling',
    subtitle:
      'Finite-capacity APS — orders, sequencing, changeovers, and constraint-aware schedules.',
    icon: CalendarClock,
  },
  {
    number: '03',
    title: 'Quality',
    subtitle:
      'SPC, non-conformance, CAPA, supplier quality, and inspection plans on a shared spine.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Manufacturing Intelligence',
    subtitle:
      'OEE, scrap, yield, downtime, and KPI dashboards on the MOM data layer in real time.',
    icon: Activity,
  },
  {
    number: '05',
    title: 'R&D, Formula & NPI',
    subtitle:
      'Master BoM, formula, specification, and NPI hand-off from R&D to the shop floor.',
    icon: FlaskConical,
  },
];

const STANDARDS = [
  'ISA-95',
  'ISA-88',
  'MESA Model',
  'IATF 16949',
  'AS9100',
  'ISO 9001',
  'ISO 13485',
  'FDA 21 CFR Part 11',
  'FSMA 204',
];

interface FoundationPillar {
  icon: React.ElementType;
  label: string;
}

const FOUNDATION_PILLARS: FoundationPillar[] = [
  { icon: Settings, label: 'Siemens Opcenter MOM Suite — configured to your work centers, recipes, and quality plans' },
  { icon: Cloud, label: 'Microsoft Azure landing zone — identity, networking, secrets, monitoring, IaC' },
  { icon: Network, label: 'ISA-95-aligned integration — ERP, automation, historian, QMS, PLM' },
  { icon: BarChart3, label: 'Power BI on the MOM data layer — OEE, throughput, scrap, schedule attainment' },
];

const PillarCard = ({ pillar }: { pillar: Pillar }) => {
  const Icon = pillar.icon;
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-5 h-full">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-brand-300" strokeWidth={2} aria-hidden="true" />
        </div>
        <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider">
          Discipline {pillar.number}
        </span>
      </div>
      <h3 className="text-base font-bold text-text-light leading-tight mb-1.5">
        {pillar.title}
      </h3>
      <p className="text-xs md:text-sm text-text-subtle leading-relaxed">
        {pillar.subtitle}
      </p>
    </div>
  );
};

export const MomOperationsPlatformMap = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The MOM operations platform
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Five disciplines, one platform. Execution, planning, quality, intelligence, R&amp;D.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Manufacturing Operations Management collapses the five discrete and
          process disciplines onto a shared digital thread — so the work order,
          the schedule, the quality plan, the OEE board, and the master formula
          read the same truth instead of five disconnected products stitched
          together by spreadsheet.
        </p>
      </div>

      {/* Standards / reference-model chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {STANDARDS.map((std) => (
          <span
            key={std}
            className="text-[11px] md:text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-300 bg-brand-500/5"
          >
            {std}
          </span>
        ))}
      </div>

      {/* Pillar grid: 1 → 2 → 3 → 5 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {PILLARS.map((pillar) => (
          <PillarCard key={pillar.number} pillar={pillar} />
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
              Siemens Opcenter on Microsoft Azure — integrated, configured &amp; lifecycle-managed
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
