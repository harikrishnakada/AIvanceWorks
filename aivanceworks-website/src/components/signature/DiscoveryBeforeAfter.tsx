'use client';

/**
 * DiscoveryBeforeAfter — signature section for Product Discovery page.
 *
 * Desktop: 5 artifact cards in a horizontal grid under a context headline.
 * Mobile: artifact cards collapse to 2 cols, then 1 col at smallest.
 *
 * Interactive: click any card to toggle between the preview graphic and a
 * text description of the artifact.
 */

import { useState } from 'react';
import { HelpCircle, FileText, Layers, CircleCheck, AlertTriangle } from 'lucide-react';
import { Section, Container, IconTile } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';

interface Artifact {
  icon: typeof HelpCircle;
  label: string;
  format: string;
  description: string;
  preview: React.ReactNode;
}

const ARTIFACTS: Artifact[] = [
  {
    icon: HelpCircle,
    label: 'Problem Canvas',
    format: 'PDF · validated',
    description:
      "Maps the problem space: who's affected, what they've tried, what success looks like. Validated with 5+ stakeholder interviews.",
    preview: (
      <div className="grid grid-cols-2 gap-1.5 h-full p-2">
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
        <div className="bg-brand-500/20 rounded" />
      </div>
    ),
  },
  {
    icon: Layers,
    label: 'Persona Board',
    format: 'Figma · 3 personas',
    description:
      'Data-backed personas with jobs-to-be-done, pain points, and behavioral triggers. Not demographic fiction — real user patterns.',
    preview: (
      <div className="flex flex-col gap-1.5 p-3">
        <div className="h-1.5 bg-accent-400/40 rounded w-4/5" />
        <div className="h-1.5 bg-accent-400/40 rounded w-3/5" />
        <div className="h-1.5 bg-brand-400/60 rounded w-4/5" />
      </div>
    ),
  },
  {
    icon: FileText,
    label: 'Prioritized Backlog',
    format: 'Linear · MoSCoW',
    description:
      'Every feature ranked by impact and effort using MoSCoW. Your engineering team knows exactly what to build first.',
    preview: (
      <div className="flex flex-col gap-1 p-2.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 bg-brand-400/60 rounded"
            style={{ width: `${100 - i * 12}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: CircleCheck,
    label: 'Tech Spike Matrix',
    format: 'Markdown · tested',
    description:
      'Key technical risks tested and documented. Each spike has a verdict: proven, risky, or blocked — with mitigation paths.',
    preview: (
      <div className="grid grid-cols-4 gap-1 p-2.5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-full ${
              i % 2 === 0 ? 'bg-brand-500' : 'bg-brand-500/50'
            }`}
          />
        ))}
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    label: 'Risk Register',
    format: 'Sheet · mitigated',
    description:
      'Every identified risk with likelihood, impact, and a concrete mitigation plan. No surprises in sprint 3.',
    preview: (
      <div className="flex flex-col gap-1.5 p-2.5">
        {[
          'bg-brand-600',
          'bg-brand-500',
          'bg-brand-400',
          'bg-brand-400/60',
        ].map((color, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
            <span className="h-1 flex-1 bg-[color:var(--glass-bg)] rounded" />
          </div>
        ))}
      </div>
    ),
  },
];

export interface DiscoveryBeforeAfterProps {
  headline?: string;
  subhead?: string;
}

export const DiscoveryBeforeAfter = ({
  headline = 'Day 14 — Five artifacts, ready to act on',
  subhead = 'Every discovery sprint ends with concrete deliverables your team can ship against on Monday morning.',
}: DiscoveryBeforeAfterProps) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <Section tone="dark" size="md" withGrid>
      <Container>
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            What you walk out with
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
            {headline}
          </h2>
          <p className="text-base md:text-lg text-text-subtle leading-relaxed">{subhead}</p>
        </div>

        <div className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {ARTIFACTS.map((artifact, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                aria-expanded={isExpanded}
                className={cn(
                  'bg-[color:var(--glass-bg)] border rounded-xl p-4 md:p-5 text-left transition-all duration-300',
                  isExpanded
                    ? 'border-brand-400/50 bg-brand-500/10 ring-1 ring-brand-400/20'
                    : 'border-[color:var(--glass-border)] hover:bg-[color:var(--glass-hover)] hover:border-brand-400/30'
                )}
              >
                <IconTile icon={artifact.icon} size="sm" variant="glass" className="mb-3" />

                {/* Preview graphic — hidden when expanded */}
                <div
                  className={cn(
                    'h-16 md:h-20 bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-md mb-3 overflow-hidden transition-all duration-300',
                    isExpanded ? 'max-h-0 opacity-0 mb-0 border-0' : 'max-h-20 opacity-100'
                  )}
                  aria-hidden="true"
                >
                  {artifact.preview}
                </div>

                {/* Description text — shown when expanded */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isExpanded ? 'max-h-40 opacity-100 mb-3' : 'max-h-0 opacity-0 mb-0'
                  )}
                >
                  <p className="text-xs md:text-sm text-text-subtle leading-relaxed">
                    {artifact.description}
                  </p>
                </div>

                <div className="text-sm md:text-base font-semibold text-text-light leading-tight mb-1">
                  {artifact.label}
                </div>
                <div className="text-xs text-text-subtle uppercase tracking-wide">
                  {artifact.format}
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-center text-xs text-text-subtle mt-6 opacity-60">
          Click any artifact to learn more
        </p>
      </Container>
    </Section>
  );
};
