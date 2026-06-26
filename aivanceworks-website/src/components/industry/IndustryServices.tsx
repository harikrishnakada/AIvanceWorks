import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface ServiceLink {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface IndustryServicesProps {
  title: string;
  subtitle?: string;
  items: ServiceLink[];
}

/**
 * IndustryServices — the services relevant to this vertical, shown as an
 * editorial directory of full-width linked rows (not a card grid). Each row
 * reveals its arrow and shifts on hover. Light tone.
 */
export const IndustryServices = ({ title, subtitle, items }: IndustryServicesProps) => (
  <Section data-section="industry-services" tone="light" size="lg">
    <Container>
      <div className="max-w-3xl mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading tracking-tight text-balance mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>

      <div className="border-t border-border-light">
        {items.map((item, idx) => {
          const Icon = getLucideIcon(item.icon);
          return (
            <Link
              key={idx}
              href={item.href}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 md:gap-x-8 py-6 md:py-8 border-b border-border-light transition-colors hover:bg-surface-warm/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 rounded-sm"
            >
              <span className="inline-flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl bg-surface-warm border border-border-light text-brand-600 transition-all group-hover:bg-brand-50 group-hover:border-brand-300 group-hover:scale-105">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-text-heading tracking-tight transition-colors group-hover:text-brand-600">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed mt-1 max-w-[68ch]">
                  {item.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted transition-colors group-hover:text-brand-600 shrink-0">
                <span className="hidden sm:inline">Explore</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </Container>
  </Section>
);
