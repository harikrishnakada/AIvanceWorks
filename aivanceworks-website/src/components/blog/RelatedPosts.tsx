import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { getRelatedPosts } from '@/lib/content';
import { CategoryBadge } from './CategoryBadge';

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
  limit?: number;
}

export async function RelatedPosts({ currentPostId, category, limit = 3 }: RelatedPostsProps) {
  const relatedPosts = await getRelatedPosts(currentPostId, category, limit);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
        <Link
          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          View all {category}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Link>

            {/* Content */}
            <div className="p-6">
              <CategoryBadge category={post.category} size="sm" className="mb-3" />

              <Link href={`/blog/${post.slug}`} className="group/title">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover/title:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </Link>

              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author.name}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
