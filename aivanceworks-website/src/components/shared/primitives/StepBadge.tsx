import { cn } from '@/lib/utils';

export interface StepBadgeProps {
  step: number;
  variant?: 'default' | 'inverse';
  className?: string;
}

export const StepBadge = ({
  step,
  variant = 'default',
  className,
}: StepBadgeProps) => {
  const styles =
    variant === 'inverse'
      ? 'bg-brand-500 text-text-light shadow-brand-badge'
      : 'bg-brand-600 text-text-light';

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full text-sm md:text-base font-bold flex-shrink-0',
        styles,
        className
      )}
    >
      {step}
    </div>
  );
};
