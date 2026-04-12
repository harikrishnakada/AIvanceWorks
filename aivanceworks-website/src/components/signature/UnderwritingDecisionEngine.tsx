/**
 * UnderwritingDecisionEngine — signature section for Underwriting Software page.
 *
 * Hierarchical pipeline visualization showing how a bare submission gets
 * enriched, scored, and delivered to the underwriter as a complete risk profile.
 *
 * Desktop: Three-tier vertical flow with connecting lines:
 *   1. Submission intake bar (top)
 *   2. Data enrichment layer — 6 source cards in a 3×2 grid converging into a
 *      central "enriched profile" indicator
 *   3. Decision output strip — risk score, pricing, recommendation
 *
 * Mobile (<lg): Same vertical flow. Data source grid reflows from 3×2 to 2×3.
 * Connecting arrows simplified to vertical center line. Output strip stacks
 * vertically at <sm.
 */

import { Section, Container } from '@/components/shared/primitives';

interface DataSource {
  name: string;
  detail: string;
  icon: string;
}

const DATA_SOURCES: DataSource[] = [
  { name: 'Verisk / ISO', detail: 'Bureau loss data & classifications', icon: '📊' },
  { name: 'LexisNexis', detail: 'Claims history & risk attributes', icon: '🔍' },
  { name: 'Credit Bureau', detail: 'Financial stability indicators', icon: '💳' },
  { name: 'MVR / CLUE', detail: 'Motor vehicle & prior claims', icon: '🚗' },
  { name: 'Geocoding', detail: 'Location risk & catastrophe models', icon: '📍' },
  { name: 'Custom APIs', detail: 'Your proprietary data sources', icon: '🔗' },
];

interface OutputItem {
  label: string;
  detail: string;
}

const OUTPUTS: OutputItem[] = [
  { label: 'Risk Score', detail: 'Configurable, explainable' },
  { label: 'Pricing', detail: 'Rating engine integrated' },
  { label: 'Recommendation', detail: 'Accept · Refer · Decline' },
];

const PipelineConnector = () => (
  <div className="flex justify-center py-2 md:py-3">
    <div className="w-px h-6 md:h-8 bg-brand-500/40" />
  </div>
);

const DataSourceCard = ({ source }: { source: DataSource }) => (
  <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-lg p-3 md:p-4 flex flex-col gap-1 min-w-0">
    <div className="text-xs md:text-sm font-bold text-text-light truncate">
      {source.name}
    </div>
    <div className="text-[10px] md:text-xs text-text-subtle leading-snug">
      {source.detail}
    </div>
  </div>
);

export const UnderwritingDecisionEngine = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      {/* Header */}
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          From submission to decision
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Six data sources. One enriched profile. Minutes, not days.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          A submission enters the pipeline, gets automatically enriched from six
          sources simultaneously, flows through your configurable rules and
          scoring models, and arrives at the underwriter&apos;s workbench as a
          complete, scored risk profile.
        </p>
      </div>

      {/* Pipeline visualization */}
      <div className="max-w-4xl mx-auto">

        {/* Stage 1: Submission Intake */}
        <div className="bg-brand-500/10 border border-brand-500/30 rounded-xl p-4 md:p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                Stage 1
              </div>
              <div className="text-sm md:text-base font-bold text-text-light">
                Submission Intake
              </div>
              <div className="text-xs md:text-sm text-text-subtle mt-0.5">
                Application received · Documents extracted · Clearance checked
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-lg md:text-xl font-bold text-brand-300">
                Seconds
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle">
                automated triage
              </div>
            </div>
          </div>
        </div>

        <PipelineConnector />

        {/* Stage 2: Data Enrichment */}
        <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-4 md:p-6">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                Stage 2
              </div>
              <div className="text-sm md:text-base font-bold text-text-light">
                Data Enrichment — 6 Sources, Simultaneous
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-lg md:text-xl font-bold text-brand-300">
                &lt; 30s
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle">
                parallel enrichment
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {DATA_SOURCES.map((source, idx) => (
              <DataSourceCard key={idx} source={source} />
            ))}
          </div>
          {/* Convergence indicator */}
          <div className="flex justify-center mt-4 pt-3 border-t border-[color:var(--glass-border)]">
            <div className="bg-brand-500/15 border border-brand-500/40 rounded-lg px-5 py-2.5 text-center">
              <div className="text-xs md:text-sm font-bold text-brand-300">
                → Enriched Submission Profile ←
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle mt-0.5">
                All sources merged · Conflicts flagged · Ready for scoring
              </div>
            </div>
          </div>
        </div>

        <PipelineConnector />

        {/* Stage 3: Risk Scoring */}
        <div className="bg-brand-500/10 border border-brand-500/30 rounded-xl p-4 md:p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                Stage 3
              </div>
              <div className="text-sm md:text-base font-bold text-text-light">
                Risk Scoring Engine
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-lg md:text-xl font-bold text-brand-300">
                &lt; 5s
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle">
                rules + models
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Appetite rules',
              'Scoring models',
              'Pricing calculation',
              'Authority check',
              'Explainability log',
            ].map((step) => (
              <div
                key={step}
                className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-md px-3 py-1.5 text-xs md:text-sm text-text-light font-medium"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <PipelineConnector />

        {/* Stage 4: Underwriter Workbench Output */}
        <div className="bg-[color:var(--glass-bg)] border-2 border-brand-500/50 rounded-xl p-4 md:p-6">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                Output
              </div>
              <div className="text-sm md:text-base font-bold text-text-light">
                Underwriter Workbench — Complete Risk Profile
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                Minutes
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
            {OUTPUTS.map((output) => (
              <div
                key={output.label}
                className="bg-brand-500/10 border border-brand-500/30 rounded-lg p-3 text-center"
              >
                <div className="text-sm md:text-base font-bold text-text-light">
                  {output.label}
                </div>
                <div className="text-[10px] md:text-xs text-text-subtle mt-0.5">
                  {output.detail}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 pt-3 border-t border-brand-500/20">
            <div className="text-xs md:text-sm text-text-subtle">
              Every decision fully traceable · Audit-ready · No black boxes
            </div>
          </div>
        </div>

      </div>
    </Container>
  </Section>
);
