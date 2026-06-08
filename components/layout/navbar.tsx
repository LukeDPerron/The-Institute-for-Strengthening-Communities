"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

// Responsive header with mobile menu toggle.
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const donateButtonClassName =
    "rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-700";

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="inline-flex shrink-0 items-center"
        >
          <Image
            src="/Logo.png"
            alt={`${siteConfig.name} logo`}
            width={619}
            height={70}
            priority
            className="h-auto w-48 sm:w-56 lg:w-64"
          />
        </Link>

        <button
          className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 hover:text-orange-500 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div className="hidden items-end gap-2 md:flex md:flex-col">
          <button type="button" className={donateButtonClassName}>
            Donate
          </button>

          <ul className="flex items-center gap-6">
            {siteConfig.navItems.map((item) => (
              <li key={item.label} className="group relative">
                <button
                  type="button"
                  className="cursor-pointer text-sm font-medium text-slate-700 hover:text-orange-500"
                  aria-label={`${item.label} menu`}
                >
                  {item.label}
                </button>

                <ul className="invisible absolute left-0 top-full z-20 min-w-44 space-y-1 rounded-md border border-slate-200 bg-white p-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.items.map((dropdownItem) => (
                    <li key={`${item.label}-${dropdownItem.label}`}>
                      <Link
                        href={dropdownItem.href}
                        className="block rounded-md px-2 py-1 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isOpen ? (
        <ul className="space-y-1 border-t border-slate-200 px-4 py-3 md:hidden">
          <li>
            <button type="button" className={`${donateButtonClassName} mb-1 py-2`}>
              Donate
            </button>
          </li>
          {siteConfig.navItems.map((item) => (
            <li key={item.label}>
              <details>
                <summary className="cursor-pointer rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-700">
                  {item.label}
                </summary>
                <ul className="space-y-1 pl-4">
                  {item.items.map((dropdownItem) => (
                    <li key={`${item.label}-${dropdownItem.label}`}>
                      <Link
                        href={dropdownItem.href}
                        className="block rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
