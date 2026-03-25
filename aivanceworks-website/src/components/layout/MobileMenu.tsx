'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAVIGATION } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  return (
    <div
      className="fixed inset-0 z-40 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-surface-dark border-l border-border-subtle shadow-slide animate-in slide-in-from-right duration-300">
        <div className="flex flex-col h-full">
          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 mt-16">
            <nav className="space-y-1" aria-label="Mobile navigation">
              {/* What We Do Accordion */}
              <div className="border-b border-border-subtle pb-1">
                <button
                  onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-text-light hover:bg-glass-bg rounded-lg transition-colors"
                  aria-expanded={isWhatWeDoOpen}
                >
                  What We Do
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      isWhatWeDoOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* What We Do — 3 Category Sections */}
                {isWhatWeDoOpen && (
                  <div className="mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {NAVIGATION.whatWeDo.map((category) => (
                      <div key={category.title}>
                        {/* Category Header */}
                        <button
                          onClick={() => toggleCategory(category.title)}
                          className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-text-subtle hover:bg-glass-bg rounded-lg transition-colors"
                        >
                          {category.title}
                          <ChevronDown
                            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                              expandedCategory === category.title ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Category Links */}
                        {expandedCategory === category.title && (
                          <div className="pl-4 space-y-0.5 animate-in slide-in-from-top-1 duration-150">
                            {category.links.map((link) => (
                              <Link
                                key={link.href + link.label}
                                href={link.href}
                                onClick={onClose}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-glass-bg rounded-lg transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* How We Work */}
              <Link
                href="/how-we-work"
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-text-light hover:bg-glass-bg rounded-lg transition-colors"
              >
                How We Work
              </Link>

              {/* Main Navigation Links */}
              {NAVIGATION.main.filter((item) => item.label !== 'What We Do' && item.label !== 'How We Work').map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-medium text-text-light hover:bg-glass-bg rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="border-t border-border-subtle p-6 space-y-3 bg-surface">
            <Button
              variant="outline"
              className="w-full border-border-subtle text-text-light hover:border-muted-foreground hover:bg-glass-bg"
              asChild
            >
              <Link href="/contact" onClick={onClose}>
                Contact Us
              </Link>
            </Button>
            <Button
              className="w-full bg-accent text-text-heading hover:bg-accent-hover shadow-sm font-semibold"
              asChild
            >
              <Link href="/contact" onClick={onClose}>
                Start a project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
