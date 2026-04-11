import Link from 'next/link';
import { Section, Container } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';

export interface CTABlockCta {
  label: string;
  href: string;
}

export interface CTABlockProps {
  title: string;
  description: string;
  primaryCta: CTABlockCta;
  secondaryCta?: CTABlockCta;
  className?: string;
}

export const CTABlock = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTABlockProps) => (
  <Section tone="accent" size="md" className={className}>
    <Container width="narrow">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 md:mb-5 tracking-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg text-text-light/85 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-surface-white text-brand-700 hover:bg-surface-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border-subtle text-text-light hover:bg-[color:var(--glass-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </Container>
  </Section>
);
