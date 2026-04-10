/**
 * ClaimsFlowComparison — signature section for Insurance Portals page.
 *
 * Desktop: Two horizontal tracks stacked, with proportionally-sized stage bars.
 * Mobile: Tracks still stack; bars remain proportional but take full mobile width.
 *
 * Note: marked by user as the weakest of the 4 signature sections — expect
 * iteration post-pilot. Modular by design so it can be replaced without
 * touching any other page or shared component.
 */

import { Section, Container } from '@/components/shared/primitives';

interface FlowStage {
  name: string;
  detail: string;
  flex: number;
}

const LEGACY_STAGES: FlowStage[] = [
  { name: 'FNOL call', detail: '0.5 d', flex: 0.5 },
  { name: 'Document collection', detail: '2 d · manual', flex: 2 },
  { name: 'Manual triage', detail: '1 d', flex: 1 },
  { name: 'Adjuster review', detail: '3 d · queue', flex: 3 },
  { name: 'Settlement approval', detail: '2 d', flex: 2 },
  { name: 'Close & pay', detail: '1.5 d', flex: 1.5 },
];

const PORTAL_STAGES: FlowStage[] = [
  { name: 'Self-serve FNOL', detail: '5 min', flex: 1 },
  { name: 'AI OCR upload', detail: 'instant', flex: 1 },
  { name: 'Auto triage', detail: '30 sec', flex: 1 },
  { name: 'Adjuster · in-portal tools', detail: '4 hrs', flex: 4 },
  { name: 'Digital settlement', detail: 'same day', flex: 1 },
];

const FlowBar = ({
  stages,
  variant,
}: {
  stages: FlowStage[];
  variant: 'legacy' | 'portal';
}) => {
  const stageClass =
    variant === 'legacy'
      ? 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]'
      : 'bg-brand-500/15 border-brand-500/40';

  return (
    <div className="flex items-stretch gap-1 md:gap-1.5 h-14 md:h-16">
      {stages.map((stage, idx) => (
        <div
          key={idx}
          className={`border rounded-md p-2 min-w-0 overflow-hidden flex flex-col justify-between ${stageClass}`}
          style={{ flex: stage.flex }}
        >
          <div className="text-[10px] md:text-xs font-bold text-text-light truncate">
            {stage.name}
          </div>
          <div className="text-[9px] md:text-[11px] text-text-subtle truncate">
            {stage.detail}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ClaimsFlowComparison = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The same claim, two processes
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Ten days of claims work, collapsed into eight hours.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Each bar below is sized to actual duration. The same six stages, on the legacy stack
          and our portal, side by side.
        </p>
      </div>

      <div className="space-y-4 md:space-y-5">
        <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-4 md:p-6">
          <div className="flex justify-between items-baseline mb-3">
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-text-subtle">
              Legacy claim process
            </div>
            <div className="text-sm md:text-base text-text-subtle">
              <span className="text-lg md:text-xl font-bold text-text-light mr-2">
                10 days
              </span>
              avg. cycle time
            </div>
          </div>
          <FlowBar stages={LEGACY_STAGES} variant="legacy" />
        </div>

        <div className="text-center py-2 md:py-3">
          <div className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent tracking-tight">
            ▼ ~75% faster ▼
          </div>
          <div className="text-xs md:text-sm text-text-subtle mt-1 font-semibold uppercase tracking-wider">
            Same six stages · new pipeline
          </div>
        </div>

        <div className="bg-brand-500/5 border border-brand-500/30 rounded-xl p-4 md:p-6">
          <div className="flex justify-between items-baseline mb-3">
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400">
              Portal-powered process
            </div>
            <div className="text-sm md:text-base text-text-subtle">
              <span className="text-lg md:text-xl font-bold text-text-light mr-2">
                8 hours
              </span>
              avg. cycle time
            </div>
          </div>
          <FlowBar stages={PORTAL_STAGES} variant="portal" />
        </div>
      </div>
    </Container>
  </Section>
);
