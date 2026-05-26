/**
 * ClinicalWorkflowOrchestrator — signature section for EHR / EMR Development pages.
 *
 * Visualization pattern: Process/flow (§8.3 pattern 3) — swim-lane diagram showing
 * how the platform orchestrates data flow across a care workflow.
 *
 * Two variants are exported:
 *   - ClinicalWorkflowOrchestratorEhr: multi-facility, longitudinal record, TEFCA / HIE
 *     emphasis. Phases span the care continuum (cross-organization referral, hospital,
 *     ambulatory follow-up).
 *   - ClinicalWorkflowOrchestratorEmr: single-clinic encounter loop. Phases are tuned
 *     to an ambulatory practice — check-in, vitals, charting, orders, billing.
 *
 * The base component renders the shared layout (annotations + phase stack + compliance
 * wrap) from a configuration object. Each variant supplies its own data.
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

interface Annotation {
  number: string;
  description: string;
  variant: 'brand' | 'accent' | 'success';
}

interface OrchestratorConfig {
  eyebrow: string;
  headline: string;
  subhead: string;
  phases: WorkflowPhase[];
  leftAnnotations: Annotation[];
  rightAnnotations: Annotation[];
  complianceTopLabel: string;
  complianceBadges: string[];
}

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

const OrchestratorBase = ({ config }: { config: OrchestratorConfig }) => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          {config.eyebrow}
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          {config.headline}
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          {config.subhead}
        </p>
      </div>

      {/* Desktop: 3-column layout with annotations flanking the phases */}
      <div className="grid gap-6 lg:grid-cols-[1fr_2.5fr_1fr] lg:gap-8 items-start">
        {/* Left annotations */}
        <div className="hidden lg:flex flex-col gap-4">
          {config.leftAnnotations.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>

        {/* Central flow diagram */}
        <div className="relative">
          {/* Compliance wrap */}
          <div className="border-2 border-dashed border-brand-400/40 rounded-2xl p-4 sm:p-6 md:p-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
                {config.complianceTopLabel}
              </span>
            </div>

            {/* Phase flow */}
            <div className="flex flex-col gap-2">
              {config.phases.map((phase, idx) => (
                <div key={idx}>
                  <PhaseCard phase={phase} />
                  {idx < config.phases.length - 1 && (
                    <div className="flex justify-center py-1.5" aria-hidden="true">
                      <span className="text-brand-400/60 text-base">▼</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom compliance bar */}
            <div className="mt-4 pt-4 border-t border-brand-400/20 flex flex-wrap justify-center gap-3">
              {config.complianceBadges.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right annotations */}
        <div className="hidden lg:flex flex-col gap-4">
          {config.rightAnnotations.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>
      </div>

      {/* Mobile annotations — shown below the diagram on smaller screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 lg:hidden">
        {[...config.leftAnnotations, ...config.rightAnnotations].map((ann, idx) => (
          <AnnotationCard key={idx} ann={ann} />
        ))}
      </div>
    </Container>
  </Section>
);

// ─── EHR variant ───────────────────────────────────────────────────────────
// Multi-facility, cross-organization care continuum. Lanes span referral, hospital
// admission, ambulatory follow-up, and HIE exchange — the EHR's longitudinal scope.

const EHR_CONFIG: OrchestratorConfig = {
  eyebrow: 'How the care network connects',
  headline: 'One longitudinal record across every care setting.',
  subhead:
    'Primary care, specialty, hospital, and external HIE data orchestrated through a single FHIR R4 record — no faxed summaries, no manual reconciliation, no blind spots.',
  phases: [
    {
      number: '01',
      title: 'Referral & Intake',
      description: 'Cross-organization referral, demographics, insurance verification, prior records query',
      roles: ['Referring Provider', 'Front Desk', 'Patient'],
      dataFlows: ['HIE / TEFCA query', 'Insurance eligibility'],
      emphasis: 'secondary',
    },
    {
      number: '02',
      title: 'Longitudinal Charting',
      description: 'Documentation against the unified record — history, problems, meds reconciled across sources',
      roles: ['Physician', 'Nurse', 'Specialist'],
      dataFlows: ['US Core / USCDI v3', 'External reconciliation'],
      emphasis: 'primary',
    },
    {
      number: '03',
      title: 'CPOE & Decision Support',
      description: 'Computerized orders with CDS Hooks — drug interactions, allergy alerts, order sets',
      roles: ['Physician', 'Pharmacist'],
      dataFlows: ['CDS Hooks', 'Order routing'],
      emphasis: 'primary',
    },
    {
      number: '04',
      title: 'Results & Diagnostics',
      description: 'Lab results, imaging reports, and external diagnostics filed back into the patient record',
      roles: ['Lab', 'Radiology', 'Physician'],
      dataFlows: ['HL7 v2 / FHIR R4', 'Abnormal alerts'],
    },
    {
      number: '05',
      title: 'Discharge & Care Continuum',
      description: 'Care plan, prescriptions, follow-up, ADT notifications to receiving providers via TEFCA / HIE',
      roles: ['Physician', 'Nurse', 'Patient', 'Receiving Provider'],
      dataFlows: ['e-Prescribe (EPCS)', 'TEFCA / HIE ADT'],
      emphasis: 'secondary',
    },
  ],
  leftAnnotations: [
    {
      number: 'FHIR R4 + US Core throughout',
      description:
        'Every phase exchanges data via standardized FHIR resources conformant with US Core and USCDI v3 — no proprietary formats between facilities or modules',
      variant: 'brand',
    },
    {
      number: 'CDS at every decision point',
      description:
        'Drug interactions, allergy alerts, and evidence-based order sets surface in real time through CDS Hooks during documentation and ordering',
      variant: 'accent',
    },
    {
      number: 'Zero-gap audit trail',
      description:
        'Every data access, modification, exchange, and order across all phases logged with timestamp, actor, and outcome — sufficient for OCR or ONC certification review',
      variant: 'success',
    },
  ],
  rightAnnotations: [
    {
      number: 'Role-based, facility-scoped',
      description:
        'Physicians, nurses, lab techs, and front desk each see exactly the data and actions relevant to their role and the facilities they operate in',
      variant: 'brand',
    },
    {
      number: 'TEFCA & HIE participant',
      description:
        'Community record query, ADT notifications, and cross-organization document sharing through TEFCA QHIN connections and regional HIEs — not bolt-on middleware',
      variant: 'accent',
    },
    {
      number: 'Modular, multi-facility deployment',
      description:
        'Each phase deploys independently and each facility activates on its own schedule — start with documentation and ordering, add lab, pharmacy, and population health later',
      variant: 'success',
    },
  ],
  complianceTopLabel: 'HIPAA · HITECH · ONC HTI-1 · TEFCA · SOC 2',
  complianceBadges: ['Audit Trail', 'Encryption', 'RBAC', 'MFA', 'Consent'],
};

export const ClinicalWorkflowOrchestratorEhr = () => (
  <OrchestratorBase config={EHR_CONFIG} />
);

// ─── EMR variant ───────────────────────────────────────────────────────────
// Single-clinic encounter loop. Lanes track a visit from check-in through billing —
// the ambulatory EMR's actual day-to-day workflow.

const EMR_CONFIG: OrchestratorConfig = {
  eyebrow: 'How the clinic actually runs',
  headline: 'Every encounter, from check-in to claim.',
  subhead:
    'One unified workflow across front desk, clinical staff, providers, and billing — charting flows into orders, orders into e-Rx and labs, documentation into clean claims.',
  phases: [
    {
      number: '01',
      title: 'Check-In & Verification',
      description: 'Patient arrival, demographics confirmation, real-time eligibility, intake form review',
      roles: ['Front Desk', 'Patient'],
      dataFlows: ['Eligibility (270/271)', 'Intake forms'],
      emphasis: 'secondary',
    },
    {
      number: '02',
      title: 'Vitals & Rooming',
      description: 'Vitals captured, chief complaint, medication and allergy reconciliation',
      roles: ['Medical Assistant', 'Nurse'],
      dataFlows: ['Vitals filing', 'Med reconciliation'],
    },
    {
      number: '03',
      title: 'Provider Charting',
      description: 'Specialty-specific templates, voice-to-text, prior-visit auto-population, structured fields',
      roles: ['Provider'],
      dataFlows: ['Specialty templates', 'Smart text'],
      emphasis: 'primary',
    },
    {
      number: '04',
      title: 'Orders & e-Prescribing',
      description: 'Lab and imaging orders, e-Rx with formulary check, EPCS for controlled substances',
      roles: ['Provider', 'Pharmacist'],
      dataFlows: ['Surescripts SCRIPT', 'Lab interfaces'],
      emphasis: 'primary',
    },
    {
      number: '05',
      title: 'Billing & Claim',
      description: 'Coding suggestions, charge capture, claim scrub, clearinghouse submission, ERA posting',
      roles: ['Provider', 'Biller', 'Front Desk'],
      dataFlows: ['X12 837P', 'ERA / remit (835)'],
      emphasis: 'secondary',
    },
  ],
  leftAnnotations: [
    {
      number: 'One flow, no app-switching',
      description:
        'Documentation, ordering, e-Rx, and billing happen inside a single workflow — no toggling between charting, e-prescribing, and a billing app',
      variant: 'brand',
    },
    {
      number: 'Specialty-tuned templates',
      description:
        'Charting templates designed for your specialty — pediatrics, dermatology, orthopedics, behavioral health — with smart text and prior-visit auto-population',
      variant: 'accent',
    },
    {
      number: 'MIPS measures captured live',
      description:
        'Quality measures captured as discrete data during the visit, with running completeness and threshold-progress dashboards — no year-end scramble',
      variant: 'success',
    },
  ],
  rightAnnotations: [
    {
      number: 'Role-specific views',
      description:
        'Front desk, MAs, providers, and billers each see exactly the data and actions relevant to their role — minimal click paths, short training cycles',
      variant: 'brand',
    },
    {
      number: 'Claims clean before they leave',
      description:
        'Charge capture and claim scrubbing happen at chart close — denials and rejections surface inside the chart, not in a separate billing queue',
      variant: 'accent',
    },
    {
      number: 'Audit trail through every action',
      description:
        'Every chart access, prescription, charge entry, and claim submission logged with timestamp and actor — sufficient for OCR or SOC 2 review',
      variant: 'success',
    },
  ],
  complianceTopLabel: 'HIPAA · HITECH · ONC HTI-1 · MIPS · SOC 2',
  complianceBadges: ['Audit Trail', 'Encryption', 'RBAC', 'MFA', 'Session Mgmt'],
};

export const ClinicalWorkflowOrchestratorEmr = () => (
  <OrchestratorBase config={EMR_CONFIG} />
);
