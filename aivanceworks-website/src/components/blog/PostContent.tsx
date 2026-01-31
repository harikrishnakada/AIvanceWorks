'use client';

import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface PostContentProps {
  content: any; // Sanity Portable Text array
}

export function PostContent({ content }: PostContentProps) {
  // Custom components for Portable Text blocks
  const components = {
    block: {
      // Normal paragraph
      normal: ({ children }: any) => (
        <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
      ),

      // H2 with ID for table of contents linking
      h2: ({ children, value }: any) => {
        const text = value.children?.map((c: any) => c.text).join('') || '';
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();

        return (
          <h2
            id={id}
            className="scroll-mt-24 text-3xl font-bold text-gray-900 mt-12 mb-6"
          >
            {children}
          </h2>
        );
      },

      // H3 with ID for table of contents
      h3: ({ children, value }: any) => {
        const text = value.children?.map((c: any) => c.text).join('') || '';
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();

        return (
          <h3
            id={id}
            className="scroll-mt-24 text-2xl font-bold text-gray-900 mt-8 mb-4"
          >
            {children}
          </h3>
        );
      },

      // Blockquote
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-blue-500 pl-6 italic my-6 text-gray-700">
          {children}
        </blockquote>
      ),
    },

    list: {
      // Bullet list
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
      ),

      // Numbered list
      number: ({ children }: any) => (
        <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
      ),
    },

    listItem: {
      bullet: ({ children }: any) => <li className="text-gray-700">{children}</li>,
      number: ({ children }: any) => <li className="text-gray-700">{children}</li>,
    },

    marks: {
      // Strong (bold)
      strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,

      // Emphasis (italic)
      em: ({ children }: any) => <em className="italic">{children}</em>,

      // Code (inline)
      code: ({ children }: any) => (
        <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
          {children}
        </code>
      ),

      // Link
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          className="text-blue-600 hover:text-blue-800 underline"
          target={value.href?.startsWith('http') ? '_blank' : undefined}
          rel={value.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
    },

    types: {
      // Image block
      image: ({ value }: any) => {
        if (!value?.asset) return null;

        const imageUrl = urlFor(value.asset).width(1200).url();

        return (
          <figure className="my-8">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={value.alt || ''}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            {value.caption && (
              <figcaption className="text-center text-sm text-gray-600 mt-2">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },

      // Code block
      code: ({ value }: any) => (
        <div className="my-6">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm font-mono">{value.code}</code>
          </pre>
          {value.filename && (
            <div className="text-xs text-gray-500 mt-1">{value.filename}</div>
          )}
        </div>
      ),
    },
  };

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
