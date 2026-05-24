type CardProps = {
  title: string;
  description: string;
};

// Generic card used for program, event, and team preview content.
export function Card({ title, description }: CardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
