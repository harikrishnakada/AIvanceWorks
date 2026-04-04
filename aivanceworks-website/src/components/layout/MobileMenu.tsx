'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAVIGATION } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  Code2, Server, Brain,
  Bot, Rocket, Layers, Lightbulb, Building2, Globe, Smartphone,
  Settings, Palette, MessageSquare, Headphones,
  GitBranch, Cloud, RefreshCw, Shield,
  Cpu, Activity, Zap, TrendingUp, Heart,
  Search, ShoppingCart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Brain,
  Bot, Rocket, Layers, Lightbulb, Building2, Globe, Smartphone,
  Settings, Palette, MessageSquare, Headphones,
  GitBranch, Cloud, RefreshCw, Shield,
  Cpu, Activity, Zap, TrendingUp, Heart,
  Search, ShoppingCart,
};

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
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-[−8px_0_30px_rgba(0,0,0,0.1)] border-l border-gray-200 animate-in slide-in-from-right duration-300">
        <div className="flex flex-col h-full">
          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 mt-16">
            <nav className="space-y-1" aria-label="Mobile navigation">
              {/* What We Do Accordion */}
              <div className="border-b border-gray-200 pb-1">
                <button
                  onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={isWhatWeDoOpen}
                >
                  What We Do
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      isWhatWeDoOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* What We Do — Category Sections */}
                {isWhatWeDoOpen && (
                  <div className="mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {NAVIGATION.whatWeDo.map((category) => {
                      const CategoryIcon = iconMap[category.icon] || Code2;
                      return (
                        <div key={category.title}>
                          {/* Category Header */}
                          <button
                            onClick={() => toggleCategory(category.title)}
                            className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <CategoryIcon className="h-3.5 w-3.5 text-blue-600" />
                              </div>
                              <div className="text-left">
                                <div className="text-sm font-semibold text-gray-800">{category.title}</div>
                                <div className="text-[10px] text-gray-400 font-normal">{category.description}</div>
                              </div>
                            </div>
                            <ChevronDown
                              className={`h-4 w-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                                expandedCategory === category.title ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Category Links */}
                          {expandedCategory === category.title && (
                            <div className="pl-4 space-y-0.5 animate-in slide-in-from-top-1 duration-150">
                              {category.links.map((link) => {
                                const LinkIcon = iconMap[link.icon] || Code2;
                                return (
                                  <Link
                                    key={link.href + link.label}
                                    href={link.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-lg transition-colors"
                                  >
                                    <LinkIcon className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                                    {link.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Technologies — rendered as 4th category */}
                    {(() => {
                      const infraCol = NAVIGATION.whatWeDo.find((c) => 'technologies' in c && c.technologies);
                      if (!infraCol || !('technologies' in infraCol)) return null;
                      const techs = infraCol.technologies as unknown as { label: string; icon: string }[];
                      const techTitle = 'technologiesLabel' in infraCol ? String(infraCol.technologiesLabel) : 'Technologies';
                      const techDesc = 'technologiesDescription' in infraCol ? String(infraCol.technologiesDescription) : 'Our core tech stack';
                      const techIconKey = 'technologiesIcon' in infraCol ? String(infraCol.technologiesIcon) : 'Cpu';
                      const TechCatIcon = iconMap[techIconKey] || Cpu;
                      return (
                        <div>
                          <button
                            onClick={() => toggleCategory(techTitle)}
                            className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <TechCatIcon className="h-3.5 w-3.5 text-blue-600" />
                              </div>
                              <div className="text-left">
                                <div className="text-sm font-semibold text-gray-800">{techTitle}</div>
                                <div className="text-[10px] text-gray-400 font-normal">{techDesc}</div>
                              </div>
                            </div>
                            <ChevronDown
                              className={`h-4 w-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                                expandedCategory === techTitle ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {expandedCategory === techTitle && (
                            <div className="pl-4 space-y-0.5 animate-in slide-in-from-top-1 duration-150">
                              {techs.map((tech) => {
                                const TechIcon = iconMap[tech.icon] || Code2;
                                return (
                                  <div key={tech.label} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                                    <TechIcon className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                                    {tech.label}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>

              {/* How We Work */}
              <Link
                href="/how-we-work"
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                How We Work
              </Link>

              {/* Main Navigation Links */}
              {NAVIGATION.main.filter((item) => item.label !== 'What We Do' && item.label !== 'How We Work').map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="border-t border-gray-200 p-6 space-y-3 bg-gray-50">
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-white"
              asChild
            >
              <Link href="/contact" onClick={onClose}>
                Contact Us
              </Link>
            </Button>
            <Button
              className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-sm font-semibold"
              asChild
            >
              <Link href="/book-consultation" onClick={onClose}>
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
