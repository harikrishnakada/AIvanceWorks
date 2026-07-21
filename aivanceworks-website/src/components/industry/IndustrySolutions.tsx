'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { CheckCircle2, ChevronDown, Sparkles, Info, ArrowRight } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export interface SolutionGroup {
  icon: string;
  title: string;
  description?: string;
  items: string[];
  aiAngle?: string;
  note?: string;
}

export interface IndustrySolutionsProps {
  title?: string;
  highlightText?: string;
  subtitle?: string;
  groups: SolutionGroup[];
}

/** The detail "box" for a single solution — shared by the desktop panel and
 *  the mobile accordion so the copy is authored once. */
function SolutionDetail({ group }: { group: SolutionGroup }) {
  return (
    <div className="flex h-full flex-col">
      {group.description && (
        <p className="text-base md:text-lg text-text-light/75 leading-relaxed text-pretty mb-6 max-w-[62ch]">
          {group.description}
        </p>
      )}
      <ul className="grid gap-3 sm:grid-cols-2">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
            <span className="text-sm md:text-[15px] text-text-light/85 leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {group.aiAngle && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent-400/25 bg-accent-500/[0.08] px-4 py-3.5">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
          <p className="text-sm text-text-light/80 leading-relaxed">
            <span className="font-semibold text-accent-200">AI layer — </span>
            {group.aiAngle}
          </p>
        </div>
      )}

      {group.note && (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-border-dark bg-surface-elevated/60 px-4 py-3.5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-text-light/40" aria-hidden="true" />
          <p className="text-sm text-text-light/55 leading-relaxed">{group.note}</p>
        </div>
      )}
    </div>
  );
}

/**
 * IndustrySolutions — the "what we build" catalog as a dropdown + solutions-box
 * (client feedback: solutions presented in a dropdown + solutions box format).
 * Desktop: a vertical selector rail (role=tablist) on the left drives a detail
 * box on the right. Mobile: the same rows become an accordion, each expanding
 * its box in place. Dark tone — carries the page's visual weight.
 */
export const IndustrySolutions = ({
  title = 'The software we build',
  highlightText,
  subtitle,
  groups,
}: IndustrySolutionsProps) => {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const titleContent = (() => {
    if (!highlightText || !title.includes(highlightText)) return title;
    const [before, after] = title.split(highlightText);
    return (
      <>
        {before}
        <span className="text-brand-400">{highlightText}</span>
        {after}
      </>
    );
  })();

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Home' && e.key !== 'End') return;
    e.preventDefault();
    let next = idx;
    if (e.key === 'ArrowDown') next = (idx + 1) % groups.length;
    else if (e.key === 'ArrowUp') next = (idx - 1 + groups.length) % groups.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = groups.length - 1;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section data-section="industry-solutions" tone="dark" size="lg" withGrid>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/3 w-[620px] h-72 bg-brand-500/[0.09] rounded-full blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[480px] h-56 bg-accent-500/[0.06] rounded-full blur-[110px]"
      />

      <Container>
        <div className="max-w-3xl mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light tracking-tight text-balance mb-4">
            {titleContent}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg text-text-light/70 leading-relaxed text-pretty">
              {subtitle}
            </p>
          )}
        </div>

        <div className="lg:grid lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-6 xl:gap-8 lg:items-start">
          {/* Selector rail (desktop tablist / mobile accordion triggers) */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Banking software solutions"
            className="flex flex-col gap-2.5 lg:gap-2"
          >
            {groups.map((group, idx) => {
              const Icon = getLucideIcon(group.icon);
              const isActive = idx === active;
              const tabId = `${baseId}-tab-${idx}`;
              const panelId = `${baseId}-panel-${idx}`;
              return (
                <div key={group.title} className="flex flex-col">
                  <button
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    role="tab"
                    id={tabId}
                    aria-selected={isActive}
                    aria-controls={panelId}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(idx)}
                    onKeyDown={(e) => onKeyDown(e, idx)}
                    className={cn(
                      'group flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                      isActive
                        ? 'border-brand-400/60 bg-brand-500/[0.14] shadow-glow-sm'
                        : 'border-border-dark bg-surface-elevated/50 hover:border-brand-400/40 hover:bg-surface-elevated'
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors',
                        isActive
                          ? 'border-brand-400/30 bg-brand-500/20 text-brand-200'
                          : 'border-brand-400/20 bg-brand-500/[0.12] text-brand-300 group-hover:bg-brand-500/20'
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={cn(
                        'min-w-0 flex-1 text-[15px] md:text-base font-semibold leading-tight',
                        isActive ? 'text-text-light' : 'text-text-light/75 group-hover:text-text-light'
                      )}
                    >
                      {group.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none lg:hidden',
                        isActive ? 'rotate-180 text-brand-300' : 'text-text-light/40'
                      )}
                      aria-hidden="true"
                    />
                    <ArrowRight
                      className={cn(
                        'hidden h-5 w-5 shrink-0 transition-all duration-300 motion-reduce:transition-none lg:block',
                        isActive
                          ? 'translate-x-0 text-brand-300 opacity-100'
                          : '-translate-x-1 text-text-light/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mobile: inline accordion panel for the active row */}
                  <div
                    className={cn(
                      'grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:hidden',
                      isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div
                        id={panelId}
                        role="tabpanel"
                        aria-labelledby={tabId}
                        className="rounded-xl border border-border-dark bg-surface-elevated/40 px-4 py-5 mt-2.5"
                      >
                        <SolutionDetail group={group} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: the solutions box for the active solution */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            {groups.map((group, idx) => {
              const Icon = getLucideIcon(group.icon);
              if (idx !== active) return null;
              return (
                <div
                  key={group.title}
                  role="tabpanel"
                  id={`${baseId}-desktop-panel`}
                  aria-labelledby={`${baseId}-tab-${idx}`}
                  className="rounded-2xl border border-border-dark bg-surface-elevated p-7 xl:p-8"
                >
                  <div className="flex items-center gap-3.5 mb-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/[0.14] border border-brand-400/25 text-brand-200">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-text-light leading-tight tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                  <SolutionDetail group={group} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
