/**
 * WorkforceLifecycleSpine — signature section for the Human Capital
 * Management solution page.
 *
 * Visualization pattern: Process / flow (§8.3 pattern 3) — five lifecycle
 * phases (Attract → Hire & Onboard → Develop & Engage → Perform & Reward →
 * Transition) rendered as a continuous horizontal spine, with module cards
 * anchored to each phase and a "people data fabric" foundation underneath.
 *
 * Argument: "HCM is not a stack of point tools — it is one spine that
 * carries every employee from offer letter to off-boarding, on one source
 * of truth."
 *
 * Liability note: every label on this component is written as engineering
 * capability or design awareness, not as legal compliance, certification,
 * partnership, or vendor endorsement. Final policy interpretation,
 * payroll funding, benefits fiduciary roles, and regulatory submissions
 * remain with the customer's HR, payroll, benefits-broker, tax, and legal
 * teams.
 *
 * Desktop: horizontal phase ribbon with module chips beneath each phase,
 *   foundation bar below, side annotations flanking the spine.
 * Mobile (< lg): phases stack vertically. Each phase shows its module
 *   chips beneath its node. Side annotations move below the spine as a
 *   2-column grid (or 1-column on very narrow screens).
 */

import {
  Users,
  ClipboardCheck,
  Building2,
  Clock,
  HeartHandshake,
  DollarSign,
  TrendingUp,
  GraduationCap,
  LogOut,
  Layers,
  History,
  MapPin,
  Lock,
  Workflow,
  UserCheck,
  Search,
  Award,
  Smartphone,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface ModuleItem {
  icon: React.ElementType;
  label: string;
}

interface Phase {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  modules: ModuleItem[];
}

const PHASES: Phase[] = [
  {
    number: '01',
    title: 'Attract',
    subtitle: 'Reach and source the right candidates',
    icon: Search,
    modules: [
      { icon: Users, label: 'Recruiting & ATS' },
      { icon: UserCheck, label: 'Structured interview scorecards' },
    ],
  },
  {
    number: '02',
    title: 'Hire & Onboard',
    subtitle: 'Offer to Day 1, the same way every time',
    icon: ClipboardCheck,
    modules: [
      { icon: ClipboardCheck, label: 'I-9, W-4 & policy intake' },
      { icon: Building2, label: 'Core HR record creation' },
    ],
  },
  {
    number: '03',
    title: 'Develop & Engage',
    subtitle: 'Self-service, learning and life events',
    icon: GraduationCap,
    modules: [
      { icon: GraduationCap, label: 'Learning & compliance training' },
      { icon: HeartHandshake, label: 'Benefits & open enrollment' },
    ],
  },
  {
    number: '04',
    title: 'Perform & Reward',
    subtitle: 'Pay, performance and recognition on one record',
    icon: Award,
    modules: [
      { icon: TrendingUp, label: 'Performance & goals' },
      { icon: DollarSign, label: 'Compensation & payroll-ready data' },
    ],
  },
  {
    number: '05',
    title: 'Transition',
    subtitle: 'Offboard with the same rigor as onboard',
    icon: LogOut,
    modules: [
      { icon: Clock, label: 'Final-pay & PTO settlement' },
      { icon: LogOut, label: 'COBRA-aware handoff & access revoke' },
    ],
  },
];

const FOUNDATION_ITEMS: ModuleItem[] = [
  { icon: Layers, label: 'One employee record across every module' },
  { icon: History, label: 'Effective-dated, actor-stamped audit trail' },
  { icon: MapPin, label: 'Multi-state policy engine — wage, leave, eligibility' },
  { icon: Lock, label: 'Identity, SSO & least-privilege access by design' },
];

interface Annotation {
  title: string;
  description: string;
  variant: 'brand' | 'accent' | 'success';
}

const LEFT_ANNOTATIONS: Annotation[] = [
  {
    title: 'One record, not seven point tools',
    description:
      'Recruiting, onboarding, core HR, time, benefits, performance, learning, and offboarding read and write to the same employee record — so the People team owns one system of truth, not a reconciliation problem.',
    variant: 'brand',
  },
  {
    title: 'Adoption is a design outcome',
    description:
      'Manager and employee self-service is the primary surface. Mobile-friendly task lists, accessible flows, and clean approvals — so the data stays current because the workforce keeps it current.',
    variant: 'accent',
  },
];

const RIGHT_ANNOTATIONS: Annotation[] = [
  {
    title: 'US labor-law awareness, by design',
    description:
      'FLSA classification, ACA tracking, EEOC and ADA data, I-9 workflows, FMLA and state-leave variants, and state wage rules engineered as configurable policy — not hard-coded for one jurisdiction.',
    variant: 'brand',
  },
  {
    title: 'Workforce data you can defend',
    description:
      'Every change to compensation, classification, eligibility, accrual, or status carries an actor, timestamp, and reason — so HR, finance, and legal can answer "who changed this, when, and why" long after the change was made.',
    variant: 'success',
  },
];

const VARIANT_BORDERS: Record<Annotation['variant'], string> = {
  brand: 'border-l-brand-500',
  accent: 'border-l-accent-500',
  success: 'border-l-brand-400',
};

const PhaseCard = ({ phase, isLast }: { phase: Phase; isLast: boolean }) => {
  const Icon = phase.icon;
  return (
    <div className="relative flex flex-col h-full">
      {/* Phase node */}
      <div className="rounded-2xl border border-accent-500/40 bg-gradient-to-b from-accent-500/15 to-brand-500/10 p-4 md:p-5 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
            <Icon
              className="w-5 h-5 text-brand-300"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-brand-400 uppercase tracking-wider">
            Phase {phase.number}
          </span>
        </div>
        <h3 className="text-sm md:text-base font-bold text-text-light leading-tight mb-2 lg:min-h-[2.6em]">
          {phase.title}
        </h3>
        <p className="text-xs text-text-subtle leading-relaxed mb-3 lg:min-h-[3.6em]">
          {phase.subtitle}
        </p>
        <ul className="space-y-1.5 mt-auto">
          {phase.modules.map((mod, idx) => {
            const ModIcon = mod.icon;
            return (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-text-light/90"
              >
                <ModIcon
                  className="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="leading-snug">{mod.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Connector chevron — desktop only, between phases */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-brand-500/30 border border-brand-400/50 items-center justify-center"
        >
          <span className="text-brand-200 text-xs leading-none">›</span>
        </div>
      )}

      {/* Mobile connector — vertical, below each phase except the last */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="lg:hidden flex justify-center my-3"
        >
          <div className="w-px h-6 bg-brand-400/50" />
        </div>
      )}
    </div>
  );
};

const AnnotationCard = ({ ann }: { ann: Annotation }) => (
  <div
    className={
      'bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] border-l-[3px] rounded-r-xl p-4 md:p-5 ' +
      VARIANT_BORDERS[ann.variant]
    }
  >
    <div className="text-sm md:text-base font-bold text-text-light leading-tight">
      {ann.title}
    </div>
    <div className="text-xs md:text-sm text-text-subtle mt-1.5 leading-relaxed">
      {ann.description}
    </div>
  </div>
);

export const WorkforceLifecycleSpine = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The workforce lifecycle spine
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          One spine. Every employee. Offer letter to off-boarding.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Recruiting, hire and onboard, develop and engage, perform and reward,
          and transition — engineered as five phases on one workforce record,
          with a people-data fabric of audit trail, multi-state policy, and
          access control beneath them. Not seven point tools stitched together.
        </p>
      </div>

      {/* Desktop: annotations flank the spine. Mobile: spine first, annotations below. */}
      <div className="grid gap-6 lg:grid-cols-[1fr_4fr_1fr] lg:gap-8 items-start">
        {/* Left annotations (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4">
          {LEFT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>

        {/* Center: the lifecycle spine */}
        <div className="relative">
          <div className="border-2 border-dashed border-brand-400/40 rounded-3xl p-4 sm:p-6 md:p-8 relative">
            {/* Top label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
                Hire to retire — on one workforce record
              </span>
            </div>

            {/* Phase ribbon — horizontal on lg+, vertical on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 relative">
              {/* Spine line — desktop only */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-brand-400/0 via-brand-400/60 to-brand-400/0 -translate-y-1/2"
              />
              {PHASES.map((phase, idx) => (
                <PhaseCard
                  key={phase.number}
                  phase={phase}
                  isLast={idx === PHASES.length - 1}
                />
              ))}
            </div>

            {/* Foundation bar — the people data fabric */}
            <div className="mt-6 md:mt-8 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/40 flex items-center justify-center shrink-0">
                  <Workflow
                    className="w-5 h-5 text-accent-300"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent-300">
                    The people data fabric
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
                    One record, one audit trail, one policy engine — beneath every phase
                  </h3>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                {FOUNDATION_ITEMS.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs md:text-sm text-text-light/90"
                    >
                      <ItemIcon
                        className="w-4 h-4 text-accent-300 mt-0.5 shrink-0"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom anchor caption */}
            <div className="mt-4 flex flex-wrap justify-center items-center gap-2 text-[10px] sm:text-xs text-brand-400">
              <Smartphone
                className="w-3.5 h-3.5"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="uppercase tracking-wider font-semibold">
                Manager & employee self-service across every phase
              </span>
            </div>
          </div>
        </div>

        {/* Right annotations (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4">
          {RIGHT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>
      </div>

      {/* Mobile annotations — under the spine */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 lg:hidden">
        {[...LEFT_ANNOTATIONS, ...RIGHT_ANNOTATIONS].map((ann, idx) => (
          <AnnotationCard key={idx} ann={ann} />
        ))}
      </div>
    </Container>
  </Section>
);
