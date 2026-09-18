"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** "load" animates immediately (hero), "view" waits for the viewport. */
  trigger?: "load" | "view";
  delay?: number;
  distance?: number;
  className?: string;
};

export function Reveal({
  children,
  trigger = "view",
  delay = 0,
  distance = 14,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const hidden = { opacity: 0, y: distance };
  const shown = { opacity: 1, y: 0 };
  const transition = {
    duration: 0.6,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  if (trigger === "load") {
    return (
      <motion.div
        className={className}
        initial={hidden}
        animate={shown}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
