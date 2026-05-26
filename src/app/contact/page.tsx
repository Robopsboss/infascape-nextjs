import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Infascape | Request a Quote Sheffield Landscaping",
  description:
    "Get in touch with Infascape for your Sheffield landscaping project. Driveways, patios, artificial grass, fencing. Request a free quote today.",
  openGraph: {
    title: "Contact Infascape | Request a Quote Sheffield Landscaping",
    description:
      "Get in touch with Infascape for your Sheffield landscaping project. Driveways, patios, artificial grass, fencing. Request a free quote today.",
    url: "https://infascape.co.uk/contact",
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
    title: "Contact Infascape | Request a Quote Sheffield Landscaping",
    description:
      "Get in touch with Infascape for your Sheffield landscaping project. Request a free quote today.",
    images: ["/assets/hero-landing.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <ContactContent />
    </main>
  );
}
