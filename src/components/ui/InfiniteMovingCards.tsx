"use client";

import { cn } from "@/lib/cn";
import React, { useEffect, useState } from "react";

// Card payload for the moving rail. Now structured as "Outcomes
// Delivered" cards instead of fake testimonials: each card carries
// engagement metadata (client descriptor, region, period, attribution
// role) plus a first-person delivery snapshot.
export type OutcomeCard = {
  quote: string;
  attribution: string;
  client: string;
  region: string;
  period: string;
  linkedinUrl?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: OutcomeCard[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items multiple times for seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative flex w-[350px] max-w-full flex-shrink-0 flex-col gap-4 rounded-2xl border border-zinc-200 bg-white px-7 py-6 md:w-[460px] dark:border-zinc-800 dark:bg-zinc-900"
            key={item.client + idx}
          >
            {/* Header: client + region (badge-style) */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff5500]">
                  {item.region}
                </span>
                <span className="text-[15px] font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
                  {item.client}
                </span>
              </div>
              <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300">
                {item.period}
              </span>
            </div>

            <blockquote className="text-[14px] leading-[1.65] text-zinc-700 dark:text-zinc-300">
              {item.quote}
            </blockquote>

            <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-3 dark:border-zinc-800">
              <span className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400">
                — {item.attribution}
              </span>
              {item.linkedinUrl && (
                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium text-[#ff5500] transition hover:text-[#ff7733]"
                >
                  Verified ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
