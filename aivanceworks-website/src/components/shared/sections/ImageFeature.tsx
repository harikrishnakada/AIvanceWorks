import Image from 'next/image';
import { Section, Container } from '@/components/shared/primitives';
import { cn } from '@/lib/utils';
import type { ImageFeatureData } from '@/types/pages';

export interface ImageFeatureProps {
  features: ImageFeatureData[];
  tone?: 'light' | 'warm';
  className?: string;
  /* Overrides the vertical gap BETWEEN the stacked feature rows. Defaults to the
     gap-16 md:gap-20 rhythm every solution page uses; the home page tightens it
     because this section sits between two already-dense sections there. */
  stackClassName?: string;
  /* Overrides the description's type scale. Defaults to `text-lead`, which is
     the right weight on a solution page where this section carries the page's
     main argument. The home page passes the body scale instead so these two
     features read at the same size as the surrounding home sections rather than
     as the largest paragraphs on the page. Merged through `cn`, and `font-size`
     is a registered class group in lib/utils, so a passed size correctly
     replaces the default instead of stacking with it. */
  descriptionClassName?: string;
}

export const ImageFeature = ({
  features,
  tone = 'light',
  className,
  stackClassName,
  descriptionClassName,
}: ImageFeatureProps) => (
  <Section data-section="image-feature" tone={tone} size="md" className={className}>
    <Container>
      <div className={cn('flex flex-col gap-16 md:gap-20', stackClassName)}>
        {features.map((feature, idx) => {
          const reverse = idx % 2 !== 0;
          return (
            <div
              key={idx}
              className={cn(
                /* The split starts at lg, not md. At 768-1023px two columns are
                   only ~336px wide each: the 3:2 image shrank to 224px tall
                   while the copy beside it ran to ~460px, so every row was a
                   postage-stamp photo with 200px+ of dead white under it next to
                   a narrow column of text. Tablets now keep the stacked layout —
                   full-width photo, full-measure copy — which is the reading the
                   phone layout already got right.

                   items-stretch from lg up (the grid default, stated here for
                   intent), replacing a former items-start. It exists so the COPY
                   column can be as tall as the row and centre its text in it;
                   the photo opts out with `self-center`, because stretching a
                   box that carries an aspect-ratio would crop it. Top-aligning
                   was the original defect: at 1920px the copy was 271px against
                   a 592px image and all 321px of that difference became one void
                   under the text.

                   The row spans the Container, with NO max-width of its own —
                   every other section on the page lands on the gutter (Container
                   `default` is a gutter, not a cap; see Container.tsx), and a
                   78rem cap here made this the one section that pulled 336px
                   inboard of that shared edge at 1920px. */
                'grid gap-8 md:gap-12 items-start lg:items-stretch',
                'lg:grid-cols-2',
                reverse && 'lg:[&>*:first-child]:order-2'
              )}
            >
              {/* The former md:pt-4 lg:pt-6 is gone: it was an optical nudge to
                  settle the heading's cap-height against the image's rounded top
                  edge, and the image now takes ITS height from this column, so
                  there is nothing to nudge against.

                  lg:justify-center only matters when the photo is the taller of
                  the two columns — its min-height floor winning on a short-copy
                  page (the solution pages run ~160px of text), or its ratio at
                  lg where the frame is still width-driven. This column is
                  stretched to match it, so the text centres in the row instead of
                  sitting at the top of it. When the copy is taller, it is a
                  no-op.

                  The measure cap is a readability floor, not decoration. The
                  column is half the container, which at 1920px is 888px — 88ch
                  of body copy, well past the 75ch the responsive audit's INV-6
                  asserts. Capping the text (not the column) keeps the line
                  length readable and leaves the surplus as breathing room
                  beside the photo.

                  It starts at md rather than lg because the row is STACKED from
                  768-1023px now: the copy has the whole 720px container to
                  itself there, which measured 78ch and failed INV-6 on its own.
                  Below md the container is narrow enough that the cap never
                  binds.

                  The cap RISES at 3xl. 60ch left 282px of unused column at
                  1920px and 602px at 2560px, and that unused width was the
                  larger half of the gap between the copy and the photo. 74ch
                  keeps a full ch of headroom under INV-6's 75ch limit while
                  reclaiming ~141px of it; the photo reclaims its own half by
                  filling its column (see the frame below). 2560px still leaves a
                  wide gap — a readable measure simply cannot span a 1208px
                  column — and that is the one width where capping the row would
                  read better than stretching the content. */}
              <div className="md:max-w-[60ch] 3xl:max-w-[74ch] lg:flex lg:flex-col lg:justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-4 tracking-tight">
                  {feature.heading}
                </h3>
                <p
                  className={cn(
                    'text-lead text-text-body leading-relaxed',
                    descriptionClassName
                  )}
                >
                  {feature.description}
                </p>
              </div>
              {/* THE FRAME IS NEVER A CROP. Its ratio is the asset's own
                  (`width`/`height` from the data, applied inline so it holds at
                  every breakpoint), which leaves object-cover nothing to trim,
                  and object-contain below is the belt to that braces: if a
                  future asset ships without dimensions, or a very tall copy
                  column pushes the computed width into `max-w-full`, the photo
                  letterboxes inside the frame instead of losing its edges. The
                  3:2 class is only the no-dimensions fallback — the inline style
                  wins whenever the data carries real ones.

                  The frame is WIDTH-driven at every size: it fills its column
                  and the ratio sets the height. That is what closes the gap
                  between the columns — the measured gap was
                  `textLeftover + 48 + photoLeftover`, and a height-driven frame
                  (sized to the text, so 672px wide in an 888px column at
                  1920px) was contributing 96-248px of that on its own at every
                  desktop width. Filling the column takes the photo's half of the
                  gap to zero, and the text's measure tiers above take most of
                  the rest: the visual gap goes 144→48 at 1280, 274→98 at 1440,
                  546→189 at 1920.

                  `self-center` is what makes width-driven work in a stretch row:
                  a stretch item carrying an aspect-ratio gets pulled taller than
                  its ratio, which is a crop by another name. Centred, the frame
                  keeps its own height and sits level with the text whichever of
                  the two is shorter (the photo at lg, the text from xl up, where
                  the copy column centres its own text — see above).

                  The trade this makes, stated plainly: sizing by width means the
                  photo is again taller than the text block from 1280px up (592px
                  against ~310px of copy at 1920px). Height-driven sizing is the
                  only way to match them, and it cannot also close the gap while
                  the row spans the gutter — the leftover has to land somewhere.
                  To go back to a text-height photo, restore
                  `xl:self-stretch xl:h-full xl:w-auto xl:max-w-full
                  xl:justify-self-end` plus min-h floors, and expect the gap
                  back. */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2] lg:self-center"
                style={
                  feature.image.width && feature.image.height
                    ? { aspectRatio: `${feature.image.width} / ${feature.image.height}` }
                    : undefined
                }
              >
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  className="object-contain"
                  /* Full container width while stacked, half the row once the
                     columns split at 1024px. */
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
