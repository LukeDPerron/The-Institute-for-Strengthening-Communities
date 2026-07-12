import Image from "next/image";
import Link from "next/link";
import {
  aboutImageSources,
  aboutStorySections,
  boardMembers,
  staffMembers,
  type TeamMember,
  type StorySectionContent,
} from "@/lib/cms/about-content";

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
          sizes="(max-width: 640px) 100vw, 25vw"
          className={name === "David A. Bloom, M.D." ? "object-cover object-top" : "object-cover"}
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
  members,
}: {
  id: string;
  members: TeamMember[];
}) {
  return (
    <section id={id}>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {members.map((member, index) => (
          <PersonCard
            key={`${id}-${index}`}
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
  paragraphs,
  imageSrc,
  imageAlt,
  reverse,
  justifyDescription,
  showSeeMore,
  seeMoreHref,
}: StorySectionContent) {
  const linkifyParagraph = (paragraph: string) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = paragraph.split(urlPattern);

    return parts.map((part, index) => {
      if (urlPattern.test(part)) {
        return (
          <a
            key={`${id}-link-${index}`}
            href={part}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-orange-700 underline-offset-2 hover:underline"
          >
            {part}
          </a>
        );
      }

      return <span key={`${id}-text-${index}`}>{part}</span>;
    });
  };

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
          <h2
            className={`text-center font-bold tracking-tight text-slate-900 ${
              id === "mission" ? "text-3xl sm:text-4xl" : "text-3xl"
            }`}
          >
            {title}
          </h2>
          <div className="mt-4 space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${id}-paragraph-${index}`}
                className={`text-base leading-7 text-slate-700 ${
                  justifyDescription ? "text-justify" : ""
                } ${index === 0 && id === "story" ? "font-bold text-center" : ""}`}
              >
                {linkifyParagraph(paragraph)}
                {showSeeMore && index === paragraphs.length - 1 ? (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Full-width banner below the fixed navbar */}
      <div className="relative w-full h-72 overflow-hidden sm:h-[24rem] lg:h-[32rem]">
          <Image
            src={aboutImageSources.hero}
            alt="About page banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

      <StorySection {...aboutStorySections[0]} />



      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Team
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <TeamSection
            id="board-of-directors"
            members={boardMembers}
          />
          <TeamSection
            id="staff"
            members={staffMembers}
          />
        </div>
      </section>

      <StorySection {...aboutStorySections[1]} />

    </>
    
  );
  
}
