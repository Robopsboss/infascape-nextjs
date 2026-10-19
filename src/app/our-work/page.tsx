import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import OurWorkHeader from "@/components/our-work/OurWorkHeader";
import OurWorkGallery from "@/components/our-work/OurWorkGallery";

export const metadata: Metadata = pageMetadata({
  title: "Landscaping Projects Sheffield | Our Work | Infascape",
  description:
    "Completed driveways, porcelain patios, artificial grass, fencing and composite decking across Sheffield. Real jobs, photographed by us.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <OurWorkHeader />
      <OurWorkGallery />
    </main>
  );
}
