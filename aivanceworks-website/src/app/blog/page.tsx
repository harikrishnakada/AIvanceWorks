import { Metadata } from 'next';
import { getAllPosts } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { generateWebPageSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { PostList } from '@/components/blog/PostList';
import { BlogCategoryCards } from '@/components/blog/BlogCategoryCards';
import { countPostsByCategory } from '@/lib/blog-categories';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Blog - AI & Cloud Development Insights',
  description: `Expert insights on AI agents, RAG frameworks, Azure cloud, and modern software development from the ${SITE_CONFIG.name} team.`,
  canonical: `${SITE_CONFIG.url}/blog`,
  keywords: [
    'AI development blog',
    'cloud architecture',
    'software consulting',
    'RAG frameworks',
    'Azure tutorials',
    'LangChain guides',
    'vector databases',
  ],
});

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 9;

  // Get all posts
  const allPosts = await getAllPosts();

  // Calculate pagination
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);

  // Generate schema markup
  const schema = generateWebPageSchema('Blog', `${SITE_CONFIG.url}/blog`);

  return (
    <>
      <JsonLd data={schema} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section data-section="blog-hero" className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Blog & Insights
              </h1>
              <p className="text-xl text-gray-600">
                Expert insights on AI development, cloud architecture, and modern software engineering from our team of specialists.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div>
                  <span className="font-bold text-2xl text-gray-900">{allPosts.length}</span>
                  <span className="ml-2">Articles</span>
                </div>
                <div>
                  <span className="font-bold text-2xl text-gray-900">10K+</span>
                  <span className="ml-2">Monthly Readers</span>
                </div>
                <div>
                  <span className="font-bold text-2xl text-gray-900">3</span>
                  <span className="ml-2">Expert Authors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section data-section="blog-posts-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* The post titles are <h3>. Without a heading here they followed the
              page <h1> directly and skipped a level (heading-order). */}
          <h2 className="sr-only">Latest articles</h2>
          <PostList
            posts={posts}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </section>

        {/* Categories Section — same cards the homepage renders, via
            BlogCategoryCards. The previous inline grid built its gradient
            classes as `from-${color}-50`, which Tailwind's scanner never
            emits, so those washes never rendered. */}
        <section data-section="blog-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <BlogCategoryCards counts={countPostsByCategory(allPosts)} />
        </section>
      </main>
    </>
  );
}
