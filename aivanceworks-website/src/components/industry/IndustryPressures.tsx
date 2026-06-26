import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';

export interface PressureItem {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryPressuresProps {
  title: string;
  intro: string;
  items: PressureItem[];
}

/**
 * IndustryPressures — the problem statement. Editorial split layout: a sticky
 * thesis column on the left, and the pressures as a divided ledger of rows
 * (oversized index numerals, no cards) on the right. Leads with the pain.
 */
export const IndustryPressures = ({ title, intro, items }: IndustryPressuresProps) => (
  <Section data-section="industry-pressures" tone="light" size="lg">
    <Container>
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
        {/* Thesis column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-heading leading-[1.1] tracking-tight text-balance mb-5">
            {title}
          </h2>
          <p className="text-base md:text-lg text-text-body leading-relaxed text-pretty max-w-[46ch]">
            {intro}
          </p>
        </div>

        {/* Pressure ledger */}
        <ul className="border-t border-border-light">
          {items.map((item, idx) => {
            const Icon = getLucideIcon(item.icon);
            return (
              <li
                key={idx}
                className="group grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-7 py-6 md:py-7 border-b border-border-light transition-colors hover:bg-surface-warm/60"
              >
                <div className="flex items-baseline gap-3 pt-1">
                  <span className="text-2xl md:text-3xl font-bold text-brand-200 tabular-nums group-hover:text-brand-500 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="h-5 w-5 text-brand-600 shrink-0" aria-hidden="true" />
                    <h3 className="text-lg md:text-xl font-semibold text-text-heading">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-text-body leading-relaxed max-w-[60ch]">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  </Section>
);
