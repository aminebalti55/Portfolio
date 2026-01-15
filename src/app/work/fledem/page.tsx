import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "FLEDEM — Case Study",
  description:
    "An enterprise fleet management platform with real-time telemetry, event detection, calibration management, and Python-based analytics.",
};

export default function FledemCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a2332] via-[#0f1620] to-[#0a0e17] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_30%_0%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(900px_circle_at_80%_20%,rgba(99,102,241,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50" />

        <SiteHeader />

        <Container className="relative pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Work
          </Link>

          <div className="mt-8">
            <Badge className="border-white/15 bg-white/10 text-white">
              Enterprise Fleet Management
            </Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            FLEDEM
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A comprehensive enterprise fleet management platform built for automotive 
            OEMs and test engineering teams. Real-time telemetry monitoring, event 
            detection, calibration management, and Python-based analytics — handling 
            thousands of vehicles across multiple fleets with CAN bus signal processing.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              ASP.NET Core 8
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              React 18
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              TypeScript
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              MongoDB
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Python
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              SignalR
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Apache Parquet
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Azure Blob Storage
            </span>
          </div>
        </Container>
      </section>

      {/* Project Overview */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Enterprise-Scale Fleet Intelligence
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  FLEDEM is an advanced fleet management system designed for automotive 
                  manufacturers and test engineering organizations managing large-scale 
                  vehicle fleets. The platform processes real-time CAN bus telemetry, 
                  monitors vehicle health, detects critical events, and provides 
                  comprehensive analytics capabilities.
                </p>
                <p>
                  I contributed to several critical modules as part of a distributed 
                  engineering team, focusing on frontend UI development and system 
                  integration. My work spanned the <strong>Scripts Module</strong>, 
                  <strong>Calibration Module</strong>, <strong>Events Module</strong>, 
                  and <strong>Analysis Package Module</strong> — all essential components 
                  for vehicle data processing and fleet operations.
                </p>
                <p>
                  The system handles complex workflows including CAN signal configuration 
                  parsing (DBC, A2L, AUTOSAR, LDF formats), real-time telemetry streaming 
                  with SignalR WebSockets, Python-based analytics execution, calibration 
                  file management, and multi-tenant fleet access control with role-based 
                  permissions.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Timeline
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  6 months (Ongoing)
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Role
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Full-Stack Developer (Frontend Focus)
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Tech Stack
                </h4>
                <ul className="mt-2 space-y-1 text-lg text-zinc-900 dark:text-zinc-100">
                  <li>• ASP.NET Core 8</li>
                  <li>• React 18 + TypeScript</li>
                  <li>• MongoDB</li>
                  <li>• Python 3.11+</li>
                  <li>• SignalR WebSockets</li>
                  <li>• Tailwind CSS</li>
                  <li>• Azure Blob Storage</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Platform Type
                </h4>
                <p className="mt-2 text-lg text-zinc-900 dark:text-zinc-100">
                  Enterprise Fleet Management SaaS
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modules Contributed Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            My Contributions
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Core Modules Developed
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            I designed and implemented multiple interconnected modules handling complex 
            data workflows and user interactions.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Scripts Module",
                description:
                  "Python analytics execution engine with channel mapping, unit conversion, and signal binding. Designed CRUD UI with monaco code editor integration, channel configuration interface, and fleet-scoped access control.",
                technologies: "React, Monaco Editor, Python execution API",
              },
              {
                number: "02",
                title: "Calibration Module",
                description:
                  "Complete calibration management system linking calibrations to projects, scripts, and analysis packages. Built MongoDB schema, REST API endpoints, and React UI with ROMEO/Evaluation integration support.",
                technologies: "MongoDB, ASP.NET Core, React, Azure Blob",
              },
              {
                number: "03",
                title: "Events Module",
                description:
                  "Event detection and management system with severity classification, attachment handling, and export capabilities. Implemented event definitions UI, filtering system, and statistics visualization with Chart.js.",
                technologies: "React, SignalR, Chart.js, PDF Export",
              },
              {
                number: "04",
                title: "Analysis Package Module",
                description:
                  "Deep integration layer connecting scripts to CAN signal configurations. Designed signal mapping UI with unit conversion, logger slot management, and configuration GUID resolution using URN/UUID system.",
                technologies: "React, TypeScript, CAN signal processing",
              },
            ].map((module) => (
              <div
                key={module.number}
                className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800">
                  {module.number}
                </span>
                <h4 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {module.title}
                </h4>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                  {module.description}
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {module.technologies}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Architecture */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Technical Architecture
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Enterprise-Grade Technology Stack
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Built with modern technologies to handle massive-scale telemetry processing 
            and real-time fleet monitoring.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Backend",
                items: [
                  "ASP.NET Core 8 with MVC + API controllers",
                  "SignalR hubs for real-time telemetry",
                  "Python 3.11+ analytics runtime",
                  "JWT authentication + RBAC",
                ],
              },
              {
                title: "Frontend",
                items: [
                  "React 18 with TypeScript",
                  "Tailwind CSS + custom components",
                  "Monaco Editor for code editing",
                  "Chart.js for data visualization",
                ],
              },
              {
                title: "Database",
                items: [
                  "MongoDB with 35+ collections",
                  "Binary UUID (subType 04) indexing",
                  "Fleet-scoped resource filtering",
                  "Apache Parquet for time-series data",
                ],
              },
              {
                title: "Infrastructure",
                items: [
                  "Azure Blob Storage for files",
                  "Webpack module bundling",
                  "Python simulation tooling",
                  "Visual Studio 2022 solution",
                ],
              },
            ].map((category) => (
              <div key={category.title}>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {category.title}
                </h4>
                <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Platform Capabilities
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Complete Fleet Management Suite
          </h3>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Real-Time Telemetry",
                description:
                  "SignalR WebSocket streaming of CAN bus signals with millisecond-level precision and automatic reconnection.",
              },
              {
                icon: "📊",
                title: "Analytics Engine",
                description:
                  "Python script execution with channel mapping, unit conversion, and Parquet data streaming for heavy computation.",
              },
              {
                icon: "🔧",
                title: "Calibration Management",
                description:
                  "Project-linked calibrations with script attachments, analysis package integration, and fleet-scoped access.",
              },
              {
                icon: "🚨",
                title: "Event Detection",
                description:
                  "Automated event definitions with severity classification, trigger conditions, and comprehensive attachment handling.",
              },
              {
                icon: "🗺️",
                title: "Fleet Visualization",
                description:
                  "Geographic mapping with vehicle tracking, route history, and cluster-based navigation for large fleets.",
              },
              {
                icon: "📈",
                title: "Statistics & Reports",
                description:
                  "Custom formula editor, histogram generation, binning presets, and PDF export capabilities.",
              },
              {
                icon: "🔐",
                title: "Access Control",
                description:
                  "Multi-tenant architecture with User → Fleet(s) → Resources hierarchy and role-based permissions.",
              },
              {
                icon: "🔄",
                title: "CAN Configuration",
                description:
                  "Multi-format signal configuration parsing (DBC, A2L, AUTOSAR, LDF) with signal URN/GUID resolution.",
              },
              {
                icon: "💾",
                title: "Data Storage",
                description:
                  "Azure Blob integration for attachments, Parquet files for time-series telemetry, MongoDB for metadata.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h4 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Complex Challenges */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Engineering Challenges
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Solving Complex Problems at Scale
          </h3>

          <div className="mt-12 space-y-8">
            {[
              {
                challenge: "Multi-Format CAN Signal Configuration",
                solution:
                  "Built configuration adapter factory with support for DBC, A2L, AUTOSAR, and LDF formats. Implemented unified parsing layer with signal URN to GUID resolution using UUIDv5 deterministic generation.",
                impact:
                  "Engineers can now import signals from any vehicle configuration format seamlessly.",
              },
              {
                challenge: "Real-Time Telemetry Performance",
                solution:
                  "Designed background telemetry service with bounded cache scans, periodic cleanup, and SignalR hub batching. Integrated Apache Parquet for efficient time-series data storage and retrieval.",
                impact:
                  "System handles thousands of concurrent vehicle connections with <100ms latency.",
              },
              {
                challenge: "Fleet-Scoped Access Control",
                solution:
                  "Implemented User → Fleet(s) → Resources hierarchy with MongoDB compound indexes on fleet.guid. Built RBAC middleware with resource filtering at query level, preventing unauthorized data access.",
                impact:
                  "Multi-tenant architecture supports hundreds of organizations with complete data isolation.",
              },
              {
                challenge: "Python Analytics Integration",
                solution:
                  "Created channel mapping UI linking script inputs to CAN signals with unit conversion. Built signal binding system resolving configuration GUIDs to specific message IDs and channel names.",
                impact:
                  "Analysts can build custom Python scripts without understanding CAN bus internals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Challenge: {item.challenge}
                </h4>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Solution
                    </span>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      {item.solution}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Impact
                    </span>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Design & Development Process */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Development Process
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Structured Engineering Workflow
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description:
                  "Analyzed manager notes, existing patterns in 35+ MongoDB collections, and codebase architecture. Documented database schemas, API flows, and UI patterns.",
              },
              {
                step: "02",
                title: "Design Documentation",
                description:
                  "Created comprehensive design specs for Calibration, Events, and Analysis Package modules. Defined MongoDB schemas, API endpoints, and React component architecture.",
              },
              {
                step: "03",
                title: "Incremental Development",
                description:
                  "Built modules iteratively with continuous integration. Implemented backend controllers, services, MongoDB models, followed by React UI with TypeScript.",
              },
              {
                step: "04",
                title: "Testing & Refinement",
                description:
                  "Validated with Python simulation scripts and automated tests. Refined RBAC filtering, UI responsiveness, and real-time data synchronization.",
              },
            ].map((phase) => (
              <div key={phase.step}>
                <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800">
                  {phase.step}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {phase.title}
                </h4>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Impact & Scale
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Production-Ready Enterprise Solution
          </h3>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "35+", label: "MongoDB Collections" },
              { value: "4", label: "Major Modules Developed" },
              { value: "1000s", label: "Vehicles Supported" },
              { value: "Real-Time", label: "Telemetry Streaming" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900/50 dark:bg-blue-950/20">
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Key Learnings & Growth
            </h4>
            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mastered complex MongoDB schema design with fleet-scoped access patterns and binary UUID indexing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Built real-time data pipelines with SignalR WebSockets handling thousands of concurrent connections</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Integrated Python analytics runtime with React UI for seamless cross-language data flow</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Designed enterprise-grade RBAC with multi-tenant resource isolation and role-based filtering</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Collaborated in distributed team using Azure DevOps with structured Epic/Feature/Story hierarchy</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1a2332] via-[#0f1620] to-[#0a0e17] py-16 text-white sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Interested in working together?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Let&apos;s discuss your project and see how I can help build scalable, 
              enterprise-grade solutions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/#contact" variant="primary" withDot>
                Get in touch
              </ButtonLink>
              <ButtonLink href="/work" variant="ghost" className="text-white">
                View more projects
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
