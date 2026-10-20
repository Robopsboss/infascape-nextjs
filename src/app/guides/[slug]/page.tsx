import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import FAQList from "@/components/seo/FAQList";
import PageCTA from "@/components/seo/PageCTA";
import PageHeader from "@/components/seo/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { GUIDES, getGuide } from "@/lib/guides";
import { getService } from "@/lib/services";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    image: guide.image,
  });
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function GuidePage({ params }: Props) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path: `/guides/${guide.slug}` },
  ];
  const related = guide.services.map(getService).filter(Boolean);
  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd
        data={[
          articleSchema({
            slug: guide.slug,
            title: guide.title,
            description: guide.metaDescription,
            datePublished: guide.datePublished,
            dateModified: guide.dateModified,
            image: guide.image,
          }),
          faqSchema(guide.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHeader crumbs={crumbs} title={guide.title} intro={guide.answer}>
        <div className="mt-6 flex items-center gap-3 text-sm text-primary-foreground/70">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
            <Image src={SITE.founderPhoto} alt="Rob France" fill sizes="40px" className="object-cover" />
          </div>
          <span>
            By{" "}
            <Link href="/author/rob-france" className="font-semibold text-primary-foreground hover:text-highlight">
              Rob France
            </Link>
            , {SITE.yearsInTrades} years in the trades · Updated {formatDate(guide.dateModified)}
          </span>
        </div>
      </PageHeader>

      <article className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
            <Image src={guide.image} alt={guide.imageAlt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-5">{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-section-alt">
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i} scope="col" className="p-3 font-heading font-bold text-foreground">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]} className="border-t border-border align-top">
                          <th scope="row" className="p-3 font-semibold text-foreground">
                            {row[0]}
                          </th>
                          {row.slice(1).map((cell, i) => (
                            <td key={i} className="p-3 text-muted-foreground">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">Common questions</h2>
            <FAQList faqs={guide.faqs} />
          </section>

          {related.length > 0 && (
            <section className="rounded-lg border border-border bg-section-alt p-6">
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">How we do it</h2>
              <ul className="space-y-2">
                {related.map((s) => (
                  <li key={s!.slug}>
                    <Link href={`/services/${s!.slug}`} className="font-semibold text-highlight hover:underline">
                      {s!.name} in Sheffield: what&apos;s included and how we build it
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>

      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-heading font-bold text-foreground mb-3">More guides</h2>
          <ul className="space-y-2">
            {others.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="text-muted-foreground hover:text-highlight">
                  {g.title}
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
