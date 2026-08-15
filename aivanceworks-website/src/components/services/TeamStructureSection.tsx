// src/components/services/TeamStructureSection.tsx
//
// Server component — no hooks or browser APIs here, so the four cards and the
// section header never reach the client bundle. Only the flow tree below them
// is a client component (it needs an IntersectionObserver for its entrance).
import { Handshake, ClipboardList, Code2, UsersRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { EngagementFlowTree } from './EngagementFlowTree';

/**
 * TeamStructureSection — "Our Teams" on the How We Work (/services) page.
 *
 * The four teams are NOT four peers, so they aren't rendered as four identical
 * cards in a row: two of them every client passes through, and two of them are
 * mutually exclusive outcomes of that pass. The layout carries that meaning —
 * two labelled groups of two — and the tree underneath spells out the path.
 */

const TEAMS_HEADING_ID = 'our-teams-heading';

type Team = {
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
};

type TeamGroup = {
  label: string;
  note: string;
  tone: 'brand' | 'accent';
  teams: Team[];
};

const GROUPS: TeamGroup[] = [
  {
    label: 'Every client goes through both',
    note: 'Acquisition and consulting',
    tone: 'brand',
    teams: [
      {
        title: 'Dedicated Sales Team',
        description:
          'The first point of contact. They take the discovery call, get you every piece of information you need, and draw up the proposal, the product estimate, and the contract.',
        meta: 'Discovery call · Proposal · Contract',
        icon: Handshake,
      },
      {
        title: 'Dedicated Administrator Team',
        description:
          'Our consulting side. They coordinate with sales on your proposal and product estimate, and they sit on the roadmap for your product development. Everyone ends up meeting them.',
        meta: 'Consulting · Estimates · Roadmap',
        icon: ClipboardList,
      },
    ],
  },
  {
    label: 'You are placed with one of these',
    note: 'Decided by your company stage',
    tone: 'accent',
    teams: [
      {
        title: 'Dedicated Development Team',
        description:
          'Our in-house senior engineers build the roadmap end to end and embed with your existing team for the length of the engagement.',
        meta: 'Best fit: mid-market → enterprise',
        icon: Code2,
      },
      {
        title: 'Dedicated Outsource Team',
        description:
          'A dedicated extended team we staff, manage, and hold to the same delivery standard — at a build cost that fits an earlier-stage company.',
        meta: 'Best fit: startup → mid-market',
        icon: UsersRound,
      },
    ],
  },
];

// gray-500 clears 4.5:1 on white but not on the grey ground this section sits
// on, so body copy uses the -body/-heading roles rather than a lighter grey.
const GROUP_TONE: Record<TeamGroup['tone'], { tile: string; label: string }> = {
  brand: { tile: 'bg-brand-50 text-brand-600', label: 'text-brand-700' },
  accent: { tile: 'bg-accent-50 text-accent-700', label: 'text-accent-700' },
};

export function TeamStructureSection() {
  return (
    <section
      id="our-teams"
      data-section="services-our-teams"
      aria-labelledby={TEAMS_HEADING_ID}
      className="scroll-mt-32 py-10 sm:py-12 lg:py-14 bg-surface-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2
            id={TEAMS_HEADING_ID}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-heading leading-tight text-balance mb-3"
          >
            Four dedicated teams, and one path through them
          </h2>
          <p className="text-sm sm:text-base text-text-body leading-relaxed max-w-[68ch]">
            You start with sales and you always meet the administrative team. Between them they
            decide whether your build belongs with our dedicated development team or our dedicated
            outsource team — a call driven by the stage your company is at, not by what is
            convenient for us.
          </p>
        </div>

        {/* ── Four teams, in two meaningful pairs ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {GROUPS.map((group) => {
            const tone = GROUP_TONE[group.tone];
            return (
              <div key={group.label}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className={`text-xs font-bold uppercase tracking-wider ${tone.label}`}>
                    {group.label}
                  </h3>
                  <span className="h-px flex-1 bg-border-light" />
                  <span className="text-xs text-text-muted hidden sm:inline">{group.note}</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {group.teams.map((team) => {
                    const Icon = team.icon;
                    return (
                      <div
                        key={team.title}
                        className="flex flex-col bg-surface-white border border-border-light rounded-xl shadow-card-sm hover:shadow-card transition-shadow p-5 md:p-6"
                      >
                        <span
                          className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${tone.tile}`}
                        >
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </span>
                        <h4 className="text-base md:text-lg font-semibold text-text-heading mb-2 leading-snug text-balance">
                          {team.title}
                        </h4>
                        <p className="text-sm text-text-body leading-relaxed">
                          {team.description}
                        </p>
                        <p className="mt-4 pt-3 border-t border-border-light text-xs font-medium text-text-muted">
                          {team.meta}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── The flow, as a tree ── */}
        <div className="mt-10 sm:mt-12">
          <div
            className="relative overflow-hidden rounded-2xl lg:rounded-3xl
              bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to
              border border-border-subtle shadow-brand-panel"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[520px] h-52 bg-brand-500/[0.07] rounded-full blur-[100px]"
            />

            <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
              <div className="max-w-2xl mx-auto text-center mb-7 sm:mb-9">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-light text-balance">
                  How an engagement moves between them
                </h3>
                <p className="text-xs sm:text-sm text-text-light/70 leading-relaxed mt-2">
                  Two steps everyone takes, then one placement.
                </p>
              </div>

              <EngagementFlowTree />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
