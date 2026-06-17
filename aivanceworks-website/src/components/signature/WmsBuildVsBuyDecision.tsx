/**
 * WmsBuildVsBuyDecision — signature section for the Warehouse Management
 * Systems (WMS) solution page.
 *
 * Visualization pattern: Comparison (§8.3 pattern 4) — two paths, "Buy a SaaS
 *   WMS platform" vs. "Build a custom WMS", read against a shared decision
 *   spine of factors (fit to your flow, speed to value, 5-year cost, change
 *   velocity, integration & automation control, lock-in, compliance
 *   ownership). A neutral footer states the engagement promise: we have no
 *   platform to sell, so the recommendation is made on your operation.
 *
 * Argument: "Buy or build is the first real WMS decision — and a partner with
 *   no WMS product to sell can make it honestly, on the fit to YOUR building."
 *
 * Why a new signature (not a sibling reuse): the sibling Manufacturing &
 *   Supply Chain signatures (control tower, shop-floor control plane, MOM
 *   platform map) are hierarchical / lifecycle visualizations. The WMS page's
 *   emotional argument is a *decision between two paths* — a comparison, which
 *   those patterns cannot carry and a plain FeatureGrid cannot carry (§8.2).
 *
 * Liability note: every label is engineering / advisory framing. We do not
 *   resell any packaged WMS product; FSMA 204 filings, cGMP / GDP
 *   qualification, OSHA compliance, and any audit outcome remain the
 *   customer's responsibility, executed by the customer's Quality, Regulatory,
 *   Safety, or Security function.
 *
 * Desktop (lg+): two path columns side by side, decision-spine factor labels
 *   centered between them, neutral footer bar beneath.
 *
 * Mobile (< lg): columns stack — Buy card (with its per-factor notes inline),
 *   then Build card (with its per-factor notes inline); the centered spine
 *   labels render as the section heading of each factor pair within each card.
 *   Footer bar stacks below. Bars / proportions are not used, so nothing
 *   needs horizontal scrolling.
 */

import {
  ShoppingCart,
  Hammer,
  Compass,
  Gauge,
  DollarSign,
  RefreshCw,
  Plug,
  Lock,
  ShieldCheck,
  Scale,
} from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

interface DecisionFactor {
  id: string;
  icon: React.ElementType;
  factor: string;
  buy: string;
  build: string;
}

const FACTORS: DecisionFactor[] = [
  {
    id: 'fit',
    icon: Compass,
    factor: 'Fit to your flow',
    buy: 'You fit your processes to the platform’s model — strong when your flows are reasonably standard.',
    build: 'The system fits your zones, pick strategies, and rules exactly — strong when your operation is the advantage.',
  },
  {
    id: 'speed',
    icon: Gauge,
    factor: 'Speed to value',
    buy: 'Faster to a working baseline — configuration over construction.',
    build: 'Longer to first value, but no gap-fit compromises to live with afterward.',
  },
  {
    id: 'cost',
    icon: DollarSign,
    factor: '5-year total cost',
    buy: 'Predictable subscription, plus configuration, integration, and per-user / per-volume growth.',
    build: 'Higher up-front engineering, no per-seat licensing — the math shifts with scale and complexity.',
  },
  {
    id: 'velocity',
    icon: RefreshCw,
    factor: 'Change velocity',
    buy: 'You move at the vendor’s roadmap and release cadence.',
    build: 'You change the system when the operation changes — no waiting on a roadmap.',
  },
  {
    id: 'integration',
    icon: Plug,
    factor: 'Integration & automation control',
    buy: 'Connectors within the platform’s supported surface and partner ecosystem.',
    build: 'Full control of the ERP / OMS / TMS / carrier / automation integration surface.',
  },
  {
    id: 'lockin',
    icon: Lock,
    factor: 'Lock-in',
    buy: 'Tied to the platform’s data model, pricing, and lifecycle.',
    build: 'You own the code and the data model — and the maintenance responsibility.',
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    factor: 'Compliance ownership',
    buy: 'Platform brings controls; your Quality / Regulatory team still owns the outcome.',
    build: 'Audit trail and FSMA 204 / FEFO traceability engineered in; your team still owns the outcome.',
  },
];

