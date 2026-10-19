import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/** Closing call to action used on the service pages. */
export default function PageCTA({
  heading = "Ready to Discuss Your Project?",
  body = "Tell us what you're after and we'll come out, measure up and give you a written quote that shows exactly what's being built.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">
          {heading}
        </h2>
        <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={SITE.quoteUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="font-heading font-bold text-base px-10">
              Request a Quote
            </Button>
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 text-base font-semibold text-primary-foreground hover:text-highlight transition-colors"
          >
            <Phone size={18} />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
