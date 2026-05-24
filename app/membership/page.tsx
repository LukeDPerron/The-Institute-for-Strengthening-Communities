import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function MembershipPage() {
  return (
    <Section
      title="Membership"
      intro="Use this page to explain tiers, benefits, and how supporters can join your mission."
    >
      <p className="max-w-3xl text-slate-700">
        Placeholder content: include member perks, pricing options, and onboarding details when you are ready.
      </p>
      <div className="mt-6">
        <Button href="/about">Learn About Our Mission</Button>
      </div>
    </Section>
  );
}
