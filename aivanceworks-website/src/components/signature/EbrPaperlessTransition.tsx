/**
 * EbrPaperlessTransition — signature section for the Electronic Batch Records (EBR) solution page.
 *
 * Visualization pattern: Comparison (§8.3 pattern 4) — paper batch record
 *   lifecycle vs. electronic batch record lifecycle, stage-by-stage. The
 *   comparison carries the page's emotional argument: every paper friction
 *   point is replaced by a built-as-it-runs electronic equivalent. No fabricated
 *   quantification — qualitative stage descriptors only.
 *
 * Argument: "Every step you reconstruct on paper is a step the EBR captures as
 *   the batch runs — review by exception, not by archaeology."
 *
 * Liability note: every label is engineering practice or design awareness, not
 *   a certification claim. Named regulatory frameworks are deliberately absent
 *   from this page; validation and qualification remain with the customer.
 *
 * Desktop: two columns side-by-side (paper left, EBR right), each with six
 *   stacked stage rows; a foundation strip beneath spans both.
 *
 * Mobile (< md): columns stack vertically — paper column on top, EBR column
 *   below. Foundation strip stacks last.
 */

import {
  FileText,
  AlertTriangle,
  ClipboardList,
  Search,
  PenLine,
  Archive,
  FileSignature,
  ShieldCheck,
  Activity,
  GitBranch,
  Filter,
  PackageCheck,
  Layers,
  Lock,
  Cloud,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface StageRow {
  icon: React.ElementType;
  title: string;
  detail: string;
}

const PAPER_STAGES: StageRow[] = [
  { icon: FileText, title: 'Printed master batch record', detail: 'Approved PDF → printed pack at line release. Revision drift between sites is a constant risk.' },
  { icon: PenLine, title: 'Hand-written execution', detail: 'Operators write timestamps, weights, equipment IDs, and signatures by hand on the pack as the batch runs.' },
  { icon: AlertTriangle, title: 'Errors caught late', detail: 'Missed entries, illegible writing, late corrections — surfaced hours or days after the step.' },
  { icon: ClipboardList, title: 'Post-batch reconciliation', detail: 'QA reviews every page of every batch — full-record review, not by exception.' },
  { icon: Search, title: 'Genealogy by spreadsheet', detail: 'Recall trace and deviation investigation pieced together from scanned pages and shared drives.' },
  { icon: Archive, title: 'Paper archive', detail: 'Physical storage, retrieval lag, and data-integrity exposure across the retention period.' },
];

const EBR_STAGES: StageRow[] = [
  { icon: FileSignature, title: 'Configured electronic MBR', detail: 'Master batch record, work instructions, and review gates configured to your SOPs — versioned in the system, not in a binder.' },
  { icon: Activity, title: 'Operator-guided execution', detail: 'Steps, weights, equipment, parameters, and e-signatures captured in-line on shop-floor terminals as the batch runs.' },
  { icon: ShieldCheck, title: 'In-line edit checks', detail: 'Limits, ranges, equipment status, and material checks enforced at the step — not days later in QA.' },
  { icon: Filter, title: 'Review by exception', detail: 'QA reviewers see only the deviations and exceptions queued for them — not every conforming page of every batch.' },
  { icon: GitBranch, title: 'Genealogy as a query', detail: 'Forward / backward lot and serial linkage modeled into the data layer — recall trace and deviation investigation become queries.' },
  { icon: PackageCheck, title: 'Audited electronic archive', detail: 'Records, audit trails, and signatures retained in the electronic record with role-scoped access and exportable evidence.' },
];

const FOUNDATION_PILLARS = [
  { icon: FileSignature, label: 'Electronic records and signatures engineered to be attributable, contemporaneous, original, accurate, and reviewable' },
  { icon: Lock, label: 'Microsoft Entra ID, role-scoped access, and audit-trail logging on the EBR execution layer' },
  { icon: Layers, label: 'ISA-95-aligned integration to ERP, automation, historian, LIMS, and QMS — coexists with the stack you already run' },
  { icon: Cloud, label: 'Deployed on a Microsoft Cloud landing zone your IT and security teams already operate' },
];

const StageCard = ({ stage, variant }: { stage: StageRow; variant: 'paper' | 'ebr' }) => {
  const Icon = stage.icon;
  const cardClass =
    variant === 'paper'
      ? 'border-border-subtle bg-[color:var(--glass-bg)]'
      : 'border-brand-500/40 bg-brand-500/10';
  const iconWrap =
    variant === 'paper'
      ? 'bg-white/5 border border-border-subtle text-text-subtle'
      : 'bg-brand-500/20 border border-brand-500/40 text-brand-300';
  return (
    <div className={`rounded-xl border p-4 ${cardClass}`}>
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconWrap}`}>
          <Icon className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm md:text-base font-bold text-text-light leading-tight mb-1">
            {stage.title}
          </h3>
          <p className="text-xs md:text-sm text-text-subtle leading-relaxed">
            {stage.detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export const EbrPaperlessTransition = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The same batch, two records
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Built as the batch runs, not reconstructed after.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Every paper batch-record friction point — late error capture,
          post-batch reconciliation, spreadsheet genealogy, physical archive —
          replaced by an in-line electronic equivalent. QA reviews by exception
          instead of by page.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-text-subtle">
              Paper Batch Record
            </span>
            <span className="text-[10px] md:text-xs text-text-subtle/70">— today, for many sites</span>
          </div>
          <div className="space-y-3">
            {PAPER_STAGES.map((s, i) => (
              <StageCard key={i} stage={s} variant="paper" />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-300">
              Electronic Batch Record (EBR)
            </span>
            <span className="text-[10px] md:text-xs text-brand-300/70">— configured, integrated, audit-aware</span>
          </div>
          <div className="space-y-3">
            {EBR_STAGES.map((s, i) => (
              <StageCard key={i} stage={s} variant="ebr" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/40 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-accent-300" strokeWidth={2} aria-hidden="true" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent-300">
              The engineering foundation
            </div>
            <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
              EBR delivery on a validated execution layer and a regulated-workload cloud
            </h3>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
          {FOUNDATION_PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-text-light/90">
                <Icon className="w-4 h-4 text-accent-300 mt-0.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                <span className="leading-relaxed">{p.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  </Section>
);
