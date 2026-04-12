/**
 * AgencyWorkflowTransformation — signature section for Agency Management Software page.
 *
 * Before/after comparison showing the typical 5-tool agency reality versus
 * a unified custom AMS platform. The visual argument: operational chaos caused
 * by disconnected systems collapses into a single connected hub.
 *
 * Visualization pattern: Comparison (before/after columns) — §8.3 pattern #4
 * Emotional argument: "Five systems or one platform. The agency running one wins."
 *
 * Desktop (≥lg): Two-column grid — Before column (left) | After column (right),
 *   separated by a central arrow/divider. Each column is independently scrollable.
 *
 * Mobile (<lg): Before column stacks above After column, connected by a vertical
 *   arrow labeled "Transform →" in between. Tool cards reflow to a 2-column
 *   grid at ≥sm, single column at <sm.
 *
 * Token compliance: all color references use token-backed Tailwind classes per §3.2.
 *   No raw color shades. No hex values. No dark: prefix.
 *   Glass surface pattern: bg-[color:var(--glass-bg)] / border-[color:var(--glass-border)]
 *
 * Self-contained: no global state, no shared refs, no DOM coupling.
 * Swappable: registered in SIGNATURE_COMPONENTS in app/solutions/[slug]/page.tsx.
 */

import { Section, Container } from '@/components/shared/primitives';

// ─── Before state data ────────────────────────────────────────────────────────

interface DisconnectedTool {
  name: string;
  pain: string;
  icon: string; // emoji — safe for inline SVG-free rendering
}

const DISCONNECTED_TOOLS: DisconnectedTool[] = [
  {
    name: 'Legacy AMS',
    pain: 'Data locked inside, no carrier sync',
    icon: '🗄️',
  },
  {
    name: '20+ Carrier Portals',
    pain: 'Separate login for every carrier',
    icon: '🔗',
  },
  {
    name: 'Excel Commission Tracker',
    pain: 'One wrong formula, all wrong',
    icon: '📊',
  },
  {
    name: 'Calendar & Email Reminders',
    pain: 'Renewals that fall through',
    icon: '📅',
  },
  {
    name: 'PDF ACORD Forms',
    pain: 'Filled manually, scanned, re-keyed',
    icon: '📄',
  },
];

// ─── After state data ─────────────────────────────────────────────────────────

interface PlatformModule {
  name: string;
  value: string;
  icon: string;
}

