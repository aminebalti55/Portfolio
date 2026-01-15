"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiNestjs,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiSpringboot,
  SiAngular,
  SiMongodb,
  SiTailwindcss,
  SiN8N,
} from "react-icons/si";
import { BsPlugin } from "react-icons/bs";

const techStack = [
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
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export function LogoCloud() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="mt-12 bg-white py-10 dark:bg-zinc-950">
      <Container>
        <Reveal>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-20">
              {/* Duplicate the items for seamless loop */}
              {[...techStack, ...techStack].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex shrink-0 flex-col items-center justify-center gap-2"
                  >
                    <IconComponent className="h-10 w-10 text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300" />
                    <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
