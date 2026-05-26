import type { Metadata } from "next";
import OurWorkHeader from "@/components/our-work/OurWorkHeader";
import OurWorkGallery from "@/components/our-work/OurWorkGallery";

export const metadata: Metadata = {
  title: "Landscaping Portfolio Sheffield | Completed Projects | Infascape",
  description:
    "Browse our portfolio of completed landscaping projects across Sheffield. Real work, real results. Driveways, patios, artificial grass & fencing.",
  openGraph: {
    title: "Landscaping Portfolio Sheffield | Infascape",
    description:
      "Browse our portfolio of completed landscaping projects across Sheffield. Real work, real results.",
    url: "https://infascape.co.uk/our-work",
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
    title: "Landscaping Portfolio Sheffield | Infascape",
    description:
      "Browse our portfolio of completed landscaping projects across Sheffield.",
    images: ["/assets/hero-landing.jpg"],
  },
};

export default function OurWorkPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <OurWorkHeader />
      <OurWorkGallery />
    </main>
  );
}
