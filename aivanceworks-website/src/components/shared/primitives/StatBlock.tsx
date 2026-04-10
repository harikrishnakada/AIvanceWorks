import { cn } from '@/lib/utils';

export interface StatBlockProps {
  value: string;
  label: string;
  description?: string;
  variant?: 'default' | 'inverse';
  className?: string;
}

export const StatBlock = ({
  value,
  label,
  description,
  variant = 'default',
  className,
}: StatBlockProps) => {
  const valueColor =
    variant === 'inverse'
      ? 'text-text-light'
      : 'bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent';

  const labelColor =
    variant === 'inverse' ? 'text-text-light' : 'text-text-heading';

  const descColor =
    variant === 'inverse' ? 'text-text-subtle' : 'text-text-muted';

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className={cn('text-3xl md:text-4xl font-extrabold leading-none', valueColor)}>
        {value}
      </div>
      <div className={cn('text-sm md:text-base font-semibold', labelColor)}>
        {label}
      </div>
      {description && (
        <div className={cn('text-xs md:text-sm max-w-[28ch]', descColor)}>
          {description}
        </div>
      )}
    </div>
  );
};
