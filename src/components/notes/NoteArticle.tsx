import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Note } from "@/data/notes";

export function NoteArticle({ note }: { note: Note }) {
  return (
    <Container>
      <article className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <Button href="/notes" variant="ghost" className="mb-10 justify-start px-0">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
            Engineering notes
          </Button>
        </Reveal>

        <Reveal delay={0.06}>
          <span className="font-mono text-micro text-ink-faint">{note.index}</span>
          <h1 className="mt-4 max-w-[24ch] text-heading font-medium tracking-[-0.03em] text-ink text-balance sm:text-statement">
            {note.title}
          </h1>
          <p className="mt-6 max-w-reading text-[0.9375rem] leading-relaxed text-ink-muted">
            {note.excerpt}
          </p>
          {!note.publishedAt ? (
            <p className="mt-4 font-mono text-micro text-ink-faint uppercase">Draft</p>
          ) : null}
        </Reveal>

        <Reveal delay={0.12} className="mt-12 max-w-reading space-y-6 border-t border-line-soft pt-10">
          {note.blocks.map((block) =>
            block.type === "heading" ? (
              <h2
                key={block.content}
                className="text-subheading font-medium tracking-[-0.02em] text-ink"
              >
                {block.content}
              </h2>
            ) : (
              <p
                key={block.content}
                className="text-[0.9375rem] leading-relaxed text-ink-muted sm:text-base"
              >
                {block.content}
              </p>
            ),
          )}
        </Reveal>
      </article>
    </Container>
  );
}
