import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getHomeFeaturedPosts } from '@/lib/content';
import { PostCard } from '@/components/blog/PostCard';
import { Container, Section } from '@/components/shared/primitives';
import { CARD_GRID_GAP } from '@/lib/section-spacing';

/**
 * Homepage entry point into the blog, sitting directly after the (dark)
 * industries carousel — hence `tone="light"`, so the two don't read as one
 * long slab.
 *
 * Which articles appear here, and in what order, is curated in
 * `src/data/home/featured-articles.ts`. Cards are the same `PostCard` that
 * `/blog` renders, so the two surfaces can't drift.
 */
export async function FeaturedArticlesSection() {
  // The homepage had no CMS dependency before this section; a Sanity outage
  // must not be able to take it down, and an empty blog should render nothing
  // rather than an empty heading.
  let posts;
  try {
    posts = await getHomeFeaturedPosts();
  } catch {
    return null;
  }

  if (posts.length === 0) return null;

  return (
    <Section data-section="home-featured-articles" tone="light">
      <Container>
        {/* Heading left, "all articles" link right on desktop, so the eye
            lands on the cards rather than a centred stack of text. */}
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6 lg:mb-7">
          <div className="max-w-2xl">
            <h2 className="mb-1 text-lg font-black text-gray-900 text-balance sm:mb-2 sm:text-xl md:text-2xl lg:text-3xl">
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
                What We&apos;re{' '}
              </span>
              Writing About
            </h2>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm md:text-base">
              Field notes from the work — architecture decisions, delivery lessons, and the
              engineering behind what we ship.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:self-auto"
          >
            All articles
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </div>

        {/* 3-up on desktop. `items-stretch` (grid default) plus PostCard's
            flex column keeps the meta rows aligned across cards of differing
            title length. */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${CARD_GRID_GAP}`}>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
