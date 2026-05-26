import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import WhyInfascape from "@/components/home/WhyInfascape";
import SocialProof from "@/components/home/SocialProof";
import ServicesOverview from "@/components/home/ServicesOverview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title:
    "Infascape Ltd | Engineered Landscaping Sheffield | Driveways, Patios, Artificial Grass",
  description:
    "Sheffield's engineered landscaping specialists. Tarmac driveways, porcelain paving, artificial grass & fencing built to last 10+ years. Over 20 years combined experience. Request a quote today.",
  openGraph: {
    title: "Infascape Ltd | Engineered Landscaping Sheffield",
    description:
      "Sheffield's engineered landscaping specialists. Tarmac driveways, porcelain paving, artificial grass & fencing built to last 10+ years.",
    url: "https://infascape.co.uk/",
    type: "website",
    images: [
      {
        url: "/assets/hero-landing.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infascape Ltd | Engineered Landscaping Sheffield",
    description:
      "Sheffield's engineered landscaping specialists. Tarmac driveways, porcelain paving, artificial grass & fencing built to last 10+ years.",
    images: ["/assets/hero-landing.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Infascape Ltd",
  description:
    "Sheffield's engineered landscaping specialists. Tarmac driveways, porcelain paving, artificial grass & fencing built to last 10+ years.",
  url: "https://infascape.co.uk",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sheffield",
    addressRegion: "South Yorkshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3811,
    longitude: -1.4701,
  },
  areaServed: {
    "@type": "City",
    name: "Sheffield",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "16",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: ["https://www.facebook.com/infascape"],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <WhyInfascape />
      <SocialProof />
      <ServicesOverview />
      <FinalCTA />
    </main>
  );
}
