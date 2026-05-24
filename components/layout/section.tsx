type SectionProps = {
  title: string;
  intro?: string;
  children: React.ReactNode;
};

// Consistent section wrapper to keep spacing and headings uniform across pages.
export function Section({ title, intro, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
        {intro ? <p className="mt-3 text-slate-600">{intro}</p> : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
