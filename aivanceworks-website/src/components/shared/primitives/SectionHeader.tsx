import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/* The eyebrow / h2 / lead trio was hand-rolled in twelve home sections with
   twelve different sets of classes and — the real damage — with its own
   max-width. That is what put the "Custom Software Development Services" heading
   inside a 768px box above cards spanning 2545px: the label sat ~830px further in
   than the content it introduced, so the two read as unrelated components.

   So this component carries NO width cap. It inherits the section's Container,
   which means a header always spans the same edges as the content beneath it
   (constitution supersession 4, approved 2026-08-19).

   The one width constraint is 70ch on the lead PARAGRAPH — that limits line
   length, which is a readability rule, without moving the block's edges. */
export const SectionHeader = ({
  eyebrow,
  title,
  lead,
  align = 'center',
  className,
}: SectionHeaderProps) => (
  <div
    className={cn(
      'flex flex-col gap-3 md:gap-4',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
      className
    )}
  >
    {eyebrow && (
      <span className="text-label font-semibold uppercase tracking-[0.18em] text-brand-600">
        {eyebrow}
      </span>
    )}
    <h2 className="text-h2 font-bold tracking-tight text-balance">{title}</h2>
    {lead && (
      <p
        className={cn(
          'text-lead text-text-muted text-pretty',
          // Line-length control only. Not a container: it does not move the
          // header's edges, it just stops prose running to 424 characters.
          'max-w-[70ch]',
          align === 'center' && 'mx-auto'
        )}
      >
        {lead}
      </p>
    )}
  </div>
);
