import { About } from "@/components/about/About";
import { EngineeringNotes } from "@/components/notes/EngineeringNotes";
import { Contact } from "@/components/contact/Contact";
import { Engineering } from "@/components/engineering/Engineering";
import { Experience } from "@/components/experience/Experience";
import { Hero } from "@/components/hero/Hero";
import { Positioning } from "@/components/positioning/Positioning";
import { SelectedWork } from "@/components/projects/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <SelectedWork />
      <Experience />
      <Engineering />
      <EngineeringNotes />
      <About />
      <Contact />
    </>
  );
}
