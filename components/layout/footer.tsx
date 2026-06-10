import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// Shared footer for quick navigation and basic organization info.
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <section>
          <h2 className="text-base font-semibold text-slate-900">{siteConfig.name}</h2>

          <Link
            href={siteConfig.donateHref}
            className="mt-5 inline-flex rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Donate
          </Link>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Quick links
          </h3>
          <ul className="mt-3 space-y-2">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>info@isc-placemaking.org</li>
            <li>(248) 882-5330</li>
            <li>4199 West Four Lakes Drive, Linden, MI 48451</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
