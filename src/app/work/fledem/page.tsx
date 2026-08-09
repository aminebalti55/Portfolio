import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { CaseStudySystemSection } from "@/components/ui/CaseStudySystemSection";

export const metadata: Metadata = {
  title: "FLEDEM @ FEV Software GmbH — Case Study",
  description:
    "Contract Full-Stack Engineer at FEV Software GmbH (Germany, Remote, Sep 2025 – Jan 2026). Built features for FLEDEM, FEV's fleet-analytics platform — analysis configuration flows, calibration management, events, and design-system alignment.",
};

const TECH = [
  "ASP.NET Core",
  "React",
  "TypeScript",
  "MongoDB",
  "Python",
  "SignalR",
  "Apache Parquet",
  "Azure Blob Storage",
  "Tailwind CSS",
];

const STATS = [
  { value: "4", label: "core modules contributed" },
  { value: "Cross-stack", label: "frontend + backend + infra" },
  { value: "4 months", label: "Sep 2025 – Jan 2026" },
  { value: "Enterprise", label: "scale & complexity" },
];

const CHALLENGES = [
  {
    challenge: "Configuration-heavy flows that confused users",
    solution:
      "Refactored dominant create/edit patterns into a consistent stepper + side-panel model, deduped form components, and aligned validation feedback so the same edit primitives behaved identically across modules.",
    impact:
      "Configuration-heavy screens now share a clearer interaction pattern instead of teaching a different editing model in each module.",
  },
  {
    challenge: "Bringing analysis logic inside the platform",
    solution:
      "Built the in-platform Scripts module — Monaco-editor authoring, channel-mapping UI for binding script inputs to CAN signals with unit conversion, and persistence so scripts could be reused across calibrations and analysis packages.",
    impact:
      "Analysis logic moved from one-off external scripts into a versioned, reusable, fleet-scoped resource inside the product.",
  },
  {
    challenge: "RBAC across modules without repeating yourself",
    solution:
      "Contributed to role-based access patterns and reusable confirmation/notification components so new modules inherit the same RBAC + UX guardrails by default rather than reimplementing them.",
    impact:
      "Future modules align with the same access-control + design-system patterns from day one.",
  },
  {
    challenge: "Quality bar across a large codebase",
    solution:
      "Beyond features, contributed to automated testing, API documentation, security review, and build-quality improvements across the frontend/backend codebase — especially around the modules I touched.",
    impact:
      "Modules I owned shipped with the test, docs, and security review needed for handover.",
  },
];

const OUTCOMES = [
  "Reduced workflow friction for fleet engineers by enabling them to define, validate, and reuse analysis logic directly inside the platform — instead of relying on fragmented external scripts.",
  "Improved platform usability and consistency by simplifying complex create/edit flows, standardizing UI patterns, and making configuration-heavy screens easier to operate.",
  "Strengthened product reliability by contributing to automated testing, API documentation, security review, and build-quality improvements across a large frontend/backend codebase.",
  "Supported enterprise readiness by contributing to role-based access patterns, reusable notification/confirmation systems, and design-system alignment for future modules.",
  "Operated as an independent contractor within a distributed engineering team, owning end-to-end delivery of assigned features.",
];

