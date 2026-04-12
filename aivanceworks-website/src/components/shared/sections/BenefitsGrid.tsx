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
}: BenefitsGridProps) => (
  <Section data-section="benefits-grid" tone={tone} size="md" className={className}>
    <Container>
      {(title || subtitle || eyebrow) && (
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base md:text-lg text-text-body leading-relaxed">
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
                  <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-body leading-relaxed">
                    {benefit.description}
                  </p>
                  {benefit.stat && (
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-brand-600">
                        {benefit.stat}
                      </span>
                      {benefit.statLabel && (
                        <span className="text-sm text-text-muted">
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
