import { ChevronDown } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  faqs: FAQItem[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const FAQ = ({
  title = 'Frequently Asked Questions',
  subtitle,
  eyebrow,
  faqs,
  tone = 'light',
  className,
}: FAQProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container width="narrow">
      <div className="text-center mb-10 md:mb-12">
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-text-body leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-3 md:space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group bg-surface-white border border-border-light rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 hover:bg-surface-warm transition-colors list-none">
              <h3 className="text-base md:text-lg font-semibold text-text-heading pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                aria-hidden="true"
                className="h-5 w-5 text-text-muted transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
              />
            </summary>
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </Container>
  </Section>
);
