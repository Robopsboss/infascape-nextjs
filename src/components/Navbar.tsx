"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Our Work", path: "/our-work" },
  { label: "Guides", path: "/guides" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary">
      <nav className="container-narrow mx-auto flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            src="/assets/infascape-logo-secondary.jpg"
            alt="Infascape Outdoor Spaces"
            width={900}
            height={450}
            priority
            className="h-14 sm:h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                (link.path === "/" ? pathname === "/" : pathname.startsWith(link.path))
                  ? "text-highlight"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-primary-foreground hover:text-highlight transition-colors"
          >
            <Phone size={15} />
            {SITE.phoneDisplay}
          </a>
          <a href={SITE.quoteUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="sm" className="ml-1 font-heading font-semibold">
              Request a Quote
            </Button>
          </a>
        </div>

        {/* Mobile: call + toggle */}
        <div className="lg:hidden flex items-center gap-4">
        <a
          href={`tel:${SITE.phone}`}
          aria-label={`Call ${SITE.phoneDisplay}`}
          className="text-primary-foreground hover:text-highlight"
        >
          <Phone size={22} />
        </a>
        <button
          className="text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  (link.path === "/" ? pathname === "/" : pathname.startsWith(link.path))
                    ? "text-highlight bg-primary-foreground/5"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Phone size={16} />
              Call {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-2"
            >
              <Button variant="secondary" className="w-full font-heading font-semibold">
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
