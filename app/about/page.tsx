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
  title,
  members,
}: {
  id: string;
  title: string;
  members: TeamMember[];
}) {
  if (members.length === 0) {
    return null;
  }

  return (
    <section id={id}>
      {id !== "board-of-directors" ? (
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
      ) : null}
      <div className={`${id !== "board-of-directors" ? "mt-6 " : ""}grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
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
    const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const segments: React.ReactNode[] = [];
    let lastIndex = 0;

    paragraph.replace(markdownLinkPattern, (match, label, href, offset) => {
      if (offset > lastIndex) {
        const text = paragraph.slice(lastIndex, offset);
        const textSegments = text.split(urlPattern);

        textSegments.forEach((part, index) => {
          if (urlPattern.test(part)) {
            segments.push(
              <a
                key={`${id}-link-${offset}-${index}`}
                href={part}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-orange-700 underline-offset-2 hover:underline [overflow-wrap:anywhere]"
              >
                {part}
              </a>
            );
          } else if (part) {
            segments.push(<span key={`${id}-text-${offset}-${index}`}>{part}</span>);
          }
        });
      }

      segments.push(
        <a
          key={`${id}-markdown-${offset}`}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-orange-700 underline-offset-2 hover:underline [overflow-wrap:anywhere]"
        >
          {label}
        </a>
      );

      lastIndex = offset + match.length;
      return match;
    });

    if (lastIndex < paragraph.length) {
      const remainingText = paragraph.slice(lastIndex);
      const textSegments = remainingText.split(urlPattern);

      textSegments.forEach((part, index) => {
        if (urlPattern.test(part)) {
          segments.push(
            <a
              key={`${id}-link-${lastIndex}-${index}`}
              href={part}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-orange-700 underline-offset-2 hover:underline [overflow-wrap:anywhere]"
            >
              {part}
            </a>
          );
        } else if (part) {
          segments.push(<span key={`${id}-text-${lastIndex}-${index}`}>{part}</span>);
        }
      });
    }

    return segments;
  };

  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
              id === "mission" ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {title}
          </h2>
          <div className="mt-4 space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${id}-paragraph-${index}`}
                className={`break-words ${id === "mission" ? "text-xl" : "text-base"} leading-7 text-slate-700 ${
                  justifyDescription && id !== "story" && id !== "mission" ? "text-left sm:text-justify" : ""
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
            style={{ objectPosition: "center 20%" }}
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 left-8 sm:bottom-6 sm:left-10 lg:bottom-8 lg:left-12">
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
              About
            </h1>
          </div>
        </div>

      <StorySection {...aboutStorySections[0]} />



      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Our Team
        </h2>
        <div className="mt-12 space-y-14">
          <TeamSection
            id="board-of-directors"
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

      <StorySection {...aboutStorySections[1]} />

    </>
    
  );
  
}
