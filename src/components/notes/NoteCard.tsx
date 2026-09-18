import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import type { Note } from "@/data/notes";

export function NoteCard({ note, delay = 0 }: { note: Note; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/notes/${note.slug}`}
        className="group block rounded-[4px] border border-line bg-raised/20 p-6 transition-colors duration-300 hover:border-line-strong hover:bg-raised/50 sm:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-micro text-ink-faint">{note.index}</span>
            <h3 className="mt-4 text-subheading font-medium tracking-[-0.02em] text-ink text-balance">
              {note.title}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
              {note.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-micro text-ink-faint uppercase transition-colors group-hover:text-ink-dim">
              {note.publishedAt ? "Read" : "Draft"}
              <ArrowUpRight
                aria-hidden
                strokeWidth={1.5}
                className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
