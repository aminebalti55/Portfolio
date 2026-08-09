import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { projects } from "@/lib/projects";
import { socials } from "@/lib/content";

const selected = ["compass", "invoicebirds", "easyrhis", "autoally"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const showcaseDetails: Record<string, {
  signal: string;
  headline: string;
  primaryLabel: string;
  secondaryImage: string;
  secondaryAlt: string;
  secondaryLabel: string;
}> = {
  compass: {
    signal: "Live operations · AI-assisted",
    headline: "A control layer for the physical world.",
    primaryLabel: "Fleet operations dashboard",
    secondaryImage: "/images/projects/compass/compass-app-04-assistant.png",
    secondaryAlt: "Compass AI assistant answering a fleet operations question",
    secondaryLabel: "Grounded AI assistant",
  },
  invoicebirds: {
    signal: "Revenue systems · Payments",
    headline: "The full money workflow, without the admin sprawl.",
    primaryLabel: "Billing workspace",
    secondaryImage: "/images/projects/invoicebirds/live-2026/invoice-builder.png",
    secondaryAlt: "InvoiceBirds visual invoice builder and document customisation workspace",
    secondaryLabel: "Visual invoice builder",
  },
  easyrhis: {
    signal: "Multi-tenancy · Workforce operations",
    headline: "One workforce platform, shaped for every brand.",
    primaryLabel: "HR management portal",
    secondaryImage: "/images/projects/easyrhis/dashbiard.png",
    secondaryAlt: "EasyRHIS workforce operations dashboard",
    secondaryLabel: "Operations dashboard",
  },
  autoally: {
    signal: "Marketplace trust · Transaction flow",
    headline: "A used-car marketplace where trust is part of the product.",
    primaryLabel: "Vehicle marketplace",
    secondaryImage: "/images/projects/autoally/live-2026/marketplace-listings.png",
    secondaryAlt: "AutoAlly marketplace showing verified vehicles and escrow-protected listings",
    secondaryLabel: "Verified vehicle marketplace",
  },
};

const publicLaunchCount = projects.filter((project) => Boolean(project.liveUrl)).length;

const experience = [
  {
    period: "2026 — now",
    company: "Compass Solutions",
    role: "Software Engineer",
    detail: "Fleet operations, GPS telemetry, partner tooling, and an LLM assistant grounded in production data.",
    focus: ["Fleet operations", "GPS telemetry", "AI tooling"],
  },
  {
    period: "2025 — 2026",
    company: "FEV Software GmbH",
    role: "Full-stack contractor",
    detail: "Enterprise fleet analytics, calibration workflows, SignalR events, and configuration-heavy product surfaces.",
    focus: ["Enterprise analytics", "Real-time systems", "Product configuration"],
  },
  {
    period: "2025",
    company: "InvoiceBirds",
    role: "Full-stack contractor",
    detail: "A UK invoicing platform spanning billing flows, payments, documents, expenses, and client management.",
    focus: ["Billing workflows", "Payments", "Document systems"],
  },
  {
    period: "2024",
    company: "RHIS Solutions",
    role: "Full-stack engineer",
    detail: "Multi-tenant HR workflows serving large franchise networks across 1,500+ sites.",
    focus: ["HR SaaS", "Multi-tenancy", "1,500+ sites"],
  },
];

const notes = [
  {
    eyebrow: "Architecture",
    title: "Building multi-tenant SaaS without leaking complexity",
    summary: "A boundary-first approach to tenancy, permissions, data access, and operational sanity.",
    readTime: "8 min read",
    href: "/blog/multi-tenant-saas-architecture",
  },
  {
    eyebrow: "Real-time systems",
    title: "What enterprise SignalR work taught me about live products",
    summary: "Patterns for live state, reconnects, observability, and graceful failure in distributed products.",
    readTime: "7 min read",
    href: "/blog/scaling-websocket-signalr",
  },
  {
    eyebrow: "Delivery",
    title: "From ambiguous brief to production software",
    summary: "How I turn incomplete briefs into shippable increments without losing the product intent.",
    readTime: "6 min read",
    href: "/blog/development-workflow",
  },
];

function BrowserFrame({ project }: { project: (typeof selected)[number] }) {
  const showcase = showcaseDetails[project.slug];

  return (
    <div className="case-stage__visual">
      <span className="case-stage__asset-label">{showcase.primaryLabel}</span>
      <div className="case-stage__orbit" aria-hidden="true" />

      <div className="case-stage__primary">
        <div className="case-stage__window-bar">
          <span />
          <span />
          <span />
          <p>{project.title} / interface</p>
        </div>
        <div className="case-stage__screen">
          <Image
            src={project.image}
            alt={`${project.title} product interface`}
            fill
            sizes="(min-width: 900px) 58vw, 100vw"
            className="case-stage__image"
          />
        </div>
      </div>

      <div className="case-stage__secondary">
        <div className="case-stage__secondary-label">
          <span>Inside the system</span>
          <strong>{showcase.secondaryLabel}</strong>
        </div>
        <div className="case-stage__secondary-screen">
          <Image
            src={showcase.secondaryImage}
            alt={showcase.secondaryAlt}
            fill
            sizes="(min-width: 900px) 24vw, 72vw"
            className="case-stage__image"
          />
        </div>
      </div>
    </div>
  );
}

export function PortfolioHome() {
  return (
    <main className="portfolio-home">
      <Hero />
      <LogoCloud />

      <section className="portfolio-snapshot" aria-labelledby="portfolio-snapshot-title">
        <div className="portfolio-snapshot__intro">
          <p className="kicker kicker--light">Across the portfolio</p>
          <h2 id="portfolio-snapshot-title">Proof of range.<br /><em>Backed by delivery.</em></h2>
          <p>
            Public launches, private enterprise platforms, and independent products—measured by what reached working software.
          </p>
        </div>

        <div className="portfolio-snapshot__figures">
          <article>
            <strong>{String(projects.length).padStart(2, "0")}</strong>
            <div>
              <h3>Documented product builds</h3>
              <p>Enterprise systems, client SaaS, marketplaces, and independent tools.</p>
            </div>
          </article>
          <article className="portfolio-snapshot__figure--accent">
            <strong>{String(publicLaunchCount).padStart(2, "0")}</strong>
            <div>
              <h3>Public launches</h3>
              <p>Products a recruiter or client can open and evaluate—not concept screenshots.</p>
            </div>
          </article>
        </div>

        <div className="portfolio-snapshot__delivery">
          <span>Built across</span>
          <p>Product teams <i /> Focused contracts <i /> Independent builds</p>
          <strong>One owner from architecture to production.</strong>
        </div>
      </section>

      <section className="selected-work" id="work">
        <div className="selected-work__heading">
          <div>
            <p className="kicker">Selected systems</p>
            <strong>04</strong>
            <span>production stories</span>
          </div>
          <h2>Work that holds up<br /><em>under real use.</em></h2>
          <div className="selected-work__heading-note">
            <p>Four shipped systems. Two real interfaces from each. Scroll the stack to inspect the work beneath the headline.</p>
            <span>Scroll to inspect <i aria-hidden="true">↓</i></span>
          </div>
        </div>

        <div className="selected-work__list">
          {selected.map((project, index) => (
            <article className={`case-stage case-stage--${project.slug}`} key={project.slug}>
              <div className="case-stage__meta">
                <span>Case 0{index + 1} / 04</span>
                <p>{project.category}</p>
                <p>{project.year}</p>
              </div>

              <div className="case-stage__grid">
                <div className="case-stage__copy">
                  <p className="case-stage__signal">{showcaseDetails[project.slug].signal}</p>
                  <h3>{project.title}</h3>
                  <p className="case-stage__headline">{showcaseDetails[project.slug].headline}</p>
                  <p className="case-stage__description">{project.description}</p>
                  <div className="case-stage__tags">
                    {project.tech.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <Link className="case-stage__link" href={`/work/${project.slug}`}>
                    <span>Open the case study</span>
                    <strong aria-hidden="true">↗</strong>
                  </Link>
                </div>
                <BrowserFrame project={project} />
              </div>
            </article>
          ))}
        </div>

        <div className="selected-work__more">
          <Link className="button button--ink" href="/work">View all nine projects <span>↗</span></Link>
        </div>
      </section>

      <section className="ownership-section" id="services">
        <div className="ownership-section__intro">
          <p className="kicker kicker--light">How the work moves</p>
          <h2>One engineer.<br /><em>The whole path to production.</em></h2>
          <p>
            I work best where product decisions and engineering decisions are
            tightly coupled. You get fewer handoffs, faster feedback, and one
            owner for what actually ships.
          </p>
        </div>
        <div className="ownership-grid">
          {[
            ["01", "Frame the problem", "Turn an ambiguous business ask into a testable product scope, risks included."],
            ["02", "Design the system", "Model the UI, API, data, permissions, and failure states as one coherent product."],
            ["03", "Build the hard parts", "Real-time flows, billing, RBAC, AI tooling, multi-tenancy, and integration work."],
            ["04", "Ship and stabilise", "Production delivery, observability, performance, documentation, and the boring glue."],
          ].map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="about">
        <div className="experience-section__header">
          <div>
            <p className="kicker kicker--light">Operating history · 2024—now</p>
            <h2>The work got broader.<br />The ownership got deeper.</h2>
          </div>
          <div className="experience-section__header-copy">
            <p>
              Across fleet operations, billing, HR, and internal platforms, I&apos;ve moved closer to the hard product and system decisions—not just the implementation queue.
            </p>
            <div className="experience-section__domains" aria-label="Industry experience">
              <span>Fleet ops</span>
              <span>Fintech</span>
              <span>HR SaaS</span>
              <span>AI tools</span>
            </div>
          </div>
        </div>

        <div className="experience-stack">
          {experience.map((item, index) => (
            <article className={`experience-card experience-card--${index + 1}`} key={`${item.company}-${item.period}`}>
              <div className="experience-card__index">
                <span>0{index + 1}</span>
                <p>{item.period}</p>
              </div>
              <div className="experience-card__role">
                <p>{item.role}</p>
                <h3>{item.company}</h3>
              </div>
              <p className="experience-card__detail">{item.detail}</p>
              <div className="experience-card__focus">
                {item.focus.map((focus) => <span key={focus}>{focus}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="experience-section__links">
          <a href={socials.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          <a href={socials.github} target="_blank" rel="noreferrer">View GitHub</a>
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="notes-section__intro">
          <p className="kicker">Field notes</p>
          <h2>Production lessons, documented.</h2>
          <p className="notes-section__lede">
            Patterns, trade-offs, and hard-won decisions from real SaaS systems—not tutorial demos.
          </p>
          <figure className="notes-section__asset">
            <Image
              src="/images/brand/generated/field-notebook-v1.png"
              alt="An open engineering notebook with system diagrams and an orange pencil"
              width={1536}
              height={1024}
              sizes="(min-width: 900px) 42vw, 92vw"
            />
            <figcaption>
              <span>Working notes</span>
              <p>What held up after the diagrams met production.</p>
            </figcaption>
          </figure>
        </div>
        <div className="notes-list">
          {notes.map((note, index) => (
            <Link className="notes-list__item" href={note.href} key={note.href}>
              <div className="notes-list__meta">
                <span>0{index + 1}</span>
                <p>{note.eyebrow}</p>
                <small>{note.readTime}</small>
              </div>
              <h3>{note.title}</h3>
              <p className="notes-list__summary">{note.summary}</p>
              <div className="notes-list__footer">
                <span>Read field note</span>
                <strong aria-hidden="true">↗</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-section__copy">
          <p className="kicker">Senior contract availability</p>
          <h2>Bring me the complicated part.</h2>
          <p className="contact-section__lede">
            Need senior ownership across product, architecture, and delivery?
            Send the brief or book a focused 20-minute call. We&apos;ll leave with a clear next step.
          </p>
          <div className="contact-section__actions">
            <a className="contact-section__primary" href={socials.calendly} target="_blank" rel="noreferrer">
              <span>Book a 20-minute call</span>
              <strong aria-hidden="true">↗</strong>
            </a>
            <a className="contact-section__email" href={`mailto:${socials.email}`}>
              <span>Email Mohamed</span>
              <strong>{socials.email}</strong>
            </a>
          </div>
          <div className="contact-section__scope" aria-label="Engagement strengths">
            <span>Product judgment</span>
            <span>System design</span>
            <span>Production delivery</span>
          </div>
        </div>

        <figure className="contact-section__asset">
          <div className="contact-section__asset-meta">
            <span>Direct line</span>
            <span>One engineer · end to end</span>
          </div>
          <Image
            src="/images/brand/generated/contact-phone-v1.png"
            alt="Matte black desk phone with a burnt-orange handset"
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 48vw, 90vw"
          />
          <figcaption>
            <strong>Talk to the engineer doing the work.</strong>
            <span>No sales layer. No hand-offs.</span>
          </figcaption>
        </figure>
      </section>

      <Footer />
    </main>
  );
}
