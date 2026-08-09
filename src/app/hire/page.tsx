import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hire Med Amine Balti",
  description:
    "Senior full-stack product engineering for SaaS, internal tools, operational platforms, and AI workflows.",
};

const engagements = [
  {
    number: "01",
    title: "New product build",
    summary:
      "Turn a validated problem or working prototype into a dependable first release with the product and technical foundations handled together.",
    bestFor: "Founder-led SaaS · internal platforms · operational software",
    ownership: "Product framing · UX · API · data model · integrations · launch",
  },
  {
    number: "02",
    title: "Critical product surface",
    summary:
      "Own the difficult module inside an existing product—the part that crosses teams, systems, and too many unfinished decisions.",
    bestFor: "Billing · permissions · real-time workflows · AI-assisted operations",
    ownership: "Architecture · implementation · testing · production integration",
  },
  {
    number: "03",
    title: "System rescue",
    summary:
      "Stabilize a fragile workflow, replace a manual bottleneck, or get a stalled build moving with a smaller and clearer delivery path.",
    bestFor: "Slow delivery · brittle features · spreadsheet-heavy operations",
    ownership: "Diagnosis · risk reduction · focused rebuild · handover",
  },
];

const workingSteps = [
  {
    number: "01",
    title: "Frame",
    copy: "We make the actual constraint, the users, the existing system, and the release condition explicit before work expands.",
  },
  {
    number: "02",
    title: "Prove",
    copy: "The riskiest workflow is tested early so architecture and product assumptions fail while they are still inexpensive to change.",
  },
  {
    number: "03",
    title: "Ship",
    copy: "Progress arrives as working production slices across interface, API, data, integrations, and deployment—not status theatre.",
  },
  {
    number: "04",
    title: "Transfer",
    copy: "The release leaves behind documented decisions, maintainable code, and a practical map for the next engineer or phase.",
  },
];

const strongFit = [
  "The work crosses product, frontend, backend, and data concerns.",
  "A capable engineer needs room to challenge and improve the brief.",
  "You want one clear owner for a production outcome.",
  "Maintainability after launch matters as much as launch day.",
];

const weakFit = [
  "You need a large staffing supplier or several parallel teams.",
  "The role is limited to converting finished designs into static pages.",
  "Every implementation decision is already fixed with no room for judgment.",
  "Success is measured by activity rather than a working release.",
];

export default function HirePage() {
  return (
    <main className="hire-reimagined">
      <section className="hire-reimagined__hero">
        <SiteHeader />

        <div className="hire-reimagined__hero-grid">
          <div className="hire-reimagined__hero-copy">
            <p className="kicker kicker--light">Available for select engagements</p>
            <h1>
              One engineer.
              <em>Whole product.</em>
            </h1>
            <p className="hire-reimagined__lead">
              I work with founders and product teams when the important part
              cannot be separated into frontend tickets, backend tickets, and
              somebody else&apos;s product decisions.
            </p>

            <div className="hire-reimagined__hero-actions">
              <a
                className="button button--orange"
                href={socials.calendly}
                target="_blank"
                rel="noreferrer"
              >
                Book a 20-minute call <span>↗</span>
              </a>
              <a className="hire-reimagined__email" href={`mailto:${socials.email}`}>
                Email directly <span>→</span>
              </a>
            </div>
          </div>

          <aside className="hire-brief" aria-label="When to involve me">
            <div className="hire-brief__topline">
              <span>Engagement brief</span>
              <strong>01 / 01</strong>
            </div>
            <h2>Call me when...</h2>
            <ol>
              <li>
                <span>01</span>
                <p>A product decision is hiding inside a technical problem.</p>
              </li>
              <li>
                <span>02</span>
                <p>The feature crosses interface, API, data, and integrations.</p>
              </li>
              <li>
                <span>03</span>
                <p>Someone needs to own the release—not just finish the tickets.</p>
              </li>
            </ol>
            <div className="hire-brief__footer">
              <span>Remote from Tunis · GMT+1</span>
              <strong>EU + US overlap</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="hire-engagements">
        <header className="hire-section-heading">
          <div>
            <p className="kicker">Where I enter</p>
            <h2>Choose the problem.<br />Not a package.</h2>
          </div>
          <p>
            Each engagement starts with the constraint and the release that
            would materially improve the business. The shape follows from that.
          </p>
        </header>

        <div className="hire-engagements__list">
          {engagements.map((engagement) => (
            <article key={engagement.number}>
              <span className="hire-engagements__number">{engagement.number}</span>
              <div className="hire-engagements__copy">
                <h3>{engagement.title}</h3>
                <p>{engagement.summary}</p>
              </div>
              <dl>
                <div>
                  <dt>Best for</dt>
                  <dd>{engagement.bestFor}</dd>
                </div>
                <div>
                  <dt>I own</dt>
                  <dd>{engagement.ownership}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="hire-working-model">
        <header className="hire-section-heading hire-section-heading--dark">
          <div>
            <p className="kicker kicker--light">Working model</p>
            <h2>Visible progress.<br />Fewer surprises.</h2>
          </div>
          <p>
            You work directly with the person making the product and technical
            decisions. There is no handoff layer between the conversation and the code.
          </p>
        </header>

        <div className="hire-working-model__steps">
          {workingSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hire-fit-check">
        <header>
          <p className="kicker">Before the call</p>
          <h2>The working relationship matters.</h2>
          <p>
            A clear fit saves both sides time. This is the kind of environment
            where I do my best work—and the kind that should choose someone else.
          </p>
        </header>

        <div className="hire-fit-check__columns">
          <article className="hire-fit-check__yes">
            <div>
              <span>Good fit</span>
              <strong>Yes</strong>
            </div>
            <ul>
              {strongFit.map((item, index) => (
                <li key={item}><span>0{index + 1}</span>{item}</li>
              ))}
            </ul>
          </article>

          <article className="hire-fit-check__no">
            <div>
              <span>Probably not</span>
              <strong>No</strong>
            </div>
            <ul>
              {weakFit.map((item, index) => (
                <li key={item}><span>0{index + 1}</span>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="hire-operating-details" aria-label="Working details">
        <div><span>Location</span><strong>Tunis · GMT+1 · Remote</strong></div>
        <div><span>Collaboration</span><strong>EU + US overlap</strong></div>
        <div><span>Languages</span><strong>English · French · Arabic</strong></div>
        <div><span>Ownership</span><strong>Your code. Your product.</strong></div>
      </section>

      <section className="hire-reimagined__closing">
        <p className="kicker kicker--light">Start with what is stuck</p>
        <h2>Tell me what needs<br />a clear owner.</h2>
        <p>
          Bring the current system, the business constraint, and the decision
          you cannot make yet. Twenty minutes is enough to identify a useful next step.
        </p>
        <div>
          <a
            className="button button--orange"
            href={socials.calendly}
            target="_blank"
            rel="noreferrer"
          >
            Book the call <span>↗</span>
          </a>
          <a className="button button--ghost-dark" href={`mailto:${socials.email}`}>
            Email me
          </a>
          <Link className="hire-reimagined__work-link" href="/work">
            Review the work <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
