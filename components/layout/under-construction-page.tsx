import Image from "next/image";

type UnderConstructionPageProps = {
  alt: string;
};

export function UnderConstructionPage({ alt }: UnderConstructionPageProps) {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 pb-8 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
        <Image
          src="/images/about/UnderConstruction.png"
          alt={alt}
          width={1400}
          height={900}
          priority
          className="h-auto w-full max-w-6xl"
        />
      </div>
    </main>
  );
}
