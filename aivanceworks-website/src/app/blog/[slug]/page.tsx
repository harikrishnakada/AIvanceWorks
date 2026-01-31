import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/content';
import { constructMetadata } from '@/lib/seo';
import { generateArticleSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { PostContent } from '@/components/blog/PostContent';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { SocialShare } from '@/components/blog/SocialShare';
import { NewsletterCTA } from '@/components/blog/NewsletterCTA';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { CategoryBadge } from '@/components/blog/CategoryBadge';
import { SITE_CONFIG } from '@/lib/constants';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, excerpt, content, image, author, publishedAt, updatedAt, readingTime, category, tags, id } = post;

  // Format date
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Generate Article schema
  const articleSchema = generateArticleSchema({
    headline: title,
    description: excerpt,
    image,
    datePublished: publishedAt,
    dateModified: updatedAt,
    authorName: author.name,
    url: `${SITE_CONFIG.url}/blog/${params.slug}`,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <ReadingProgress />

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-12 lg:py-16 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Blog Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <CategoryBadge category={category} size="md" className="mb-4" />

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-900">{author.name}</div>
                  <div className="text-sm text-gray-600">{author.role}</div>
                </div>
              </div>

              {/* Date & Reading Time */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readingTime} min read
                </div>
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] lg:h-[500px] bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <div className="max-w-3xl">
              <PostContent content={content} />

              {/* Author Bio */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">About the Author</h3>
                <AuthorBio author={author} showFull />
              </div>

              {/* Newsletter CTA (Inline) */}
              <div className="mt-12">
                <NewsletterCTA variant="inline" />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              {/* Table of Contents */}
              <TableOfContents content={content} />

              {/* Social Share */}
              <SocialShare url={`${SITE_CONFIG.url}/blog/${slug}`} title={title} />

              {/* Newsletter CTA (Sidebar) */}
              <NewsletterCTA variant="sidebar" />
            </aside>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentPostId={id} category={category} />
        </div>
      </article>
    </>
  );
}
