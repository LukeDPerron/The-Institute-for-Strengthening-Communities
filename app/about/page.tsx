import Image from "next/image";
import Link from "next/link";

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
    name: "Name Surname",
    role: "Title",
    bio: "Leads strategic partnerships and helps align programs with community priorities.",
    imageSrc: "/images/about/femaleplace.jpg",
  },
  {
    name: "Name Surname",
    role: "Title",
    bio: "Supports sustainable growth and transparent stewardship for every donor dollar.",
    imageSrc: "/images/about/femaleplace.jpg",
  },
  {
    name: "Name Surname",
    role: "Title",
    bio: "Champions neighborhood listening sessions and volunteer engagement.",
    imageSrc: "/images/about/femaleplace.jpg",
  },
  {
    name: "Name Surname",
    role: "Title",
    bio: "Brings experience in youth programming and cross-sector collaboration.",
    imageSrc: "/images/about/femaleplace.jpg",
  },
];

const staffMembers: TeamMember[] = [
  {
    name: "Hailey",
    role: "Therapy Dog",
    bio: "Guides mission delivery and long-term impact planning across all programs.",
    imageSrc: "/images/about/Hailey_headshot.jpg",
  },
  {
    name: "Name Surname",
    role: "Title",
    bio: "Coordinates community workshops, events, and outcomes reporting.",
    imageSrc: "/images/about/Maleplace.png",
  },
  {
    name: "Name Surname",
    role: "Title",
    bio: "Connects volunteers to meaningful projects that strengthen neighborhoods.",
    imageSrc: "/images/about/Maleplace.png",
  },
  {
    name: "Name Surname",
    role: "Title",
    bio: "Builds donor relationships and supports fundraising campaigns.",
    imageSrc: "/images/about/Maleplace.png",
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
  justifyDescription,
  showSeeMore,
  seeMoreHref,
}: {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  justifyDescription?: boolean;
  showSeeMore?: boolean;
  seeMoreHref?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
          <p
            className={`mt-4 text-base leading-7 text-slate-700 ${
              justifyDescription ? "text-justify" : ""
            }`}
          >
            {description}
            {showSeeMore ? (
              <>
                {" "}
                <Link
                  href={seeMoreHref ?? "/about#story"}
                  className="font-semibold text-orange-700 underline-offset-2 hover:underline"
                >
                  See more{">"}
                </Link>
              </>
            ) : null}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Full-width banner below the navbar */}
      <div className="relative w-full h-80 overflow-hidden sm:h-[28rem] lg:h-[36rem]">
          <Image
            src={aboutImageSources.hero}
            alt="About page banner"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/40" />
          {/* "About" label — bottom-left, always clear of the navbar */}
          <div className="absolute left-0 bottom-0 p-8 sm:p-10 lg:p-16">
            <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              About
            </h1>
          </div>
        </div>

      <StorySection
        id="mission"
        title="Mission Statement"
        description="The organization’s mission is to educate individuals, communities, and local leaders in democratic and restorative principles that strengthen trust, civic engagement, and collaboration. Through workshops, trainings, community dialogues, and educational resources, the organization promotes civic responsibility, restorative practices, collective problem-solving, and constructive participation in community improvement efforts. Its work focuses on fostering healing, accountability, shared decision-making, and stronger community relationships through nonpartisan education and collaborative action."
        imageSrc={aboutImageSources.mission}
        imageAlt="Placeholder image for mission-driven community work"
        justifyDescription
      />



      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          <TeamSection
            id="Board of Directors"
            title="Board of Directors"
            members={boardMembers}
          />
          <TeamSection
            id="Staff"
            title="Staff"
            members={staffMembers}
          />
        </div>
      </section>

      <StorySection
        id="story"
        title="Our Story"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSrc={aboutImageSources.story}
        imageAlt="Placeholder image representing the organization story"
        justifyDescription
        showSeeMore
        reverse
      />

    </>
    
  );
  
}
