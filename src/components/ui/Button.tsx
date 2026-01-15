import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-sm hover:brightness-110 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950",
        secondary:
          "border border-black/10 bg-white text-zinc-950 hover:bg-zinc-50 focus-visible:ring-offset-white dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900/60 dark:focus-visible:ring-offset-zinc-950",
        ghost:
          "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10 focus-visible:ring-offset-black",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-5 py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type BaseProps = {
  withDot?: boolean;
  className?: string;
  children: ReactNode;
} & VariantProps<typeof buttonVariants>;

type AnchorProps = BaseProps &
  ComponentPropsWithoutRef<"a"> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: never;
  };

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant, size, withDot, className, children, ...rest } = props;

  const dotVariant = variant ?? "primary";
  const dot =
    dotVariant === "primary"
      ? "bg-white/90"
      : dotVariant === "ghost"
        ? "bg-[color:var(--accent)]"
        : "bg-[color:var(--accent)]";

  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props) {
    return (
      <a className={classes} {...(rest as AnchorProps)}>
        {withDot ? (
          <span className={cn("h-2 w-2 rounded-full", dot)} aria-hidden="true" />
        ) : null}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as NativeButtonProps)}>
      {withDot ? (
        <span className={cn("h-2 w-2 rounded-full", dot)} aria-hidden="true" />
      ) : null}
      <span>{children}</span>
    </button>
  );
}
