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
  Search, ShoppingCart,
} from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Brain,
  Bot, Rocket, Layers, Lightbulb, Building2, Globe, Smartphone,
  Settings, Palette, MessageSquare, Headphones,
  GitBranch, Cloud, RefreshCw, Shield,
  Cpu, Activity, Zap, TrendingUp, Heart,
  Search, ShoppingCart,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);

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
        setIsMegaMenuOpen(false);
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

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setIsMegaMenuOpen(false), 150);
  };

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
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-2 group"
                aria-label={`${SITE_CONFIG.name} homepage`}
              >
                <div className="relative">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                    <span className="text-white font-bold text-base md:text-lg">SS</span>
                  </div>
                </div>
                <span className="text-lg md:text-xl font-bold text-blue-700">
                  {SITE_CONFIG.name}
                </span>
              </Link>
            </div>

            {/* Desktop Navigation — visible from lg (1024px) */}
            <div className="hidden lg:flex lg:items-center lg:space-x-0.5 xl:space-x-1">
              {/* What We Do Mega Menu */}
              <div
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  className="flex items-center px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-blue-700 hover:text-blue-900 transition-colors rounded-lg hover:bg-blue-50"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                >
                  What We Do
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-200 ${
                      isMegaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* How We Work */}
              <Link
                href="/how-we-work"
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-blue-700 hover:text-blue-900 transition-colors rounded-lg hover:bg-blue-50"
              >
                How We Work
              </Link>

              {/* Other Nav Links */}
              {NAVIGATION.main.filter((item) => item.label !== 'What We Do' && item.label !== 'How We Work').map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-blue-700 hover:text-blue-900 transition-colors rounded-lg hover:bg-blue-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Tablet Navigation — visible only at md (768-1023px) */}
            <div className="hidden md:flex md:items-center md:space-x-0.5 lg:hidden">
              <div
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  className="flex items-center px-2 py-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors rounded-md hover:bg-blue-50"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                >
                  What We Do
                  <ChevronDown
                    className={`ml-0.5 h-3 w-3 transition-transform duration-200 ${
                      isMegaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <Link href="/how-we-work" className="px-2 py-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors rounded-md hover:bg-blue-50">
                How We Work
              </Link>
              <Link href="/case-studies" className="px-2 py-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors rounded-md hover:bg-blue-50">
                Case Studies
              </Link>
              <Link href="/blog" className="px-2 py-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors rounded-md hover:bg-blue-50">
                Blog
              </Link>
              <Link href="/about" className="px-2 py-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors rounded-md hover:bg-blue-50">
                About
              </Link>
            </div>

            {/* CTA Buttons — visible from md */}
            <div className="hidden md:flex md:items-center md:space-x-1.5 lg:space-x-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-blue-200 text-blue-700 hover:border-blue-400 hover:bg-blue-50 text-[11px] lg:text-sm h-8 lg:h-9 px-2.5 lg:px-3"
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm font-semibold text-[11px] lg:text-sm h-8 lg:h-9 px-2.5 lg:px-3"
              >
                <Link href="/book-consultation">Book an Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button — hidden from md */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-blue-700 hover:bg-blue-50 transition-colors shrink-0"
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

      {/* Mega Menu Dropdown — visible from md */}
      {isMegaMenuOpen && (
        <div
          className="fixed top-14 md:top-16 lg:top-18 left-0 right-0 z-40 hidden md:block"
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-14 md:top-16 lg:top-18 bg-black/30 backdrop-blur-[2px]"
            onClick={() => setIsMegaMenuOpen(false)}
          />

          <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-6xl mx-auto px-4 md:px-6 pt-2 md:pt-3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden">
                {/* Columns */}
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                  {NAVIGATION.whatWeDo.map((column) => {
                    const CategoryIcon = iconMap[column.icon] || Code2;
                    return (
                      <div key={column.title} className="p-4 md:p-5 lg:p-6">
                        {/* Column Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-blue-600" />
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
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-xs md:text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-blue-500 transition-colors flex-shrink-0" />
                                  <span className="truncate">{link.label}</span>
                                  <ArrowRight className="h-3 w-3 ml-auto text-gray-300 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 flex-shrink-0" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>

                        {'technologies' in column && column.technologies && (
                          <>
                            <div className="mt-8 md:mt-9" />
                            <div className="flex items-center gap-2 md:gap-3 mb-1">
                              <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                                {(() => { const TechHeadIcon = iconMap[('technologiesIcon' in column ? column.technologiesIcon : 'Cpu') as string] || Code2; return <TechHeadIcon className="h-4 w-4 text-blue-600" />; })()}
                              </div>
                              <div>
                                <h3 className="text-sm md:text-base font-bold text-gray-900">
                                  {'technologiesLabel' in column ? column.technologiesLabel : 'Technologies'}
                                </h3>
                                <p className="text-[10px] md:text-xs text-gray-400">
                                  {'technologiesDescription' in column ? column.technologiesDescription : ''}
                                </p>
                              </div>
                            </div>
                            <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent my-2 md:my-3" />
                            <ul className="space-y-0.5">
                              {column.technologies.map((tech) => {
                                const TechIcon = iconMap[tech.icon] || Code2;
                                return (
                                  <li key={tech.label} className="flex items-center gap-2 py-1 md:py-[5px] px-2 text-xs md:text-sm text-gray-500">
                                    <TechIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 flex-shrink-0" />
                                    <span className="truncate">{tech.label}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </>
                        )}
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
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
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
