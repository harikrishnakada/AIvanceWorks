/**
 * ClinicalTrialControlPlane — signature section for Clinical Trial Management
 * Systems (CTMS) page.
 *
 * Visualization pattern: hierarchical / flow (§8.3 patterns 2 + 3) — three
 * horizontal bands stacked top-to-bottom showing how a CTMS turns scattered
 * trial work into a single control plane.
 *
 *   Band 1 — Trial setup inputs (4 tiles: protocol, sites, budgets/contracts,
 *            risk & monitoring plan)
 *   Band 2 — Operations lifecycle engine (5 stages: startup, enrollment,
 *            monitoring, issue & action mgmt, close-out)
 *   Band 3 — Evidence & integration outputs (4 tiles: audit trail, eTMF / DM
 *            handoffs, site payments, inspection-ready reporting)
 *
 * Argument the visual carries: "Every study, site, visit, and finding sits on
 * one control plane — and every action it produces leaves an audit-trail-aware
 * record your QA, monitoring, and sponsor stakeholders can read."
 *
 * Desktop: three bands rendered as horizontal grids. Lifecycle band is the
 * emphasized core. Soft connectors suggest the downward flow of setup inputs
 * and the upward / outward flow of evidence.
 *
 * Mobile (< md): bands collapse to single-column stack. Input and output
 * tiles reflow 4 → 2 → 1. Lifecycle stages reflow 5 → 2 → 1. Connectors are
 * hidden; bands remain ordered top-to-bottom.
 *
 * Content integrity: no outcome numbers, no vendor names, no fixed durations
 * inside the diagram. Every tile is a capability description. Framework names
 * appear only inside the design-awareness perimeter.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */

import {
  FileText,
  Building2,
  Wallet,
  ShieldAlert,
  Rocket,
  Users,
  ClipboardCheck,
  AlertOctagon,
  PackageCheck,
  History,
  FolderTree,
  Receipt,
  BarChart3,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Node {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const SETUP_INPUTS: ReadonlyArray<Node> = [
  {
    icon: FileText,
    title: 'Protocol & milestones',
    sub: 'Versioned schedule of events, study calendar',
  },
  {
    icon: Building2,
    title: 'Sites & investigators',
    sub: 'Country, region, activation tracking',
  },
  {
    icon: Wallet,
    title: 'Budgets & contracts',
    sub: 'Per-visit fees, holdbacks, pass-throughs',
  },
  {
    icon: ShieldAlert,
    title: 'Risk & monitoring plan',
    sub: 'Risk indicators, visit cadence, thresholds',
  },
];

const LIFECYCLE_STAGES: ReadonlyArray<Node> = [
  {
    icon: Rocket,
    title: 'Start-up',
    sub: 'Activation tasks, essential docs, country approvals',
  },
  {
    icon: Users,
    title: 'Enrollment',
    sub: 'Screen, randomize, screen-fail, withdrawal tracking',
  },
  {
    icon: ClipboardCheck,
    title: 'Monitoring',
    sub: 'Remote, on-site, and risk-based visit reports',
  },
  {
    icon: AlertOctagon,
    title: 'Issues & actions',
    sub: 'Findings, CAPAs, follow-up, escalation',
  },
  {
    icon: PackageCheck,
    title: 'Close-out',
    sub: 'Site close visits, document reconciliation, archive',
  },
];

const EVIDENCE_OUTPUTS: ReadonlyArray<Node> = [
  {
    icon: History,
    title: 'Audit trail',
    sub: 'Immutable record per action, user, timestamp',
  },
  {
    icon: FolderTree,
    title: 'eTMF & DM handoffs',
    sub: 'Essential-doc events, data-mgmt sync via APIs',
  },
  {
    icon: Receipt,
    title: 'Site payments',
    sub: 'Visit-triggered accruals, holdbacks, pass-throughs',
  },
  {
    icon: BarChart3,
    title: 'Inspection-ready reporting',
    sub: 'Portfolio, study, country, site, and risk views',
  },
];

const COMPLIANCE_LABELS = [
  '21 CFR Part 11',
  'ICH-GCP',
  'HIPAA',
  'GDPR',
  'CDISC',
  'EMA Annex 11',
];

const NodeCard = ({
  node,
  emphasis,
}: {
  node: Node;
  emphasis?: 'primary' | 'secondary';
}) => {
  const Icon = node.icon;
  const classes =
    emphasis === 'primary'
      ? 'bg-gradient-to-b from-accent-500/20 to-brand-500/15 border-accent-500/40'
      : emphasis === 'secondary'
      ? 'bg-brand-500/10 border-brand-500/30'
      : 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)]';

  return (
    <div className={`rounded-xl border p-4 md:p-5 h-full ${classes}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300 border border-brand-500/30">
          <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="text-sm md:text-base font-bold text-text-light leading-tight">
          {node.title}
        </span>
      </div>
      <p className="text-xs md:text-sm text-text-subtle leading-relaxed">
        {node.sub}
      </p>
    </div>
  );
};

const BandLabel = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => (
  <div className="mb-4 md:mb-5 text-center">
    <div className="inline-block text-[11px] md:text-xs font-semibold uppercase tracking-wider text-brand-400">
      {eyebrow}
    </div>
    <h3 className="text-lg md:text-xl font-bold text-text-light mt-1">
      {title}
    </h3>
  </div>
);

const Connector = () => (
  <div
    className="hidden md:flex justify-center my-3"
    aria-hidden="true"
  >
    <span className="text-brand-400/60 text-base">▼</span>
  </div>
);

export const ClinicalTrialControlPlane = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          How it all connects
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          One control plane for every study, site, and visit.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Setup inputs flow down through the operations lifecycle, and every
          action the lifecycle produces flows back out as audit-trail-aware
          evidence your QA, monitoring, and sponsor teams can read.
        </p>
      </div>

      <div className="relative">
        {/* Design-awareness perimeter */}
        <div className="border-2 border-dashed border-brand-400/40 rounded-2xl p-4 sm:p-6 md:p-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
              One operational record
            </span>
          </div>

          {/* Band 1 — Setup inputs */}
          <BandLabel
            eyebrow="Band 1 · Setup"
            title="What your study coordinators configure"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {SETUP_INPUTS.map((node) => (
              <NodeCard key={node.title} node={node} emphasis="secondary" />
            ))}
          </div>

          <Connector />

          {/* Band 2 — Lifecycle engine */}
          <BandLabel
            eyebrow="Band 2 · Operations lifecycle"
            title="Where the study actually runs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {LIFECYCLE_STAGES.map((node) => (
              <NodeCard key={node.title} node={node} emphasis="primary" />
            ))}
          </div>

          <Connector />

          {/* Band 3 — Evidence outputs */}
          <BandLabel
            eyebrow="Band 3 · Evidence & outputs"
            title="What your QA, sponsor, and finance teams consume"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {EVIDENCE_OUTPUTS.map((node) => (
              <NodeCard key={node.title} node={node} emphasis="secondary" />
            ))}
          </div>

          {/* Bottom design-awareness bar */}
          <div className="mt-6 pt-4 border-t border-brand-400/20 flex flex-wrap justify-center gap-2 md:gap-3">
            {COMPLIANCE_LABELS.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-400"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-[11px] md:text-xs text-text-subtle text-center mt-3 max-w-2xl mx-auto leading-relaxed">
            Designed to fit alongside the EDC, eTMF, IRT, safety, and finance
            systems your team already runs.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);
