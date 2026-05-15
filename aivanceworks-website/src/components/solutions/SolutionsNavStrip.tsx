'use client';

import { useEffect, useState } from 'react';

interface Pillar {
  id: string;
  label: string;
}

interface SolutionsNavStripProps {
  pillars: readonly Pillar[];
}

export function SolutionsNavStrip({ pillars }: SolutionsNavStripProps) {
  const [activeId, setActiveId] = useState<string>(pillars[0]?.id ?? '');

  useEffect(() => {
    const elements = pillars
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const pickActive = () => {
      // The sticky nav sits ~80px from the top. We consider the section
      // whose top is closest to (but not past) that line to be active.
      // Sections use `scroll-mt-32` (128px), so after an anchor click the
      // section's top lands at y=128. Probe just below that so the clicked
      // section is the one selected.
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
      if (hash && pillars.some((p) => p.id === hash)) {
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
  }, [pillars]);

  return (
    <div className="sticky top-16 md:top-[4.5rem] lg:top-20 z-30 bg-surface-white border-b border-border-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex gap-2 overflow-x-auto py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pillars.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveId(id)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
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
