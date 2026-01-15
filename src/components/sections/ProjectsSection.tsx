import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { projects } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function ProjectCard({
  badge,
  title,
  description,
  image,
  large = false,
}: {
  badge: string;
  title: string;
  description: string;
  image: string;
  large?: boolean;
}) {
  // Determine case study link based on project title
  const getCaseStudyLink = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("romorquage")) return "/work/romorquage";
    if (titleLower.includes("autoally")) return "/work/autoally";
    if (titleLower.includes("atlas")) return "/work/atlas";
    if (titleLower.includes("fledem")) return "/work/fledem";
    if (titleLower.includes("cassandra")) return "/work/cassandra";
    if (titleLower.includes("easyrhis")) return "/work/easyrhis";
    if (titleLower.includes("invoicebirds")) return "/work/invoicebirds";
    return "/work"; // Default fallback
  };

  const caseStudyLink = getCaseStudyLink(title);

  return (
    <Link href={caseStudyLink}>
      <article
        className={`group relative overflow-hidden rounded-3xl border border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-zinc-900/40 ${
          large ? "min-h-[320px]" : "min-h-[260px]"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_10%,rgba(255,77,31,0.22),transparent_55%)]" />
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes={
            large
              ? "(min-width: 1024px) 1000px, 95vw"
              : "(min-width: 1024px) 520px, 95vw"
          }
          className="object-cover opacity-95 transition duration-500 group-hover:scale-[1.02]"
        />
        <div className={`absolute inset-0 ${
          large 
            ? "bg-gradient-to-r from-black/98 via-black/85 to-black/40" 
            : "bg-gradient-to-t from-black/98 via-black/85 to-black/40"
        }`} />

        <div className={`relative flex h-full ${
          large ? "items-center justify-start p-8 sm:p-10 lg:p-12" : "flex-col justify-end p-6"
        } text-white`}>
          <div className={large ? "max-w-md space-y-3 sm:space-y-4" : "w-full"}>
            <div className="flex items-center gap-4">
              <Badge className="border-white/15 bg-white/10 text-white hover:border-white/25">
                {badge}
              </Badge>
              {!large && <span className="ml-auto text-xs text-white/70">View</span>}
            </div>
            <h3 className={`font-semibold tracking-tight ${
              large ? "text-xl sm:text-2xl lg:text-3xl" : "mt-4 text-xl"
            }`}>{title}</h3>
            <p className={`text-white/95 ${
              large ? "text-sm sm:text-base leading-relaxed line-clamp-2" : "mt-2 max-w-xl text-sm leading-6"
            }`}>
              {description}
            </p>
            <div className={large ? "pt-1" : "mt-5"}>
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20">
                View case study
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                {projects.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                <Balancer>{projects.title}</Balancer>
              </h2>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              ©{projects.year}
            </p>
          </div>

          <div className="mt-10">
            <ProjectCard {...projects.featured} large />
          </div>

          <div className="mt-6">
            <ProjectCard {...projects.items[2]} large />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.items.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
