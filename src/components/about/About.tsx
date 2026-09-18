import { Container } from "@/components/layout/Container";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/data/about";

export function About() {
  return (
    <section id="about" className="relative">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-20">
            <Reveal className="lg:col-span-3">
              <Label marker>
                <span className="text-ink-faint">06</span>
                About
              </Label>
            </Reveal>

            <div className="lg:col-span-9">
              <Reveal delay={0.06}>
                <h2 className="max-w-[22ch] text-statement font-medium text-balance">
                  <span className="text-ink-muted">{aboutContent.headingLead}</span>{" "}
                  <span className="text-ink">{aboutContent.headingTrail}</span>
                </h2>
              </Reveal>

              <div className="mt-10 flex max-w-reading flex-col gap-5 sm:mt-12">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.05}>
                    <p className="text-[0.9375rem] leading-relaxed text-ink-muted sm:text-base">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div aria-hidden className="hairline-x h-px w-full" />
    </section>
  );
}
