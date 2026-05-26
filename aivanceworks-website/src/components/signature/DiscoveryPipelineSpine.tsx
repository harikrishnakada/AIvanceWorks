/**
 * DiscoveryPipelineSpine — signature section for the Drug Discovery solution
 * page.
 *
 * Visualization pattern: hierarchical / flow (§8.3 patterns 2 + 3) — three
 * horizontal bands stacked top-to-bottom that map the canonical drug-discovery
 * pipeline to the engineering layer beneath it.
 *
 *   Band 1 — Discovery stages (5 tiles flowing left → right):
 *            Target Identification → Hit Identification → Hit-to-Lead →
 *            Lead Optimization → Candidate Selection
 *   Band 2 — Software capability rail (4 capability tiles that operate
 *            across every stage): in-silico screening & libraries,
 *            ADMET & property prediction, knowledge graph over research
 *            sources, chemist-facing decision surface
 *   Band 3 — Shared IP-protected research data foundation (one wide tile +
 *            four sub-pillars): lineage, controlled chemistry vocabularies,
 *            role-scoped access, IP boundary
 *
 * Argument the visual carries: "Discovery software is only useful if it
 * carries your IP forward, your scientists forward, and your QA forward —
 * across every stage, from target to candidate."
 *
 * Liability note: every label is engineering practice or design awareness,
 * not a regulatory certification. No vendor names. No fabricated metrics.
 * Framework names appear only inside the design-awareness perimeter.
 *
 * Desktop: three bands rendered as horizontal grids inside a dashed
 * regulatory-awareness perimeter. Stages band uses a "flow" affordance via
 * subtle right-chevrons between tiles. Capability rail is the emphasized
 * core. Foundation band sits as a wide gradient bar with four sub-pillars.
 *
 * Mobile (< md): bands collapse to single-column stacks. Stage tiles reflow
 * 5 → 2 → 1; chevrons hide below lg. Capability rail reflows 4 → 2 → 1.
 * Foundation sub-pillars reflow 4 → 2 → 1.
 *
 * Theming: tone="dark", all colors token-backed via brand-*, accent-*,
 * surface-*, text-* classes. Flipping data-theme re-skins cleanly.
 */

