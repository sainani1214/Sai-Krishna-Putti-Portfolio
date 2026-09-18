import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NoteArticle } from "@/components/notes/NoteArticle";
import { getAllNoteSlugs, getNoteBySlug } from "@/data/notes";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return { title: "Note" };
  }

  return createPageMetadata({
    title: note.title,
    description: note.excerpt,
    path: `/notes/${note.slug}`,
  });
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="relative">
      <div aria-hidden className="hairline-x h-px w-full" />
      <NoteArticle note={note} />
      <div aria-hidden className="hairline-x h-px w-full" />
    </div>
  );
}
