/**
 * PlatformEngineeringControlPlane — signature section for the Platform
 * Engineering service page.
 *
 * Visualization pattern: Hierarchical / architectural (§8.3 pattern 2) — four
 * horizontal tiers of an internal developer platform (Developer Experience →
 * Golden Paths → Self-Service Infrastructure → Cloud / Identity / Cost
 * foundation), with left/right engineering annotations and an adoption-anchor
 * caption beneath.
 *
 * Argument: "An internal developer platform is a stack of decisions —
 * developer experience, golden paths, self-service infrastructure, and a
 * foundation your SRE team owns. Each tier is engineered for adoption,
 * portability, and handoff from day one."
 *
 * Liability note: every label on this component is written as engineering
 * capability or design awareness, not as a partnership, certification, or
 * vendor endorsement. Final tool choices, cloud-provider selection, and
 * operational ownership remain with the customer.
 *
 * Desktop: stacked horizontal tiers with side annotations flanking the stack.
 * Mobile (< lg): tiers stack vertically. Side annotations move below the
 *   stack as a 2-column grid (or 1-column on very narrow screens).
 */

import {
  LayoutGrid,
  BookOpen,
  Search,
  Boxes,
  GitBranch,
  Workflow,
  Gauge,
  Terminal,
  Cloud,
  Database,
  Lock,
  TrendingDown,
  ShieldCheck,
  Compass,
  Users,
  KeyRound,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface TierItem {
  icon: React.ElementType;
  label: string;
}

interface Tier {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  emphasis: 'primary' | 'secondary';
  items: TierItem[];
}

const TIERS: Tier[] = [
  {
    number: '01',
    title: 'Developer Experience Tier',
    subtitle: 'How your engineers actually meet the platform',
    icon: LayoutGrid,
    emphasis: 'primary',
    items: [
      { icon: Search, label: 'Developer portal with service catalog and ownership' },
      { icon: BookOpen, label: 'Searchable docs, runbooks, and onboarding guides' },
      { icon: Terminal, label: 'Scaffolding templates for new services and apps' },
      { icon: Compass, label: 'Surfaced golden paths instead of tribal knowledge' },
    ],
  },
  {
    number: '02',
    title: 'Golden Paths Tier',
    subtitle: 'Opinionated defaults for the 80% case',
    icon: Workflow,
    emphasis: 'primary',
    items: [
      { icon: GitBranch, label: 'Standardized CI/CD pipeline templates' },
      { icon: Boxes, label: 'Service templates wired with logging, metrics, and traces' },
      { icon: ShieldCheck, label: 'Security scanning and policy checks built into the path' },
      { icon: Gauge, label: 'Observability defaults applied at scaffold time' },
    ],
  },
  {
    number: '03',
    title: 'Self-Service Infrastructure Tier',
    subtitle: 'Provisioning your developers can drive themselves',
    icon: Cloud,
    emphasis: 'primary',
    items: [
      { icon: Cloud, label: 'IaC modules for environments, clusters, and networking' },
      { icon: Database, label: 'On-demand databases, queues, and storage with policies' },
      { icon: KeyRound, label: 'Secrets, certificates, and config delivered by request' },
      { icon: GitBranch, label: 'GitOps-driven environment promotion and rollback' },
    ],
  },
];

const FOUNDATION_ITEMS: TierItem[] = [
  { icon: Cloud, label: 'Underlying cloud, Kubernetes, and runtime your SRE team owns' },
  { icon: Lock, label: 'Identity, RBAC, and least-privilege defaults across every path' },
  { icon: TrendingDown, label: 'Cost tagging, chargeback hooks, and budget guardrails' },
  { icon: Users, label: 'Platform team ownership model and contribution guidelines' },
];

interface Annotation {
  title: string;
  description: string;
  variant: 'brand' | 'accent' | 'success';
}

const LEFT_ANNOTATIONS: Annotation[] = [
  {
    title: 'Engineered for adoption, not mandate',
    description:
      'Every golden path is designed to be the easiest option for a developer, so adoption grows from convenience — not from policy or pressure from above.',
    variant: 'brand',
  },
  {
    title: 'Built on standards your team can extend',
    description:
      'Open tooling, infrastructure-as-code, and well-documented interfaces — so the platform is something your engineers can extend, not a black box they fear to touch.',
    variant: 'accent',
  },
];

const RIGHT_ANNOTATIONS: Annotation[] = [
  {
    title: 'Designed for handoff to your platform team',
    description:
      'Runbooks, contribution guides, and ownership boundaries are part of the deliverable — so your platform engineers operate and evolve the platform once we step out.',
    variant: 'brand',
  },
  {
    title: 'Adoption and toil — measured, not assumed',
    description:
      'Lead time, deployment frequency, scaffolded-service share, and on-call toil are surfaced as platform metrics, so investment decisions sit on data instead of anecdote.',
    variant: 'success',
  },
];

const VARIANT_BORDERS: Record<Annotation['variant'], string> = {
  brand: 'border-l-brand-500',
  accent: 'border-l-accent-500',
  success: 'border-l-brand-400',
};

const TierCard = ({ tier }: { tier: Tier }) => {
  const Icon = tier.icon;
  return (
    <div
      className={
        'rounded-2xl border p-5 md:p-6 ' +
        (tier.emphasis === 'primary'
          ? 'bg-gradient-to-b from-accent-500/15 to-brand-500/10 border-accent-500/40'
          : 'bg-brand-500/10 border-brand-500/30')
      }
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-brand-300" strokeWidth={2} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
            Tier {tier.number}
          </span>
          <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
            {tier.title}
          </h3>
          <p className="text-xs md:text-sm text-text-subtle leading-relaxed mt-1">
            {tier.subtitle}
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
        {tier.items.map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs md:text-sm text-text-light/90"
            >
              <ItemIcon
                className="w-4 h-4 text-brand-400 mt-0.5 shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="leading-relaxed">{item.label}</span>
            </li>
          );
        })}
      </ul>
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

