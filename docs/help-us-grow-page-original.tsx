import Image from "next/image";
import { Button } from "@/components/ui/button";
import { helpUsGrowContent, type HelpUsGrowOption } from "@/lib/cms/help-us-grow-content";

function SupportTile({ title, imageSrc, imageAlt, buttonLabel, description }: HelpUsGrowOption) {
  return (
    <article className="group relative aspect-[16/10] w-full overflow-hidden rounded-none border border-slate-300 bg-slate-900 shadow-[0_12px_24px_rgba(15,23,42,0.24),0_3px_10px_rgba(15,23,42,0.16)] transition-transform duration-300 hover:-translate-y-1">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/45" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
        <div>
          <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-[90%] text-center text-base font-semibold leading-7 text-white/95 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        <div className="flex justify-center [&>*]:px-5 [&>*]:py-2.5 [&>*]:text-base">
          <Button href="/help-us-grow">{buttonLabel}</Button>
        </div>
      </div>
    </article>
  );
}

export default function HelpUsGrowPage() {
  return (
    <>
      <div className="relative w-full h-72 overflow-hidden sm:h-[24rem] lg:h-[32rem]">
        <Image
          src="/images/LandingPhotosNew/13.Landing.2025.SponsorsTshirt.jpg"
          alt="Community members participating in leadership and civic engagement activities"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-4 left-8 sm:bottom-6 sm:left-10 lg:bottom-8 lg:left-12">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
            Help Us Grow
          </h1>
        </div>
      </div>

      <section className="w-full px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {helpUsGrowContent.map((option) => (
            <SupportTile key={option.title} {...option} />
          ))}
        </div>
      </section>
    </>
  );
}
