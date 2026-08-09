import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectIndexEntryProps = {
  project: Project;
  index: number;
};

export function ProjectIndexEntry({ project, index }: ProjectIndexEntryProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={`work-dossier work-dossier--${project.slug}`}>
      <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <header className="work-dossier__header">
          <span className="work-dossier__number">{number}</span>
          <div>
            <p className="work-dossier__category">{project.category}</p>
            <h3>{project.title}</h3>
          </div>
          <time>{project.year}</time>
        </header>

        <div className="work-dossier__body">
          <figure className="work-dossier__visual">
            <Image
              src={project.image}
              alt={`${project.title} product interface`}
              fill
              sizes="(min-width: 1024px) 68vw, 100vw"
            />
            <figcaption>Open project dossier</figcaption>
          </figure>

          <div className="work-dossier__brief">
            <p className="work-dossier__description">{project.description}</p>

            <dl>
              <div>
                <dt>Context</dt>
                <dd>{project.region ?? project.client ?? "Independent build"}</dd>
              </div>
              <div>
                <dt>Core stack</dt>
                <dd>{project.tech.join(" · ")}</dd>
              </div>
            </dl>

            <span className="work-dossier__action">
              Read the case study
              <i aria-hidden="true">↗</i>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
