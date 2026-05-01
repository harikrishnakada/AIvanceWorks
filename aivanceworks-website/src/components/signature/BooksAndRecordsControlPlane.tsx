/**
 * BooksAndRecordsControlPlane — signature section for Financial Document Management.
 *
 * Rewritten 2026-04-30 for the operator-and-vendor positioning (was: regulated
 * books-and-records vendor for the CCO). Component name preserved to avoid
 * registry + import-path churn; the file's argument is what changed.
 *
 * Desktop: three horizontal bands stacked top-to-bottom.
 *   Band 1 (top) — Source systems (4 input tiles: Client & account systems,
 *     Transaction & lending systems, Communications & collaboration, Existing
 *     document stores)
 *   Band 2 (middle) — Document Control Plane (centered core card with 6
 *     stages: Capture & ingest, Classify & extract, Lifecycle & retention,
 *     Search & retrieve, Hold & audit trail, APIs & embedding)
 *   Band 3 (bottom) — Where documents go to do work (4 output tiles: Advisor
 *     / banker / lender at the workstation, Operations & review teams,
 *     Compliance & audit, SaaS host product / partner systems)
 * Soft gradient connectors suggest the flow between bands — every document
 * source flows down into the control plane; documents flow out to the
 * operational consumers below.
 *
 * Mobile (< md): bands collapse to single-column stack. Source tiles reflow
 * 4 → 2 → 1. Core card stays prominent. Control stages reflow 6 → 3 → 2.
 * Output tiles reflow 4 → 2.
 *
 * Argument the visual carries: "Every document, from every source, into one
 * platform — and out wherever the work happens: at the advisor's workstation,
 * in the operations team's queue, in your customer's product."
 *
 * Content integrity: no outcome numbers, no stats chips. Every tile is a
 * capability description. Specific platform names (M365, iManage, Schwab,
 * Salesforce FSC, Azure Blob, etc.) appear in feature prose and the
 * IntegrationsPanel where the buyer needs the credibility signal.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */

