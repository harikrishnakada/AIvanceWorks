// src/components/services/EngagementFlowTree.tsx
'use client';

import { Handshake, ClipboardList, Code2, UsersRound, GitBranch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

/**
 * EngagementFlowTree — the "family tree" of how a client moves through our teams.
 *
 *   Sales  →  Administrative  →  fork  →  Development | Outsource
 *
 * The trunk (sales → admin → fork) is centred and width-capped so the branch
 * pair below reads as two children of one parent rather than as two more steps
 * in a list.
 *
 * Alignment note: the connector grid and the branch grid are both `grid-cols-2`
 * with NO gap — the visual gutter comes from `px-*` inside each cell. A `gap-*`
 * on either grid would shift each cell's centre inward by gap/4 and the drop
 * lines would no longer meet the cards they point at. The drop lines centre
 * with `inset-x-0 mx-auto` rather than a translate, because the reduced-motion
 * rules zero out `transform` and would otherwise shove them out of column.
 *
 * Motion: every node is fully visible at first paint. The `.flow-tree.revealed`
 * classes only *replay* the tree as an entrance, so a headless render, a
 * background tab, or a no-JS visitor still sees the whole diagram.
 */

type TrunkStep = {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const TRUNK: TrunkStep[] = [
  {
    step: 'Step 1',
    title: 'Dedicated Sales Team',
    body: 'Your first point of contact. They run the discovery call, advise on scope, and draw up the proposal, product estimate, and contract.',
    icon: Handshake,
  },
  {
    step: 'Step 2',
    title: 'Dedicated Administrator Team',
    body: 'Consulting. They coordinate with sales on your proposal and product estimate, and own the roadmap your product gets built against. Every client meets them.',
    icon: ClipboardList,
  },
];

type Branch = {
  title: string;
  fit: string;
  body: string;
  icon: LucideIcon;
  tone: 'brand' | 'accent';
};

const BRANCHES: Branch[] = [
  {
    title: 'Dedicated Development Team',
    fit: 'Mid-market → Enterprise',
    body: 'Our in-house senior engineers take the roadmap and build it end to end, embedded with your team.',
    icon: Code2,
    tone: 'brand',
  },
  {
    title: 'Dedicated Outsource Team',
    fit: 'Startup → Mid-market',
    body: 'A dedicated extended team we staff, manage, and hold to the same delivery standard — at a build cost that fits an earlier stage.',
    icon: UsersRound,
    tone: 'accent',
  },
];

const BRANCH_TONE: Record<Branch['tone'], { card: string; tile: string; badge: string }> = {
  brand: {
    card: 'border-brand-400/30 bg-brand-500/[0.10]',
    tile: 'bg-brand-500/20 text-brand-200',
    badge: 'bg-brand-500/20 text-brand-200 border-brand-400/30',
  },
  accent: {
    card: 'border-accent-400/30 bg-accent-500/[0.10]',
    tile: 'bg-accent-500/20 text-accent-200',
    badge: 'bg-accent-500/20 text-accent-200 border-accent-400/30',
  },
};

const LINE = 'bg-brand-400/35';

// The gutter between the two branch cards, expressed as cell padding rather than
// a grid `gap` — see the alignment note above. The connector grid reuses these
// exact classes so the drop lines stay centred on the cards.
const BRANCH_CELL_X = ['pr-3', 'pl-3'] as const;

function Trunk({ delay }: { delay: number }) {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <span
        className={cn('flow-line block w-px h-7 sm:h-9', LINE)}
        style={{ animationDelay: `${delay}ms` }}
      />
    </div>
  );
}

function TrunkNode({ node, delay }: { node: TrunkStep; delay: number }) {
  const Icon = node.icon;
  return (
    <div
      className="flow-node rounded-xl border border-glass-border bg-glass-bg p-4 sm:p-5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-elevated border border-glass-border text-brand-300 shrink-0">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-1">
            {/* Deliberately not a heading: the diagram restates the four cards
                above it, so promoting these would put every team into the
                document outline twice. */}
            <p className="text-sm sm:text-base font-bold text-text-light">{node.title}</p>
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-300">
              {node.step}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-text-light/75 leading-relaxed">{node.body}</p>
        </div>
      </div>
    </div>
  );
}

function BranchCard({ branch, delay }: { branch: Branch; delay: number }) {
  const Icon = branch.icon;
  const tone = BRANCH_TONE[branch.tone];
  return (
    <div
      className={cn('flow-node h-full rounded-xl border p-4 sm:p-5', tone.card)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-2.5">
        <span
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0',
            tone.tile
          )}
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
        </span>
        <span
          className={cn(
            'inline-flex items-center px-2.5 py-1 rounded-full border text-[11px] font-semibold',
            tone.badge
          )}
        >
          {branch.fit}
        </span>
      </div>
      <p className="text-sm sm:text-base font-bold text-text-light mb-1.5">{branch.title}</p>
      <p className="text-xs sm:text-sm text-text-light/75 leading-relaxed">{branch.body}</p>
    </div>
  );
}

