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
  title: "Atlas — Case Study",
  description:
    "A personal finance workspace for expenses, income, recurring payments, savings goals, and month-by-month review.",
};

export default function AtlasCaseStudy() {
  return (
    <main className="case-detail min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1628] text-white">
        <div className="absolute inset-0 project-hero-orbs--atlas" />
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
            <LivePill href="https://atlas-wealth-app.netlify.app/" />
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Atlas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A personal finance workspace I built for my own money triage: capture
            expenses quickly, keep recurring payments visible, follow savings goals,
            and review income against spending without maintaining a spreadsheet.
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
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  My own finance tracking was split between statements, notes, and a
                  spreadsheet I updated too late. The problem was less about advanced
                  budgeting and more about making daily capture easy enough to keep the
                  month accurate.
                </p>
                <p>
                  Atlas brings expenses, income, categories, savings goals, and recurring
                  payments into one small workspace. Quick entry is intentionally simple;
                  the heavier analysis stays in monthly and category views where it is
                  useful.
                </p>
                <p>
                  This was an independent product and a practical design exercise: test
                  whether fast capture, visible recurring costs, and progress-led feedback
                  could make a personal tool worth reopening after the first week.
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

      <CaseStudySystemSection
        variant="dark"
        eyebrow="Money model"
        title="Every movement needs context."
        intro="Atlas turns scattered transactions into a readable financial system: capture what changed, plan what comes next, and make progress visible without turning personal finance into accounting software."
        accent="#69d7a3"
        background="linear-gradient(145deg, #071522 0%, #102d3a 58%, #0a1d2a 100%)"
        items={[
          {
            step: "01",
            label: "Capture",
            title: "Transaction layer",
            description:
              "Expenses and income share one consistent record model with categories, notes, dates, and an audit-friendly history.",
          },
          {
            step: "02",
            label: "Plan",
            title: "Budget layer",
            description:
              "Category limits translate monthly intent into something users can check against real spending as it happens.",
          },
          {
            step: "03",
            label: "Progress",
            title: "Goal layer",
            description:
              "Savings targets connect contributions to a clear destination, with progress that stays understandable at a glance.",
          },
          {
            step: "04",
            label: "Understand",
            title: "Reporting layer",
            description:
              "Trends and comparisons surface the decisions behind the numbers instead of filling the dashboard with decorative charts.",
          },
        ]}
      />

      {/* Dashboard Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Reports & Analytics
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Understand Your Financial Patterns
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Compare spending, income, and categories across the month without turning
            the dashboard into an accounting suite.
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

      <CaseStudySystemSection
        variant="light"
        eyebrow="System architecture"
        title="Simple on the surface. Structured underneath."
        intro="The build keeps financial records, access, visualization, and interface concerns separate so new money workflows can grow without making the product harder to reason about."
        accent="#0b7355"
        image={{
          src: "/images/projects/Atlas/dashboard.png",
          alt: "Atlas financial dashboard and reporting interface",
        }}
        items={[
          {
            step: "01",
            label: "Interface",
            title: "React workspace",
            description:
              "Reusable financial primitives keep transaction entry, filters, summaries, and goal views consistent across the product.",
          },
          {
            step: "02",
            label: "Data",
            title: "Supabase foundation",
            description:
              "PostgreSQL-backed records and authenticated ownership rules keep each user’s financial data isolated and queryable.",
          },
          {
            step: "03",
            label: "Reporting",
            title: "Derived insight layer",
            description:
              "Chart.js consumes normalized totals so every visual is tied back to the same transaction source of truth.",
          },
          {
            step: "04",
            label: "Design",
            title: "Tailwind system",
            description:
              "A compact token-led UI keeps dense financial information readable across dashboard and mobile breakpoints.",
          },
        ]}
      />

      {/* Impact Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Working scope
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The loop the product needed
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Capture the transaction, understand the month, and decide what to change.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Capture", label: "Expenses and income" },
              { value: "Review", label: "Categories and monthly totals" },
              { value: "Plan", label: "Savings goal progress" },
              { value: "Remember", label: "Recurring payments" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-3xl font-bold text-[#ff5500]">{stat.value}</p>
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
                  challenge: "Quick add without opening a long form",
                  solution:
                    "Single-input quick-add with smart parsing (e.g. \"12.50 lunch\" → amount + auto-categorised). Default category from history. Submit on Enter. The whole flow lives behind one keystroke.",
                  impact:
                    "The shortest path handles the routine entry; full editing remains available for exceptions.",
                },
                {
                  challenge: "Smart categorisation that learns from history",
                  solution:
                    "Simple frequency table per merchant string + fallback to keyword rules. Wrong category = one tap to correct, which updates the rule. No heavy ML model required.",
                  impact:
                    "Corrections improve future suggestions without introducing a separate machine-learning service.",
                },
                {
                  challenge: "Progress without turning the dashboard into a warning screen",
                  solution:
                    "Savings progress and month context lead the hierarchy. Warning colours are reserved for information that actually requires attention.",
                  impact:
                    "The dashboard supports review and planning instead of treating every visit as a failure state.",
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
            Building a consumer app?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            I take on senior contract work for consumer-facing products
            where UX details and daily-engagement design matter.
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
