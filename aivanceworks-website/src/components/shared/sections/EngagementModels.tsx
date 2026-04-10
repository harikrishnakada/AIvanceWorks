import Link from 'next/link';
import { Section, Container, CheckList } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface EngagementCta {
  label: string;
  href: string;
}

export interface EngagementModel {
  name: string;
  duration: string;
  priceFrom?: string;
  whatsIncluded: string[];
  suitableFor: string;
  primaryCta: EngagementCta;
  featured?: boolean;
}

export interface EngagementModelsProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  models: EngagementModel[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const EngagementModels = ({
  title = 'Engagement Models',
  subtitle,
  eyebrow,
  models,
  tone = 'warm',
  className,
}: EngagementModelsProps) => (
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

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model, idx) => (
          <div
            key={idx}
            className={cn(
              'bg-surface-white border rounded-xl p-6 md:p-8 flex flex-col',
              model.featured
                ? 'border-brand-600 shadow-brand-card ring-1 ring-brand-600'
                : 'border-border-light shadow-card-sm'
            )}
          >
            {model.featured && (
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">
                Most popular
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-text-heading mb-2">
              {model.name}
            </h3>
            <div className="text-sm text-text-muted mb-4">{model.duration}</div>
            {model.priceFrom && (
              <div className="mb-4">
                <span className="text-sm text-text-muted">Starting at</span>
                <div className="text-3xl md:text-4xl font-extrabold text-text-heading">
                  {model.priceFrom}
                </div>
              </div>
            )}
            <div className="text-sm text-text-body mb-4 italic">
              Best for: {model.suitableFor}
            </div>
            <div className="flex-1 mb-6">
              <CheckList items={model.whatsIncluded} />
            </div>
            <Button
              asChild
              className={cn(
                model.featured
                  ? 'bg-brand-600 hover:bg-brand-700 text-text-light'
                  : 'bg-surface-warm hover:bg-surface-light text-text-heading border border-border-light'
              )}
            >
              <Link href={model.primaryCta.href}>{model.primaryCta.label}</Link>
            </Button>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
