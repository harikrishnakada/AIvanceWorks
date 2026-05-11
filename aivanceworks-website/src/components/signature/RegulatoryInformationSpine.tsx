/**
 * RegulatoryInformationSpine — signature section for the Regulatory
 *   Information Management (RIM) solution page.
 *
 * Visualization pattern: Hierarchical (§8.3 pattern 2) — five regulatory
 *   information domains (Products & Substances, Dossiers & Variations,
 *   Submissions, Health-Authority Correspondence, Commitments & Tracking)
 *   bound together by a central "single regulatory record" spine bar.
 *   Framed above by a market-region row (FDA, EMA, PMDA, Health Canada,
 *   MHRA, TGA, ANVISA, Swissmedic) and below by an engineering foundation
 *   bar (audit trail, controlled vocabularies, e-signature awareness,
 *   role-scoped access).
 *
 * Argument: "One regulatory record. Every product. Every market." The
 *   page's emotional spine is unification — the buyer's pain is fragmented
 *   regulatory data across spreadsheets, shared drives, and siloed tools;
 *   the visual carries the answer in one frame.
 *
 * Liability note: every label is engineering practice or design awareness,
 *   not compliance certification. Validation, submission, IQ/OQ/PQ
 *   authoring, and any health-authority interaction remain with the
 *   customer's regulatory and QA leadership.
 *
 * Desktop: market chip row → spine title bar → 5-domain horizontal grid →
 *   foundation bar beneath. No diagonal lines, no overlapping labels.
 *
 * Mobile (< md): market chips wrap, spine bar stacks above the domains,
 *   domains stack vertically, foundation bar collapses to a single column.
 */

import {
  Database,
  FolderTree,
  Globe,
  Inbox,
  ListChecks,
  Network,
  Activity,
  ShieldCheck,
  Layers,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface Domain {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const DOMAINS: Domain[] = [
  {
    number: '01',
    title: 'Products & Substances',
    subtitle: 'IDMP-aware identity across your portfolio.',
    icon: Database,
  },
  {
    number: '02',
    title: 'Dossiers & Variations',
    subtitle: 'ICH M4-aligned structure, lifecycle aware.',
    icon: FolderTree,
  },
  {
    number: '03',
    title: 'Submissions',
    subtitle: 'eCTD lifecycle planning and status tracking.',
    icon: Globe,
  },
  {
    number: '04',
    title: 'Correspondence',
    subtitle: 'Health-authority questions and responses, logged.',
    icon: Inbox,
  },
  {
    number: '05',
    title: 'Commitments',
    subtitle: 'Post-approval obligations with owners and dates.',
    icon: ListChecks,
  },
];

const HEALTH_AUTHORITIES = [
  'FDA · US',
  'EMA · EU',
  'PMDA · JP',
  'Health Canada',
  'MHRA · UK',
  'TGA · AU',
  'ANVISA · BR',
  'Swissmedic',
];

interface FoundationPillar {
  icon: React.ElementType;
  label: string;
}

const FOUNDATION_PILLARS: FoundationPillar[] = [
  {
    icon: Network,
    label:
      'Unified data model — products, dossiers, submissions, correspondence, commitments',
  },
  {
    icon: Activity,
    label:
      'Live visibility — submission state, registration risk, commitment deadlines',
  },
  {
    icon: ShieldCheck,
    label:
      'Audit-aware engineering — chain of changes, e-signature, controlled vocabularies',
  },
  {
    icon: Layers,
    label:
      'Coexistence-first — APIs your IT team controls, no rip-and-replace',
  },
];

const DomainCard = ({ domain }: { domain: Domain }) => {
  const Icon = domain.icon;
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-5 h-full">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
          <Icon
            className="w-4 h-4 text-brand-300"
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
        <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider">
          Domain {domain.number}
        </span>
      </div>
      <h3 className="text-base font-bold text-text-light leading-tight mb-1.5">
        {domain.title}
      </h3>
      <p className="text-xs md:text-sm text-text-subtle leading-relaxed">
        {domain.subtitle}
      </p>
    </div>
  );
};

export const RegulatoryInformationSpine = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The regulatory information spine
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          One regulatory record. Every product. Every market.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Products and substances, dossiers and variations, submissions,
          health-authority correspondence, and commitments — bound together by
          one connected record, on a shared engineering foundation built for
          unification, live visibility, audit-aware data, and non-disruptive
          coexistence with the systems you already run.
        </p>
      </div>

      {/* Health-authority chip row — the "every market" half of the argument */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {HEALTH_AUTHORITIES.map((authority) => (
          <span
            key={authority}
            className="text-[11px] md:text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-300 bg-brand-500/5"
          >
            {authority}
          </span>
        ))}
      </div>

      {/* Spine title bar — the unification statement, visually a horizontal rail */}
      <div className="mb-5 md:mb-6 rounded-2xl border border-brand-400/40 bg-gradient-to-r from-brand-600/20 via-brand-500/15 to-brand-600/20 px-5 py-4 md:px-6 md:py-4 text-center">
        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-300 mb-1">
          The spine
        </div>
        <div className="text-sm md:text-base font-semibold text-text-light leading-tight">
          A single regulatory record of truth — across every product, every
          dossier, every submission, every market.
        </div>
      </div>

      {/* Domain grid: 1 → 2 → 3 → 5 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {DOMAINS.map((domain) => (
          <DomainCard key={domain.number} domain={domain} />
        ))}
      </div>

      {/* Foundation bar */}
      <div className="mt-6 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
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
              Unified data, live visibility, audit-aware engineering & coexistence — by design
            </h3>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
          {FOUNDATION_PILLARS.map((cap, idx) => {
            const CapIcon = cap.icon;
            return (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs md:text-sm text-text-light/90"
              >
                <CapIcon
                  className="w-4 h-4 text-accent-300 mt-0.5 shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{cap.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  </Section>
);
