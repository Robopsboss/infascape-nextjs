import { Star } from "lucide-react";
import { formatReviewDate, type Review } from "@/lib/reviews";

/** Full-text review card. Server component, so the text is in the HTML. */
export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="bg-card border border-border rounded-lg p-6 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
        ))}
      </div>
      {review.title && (
        <p className="font-heading font-bold text-foreground mb-2">{review.title}</p>
      )}
      <blockquote className="text-sm text-foreground leading-relaxed mb-5">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-auto pt-4 border-t border-border">
        <p className="text-sm font-semibold text-foreground">{review.author}</p>
        <p className="text-xs text-muted-foreground">
          {review.job} · Google review, {formatReviewDate(review.date)}
        </p>
      </figcaption>
    </figure>
  );
}
