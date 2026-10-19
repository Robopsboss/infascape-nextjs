import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = pageMetadata({
  title: "Contact Infascape | Landscaping Quotes Sheffield",
  description:
    "Call 07837 698283 or request a quote for your Sheffield driveway, patio, artificial grass, fencing or decking project. Reply within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <ContactContent />
    </main>
  );
}
