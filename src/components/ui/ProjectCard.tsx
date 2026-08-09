import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="portfolio-card">
      <Link href={`/work/${project.slug}`} className="flex h-full flex-col">
        <div className="portfolio-card__visual">
          <Image
            src={project.image}
            alt={`${project.title} product interface`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <span className="portfolio-card__visual-label">
            {project.kind === "client" ? "Client system" : "Independent build"}
          </span>
        </div>
        <div className="portfolio-card__body">
          <div className="portfolio-card__topline">
            <span className="portfolio-card__eyebrow">{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="portfolio-card__tags" aria-label={`${project.title} technology stack`}>
            {project.tech.slice(0, 5).map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className="portfolio-card__meta">
            <span>{project.region ?? project.client ?? "Independent"}</span>
            <strong>View case study <i aria-hidden="true">↗</i></strong>
          </div>
        </div>
      </Link>
    </article>
  );
}
