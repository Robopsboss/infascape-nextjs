"use client";

import { motion } from "framer-motion";

const ServicesHeader = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto text-center">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-primary-foreground/70 max-w-xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We&apos;re not selling patios. We&apos;re selling no regrets. Here&apos;s what proper procedures actually look like.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHeader;
