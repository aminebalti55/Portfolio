import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Compass Solutions — Case Study",
  description:
    "Software Engineer at Compass Solutions (Tunisia, Remote, 2026 – Present). Production fleet-management & GPS-tracking platform with AI-powered driver, fuel, and maintenance modules. Real-time map, vehicle, alerts, reports, and the Compass Assistant LLM agent.",
};

const TECH = [
  "Next.js",
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
  { value: "AI-powered", label: "driver / fuel / maintenance" },
  { value: "Multi-tenant", label: "fleet & organization scoping" },
];

const MODULES = [
  {
    number: "01",
    title: "Live Map",
    description:
      "Real-time vehicle positions on an interactive map with cluster markers, route history, and per-vehicle telemetry overlays. Built with Mapbox GL + WebSocket streams from the GPS backend so fleet managers see vehicle state without refreshing.",
    tech: "Next.js · Mapbox GL · WebSockets · PostgreSQL",
  },
  {
    number: "02",
    title: "Vehicles & Devices",
    description:
      "Per-vehicle dashboards with status (moving / stopped / offline), assignment to drivers, geofences, telemetry history, and document attachments. CRUD across the entire fleet with bulk operations and CSV export.",
    tech: "Next.js · TanStack Query · PostgreSQL · React Hook Form",
  },
  {
    number: "03",
    title: "Alerts & Geofences",
    description:
      "Configurable alert rules — speed thresholds, geofence enter/exit, harsh braking, idle time. 99+ alert volume per day across the fleet with severity classification, assignment workflows, and acknowledgement tracking.",
    tech: "PostgreSQL · Cron jobs · Notification fanout · Real-time WebSocket push",
  },
  {
    number: "04",
    title: "AI Modules — Drivers · Fuel · Maintenance",
    description:
      "LLM-augmented modules that surface insights from raw telemetry: driver-behavior scoring, fuel-anomaly detection (per-trip vs fleet baseline), and predictive-maintenance recommendations from mileage + sensor patterns.",
    tech: "LLM agents · Telemetry analytics · PostgreSQL aggregations",
  },
  {
    number: "05",
    title: "Compass Assistant",
    description:
      "Natural-language fleet operator — engineers ask questions in plain French/English (\"which vehicles drove the most yesterday?\", \"show me alerts on vehicle 12 this week\") and the assistant returns structured answers with deep-links into the relevant pages.",
    tech: "LLM · Tool calling · Custom Compass tool registry",
  },
  {
    number: "06",
    title: "Reports & Documents",
    description:
      "Custom report builder with date ranges, vehicle filters, and KPI selectors. PDF/Excel export. Document wallet for vehicle paperwork (insurance, registration, inspection) with expiry-date alerts.",
    tech: "PDF generation · Cloud storage · Cron jobs",
  },
];

const CHALLENGES = [
  {
    challenge: "Real-time at fleet scale without melting the database",
    solution:
      "Telemetry streams arrive at high cadence — naive 'just upsert into Postgres' would crush write IOPS. Built a buffered ingestion layer that batches inserts every N ms, separate hot-cache for the live-map view, and aggregated rollups for historical queries so the map stays sub-200ms responsive while the backend isn't constantly contending on row locks.",
    impact:
      "Live-map updates feel instant; historical queries don't compete with the ingest pipeline.",
  },
  {
    challenge: "Multi-tenant access across vehicles, drivers, organizations",
    solution:
      "Each user belongs to one or more organizations; each organization owns vehicles, drivers, geofences, and reports. Built a fleet-scoped access layer at the query level so that no cross-tenant leakage is possible, plus a clean RBAC model surfaced through a Team page where org admins manage roles.",
    impact:
      "Organizations can grow into thousands of vehicles without leaking data across tenants.",
  },
  {
    challenge: "AI assistant that actually answers fleet questions",
    solution:
      "Built a tool-calling layer specific to fleet operations: vehicles, alerts, geofences, fuel queries, driver lookups. The assistant translates plain-language questions into the right tool calls, fetches the data, and renders an inline answer with deep-links — no hallucinations because it's grounded in the database.",
    impact:
      "Fleet managers get answers in 5 seconds instead of clicking through 6 dashboards.",
  },
  {
    challenge: "Engineering-friction reduction across the codebase",
    solution:
      "Introduced reusable UI patterns, structured service logic, database migrations, seed scripts, type-checking, and build-quality improvements across the platform so future contributors ship faster with fewer regressions.",
    impact:
      "New modules now reuse 60-70% of existing primitives instead of reinventing forms, RBAC, and notifications.",
  },
];

