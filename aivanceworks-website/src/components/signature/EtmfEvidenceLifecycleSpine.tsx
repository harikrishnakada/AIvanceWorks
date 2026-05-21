/**
 * EtmfEvidenceLifecycleSpine — signature section for the Electronic Trial
 * Master File (eTMF) solution page.
 *
 * Visualization pattern: hierarchical / flow (§8.3 patterns 2 + 3) — three
 * horizontal bands stacked top-to-bottom showing how an eTMF turns a
 * scattered document trail into one inspection-ready evidence spine.
 *
 *   Band 1 — Capture sources (4 tiles: sponsor / CRO docs, site essential
 *            docs, vendor / lab docs, system-generated artifacts)
 *   Band 2 — Document lifecycle engine (5 stages: classify & index, QC &
 *            review, approve & e-sign, file & version, archive & lock)
 *   Band 3 — Inspection-ready outputs (4 tiles: zone / artifact completeness,
 *            audit trail, sponsor & CRO exchange, inspection workspace)
 *
 * Argument the visual carries: "Every essential document — wherever it
 * originates — lands in one zone-aware, audit-trail-aware spine your QA,
 * sponsor, and inspection reviewers can read at any moment, not just at lock."
 *
 * Desktop: three bands rendered as horizontal grids. Lifecycle band is the
 * emphasized core. Soft connectors suggest the downward flow of incoming
 * documents and the outward flow of inspection-ready evidence.
 *
 * Mobile (< md): bands collapse to single-column stack. Capture and output
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
  FileInput,
  Building2,
  FlaskConical,
  Cog,
  Tags,
  ClipboardCheck,
  PenLine,
  FolderTree,
  Archive,
  LayoutDashboard,
  History,
  Share2,
  Search,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Node {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const CAPTURE_SOURCES: ReadonlyArray<Node> = [
  {
    icon: FileInput,
    title: 'Sponsor & CRO documents',
    sub: 'Protocols, plans, agreements, oversight records',
  },
  {
    icon: Building2,
    title: 'Site essential documents',
    sub: 'Investigator file, IRB / EC approvals, training',
  },
  {
    icon: FlaskConical,
    title: 'Vendor & lab documents',
    sub: 'Central lab, imaging, IRT, safety vendor records',
  },
  {
    icon: Cog,
    title: 'System-generated artifacts',
    sub: 'CTMS, EDC, safety, and QMS export packages',
  },
];

const LIFECYCLE_STAGES: ReadonlyArray<Node> = [
  {
    icon: Tags,
    title: 'Classify & index',
    sub: 'Map to TMF Reference Model zone, section, artifact',
  },
  {
    icon: ClipboardCheck,
    title: 'QC & review',
    sub: 'Completeness, legibility, metadata, expected-doc checks',
  },
  {
    icon: PenLine,
    title: 'Approve & e-sign',
    sub: 'Role-scoped review, re-auth, signed-meaning capture',
  },
  {
    icon: FolderTree,
    title: 'File & version',
    sub: 'Zone-aware filing, superseded-version tracking',
  },
  {
    icon: Archive,
    title: 'Archive & lock',
    sub: 'Study-level lock, retention, controlled-access archive',
  },
];

const EVIDENCE_OUTPUTS: ReadonlyArray<Node> = [
  {
    icon: LayoutDashboard,
    title: 'Zone & artifact completeness',
    sub: 'Live view of expected vs. received per study and site',
  },
  {
    icon: History,
    title: 'Audit trail',
    sub: 'Immutable record per action, user, document, version',
  },
  {
    icon: Share2,
    title: 'Sponsor & CRO exchange',
    sub: 'Documented APIs and standard exchange formats',
  },
  {
    icon: Search,
    title: 'Inspection workspace',
    sub: 'Role-scoped reviewer access with traceable activity',
  },
];

const COMPLIANCE_LABELS = [
  'TMF Reference Model',
  'ICH-GCP',
  '21 CFR Part 11',
  'EU Annex 11',
  'HIPAA',
  'GDPR',
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

export const EtmfEvidenceLifecycleSpine = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          How the evidence comes together
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          One evidence spine for every essential document.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Documents flow in from sponsor, site, vendor, and system sources,
          move through a zone-aware lifecycle, and flow back out as
          inspection-ready evidence your QA, sponsor, and inspection reviewers
          can read at any moment — not just at study lock.
        </p>
      </div>

      <div className="relative">
        {/* Design-awareness perimeter */}
        <div className="border-2 border-dashed border-brand-400/40 rounded-2xl p-4 sm:p-6 md:p-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
              One inspection-ready record
            </span>
          </div>

          {/* Band 1 — Capture sources */}
          <BandLabel
            eyebrow="Band 1 · Capture"
            title="Where essential documents come from"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {CAPTURE_SOURCES.map((node) => (
              <NodeCard key={node.title} node={node} emphasis="secondary" />
            ))}
          </div>

          <Connector />

          {/* Band 2 — Lifecycle engine */}
          <BandLabel
            eyebrow="Band 2 · Document lifecycle"
            title="Where the eTMF actually runs"
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
            title="What your QA, sponsor, and inspection teams consume"
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
            Designed to sit alongside the CTMS, EDC, safety, QMS, and finance
            systems your team already runs.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);
