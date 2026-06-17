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
import { PhotoCarousel, type CarouselSlide } from "@/components/home/PhotoCarousel";

// ── 1. BOARD MEMBERS ─────────────────────────────────────────────────────────
// Replace each entry with the real name, title, and photo path.
// Recommended image size: 200×200 px square, stored in /public/images/home/
type BoardMember = {
  name: string;
  title: string;
  imageSrc: string;
};

const boardMembers: BoardMember[] = [
  {
    name: "Name Surname",
    title: "Board Chair",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
  {
    name: "Name Surname",
    title: "Vice Chair",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
  {
    name: "Name Surname",
    title: "Treasurer",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
  {
    name: "Name Surname",
    title: "Secretary",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
  {
    name: "Name Surname",
    title: "Director",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
];

// ── 2 & 3. MISSION QUOTE + MISSION BACKGROUND IMAGE ──────────────────────────
// ── 4. MAIN (FEATURED) PHOTOS ─────────────────────────────────────────────────
// ── 5. PROGRAMS / EVENTS ──────────────────────────────────────────────────────
// ── 6. TESTIMONIES ────────────────────────────────────────────────────────────
const homepageContent = {
  // 2. Replace this quote with the real mission statement excerpt.
  missionQuote:
    "Educating individuals and communities in democratic and restorative principles that strengthen trust, civic engagement, and collaboration.",

  // 3. Replace with the real mission-box background image path.
  missionBg: "/images/about/Mission.png",

  // 4. Replace each object's image/caption/title with real featured photos.
  mainPhotos: [
    {
      image: "/images/about/Header.jpg",
      title: "Main Photos",
      caption: "Featured photo caption — replace with a real description",
    },
    {
      image: "/images/about/header1.png",
      title: "Main Photos",
      caption: "Featured photo caption — replace with a real description",
    },
    {
      image: "/images/about/Our-Story.png",
      title: "Main Photos",
      caption: "Featured photo caption — replace with a real description",
    },
  ] satisfies CarouselSlide[],

  // 5. Replace each object's image/caption/title with real program or event photos.
  programPhotos: [
    {
      image: "/images/about/header1.png",
      title: "Programs & Events",
      caption: "Program / Event name — replace with a real caption",
    },
    {
      image: "/images/about/Our-Story.png",
      title: "Programs & Events",
      caption: "Program / Event name — replace with a real caption",
    },
    {
      image: "/images/about/Header.jpg",
      title: "Programs & Events",
      caption: "Program / Event name — replace with a real caption",
    },
  ] satisfies CarouselSlide[],

  // 6. Replace each object with a real student photo, testimony text, and optional title.
  testimonies: [
    {
      image: "/images/about/femaleplace.jpg",
      title: "Student Testimonies",
      caption:
        '"This program changed how I see my community." — Student Name',
    },
    {
      image: "/images/about/Maleplace.png",
      title: "Student Testimonies",
      caption:
        '"I learned skills I use every single day." — Student Name',
    },
    {
      image: "/images/about/Hailey_headshot.jpg",
      title: "Student Testimonies",
      caption:
        '"An experience I will never forget." — Student Name',
    },
  ] satisfies CarouselSlide[],
};

// ── LOCAL COMPONENTS ──────────────────────────────────────────────────────────

/** Small card displayed in the Board of Directors sidebar. */
function BoardMemberCard({ name, title, imageSrc }: BoardMember) {
  return (
    <article className="flex flex-col items-center text-center">
      <div className="relative h-20 w-20 overflow-hidden rounded-none bg-slate-100 ring-1 ring-slate-200">
        <Image
          src={imageSrc}
          alt={`Headshot of ${name}`}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-900 leading-tight">{name}</p>
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
        className="object-cover opacity-60"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-10 text-center">
        {/* Decorative quotation mark */}
        <span className="mb-3 text-5xl font-serif leading-none text-orange-400 select-none" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote>
          <p className="text-base font-medium leading-relaxed text-white drop-shadow sm:text-lg">
            {homepageContent.missionQuote}
          </p>
        </blockquote>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
        >
          Our Mission.
        </Link>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-0 sm:px-6 lg:px-8">

        {/* ── Outer layout: sidebar + main grid ── */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[210px_minmax(0,1fr)]">

          {/* ── LEFT SIDEBAR: Board of Directors ── */}
          <aside
            aria-label="Board of Directors"
            className="w-full"
          >
          <div className="h-full rounded-none border border-slate-200 bg-white p-4">
              <h2 className="mb-5 text-center text-base font-bold uppercase tracking-widest text-slate-700">
                Board of Directors
              </h2>
              <div className="space-y-6">
                {boardMembers.map((member) => (
                  <BoardMemberCard key={`${member.name}-${member.title}`} {...member} />
                ))}
              </div>
            </div>
          </aside>

          {/* ── MAIN 2×2 CONTENT GRID ── */}
          <div className="min-w-0">

            {/* ── TOP ROW: Mission box + Featured photo carousel ── */}
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-[2fr_3.25fr]">

              {/* Top-left: Mission statement */}
              <div className="h-[400px] sm:h-auto sm:min-h-[425px] lg:min-h-[475px]">
                <MissionBox className="h-full w-full" />
              </div>

              {/* Top-right: Featured / Main Photos carousel */}
              <div
                className="h-[400px] overflow-hidden rounded-none sm:h-auto sm:min-h-[425px] lg:min-h-[475px]"
                aria-label="Featured Photos"
              >
                <PhotoCarousel
                  slides={homepageContent.mainPhotos}
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* ── BOTTOM ROW: Programs/Events + Testimonies ── */}
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">

              {/* Bottom-left: Programs / Events */}
              <div
                className="h-[375px] overflow-hidden rounded-none lg:min-h-[405px]"
                aria-label="Programs and Events"
              >
                <div className="relative h-full w-full">
                  {/* Section label overlay */}
                  <div className="absolute top-0 inset-x-0 z-10 bg-black/50 px-4 py-2 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-white">
                      Programs &amp; Events
                    </p>
                  </div>
                  <PhotoCarousel
                    slides={homepageContent.programPhotos}
                    className="h-full w-full"
                  />
                </div>
              </div>

              {/* Bottom-right: Student Testimonies */}
              <div
                className="h-[375px] overflow-hidden rounded-none lg:min-h-[405px]"
                aria-label="Student Testimonies"
              >
                <div className="relative h-full w-full">
                  {/* Section label overlay */}
                  <div className="absolute top-0 inset-x-0 z-10 bg-black/50 px-4 py-2 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-white">
                      Student Testimonies
                    </p>
                  </div>
                  <PhotoCarousel
                    slides={homepageContent.testimonies}
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
