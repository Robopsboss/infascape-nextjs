import { SITE, absoluteUrl } from "./site";
import { SERVICES, type FAQ, type Service } from "./services";

export const BUSINESS_ID = `${SITE.url}/#business`;
export const FOUNDER_ID = `${SITE.url}/about#rob-france`;

const sameAs = [SITE.facebookUrl, SITE.googleBusinessProfileUrl].filter(Boolean);

const areaServed = SITE.areasServed.map((name, i) =>
  i === 0
    ? { "@type": "City", name }
    : { "@type": "AdministrativeArea", name }
);

/** Sitewide business entity. Rendered once, in the root layout. */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LandscapingBusiness", "HomeAndConstructionBusiness"],
  "@id": BUSINESS_ID,
  name: SITE.legalName,
  alternateName: SITE.name,
  description: SITE.description,
  url: SITE.url,
  logo: absoluteUrl(SITE.logo),
  image: absoluteUrl(SITE.ogImage),
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "££",
  foundingDate: SITE.foundingDate,
  founder: { "@id": FOUNDER_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.addressLocality,
    addressRegion: SITE.addressRegion,
    addressCountry: SITE.addressCountry,
  },
  areaServed,
  sameAs,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: absoluteUrl(`/services/${s.slug}`),
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.legalName,
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "en-GB",
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: SITE.founder,
  jobTitle: "Founder and Director",
  worksFor: { "@id": BUSINESS_ID },
  knowsAbout: [
    "Tarmac driveways",
    "Groundworks",
    "Porcelain paving",
    "Artificial grass",
    "Fencing",
    "Composite decking",
  ],
  url: absoluteUrl("/about"),
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (s: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(`/services/${s.slug}`)}#service`,
  name: `${s.name} in Sheffield`,
  serviceType: s.serviceType,
  description: s.answer,
  url: absoluteUrl(`/services/${s.slug}`),
  image: absoluteUrl(s.image),
  provider: { "@id": BUSINESS_ID },
  areaServed,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: s.price.low,
    highPrice: s.price.high,
    description: s.price.typical,
  },
});
