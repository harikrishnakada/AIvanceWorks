import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/types';
import { CategoryBadge } from './CategoryBadge';

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const { slug, title, excerpt, image, author, publishedAt, readingTime, category } = post;

  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article
      className={`
        group relative flex flex-col bg-white rounded-xl border border-gray-200
        overflow-hidden transition-all duration-300
        hover:shadow-lg hover:border-gray-300
        ${featured ? 'lg:flex-row lg:gap-8' : ''}
      `}
    >
      {/* Featured Image */}
      <Link
        href={`/blog/${slug}`}
        className={`
          relative overflow-hidden
          ${featured ? 'lg:w-1/2' : 'aspect-[16/9]'}
        `}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={featured ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        />
      </Link>

      {/* Content */}
      <div className={`flex flex-col p-6 ${featured ? 'lg:w-1/2 lg:py-8' : ''}`}>
        {/* Category Badge */}
        <CategoryBadge category={category} size="sm" className="mb-3" />

        {/* Title */}
        <Link
          href={`/blog/${slug}`}
          className="group/title"
        >
          <h3
            className={`
              font-bold text-gray-900 line-clamp-2 mb-3
              group-hover/title:text-blue-600 transition-colors
              ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}
            `}
          >
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-4 flex-grow ${featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Author */}
          <div className="flex items-center gap-3">
            <Image
              src={author.image}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-sm">
              <div className="font-medium text-gray-900">{author.name}</div>
              <div className="text-gray-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </div>
            </div>
          </div>

          {/* Reading Time */}
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min</span>
          </div>
        </div>
      </div>
    </article>
  );
}
