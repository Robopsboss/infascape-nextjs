import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import FAQList from "@/components/seo/FAQList";
import PageCTA from "@/components/seo/PageCTA";
import { pageMetadata } from "@/lib/metadata";
import { PRICING_FAQS, SERVICES } from "@/lib/services";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

// Update this when prices change. It is shown on the page and helps search
// and AI tools trust that the figures are current.
const LAST_UPDATED = "October 2026";

export const metadata: Metadata = pageMetadata({
  title: "Landscaping Prices Sheffield 2026 | Driveways, Patios | Infascape",
  description:
    "What landscaping costs in Sheffield: tarmac driveways £100–£140/m², porcelain patios £150–£200/m², artificial grass £70–£100/m², fencing, sleeper walls and decking. Real guide prices.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd
        data={[
          faqSchema(PRICING_FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
            Landscaping Prices in Sheffield
          </h1>
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-4">
            Most Infascape projects cost between £3,000 and £15,000. A new tarmac
            driveway is typically £100–£140 per m², a porcelain patio £150–£200
            per m², artificial grass £70–£100 per m², fencing £100–£250 per
            metre and composite decking £180–£260 per m². These are real guide
            prices for work built on proper foundations, not teaser rates.
          </p>
          <p className="text-sm text-primary-foreground/50">Last updated {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Price table */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-8">
            Guide prices by service
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-section-alt">
                <tr>
                  <th scope="col" className="p-4 font-heading">Service</th>
                  <th scope="col" className="p-4 font-heading">Guide rate</th>
                  <th scope="col" className="p-4 font-heading">Typical project</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((s) => (
                  <tr key={s.slug} className="border-t border-border align-top">
                    <th scope="row" className="p-4 font-semibold text-foreground">
                      <Link href={`/services/${s.slug}`} className="text-highlight hover:underline">
                        {s.name}
                      </Link>
                    </th>
                    <td className="p-4 text-foreground whitespace-nowrap">{s.price.rate}</td>
                    <td className="p-4 text-muted-foreground">{s.price.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Prices include materials, labour and waste removal. Your written
            quote after a site visit gives the final price, including any VAT.
          </p>
        </div>
      </section>

      {/* Detailed breakdowns */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div key={s.slug} className="bg-card rounded-lg border border-border p-6">
              <h2 className="font-heading text-xl font-extrabold text-foreground mb-2">
                {s.name} cost in Sheffield
              </h2>
              <p className="text-highlight font-semibold mb-3">{s.price.typical}</p>
              {s.price.rows && (
                <ul className="text-sm text-foreground space-y-1 mb-4">
                  {s.price.rows.map((r) => (
                    <li key={r.label} className="flex justify-between gap-4 border-b border-border pb-1">
                      <span>{r.label}</span>
                      <span className="font-semibold whitespace-nowrap">{r.price}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">What changes the price</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-0.5 mb-4">
                {s.price.drivers.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <Link href={`/services/${s.slug}`} className="text-sm font-semibold text-highlight hover:underline">
                What&apos;s included in {s.name.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why cheaper quotes exist */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-5">
            Why some quotes are cheaper than ours
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The difference between a £3k patio and a £6k patio is what&apos;s
            underneath. Cheaper quotes usually save money on sub-base depth,
            compaction, drainage and quantities: the parts you can&apos;t see on
            the day the job is finished.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Those are the parts that decide whether a driveway sinks in two
            years or lasts ten. We calculate sub-base depths and tonnages for
            every job, compact in layers and design the drainage. That is what
            you are paying for.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When you compare quotes, ask each company: how deep is the
            sub-base, how is it compacted, and where does the water go?
          </p>
        </div>
      </section>

      {/* How quoting works */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-5">
            How our quotes work
          </h2>
          <ol className="space-y-4 list-decimal pl-5 text-muted-foreground leading-relaxed">
            <li>You send a quote request or call us.</li>
            <li>We visit, measure and check levels, base and drainage.</li>
            <li>You get a written quote that shows what is being built and how, not just a total.</li>
            <li>For projects over a week, you get a day-by-day schedule of works before we start.</li>
          </ol>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            Pricing questions
          </h2>
          <FAQList faqs={PRICING_FAQS} />
        </div>
      </section>

      <PageCTA heading="Get an exact price for your project" />
    </main>
  );
}