const PathHeader = ({
  icon: Icon,
  label,
  sublabel,
}: {
  icon: React.ElementType;
  label: string;
  sublabel: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-brand-300" strokeWidth={2} aria-hidden="true" />
    </div>
    <div>
      <div className="text-base md:text-lg font-bold text-text-light leading-tight">
        {label}
      </div>
      <div className="text-xs text-text-subtle leading-tight">{sublabel}</div>
    </div>
  </div>
);

export const WmsBuildVsBuyDecision = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          The first WMS decision
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Buy a SaaS WMS, or build a custom one? Read it factor by factor.
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Neither path is universally right — the answer is the one that fits
          your building, your order profile, and your 5-year cost. Because we
          have no WMS product to sell, we make this call on your operation.
        </p>
      </div>

      {/* Path header row — visible on lg+; cards carry their own headers below lg */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-6 items-center mb-4">
        <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-4">
          <PathHeader icon={ShoppingCart} label="Buy a SaaS WMS platform" sublabel="Configure & extend a scalable platform you license" />
        </div>
        <div className="w-10" aria-hidden="true" />
        <div className="rounded-2xl border border-accent-500/40 bg-accent-500/10 p-4">
          <PathHeader icon={Hammer} label="Build a custom WMS" sublabel="Engineer the system around your operation" />
        </div>
      </div>

      {/* Factor rows */}
      <div className="space-y-4 lg:space-y-3">
        {FACTORS.map((f) => {
          const FactorIcon = f.icon;
          return (
            <div
              key={f.id}
              className="lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:items-stretch"
            >
              {/* Mobile factor label */}
              <div className="flex items-center gap-2.5 mb-2 lg:hidden">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border-dark flex items-center justify-center shrink-0">
                  <FactorIcon className="w-4 h-4 text-brand-300" strokeWidth={2} aria-hidden="true" />
                </div>
                <span className="text-sm font-bold text-text-light uppercase tracking-wide">
                  {f.factor}
                </span>
              </div>

              {/* Buy cell */}
              <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-4 mb-3 lg:mb-0">
                <div className="text-[10px] font-bold text-brand-400 uppercase tracking-wider mb-1.5 lg:hidden">
                  Buy a SaaS WMS
                </div>
                <p className="text-xs md:text-sm text-text-light/90 leading-relaxed">
                  {f.buy}
                </p>
              </div>

              {/* Center factor label — lg+ only */}
              <div className="hidden lg:flex flex-col items-center justify-center w-36 text-center px-1">
                <div className="w-9 h-9 rounded-xl bg-surface-elevated border border-border-dark flex items-center justify-center mb-1.5">
                  <FactorIcon className="w-4 h-4 text-text-light" strokeWidth={2} aria-hidden="true" />
                </div>
                <span className="text-[11px] font-bold text-text-light uppercase tracking-wider leading-tight">
                  {f.factor}
                </span>
              </div>

              {/* Build cell */}
              <div className="rounded-2xl border border-accent-500/40 bg-accent-500/[0.08] p-4">
                <div className="text-[10px] font-bold text-accent-300 uppercase tracking-wider mb-1.5 lg:hidden">
                  Build a custom WMS
                </div>
                <p className="text-xs md:text-sm text-text-light/90 leading-relaxed">
                  {f.build}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Neutral footer — the engagement promise */}
      <div className="mt-6 rounded-2xl border border-accent-500/40 bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 p-5 md:p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/40 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5 text-accent-300" strokeWidth={2} aria-hidden="true" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent-300 mb-1">
              However the decision lands
            </div>
            <h3 className="text-base md:text-lg font-bold text-text-light leading-snug mb-1.5">
              We have no WMS product to sell — so we engineer either path, and recommend the one that fits your building.
            </h3>
            <p className="text-xs md:text-sm text-text-light/90 leading-relaxed">
              On the buy path we select, configure, extend, and integrate the
              platform you license directly. On the build path we engineer a
              custom WMS around your operation. Either way you get the
              engineering, the integration surface, and the documentation — and
              a recommendation driven by fit, cost, and risk, not a license.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
