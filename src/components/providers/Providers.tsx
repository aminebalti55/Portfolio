"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import Lenis from "@studio-freight/lenis";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      duration:1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Tooltip.Provider delayDuration={200}>
        {children}
        <Toaster richColors position="top-right" />
      </Tooltip.Provider>
    </ThemeProvider>
  );
}
