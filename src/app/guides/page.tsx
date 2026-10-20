import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PageHeader from "@/components/seo/PageHeader";
import PageCTA from "@/components/seo/PageCTA";
import { pageMetadata } from "@/lib/metadata";
import { GUIDES, type Guide } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Driveway, Patio & Garden Guides | Infascape Sheffield",
  description:
    "Straight answers from a Sheffield landscaper: tarmac vs block paving vs resin, porcelain vs sandstone, artificial vs real grass, sinking driveways, puddles and planning rules.",
  path: "/guides",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
];

const groups: { title: string; kind: Guide["kind"] }[] = [
  { title: "Which should I choose?", kind: "comparison" },
  { title: "Problems and how to fix them", kind: "problem" },
];

export default function GuidesPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        crumbs={crumbs}
        title="Driveway, Patio and Garden Guides"
        intro="Straight answers to the questions we get asked most, written by Rob France from 24 years in the trades. No sales pitch: if the cheaper option suits you better, we'll say so."
      />

      {groups.map((group, gi) => (
        <section key={group.kind} className={`section-padding ${gi % 2 ? "bg-section-alt" : "bg-background"}`}>
          <div className="container-narrow mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-8">{group.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDES.filter((g) => g.kind === group.kind).map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-highlight/30 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={g.image}
                      alt={g.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-foreground mb-2">{g.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{g.answer}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <PageCTA />
    </main>
  );
}
