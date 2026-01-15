import Balancer from "react-wrap-balancer";
import { services } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                {services.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                <Balancer>{services.title}</Balancer>
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                {services.description}
              </p>
              <div className="mt-7">
                <Button href={services.cta.href} variant="secondary" withDot>
                  {services.cta.label}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {services.items.map((item) => (
                  <div
                    key={item.title}
                    className={`group rounded-2xl border p-5 transition ${
                      item.featured
                        ? "border-transparent bg-[color:var(--accent)] text-white shadow-sm"
                        : "border-black/10 bg-white text-zinc-950 hover:border-black/20 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:border-white/20 dark:hover:bg-zinc-900/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                          item.featured
                            ? "bg-white/15"
                            : "bg-zinc-950/5 dark:bg-white/10"
                        }`}
                      >
                        <Icon
                          name={item.icon}
                          className={
                            item.featured
                              ? "text-white"
                              : "text-zinc-950 dark:text-zinc-50"
                          }
                        />
                      </span>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                    </div>
                    <p
                      className={`mt-3 text-sm leading-6 ${
                        item.featured
                          ? "text-white/80"
                          : "text-zinc-600 dark:text-zinc-300"
                      }`}
                    >
                      {item.description}
                    </p>
                    <div
                      className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${
                        item.featured
                          ? "text-white"
                          : "text-zinc-950 dark:text-zinc-50"
                      }`}
                    >
                      <span>Learn more</span>
                      <span
                        className="transition group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
