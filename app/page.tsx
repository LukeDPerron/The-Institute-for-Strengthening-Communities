import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Section
        title="Build your institute or nonprofit website with confidence"
        intro="This starter includes reusable UI blocks, clean page structure, and placeholder content you can expand as your project grows."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/membership">Join Membership</Button>
          <Button href="/programs" variant="outline">
            Explore Programs
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card title="Programs" description="Highlight your services, training tracks, or social initiatives here." />
          <Card title="Research" description="Share reports, publications, and community-focused insights." />
          <Card title="Events" description="Promote workshops, webinars, and upcoming community gatherings." />
        </div>
      </Section>
    </>
  );
}
