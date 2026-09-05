'use client';

import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NAV_MENUS, type NavMenuKey } from '@/lib/navigation';
import { resolveIcon, ArrowRight, LayoutGrid } from './nav-icons';

/**
 * Layout per column COUNT — the panel used to hard-code `lg:grid-cols-4` and a
 * 1600px card, so a menu with three groups (Solutions after Life Sciences was
 * hidden, and Services) rendered a fourth empty cell and a stranded trailing
 * rule. Both the track count and the card width now follow the real count.
 *
 * Class strings are written out literally because Tailwind scans source text:
 * a composed `lg:grid-cols-${n}` would never make it into the stylesheet.
 *
 * Separators are per-child rather than `divide-*`: on a grid that WRAPS,
 * `divide-y` puts a rule above every child but the first, which lands a stray
 * rule mid-row. These target the real edges — right edge of each non-final
 * column, bottom edge of each non-final row. At `sm` (2-up) an odd count leaves
 * the last child alone in its row, so its right border is excluded too.
 */
const WRAPPING_SEPARATORS =
  '[&>*]:border-gray-100 [&>*:not(:last-child)]:border-b ' +
  'sm:[&>*]:border-b-0 sm:[&>*:nth-child(-n+2)]:border-b ' +
  'sm:[&>*:nth-child(odd):not(:last-child)]:border-r ' +
  'lg:[&>*]:border-b-0 lg:[&>*:not(:last-child)]:border-r';

/**
 * `anchored` places the card under the trigger that opened it instead of in the
 * middle of the viewport.
 *
 * Centring is right for a card wide enough to read as a full-width shelf: it
 * spans most of the row, so the trigger is inside it either way. It is wrong for
 * a narrow one — the Enterprise menu is a single column in a 448px card, and
 * centred at 1920 it floated ~600px away from the "Enterprise" label with
 * nothing connecting the two. The 1240/1600px cards stay centred; at the widths
 * where they render they are close to the row's full width already, and
 * anchoring one would only push it off the far edge and clamp it back.
 */
const PANEL_LAYOUTS = {
  // A lone column reads as a plain dropdown and would look stranded across a
  // wide card, so it gets a narrow one and no separators at all.
  1: { grid: 'grid-cols-1', width: 'max-w-md', anchored: true },
  2: { grid: `grid-cols-1 sm:grid-cols-2 ${WRAPPING_SEPARATORS}`, width: 'max-w-[900px]', anchored: true },
  3: { grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${WRAPPING_SEPARATORS}`, width: 'max-w-[1240px]', anchored: false },
  4: { grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${WRAPPING_SEPARATORS}`, width: 'max-w-[1600px]', anchored: false },
} as const;

/** Five or more groups keep the 4-up layout and wrap onto a second row. */
function panelLayout(columnCount: number) {
  const key = Math.min(Math.max(columnCount, 1), 4) as keyof typeof PANEL_LAYOUTS;
  return PANEL_LAYOUTS[key];
}

/**
 * The panel is server-rendered (see the always-in-the-DOM note below), and React
 * warns about `useLayoutEffect` during SSR. It never runs on the server anyway,
 * so pick the one that exists at the point it's actually used: layout timing on
 * the client, where it places the card before paint, and a no-op on the server.
 */
const useAnchorEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

