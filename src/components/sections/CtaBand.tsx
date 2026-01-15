import { brand, ctaBand } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#0a0506] py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_20%_120%,rgba(255,77,31,0.45),transparent_55%),radial-gradient(900px_circle_at_90%_10%,rgba(255,0,92,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/25 to-black/55" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            {brand.role}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-[-0.02em] sm:text-5xl">
            {ctaBand.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">
            {ctaBand.description}
          </p>
          <div className="mt-7">
            <Button href={ctaBand.cta.href} variant="primary" withDot>
              {ctaBand.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
