import { Section, Container, StatBlock } from '@/components/shared/primitives';
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
  <Section tone={tone} size="sm" className={className}>
    <Container>
      {eyebrow && (
        <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4 md:mb-6">
          {eyebrow}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {metrics.map((metric, idx) => (
          <StatBlock
            key={idx}
            value={metric.value}
            label={metric.label}
            description={metric.description}
          />
        ))}
      </div>
    </Container>
  </Section>
);
