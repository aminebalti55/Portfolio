import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Atlas — Case Study",
  description:
    "A comprehensive personal finance management app with expense tracking, income management, savings goals, and detailed financial reports.",
};

export default function AtlasCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1628] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_70%_0%,rgba(16,185,129,0.45),transparent_55%),radial-gradient(900px_circle_at_20%_10%,rgba(34,197,94,0.25),transparent_55%)]" />
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
              Personal Finance
            </Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Atlas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A comprehensive personal finance management application that helps users 
            take control of their money with expense tracking, income management, 
            savings goals, recurring expense monitoring, and detailed financial reports.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              React
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Supabase
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              PostgreSQL
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Chart.js
            </span>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/Atlas/hero.png"
              alt="Atlas Finance App Overview"
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
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Managing personal finances is overwhelming. People struggle to track 
                  where their money goes, savings goals feel impossible to reach, 
                  recurring subscriptions drain accounts unnoticed, and budgeting apps 
                  are either too complicated or too simplistic to be useful.
                </p>
                <p>
                  Atlas was built to solve this exact problem — a beautiful, intuitive 
                  personal finance app that makes money management effortless. Track 
                  every expense with custom categories, monitor multiple income streams, 
                  set and achieve savings goals with visual progress tracking, and never 
                  miss a recurring payment again.
                </p>
                <p>
                  The app goes beyond basic tracking with comprehensive financial reports 
                  — see spending patterns by category, compare income vs expenses over 
                  time, analyze monthly trends, and get actionable insights to improve 
                  your financial health. All wrapped in a clean, modern interface that 
                  works seamlessly across devices.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Timeline
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  2 months
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
                  <li>• React</li>
                  <li>• Tailwind CSS</li>
                  <li>• Supabase</li>
                  <li>• PostgreSQL</li>
                  <li>• Chart.js</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  App Type
                </h4>
                <p className="mt-2 text-lg text-zinc-900 dark:text-zinc-100">
                  Personal Finance Web App
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Manage Your Money
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            From daily expense tracking to long-term financial planning — all the 
            tools you need in one beautiful interface.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expense Tracking",
                description:
                  "Log expenses instantly with custom categories, tags, and notes. Track where every dollar goes with detailed transaction history.",
              },
              {
                title: "Income Management",
                description:
                  "Monitor multiple income sources — salary, freelance work, investments. See your total earnings and track payment schedules.",
              },
              {
                title: "Savings Goals",
                description:
                  "Set financial targets and watch progress in real-time. Visual indicators show how close you are to reaching each goal.",
              },
              {
                title: "Recurring Expenses",
                description:
                  "Never forget subscriptions or bills again. Track all recurring payments and get notified before they're due.",
              },
              {
                title: "Financial Reports",
                description:
                  "Comprehensive charts and graphs showing spending patterns, income vs expenses, category breakdowns, and monthly trends.",
              },
              {
                title: "Budget Planning",
                description:
                  "Set monthly budgets by category and get alerts when you're approaching limits. Stay on track with visual indicators.",
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

      {/* Dashboard Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Dashboard
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Financial Overview at a Glance
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A clean, intuitive dashboard showing your complete financial picture — 
            balances, recent transactions, and quick actions all in one place.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/Atlas/dashboard.png"
              alt="Atlas Dashboard"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/Atlas/everythinguneed.png"
              alt="All Features Overview"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Financial Management */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Financial Management
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Track Every Dollar
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Detailed views for expenses, income, and savings — helping you understand 
            and control your financial life.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/Atlas/expenses.png"
                alt="Expense Tracking"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/Atlas/income.png"
                alt="Income Management"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/Atlas/saving.png"
              alt="Savings Goals"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Reports & Analytics */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Reports & Analytics
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Understand Your Financial Patterns
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Visualize your spending habits, income trends, and category breakdowns 
            with comprehensive charts and reports.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/Atlas/reports.png"
              alt="Financial Reports"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Technical Stack */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Technical Stack
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Built with Modern Technologies
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "React",
                description:
                  "Component-based architecture for a fast, responsive user interface with smooth interactions.",
              },
              {
                step: "02",
                title: "Supabase",
                description:
                  "Real-time database, authentication, and API — secure backend infrastructure with PostgreSQL.",
              },
              {
                step: "03",
                title: "Tailwind CSS",
                description:
                  "Utility-first styling for a beautiful, consistent design system across all screens.",
              },
              {
                step: "04",
                title: "Chart.js",
                description:
                  "Interactive charts and graphs for visualizing financial data and spending trends.",
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
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Impact
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Take Control of Your Finances
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Atlas makes personal finance management simple, beautiful, and effective.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Complete", label: "Expense Tracking" },
              { value: "Real-Time", label: "Financial Reports" },
              { value: "Savings", label: "Goal Progress" },
              { value: "Recurring", label: "Payment Alerts" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-3xl font-bold text-emerald-600">{stat.value}</p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a1628] py-16 sm:py-20">
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
