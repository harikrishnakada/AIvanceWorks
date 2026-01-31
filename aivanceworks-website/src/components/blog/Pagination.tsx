import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = generatePageNumbers(currentPage, totalPages);

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <Link
        href={currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : '#'}
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-lg border transition-colors',
          currentPage > 1
            ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
            : 'border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none'
        )}
        aria-label="Previous page"
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-gray-500"
              >
                ...
              </span>
            );
          }

          const pageNum = Number(page);
          const isActive = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={`${baseUrl}?page=${pageNum}`}
              className={cn(
                'px-3 py-2 rounded-lg border transition-colors',
                isActive
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              )}
              aria-label={`Page ${pageNum}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      <Link
        href={currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : '#'}
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-lg border transition-colors',
          currentPage < totalPages
            ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
            : 'border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none'
        )}
        aria-label="Next page"
        aria-disabled={currentPage >= totalPages}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </Link>
    </nav>
  );
}

function generatePageNumbers(currentPage: number, totalPages: number): (number | string)[] {
  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    // Show all pages if 7 or fewer
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    // Show pages around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    // Always show last page
    pages.push(totalPages);
  }

  return pages;
}
