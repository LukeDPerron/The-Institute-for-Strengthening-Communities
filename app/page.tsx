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
import { homepageContent } from "@/lib/cms/homepage-content";
import { boardMembers, type TeamMember } from "@/lib/cms/about-content";

function getMemberAnchor(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ── LOCAL COMPONENTS ──────────────────────────────────────────────────────────

/** Small card displayed in the Board of Directors sidebar. */
function BoardMemberCard({ name, role, imageSrc }: TeamMember) {
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
          href={`/board-of-directors#${getMemberAnchor(name)}`}
          className="transition-colors hover:text-orange-700 hover:underline"
        >
          {name}
        </Link>
      </p>
      <p className="text-xs text-slate-500 leading-tight">{role}</p>
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-12 text-center sm:px-12">
        <p className="mb-4 text-3xl font-extrabold uppercase tracking-[0.14em] text-white sm:text-4xl">
          Stronger Communities. 
        </p>
        <p className="mb-6 text-3xl font-extrabold uppercase tracking-[0.14em] text-orange-500 sm:text-4xl">
        Better Futures.
        </p>
        <blockquote className="mx-auto w-[75%]">
          <p className="text-lg font-medium leading-relaxed text-white drop-shadow sm:text-xl lg:text-2xl">
            {homepageContent.missionQuote}
          </p>
        </blockquote>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-xl font-semibold text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
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
      <div className="w-full bg-[#f6f7f9] px-2 pb-0 pt-3 sm:px-3 sm:pb-0 sm:pt-3">

        {/* ── Outer layout: sidebar + main grid ── */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[240px_minmax(0,1fr)]">

          {/* ── LEFT SIDEBAR: Board of Directors ── */}
          <aside
            aria-label="Board of Directors"
            className="order-last w-full lg:order-none"
          >
          <div className="rounded-[4px] border border-[#e7e7e7] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] lg:max-h-[760px] lg:overflow-y-auto lg:p-3 xl:max-h-[800px] 2xl:max-h-[860px]">
              <h2 className="mb-5 text-center text-base font-bold uppercase tracking-widest text-slate-700 lg:mb-4">
                Board of Directors
              </h2>
              <div className="flex gap-3 overflow-x-auto pb-2 lg:block lg:space-y-3 lg:overflow-visible lg:pb-0">
                {boardMembers.map((member) => (
                  <BoardMemberCard key={`${member.name}-${member.role}`} {...member} />
                ))}
              </div>
            </div>
          </aside>

          {/*MAIN CONTENT GRID*/}
          <div className="order-first min-w-0 self-start grid grid-cols-1 gap-3 sm:grid-cols-2 lg:order-none">

            {/* Top box: Mission statement */}
            <div className="h-[88dvh] overflow-hidden rounded-[4px] border border-[#e7e7e7] shadow-[0_2px_8px_rgba(0,0,0,0.05)] sm:col-span-2 sm:h-auto sm:min-h-[400px] lg:min-h-[320px]">
              <MissionBox className="h-full w-full" />
            </div>

            {/* Bottom-leftMain Photos carousel (moved from top-right) */}
            <div
              className="h-[100dvh] overflow-hidden rounded-[4px] border border-[#e7e7e7] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] sm:h-[400px] lg:min-h-[420px] xl:min-h-[440px] 2xl:min-h-[480px]"
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
              className="h-[100dvh] overflow-hidden rounded-[4px] border border-[#e7e7e7] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] sm:h-[400px] lg:min-h-[420px] xl:min-h-[440px] 2xl:min-h-[480px]"
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
