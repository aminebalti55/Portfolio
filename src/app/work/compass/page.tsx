import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { LivePill } from "@/components/ui/LivePill";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { CaseStudySystemSection } from "@/components/ui/CaseStudySystemSection";

export const metadata: Metadata = {
  title: "Compass Solutions — Case Study",
  description:
    "Work on Compass Solutions' fleet-operations platform across GPS telemetry, vehicles, alerts, partner tooling, reporting, and a database-grounded assistant.",
};

const TECH = [
  "Next.js",
  "Hono",
  "TypeScript",
  "PostgreSQL",
  "Real-time map (Mapbox)",
  "WebSockets",
  "RBAC",
  "AI Assistant (LLM)",
  "Tailwind CSS",
  "Multi-tenant architecture",
];

const STATS = [
  { value: "10+", label: "production modules owned" },
  { value: "Real-time", label: "GPS + telemetry tracking" },
  { value: "Tool-calling", label: "fleet operations assistant" },
  { value: "Multi-tenant", label: "fleet & organization scoping" },
];

// Product screens. All captures are ~1908x910 (2.1:1) — keep new ones at
// that ratio so the gallery panel doesn't jump height between tabs.
//
// Split into two groups because Compass is really two surfaces: what the
// fleet operator uses, and the partner portal the reseller runs the whole
// book of business from. Collapsing them hid the second one entirely.
const SCREENS = [
  {
    group: "Operator",
    eyebrow: "Overview",
    title: "The whole fleet on one screen",
    body: "Fleet status, distance, alert volume and fuel spend for the selected range, over a live satellite map of every active vehicle — then weekly activity, top distances, recent trips and the latest alerts underneath.",
    src: "compass-app-01-overview.png",
    alt: "Compass Solutions overview — fleet KPIs, live satellite map and weekly activity",
  },
  {
    group: "Operator",
    eyebrow: "Vehicles",
    title: "Every vehicle, and whether it is actually reporting",
    body: "Online / offline / needs-attention split across the fleet, then a card per vehicle with make, plate, device ID, driver assignment and last-seen time. Grouping, sorting and search on top for larger books.",
    src: "compass-app-02-vehicles.png",
    alt: "Compass Solutions vehicles — fleet status breakdown and per-vehicle cards with device and last-seen",
  },
  {
    group: "Operator",
    eyebrow: "Alerts",
    title: "Every incident, triaged and assignable",
    body: "Speed, geofence, harsh braking and idle events, split by severity with mean response time and treatment rate. Each alert opens evidence — the measured value against the rule, the map position, the source sensor, coordinates — and a one-click intervene action.",
    src: "compass-app-03-alerts.png",
    alt: "Compass Solutions alerts — severity KPIs, incident history and an evidence panel with map position",
  },
  {
    group: "Operator",
    eyebrow: "Compass Assistant",
    title: "Ask the fleet a question in plain language",
    body: "LLM tool-calling agent scoped to fleet operations. It resolves plain French or English questions into the right tool calls — vehicles, alerts, trips, drivers, maintenance, fuel — runs them against the live database, and answers from tool output rather than from the model.",
    src: "compass-app-04-assistant.png",
    alt: "Compass Assistant — natural-language fleet queries with suggested prompts across six domains",
  },
  {
    group: "Partner",
    eyebrow: "Partner fleet",
    title: "879 vehicles across 666 client organisations",
    body: "The reseller-side portal. Every device across every client organisation in one book: online, offline and never-reported counts, financing state for clients awaiting billing, and search across client, phone, plate, IMEI or SIM.",
    src: "compass-app-05-partner-fleet.png",
    alt: "Compass GPS partner portal — 879 devices across 666 client organisations with status and billing state",
  },
  {
    group: "Partner",
    eyebrow: "Device & SIM",
    title: "Provisioning down to the SIM and the IMEI",
    body: "Per-device record tying plate, IMEI, tracker model, SIM and carrier to the owning client and driver, with live position, odometer, document expiry, and an SMS command channel to the tracker itself.",
    src: "compass-app-06-partner-device.png",
    alt: "Compass GPS partner portal — device detail with SIM, IMEI, live position and SMS command channel",
  },
];

