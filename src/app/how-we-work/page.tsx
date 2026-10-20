import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PageHeader from "@/components/seo/PageHeader";
import PageCTA from "@/components/seo/PageCTA";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "How We Work | From Enquiry to Handover | Infascape Sheffield",
  description:
    "How an Infascape project runs: enquiry, site visit, written quote, schedule of works, our own crew on site with regular visits from Rob, and handover.",
  path: "/how-we-work",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "How We Work", path: "/how-we-work" },
];

const steps = [
  {
    title: "Enquiry",
    detail: "Send a quote request or call. Rob replies personally, usually within 24 hours, and arranges a time to come out.",
  },
  {
    title: "Site visit",
    detail: "Rob measures up, checks levels, the existing ground and where surface water will go, and talks through what you want and what will last.",
  },
  {
    title: "Written quote",
    detail: "You get a written quote that shows what is being built and how: sub-base depths, drainage, edging and materials. Not just a total.",
  },
  {
    title: "Schedule of works",
    detail: "For any project over a week, you get a day-by-day schedule before we start, with realistic timings that allow for weather and deliveries.",
  },
  {
    title: "The build",
    detail: "Our own directly employed crew does the work. Rob visits site regularly, and you get progress updates throughout. If something isn't right, it gets redone.",
  },
  {
    title: "Handover",
    detail: "Rob walks the finished job with you, explains aftercare, and the site is left clean with all waste removed.",
  },
];

const standards = [
  "Sub-base depths calculated for the job, not guessed",
  "Compaction in layers, not one pass",
  "Falls and drainage designed before digging starts",
  "Quantities and tonnages worked out from the area",
  "Treated timber, concreted posts and exterior-grade fixings",
  "Never \"that'll do\"",
];

export default function HowWeWorkPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        crumbs={crumbs}
        title="How We Work"
        intro="Every Infascape project runs the same way: you deal with Rob France from your first enquiry to handover, our own crew does the work, and you know what's happening at every stage."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="inline-flex w-10 h-10 rounded-full bg-highlight text-highlight-foreground font-bold items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-1.5">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">Our standards on every job</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {standards.map((s) => (
              <li key={s} className="rounded-lg border border-border bg-card p-4 text-foreground">
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">
            Questions about the process?{" "}
            <Link href="/faq" className="font-semibold text-highlight hover:underline">
              Read our FAQs
            </Link>
            .
          </p>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
