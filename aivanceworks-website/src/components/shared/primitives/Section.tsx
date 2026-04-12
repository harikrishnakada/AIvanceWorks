import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

export type SectionTone = 'dark' | 'light' | 'warm' | 'accent';
export type SectionSize = 'sm' | 'md' | 'lg';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone: SectionTone;
  size?: SectionSize;
  withGrid?: boolean;
  children: ReactNode;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  dark: 'bg-gradient-to-br from-surface-dark-from via-surface-dark-via to-surface-dark-to text-text-light',
  light: 'bg-surface-white text-text-body',
  warm: 'bg-surface-warm text-text-body',
  accent: 'bg-gradient-to-r from-brand-600 to-accent-500 text-text-light',
};

const SIZE_CLASSES: Record<SectionSize, string> = {
  sm: 'py-6 md:py-8 lg:py-10',
  md: 'py-8 md:py-10 lg:py-12',
  lg: 'py-10 md:py-14 lg:py-16',
};

export const Section = ({
  tone,
  size = 'md',
  withGrid = false,
  className,
  children,
  ...rest
}: SectionProps) => {
  const showGrid = withGrid && tone === 'dark';

  return (
    <section
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
