import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => (
  <nav
    aria-label="Breadcrumb"
    className={cn('bg-surface-warm border-b border-border-light', className)}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <ol className="flex items-center space-x-2 text-sm overflow-x-auto">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center flex-shrink-0">
              {idx > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 text-text-muted mx-2"
                />
              )}
              {isLast ? (
                <span className="text-text-heading font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-text-muted hover:text-text-heading transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </nav>
);
