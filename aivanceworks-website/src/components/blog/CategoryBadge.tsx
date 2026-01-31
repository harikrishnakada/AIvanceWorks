import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const categoryStyles: Record<string, string> = {
  'AI Development': 'bg-purple-100 text-purple-700 hover:bg-purple-200',
  'Cloud Architecture': 'bg-blue-100 text-blue-700 hover:bg-blue-200',
  'Software Engineering': 'bg-green-100 text-green-700 hover:bg-green-200',
  'Case Studies': 'bg-orange-100 text-orange-700 hover:bg-orange-200',
  'Industry Insights': 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export function CategoryBadge({ category, size = 'md', className }: CategoryBadgeProps) {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
  const colorClass = categoryStyles[category] || 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  return (
    <Link
      href={`/blog/category/${categorySlug}`}
      className={cn(
        'inline-block rounded-full font-medium transition-colors',
        sizeStyles[size],
        colorClass,
        className
      )}
    >
      {category}
    </Link>
  );
}
