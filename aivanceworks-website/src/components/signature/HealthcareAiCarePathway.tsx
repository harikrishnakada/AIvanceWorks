/**
 * HealthcareAiCarePathway — signature section for the AI Healthcare solution.
 *
 * Visualization pattern: Process / flow (§8.3 pattern 3) — a five-stage care
 * encounter pathway runs horizontally across the page. Above each stage sits
 * one AI augmentation card naming the engineered surface (ambient capture,
 * grounded knowledge, decision support, RCM automation, follow-up engagement).
 * A continuous governance band runs beneath the pathway — PHI scoping, audit
 * trail, clinician-in-the-loop, and model lifecycle — visualizing the rule
 * that augmentation sits inside the audit trail, never on top of it.
 *
 * Argument: "AI for healthcare is only useful when every assist lives inside
 * the care pathway your clinicians and your auditors already trust."
 *
 * Liability note: every label is engineering practice or design awareness, not
 * clinical claim or compliance certification. The clinician makes the clinical
 * decision; the customer owns validation and any regulatory pathway.
 *
 * Desktop (lg+): 5-column pathway grid, augmentation cards above stage chips,
 *   horizontal connecting line, governance band beneath spanning full width.
 *
 * Mobile (< lg): pathway linearizes vertically. Each stage card shows the
 *   augmentation, stage chip, and a per-stage governance note stacked. The
 *   shared governance band collapses to a footer summary strip.
 */

