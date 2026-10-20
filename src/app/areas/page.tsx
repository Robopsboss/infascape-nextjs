import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import PageHeader from "@/components/seo/PageHeader";
import PageCTA from "@/components/seo/PageCTA";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";

const townList = SITE.towns.map((t) => t.name).join(", ");

export const metadata: Metadata = pageMetadata({
  title: "Areas We Cover | Landscapers Chapeltown, Sheffield, Barnsley, Rotherham",
  description: `Infascape covers ${townList} and the surrounding South Yorkshire villages. Driveways, patios, artificial grass, fencing and decking.`,
  path: "/areas",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Areas We Cover", path: "/areas" },
];

export default function AreasPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        crumbs={crumbs}
        title="Areas We Cover"
        intro={`Infascape is based in Chapeltown, north Sheffield. We build driveways, patios, artificial lawns, fencing and decking across Sheffield and the surrounding area, including ${townList}.`}
      />

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITE.towns.map((t) => (
              <li key={t.name} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                <MapPin className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-heading font-bold text-foreground">Landscaping in {t.name}</h2>
                  <p className="text-sm text-muted-foreground">{t.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Not on the list? If you&apos;re within reach of north Sheffield, give
            us a call on{" "}
            <a href={`tel:${SITE.phone}`} className="font-semibold text-highlight hover:underline">
              {SITE.phoneDisplay}
            </a>{" "}
            and we&apos;ll tell you straight away whether we can take the job on.
          </p>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            What we build in these areas
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block rounded-lg border border-border bg-card p-4 font-semibold text-foreground hover:border-highlight/40 transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
