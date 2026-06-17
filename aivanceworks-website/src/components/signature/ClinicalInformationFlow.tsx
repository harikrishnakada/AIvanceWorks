/**
 * ClinicalInformationFlow — signature section for the Hospital Information Systems (HIS) page.
 *
 * Visualization pattern: Process / flow (§8.3 pattern 3) — a directed "clinical
 * information relay" across five connected stages (Order → Ancillary departments →
 * Result-to-record → Complete clinical picture → Patient surface), riding a single
 * interoperability backbone, with a "gap closed" annotation under each handoff.
 *
 * Argument the signature carries: "In a fragmented hospital, information dies in the
 * handoffs between departments — that is where preventable errors and delays live. An
 * integrated HIS turns every handoff into one connected record." This is deliberately
 * DISTINCT from the Hospital Management Systems page's HospitalOperationsHub (a static
 * hub-and-spoke that argues operational unification): HIS argues information *flow* and
 * error elimination across departments, not departmental operations orbiting a core.
 *
 * Desktop (lg+): five stage cards in a horizontal row connected by a continuous backbone
 *   line with rightward arrows between cards. The interoperability-standards strip sits
 *   under the backbone. Each card shows a numbered icon tile, title, one-line description,
 *   and a "gap closed" chip.
 *
 * Mobile (< lg): the five stages stack vertically in a single column; the backbone line
 *   becomes a vertical connector with downward arrows between cards; the "gap closed" chip
 *   stays inside each card; the standards strip becomes a wrapped pill row beneath the flow.
 *   The visual argument survives because the directed order (order → … → patient) is
 *   preserved through stacking order.
 */

import {
  Stethoscope,
  FlaskConical,
  FileText,
  HeartPulse,
  Smartphone,
  ArrowRight,
  ArrowDown,
  ShieldOff,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Stage {
  step: string;
  icon: typeof Stethoscope;
  title: string;
  description: string;
  gapClosed: string;
  accent: 'brand' | 'accent';
}

const STAGES: Stage[] = [
  {
    step: '01',
    icon: Stethoscope,
    title: 'Encounter & Order',
    description:
      'A clinician documents a finding or places an order once, at the point of care.',
    gapClosed: 'No paper order slip, no re-dictation',
    accent: 'brand',
  },
  {
    step: '02',
    icon: FlaskConical,
    title: 'Routed to Ancillary Departments',
    description:
      'Lab, pharmacy, and radiology receive the order instantly across the interoperability backbone.',
    gapClosed: 'No faxed order lost between desks',
    accent: 'accent',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Results Filed to One Record',
    description:
      'Results, dispensing, and images return to a single longitudinal patient record automatically.',
    gapClosed: 'No result re-keyed or transcribed wrong',
    accent: 'brand',
  },
  {
    step: '04',
    icon: HeartPulse,
    title: 'Complete Clinical Picture',
    description:
      'Every clinician sees the same history, allergies, medications, and interactions in context.',
    gapClosed: 'No allergy or interaction missed',
    accent: 'accent',
  },
  {
    step: '05',
    icon: Smartphone,
    title: 'Surfaced to the Patient',
    description:
      'Patients view results, book appointments, and join virtual visits through a secure portal.',
    gapClosed: 'No “call back next week for your results”',
    accent: 'brand',
  },
];

const STANDARDS = ['HL7 v2', 'FHIR R4', 'DICOM', 'NCPDP SCRIPT', 'IHE / XDS'];

const ACCENT_TILE: Record<Stage['accent'], string> = {
  brand: 'border-brand-400/50 bg-gradient-to-br from-brand-500/20 to-brand-500/5 text-brand-300',
  accent: 'border-accent-400/50 bg-gradient-to-br from-accent-500/20 to-accent-500/5 text-accent-300',
};

const ACCENT_STEP: Record<Stage['accent'], string> = {
  brand: 'text-brand-300',
  accent: 'text-accent-300',
};

const StageCard = ({ stage }: { stage: Stage }) => {
  const Icon = stage.icon;
  return (
    <div className="flex h-full flex-col rounded-xl border border-glass-border bg-glass-bg p-4 md:p-5 backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${ACCENT_TILE[stage.accent]}`}
        >
          <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </span>
        <span
          className={`text-xs font-bold uppercase tracking-wider ${ACCENT_STEP[stage.accent]}`}
        >
          {stage.step}
        </span>
      </div>
      <h3 className="mb-2 text-sm font-bold leading-snug text-text-light md:text-base">
        {stage.title}
      </h3>
      <p className="mb-4 text-xs leading-relaxed text-text-subtle md:text-sm">
        {stage.description}
      </p>
      <div className="mt-auto flex items-start gap-2 rounded-lg border border-brand-400/20 bg-surface-elevated/40 px-3 py-2">
        <ShieldOff
          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400"
          strokeWidth={2}
          aria-hidden="true"
        />
        <span className="text-xs font-medium leading-snug text-text-subtle">
          {stage.gapClosed}
        </span>
      </div>
    </div>
  );
};

export const ClinicalInformationFlow = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
        <div className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-brand-400 md:text-sm">
          Where medical errors actually live
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-light md:text-4xl lg:text-5xl">
          One record. Every department. No gaps to fall through.
        </h2>
        <p className="text-base leading-relaxed text-text-subtle md:text-lg">
          In a fragmented hospital, information dies in the handoffs between departments —
          and that is where preventable delays and errors come from. An integrated HIS turns
          every handoff into one connected, audited patient record.
        </p>
      </div>

      {/* Desktop: horizontal relay — 5 equal cards with arrow connectors between */}
      <div className="hidden items-stretch lg:flex">
        {STAGES.map((stage, idx) => (
          <div key={stage.step} className="flex flex-1 items-stretch">
            <div className="flex-1">
              <StageCard stage={stage} />
            </div>
            {idx < STAGES.length - 1 && (
              <div className="flex w-8 shrink-0 items-center justify-center" aria-hidden="true">
                <ArrowRight className="h-5 w-5 text-brand-400/60" strokeWidth={2} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical relay */}
      <div className="space-y-0 lg:hidden">
        {STAGES.map((stage, idx) => (
          <div key={stage.step}>
            <StageCard stage={stage} />
            {idx < STAGES.length - 1 && (
              <div className="flex justify-center py-2" aria-hidden="true">
                <ArrowDown className="h-5 w-5 text-brand-400/60" strokeWidth={2} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Interoperability backbone strip */}
      <div className="mt-8 rounded-xl border border-brand-400/20 bg-glass-bg p-4 backdrop-blur-sm md:mt-10 md:p-5">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
            One interoperability backbone
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {STANDARDS.map((std) => (
              <span
                key={std}
                className="rounded-full border border-glass-border bg-surface-elevated/40 px-3 py-1 text-xs font-medium text-text-subtle"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
