'use client';

/**
 * AiUseCasePortfolioMatrix — signature section for the C10 AI Strategy page.
 *
 * The emotional argument this signature carries:
 *   "We don't hand you a list of AI ideas. We hand you a sequenced,
 *    risk-tiered portfolio — so you fund the defensible quick wins now and
 *    gate the high-risk bets behind governance before they reach your board."
 *
 * For a governance-mature or regulated enterprise (CIO / Chief Data & AI
 * Officer / Chief Risk Officer), the failure mode of a generic AI strategy
 * engagement is a deck of shiny use cases with no prioritization discipline
 * and no risk lens — so the program either stalls in "pilot purgatory" or
 * surfaces a bias / privacy / model-risk problem that the risk committee
 * should have caught first. This signature shows, in one picture, that every
 * candidate use case is positioned on Business Value × Readiness AND carries
 * an explicit AI-risk tier (mapped to the EU AI Act risk tiers and the NIST
 * AI RMF) before it earns a place — and a sequence — on the roadmap.
 *
 * Visual pattern: data-viz quadrant matrix (§8.3 #1) with a risk-tier overlay
 * — distinct from the IT Consulting page's sequential decision gauntlet
 * (process/flow) and from the AI-pillar AiStrategyFrameworkBlueprint
 * (input → engine → output flow). The relationship shown here is *position in
 * 2D space + risk class*, which a FeatureGrid structurally cannot express.
 *
 * Interactive: click any plotted use case to focus it; a detail panel reveals
 * its value/readiness read, its risk tier with the framework it maps to, and
 * the recommended disposition. 'use client' + useState.
 *
 * Desktop (lg+): square plot on the left, detail panel on the right.
 * Tablet (md): plot full width, detail panel below it.
 * Mobile (<md): plot stays a scaling square (dots positioned by %), dot labels
 *   collapse to numbers, and the detail panel + legend stack underneath. The
 *   square never overflows the viewport because it sizes to container width.
 *
 * Token compliance: every color resolves through brand / accent / surface /
 * text tokens. Risk tiers are distinguished by icon + brand-vs-accent hue +
 * fill weight — never by raw semantic red/green (token discipline §3.3).
 */

