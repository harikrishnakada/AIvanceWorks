import Link from 'next/link';
import { Section, Container, MetricsCard, type Metric } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroProps {
  badge?: string;
  badgeHref?: string;
  headline: string;
  subhead: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  metrics?: Metric[];
  metricsTitle?: string;
  className?: string;
}

export const Hero = ({
  badge,
  badgeHref,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  metrics,
  metricsTitle = 'Key Results',
  className,
}: HeroProps) => {
  const hasRightColumn = metrics && metrics.length > 0;

  return (
    <Section tone="dark" size={hasRightColumn ? 'md' : 'lg'} withGrid className={className}>
      <Container>
        <div
          className={cn(
            'grid gap-10 md:gap-12 items-center',
            hasRightColumn ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
          )}
        >
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-sm font-medium mb-6">
                {badgeHref ? (
                  <Link href={badgeHref} className="hover:text-brand-200 transition-colors">
                    {badge}
                  </Link>
                ) : (
                  badge
                )}
              </div>
            )}
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold text-text-light mb-6 leading-tight tracking-tight",
              hasRightColumn ? "lg:text-[3.25rem]" : "lg:text-6xl"
            )}>
              {headline}
            </h1>
            <p className={cn(
              "text-base md:text-lg lg:text-xl text-text-subtle leading-relaxed max-w-[62ch]",
              hasRightColumn ? "mb-6" : "mb-8"
            )}>
              {subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-text-light">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border-subtle text-text-light hover:bg-[color:var(--glass-hover)]"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>
          {hasRightColumn && (
            <MetricsCard metrics={metrics!} title={metricsTitle} />
          )}
        </div>
      </Container>
    </Section>
  );
};
