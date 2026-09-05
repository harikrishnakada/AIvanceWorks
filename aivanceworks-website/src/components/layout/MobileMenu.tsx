'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ENABLED_NAV_ITEMS, NAV_MENUS } from '@/lib/navigation';
import { Button } from '@/components/ui/button';
import { resolveIcon, ArrowRight, ChevronDown, LayoutGrid } from './nav-icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile drawer nav.
 *
 * Renders ENABLED_NAV_ITEMS — the same list, in the same order, that the header
 * renders from md up. It previously kept its own accordion per menu behind six
 * `useState` flags and four `{false && ...}` blocks, and filtered the nav list by
 * label string, so its item set had drifted from both desktop and tablet.
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Which top-level dropdown is expanded, and which column inside it. Both are
  // single-slot: opening one closes the other, as before.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expandedColumn, setExpandedColumn] = useState<string | null>(null);

  const toggleColumn = (title: string) => {
    setExpandedColumn((prev) => (prev === title ? null : title));
  };

  // When a menu has a single column, auto-expand it so its links are visible
  // right away — the user can still collapse it via its chevron.
  const toggleMenu = (menu: string) => {
    const next = openMenu === menu ? null : menu;
    setOpenMenu(next);
    if (next) {
      const { columns } = NAV_MENUS[menu as keyof typeof NAV_MENUS];
      if (columns.length === 1) setExpandedColumn(columns[0].title);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="Mobile menu"
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-[−8px_0_30px_rgba(0,0,0,0.1)] border-l border-gray-200 transform transition-transform duration-200 ease-out will-change-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 mt-16">
            <nav className="space-y-1" aria-label="Mobile navigation">
              {ENABLED_NAV_ITEMS.map((item) => {
                if (item.type === 'link') {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const { columns, viewAll } = NAV_MENUS[item.menu];
                const isMenuOpen = openMenu === item.menu;

                return (
                  <div key={item.menu} className="border-b border-gray-200 pb-1">
                    <button
                      onClick={() => toggleMenu(item.menu)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      aria-expanded={isMenuOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                          isMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isMenuOpen && (
                      <div className="mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                        {columns.map((column, columnIndex) => {
                          const ColumnIcon = resolveIcon(column.icon);
                          const isColumnOpen = expandedColumn === column.title;
                          const isLastColumn = columnIndex === columns.length - 1;

                          return (
                            <div key={column.title}>
                              {/* Column header */}
                              <button
                                onClick={() => toggleColumn(column.title)}
                                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                                aria-expanded={isColumnOpen}
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                                    <ColumnIcon className="h-3.5 w-3.5 text-brand-600" />
                                  </div>
                                  <div className="text-left">
                                    <div className="text-sm font-semibold text-gray-800">{column.title}</div>
                                    <div className="text-[10px] text-gray-400 font-normal">{column.description}</div>
                                  </div>
                                </div>
                                <ChevronDown
                                  className={`h-4 w-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                                    isColumnOpen ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>

                              {/* Column links */}
                              {isColumnOpen && (
                                <div className="pl-4 space-y-0.5 animate-in slide-in-from-top-1 duration-150">
                                  {column.links
                                    // Absent means "show it"; only an explicit
                                    // false hides a link. Matches NavMegaPanel.
                                    .filter((link) => link.showInNavigationMenu !== false)
                                    .map((link) => {
                                      const LinkIcon = resolveIcon(link.icon);
                                      return (
                                        <Link
                                          key={link.href + link.label}
                                          href={link.href}
                                          onClick={onClose}
                                          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50/60 rounded-lg transition-colors"
                                        >
                                          <LinkIcon className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                                          {link.label}
                                        </Link>
                                      );
                                    })}

                                  {viewAll && isLastColumn && (
                                    <Link
                                      href={viewAll.href}
                                      onClick={onClose}
                                      className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:bg-brand-50/60 rounded-lg transition-colors"
                                    >
                                      <LayoutGrid className="h-4 w-4 text-brand-500 flex-shrink-0" />
                                      <span className="flex-1">{viewAll.label}</span>
                                      <ArrowRight className="h-4 w-4 ml-auto text-brand-400 flex-shrink-0" />
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* CTA Buttons */}
              <div className="pt-4 space-y-3">
                {false && (
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:border-brand-300 hover:bg-white"
                    asChild
                  >
                    <Link href="/contact" onClick={onClose}>
                      Contact Us
                    </Link>
                  </Button>
                )}
                <Button
                  className="w-full bg-brand-600 text-white hover:bg-brand-700 shadow-sm font-semibold"
                  asChild
                >
                  <Link href="/book-consultation" onClick={onClose}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
