'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { NAVIGATION } from '@/lib/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/brand/Logo';
import { Container } from '@/components/shared/primitives';
import {
  Menu, X, ChevronDown, ArrowRight,
  Code2, Server, Brain,
  Bot, Rocket, Layers, Lightbulb, Building2, Globe, Smartphone,
  Settings, Palette, MessageSquare, MessageCircle, Headphones,
  GitBranch, Cloud, RefreshCw, Shield,
  Cpu, Activity, Zap, TrendingUp, Heart,
  Search, ShoppingCart, Store,
  Target, Package, Sparkles, FileText, Workflow,
  CreditCard, Stethoscope, Eye, Pill, FlaskConical, LayoutGrid,
  // Icons the Services mega-menu columns ask for but iconMap didn't carry, so those
  // rows rendered the Code2 `</>` fallback instead: AI Development, API Development,
  // Data Engineering, Data Analytics, IaaS, Quality Engineering.
  Compass, Webhook, Database, BarChart3, ServerCog, CheckCircle,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import type { LucideIcon } from 'lucide-react';

// The mobile menu is ~27 KB plus 38 icon modules, and it was mounted
// unconditionally on every route — including desktop, where it can never open.
// Loading it on demand keeps it out of the first-paint bundle and the initial
// hydration pass.
const MobileMenu = dynamic(
  () => import('./MobileMenu').then((m) => m.MobileMenu),
  { ssr: false }
);

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Brain,
  Bot, Rocket, Layers, Lightbulb, Building2, Globe, Smartphone,
  Settings, Palette, MessageSquare, MessageCircle, Headphones,
  GitBranch, Cloud, RefreshCw, Shield,
  Cpu, Activity, Zap, TrendingUp, Heart,
  Search, ShoppingCart, Store,
  Target, Package, Sparkles, FileText, Workflow,
  CreditCard, Stethoscope, Eye, Pill, FlaskConical,
  Compass, Webhook, Database, BarChart3, ServerCog, CheckCircle,
};

