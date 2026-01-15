import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "InvoiceBirds — Case Study",
  description:
    "A simple yet powerful invoicing platform built for small businesses who need essential features without the complexity.",
};

export default function InvoiceBirdsCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#080406] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_70%_0%,rgba(255,77,31,0.55),transparent_55%),radial-gradient(900px_circle_at_20%_10%,rgba(255,0,92,0.25),transparent_55%)]" />
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
              Full-Stack Development
            </Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            InvoiceBirds
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Born from a real need — small businesses wanted a simple, intuitive way 
            to manage their invoices without the bloat. InvoiceBirds delivers 
            essential features enhanced with smart automation, making invoicing 
            effortless for entrepreneurs and freelancers.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Next.js
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              NestJS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Next.js API Routes
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Supabase
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
              src="/images/projects/invoicebirds/invoicebirds-01-hero.png"
              alt="InvoiceBirds Hero"
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
                  Small business owners were frustrated. The invoicing tools on the market 
                  were either overly complicated enterprise solutions with steep learning 
                  curves, or bare-bones apps that lacked the features they actually needed. 
                  They wanted something in between — simple enough to use right away, but 
                  powerful enough to grow with their business.
                </p>
                <p>
                  InvoiceBirds was born from this exact need. The goal was clear: build an 
                  invoicing platform that feels effortless from day one, while packing in 
                  enhanced features like automated payment reminders, multi-currency support, 
                  and real-time analytics — all without overwhelming the user.
                </p>
                <p>
                  The result is a tool that small businesses actually enjoy using. No 
                  training required, no hidden complexity — just straightforward invoicing 
                  that saves time and gets you paid faster.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Timeline
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  3 months
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
                  <li>• Next.js + API Routes</li>
                  <li>• NestJS Backend</li>
                  <li>• Tailwind CSS</li>
                  <li>• Supabase (Database)</li>
                  <li>• Stripe (Payments)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Deliverables
                </h4>
                <ul className="mt-2 space-y-1 text-lg text-zinc-900 dark:text-zinc-100">
                  <li>• SaaS Web Application</li>
                  <li>• RESTful API</li>
                  <li>• Payment Integration</li>
                  <li>• Client Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple by Design, Powerful When Needed
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Every feature was carefully chosen based on what small businesses actually use daily. 
            No feature bloat — just the essentials, enhanced with smart automation.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "One-Click Invoicing",
                description:
                  "Create professional invoices in under 30 seconds. Pre-filled templates, automatic tax calculations, and instant PDF generation.",
              },
              {
                title: "Get Paid Faster",
                description:
                  "Integrated Stripe payments let clients pay directly from the invoice. Automated reminders ensure you never chase payments again.",
              },
              {
                title: "Real-Time Dashboard",
                description:
                  "See your business health at a glance — outstanding invoices, monthly revenue, and payment trends all in one place.",
              },
              {
                title: "Client Management",
                description:
                  "Keep all your client information organized. View payment history, send bulk invoices, and maintain professional relationships.",
              },
              {
                title: "Multi-Currency",
                description:
                  "Work with international clients effortlessly. Automatic exchange rates and localized invoice formatting.",
              },
              {
                title: "Expense Tracking",
                description:
                  "Log business expenses alongside your income. Generate profit reports and stay tax-ready year-round.",
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

      {/* Image Gallery Placeholder 1 */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Design
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Designed for Clarity
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The interface prioritizes clarity over complexity. Every screen was designed 
            with one question in mind: &quot;Can a first-time user complete this task without help?&quot;
          </p>

          {/* Features Overview Image */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/invoicebirds/invoicebirds-01-hero.png"
              alt="InvoiceBirds Hero"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          {/* Two Column Images */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Invoice Creation */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/invoicebirds/invoicecreation.png"
                alt="InvoiceBirds Invoice Creation"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>

            {/* Expenses Dashboard */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/invoicebirds/expenses.png"
                alt="InvoiceBirds Expenses Dashboard"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Process
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Building the Right Thing, the Right Way
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Interviewed 20+ small business owners to understand their daily invoicing frustrations and must-have features.",
              },
              {
                step: "02",
                title: "Architecture",
                description:
                  "Designed a scalable architecture with Next.js frontend, NestJS API, and Supabase for real-time data sync.",
              },
              {
                step: "03",
                title: "Build & Iterate",
                description:
                  "Shipped MVP in 6 weeks. Continuous user feedback shaped each iteration, focusing on speed and simplicity.",
              },
              {
                step: "04",
                title: "Launch & Scale",
                description:
                  "Soft launch to beta users, refined based on real usage patterns, then public release with Stripe integration.",
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

      {/* More Images Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Showcase
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Product in Action
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From dashboard to invoice creation — every interaction was optimized for speed and clarity.
          </p>

          {/* Full Dashboard View */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/invoicebirds/dashboard.png"
              alt="InvoiceBirds Full Dashboard"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          {/* Three Column Mobile Views */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* Mobile View 1 */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/invoicebirds/mobileview1.png"
                alt="InvoiceBirds Mobile View 1"
                width={600}
                height={800}
                className="h-auto w-full"
              />
            </div>

            {/* Mobile View 2 */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/invoicebirds/mobileview2.png"
                alt="InvoiceBirds Mobile View 2"
                width={600}
                height={800}
                className="h-auto w-full"
              />
            </div>

            {/* Mobile View 3 */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/invoicebirds/mobileview3.png"
                alt="InvoiceBirds Mobile View 3"
                width={600}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Results
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Measurable Impact
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The numbers speak for themselves — InvoiceBirds is helping small businesses 
            get paid faster and spend less time on admin work.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500+", label: "Active Businesses" },
              { value: "10K+", label: "Invoices Sent" },
              { value: "45%", label: "Faster Payments" },
              { value: "$2M+", label: "Processed via Stripe" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-4xl font-bold text-[#ff5500]">{stat.value}</p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[#080406] py-16 sm:py-20">
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
