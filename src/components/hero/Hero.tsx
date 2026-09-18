import { ArrowDown, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const SystemVisualization = dynamic(
  () =>
    import("@/components/hero/SystemVisualization").then(
      (mod) => mod.SystemVisualization,
    ),
  {
    loading: () => (
      <div
        className="min-h-[min(420px,55vh)] rounded-[4px] border border-line bg-raised/30"
        aria-hidden
      />
    ),
  },
);
import { Container } from "@/components/layout/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative">
      <Container className="relative">
        <div className="pt-14 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
          <Reveal trigger="load">
            <div className="flex items-center justify-between gap-6">
              <Label marker>{site.role}</Label>
              <span className="hidden font-mono text-micro text-ink-faint uppercase sm:inline">
                {site.location}
              </span>
            </div>
          </Reveal>

          <Reveal trigger="load" delay={0.08}>
            <h1 className="mt-8 text-display font-medium text-ink sm:mt-10">
              I build{" "}
              <span className="font-serif font-normal italic">production</span>{" "}
              <br className="hidden sm:block" />
              software that scales.
            </h1>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-12 border-t border-line pt-10 sm:mt-16 lg:grid-cols-12 lg:gap-12 lg:pt-12 xl:gap-20">
            <div className="flex flex-col lg:col-span-6">
              <Reveal trigger="load" delay={0.16}>
                <p className="max-w-[48ch] text-[0.9375rem] leading-relaxed text-ink-muted sm:text-base">
                  Full-stack software developer focused on building production
                  web applications across frontend, backend, distributed
                  systems, and AI-powered products.
                </p>
              </Reveal>

              <Reveal trigger="load" delay={0.24}>
                <ul className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-2 font-mono text-micro text-ink-dim uppercase">
                  {site.stack.map((item, index) => (
                    <Fragment key={item}>
                      {index > 0 ? (
                        <li aria-hidden className="text-ink-faint">
                          ·
                        </li>
                      ) : null}
                      <li>{item}</li>
                    </Fragment>
                  ))}
                </ul>
              </Reveal>

              <Reveal trigger="load" delay={0.32}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Button href="#work" variant="primary">
                    View selected work
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </Button>

                  <Button href={site.links.resume} variant="secondary">
                    Download resume
                    <ArrowDown
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-[var(--ease-out-expo)] group-hover/button:translate-y-0.5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </Button>
                </div>
              </Reveal>

              <Reveal trigger="load" delay={0.4} className="mt-auto">
                <div className="mt-10 flex items-center gap-6 border-t border-line-soft pt-6">
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 font-mono text-micro text-ink-muted uppercase transition-colors hover:text-ink"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 font-mono text-micro text-ink-muted uppercase transition-colors hover:text-ink"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                  <span className="ml-auto font-mono text-micro text-ink-faint uppercase sm:hidden">
                    {site.location}
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal
              trigger="load"
              delay={0.3}
              distance={18}
              className="lg:col-span-6 xl:col-span-5 xl:col-start-8"
            >
              <SystemVisualization />
            </Reveal>
          </div>
        </div>
      </Container>

      <div aria-hidden className="hairline-x h-px w-full" />
    </section>
  );
}
