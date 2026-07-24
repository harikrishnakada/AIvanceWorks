// src/components/services/ServicesNavStrip.tsx
'use client';

import { useEffect, useState } from 'react';

const PILLARS = [
  { id: 'automation-intelligence', label: 'Automation & Intelligence' },
  { id: 'advisory', label: 'Advisory' },
  // { id: 'enterprise', label: 'Enterprise' }, // hidden (set to false)
  { id: 'software-engineering', label: 'Software Engineering' },
  { id: 'infrastructure-management', label: 'Infrastructure Management' },
  { id: 'technologies', label: 'Technologies' },
] as const;

export function ServicesNavStrip() {
  const [activeId, setActiveId] = useState<string>(PILLARS[0].id);

  useEffect(() => {
    const elements = PILLARS
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
      if (hash && PILLARS.some((p) => p.id === hash)) {
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
          className="flex gap-2 overflow-x-auto py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PILLARS.map(({ id, label }) => (
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
