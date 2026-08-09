"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  SiAngular,
  SiDocker,
  SiFigma,
  SiMongodb,
  SiN8N,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { BsPlugin } from "react-icons/bs";

const technologies = [
  { name: "Figma", icon: SiFigma },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "NestJS", icon: SiNestjs },
  { name: "SQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "MCP", icon: BsPlugin },
  { name: "n8n", icon: SiN8N },
  { name: "Docker", icon: SiDocker },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Angular", icon: SiAngular },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind", icon: SiTailwindcss },
];

export function LogoCloud() {
  const [viewportRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  return (
    <section className="border-y border-black/10 bg-[#f1eee6] py-10" aria-label="Production technology stack">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8" ref={viewportRef}>
        <div className="flex gap-20">
          {[...technologies, ...technologies].map((technology, index) => {
            const Icon = technology.icon;
            return (
              <div
                className="flex shrink-0 flex-col items-center justify-center gap-2"
                key={`${technology.name}-${index}`}
              >
                <Icon className="h-10 w-10 text-zinc-500 transition-colors hover:text-[#ff4d00]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  {technology.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