const PLATFORM_MODULES: PlatformModule[] = [
  {
    name: 'IVANS Carrier Sync',
    value: 'Automatic policy download',
    icon: '⚡',
  },
  {
    name: 'Producer Workspace',
    value: 'Pipeline, activity & renewals',
    icon: '👤',
  },
  {
    name: 'Commission Engine',
    value: 'Splits, overrides, statements',
    icon: '💰',
  },
  {
    name: 'ACORD Auto-Fill',
    value: 'Forms from live policy data',
    icon: '📋',
  },
  {
    name: 'Client Self-Service',
    value: 'Documents, certs, payments',
    icon: '🌐',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const ToolCard = ({ tool }: { tool: DisconnectedTool }) => (
  <div className="bg-surface-elevated border border-border-dark rounded-lg p-3 flex items-start gap-2.5 min-w-0">
    <span className="text-base shrink-0 mt-0.5" aria-hidden="true">
      {tool.icon}
    </span>
    <div className="min-w-0">
      <div className="text-xs font-semibold text-text-light truncate">{tool.name}</div>
      <div className="text-[10px] md:text-xs text-text-subtle leading-snug mt-0.5">{tool.pain}</div>
    </div>
  </div>
);

const ModuleCard = ({ module }: { module: PlatformModule }) => (
  <div className="bg-brand-500/10 border border-brand-500/30 rounded-lg p-3 flex items-start gap-2.5 min-w-0">
    <span className="text-base shrink-0 mt-0.5" aria-hidden="true">
      {module.icon}
    </span>
    <div className="min-w-0">
      <div className="text-xs font-semibold text-brand-300 truncate">{module.name}</div>
      <div className="text-[10px] md:text-xs text-text-subtle leading-snug mt-0.5">{module.value}</div>
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

export const AgencyWorkflowTransformation = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      {/* Header */}
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          Before → After
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Five systems or one platform.
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
            {' '}The agency running one wins.
          </span>
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Most independent agencies run their book across a legacy AMS, multiple carrier
          portals, a spreadsheet, email reminders, and paper ACORD forms. A custom platform
          collapses all of that into one connected system.
        </p>
      </div>

      {/* Before / After split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">

        {/* ── Before column ─────────────────────────────── */}
        <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-2xl p-5 md:p-6">
          {/* Column header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-text-subtle mb-1">
                Today&apos;s Reality
              </div>
              <div className="text-base md:text-lg font-bold text-text-light">
                The 5-Tool Problem
              </div>
            </div>
            <div className="shrink-0 bg-surface-elevated border border-border-dark rounded-lg px-2.5 py-1.5 text-center">
              <div className="text-sm font-bold text-text-muted">5+</div>
              <div className="text-[9px] text-text-subtle leading-tight">systems</div>
            </div>
          </div>

          {/* Tool cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
            {DISCONNECTED_TOOLS.map((tool, idx) => (
              <ToolCard key={idx} tool={tool} />
            ))}
          </div>

          {/* Pain summary */}
          <div className="mt-4 pt-3.5 border-t border-border-dark">
            <div className="text-xs text-text-subtle text-center leading-relaxed">
              Manual data entry between every system.
              <br />
              Producers doing admin instead of selling.
            </div>
          </div>
        </div>

        {/* ── Mobile transform arrow (only visible below lg) ─ */}
        <div className="flex flex-col items-center gap-2 lg:hidden">
          <div className="w-px h-6 bg-brand-500/40" />
          <div className="text-brand-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-brand-500/10 border border-brand-500/30 rounded-full">
            Transform
          </div>
          <div className="w-px h-6 bg-brand-500/40" />
        </div>

        {/* ── After column ──────────────────────────────────── */}
        <div className="bg-[color:var(--glass-bg)] border border-brand-500/40 rounded-2xl p-5 md:p-6 relative">
          {/* Column header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                With Custom AMS
              </div>
              <div className="text-base md:text-lg font-bold text-text-light">
                One Connected Platform
              </div>
            </div>
            <div className="shrink-0 bg-brand-500/15 border border-brand-500/40 rounded-lg px-2.5 py-1.5 text-center">
              <div className="text-sm font-bold text-brand-300">1</div>
              <div className="text-[9px] text-text-subtle leading-tight">platform</div>
            </div>
          </div>

          {/* Central hub */}
          <div className="flex justify-center mb-3">
            <div className="bg-brand-500/20 border-2 border-brand-500/60 rounded-xl px-5 py-3 text-center">
              <div className="text-sm md:text-base font-bold text-brand-200">
                🏢 Agency Platform
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle mt-0.5">
                Your data · Your workflows · Your rules
              </div>
            </div>
          </div>

          {/* Connection indicator */}
          <div className="flex justify-center mb-3">
            <div className="flex items-center gap-1.5">
              <div className="w-px h-4 bg-brand-500/40" />
              <div className="text-[10px] text-brand-400 font-medium uppercase tracking-wider">
                connected to
              </div>
              <div className="w-px h-4 bg-brand-500/40" />
            </div>
          </div>

          {/* Module cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
            {PLATFORM_MODULES.map((module, idx) => (
              <ModuleCard key={idx} module={module} />
            ))}
          </div>

          {/* Value summary */}
          <div className="mt-4 pt-3.5 border-t border-brand-500/20">
            <div className="text-xs text-brand-300 text-center leading-relaxed font-medium">
              Automated workflows. Real-time carrier data.
              <br />
              Producers focused on production.
            </div>
          </div>
        </div>

      </div>

      {/* Desktop center arrow — only visible at lg+ */}
      {/* Rendered as a positioned element between columns via negative margin trick */}
      <div className="hidden lg:flex justify-center mt-4 -mb-4">
        <div className="flex flex-col items-center gap-1 opacity-60">
          <div className="text-brand-400 text-xs font-semibold uppercase tracking-widest">
            → replaces →
          </div>
        </div>
      </div>

      {/* Footer tagline */}
      <div className="text-center mt-10 md:mt-12">
        <div className="inline-block border border-brand-500/30 rounded-full px-5 py-2">
          <span className="text-xs md:text-sm text-text-subtle">
            Built to your agency&apos;s workflows, commission structures, and carrier relationships —
            not configured to a vendor&apos;s idea of how you should operate.
          </span>
        </div>
      </div>

    </Container>
  </Section>
);
