'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ENABLED_NAV_ITEMS, type NavItem, type NavMenuKey } from '@/lib/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/brand/Logo';
import { Container } from '@/components/shared/primitives';
import { NavMegaPanel } from './NavMegaPanel';
import { ChevronDown, Menu, X } from './nav-icons';
import dynamic from 'next/dynamic';

// The mobile menu is ~27 KB plus its icon modules, and it was mounted
// unconditionally on every route — including desktop, where it can never open.
// Loading it on demand keeps it out of the first-paint bundle and the initial
// hydration pass.
const MobileMenu = dynamic(
  () => import('./MobileMenu').then((m) => m.MobileMenu),
  { ssr: false }
);

// The dropdown subset, in nav order. Derived once at module scope so the trigger
// row and the panel list below cannot disagree about which panels exist.
const NAV_DROPDOWNS = ENABLED_NAV_ITEMS.filter(
  (item): item is Extract<NavItem, { type: 'dropdown' }> => item.type === 'dropdown'
);

// Shared trigger styling. Links and dropdown buttons must be visually identical
// apart from the chevron, so both read from these rather than keeping their own
// copies — which is how the two used to drift.
//
// The scale is md-first because md is by far the tighter constraint: at 768 the
// logo takes 221px of the 720px content box, leaving 499px for six items. The
// old tablet row used px-3 + text-copy-sm and needed ~547px of that, so "Our
// Company" wrapped onto two lines inside a 72px-tall row and "Contact" was
// clipped mid-word at the container edge. (It was worse before this row was
// unified — the tablet block carried seven items.)
//
// `text-label` (15.25px at 768, vs text-copy-sm's 17.2px) plus px-1.5 fits, but
// only just: MEASURED SLACK AT 768 IS 7px. text-label is a real step on the
// scale and sits above the documented 14px prose floor, so this is a type
// choice rather than shrink-to-fit — but the margin is not comfortable.
//
// An intermediate px-2 was tried first and left ~0px: nothing overflowed the
// container, but flex shrank "Our Company" to min-content and it wrapped onto
// two lines inside the 72px row. px-1.5 is what actually clears it.
//
// CONSEQUENCE: a seventh enabled item, or a longer label than "Our Company",
// will not fit at md. The durable fix if that happens is to start the horizontal
// nav at lg and let the drawer serve md as well (drop `md:` from the nav block
// and `md:hidden` from the toggle) — the drawer already renders this exact list
// in this exact order, so nothing about the nav's contract changes.
//
// NOTE the absence of `whitespace-nowrap` below lg. It fits now, so nothing
// wraps; leaving wrap available at md keeps the old escape hatch if a label is
// ever added. `lg:whitespace-nowrap` turns it off from lg up, where there is
// room and a future overflow should present as overflow rather than as silent
// wrapping.
//
// NOTE `lg:px-2.5` runs unbroken through xl (there is no `xl:px-*`). That is what
// pays for true centring at 1280: the nav is truly centred from xl up (see the
// nav block below), and a truly centred row only clears the 252px logo if it is
// narrow enough. MEASURED at 1280: px-5 made the nav 758px wide, which centred
// would START 32px INSIDE the logo; px-2.5 makes it 638px and leaves 28px of
// clearance. The type step (`xl:text-lg`) is kept — the row is tightened by
// padding, not by shrinking the labels. Clearance grows fast with width: 71px at
// 1366, 108px at 1440, and by 2xl `px-6` takes over with room to spare.
const NAV_ITEM_CLASS =
  'px-1.5 py-2 text-label font-medium text-gray-900 hover:text-black transition-colors rounded-md hover:bg-gray-100 ' +
  'lg:whitespace-nowrap lg:rounded-lg lg:px-2.5 lg:text-copy xl:text-lg 2xl:px-6 3xl:px-8 3xl:text-xl 4xl:px-10';

