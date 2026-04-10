/**
 * PortalArchitectureMap — signature section for Patient Portals page.
 *
 * Desktop: 3-column layout — left callouts, center diagram, right callouts.
 * Mobile: annotations stack above and below the diagram; diagram tiers
 *   linearize vertically with vertical connectors.
 */

import { Section, Container } from '@/components/shared/primitives';

interface ArchAnnotation {
  number: string;
  description: string;
  variant: 'brand' | 'accent' | 'success';
}

const LEFT_ANNOTATIONS: ArchAnnotation[] = [
  {
    number: '5 modules',
    description:
      'Records · Scheduling · Messaging · Telehealth · Billing — all from one codebase',
    variant: 'brand',
  },
  {
    number: 'Zero PHI in app layer',
    description:
      'All patient data tokenized at the gateway, never cached in the frontend',
    variant: 'success',
  },
  {
    number: '99.95% uptime',
    description:
      'Multi-region Azure with automated failover and health-check routing',
    variant: 'brand',
  },
];

const RIGHT_ANNOTATIONS: ArchAnnotation[] = [
  {
    number: 'FHIR R4 native',
    description:
      'SMART on FHIR where available, HL7 v2 fallback for legacy systems',
    variant: 'accent',
  },
  {
    number: 'Audit-ready day 1',
    description:
      'Every access logged with timestamp, actor, resource, outcome — OCR export',
    variant: 'brand',
  },
  {
    number: 'BAA managed',
    description:
      'Business associate agreements in place with all sub-processors',
    variant: 'success',
  },
];

interface ArchTier {
  label: string;
  subLabel: string;
  chips: string[];
  emphasis?: 'portal' | 'bridge' | 'default';
}

const TIERS: ArchTier[] = [
  {
    label: 'Patient Portal',
    subLabel: 'Web + PWA + mobile',
    chips: ['Records', 'Scheduling', 'Messaging', 'Telehealth', 'Billing'],
    emphasis: 'portal',
  },
  {
    label: 'Identity + Gateway',
    subLabel: 'Azure AD B2C + Key Vault',
    chips: ['MFA', 'RBAC', 'Audit log', 'AES-256'],
  },
  {
    label: 'FHIR R4 / HL7 Bridge',
    subLabel: 'interop middleware',
    chips: ['SMART on FHIR', 'HL7 v2', 'Transform'],
    emphasis: 'bridge',
  },
  {
    label: 'Your EHR',
    subLabel: 'vendor-agnostic',
    chips: ['Epic', 'Cerner', 'Athena', 'eCW', '+ more'],
  },
];

const VARIANT_CLASSES: Record<ArchAnnotation['variant'], string> = {
  brand: 'border-l-brand-500',
  accent: 'border-l-accent-500',
  success: 'border-l-brand-400',
};

const getTierClasses = (emphasis?: 'portal' | 'bridge' | 'default') => {
  if (emphasis === 'portal') {
    return 'bg-gradient-to-r from-accent-500/20 to-brand-500/15 border-accent-500/40';
  }
  if (emphasis === 'bridge') {
    return 'bg-brand-500/10 border-brand-500/30';
  }
  return 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]';
};

const Annotation = ({ ann }: { ann: ArchAnnotation }) => (
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

export const PortalArchitectureMap = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          How it connects
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Meets your EHR where it is — not the other way around.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Every integration layer is tokenized, audit-logged, and wrapped in a compliance
          envelope designed for OCR review.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_2fr_1fr] lg:gap-8 items-center">
        <div className="flex flex-col gap-3 md:gap-4">
          {LEFT_ANNOTATIONS.map((ann, idx) => (
            <Annotation key={idx} ann={ann} />
          ))}
        </div>

        <div className="relative">
          <div className="border-2 border-dashed border-brand-400/40 rounded-2xl p-6 md:p-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
                HIPAA · SOC 2 · HITECH · 21 CFR Part 11
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {TIERS.map((tier, idx) => (
                <div key={idx}>
                  <div
                    className={`rounded-xl border p-4 md:p-5 ${getTierClasses(
                      tier.emphasis
                    )}`}
                  >
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="min-w-0">
                        <div className="text-sm md:text-base font-bold text-text-light">
                          {tier.label}
                        </div>
                        <div className="text-xs text-text-subtle uppercase tracking-wide mt-0.5">
                          {tier.subLabel}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {tier.chips.map((chip, chipIdx) => (
                          <span
                            key={chipIdx}
                            className="text-xs px-2 py-1 rounded-full bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] text-text-subtle"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {idx < TIERS.length - 1 && (
                    <div className="flex justify-center py-1.5" aria-hidden="true">
                      <span className="text-brand-400/60 text-base">▼</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {RIGHT_ANNOTATIONS.map((ann, idx) => (
            <Annotation key={idx} ann={ann} />
          ))}
        </div>
      </div>
    </Container>
  </Section>
);
