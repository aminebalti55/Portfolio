import type { Metadata } from "next";
import { FieldNoteLayout } from "@/components/ui/FieldNoteLayout";
import "../blog-styles.css";

export const metadata: Metadata = {
  title: "From Ambiguous Brief to Production Software",
  description:
    "A practical delivery workflow for turning incomplete product briefs into testable decisions and working releases.",
};

const toc = [
  { id: "constraint", label: "Find the constraint" },
  { id: "slice", label: "Choose a walking slice" },
  { id: "decisions", label: "Record decisions" },
  { id: "delivery", label: "Ship visible increments" },
  { id: "handover", label: "Leave a clear system" },
];

export default function DevelopmentWorkflowBlogPost() {
  return (
    <FieldNoteLayout
      number="03"
      category="Delivery"
      title="From ambiguous brief to production software."
      description="Incomplete requirements are normal. The job is to turn uncertainty into a sequence of decisions the team can test before the expensive assumptions harden."
      date="November 28, 2025"
      readTime="6 minutes"
      toc={toc}
      takeaways={[
        "Rewrite the brief as a user, a constraint, and an observable release condition.",
        "Build one thin end-to-end path before expanding the surface area.",
        "Keep decisions near the work so future changes retain their context.",
        "A handover is complete when the next engineer can operate and change the system safely.",
      ]}
      nextNote={{
        href: "/blog/multi-tenant-saas-architecture",
        label: "Multi-tenant SaaS without leaking complexity",
      }}
    >
      <p className="field-note__lede">
        Most useful products do not begin with a complete specification. They begin with a founder
        describing a painful workflow, a team asking for “a dashboard”, or an existing system that
        has become too risky to touch. Ambiguity is not a reason to wait. It is the first thing to
        design around.
      </p>

      <p>
        My delivery workflow is less about ceremonies and more about reducing the cost of being
        wrong. Each step should turn a vague assumption into something visible: a decision, a thin
        working path, a production observation, or a clear reason to change direction.
      </p>

      <section id="constraint">
        <p className="field-note__section-number">01 / Constraint</p>
        <h2>Translate the request before estimating it.</h2>
        <p>
          “Build an invoicing dashboard” is a request. It does not explain who needs it, what decision
          they cannot make today, or which existing systems constrain the answer. I start by
          rewriting the brief into four lines:
        </p>
        <ul>
          <li><strong>User:</strong> who has the problem and what context are they carrying?</li>
          <li><strong>Job:</strong> what must they be able to complete or decide?</li>
          <li><strong>Constraint:</strong> what business rule, integration, or legacy state cannot be ignored?</li>
          <li><strong>Release condition:</strong> what observable behaviour means the first version works?</li>
        </ul>
        <p>
          This exposes disagreements while they are still sentences. It also separates the part the
          business truly needs from the interface somebody happened to imagine first.
        </p>
      </section>

      <section id="slice">
        <p className="field-note__section-number">02 / Walking slice</p>
        <h2>Prove one path through the whole system.</h2>
        <p>
          The first milestone should cross the real boundaries: interface, validation, domain rule,
          persistence, external service, and deployment. It can be visually plain and narrow in
          scope. What matters is that it exposes the difficult integration points before dozens of
          screens depend on them.
        </p>
        <aside className="field-note__callout">
          <span>Example</span>
          <p>
            In a billing product, “create one invoice, calculate its totals, persist it, and render
            the resulting document” teaches more than building every empty dashboard state first.
          </p>
        </aside>
        <p>
          A walking slice also gives the team something concrete to critique. Product feedback gets
          sharper when people can use a real flow rather than debate a diagram.
        </p>
      </section>

      <section id="decisions">
        <p className="field-note__section-number">03 / Decisions</p>
        <h2>Write down why, not every meeting.</h2>
        <p>
          Documentation becomes noise when it tries to preserve the entire conversation. The useful
          artifact is the decision and its pressure: what we chose, what alternatives mattered, which
          constraint drove the choice, and what would cause us to revisit it.
        </p>
        <pre><code>{`Decision: store invoice totals at issue time

Why:
- issued documents must remain reproducible
- tax rules and product defaults may change later

Revisit if:
- the product introduces explicit document revisions`}</code></pre>
        <p>
          Keep these notes beside the system they explain. A short record near a migration or module
          is more likely to survive than a polished document nobody opens after kickoff.
        </p>
      </section>

      <section id="delivery">
        <p className="field-note__section-number">04 / Delivery</p>
        <h2>Ship increments that answer a question.</h2>
        <p>
          A useful increment is not “backend 80% complete.” It is a working behaviour that can be
          reviewed against the release condition. Each slice should answer a product or technical
          question and leave the main branch in a releasable state.
        </p>
        <div className="field-note__split">
          <div>
            <h3>Weak progress report</h3>
            <p>Finished services, started frontend, database almost done.</p>
          </div>
          <div>
            <h3>Useful progress report</h3>
            <p>A manager can approve one request end to end; audit history and notifications are next.</p>
          </div>
        </div>
        <p>
          Tests follow the risk. Calculation rules, permissions, tenancy, payment state, and data
          migrations deserve strong automated coverage. A static marketing panel usually does not.
          The goal is confidence in change, not a flattering coverage number.
        </p>
      </section>

      <section id="handover">
        <p className="field-note__section-number">05 / Handover</p>
        <h2>Production is a beginning, not the last task.</h2>
        <p>
          A release is incomplete if only its author knows how to operate it. The handover should
          explain environment setup, migrations, external dependencies, failure signals, routine
          support actions, and the decisions that are expensive to reverse.
        </p>
        <p>
          I also leave a short map of the next likely work: known trade-offs, deferred edge cases,
          and areas where usage should determine the design. That is more honest and useful than
          pretending the first release eliminated uncertainty.
        </p>
        <blockquote>
          Good delivery does not remove every unknown. It makes the remaining unknowns visible and
          cheap enough to handle.
        </blockquote>
      </section>
    </FieldNoteLayout>
  );
}
