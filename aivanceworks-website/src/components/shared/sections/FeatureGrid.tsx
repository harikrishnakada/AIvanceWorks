import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export interface FeatureItem {
  icon: string;        // Lucide icon name
  title: string;
  description: string;
}

export interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  features: FeatureItem[];
  columns?: 2 | 3;
  tone?: 'light' | 'warm';
  className?: string;
}

const COLUMN_CLASSES: Record<2 | 3, string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
};

export const FeatureGrid = ({
  title,
  subtitle,
  eyebrow,
  features,
  columns = 3,
  tone = 'light',
  className,
}: FeatureGridProps) => {
  // The section heading is optional. When it is omitted — as it is on every
  // service and solution page's capabilities grid — hardcoded <h3> cards
  // followed the page <h1> directly and skipped a level (heading-order,
  // WCAG 1.3.1). Promote the cards to <h2> in that case.
  const CardHeading = title ? 'h3' : 'h2';
  return (
  <Section data-section="feature-grid" tone={tone} size="md" className={className}>
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

      <div className={cn('grid gap-6 md:gap-8', COLUMN_CLASSES[columns])}>
        {features.map((feature, idx) => {
          const Icon = getLucideIcon(feature.icon);
          return (
            <div
              key={idx}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-6 md:p-7"
            >
              <IconTile icon={Icon} size="md" variant="brand" className="mb-5" />
              <CardHeading className="text-h3 font-semibold text-text-heading mb-2">
                {feature.title}
              </CardHeading>
              <p className="text-copy text-text-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
};
