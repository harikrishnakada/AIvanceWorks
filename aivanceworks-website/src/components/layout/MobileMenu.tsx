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
  Search, ShoppingCart, Store,
  Target, Package, Sparkles, FileText, Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Brain,
  Bot, Rocket, Layers, Lightbulb, Building2, Globe, Smartphone,
  Settings, Palette, MessageSquare, Headphones,
  GitBranch, Cloud, RefreshCw, Shield,
  Cpu, Activity, Zap, TrendingUp, Heart,
  Search, ShoppingCart, Store,
  Target, Package, Sparkles, FileText, Workflow,
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAiMlOpen, setIsAiMlOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
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
              {/* AI & ML Accordion */}
              <div className="border-b border-gray-200 pb-1">
                <button
                  onClick={() => setIsAiMlOpen(!isAiMlOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={isAiMlOpen}
                >
                  AI Solutions
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      isAiMlOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isAiMlOpen && (
                  <div className="mt-1 space-y-0.5 animate-in slide-in-from-top-2 duration-200 pl-4">
                    {NAVIGATION.aiMlMenu.links.map((link) => {
                      const LinkIcon = iconMap[link.icon] || Code2;
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
                  </div>
                )}
              </div>

              {/* Services Accordion */}
              <div className="border-b border-gray-200 pb-1">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Services — Category Sections */}
                {isServicesOpen && (
                  <div className="mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {NAVIGATION.servicesMenu.map((category) => {
                      const CategoryIcon = iconMap[category.icon] || Code2;
                      return (
                        <div key={category.title}>
                          {/* Category Header */}
                          <button
                            onClick={() => toggleCategory(category.title)}
                            className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                                <CategoryIcon className="h-3.5 w-3.5 text-brand-600" />
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
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50/60 rounded-lg transition-colors"
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

                  </div>
                )}
              </div>

              {/* Solutions Accordion */}
              <div className="border-b border-gray-200 pb-1">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={isSolutionsOpen}
                >
                  Solutions
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      isSolutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Solutions — Industry Groups */}
                {isSolutionsOpen && (
                  <div className="mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {NAVIGATION.solutionsMenu.map((group) => {
                      const GroupIcon = iconMap[group.icon] || Code2;
                      return (
                        <div key={group.heading}>
                          {/* Group Header */}
                          <button
                            onClick={() => toggleCategory(group.heading)}
                            className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                                <GroupIcon className="h-3.5 w-3.5 text-brand-600" />
                              </div>
                              <div className="text-sm font-semibold text-gray-800">{group.heading}</div>
                            </div>
                            <ChevronDown
                              className={`h-4 w-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                                expandedCategory === group.heading ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Group Links */}
                          {expandedCategory === group.heading && (
                            <div className="pl-4 space-y-0.5 animate-in slide-in-from-top-1 duration-150">
                              {group.links.map((link) => {
                                const LinkIcon = iconMap[link.icon] || Code2;
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
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Other Navigation Links (Industry, Case Studies, Blog, About) */}
              {NAVIGATION.main.filter((item) => !['Services', 'AI', 'Solutions'].includes(item.label)).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:border-brand-300 hover:bg-white"
                  asChild
                >
                  <Link href="/contact" onClick={onClose}>
                    Contact Us
                  </Link>
                </Button>
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
