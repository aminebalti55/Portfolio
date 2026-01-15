import Balancer from "react-wrap-balancer";
import { testimonials } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              {testimonials.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              <Balancer>{testimonials.title}</Balancer>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              Trusted by clients across healthcare, automotive, finance, and enterprise sectors
            </p>
          </div>

          <div className="mt-12">
            <InfiniteMovingCards
              items={testimonials.items}
              direction="left"
              speed="slow"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
