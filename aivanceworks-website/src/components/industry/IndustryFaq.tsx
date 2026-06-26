import { Plus } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IndustryFaqProps {
  title?: string;
  intro?: string;
  faqs: FaqItem[];
}

/**
 * IndustryFaq — bespoke open accordion: an editorial two-column header, then
 * hairline-divided rows with a plus-to-x toggle (no card boxes). Native
 * <details> keeps it AEO-friendly and works without JS. Warm tone.
 */
export const IndustryFaq = ({
  title = 'Frequently asked questions',
  intro,
  faqs,
}: IndustryFaqProps) => (
  <Section data-section="industry-faq" tone="warm" size="lg">
    <Container>
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-heading leading-[1.1] tracking-tight text-balance">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base md:text-lg text-text-body leading-relaxed text-pretty max-w-[44ch]">
              {intro}
            </p>
          )}
        </div>

        <div className="border-t border-border-light">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-border-light">
              <summary className="flex items-start justify-between gap-6 cursor-pointer py-5 md:py-6 list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 rounded-sm">
                <h3 className="text-lg md:text-xl font-semibold text-text-heading leading-snug transition-colors group-hover:text-brand-600 group-open:text-brand-600">
                  {faq.question}
                </h3>
                <Plus
                  aria-hidden="true"
                  className="h-5 w-5 mt-0.5 shrink-0 text-brand-600 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <div className="pb-6 pr-8 md:pr-12 -mt-1">
                <p className="text-sm md:text-base text-text-body leading-relaxed max-w-[68ch]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);
