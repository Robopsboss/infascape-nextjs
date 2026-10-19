"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-landing.jpg"
          alt="Engineered landscaping project by Infascape Sheffield"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-highlight mb-4">
            Landscapers &amp; driveway installers in Sheffield
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-primary-foreground mb-6">
            Transform Your Outdoor Space With{" "}
            <span className="text-highlight">Engineering, Not Guesswork.</span>
          </h1>

          <p className="text-base sm:text-lg text-primary-foreground/70 leading-relaxed mb-8 max-w-xl">
            Proper foundations. Calculated methods. Built to last 10+ years, not just look good for the photos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href={SITE.quoteUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="font-heading font-bold text-base px-8">
                Request a Quote
              </Button>
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 sm:self-center text-base font-semibold text-primary-foreground hover:text-highlight transition-colors"
            >
              <Phone size={18} />
              {SITE.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
