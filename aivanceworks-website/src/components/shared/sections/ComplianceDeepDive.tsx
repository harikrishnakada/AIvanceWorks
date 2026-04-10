import { Section, Container, IconTile, ChipRow } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface SafeguardItem {
  icon: string;
  title: string;
  description: string;
}

export interface ComplianceDeepDiveProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  frameworks: string[];
  safeguards: SafeguardItem[];
  auditNote: string;
  partnerAgreements?: string[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const ComplianceDeepDive = ({
  title = 'Compliance by design',
  subtitle,
  eyebrow,
  frameworks,
  safeguards,
  auditNote,
  partnerAgreements,
  tone = 'warm',
  className,
}: ComplianceDeepDiveProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        <ChipRow items={frameworks} variant="brand" />
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {safeguards.map((safeguard, idx) => {
          const Icon = getLucideIcon(safeguard.icon);
          return (
            <div
              key={idx}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm p-6 md:p-7"
            >
              <IconTile icon={Icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
                {safeguard.title}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {safeguard.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-surface-white border border-border-light rounded-xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-3">
              Audit-ready on day one
            </h3>
            <p className="text-sm md:text-base text-text-body leading-relaxed">
              {auditNote}
            </p>
          </div>
          {partnerAgreements && partnerAgreements.length > 0 && (
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-3">
                Partner agreements in place
              </h3>
              <ChipRow items={partnerAgreements} variant="default" />
            </div>
          )}
        </div>
      </div>
    </Container>
  </Section>
);
