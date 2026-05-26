"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Our Work", path: "/our-work" },
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
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === link.path
                  ? "text-highlight"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://tally.so/r/rjPLEL" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="sm" className="ml-3 font-heading font-semibold">
              Request a Quote
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.path
                    ? "text-highlight bg-primary-foreground/5"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tally.so/r/rjPLEL"
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