import {
  Target,
  ScanSearch,
  FlaskConical,
  Microscope,
  Sparkles,
  Pill,
  Network,
  Layers,
  Database,
  Lock,
  GitBranch,
  FileCheck,
  ShieldCheck,
  ChevronRight,
  Activity,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Stage {
  number: string;
  title: string;
  sub: string;
  icon: LucideIcon;
}

interface Capability {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const STAGES: ReadonlyArray<Stage> = [
  {
    number: '01',
    title: 'Target Identification',
    sub: 'Search, evidence aggregation, target dossier',
    icon: Target,
  },
  {
    number: '02',
    title: 'Hit Identification',
    sub: 'Virtual screening, similarity, pharmacophore',
    icon: ScanSearch,
  },
  {
    number: '03',
    title: 'Hit-to-Lead',
    sub: 'Triage, scaffold analysis, SAR review',
    icon: FlaskConical,
  },
  {
    number: '04',
    title: 'Lead Optimization',
    sub: 'ADMET, selectivity, property prediction',
    icon: Microscope,
  },
  {
    number: '05',
    title: 'Candidate Selection',
    sub: 'Decision package, pre-clinical handoff',
    icon: Pill,
  },
];

const CAPABILITIES: ReadonlyArray<Capability> = [
  {
    icon: Sparkles,
    title: 'In-silico screening & virtual libraries',
    sub: 'Docking, similarity, and library workflows orchestrated end-to-end',
  },
  {
    icon: Activity,
    title: 'ADMET & property prediction',
    sub: 'Model registries, batch scoring, confidence reporting',
  },
  {
    icon: Network,
    title: 'Knowledge graph over research sources',
    sub: 'Targets, compounds, assays, literature, and internal experiments linked',
  },
  {
    icon: Layers,
    title: 'Chemist-facing decision surface',
    sub: 'Workspaces that surface lineage and explainability beside every score',
  },
];

const FOUNDATION_PILLARS: ReadonlyArray<Capability> = [
  {
    icon: Database,
    title: 'Schema-level lineage',
    sub: 'Controlled chemistry vocabularies; every record traceable end-to-end',
  },
  {
    icon: Lock,
    title: 'IP boundary',
    sub: 'Structures and assays stay inside a tenancy your security team configures',
  },
  {
    icon: GitBranch,
    title: 'Model lifecycle artifacts',
    sub: 'Model cards, evaluation harnesses, drift monitoring, change-control logs',
  },
  {
    icon: FileCheck,
    title: 'Audit-trail logging',
    sub: 'Actor, timestamp, resource, and outcome recorded for every action',
  },
];

const REGULATORY_FRAMEWORKS: ReadonlyArray<string> = [
  'GLP (design awareness)',
  'GxP',
  '21 CFR Part 11',
  'FDA GMLP',
  'HIPAA',
  'GDPR',
  'SOC 2 (design awareness)',
];

const StageTile = ({ stage, isLast }: { stage: Stage; isLast: boolean }) => {
  const Icon = stage.icon;
  return (
    <div className="relative">
      <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-4 md:p-5 h-full">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
            <Icon className="w-4.5 h-4.5 text-brand-300" strokeWidth={2} aria-hidden="true" />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-brand-400 uppercase tracking-wider">
            Stage {stage.number}
          </span>
        </div>
        <h3 className="text-sm md:text-base font-bold text-text-light leading-tight mb-1.5">
          {stage.title}
        </h3>
        <p className="text-[11px] md:text-xs text-text-subtle leading-relaxed">{stage.sub}</p>
      </div>
      {!isLast && (
        <div
          className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 items-center justify-center"
          aria-hidden="true"
        >
          <ChevronRight className="w-5 h-5 text-brand-400/60" strokeWidth={2.5} />
        </div>
      )}
    </div>
  );
};

const CapabilityTile = ({ cap }: { cap: Capability }) => {
  const Icon = cap.icon;
  return (
    <div className="rounded-2xl border border-accent-500/30 bg-gradient-to-b from-accent-500/15 to-brand-500/10 p-4 md:p-5 h-full">
      <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-accent-300" strokeWidth={2} aria-hidden="true" />
      </div>
      <h3 className="text-sm md:text-base font-bold text-text-light leading-tight mb-1.5">
        {cap.title}
      </h3>
      <p className="text-[11px] md:text-xs text-text-subtle leading-relaxed">{cap.sub}</p>
    </div>
  );
};

const FoundationPillar = ({ cap }: { cap: Capability }) => {
  const Icon = cap.icon;
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-accent-500/20 border border-accent-500/40 flex items-center justify-center shrink-0">
        <Icon className="w-4.5 h-4.5 text-accent-300" strokeWidth={2} aria-hidden="true" />
      </div>
      <div>
        <div className="text-xs md:text-sm font-bold text-text-light leading-tight">
          {cap.title}
        </div>
        <div className="text-[11px] md:text-xs text-text-subtle mt-1 leading-relaxed">
          {cap.sub}
        </div>
      </div>
    </div>
  );
};

export const DiscoveryPipelineSpine = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The discovery spine
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Every discovery stage, one engineering spine.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Target identification through candidate selection — each stage sits
          on the same software capability rail and shares one IP-protected
          research data foundation underneath, so your chemists, informatics
          team, and downstream QA all work from the same engineering core.
        </p>
      </div>

      <div className="border-2 border-dashed border-brand-400/40 rounded-3xl p-4 sm:p-6 md:p-8 relative">
        {/* Top regulatory label */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
          <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
            Discovery-aware engineering
          </span>
        </div>

        {/* Regulatory framework chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
          {REGULATORY_FRAMEWORKS.map((fw, idx) => (
            <span
              key={idx}
              className="text-[11px] md:text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-300 bg-brand-500/5"
            >
              {fw}
            </span>
          ))}
        </div>

        {/* Band 1 — Discovery stages */}
        <div className="mb-3">
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 text-center">
            Pipeline stages
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-5">
            {STAGES.map((stage, idx) => (
              <StageTile
                key={stage.number}
                stage={stage}
                isLast={idx === STAGES.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Vertical connector hint (desktop) */}
        <div
          className="hidden lg:flex justify-center items-center my-2"
          aria-hidden="true"
        >
          <div className="w-px h-6 bg-gradient-to-b from-brand-400/60 to-accent-400/60" />
        </div>

        {/* Band 2 — Software capability rail */}
        <div className="my-5 md:my-6">
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent-300 mb-3 text-center">
            Software capability rail
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {CAPABILITIES.map((cap, idx) => (
              <CapabilityTile key={idx} cap={cap} />
            ))}
          </div>
        </div>

        {/* Vertical connector hint (desktop) */}
        <div
          className="hidden lg:flex justify-center items-center my-2"
          aria-hidden="true"
        >
          <div className="w-px h-6 bg-gradient-to-b from-accent-400/60 to-brand-400/60" />
        </div>

        {/* Band 3 — Shared foundation */}
        <div className="mt-5 md:mt-6 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck
                className="w-5 h-5 text-accent-300"
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent-300">
                The foundation
              </div>
              <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
                One IP-protected research data foundation, shared across every stage
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {FOUNDATION_PILLARS.map((cap, idx) => (
              <FoundationPillar key={idx} cap={cap} />
            ))}
          </div>
        </div>

        {/* Bottom anchor caption */}
        <div className="mt-4 flex flex-wrap justify-center items-center gap-2 text-[10px] sm:text-xs text-brand-400">
          <FlaskConical className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
          <span className="uppercase tracking-wider font-semibold">
            Target → Hit → Lead → Optimization → Candidate → Pre-clinical
          </span>
        </div>
      </div>
    </Container>
  </Section>
);
