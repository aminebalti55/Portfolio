"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

// ─── PROJECT TAXONOMY ────────────────────────────────────────────────
// Two top-level groupings now:
//   - clientProjects: paid engagements (employment, contracts, freelance
//     for real clients with real money)
//   - personalProjects: solo builds I made for myself
//
// Each project carries `liveUrl` (the production deploy where applicable)
// so the new "Visit live →" CTA is honest — clicking it takes the
// reviewer to the actual product, which is the single highest-leverage
// trust move on a 2026 dev portfolio.

type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  client?: string;            // "FEV Software GmbH" / "INVOICEBIRDS LTD" / etc.
  region?: string;            // "Germany · Remote"
  duration?: string;          // "4 months · contract"
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;           // production URL — primary trust signal
  color: string;
  featured: boolean;
};

const clientProjects: Project[] = [
  {
    id: "01",
    title: "Compass Solutions",
    slug: "compass",
    category: "GPS Fleet Tracking SaaS",
    year: "2026 — Present",
    client: "Compass Solutions",
    region: "Tunisia · Remote",
    duration: "Current role · Software Engineer",
    description:
      "Production fleet-management & GPS-tracking platform with AI-powered driver, fuel, and maintenance modules. Real-time map, vehicle, alerts, and reports — built end-to-end across web app, backend API, PostgreSQL, and the Compass Assistant LLM agent.",
    image: "/images/projects/compass/compass-app-02-map.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Real-time map", "AI assistant", "RBAC"],
    liveUrl: "https://www.compasssolutions.ai/",
    color: "#ff5500",
    featured: true,
  },
  {
    id: "02",
    title: "FLEDEM",
    slug: "fledem",
    category: "Enterprise Fleet Analytics",
    year: "Sep 2025 — Jan 2026",
    client: "FEV Software GmbH",
    region: "Germany · Remote",
    duration: "4 months · Contract",
    description:
      "Fleet-analytics platform for FEV Software GmbH — built features for analysis configuration flows, calibration management, events, and design-system alignment across a large React + ASP.NET Core + MongoDB codebase processing CAN-signal telemetry.",
    image: "/placeholders/device.svg",
    tech: ["ASP.NET Core", "React", "MongoDB", "SignalR", "Python"],
    color: "#ff5500",
    featured: true,
  },
  {
    id: "03",
    title: "InvoiceBirds",
    slug: "invoicebirds",
    category: "Invoicing & Billing SaaS",
    year: "Feb 2025 — Sep 2025",
    client: "INVOICEBIRDS LTD",
    region: "UK · Remote",
    duration: "8 months · Contract",
    description:
      "Comprehensive invoicing and business-management SaaS for freelancers and SMBs. Stripe checkout, multi-currency billing, automated reminders, expense tracking, and end-to-end document flow on a Next.js + NestJS + Supabase stack.",
    image: "/images/projects/live-screenshots/invoicebirds-live-02-fullpage.png",
    tech: ["Next.js", "NestJS", "Supabase", "Stripe", "Tailwind CSS"],
    liveUrl: "https://www.invoicebirds.com/",
    color: "#ff5500",
    featured: true,
  },
  {
    id: "04",
    title: "EasyRHIS",
    slug: "easyrhis",
    category: "Multi-Brand HR SaaS",
    year: "2024",
    client: "Multi-brand QSR HR platform",
    region: "Tunisia · Full-time",
    duration: "6 months · Spring Boot + Angular",
    description:
      "Multi-tenant HR-management SaaS deployed across multi-brand QSR operators (KFC, Five Guys, Burger King franchise networks). Owned modules across the Spring Boot backend and Angular frontend — employee data, shifts, payroll workflows.",
    image: "/images/projects/easyrhis/easyrhis.png",
    tech: ["Spring Boot", "Angular", "PostgreSQL", "JWT"],
    color: "#ff5500",
    featured: true,
  },
  {
    id: "05",
    title: "AutoAlly",
    slug: "autoally",
    category: "Used-Car Marketplace",
    year: "2025",
    client: "Upwork client",
    region: "Remote · International",
    duration: "Freelance contract",
    description:
      "Used-car marketplace with real-time messaging (Socket.io), secure escrow payments, KYC verification, price alerts, and dispute resolution. Spring Boot backend + Next.js frontend handling listings and transactions.",
    image: "/images/projects/live-screenshots/autoally-live-01-hero.png",
    tech: ["Next.js", "Spring Boot", "Socket.io", "PostgreSQL"],
    liveUrl: "https://www.usedcarmarketplace.io/",
    color: "#ff5500",
    featured: false,
  },
  {
    id: "06",
    title: "Romorquage Mont Rapido",
    slug: "romorquage",
    category: "Towing Service · Landing Page",
    year: "2025",
    client: "Mont Rapido Towing Services",
    region: "Canada (Montréal) · Remote",
    duration: "Freelance project",
    description:
      "Modern, mobile-first landing page with real-time location-mapping integration for a Montréal towing & roadside-assistance service. Stranded drivers connect with the dispatch team instantly via the request flow.",
    image: "/images/projects/live-screenshots/romorquage-live-01-hero.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Mapbox"],
    liveUrl: "https://www.remorquagemontrapido.com/",
    color: "#ff5500",
    featured: false,
  },
];

