/**
 * Markdown Utilities
 * 
 * Functions for reading and processing markdown files from the content directory.
 */

import fs from 'fs';
import path from 'path';

export interface MarkdownMetadata {
  title?: string;
  lastUpdated?: string;
  effectiveDate?: string;
}

/**
 * Read markdown content from a file in the content directory
 * @param filename - The filename relative to the content directory (e.g., 'privacy-policy.md')
 * @returns The markdown content as a string
 */
export async function getMarkdownContent(filename: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'content', filename);
    const content = await fs.promises.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading markdown file: ${filename}`, error);
    throw new Error(`Failed to load content from ${filename}`);
  }
}

/**
 * Extract metadata from markdown content (looks for dates in the first few lines)
 * @param content - The markdown content
 * @returns Metadata object with extracted information
 */
export function extractMarkdownMetadata(content: string): MarkdownMetadata {
  const lines = content.split('\n').slice(0, 10); // Check first 10 lines
  const metadata: MarkdownMetadata = {};

  // Extract title (first H1)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (titleMatch) {
    metadata.title = titleMatch[1];
  }

  // Extract effective date
  const effectiveDateMatch = content.match(/\*\*Effective Date:\*\*\s*(.+)/i);
  if (effectiveDateMatch) {
    metadata.effectiveDate = effectiveDateMatch[1].trim();
  }

  // Extract last updated date
  const lastUpdatedMatch = content.match(/\*\*Last Updated:\*\*\s*(.+)/i);
  if (lastUpdatedMatch) {
    metadata.lastUpdated = lastUpdatedMatch[1].trim();
  }

  return metadata;
}

/**
 * Get file modification time
 * @param filename - The filename relative to the content directory
 * @returns ISO date string of last modification
 */
export async function getFileModificationDate(filename: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'content', filename);
    const stats = await fs.promises.stat(filePath);
    return stats.mtime.toISOString();
  } catch (error) {
    console.error(`Error getting file stats: ${filename}`, error);
    return new Date().toISOString();
  }
}
