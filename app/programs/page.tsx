import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

const programPlaceholders = [
  { title: "Youth Training Track", description: "Placeholder description for an education-focused flagship program." },
  { title: "Community Outreach", description: "Placeholder description for public workshops and support initiatives." },
  { title: "Partner Network", description: "Placeholder description for strategic collaborations and partner services." },
];

export default function ProgramsPage() {
  return (
    <Section title="Programs" intro="Outline your core initiatives and what people can expect from each one.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {programPlaceholders.map((program) => (
          <Card key={program.title} title={program.title} description={program.description} />
        ))}
      </div>
    </Section>
  );
}
