/**
 * PharmaAiResearchEngine — signature section for the AI Pharma solution page.
 *
 * Visualization pattern: Hierarchical / architectural (§8.3 pattern 2) — three
 * domain pillars (Drug Discovery & R&D software, Clinical Operations software,
 * Healthcare AI software) stacked atop an engineering foundation (audit,
 * validation, lifecycle support), with regulatory framework names rendered as
 * a design-awareness perimeter.
 *
 * Argument: "Pharma software is only useful if it ships with the engineering
 * artifacts your QA team can review. Three software pillars, one engineering
 * foundation — that is the engine."
 *
 * Liability note: every label on this component is written as engineering
 * practice or design awareness, not as compliance certification. Final
 * validation, submission, and regulatory clearance remain with the customer.
 *
 * Desktop: 3-column pillar grid with a foundation bar beneath, framework
 *   chips above, and a left/right annotation pair beside the engine.
 *
 * Mobile (< lg): pillars stack vertically. Foundation bar moves under the stack.
 *   Framework chips become a wrap-row. Side annotations move below the engine
 *   as a 1-column list.
 */

import {
  Pill,
  FlaskConical,
  ClipboardList,
  ScanSearch,
  ShieldCheck,
  FileCheck,
  Activity,
  Microscope,
  Network,
  Database,
  Lock,
  GitBranch,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface PillarCapability {
  icon: React.ElementType;
  label: string;
}

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  emphasis: 'primary' | 'secondary';
  capabilities: PillarCapability[];
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Drug Discovery & R&D Software',
    subtitle: 'Custom platforms for research workflows your scientists direct',
    icon: FlaskConical,
    emphasis: 'primary',
    capabilities: [
      { icon: ScanSearch, label: 'Search across literature and internal experiments' },
      { icon: Microscope, label: 'ML-assisted analytics for property and assay data' },
      { icon: Network, label: 'Knowledge graphs over your research sources' },
      { icon: Database, label: 'Research data lake with documented lineage' },
    ],
  },
  {
    number: '02',
    title: 'Clinical Operations Software',
    subtitle: 'Tooling that sits alongside your clinical stack',
    icon: ClipboardList,
    emphasis: 'primary',
    capabilities: [
      { icon: ScanSearch, label: 'Cohort discovery on de-identified data' },
      { icon: Activity, label: 'Monitoring dashboards and operational alerts' },
      { icon: FileCheck, label: 'Workflow automation for repetitive review work' },
      { icon: GitBranch, label: 'APIs and standard formats for system integration' },
    ],
  },
  {
    number: '03',
    title: 'Healthcare AI Software',
    subtitle: 'Decision-support interfaces, engineered transparently',
    icon: Microscope,
    emphasis: 'primary',
    capabilities: [
      { icon: ScanSearch, label: 'Imaging pipelines and analytics' },
      { icon: Activity, label: 'Decision-support interfaces with confidence reporting' },
      { icon: ShieldCheck, label: 'Explainability hooks and clinician-in-the-loop patterns' },
      { icon: FileCheck, label: 'Model lifecycle artifacts your reviewers can read' },
    ],
  },
];

const REGULATORY_FRAMEWORKS = [
  '21 CFR Part 11',
  'ICH GCP',
  'GxP',
  'HIPAA',
  'GDPR',
  'FDA GMLP',
  'SaMD',
  'EU AI Act (high-risk health)',
];

const FOUNDATION_PILLARS: PillarCapability[] = [
  { icon: Activity, label: 'Shared data layer with lineage and controlled vocabularies' },
  { icon: GitBranch, label: 'Common MLOps practice: model cards, evaluation, drift monitoring' },
  { icon: Lock, label: 'Patient and subject data segmented and role-scoped at the application layer' },
  { icon: FileCheck, label: 'One engineering foundation across discovery, clinical, and diagnostic software' },
];

interface Annotation {
  title: string;
  description: string;
  variant: 'brand' | 'accent' | 'success';
}

const LEFT_ANNOTATIONS: Annotation[] = [
  {
    title: 'Faster read–write–decide for scientists',
    description:
      'Search across literature, internal experiments, and analytics in one place — with the underlying data lineage preserved.',
    variant: 'brand',
  },
  {
    title: 'Clearer signals for clinical operations',
    description:
      'Dashboards that surface enrollment, monitoring, and data quality signals as they happen — supporting your trial team’s decisions, not replacing them.',
    variant: 'accent',
  },
];

