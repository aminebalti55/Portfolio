import Link from "next/link";
import { socials } from "@/lib/content";

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={`site-footer ${compact ? "site-footer--compact" : ""}`}>
      {!compact ? (
        <div className="site-footer__grid">
          <div>
            <p className="kicker kicker--light">Built in Tunis · shipped remotely</p>
            <h2>Clear systems.<br />Useful software.</h2>
          </div>
          <div className="site-footer__contact">
            <p>
              Senior full-stack product engineering across SaaS, internal tools,
              and operational platforms.
            </p>
            <Link href="/#work" className="site-footer__work-link">Review selected work</Link>
          </div>
        </div>
      ) : null}

      <div className="site-footer__bottom">
        <Link href="/" className="site-footer__mark">MAB/26</Link>
        <div className="site-footer__links">
          <a href={`mailto:${socials.email}`}>Email</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p>© {new Date().getFullYear()} Med Amine Balti · Tunis, GMT+1</p>
      </div>
    </footer>
  );
}
