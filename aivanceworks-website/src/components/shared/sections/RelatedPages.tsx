import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface RelatedPageItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface RelatedPagesProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  pages: RelatedPageItem[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const RelatedPages = ({
  title = 'Explore Related Solutions',
  subtitle,
  eyebrow,
  pages,
  tone = 'warm',
  className,
}: RelatedPagesProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
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
        {pages.map((page, idx) => {
          const Icon = getLucideIcon(page.icon);
          return (
            <Link key={idx} href={page.href} className="group">
              <div className="h-full bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card hover:border-brand-300 transition-all p-6 md:p-7">
                <IconTile
                  icon={Icon}
                  size="md"
                  variant="brand"
                  className="mb-5 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2 group-hover:text-brand-600 transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm md:text-base text-text-body leading-relaxed mb-4">
                  {page.description}
                </p>
                <div className="flex items-center text-brand-600 font-medium text-sm">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  </Section>
);