const STACK_GROUPS = [
  {
    title: "Frontend",
    items: [
      "Next.js 14 (App Router)",
      "TypeScript strict mode",
      "Tailwind CSS · Radix UI",
      "Mapbox GL JS",
      "TanStack Query",
      "React Hook Form · Zod",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js · TypeScript",
      "REST + tRPC",
      "WebSocket server (real-time)",
      "Cron jobs (alerts, reports)",
    ],
  },
  {
    title: "Data",
    items: [
      "PostgreSQL",
      "Prisma ORM",
      "Telemetry buffering layer",
      "Multi-tenant row-level scoping",
      "Aggregated rollups for analytics",
    ],
  },
  {
    title: "AI & Infra",
    items: [
      "LLM tool-calling agent",
      "Custom Compass tool registry",
      "Cloud object storage (documents)",
      "Vercel-style deployment workflow",
    ],
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
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080406] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_70%_0%,rgba(255,77,31,0.55),transparent_55%),radial-gradient(900px_circle_at_20%_10%,rgba(255,0,92,0.25),transparent_55%)]" />
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
            <a
              href="https://www.compasssolutions.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-400/25"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live · compasssolutions.ai
            </a>
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

      {/* ─── Hero Screenshot — Live Map ─────────────────────────────── */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/compass/compass-app-02-map.png"
              alt="Compass Solutions live map view — real-time vehicle positions across a customer fleet"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-zinc-500 dark:text-zinc-400">
            Live-map view — every active vehicle on the customer fleet,
            updated in real time via WebSocket telemetry stream.
          </p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
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

      {/* ─── Modules ───────────────────────────────────────────────── */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Modules
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Six core modules I work across
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Each module spans frontend dashboards, backend services, the
            PostgreSQL data layer, and the deployment workflow — end-to-end
            ownership across the stack.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {MODULES.map((m) => (
              <div
                key={m.number}
                className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="text-5xl font-black text-[#ff5500]/20">
                  {m.number}
                </div>
                <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {m.description}
                </p>
                <p className="mt-4 text-xs font-medium text-[#ff5500] dark:text-[#ff7733]">
                  {m.tech}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Vehicles + AI Assistant screenshots ──────────────────── */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Vehicles & Devices
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                One place to see and manage every vehicle
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Per-vehicle dashboards showing status (moving / stopped /
                offline), driver assignment, telemetry history, geofence
                memberships, document expiries, and alert history. Bulk
                operations + CSV export for ops teams.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl lg:col-span-7 dark:border-zinc-800">
              <Image
                src="/images/projects/compass/compass-app-03-vehicles.png"
                alt="Compass Solutions vehicles list — fleet-wide vehicle inventory with status, alerts, and quick actions"
                width={1920}
                height={893}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="order-2 overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl lg:order-1 lg:col-span-7 dark:border-zinc-800">
              <Image
                src="/images/projects/compass/compass-app-04-ai-assistant.png"
                alt="Compass Assistant — natural-language interface for asking fleet questions and getting structured answers"
                width={1920}
                height={893}
                className="h-auto w-full"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Compass Assistant
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Natural language, grounded answers
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                LLM tool-calling agent purpose-built for fleet operations. It
                resolves plain-language questions into the right tool calls
                (vehicles, alerts, geofences, fuel, drivers), executes them
                against the live database, and renders a structured answer
                with deep-links into the relevant pages — no hallucinations
                because every answer is grounded in tool output.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Engineering Challenges ────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
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
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#ff5500]">
                        Solution ·{" "}
                      </span>
                      {c.solution}
                    </p>
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
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

      {/* ─── Stack ────────────────────────────────────────────────── */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            The Stack
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            How it&apos;s built end-to-end
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STACK_GROUPS.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#ff5500]">
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5500]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Outcomes ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
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
                    <span className="font-display text-2xl font-bold text-[#ff5500]/40">
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
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-400/20 dark:text-emerald-300"
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Visit live product →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-24">
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

      <Footer />
    </main>
  );
}
