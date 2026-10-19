import type { Metadata } from "next";
import { SITE } from "./site";

/** Builds page metadata with canonical, Open Graph and Twitter in one place. */
export function pageMetadata({
  title,
  description,
  path,
  image = SITE.ogImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.legalName,
      locale: "en_GB",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
