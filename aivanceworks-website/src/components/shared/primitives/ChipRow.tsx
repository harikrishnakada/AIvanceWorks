import { cn } from '@/lib/utils';

export type ChipVariant = 'default' | 'brand' | 'glass';

export interface ChipRowProps {
  items: string[];
  variant?: ChipVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<ChipVariant, string> = {
  default:
    'bg-surface-warm text-text-body border border-border-light hover:bg-surface-light',
  brand:
    'bg-brand-50 text-brand-700 border border-brand-200 hover:bg-brand-100',
  glass:
    'bg-[color:var(--glass-bg)] text-text-light border border-[color:var(--glass-border)] hover:bg-[color:var(--glass-hover)]',
};

export const ChipRow = ({
  items,
  variant = 'default',
  className,
}: ChipRowProps) => (
  <div className={cn('flex flex-wrap gap-2 md:gap-3', className)}>
    {items.map((item, idx) => (
      <span
        key={idx}
        className={cn(
          'inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors',
          VARIANT_CLASSES[variant]
        )}
      >
        {item}
      </span>
    ))}
  </div>
);
