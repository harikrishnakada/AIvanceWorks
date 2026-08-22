import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface BenefitsGridProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  benefits: BenefitItem[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const BenefitsGrid = ({
  title,
  subtitle,
  eyebrow,
  benefits,
  tone = 'warm',
  className,
}: BenefitsGridProps) => {
  // The section heading is optional. When it is omitted, hardcoded <h3> cards
  // followed the page <h1> directly and skipped a level (heading-order, WCAG
  // 1.3.1). Promote the cards to <h2> in that case.
  const CardHeading = title ? 'h3' : 'h2';
  return (
  <Section data-section="benefits-grid" tone={tone} size="md" className={className}>
    <Container>
      {(title || subtitle || eyebrow) && (
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-label font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-h2 font-bold text-text-heading mb-4 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lead text-text-body leading-relaxed max-w-[70ch] mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {benefits.map((benefit, idx) => {
          const Icon = getLucideIcon(benefit.icon);
          const isLastOdd =
            idx === benefits.length - 1 && benefits.length % 2 !== 0;
          return (
            <div
              key={idx}
              className={`bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-6 md:p-7${isLastOdd ? ' lg:col-span-2' : ''}`}
            >
              <div className="flex items-start gap-4 md:gap-5">
                <IconTile icon={Icon} size="md" variant="brand" />
                <div className="flex-1 min-w-0">
                  <CardHeading className="text-h3 font-semibold text-text-heading mb-2">
                    {benefit.title}
                  </CardHeading>
                  <p className="text-copy text-text-body leading-relaxed">
                    {benefit.description}
                  </p>
                  {benefit.stat && (
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-brand-600">
                        {benefit.stat}
                      </span>
                      {benefit.statLabel && (
                        <span className="text-copy-sm text-text-muted">
                          {benefit.statLabel}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
};
