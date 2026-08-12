import Image from "next/image";
import { boardMembers } from "@/lib/cms/about-content";

function getMemberAnchor(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function BoardOfDirectorsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8">
        <header className="border-b border-slate-200 pb-12">
          <h1 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Board of Directors</h1>
        </header>

        <section className="divide-y divide-slate-200" aria-label="Board members">
          {boardMembers.map((member) => {
            return (
              <article
                key={`${member.name}-${member.role}`}
                id={getMemberAnchor(member.name)}
                className="grid items-start gap-6 py-8 md:grid-cols-[260px_minmax(0,1fr)] lg:gap-8 lg:py-10 lg:grid-cols-[300px_minmax(0,1fr)]"
              >
                <div className="relative h-64 w-full overflow-hidden border border-slate-200 bg-slate-100 md:h-[320px] lg:h-[360px]">
                  <Image
                    src={member.imageSrc}
                    alt={`Headshot of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 260px, 300px"
                    className={member.name === "David A. Bloom, M.D." ? "object-cover object-top" : "object-cover"}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{member.name}</h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-orange-700 sm:tracking-[0.12em]">{member.role}</p>
                  {member.bio ? (
                    <p className="mt-4 max-w-4xl break-words text-base leading-7 text-slate-700">{member.bio}</p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
