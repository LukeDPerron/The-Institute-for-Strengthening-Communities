import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

const teamPlaceholders = [
  { title: "Executive Director", description: "Placeholder bio for leadership and strategic direction." },
  { title: "Research Lead", description: "Placeholder bio for program measurement and publications." },
  { title: "Community Manager", description: "Placeholder bio for partnerships and member engagement." },
];

export default function TeamPage() {
  return (
    <Section title="Team" intro="Introduce the people behind your programs, partnerships, and mission execution.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamPlaceholders.map((member) => (
          <Card key={member.title} title={member.title} description={member.description} />
        ))}
      </div>
    </Section>
  );
}