const CHALLENGES = [
  {
    challenge: "Real-time at fleet scale without melting the database",
    solution:
      "Telemetry arrives far more often than the product needs to redraw every screen. The system keeps current map reads and historical reporting on different paths, with buffered writes and aggregated records where the workload calls for them.",
    impact:
      "Operators can move between current vehicle state and historical activity without treating them as the same query problem.",
  },
  {
    challenge: "Multi-tenant access across vehicles, drivers, organizations",
    solution:
      "Users, organisations, vehicles, drivers, geofences, and reports all carry explicit ownership context. Query paths and team-management actions respect that scope rather than relying on the interface to filter records after loading them.",
    impact:
      "The same organisation boundary is applied across operator screens, partner tooling, and reporting paths.",
  },
  {
    challenge: "AI assistant that actually answers fleet questions",
    solution:
      "The assistant uses a fleet-specific tool layer for vehicles, alerts, trips, drivers, maintenance, and fuel. It answers from tool results and links operators back to the relevant product surface instead of presenting free-form model output as operational truth.",
    impact:
      "Common questions can begin in natural language while the underlying data remains traceable to the product.",
  },
  {
    challenge: "Engineering-friction reduction across the codebase",
    solution:
      "Introduced reusable interface patterns, structured service logic, migrations, seed scripts, type-checking, and build-quality improvements in the areas I worked on.",
    impact:
      "New work can follow established form, access-control, and notification patterns instead of inventing another local convention.",
  },
];

const OUTCOMES = [
  "Built and refined dashboard, vehicle, driver, map, and fleet-management flows for clearer day-to-day tracking and improved operational visibility.",
  "Worked across the full stack — web app, backend API, PostgreSQL data layer, generated API contracts, and deployment workflows — to strengthen end-to-end product delivery.",
  "Reduced engineering friction by introducing reusable UI patterns, structured service logic, database migrations, seed scripts, type-checking, and build-quality improvements.",
  "Owned the integration between real-time location data and operational dashboards so fleet managers can act on driver and vehicle state without leaving the app.",
  "Shipped AI-augmented modules (Compass Assistant, AI driver/fuel/maintenance insights) that translate raw telemetry into operator-facing answers.",
];

