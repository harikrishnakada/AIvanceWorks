import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import type { IndustryDirectoryLink } from '@/types/pages';

export interface IndustryDirectoryProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  items: IndustryDirectoryLink[];
}

/**
 * IndustryDirectory — cross-vertical navigation for the flagship
 * "how we build" service page. Routes visitors down into the industry
 * vertical pages (/industry/<slug>) as an editorial directory of full-width
 * linked rows (not a card grid), each with a one-line "Building for X?"
 * connector. Light tone.
 *
 * Mobile: the three-column row (icon · text · CTA) collapses — the trailing
 * "Explore" label is hidden below sm, the arrow remains, and the name/connector
 * stack naturally within the middle column.
 */
export const IndustryDirectory = ({
  eyebrow,
  title,
  highlightText,
  subtitle,
  items,
}: IndustryDirectoryProps) => {
  const titleContent = (() => {
    if (!highlightText || !title.includes(highlightText)) return title;
    const [before, after] = title.split(highlightText);
    return (
      <>
        {before}
        <span className="text-brand-600">{highlightText}</span>
        {after}
      </>
    );
  })();

  return (
    <Section data-section="industry-directory" tone="light" size="lg">
      <Container>
        <div className="max-w-3xl mb-10 md:mb-12">
          {eyebrow && (
            <div className="text-label font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-h2 font-bold text-text-heading tracking-tight text-balance mb-4">
            {titleContent}
          </h2>
          {subtitle && (
            <p className="text-lead text-text-body leading-relaxed text-pretty">
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
                    {item.name}
                  </h3>
                  <p className="text-copy text-text-muted leading-relaxed mt-1 max-w-[68ch]">
                    {item.connector}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-copy-sm font-semibold text-text-muted transition-colors group-hover:text-brand-600 shrink-0">
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
};
