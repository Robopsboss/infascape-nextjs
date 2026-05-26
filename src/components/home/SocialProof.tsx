"use client";

import { motion } from "framer-motion";
import { Facebook, ThumbsUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Donna Louise Swift",
    date: "18/12/2025",
    text: "Has my drive done by Rob and his team and the workmanship...",
  },
  {
    name: "Louise Delibal",
    date: "15/10/2025",
    text: "Rob and his team rebuilt our garden following previously po...",
  },
  {
    name: "Jenny Hills",
    date: "14/09/2025",
    text: "We had Rob and the team to redo our driveway this week: it...",
  },
];

const FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/infascape/reviews";

const SocialProof = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <span className="inline-block bg-highlight/15 text-highlight text-sm font-bold px-4 py-1.5 rounded-full mb-2">
            100% recommend
          </span>
          <p className="text-muted-foreground text-sm">
            Based on the opinion of 16 people
          </p>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 flex flex-col"
            >
              {/* Avatar + Recommends */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-highlight bg-highlight/10 px-2.5 py-1 rounded-full">
                  <ThumbsUp className="w-3 h-3" />
                  Recommends
                </span>
              </div>

              {/* Review text */}
              <p className="text-sm text-foreground leading-relaxed mb-2 line-clamp-1">
                &quot;{review.text}&quot;
              </p>
              <a
                href={FACEBOOK_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-highlight hover:underline mb-4"
              >
                Read full review
              </a>

              {/* Name + Date */}
              <div className="mt-auto pt-3 border-t border-border">
                <p className="text-sm font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={FACEBOOK_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="font-heading font-bold gap-2">
              <Facebook size={18} />
              Read all reviews on Facebook
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
