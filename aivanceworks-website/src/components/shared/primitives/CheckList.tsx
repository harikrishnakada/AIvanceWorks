import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

export interface CheckListProps {
  items: string[];
  variant?: 'default' | 'inverse';
  className?: string;
}

export const CheckList = ({
  items,
  variant = 'default',
  className,
}: CheckListProps) => {
  const textColor =
    variant === 'inverse' ? 'text-text-light' : 'text-text-body';
  const iconColor =
    variant === 'inverse' ? 'text-brand-400' : 'text-brand-600';

  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle2
            aria-hidden="true"
            className={cn('h-5 w-5 mt-0.5 flex-shrink-0', iconColor)}
          />
          <span className={cn('leading-relaxed', textColor)}>{item}</span>
        </li>
      ))}
    </ul>
  );
};
