import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

type TocItem = {
  id: string;
  label: string;
};

type FieldNoteLayoutProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  toc: TocItem[];
  takeaways: string[];
  nextNote: {
    href: string;
    label: string;
  };
  children: ReactNode;
};

export function FieldNoteLayout({
  number,
  category,
  title,
  description,
  date,
  readTime,
  toc,
  takeaways,
  nextNote,
  children,
}: FieldNoteLayoutProps) {
  return (
    <main className="field-note">
      <section className="field-note__hero">
        <SiteHeader />
        <div className="field-note__hero-inner">
          <div className="field-note__eyebrow">
            <span>Field note {number}</span>
            <span>{category}</span>
          </div>
          <div className="field-note__hero-grid">
            <h1>{title}</h1>
            <div>
              <p>{description}</p>
              <dl>
                <div><dt>Published</dt><dd>{date}</dd></div>
                <div><dt>Reading time</dt><dd>{readTime}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <article className="field-note__article">
        <div className="field-note__article-grid">
          <aside className="field-note__rail">
            <Link href="/#notes">← All field notes</Link>
            <p>In this note</p>
            <nav aria-label="Article sections">
              {toc.map((item, index) => (
                <a href={`#${item.id}`} key={item.id}>
                  <span>0{index + 1}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="field-note__content">{children}</div>
        </div>
      </article>

      <section className="field-note__takeaways">
        <div>
          <p className="kicker">Keep these</p>
          <h2>The short version.</h2>
        </div>
        <ol>
          {takeaways.map((takeaway, index) => (
            <li key={takeaway}>
              <span>0{index + 1}</span>
              <p>{takeaway}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="field-note__next">
        <p className="kicker kicker--light">Continue reading</p>
        <Link href={nextNote.href}>
          <span>{nextNote.label}</span>
          <strong aria-hidden="true">↗</strong>
        </Link>
      </section>

      <Footer compact />
    </main>
  );
}
