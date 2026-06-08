import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const aboutImageSources = {
  hero: "/images/about/hero-placeholder.svg",
  mission: "/images/about/mission-placeholder.svg",
  story: "/images/about/story-placeholder.svg",
  boardHeadshot: "/images/about/board-headshot-placeholder.svg",
  staffHeadshot: "/images/about/staff-headshot-placeholder.svg",
};

const boardMembers = [
  {
    name: "Jordan Avery",
    role: "Board Chair",
    bio: "Leads strategic partnerships and helps align programs with community priorities.",
  },
  {
    name: "Casey Morgan",
    role: "Treasurer",
    bio: "Supports sustainable growth and transparent stewardship for every donor dollar.",
  },
  {
    name: "Taylor Nguyen",
    role: "Secretary",
    bio: "Champions neighborhood listening sessions and volunteer engagement.",
  },
  {
    name: "Riley Carter",
    role: "At-Large Director",
    bio: "Brings experience in youth programming and cross-sector collaboration.",
  },
];

const staffMembers = [
  {
    name: "Alex Rivera",
    role: "Executive Director",
    bio: "Guides mission delivery and long-term impact planning across all programs.",
  },
  {
    name: "Morgan Lee",
    role: "Program Manager",
    bio: "Coordinates community workshops, events, and outcomes reporting.",
  },
  {
    name: "Skyler Patel",
    role: "Volunteer Coordinator",
    bio: "Connects volunteers to meaningful projects that strengthen neighborhoods.",
  },
  {
    name: "Jamie Brooks",
    role: "Development Associate",
    bio: "Builds donor relationships and supports fundraising campaigns.",
  },
];

function PersonCard({
  name,
  role,
  bio,
  imageSrc,
}: {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mx-auto w-32 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
        <Image
          src={imageSrc}
          alt={`Placeholder headshot for ${name}`}
          width={256}
          height={256}
          className="h-auto w-full"
        />
      </div>
      <h3 className="mt-4 text-center text-lg font-semibold text-slate-900">{name}</h3>
      <p className="text-center text-sm font-medium text-orange-700">{role}</p>
      <p className="mt-3 text-center text-sm leading-6 text-slate-600">{bio}</p>
    </article>
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
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-orange-50/40 to-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Building stronger communities together
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              {siteConfig.name} partners with local residents, volunteers, and
              leaders to create opportunities that help neighborhoods grow and
              thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={siteConfig.donateHref}
                className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Donate Now
              </Link>
              <Link
                href="/programs"
                className="rounded-md border border-orange-500 px-5 py-2.5 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Explore Programs
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={aboutImageSources.hero}
              alt="Placeholder image showing a community gathering"
              width={1200}
              height={800}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <StorySection
        id="mission"
        title="Mission Statement"
        description="Our mission is to expand access to resources, education, and relationships that empower people to create lasting change where they live. We focus on practical support, local leadership, and equitable growth that strengthens entire communities."
        imageSrc={aboutImageSources.mission}
        imageAlt="Placeholder image for mission-driven community work"
      />

      <StorySection
        id="story"
        title="Our Story"
        description="What started as a small neighborhood initiative has grown into a collaborative nonprofit effort shaped by volunteers, partners, and residents. Today, we continue that story by investing in people-first programs, measurable outcomes, and long-term community resilience."
        imageSrc={aboutImageSources.story}
        imageAlt="Placeholder image representing the organization story"
        reverse
      />

      <section id="board" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Board of Directors
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          Our board provides oversight, accountability, and strategic direction
          to keep every initiative aligned with our nonprofit mission.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {boardMembers.map((member) => (
            <PersonCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageSrc={aboutImageSources.boardHeadshot}
            />
          ))}
        </div>
      </section>

      <section id="staff" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Staff</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          Our staff team works alongside community partners every day to deliver
          programs, support families, and build momentum for local change.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {staffMembers.map((member) => (
            <PersonCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageSrc={aboutImageSources.staffHeadshot}
            />
          ))}
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
