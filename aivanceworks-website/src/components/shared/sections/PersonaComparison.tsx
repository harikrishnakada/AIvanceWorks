import { CheckCircle2 } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export type PersonaAccent = 'brand' | 'accent' | 'secondary';

export interface PersonaCard {
  icon: string; // Lucide icon name
  title: string;
  subtitle: string;
  features: string[];
  accent?: PersonaAccent;
}

export interface PersonaComparisonProps {
  eyebrow?: string;
  title?: string;
  /**
   * Optional substring of `title` to render in brand-600 for emphasis.
   * If omitted, the title renders plain.
   */
  highlightText?: string;
  subtitle?: string;
  personas: PersonaCard[];
  footerNote?: string;
  tone?: 'light' | 'warm';
  className?: string;
}

const ACCENT_BORDER: Record<PersonaAccent, string> = {
  brand: 'border-t-brand-500',
  accent: 'border-t-accent-500',
  secondary: 'border-t-brand-400',
};

const getPersonaGridClass = (count: number): string => {
  if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
  if (count === 3) return 'grid-cols-1 lg:grid-cols-3';
  if (count === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
  return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
};

export const PersonaComparison = ({
  eyebrow,
  title = 'Who It Serves',
  highlightText,
  subtitle,
  personas,
  footerNote,
  tone = 'light',
  className,
}: PersonaComparisonProps) => {
  const titleContent = (() => {
    if (!highlightText || !title.includes(highlightText)) return title;
    const [before, after] = title.split(highlightText);
    return (
      <>
        {before}
        <span className="text-brand-600">{highlightText}</span>
        {after}
      </>
    );
  })();

  return (
    <Section data-section="persona-comparison" tone={tone} size="md" className={className}>
      <Container>
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-heading mb-4 leading-tight">
            {titleContent}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={cn(
            'grid gap-6 md:gap-8 mb-6',
            getPersonaGridClass(personas.length)
          )}
        >
          {personas.map((persona, idx) => {
            const Icon = getLucideIcon(persona.icon);
            const accentClass = ACCENT_BORDER[persona.accent ?? 'brand'];
            return (
              <div
                key={idx}
                className={cn(
                  'flex flex-col bg-surface-white rounded-xl shadow-card-sm border border-border-light border-t-4 hover:shadow-card hover:border-brand-300 transition-all duration-300 p-6 md:p-7',
                  accentClass
                )}
              >
                <div className="flex items-start gap-3 mb-1">
                  <div className="w-10 h-10 rounded-lg bg-surface-warm border border-border-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon
                      className="h-5 w-5 text-text-body"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-text-heading leading-tight">
                      {persona.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-0.5">
                      {persona.subtitle}
                    </p>
                  </div>
                </div>
                <div className="border-t border-border-light my-4" />
                <ul className="space-y-2.5 flex-1">
                  {persona.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-start gap-2.5 text-sm text-text-body"
                    >
                      <CheckCircle2
                        className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {footerNote && (
          <p className="text-center text-sm text-text-muted italic">
            {footerNote}
          </p>
        )}
      </Container>
    </Section>
  );
};
