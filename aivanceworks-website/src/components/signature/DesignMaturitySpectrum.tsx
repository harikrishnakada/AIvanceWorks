'use client';

/**
 * DesignMaturitySpectrum — signature section for the UI/UX Design page.
 *
 * Visual pattern: Comparison/Process hybrid — a 3-stage horizontal maturity
 * spectrum (Ad Hoc → Structured → Systematic) showing how design practice
 * matures. Each stage shows its artifacts and business impact. The buyer
 * self-assesses where they are and sees the path forward.
 *
 * Mobile layout: stages stack vertically (3 cols → 1 col below lg).
 * Progress bar becomes a vertical connector between stacked stage cards.
 * Stage cards maintain full width with consistent internal layout.
 *
 * Interactive: click any stage card to expand its detail panel showing
 * the specific artifacts and outcomes at that maturity level.
 */

import { useState } from 'react';
import {
  Shuffle,
  Component,
  Layers,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';

interface MaturityStage {
  level: number;
  title: string;
  tagline: string;
  icon: typeof Shuffle;
  symptoms: string[];
  artifacts: string[];
  outcome: string;
  accentType: 'warning' | 'brand' | 'accent';
}

const STAGES: MaturityStage[] = [
  {
    level: 1,
    title: 'Ad Hoc',
    tagline: 'Design by instinct',
    icon: Shuffle,
    symptoms: [
      'No shared component library',
      'Inconsistent spacing and typography',
      'Design decisions driven by opinion',
      'Engineers interpret mockups differently',
    ],
    artifacts: [
      'One-off mockups per feature',
      'Unstructured Figma files',
      'No design tokens',
    ],
    outcome: 'Every feature ships looking different. Rework is constant.',
    accentType: 'warning',
  },
  {
    level: 2,
    title: 'Structured',
    tagline: 'Design backed by evidence',
    icon: Component,
    symptoms: [
      'Component library in progress',
      'User research informs key decisions',
      'Design tokens defined for colors and spacing',
      'Wireframes validated before high-fidelity',
    ],
    artifacts: [
      'UX audit report with priorities',
      'Persona profiles and journey maps',
      'Interactive prototype in Figma',
      'Design token specification',
    ],
    outcome: 'Faster iteration. Fewer design-dev miscommunications.',
    accentType: 'brand',
  },
  {
    level: 3,
    title: 'Systematic',
    tagline: 'Design as infrastructure',
    icon: Layers,
    symptoms: [
      'Full design system with documentation',
      'Continuous usability testing',
      'Design-dev handoff is automated',
      'Accessibility built into every component',
    ],
    artifacts: [
      'Versioned component library',
      'Design-to-code pipeline',
      'Accessibility compliance report',
      'Team adoption playbook',
    ],
    outcome: 'Design scales with your product team. Consistency is automatic.',
    accentType: 'accent',
  },
];

const ACCENT_STYLES = {
  warning: {
    border: 'border-accent-500/30',
    borderActive: 'border-accent-500/60',
    bg: 'bg-accent-500/10',
    iconBg: 'bg-accent-500/15',
    text: 'text-accent-400',
    dot: 'bg-accent-500',
    progressBg: 'bg-accent-500/30',
  },
  brand: {
    border: 'border-brand-400/30',
    borderActive: 'border-brand-400/60',
    bg: 'bg-brand-500/10',
    iconBg: 'bg-brand-500/15',
    text: 'text-brand-400',
    dot: 'bg-brand-500',
    progressBg: 'bg-brand-500/50',
  },
  accent: {
    border: 'border-brand-300/30',
    borderActive: 'border-brand-300/60',
    bg: 'bg-brand-400/10',
    iconBg: 'bg-brand-400/15',
    text: 'text-brand-300',
    dot: 'bg-brand-400',
    progressBg: 'bg-brand-400/60',
  },
} as const;

export interface DesignMaturitySpectrumProps {
  className?: string;
}

export const DesignMaturitySpectrum = ({
  className,
}: DesignMaturitySpectrumProps) => {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  return (
    <Section tone="dark" id="signature" className={className}>
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Where are you today?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
            The Design Maturity Spectrum
          </h2>
          <p className="text-text-light/70 max-w-2xl mx-auto text-lg">
            Most teams operate at Level 1 — making design decisions by instinct.
            We meet you where you are and move you toward systematic,
            engineer-ready design.
          </p>
        </div>

        {/* ─── Progress bar (desktop) ─── */}
        <div className="hidden lg:flex items-center justify-center mb-10 px-12">
          {STAGES.map((stage, i) => {
            const styles = ACCENT_STYLES[stage.accentType];
            return (
              <div key={stage.level} className="flex items-center flex-1">
                {/* Stage dot */}
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full ring-2 ring-offset-2 ring-offset-surface-dark',
                      styles.dot,
                      expandedStage === i ? 'ring-brand-400' : 'ring-transparent'
                    )}
                  />
                  <span className="text-xs font-semibold text-text-light/50 uppercase tracking-wider">
                    Level {stage.level}
                  </span>
                </div>
                {/* Connector line */}
                {i < STAGES.length - 1 && (
                  <div className="flex-1 mx-3">
                    <div className="h-0.5 bg-surface-elevated rounded-full overflow-hidden">
                      <div
                        className={cn('h-full rounded-full', styles.progressBg)}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── Stage cards ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5">
          {STAGES.map((stage, i) => {
            const styles = ACCENT_STYLES[stage.accentType];
            const isExpanded = expandedStage === i;
            const Icon = stage.icon;

            return (
              <button
                key={stage.level}
                type="button"
                onClick={() =>
                  setExpandedStage(isExpanded ? null : i)
                }
                className={cn(
                  'text-left rounded-xl p-6 transition-all duration-300 cursor-pointer',
                  'bg-glass-bg border backdrop-blur-sm',
                  isExpanded ? styles.borderActive : styles.border,
                  'hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none'
                )}
              >
                {/* Card header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
                      styles.iconBg
                    )}
                  >
                    <Icon className={cn('w-5 h-5', styles.text)} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-lg font-bold text-text-light">
                        {stage.title}
                      </h3>
                      <span
                        className={cn(
                          'text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded',
                          styles.bg,
                          styles.text
                        )}
                      >
                        L{stage.level}
                      </span>
                    </div>
                    <p className="text-sm text-text-light/60">{stage.tagline}</p>
                  </div>
                </div>

                {/* Symptoms list (always visible) */}
                <ul className="space-y-2 mb-4">
                  {stage.symptoms.map((symptom) => (
                    <li
                      key={symptom}
                      className="flex items-start gap-2 text-sm text-text-light/70"
                    >
                      {stage.accentType === 'warning' ? (
                        <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent-400/70" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-brand-400/70" />
                      )}
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>

                {/* Expanded detail */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="pt-4 border-t border-glass-border">
                    {/* Artifacts */}
                    <p className="text-xs font-semibold text-text-light/40 uppercase tracking-wider mb-2">
                      Typical artifacts
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {stage.artifacts.map((artifact) => (
                        <li
                          key={artifact}
                          className="flex items-center gap-2 text-sm text-text-light/80"
                        >
                          <Sparkles className="w-3 h-3 shrink-0 text-brand-300/50" />
                          <span>{artifact}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Outcome */}
                    <div className={cn('rounded-lg p-3', styles.bg)}>
                      <p className="text-sm font-medium text-text-light/90">
                        {stage.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expand hint */}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-text-light/40">
                    {isExpanded ? 'Click to collapse' : 'Click to explore'}
                  </span>
                  <ArrowRight
                    className={cn(
                      'w-4 h-4 text-text-light/30 transition-transform duration-300',
                      isExpanded && 'rotate-90'
                    )}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* ─── Mobile progress connector ─── */}
        <div className="flex lg:hidden justify-center mt-6">
          <p className="text-sm text-text-light/50 italic">
            We meet you at any level and move you forward.
          </p>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-10">
          <p className="text-text-light/60 text-base">
            Every engagement starts with an honest assessment of where you are —
            and delivers the artifacts to reach the next level.
          </p>
        </div>
      </Container>
    </Section>
  );
};
