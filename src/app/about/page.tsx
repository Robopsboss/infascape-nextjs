import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Infascape | 20+ Years Landscaping Experience Sheffield",
  description:
    "Infascape Ltd - Sheffield's engineered landscaping specialists with over 20 years combined industry experience. Quality over quantity, built to last.",
  openGraph: {
    title: "About Infascape | 20+ Years Landscaping Experience Sheffield",
    description:
      "Infascape Ltd - Sheffield's engineered landscaping specialists with over 20 years combined industry experience. Quality over quantity, built to last.",
    url: "https://infascape.co.uk/about",
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
    title: "About Infascape | 20+ Years Landscaping Experience Sheffield",
    description:
      "Sheffield's engineered landscaping specialists with over 20 years combined industry experience.",
    images: ["/assets/hero-landing.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <AboutContent />
    </main>
  );
}
