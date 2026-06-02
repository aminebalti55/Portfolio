import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL, person } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hire a Freelance Full-Stack SaaS Developer",
  description:
    "Hire Med Amine Balti, a senior freelance full-stack developer who ships production SaaS, internal tools, and AI workflows end to end with Next.js, NestJS, and PostgreSQL. Remote across EU and US time zones, MVPs in about 6 weeks.",
  alternates: { canonical: `${SITE_URL}/hire` },
  openGraph: {
    title: "Hire a Freelance Full-Stack SaaS Developer — Med Amine Balti",
    description:
      "Senior freelance full-stack engineer for production SaaS, internal tools, and AI workflows. Remote, EU/US time zones, fast MVP delivery.",
    url: `${SITE_URL}/hire`,
  },
};

const offerings = [
  {
    icon: "layout" as const,
    title: "SaaS Platforms",
    description:
      "Multi-tenant products with authentication, subscriptions, and Stripe billing, built to scale from MVP to production.",
  },
  {
    icon: "spark" as const,
    title: "Internal Tools & Dashboards",
    description:
      "Admin panels, ops tooling, and data-heavy dashboards that turn manual workflows into reliable software.",
  },
  {
    icon: "compass" as const,
    title: "AI Workflows & Automation",
    description:
      "LLM-powered features, scrapers, and automated pipelines that do real work, integrated cleanly into your product.",
  },
  {
    icon: "users" as const,
    title: "APIs & Backend Engineering",
    description:
      "REST APIs, real-time WebSockets, and robust backends on NestJS, Spring Boot, and PostgreSQL.",
  },
];

const audience = [
  {
    title: "Founders who need an MVP fast",
    description:
      "You have an idea and need a working, production-grade product in weeks, not a quote for a six-month agency contract.",
  },
  {
    title: "Teams needing senior overflow",
    description:
      "You have a roadmap and not enough senior hands. I plug in, own a slice end to end, and ship it.",
  },
  {
    title: "Products that need a rescue",
    description:
      "A stalled build, a flaky backend, or a feature nobody can finish, scoped, fixed, and shipped on a fixed price.",
  },
];

