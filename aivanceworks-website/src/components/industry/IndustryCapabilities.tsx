import { CheckCircle2 } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export interface CapabilityGroup {
  icon: string;
  title: string;
  description?: string;
  items: string[];
}

export interface IndustryCapabilitiesProps {
  title?: string;
  highlightText?: string;
  subtitle?: string;
  groups: CapabilityGroup[];
}

// Bento spans for the common 5-group catalog: two wide features on top,
// three balanced panels below. Other counts fall back to an even rhythm.
const BENTO_SPANS = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2'];

/**
 * IndustryCapabilities — the dark "what we build" catalog, laid out as an
 * asymmetric bento (deliberately NOT a uniform card grid). Carries the page's
 * visual weight in place of a signature section.
 */
export const IndustryCapabilities = ({
  title = 'What we build',
  highlightText,
  subtitle,
  groups,
}: IndustryCapabilitiesProps) => {
  const titleContent = (() => {
    if (!highlightText || !title.includes(highlightText)) return title;
    const [before, after] = title.split(highlightText);
    return (
      <>
        {before}
        <span className="text-brand-400">{highlightText}</span>
        {after}
      </>
    );
  })();

  return (
    <Section data-section="industry-capabilities" tone="dark" size="lg" withGrid>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/3 w-[620px] h-72 bg-brand-500/[0.09] rounded-full blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[480px] h-56 bg-accent-500/[0.06] rounded-full blur-[110px]"
      />

      <Container>
        <div className="max-w-3xl mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light tracking-tight text-balance mb-4">
            {titleContent}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg text-text-light/70 leading-relaxed text-pretty">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-6">
          {groups.map((group, idx) => {
            const Icon = getLucideIcon(group.icon);
            const span = BENTO_SPANS[idx] ?? 'lg:col-span-2';
            return (
              <div
                key={idx}
                className={cn(
                  'group flex flex-col rounded-2xl bg-surface-elevated border border-border-dark p-6 md:p-7 transition-all duration-300 hover:border-brand-400/50 hover:-translate-y-0.5',
                  span
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/[0.12] border border-brand-400/20 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-text-light leading-tight">
                    {group.title}
                  </h3>
                </div>
                {group.description && (
                  <p className="text-sm text-text-light/55 leading-relaxed mb-5 -mt-1">
                    {group.description}
                  </p>
                )}
                <ul className="mt-auto grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                      <span className="text-sm text-text-light/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
