import { Section, Container, CheckList, ChipRow } from '@/components/shared/primitives';

export interface TechStackBlockProps {
  title?: string;
  capabilitiesTitle?: string;
  technologiesTitle?: string;
  eyebrow?: string;
  capabilities: string[];
  technologies: string[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const TechStackBlock = ({
  title,
  capabilitiesTitle = 'Key Capabilities',
  technologiesTitle = 'Technologies',
  eyebrow,
  capabilities,
  technologies,
  tone = 'warm',
  className,
}: TechStackBlockProps) => (
  <Section data-section="tech-stack-block" tone={tone} size="md" className={className}>
    <Container>
      {(title || eyebrow) && (
        <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 tracking-tight">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-6 tracking-tight">
            {capabilitiesTitle}
          </h3>
          <CheckList items={capabilities} />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-6 tracking-tight">
            {technologiesTitle}
          </h3>
          <ChipRow items={technologies} variant="default" />
        </div>
      </div>
    </Container>
  </Section>
);
