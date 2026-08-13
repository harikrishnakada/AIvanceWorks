import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_CATEGORIES } from '@/lib/blog-categories';
import { cn } from '@/lib/utils';

interface BlogCategoryCardsProps {
  /** Article count keyed by category display name. See `countPostsByCategory`. */
  counts?: Record<string, number>;
  className?: string;
}

/**
 * The five blog categories as a card set — one lead card carrying the weight,
 * four supporting cards in a 2×2 beside it. Deliberately not five equal boxes:
 * the reading order is the point.
 *
 * Shared by the homepage section and `/blog`, so the two never drift.
 */
export function BlogCategoryCards({ counts, className }: BlogCategoryCardsProps) {
  const [lead, ...rest] = BLOG_CATEGORIES;

  return (
    <ul
      className={cn(
        'grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6',
        className
      )}
    >
      {/* Lead card — full height of the 2×2 beside it on desktop. */}
      <li className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
        <Link
          href={`/blog/category/${lead.slug}`}
          className={cn(
            'group flex h-full flex-col rounded-2xl border border-border-light bg-gradient-to-br to-surface-white',
            'p-6 lg:p-7 shadow-card-sm transition-[box-shadow,border-color,transform] duration-300 ease-out',
            'hover:-translate-y-0.5 hover:border-border-hover hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
            lead.wash
          )}
        >
          {/* Icon pinned top, text block pinned bottom — the lead card is
              taller than its content, so the slack goes between them on
              purpose instead of pooling as a gap mid-card. */}
          <span
            className={cn(
              'mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl [&>svg]:h-6 [&>svg]:w-6 lg:mb-auto',
              lead.tile
            )}
          >
            <lead.icon aria-hidden="true" />
          </span>

          <h3 className="text-xl font-semibold leading-snug text-text-heading lg:mt-8 lg:text-2xl">
            {lead.name}
          </h3>
          <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-text-body lg:text-base">
            {lead.description}
          </p>

          <span className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-700">
            <CountLabel count={counts?.[lead.name]} />
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </span>
        </Link>
      </li>

      {rest.map((category) => (
        <li key={category.slug} className="lg:col-span-2">
          <Link
            href={`/blog/category/${category.slug}`}
            className={cn(
              'group flex h-full flex-col rounded-2xl border border-border-light bg-surface-white',
              'p-5 shadow-card-sm transition-[box-shadow,border-color,transform] duration-300 ease-out',
              'hover:-translate-y-0.5 hover:border-border-hover hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg [&>svg]:h-[1.125rem] [&>svg]:w-[1.125rem]',
                  category.tile
                )}
              >
                <category.icon aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold leading-snug text-text-heading">
                {category.name}
              </h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-text-body">{category.description}</p>

            <span className="mt-auto flex items-center gap-2 pt-4 text-xs font-medium text-brand-700">
              <CountLabel count={counts?.[category.name]} />
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Counts come from the CMS, so zero and "not passed" are both real states —
 * neither should render as a bare "0 articles" dead end.
 */
function CountLabel({ count }: { count?: number }) {
  if (count === undefined) return <>Browse category</>;
  if (count === 0) return <>Coming soon</>;
  return (
    <>
      {count} {count === 1 ? 'article' : 'articles'}
    </>
  );
}
