import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <div className="relative h-72 w-full overflow-hidden sm:h-[24rem] lg:h-[32rem]">
        <Image
          src="/images/LandingPhotosNew/24.Landing2025celebraton.jpg"
          alt="In the News banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-4 left-8 sm:bottom-6 sm:left-10 lg:bottom-8 lg:left-12">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
            In the News
          </h1>
        </div>
      </div>
    </>
  );
}
