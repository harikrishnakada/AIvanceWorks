import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllPosts, getPostsByCategory } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { PostList } from '@/components/blog/PostList';
import { SITE_CONFIG } from '@/lib/constants';

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
  };
}

// Map of category slugs to display names
const categoryMap: Record<string, string> = {
  'ai-development': 'AI Development',
  'cloud-architecture': 'Cloud Architecture',
  'software-engineering': 'Software Engineering',
  'case-studies': 'Case Studies',
  'industry-insights': 'Industry Insights',
};

// Generate static params for all categories
export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({
    category,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = categoryMap[category];

  if (!categoryName) {
    return {};
  }

  return constructMetadata({
    title: `${categoryName} - Blog | Serpent Software`,
    description: `Expert articles and insights on ${categoryName.toLowerCase()} from the Serpent Software team.`,
    canonical: `${SITE_CONFIG.url}/blog/category/${category}`,
    keywords: [categoryName, 'blog', 'technical articles', 'software development'],
  });
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = categoryMap[category];

  if (!categoryName) {
    notFound();
  }

  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 9;

  // Get all posts (for counting other categories) and posts for this category
  const [allPosts, categoryPosts] = await Promise.all([
    getAllPosts(),
    getPostsByCategory(categoryName),
  ]);

  if (categoryPosts.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-body hover:text-text-heading mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1 className="text-4xl font-bold text-text-heading mb-4">{categoryName}</h1>
          <p className="text-xl text-text-body">No articles found in this category yet.</p>
        </div>
      </main>
    );
  }

  // Calculate pagination
  const totalPages = Math.ceil(categoryPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = categoryPosts.slice(startIndex, endIndex);

  // Generate schema markup
  const schema = generateWebPageSchema(
    `${categoryName} Blog`,
    `${SITE_CONFIG.url}/blog/category/${category}`
  );

  // Category descriptions
  const categoryDescriptions: Record<string, string> = {
    'AI Development': 'Practical guides on building AI applications with RAG, LangChain, vector databases, and AI agents. Learn from real-world implementations and best practices.',
    'Cloud Architecture': 'Expert insights on Azure and AWS cloud architecture, migration strategies, cost optimization, and infrastructure as code.',
    'Software Engineering': 'Modern software development practices, framework comparisons, performance optimization, and architectural patterns.',
    'Case Studies': 'Real-world success stories from our client engagements, including technical challenges solved and measurable business outcomes.',
    'Industry Insights': 'Analysis of technology trends, industry developments, and strategic guidance for software development leaders.',
  };

  return (
    <>
      <JsonLd data={schema} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-surface-dark py-16 border-b border-border-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Blog Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-text-light mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category Title */}
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-light mb-4">
                {categoryName}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {categoryDescriptions[categoryName]}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-bold text-2xl text-text-light">{categoryPosts.length}</span>
                  <span className="ml-2">Articles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <PostList
            posts={posts}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </section>

        {/* Other Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-text-heading mb-6">Explore Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(categoryMap)
              .filter(([slug]) => slug !== category)
              .map(([slug, name]) => {
                const count = allPosts.filter((p) => p.category === name).length;
                const colorMap: Record<string, string> = {
                  'ai-development': 'purple',
                  'cloud-architecture': 'blue',
                  'software-engineering': 'green',
                  'case-studies': 'orange',
                  'industry-insights': 'indigo',
                };
                const color = colorMap[slug] || 'gray';

                return (
                  <Link
                    key={slug}
                    href={`/blog/category/${slug}`}
                    className="block p-4 rounded-lg border border-border hover:border-accent hover:shadow-md transition-shadow bg-surface-light"
                  >
                    <div className="font-semibold text-text-heading">{name}</div>
                    <div className="text-sm text-text-body mt-1">{count} articles</div>
                  </Link>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
