import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceEntries } from "@/data/experience";

export function Experience() {
  const entry = experienceEntries[0];

  return (
    <section id="experience" className="relative">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <SectionHeading
            index="03"
            eyebrow="Experience"
            title="Software development across the full stack."
            description={entry.summary}
          />

          <Reveal className="mt-14 sm:mt-16">
            <article className="rounded-[4px] border border-line bg-raised/25">
              <header className="grid gap-6 border-b border-line-soft p-6 sm:p-8 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div className="lg:col-span-7">
                  <h3 className="text-subheading font-medium text-ink">
                    {entry.role}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] text-ink-dim">
                    {entry.company}
                    {entry.product ? (
                      <>
                        <span aria-hidden className="text-ink-faint">
                          {" "}
                          —{" "}
                        </span>
                        {entry.product}
                      </>
                    ) : null}
                  </p>
                </div>
                <p className="font-mono text-micro text-ink-muted uppercase lg:col-span-5 lg:text-right">
                  {entry.period}
                </p>
              </header>

              <div className="p-6 sm:p-8">
                <ul className="flex max-w-3xl flex-col gap-3">
                  {entry.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-dim"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>

      <div aria-hidden className="hairline-x h-px w-full" />
    </section>
  );
}