import {
  UserSquare2,
  TrendingUp,
  Mail,
  FolderArchive,
  Inbox,
  Tags,
  Clock,
  Search,
  Activity,
  Code2,
  Briefcase,
  Workflow,
  ShieldCheck,
  Boxes,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Node {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const SOURCE_INPUTS: ReadonlyArray<Node> = [
  {
    icon: UserSquare2,
    title: 'Client & account systems',
    sub: 'CRM, KYC, account opening',
  },
  {
    icon: TrendingUp,
    title: 'Transaction & lending systems',
    sub: 'Custodian feeds, OMS, lending origination',
  },
  {
    icon: Mail,
    title: 'Communications & collaboration',
    sub: 'Email, M365 / Teams, eSign envelopes',
  },
  {
    icon: FolderArchive,
    title: 'Existing document stores',
    sub: 'SharePoint, iManage, NetDocuments, network shares',
  },
];

const CONTROL_STAGES: ReadonlyArray<Node> = [
  {
    icon: Inbox,
    title: 'Capture & ingest',
    sub: 'Pulls from source systems on schedule or event',
  },
  {
    icon: Tags,
    title: 'Classify & extract',
    sub: 'Document AI tags type, jurisdiction, retention category',
  },
  {
    icon: Clock,
    title: 'Lifecycle & retention',
    sub: 'Rules driven by your compliance team’s matrix',
  },
  {
    icon: Search,
    title: 'Search & retrieve',
    sub: 'The operational primitive your users live in',
  },
  {
    icon: Activity,
    title: 'Hold & audit trail',
    sub: 'Legal hold, internal review hold, immutable audit log',
  },
  {
    icon: Code2,
    title: 'APIs & embedding',
    sub: 'Surfaces for your product or downstream systems',
  },
];

const OUTPUT_CONSUMERS: ReadonlyArray<Node> = [
  {
    icon: Briefcase,
    title: 'Advisor / banker / lender',
    sub: 'At the workstation, mid-meeting, pulling a record',
  },
  {
    icon: Workflow,
    title: 'Operations & review teams',
    sub: 'Document workflows, sign-offs, approvals',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & audit',
    sub: 'Audit history, retention reports, hold management',
  },
  {
    icon: Boxes,
    title: 'SaaS host product / partner systems',
    sub: 'Embedded API consumers, customer-tenant document services',
  },
];

const SourceTile = ({ node }: { node: Node }) => {
  const Icon = node.icon;
  return (
    <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-4 md:p-5 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-3">
        <Icon className="h-5 w-5 text-brand-300" aria-hidden="true" />
      </div>
      <div className="text-sm md:text-base font-bold text-text-light leading-tight">
        {node.title}
      </div>
      <div className="text-xs md:text-sm text-text-subtle leading-snug mt-1">
        {node.sub}
      </div>
    </div>
  );
};

const OutputTile = ({ node }: { node: Node }) => {
  const Icon = node.icon;
  return (
    <div className="bg-surface-elevated border border-border-dark rounded-xl p-4 md:p-5 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-accent-500/15 border border-accent-500/30 flex items-center justify-center mb-3">
        <Icon className="h-5 w-5 text-accent-400" aria-hidden="true" />
      </div>
      <div className="text-sm md:text-base font-bold text-text-light leading-tight">
        {node.title}
      </div>
      <div className="text-xs md:text-sm text-text-subtle leading-snug mt-1">
        {node.sub}
      </div>
    </div>
  );
};

const ControlStage = ({ node }: { node: Node }) => {
  const Icon = node.icon;
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-brand-500/25 border border-brand-400/40 flex items-center justify-center flex-shrink-0">
        <Icon className="h-4 w-4 text-brand-200" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-sm md:text-base font-bold text-text-light leading-tight">
          {node.title}
        </div>
        <div className="text-xs md:text-sm text-text-subtle leading-snug mt-0.5">
          {node.sub}
        </div>
      </div>
    </div>
  );
};

const Connector = ({ label }: { label: string }) => (
  <div
    className="relative flex items-center justify-center py-4 md:py-6"
    aria-hidden="true"
  >
    <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    <div className="relative bg-surface-dark px-4 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-text-subtle">
      {label}
    </div>
  </div>
);

export const BooksAndRecordsControlPlane = () => (
  <Section tone="dark" size="lg" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The document control plane
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Every document, from every source, into one platform &mdash; and out where the work happens.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Source systems on top &mdash; every place a financial document
          originates. The control plane in the middle &mdash; capture, classify,
          lifecycle, search, hold, embed. Operational consumers on the bottom
          &mdash; the advisor opening a record mid-meeting, the operations team
          running document workflows, the compliance officer producing audit
          history, the SaaS product calling the records API.
        </p>
      </div>

      <div className="relative">
        {/* Band 1 — Source systems */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 md:mb-4">
            Source systems &mdash; every place a financial document originates
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {SOURCE_INPUTS.map((node, idx) => (
              <SourceTile key={idx} node={node} />
            ))}
          </div>
        </div>

        <Connector label="Capture · classify · route" />

        {/* Band 2 — Document control plane */}
        <div className="relative">
          <div className="bg-gradient-to-br from-brand-700/40 via-brand-600/25 to-accent-500/25 border border-brand-400/40 rounded-2xl p-6 md:p-8 shadow-brand-panel">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5 md:mb-6">
              <div>
                <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-brand-200 mb-1">
                  Document control plane
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-text-light tracking-tight">
                  Capture. Classify. Lifecycle. Search. Hold. Embed.
                </div>
              </div>
              <div className="hidden md:block text-xs text-text-subtle max-w-[20rem] text-right leading-snug">
                One platform, one audit trail, one retention engine &mdash;
                cloud-native build (Azure Blob immutable, S3 Object Lock) or
                extension of the DMS your firm runs (M365 / Purview, iManage,
                NetDocuments, M-Files, Box, Laserfiche, Hyland OnBase).
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {CONTROL_STAGES.map((node, idx) => (
                <ControlStage key={idx} node={node} />
              ))}
            </div>
          </div>
        </div>

        <Connector label="Routes · serves · embeds" />

        {/* Band 3 — Where documents go to do work */}
        <div>
          <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-accent-400 mb-3 md:mb-4">
            Where documents go to do work &mdash; by user, by system, by integration
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {OUTPUT_CONSUMERS.map((node, idx) => (
              <OutputTile key={idx} node={node} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
