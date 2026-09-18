import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";

const footerLinks = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-12">
          <div>
            <p className="font-mono text-micro text-ink-dim uppercase">{site.name}</p>
            <p className="mt-2 text-[0.8125rem] text-ink-muted">Software Developer</p>
            <p className="mt-1 font-mono text-micro text-ink-faint uppercase">
              {site.location}
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="font-mono text-micro text-ink-muted uppercase transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-line-soft pb-8 pt-6 font-mono text-micro text-ink-faint">
          © {year} {site.shortName}
        </p>
      </Container>
    </footer>
  );
}
