import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

export type ContainerWidth = 'narrow' | 'default' | 'wide' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: ContainerWidth;
  children: ReactNode;
}

/* Container is the ONLY place in the codebase permitted to set max-width or
   horizontal padding. That rule is what gives a page a single left edge; before
   it, twelve home sections hand-rolled their own widths and the content edge
   moved eight times on the way down the page — measured at 2560px, the left edge
   ran 760, 824, 696, 696, 888, 632, 1653, 936, 632, 632, 888, 632.

   The caps keep growing to 4xl. An earlier revision stopped `default` at 1600px,
   which still left ~480px of dead margin per side at 2560px — reviewed on a real
   2560px display and judged too empty. 1920 and 2560 now get separate tiers, so
   the margin lands near 6% per side at 1920 and 10% at 2560 rather than 19%.

   Line length is still protected, but at the paragraph rather than the container:
   prose carries `max-w-[70ch]`, so widening this does not produce 200-character
   lines. Cards and grids are free to use the extra width.

   Supersedes constitution §308 ("always max-w-7xl"), approved 2026-08-19. */
const WIDTH_CLASSES: Record<ContainerWidth, string> = {
  narrow: 'max-w-[56rem] xl:max-w-[60rem] 3xl:max-w-[64rem] 4xl:max-w-[72rem]',
  default:
    'max-w-[80rem] xl:max-w-[84rem] 2xl:max-w-[90rem] 3xl:max-w-[105rem] 4xl:max-w-[128rem]',
  wide:
    'max-w-[88rem] 2xl:max-w-[96rem] 3xl:max-w-[112rem] 4xl:max-w-[136rem]',
  /* No cap — spans the viewport, keeping only the gutter ladder below. For rows
     that are deliberately edge-anchored rather than aligned to the content
     column; the header uses it so the logo sits on the viewport's left edge.
     Body sections must NOT use this: an uncapped section is exactly the
     eight-different-left-edges problem this file exists to prevent. */
  full: 'max-w-none',
};

/* One gutter ladder, replacing the nine different ones the sections had. */
const GUTTER = 'px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12';

export const Container = ({
  width = 'default',
  className,
  children,
  ...rest
}: ContainerProps) => (
  <div
    // Lets the audit harness tell sanctioned padding from stray padding (INV-5).
    data-container={width}
    className={cn('mx-auto w-full', GUTTER, WIDTH_CLASSES[width], className)}
    {...rest}
  >
    {children}
  </div>
);
