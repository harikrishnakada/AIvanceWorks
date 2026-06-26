import { CheckCircle2 } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface Segment {
  icon: string;
  name: string;
  buyer: string;
  needs: string[];
}

export interface IndustrySegmentsProps {
  title: string;
  subtitle?: string;
  items: Segment[];
  footerNote?: string;
}

/**
 * IndustrySegments — sub-verticals as a divided ledger (not a persona card
 * grid). Each row pairs the segment + its buyer on the left with what that
 * segment needs from us on the right. Light tone.
 */
export const IndustrySegments = ({ title, subtitle, items, footerNote }: IndustrySegmentsProps) => (
  <Section data-section="industry-segments" tone="light" size="lg">
    <Container>
      <div className="max-w-3xl mb-12 md:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading tracking-tight text-balance mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>

      <div className="border-t border-border-light">
        {items.map((seg, idx) => {
          const Icon = getLucideIcon(seg.icon);
          return (
            <div
              key={idx}
              className="group grid lg:grid-cols-[0.4fr_0.6fr] gap-x-12 gap-y-5 py-7 md:py-9 border-b border-border-light transition-colors hover:bg-surface-warm/50"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-warm border border-border-light text-brand-600 transition-colors group-hover:border-brand-300 group-hover:text-brand-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-heading leading-tight tracking-tight">
                    {seg.name}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">{seg.buyer}</p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 lg:pt-1">
                {seg.needs.map((need, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-text-body">
                    <CheckCircle2 className="h-4 w-4 mt-1 shrink-0 text-brand-500" aria-hidden="true" />
                    <span className="leading-snug">{need}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {footerNote && (
        <p className="mt-8 text-sm text-text-muted italic max-w-[68ch]">{footerNote}</p>
      )}
    </Container>
  </Section>
);
