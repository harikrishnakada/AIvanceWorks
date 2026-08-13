import { Cloud, Code2, Compass, Cpu, LineChart, type LucideIcon } from 'lucide-react';

/**
 * Single source of truth for blog categories.
 *
 * The category list previously lived in three places — the inline grid on
 * `/blog`, the colour map in `CategoryBadge`, and the slug→name map in
 * `/blog/category/[category]` — which is how a category can exist in one and
 * not the others. Everything now reads from here.
 *
 * Tailwind class strings are written out in full on purpose: the old blog page
 * built them with `from-${color}-50`, which Tailwind's scanner never sees, so
 * the gradients silently never rendered.
 */
export interface BlogCategory {
  /** Display name — must match the `category` field stored on a post. */
  name: string;
  /** URL segment under /blog/category/. */
  slug: string;
  /** One line on what a reader finds in this category. */
  description: string;
  icon: LucideIcon;
  /** Icon tile — fixed hue so a category keeps its identity across themes. */
  tile: string;
  /** Feature-card wash, paired with `tile`. */
  wash: string;
  /** Badge colours for CategoryBadge. */
  badge: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: 'AI Development',
    slug: 'ai-development',
    description:
      'Agents, RAG pipelines, evaluation, and what it actually takes to run a model in production.',
    icon: Cpu,
    tile: 'bg-purple-100 text-purple-700',
    wash: 'from-purple-50/70',
    badge: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
  },
  {
    name: 'Cloud Architecture',
    slug: 'cloud-architecture',
    description: 'Azure design patterns, migration paths, and keeping cloud spend honest.',
    icon: Cloud,
    tile: 'bg-blue-100 text-blue-700',
    wash: 'from-blue-50/70',
    badge: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
  },
  {
    name: 'Software Engineering',
    slug: 'software-engineering',
    description: 'Architecture, testing, and delivery practice that survives a growing team.',
    icon: Code2,
    tile: 'bg-emerald-100 text-emerald-700',
    wash: 'from-emerald-50/70',
    badge: 'bg-green-100 text-green-700 hover:bg-green-200',
  },
  {
    name: 'Case Studies',
    slug: 'case-studies',
    description: 'How we shipped it — the constraints, the decisions, the measured result.',
    icon: LineChart,
    tile: 'bg-orange-100 text-orange-700',
    wash: 'from-orange-50/70',
    badge: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
  },
  {
    name: 'Industry Insights',
    slug: 'industry-insights',
    description: 'What is shifting in regulated, data-heavy industries — and why it matters.',
    icon: Compass,
    tile: 'bg-indigo-100 text-indigo-700',
    wash: 'from-indigo-50/70',
    badge: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
  },
];

/** Slug → display name, for route params. */
export const BLOG_CATEGORY_NAME_BY_SLUG: Record<string, string> = Object.fromEntries(
  BLOG_CATEGORIES.map((category) => [category.slug, category.name])
);

export function getBlogCategoryByName(name: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((category) => category.name === name);
}

/** Article count per category name, from a list of posts. */
export function countPostsByCategory(posts: { category: string }[]): Record<string, number> {
  return BLOG_CATEGORIES.reduce<Record<string, number>>((counts, category) => {
    counts[category.name] = posts.filter((post) => post.category === category.name).length;
    return counts;
  }, {});
}
