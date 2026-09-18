import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engineeringDisciplines } from "@/data/engineering";
import { cn } from "@/lib/utils";

export function Engineering() {
  return (
    <section id="engineering" className="relative">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <SectionHeading
            index="04"
            eyebrow="Engineering"
            title="How I think about software"
          />

          <div className="mt-14 grid grid-cols-1 border-t border-line sm:mt-16 lg:grid-cols-2">
            {engineeringDisciplines.map((discipline, index) => (
              <Reveal
                key={discipline.index}
                delay={index * 0.04}
                className={cn(
                  "relative border-b border-line px-0 py-8 sm:py-10",
                  index % 2 === 1 ? "lg:pl-8 xl:pl-12" : "lg:pr-8 xl:pr-12",
                  index >= 2 ? "lg:border-t lg:border-line" : "",
                )}
              >
                {index % 2 === 1 ? (
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 hidden w-px bg-line lg:block"
                  />
                ) : null}

                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-micro text-ink-faint">
                    {discipline.index}
                  </span>
                  <span className="font-mono text-micro text-ink-faint uppercase">
                    {discipline.title}
                  </span>
                </div>

                <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2.5">
                  {discipline.items.map((item) => (
                    <li
                      key={item}
                      className="text-[0.8125rem] tracking-[-0.01em] text-ink-dim after:ml-3 after:text-ink-faint after:content-['/'] last:after:content-none"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      <div aria-hidden className="hairline-x h-px w-full" />
    </section>
  );
}