export function EngagementFlowTree() {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} className="flow-tree">
      {/* ── Trunk: sales → administrative ── */}
      <div className="max-w-2xl mx-auto">
        <TrunkNode node={TRUNK[0]} delay={0} />
        <Trunk delay={180} />
        <TrunkNode node={TRUNK[1]} delay={280} />
        <Trunk delay={460} />

        {/* Fork decision node */}
        <div
          className="flow-node flex justify-center"
          style={{ animationDelay: '560ms' }}
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-brand-400/25 text-xs sm:text-sm font-semibold text-text-light text-center">
            <GitBranch className="w-4 h-4 text-brand-300 shrink-0" aria-hidden="true" />
            Sales and admin place you by company stage
          </p>
        </div>
      </div>

      {/* ── Fork connector (sm+ only; the stacked mobile layout uses an "or" rule) ── */}
      <div className="hidden sm:block" aria-hidden="true">
        <div className="flex justify-center">
          <span
            className={cn('flow-line block w-px h-7', LINE)}
            style={{ animationDelay: '700ms' }}
          />
        </div>
        {/* Same grid AND the same cell padding as the branch pair below, so each
            drop line lands on its card's centre rather than on the cell's. The
            crossbar then has to reach back past that padding to the trunk,
            hence the negative inset on its inner edge. */}
        <div className="grid grid-cols-2">
          <div className={BRANCH_CELL_X[0]}>
            <div className="relative h-8">
              <span
                className={cn(
                  'flow-line-h flow-line-h-l absolute top-0 left-1/2 -right-3 h-px',
                  LINE
                )}
                style={{ animationDelay: '760ms' }}
              />
              <span
                className={cn('flow-line absolute top-0 inset-x-0 mx-auto w-px h-full', LINE)}
                style={{ animationDelay: '860ms' }}
              />
            </div>
          </div>
          <div className={BRANCH_CELL_X[1]}>
            <div className="relative h-8">
              <span
                className={cn(
                  'flow-line-h flow-line-h-r absolute top-0 -left-3 right-1/2 h-px',
                  LINE
                )}
                style={{ animationDelay: '760ms' }}
              />
              <span
                className={cn('flow-line absolute top-0 inset-x-0 mx-auto w-px h-full', LINE)}
                style={{ animationDelay: '860ms' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Branches ── */}
      {/* sm+: two columns, gutter from cell padding so centres stay under the drop
          lines. Below sm: stacked, separated by an explicit "or" so the pair still
          reads as a choice rather than as two more sequential steps. */}
      <div className="hidden sm:grid grid-cols-2">
        {BRANCHES.map((branch, i) => (
          <div key={branch.title} className={BRANCH_CELL_X[i]}>
            <BranchCard branch={branch} delay={920 + i * 90} />
          </div>
        ))}
      </div>

      <div className="sm:hidden">
        <div className="flex justify-center" aria-hidden="true">
          <span
            className={cn('flow-line block w-px h-6', LINE)}
            style={{ animationDelay: '700ms' }}
          />
        </div>
        <BranchCard branch={BRANCHES[0]} delay={800} />
        <div className="flex items-center gap-3 my-3">
          <span className="h-px flex-1 bg-border-subtle" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-text-subtle">
            or
          </span>
          <span className="h-px flex-1 bg-border-subtle" />
        </div>
        <BranchCard branch={BRANCHES[1]} delay={880} />
      </div>
    </div>
  );
}
