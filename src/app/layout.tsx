import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { businessSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Infascape Ltd | Engineered Landscaping Sheffield",
  description:
    "Sheffield's engineered landscaping specialists. Tarmac driveways, porcelain paving, artificial grass & fencing built to last 10+ years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <JsonLd data={[businessSchema, websiteSchema]} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
