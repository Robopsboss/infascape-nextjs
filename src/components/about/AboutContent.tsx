"use client";

import { motion } from "framer-motion";
import { Building2, Lightbulb, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const noList = [
  "No callbacks",
  "No sinking slabs",
  "No cracked tarmac",
  "No rotting sleepers in three years",
  'No "we\'ll come back and fix that"',
  "No cowboy stress",
];

const howWeWork = [
  {
    title: "Before We Start",
    content:
      "Detailed schedule of works sent to you in advance for projects over a week. Day-by-day breakdown of what happens when. Realistic timelines accounting for weather and material deliveries.",
  },
  {
    title: "During The Project",
    content:
      'Progress updates throughout, especially on larger jobs. We explain the process as we go — why we\'re doing what we\'re doing. If something\'s not right, it gets redone. You\'ll never hear "that\'ll do" on our sites.',
  },
  {
    title: "Our Standards",
    content:
      "Correct sub-base depths — calculated, not guessed. Proper drainage methods because puddles mean failure. Methodical attention to detail at every stage. Materials treated for protection and longevity.",
  },
];

const nameOrigin = [
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "Every project built with the right foundations from the ground up. Proper sub-base depths, correct compaction, drainage that works. Infrastructure isn't what you see — it's what prevents callbacks 5 years later.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description:
      'Up-to-date procedures and techniques during the build. We don\'t do things a certain way because "that\'s how it\'s always been done." We calculate, measure, and engineer each project using modern methods that deliver better results.',
  },
  {
    icon: Infinity,
    title: "Infinite",
    description:
      "Endless possibilities for your outdoor space. From garden borders to full driveway installations, tarmac to porcelain paving. Your space, properly engineered to last a decade.",
  },
];

const AboutContent = () => {
  return (
    <>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
            {...fadeUp}
          >
            About Infascape
          </motion.h1>
          <motion.p
            className="text-primary-foreground/70 max-w-xl mx-auto text-base sm:text-lg"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Engineered landscaping, built to last.
          </motion.p>
        </div>
      </section>

      {/* Section 1 — Our Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-6 text-center">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center text-base sm:text-lg italic">
              Do it once. Do it properly. Do it from the ground up. And make
              sure the customer never has to worry about it again.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We&apos;re not selling patios, driveways or decking. We&apos;re selling:
            </p>
            <ul className="space-y-2 mb-8">
              {noList.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-highlight shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Most of the industry builds for Instagram photos. We build for
              10-year durability. We don&apos;t want to be the cheapest. We don&apos;t
              want to be the busiest. We want to be the one people trust when it
              actually matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — How We Work */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-12 text-center"
            {...fadeUp}
          >
            How We Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {howWeWork.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-lg p-6 sm:p-8 border border-border"
              >
                <span className="inline-block w-8 h-8 rounded-full bg-highlight text-highlight-foreground text-sm font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Why "Infascape" */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
              Why &quot;Infascape&quot;
            </h2>
            <p className="text-muted-foreground">
              Three principles. One name.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {nameOrigin.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-lg p-6 sm:p-8 border border-border text-center"
              >
                <div className="w-12 h-12 rounded-md bg-highlight/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-highlight" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — About the Team */}
      <section id="rob-france" className="section-padding bg-section-alt scroll-mt-24">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Who You&apos;ll Deal With
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
              Infascape is run by Rob France. Rob has worked in the trades for
              over 20 years: building sites, new builds, a tarmac company, and
              landscaping and joinery. He started his own business in 2020 and
              founded Infascape Ltd in 2022.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Working for other firms is where Rob saw what fails and why
              corners get cut, which is exactly why we don&apos;t cut them. You
              deal with Rob from the first visit to the handover. Every job,
              from garden borders to full driveways, gets the same methodical
              attention to detail, and is built to last a decade, not to need
              callbacks in three years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Whether it&apos;s a full driveway installation or garden borders, we&apos;d
              love to hear about your project.
            </p>
            <a
              href="https://tally.so/r/rjPLEL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="font-heading font-bold text-base px-10"
              >
                Request a Quote
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
