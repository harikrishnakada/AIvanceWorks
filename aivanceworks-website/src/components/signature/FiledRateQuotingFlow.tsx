/**
 * FiledRateQuotingFlow — signature section for Quoting Software page.
 *
 * 4-stage pipeline visualization showing how a quote flows from any channel
 * through rules, rating, and the filed-rate verification gate into a
 * bind-ready, rate-stamped response.
 *
 * Visualization pattern: Process / flow (§8.3 pattern #3).
 * Emotional argument: "Every channel, one rating spine, every quote on
 *   filed rates — in seconds."
 *
 * Desktop (≥lg):
 *   1. Intake row — 4 channel cards fanning into a central "canonical submission"
 *   2. Rules + Enrichment stage
 *   3. Rating + Filed-Rate Verification Gate — emphasised, dual-inner layout
 *   4. Bind-Ready Quote Output — 4 delivery options in a row
 *
 * Mobile (<lg):
 *   All stages stack vertically. Intake channel grid reflows from 4 cols → 2 cols
 *   → 1 col at <sm. Rate-gate dual inner layout stacks vertically at <md.
 *   Output grid stacks from 4 cols → 2 cols → 1 col at <sm.
 *   Vertical connector lines preserve the pipeline argument at every width.
 *
 * Token compliance: all color references use token-backed Tailwind classes per §3.2.
 *   No raw color shades. No hex values. No dark: prefix.
 *   Glass surfaces use bg-[color:var(--glass-bg)] / border-[color:var(--glass-border)].
 *
 * Self-contained: no global state, no shared refs, no DOM coupling.
 * Swappable: registered in SIGNATURE_COMPONENTS in app/solutions/[slug]/page.tsx.
 */

import { Section, Container } from '@/components/shared/primitives';

// ─── Stage 1 — Intake channels ────────────────────────────────────────────────

interface Channel {
  name: string;
  detail: string;
  icon: string;
}

const CHANNELS: Channel[] = [
  { name: 'Consumer Web', detail: 'Direct-to-consumer quoting pages', icon: '🖥️' },
  { name: 'Agent Portal', detail: 'Producer quoting & comparison', icon: '👤' },
  { name: 'Broker API', detail: 'Partner & white-label callers', icon: '🔌' },
  { name: 'Comparative Rater', detail: 'EZLynx, Vertafore, carrier raters', icon: '🧮' },
];

// ─── Stage 3 — Rules + data enrichment tags ───────────────────────────────────

const RULES_ITEMS = [
  'Eligibility rules',
  'Appetite & guardrails',
  'Enrichment (Verisk, LexisNexis)',
  'Pre-fill & identity',
  'Authority routing',
];

// ─── Stage 4 — Filed-rate gate pillars ────────────────────────────────────────

const GATE_PILLARS = [
  { title: 'Filing lookup', detail: 'Active rate for state & line' },
  { title: 'Rate verification', detail: 'Quote reconciled to filing' },
  { title: 'Version stamp', detail: 'State · line · rate version · effective date' },
];

// ─── Stage 5 — Bind-ready output ──────────────────────────────────────────────

interface OutputChannel {
  label: string;
  detail: string;
}

