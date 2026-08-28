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

   `default` is now the GUTTER, not a cap. The tiered ladder it used to carry
   (80/84/90/105/128rem) stopped binding anywhere useful and only cost margin at
   the top end: measured against the header's brand mark, which rides the gutter,
   body content started 65px inboard of it at 1920px and 200px at 2560px. One
   page reading with two different left edges — nav at 48, content at 248 — is
   the same defect this file exists to fix, just expressed vertically.

   So the single cap is 160rem = 2560px — the 4xl breakpoint itself, and a
   BORDER-box value, so it bounds the gutters too rather than the text column
   inside them (capping at 2464 instead re-centred the box and put content back
   at x=88). Below 2560 it never binds, so every section lands on the gutter and
   shares the header's edge. Past 2560 it holds, because the gutter ladder tops
   out at 48px and an uncapped grid on a 5120px display would stretch three cards
   to ~1650px each. Raise this only alongside a wider gutter tier.

   Line length is still protected, but at the paragraph rather than the container:
   prose carries `max-w-[70ch]` (and ~180 sibling `max-w-*` paragraph bounds), so
   widening this does not produce 200-character lines. Cards and grids are free to
   use the extra width.

   Supersedes constitution §308 ("always max-w-7xl"), approved 2026-08-19.
   Gutter alignment approved 2026-08-24 — see constitution changelog v2.3. */
const WIDTH_CLASSES: Record<ContainerWidth, string> = {
  narrow: 'max-w-[56rem] xl:max-w-[60rem] 3xl:max-w-[64rem] 4xl:max-w-[72rem]',
  default: 'max-w-[160rem]',
  /* Retained as an alias: once `default` reaches the gutter there is no width
     left to be wider than it, and the two call sites reading `wide` are asking
     for exactly that edge. Kept rather than removed so those sites keep
     compiling and keep stating their intent. */
  wide: 'max-w-[160rem]',
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
