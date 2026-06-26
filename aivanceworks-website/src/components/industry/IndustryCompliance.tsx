import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface ComplianceSafeguard {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryComplianceProps {
  title?: string;
  statement?: string;
  frameworks: string[];
  safeguards: ComplianceSafeguard[];
  auditNote: string;
  partnerAgreements?: string[];
}

/**
 * IndustryCompliance — the non-negotiable trust section. A bold thesis band
 * with a framework rail, then safeguards as a divided definition list (term +
 * detail rows, not cards), closing on an audit-readiness statement. Warm tone.
 */
export const IndustryCompliance = ({
  title = 'Compliance is the gate. We build to clear it.',
  statement = "Buyers don't engage without seeing this. Every system starts from the safeguards a regulator, auditor, or partner expects — designed in, not bolted on.",
  frameworks,
  safeguards,
  auditNote,
  partnerAgreements,
}: IndustryComplianceProps) => (
  <Section data-section="industry-compliance" tone="warm" size="lg">
    <Container>
      {/* Thesis band */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-end mb-12 md:mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-heading leading-[1.1] tracking-tight text-balance mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-text-body leading-relaxed text-pretty max-w-[54ch]">
            {statement}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {frameworks.map((f) => (
            <span
              key={f}
              className="inline-flex items-center rounded-lg border border-brand-200 bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Safeguard definition list */}
      <div className="border-t border-border-light">
        {safeguards.map((s, idx) => {
          const Icon = getLucideIcon(s.icon);
          return (
            <div
              key={idx}
              className="group grid md:grid-cols-[0.42fr_0.58fr] gap-x-10 gap-y-2 py-6 md:py-7 border-b border-border-light transition-colors hover:bg-surface-white/70"
            >
              <div className="flex items-center gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-white border border-border-light text-brand-600 transition-colors group-hover:border-brand-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-text-heading">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-text-body leading-relaxed md:pt-1">
                {s.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Audit-readiness close */}
      <div className="mt-10 md:mt-12 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-14 items-center rounded-2xl bg-surface-white border border-border-light p-7 md:p-9">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-text-heading mb-2">
            Audit-ready, and willing to prove it
          </h3>
          <p className="text-sm md:text-base text-text-body leading-relaxed max-w-[64ch]">
            {auditNote}
          </p>
        </div>
        {partnerAgreements && partnerAgreements.length > 0 && (
          <div className="flex flex-col gap-2 lg:border-l lg:border-border-light lg:pl-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-subtle">
              Agreements in place
            </span>
            <div className="flex flex-wrap gap-2">
              {partnerAgreements.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-md border border-border-light bg-surface-warm px-2.5 py-1 text-sm font-medium text-text-body"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  </Section>
);
