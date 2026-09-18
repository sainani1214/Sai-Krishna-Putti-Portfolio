"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { shippedNavItems } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = shippedNavItems;

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-canvas/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/#top"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — back to top`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-[3px] border border-line font-mono text-[0.625rem] tracking-[0.08em] text-ink transition-colors duration-200 group-hover:border-line-strong">
              {site.monogram}
            </span>
            <span className="hidden font-mono text-micro text-ink-dim uppercase transition-colors duration-200 group-hover:text-ink sm:inline">
              {site.name}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex xl:gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.8125rem] text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button href={site.links.resume} size="sm" variant="secondary">
              Resume
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-ink-dim transition-colors hover:text-ink xl:hidden"
          >
            {open ? (
              <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
            ) : (
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-canvas/95 backdrop-blur-xl xl:hidden"
          >
            <Container>
              <nav aria-label="Mobile" className="flex flex-col py-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line-soft py-4 text-lg tracking-[-0.02em] text-ink-dim transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-5 mb-2 flex items-center gap-3">
                  <ThemeToggle />
                  <Button
                    href={site.links.resume}
                    variant="secondary"
                    className="flex-1"
                    onClick={() => setOpen(false)}
                  >
                    Resume
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
