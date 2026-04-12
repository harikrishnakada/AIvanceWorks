/**
 * HospitalOperationsHub — signature section for Hospital Management Systems page.
 *
 * Visualization pattern: Hierarchical / architectural (§8.3 pattern 2) — a central
 * HMS Core hub with four departmental quadrants (Clinical, Financial, Administrative,
 * Support) orbiting around it, all wrapped in a compliance perimeter.
 *
 * Argument: "One HMS unifies every department's operations — no silos, no duplicate
 * data entry, one audit trail."
 *
 * Desktop (lg+): 2×2 grid of departmental quadrant cards with a central HMS Core panel.
 *   Each quadrant lists its primary modules. Connector lines between quadrants and the
 *   hub imply bi-directional data flow. Compliance perimeter wraps the entire diagram
 *   with a labelled top tab ("HIPAA · HITECH · SOC 2 · Joint Commission · CMS CoP").
 *
 * Mobile (< lg): Central HMS Core banner moves to the top. Four quadrant cards stack
 *   vertically in a single column. Connector lines are hidden. Compliance perimeter
 *   becomes a footer strip with labelled pill badges. The visual argument — "central
 *   orchestration, departmental modules" — survives the collapse because hierarchy is
 *   preserved through stacking order (core → modules).
 */

import { Section, Container } from '@/components/shared/primitives';

interface Quadrant {
  label: string;
  title: string;
  description: string;
  modules: string[];
  emphasis: 'clinical' | 'financial' | 'administrative' | 'support';
}

const QUADRANTS: Quadrant[] = [
  {
    label: '01',
    title: 'Clinical Operations',
    description: 'ADT, bed & ward, pharmacy, lab, radiology, clinical documentation',
    modules: ['Admissions & Transfer', 'Bed Management', 'Pharmacy', 'Lab & Radiology'],
    emphasis: 'clinical',
  },
  {
    label: '02',
    title: 'Financial Operations',
    description: 'Charge capture, claims, billing, denials, patient accounts',
    modules: ['Revenue Cycle', 'Claims & Clearinghouse', 'Patient Billing', 'AR & Denials'],
    emphasis: 'financial',
  },
  {
    label: '03',
    title: 'Administrative Operations',
    description: 'HR, credentialing, scheduling, payroll, compliance reporting',
    modules: ['Staff Scheduling', 'HR & Credentialing', 'Compliance Reporting', 'Analytics'],
    emphasis: 'administrative',
  },
  {
    label: '04',
    title: 'Support Services',
    description: 'Inventory, procurement, assets, housekeeping, dietary, transport',
    modules: ['Inventory & Procurement', 'Biomedical Assets', 'Housekeeping', 'Dietary'],
    emphasis: 'support',
  },
];

const QUADRANT_CLASSES: Record<Quadrant['emphasis'], string> = {
  clinical: 'border-brand-500/40 bg-gradient-to-br from-brand-500/15 to-brand-500/5',
  financial: 'border-accent-500/40 bg-gradient-to-br from-accent-500/15 to-accent-500/5',
  administrative: 'border-brand-400/40 bg-gradient-to-br from-brand-400/15 to-brand-400/5',
  support: 'border-accent-400/40 bg-gradient-to-br from-accent-400/15 to-accent-400/5',
};

const QUADRANT_LABEL_CLASSES: Record<Quadrant['emphasis'], string> = {
  clinical: 'text-brand-300',
  financial: 'text-accent-300',
  administrative: 'text-brand-400',
  support: 'text-accent-400',
};

const QuadrantCard = ({ q }: { q: Quadrant }) => (
  <div className={`rounded-xl border p-4 md:p-5 ${QUADRANT_CLASSES[q.emphasis]}`}>
    <div className="flex items-center gap-2 mb-2">
      <span
        className={`text-xs font-bold uppercase tracking-wider ${QUADRANT_LABEL_CLASSES[q.emphasis]}`}
      >
        {q.label}
      </span>
      <span className="text-sm md:text-base font-bold text-text-light">
        {q.title}
      </span>
    </div>
    <p className="text-xs md:text-sm text-text-subtle leading-relaxed mb-3">
      {q.description}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {q.modules.map((m, idx) => (
        <span
          key={idx}
          className="text-xs px-2 py-0.5 rounded-full bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] text-text-subtle"
        >
          {m}
        </span>
      ))}
    </div>
  </div>
);

