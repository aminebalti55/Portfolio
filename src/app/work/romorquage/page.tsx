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
  title: "Romorquage Mont Rapido — Case Study",
  description:
    "A mobile-first service site for a Montréal towing company, with clear service coverage, location context, and direct contact paths.",
};

export default function RomorquageCaseStudy() {
  return (
    <main className="case-detail min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0c14] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_70%_0%,rgba(234,179,8,0.45),transparent_55%),radial-gradient(900px_circle_at_20%_10%,rgba(249,115,22,0.25),transparent_55%)]" />
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
              Mont Rapido Towing
            </Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Canada · Montréal</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">2025 · Freelance</Badge>
            <LivePill href="https://www.remorquagemontrapido.com/" />
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Romorquage Mont Rapido
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A mobile-first service site for a Montréal towing company. It puts the
            coverage area, available services, equipment, and direct phone action in
            the order a stranded driver is likely to need them.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Next.js
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Supabase
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Google Maps API
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Framer Motion
            </span>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/romorquage/hero.png"
              alt="Romorquage Mont Rapido Landing Page"
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
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  A towing-site visit often begins on a phone, under time pressure, and
                  with very little patience for navigation. The first screen has to
                  answer three practical questions: do you cover this area, can you
                  handle this vehicle, and how do I reach dispatch?
                </p>
                <p>
                  Romorquage Mont Rapido needed a modern, mobile-first landing page 
                  that would establish the service clearly, show their equipment and
                  available work, and keep the phone action within easy reach — while highlighting their coverage area with 
                  an interactive map.
                </p>
                <p>
                  The result is a focused Next.js site with service detail, coverage
                  context, business proof, and repeated direct-contact points. The
                  interface is intentionally simple because the user&apos;s situation is not.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Timeline
                </h4>
                <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  2 weeks
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
                  <li>• Next.js 14</li>
                  <li>• Tailwind CSS</li>
                  <li>• Supabase</li>
                  <li>• Google Maps API</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Deliverables
                </h4>
                <ul className="mt-2 space-y-1 text-lg text-zinc-900 dark:text-zinc-100">
                  <li>• Landing Page Design</li>
                  <li>• Interactive Map Integration</li>
                  <li>• Mobile-First UI</li>
                  <li>• Contact Forms</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="dark"
        eyebrow="Roadside journey"
        title="Four decisions between a stranded driver and help."
        intro="The experience is designed for urgency. It reduces a service business to the information a driver needs right now, then makes the next action unmistakable on a small screen."
        accent="#ffd45a"
        background="linear-gradient(145deg, #11100d 0%, #352b13 58%, #17140d 100%)"
        items={[
          {
            step: "01",
            label: "Locate",
            title: "Coverage first",
            description:
              "The map and service area answer the first practical question before the user has to read a wall of company copy.",
          },
          {
            step: "02",
            label: "Identify",
            title: "Service selection",
            description:
              "Breakdown, accident, transport, and recovery options are named in plain language so the request starts with useful context.",
          },
          {
            step: "03",
            label: "Trust",
            title: "Operational proof",
            description:
              "Equipment, reviews, and direct answers establish credibility for a decision users often make under stress.",
          },
          {
            step: "04",
            label: "Act",
            title: "One-tap contact",
            description:
              "The primary phone action stays easy to reach throughout the mobile journey instead of hiding at the bottom of the page.",
          },
        ]}
      />

      {/* Service Sections */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Services
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Services shown before the call
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The page explains what the team can tow and shows the equipment behind the
            service before asking the visitor to contact dispatch.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/romorquage/professionaltowing.png"
              alt="Professional Towing Services"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/romorquage/needatowsection.png"
                alt="Need a Tow Section"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/romorquage/professionalequipement.png"
                alt="Professional Equipment"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust & Social Proof */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Trust Signals
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Proof near the decision
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Reviews, testimonials, and transparency help stressed customers feel 
            confident they&apos;re choosing the right service.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/romorquage/reviews.png"
                alt="Customer Reviews"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/romorquage/questions.png"
                alt="Frequently Asked Questions"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Highlights */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Key Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Designed for Mobile-First Experience
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Fast loading, intuitive navigation, and optimized for users in stressful 
            roadside situations.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/romorquage/feature.png"
              alt="Feature Overview"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <CaseStudySystemSection
        variant="light"
        eyebrow="Delivery architecture"
        title="A fast service surface with no wasted motion."
        intro="The implementation prioritizes discoverability, mobile response, location context, and dependable lead capture—the technical requirements that matter most for a local emergency service."
        accent="#a56400"
        image={{
          src: "/images/projects/live-screenshots/romorquage-live-01-hero.png",
          alt: "Mont Rapido towing service landing page",
        }}
        items={[
          {
            step: "01",
            label: "Surface",
            title: "Next.js delivery",
            description:
              "Server-rendered page structure gives service content a fast first load and a strong base for local search discovery.",
          },
          {
            step: "02",
            label: "Location",
            title: "Map integration",
            description:
              "Coverage context is embedded into the conversion path rather than treated as a separate contact-page detail.",
          },
          {
            step: "03",
            label: "Inquiry",
            title: "Supabase capture",
            description:
              "Contact submissions become structured requests while direct calling remains available for urgent situations.",
          },
          {
            step: "04",
            label: "Interface",
            title: "Responsive system",
            description:
              "Touch targets, type scale, imagery, and sticky actions are tuned for drivers using the site from a phone.",
          },
        ]}
      />

      {/* Results Section */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Delivered scope
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A shorter path from search to dispatch
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A focused sequence from service fit and coverage to the direct phone action.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Mobile-first", label: "Primary layout" },
              { value: "Mapped", label: "Coverage context" },
              { value: "One tap", label: "Phone action" },
              { value: "FR + EN", label: "Locale support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-3xl font-bold text-yellow-600">{stat.value}</p>
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
                The hard parts I solved
              </h2>
            </div>
            <div className="space-y-8 lg:col-span-8">
              {[
                {
                  challenge: "Mobile-first landing for stranded drivers",
                  solution:
                    "Kept the first screen light, avoided a JavaScript-heavy hero, and tested the contact path at narrow breakpoints and under constrained network conditions.",
                  impact:
                    "The phone action stays available early in the journey without waiting for the visitor to explore the whole site.",
                },
                {
                  challenge: "Real-time location-mapping integration",
                  solution:
                    "Location context is presented inside the service journey so the visitor can understand coverage without navigating to a separate contact page.",
                  impact:
                    "Coverage becomes part of the decision path instead of a line of copy in the footer.",
                },
                {
                  challenge: "Bilingual (FR + EN) without doubling the codebase",
                  solution:
                    "Next.js i18n routing with translation files per locale, locale detected from browser then user-overrideable. URL prefixes (/fr, /en) for shareability. Locale-aware metadata so social shares feel native per language.",
                  impact:
                    "French and English share one set of components while retaining locale-specific routes and metadata.",
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
            Need a fast, mobile-first site?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            I take on senior contract work for high-performance landing
            pages, real-time integrations, and i18n-ready sites.
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
