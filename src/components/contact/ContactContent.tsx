"use client";

import { motion } from "framer-motion";
import { Facebook, Star } from "lucide-react";
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
                <a href="https://tally.so/r/rjPLEL" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="font-heading font-bold text-base px-10 py-6 text-lg">
                    Request a Quote
                  </Button>
                </a>
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

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-highlight text-highlight"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    5.0
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Rated 5 out of 5 on Facebook. Every review reflects the
                  quality and care we put into each project.
                </p>

                <a
                  href="https://www.facebook.com/infascape/reviews"
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
