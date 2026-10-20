import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import FAQList from "@/components/seo/FAQList";
import PageHeader from "@/components/seo/PageHeader";
import PageCTA from "@/components/seo/PageCTA";
import { pageMetadata } from "@/lib/metadata";
import { SERVICES, type FAQ } from "@/lib/services";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Landscaping FAQs | Driveways, Patios, Grass, Fencing | Infascape",
  description:
    "Answers to common questions about driveways, patios, artificial grass, fencing and decking in Sheffield: quotes, timings, weather, planning, waste and what's included.",
  path: "/faq",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faq" },
];

const GENERAL: FAQ[] = [
  { q: "How much will my project cost?", a: "Every job is priced from a site visit, because size, access, ground conditions and drainage change the cost. You get a written quote that shows what is being built and how, not just a total. Most of our projects fall between £3,000 and £15,000+, and we also take smaller jobs when they fit our schedule." },
  { q: "Do you charge for a quote?", a: "No. We visit, measure, check levels, base and drainage, and send you a written quote." },
  { q: "Who will I deal with?", a: "Rob France, who runs Infascape. Rob handles your enquiry, site visit and quote, and visits site regularly while our own directly employed crew does the work, right through to handover." },
  { q: "Do you use subcontractors?", a: "The work is done by our own directly employed crew. Specialist suppliers deliver materials and plant such as grab lorries." },
  { q: "How long will my job take?", a: "Most patios, lawns and fences take a few days; driveways usually 3–5 working days. For any project over a week, we send a day-by-day schedule of works before we start." },
  { q: "What happens if it rains?", a: "Some stages, such as digging and base work, can carry on in light rain. Others, like surfacing, laying porcelain on mortar or resin, need dry weather. We plan around the forecast and keep you updated if the schedule moves." },
  { q: "Do I need to be at home while you work?", a: "Not all day. We need access to the work area, water and somewhere for deliveries. We agree this with you before we start." },
  { q: "Do you take the waste away?", a: "Yes. Muck away and waste removal are included in your quote." },
  { q: "Do I need planning permission?", a: "Most garden projects don't. Front driveways over 5m² that drain onto the road normally do, unless the surface is permeable or water drains within your property. See our guide to planning permission for driveways." },
  { q: "Which areas do you cover?", a: "Sheffield and the surrounding area, including Chapeltown, High Green, Ecclesfield, Grenoside, Oughtibridge, Stocksbridge, Hoyland, Barnsley and Rotherham." },
];

export default function FAQPage() {
  const all = [...GENERAL, ...SERVICES.flatMap((s) => s.faqs)];
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd data={[faqSchema(all), breadcrumbSchema(crumbs)]} />
      <PageHeader
        crumbs={crumbs}
        title="Frequently Asked Questions"
        intro="Straight answers to the questions we get asked most about driveways, patios, artificial grass, fencing and decking in Sheffield. If yours isn't here, call or send us a message."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <nav aria-label="FAQ sections" className="flex flex-wrap gap-2 mb-12">
            <a href="#general" className="px-4 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-highlight hover:text-highlight-foreground transition-colors">
              General
            </a>
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-highlight hover:text-highlight-foreground transition-colors"
              >
                {s.name}
              </a>
            ))}
          </nav>

          <section id="general" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">General</h2>
            <FAQList faqs={GENERAL} />
            <p className="mt-4 text-sm text-muted-foreground">
              More on planning:{" "}
              <Link href="/guides/do-i-need-planning-permission-for-a-driveway" className="font-semibold text-highlight hover:underline">
                Do I need planning permission for a driveway?
              </Link>
            </p>
          </section>

          {SERVICES.map((s) => (
            <section key={s.slug} id={s.slug} className="mb-14 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">{s.name}</h2>
              <FAQList faqs={s.faqs} />
              <p className="mt-4 text-sm">
                <Link href={`/services/${s.slug}`} className="font-semibold text-highlight hover:underline">
                  {s.name}: what&apos;s included and how we build it
                </Link>
              </p>
            </section>
          ))}
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
