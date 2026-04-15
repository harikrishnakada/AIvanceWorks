'use client';

import { useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { Section, Container, CheckList } from '@/components/shared/primitives';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface EngagementCta {
  label: string;
  href: string;
}

export interface EngagementModel {
  name: string;
  duration: string;
  priceFrom?: string;
  whatsIncluded: string[];
  suitableFor: string;
  primaryCta: EngagementCta;
  featured?: boolean;
}

export interface EngagementModelsProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  models: EngagementModel[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const EngagementModels = ({
  title = 'Engagement Models',
  subtitle,
  eyebrow,
  models,
  tone = 'warm',
  className,
}: EngagementModelsProps) => {
  const defaultIdx = Math.max(
    0,
    models.findIndex((m) => m.featured),
  );
  const [selectedIdx, setSelectedIdx] = useState(defaultIdx);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, idx: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedIdx(idx);
    }
  };

  return (
    <Section data-section="engagement-models" tone={tone} size="md" className={className}>
      <Container>
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
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

        <div
          role="radiogroup"
          aria-label={title}
          className="grid gap-6 md:gap-7 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-md sm:max-w-3xl lg:max-w-none mx-auto"
        >
          {models.map((model, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={idx}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => setSelectedIdx(idx)}
                onKeyDown={(event) => handleKeyDown(event, idx)}
                className={cn(
                  'relative bg-surface-white border rounded-xl p-6 md:p-7 lg:p-8 flex flex-col cursor-pointer transition-all duration-200 outline-none',
                  'focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2',
                  isSelected
                    ? 'border-brand-600 shadow-brand-card ring-1 ring-brand-600 -translate-y-1'
                    : 'border-border-light shadow-card-sm hover:border-brand-300 hover:shadow-card-md',
                )}
              >
                {model.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-600 text-text-light text-[10px] md:text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                    Most popular
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-text-heading mb-2">
                  {model.name}
                </h3>
                <div className="text-sm text-text-muted mb-4">{model.duration}</div>
                {model.priceFrom && (
                  <div className="mb-4">
                    <span className="text-sm text-text-muted">Starting at</span>
                    <div className="text-3xl md:text-4xl font-extrabold text-text-heading">
                      {model.priceFrom}
                    </div>
                  </div>
                )}
                <div className="text-sm text-text-body mb-4 italic">
                  Best for: {model.suitableFor}
                </div>
                <div className="flex-1 mb-6">
                  <CheckList items={model.whatsIncluded} />
                </div>
                <Button
                  asChild
                  className={cn(
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2',
                    isSelected
                      ? 'bg-brand-600 hover:bg-brand-700 text-text-light'
                      : 'bg-surface-warm hover:bg-surface-light text-text-heading border border-border-light',
                  )}
                >
                  <Link
                    href={model.primaryCta.href}
                    onClick={(event) => event.stopPropagation()}
                  >
                    {model.primaryCta.label}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
