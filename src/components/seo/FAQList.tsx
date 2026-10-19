import type { FAQ } from "@/lib/services";

/** Visible FAQ list. Uses native <details> so answers are in the HTML for search and AI crawlers. */
export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading font-bold text-foreground">
            <h3 className="text-base sm:text-lg">{f.q}</h3>
            <span
              aria-hidden
              className="mt-1 text-highlight transition-transform group-open:rotate-45 text-xl leading-none"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
