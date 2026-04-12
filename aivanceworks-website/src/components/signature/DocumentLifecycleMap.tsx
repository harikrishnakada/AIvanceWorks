/**
 * DocumentLifecycleMap — signature section for Document Management Software page.
 *
 * Visualization pattern: Process/Flow (§8.3 pattern 3) — a 5-stage horizontal
 * flow diagram showing a document's lifecycle from ingestion through compliant
 * destruction, with compliance frameworks anchored to each phase.
 *
 * Argument: "From the moment a document enters your system to its compliant
 * destruction — every step is controlled, logged, and auditable."
 *
 * Desktop (lg+): 5 stage cards in a single horizontal row with connecting
 *   arrows between them. Each card shows a numbered badge, icon label, stage
 *   title, one-line description, and a compliance callout pill at the bottom.
 *   A dashed compliance perimeter wraps all 5 cards. A bottom pill row shows
 *   the active compliance controls.
 *
 * Mobile (< lg): 5 stage cards stack in a single column. Horizontal arrows are
 *   replaced by a ▼ connector between cards. Compliance perimeter becomes a
 *   header label strip at the top and a footer pill row at the bottom.
 *   The visual argument — "sequential, controlled lifecycle" — is preserved
 *   through stacking order (ingest at top → destruction at bottom).
 */

import { Section, Container } from '@/components/shared/primitives';

interface LifecycleStage {
  number: string;
  title: string;
  description: string;
  complianceTag: string;
  emphasis: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'terminal';
}

const STAGES: LifecycleStage[] = [
  {
    number: '01',
    title: 'Ingest & Classify',
    description: 'Document enters from EHR, scanner, email, or portal. AI assigns type and retention schedule.',
    complianceTag: 'Source metadata preserved',
    emphasis: 'primary',
  },
  {
    number: '02',
    title: 'Encrypted Storage',
    description: 'PHI encrypted at rest in Azure Blob. Version-controlled with access scoped by role and document type.',
    complianceTag: 'HIPAA encryption safeguard',
    emphasis: 'secondary',
  },
  {
    number: '03',
    title: 'Retention Enforcement',
    description: 'Policy engine tracks expiry per type and jurisdiction. Alerts surface approaching deadlines for review.',
    complianceTag: 'HIPAA · DOI · State law',
    emphasis: 'tertiary',
  },
  {
    number: '04',
    title: 'Access & Audit',
    description: 'Every view, share, download, and modification logged with actor and timestamp. Tamper-protected.',
    complianceTag: 'HIPAA audit controls',
    emphasis: 'secondary',
  },
  {
    number: '05',
    title: 'Hold or Destroy',
    description: 'Legal hold freezes documents on demand. Compliant destruction issues a certificate and closes the log.',
    complianceTag: '21 CFR Part 11 · HITECH',
    emphasis: 'terminal',
  },
];

const STAGE_STYLES: Record<LifecycleStage['emphasis'], string> = {
  primary:   'border-brand-500/40 bg-gradient-to-b from-brand-500/15 to-brand-500/5',
  secondary: 'border-accent-500/40 bg-gradient-to-b from-accent-500/15 to-accent-500/5',
  tertiary:  'border-brand-400/40 bg-gradient-to-b from-brand-400/15 to-brand-400/5',
  warning:   'border-accent-400/40 bg-gradient-to-b from-accent-400/15 to-accent-400/5',
  terminal:  'border-brand-300/40 bg-gradient-to-b from-brand-300/10 to-brand-300/5',
};

const STAGE_NUMBER_STYLES: Record<LifecycleStage['emphasis'], string> = {
  primary:  'text-brand-300',
  secondary: 'text-accent-300',
  tertiary:  'text-brand-400',
  warning:   'text-accent-400',
  terminal:  'text-brand-300',
};

const STAGE_TAG_STYLES: Record<LifecycleStage['emphasis'], string> = {
  primary:   'border-brand-500/30 text-brand-400',
  secondary: 'border-accent-500/30 text-accent-400',
  tertiary:  'border-brand-400/30 text-brand-400',
  warning:   'border-accent-400/30 text-accent-400',
  terminal:  'border-brand-300/30 text-brand-300',
};

const StageCard = ({ stage }: { stage: LifecycleStage }) => (
  <div className={`rounded-xl border p-4 flex flex-col gap-2 h-full ${STAGE_STYLES[stage.emphasis]}`}>
    <div className="flex items-center gap-2">
      <span className={`text-xs font-bold uppercase tracking-wider ${STAGE_NUMBER_STYLES[stage.emphasis]}`}>
        {stage.number}
      </span>
    </div>
    <p className="text-sm md:text-base font-bold text-text-light leading-snug">
      {stage.title}
    </p>
    <p className="text-xs md:text-sm text-text-subtle leading-relaxed flex-1">
      {stage.description}
    </p>
    <div className="mt-1">
      <span
        className={`inline-block text-xs px-2 py-0.5 rounded-full border ${STAGE_TAG_STYLES[stage.emphasis]}`}
      >
        {stage.complianceTag}
      </span>
    </div>
  </div>
);

const Arrow = () => (
  <div
    className="flex-shrink-0 flex items-center justify-center text-brand-400/50 text-base"
    aria-hidden="true"
  >
    →
  </div>
);

const DownArrow = () => (
  <div
    className="flex justify-center py-0.5 text-brand-400/50 text-base"
    aria-hidden="true"
  >
    ▼
  </div>
);

export const DocumentLifecycleMap = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The document lifecycle
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Controlled from ingestion to destruction.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Every document that enters your system follows a defined, auditable lifecycle — classified, retained per regulation, access-logged, and either held for litigation or destroyed with a certificate.
        </p>
      </div>

      {/* Compliance perimeter */}
      <div className="relative border-2 border-dashed border-brand-400/40 rounded-2xl p-5 sm:p-6 md:p-8">
        {/* Top compliance label */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
            HIPAA · HITECH · 21 CFR Part 11 · NAIC · State DOI
          </span>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden space-y-2">
          {STAGES.map((stage, idx) => (
            <div key={idx}>
              <StageCard stage={stage} />
              {idx < STAGES.length - 1 && <DownArrow />}
            </div>
          ))}
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex lg:items-stretch lg:gap-2">
          {STAGES.map((stage, idx) => (
            <div key={idx} className="flex items-stretch gap-2 flex-1">
              <div className="flex-1">
                <StageCard stage={stage} />
              </div>
              {idx < STAGES.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        {/* Bottom compliance controls */}
        <div className="mt-6 pt-5 border-t border-brand-400/20 flex flex-wrap justify-center gap-3">
          {[
            'AES-256 Encryption',
            'RBAC + MFA',
            'Immutable Audit Log',
            'Retention Engine',
            'Legal Hold',
            'BAA Available',
          ].map((item, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);
