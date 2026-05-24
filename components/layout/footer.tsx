import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// Shared footer for quick navigation and basic organization info.
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">{siteConfig.name}</h2>
          <p className="mt-2 max-w-md text-sm text-slate-600">{siteConfig.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-4">
          {siteConfig.footerLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-slate-600 hover:text-emerald-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
