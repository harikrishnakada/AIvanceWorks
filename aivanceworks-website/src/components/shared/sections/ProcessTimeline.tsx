'use client';

import { Clock, FileText, ArrowRight } from 'lucide-react';
import { Section, Container, StepBadge } from '@/components/shared/primitives';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface ProcessStep {
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  steps: ProcessStep[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const ProcessTimeline = ({
  title = 'Our Implementation Process',
  subtitle,
  eyebrow,
  steps,
  tone = 'light',
  className,
}: ProcessTimelineProps) => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
  <Section data-section="process-timeline" tone={tone} size="md" className={className}>
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
        ref={gridRef}
        className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 scroll-stagger"
      >
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="h-full bg-surface-white border border-border-light rounded-xl shadow-card-sm p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <StepBadge step={idx + 1} />
                <div className="flex items-center text-xs md:text-sm text-text-muted">
                  <Clock className="h-4 w-4 mr-1 flex-shrink-0" aria-hidden="true" />
                  {step.duration}
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-text-heading mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm text-text-body mb-4 leading-relaxed">
                {step.description}
              </p>
              <div className="flex items-start gap-2 text-xs md:text-sm pt-3 border-t border-border-light">
                <FileText
                  className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-text-muted">{step.deliverable}</span>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div
                className="hidden xl:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <ArrowRight className="h-5 w-5 text-border-hover" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  </Section>
  );
};
