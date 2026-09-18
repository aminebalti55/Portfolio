import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist. Head back to the work, hire, or notes pages.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0c14] text-white">
      <SiteHeader />

      <Container className="flex min-h-screen flex-col items-start justify-center pb-16 pt-28 sm:pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
          The link may be broken or the page may have moved. Try the work archive, or
          head back to the homepage.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" withDot>
            Back to home
          </ButtonLink>
          <ButtonLink href="/work" variant="ghost">
            See the work
          </ButtonLink>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
