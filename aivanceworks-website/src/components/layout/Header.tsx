'use client';

import Link from 'next/link';
import Image from 'next/image';
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
            ? 'bg-white/95 backdrop-blur-md shadow-card-sm border-b border-border-light'
            : 'bg-surface-white border-b border-border-light'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center group"
                aria-label={`${SITE_CONFIG.name} homepage`}
              >
                <Image
                  src="/logo-mamba-light.svg"
                  alt={SITE_CONFIG.name}
                  width={180}
                  height={32}
                  className="h-7 md:h-8 w-auto"
                  priority
                />
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
                  className="flex items-center px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-text-secondary hover:text-accent hover:bg-surface-warm transition-colors rounded-lg"
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
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-text-secondary hover:text-accent hover:bg-surface-warm transition-colors rounded-lg"
              >
                How We Work
              </Link>

              {/* Other Nav Links */}
              {NAVIGATION.main.filter((item) => item.label !== 'What We Do' && item.label !== 'How We Work').map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-text-secondary hover:text-accent hover:bg-surface-warm transition-colors rounded-lg"
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
                  className="flex items-center px-2 py-1.5 text-xs font-medium text-text-secondary hover:text-accent hover:bg-surface-warm transition-colors rounded-md"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`ml-0.5 h-3 w-3 transition-transform duration-200 ${
                      isMegaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <Link href="/how-we-work" className="px-2 py-1.5 text-xs font-medium text-text-secondary hover:text-accent hover:bg-surface-warm transition-colors rounded-md">
                How We Work
              </Link>
              <Link href="/case-studies" className="px-2 py-1.5 text-xs font-medium text-text-secondary hover:text-accent hover:bg-surface-warm transition-colors rounded-md">
                Case Studies
              </Link>
              <Link href="/about" className="px-2 py-1.5 text-xs font-medium text-text-secondary hover:text-accent hover:bg-surface-warm transition-colors rounded-md">
                About
              </Link>
            </div>

            {/* CTA Buttons — visible from md */}
            <div className="hidden md:flex md:items-center md:space-x-1.5 lg:space-x-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-border-light text-text-secondary hover:border-border-hover hover:bg-surface-warm text-[11px] lg:text-sm h-8 lg:h-9 px-2.5 lg:px-3"
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-accent text-text-heading hover:bg-accent-hover shadow-sm font-semibold text-[11px] lg:text-sm h-8 lg:h-9 px-2.5 lg:px-3 transition-all duration-200 hover:shadow-glow-faint"
              >
                <Link href="/contact">Start a project</Link>
              </Button>
            </div>

            {/* Mobile Menu Button — hidden from md */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:bg-surface-warm transition-colors shrink-0"
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
            className="fixed inset-0 top-14 md:top-16 lg:top-18 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setIsMegaMenuOpen(false)}
          />

          <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-6xl mx-auto px-4 md:px-6 pt-2 md:pt-3">
              <div className="bg-surface rounded-xl md:rounded-2xl shadow-dropdown border border-border-subtle overflow-hidden">
                {/* Columns */}
                <div className="grid grid-cols-3 divide-x divide-border-subtle">
                  {NAVIGATION.whatWeDo.map((column) => {
                    const CategoryIcon = iconMap[column.icon] || Code2;
                    return (
                      <div key={column.title} className="p-4 md:p-5 lg:p-6">
                        {/* Column Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-accent/8 flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-sm md:text-base font-bold text-text-light">
                              {column.title}
                            </h3>
                            <p className="text-[10px] md:text-xs text-muted-foreground">
                              {column.description}
                            </p>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-border-subtle via-border-subtle to-transparent my-2 md:my-3" />

                        {/* Links */}
                        <ul className="space-y-0.5">
                          {column.links.map((link) => {
                            const LinkIcon = iconMap[link.icon] || Code2;
                            return (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-xs md:text-sm text-text-subtle hover:text-accent hover:bg-glass-bg transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-muted-foreground group-hover/link:text-accent transition-colors flex-shrink-0" />
                                  <span className="truncate">{link.label}</span>
                                  <ArrowRight className="h-3 w-3 ml-auto text-muted-foreground opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 flex-shrink-0" />
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
                <div className="bg-surface-elevated border-t border-border-subtle px-4 md:px-6 py-3 flex items-center justify-between">
                  <p className="text-[11px] md:text-xs text-muted-foreground">
                    Not sure where to start?
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-accent hover:text-accent-bright transition-colors"
                  >
                    Start a project
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
