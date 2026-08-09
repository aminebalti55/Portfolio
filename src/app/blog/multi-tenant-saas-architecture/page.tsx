import type { Metadata } from "next";
import { FieldNoteLayout } from "@/components/ui/FieldNoteLayout";
import "../blog-styles.css";

export const metadata: Metadata = {
  title: "Multi-Tenant SaaS Without Leaking Complexity",
  description:
    "A practical field note on tenant boundaries, permissions, configuration, and operations in multi-tenant products.",
};

const toc = [
  { id: "boundary", label: "Start with the boundary" },
  { id: "context", label: "Make context unavoidable" },
  { id: "permissions", label: "Permissions are domain logic" },
  { id: "configuration", label: "Configure without forking" },
  { id: "operations", label: "Design for operations" },
];

export default function MultiTenantSaaSBlogPost() {
  return (
    <FieldNoteLayout
      number="01"
      category="Architecture"
      title="Multi-tenant SaaS without leaking complexity."
      description="The hard part is not adding tenant_id to a table. It is making organisation context impossible to forget across data, permissions, jobs, files, and support tooling."
      date="January 10, 2026"
      readTime="8 minutes"
      toc={toc}
      takeaways={[
        "Treat tenant context as part of every domain operation, not a filter added near the database.",
        "Model permissions around business actions; role names alone are too blunt for real organisations.",
        "Use configuration to express legitimate variation, and resist turning every client request into a branch.",
        "Build support, migration, and observability paths with the same tenant boundary as the customer product.",
      ]}
      nextNote={{
        href: "/blog/scaling-websocket-signalr",
        label: "What enterprise SignalR work taught me about live products",
      }}
    >
      <p className="field-note__lede">
        Multi-tenancy looks simple in a diagram: one application, many organisations.
        In a product, that boundary touches almost everything. A schedule belongs to a
        location inside a franchise. A vehicle belongs to a fleet inside a client account.
        A document may be visible to one employee, one manager, or an entire organisation.
      </p>

      <p>
        I have worked with these constraints in workforce software and fleet operations.
        The useful lesson is not a particular framework or database feature. It is that
        tenant isolation has to become a product invariant—something the system makes hard
        to violate even when the team is moving quickly.
      </p>

      <section id="boundary">
        <p className="field-note__section-number">01 / Boundary</p>
        <h2>Start with the boundary, not the database pattern.</h2>
        <p>
          “Tenant” is often used as if it means one row in an organisations table. Real
          products are messier. A user may belong to several organisations. A partner may
          administer many clients. A regional manager may see several locations but not the
          whole brand. The data model has to reflect the operating model, not flatten it.
        </p>
        <p>
          Before choosing shared tables, separate schemas, or separate databases, write down
          the ownership graph. Which entity owns a record? Which relationships may cross the
          boundary? Which support actions are allowed to impersonate or inspect? Those answers
          matter more than the storage topology.
        </p>
        <aside className="field-note__callout">
          <span>Boundary test</span>
          <p>
            If a record can be loaded with only its own ID, the access path is probably missing
            organisation context.
          </p>
        </aside>
      </section>

      <section id="context">
        <p className="field-note__section-number">02 / Context</p>
        <h2>Make organisation context difficult to omit.</h2>
        <p>
          The riskiest query in a multi-tenant product is not an obviously unsafe one. It is a
          normal repository method called from a new code path without the expected scope. The
          defence is to move context into the shape of the operation itself.
        </p>
        <pre><code>{`// The caller cannot ask for an unscoped employee.
findEmployee({
  organisationId,
  employeeId,
  actor
})`}</code></pre>
        <p>
          The same rule should reach background jobs, object storage paths, cache keys, search
          indexes, exports, and analytics. A request-scoped middleware helps, but it cannot be
          the only defence because scheduled and asynchronous work has no browser request to
          inherit.
        </p>
        <h3>Use more than one guard</h3>
        <ul>
          <li>Scope domain and repository methods explicitly.</li>
          <li>Enforce ownership again where data is read or written.</li>
          <li>Include organisation context in logs and job payloads.</li>
          <li>Test cross-tenant denial paths, not only successful requests.</li>
        </ul>
      </section>

      <section id="permissions">
        <p className="field-note__section-number">03 / Permissions</p>
        <h2>A role name is not a permission model.</h2>
        <p>
          “Admin”, “manager”, and “employee” are useful labels for the interface. They are weak
          foundations for domain rules. A manager may approve leave for one location, view
          payroll for another, and have no access to brand configuration. A partner operator may
          provision a device without seeing the client&apos;s day-to-day fleet activity.
        </p>
        <p>
          I prefer permissions expressed as actions against a scoped resource: view schedule,
          approve request, manage device, export report. Roles then become collections of those
          actions, with explicit exceptions where the organisation requires them.
        </p>
        <blockquote>
          The interface can hide an action for clarity. The service still has to reject it for
          security.
        </blockquote>
      </section>

      <section id="configuration">
        <p className="field-note__section-number">04 / Configuration</p>
        <h2>Allow variation without creating nine products.</h2>
        <p>
          Multi-brand software needs legitimate variation: identity, terminology, enabled
          modules, approval flows, document templates, and notification rules. The temptation is
          to satisfy each new request with a conditional. That works until nobody knows which
          combination represents a real customer environment.
        </p>
        <p>
          Configuration should be typed, versioned, and observable. Defaults need to be explicit.
          Changes should leave an audit trail. If a setting changes the meaning of stored data, it
          deserves a migration plan rather than another toggle.
        </p>
        <div className="field-note__split">
          <div>
            <h3>Good configuration</h3>
            <p>Theme, vocabulary, enabled workflow, approval threshold, notification policy.</p>
          </div>
          <div>
            <h3>Warning sign</h3>
            <p>A client-specific branch that changes core domain behaviour with no shared model.</p>
          </div>
        </div>
      </section>

      <section id="operations">
        <p className="field-note__section-number">05 / Operations</p>
        <h2>The support path is part of the architecture.</h2>
        <p>
          Isolation is easy to discuss from the customer interface and easy to weaken in admin
          tools. Support search, exports, imports, migrations, and one-off repair scripts all need
          the same deliberate boundary. They also need enough audit context to explain who did
          what, for which organisation, and why.
        </p>
        <p>
          Per-tenant observability is equally important. A global error rate can look healthy while
          one organisation is unable to finish payroll or one partner&apos;s devices have stopped
          reporting. Operational dashboards should let the team move from system health to tenant
          health without exposing another client&apos;s data.
        </p>
        <p>
          The architecture is doing its job when adding a new feature does not require every
          engineer to remember a secret checklist. The ownership context, permission checks, and
          audit trail should already be part of the path they use.
        </p>
      </section>
    </FieldNoteLayout>
  );
}
