/**
 * Sanity Client Configuration
 *
 * IMPORTANT: This file should ONLY be imported in src/lib/content.ts
 * Never import this directly in components or pages.
 * This isolation enables easy CMS migration in the future.
 */

import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = '2024-01-01';

if (!projectId || !dataset) {
  throw new Error(
    'Missing Sanity project ID or dataset. Please check your environment variables.'
  );
}

// Create Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for faster reads
  perspective: 'published', // Only fetch published documents
});

// Image URL builder for optimized images
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

/**
 * Helper to get image URL with specific dimensions
 * @example getImageUrl(post.image, 1200, 630)
 */
export function getImageUrl(source: any, width?: number, height?: number) {
  let urlBuilder = builder.image(source);

  if (width) {
    urlBuilder = urlBuilder.width(width);
  }

  if (height) {
    urlBuilder = urlBuilder.height(height);
  }

  return urlBuilder.url();
}
