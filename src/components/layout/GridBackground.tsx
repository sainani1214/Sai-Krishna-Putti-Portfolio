import { Container } from "@/components/layout/Container";

/**
 * Fixed technical backdrop: a faint square grid, column rails aligned to the
 * content container, and a soft vignette tied to the active theme canvas.
 */
export function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="grid-field absolute inset-0" />

      <Container className="relative h-full">
        <div className="relative h-full">
          <div className="hairline-y absolute inset-y-0 -left-px w-px" />
          <div className="hairline-y absolute inset-y-0 -right-px w-px" />
          <div className="hairline-y absolute inset-y-0 left-1/2 hidden w-px lg:block" />
        </div>
      </Container>

      <div
        className="absolute inset-0 bg-[radial-gradient(130%_95%_at_50%_0%,transparent_0%,var(--theme-vignette)_100%)]"
      />
    </div>
  );
}
