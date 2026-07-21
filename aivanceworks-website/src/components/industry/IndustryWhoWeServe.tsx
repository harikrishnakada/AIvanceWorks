'use client';

import { useId, useState } from 'react';
import { ChevronDown, Check, Ban } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface IndustryWhoWeServeProps {
  title: string;
  subtitle?: string;
  summary?: string;
  types: string[];
  excludedNote?: string;
  /** Lucide icon name for the section marker. */
  icon?: string;
}

/**
 * IndustryWhoWeServe — the explicit roster of business types we serve within
 * an industry, as an expandable dropdown (client feedback: "every industry
 * page must clearly list who we serve"). The list is always rendered in the
 * DOM and starts open, so it is present for search engines and static renders;
 * the toggle collapses it for readers who want to move on. Light tone.
 */
export const IndustryWhoWeServe = ({
  title,
  subtitle,
  summary,
  types,
  excludedNote,
  icon = 'Building2',
}: IndustryWhoWeServeProps) => {
  const [open, setOpen] = useState(true);
  const panelId = useId();
  const Icon = getLucideIcon(icon);

  return (
    <Section data-section="industry-who-we-serve" tone="light" size="lg">
      <Container>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border-light bg-surface-warm/60">
          {/* Toggle header */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group flex w-full items-center gap-4 sm:gap-5 px-6 sm:px-8 py-6 md:py-7 text-left transition-colors hover:bg-surface-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-inset"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-white border border-border-light text-brand-600 transition-colors group-hover:border-brand-300">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-text-heading tracking-tight text-balance">
                {title}
              </span>
              {(summary || subtitle) && (
                <span className="mt-1 block text-sm md:text-base text-text-muted">
                  {summary ?? subtitle}
                </span>
              )}
            </span>
            <ChevronDown
              className={[
                'h-6 w-6 shrink-0 text-brand-600 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none',
                open ? 'rotate-180' : 'rotate-0',
              ].join(' ')}
              aria-hidden="true"
            />
          </button>

          {/* Collapsible panel — animated via grid-rows so content stays in the
              DOM (SEO- and static-render-safe) rather than being conditionally
              mounted. */}
          <div
            id={panelId}
            className={[
              'grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none',
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            ].join(' ')}
          >
            <div className="overflow-hidden">
              <div className="border-t border-border-light px-6 sm:px-8 pt-6 md:pt-7 pb-7 md:pb-8">
                {subtitle && summary && (
                  <p className="mb-6 max-w-[70ch] text-sm md:text-base text-text-body leading-relaxed text-pretty">
                    {subtitle}
                  </p>
                )}
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {types.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm md:text-base font-medium text-text-heading leading-snug">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>

                {excludedNote && (
                  <div className="mt-7 flex items-start gap-3 rounded-xl border border-border-light bg-surface-white px-4 py-3.5">
                    <Ban className="mt-0.5 h-4 w-4 shrink-0 text-text-subtle" aria-hidden="true" />
                    <p className="text-sm text-text-muted leading-relaxed">{excludedNote}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
