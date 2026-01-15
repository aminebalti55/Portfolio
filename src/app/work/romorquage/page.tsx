import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Romorquage Mont Rapido — Case Study",
  description:
    "A modern towing service landing page with real-time location mapping, helping customers find reliable roadside assistance fast.",
};

export default function RomorquageCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
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

          <div className="mt-8">
            <Badge className="border-white/15 bg-white/10 text-white">
              Landing Page
            </Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Romorquage Mont Rapido
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A modern, conversion-focused landing page for a professional towing 
            service. Features real-time location mapping, service showcase, and 
            instant contact options to connect stranded drivers with help fast.
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
                  When your car breaks down on the side of the road, every second 
                  counts. You need help fast, but finding a reliable towing service 
                  in the moment of stress is difficult. Most towing company websites 
                  are outdated, hard to navigate on mobile, and don&apos;t make it easy 
                  to quickly get in touch.
                </p>
                <p>
                  Romorquage Mont Rapido needed a modern, mobile-first landing page 
                  that would instantly communicate trust, showcase their professional 
                  equipment and services, and make it dead simple for stranded drivers 
                  to call for help — all while highlighting their coverage area with 
                  an interactive map.
                </p>
                <p>
                  The solution: a fast-loading, conversion-optimized landing page 
                  built with Next.js and Tailwind CSS. Real-time location mapping 
                  shows service coverage, high-quality imagery builds trust, and 
                  prominent call-to-action buttons ensure customers can reach help 
                  with one tap.
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

      {/* Features Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Conversions
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Every element designed to build trust and drive action — from the first 
            impression to the final call.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Interactive Location Map",
                description:
                  "Real-time Google Maps integration showing service coverage area, helping customers instantly see if they're within range.",
              },
              {
                title: "One-Tap Calling",
                description:
                  "Prominent phone number buttons throughout the page — mobile users can call with a single tap from any section.",
              },
              {
                title: "Professional Equipment Showcase",
                description:
                  "High-quality imagery of tow trucks and equipment builds immediate trust and credibility.",
              },
              {
                title: "Service Categories",
                description:
                  "Clear breakdown of services — accident towing, breakdown assistance, long-distance transport, and more.",
              },
              {
                title: "Customer Reviews",
                description:
                  "Social proof through testimonials and ratings to reassure stressed customers they're making the right choice.",
              },
              {
                title: "FAQ Section",
                description:
                  "Answers to common questions about pricing, response times, and coverage areas to reduce friction.",
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

      {/* Service Sections */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Services
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Towing Solutions
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Clear service offerings with professional imagery to showcase capabilities 
            and build customer confidence.
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
            Building Customer Confidence
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

      {/* Technical Implementation */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Technical Stack
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Modern, Fast, Reliable
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Next.js 14",
                description:
                  "Server-side rendering for instant page loads and optimal SEO performance.",
              },
              {
                step: "02",
                title: "Google Maps API",
                description:
                  "Interactive map showing service coverage area and real-time location display.",
              },
              {
                step: "03",
                title: "Tailwind CSS",
                description:
                  "Utility-first styling for responsive design that looks great on all devices.",
              },
              {
                step: "04",
                title: "Supabase",
                description:
                  "Backend infrastructure for contact forms and customer inquiry management.",
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
            Impact
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Driving Real Results
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A modern, mobile-optimized landing page that converts stressed drivers 
            into customers.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Mobile-First", label: "Design" },
              { value: "Real-Time", label: "Location Map" },
              { value: "One-Tap", label: "Call to Action" },
              { value: "Fast", label: "Load Times" },
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

      {/* CTA Section */}
      <section className="bg-[#0a0c14] py-16 sm:py-20">
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