export default function FledemCaseStudy() {
  return (
    <main className="case-detail min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* ─── Hero — matches Pulse / InvoiceBirds / AutoAlly ──────────── */}
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
            <Badge className="border-white/15 bg-white/10 text-white">FEV Software GmbH</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Germany · Remote</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Sep 2025 – Jan 2026 · Contract</Badge>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-400/40 bg-zinc-400/10 px-3 py-1 text-xs font-medium text-zinc-300">
              NDA · Internal product
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            FLEDEM
          </h1>

          <p className="mt-3 text-base text-white/60">
            Fleet-analytics platform for FEV Software GmbH
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Contracted as a full-stack engineer inside FEV&apos;s fleet analytics
            platform. Worked on core analysis workflows, data
            configuration flows, and engineering-facing tools — across a
            large React + ASP.NET Core + MongoDB codebase processing CAN
            signal data from connected vehicle fleets.
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

      {/* ─── Stats Strip — same band as Pulse ───────────────────────── */}
      <section className="case-detail__visual">
        <Container>
          <div className="case-detail__visual-frame">
            <Image
              src="/images/projects/fledem/fledem-telemetry-cover-v1.png"
              alt="Abstract telemetry landscape representing FLEDEM fleet analytics"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          <div className="case-detail__visual-note">
            <span>NDA-safe system portrait</span>
            <p>Vehicle telemetry, analysis pipelines, and fleet-scale signal processing—visualized without exposing private product screens.</p>
          </div>
        </Container>
      </section>

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

      {/* ─── Overview ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Overview
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                Making complex fleet data feel usable
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-zinc-600 lg:col-span-8 dark:text-zinc-400">
              <p>
                FLEDEM is FEV&apos;s internal fleet-analytics platform — used
                by test engineers to define, validate, and reuse analysis
                logic against CAN-signal telemetry from connected vehicle
                fleets. Before this engagement, configuration-heavy flows
                were fragmented and engineers leaned on external scripts to
                get things done.
              </p>
              <p>
                My contract focus was reducing that friction inside the
                product. I built features that let users define and reuse
                analysis logic directly inside the platform, simplified
                complex create/edit flows, and standardized UI patterns
                across configuration-heavy screens so the platform felt
                consistent end-to-end.
              </p>
              <p>
                Beyond shipping features, the engagement included a
                meaningful amount of platform-quality work: contributing to
                automated testing, API documentation, security review, and
                build-quality improvements across the large frontend/backend
                codebase, plus role-based access patterns, reusable
                notification/confirmation systems, and design-system
                alignment for future modules.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="dark"
        eyebrow="Analysis workflow"
        title="Configuration becomes a reusable engineering system."
        intro="FLEDEM brings the pieces of fleet analysis—scripts, calibrations, signal mappings, and detected events—into one controlled product workflow instead of leaving them in disconnected engineering tools."
        accent="#ff7a45"
        background="linear-gradient(145deg, #101112 0%, #303236 58%, #17191b 100%)"
        items={[
          {
            step: "01",
            label: "Define",
            title: "Analytics scripts",
            description:
              "Engineers author and reuse Python analysis logic with in-platform editing and explicit bindings to authorized vehicle signals.",
          },
          {
            step: "02",
            label: "Calibrate",
            title: "Project configuration",
            description:
              "Calibration files connect to projects, scripts, and analysis packages through versionable records and managed attachments.",
          },
          {
            step: "03",
            label: "Connect",
            title: "Signal mapping",
            description:
              "CAN channels, units, logger slots, and stable configuration identifiers make analysis inputs explicit across revisions.",
          },
          {
            step: "04",
            label: "Review",
            title: "Detected events",
            description:
              "Event definitions, severity, evidence, filters, and statistics turn analysis output into a workflow users can investigate.",
          },
        ]}
      />

      {/* ─── Engineering Challenges — Pulse-style narrative blocks ──── */}
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
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#ff5500]">
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
        eyebrow="Enterprise architecture"
        title="A cross-stack path from vehicle signal to product decision."
        intro="The platform joins a typed React product surface, .NET domain services, real-time events, analytics execution, and multiple storage formats behind consistent access and interaction patterns."
        accent="#a73d19"
        image={{
          src: "/images/projects/fledem/fledem-telemetry-cover-v1.png",
          alt: "FLEDEM fleet telemetry and vehicle analytics visual",
        }}
        items={[
          {
            step: "01",
            label: "Interface",
            title: "React engineering tools",
            description:
              "TypeScript, Monaco, charts, and shared interaction patterns support dense configuration work without hiding domain detail.",
          },
          {
            step: "02",
            label: "Domain",
            title: "ASP.NET Core services",
            description:
              "REST contracts, authentication, permissions, and module logic provide stable boundaries for cross-team delivery.",
          },
          {
            step: "03",
            label: "Analysis",
            title: "Python and SignalR",
            description:
              "Analytics execution and real-time event delivery connect vehicle-derived results back to the product experience.",
          },
          {
            step: "04",
            label: "Storage",
            title: "MongoDB and Parquet",
            description:
              "Operational documents, binary identifiers, time-series output, and file assets use storage suited to their access patterns.",
          },
        ]}
      />

      {/* ─── Outcomes — single column list ─────────────────────────── */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                What I Delivered
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                Outcomes from a 4-month contract
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

              <p className="mt-8 max-w-2xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                FLEDEM is FEV Software GmbH&apos;s internal product.
                Screenshots and proprietary architectural details are
                excluded under NDA; the contributions described above are
                reflected in the engineering record and can be verified with
                the FEV team on request.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA — exact same pattern as Pulse closing ──────────────── */}
      <section className="case-detail__cta">
        <Container>
          <p className="case-detail__cta-label">Available for senior contract work</p>
          <div className="case-detail__cta-grid">
            <h2>Need an engineer for your enterprise platform?</h2>
            <div>
              <p>
                I join established teams to ship high-stakes product work across
                React, .NET, MongoDB, Python, and SignalR.
              </p>
              <div className="case-detail__cta-actions">
                <a
                  href="https://calendly.com/mohamedamine-balti-esprit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-detail__cta-primary"
                >
                  Schedule a call <span aria-hidden="true">↗</span>
                </a>
                <Link href="/work" className="case-detail__cta-secondary">
                  See more work <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer compact />
    </main>
  );
}
