import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { CaseStudySystemSection } from "@/components/ui/CaseStudySystemSection";

export const metadata: Metadata = {
  title: "EasyRHIS — Case Study",
  description:
    "Work on a multi-tenant workforce platform for franchise networks across employee records, scheduling, requests, documents, and brand-specific administration.",
};

export default function EasyRHISCaseStudy() {
  return (
    <main className="case-detail min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#14080a] text-white">
        <div className="absolute inset-0 project-hero-orbs--easyrhis" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60" />

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

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge className="border-white/15 bg-white/10 text-white">
              Multi-brand QSR HR platform
            </Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Tunisia · Full-time</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">2024 · 6 months · Spring Boot + Angular</Badge>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-400/40 bg-zinc-400/10 px-3 py-1 text-xs font-medium text-zinc-300">
              Internal product · No public URL
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            EasyRHIS
          </h1>

          <p className="mt-3 text-base text-white/60">
            Multi-brand HR-management SaaS for QSR operators
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Multi-tenant workforce software used across franchise networks in
            France. My work covered Angular and Spring Boot flows for employee
            records, schedules, requests, documents, permissions, and the
            brand-specific configuration behind each employer workspace.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Angular
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Spring Boot
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              PostgreSQL
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              AWS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Material UI
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Microservices
            </span>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/easyrhis/easyrhis.png"
              alt="EasyRHIS Platform Overview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Project Overview */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Workforce operations across franchise networks cannot be reduced to
                  one schedule and one permission model. Each employer needs its own
                  identity, employee records, approval paths, documents, and rules,
                  while the product still has to remain one maintainable system.
                </p>
                <p>
                  EasyRHIS gives each employer a tenant-aware workspace with brand
                  settings, role-specific actions, and configurable workflows. My work
                  covered Angular interfaces and Spring Boot services across employee,
                  scheduling, request, document, and administration flows.
                </p>
                <p>
                  Employees use a dedicated surface for schedules, documents, leave
                  requests, and notifications. Managers use the same underlying model
                  to review work and administer their organisation without crossing a
                  tenant boundary.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Engagement
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  6 months · Full-time
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">2024 · Tunisia</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Role
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">Spring Boot + Angular</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Tech Stack
                </h4>
                <ul className="mt-2 space-y-1 text-lg text-zinc-900 dark:text-zinc-100">
                  <li>• Angular + Material UI</li>
                  <li>• Spring Boot (Java)</li>
                  <li>• PostgreSQL</li>
                  <li>• AWS Infrastructure</li>
                  <li>• Microservices Architecture</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  End-customer brands
                </h4>
                <ul className="mt-2 space-y-1 text-lg text-zinc-900 dark:text-zinc-100">
                  <li>• KFC France</li>
                  <li>• Five Guys</li>
                  <li>• Burger King</li>
                </ul>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                  These QSR brands were tenant-customers of the EasyRHIS platform
                  during my engagement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="dark"
        eyebrow="Tenant model"
        title="One platform. Many operating realities."
        intro="EasyRHIS separates what every employer shares from what each brand must control. The result is one product that can adapt its identity, processes, permissions, and employee experience without becoming a collection of forks."
        accent="#ff7682"
        background="linear-gradient(145deg, #17080b 0%, #6c1721 58%, #240b10 100%)"
        items={[
          {
            step: "01",
            label: "Separate",
            title: "Tenant boundary",
            description:
              "Employer data and settings are resolved through a tenant context so shared infrastructure never means a shared business space.",
          },
          {
            step: "02",
            label: "Adapt",
            title: "Brand configuration",
            description:
              "Themes, terminology, enabled modules, and portal behavior adapt to each franchise network without branching the product.",
          },
          {
            step: "03",
            label: "Operate",
            title: "Workflow engine",
            description:
              "Managers turn HR processes into forms, steps, approvals, and events that can be deployed consistently across sites.",
          },
          {
            step: "04",
            label: "Serve",
            title: "Employee portal",
            description:
              "Schedules, documents, requests, and notifications meet employees in a focused self-service experience across devices.",
          },
        ]}
      />

      {/* HR Portal Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#bd2634]">
            HR Portal
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The manager&apos;s operating view
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Employee records, requests, schedules, and workflow administration live in
            one tenant-scoped management surface.
          </p>

          {/* Dashboard Overview */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/easyrhis/dashbiard.png"
              alt="EasyRHIS HR Dashboard"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          {/* Two Column: Employees & Franchises */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/emloyees.png"
                alt="Employee Management"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/franchises.png"
                alt="Franchise Management"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Workflow Builder Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Workflow Engine
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Build Once, Deploy Everywhere
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The visual workflow builder lets HR teams create custom processes without 
            code. Define steps, approvals, and notifications — then deploy to employees 
            with a single click.
          </p>

          {/* Workflow Builder & Events */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/formbuilder.png"
                alt="Form Builder Interface"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/workflows.png"
                alt="Workflow Management"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Events Modification */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/easyrhis/eventsmodification.png"
              alt="Events and Schedule Modification"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Employee Portal Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Employee Portal
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything Employees Need
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            After completing onboarding, employees access their personalized portal — 
            schedules, documents, requests, and real-time messages all in one place.
          </p>

          {/* Portal Login & Dashboard */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/portal login .png"
                alt="Employee Portal Login"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/employee_portal.png"
                alt="Employee Portal Dashboard"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Mobile Views */}
          <h4 className="mt-16 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Mobile-First Experience
          </h4>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Employees access their portal from any device — optimized for quick 
            schedule checks and request submissions on the go.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/mobileview1.png"
                alt="Mobile View - Schedule"
                width={600}
                height={800}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/mobileview2.png"
                alt="Mobile View - Requests"
                width={600}
                height={800}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/easyrhis/mobileview3.png"
                alt="Mobile View - Documents"
                width={600}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="light"
        eyebrow="Platform architecture"
        title="Configuration at the edge. Discipline at the core."
        intro="The implementation keeps tenant context, domain workflows, data access, and permissions explicit across the stack so configuration can grow without weakening isolation or maintainability."
        accent="#b04417"
        image={{
          src: "/images/projects/easyrhis/dashbiard.png",
          alt: "EasyRHIS multi-tenant HR management dashboard",
        }}
        items={[
          {
            step: "01",
            label: "Frontend",
            title: "Angular portals",
            description:
              "Shared UI foundations support distinct management and employee journeys while tenant configuration supplies the final experience.",
          },
          {
            step: "02",
            label: "Domain",
            title: "Spring Boot services",
            description:
              "Workflows, employees, documents, events, and authentication are handled behind clear service boundaries.",
          },
          {
            step: "03",
            label: "Persistence",
            title: "PostgreSQL tenancy",
            description:
              "Tenant-aware data access makes organisation scope a first-class concern in reads, writes, and administration paths.",
          },
          {
            step: "04",
            label: "Control",
            title: "Role-based access",
            description:
              "Managers, franchise operators, and employees see only the actions and records appropriate to their role and tenant.",
          },
        ]}
      />

      {/* Results Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#bd2634]">
            Product scope
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One system, several operating models
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The work focused on the boundaries a multi-brand workforce product must
            hold in everyday use, without claiming results the product did not measure.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Tenant-aware", label: "Data and permissions" },
              { value: "Brand-led", label: "Identity and configuration" },
              { value: "Role-based", label: "Manager and employee views" },
              { value: "Configurable", label: "Requests and approvals" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-3xl font-bold text-[#bd2634]">{stat.value}</p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engineering Challenges */}
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
              {[
                {
                  challenge: "True multi-tenancy with branded experiences per franchise",
                  solution:
                    "Single shared Postgres with tenant_id column on every table + Spring Security filter that enforces tenant scoping at query time. Theme + workflow config loaded per-tenant on login so each brand sees its own UI.",
                  impact:
                    "One product can present distinct employer experiences while keeping organisation scope explicit in the service layer.",
                },
                {
                  challenge: "Schedule + payroll workflows that vary by brand",
                  solution:
                    "Built a workflow engine where each tenant gets configurable rule sets — shift length limits, OT triggers, vacation accrual rates — loaded from tenant config rather than hardcoded.",
                  impact:
                    "Legitimate employer variation lives in configuration instead of spreading client-specific conditions through the codebase.",
                },
                {
                  challenge: "Document signing + approval chains",
                  solution:
                    "Generic approval-chain primitive + per-document-type chain definitions stored in tenant config (manager → HR → director, configurable per tenant). Signatures captured via inline pad with full audit trail (signer, IP, timestamp).",
                  impact:
                    "Approval steps and signing records follow a visible, tenant-specific path with the actor and time retained for review.",
                },
              ].map((c, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {c.challenge}
                  </h3>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#ff5500]">Solution · </span>
                      {c.solution}
                    </p>
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#ff5500]">Outcome · </span>
                      {c.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="case-study-closing relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,31,0.15),transparent_70%)]" />
        <Container className="relative text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Building multi-tenant SaaS?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            I take on senior contract work for B2B platforms with
            tenant-scoped data, configurable workflows, and brand
            customisation.
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