import { useState } from 'react';
import { Section, Container } from '@/components/shared/primitives';
import { ShieldCheck, Shield, ShieldAlert, Sparkles, Rocket, FileSearch, TrendingUp, Scale, UserCheck, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type RiskTier = 'minimal' | 'limited' | 'high';

interface RiskMeta {
  label: string;
  icon: LucideIcon;
  framework: string;
  // hue resolves through tokens only
  dotClass: string;
  ringClass: string;
  textClass: string;
  chipClass: string;
}

const RISK: Record<RiskTier, RiskMeta> = {
  minimal: {
    label: 'Minimal risk',
    icon: ShieldCheck,
    framework: 'NIST AI RMF — low impact; standard monitoring',
    dotClass: 'bg-brand-500/25 border-brand-400',
    ringClass: 'ring-brand-400/40',
    textClass: 'text-brand-300',
    chipClass: 'bg-brand-500/15 border-brand-500/30 text-brand-300',
  },
  limited: {
    label: 'Limited risk',
    icon: Shield,
    framework: 'EU AI Act — transparency obligations; human oversight',
    dotClass: 'bg-brand-500/55 border-brand-300',
    ringClass: 'ring-brand-300/50',
    textClass: 'text-brand-200',
    chipClass: 'bg-brand-500/25 border-brand-400/40 text-brand-200',
  },
  high: {
    label: 'High-risk',
    icon: ShieldAlert,
    framework: 'EU AI Act Annex III — conformity assessment; governance gate',
    dotClass: 'bg-accent-500/55 border-accent-300',
    ringClass: 'ring-accent-300/50',
    textClass: 'text-accent-200',
    chipClass: 'bg-accent-500/20 border-accent-400/40 text-accent-200',
  },
};

interface UseCase {
  id: string;
  name: string;
  icon: LucideIcon;
  value: number;       // 0–100, business value / impact (Y)
  readiness: number;   // 0–100, data & implementation readiness (X)
  risk: RiskTier;
  disposition: string;
  rationale: string;
}

// Illustrative portfolio — a representative cross-industry candidate set, not a
// client deliverable. Positions express the prioritization logic, not measured
// outcomes. See _unverified note in the data file.
const USE_CASES: UseCase[] = [
  {
    id: 'support-copilot',
    name: 'Customer Support Copilot',
    icon: Sparkles,
    value: 78,
    readiness: 82,
    risk: 'limited',
    disposition: 'Quick Win — fund first',
    rationale:
      'High value, data already exists in your ticketing and knowledge systems. Limited-risk under the EU AI Act because users must be told they are interacting with AI and an agent stays in the loop — a transparency control, not a conformity assessment.',
  },
  {
    id: 'doc-intake',
    name: 'Document Intake & Extraction',
    icon: FileSearch,
    value: 70,
    readiness: 74,
    risk: 'limited',
    disposition: 'Quick Win — fund first',
    rationale:
      'Strong ROI on a well-bounded problem with abundant labeled examples. Human-in-the-loop review on low-confidence extractions keeps it defensible and gives your audit team a clear control to point to.',
  },
  {
    id: 'forecasting',
    name: 'Demand & Cash Forecasting',
    icon: TrendingUp,
    value: 83,
    readiness: 52,
    risk: 'minimal',
    disposition: 'Strategic Bet — invest to enable',
    rationale:
      'High value, but readiness depends on data engineering you do not have yet. Minimal AI-risk class, so the gate here is data foundations and model validation — not regulatory conformity. Sequenced after the quick wins fund the data work.',
  },
  {
    id: 'eligibility',
    name: 'Credit / Eligibility Decisioning',
    icon: Scale,
    value: 86,
    readiness: 38,
    risk: 'high',
    disposition: 'Governance-gated — do not start unguarded',
    rationale:
      'High business value and high regulatory exposure. Decisions affecting access to credit or essential services fall under EU AI Act Annex III and model-risk regimes (e.g. SR 11-7). This is the use case a vendor deck would put first and a risk committee would stop — it belongs behind a documented governance gate with bias testing, explainability, and validation built in.',
  },
  {
    id: 'knowledge-search',
    name: 'Knowledge & Policy Search',
    icon: Search,
    value: 48,
    readiness: 80,
    risk: 'minimal',
    disposition: 'Low-effort option — selective',
    rationale:
      'Easy to stand up and genuinely useful, but the value ceiling is modest. Worth doing opportunistically — often as a by-product of the support copilot — rather than as a headline program initiative.',
  },
  {
    id: 'hiring-screen',
    name: 'Automated Resume Screening',
    icon: UserCheck,
    value: 36,
    readiness: 34,
    risk: 'high',
    disposition: 'Park / revisit — value does not justify the risk',
    rationale:
      'Hiring and employment screening is a high-risk class under the EU AI Act and a magnet for bias and state-law exposure, while the measured value is low for most organizations. The honest recommendation is to park it — a result a vendor selling AI seats will rarely give you.',
  },
];

const QUADRANTS = [
  { key: 'tl', title: 'Strategic Bets', note: 'Invest to enable', pos: 'top-3 left-3 text-left items-start' },
  { key: 'tr', title: 'Quick Wins', note: 'Fund first', pos: 'top-3 right-3 text-right items-end' },
  { key: 'bl', title: 'Park / Revisit', note: 'Low value, low readiness', pos: 'bottom-3 left-3 text-left items-start' },
  { key: 'br', title: 'Low-Effort Options', note: 'Selective', pos: 'bottom-3 right-3 text-right items-end' },
];

export const AiUseCasePortfolioMatrix = () => {
  const [selectedId, setSelectedId] = useState<string>('support-copilot');
  const selected = USE_CASES.find((u) => u.id === selectedId) ?? USE_CASES[0];

  return (
    <Section tone="dark" size="md" withGrid>
      <Container>
        <div className="mx-auto mb-10 md:mb-12 max-w-3xl text-center">
          <div className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand-400 md:text-sm">
            The prioritization matrix
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-light md:text-4xl lg:text-5xl">
            Not the ordinary list of ideas — we generate a portfolio.
          </h2>
          <p className="text-base leading-relaxed text-text-subtle md:text-lg">
            Every candidate use case is plotted on the value it creates against how ready you are to
            build it — and tagged with its AI-risk tier mapped to the EU AI Act and the NIST AI RMF.
            The output is a sequence: fund the defensible quick wins now, invest to enable the
            strategic bets, and gate the high-risk decisions behind governance before they ever reach
            your board.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-8 lg:items-stretch">
          {/* ── Matrix plot ─────────────────────────────── */}
          <div className="flex flex-col">
            <div className="flex items-stretch gap-2 md:gap-3">
              {/* Y axis label */}
              <div className="flex items-center justify-center">
                <span className="rotate-180 text-[10px] font-semibold uppercase tracking-widest text-text-subtle [writing-mode:vertical-rl] md:text-xs">
                  Business value →
                </span>
              </div>

              {/* Plot area */}
              <div className="relative aspect-square flex-1 rounded-2xl border border-glass-border bg-glass-bg p-2 shadow-brand-panel">
                {/* Quadrant divider lines */}
                <div className="pointer-events-none absolute inset-2 rounded-xl" aria-hidden="true">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border-dark/60" />
                  <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-border-dark/60" />
                </div>

                {/* Quadrant labels */}
                {QUADRANTS.map((q) => (
                  <div
                    key={q.key}
                    className={`pointer-events-none absolute flex flex-col ${q.pos}`}
                    aria-hidden="true"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-light/55 md:text-xs">
                      {q.title}
                    </span>
                    <span className="text-[9px] uppercase tracking-wide text-text-subtle/70 md:text-[10px]">
                      {q.note}
                    </span>
                  </div>
                ))}

                {/* Use-case dots */}
                {USE_CASES.map((u, idx) => {
                  const meta = RISK[u.risk];
                  const isActive = u.id === selectedId;
                  return (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setSelectedId(u.id)}
                      style={{ left: `${u.readiness}%`, bottom: `${u.value}%` }}
                      className={`absolute z-10 flex h-7 w-7 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 md:h-9 md:w-9 ${meta.dotClass} ${
                        isActive ? `scale-110 ring-2 ${meta.ringClass}` : 'hover:scale-110'
                      }`}
                      aria-label={`${u.name} — ${meta.label}. ${u.disposition}.`}
                      aria-pressed={isActive}
                    >
                      <span className={`text-[11px] font-bold md:text-xs ${meta.textClass}`}>{idx + 1}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* X axis label */}
            <div className="mt-2 pl-7 text-center md:pl-9">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle md:text-xs">
                Data &amp; implementation readiness →
              </span>
            </div>

            {/* Risk legend */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {(Object.keys(RISK) as RiskTier[]).map((tier) => {
                const meta = RISK[tier];
                const Icon = meta.icon;
                return (
                  <span
                    key={tier}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold md:text-xs ${meta.chipClass}`}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                    {meta.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* ── Detail panel ────────────────────────────── */}
          <div className="flex flex-col rounded-2xl border border-glass-border bg-glass-bg p-5 shadow-brand-panel md:p-6">
            <div className="mb-4 flex items-start gap-3">
              <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border ${RISK[selected.risk].chipClass}`}>
                <selected.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
                  Selected use case
                </div>
                <h3 className="text-lg font-bold leading-tight text-text-light md:text-xl">
                  {selected.name}
                </h3>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-glass-border bg-surface-dark/40 p-3">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
                  Business value
                </div>
                <div className="mt-1 text-sm font-bold text-text-light">
                  {selected.value >= 65 ? 'High' : selected.value >= 45 ? 'Moderate' : 'Low'}
                </div>
              </div>
              <div className="rounded-xl border border-glass-border bg-surface-dark/40 p-3">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
                  Readiness
                </div>
                <div className="mt-1 text-sm font-bold text-text-light">
                  {selected.readiness >= 65 ? 'High' : selected.readiness >= 45 ? 'Building' : 'Low'}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-subtle">
                AI-risk tier
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${RISK[selected.risk].chipClass}`}
              >
                {(() => {
                  const Icon = RISK[selected.risk].icon;
                  return <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />;
                })()}
                {RISK[selected.risk].label}
              </span>
              <p className="mt-2 text-xs leading-relaxed text-text-light/60">
                {RISK[selected.risk].framework}
              </p>
            </div>

            <div className="mb-4 rounded-xl border border-brand-500/25 bg-brand-500/10 p-3">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-300">
                Recommended disposition
              </div>
              <div className="mt-1 text-sm font-bold text-text-light">{selected.disposition}</div>
            </div>

            <p className="text-sm leading-relaxed text-text-light/70">{selected.rationale}</p>

            <div className="mt-auto pt-4">
              <div className="flex items-center gap-2 text-[11px] text-text-subtle">
                <Rocket className="h-3.5 w-3.5 text-brand-400" strokeWidth={2} aria-hidden="true" />
                <span>Tap any point on the matrix to see how it scores and where it sequences.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
