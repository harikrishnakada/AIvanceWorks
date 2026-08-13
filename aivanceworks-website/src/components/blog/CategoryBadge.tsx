import Link from 'next/link';
import { getBlogCategoryByName } from '@/lib/blog-categories';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export function CategoryBadge({ category, size = 'md', className }: CategoryBadgeProps) {
  const known = getBlogCategoryByName(category);
  const categorySlug = known?.slug ?? category.toLowerCase().replace(/\s+/g, '-');
  const colorClass = known?.badge ?? 'bg-gray-100 text-gray-700 hover:bg-gray-200';

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