export const PlatformEngineeringControlPlane = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The developer platform stack
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Four tiers of a developer platform on one engineering foundation.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Developer experience, golden paths, self-service infrastructure, and a
          foundation your platform team owns. Each tier is designed for adoption,
          portability, and handoff from day one — so the platform earns
          engineering trust instead of competing with the tools your teams
          already have.
        </p>
      </div>

      {/* Desktop: annotations flank the stack. Mobile: stack first, annotations below. */}
      <div className="grid gap-6 lg:grid-cols-[1fr_3fr_1fr] lg:gap-8 items-start">
        {/* Left annotations (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4">
          {LEFT_ANNOTATIONS.map((ann, idx) => (
            <AnnotationCard key={idx} ann={ann} />
          ))}
        </div>

        {/* Center: the layered stack */}
        <div className="relative">
          <div className="border-2 border-dashed border-brand-400/40 rounded-3xl p-4 sm:p-6 md:p-8 relative">
            {/* Top label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
                Engineered as one platform
              </span>
            </div>

            {/* Stacked tiers */}
            <div className="space-y-4 md:space-y-5">
              {TIERS.map((tier) => (
                <TierCard key={tier.number} tier={tier} />
              ))}
            </div>

            {/* Foundation bar */}
            <div className="mt-5 md:mt-6 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
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
                    Cloud, identity, cost & ownership — by design
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
              <Workflow className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
              <span className="uppercase tracking-wider font-semibold">
                Discover → Pilot Team → Golden Paths → Org-wide Rollout → Platform Team Ownership
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

      {/* Mobile annotations — under the stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 lg:hidden">
        {[...LEFT_ANNOTATIONS, ...RIGHT_ANNOTATIONS].map((ann, idx) => (
          <AnnotationCard key={idx} ann={ann} />
        ))}
      </div>
    </Container>
  </Section>
);
