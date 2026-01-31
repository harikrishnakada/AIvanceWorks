import { BlogPost } from '@/types';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';

interface PostListProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  postsPerPage?: number;
}

export function PostList({
  posts,
  currentPage,
  totalPages,
}: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600 text-lg">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl="/blog"
          />
        </div>
      )}
    </div>
  );
}
