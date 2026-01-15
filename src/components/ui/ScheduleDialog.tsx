"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Copy, Mail, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const placeholderEmail = "hello@example.com";

async function copyToClipboard(text: string) {
  if (!navigator?.clipboard?.writeText) {
    throw new Error("Clipboard not available");
  }
  await navigator.clipboard.writeText(text);
}

export function ScheduleDialog({
  label = "Schedule a Call",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button type="button" variant="primary" withDot className={className}>
          {label}
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0709] text-white shadow-2xl">
          <div className="relative p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_0%,rgba(255,77,31,0.35),transparent_55%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Dialog.Title className="text-xl font-semibold tracking-tight">
                    Quick contact
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 text-sm leading-6 text-white/70">
                    Placeholder dialog. Add your real booking link and contact info
                    later.
                  </Dialog.Description>
                </div>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${placeholderEmail}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/90 transition hover:border-white/20 hover:bg-black/40"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4 text-white/80" aria-hidden="true" />
                    Email me
                  </span>
                  <span
                    className="text-white/60 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>

                <button
                  type="button"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-left text-sm text-white/90 transition hover:border-white/20 hover:bg-black/40"
                  onClick={async () => {
                    try {
                      await copyToClipboard(placeholderEmail);
                      toast.success("Copied email address");
                    } catch {
                      toast.error("Could not copy to clipboard");
                    }
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <Copy className="h-4 w-4 text-white/80" aria-hidden="true" />
                    Copy email
                  </span>
                  <span
                    className="text-white/60 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                Prefer forms? Jump to{" "}
                <Dialog.Close asChild>
                  <a
                    href="#contact"
                    className={cn(
                      "font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white/60",
                    )}
                  >
                    the contact section
                  </a>
                </Dialog.Close>
                .
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
