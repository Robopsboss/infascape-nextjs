import type { Metadata } from "next";
import { ExternalLink, Facebook, Star } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import FAQList from "@/components/seo/FAQList";
import PageHeader from "@/components/seo/PageHeader";
import PageCTA from "@/components/seo/PageCTA";
import ReviewCard from "@/components/seo/ReviewCard";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { REVIEWS, REVIEW_SUMMARY, REVIEW_THEMES, formatReviewDate } from "@/lib/reviews";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { FAQ } from "@/lib/services";

const { googleRating, googleReviewCount } = REVIEW_SUMMARY;
const hasGoogleTotals = googleRating !== null && googleReviewCount !== null;

const summaryLine = hasGoogleTotals
  ? `Infascape is rated ${googleRating} out of 5 from ${googleReviewCount} Google reviews, and ${REVIEW_SUMMARY.facebookRecommendPercent}% of our ${REVIEW_SUMMARY.facebookRecommendCount} Facebook reviewers recommend us.`
  : `Every Google review on this page is 5 stars, and ${REVIEW_SUMMARY.facebookRecommendPercent}% of our ${REVIEW_SUMMARY.facebookRecommendCount} Facebook reviewers recommend us.`;

export const metadata: Metadata = pageMetadata({
  title: "Infascape Reviews | Sheffield Landscaping & Driveway Reviews",
  description: `${summaryLine} Read what Sheffield customers say about our driveways, patios, fencing, decking and artificial grass.`,
  path: "/reviews",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
];

const faqs: FAQ[] = [
  {
    q: "Where can I read all of Infascape's reviews?",
    a: "On our Google Business Profile and our Facebook page. The reviews on this page are copied word for word from Google.",
  },
  {
    q: "Are these reviews real?",
    a: "Yes. Every review here was left by a customer on our Google Business Profile, where you can read it in full alongside any photos they added.",
  },
  {
    q: "What do customers say most often?",
    a: "That they were kept informed throughout, that the site was kept clean and tidy, that jobs finished on time and on budget, and that Rob gave honest advice. Several customers have had us back for more work.",
  },
  {
    q: "How do I leave a review?",
    a: "Search for Infascape Ltd on Google and click 'Write a review', or use the Google link at the top of this page.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema(crumbs)]} />
      <PageHeader crumbs={crumbs} title="Customer Reviews" intro={summaryLine}>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={SITE.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary-foreground/10 px-4 py-2 text-sm font-semibold hover:bg-primary-foreground/20 transition-colors"
          >
            <Star size={16} className="fill-highlight text-highlight" />
            All reviews on Google
            <ExternalLink size={14} />
          </a>
          <a
            href={SITE.facebookReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary-foreground/10 px-4 py-2 text-sm font-semibold hover:bg-primary-foreground/20 transition-colors"
          >
            <Facebook size={16} />
            Reviews on Facebook
            <ExternalLink size={14} />
          </a>
        </div>
        <p className="mt-4 text-xs text-primary-foreground/50">
          Last updated {formatReviewDate(REVIEW_SUMMARY.lastUpdated.slice(0, 7))}
        </p>
      </PageHeader>

      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-8">
            What customers mention most
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REVIEW_THEMES.map((t) => (
              <li key={t.theme} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-heading font-bold text-foreground mb-1.5">{t.theme}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-8">
            Google reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.author + r.date} review={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">About our reviews</h2>
          <FAQList faqs={faqs} />
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
