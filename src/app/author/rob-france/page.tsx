import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PageCTA from "@/components/seo/PageCTA";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/guides";
import { breadcrumbSchema, founderSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Rob France | Founder of Infascape, 24 Years in the Trades",
  description:
    "Rob France runs Infascape Ltd in Sheffield. 24 years in the trades as a groundworker, joiner, landscaper and tarmacker. He quotes, plans and oversees every job.",
  path: "/author/rob-france",
  image: SITE.founderPhoto,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rob France", path: "/author/rob-france" },
];

const trades = [
  { title: "Building sites and new builds", detail: "Groundwork and general site work, where Rob learned what a proper base looks like." },
  { title: "Tarmac", detail: "Years with a tarmac company, laying driveways and surfacing. He knows the full job flow, from dig-out to roller." },
  { title: "Joinery", detail: "Timber work, which is why our fencing, sleepers and decking frames are built the way they are." },
  { title: "Landscaping", detail: "Patios, artificial grass, fencing and garden builds, before and since starting Infascape." },
];

export default function RobFrancePage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd data={[founderSchema, breadcrumbSchema(crumbs)]} />

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-center">
          <div className="relative w-56 md:w-full aspect-[4/5] rounded-lg overflow-hidden mx-auto">
            <Image
              src={SITE.founderPhoto}
              alt="Rob France, founder of Infascape Ltd"
              fill
              priority
              sizes="(min-width: 768px) 280px, 224px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-highlight mb-3">
              Founder, Infascape Ltd
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">Rob France</h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">
              Rob France founded Infascape Ltd in 2022 and has worked in the
              trades for {SITE.yearsInTrades} years: on building sites, as a
              joiner, as a landscaper and as a tarmacker. He handles every
              Infascape job from first enquiry, site visit and quote through to
              handover, and visits site regularly while our own crew does the work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            {SITE.yearsInTrades} years on site
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Rob doesn&apos;t hold a wall of certificates. What he has is
            experience across almost every trade that goes into an outdoor
            build, and years of seeing what fails when corners get cut. That
            experience is why every Infascape job starts with the base,
            the drainage and the quantities, not the finish.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trades.map((t) => (
              <li key={t.title} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-heading font-bold text-foreground mb-1.5">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            Guides written by Rob
          </h2>
          <ul className="space-y-3">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="font-semibold text-highlight hover:underline">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCTA heading="Talk to Rob about your project" />
    </main>
  );
}
