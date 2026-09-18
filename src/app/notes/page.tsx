import { Container } from "@/components/layout/Container";
import { NoteCard } from "@/components/notes/NoteCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notes } from "@/data/notes";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Engineering notes",
  description:
    "Short-form notes on systems, reliability, caching, payments, RAG, and front-end performance.",
  path: "/notes",
});

export default function NotesIndexPage() {
  return (
    <div className="relative">
      <div aria-hidden className="hairline-x h-px w-full" />
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Engineering notes"
            title="Notes on building reliable production software."
          />

          <div className="mt-14 flex flex-col gap-4 sm:mt-16">
            {notes.map((note, index) => (
              <NoteCard key={note.slug} note={note} delay={index * 0.03} />
            ))}
          </div>
        </div>
      </Container>
      <div aria-hidden className="hairline-x h-px w-full" />
    </div>
  );
}
