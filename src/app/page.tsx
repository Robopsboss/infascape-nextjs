import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/home/HeroSection";
import WhyInfascape from "@/components/home/WhyInfascape";
import SocialProof from "@/components/home/SocialProof";
import ServicesOverview from "@/components/home/ServicesOverview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = pageMetadata({
  title: "Landscapers in Sheffield | Driveways, Patios, Fencing | Infascape",
  description:
    "Sheffield landscaping and groundworks company. Tarmac driveways, porcelain patios, artificial grass, fencing and decking built on proper foundations to last 10+ years. Guide prices online.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyInfascape />
      <SocialProof />
      <ServicesOverview />
      <FinalCTA />
    </main>
  );
}
