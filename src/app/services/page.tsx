import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import ServicesHeader from "@/components/services/ServicesHeader";
import ServiceSection from "@/components/services/ServiceSection";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Landscaping Services Sheffield | Driveways, Patios, Grass | Infascape",
  description:
    "Tarmac driveways, porcelain patios, artificial grass, fencing, sleeper walls and composite decking in Sheffield. See what we build, how, and what it costs.",
  path: "/services",
});

const services = [
  {
    slug: "tarmac-driveways",
    heading: "Why Cheap Tarmac Costs More",
    content: [
      "Proper MOT depths matter. Every driveway gets 200mm of MOT — no shortcuts, no guesswork. When competitors skip steps or eyeball tonnage, you get sinking driveways within 2 years that cost thousands to fix.",
      "We use grab lorry delivery for efficiency and proper compaction at every layer. The result? A driveway that lasts 10+ years, not one that needs resurfacing in 3.",
    ],
    images: [
      "/assets/gallery/tarmac-driveway.jpg",
      "/assets/gallery/block-paving-driveway.jpg",
      "/assets/gallery/cobble-driveway.jpg",
      "/assets/gallery/sleeper-steps-paving.jpg",
    ],
    imageAlts: [
      "Tarmac driveway installation Sheffield",
      "Block paving driveway Sheffield",
      "Cobblestone driveway finish Sheffield",
      "Sleeper steps with paving detail Sheffield",
    ],
  },
  {
    slug: "porcelain-patios",
    heading: "The Difference Between a £3k Patio and a £6k Patio",
    content: [
      "It's what's underneath. Cheap patios skip sub-base preparation — that's why slabs sink and puddles form. We excavate to proper depth, install drainage that actually works, compact in layers (not just once), and joint properly.",
      "Puddles mean someone messed up the drainage. Sinking slabs mean poor compaction. We do neither. The difference is engineering, not luck.",
    ],
    images: [
      "/assets/gallery/paving-wide.jpg",
      "/assets/gallery/paving-close-up.jpg",
      "/assets/gallery/porcelain-paving-brick-wall.jpg",
      "/assets/gallery/large-paving-shed.jpg",
    ],
    imageAlts: [
      "Porcelain paving patio installation Sheffield",
      "Close-up porcelain paving detail Sheffield",
      "Porcelain paving with brick wall border Sheffield",
      "Large paving area with garden shed Sheffield",
    ],
  },
  {
    slug: "artificial-grass",
    heading: "Why Cheap Artificial Grass Looks Terrible in 3 Years",
    content: [
      "Base preparation matters here too. We install proper drainage layers so water doesn't pool. We use quality grass materials that won't flatten or fade. Edge finishing is critical — amateur installations show gaps and lifting within months.",
      "We treat this like engineering, not just rolling out carpet. The result? Grass that looks good for 10+ years.",
    ],
    images: [
      "/assets/gallery/green-wall-grass.jpg",
      "/assets/gallery/decking-grass-angle.jpg",
      "/assets/gallery/decking-grass-fencing-combo.jpg",
      "/assets/gallery/pergola-grass.jpg",
    ],
    imageAlts: [
      "Artificial grass installation Sheffield with green wall",
      "Artificial grass with composite decking border Sheffield",
      "Artificial grass decking and fencing combination Sheffield",
      "Pergola with artificial grass garden Sheffield",
    ],
  },
  {
    slug: "fencing-sleeper-walls",
    heading: "Built for Longevity",
    content: [
      "All timber is treated for protection before installation. Sleeper walls need proper foundations — we don't just stack them and hope. Fixing methods matter — the difference between fence panels that last 5 years versus ones that rot or blow over in 3.",
      "Methodical attention to detail on every job, no matter the size.",
    ],
    images: [
      "/assets/gallery/slatted-fencing-paving.jpg",
      "/assets/gallery/decking-border-detail.jpg",
      "/assets/gallery/multi-level-garden.jpg",
      "/assets/gallery/outdoor-kitchen-green-wall.jpg",
    ],
    imageAlts: [
      "Slatted fencing installation Sheffield",
      "Decking border detail work Sheffield",
      "Multi-level garden landscaping Sheffield",
      "Outdoor kitchen with green wall border Sheffield",
    ],
  },
  {
    slug: "composite-decking",
    heading: "Decking That Stays Level",
    content: [
      "Composite boards don't rot, but the frame underneath can. Decks bounce, sag and drop out of level when joists are spaced too wide or the frame sits on soil.",
      "We build every sub-frame to the board maker's spacing, on solid foundations, with ventilation so it stays dry. Raised decks, decking borders and outdoor kitchen areas included.",
    ],
    images: [
      "/assets/gallery/grey-composite-decking-1.jpg",
      "/assets/gallery/raised-decking-view.jpg",
      "/assets/gallery/large-decking-01.jpg",
      "/assets/gallery/outdoor-kitchen.jpg",
    ],
    imageAlts: [
      "Grey composite decking Sheffield",
      "Raised composite decking with garden view Sheffield",
      "Large composite decking area Sheffield",
      "Outdoor kitchen area Sheffield",
    ],
  },
];

const sectionLabels = [
  "Tarmac & Driveways",
  "Porcelain Paving & Patios",
  "Artificial Grass",
  "Fencing & Sleeper Walls",
  "Composite Decking",
];

export default function ServicesPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ServicesHeader />

      {/* Section nav pills */}
      <nav
        className="bg-background border-b border-border sticky top-16 sm:top-18 z-40"
        aria-label="Service categories"
      >
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {sectionLabels.map((label, i) => (
            <a
              key={label}
              href={`#service-${i}`}
              className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-highlight hover:text-highlight-foreground transition-colors shrink-0"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Service Sections */}
      {services.map((service, i) => (
        <div key={i} id={`service-${i}`} className="scroll-mt-28">
          <ServiceSection
            heading={service.heading}
            content={service.content}
            images={service.images}
            imageAlts={service.imageAlts}
            reverse={i % 2 !== 0}
            href={`/services/${service.slug}`}
            linkLabel={`${sectionLabels[i]}: process & FAQs`}
          />
        </div>
      ))}
    </main>
  );
}
