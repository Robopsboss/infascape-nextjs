import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import AboutContent from "@/components/about/AboutContent";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, founderSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "About Infascape | Rob France, 20+ Years in the Trades | Sheffield",
  description:
    "Infascape Ltd is run by Rob France, with 20+ years in the trades including a tarmac company, new builds and landscaping. Engineered landscaping in Sheffield since 2020.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd
        data={[
          founderSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutContent />
    </main>
  );
}
