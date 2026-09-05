'use client';

import Link from 'next/link';
import { NAV_MENUS, type NavMenuKey } from '@/lib/navigation';
import { resolveIcon, ArrowRight, LayoutGrid } from './nav-icons';

interface NavMegaPanelProps {
  menu: NavMenuKey;
  isOpen: boolean;
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
  onMouseEnter,
  onMouseLeave,
  onClose,
}: NavMegaPanelProps) {
  const { columns, cta, viewAll } = NAV_MENUS[menu];

  // Column count picks the layout: a lone column reads as a plain dropdown and
  // would look stranded across a 1600px card, so it gets a narrow one instead.
  const isWide = columns.length > 1;

  // Separators are per-child rather than `divide-*`: on a grid that WRAPS,
  // `divide-y` puts a rule above every child but the first, which lands a stray
  // rule mid-row. These target the real edges — right edge of each non-final
  // column, bottom edge of each non-final row. (The Solutions panel used
  // `divide-*` and had exactly that artefact at sm with five groups.)
  const gridClass = isWide
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [&>*]:border-gray-100 [&>*:not(:last-child)]:border-b sm:[&>*]:border-b-0 sm:[&>*:nth-child(-n+2)]:border-b sm:[&>*:nth-child(odd)]:border-r lg:[&>*]:border-b-0 lg:[&>*:not(:last-child)]:border-r'
    : 'grid-cols-1';

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
        <div className={`${isWide ? 'max-w-[1600px]' : 'max-w-md'} mx-auto px-4 md:px-6 pt-2 md:pt-3`}>
          {/* Four columns of 5-12 links each can outgrow a laptop viewport once the
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
                                className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label md:text-copy-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
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
                            className="group/all flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label md:text-copy-sm font-semibold text-brand-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
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
