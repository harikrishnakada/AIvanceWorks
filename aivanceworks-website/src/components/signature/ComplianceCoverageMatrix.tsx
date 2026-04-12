/**
 * ComplianceCoverageMatrix — signature section for Security & Compliance page.
 *
 * The emotional argument this signature carries: "one security program, many
 * frameworks." Most buyers imagine HIPAA, SOC 2, and PCI-DSS as separate
 * projects. The matrix shows the truth — a shared set of control domains maps
 * simultaneously into every framework, so one program, one evidence package,
 * and one audit trail satisfies multiple auditors.
 *
 * Visual pattern: data-viz / matrix. Rows are control domains (Identity &
 * Access, Data Protection, Audit & Logging, Secure SDLC, Incident Response).
 * Columns are frameworks (HIPAA, SOC 2, PCI-DSS, ISO 27001, GDPR). Cells show
 * coverage with a filled dot (full) or hollow dot (partial/framework-specific
 * nuance), not a checkbox — the goal is a grid you can read at a glance.
 *
 * Desktop (lg+): rows × columns as a true grid with sticky left labels.
 * Tablet (md): same grid, tighter cells.
 * Mobile (<md): grid scrolls horizontally inside a bordered container so the
 * matrix argument survives intact; the visual point depends on seeing the
 * whole grid at once, so reflowing to stacked cards would lose the argument.
 */

import { Section, Container } from '@/components/shared/primitives';

type Coverage = 'full' | 'partial' | 'none';

interface Framework {
  label: string;
  sublabel: string;
  tone: 'brand' | 'accent';
}

const FRAMEWORKS: Framework[] = [
  { label: 'HIPAA', sublabel: 'HITECH', tone: 'brand' },
  { label: 'SOC 2', sublabel: 'Type II', tone: 'brand' },
  { label: 'PCI-DSS', sublabel: 'v4.0', tone: 'accent' },
  { label: 'ISO 27001', sublabel: 'Annex A', tone: 'accent' },
  { label: 'GDPR', sublabel: 'Art. 32', tone: 'brand' },
];

interface ControlDomain {
  name: string;
  detail: string;
  icon: string;
  coverage: Coverage[];
}

// Each domain lists coverage in the same order as FRAMEWORKS.
// The matrix intentionally shows mostly "full" — the argument is that modern
// frameworks overlap heavily on the same technical controls. "Partial" marks
// the rare domain where the framework demands something framework-specific
// (e.g., PCI cardholder-data scope narrows IAM requirements).
const DOMAINS: ControlDomain[] = [
  {
    name: 'Identity & Access',
    detail: 'Entra ID, MFA, RBAC, least privilege',
    icon: 'ID',
    coverage: ['full', 'full', 'partial', 'full', 'full'],
  },
  {
    name: 'Data Protection',
    detail: 'Encryption at rest & in transit, Key Vault',
    icon: 'DP',
    coverage: ['full', 'full', 'full', 'full', 'full'],
  },
  {
    name: 'Audit & Logging',
    detail: 'Immutable trails, retention, SIEM export',
    icon: 'AL',
    coverage: ['full', 'full', 'full', 'full', 'partial'],
  },
  {
    name: 'Secure SDLC',
    detail: 'DevSecOps, SAST/DAST, dependency scan',
    icon: 'SD',
    coverage: ['partial', 'full', 'full', 'full', 'partial'],
  },
  {
    name: 'Incident Response',
    detail: 'Runbooks, tabletop, breach notification',
    icon: 'IR',
    coverage: ['full', 'full', 'full', 'full', 'full'],
  },
];

const FrameworkHeader = ({ framework }: { framework: Framework }) => (
  <div className="flex flex-col items-center gap-0.5 min-w-0">
    <div
      className={`text-[11px] md:text-xs font-bold ${
        framework.tone === 'brand' ? 'text-brand-300' : 'text-accent-300'
      }`}
    >
      {framework.label}
    </div>
    <div className="text-[9px] md:text-[10px] text-text-subtle uppercase tracking-wider">
      {framework.sublabel}
    </div>
  </div>
);