const RIGHT_ANNOTATIONS: Annotation[] = [
  {
    title: 'No black boxes near patients',
    description:
      'Decision-support and diagnostic software ships with explainability hooks, confidence reporting, and clinician-in-the-loop patterns.',
    variant: 'brand',
  },
  {
    title: 'Built to coexist with your stack',
    description:
      'Designed to coexist with your existing research and clinical systems via documented APIs and standard data formats — your IT team owns the actual connectors.',
    variant: 'success',
  },
];

const VARIANT_BORDERS: Record<Annotation['variant'], string> = {
  brand: 'border-l-brand-500',
  accent: 'border-l-accent-500',
  success: 'border-l-brand-400',
};

const PillarCard = ({ pillar }: { pillar: Pillar }) => {
  const Icon = pillar.icon;
  return (
    <div
      className={
        'rounded-2xl border p-5 md:p-6 h-full ' +
        (pillar.emphasis === 'primary'
          ? 'bg-gradient-to-b from-accent-500/15 to-brand-500/10 border-accent-500/40'
          : 'bg-brand-500/10 border-brand-500/30')
      }
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-brand-300" strokeWidth={2} aria-hidden="true" />
        </div>
        <div>
          <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
            Pillar {pillar.number}
          </span>
          <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
            {pillar.title}
          </h3>
        </div>
      </div>
      <p className="text-xs md:text-sm text-text-subtle leading-relaxed mb-4">
        {pillar.subtitle}
      </p>
      <ul className="space-y-2">
        {pillar.capabilities.map((cap, idx) => {
          const CapIcon = cap.icon;
          return (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs md:text-sm text-text-light/90"
            >
              <CapIcon
                className="w-4 h-4 text-brand-400 mt-0.5 shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="leading-relaxed">{cap.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const AnnotationCard = ({ ann }: { ann: Annotation }) => (
  <div
    className={
      'bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-l-[3px] rounded-r-xl p-4 md:p-5 ' +
      VARIANT_BORDERS[ann.variant]
    }
  >
    <div className="text-sm md:text-base font-bold text-text-light leading-tight">
      {ann.title}
    </div>
    <div className="text-xs md:text-sm text-text-subtle mt-1.5 leading-relaxed">
      {ann.description}
    </div>
  </div>
);

export const PharmaAiResearchEngine = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The research engine
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Three pillars of pharma software on one engineering foundation.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Discovery, clinical operations, and healthcare AI software — each
          purpose-built — sharing the same engineering core, so your scientists,
          trial teams, and clinical reviewers all work from the same foundation.
        </p>
      </div>

      {/* Desktop: annotations flank the engine. Mobile: stack below. */}
      <div className="grid gap-6 lg:grid-cols-[1fr_3fr_1fr] lg:gap-8 items-start">
        {/* Left annotations (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4">
          {LEFT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>

        {/* Center: regulatory perimeter wrapping the pillar engine */}
        <div className="relative">
          <div className="border-2 border-dashed border-brand-400/40 rounded-3xl p-4 sm:p-6 md:p-8 relative">
            {/* Top regulatory label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
                Regulatory-aware design
              </span>
            </div>

            {/* Regulatory framework chips */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
              {REGULATORY_FRAMEWORKS.map((fw, idx) => (
                <span
                  key={idx}
                  className="text-[11px] md:text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-300 bg-brand-500/5"
                >
                  {fw}
                </span>
              ))}
            </div>

            {/* Pillar grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {PILLARS.map((pillar) => (
                <PillarCard key={pillar.number} pillar={pillar} />
              ))}
            </div>

            {/* Foundation bar */}
            <div className="mt-5 md:mt-6 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
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
                    One engineering foundation, three software pillars
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

            {/* Bottom anchor caption */}
            <div className="mt-4 flex flex-wrap justify-center items-center gap-2 text-[10px] sm:text-xs text-brand-400">
              <Pill className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
              <span className="uppercase tracking-wider font-semibold">
                Discovery → IND → Trials → Submission → Post-market
              </span>
            </div>
          </div>
        </div>

        {/* Right annotations (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4">
          {RIGHT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>
      </div>

      {/* Mobile annotations — under the engine */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 lg:hidden">
        {[...LEFT_ANNOTATIONS, ...RIGHT_ANNOTATIONS].map((ann, idx) => (
          <AnnotationCard key={idx} ann={ann} />
        ))}
      </div>
    </Container>
  </Section>
);
