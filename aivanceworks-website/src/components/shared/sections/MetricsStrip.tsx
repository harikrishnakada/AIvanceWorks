import { Section, Container } from '@/components/shared/primitives';
import type { Metric } from '@/components/shared/primitives';

export interface MetricsStripProps {
  metrics: Metric[];
  eyebrow?: string;
  tone?: 'light' | 'warm';
  className?: string;
}

export const MetricsStrip = ({
  metrics,
  eyebrow,
  tone = 'light',
  className,
}: MetricsStripProps) => (
  <Section data-section="metrics-strip" tone={tone} size="sm" className={className}>
    <Container>
      {eyebrow && (
        <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4 md:mb-6">
          {eyebrow}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-[auto] sm:grid-rows-[auto_auto_auto] gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="grid sm:grid-rows-subgrid sm:row-span-3 gap-2 content-start"
          >
            <div className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent break-words">
              {metric.value}
            </div>
            <div className="text-sm md:text-base font-semibold text-text-heading">
              {metric.label}
            </div>
            {metric.description && (
              <div className="text-xs md:text-sm text-text-muted max-w-[28ch]">
                {metric.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
