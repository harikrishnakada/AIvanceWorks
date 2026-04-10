import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface MethodologyCard {
  icon: string;
  name: string;
  description: string;
}

export interface DiscoveryMethodologyProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  methods: MethodologyCard[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const DiscoveryMethodology = ({
  title = 'Our Methodology',
  subtitle,
  eyebrow,
  methods,
  tone = 'warm',
  className,
}: DiscoveryMethodologyProps) => (
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

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {methods.map((method, idx) => {
          const Icon = getLucideIcon(method.icon);
          return (
            <div
              key={idx}
              className="bg-surface-white border border-border-light rounded-xl shadow-card-sm p-6 md:p-7 hover:shadow-card transition-shadow"
            >
              <IconTile icon={Icon} size="md" variant="brand" className="mb-5" />
              <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
                {method.name}
              </h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {method.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