const OUTPUTS: OutputChannel[] = [
  { label: 'Quote PDF', detail: 'Agent / consumer download' },
  { label: 'API Response', detail: 'Partner & comparative rater' },
  { label: 'Bind Workflow', detail: 'E-sign · down-payment · issue' },
  { label: 'Policy Admin Handoff', detail: 'Guidewire · Duck Creek · Sapiens' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const PipelineConnector = () => (
  <div className="flex justify-center py-2 md:py-3">
    <div className="w-px h-6 md:h-8 bg-brand-500/40" />
  </div>
);

const ChannelCard = ({ channel }: { channel: Channel }) => (
  <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-lg p-3 md:p-4 flex flex-col gap-1 min-w-0">
    <div className="flex items-center gap-2">
      <span className="text-sm md:text-base shrink-0" aria-hidden="true">
        {channel.icon}
      </span>
      <div className="text-xs md:text-sm font-bold text-text-light truncate">
        {channel.name}
      </div>
    </div>
    <div className="text-[10px] md:text-xs text-text-subtle leading-snug">
      {channel.detail}
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

export const FiledRateQuotingFlow = () => (
  <Section tone="dark" size="md" withGrid>
    <Container>
      {/* Header */}
      <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
        <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
          From any channel to a bind-ready quote
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 tracking-tight">
          Four channels.
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
            {' '}One filed-rate gate.
          </span>
        </h2>
        <p className="text-base md:text-lg text-text-subtle leading-relaxed">
          Every quote — consumer, agent, broker, or comparative rater — flows through
          the same rules engine, the same rating engine, and the same filed-rate
          verification gate. The same risk gets the same price, stamped with the rate
          version it was issued on.
        </p>
      </div>

      {/* Pipeline visualization */}
      <div className="max-w-4xl mx-auto">

        {/* ── Stage 1: Multi-channel Intake ─────────────────── */}
        <div className="bg-brand-500/10 border border-brand-500/30 rounded-xl p-4 md:p-5">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                Stage 1
              </div>
              <div className="text-sm md:text-base font-bold text-text-light">
                Multi-Channel Intake
              </div>
              <div className="text-xs md:text-sm text-text-subtle mt-0.5">
                One canonical submission model across every channel
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-lg md:text-xl font-bold text-brand-300">
                Seconds
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle">
                unified capture
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {CHANNELS.map((channel, idx) => (
              <ChannelCard key={idx} channel={channel} />
            ))}
          </div>
        </div>

        <PipelineConnector />

        {/* ── Stage 2: Rules + Enrichment ──────────────────── */}
        <div className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-4 md:p-5">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                Stage 2
              </div>
              <div className="text-sm md:text-base font-bold text-text-light">
                Rules, Eligibility & Enrichment
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-lg md:text-xl font-bold text-brand-300">
                &lt; 10s
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle">
                parallel lookups
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {RULES_ITEMS.map((step) => (
              <div
                key={step}
                className="bg-brand-500/10 border border-brand-500/30 rounded-md px-3 py-1.5 text-xs md:text-sm text-text-light font-medium"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <PipelineConnector />

        {/* ── Stage 3: Rating + Filed-Rate Verification Gate (EMPHASISED) ── */}
        <div className="bg-[color:var(--glass-bg)] border-2 border-brand-500/60 rounded-xl p-4 md:p-6 shadow-[0_0_0_1px_rgba(0,0,0,0)]">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                Stage 3 · The gate
              </div>
              <div className="text-sm md:text-base font-bold text-text-light">
                Rating Engine + Filed-Rate Verification
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle mt-0.5">
                Earnix · Guidewire · Duck Creek · proprietary
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-lg md:text-xl font-bold text-brand-300">
                Sub-second
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle">
                verified rating
              </div>
            </div>
          </div>

          {/* Dual-inner layout: rating engine on the left, verification gate on the right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

            {/* Rating engine panel */}
            <div className="bg-brand-500/10 border border-brand-500/30 rounded-lg p-3 md:p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-2">
                Rating call
              </div>
              <div className="text-sm md:text-base font-bold text-text-light mb-1">
                Premium calculated
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle leading-snug">
                Enriched submission routed to the rating engine that owns the
                filed rate math for this state and line.
              </div>
            </div>

            {/* Verification gate panel */}
            <div className="bg-brand-500/15 border border-brand-500/50 rounded-lg p-3 md:p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                  Filed-rate gate
                </span>
                <span aria-hidden="true" className="text-brand-300 text-sm">✓</span>
              </div>
              <div className="text-sm md:text-base font-bold text-text-light mb-2">
                Verify · Stamp · Release
              </div>
              <ul className="space-y-1.5">
                {GATE_PILLARS.map((pillar) => (
                  <li key={pillar.title} className="flex items-start gap-2 min-w-0">
                    <span aria-hidden="true" className="text-brand-300 text-[10px] mt-1 shrink-0">●</span>
                    <div className="min-w-0">
                      <div className="text-[11px] md:text-xs font-semibold text-text-light leading-tight">
                        {pillar.title}
                      </div>
                      <div className="text-[10px] md:text-[11px] text-text-subtle leading-snug">
                        {pillar.detail}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rate-integrity callout */}
          <div className="flex justify-center mt-4 pt-3 border-t border-brand-500/20">
            <div className="bg-brand-500/15 border border-brand-500/40 rounded-lg px-5 py-2.5 text-center">
              <div className="text-xs md:text-sm font-bold text-brand-300">
                Rate drift cannot silently ship
              </div>
              <div className="text-[10px] md:text-xs text-text-subtle mt-0.5">
                Every quote traceable to its filing · alerts on distribution anomalies
              </div>
            </div>
          </div>
        </div>

        <PipelineConnector />

        {/* ── Stage 4: Bind-Ready Output ───────────────────── */}
        <div className="bg-brand-500/10 border border-brand-500/30 rounded-xl p-4 md:p-5">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                Output
              </div>
              <div className="text-sm md:text-base font-bold text-text-light">
                Bind-Ready Quote — Delivered to the Channel That Asked
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                On-filed-rate
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {OUTPUTS.map((output) => (
              <div
                key={output.label}
                className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-lg p-3 text-center"
              >
                <div className="text-xs md:text-sm font-bold text-text-light">
                  {output.label}
                </div>
                <div className="text-[10px] md:text-xs text-text-subtle mt-0.5 leading-snug">
                  {output.detail}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 pt-3 border-t border-brand-500/20">
            <div className="text-xs md:text-sm text-text-subtle">
              Every quote stamped with state · line · rate version · effective date
            </div>
          </div>
        </div>

      </div>
    </Container>
  </Section>
);
