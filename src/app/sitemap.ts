import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { GUIDES } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: "monthly" | "yearly" = "monthly"
  ) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority });

  return [
    page("/", 1),
    page("/services", 0.9),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/guides", 0.8),
    ...GUIDES.map((g) => page(`/guides/${g.slug}`, 0.8)),
    page("/faq", 0.8),
    page("/how-we-work", 0.7),
    page("/areas", 0.8),
    page("/our-work", 0.7),
    page("/about", 0.7, "yearly"),
    page("/author/rob-france", 0.6, "yearly"),
    page("/contact", 0.8, "yearly"),
    page("/privacy-policy", 0.3, "yearly"),
  ];
}