interface NavMegaPanelProps {
  menu: NavMenuKey;
  isOpen: boolean;
  /**
   * The trigger button this panel belongs to, read lazily. A getter rather than
   * a ref object because Header keeps all the triggers in one mutable map — and
   * because the element only needs to exist at the moment the panel opens.
   */
  getTrigger?: () => HTMLElement | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

/**
 * One mega-menu panel, rendered from a `NAV_MENUS` entry.
 *
 * This replaced four hand-copied panel blocks in Header that had drifted apart —
 * different grid rules, different height handling, the same 90 lines of link
 * markup four times over. Adding a dropdown is now an entry in NAV_MENUS plus a
 * `type: 'dropdown'` row in NAVIGATION.main; no JSX.
 *
 * The panel is ALWAYS in the DOM and shown/hidden with CSS, never mounted
 * conditionally. Rendering only while open meant the server HTML contained zero
 * links to the ~36 service, solution and industry pages — the nav was invisible
 * to crawlers and those pages had no internal anchor text at all. `display:none`
 * content is still parsed and indexed, and it keeps the links out of the tab
 * order while closed, so no `inert` handling is needed.
 */
export function NavMegaPanel({
  menu,
  isOpen,
  getTrigger,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: NavMegaPanelProps) {
  const { columns, cta, viewAll } = NAV_MENUS[menu];

  const { grid: gridClass, width: widthClass, anchored } = panelLayout(columns.length);

  const cardRef = useRef<HTMLDivElement>(null);
  // Left offset in px for an anchored panel, or null for "not measured yet",
  // which falls back to `mx-auto`. Measuring can only happen once the panel is
  // visible, so the very first frame of an open is centred; the layout effect
  // corrects it before paint.
  const [offset, setOffset] = useState<number | null>(null);

  useAnchorEffect(() => {
    if (!anchored || !isOpen) return;

    const place = () => {
      const trigger = getTrigger?.();
      const card = cardRef.current;
      if (!trigger || !card) return;

      // The card carries its own horizontal padding (px-4/md:px-6); subtracting
      // it lines the card's visible edge up with the trigger's box, not with the
      // padding around it.
      const pad = parseFloat(getComputedStyle(card).paddingLeft) || 0;
      const width = card.offsetWidth;
      const gutter = 16;
      // Clamp so a trigger near the right edge (Contact is last, but Solutions
      // is far right at md) doesn't push the card off-screen. The clamp is
      // stable under re-measure: the card's width can't shrink below `width`
      // once placed, because the clamp always leaves it that much room.
      const max = Math.max(gutter, window.innerWidth - width - gutter);
      setOffset(Math.min(Math.max(trigger.getBoundingClientRect().left - pad, gutter), max));
    };

    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [anchored, isOpen, getTrigger]);

  // Drop the measurement on close so a menu re-opened after a layout change
  // (a resize while closed, a font swap) re-measures rather than reusing a
  // stale offset for a frame.
  useEffect(() => {
    if (!isOpen) setOffset(null);
  }, [isOpen]);

  return (
    <div
      data-dropdown={menu}
      className={`fixed top-16 md:top-18 lg:top-20 left-0 right-0 z-40 ${
        isOpen ? 'hidden md:block' : 'hidden'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 top-16 md:top-18 lg:top-20 bg-black/30 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
        <div
          ref={cardRef}
          className={`${widthClass} ${offset === null ? 'mx-auto' : 'mr-auto'} px-4 md:px-6 pt-2 md:pt-3`}
          style={offset === null ? undefined : { marginLeft: offset }}
        >
          {/* Columns of 5-12 links each can outgrow a laptop viewport once the
              grid drops to 2-up, so the card is height-capped and scrolls its own
              overflow instead of running off the bottom of the screen. */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden flex flex-col max-h-[calc(100vh-6rem)]">
            <div className={`overflow-y-auto overscroll-contain grid ${gridClass}`}>
              {columns.map((column, columnIndex) => {
                const CategoryIcon = resolveIcon(column.icon);
                const isLastColumn = columnIndex === columns.length - 1;
                return (
                  <div key={column.title} className="p-4 md:p-5 lg:p-5">
                    {/* Column header */}
                    <div className="flex items-center gap-2 md:gap-3 mb-1">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                        <CategoryIcon className="h-4 w-4 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-copy-sm md:text-copy font-bold text-gray-900">
                          {column.title}
                        </h3>
                        <p className="text-[10px] md:text-label text-gray-400">
                          {column.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent my-2 md:my-3" />

                    {/* Links */}
                    <ul className="space-y-0.5">
                      {column.links
                        // Absent means "show it"; only an explicit false hides a
                        // link. Industries is the only menu that sets it.
                        .filter((link) => link.showInNavigationMenu !== false)
                        .map((link) => {
                          const LinkIcon = resolveIcon(link.icon);
                          return (
                            <li key={link.href + link.label}>
                              <Link
                                href={link.href}
                                onClick={onClose}
                                className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label-sm md:text-label text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                              >
                                <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                <span className="flex-1 leading-snug">{link.label}</span>
                                <ArrowRight className="h-3 w-3 ml-auto text-gray-300 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 flex-shrink-0" />
                              </Link>
                            </li>
                          );
                        })}

                      {/* Emphasised "see all" row, aligned with the list above it */}
                      {viewAll && isLastColumn && (
                        <li className="mt-1">
                          <Link
                            href={viewAll.href}
                            onClick={onClose}
                            className="group/all flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label-sm md:text-label font-semibold text-brand-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                          >
                            <LayoutGrid className="h-3 w-3 md:h-3.5 md:w-3.5 text-brand-500 flex-shrink-0" />
                            <span className="flex-1 leading-snug">{viewAll.label}</span>
                            <ArrowRight className="h-3.5 w-3.5 ml-auto text-brand-400 transition-transform duration-150 group-hover/all:translate-x-0.5 flex-shrink-0" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* CTA bar — pinned below the scroll area, not scrolled away with it */}
            <div className="shrink-0 bg-gray-50/80 border-t border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between">
              <p className="text-[11px] md:text-label text-gray-500">{cta.prompt}</p>
              <Link
                href={cta.href}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-[11px] md:text-label font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                {cta.label}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
