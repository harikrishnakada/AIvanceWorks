/**
 * DiscoveryBeforeAfter — signature section for Product Discovery page.
 *
 * Desktop: 5 artifact cards in a horizontal grid under a context headline.
 * Mobile: artifact cards collapse to 2 cols, then 1 col at smallest.
 */

import { HelpCircle, FileText, Layers, CircleCheck, AlertTriangle } from 'lucide-react';
import { Section, Container, IconTile } from '@/components/shared/primitives';

interface Artifact {
  icon: typeof HelpCircle;
  label: string;
  format: string;
  preview: React.ReactNode;
}

const ARTIFACTS: Artifact[] = [
  {
    icon: HelpCircle,
    label: 'Problem Canvas',
    format: 'PDF · validated',
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
}: DiscoveryBeforeAfterProps) => (
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
        {ARTIFACTS.map((artifact, idx) => (
          <div
            key={idx}
            className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-4 md:p-5 hover:bg-[color:var(--glass-hover)] transition-colors"
          >
            <IconTile icon={artifact.icon} size="sm" variant="glass" className="mb-3" />
            <div
              className="h-16 md:h-20 bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-md mb-3 overflow-hidden"
              aria-hidden="true"
            >
              {artifact.preview}
            </div>
            <div className="text-sm md:text-base font-semibold text-text-light leading-tight mb-1">
              {artifact.label}
            </div>
            <div className="text-xs text-text-subtle uppercase tracking-wide">
              {artifact.format}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
