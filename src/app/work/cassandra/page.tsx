import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Cassandra — Case Study",
  description:
    "A personal health organization platform helping people document their health journey, prepare for doctor visits, and finally be believed.",
};

export default function CassandraCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0814] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_70%_0%,rgba(139,92,246,0.45),transparent_55%),radial-gradient(900px_circle_at_20%_10%,rgba(59,130,246,0.25),transparent_55%)]" />
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
              Health Tech
            </Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Cassandra
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A personal health organization platform that helps people document 
            their symptoms, organize medical records, and prepare for doctor 
            appointments — so they can finally be heard and believed.
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
                  Millions of people experience a modern healthcare crisis: they know 
                  something is wrong with their bodies, but when they walk into a 
                  doctor&apos;s office with only 15 minutes, scattered memories, and no 
                  organized documentation — their concerns get dismissed. They&apos;re told 
                  it&apos;s &quot;just anxiety,&quot; that they&apos;re &quot;overthinking it,&quot; 
                  or that &quot;the tests look fine.&quot;
                </p>
                <p>
                  Cassandra was born from this exact problem. Named after the Greek 
                  mythological figure cursed to speak the truth but never be believed, 
                  the platform transforms scattered symptoms into organized evidence, 
                  forgotten details into documented history, and dismissed patients 
                  into prepared advocates.
                </p>
                <p>
                  The solution isn&apos;t just another health app with streaks and 
                  gamification. It&apos;s a serious tool for serious needs: a personal 
                  health journal with body mapping, a document wallet for medical 
                  records, a medication tracker, and most importantly — an Appointment 
                  Prep Pack that turns months of observations into a clear, 
                  professional summary doctors can&apos;t ignore.
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
            &quot;Finally Believed.&quot;
          </h3>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              In Greek mythology, Cassandra was a Trojan priestess cursed by Apollo to 
              always speak the truth, but never be believed. She warned Troy about the 
              wooden horse. No one listened. The city fell.
            </p>
            <p>
              For millions of people, that curse is real. They know something is wrong. 
              They tell their doctors. They describe their symptoms. And they&apos;re 
              dismissed — repeatedly.
            </p>
            <p className="text-xl font-medium text-violet-600 dark:text-violet-400">
              Cassandra is the cure to that curse.
            </p>
            <p>
              We organize health truth — symptoms, patterns, documents, stories — so 
              that when you walk into a doctor&apos;s office, you have evidence. You have 
              proof. You have something they can&apos;t dismiss.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "We Believe You",
                description: "Your symptoms are real. Your experience matters. No gaslighting.",
              },
              {
                title: "You Own Your Data",
                description: "Your health information belongs to you. Full control. Full privacy.",
              },
              {
                title: "Evidence Over Opinion",
                description: "Organized data speaks louder than scattered complaints.",
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

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Organize Your Health Truth
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Every feature was designed with one goal: help you be heard and believed 
            by healthcare providers.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personal Health Journal",
                description:
                  "Document symptoms with body mapping, severity ratings, and timestamped notes. See patterns emerge over time.",
              },
              {
                title: "Appointment Prep Pack",
                description:
                  "Generate professional summaries of your health observations to share with doctors before appointments.",
              },
              {
                title: "Document Wallet",
                description:
                  "Store prescriptions, lab results, insurance cards, and medical records in one secure, organized place.",
              },
              {
                title: "Medication Tracking",
                description:
                  "Keep track of current medications, dosages, and schedules. Get refill reminders and cost tracking.",
              },
              {
                title: "Provider Management",
                description:
                  "Organize your healthcare team — doctors, specialists, pharmacies — with contact info and visit history.",
              },
              {
                title: "Health Education",
                description:
                  "Access trusted health information from reputable sources. No AI interpretation, just reliable resources.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
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
            Be Prepared, Be Heard
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Transform months of journal entries into a professional summary. Share it 
            with your doctor before the appointment so they can review your concerns 
            ahead of time.
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
            Everything in One Place
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
            Smart Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Health Management
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From environmental tracking to detailed dashboards — Cassandra provides 
            all the tools you need to understand your health.
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

      {/* Architecture & Privacy */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Privacy & Security
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Data, Your Control
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "End-to-End Encryption",
                description:
                  "All health documents encrypted at rest and in transit. Military-grade security standards.",
              },
              {
                step: "02",
                title: "Full Data Ownership",
                description:
                  "Your health information belongs to you. Export everything. Delete anytime.",
              },
              {
                step: "03",
                title: "No AI Interpretation",
                description:
                  "We organize and present your data. We never diagnose or interpret medical information.",
              },
              {
                step: "04",
                title: "GDPR & HIPAA Aligned",
                description:
                  "Built with privacy regulations in mind. Transparent data handling policies.",
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

      {/* Impact Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Impact
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Building Trust in Healthcare
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Cassandra is changing how people prepare for medical appointments — 
            turning anxiety into confidence, confusion into clarity.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Healthcare", label: "Empowerment" },
              { value: "Privacy", label: "First Design" },
              { value: "No AI", label: "Interpretation" },
              { value: "Full", label: "Data Control" },
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

      {/* CTA Section */}
      <section className="bg-[#0a0814] py-16 sm:py-20">
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
