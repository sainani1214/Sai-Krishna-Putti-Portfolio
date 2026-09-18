import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contactContent } from "@/data/contact";
import { site } from "@/data/site";

export function Contact() {
  const mailto = `mailto:${site.email}`;

  return (
    <section id="contact" className="relative">
      <Container>
        <div className="py-24 sm:py-28 lg:py-36">
          <Reveal>
            <h2 className="max-w-[18ch] text-statement font-medium text-balance">
              <span className="text-ink-muted">{contactContent.headingLead}</span>{" "}
              <span className="text-ink">{contactContent.headingTrail}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href={mailto} variant="primary">
                Get in touch
                <ArrowUpRight
                  aria-hidden
                  strokeWidth={1.75}
                  className="h-3.5 w-3.5 transition-transform duration-200 ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                />
              </Button>
              <Button
                href={site.links.linkedin}
                variant="secondary"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </Button>
              <Button
                href={site.links.github}
                variant="secondary"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="mt-12 border-t border-line-soft pt-8">
            <a
              href={mailto}
              className="font-mono text-micro text-ink-muted uppercase transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
