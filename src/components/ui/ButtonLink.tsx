import type { ReactNode } from "react";
import { Link } from "next-view-transitions";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function ButtonLink({
  href,
  children,
  className,
  variant,
  size,
  withDot,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  withDot?: boolean;
}) {
  const dotVariant = variant ?? "primary";
  const dot =
    dotVariant === "primary"
      ? "bg-white/90"
      : dotVariant === "ghost"
        ? "bg-[color:var(--accent)]"
        : "bg-[color:var(--accent)]";

  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)}>
      {withDot ? (
        <span className={cn("h-2 w-2 rounded-full", dot)} aria-hidden="true" />
      ) : null}
      <span>{children}</span>
    </Link>
  );
}
