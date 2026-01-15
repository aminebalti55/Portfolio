import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "EasyRHIS — Case Study",
  description:
    "A multi-tenant HR management platform serving major food franchises across France, featuring customizable employee portals and workflow automation.",
};

export default function EasyRHISCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0c10] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_70%_0%,rgba(59,130,246,0.45),transparent_55%),radial-gradient(900px_circle_at_20%_10%,rgba(16,185,129,0.25),transparent_55%)]" />
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

          <div className="mt-8">
            <Badge className="border-white/15 bg-white/10 text-white">
              Enterprise SaaS
            </Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            EasyRHIS
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A multi-tenant HR management platform powering workforce operations 
            for major food franchises like KFC, Five Guys, and Burger King across 
            France — where each tenant gets a fully customized experience.
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
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Managing HR operations across multiple franchise locations is complex. 
                  Each brand — KFC, Five Guys, Burger King — has unique requirements: 
                  different workflows, branding, and operational processes. Traditional 
                  HR software forced franchises into rigid, one-size-fits-all solutions.
                </p>
                <p>
                  EasyRHIS was built to solve this. A true multi-tenant platform where 
                  each employer gets their own fully customized tenant — complete with 
                  branded themes, tailored functionalities, and specific workflow 
                  configurations. HR managers can deploy custom workflows to employees, 
                  manage schedules, and handle requests seamlessly.
                </p>
                <p>
                  For employees, the experience is equally streamlined. From onboarding 
                  to daily operations, they access a dedicated portal for schedules, 
                  documents, vacation requests, and real-time notifications — all 
                  through an intuitive interface that works on any device.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Timeline
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  8+ months
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Role
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Full-Stack Developer
                </p>
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
                  Clients
                </h4>
                <ul className="mt-2 space-y-1 text-lg text-zinc-900 dark:text-zinc-100">
                  <li>• KFC France</li>
                  <li>• Five Guys</li>
                  <li>• Burger King</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Two Portals, One Ecosystem
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            EasyRHIS operates on a dual-portal system: the HR Management Portal for 
            managers and the Employee Portal for staff — both seamlessly integrated.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Multi-Tenant Architecture",
                description:
                  "Each franchise gets a dedicated tenant with custom branding, themes, and feature configurations — complete isolation with shared infrastructure.",
              },
              {
                title: "Workflow Builder",
                description:
                  "HR managers create custom workflows for any process — vacation requests, sick leave, uniform orders — deployed directly to employee portals.",
              },
              {
                title: "Employee Onboarding",
                description:
                  "New hires complete a guided onboarding flow before accessing their portal. Documents, contracts, and training — all digitized.",
              },
              {
                title: "Real-Time Notifications",
                description:
                  "Employees receive instant updates on schedules, shift changes, and request approvals. No more missed communications.",
              },
              {
                title: "Document Management",
                description:
                  "Centralized access to payslips, contracts, and company documents. Employees view their history; managers distribute at scale.",
              },
              {
                title: "Schedule Management",
                description:
                  "Visual scheduling with real-time updates. Employees see their shifts instantly; managers handle coverage effortlessly.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h4>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HR Portal Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            HR Portal
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Tools for HR Managers
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The management portal gives HR teams complete control over their workforce 
            operations — from employee data to workflow deployment.
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

      {/* Architecture Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Architecture
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Scale
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Microservices",
                description:
                  "Independent services for auth, workflows, notifications, and documents — each scaling independently based on demand.",
              },
              {
                step: "02",
                title: "Multi-Tenancy",
                description:
                  "Schema-per-tenant isolation in PostgreSQL ensures data security while sharing infrastructure for cost efficiency.",
              },
              {
                step: "03",
                title: "AWS Cloud",
                description:
                  "Deployed on AWS with auto-scaling, load balancing, and managed databases for high availability.",
              },
              {
                step: "04",
                title: "Real-Time Sync",
                description:
                  "WebSocket connections keep employees and managers in sync — schedule changes appear instantly.",
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

      {/* Results Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Impact
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Powering France&apos;s Food Industry
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            EasyRHIS has transformed HR operations for major franchises, 
            reducing administrative overhead and improving employee satisfaction.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "3+", label: "Major Brands" },
              { value: "1000+", label: "Employees Managed" },
              { value: "60%", label: "Less Admin Time" },
              { value: "100%", label: "Digital Onboarding" },
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
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a0c10] py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Interested in working together?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Let&apos;s discuss your project and see how I can help bring your
              ideas to life.
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
