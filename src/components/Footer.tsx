import Link from "next/link";
import { Facebook, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const pages = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Our Work", path: "/our-work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const linkClass =
  "text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors";
const headingClass =
  "font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-heading text-xl font-extrabold tracking-tight mb-3">INFASCAPE</p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Engineered landscaping in Sheffield. Built to last a decade, not just look good on Instagram.
            </p>
          </div>

          <div>
            <p className={headingClass}>Services</p>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>Pages</p>
            <ul className="space-y-2">
              {pages.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>Contact</p>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${SITE.phone}`} className={`inline-flex items-center gap-2 ${linkClass}`}>
                  <Phone size={16} />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={`inline-flex items-center gap-2 ${linkClass}`}>
                  <Mail size={16} />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${linkClass}`}
                >
                  <Facebook size={16} />
                  Facebook
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-primary-foreground/40">
              {SITE.legalName}
              <br />
              Covering {SITE.areasServed.join(" and ")}
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
