import { cn } from '@/lib/utils';
import { SECTION_PADDING } from '@/lib/section-spacing';
import { HTMLAttributes, ReactNode } from 'react';

export type SectionTone = 'dark' | 'light' | 'warm' | 'accent';
export type SectionSize = 'flush' | 'sm' | 'md' | 'lg';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone: SectionTone;
  size?: SectionSize;
  withGrid?: boolean;
  /* Declares that this section's background or media intentionally spans the
     viewport. Inner content must still pass through a Container. A bleed must be
     DECLARED here — never achieved by omitting a max-width, which is exactly what
     produced the eight-edge zigzag this scale exists to fix. */
  bleed?: boolean;
  children: ReactNode;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  dark: 'bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light',
  light: 'bg-surface-white text-text-body',
  warm: 'bg-surface-warm text-text-body',
  accent: 'bg-gradient-to-r from-brand-600 to-accent-500 text-text-light',
};

/* The padding scale lives in @/lib/section-spacing so that sections using this
   primitive and the ~19 sections still applying SECTION_Y directly land on the
   same rhythm. See that file for why the low end is deliberately restrained. */
const SIZE_CLASSES: Record<SectionSize, string> = SECTION_PADDING;

export const Section = ({
  tone,
  size = 'md',
  withGrid = false,
  bleed = false,
  className,
  children,
  ...rest
}: SectionProps) => {
  const showGrid = withGrid && tone === 'dark';

  return (
    <section
      data-bleed={bleed ? 'true' : undefined}
      className={cn(
        'relative overflow-hidden',
        TONE_CLASSES[tone],
        SIZE_CLASSES[size],
        className
      )}
      {...rest}
    >
      {showGrid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-grid-light)_1px,transparent_1px)] bg-[size:40px_40px]"
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};
