"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            We handle everything from garden borders to full driveway installations. Our primary focus is projects from £3k–£15k+, but we also take smaller jobs to keep our team productive between larger projects.
          </p>
          <a href="https://tally.so/r/rjPLEL" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="font-heading font-bold text-base px-10">
              Request a Quote
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
