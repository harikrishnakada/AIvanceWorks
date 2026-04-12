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
}: FeatureGridProps) => (
  <Section data-section="feature-grid" tone={tone} size="md" className={className}>
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

      <div className={cn('grid gap-6 md:gap-8', COLUMN_CLASSES[columns])}>
        {features.map((feature, idx) => {
          const Icon = getLucideIcon(feature.icon);
          return (
            <div
              key={idx}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-6 md:p-7"
            >
              <IconTile icon={Icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
