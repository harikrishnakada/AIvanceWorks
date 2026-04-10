import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export type IconTileSize = 'sm' | 'md' | 'lg';
export type IconTileVariant = 'brand' | 'accent' | 'surface' | 'glass';

export interface IconTileProps {
  icon: LucideIcon;
  size?: IconTileSize;
  variant?: IconTileVariant;
  className?: string;
}

const SIZE_CLASSES: Record<IconTileSize, string> = {
  sm: 'w-8 h-8 rounded-md [&>svg]:h-4 [&>svg]:w-4',
  md: 'w-12 h-12 rounded-xl [&>svg]:h-6 [&>svg]:w-6',
  lg: 'w-14 h-14 rounded-xl [&>svg]:h-7 [&>svg]:w-7',
};

const VARIANT_CLASSES: Record<IconTileVariant, string> = {
  brand: 'bg-brand-50 text-brand-600',
  accent: 'bg-accent-50 text-accent-500',
  surface: 'bg-surface-warm text-text-heading',
  glass:
    'bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] text-brand-400 backdrop-blur-sm',
};

export const IconTile = ({
  icon: Icon,
  size = 'md',
  variant = 'brand',
  className,
}: IconTileProps) => (
  <div
    className={cn(
      'inline-flex items-center justify-center',
      SIZE_CLASSES[size],
      VARIANT_CLASSES[variant],
      className
    )}
  >
    <Icon aria-hidden="true" />
  </div>
);
