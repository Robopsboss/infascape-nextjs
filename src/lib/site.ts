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

  // Wording used on the page.
  areasText: "Sheffield and surrounding areas",
  // Towns and districts we want work in. Each is listed on /areas and in
  // schema areaServed. Add or remove places here.
  towns: [
    { name: "Sheffield", note: "All areas of the city" },
    { name: "Chapeltown", note: "Our home patch, S35" },
    { name: "High Green", note: "S35" },
    { name: "Ecclesfield", note: "S35" },
    { name: "Grenoside", note: "S35" },
    { name: "Oughtibridge", note: "S35" },
    { name: "Stocksbridge", note: "S36, including Deepcar" },
    { name: "Hoyland", note: "Barnsley, S74" },
    { name: "Barnsley", note: "Town and surrounding villages" },
    { name: "Rotherham", note: "Town and surrounding villages" },
  ],
  region: "South Yorkshire",

  founder: "Rob France",
  founderPhoto: "/assets/rob-france.jpg",
  // Years working in the trades (stated by Rob, Oct 2026).
  yearsInTrades: 24,
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
