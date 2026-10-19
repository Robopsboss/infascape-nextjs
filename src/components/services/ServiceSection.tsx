"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

interface ServiceSectionProps {
  heading: string;
  content: string[];
  images: string[];
  imageAlts: string[];
  reverse?: boolean;
  href?: string;
  linkLabel?: string;
}

const ServiceSection = ({ heading, content, images, imageAlts, reverse = false, href, linkLabel }: ServiceSectionProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className={`section-padding ${reverse ? "bg-section-alt" : "bg-background"}`}>
      <div className="container-narrow mx-auto">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-start`}>
          {/* Image gallery */}
          <motion.div
            className="w-full lg:w-1/2 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={images[selectedImage]}
                alt={imageAlts[selectedImage]}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-all duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === i
                      ? "border-highlight ring-1 ring-highlight"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={imageAlts[i]}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">{heading}</h2>
            {content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            {href && (
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 font-semibold text-highlight hover:gap-2.5 transition-all"
              >
                {linkLabel ?? "Prices & details"} <ArrowRight size={16} />
              </Link>
            )}
            <div>
            <a href={SITE.quoteUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="mt-2 font-heading font-bold">
                Request a Quote
              </Button>
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