export default function CompassCaseStudy() {
  return (
    <main className="case-detail min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#061a2b] text-white">
        <div className="absolute inset-0 project-hero-orbs--compass" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60" />

        <SiteHeader />

        <Container className="relative pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge className="border-white/15 bg-white/10 text-white">Compass Solutions</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Tunisia · Remote</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">2026 — Present</Badge>
            <LivePill href="https://www.compasssolutions.ai/" />
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Compass Solutions
          </h1>

          <p className="mt-3 text-base text-white/60">
            GPS fleet-tracking SaaS with AI-augmented operations
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Production fleet-management and GPS-tracking platform that helps
            businesses monitor vehicles, manage operational data, and act on
            real-time location-based workflows. AI-augmented modules surface
            insights from telemetry; the Compass Assistant lets operators ask
            fleet questions in plain language and get back structured
            answers with deep-links into the relevant pages.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {TECH.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Stats Strip ───────────────────────────────────────────── */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/40">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Overview ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1686c8]">
                Overview
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                Fleet operators don&apos;t need more dashboards. They need answers.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-zinc-600 lg:col-span-8 dark:text-zinc-400">
              <p>
                Compass is a GPS fleet-tracking platform built for businesses
                that need to monitor vehicles in real time, manage operational
                data, and act on location-based workflows — dispatching,
                geofencing, fuel monitoring, driver behavior, and predictive
                maintenance.
              </p>
              <p>
                What sets it apart from a generic fleet-tracking SaaS is the
                AI layer. Compass ships AI-augmented modules for drivers, fuel,
                and maintenance that surface insights from raw telemetry
                without engineers having to query Postgres directly. The
                Compass Assistant takes that further: operators ask plain
                French/English questions like
                <em> &ldquo;which vehicles drove the most yesterday?&rdquo;</em> and
                get a structured answer with deep-links — no SQL required.
              </p>
              <p>
                I work across the full stack on this product — web app,
                backend API, PostgreSQL data layer, generated API contracts,
                deployment workflows — and own the integration layer between
                real-time location data and the operational dashboards.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="dark"
        eyebrow="Operational model"
        title="From moving vehicle to accountable decision."
        intro="Compass connects two product surfaces—the fleet operator workspace and the partner portal—through one operational model for live state, incidents, access, and grounded answers."
        accent="#7ed8ff"
        background="linear-gradient(145deg, #061a2b 0%, #0b5f99 58%, #08263d 100%)"
        items={[
          {
            step: "01",
            label: "Observe",
            title: "Live telemetry",
            description:
              "Position, movement, distance, fuel, and device health become current fleet state instead of disconnected tracker messages.",
          },
          {
            step: "02",
            label: "Respond",
            title: "Operational rules",
            description:
              "Speed, geofence, braking, idle, maintenance, and fuel signals become evidence-backed alerts that teams can triage and assign.",
          },
          {
            step: "03",
            label: "Administer",
            title: "Partner control",
            description:
              "Client organisations, devices, SIMs, billing state, and provisioning stay manageable from a dedicated reseller-side workspace.",
          },
          {
            step: "04",
            label: "Understand",
            title: "Grounded assistant",
            description:
              "Natural-language questions resolve to fleet-specific tools and live records, returning useful answers with paths back into the product.",
          },
        ]}
      />

      {SCREENS.map((screen, i) => (
        <section
          key={screen.src}
          className={
            i % 2 === 0
              ? "bg-white py-16 dark:bg-zinc-950"
              : "bg-zinc-50 py-16 dark:bg-zinc-900/40"
          }
        >
          <Container>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1686c8]">
                {screen.group} · {screen.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                {screen.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {screen.body}
              </p>
            </div>
            {/* Hairline border, no shadow — a screenshot is a picture, not an
                object floating above the page. */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <Image
                src={`/images/projects/compass/${screen.src}`}
                alt={screen.alt}
                width={1908}
                height={912}
                className="h-auto w-full"
              />
            </div>
          </Container>
        </section>
      ))}

      {/* ─── Engineering Challenges ────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1686c8]">
                Engineering Challenges
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                The hard parts I worked on
              </h2>
            </div>
            <div className="space-y-8 lg:col-span-8">
              {CHALLENGES.map((c, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {c.challenge}
                  </h3>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1686c8]">
                        Solution ·{" "}
                      </span>
                      {c.solution}
                    </p>
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1686c8]">
                        Outcome ·{" "}
                      </span>
                      {c.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="light"
        eyebrow="Platform architecture"
        title="Fast live state without sacrificing durable history."
        intro="The system separates high-cadence location updates from historical reporting and keeps organisation scope explicit at every boundary—from the map to the assistant."
        accent="#0d6ea8"
        image={{
          src: "/images/projects/compass/compass-app-01-overview.png",
          alt: "Compass fleet operations overview with map and operational metrics",
        }}
        items={[
          {
            step: "01",
            label: "Surface",
            title: "Next.js + Hono product",
            description:
              "Next.js powers the operator experience while Hono provides the typed API layer behind maps, vehicles, alerts, reports, forms, and partner tooling.",
          },
          {
            step: "02",
            label: "Ingest",
            title: "Real-time telemetry path",
            description:
              "Buffered updates and live channels keep the map responsive while protecting durable storage from high-frequency write contention.",
          },
          {
            step: "03",
            label: "Data",
            title: "PostgreSQL operations",
            description:
              "Current state, historical records, and aggregated reporting remain queryable through tenant-aware service boundaries.",
          },
          {
            step: "04",
            label: "Intelligence",
            title: "Tool-grounded AI",
            description:
              "The assistant can access only registered fleet tools and scoped records, making its answers traceable to production data.",
          },
        ]}
      />

      {/* ─── Outcomes ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1686c8]">
                What I Deliver
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                Day-to-day at Compass
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {OUTCOMES.map((line, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40"
                  >
                    <span className="font-display text-2xl font-bold text-[#1686c8]/55">
                      0{i + 1}
                    </span>
                    <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {line}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.compasssolutions.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/12 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:border-black/30 hover:bg-black/[0.03] dark:border-white/15 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-white/5"
                >
                  Visit live product
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="case-study-closing relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,31,0.15),transparent_70%)]" />
        <Container className="relative text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Building real-time SaaS for your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            I work end-to-end on production systems with real-time data,
            multi-tenant access, and AI-augmented operations.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/#contact" variant="primary" withDot>
              Schedule a call
            </ButtonLink>
            <ButtonLink href="/work" variant="ghost" withDot>
              See more work
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Footer compact />
    </main>
  );
}
