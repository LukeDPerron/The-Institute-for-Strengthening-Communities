import Image from "next/image";

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
      {/* Full-width banner — spans edge to edge behind the transparent navbar */}
      {/* Replace aboutImageSources.hero (top of file) with your final asset */}
      <div className="relative h-72 w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
        <Image
          src={aboutImageSources.hero}
          alt="About page banner"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40" />
        {/* "About" label — bottom-left, below the transparent navbar */}
        <div className="absolute bottom-0 left-0 p-8 sm:p-10 lg:p-16">
          <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            About
          </h1>
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

    </>
  );
}
