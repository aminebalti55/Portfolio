import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectIndexEntry } from "@/components/ui/ProjectIndexEntry";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Nine production case studies across fleet operations, billing, HR, marketplaces, health, and lead intelligence.",
};

const clientWork = projects.filter((project) => project.kind === "client");
const independentWork = projects.filter((project) => project.kind === "personal");

export default function WorkPage() {
  return (
    <main className="inner-page">
      <section className="inner-page-hero">
        <SiteHeader />
        <div className="inner-page-hero__content">
          <p className="kicker kicker--light">Complete project archive</p>
          <h1>Nine builds.<br /><em>Every one has receipts.</em></h1>
          <div className="inner-page-hero__footer">
            <p>
              Production systems built across the UK, Germany, Canada, and
              Tunisia—from real-time fleet operations to billing and HR.
            </p>
            <span>Scroll to inspect ↓</span>
          </div>
        </div>
      </section>

      <section className="work-ledger">
        <div className="work-ledger__heading">
          <div>
            <p className="kicker">Client systems</p>
            <h2>Built inside<br />real constraints.</h2>
          </div>
          <div className="work-ledger__summary">
            <strong>{String(clientWork.length).padStart(2, "0")}</strong>
            <p>Client engagements across product, platform, and operational engineering.</p>
          </div>
        </div>
        <div className="work-ledger__list">
          {clientWork.map((project, index) => (
            <ProjectIndexEntry key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="work-ledger work-ledger--dark">
        <div className="work-ledger__heading">
          <div>
            <p className="kicker">Independent systems</p>
            <h2>Products I needed<br />to see exist.</h2>
          </div>
          <div className="work-ledger__summary">
            <strong>{String(independentWork.length).padStart(2, "0")}</strong>
            <p>Solo products spanning research, product design, and implementation.</p>
          </div>
        </div>
        <div className="work-ledger__list">
          {independentWork.map((project, index) => (
            <ProjectIndexEntry key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="work-cta">
        <p className="kicker">Need this level of ownership?</p>
        <h2>Let’s scope the hard part.</h2>
        <a className="button button--orange" href={socials.calendly} target="_blank" rel="noreferrer">
          Book a 20-minute call <span>↗</span>
        </a>
      </section>

      <Footer />
    </main>
  );
}
