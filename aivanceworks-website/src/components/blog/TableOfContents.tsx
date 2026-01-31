'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: any; // Sanity Portable Text array
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCHeading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from content
    const extracted = extractHeadings(content);
    setHeadings(extracted);

    // Set up intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0.5,
      }
    );

    // Observe all heading elements
    const headingElements = document.querySelectorAll('h2[id], h3[id]');
    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-24 bg-white rounded-lg border border-gray-200 p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
        Table of Contents
      </h4>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              heading.level === 3 && 'ml-4'
            )}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={cn(
                'block text-sm py-1.5 border-l-2 pl-3 transition-colors',
                activeId === heading.id
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function extractHeadings(content: any): TOCHeading[] {
  if (!content || !Array.isArray(content)) return [];

  const headings: TOCHeading[] = [];

  content.forEach((block: any) => {
    // Check if block is a heading (h2 or h3)
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      const text = block.children
        ?.filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join('') || '';

      const id = generateId(text);
      const level = block.style === 'h2' ? 2 : 3;

      headings.push({ id, text, level });
    }
  });

  return headings;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
