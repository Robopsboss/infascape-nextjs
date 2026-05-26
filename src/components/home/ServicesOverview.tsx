"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/assets/service-tarmac.jpg",
    title: "Tarmac & Driveways",
    alt: "Tarmac driveway installation Sheffield",
    description: "Properly calculated tonnage, correct MOT depths, and professional finishes built to handle daily use.",
  },
  {
    image: "/assets/service-paving.jpg",
    title: "Porcelain Paving & Patios",
    alt: "Porcelain paving patio Sheffield",
    description: "Full sub-base preparation, proper drainage, and precision jointing for a patio that lasts.",
  },
  {
    image: "/assets/service-grass.jpg",
    title: "Artificial Grass",
    alt: "Artificial grass installation Sheffield",
    description: "Quality materials on a properly prepared base — no puddles, no peeling, no regrets.",
  },
  {
    image: "/assets/service-fencing.jpg",
    title: "Fencing & Garden Borders",
    alt: "Sleeper wall and fencing Sheffield",
    description: "Treated timber, proper foundations, and finishing that withstands years of weathering.",
  },
];

const ServicesOverview = () => {
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
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Every service, same standard. Proper procedures from the ground up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                href="/services"
                className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-highlight/30 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-foreground mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-highlight group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
