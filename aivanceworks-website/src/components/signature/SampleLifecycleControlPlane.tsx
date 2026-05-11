/**
 * SampleLifecycleControlPlane — signature section for the LIMS solution page.
 *
 * Visualization pattern: Hierarchical / flow (§8.3 patterns 2 + 3) — six lab
 *   lifecycle stages (Accession → Prep → Analysis → Review → Reporting →
 *   Archive) sitting on a shared engineering foundation (audit trail, chain of
 *   custody, e-signature awareness). Regulatory framework chips render as a
 *   light overhead row, not as a wrapping perimeter — keeps the focus on the
 *   sample journey and avoids overlapping labels at narrow widths.
 *
 * Argument: "Every sample carries an unbroken audit trail from receipt to
 *   retention — that's the LIMS."
 *
 * Liability note: every label is engineering practice or design awareness, not
 *   compliance certification. Validation, IQ/OQ/PQ authoring, accreditation,
 *   and regulatory submission remain with the customer.
 *
 * Desktop: regulatory chip row → 6-stage horizontal flow (3-col md, 6-col lg) →
 *   foundation bar beneath. No side annotations, no dashed perimeter wrapper.
 *
 * Mobile (< md): stages stack vertically; foundation bar stacks below.
 */

import {
  Beaker,
  FlaskConical,
  Microscope,
  ClipboardCheck,
  FileText,
  Archive,
  Settings,
  Activity,
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
    title: 'Accession',
    subtitle: 'Barcoded receipt. Chain of custody opens.',
    icon: Beaker,
  },
  {
    number: '02',
    title: 'Prep',
    subtitle: 'Aliquots, storage, and batch staging.',
    icon: FlaskConical,
  },
  {
    number: '03',
    title: 'Analysis',
    subtitle: 'Bench work and instrument result capture.',
    icon: Microscope,
  },
  {
    number: '04',
    title: 'Review',
    subtitle: 'Technical and supervisor approval gates.',
    icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Reporting',
    subtitle: 'COA, results, and release packets.',
    icon: FileText,
  },
  {
    number: '06',
    title: 'Archive',
    subtitle: 'Retention and audit-logged retrieval.',
    icon: Archive,
  },
];

const REGULATORY_FRAMEWORKS = [
  '21 CFR Part 11',
  'CLIA',
  'CAP',
  'ISO/IEC 17025',
  'ISO 15189',
  'GLP',
  'HIPAA',
  'GxP',
];

interface FoundationPillar {
  icon: React.ElementType;
  label: string;
}

const FOUNDATION_PILLARS: FoundationPillar[] = [
  { icon: Settings, label: 'Configured to your SOPs — workflows, sample model, reporting' },
  { icon: Activity, label: 'Live visibility — every sample, every analyst, every section' },
  { icon: ShieldCheck, label: 'Audit-ready data integrity — chain of custody, immutable history' },
  { icon: Network, label: 'Coexists with your validated stack — APIs your IT team controls' },
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

export const SampleLifecycleControlPlane = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The sample lifecycle
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Six stages, one flow. The way your lab actually runs.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Accession, prep, analysis, review, reporting, and archive — each
          stage configured to your SOPs, all running on a shared engineering
          foundation built for speed, visibility, and trusted data.
        </p>
      </div>

      {/* Regulatory framework chips — simple row, no wrapping perimeter */}
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
              Workflow fit, live visibility, trusted data & coexistence — by design
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
