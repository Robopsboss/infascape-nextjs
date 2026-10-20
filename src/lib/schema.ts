import { SITE, absoluteUrl } from "./site";
import { SERVICES, type FAQ, type Service } from "./services";

export const BUSINESS_ID = `${SITE.url}/#business`;
export const FOUNDER_ID = `${SITE.url}/author/rob-france#person`;

const sameAs = [SITE.facebookUrl, SITE.googleBusinessProfileUrl].filter(Boolean);

const areaServed = [
  ...SITE.towns.map((t) => ({ "@type": "Place", name: `${t.name}, ${SITE.region}` })),
  { "@type": "AdministrativeArea", name: SITE.region },
];

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
  url: absoluteUrl("/author/rob-france"),
  image: absoluteUrl(SITE.founderPhoto),
  sameAs: ["https://opsdeck.co.uk/author/rob-france"],
  description: `Founder of Infascape Ltd. ${SITE.yearsInTrades} years working in the trades as a groundworker, joiner, landscaper and tarmacker.`,
};

/** Article schema for guides, with Rob as author. */
export const articleSchema = (a: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${absoluteUrl(`/guides/${a.slug}`)}#article`,
  headline: a.title,
  description: a.description,
  url: absoluteUrl(`/guides/${a.slug}`),
  image: absoluteUrl(a.image),
  datePublished: a.datePublished,
  dateModified: a.dateModified,
  inLanguage: "en-GB",
  author: { "@id": FOUNDER_ID },
  publisher: { "@id": BUSINESS_ID },
  mainEntityOfPage: absoluteUrl(`/guides/${a.slug}`),
});

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
});


// No Review / AggregateRating markup: Google treats reviews a business
// publishes about itself as self-serving and flags them as errors. Reviews
// stay on the page as plain text, which search and AI tools still read.
