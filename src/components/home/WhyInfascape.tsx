"use client";

import { motion } from "framer-motion";
import { Shield, Clock, MessageSquare } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "No Corners Cut",
    description:
      "Correct sub-base depths, proper compaction, drainage that actually works. We calculate tonnage properly because sinking driveways cost you thousands to fix. If something's not right on site, it gets redone — you'll never hear 'that'll do' from us.",
  },
  {
    icon: Clock,
    title: "10-Year Durability",
    description:
      "Most landscapers build for Instagram photos. We build so you never think about your driveway again. No rotting sleepers in three years. No callbacks. Just methodical attention to detail at every stage.",
  },
  {
    icon: MessageSquare,
    title: "You'll Know What's Happening",
    description:
      "For projects over a week, we send you a detailed schedule of works before we start. Day-by-day breakdown, realistic timelines, progress updates throughout. We explain the process as we go.",
  },
];

const WhyInfascape = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
            Why Infascape
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The difference between a job done and a job done properly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-lg p-6 sm:p-8 border border-border"
            >
              <div className="w-11 h-11 rounded-md bg-highlight/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-5 h-5 text-highlight" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInfascape;