const personalProjects: Project[] = [
  {
    id: "P1",
    title: "Pulse",
    slug: "pulse",
    category: "Lead-Prospecting Platform",
    year: "2026",
    duration: "Solo build · production tool",
    description:
      "A personal lead engine for freelance devs. 12 source scrapers feeding a single inbox — HN hiring, YC, ProductHunt, IndieHackers, Google Maps, LinkedIn, and more — with a 4-stage SMTP email verifier, sequence outreach engine, and a 1,832-keyword preset library across 42 industry/role bundles.",
    image: "/images/projects/pulse/pulse-01-inbox-overview.png",
    tech: ["Next.js", "FastAPI", "Supabase", "Playwright", "Scrapling"],
    color: "#ff5500",
    featured: true,
  },
  {
    id: "P2",
    title: "Atlas",
    slug: "atlas",
    category: "Personal Finance · Wealth Manager",
    year: "2025",
    duration: "Solo build",
    description:
      "Personal wealth-management app I built to track my own expenses, savings goals, and income. React + Supabase + Chart.js with a beautiful, fast UI for daily money triage.",
    image: "/images/projects/live-screenshots/atlas-live-hero-v2.png",
    tech: ["React", "Supabase", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://atlas-wealth-app.netlify.app/",
    color: "#ff5500",
    featured: true,
  },
  {
    id: "P3",
    title: "Cassandra",
    slug: "cassandra",
    category: "Health-Organization Tool",
    year: "2025",
    duration: "Solo build",
    description:
      "A health-organization tool I built to help patients document their medical journey and prepare for doctor appointments. Appointment-prep tools, health document wallet, and a clean Next.js + Supabase stack.",
    image: "/images/projects/cassandra/herosection.png",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
    color: "#ff5500",
    featured: false,
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,77,31,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,92,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <SiteHeader />

        <Container className="relative pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
              Portfolio
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-white">Selected</span>
              <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Production engagements for clients in the UK, Germany, Canada, and
              Tunisia — plus solo builds where I scratched my own itch.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/" variant="ghost" withDot className="w-full sm:w-auto">
                Back home
              </ButtonLink>
              <ButtonLink
                href="/#contact"
                variant="primary"
                withDot
                className="w-full sm:w-auto"
              >
                Schedule a call
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-10 sm:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: clientProjects.length.toString(), label: "Client engagements" },
              { value: personalProjects.length.toString(), label: "Personal products" },
              { value: "4+", label: "Years building SaaS" },
              { value: "4", label: "Countries shipped to" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ─── CLIENT PROJECTS ──────────────────────────────────── */}
      <section className="relative bg-zinc-950 py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Client Projects"
            title="Paid engagements"
            description="Production work delivered to real clients — full-time roles, contract gigs, freelance projects."
            count={clientProjects.length}
          />

          {/* Featured 2 */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {clientProjects.filter((p) => p.featured).slice(0, 2).map((p, i) => (
              <FeaturedCard key={p.id} project={p} index={i} />
            ))}
          </div>

          {/* Featured next 2 */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {clientProjects.filter((p) => p.featured).slice(2, 4).map((p, i) => (
              <MediumCard key={p.id} project={p} index={i} />
            ))}
          </div>

          {/* Non-featured client projects */}
          {clientProjects.filter((p) => !p.featured).length > 0 && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientProjects.filter((p) => !p.featured).map((p, i) => (
                <SmallCard key={p.id} project={p} index={i} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ─── PERSONAL PROJECTS ────────────────────────────────── */}
      <section className="relative border-t border-zinc-800 bg-zinc-950 py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Personal Projects"
            title="Solo builds"
            description="Tools I built for myself, then kept building because they were useful. Each one ships in production for a real audience of one — me."
            count={personalProjects.length}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {personalProjects.map((p, i) => (
              <PersonalCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,31,0.15),transparent_70%)]" />
        <Container className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
              I take on senior contract work across modern fullstack stacks.
              Available for remote engagements.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/#contact" variant="primary" withDot>
                Schedule a call
              </ButtonLink>
              <ButtonLink href="/" variant="ghost" withDot>
                Back to home
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

// ─── REUSABLE PIECES ─────────────────────────────────────────────────

function SectionHeader({
  eyebrow, title, description, count,
}: { eyebrow: string; title: string; description: string; count: number }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5500]">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
      <span className="text-sm text-zinc-500">{count} projects</span>
    </div>
  );
}

function LiveBadge({ liveUrl }: { liveUrl?: string }) {
  if (!liveUrl) return null;
  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/60 bg-emerald-500/30 px-2.5 py-1 text-[11px] font-medium text-emerald-100 backdrop-blur-md shadow-lg shadow-emerald-500/10 transition-all hover:border-emerald-400 hover:bg-emerald-500/40"
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      Live · {new URL(liveUrl).hostname.replace(/^www\./, "")}
    </a>
  );
}

function ClientBadge({ project }: { project: Project }) {
  if (!project.client) return null;
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
      {project.client} · {project.region}
    </p>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <article className="relative h-[500px] overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Heavier gradient — bottom 70% of card needs to be near-opaque
                so the white headline + zinc body copy stay readable. */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/50" />
          </div>

          <div className="absolute right-5 top-5 z-10">
            <LiveBadge liveUrl={project.liveUrl} />
          </div>

          <div className="relative flex h-full flex-col justify-end p-8">
            <ClientBadge project={project} />
            <div className="mt-2 mb-3 flex items-center gap-2">
              {/* White text on colored tint = readable on any background.
                  Border carries the color identity. */}
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                style={{
                  backgroundColor: `${project.color}26`,
                  borderColor: `${project.color}80`,
                }}
              >
                {project.category}
              </span>
              <span className="text-xs text-zinc-400">{project.year}</span>
            </div>
            <h3 className="text-3xl font-bold text-white transition-colors group-hover:text-orange-400 sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-400 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              View case study
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

function MediumCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <article className="relative h-[380px] overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/40" />
          </div>

          <div className="absolute right-4 top-4 z-10">
            <LiveBadge liveUrl={project.liveUrl} />
          </div>

          <div className="relative flex h-full flex-col justify-end p-6">
            <ClientBadge project={project} />
            <div className="mb-3 mt-2">
              <span
                className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                style={{
                  backgroundColor: `${project.color}26`,
                  borderColor: `${project.color}80`,
                }}
              >
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-orange-400">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              View case study
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

function SmallCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <article className="overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Stronger gradient — covers full image bottom-up so the
                LIVE pill (top-right) reads cleanly even on bright shots. */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/60" />
            {/* Only LIVE pill on the image — category moved BELOW the image
                to eliminate the collision the user reported. */}
            {project.liveUrl && (
              <div className="absolute right-4 top-4">
                <LiveBadge liveUrl={project.liveUrl} />
              </div>
            )}
          </div>
          <div className="p-5">
            <ClientBadge project={project} />
            <div className="mt-2 flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-orange-400">
                {project.title}
              </h3>
              <span className="shrink-0 text-xs text-zinc-500">{project.year}</span>
            </div>
            {/* Category moved here — below title, no longer competes with
                the LIVE pill on the image. */}
            <div className="mt-2">
              <span
                className="inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium text-white"
                style={{
                  backgroundColor: `${project.color}26`,
                  borderColor: `${project.color}80`,
                }}
              >
                {project.category}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-800/80 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              View project
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

function PersonalCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <article className="relative h-[440px] overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/30" />
          </div>

          <div className="absolute right-4 top-4 z-10 flex flex-col items-end gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/50 bg-violet-500/25 px-2.5 py-1 text-[11px] font-medium text-violet-100 backdrop-blur-sm">
              Personal product
            </span>
            <LiveBadge liveUrl={project.liveUrl} />
          </div>

          <div className="relative flex h-full flex-col justify-end p-6">
            <span
              className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              style={{
                backgroundColor: `${project.color}26`,
                borderColor: `${project.color}80`,
              }}
            >
              {project.category}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-orange-400">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-3">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-[10px] text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              View case study
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
