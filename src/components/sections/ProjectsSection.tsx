import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { featuredProjects } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  return (
    <section id="work" className="bg-white py-16 sm:py-24 dark:bg-zinc-950">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff5500]">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              <Balancer>Featured Work</Balancer>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Production systems shipped end-to-end for clients in the UK,
              Germany, Canada, and Tunisia — plus solo builds.
            </p>
          </div>

          {/* Uniform grid. A "lead card beside a stack" layout forces the lead
              card to match the combined height of the stack, so its body fills
              with empty space — Compass rendered three cards tall. */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-black/12 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:border-black/30 hover:bg-black/[0.03] dark:border-white/15 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-white/5"
            >
              All projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
