import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const aboutImageSources = {
  // ── BANNER IMAGE ─────────────────────────────────────────────────────────
  // Replace this path with your final full-width banner asset.
  // File location: /public/images/about/hero-placeholder.svg
  // Swap the value below, e.g. "/images/about/banner.jpg"
  // ─────────────────────────────────────────────────────────────────────────
  hero: "/images/about/header.jpg",
  mission: "/images/about/mission.png",
  story: "/images/about/Our-Story.png",
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

const boardMembers: TeamMember[] = [
  {
    name: "Jordan Avery",
    role: "Board Chair",
    bio: "Leads strategic partnerships and helps align programs with community priorities.",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
  {
    name: "Casey Morgan",
    role: "Treasurer",
    bio: "Supports sustainable growth and transparent stewardship for every donor dollar.",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
  {
    name: "Taylor Nguyen",
    role: "Secretary",
    bio: "Champions neighborhood listening sessions and volunteer engagement.",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
  {
    name: "Riley Carter",
    role: "At-Large Director",
    bio: "Brings experience in youth programming and cross-sector collaboration.",
    imageSrc: "/images/about/board-headshot-placeholder.svg",
  },
];

const staffMembers: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "Executive Director",
    bio: "Guides mission delivery and long-term impact planning across all programs.",
    imageSrc: "/images/about/staff-headshot-placeholder.svg",
  },
  {
    name: "Morgan Lee",
    role: "Program Manager",
    bio: "Coordinates community workshops, events, and outcomes reporting.",
    imageSrc: "/images/about/staff-headshot-placeholder.svg",
  },
  {
    name: "Skyler Patel",
    role: "Volunteer Coordinator",
    bio: "Connects volunteers to meaningful projects that strengthen neighborhoods.",
    imageSrc: "/images/about/staff-headshot-placeholder.svg",
  },
  {
    name: "Jamie Brooks",
    role: "Development Associate",
    bio: "Builds donor relationships and supports fundraising campaigns.",
    imageSrc: "/images/about/staff-headshot-placeholder.svg",
  },
];

function PersonCard({
  name,
  role,
  imageSrc,
}: {
  name: string;
  role: string;
  imageSrc: string;
}) {
  return (
    <article className="space-y-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={`Headshot of ${name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-base font-semibold text-black">{name}</h3>
        <p className="mt-1 text-sm font-medium text-black">{role}</p>
      </div>
    </article>
  );
}

function TeamSection({
  id,
  title,
  members,
}: {
  id: string;
  title: string;
  members: TeamMember[];
}) {
  return (
    <section id={id}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {members.map((member) => (
          <PersonCard
            key={member.name}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}

function StorySection({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
}: {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </div>
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Full-width banner — replace aboutImageSources.hero (top of file) with your final asset */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-[420px]">
          <Image
            src={aboutImageSources.hero}
            alt="About page banner"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/40" />
          {/* "About" label — top-left */}
          <div className="absolute left-0 top-0 p-8 sm:p-10 lg:p-16">
            <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              About
            </h1>
          </div>
        </div>
      </div>

      <StorySection
        id="mission"
        title="Mission Statement"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSrc={aboutImageSources.mission}
        imageAlt="Placeholder image for mission-driven community work"
      />

      <StorySection
        id="story"
        title="Our Story"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSrc={aboutImageSources.story}
        imageAlt="Placeholder image representing the organization story"
        reverse
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          <TeamSection
            id="board"
            title="Board of Directors"
            members={boardMembers}
          />
          <TeamSection
            id="staff"
            title="Staff"
            members={staffMembers}
          />
        </div>
      </section>

      <section
        id="get-involved"
        className="border-y border-slate-200 bg-white/80 py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Quick Links & Support
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
            Learn more, connect with our team, or support our mission with a
            donation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={siteConfig.donateHref}
              className="rounded-xl bg-orange-500 px-4 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Donate to Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
