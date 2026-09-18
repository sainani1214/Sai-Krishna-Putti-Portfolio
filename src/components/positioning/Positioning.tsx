import { Container } from "@/components/layout/Container";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { positioningAreas, positioningStatement } from "@/data/positioning";
import { cn } from "@/lib/utils";

export function Positioning() {
  return (
    <section id="approach" className="relative">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-20">
            <Reveal className="lg:col-span-3">
              <Label marker>
                <span className="text-ink-faint">01</span>
                Positioning
              </Label>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-9">
              <h2 className="max-w-[20ch] text-statement font-medium text-balance">
                <span className="text-ink-muted">{positioningStatement.lead}</span>{" "}
                <span className="text-ink">{positioningStatement.trail}</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 border-t border-line sm:mt-20 lg:grid-cols-3">
            {positioningAreas.map((area, index) => (
              <Reveal
                key={area.index}
                delay={0.06 * index}
                className={cn(
                  "relative border-b border-line lg:border-b-0",
                  index === 0 ? "" : "lg:pl-8 xl:pl-12",
                )}
              >
                <div className="h-full py-8 lg:py-10 lg:pr-10">
                  {index > 0 ? (
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 hidden w-px bg-line lg:block"
                    />
                  ) : null}
                  <span className="font-mono text-micro text-ink-faint">
                    {area.index}
                  </span>
                  <h3 className="mt-5 text-subheading font-medium text-ink">
                    {area.title}
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      <div aria-hidden className="hairline-x h-px w-full" />
    </section>
  );
}
