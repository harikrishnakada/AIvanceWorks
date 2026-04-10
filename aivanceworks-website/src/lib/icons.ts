import * as LucideIcons from 'lucide-react';
import { HelpCircle, type LucideIcon } from 'lucide-react';

/**
 * Resolves a Lucide icon by name. Returns HelpCircle if not found,
 * so pages don't crash on typos — the missing icon is visually obvious.
 */
export function getLucideIcon(name: string): LucideIcon {
  // `lucide-react` exports every icon as a named export. The star
  // import surfaces them all as an indexable object.
  const icon = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
  return icon ?? HelpCircle;
}
