import { cn } from '@/lib/utils';

export interface Metric {
  value: string;
  label: string;
  description?: string;
}

export interface MetricsCardProps {
  metrics: Metric[];
  title?: string;
  className?: string;
}

export const MetricsCard = ({ metrics, title, className }: MetricsCardProps) => (
  <div
    className={cn(
      'bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-2xl p-6 md:p-8 backdrop-blur-sm',
      className
    )}
  >
    {title && (
      <h3 className="text-lg md:text-xl font-semibold text-text-light mb-5 md:mb-6">
        {title}
      </h3>
    )}
    <div className="grid grid-cols-1 gap-5 md:gap-6">
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
            <span className="text-base md:text-lg font-bold text-text-light leading-tight text-center px-1">
              {metric.value}
            </span>
          </div>
          <div>
            <div className="font-semibold text-text-light">{metric.label}</div>
            {metric.description && (
              <div className="text-sm text-text-subtle mt-1">{metric.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
