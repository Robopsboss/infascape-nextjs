/**
 * Customer reviews, copied word for word from Infascape's Google Business
 * Profile (October 2026). Dates are the month Google shows the review was
 * left. Add new reviews at the top; they appear on /reviews, and on any
 * service page listed in `services`.
 */

export type Review = {
  author: string;
  date: string; // YYYY-MM
  rating: 5 | 4 | 3 | 2 | 1;
  title?: string;
  text: string;
  job: string; // short description of the work, shown under the name
  services: string[]; // service slugs this review relates to
  featured?: boolean; // shown on the homepage
};

export const REVIEW_SUMMARY = {
  // From the Google Business Profile. Shown as text on /reviews and the
  // homepage. Update when new reviews come in.
  googleRating: 5.0 as number | null,
  googleReviewCount: 13 as number | null,
  facebookRecommendCount: 16,
  facebookRecommendPercent: 100,
  lastUpdated: "2026-10-20",
};

export const REVIEWS: Review[] = [
  {
    author: "Lyndsay Hill",
    date: "2026-09",
    rating: 5,
    title: "Great price",
    text: "Would really recommend this company, they created a design that was feasible and in my price range, based around my ideas and needs for the garden. They were very good at keeping me informed throughout the implementation, and were adaptable when I requested reworks or adjustments to the design.",
    job: "Garden design, slatted fencing, raised planters and artificial grass",
    services: ["fencing-sleeper-walls", "artificial-grass"],
    featured: true,
  },
  {
    author: "Kathryn Jackson",
    date: "2026-08",
    rating: 5,
    text: "We had our garden completely renovated recently including all new fencing, gravel boards, plus new decking, porcelain tiling & turf by Rob & his team. We would highly recommend as they were professional, courteous & exceptional in their work. Due to an extension access and materials had to come through the house, they managed this as part of the project & kept any mess to a minimum. We are extremely happy with our new garden & would definitely use Infascape for any future projects, thank you.",
    job: "Full garden renovation: fencing, decking, porcelain and turf",
    services: ["fencing-sleeper-walls", "composite-decking", "porcelain-patios"],
    featured: true,
  },
  {
    author: "Joe McArdle",
    date: "2026-04",
    rating: 5,
    text: "Absolutely over the moon with the work done. Had my drive widened so had both sides dug out and then new drive with overlay of the old one. I couldn't have asked for better company to do it, from start to finish I knew what was happening and constantly kept in the loop of updates etc. absolutely bang on, I'd 100% be using these guys again for future works. Thank you",
    job: "Driveway widening and new surface",
    services: ["tarmac-driveways"],
    featured: true,
  },
  {
    author: "Claire Green",
    date: "2026-03",
    rating: 5,
    text: "I've used Infascape twice now. Last year for fencing and a new patio and this past week they have re-laid my lawn and created me a hard standing area for my bins. Rob understands exactly what you want and also gives you his advice. All the guys who i have dealt with at Infascape are professional, polite and hardworking. Both jobs have been done on time, to budget, to a fantastic standard and they leave the job clean and tidy. I would not hesitate to use them again or advise anyone else to use them.",
    job: "Fencing and patio, then a new lawn and bin hardstanding (repeat customer)",
    services: ["fencing-sleeper-walls", "porcelain-patios"],
  },
  {
    author: "Joe Thompson",
    date: "2026-03",
    rating: 5,
    text: "Amazing work by Rob and his team, totally transformed our space. It's now a functional, safe and usable garden ready in time for summer. Appreciate the guidance and advice throughout the project. Highly recommend.",
    job: "Sloping garden rebuild: patio, fencing, sleeper walls and balustrade",
    services: ["porcelain-patios", "fencing-sleeper-walls"],
  },
  {
    author: "Nicola Spencer",
    date: "2026-02",
    rating: 5,
    text: "I couldn't be happier with Rob and his team, from the first consultation in September 2025, we have had them back 3 times to complete our full garden. Rob and all his team were professional, knowledgeable and very friendly. The attention to detail was outstanding and I was very happy with the results. They stayed on schedule, kept the work area clean and well communicated throughout all the 3 projects. I would highly recommend them as they exceeded our expectations.",
    job: "Full garden over three projects: paving, fencing, artificial grass and decking",
    services: ["porcelain-patios", "fencing-sleeper-walls", "artificial-grass", "composite-decking"],
  },
  {
    author: "Nick Dennis",
    date: "2026-02",
    rating: 5,
    text: "Rob & the lads transformed the front of our house, we had a new driveway, bespoke fencing & large double gate, they even painted all the brickwork for us. They went above & beyond in all aspects from the actual job, the extra bits & obviously the price! From the initial conversation with Rob, the punctuality of the guys & the expert workmanship, we couldn't be happier. I wouldn't hesitate to recommend these guys to anyone & we can't wait to have them back for the many other jobs we have that need doing. Great work fellas & thank you.",
    job: "New driveway, bespoke fencing and double gates",
    services: ["tarmac-driveways", "fencing-sleeper-walls"],
  },
];

/** What customers mention most often, drawn from the reviews above. */
export const REVIEW_THEMES = [
  { theme: "Kept informed throughout", detail: "Customers say they always knew what was happening, with regular updates from start to finish." },
  { theme: "Clean, tidy sites", detail: "Work areas kept clean and mess kept to a minimum, even when materials had to come through the house." },
  { theme: "On time and on budget", detail: "Jobs finished on schedule and to the agreed price." },
  { theme: "Honest advice", detail: "Rob listens to what you want and tells you what will work." },
  { theme: "Customers come back", detail: "Several customers have had us back for second and third projects." },
];

export const reviewsForService = (slug: string) =>
  REVIEWS.filter((r) => r.services.includes(slug));

export const formatReviewDate = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
};
