"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "all" | "tarmac" | "paving" | "grass" | "fencing";

interface Project {
  image: string;
  alt: string;
  category: Category;
  label: string;
}

const projects: Project[] = [
  { image: "/assets/gallery/tarmac-driveway.jpg", alt: "Tarmac driveway installation Sheffield", category: "tarmac", label: "Tarmac & Driveways" },
  { image: "/assets/gallery/paving-wide.jpg", alt: "Porcelain paving patio Sheffield", category: "paving", label: "Porcelain Paving" },
  { image: "/assets/gallery/green-wall-grass.jpg", alt: "Artificial grass installation Sheffield with green wall", category: "grass", label: "Artificial Grass" },
  { image: "/assets/gallery/slatted-fencing-paving.jpg", alt: "Slatted fencing installation Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/block-paving-driveway.jpg", alt: "Block paving driveway Sheffield", category: "tarmac", label: "Tarmac & Driveways" },
  { image: "/assets/gallery/porcelain-paving-brick-wall.jpg", alt: "Porcelain paving with brick wall Sheffield", category: "paving", label: "Porcelain Paving" },
  { image: "/assets/gallery/decking-01.jpg", alt: "Composite decking installation Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/decking-grass-angle.jpg", alt: "Artificial grass with decking border Sheffield", category: "grass", label: "Artificial Grass" },
  { image: "/assets/gallery/cobble-driveway.jpg", alt: "Cobblestone driveway Sheffield", category: "tarmac", label: "Tarmac & Driveways" },
  { image: "/assets/gallery/paving-close-up.jpg", alt: "Close-up porcelain paving detail Sheffield", category: "paving", label: "Porcelain Paving" },
  { image: "/assets/gallery/decking-grass-fencing-combo.jpg", alt: "Artificial grass decking and fencing Sheffield", category: "grass", label: "Artificial Grass" },
  { image: "/assets/gallery/multi-level-garden.jpg", alt: "Multi-level garden landscaping Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/large-paving-shed.jpg", alt: "Large porcelain paving area Sheffield", category: "paving", label: "Porcelain Paving" },
  { image: "/assets/gallery/pergola-grass.jpg", alt: "Pergola with artificial grass Sheffield", category: "grass", label: "Artificial Grass" },
  { image: "/assets/gallery/decking-border-detail.jpg", alt: "Decking border detail work Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/sleeper-steps-paving.jpg", alt: "Sleeper wall and steps with paving Sheffield", category: "paving", label: "Porcelain Paving" },
  { image: "/assets/gallery/grey-composite-decking-1.jpg", alt: "Grey composite decking Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/grey-composite-decking-2.jpg", alt: "Grey composite decking detail Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/large-decking-01.jpg", alt: "Large decking area installation Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/large-decking-02.jpg", alt: "Large composite decking Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/raised-decking-view.jpg", alt: "Raised decking with garden view Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/outdoor-kitchen-green-wall.jpg", alt: "Outdoor kitchen with green wall Sheffield", category: "fencing", label: "Fencing & Borders" },
  { image: "/assets/gallery/outdoor-kitchen.jpg", alt: "Outdoor kitchen paving area Sheffield", category: "paving", label: "Porcelain Paving" },
  { image: "/assets/gallery/decking-paving-combo.jpg", alt: "Decking and paving combination Sheffield", category: "paving", label: "Porcelain Paving" },
  { image: "/assets/gallery/decking-02.jpg", alt: "Decking installation Sheffield", category: "fencing", label: "Fencing & Borders" },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Tarmac & Driveways", value: "tarmac" },
  { label: "Porcelain Paving", value: "paving" },
  { label: "Artificial Grass", value: "grass" },
  { label: "Fencing & Borders", value: "fencing" },
];

const OurWorkGallery = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    const next = lightboxIndex + direction;
    if (next >= 0 && next < filtered.length) setLightboxIndex(next);
  };

  return (
    <>
      {/* Filters */}
      <div className="bg-background border-b border-border sticky top-16 sm:top-18 z-40">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0 ${
                activeFilter === filter.value
                  ? "bg-highlight text-highlight-foreground"
                  : "bg-muted text-muted-foreground hover:bg-highlight/10 hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.button
                  key={project.image}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 text-sm font-heading font-semibold text-highlight-foreground bg-highlight/90 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.label}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-background/80 hover:text-background transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-4 text-background/80 hover:text-background transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
            )}

            {lightboxIndex < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-4 text-background/80 hover:text-background transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              key={filtered[lightboxIndex].image}
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 text-background/60 text-sm font-medium">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OurWorkGallery;
