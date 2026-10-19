import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import FAQList from "@/components/seo/FAQList";
import PageCTA from "@/components/seo/PageCTA";
import { pageMetadata } from "@/lib/metadata";
import { SERVICES, getService } from "@/lib/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      {/* Header + answer-first summary */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/50 mb-6">
            <Link href="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary-foreground">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground/80">{service.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">{service.h1}</h1>
              <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-6">
                {service.answer}
              </p>
              <div className="inline-flex flex-col rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-5 py-4">
                <span className="text-xs uppercase tracking-wider text-primary-foreground/50">Guide price</span>
                <span className="font-heading text-xl font-extrabold text-highlight">{service.price.rate}</span>
                <span className="text-sm text-primary-foreground/70">{service.price.typical}</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
              What&apos;s included
            </h2>
            <ul className="space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">{service.duration}</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
              {service.whyCheapFails.heading}
            </h2>
            {service.whyCheapFails.body.map((p) => (
              <p key={p} className="text-muted-foreground leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-10 text-center">
            How we build it
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {service.process.map((step, i) => (
              <li key={step.title} className="bg-card rounded-lg border border-border p-5">
                <span className="inline-flex w-8 h-8 rounded-full bg-highlight text-highlight-foreground text-sm font-bold items-center justify-center mb-3">
                  {i + 1}
                </span>
                <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Price guide */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
            How much does it cost?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {service.price.typical}. Guide rate {service.price.rate}, including
            materials, labour and waste removal. Your written quote confirms the
            final price after a site visit.
          </p>
          {service.price.rows && (
            <table className="w-full text-left text-sm mb-6 border border-border rounded-lg overflow-hidden">
              <tbody>
                {service.price.rows.map((r) => (
                  <tr key={r.label} className="border-b border-border last:border-0">
                    <th scope="row" className="font-medium text-foreground p-3">{r.label}</th>
                    <td className="p-3 text-foreground font-semibold whitespace-nowrap">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <h3 className="font-heading font-bold text-foreground mb-3">What changes the price</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {service.price.drivers.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/pricing" className="font-semibold text-highlight hover:underline">
              See all our prices
            </Link>
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-8 text-center">
            Recent {service.name.toLowerCase()} work in Sheffield
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {service.gallery.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/our-work" className="font-semibold text-highlight hover:underline">
              See more of our work
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            {service.name}: common questions
          </h2>
          <FAQList faqs={service.faqs} />
        </div>
      </section>

      {/* Other services */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-heading font-bold text-foreground mb-3">Other services</h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-highlight hover:text-highlight-foreground transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCTA heading={`Get a quote for your ${service.name.toLowerCase()}`} />
    </main>
  );
}