const CoverageCell = ({ coverage }: { coverage: Coverage }) => {
  if (coverage === 'full') {
    return (
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-brand-500/85 ring-2 ring-brand-500/25" />
      </div>
    );
  }
  if (coverage === 'partial') {
    return (
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-accent-400 bg-accent-500/20" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-border-subtle" />
    </div>
  );
};

const DomainLabel = ({ domain }: { domain: ControlDomain }) => (
  <div className="flex items-start gap-2.5 md:gap-3 min-w-0 pr-3">
    <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-500/15 border border-brand-500/30 flex items-center justify-center">
      <span className="text-[10px] md:text-xs font-bold text-brand-300 tracking-wide">
        {domain.icon}
      </span>
    </div>
    <div className="min-w-0">
      <div className="text-sm md:text-base font-bold text-text-light leading-tight">
        {domain.name}
      </div>
      <div className="text-[11px] md:text-xs text-text-subtle leading-snug mt-0.5">
        {domain.detail}
      </div>
    </div>
  </div>
);

export const ComplianceCoverageMatrix = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The control matrix
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          One program, many auditors — not five separate projects.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Modern frameworks overlap heavily. We design one control set that maps
          into every audit you face — so the same evidence package answers HIPAA,
          SOC 2, PCI-DSS, ISO 27001, and GDPR questions at once.
        </p>
      </div>

      {/* Matrix container — horizontal scroll on narrow screens to preserve the grid */}
      <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-2xl p-4 md:p-6 lg:p-8">
        <div className="overflow-x-auto -mx-2 px-2">
          <div className="min-w-[640px] md:min-w-0">
            {/* Header row */}
            <div className="grid grid-cols-[minmax(0,1.5fr)_repeat(5,minmax(0,1fr))] gap-2 md:gap-3 pb-3 md:pb-4 border-b border-[color:var(--glass-border)]">
              <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-text-subtle self-end pl-1">
                Control domain
              </div>
              {FRAMEWORKS.map((framework, idx) => (
                <FrameworkHeader key={idx} framework={framework} />
              ))}
            </div>

            {/* Body rows */}
            <div className="flex flex-col divide-y divide-[color:var(--glass-border)]">
              {DOMAINS.map((domain, rowIdx) => (
                <div
                  key={rowIdx}
                  className="grid grid-cols-[minmax(0,1.5fr)_repeat(5,minmax(0,1fr))] gap-2 md:gap-3 py-3 md:py-4 items-center"
                >
                  <DomainLabel domain={domain} />
                  {domain.coverage.map((cell, cellIdx) => (
                    <CoverageCell key={cellIdx} coverage={cell} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-5 mt-4 md:mt-5 border-t border-[color:var(--glass-border)] text-[11px] md:text-xs text-text-subtle">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-brand-500/85 ring-2 ring-brand-500/25" />
            <span>Shared control — one implementation, multi-framework evidence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-accent-400 bg-accent-500/20" />
            <span>Framework-specific nuance — tuned per regulation</span>
          </div>
        </div>
      </div>

      {/* Summary callout */}
      <div className="mt-8 md:mt-10 grid gap-4 md:gap-6 md:grid-cols-3">
        <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-l-[3px] border-l-brand-500 rounded-r-xl p-4 md:p-5">
          <div className="text-lg md:text-xl font-bold text-text-light leading-tight">
            1 control set
          </div>
          <div className="text-xs md:text-sm text-text-subtle mt-1.5 leading-relaxed">
            Shared technical controls designed to satisfy multiple frameworks simultaneously
          </div>
        </div>
        <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-l-[3px] border-l-accent-500 rounded-r-xl p-4 md:p-5">
          <div className="text-lg md:text-xl font-bold text-text-light leading-tight">
            1 evidence package
          </div>
          <div className="text-xs md:text-sm text-text-subtle mt-1.5 leading-relaxed">
            Policies, audit trails, and control documentation organized for any auditor on request
          </div>
        </div>
        <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-l-[3px] border-l-brand-400 rounded-r-xl p-4 md:p-5">
          <div className="text-lg md:text-xl font-bold text-text-light leading-tight">
            Audit-ready by design
          </div>
          <div className="text-xs md:text-sm text-text-subtle mt-1.5 leading-relaxed">
            Controls mapped to framework requirements from day one — not reconstructed after the fact
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
