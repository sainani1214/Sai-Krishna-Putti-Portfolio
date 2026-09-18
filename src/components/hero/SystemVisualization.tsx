"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Fragment } from "react";

import { systemLayers } from "@/data/system-layers";

const SPINE_LEFT = "2.25rem";

function CornerTicks() {
  const corners = [
    "-top-px -left-px border-t border-l",
    "-top-px -right-px border-t border-r",
    "-bottom-px -left-px border-b border-l",
    "-bottom-px -right-px border-b border-r",
  ];

  return (
    <>
      {corners.map((corner) => (
        <span
          key={corner}
          aria-hidden
          className={`pointer-events-none absolute h-3 w-3 border-line-strong ${corner}`}
        />
      ))}
    </>
  );
}

export function SystemVisualization() {
  const reduceMotion = useReducedMotion();

  return (
    <figure className="relative">
      <div className="relative rounded-[4px] border border-line bg-raised/50 p-4 sm:p-6">
        <CornerTicks />

        <figcaption className="flex items-center justify-between gap-4 pb-5">
          <span className="font-mono text-micro text-ink-dim uppercase">
            System topology
          </span>
          <span className="font-mono text-micro text-ink-faint uppercase">
            Request path
          </span>
        </figcaption>

        <div className="relative">
          {/* Continuous spine: visible only in the gaps between nodes. */}
          <span
            aria-hidden
            className="absolute top-6 bottom-6 w-px bg-line"
            style={{ left: SPINE_LEFT }}
          />

          {!reduceMotion ? (
            <motion.span
              aria-hidden
              className="absolute top-6 h-8 w-px bg-gradient-to-b from-transparent via-ink/70 to-transparent"
              style={{ left: SPINE_LEFT }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: ["0%", "1100%"], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 5.2,
                times: [0, 0.08, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 2.4,
                ease: "linear",
              }}
            />
          ) : null}

          <ol className="relative">
            {systemLayers.map((layer, index) => (
              <Fragment key={layer.label}>
                <li className="relative z-10 flex items-center gap-3 rounded-[3px] border border-line-soft bg-panel px-3 py-3 sm:gap-4 sm:px-4">
                  <span className="font-mono text-micro text-ink-faint">
                    {layer.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full border border-line-strong bg-canvas"
                  />
                  <span className="flex-1 truncate text-[0.8125rem] tracking-[-0.01em] text-ink sm:text-sm">
                    {layer.label}
                  </span>
                  <span className="hidden font-mono text-micro text-ink-muted uppercase sm:inline">
                    {layer.meta}
                  </span>
                </li>

                {index < systemLayers.length - 1 ? (
                  <li
                    aria-hidden
                    className="relative h-7"
                    style={{ paddingLeft: `calc(${SPINE_LEFT} + 0.75rem)` }}
                  >
                    <span className="absolute top-1/2 -translate-y-1/2 font-mono text-micro text-ink-faint lowercase">
                      {layer.edge}
                    </span>
                  </li>
                ) : null}
              </Fragment>
            ))}
          </ol>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-line-soft pt-4">
          <span className="font-mono text-micro text-ink-faint uppercase">
            Stateless edge
          </span>
          <span className="font-mono text-micro text-ink-faint uppercase">
            Durable core
          </span>
        </div>
      </div>
    </figure>
  );
}