const steps = [
  {
    n: "01",
    title: "20-minute scoping call",
    description:
      "We talk through what you're building. You leave with a clear, honest read on what's realistic.",
  },
  {
    n: "02",
    title: "Fixed scope and timeline",
    description:
      "I come back with a concrete scope I can ship in the first sprint, with a price and a date.",
  },
  {
    n: "03",
    title: "Weekly shipping",
    description:
      "You see working software every week, not status decks. Tight feedback loops, no surprises.",
  },
  {
    n: "04",
    title: "Launch and handover",
    description:
      "We ship to production and you get 100% of the code, clean and documented. It's yours.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "NestJS",
  "Node.js",
  "Spring Boot",
  "PostgreSQL",
  "Supabase",
  "Stripe",
  "WebSockets",
  "Playwright",
];

const proof = [
  {
    slug: "autoally",
    category: "Marketplace Platform",
    title: "AutoAlly",
    description:
      "Car marketplace with real-time messaging, secure escrow payments, and KYC verification (Spring Boot + Next.js).",
  },
  {
    slug: "pulse",
    category: "Lead-Prospecting Platform",
    title: "Pulse",
    description:
      "12-source scraper engine, 4-stage SMTP email verification, and a sequence outreach engine, built end to end.",
  },
  {
    slug: "invoicebirds",
    category: "Full-Stack SaaS",
    title: "InvoiceBirds",
    description:
      "Invoicing and business-management SaaS with Stripe checkout, multi-currency billing, and automated reminders.",
  },
];

const faqs = [
  {
    q: "How do I hire you?",
    a: "Book a 20-minute scoping call. We talk through your project, and I follow up with a concrete scope, timeline, and fixed price I can start on right away.",
  },
  {
    q: "What does it cost to hire a freelance full-stack developer like you?",
    a: "My rate is $55 to $75 per hour depending on scope, with fixed-scope pricing for well-defined builds and rescues. You work directly with one senior engineer, so there's no agency markup.",
  },
  {
    q: "How fast can you deliver?",
    a: "A production SaaS MVP typically ships in about 6 weeks, and internal tools in 2 to 3 weeks. Smaller rescues and features are scoped individually.",
  },
  {
    q: "Do you work with international clients and remote teams?",
    a: "Yes. I work fully remote from Tunisia and collaborate across European and US time zones, with reliable overlap and 24 to 48 hour response times.",
  },
  {
    q: "Will I own the code?",
    a: "Completely. You get 100% ownership of clean, documented code in your own repository. No lock-in, no proprietary black boxes.",
  },
  {
    q: "What if I only need part of a build or a rescue?",
    a: "That works. I take on full builds, single features, backend rescues, and overflow capacity for existing teams, all on a clearly defined, fixed scope.",
  },
];

export default function HirePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/hire#service`,
    name: "Hire a Freelance Full-Stack SaaS Developer",
    serviceType: person.serviceTypes,
    url: `${SITE_URL}/hire`,
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: [
      "Worldwide",
      "European Union",
      "United States",
      "United Kingdom",
      "Tunisia",
    ],
    description:
      "Freelance and contract full-stack engineering by Med Amine Balti: production SaaS, internal tools, AI workflows, marketplaces, and backend systems, shipped end to end.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "55-75",
        priceCurrency: "USD",
        unitText: "HOUR",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0506] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_20%_120%,rgba(255,77,31,0.45),transparent_55%),radial-gradient(900px_circle_at_90%_10%,rgba(255,0,92,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/25 to-black/55" />

        <SiteHeader />

        <Container className="relative pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Freelance Full-Stack Engineering
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Hire a Freelance Full-Stack SaaS Developer
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              I&apos;m {person.name}, a senior full-stack engineer. I take SaaS
              products, internal tools, and AI workflows from idea to
              production, one engineer who owns the frontend, API, database,
              and deployment, without agency overhead.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#contact" variant="primary" withDot>
                Book a 20-min call
              </Button>
              <Button href="/work" variant="ghost">
                See case studies
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-white/70">
              {[
                "Remote · EU & US time zones",
                "$55–75/hr",
                "MVP in ~6 weeks",
                "You own 100% of the code",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── What I build ───────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              What I build
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              End-to-end product engineering, without the agency
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {offerings.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:hover:border-white/20 dark:hover:bg-zinc-900/60">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950/5 dark:bg-white/10">
                    <Icon name={item.icon} className="text-zinc-950 dark:text-zinc-50" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Who it's for ───────────────────────────────────────────── */}
      <section className="border-t border-black/5 bg-zinc-50 py-16 sm:py-20 dark:border-white/5 dark:bg-zinc-900/30">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Who it&apos;s for
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              A fit if you need senior execution, fast
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {audience.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-950">
                  <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── How it works ───────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              How it works
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              From first call to shipped, in four steps
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <div className="h-full">
                  <span className="text-4xl font-black text-zinc-200 dark:text-zinc-800">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-zinc-950 dark:text-zinc-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Pricing + stack */}
          <Reveal>
            <div className="mt-14 grid gap-6 rounded-3xl border border-black/10 bg-zinc-50 p-8 sm:grid-cols-2 dark:border-white/10 dark:bg-zinc-900/40">
              <div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Timelines &amp; pricing
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  <li>SaaS MVP, around 6 weeks</li>
                  <li>Internal tools, 2 to 3 weeks</li>
                  <li>Backend or feature rescues, fixed scope</li>
                  <li>$55 to $75 per hour, fixed-scope available</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Core stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Proof ──────────────────────────────────────────────────── */}
      <section className="border-t border-black/5 bg-zinc-50 py-16 sm:py-20 dark:border-white/5 dark:bg-zinc-900/30">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  Proof
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                  Recent production work
                </h2>
              </div>
              <Button href="/work" variant="secondary" className="hidden sm:inline-flex">
                All work →
              </Button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {proof.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.05}>
                <Link
                  href={`/work/${item.slug}`}
                  className="group block h-full rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20 dark:border-white/10 dark:bg-zinc-950 dark:hover:border-white/20"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors group-hover:text-[#ff5500]">
                    View case study
                    <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section
        className="bg-white py-16 sm:py-20 dark:bg-zinc-950"
        aria-labelledby="hire-faq-heading"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff5500]">
                  FAQ
                </p>
                <h2
                  id="hire-faq-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50"
                >
                  Hiring questions, answered
                </h2>
              </div>

              <div className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
                {faqs.map((item) => (
                  <details key={item.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-zinc-900 transition-colors hover:text-[#ff5500] dark:text-zinc-100">
                      {item.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-transform duration-300 group-open:rotate-45 dark:border-zinc-700 dark:text-zinc-400">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 pr-11 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0506] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_20%_120%,rgba(255,77,31,0.45),transparent_55%),radial-gradient(900px_circle_at_90%_10%,rgba(255,0,92,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/25 to-black/55" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to build it?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/75">
              Book a 20-minute scoping call and you&apos;ll leave with a clear,
              honest plan, whether or not you hire me.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href="/#contact" variant="primary" withDot>
                Book a 20-min call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
