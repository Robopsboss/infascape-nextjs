import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PageHeader from "@/components/seo/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

// Update this whenever the policy changes.
const LAST_UPDATED = "20 October 2026";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Infascape Ltd",
  description:
    "How Infascape Ltd collects, uses and protects your personal information when you contact us, request a quote or become a customer.",
  path: "/privacy-policy",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const sections: { heading: string; body: (string | string[])[] }[] = [
  {
    heading: "Who we are",
    body: [
      `${SITE.legalName} ("Infascape", "we", "us") is a landscaping and groundworks company based in Sheffield, South Yorkshire. We are the data controller for the personal information described in this policy.`,
      `If you have any questions about this policy or your information, email ${SITE.email} or call ${SITE.phoneDisplay}.`,
    ],
  },
  {
    heading: "What information we collect",
    body: [
      "When you request a quote, call, email or message us, we collect the information you give us. This usually includes:",
      [
        "Your name",
        "Your phone number and email address",
        "The address of the property where the work would take place",
        "Details and photos of the project you're asking about",
      ],
      "If you become a customer, we also keep records of the quote, the work carried out, invoices and payments.",
      "This website does not use analytics or advertising cookies, and we do not track you across other websites.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      [
        "To respond to your enquiry, arrange a site visit and send you a quote",
        "To plan, carry out and manage the work if you go ahead",
        "To invoice you and keep financial records",
        "To contact you about your project, including follow-up after completion",
      ],
      "We do not sell your information, and we do not use it for marketing unrelated to your enquiry or project.",
    ],
  },
  {
    heading: "Our lawful basis",
    body: [
      "We use your information because it is necessary to take steps at your request before entering into a contract (giving you a quote) and to perform that contract (doing the work). We keep financial records because the law requires it.",
      "Our quote request form also asks you to confirm you're happy for Infascape Ltd to collect and process your details as described in this policy. You can ask us to stop using or delete your information at any time, except where we have to keep records by law.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We only share your information where needed to run your enquiry or project:",
      [
        "Tally (tally.so), which provides our online quote request form and stores your submission",
        "Our email, phone and business software providers, including the job management system we use to run projects",
        "Suppliers and hauliers, who may need the site address to deliver materials or plant",
        "Our accountant and HMRC, for financial records",
      ],
      "Some of these providers may store data outside the UK. Where they do, they use safeguards recognised under UK data protection law.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "If you don't go ahead with a quote, we keep your enquiry details for up to two years, in case you come back to us, then delete them. If you become a customer, we keep job and financial records for six years after the end of the financial year the work was done in, as required for tax purposes.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Under UK data protection law you can ask us to:",
      [
        "Give you a copy of the information we hold about you",
        "Correct anything that's wrong",
        "Delete your information, where we don't need to keep it",
        "Restrict or object to how we use it",
      ],
      `To make a request, email ${SITE.email}. We will respond within one month.`,
      "If you're unhappy with how we've handled your information, please tell us first so we can put it right. You also have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk or on 0303 123 1113.",
    ],
  },
  {
    heading: "Keeping your information safe",
    body: [
      "We use reputable, password-protected services to store your information and only the people who need it to run your project can access it. This website is served over a secure (HTTPS) connection.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-16 sm:pt-18">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader crumbs={crumbs} title="Privacy Policy" intro={`Last updated ${LAST_UPDATED}.`} />
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          {sections.map((s) => (
            <section key={s.heading} className="mb-10">
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4">{s.heading}</h2>
              {s.body.map((b, i) =>
                Array.isArray(b) ? (
                  <ul key={i} className="list-disc pl-5 space-y-1.5 text-muted-foreground mb-4">
                    {b.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {b}
                  </p>
                )
              )}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
