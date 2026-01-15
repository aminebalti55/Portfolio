import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition",
  {
    variants: {
      variant: {
        outline:
          "border border-black/10 bg-white text-zinc-700 hover:border-black/20 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-white/25",
        solid: "bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export function Badge({
  children,
  variant,
  className,
}: {
  children: ReactNode;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  className?: string;
}) {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>;
}
