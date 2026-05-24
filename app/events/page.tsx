import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

const eventPlaceholders = [
  { title: "Spring Forum", description: "Placeholder details for your upcoming keynote or panel event." },
  { title: "Volunteer Orientation", description: "Placeholder details for onboarding sessions and support meetings." },
  { title: "Community Lab", description: "Placeholder details for workshops, demos, or networking gatherings." },
];

export default function EventsPage() {
  return (
    <Section title="Events" intro="Feature upcoming opportunities for people to learn, collaborate, and participate.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {eventPlaceholders.map((event) => (
          <Card key={event.title} title={event.title} description={event.description} />
        ))}
      </div>
    </Section>
  );
}
