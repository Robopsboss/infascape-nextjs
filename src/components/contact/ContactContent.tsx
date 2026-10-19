"use client";

import { motion } from "framer-motion";
import { Facebook, Mail, Phone, ThumbsUp } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const ContactContent = () => {
  return (
    <>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
            {...fadeUp}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-primary-foreground/70 max-w-xl mx-auto text-base sm:text-lg"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We handle projects ranging from garden borders to full driveway
            installations. Our primary focus is £3k–£15k+ projects, but we also
            take smaller jobs when they fit our schedule.
          </motion.p>
        </div>
      </section>

      {/* Form + Reviews */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Tally Form */}
            <motion.div className="lg:col-span-2 flex items-center" {...fadeUp}>
              <div className="w-full bg-card rounded-lg border border-border p-8 sm:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8 text-base sm:text-lg leading-relaxed">
                  Fill out our project enquiry form and we&apos;ll get back to you within 24 hours.
                </p>
                <a href={SITE.quoteUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="font-heading font-bold text-base px-10 py-6 text-lg">
                    Request a Quote
                  </Button>
                </a>
                <div className="mt-10 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-3 rounded-lg border border-border p-4 hover:border-highlight/40 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-highlight shrink-0" />
                    <span>
                      <span className="block text-xs text-muted-foreground">Call</span>
                      <span className="block font-semibold text-foreground">{SITE.phoneDisplay}</span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 rounded-lg border border-border p-4 hover:border-highlight/40 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-highlight shrink-0" />
                    <span>
                      <span className="block text-xs text-muted-foreground">Email</span>
                      <span className="block font-semibold text-foreground break-all">{SITE.email}</span>
                    </span>
                  </a>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Covering {SITE.areasServed.join(" and ")}.
                </p>
              </div>
            </motion.div>

            {/* Sidebar — Reviews */}
            <motion.aside
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="bg-card rounded-lg border border-border p-6 sm:p-8 sticky top-24">
                <h2 className="font-heading text-lg font-bold text-foreground mb-4">
                  What Our Customers Say
                </h2>

                <div className="flex items-center gap-2 mb-3">
                  <ThumbsUp className="w-5 h-5 text-highlight" />
                  <span className="text-sm font-semibold text-foreground">
                    100% recommend on Facebook
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Every one of our Facebook reviewers recommends us. Read
                  what they say about the work and how we ran the job.
                </p>

                <a
                  href={SITE.facebookReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-highlight hover:underline"
                >
                  <Facebook size={16} />
                  Read all reviews on Facebook
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
