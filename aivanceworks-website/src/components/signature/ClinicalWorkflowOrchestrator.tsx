/**
 * ClinicalWorkflowOrchestrator — signature section for EHR & EMR Development page.
 *
 * Visualization pattern: Process/flow (§8.3 pattern 3) — swim-lane diagram showing
 * how the EHR orchestrates data flow across a patient encounter.
 *
 * Argument: "Your EHR orchestrates every clinical touchpoint — from registration to
 * discharge — through one unified, auditable data flow."
 *
 * Desktop: 5 phases arranged left-to-right with role indicator rows beneath each phase,
 *   showing which clinical actors participate. Compliance callouts along the bottom.
 *   Left/right annotation cards flank the diagram.
 *
 * Mobile (< lg): Phases stack vertically. Each phase card shows its role chips inline.
 *   Annotations move above/below the phase stack. Phase connectors become vertical
 *   arrows between stacked cards.
 */

import { Section, Container } from '@/components/shared/primitives';

interface WorkflowPhase {
  number: string;
  title: string;
  description: string;
  roles: string[];
  dataFlows: string[];
  emphasis?: 'primary' | 'secondary';
}

const PHASES: WorkflowPhase[] = [
  {
    number: '01',
    title: 'Registration',
    description: 'Patient intake, demographics, insurance verification',
    roles: ['Front Desk', 'Patient'],
    dataFlows: ['ADT feed', 'Insurance eligibility'],
    emphasis: 'secondary',
  },
  {
    number: '02',
    title: 'Documentation',
    description: 'Clinical charting, history review, assessments',
    roles: ['Physician', 'Nurse', 'Patient'],
    dataFlows: ['Chart pull', 'Prior visit data'],
    emphasis: 'primary',
  },
  {
    number: '03',
    title: 'Orders',
    description: 'CPOE with CDS alerts, lab/Rx/imaging orders',
    roles: ['Physician', 'Pharmacist'],
    dataFlows: ['Order routing', 'CDS rules'],
    emphasis: 'primary',
  },
  {
    number: '04',
    title: 'Results',
    description: 'Lab results, imaging reports, consult notes',
    roles: ['Lab', 'Radiology', 'Physician'],
    dataFlows: ['Result filing', 'Abnormal alerts'],
  },
  {
    number: '05',
    title: 'Discharge',
    description: 'Care plan, prescriptions, follow-up scheduling',
    roles: ['Physician', 'Nurse', 'Patient'],
    dataFlows: ['e-Prescribe', 'HIE notification'],
    emphasis: 'secondary',
  },
];

interface Annotation {
  number: string;
  description: string;
  variant: 'brand' | 'accent' | 'success';
}

const LEFT_ANNOTATIONS: Annotation[] = [
  {
    number: 'FHIR R4 throughout',
    description:
      'Every phase exchanges data via standardized FHIR resources — no proprietary formats between modules',
    variant: 'brand',
  },
  {
    number: 'CDS at every decision point',
    description:
      'Drug interactions, allergy alerts, and order set recommendations surface in real time during documentation and ordering',
    variant: 'accent',
  },
  {
    number: 'Zero-gap audit trail',
    description:
      'Every data access, modification, and order across all phases logged with timestamp, actor, and outcome',
    variant: 'success',
  },
];

const RIGHT_ANNOTATIONS: Annotation[] = [
  {
    number: 'Role-based views',
    description:
      'Physicians, nurses, lab techs, and front desk each see exactly the data and actions relevant to their role',
    variant: 'brand',
  },
  {
    number: 'Bi-directional integration',
    description:
      'Lab orders flow out, results flow back. Prescriptions route to pharmacy, refill requests return. No manual re-entry',
    variant: 'accent',
  },
  {
    number: 'Modular deployment',
    description:
      'Each phase can be deployed independently — start with documentation and ordering, add lab and pharmacy later',
    variant: 'success',
  },
];

const VARIANT_CLASSES: Record<Annotation['variant'], string> = {
  brand: 'border-l-brand-500',
  accent: 'border-l-accent-500',
  success: 'border-l-brand-400',
};

const getPhaseClasses = (emphasis?: 'primary' | 'secondary') => {
  if (emphasis === 'primary') {
    return 'bg-gradient-to-b from-accent-500/20 to-brand-500/15 border-accent-500/40';
  }
  if (emphasis === 'secondary') {
    return 'bg-brand-500/10 border-brand-500/30';
  }
  return 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]';
};

const AnnotationCard = ({ ann }: { ann: Annotation }) => (
  <div
    className={`bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-l-[3px] ${
      VARIANT_CLASSES[ann.variant]
    } rounded-r-xl p-4 md:p-5`}
  >
    <div className="text-base md:text-lg font-bold text-text-light leading-tight">
      {ann.number}
    </div>
    <div className="text-xs md:text-sm text-text-subtle mt-1.5 leading-relaxed">
      {ann.description}
    </div>
  </div>
);

const PhaseCard = ({ phase }: { phase: WorkflowPhase }) => (
  <div
    className={`rounded-xl border p-4 md:p-5 ${getPhaseClasses(phase.emphasis)}`}
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
        {phase.number}
      </span>
      <span className="text-sm md:text-base font-bold text-text-light">
        {phase.title}
      </span>
    </div>
    <p className="text-xs md:text-sm text-text-subtle leading-relaxed mb-3">
      {phase.description}
    </p>
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {phase.roles.map((role, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-0.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300"
          >
            {role}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {phase.dataFlows.map((flow, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-0.5 rounded-full bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] text-text-subtle"
          >
            {flow}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const ClinicalWorkflowOrchestrator = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          How it all connects
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          One unified workflow from registration to discharge.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Every clinical touchpoint orchestrated through a single, auditable data
          flow — no siloed systems, no manual handoffs, no blind spots.
        </p>
      </div>

      {/* Desktop: 3-column layout with annotations flanking the phases */}
      <div className="grid gap-6 lg:grid-cols-[1fr_2.5fr_1fr] lg:gap-8 items-start">
        {/* Left annotations */}
        <div className="hidden lg:flex flex-col gap-4">
          {LEFT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>

        {/* Central flow diagram */}
        <div className="relative">
          {/* Compliance wrap */}
          <div className="border-2 border-dashed border-brand-400/40 rounded-2xl p-4 sm:p-6 md:p-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
                HIPAA · ONC Health IT · SOC 2 · HITECH
              </span>
            </div>

            {/* Phase flow */}
            <div className="flex flex-col gap-2">
              {PHASES.map((phase, idx) => (
                <div key={idx}>
                  <PhaseCard phase={phase} />
                  {idx < PHASES.length - 1 && (
                    <div className="flex justify-center py-1.5" aria-hidden="true">
                      <span className="text-brand-400/60 text-base">▼</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom compliance bar */}
            <div className="mt-4 pt-4 border-t border-brand-400/20 flex flex-wrap justify-center gap-3">
              {['Audit Trail', 'Encryption', 'RBAC', 'MFA', 'Session Mgmt'].map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-400"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right annotations */}
        <div className="hidden lg:flex flex-col gap-4">
          {RIGHT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>
      </div>

      {/* Mobile annotations — shown below the diagram on smaller screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 lg:hidden">
        {[...LEFT_ANNOTATIONS, ...RIGHT_ANNOTATIONS].map((ann, idx) => (
          <AnnotationCard key={idx} ann={ann} />
        ))}
      </div>
    </Container>
  </Section>
);
