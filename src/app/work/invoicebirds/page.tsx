import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { LivePill } from "@/components/ui/LivePill";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CaseStudySystemSection } from "@/components/ui/CaseStudySystemSection";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "InvoiceBirds — Case Study",
  description:
    "A production invoicing and business-management platform spanning billing, payments, documents, expenses, clients, and reporting.",
};

export default function InvoiceBirdsCaseStudy() {
  return (
    <main className="case-detail min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#080406] text-white">
        <div className="absolute inset-0 project-hero-orbs--invoicebirds" />
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
              INVOICEBIRDS LTD
            </Badge>
            <Badge className="border-white/15 bg-white/10 text-white">UK · Remote</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Feb 2025 – Sep 2025 · Contract</Badge>
            <LivePill href="https://www.invoicebirds.com/" />
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            InvoiceBirds
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A production billing workspace for freelancers and small businesses—covering
            document creation, invoice lifecycle, client management, expenses, payments,
            reporting, and the operational details between them.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Next.js
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              NestJS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Next.js API Routes
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Supabase
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
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
              src="/images/projects/invoicebirds/live-2026/landing-hero.png"
              alt="InvoiceBirds public landing page showing the invoicing product suite"
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
                Turning financial admin into one workflow
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Small businesses often split invoices, payments, client records, expenses,
                  and reporting across several tools. Every handoff adds another place for a
                  document state, balance, or customer detail to drift out of sync.
                </p>
                <p>
                  InvoiceBirds brings those jobs into a single operating model. A document can
                  move from draft to delivery and payment while the surrounding client and
                  expense context remains close at hand.
                </p>
                <p>
                  My work focused on making that depth feel calm: reusable document controls,
                  clear lifecycle states, consistent navigation, and responsive surfaces that
                  preserve the same workflow away from the desktop.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Timeline
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Feb — Sep 2025
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Role
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Full-Stack Contractor
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

      {/* Product model */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Product model
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One financial thread, not six disconnected tools
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            The interface is organised around three connected jobs. Each can stand alone,
            but the product becomes more useful when information moves cleanly between them.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                index: "01",
                title: "Compose",
                description:
                  "Build invoices and business documents through modular controls with a live visual preview.",
              },
              {
                index: "02",
                title: "Operate",
                description:
                  "Track document status, clients, expenses, and payment activity without losing the surrounding context.",
              },
              {
                index: "03",
                title: "Understand",
                description:
                  "Bring billing and spending into a shared reporting model designed for fast operational decisions.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-[24px] border border-zinc-200 bg-white p-7 shadow-[0_18px_60px_rgba(24,24,27,0.04)] dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-xs font-bold tracking-[0.18em] text-[#ff5500]">
                  {feature.index}
                </span>
                <h4 className="mt-12 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h4>
                <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product surfaces */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Product surfaces
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One system, multiple financial jobs
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            These are current product screens, not presentation mockups. The captions follow
            the work visible in each surface and explain how the product is structured.
          </p>

          <figure className="mt-12 overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-50 shadow-[0_30px_90px_rgba(24,24,27,0.08)] dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/invoicebirds/live-2026/invoice-builder.png"
              alt="InvoiceBirds visual invoice builder with document controls and a live preview"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5500]">Document workspace / 01</p>
              <h4 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                Compose the invoice and its visual system in one place
              </h4>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                Modular controls sit beside a live document preview, keeping content, styling,
                payment options, and export actions inside one focused workspace.
              </p>
            </figcaption>
          </figure>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/invoicebirds/live-2026/invoices.png"
                alt="InvoiceBirds invoice lifecycle with drafts, sent, paid, overdue, search, and export controls"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
              <figcaption className="border-t border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5500]">Invoice lifecycle / 02</p>
                <h4 className="mt-3 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  Every document state remains actionable
                </h4>
                <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                  Search, filters, status groups, exports, and document actions turn the list
                  into a working queue rather than a passive archive.
                </p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/invoicebirds/live-2026/expenses.png"
                alt="InvoiceBirds expense profiles with teams, departments, activity, and category reporting"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
              <figcaption className="border-t border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5500]">Expense operations / 03</p>
                <h4 className="mt-3 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  Spending is organised around how the business works
                </h4>
                <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                  Expense profiles group activity by team, person, department, or project,
                  making the operational model visible without burying it in settings.
                </p>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="dark"
        eyebrow="Billing workflow"
        title="A financial product is a state machine."
        intro="The interface stays calm because document, money, and operational states are explicit underneath it."
        accent="#ff6a2b"
        background="linear-gradient(145deg, #120b08, #2b1109 65%, #120b08)"
        items={[
          { step: "01", label: "Document state", title: "Lifecycle first", description: "Draft, sent, viewed, overdue, paid, and void states define what the user can do next." },
          { step: "02", label: "Money state", title: "Totals stay reproducible", description: "Currency, tax, discount, and payment metadata remain attached to the document that created them." },
          { step: "03", label: "Operating context", title: "Clients and expenses connect", description: "Billing activity sits beside the customer and spending context needed to understand the business." },
          { step: "04", label: "Release discipline", title: "Workflows harden together", description: "Validation, permissions, reconciliation, and failure handling ship with the visible product surface." },
        ]}
      />

      {/* Responsive product */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Responsive product
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The workflow survives the small screen
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Mobile is not a scaled-down poster of the desktop app. Navigation, document
            controls, and list actions are reflowed around the task that matters in the moment.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                src: "/images/projects/invoicebirds/live-2026/landing-mobile.png",
                alt: "InvoiceBirds public product page on mobile",
                label: "Public product",
                title: "A clear route into the platform",
              },
              {
                src: "/images/projects/invoicebirds/live-2026/builder-mobile.png",
                alt: "InvoiceBirds invoice builder on mobile",
                label: "Document builder",
                title: "Creation controls reflow for touch",
              },
              {
                src: "/images/projects/invoicebirds/live-2026/invoices-mobile.png",
                alt: "InvoiceBirds invoice list on mobile",
                label: "Invoice lifecycle",
                title: "Status and actions stay within reach",
              },
            ].map((screen) => (
              <figure
                key={screen.src}
                className="overflow-hidden rounded-[24px] border border-zinc-200 bg-[#f6f3ec] dark:border-zinc-800 dark:bg-zinc-900"
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={390}
                  height={844}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff5500]">{screen.label}</p>
                  <h4 className="mt-2 text-lg font-bold leading-snug tracking-tight text-zinc-950 dark:text-white">
                    {screen.title}
                  </h4>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="light"
        eyebrow="System architecture"
        title="Clear boundaries behind connected billing."
        intro="The stack separates experience, application rules, durable data, and payment providers without fragmenting the user journey."
        accent="#d84309"
        background="#ebe5da"
        items={[
          { step: "01", label: "Experience layer", title: "Next.js workspace", description: "Responsive document, client, expense, and reporting surfaces share reusable interaction patterns." },
          { step: "02", label: "Application layer", title: "NestJS domain API", description: "Billing rules, document transitions, permissions, and integrations live behind explicit modules." },
          { step: "03", label: "Data layer", title: "Supabase foundations", description: "Relational records preserve customers, documents, line items, expenses, and historical state." },
          { step: "04", label: "Payment layer", title: "Stripe reconciliation", description: "Checkout, webhooks, manual payments, and invoice state converge on one auditable payment record." },
        ]}
      />

      {/* Engineering Challenges */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Engineering Challenges
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                The hard parts I solved
              </h2>
            </div>
            <div className="space-y-8 lg:col-span-8">
              {[
                {
                  challenge: "Multi-currency billing without rounding drift",
                  solution:
                    "Standardised on integer-cents internally, FX conversion at write-time only, snapshotted to invoice metadata so the historical record never re-quotes. UI formatting via Intl.NumberFormat per locale.",
                  impact:
                    "An issued document retains the totals and exchange context it had at issue time instead of changing with a later rate.",
                },
                {
                  challenge: "Stripe checkout + payment-status reconciliation",
                  solution:
                    "Idempotency keys on every webhook, payment events appended to a per-invoice ledger (not overwritten), with manual mark-paid for off-Stripe payments. Background reconciler reconciles Stripe + manual + invoice state every N minutes.",
                  impact:
                    "Single source of truth on invoice status — no conflicting paid/unpaid displays across screens.",
                },
                {
                  challenge: "Reusable form patterns across 6+ document types",
                  solution:
                    "Extracted a primitives layer (line-item table, client picker, tax/discount calculator, signature block) that each document type composes. Validation via Zod schema per document type.",
                  impact:
                    "Document types share the same line-item, client, tax, discount, and signature behaviours instead of drifting into separate form systems.",
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
            Building a SaaS billing layer?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            I take on senior contract work across modern full-stack stacks
            with payment, multi-currency, and integration depth.
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
