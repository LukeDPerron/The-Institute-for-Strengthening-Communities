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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <section>
            <h3 className="text-sm font-semibold text-slate-900">Quick links</h3>
            <div className="mt-2 min-h-4" />
          </section>
          <section>
            <h3 className="text-sm font-semibold text-slate-900">Contact us</h3>
            <div className="mt-2 min-h-4" />
          </section>
          <section>
            <h3 className="text-sm font-semibold text-slate-900">Get Involved</h3>
            <div className="mt-2 min-h-4" />
          </section>
        </div>
      </div>
    </footer>
  );
}
