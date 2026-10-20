import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import ReviewCard from "@/components/seo/ReviewCard";
import { REVIEWS, REVIEW_SUMMARY } from "@/lib/reviews";

const featured = REVIEWS.filter((r) => r.featured).slice(0, 3);
const { googleRating, googleReviewCount } = REVIEW_SUMMARY;

const SocialProof = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
              ))}
            </span>
            {googleRating && googleReviewCount
              ? `${googleRating} from ${googleReviewCount} Google reviews`
              : "5-star Google reviews"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((r) => (
            <ReviewCard key={r.author + r.date} review={r} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 font-semibold text-highlight hover:gap-2.5 transition-all"
          >
            Read more reviews <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
