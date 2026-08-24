import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { LivePill } from "@/components/ui/LivePill";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "AutoAlly — Case Study",
  description:
    "A verified used-car marketplace combining identity checks, inspection-backed listings, secure escrow, messaging, and protected transaction workflows.",
};

export default function AutoAllyCaseStudy() {
  return (
    <main className="case-detail autoally-case min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#081a32] text-white">
        <div className="absolute inset-0 project-hero-orbs--autoally" />
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
              Upwork client
            </Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Remote · International</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">2025 · Freelance</Badge>
            <LivePill href="https://www.usedcarmarketplace.io/" />
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            AutoAlly
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A used-car marketplace designed around the hardest part of the transaction:
            giving buyers and sellers enough evidence, protection, and communication to
            move forward with confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Next.js
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              NestJS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              PostgreSQL
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Socket.io
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Escrow API
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              KYC API
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm">
              Twilio Verify
            </span>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/autoally/live-2026/landing-hero.png"
              alt="AutoAlly public landing page with vehicle search, identity checks, inspections, and escrow protection"
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
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a9d73]">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Trust has to exist before the transaction
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  A vehicle marketplace is not only a catalogue. Buyers need confidence in
                  the seller, the vehicle, and the payment path; sellers need qualified buyers
                  and a clear route from offer to released funds.
                </p>
                <p>
                  AutoAlly turns those trust requirements into visible product states:
                  identity-checked sellers, inspection-backed listings, protected escrow,
                  messaging, delivery milestones, and a defined return window.
                </p>
                <p>
                  My work connected the public discovery experience with the operational
                  surfaces behind it: search and listings, account verification, documents,
                  real-time conversations, offers, and transaction state.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Timeline
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  4 months
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
                  <li>• Next.js + Tailwind CSS</li>
                  <li>• NestJS API</li>
                  <li>• PostgreSQL</li>
                  <li>• Socket.io</li>
                  <li>• Trustap Escrow API</li>
                  <li>• KYC Verification API</li>
                  <li>• Twilio Verify API</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Platform Type
                </h4>
                <p className="mt-2 text-lg text-zinc-900 dark:text-zinc-100">
                  Marketplace Web Application
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust model */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a9d73]">
            Product model
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Three layers of marketplace trust
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            The experience is structured around the questions a buyer asks before committing:
            who is selling, what is being sold, and what protects the exchange?
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                index: "01",
                title: "Identity",
                description:
                  "Seller and buyer verification, ownership evidence, and visible trust states reduce ambiguity before a conversation begins.",
              },
              {
                index: "02",
                title: "Vehicle evidence",
                description:
                  "Inspection-backed listings, vehicle documents, history, specifications, and condition signals keep decisions evidence-led.",
              },
              {
                index: "03",
                title: "Transaction protection",
                description:
                  "Escrow, explicit milestones, communication history, disputes, and return handling make the exchange legible to both sides.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-[24px] border border-zinc-200 bg-white p-7 shadow-[0_18px_60px_rgba(24,24,27,0.04)] dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-xs font-bold tracking-[0.18em] text-[#1a9d73]">{feature.index}</span>
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

      {/* Marketplace Showcase */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a9d73]">
            Live product
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Trust signals stay attached to the vehicle
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            These current public screens show the system a buyer actually evaluates:
            searchable inventory, evidence on each listing, and clear protection states.
          </p>

          <figure className="mt-12 overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-50 shadow-[0_30px_90px_rgba(24,24,27,0.08)] dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/autoally/live-2026/marketplace-listings.png"
              alt="AutoAlly live marketplace with verified, inspection-backed, escrow-protected vehicle listings"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1a9d73]">Marketplace inventory / 01</p>
              <h4 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                Evidence and protection are visible before the detail page
              </h4>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                Vehicle cards combine price, condition, location, specifications, seller
                status, inspection availability, and escrow protection without turning the
                search result into a wall of badges.
              </p>
            </figcaption>
          </figure>

          <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-[24px] border border-zinc-200 bg-[#13284b] dark:border-zinc-800">
              <div className="mx-auto max-w-[390px]">
                <Image
                  src="/images/projects/autoally/live-2026/landing-mobile.png"
                  alt="AutoAlly mobile landing experience with vehicle search and trust controls"
                  width={390}
                  height={844}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="border-t border-white/15 bg-white p-6 dark:bg-zinc-950">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1a9d73]">Responsive discovery / 02</p>
                <h4 className="mt-3 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  Search remains usable when every control has to stack
                </h4>
                <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                  The mobile layout preserves the full search entry point and protection
                  message instead of reducing the experience to a decorative hero.
                </p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-[24px] border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/autoally/carmarketplacedetails.png"
                alt="AutoAlly vehicle detail page with specifications and transaction context"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
              <figcaption className="border-t border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1a9d73]">Vehicle decision / 03</p>
                <h4 className="mt-3 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  The detail surface moves from interest to due diligence
                </h4>
                <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                  Specifications, documentation, seller context, and transaction actions
                  sit within one decision path rather than separate product areas.
                </p>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* User Features */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a9d73]">
            Operational surfaces
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The marketplace continues after discovery
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Listing creation, account operations, and vehicle documents give sellers and
            buyers the tools to move a real transaction forward after the first search.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/autoally/listcar.png"
                alt="List Your Car"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/autoally/dashboard.png"
                alt="User Dashboard"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/autoally/docuemnts.png"
              alt="Document Management"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Real-Time Communication */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a9d73]">
            Communication
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Instant Messaging, Real-Time Updates
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Socket.io powers real-time messaging so buyers and sellers can negotiate, 
            ask questions, and close deals without delays.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/autoally/messages.png"
              alt="Real-Time Messaging"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Trust architecture */}
      <section className="autoally-trust">
        <Container>
          <div className="autoally-section-heading autoally-section-heading--dark">
            <div>
              <p className="autoally-section-kicker">Trust architecture</p>
              <h2>Protection is visible at every decision.</h2>
            </div>
            <p>
              Each gate answers a different risk: who is acting, whether they can be
              reached, where the money is, and what evidence supports the vehicle.
            </p>
          </div>

          <figure className="autoally-trust__visual">
            <Image
              src="/images/projects/autoally/peaceofmind.png"
              alt="AutoAlly transaction protection flow covering seller verification, vehicle inspection, and payment security"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </figure>

          <div className="autoally-number-grid autoally-number-grid--dark">
            {[
              {
                step: "01",
                label: "Account gate",
                title: "Identity Verification",
                description:
                  "The KYC integration verifies identity before a user can list a vehicle or enter the protected purchase flow.",
              },
              {
                step: "02",
                label: "Contact gate",
                title: "Phone Verification",
                description:
                  "Twilio Verify adds phone ownership checks to account verification and high-risk transaction actions.",
              },
              {
                step: "03",
                label: "Payment gate",
                title: "Escrow Payments",
                description:
                  "Trustap holds payment securely until both parties confirm the transaction is complete.",
              },
              {
                step: "04",
                label: "Evidence gate",
                title: "Document Verification",
                description:
                  "Buyers can verify vehicle documents and history before committing to purchase.",
              },
            ].map((phase) => (
              <article key={phase.step}>
                <span>{phase.step}</span>
                <small>{phase.label}</small>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Architecture */}
      <section className="autoally-architecture">
        <Container>
          <div className="autoally-section-heading">
            <div>
              <p className="autoally-section-kicker">System architecture</p>
              <h2>Clear boundaries behind a complex exchange.</h2>
            </div>
            <p>
              The platform separates public discovery, application workflows,
              live communication, and transaction data while keeping one coherent product model.
            </p>
          </div>

          <div className="autoally-number-grid autoally-number-grid--light">
            {[
              {
                step: "01",
                label: "Experience layer",
                title: "Next.js Frontend",
                description:
                  "Public discovery, account workflows, and responsive transaction surfaces share one component language.",
              },
              {
                step: "02",
                label: "Application layer",
                title: "NestJS API",
                description:
                  "A modular TypeScript API coordinating authentication, listings, verification providers, escrow state, messaging, and notifications.",
              },
              {
                step: "03",
                label: "Live layer",
                title: "Real-Time WebSockets",
                description:
                  "Socket.io delivers conversations and transaction updates while the durable record remains independent.",
              },
              {
                step: "04",
                label: "Data layer",
                title: "PostgreSQL Database",
                description:
                  "Relational models preserve ownership, listing, conversation, verification, and transaction relationships.",
              },
            ].map((phase) => (
              <article key={phase.step}>
                <span>{phase.step}</span>
                <small>{phase.label}</small>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivered product */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a9d73]">
            Delivered product
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One system across the full exchange
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The value is in the connection between discovery, evidence, communication,
            and transaction state—not in a long list of isolated marketplace features.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Discovery", label: "Search, filters, saved vehicles, categories, and price alerts" },
              { value: "Evidence", label: "Seller identity, ownership, inspections, and vehicle documents" },
              { value: "Exchange", label: "Messaging, offers, escrow milestones, delivery, and disputes" },
              { value: "Operations", label: "Listing management, account state, notifications, and audit history" },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-[22px] border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-xl font-bold text-[#1a9d73]">{item.value}</p>
                <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.label}
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a9d73]">
                Engineering Challenges
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                The hard parts I solved
              </h2>
            </div>
            <div className="space-y-8 lg:col-span-8">
              {[
                {
                  challenge: "Real-time messaging that doesn't melt the database",
                  solution:
                    "Socket.io for live transport, Postgres for persistence (writes batched + async), Redis pub/sub for fan-out across instances. Message read state lives in a separate fast table to avoid contention with the main message log.",
                  impact:
                    "Conversation history remains durable while live delivery can scale independently from the main message record.",
                },
                {
                  challenge: "Escrow flow that protects both sides",
                  solution:
                    "Multi-step state machine with explicit transitions (pending → buyer-funded → seller-shipped → buyer-confirmed → released). All transitions logged immutably; disputes pause the state and route to admin review with the full audit trail.",
                  impact:
                    "Every transaction has an explicit state, a visible next action, and an audit trail for support or dispute review.",
                },
                {
                  challenge: "KYC + listing verification at scale",
                  solution:
                    "Automated VIN check + ID verification + document upload at signup; verified-seller badge on listings; flag-and-review workflow for buyer reports with priority queue for admins.",
                  impact:
                    "Verification decisions surface consistently across listings, accounts, and review tools instead of living in a hidden back-office check.",
                },
              ].map((c, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {c.challenge}
                  </h3>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1a9d73]">Solution · </span>
                      {c.solution}
                    </p>
                    <p>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1a9d73]">Outcome · </span>
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
            Building a marketplace?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            I take on senior contract work for marketplaces, real-time
            systems, and trust-and-safety infrastructure.
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
