import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Content must never depend on JavaScript or an intersection observer to be
 * visible. This wrapper intentionally renders immediately; motion is handled
 * by small CSS hover details instead of hiding entire sections on load.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}
