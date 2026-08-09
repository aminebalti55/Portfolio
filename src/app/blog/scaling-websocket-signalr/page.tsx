import type { Metadata } from "next";
import { FieldNoteLayout } from "@/components/ui/FieldNoteLayout";
import "../blog-styles.css";

export const metadata: Metadata = {
  title: "What Enterprise SignalR Work Taught Me About Live Products",
  description:
    "Practical lessons about state, subscriptions, reconnection, interface honesty, and observability in real-time products.",
};

const toc = [
  { id: "state", label: "Events are not state" },
  { id: "scope", label: "Subscribe narrowly" },
  { id: "reconnect", label: "Reconnect is a data problem" },
  { id: "interface", label: "Make freshness visible" },
  { id: "operations", label: "Observe the live path" },
];

export default function ScalingWebSocketBlogPost() {
  return (
    <FieldNoteLayout
      number="02"
      category="Real-time systems"
      title="What enterprise SignalR work taught me about live products."
      description="WebSockets solve transport. The product still has to decide what is current, what was missed, who may subscribe, and what the interface should say when the connection lies."
      date="December 15, 2025"
      readTime="7 minutes"
      toc={toc}
      takeaways={[
        "Treat an event as evidence of change, not as the complete current state.",
        "Authorise subscriptions against the same domain boundary as ordinary reads.",
        "Design reconnect as a reconciliation flow with versions or cursors.",
        "Show users when information is live, delayed, reconnecting, or stale.",
      ]}
      nextNote={{
        href: "/blog/development-workflow",
        label: "From ambiguous brief to production software",
      }}
    >
      <p className="field-note__lede">
        A live interface can fail while looking healthy. The socket is connected, but the user
        joined the wrong group. An event arrived out of order. The browser slept for ten minutes
        and missed a transition. The dashboard still shows a green dot.
      </p>

      <p>
        Working on enterprise event flows with SignalR changed how I think about real-time
        products. The difficult work sits above the protocol: state ownership, access, recovery,
        and honest feedback. These lessons apply whether the transport is SignalR, raw WebSockets,
        server-sent events, or a managed realtime service.
      </p>

      <section id="state">
        <p className="field-note__section-number">01 / State</p>
        <h2>An event is not the current state.</h2>
        <p>
          “Vehicle updated”, “analysis completed”, and “alert assigned” describe transitions. A
          newly opened screen still needs a trustworthy snapshot. If the interface builds its
          entire state by replaying whichever messages happened to arrive, refreshes and reconnects
          become guesswork.
        </p>
        <p>
          A safer flow is snapshot first, updates second: load the authorised current view through a
          normal query, record its version, then apply newer events. The event moves the interface
          forward; it does not become the only record of truth.
        </p>
        <pre><code>{`{
  "stream": "vehicle:42",
  "version": 1842,
  "occurredAt": "2026-01-18T09:42:13Z",
  "type": "position.updated",
  "payload": { "latitude": 36.81, "longitude": 10.18 }
}`}</code></pre>
      </section>

      <section id="scope">
        <p className="field-note__section-number">02 / Scope</p>
        <h2>Subscriptions need the same access rules as reads.</h2>
        <p>
          Joining a group is a read operation that stays open. It should be authorised with the
          same organisation, project, fleet, or resource boundary used by the rest of the product.
          Guessable group names and client-supplied organisation IDs are not an access model.
        </p>
        <p>
          Narrow subscriptions also reduce noise. A screen showing one analysis run should not
          receive every event in the project. A fleet operator should subscribe to the vehicles and
          alerts currently in scope, not a global stream that the browser filters afterward.
        </p>
        <aside className="field-note__callout">
          <span>Practical rule</span>
          <p>Authorise before joining, unsubscribe when context changes, and clean up on disposal.</p>
        </aside>
      </section>

      <section id="reconnect">
        <p className="field-note__section-number">03 / Recovery</p>
        <h2>Reconnect is a reconciliation flow.</h2>
        <p>
          Automatic reconnect restores the transport. It does not prove that the interface is
          current. The client may have missed one event or one hundred. Its previous subscriptions
          may no longer be valid. The user&apos;s permissions may have changed while the connection was
          down.
        </p>
        <p>
          On reconnect, rebuild the authorised subscriptions and compare a version, timestamp, or
          cursor. If the gap is small and the server keeps an event window, backfill it. Otherwise,
          request a fresh snapshot. The recovery path should be deterministic enough to test without
          unplugging Wi-Fi by hand.
        </p>
        <div className="field-note__split">
          <div>
            <h3>Transport recovered</h3>
            <p>The connection is open again.</p>
          </div>
          <div>
            <h3>Product recovered</h3>
            <p>Subscriptions, permissions, and visible state have been reconciled.</p>
          </div>
        </div>
      </section>

      <section id="interface">
        <p className="field-note__section-number">04 / Interface</p>
        <h2>Freshness belongs in the UI.</h2>
        <p>
          Real-time status is product information. “Live”, “reconnecting”, “updated 40 seconds ago”,
          and “showing last known value” lead to different decisions. Hiding the connection state
          makes the interface look cleaner right up until somebody acts on stale information.
        </p>
        <p>
          Not every update deserves animation or a toast. Often the right behaviour is quiet: update
          a row in place, preserve the user&apos;s scroll and selection, and expose freshness beside the
          value. Reserve interruption for changes that require a decision.
        </p>
        <blockquote>
          A live product should feel calm because the state model is clear—not because failure is
          hidden.
        </blockquote>
      </section>

      <section id="operations">
        <p className="field-note__section-number">05 / Operations</p>
        <h2>Observe the path from event to visible change.</h2>
        <p>
          Connection count alone says very little. Useful signals include rejected subscriptions,
          reconnect frequency, delivery lag, queue depth, dropped or superseded messages, and the
          age of the state currently shown to the user. Correlation IDs should survive from the
          domain event through the hub and into client logs.
        </p>
        <p>
          Load tests should model actual subscription patterns, not thousands of idle sockets. A
          realistic test reconnects clients, changes groups, sends bursts, slows consumers, and
          verifies that the final visible state is correct.
        </p>
        <p>
          The result is not “a WebSocket feature.” It is a product surface with an explicit contract
          for freshness, access, recovery, and failure. SignalR is useful infrastructure for that
          contract, but it cannot define the contract for you.
        </p>
      </section>
    </FieldNoteLayout>
  );
}
