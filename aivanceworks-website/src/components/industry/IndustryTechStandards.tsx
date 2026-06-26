import { Check } from 'lucide-react';
import { Section, Container } from '@/components/shared/primitives';

export interface IndustryTechStandardsProps {
  title: string;
  subtitle?: string;
  systemsTitle: string;
  systems: string[];
  technologiesTitle: string;
  technologies: string[];
}

/**
 * IndustryTechStandards — "we speak your stack" as two horizontal rails:
 * an oversized category label on the left, the items on the right. Systems
 * read as a checked list; platforms/standards/frameworks read as chips.
 * Distinct from the symmetric two-column TechStackBlock. Warm tone.
 */
export const IndustryTechStandards = ({
  title,
  subtitle,
  systemsTitle,
  systems,
  technologiesTitle,
  technologies,
}: IndustryTechStandardsProps) => (
  <Section data-section="industry-tech-standards" tone="warm" size="lg">
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
        {/* Systems rail */}
        <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-x-12 gap-y-5 py-8 md:py-10 border-b border-border-light">
          <h3 className="text-xl md:text-2xl font-bold text-text-heading tracking-tight">
            {systemsTitle}
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {systems.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-text-body">
                <Check className="h-4 w-4 mt-1 shrink-0 text-brand-600" aria-hidden="true" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Platforms / standards / frameworks rail */}
        <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-x-12 gap-y-5 py-8 md:py-10 border-b border-border-light">
          <h3 className="text-xl md:text-2xl font-bold text-text-heading tracking-tight">
            {technologiesTitle}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-lg border border-border-light bg-surface-white px-3.5 py-2 text-sm font-medium text-text-body transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
