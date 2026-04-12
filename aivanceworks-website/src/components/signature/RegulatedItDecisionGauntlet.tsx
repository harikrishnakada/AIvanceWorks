/**
 * RegulatedItDecisionGauntlet — signature section for the IT Consulting page.
 *
 * The emotional argument this signature carries:
 *   "No IT decision leaves our framework without passing every gate."
 *
 * For a regulated-industry CIO, the failure mode of a generic strategy
 * engagement is a recommendation that later collapses under audit review,
 * vendor risk screening, data sovereignty rules, or board defensibility.
 * The gauntlet visualizes the five gates every candidate decision is run
 * through before it reaches the roadmap — so the buyer can see, in one
 * picture, that regulatory rigor is how we scope, not a disclaimer.
 *
 * Visual pattern: process / flow. A single "Technology Candidate" enters
 * from the left and is evaluated at five sequential gates:
 *   1. Business Outcome Fit
 *   2. Regulatory & Audit Fit
 *   3. Vendor & Supply-Chain Risk
 *   4. Data Sovereignty & Residency
 *   5. Board Defensibility & TCO
 * The candidate that clears all five gates lands on the right as an
 * "Audit-Ready Recommendation."
 *
 * Desktop (lg+): five gates render as a horizontal flow with connectors.
 * Tablet (md): gates wrap to a 2-column responsive grid preserving the
 *   numbered sequence.
 * Mobile (<md): gates stack vertically with downward connectors between
 *   them; the sequence is preserved by the vertical order, not by
 *   connector arrows (which would clutter the narrow viewport).
 *
 * Token compliance: all color references resolve through theme tokens.
 * No raw Tailwind color shades, no hardcoded hex, no dark-mode forks.
 */

import { Section, Container } from '@/components/shared/primitives';
import { ShieldCheck, Target, Users, Database, LineChart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Gate {
  number: string;
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  checks: string[];
  tone: 'brand' | 'accent';
}

const GATES: Gate[] = [
  {
    number: '01',
    title: 'Business Outcome Fit',
    eyebrow: 'Does it move the metric?',
    icon: Target,
    checks: [
      'Mapped to a named business KPI',
      'Owner accountable for the outcome',
      'Sequenced against the capital plan',
    ],
    tone: 'brand',
  },
  {
    number: '02',
    title: 'Regulatory & Audit Fit',
    eyebrow: 'Will your auditor accept it?',
    icon: ShieldCheck,
    checks: [
      'Mapped to HIPAA / SOC 2 / PCI-DSS / SOX',
      'Control inheritance documented',
      'Evidence path designed in advance',
    ],
    tone: 'accent',
  },
  {
    number: '03',
    title: 'Vendor & Supply-Chain Risk',
    eyebrow: 'Is the vendor safe to depend on?',
    icon: Users,
    checks: [
      'SOC 2 scope and BAA / DPA reviewed',
      'Subprocessor chain surfaced',
      'Financial stability and lock-in assessed',
    ],
    tone: 'brand',
  },
  {
    number: '04',
    title: 'Data Sovereignty & Residency',
    eyebrow: 'Can the data legally sit there?',
    icon: Database,
    checks: [
      'Data classification and flow mapped',
      'Regional hosting and transfer reviewed',
      'Encryption and key custody confirmed',
    ],
    tone: 'accent',
  },
  {
    number: '05',
    title: 'Board Defensibility & TCO',
    eyebrow: 'Can you present it to the audit committee?',
    icon: LineChart,
    checks: [
      'Investment memo in board format',
      'Risk register paired with controls',
      'TCO across contract, run, and exit',
    ],
    tone: 'brand',
  },
];

const GateCard = ({ gate }: { gate: Gate }) => {
  const Icon = gate.icon;
  const accentText = gate.tone === 'brand' ? 'text-brand-300' : 'text-accent-300';
  const accentBorder = gate.tone === 'brand' ? 'border-brand-500/35' : 'border-accent-500/35';
  const accentTile = gate.tone === 'brand' ? 'bg-brand-500/15 border-brand-500/30' : 'bg-accent-500/15 border-accent-500/30';
  const accentIcon = gate.tone === 'brand' ? 'text-brand-300' : 'text-accent-300';

  return (
    <div
      className={`relative flex flex-col gap-3 rounded-2xl border ${accentBorder} bg-glass-bg p-4 md:p-5 h-full shadow-brand-panel`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${accentTile}`}>
          <Icon className={`h-5 w-5 ${accentIcon}`} strokeWidth={2} aria-hidden="true" />
        </div>
        <span className={`text-[11px] font-bold tracking-[0.2em] ${accentText}`}>{gate.number}</span>
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-text-subtle mb-1">
          {gate.eyebrow}
        </div>
        <h3 className="text-base md:text-lg font-bold text-text-light leading-tight">
          {gate.title}
        </h3>
      </div>
      <ul className="mt-1 space-y-1.5">
        {gate.checks.map((check) => (
          <li
            key={check}
            className="flex items-start gap-2 text-xs md:text-[13px] text-text-light/70 leading-snug"
          >
            <span
              className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                gate.tone === 'brand' ? 'bg-brand-400' : 'bg-accent-400'
              }`}
              aria-hidden="true"
            />
            <span>{check}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const RegulatedItDecisionGauntlet = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="mx-auto mb-10 md:mb-12 max-w-3xl text-center">
        <div className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand-400 md:text-sm">
          The decision gauntlet
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-light md:text-4xl lg:text-5xl">
          Five gates. Every recommendation passes all of them — or it does not ship.
        </h2>
        <p className="text-base leading-relaxed text-text-subtle md:text-lg">
          Generic IT strategy work stops at functional fit. Ours runs every candidate — vendor pick,
          cloud move, platform call, acquisition target — through the five gates your auditor, your
          board, and your CFO are going to ask about anyway. The gauntlet is how the roadmap gets
          built, not how it gets reviewed.
        </p>
      </div>

      {/* Entry → Gates → Exit — horizontal flow on xl+, wrapped on md/lg, stacked on mobile */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-5">
          {GATES.map((gate) => (
            <GateCard key={gate.number} gate={gate} />
          ))}
        </div>

        {/* Entry / exit summary strip */}
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-6">
          <div className="rounded-2xl border border-glass-border bg-glass-bg p-4 md:p-5">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-text-subtle mb-1">
              Enters the gauntlet
            </div>
            <div className="text-sm md:text-base font-bold text-text-light leading-tight">
              Technology candidate
            </div>
            <p className="mt-1.5 text-xs md:text-sm text-text-light/65 leading-relaxed">
              Vendor shortlist, build-vs-buy option, platform call, or acquisition target — framed
              as a candidate decision, not a predetermined conclusion.
            </p>
          </div>

          <div
            className="hidden md:flex items-center justify-center text-text-subtle"
            aria-hidden="true"
          >
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <line
                x1="2"
                y1="12"
                x2="34"
                y2="12"
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <polygon
                points="40,12 30,6 30,18"
                fill="currentColor"
                fillOpacity="0.55"
              />
            </svg>
          </div>

          <div className="rounded-2xl border border-accent-500/35 bg-glass-bg p-4 md:p-5">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-accent-300 mb-1">
              Leaves the gauntlet
            </div>
            <div className="text-sm md:text-base font-bold text-text-light leading-tight">
              Audit-ready recommendation
            </div>
            <p className="mt-1.5 text-xs md:text-sm text-text-light/65 leading-relaxed">
              An ADR, a scored options matrix, a vendor risk write-up, and an investment memo —
              written in the language your governance bodies already review.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
