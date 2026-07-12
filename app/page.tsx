// ============================================================
// HOMEPAGE — PLACEHOLDER CONTENT GUIDE
// ============================================================
// Search for the sections below to find each replaceable item:
//
//  1. BOARD MEMBERS  — boardMembers array (~line 50)
//     Replace name, title, and imageSrc for each board member.
//     Images live in /public/images/home/ (create this folder and
//     add real headshots there).
//
//  2. MISSION QUOTE  — homepageContent.missionQuote (~line 80)
//     Replace the string with the real mission statement excerpt.
//
//  3. MISSION BG IMAGE — homepageContent.missionBg (~line 85)
//     Replace with the real background photo for the mission box.
//
//  4. MAIN PHOTOS    — homepageContent.mainPhotos (~line 90)
//     Replace image, caption, and optional title for each featured gallery photo.
//
//  5. PROGRAMS/EVENTS — homepageContent.programPhotos (~line 110)
//     Replace image, caption, and optional title for each program or event photo.
//
//  6. TESTIMONIES    — homepageContent.testimonies (~line 130)
//     Replace image, caption, and optional title for each student testimony card.
// ============================================================

import Image from "next/image";
import Link from "next/link";
import { PhotoCarousel } from "@/components/home/PhotoCarousel";
import { boardMembers, homepageContent, type TeamMember } from "@/lib/cms/homepage-content";

// ── LOCAL COMPONENTS ──────────────────────────────────────────────────────────

/** Small card displayed in the Board of Directors sidebar. */
function BoardMemberCard({ name, title, imageSrc }: TeamMember) {
  return (
    <article className="flex w-28 shrink-0 flex-col items-center text-center lg:w-auto lg:shrink">
      <div className="relative h-20 w-20 overflow-hidden rounded-none bg-slate-100 ring-1 ring-slate-200">
        <Image
          src={imageSrc}
          alt={`Headshot of ${name}`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-900 leading-tight">
        <Link
          href="/board-of-directors"
          className="transition-colors hover:text-orange-700 hover:underline"
        >
          {name}
        </Link>
      </p>
      <p className="text-xs text-slate-500 leading-tight">{title}</p>
    </article>
  );
}

/** Top-left content box: mission quote layered over a background photo. */
function MissionBox({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {/* Background photo */}
      <Image
        src={homepageContent.missionBg}
        alt="Mission background"
        fill
        sizes="(max-width: 640px) 100vw, (max-width:1024px) 38vw, 35vw"
        className="object-cover opacity-60"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-7 py-12 text-center">
        <p className="mb-3 text-2xl font-extrabold uppercase tracking-[0.16em] text-white sm:text-3xl">
          Stronger Communities. 
        </p>
        <p className="mb-3 text-2xl font-extrabold uppercase tracking-[0.16em] text-orange-500 sm:text-3xl">
        Better Futures.
        </p>
        <blockquote className="mx-auto w-[75%]">
          <p className="text-lg font-medium leading-relaxed text-white drop-shadow sm:text-xl lg:text-2xl">
            {homepageContent.missionQuote}
          </p>
        </blockquote>
        <Link
          href="/about"
          className="mt-9 inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-xl font-semibold text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
        >
          Our Mission
        </Link>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-slate-50">
      <div className="w-full py-0">

        {/* ── Outer layout: sidebar + main grid ── */}
        <div className="grid grid-cols-1 gap-px lg:grid-cols-[210px_minmax(0,1fr)]">

          {/* ── LEFT SIDEBAR: Board of Directors ── */}
          <aside
            aria-label="Board of Directors"
            className="order-last w-full lg:order-none"
          >
          <div className="h-full rounded-none border border-slate-200 bg-white p-4">
              <h2 className="mb-5 text-center text-base font-bold uppercase tracking-widest text-slate-700">
                Board of Directors
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-2 lg:block lg:space-y-6 lg:overflow-visible lg:pb-0">
                {boardMembers.map((member) => (
                  <BoardMemberCard key={`${member.name}-${member.title}`} {...member} />
                ))}
              </div>
            </div>
          </aside>

          {/*MAIN CONTENT GRID*/}
          <div className="order-first min-w-0 grid grid-cols-1 gap-px sm:grid-cols-2 lg:order-none">

            {/* Top box: Mission statement */}
            <div className="h-[88dvh] sm:col-span-2 sm:h-auto sm:min-h-[385px] lg:min-h-[300px]">
              <MissionBox className="h-full w-full" />
            </div>

            {/* Bottom-leftMain Photos carousel (moved from top-right) */}
            <div
              className="h-[100dvh] overflow-hidden rounded-none sm:h-[375px] lg:min-h-[405px]"
              aria-label="Featured Photos"
            >
              <PhotoCarousel
                slides={homepageContent.mainPhotos}
                className="h-full w-full"
                sectionLabel="Our Programs in Action"
                captionClassName="sm:text-base lg:text-lg"
                imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 62vw, 50vw"
                eager
                autoPlay
              />
            </div>

            {/* Bottom-right: Student Testimonies */}
            <div
              className="h-[100dvh] overflow-hidden rounded-none sm:h-[375px] lg:min-h-[405px]"
              aria-label="Student Testimonies"
            >
              <PhotoCarousel
                slides={homepageContent.testimonies}
                className="h-full w-full"
                sectionLabel=""
                showDarkOverlay={false}
                imageSizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
