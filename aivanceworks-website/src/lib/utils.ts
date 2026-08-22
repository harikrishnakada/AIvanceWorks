import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/* tailwind-merge resolves conflicts by class GROUP, and it infers groups from
   Tailwind's built-in scale names. Our fluid font sizes (text-h2, text-lead,
   text-copy, …) are custom `--text-*` theme tokens, so out of the box tw-merge
   cannot tell them from text COLOUR utilities — both look like `text-<word>`.
   It therefore treated `cn('text-lead', 'text-text-muted')` as two competing
   colours and silently dropped the font size, so headings and leads rendered at
   the inherited 16px with no error anywhere.

   Registering them under `font-size` makes the grouping explicit: a size and a
   colour no longer conflict, and two sizes still correctly override. */
const FONT_SIZES = [
  'display',
  'h1',
  'h2',
  'h3',
  'h4',
  'lead',
  'copy',
  'copy-sm',
  'label',
] as const;

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: [...FONT_SIZES] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(d);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
