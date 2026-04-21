// src/components/services/ServicesNavStrip.tsx
'use client';

import { useEffect, useState } from 'react';

const PILLARS = [
  { id: 'ai-solutions', label: 'AI Solutions' },
  { id: 'software-engineering', label: 'Software Engineering' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'technologies', label: 'Technologies' },
] as const;

export function ServicesNavStrip() {
  const [activeId, setActiveId] = useState<string>(PILLARS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    PILLARS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
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