type DropdownType = 'services' | 'ai-ml' | 'advisory' | 'enterprise' | 'solutions' | 'industries' | null;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Latches on the first open so the lazily-loaded MobileMenu stays mounted.
  const [hasOpenedMobileMenu, setHasOpenedMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Passive + rAF-coalesced: reading window.scrollY on every scroll event forces
    // layout, and a non-passive listener lets the handler block the compositor.
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
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
    if (!activeDropdown) return;
    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (!target.closest('[data-dropdown]')) {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown as unknown as EventListener);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown as unknown as EventListener);
    };
  }, [activeDropdown]);

  const toggleDropdown = (menu: Exclude<DropdownType, null>) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.08)] border-b border-gray-200'
            : 'bg-white border-b border-gray-100'
          }`}
      >
        {/* On the shared page Container, so the logo lines up with the content
            below it rather than sitting on its own edge.

            This REVERSES an earlier deliberate choice to run the row full-bleed.
            That decision was made when Container capped at max-w-7xl (1280px),
            where centring held the logo 104px in from the edge and read as too
            inset. The container is now much wider — 1680px at 1920 and 2048px at
            2560 — so full-bleed had the opposite problem: at 2560 the logo sat at
            32px while every section's content started at 304px, and the header
            read as belonging to a different page than the body.

            The other original objection — that centring put the nav on the
            container's centre rather than the screen's — does not apply: the
            Container is `mx-auto`, so its centre IS the viewport centre, and the
            three-track flex below centres the nav within it either way. */}
        <nav aria-label="Main navigation">
          <Container width="default">
          {/* Three-track row. From lg the outer tracks are `flex-1` (basis 0), so the
              free space splits evenly and the nav lands on the true horizontal centre
              instead of wherever `justify-between` happened to drop it.

              Centring is lg-only on purpose. At md the tablet nav carries four
              dropdowns and the row is already ~76px wider than the container, so it
              survives only by shrinking below max-content (the dropdown labels wrap).
              Basis-0 outer tracks there make the flex algorithm measure free space
              against a 0 basis, "find" room that isn't there, and grow both tracks
              into ~180px of overflow. Below lg the row stays on `justify-between`
              with `flex: 0 0 auto` tracks — the previous behaviour exactly. The nav
              tracks deliberately keep the default `shrink: 1`; pinning them to
              `shrink-0` re-breaks md by blocking that same wrap. */}
          <div className="flex items-center justify-between lg:justify-normal h-20 md:h-18 lg:h-20">
            {/* Left track — logo + wordmark, pinned to the container's left edge */}
            <div className="flex flex-none items-center justify-start lg:flex-1">
              <Logo idPrefix="logo-header" />
            </div>

            {/* Desktop Navigation — visible from lg (1024px). Gaps opened up a step now
                that the row carries 4 items instead of 5; it was tight to fit AI. */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
              {/* AI Dropdown — hidden from UI (AI Services now leads the Services mega menu) */}
              {/* <div
                data-dropdown="ai-ml"
                className="relative"
                onMouseEnter={() => handleDropdownEnter('ai-ml')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => toggleDropdown('ai-ml')}
                  className="flex items-center px-4 xl:px-5 py-2 text-copy xl:text-lg font-medium text-gray-900 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
                  aria-expanded={activeDropdown === 'ai-ml'}
                  aria-haspopup="true"
                >
                  AI
                  <ChevronDown
                    className={`ml-1.5 h-4 w-4 xl:h-5 xl:w-5 transition-transform duration-200 ${activeDropdown === 'ai-ml' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              </div> */}

              {/* Services Dropdown */}
              <div
                data-dropdown="services"
                className="relative"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center px-4 xl:px-5 py-2 text-copy xl:text-lg font-medium text-gray-900 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
                  aria-expanded={activeDropdown === 'services'}
                  aria-haspopup="true"
                >
                  What We Do
                  <ChevronDown
                    className={`ml-1.5 h-4 w-4 xl:h-5 xl:w-5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              </div>

               {/* <Link
                  key="industries"
                  href="industries"
                  className="px-4 xl:px-5 py-2 text-copy xl:text-lg font-medium text-gray-900 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
                >
                  Industries
                </Link> */}

              {/* Solutions Dropdown — hidden from UI (content preserved) */}
              {/* <div
                data-dropdown="solutions"
                className="relative"
                onMouseEnter={() => handleDropdownEnter('solutions')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => toggleDropdown('solutions')}
                  className="flex items-center px-4 xl:px-5 py-2 text-copy xl:text-lg font-medium text-gray-900 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
                  aria-expanded={activeDropdown === 'solutions'}
                  aria-haspopup="true"
                >
                  Solutions
                  <ChevronDown
                    className={`ml-1.5 h-4 w-4 xl:h-5 xl:w-5 transition-transform duration-200 ${
                      activeDropdown === 'solutions' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div> */}

              {/* Other Nav Links (Industry, Case Studies, Blog, About) */}
              {NAVIGATION.main.filter((item) => !['Services', 'Solutions', 'AI & ML'].includes(item.label)).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 xl:px-5 py-2 text-copy xl:text-lg font-medium text-gray-900 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Tablet Navigation — visible only at md (768-1023px) */}
            <div className="hidden md:flex md:items-center md:space-x-0.5 lg:hidden">
              {/* AI Dropdown — hidden from UI (AI Services now leads the Services mega menu) */}
              {/* <div
                data-dropdown="ai-ml"
                className="relative"
                onMouseEnter={() => handleDropdownEnter('ai-ml')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => toggleDropdown('ai-ml')}
                  className="flex items-center px-3 py-2 text-copy-sm font-medium text-gray-900 hover:text-black transition-colors rounded-md hover:bg-gray-100"
                  aria-expanded={activeDropdown === 'ai-ml'}
                  aria-haspopup="true"
                >
                  AI
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'ai-ml' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              </div> */}


              {/* Advisory Dropdown */}
              <div
                data-dropdown="advisory"
                className="relative"
                onMouseEnter={() => handleDropdownEnter('advisory')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => toggleDropdown('advisory')}
                  className="flex items-center px-3 py-2 text-copy-sm font-medium text-gray-900 hover:text-black transition-colors rounded-md hover:bg-gray-100"
                  aria-expanded={activeDropdown === 'advisory'}
                  aria-haspopup="true"
                >
                  Advisory
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'advisory' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              </div>


              {/* Services Dropdown */}
              <div
                data-dropdown="services"
                className="relative"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center px-3 py-2 text-copy-sm font-medium text-gray-900 hover:text-black transition-colors rounded-md hover:bg-gray-100"
                  aria-expanded={activeDropdown === 'services'}
                  aria-haspopup="true"
                >
                  What We Do
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              </div>


              {/* Industries Dropdown */}
              <div
                data-dropdown="industries"
                className="relative"
                onMouseEnter={() => handleDropdownEnter('industries')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => toggleDropdown('industries')}
                  className="flex items-center px-3 py-2 text-copy-sm font-medium text-gray-900 hover:text-black transition-colors rounded-md hover:bg-gray-100"
                  aria-expanded={activeDropdown === 'industries'}
                  aria-haspopup="true"
                >
                  Industries
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              </div>

              {/* Solutions Dropdown — hidden from UI (content preserved) */}
              {/* <div
                data-dropdown="solutions"
                className="relative"
                onMouseEnter={() => handleDropdownEnter('solutions')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => toggleDropdown('solutions')}
                  className="flex items-center px-3 py-2 text-copy-sm font-medium text-gray-900 hover:text-black transition-colors rounded-md hover:bg-gray-100"
                  aria-expanded={activeDropdown === 'solutions'}
                  aria-haspopup="true"
                >
                  Solutions
                  <ChevronDown
                    className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === 'solutions' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div> */}

              {/* Other Nav Links */}
              {NAVIGATION.main.filter((item) => !['Services', 'Solutions', 'AI & ML', 'Industries'].includes(item.label)).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-copy-sm font-medium text-gray-900 hover:text-black transition-colors rounded-md hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right track — mirrors the left track's `lg:flex-1` so the nav sits
                centred. Holds both the desktop CTA and the mobile toggle, which
                are mutually exclusive by breakpoint. */}
            <div className="flex flex-none items-center justify-end lg:flex-1">
              {/* CTA Buttons — visible from md */}
              <div className="hidden md:flex md:items-center md:space-x-1.5 lg:space-x-3">
                <Button
                  size="sm"
                  asChild
                  className="bg-brand-600 text-white hover:bg-brand-700 text-copy-sm lg:text-copy h-9 lg:h-10 px-4 lg:px-5 font-semibold shadow-sm"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Mobile Menu Button — hidden from md */}
              <button
                onClick={() => {
                  setHasOpenedMobileMenu(true);
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                /* min-h/w-11: p-2 around a 24px icon gave a 40x40 target, under the
                   44px finger minimum. The icon is unchanged. */
                className="md:hidden flex min-h-11 min-w-11 items-center justify-center rounded-lg text-brand-700 hover:bg-brand-50 transition-colors shrink-0"
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
          </div>
          </Container>
        </nav>
      </header>

      {/* Mega-menu panels are always in the DOM and shown/hidden with CSS, not
          mounted conditionally.

          They used to render only while `activeDropdown` matched, which meant the
          server HTML contained ZERO links to the ~36 service, solution and industry
          pages — the nav was invisible to crawlers, and those pages were reachable
          only via the sitemap with no internal anchor text. `display:none` content
          is still parsed and indexed, and this is the ordinary way an accessible
          dropdown behaves, so the links are genuinely present rather than cloaked.

          `display:none` also keeps them out of the tab order while closed, so no
          `inert` handling is needed. */}
      {/* AI Mega Menu Dropdown — disabled (set to false). Its trigger is hidden and
          every link it held now renders in the Services mega menu, so keeping this
          panel mounted would only duplicate those links in the crawlable HTML. */}
      {false && (
        <div
          data-dropdown="ai-ml"
          className={`fixed top-16 md:top-18 lg:top-20 left-0 right-0 z-40 ${
            activeDropdown === 'ai-ml' ? 'hidden md:block' : 'hidden'
          }`}
          onMouseEnter={() => handleDropdownEnter('ai-ml')}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 md:top-18 lg:top-20 bg-black/30 backdrop-blur-[2px]"
            onClick={closeDropdown}
          />

          <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-md mx-auto px-4 md:px-6 pt-2 md:pt-3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden">
                {/* Columns — Automation & Intelligence */}
                <div className="grid grid-cols-1 divide-x divide-gray-100">
                  {NAVIGATION.aiMlMenu.groups.map((group) => {
                    const CategoryIcon = iconMap[group.icon] || Code2;
                    return (
                      <div key={group.title} className="p-4 md:p-5 lg:p-6">
                        {/* Column Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-brand-600" />
                          </div>
                          <div>
                            <h3 className="text-copy-sm md:text-copy font-bold text-gray-900">
                              {group.title}
                            </h3>
                            <p className="text-[10px] md:text-label text-gray-400">
                              {group.description}
                            </p>
                          </div>
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
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label md:text-copy-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                  <span className="flex-1 leading-snug">{link.label}</span>
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
                  <p className="text-[11px] md:text-label text-gray-500">
                    Explore AI capabilities
                  </p>
                  <Link
                    href="/book-consultation"
                    onClick={closeDropdown}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-label font-semibold text-brand-600 hover:text-brand-700 transition-colors"
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


      {/* Services Mega Menu Dropdown — visible from md */}
      {(
        <div
          data-dropdown="services"
          className={`fixed top-16 md:top-18 lg:top-20 left-0 right-0 z-40 ${
            activeDropdown === 'services' ? 'hidden md:block' : 'hidden'
          }`}
          onMouseEnter={() => handleDropdownEnter('services')}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 md:top-18 lg:top-20 bg-black/30 backdrop-blur-[2px]"
            onClick={closeDropdown}
          />

          <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 pt-2 md:pt-3">
              {/* Four columns of 5-12 links each can outgrow a laptop viewport once the
                  grid drops to 2-up, so the card is height-capped and scrolls its own
                  overflow instead of running off the bottom of the screen. */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden flex flex-col max-h-[calc(100vh-6rem)]">
                {/* Columns — 4 across from lg (AI Services, Advisory, Software Engineering,
                    Infrastructure), 2×2 below that. Separators are per-child rather than
                    `divide-*`: on a wrapped grid, `divide-y` puts a rule above every child
                    but the first, which lands a stray rule mid-row. These target the real
                    edges — right edge of each non-final column, bottom edge of each
                    non-final row. */}
                <div className="overflow-y-auto overscroll-contain grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [&>*]:border-gray-100 [&>*:not(:last-child)]:border-b sm:[&>*]:border-b-0 sm:[&>*:nth-child(-n+2)]:border-b sm:[&>*:nth-child(odd)]:border-r lg:[&>*]:border-b-0 lg:[&>*:not(:last-child)]:border-r">
                  {NAVIGATION.servicesMenu.map((column) => {
                    const CategoryIcon = iconMap[column.icon] || Code2;
                    return (
                      <div key={column.title} className="p-4 md:p-5 lg:p-5">
                        {/* Column Header */}
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
                          {column.links.map((link) => {
                            const LinkIcon = iconMap[link.icon] || Code2;
                            return (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={closeDropdown}
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label md:text-copy-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                  <span className="flex-1 leading-snug">{link.label}</span>
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

                {/* Bottom CTA bar — stays pinned below the scroll area, not scrolled away with it */}
                <div className="shrink-0 bg-gray-50/80 border-t border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between">
                  <p className="text-[11px] md:text-label text-gray-500">
                    Not sure where to start?
                  </p>
                  <Link
                    href="/book-consultation"
                    onClick={closeDropdown}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-label font-semibold text-brand-600 hover:text-brand-700 transition-colors"
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


      {/* Industries Mega Menu Dropdown — visible from md */}
      {(
        <div
          data-dropdown="industries"
          className={`fixed top-16 md:top-18 lg:top-20 left-0 right-0 z-40 ${
            activeDropdown === 'industries' ? 'hidden md:block' : 'hidden'
          }`}
          onMouseEnter={() => handleDropdownEnter('industries')}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 md:top-18 lg:top-20 bg-black/30 backdrop-blur-[2px]"
            onClick={closeDropdown}
          />

          <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-md mx-auto px-4 md:px-6 pt-2 md:pt-3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden">
                {/* Columns — Industries */}
                <div className="grid grid-cols-1 divide-x divide-gray-100">
                  {NAVIGATION.industriesMenu.groups.map((group) => {
                    const CategoryIcon = iconMap[group.icon] || Code2;
                    return (
                      <div key={group.title} className="p-4 md:p-5 lg:p-6">
                        {/* Column Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-brand-600" />
                          </div>
                          <div>
                            <h3 className="text-copy-sm md:text-copy font-bold text-gray-900">
                              {group.title}
                            </h3>
                            <p className="text-[10px] md:text-label text-gray-400">
                              {group.description}
                            </p>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent my-2 md:my-3" />

                        {/* Links */}
                        <ul className="space-y-0.5">
                          {group.links
                            .filter((link) => link.showInNavigationMenu)
                            .map((link) => {
                            const LinkIcon = iconMap[link.icon] || Code2;
                            return (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={closeDropdown}
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label md:text-copy-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                  <span className="flex-1 leading-snug">{link.label}</span>
                                  <ArrowRight className="h-3 w-3 ml-auto text-gray-300 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 flex-shrink-0" />
                                </Link>
                              </li>
                            );
                          })}

                          {/* See all Industries — emphasized view-all row, aligned with the list */}
                          <li className="mt-1">
                            <Link
                              href="/industry"
                              onClick={closeDropdown}
                              className="group/all flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label md:text-copy-sm font-semibold text-brand-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                            >
                              <LayoutGrid className="h-3 w-3 md:h-3.5 md:w-3.5 text-brand-500 flex-shrink-0" />
                              <span className="flex-1 leading-snug">See all Industries</span>
                              <ArrowRight className="h-3.5 w-3.5 ml-auto text-brand-400 transition-transform duration-150 group-hover/all:translate-x-0.5 flex-shrink-0" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom CTA bar */}
                <div className="bg-gray-50/80 border-t border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between">
                  <p className="text-[11px] md:text-label text-gray-500">
                    Don&apos;t see your industry?
                  </p>
                  <Link
                    href="/book-consultation"
                    onClick={closeDropdown}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-label font-semibold text-brand-600 hover:text-brand-700 transition-colors"
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
      {(
        <div
          data-dropdown="solutions"
          className={`fixed top-16 md:top-18 lg:top-20 left-0 right-0 z-40 ${
            activeDropdown === 'solutions' ? 'hidden md:block' : 'hidden'
          }`}
          onMouseEnter={() => handleDropdownEnter('solutions')}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 md:top-18 lg:top-20 bg-black/30 backdrop-blur-[2px]"
            onClick={closeDropdown}
          />

          <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-2 md:pt-3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden">
                {/* Columns — one per solution group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {NAVIGATION.solutionsMenu.map((group) => {
                    const GroupIcon = iconMap[group.icon] || Code2;
                    return (
                      <div key={group.heading} className="p-4 md:p-5 lg:p-6">
                        {/* Group Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                            <GroupIcon className="h-4 w-4 text-brand-600" />
                          </div>
                          <div>
                            <h3 className="text-copy-sm md:text-copy font-bold text-gray-900">
                              {group.heading}
                            </h3>
                            <p className="text-[10px] md:text-label text-gray-400">
                              {group.description}
                            </p>
                          </div>
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
                                  className="group/link flex items-center gap-2 py-1.5 md:py-[7px] px-2 md:px-2.5 -mx-1 rounded-lg text-label md:text-copy-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50/70 transition-all duration-150"
                                >
                                  <LinkIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-400 group-hover/link:text-brand-500 transition-colors flex-shrink-0" />
                                  <span className="flex-1 leading-snug">{link.label}</span>
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
                  <p className="text-[11px] md:text-label text-gray-500">
                    Need a custom solution?
                  </p>
                  <Link
                    href="/book-consultation"
                    onClick={closeDropdown}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-label font-semibold text-brand-600 hover:text-brand-700 transition-colors"
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

      {/* Mobile Menu — hidden from md. Not mounted until first opened, so its
          chunk never downloads for visitors who don't use it. Once mounted it
          stays, so subsequent open/close keeps the slide transition. */}
      {hasOpenedMobileMenu && (
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20 md:h-18 lg:h-20" />
    </>
  );
}
