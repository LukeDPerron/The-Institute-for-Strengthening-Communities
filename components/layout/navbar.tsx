"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

// Responsive header with mobile menu toggle.
// Fixed at the top of the viewport; transparent at the top, solid on scroll.
// The top-level nav button for the current page's group is underlined.
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // A nav group is "active" when the current pathname matches any of its dropdown hrefs.
  const isGroupActive = (item: (typeof siteConfig.navItems)[number]) =>
    item.items.some((d) => d.href === pathname);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* Logo / branding — always on the left */}
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="inline-flex shrink-0 items-center"
        >
          <Image
            src="/transparent_Logo.png"
            alt={`${siteConfig.name} logo`}
            width={619}
            height={70}
            priority
            className="h-auto w-48 sm:w-56 lg:w-80"
          />
        </Link>

        {/* Desktop: horizontal nav links + prominent Donate button */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5" role="list">
            {siteConfig.navItems.map((item) => {
              const active = isGroupActive(item);
              return (
              <li key={item.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-label={`${item.label} menu`}
                  aria-current={active ? "page" : undefined}
                  className={`cursor-pointer text-[18px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 ${
                    active ? "underline underline-offset-4" : ""
                  } text-slate-700 hover:text-orange-600`}
                >
                  {item.label}
                </button>

                <ul
                  role="menu"
                  className="invisible absolute left-0 top-full z-20 mt-1 min-w-44 space-y-1 rounded-md border border-slate-200 bg-white p-2 opacity-0 shadow-md transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
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
          className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 md:hidden"
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
              const active = isGroupActive(item);
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
                          onClick={() => setIsOpen(false)}
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
