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
  title: "Cassandra — Case Study",
  description:
    "A private health-organisation workspace for symptom notes, medical documents, medications, and appointment preparation.",
};

export default function CassandraCaseStudy() {
  return (
    <main className="case-detail min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0814] text-white">
        <div className="absolute inset-0 project-hero-orbs--cassandra" />
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/40 bg-violet-400/15 px-3 py-1 text-xs font-medium text-violet-300">
              Personal product
            </span>
            <Badge className="border-white/15 bg-white/10 text-white">2025 · Solo build</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Health Tech</Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Cassandra
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A private health-organisation workspace for documenting symptoms,
            keeping medical records together, tracking medications, and preparing
            a concise brief before an appointment.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Next.js 14
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              TypeScript
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Supabase
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              React-PDF
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Stripe
            </span>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/cassandra/herosection.png"
              alt="Cassandra Platform Overview"
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
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Health information is often split between memory, phone notes,
                  downloaded files, and different provider portals. When an appointment
                  is short, reconstructing a useful timeline becomes another task for
                  the patient.
                </p>
                <p>
                  Cassandra explores a patient-owned workspace for that preparation.
                  Notes, symptoms, medications, providers, and files can be organised
                  around a timeline and assembled into a deliberate pre-visit summary.
                </p>
                <p>
                  The product does not diagnose, interpret results, or replace clinical
                  advice. Its job is narrower: help a person organise their own record,
                  decide what to share, and arrive with the questions and context they
                  do not want to forget.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Timeline
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Ongoing Development
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Role
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Full-Stack Developer & Designer
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Tech Stack
                </h4>
                <ul className="mt-2 space-y-1 text-lg text-zinc-900 dark:text-zinc-100">
                  <li>• Next.js 14 + App Router</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Supabase (Auth, DB, Storage)</li>
                  <li>• React-PDF</li>
                  <li>• Stripe Integration</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Classification
                </h4>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  General Wellness Application (EU MDR Recital 19 & FDA compliant)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Brand Story Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Brand Story
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why the name Cassandra
          </h3>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              In Greek mythology, Cassandra was a Trojan priestess cursed by Apollo to 
              always speak the truth, but never be believed. She warned Troy about the 
              wooden horse. No one listened. The city fell.
            </p>
            <p>
              The name became a prompt for the product question: how can software help
              a person communicate a long, messy history without pretending to decide
              what that history means?
            </p>
            <p className="text-xl font-medium text-violet-600 dark:text-violet-400">
              Organise the record. Keep interpretation with the clinician.
            </p>
            <p>
              Cassandra keeps notes, measurements, documents, and questions under the
              user&apos;s control. The output is a clearer brief for a conversation, not
              evidence of a diagnosis.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "User-owned record",
                description: "The person decides what to capture, retain, and share.",
              },
              {
                title: "Deliberate sharing",
                description: "A brief or document leaves the workspace only through an explicit action.",
              },
              {
                title: "No diagnosis layer",
                description: "The product organises information without making a clinical interpretation.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {value.title}
                </h4>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="dark"
        eyebrow="Care model"
        title="Turn a scattered health history into a usable record."
        intro="Cassandra is organized around the moments when personal context usually gets lost: noticing a change, preparing to explain it, finding the right document, and following a care routine over time."
        accent="#efb0ff"
        background="linear-gradient(145deg, #130c21 0%, #32204a 58%, #171024 100%)"
        items={[
          {
            step: "01",
            label: "Observe",
            title: "Symptom journal",
            description:
              "Timestamped notes, severity, and body context give users a consistent way to capture what changed and when.",
          },
          {
            step: "02",
            label: "Prepare",
            title: "Appointment brief",
            description:
              "Relevant observations become a concise visit summary so the conversation can start with context instead of recall under pressure.",
          },
          {
            step: "03",
            label: "Organize",
            title: "Document wallet",
            description:
              "Prescriptions, results, insurance details, and provider records stay grouped around the person—not scattered by file type.",
          },
          {
            step: "04",
            label: "Continue",
            title: "Care routine",
            description:
              "Medication, condition, and measurement tracking supports continuity between appointments without presenting itself as diagnosis.",
          },
        ]}
      />

      {/* Health Journal Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Health Journal
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Document Your Journey
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Visual body mapping, symptom tracking, and pattern recognition — all 
            designed to help you spot connections your doctor might miss.
          </p>

          {/* Health Journal Images */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/cassandra/dashboard.png"
              alt="Cassandra Health Journal Dashboard"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/today_condition.png"
                alt="Today's Condition Tracking"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/peakflowtracker.png"
                alt="Peak Flow Tracker"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Appointment Prep Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Appointment Prep Pack
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Turn notes into a visit brief
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Select the relevant dates, edit the questions and priorities, and export a
            concise document for the appointment or for deliberate pre-visit sharing.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/cassandra/section3.png"
              alt="Appointment Prep Pack"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Select Date Range",
                description: "Choose which journal entries to include in your summary.",
              },
              {
                step: "02",
                title: "Review & Customize",
                description: "Add questions, highlight priorities, edit what to share.",
              },
              {
                step: "03",
                title: "Generate PDF",
                description: "Create a clean, professional document ready to share.",
              },
              {
                step: "04",
                title: "Share Pre-Visit",
                description: "Email, fax, or create a shareable link for your doctor.",
              },
            ].map((step) => (
              <div key={step.step}>
                <span className="text-5xl font-black text-zinc-200 dark:text-zinc-800">
                  {step.step}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {step.title}
                </h4>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Document Wallet & Medications */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Document Management
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Records grouped around the person
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Store prescriptions, lab results, insurance cards, and medical records 
            securely. Track medications and manage your healthcare providers.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/learn.png"
                alt="Health Education Resources"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/mymedication_asthma.png"
                alt="Medication Tracking"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Features Showcase */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Supporting context
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Weather, patterns, and dashboard views
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Environmental context and dashboard views help organise observations. They
            are presented as context, not as medical conclusions.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/liveweather.png"
                alt="Live Weather & Environmental Tracking"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/dashboard2.png"
                alt="Detailed Health Dashboard"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/section1.png"
                alt="Feature Section"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/section2.png"
                alt="Feature Section"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/cassandra/section4.png"
                alt="Feature Section"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/cassandra/section5.png"
              alt="Complete Platform Overview"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/cassandra/section6.png"
              alt="Platform Features"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="light"
        eyebrow="Product boundaries"
        title="Helpful organization without pretending to be a clinician."
        intro="The system separates private records, presentation logic, and educational content. Its role is to help users organize and communicate their own information—not interpret it or make medical decisions."
        accent="#7540a8"
        image={{
          src: "/images/projects/cassandra/dashboard2.png",
          alt: "Cassandra personal health organization dashboard",
        }}
        items={[
          {
            step: "01",
            label: "Access",
            title: "Authenticated workspace",
            description:
              "Private journals and documents live behind account ownership rules rather than public or shared-by-default records.",
          },
          {
            step: "02",
            label: "Storage",
            title: "Structured health records",
            description:
              "Notes, measurements, providers, and files use separate models that can be assembled into a timeline when needed.",
          },
          {
            step: "03",
            label: "Safety",
            title: "No diagnostic layer",
            description:
              "The interface summarizes user-entered facts and trusted resources without generating diagnoses or treatment advice.",
          },
          {
            step: "04",
            label: "Control",
            title: "User-led sharing",
            description:
              "Appointment briefs are created for deliberate sharing, keeping the user in control of what leaves the workspace.",
          },
        ]}
      />

      {/* Impact Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Product boundaries
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Useful without pretending to be a clinician
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The product is designed around four promises that can be inspected in the
            interface rather than broad claims about health outcomes.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Private", label: "Personal workspace" },
              { value: "Explicit", label: "Sharing actions" },
              { value: "No diagnosis", label: "Organisation only" },
              { value: "Portable", label: "Visit brief export" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-3xl font-bold text-violet-600">{stat.value}</p>
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
                Design choices behind the build
              </h2>
            </div>
            <div className="space-y-8 lg:col-span-8">
              {[
                {
                  challenge: "Document wallet for medical files",
                  solution:
                    "Encrypted upload + tag system (lab result, prescription, scan, insurance) with quick-access cards for upcoming appointments. Files live in Supabase storage with row-level security so each user only sees their own.",
                  impact:
                    "Files remain grouped and searchable instead of depending on the original download location.",
                },
                {
                  challenge: "Appointment-prep notes",
                  solution:
                    "Pre-visit note template (current symptoms, questions, recent changes, medications taken) that the patient fills out and can show on-screen during the visit.",
                  impact:
                    "The user can keep the questions and recent changes they want to discuss in one deliberate view.",
                },
                {
                  challenge: "Sharing controls without exposing everything",
                  solution:
                    "Per-document share links with expiry + access logs (who viewed, when). No \"share my whole account\" button — granularity by design.",
                  impact:
                    "A user can share a specific item for a limited period without exposing the rest of the workspace.",
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
            Building a consumer health product?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            I take on senior contract work for consumer products where
            sensitive data, sharing controls, and audit trails matter.
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
