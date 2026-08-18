"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

// Pages that have a full-width hero/banner image behind the navbar.
// On these pages the navbar overlays the banner and stays transparent.
// On all other pages the navbar is always white.
const BANNER_PAGES = ["/about"];

// Responsive header with mobile menu toggle.
// Sits at the top of the page; overlays banner pages and stays transparent there.
// The top-level nav button for the current page's group is underlined.
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleTopLevelNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent focus-within styles from keeping the dropdown visible after click navigation.
    if (event.detail > 0) {
      event.currentTarget.blur();
    }
  };

  const isNavGroupActive = (label: string) => {
    if (pathname === "/") return false;

    const navItem = siteConfig.navItems.find((item) => item.label === label);
    if (!navItem) return false;

    return navItem.items.some((dropdownItem) => dropdownItem.href.split("#")[0] === pathname);
  };

  const hasBanner = BANNER_PAGES.includes(pathname);
  const isWhite = !hasBanner;

  return (
    <header
      className={`${hasBanner ? "absolute left-0 top-0" : ""} z-50 w-full transition-colors duration-300 ${
        isWhite
          ? "border-b border-slate-200 bg-white/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8"
      >
        {/* Logo / branding — always on the left */}
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="inline-flex shrink-0 items-center lg:-ml-28"
        >
          <Image
            src="/Transparent_Logo.png"
            alt={`${siteConfig.name} logo`}
            width={619}
            height={70}
            priority
            className="h-auto w-36 sm:w-44 lg:w-72"
          />
        </Link>

        {/* Desktop: horizontal nav links + prominent Donate button */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5" role="list">
            {siteConfig.navItems.map((item) => {
              const active = isNavGroupActive(item.label);
              const groupHref = item.items[0]?.href.split("#")[0] ?? "/";
              return (
              <li key={item.label} className="group relative pt-1">
                <Link
                  href={groupHref}
                  aria-haspopup="true"
                  aria-label={`${item.label} menu`}
                  aria-current={active ? "page" : undefined}
                  onClick={handleTopLevelNavClick}
                  className={`cursor-pointer text-[18px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 ${
                    active ? "underline underline-offset-4" : ""
                  } ${
                    isWhite
                      ? "text-slate-700 hover:text-orange-600"
                      : "text-white drop-shadow hover:text-orange-300"
                  }`}
                >
                  {item.label}
                </Link>

                <ul
                  role="menu"
                  className="invisible absolute left-0 top-full z-20 min-w-44 space-y-1 rounded-md border border-slate-200 bg-white p-2 opacity-0 shadow-md transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                >
                  {item.items.map((dropdownItem) => (
                    <li key={`${item.label}-${dropdownItem.label}`} role="none">
                      <Link
                        href={dropdownItem.href}
                        role="menuitem"
                        className="block rounded-md px-3 py-1.5 text-[18px] text-slate-700 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              );
            })}
          </ul>

          <Link
            href={siteConfig.donateHref}
            className="rounded-md bg-orange-500 px-4 py-2 text-[18px] font-semibold text-white hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Donate
          </Link>
        </div>

        {/* Mobile: hamburger toggle */}
        <button
          type="button"
          className={`inline-flex min-h-11 items-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 md:hidden ${
            isWhite
              ? "border-slate-300 text-slate-700 hover:bg-slate-50"
              : "border-white/70 text-white hover:bg-white/10"
          }`}
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu — always solid white for readability */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <ul className="space-y-1 px-4 py-3">
            <li>
              <Link
                href={siteConfig.donateHref}
                className="block rounded-md bg-orange-500 px-4 py-2.5 text-center text-[18px] font-semibold text-white hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </li>
            {siteConfig.navItems.map((item) => {
              const active = isNavGroupActive(item.label);
              return (
              <li key={item.label}>
                <details>
                  <summary className={`cursor-pointer list-none rounded-md px-2 py-2 text-[18px] font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 ${
                    active ? "underline underline-offset-4" : ""
                  }`}>
                    {item.label}
                  </summary>
                  <ul className="mt-1 space-y-1 pl-4">
                    {item.items.map((dropdownItem) => (
                      <li key={`${item.label}-${dropdownItem.label}`}>
                        <Link
                          href={dropdownItem.href}
                          className="block rounded-md px-2 py-2 text-[18px] text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
