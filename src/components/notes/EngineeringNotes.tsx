import { Container } from "@/components/layout/Container";
import { NoteCard } from "@/components/notes/NoteCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notes } from "@/data/notes";

export function EngineeringNotes() {
  const preview = notes.slice(0, 5);

  return (
    <section id="notes" className="relative">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <SectionHeading
            index="05"
            eyebrow="Engineering notes"
            title="Short-form writing on systems, reliability, and application engineering."
            action={
              <Button href="/notes" variant="secondary" size="sm">
                View all notes
              </Button>
            }
          />

          <div className="mt-14 flex flex-col gap-4 sm:mt-16">
            {preview.map((note, index) => (
              <NoteCard key={note.slug} note={note} delay={index * 0.04} />
            ))}
          </div>
        </div>
      </Container>

      <div aria-hidden className="hairline-x h-px w-full" />
    </section>
  );
}
