'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  Menu, X, ChevronDown, ArrowRight,
  Code2, Server, Brain,
  Bot, Rocket, Layers, Lightbulb, Building2, Globe, Smartphone,
  Settings, Palette, MessageSquare, Headphones,
  GitBranch, Cloud, RefreshCw, Shield,
  Cpu, Activity, Zap, TrendingUp, Heart,
  Search, ShoppingCart, Store,
} from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Brain,
  Bot, Rocket, Layers, Lightbulb, Building2, Globe, Smartphone,
  Settings, Palette, MessageSquare, Headphones,
  GitBranch, Cloud, RefreshCw, Shield,
  Cpu, Activity, Zap, TrendingUp, Heart,
  Search, ShoppingCart, Store,
};

type DropdownType = 'services' | 'ai-ml' | 'solutions' | null;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = (menu: DropdownType) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.08)] border-b border-gray-200'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-18" >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-2 group"
                aria-label={`${SITE_CONFIG.name} homepage`}
              >
                <span className="text-2xl md:text-3xl font-bold text-brand-900">
                  {SITE_CONFIG.name}
                </span>
              </Link>
            </div>

            {/* Desktop Navigation — visible from lg (1024px) */}
            <div className="hidden lg:flex lg:items-center lg:space-x-0.5 xl:space-x-1">
              {/* AI & ML Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('ai-ml')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-brand-700 hover:text-brand-900 transition-colors rounded-lg hover:bg-brand-50"
                  aria-expanded={activeDropdown === 'ai-ml'}
                  aria-haspopup="true"
                >
                  AI & ML
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-200 ${
                      activeDropdown === 'ai-ml' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* AI & ML Inline Dropdown */}
                {activeDropdown === 'ai-ml' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 md:pt-3 w-[280px] md:w-[320px] lg:w-[340px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden">
                      <div className="p-4 md:p-5">
                        {/* Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                            <Brain className="h-4 w-4 text-brand-600" />
                          </div>
                          <div>
                            <h3 className="text-sm md:text-base font-bold text-gray-900">
                              {NAVIGATION.aiMlMenu.title}
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-400">
                              {NAVIGATION.aiMlMenu.description}
                            </p>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent my-2 md:my-3" />

                        {/* Links */}
                        <ul className="space-y-0.5">
                          {NAVIGATION.aiMlMenu.links.map((link) => {
                            const LinkIcon = iconMap[link.icon] || Code2;
                            return (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={closeDropdown}
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-xs md:text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                  <span className="truncate">{link.label}</span>
                                  <ArrowRight className="h-3 w-3 ml-auto text-gray-300 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 flex-shrink-0" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Bottom CTA bar */}
                      <div className="bg-gray-50/80 border-t border-gray-100 px-4 md:px-5 py-2.5 flex items-center justify-between">
                        <p className="text-[11px] md:text-xs text-gray-500">
                          Explore AI capabilities
                        </p>
                        <Link
                          href="/book-consultation"
                          onClick={closeDropdown}
                          className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                        >
                          Consult
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-brand-700 hover:text-brand-900 transition-colors rounded-lg hover:bg-brand-50"
                  aria-expanded={activeDropdown === 'services'}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('solutions')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-brand-700 hover:text-brand-900 transition-colors rounded-lg hover:bg-brand-50"
                  aria-expanded={activeDropdown === 'solutions'}
                  aria-haspopup="true"
                >
                  Solutions
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-200 ${
                      activeDropdown === 'solutions' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Other Nav Links (Industry, Case Studies, Blog, About) */}
              {NAVIGATION.main.filter((item) => !['Services', 'Solutions', 'AI & ML'].includes(item.label)).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-brand-700 hover:text-brand-900 transition-colors rounded-lg hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Tablet Navigation — visible only at md (768-1023px) */}
            <div className="hidden md:flex md:items-center md:space-x-0.5 lg:hidden">
              {/* AI & ML Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('ai-ml')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center px-2 py-1.5 text-xs font-medium text-brand-700 hover:text-brand-900 transition-colors rounded-md hover:bg-brand-50"
                  aria-expanded={activeDropdown === 'ai-ml'}
                  aria-haspopup="true"
                >
                  AI & ML
                  <ChevronDown
                    className={`ml-0.5 h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === 'ai-ml' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* AI & ML Inline Dropdown (tablet) */}
                {activeDropdown === 'ai-ml' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[270px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center">
                            <Brain className="h-3.5 w-3.5 text-brand-600" />
                          </div>
                          <div>
                            <h3 className="text-xs font-bold text-gray-900">
                              {NAVIGATION.aiMlMenu.title}
                            </h3>
                            <p className="text-[9px] text-gray-400">
                              {NAVIGATION.aiMlMenu.description}
                            </p>
                          </div>
                        </div>
                        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent my-2" />
                        <ul className="space-y-0.5">
                          {NAVIGATION.aiMlMenu.links.map((link) => {
                            const LinkIcon = iconMap[link.icon] || Code2;
                            return (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={closeDropdown}
                                  className="group/link flex items-center gap-2 py-1.5 px-2 -mx-1 rounded-lg text-xs text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                  <span className="truncate">{link.label}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="bg-gray-50/80 border-t border-gray-100 px-4 py-2 flex items-center justify-between">
                        <p className="text-[10px] text-gray-500">Explore AI</p>
                        <Link
                          href="/book-consultation"
                          onClick={closeDropdown}
                          className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                        >
                          Consult
                          <ArrowRight className="h-2.5 w-2.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center px-2 py-1.5 text-xs font-medium text-brand-700 hover:text-brand-900 transition-colors rounded-md hover:bg-brand-50"
                  aria-expanded={activeDropdown === 'services'}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`ml-0.5 h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('solutions')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center px-2 py-1.5 text-xs font-medium text-brand-700 hover:text-brand-900 transition-colors rounded-md hover:bg-brand-50"
                  aria-expanded={activeDropdown === 'solutions'}
                  aria-haspopup="true"
                >
                  Solutions
                  <ChevronDown
                    className={`ml-0.5 h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === 'solutions' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Other Nav Links */}
              {NAVIGATION.main.filter((item) => !['Services', 'Solutions', 'AI & ML'].includes(item.label)).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-1.5 text-xs font-medium text-brand-700 hover:text-brand-900 transition-colors rounded-md hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons — visible from md */}
            <div className="hidden md:flex md:items-center md:space-x-1.5 lg:space-x-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-brand-200 text-brand-700 hover:border-brand-400 hover:bg-brand-50 text-[11px] lg:text-sm h-8 lg:h-9 px-2.5 lg:px-3"
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-brand-600 text-white hover:bg-brand-700 shadow-sm font-semibold text-[11px] lg:text-sm h-8 lg:h-9 px-2.5 lg:px-3"
              >
                <Link href="/book-consultation">Book an Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button — hidden from md */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-brand-700 hover:bg-brand-50 transition-colors shrink-0"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Services Mega Menu Dropdown — visible from md */}
      {activeDropdown === 'services' && (
        <div
          className="fixed top-14 md:top-16 lg:top-18 left-0 right-0 z-40 hidden md:block"
          onMouseEnter={() => handleDropdownEnter('services')}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-14 md:top-16 lg:top-18 bg-black/30 backdrop-blur-[2px]"
            onClick={closeDropdown}
          />

          <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-6xl mx-auto px-4 md:px-6 pt-2 md:pt-3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden">
                {/* Columns */}
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                  {NAVIGATION.servicesMenu.map((column) => {
                    const CategoryIcon = iconMap[column.icon] || Code2;
                    return (
                      <div key={column.title} className="p-4 md:p-5 lg:p-6">
                        {/* Column Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-brand-600" />
                          </div>
                          <div>
                            <h3 className="text-sm md:text-base font-bold text-gray-900">
                              {column.title}
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-400">
                              {column.description}
                            </p>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent my-2 md:my-3" />

                        {/* Links */}
                        <ul className="space-y-0.5">
                          {column.links.map((link) => {
                            const LinkIcon = iconMap[link.icon] || Code2;
                            return (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={closeDropdown}
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-xs md:text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                  <span className="truncate">{link.label}</span>
                                  <ArrowRight className="h-3 w-3 ml-auto text-gray-300 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 flex-shrink-0" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>

                      </div>
                    );
                  })}
                </div>

                {/* Bottom CTA bar */}
                <div className="bg-gray-50/80 border-t border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between">
                  <p className="text-[11px] md:text-xs text-gray-500">
                    Not sure where to start?
                  </p>
                  <Link
                    href="/book-consultation"
                    onClick={closeDropdown}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    Book a free consultation
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solutions Mega Menu Dropdown — visible from md */}
      {activeDropdown === 'solutions' && (
        <div
          className="fixed top-14 md:top-16 lg:top-18 left-0 right-0 z-40 hidden md:block"
          onMouseEnter={() => handleDropdownEnter('solutions')}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-14 md:top-16 lg:top-18 bg-black/30 backdrop-blur-[2px]"
            onClick={closeDropdown}
          />

          <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-6xl mx-auto px-4 md:px-6 pt-2 md:pt-3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden">
                {/* Columns — one per solution group */}
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                  {NAVIGATION.solutionsMenu.map((group) => {
                    const GroupIcon = iconMap[group.icon] || Code2;
                    return (
                      <div key={group.heading} className="p-4 md:p-5 lg:p-6">
                        {/* Group Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                            <GroupIcon className="h-4 w-4 text-brand-600" />
                          </div>
                          <h3 className="text-sm md:text-base font-bold text-gray-900">
                            {group.heading}
                          </h3>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent my-2 md:my-3" />

                        {/* Links */}
                        <ul className="space-y-0.5">
                          {group.links.map((link) => {
                            const LinkIcon = iconMap[link.icon] || Code2;
                            return (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={closeDropdown}
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-xs md:text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                  <span className="truncate">{link.label}</span>
                                  <ArrowRight className="h-3 w-3 ml-auto text-gray-300 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 flex-shrink-0" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom CTA bar */}
                <div className="bg-gray-50/80 border-t border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between">
                  <p className="text-[11px] md:text-xs text-gray-500">
                    Need a custom solution?
                  </p>
                  <Link
                    href="/book-consultation"
                    onClick={closeDropdown}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    Book a free consultation
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu — hidden from md */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-14 md:h-16 lg:h-18" />
    </>
  );
}
