"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

// Responsive header with mobile menu toggle.
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-emerald-700">
          {siteConfig.name}
        </Link>

        <button
          className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm font-medium text-slate-700 hover:text-emerald-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen ? (
        <ul className="space-y-1 border-t border-slate-200 px-4 py-3 md:hidden">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
