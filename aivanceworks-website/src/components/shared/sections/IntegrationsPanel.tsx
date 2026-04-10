import { Section, Container } from '@/components/shared/primitives';
import { CheckCircle2 } from 'lucide-react';

export interface IntegrationGroup {
  name: string;
  category: string;
  connectionMethod: string;
  capabilities: string[];
}

export interface IntegrationsPanelProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  integrations: IntegrationGroup[];
  tone?: 'light' | 'warm';
  className?: string;
}

export const IntegrationsPanel = ({
  title = 'Integrations',
  subtitle,
  eyebrow,
  integrations,
  tone = 'warm',
  className,
}: IntegrationsPanelProps) => (
  <Section tone={tone} size="md" className={className}>
    <Container>
      <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
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

      <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, idx) => (
          <div
            key={idx}
            className="bg-surface-white border border-border-light rounded-xl shadow-card-sm p-6 hover:shadow-card transition-shadow"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-text-heading leading-tight">
                  {integration.name}
                </h3>
                <div className="text-xs md:text-sm text-text-muted uppercase tracking-wide mt-1">
                  {integration.category}
                </div>
              </div>
            </div>
            <div className="text-xs md:text-sm font-medium text-brand-600 bg-brand-50 border border-brand-100 rounded-lg px-3 py-1.5 inline-block mb-4">
              {integration.connectionMethod}
            </div>
            <ul className="space-y-2">
              {integration.capabilities.map((capability, capIdx) => (
                <li
                  key={capIdx}
                  className="flex items-start gap-2 text-xs md:text-sm text-text-body"
                >
                  <CheckCircle2
                    className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
