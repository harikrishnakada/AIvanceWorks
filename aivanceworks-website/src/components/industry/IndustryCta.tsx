import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';

interface Cta {
  label: string;
  href: string;
}

export interface IndustryCtaProps {
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

/**
 * IndustryCta — a full-bleed accent band (the brand→accent gradient is the
 * page-end conversion contract). Distinct from the dark card-on-light CTABlock:
 * the colour IS the surface, with an inverted white primary button.
 */
export const IndustryCta = ({ title, description, primaryCta, secondaryCta }: IndustryCtaProps) => (
  <Section data-section="industry-cta" tone="accent" size="lg">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 right-1/4 w-[480px] h-64 bg-text-light/10 rounded-full blur-[120px]"
    />
    <Container>
      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light leading-[1.1] tracking-tight text-balance mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-text-light/85 leading-relaxed text-pretty max-w-[60ch]">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
          <Button
            asChild
            size="lg"
            className="bg-surface-white text-brand-700 hover:bg-brand-50 font-semibold rounded-xl shadow-card group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-light focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-text-light/40 text-text-light hover:bg-text-light/10 hover:border-text-light/60 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-light focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </Container>
  </Section>
);
