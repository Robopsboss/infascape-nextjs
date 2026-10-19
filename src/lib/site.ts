/**
 * Single source of truth for business details (NAP), links and areas.
 * Everything that shows the phone, email, address or areas reads from here,
 * so the website, schema and Google Business Profile stay consistent.
 *
 * Change a value here and it updates everywhere on the site.
 */
export const SITE = {
  name: "Infascape",
  legalName: "Infascape Ltd",
  // Canonical domain. The live site resolves to www, so everything points here.
  url: "https://www.infascape.co.uk",
  tagline: "Engineered landscaping in Sheffield",
  description:
    "Sheffield landscaping and groundworks company. Tarmac driveways, porcelain patios, artificial grass, fencing, sleeper walls and composite decking, built on proper foundations to last 10+ years.",

  // Must match the Google Business Profile exactly.
  phone: "+447837698283",
  phoneDisplay: "07837 698283",
  email: "info@infascape.co.uk",

  // Service-area business: no street address is published.
  addressLocality: "Sheffield",
  addressRegion: "South Yorkshire",
  addressCountry: "GB",

  // Areas used in schema (areaServed) and wording used on the page.
  areasServed: ["Sheffield", "South Yorkshire"],
  areasText: "Sheffield and surrounding areas",

  founder: "Rob France",
  foundingDate: "2022",

  quoteUrl: "https://tally.so/r/rjPLEL",
  facebookUrl: "https://www.facebook.com/infascape",
  facebookReviewsUrl: "https://www.facebook.com/infascape/reviews",
  // Permanent Google Maps link to the Business Profile (used in schema sameAs).
  googleBusinessProfileUrl: "https://maps.google.com/?cid=8822740014982497524",

  logo: "/assets/infascape-logo-secondary.jpg",
  ogImage: "/assets/hero-landing.jpg",
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path === "/" ? "" : path}`;
