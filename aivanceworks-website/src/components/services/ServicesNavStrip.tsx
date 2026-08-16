// src/components/services/ServicesNavStrip.tsx
'use client';

import { useEffect, useState } from 'react';

// "Our Teams" is not a service pillar — it's how we're organised, not what we
// sell — so it sits ahead of the pillars, styled in the accent ramp with a rule
// after it. Same affordance, deliberately not the same colour.
const TEAMS = { id: 'our-teams', label: 'Our Teams' } as const;

const PILLARS = [
  { id: 'automation-intelligence', label: 'Automation & Intelligence' },
  { id: 'advisory', label: 'Advisory' },
  // { id: 'enterprise', label: 'Enterprise' }, // hidden (set to false)
  { id: 'software-engineering', label: 'Software Engineering' },
  { id: 'infrastructure-management', label: 'Infrastructure Management' },
  { id: 'technologies', label: 'Technologies' },
] as const;

// Scroll order, teams first. The strip renders TEAMS separately so it can carry
// its own styling, but active-state tracking has to treat it as one list.
const SECTIONS: readonly { id: string; label: string }[] = [TEAMS, ...PILLARS];

export function ServicesNavStrip() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const pickActive = () => {
      // Sections use `scroll-mt-32` (128px), so probe just below that
      // line — the section whose top has crossed it is the active one.
      const probeY = 140;
      let current = elements[0].id;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top - probeY <= 0) {
          current = el.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    pickActive();
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && SECTIONS.some((p) => p.id === hash)) {
        setActiveId(hash);
      }
    };
    onHashChange();
    window.addEventListener('scroll', pickActive, { passive: true });
    window.addEventListener('resize', pickActive);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('scroll', pickActive);
      window.removeEventListener('resize', pickActive);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <div className="sticky top-16 md:top-[4.5rem] lg:top-20 z-30 bg-surface-white border-b border-border-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex gap-1.5 sm:gap-2 overflow-x-auto py-2 sm:py-2.5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <a
            href={`#${TEAMS.id}`}
            onClick={() => setActiveId(TEAMS.id)}
            className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-150 ${
              activeId === TEAMS.id
                ? 'bg-accent-700 text-white'
                : 'bg-accent-50 text-accent-700 hover:bg-accent-100'
            }`}
          >
            <span
              aria-hidden="true"
              className={`w-1.5 h-1.5 rounded-full ${
                activeId === TEAMS.id ? 'bg-white/70' : 'bg-accent-500'
              }`}
            />
            {TEAMS.label}
          </a>
          <span
            aria-hidden="true"
            className="flex-shrink-0 self-stretch w-px mx-1 my-1 bg-border-hover"
          />

          {PILLARS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveId(id)}
              className={`flex-shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-150 ${
                activeId === id
                  ? 'bg-brand-600 text-white'
                  : 'bg-surface-light text-text-body hover:bg-surface-warm'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
