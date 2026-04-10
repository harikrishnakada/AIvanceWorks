import { Section, Container, IconTile } from '@/components/shared/primitives';
import { getLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export interface CompliancePillar {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface ComplianceSpotlightProps {
  eyebrow?: string;
  title: string;
  /**
   * Optional substring of `title` to render with the gradient brand→accent
   * treatment. If omitted, the title renders plain.
   */
  highlightText?: string;
  statusText: string;
  pillars: CompliancePillar[];
  badges?: string[];
  tone?: 'warm' | 'light';
  className?: string;
}

const getPillarGridClass = (count: number): string => {
  if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
  if (count === 3) return 'grid-cols-1 md:grid-cols-3';
  if (count === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
  return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
};

export const ComplianceSpotlight = ({
  eyebrow,
  title,
  highlightText,
  statusText,
  pillars,
  badges,
  tone = 'warm',
  className,
}: ComplianceSpotlightProps) => {
  const titleContent = (() => {
    if (!highlightText || !title.includes(highlightText)) return title;
    const [before, after] = title.split(highlightText);
    return (
      <>
        {before}
        <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
          {highlightText}
        </span>
        {after}
      </>
    );
  })();

  return (
    <Section tone={tone} size="md" className={className}>
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--glass-border)] shadow-brand-panel bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to px-6 sm:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
          {/* Grid overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px]"
          />

          {/* Glow orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/4 w-[480px] h-64 bg-brand-500/10 rounded-full blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-1/4 w-[360px] h-48 bg-accent-500/10 rounded-full blur-[80px]"
          />

          {/* Content */}
          <div className="relative">
            <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
              {eyebrow && (
                <div className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
                  {eyebrow}
                </div>
              )}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-light mb-5 leading-tight">
                {titleContent}
              </h2>

              {/* Animated status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-sm font-semibold tracking-wide">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400" />
                </span>
                {statusText}
              </div>
            </div>

            {/* Pillar cards */}
            <div
              className={cn(
                'grid gap-5 md:gap-6 mb-10',
                getPillarGridClass(pillars.length)
              )}
            >
              {pillars.map((pillar, idx) => {
                const Icon = getLucideIcon(pillar.icon);
                return (
                  <div
                    key={idx}
                    className="bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-xl p-6 backdrop-blur-sm hover:bg-[color:var(--glass-hover)] transition-colors duration-300"
                  >
                    <IconTile
                      icon={Icon}
                      size="md"
                      variant="glass"
                      className="mb-4"
                    />
                    <h3 className="text-base md:text-lg font-bold text-text-light mb-2 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-text-subtle leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Badge chips */}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                {badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-brand-500/20 border border-brand-400/30 text-brand-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
