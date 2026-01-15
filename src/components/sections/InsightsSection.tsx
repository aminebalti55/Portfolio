import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { insights } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function InsightsSection() {
  return (
    <section id="blog" className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                {insights.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                <Balancer>{insights.title}</Balancer>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {insights.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {insights.items.map((item, index) => (
              <Link
                key={item.title}
                href={`/blog/${item.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-900/50"
              >
                <article>
                  {/* Number Badge */}
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-lg font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Badge and Date */}
                  <div className="flex items-center gap-2">
                    <Badge className="text-xs">{item.badge}</Badge>
                    <span className="text-xs text-zinc-400">•</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 pr-12 text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-accent dark:text-zinc-50 dark:group-hover:text-accent">
                    {item.title}
                  </h3>

                  {/* Decorative Line */}
                  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600" />

                  {/* Read More */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-zinc-600 transition-all group-hover:gap-3 group-hover:text-accent dark:text-zinc-400 dark:group-hover:text-accent">
                    <span>Read article</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