// The chevron hangs PARTLY inside the trigger's right padding (negative right
// margin) instead of adding its full width to the item.
//
// Why: every item sits on the same box gap, but the eye measures the rhythm
// label-to-label, and a chevron that adds its full footprint breaks it. Measured
// at 1512 before this: five of six gaps were 48px text-to-text and the one after
// "Services" was 74px — the chevron's 6px margin plus a 20px glyph, exactly 26px
// of extra space, which read as a hole beside the dropdown.
//
// The correction absorbs roughly half of that rather than all of it. Absorbing
// the whole 26px does make the label rhythm exactly even, but it parks the
// chevron hard against the next label so it reads as belonging to THAT item —
// tried and rejected. Half lands the gap at 60px against 48px, with the glyph
// still visibly tied to its own label.
//
// The negative margin scales with the padding it hangs in and must never exceed
// it: at md the padding is only 6px, so -mr-1 leaves 2px; the chevron would
// otherwise cross into the next item. It also caps at 16px (the old
// `xl:h-5 w-5` made a 20px glyph against 20px text, which is what made the
// footprint so large in the first place).
const NAV_CHEVRON_CLASS =
  'ml-1 -mr-1 h-3.5 w-3.5 transition-transform duration-200 lg:-mr-1.5 lg:h-4 lg:w-4 xl:-mr-2';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Latches on the first open so the lazily-loaded MobileMenu stays mounted.
  const [hasOpenedMobileMenu, setHasOpenedMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<NavMenuKey | null>(null);
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

  const toggleDropdown = (menu: NavMenuKey) => {
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

  const handleDropdownEnter = (menu: NavMenuKey) => {
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
        {/* Back to `default`, and the long-running argument over this row is now
            moot rather than decided. The history: full-bleed was rejected once
            because at 2560 the logo sat at 32px while section content started at
            304px and the header read as a different page than the body; then it
            was reinstated because a logo visibly inset from the screen edge was
            the more noticeable of the two problems. Both objections shared one
            cause — `default` did not reach the gutter.

            It does now (2026-08-24, see Container's header comment), so the logo
            sits on the gutter at 48px AND lands on the same edge as every section
            below it. `default` also beats `full` past 2560: `full` is uncapped, so
            at 3840 the logo stayed at 48 while capped body content started at 688.

            Whatever this is, set it in Container, not as a local override — an
            earlier attempt passed `className="max-w-none"`, which silently did
            nothing: tailwind-merge dropped the unprefixed `max-w-[80rem]` but left
            `xl:`/`2xl:`/`3xl:`/`4xl:max-w-*` standing, so every width above 1280
            stayed capped. */}
        <nav aria-label="Main navigation">
          <Container width="default">
          {/* Logo on the viewport's left edge; the nav block centred.

              Centring is done TWO different ways on purpose, because one way alone
              cannot cover the range:

              • xl and up (1280+) — `absolute left-1/2 -translate-x-1/2` against this
                `relative` row. The row spans the full viewport minus gutters and is
                `mx-auto`, so its centre IS the viewport centre: measured 0px off at
                1280/1366/1440/1536/1920/2560. This is TRUE centring, unaffected by
                the logo.
              • lg to just under xl (1024-1279) — `mx-auto`, which centres the nav in
                the space LEFT OVER after the logo, so it sits ~126px (half the logo)
                right of true centre. Not a preference: at 1024 the six items need
                642px, while a truly centred row that clears the 252px logo has only
                ~424px to work with. There is no sizing that fits, so `mx-auto` is
                the honest fallback — auto margins consume free space and therefore
                cannot overlap the logo.
              • md — neither applies; the nav sits in the `justify-between` row
                between the logo and the mobile-toggle track, as it always has.

              Absolute centring used to start at 2xl, which left 1280-1535 visibly
              off-centre. It starts at xl now because NAV_ITEM_CLASS drops `xl:px-5`
              to `lg:px-2.5` — see the measurements there. Worst-case clearance
              between logo and first item is 28px at exactly 1280, growing to 71px at
              1366 and 108px at 1440. If 1280 ever reads as too tight, the lever is
              that padding, not this breakpoint.

              The right-hand slack (~390px at 2560, ~283px at 1536) is deliberately
              LEFT EMPTY (confirmed 2026-08-24), as is the matching gap beside the
              logo. Re-enabling the CTA below is what would fill it; that would also
              need "Contact" set to `isEnabled: false` in NAVIGATION.main to avoid
              showing twice, and the nav would then want `ml-auto` rather than
              centring.

              Earlier layouts, so they aren't retried: `lg:ml-auto` anchored the nav
              to the right edge and pushed ALL slack into one 527px gap beside the
              logo; `lg:ml-4` tucked it against the logo and pushed all of it to the
              right instead. Both were rejected in review.

              The tracks keep `flex-none` and the default `shrink: 1`. At md the row
              can be wider than the container, so it survives only by shrinking below
              max-content (the labels wrap); basis-0 tracks or `shrink-0` both break
              that — which is also why `justify-start` is lg-only. */}
          <div className="relative flex items-center justify-between h-20 md:h-18 lg:h-20">
            {/* Left track — logo + wordmark, pulled MOST of the way out of the
                container gutter from lg up, landing on a constant 16px inset.

                The negative-margin ladder is Container's GUTTER ladder
                (`lg:px-8 xl:px-10 2xl:px-12`) MINUS 16px at every tier: 32-16,
                40-16, 48-16. That subtraction is the whole design — one fixed 16px
                edge margin instead of a gutter that grows 32→48 with the viewport.
                If the gutter ladder gains a tier, this gains the matching tier at
                (gutter - 16); otherwise the inset silently stops being 16.
                MEASURED: logo left = 16 at 1024/1280/1440/1920/2560.

                Requested 2026-08-31, in two passes. First the gutter inset (48px at
                1920) read as "the logo isn't left-aligned"; cancelling the gutter
                outright put the mark at x=0, which then read as sticking to the
                browser edge. 16px is the settled answer: unmistakably edge-anchored,
                but with the tile clear of the border.

                KNOWN TRADE-OFF, accepted with the request — this breaks the shared
                left edge that Container exists to enforce, so the brand mark starts
                32px left of where every body section starts at 1920. That alignment
                was the reason the header rode the gutter at all (see Container's
                header comment and constitution changelog v2.3).

                Only lg and up. Below lg the row keeps its gutter untouched: at 375
                it is already px-5 = 20px, which is within 4px of the target inset
                anyway, and the toggle on the right sits on that same 20px — pulling
                only the logo out would unbalance the two ends of the row for nothing.

                It is a negative margin on the track, NOT `px-0` on the Container: the
                right track holds the mobile toggle and a place for a re-enabled CTA,
                and neither should be dragged to the edge with the logo. A margin also
                only moves this box; the container's own edges stay where the rest of
                the header expects them.

                Side effect at lg (1024-1279) ONLY: the freed 16px becomes free space
                that the nav's `mx-auto` splits, so the nav sits ~8px further right
                there. It is already ~126px off true centre at lg for reasons no
                margin can fix (see above), so this is noise inside a known gap. From
                xl up the nav is absolutely centred and completely unaffected. */}
            <div className="flex flex-none items-center justify-start lg:-ml-4 xl:-ml-6 2xl:-ml-8">
              <Logo idPrefix="logo-header" />
            </div>

            {/* Navigation — ONE block from md up.

                It used to be two: a `lg:` block and a separate `md:...lg:hidden`
                block, each with its own hardcoded dropdown triggers and its own
                `.filter()` over the nav list by label string. They drifted, which is
                the whole reason this is now a single `.map()` over
                ENABLED_NAV_ITEMS — same items, same order, every width. Sizing that
                the two blocks used to encode separately is now responsive classes on
                NAV_ITEM_CLASS.

                Item padding and gaps scale all the way to 4xl rather than freezing
                early, for two reasons pulling in opposite directions (the one
                exception is xl, which deliberately holds `lg:px-2.5` so the truly
                centred row clears the logo at 1280 — see NAV_ITEM_CLASS):

                WIDE — with the logo on the container's left edge, slack lands in ONE
                gap between logo and nav. At 1920 that gap was 527px and read as a
                hole. Widening the nav is the only way to close it without opening a
                matching hole on the right, and a 20px nav on a 1920 display was
                undersized anyway, so `3xl:text-xl` earns its place twice.

                NARROW — `lg:px-2.5` (down from px-4) because at exactly 1024 the six
                items plus the logo needed ~780px of a 708px track, and flex resolved
                that by wrapping every label onto two lines.

                An earlier attempt gated the desktop nav at `min-[1180px]` and handed
                1024-1180 to the tablet block. Reverted twice over: Tailwind generated
                `min-[1180px]:flex` but NOT the matching `ml-auto`/`hidden`, so the nav
                lost its anchor and both blocks rendered at once. Use the named
                breakpoints here. */}
            <div className="hidden md:flex md:items-center md:gap-x-0.5 lg:mx-auto lg:gap-x-1 xl:absolute xl:left-1/2 xl:mx-0 xl:-translate-x-1/2 xl:gap-x-2 2xl:gap-x-3 3xl:gap-x-4 4xl:gap-x-6">
              {ENABLED_NAV_ITEMS.map((item) =>
                item.type === 'dropdown' ? (
                  <div
                    key={item.menu}
                    data-dropdown={item.menu}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.menu)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      onClick={() => toggleDropdown(item.menu)}
                      className={`flex items-center ${NAV_ITEM_CLASS}`}
                      aria-expanded={activeDropdown === item.menu}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`${NAV_CHEVRON_CLASS} ${activeDropdown === item.menu ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                ) : (
                  <Link key={item.href} href={item.href} className={NAV_ITEM_CLASS}>
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right track — zero-width at lg and up (the CTA below is disabled), so
                it exists to hold the mobile toggle and to give a re-enabled CTA a
                place to land. The nav's centring pushes past it either way. */}
            <div className="flex flex-none items-center justify-end">
              {/* CTA Buttons — visible from md */}
                {false && (
                  <div className="hidden md:flex md:items-center md:space-x-1.5 lg:space-x-3">
                    <Button
                      size="sm"
                      asChild
                      className="bg-brand-600 text-white hover:bg-brand-700 text-copy-sm lg:text-copy h-9 lg:h-10 px-4 lg:px-5 font-semibold shadow-sm"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                )}
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

      {/* Mega-menu panels — one per enabled dropdown, same list that produced the
          triggers above. Each is always in the DOM and shown/hidden with CSS; see
          NavMegaPanel for why that matters for crawlability. */}
      {NAV_DROPDOWNS.map((item) => (
        <NavMegaPanel
          key={item.menu}
          menu={item.menu}
          isOpen={activeDropdown === item.menu}
          onMouseEnter={() => handleDropdownEnter(item.menu)}
          onMouseLeave={handleDropdownLeave}
          onClose={closeDropdown}
        />
      ))}

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
