import Image from "next/image";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";

export type CaseStudySystemItem = {
  step: string;
  label: string;
  title: string;
  description: string;
};

type CaseStudySystemSectionProps = {
  variant: "dark" | "light";
  eyebrow: string;
  title: string;
  intro: string;
  items: CaseStudySystemItem[];
  accent?: string;
  background?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export function CaseStudySystemSection({
  variant,
  eyebrow,
  title,
  intro,
  items,
  accent = "#ff5500",
  background,
  image,
}: CaseStudySystemSectionProps) {
  const style = {
    "--system-accent": accent,
    ...(background ? { "--system-background": background } : {}),
  } as CSSProperties;

  return (
    <section className={`case-system-section case-system-section--${variant}`} style={style}>
      <Container>
        <div className="case-system-section__heading">
          <div>
            <p className="case-system-section__kicker">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <p>{intro}</p>
        </div>

        {image ? (
          <figure className="case-system-section__visual">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1920}
              height={image.height ?? 1080}
              className="h-auto w-full"
            />
          </figure>
        ) : null}

        <div className="case-system-section__grid">
          {items.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
