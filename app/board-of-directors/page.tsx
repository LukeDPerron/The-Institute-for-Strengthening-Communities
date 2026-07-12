import Image from "next/image";
import Link from "next/link";
import { boardMembers } from "@/lib/cms/about-content";

export default function BoardOfDirectorsPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-700">Leadership</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Board of Directors</h1>
          <p className="mt-3 max-w-3xl text-base text-slate-700">
            Learn more about the individuals serving on the Board of Directors.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center text-sm font-semibold text-orange-700 underline-offset-2 hover:underline"
          >
            Back to home
          </Link>
        </div>

        <section className="space-y-6" aria-label="Board members">
          {boardMembers.map((member) => {
            return (
              <article
                key={`${member.name}-${member.role}`}
                className="grid gap-5 border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[170px_minmax(0,1fr)]"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 sm:h-48">
                  <Image
                    src={member.imageSrc}
                    alt={`Headshot of ${member.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 170px"
                    className={member.name === "David A. Bloom, M.D." ? "object-cover object-top" : "object-cover"}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{member.name}</h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-orange-700">{member.role}</p>
                  <p className="mt-3 text-base leading-6 text-slate-700">{member.bio}</p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