const HMSCorePanel = () => (
  <div className="rounded-xl border-2 border-brand-400/60 bg-gradient-to-br from-brand-600/30 via-brand-500/20 to-accent-500/20 p-4 md:p-5 shadow-glow">
    <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-2 text-center">
      HMS Core
    </div>
    <div className="text-base md:text-lg font-bold text-text-light text-center mb-3 leading-tight">
      Unified data model & orchestration
    </div>
    <div className="flex flex-wrap justify-center gap-1.5">
      {['Master Patient Index', 'Shared Record', 'Real-Time Events', 'Single Audit Trail'].map(
        (item, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-0.5 rounded-full bg-[color:var(--glass-bg)] border border-brand-400/40 text-brand-300"
          >
            {item}
          </span>
        )
      )}
    </div>
  </div>
);

export const HospitalOperationsHub = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          How it all fits together
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          One hub. Four departments. Zero silos.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Every departmental workflow — clinical, financial, administrative, and support
          — orchestrated through a single data model with one audit trail and one
          security boundary.
        </p>
      </div>

      {/* Compliance perimeter wrap */}
      <div className="relative border-2 border-dashed border-brand-400/40 rounded-2xl p-5 sm:p-6 md:p-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-surface-dark-from">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-400 whitespace-nowrap">
            HIPAA · HITECH · SOC 2 · Joint Commission · CMS CoP
          </span>
        </div>

        {/* Mobile: HMS Core at top, quadrants stacked below */}
        <div className="lg:hidden space-y-4">
          <HMSCorePanel />
          <div className="flex justify-center py-1" aria-hidden="true">
            <span className="text-brand-400/60 text-base">▼</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QUADRANTS.map((q, idx) => (
              <QuadrantCard key={idx} q={q} />
            ))}
          </div>
        </div>

        {/* Desktop: 2×2 grid with HMS Core at center */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-6 lg:items-stretch">
          {/* Top-left: Clinical */}
          <div className="relative">
            <QuadrantCard q={QUADRANTS[0]} />
            {/* Connector to hub */}
            <div
              className="absolute top-1/2 -right-3 w-6 h-px bg-brand-400/40"
              aria-hidden="true"
            />
          </div>

          {/* Center (rows 1-2): HMS Core */}
          <div className="row-span-2 flex items-center justify-center">
            <div className="w-full">
              <HMSCorePanel />
            </div>
          </div>

          {/* Top-right: Financial */}
          <div className="relative">
            <QuadrantCard q={QUADRANTS[1]} />
            <div
              className="absolute top-1/2 -left-3 w-6 h-px bg-accent-400/40"
              aria-hidden="true"
            />
          </div>

          {/* Bottom-left: Administrative */}
          <div className="relative">
            <QuadrantCard q={QUADRANTS[2]} />
            <div
              className="absolute top-1/2 -right-3 w-6 h-px bg-brand-400/40"
              aria-hidden="true"
            />
          </div>

          {/* Bottom-right: Support */}
          <div className="relative">
            <QuadrantCard q={QUADRANTS[3]} />
            <div
              className="absolute top-1/2 -left-3 w-6 h-px bg-accent-400/40"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Bottom compliance pill bar */}
        <div className="mt-6 pt-5 border-t border-brand-400/20 flex flex-wrap justify-center gap-3">
          {['Encryption', 'RBAC + MFA', 'Audit Trail', 'Session Mgmt', 'BAA Available'].map(
            (item, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full border border-brand-400/30 text-brand-400"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </Container>
  </Section>
);
