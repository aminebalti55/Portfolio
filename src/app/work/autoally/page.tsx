import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "AutoAlly — Case Study",
  description:
    "A comprehensive car marketplace platform with real-time messaging, secure escrow payments, KYC verification, and advanced search features.",
};

export default function AutoAllyCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0814] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_70%_0%,rgba(59,130,246,0.45),transparent_55%),radial-gradient(900px_circle_at_20%_10%,rgba(14,165,233,0.25),transparent_55%)]" />
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
              Full-Stack Marketplace
            </Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            AutoAlly
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A comprehensive car marketplace platform connecting buyers and sellers 
            with real-time messaging, secure escrow payments, KYC verification, 
            price alerts, and advanced search capabilities.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Next.js
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Spring Boot
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              PostgreSQL
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Socket.io
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Trustap API
            </span>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/autoally/herosectioj.png"
              alt="AutoAlly Platform Overview"
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
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Overview
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  Buying or selling a car online is fraught with risk. Trust issues, 
                  payment fraud, fake listings, and lack of secure communication channels 
                  make traditional car marketplaces unreliable. Buyers worry about scams, 
                  sellers struggle with payment protection, and both sides lack transparency 
                  in the transaction process.
                </p>
                <p>
                  AutoAlly was built to solve these exact problems. A modern car marketplace 
                  that prioritizes security and trust at every step: real-time messaging with 
                  Socket.io for instant communication, Trustap API integration for secure 
                  escrow payments, Degit KYC system for identity verification, and Twilio 
                  SMS for phone verification.
                </p>
                <p>
                  The platform goes beyond basic listings — it includes advanced features 
                  like price alerts to notify users when their dream car drops in price, 
                  favorites to save interesting listings, comprehensive document management 
                  for vehicle history, and a sophisticated search system with filters for 
                  make, model, year, price range, and location.
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
                  <li>• Spring Boot (Java)</li>
                  <li>• PostgreSQL</li>
                  <li>• Socket.io</li>
                  <li>• Trustap API</li>
                  <li>• Degit KYC</li>
                  <li>• Twilio SMS</li>
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

      {/* Features Section */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Marketplace Ecosystem
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Every feature designed with security, trust, and user experience in mind — 
            from listing to payment.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-Time Messaging",
                description:
                  "Socket.io powered instant messaging between buyers and sellers. No email delays — negotiate and communicate in real-time.",
              },
              {
                title: "Secure Escrow Payments",
                description:
                  "Trustap API integration ensures safe transactions. Money held in escrow until both parties confirm satisfaction.",
              },
              {
                title: "KYC Verification",
                description:
                  "Degit identity verification system ensures all users are legitimate. Reduces fraud and builds marketplace trust.",
              },
              {
                title: "SMS Verification",
                description:
                  "Twilio-powered phone verification adds an extra layer of security. Every user confirms their phone number.",
              },
              {
                title: "Price Alerts",
                description:
                  "Set alerts for specific car models and price ranges. Get notified instantly when a matching car is listed.",
              },
              {
                title: "Favorites & Watchlists",
                description:
                  "Save interesting listings to favorites. Track price changes and availability for cars you're considering.",
              },
              {
                title: "Advanced Search & Filters",
                description:
                  "Powerful search engine with filters for make, model, year, price, mileage, location, and more.",
              },
              {
                title: "Document Management",
                description:
                  "Upload and store vehicle documents securely. Buyers can review maintenance history and ownership records.",
              },
              {
                title: "Seller Dashboard",
                description:
                  "Complete listing management — track views, messages, offers, and payment status from one central dashboard.",
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

      {/* Marketplace Showcase */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Marketplace
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Browse, Search, Discover
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A beautiful, intuitive interface for exploring thousands of car listings 
            with advanced filters and detailed views.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/autoally/card.png"
              alt="Car Marketplace Listings"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/autoally/typeofcar.png"
                alt="Car Type Categories"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/images/projects/autoally/carmarketplacedetails.png"
                alt="Car Details View"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* User Features */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            User Experience
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need in One Place
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From listing your car to managing documents and communicating with buyers — 
            a seamless experience for both sides of the transaction.
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
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

      {/* Trust & Security */}
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Trust & Security
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Peace of Mind for Every Transaction
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Multiple layers of verification and secure payment processing ensure every 
            transaction is safe for both buyers and sellers.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/autoally/peaceofmind.png"
              alt="Trust and Security Features"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Identity Verification",
                description:
                  "Degit KYC system verifies every user's identity before they can list or purchase vehicles.",
              },
              {
                step: "02",
                title: "Phone Verification",
                description:
                  "Twilio SMS verification ensures every phone number is legitimate and owned by the user.",
              },
              {
                step: "03",
                title: "Escrow Payments",
                description:
                  "Trustap holds payment securely until both parties confirm the transaction is complete.",
              },
              {
                step: "04",
                title: "Document Verification",
                description:
                  "Buyers can verify vehicle documents and history before committing to purchase.",
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

      {/* Technical Architecture */}
      <section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Architecture
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Scale and Performance
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Next.js Frontend",
                description:
                  "Server-side rendering and static generation for optimal SEO and performance.",
              },
              {
                step: "02",
                title: "Spring Boot Backend",
                description:
                  "Robust Java backend handling complex business logic, authentication, and API integrations.",
              },
              {
                step: "03",
                title: "Real-Time WebSockets",
                description:
                  "Socket.io enables instant messaging and live updates across the platform.",
              },
              {
                step: "04",
                title: "PostgreSQL Database",
                description:
                  "Scalable relational database for listings, users, messages, and transaction data.",
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
      <section className="bg-zinc-50 py-16 sm:py-20 dark:bg-zinc-900/50">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Impact
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A Trusted Car Marketplace
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            AutoAlly provides a secure, feature-rich platform where buyers and sellers 
            can transact with confidence.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Secure", label: "Escrow Payments" },
              { value: "Real-Time", label: "Messaging" },
              { value: "KYC", label: "Verified Users" },
              { value: "Advanced", label: "Search & Filters" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
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