import {
  Stethoscope,
  Mic,
  BookOpenCheck,
  Activity,
  ReceiptText,
  CalendarHeart,
  ShieldCheck,
  Lock,
  FileCheck,
  GitBranch,
  UserCheck,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface PathwayStage {
  number: string;
  stage: string;
  augmentationTitle: string;
  augmentationIcon: React.ElementType;
  augmentationLines: string[];
  emphasis: 'primary' | 'secondary';
}

const STAGES: PathwayStage[] = [
  {
    number: '01',
    stage: 'Intake & Triage',
    augmentationTitle: 'Patient-facing engagement',
    augmentationIcon: CalendarHeart,
    augmentationLines: [
      'Conversational intake on consented data',
      'Symptom guidance with clinician escalation',
      'Routing to the right care setting',
    ],
    emphasis: 'secondary',
  },
  {
    number: '02',
    stage: 'Encounter & Documentation',
    augmentationTitle: 'Ambient documentation assist',
    augmentationIcon: Mic,
    augmentationLines: [
      'Ambient capture with clinician-reviewed note',
      'Structured fields suggested, not auto-signed',
      'Patient-consent and opt-out preserved',
    ],
    emphasis: 'primary',
  },
  {
    number: '03',
    stage: 'Knowledge & Decision Support',
    augmentationTitle: 'Grounded clinical knowledge',
    augmentationIcon: BookOpenCheck,
    augmentationLines: [
      'Retrieval over your formulary, protocols, and policies',
      'Citations alongside every answer',
      'Decision-support framed as clinician-reviewed suggestion',
    ],
    emphasis: 'primary',
  },
  {
    number: '04',
    stage: 'Orders, Coding & RCM',
    augmentationTitle: 'Revenue cycle automation',
    augmentationIcon: ReceiptText,
    augmentationLines: [
      'Coding and CDI suggestions with audit trail',
      'Prior-authorization drafting for human review',
      'Denial root-cause analytics and rework queues',
    ],
    emphasis: 'primary',
  },
  {
    number: '05',
    stage: 'Follow-up & Population Health',
    augmentationTitle: 'Care management copilots',
    augmentationIcon: Activity,
    augmentationLines: [
      'Risk-stratification on de-identified cohorts',
      'Outreach workflows reviewed by your care teams',
      'Closed-loop tracking against your existing measures',
    ],
    emphasis: 'secondary',
  },
];

const GOVERNANCE_BAND = [
  {
    icon: UserCheck,
    title: 'Clinician-in-the-loop by default',
    description:
      'AI proposes, the clinician decides. Confidence and citations surface inline.',
  },
  {
    icon: Lock,
    title: 'PHI scoped at the application layer',
    description:
      'Tokenization, role-scoped access, and de-identified training data wherever the work allows.',
  },
  {
    icon: FileCheck,
    title: 'Audit trail wraps every assist',
    description:
      'Actor, model version, prompt, response, and disposition recorded as immutable events.',
  },
  {
    icon: GitBranch,
    title: 'Model lifecycle artifacts',
    description:
      'Model cards, evaluation reports, and drift monitoring delivered with the build.',
  },
];

const REGULATORY_LABELS = [
  'HIPAA',
  'HITECH',
  'ONC Cures Act',
  '21st Century Cures',
  'FDA GMLP',
  'SaMD',
  'NIST AI RMF',
  'Joint Commission',
];

const StageCard = ({ stage }: { stage: PathwayStage }) => {
  const Icon = stage.augmentationIcon;
  return (
    <div className="flex flex-col h-full">
      {/* AI augmentation card */}
      <div
        className={
          'rounded-2xl border p-4 md:p-5 flex-1 ' +
          (stage.emphasis === 'primary'
            ? 'bg-gradient-to-b from-accent-500/15 to-brand-500/10 border-accent-500/40'
            : 'bg-brand-500/10 border-brand-500/30')
        }
      >
        <div className="flex items-start gap-2.5 mb-3">
          <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
            <Icon className="w-4.5 h-4.5 text-brand-300" strokeWidth={2} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-wider text-brand-400">
              AI Assist
            </div>
            <h3 className="text-sm md:text-base font-bold text-text-light leading-tight">
              {stage.augmentationTitle}
            </h3>
          </div>
        </div>
        <ul className="space-y-1.5">
          {stage.augmentationLines.map((line, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-text-light/90 leading-snug"
            >
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-400 shrink-0" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Connector + stage chip */}
      <div className="mt-3 mb-3 flex flex-col items-center" aria-hidden="true">
        <div className="w-px h-4 bg-brand-400/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent-500 ring-2 ring-accent-500/20" />
      </div>
      <div className="rounded-xl bg-glass-bg border border-glass-border px-3 py-2.5 text-center">
        <div className="text-[10px] font-bold uppercase tracking-wider text-brand-400">
          Stage {stage.number}
        </div>
        <div className="text-xs md:text-sm font-semibold text-text-light leading-tight">
          {stage.stage}
        </div>
      </div>
    </div>
  );
};

export const HealthcareAiCarePathway = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The care-pathway augmentation map
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          AI lives inside the care pathway — not bolted onto it.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Five stages of a clinical encounter. Five engineered augmentation
          surfaces. One governance band running underneath — so every assist is
          PHI-scoped, clinician-reviewed, and inside the audit trail by design.
        </p>
      </div>

      <div className="border-2 border-dashed border-brand-400/40 rounded-3xl p-4 sm:p-6 md:p-8 relative">
        {/* Top label */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
          <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
            Regulatory-aware design
          </span>
        </div>

        {/* Regulatory framework chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
          {REGULATORY_LABELS.map((fw, idx) => (
            <span
              key={idx}
              className="text-[11px] md:text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-300 bg-brand-500/5"
            >
              {fw}
            </span>
          ))}
        </div>

        {/* Pathway grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {STAGES.map((stage) => (
            <StageCard key={stage.number} stage={stage} />
          ))}
        </div>

        {/* Governance band */}
        <div className="mt-6 md:mt-8 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
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
                The governance band
              </div>
              <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
                Every assist lives inside the audit trail, by design
              </h3>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-3">
            {GOVERNANCE_BAND.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <li key={idx} className="flex items-start gap-2.5">
                  <PillarIcon
                    className="w-4 h-4 text-accent-300 mt-0.5 shrink-0"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-text-light leading-tight">
                      {pillar.title}
                    </div>
                    <div className="text-[11px] md:text-xs text-text-subtle mt-0.5 leading-relaxed">
                      {pillar.description}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom caption */}
        <div className="mt-4 flex flex-wrap justify-center items-center gap-2 text-[10px] sm:text-xs text-brand-400">
          <Stethoscope className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
          <span className="uppercase tracking-wider font-semibold">
            Intake → Encounter → Decisions → Orders → Follow-up
          </span>
        </div>
      </div>
    </Container>
  </Section>
);
