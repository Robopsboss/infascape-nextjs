import Link from "next/link";

type Crumb = { name: string; path: string };

/** Dark page header with breadcrumb, H1 and answer-first intro. Server component. */
export default function PageHeader({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/50 mb-6">
          {crumbs.map((c, i) => (
            <span key={c.path}>
              {i > 0 && <span className="mx-2">/</span>}
              {i < crumbs.length - 1 ? (
                <Link href={c.path} className="hover:text-primary-foreground">
                  {c.name}
                </Link>
              ) : (
                <span className="text-primary-foreground/80">{c.name}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">{title}</h1>
        {intro && (
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}
