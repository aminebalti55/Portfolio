import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Pulse — Lead-Prospecting Platform for Freelance Devs",
  description:
    "A personal lead engine — 12-source scraper pipeline, 4-stage email verification, sequence outreach, and a 1,832-keyword library. Built solo to solve a real freelance lead-gen problem the existing $99-300/mo SaaS tools don't.",
};

// Stack — broken into honest groupings so reviewers can see how the
// frontend, backend, data layer, and scraping infra fit together.
const STACK = {
  Frontend: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "TanStack Query",
    "Framer Motion",
    "Radix UI",
    "Vite (Pulse SPA)",
  ],
  Backend: [
    "FastAPI",
    "Python 3.12",
    "Pydantic",
    "asyncio",
    "httpx",
    "BeautifulSoup",
  ],
  "Data & Auth": [
    "PostgreSQL (Supabase)",
    "Supabase Auth",
    "Row-Level Security",
    "Edge Functions",
  ],
  "Scraping & Anti-Bot": [
    "Scrapling",
    "Playwright",
    "Camoufox (Stealthy)",
    "Cloudflare bypass",
    "Algolia public-API integration",
  ],
  "Email & Outreach": [
    "SMTP handshake verification",
    "DNS MX lookup",
    "Catch-all probe",
    "IMAP reply detection",
    "Spintax + Liquid templating",
  ],
};

const STATS = [
  { value: "12", label: "live data sources" },
  { value: "1,832", label: "curated keywords" },
  { value: "42", label: "industry/role bundles" },
  { value: "4-stage", label: "email verifier" },
];

export default function PulseCaseStudy() {
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
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge className="border-white/15 bg-white/10 text-white">
              Lead-Prospecting Platform
            </Badge>
            <Badge className="border-white/15 bg-white/10 text-white">2026</Badge>
            <Badge className="border-white/15 bg-white/10 text-white">Solo build</Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Pulse
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A personal lead engine for freelance devs. Twelve scrapers feeding a
            single inbox of founding-engineer roles, just-funded startups, indie
            launches, and local SMBs — with a 4-stage email verifier, sequence
            outreach, and a 1,832-keyword library tuned for senior fullstack
            work. Solves the lead-gen problem that $99-300/mo SaaS tools were
            never built to solve.
          </p>

          {/* Tech badge row removed from hero — full stack breakdown lives
              in its own section below for cleaner scanning. */}
        </Container>
      </section>

      {/* Hero Screenshot — the inbox */}
      <section className="bg-white dark:bg-zinc-950">
        <Container className="py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/images/projects/pulse/pulse-01-inbox-overview.png"
              alt="Pulse inbox — live leads from 4 source scrapers (HN, YC, ProductHunt, IndieHackers) with quick filters and per-source category tabs"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-zinc-500 dark:text-zinc-400">
            The inbox after a fresh scan — leads from HN hiring, YC W26
            companies, ProductHunt launches, and IndieHackers founders
            consolidated in one queue with quick filters and matched-skill
            highlighting.
          </p>
        </Container>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/40">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                The Problem
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                Lead-gen SaaS isn&apos;t built for freelance devs
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-zinc-600 lg:col-span-8 dark:text-zinc-400">
              <p>
                I needed a steady pipeline of remote contracts and
                founding-engineer roles. Every commercial option failed in a
                specific way:
              </p>
              <ul className="space-y-3 border-l-2 border-[#ff5500]/30 pl-5">
                <li>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Apollo, Hunter, Lemlist
                  </span>{" "}
                  — $99-300/mo, optimized for SDR teams selling enterprise
                  software. None surface the leads I actually want: founding
                  engineers, recently-funded YC companies, indie founders.
                </li>
                <li>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    LinkedIn / Wellfound
                  </span>{" "}
                  — auth-walled, anti-scraping, and most listings filter out
                  international candidates without surfacing the filter
                  upfront.
                </li>
                <li>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    HN &quot;Who is hiring?&quot; threads
                  </span>{" "}
                  — gold-standard signal but lives in monthly comment threads
                  with hundreds of posts. No filtering, no dedup, no
                  structured data.
                </li>
                <li>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Local SMBs (cold outreach)
                  </span>{" "}
                  — phone numbers and websites scattered across Google Maps,
                  Yelp, Yellow Pages, Manta, BBB. Nothing consolidates them
                  with verified contact emails.
                </li>
              </ul>
              <p>
                So I built the tool I wished existed: a personal lead engine
                that pulls from twelve sources in parallel, filters by a
                keyword library tuned for fullstack work (including
                French/Tunisian variants for local job boards), verifies
                emails before they land in the inbox, and surfaces everything
                in a keyboard-first triage UI.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Architecture Highlights — 3 deep-dives */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            Architecture
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Three pieces that took the most engineering
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-5xl font-black text-[#ff5500]/20">01</div>
              <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                Source-aware scraper engine
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                12 scrapers behind a uniform <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">DirectLead</code>{" "}
                contract. Each picks its own fetcher tier — HTTP for HN
                Firebase + YC Algolia, Stealthy + Camoufox for Cloudflare-gated
                ProductHunt and IndieHackers. Per-source rate limits, retry
                with backoff, and React-SPA `wait_selector` for sources that
                hydrate client-side.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-5xl font-black text-[#ff5500]/20">02</div>
              <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                4-stage email verifier
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Syntax → DNS MX → SMTP handshake → catch-all probe. Filters
                third-party widget emails (Stripe checkout, Sentry trackers,
                Intercom CDN) and prefers domain-matching addresses over
                anything that leaked from a footer pixel. Domain-protection
                layer prevents Gmail spam-flagging from cold sends.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-5xl font-black text-[#ff5500]/20">03</div>
              <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                42-bundle keyword library
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                1,832 unique keywords across roles (Frontend, Backend, AI/ML,
                DevOps), stages (Founding-eng, Contract, Remote), specialties
                (AR/VR, Embedded, Quant), verticals (Fintech, Healthtech,
                Climate), and locale (French/Tunisian variants for Tanit
                listings). Quick-add bundles toggle whole role/stack groups in
                one tap.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Screenshot — Sources page */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Saved Searches
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Run scans on your schedule
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Each saved search picks its sources, keywords, locations,
                and frequency. Hourly, daily, weekly, or on-demand. The
                background scheduler dispatches scans, persists results to
                Supabase, and updates the inbox. Saved searches auto-pause
                if a source rate-limits.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl lg:col-span-7 dark:border-zinc-800">
              <Image
                src="/images/projects/pulse/pulse-03-sources-page.png"
                alt="Pulse sources page — list of saved searches with run status, frequency, and per-search source counts"
                width={1920}
                height={893}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Screenshot — Saved Search Editor */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="order-2 overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl lg:order-1 lg:col-span-7 dark:border-zinc-800">
              <Image
                src="/images/projects/pulse/pulse-04-saved-search-modal.png"
                alt="Pulse saved-search editor — Direct vs Cold mode with keyword chips and bundle picker"
                width={1920}
                height={893}
                className="h-auto w-full"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Editor
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Direct vs Cold mode
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Two distinct flows in one editor. Direct mode (jobs you apply
                to) takes keyword chips. Cold mode (businesses to sell to)
                takes location autocomplete + niche bundles. Switching modes
                resets sources to sensible defaults so a Cold scan never
                accidentally runs against LinkedIn.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Screenshot — Bundle Picker */}
      <section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Bundle Picker
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                42 quick-add bundles
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Each chip toggles a whole bundle of keywords on or off in a
                single click. State is computed: a chip is &quot;active&quot;
                when every keyword from that bundle is selected, &quot;partial&quot;
                when only some are. Tap an active or partial chip to remove
                only that bundle&apos;s keywords; manually-added ones stay.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["🚀 Founding eng", "🤝 Contract", "🤖 AI/ML/LLM", "💸 Fintech", "⚡ Modern Jamstack", "🇹🇳 French/Tunisian"].map((c) => (
                  <span key={c} className="inline-flex items-center rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 px-3 py-1 text-xs font-medium text-[#ff5500]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl lg:col-span-7 dark:border-zinc-800">
              <Image
                src="/images/projects/pulse/pulse-05-bundle-picker.png"
                alt="Pulse bundle picker — 42 categorized chips for one-click multi-keyword selection"
                width={1920}
                height={893}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Screenshot — Cmd+K Palette */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="order-2 overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl lg:order-1 lg:col-span-7 dark:border-zinc-800">
              <Image
                src="/images/projects/pulse/pulse-08-cmd-palette.png"
                alt="Pulse Cmd+K command palette — fuzzy search across pages and opportunities"
                width={1920}
                height={893}
                className="h-auto w-full"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
                Power UX
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Cmd+K palette · J/K nav · A/R triage
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Built for the kind of triage where you process 50 leads in
                10 minutes. Cmd+K opens a fuzzy palette across every page and
                opportunity. J/K navigates the inbox, A applies/contacts, R
                rejects, V marks viewing, O / Enter opens the original
                posting in a new tab. Every action is reachable from the
                home row.
              </p>
            </div>
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
                The hard parts I had to solve
              </h2>
            </div>
            <div className="space-y-8 text-base leading-relaxed text-zinc-600 lg:col-span-8 dark:text-zinc-400">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Scraping 12 sites with 12 different defenses
                </h3>
                <p>
                  HN runs on plain HTML. YC ships everything via a public
                  Algolia search index. Google Maps requires Playwright with
                  stable{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">data-item-id</code>{" "}
                  attribute selectors that survive UI redesigns. ProductHunt
                  and IndieHackers are React SPAs behind Cloudflare and need a
                  Camoufox-backed stealth fetcher with{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">wait_selector</code>{" "}
                  to pause for client-side hydration. I built a single
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">ScraperEngine</code>{" "}
                  that picks the right fetcher tier per source, applies
                  per-source rate limits, retries with exponential backoff,
                  and exposes one uniform{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">DirectLead</code>{" "}
                  contract upstream.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Stopping email contamination
                </h3>
                <p>
                  Naive email extraction returns garbage: Stripe checkout
                  buttons leave{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">@stripe.com</code>
                  , Sentry trackers leave 32-char-hex pixel addresses,
                  Intercom widgets leak support emails. The verifier I built
                  runs four stages — syntax → DNS MX → SMTP handshake →
                  catch-all probe — and ranks results by domain match against
                  the company&apos;s own website. A 25-suffix blocklist
                  filters known third-party CDNs and tracking subdomains, so
                  what reaches the inbox is the actual founder/recruiter
                  email, not a payment-widget side-effect.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Async pipeline that doesn&apos;t feel stuck
                </h3>
                <p>
                  Sequential email extraction made the dock progress bar
                  freeze at 20% for two minutes. I rewrote the pipeline
                  around{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">asyncio.Semaphore</code>
                  -bounded concurrency: 8 parallel email-extraction workers,
                  4 parallel detail-page fetches, with live progress
                  callbacks emitting after every lead. A 20-lead scan went
                  from ~200s to ~30s and the user always sees forward
                  motion.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Internationalised keyword matching
                </h3>
                <p>
                  Tunisian job boards (Tanit) post in French. Two-letter tech
                  stems like{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">ai</code>
                  ,{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">ts</code>
                  ,{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">qa</code>{" "}
                  false-positive on words like{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">Anglais</code>{" "}
                  and{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">Carts</code>
                  . I built a word-boundary regex matcher that treats{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">.</code>
                  ,{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">+</code>
                  , and{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">#</code>{" "}
                  as word characters (so{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">next.js</code>
                  ,{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">c++</code>
                  ,{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">c#</code>{" "}
                  match cleanly), normalises French accents
                  (NFKD + diacritic strip), and applies negative-match guards
                  (<code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">commercial</code>,{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">vendeur</code>,{" "}
                  <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">femme de ménage</code>) to keep
                  software-only results clean.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Inbox triage UX
                </h3>
                <p>
                  150 leads/scan needs a UX you can fly through. Cmd+K opens
                  a fuzzy palette across every page and opportunity. J/K
                  navigates, A applies/contacts, R rejects, V marks viewing,
                  O / Enter opens the original posting in a new tab and
                  auto-flips the stage. Quick-filter chips show live counts
                  before you click them, so you know exactly how many leads
                  &quot;Has email&quot; or &quot;Founding eng&quot; will
                  surface. Matched keywords are highlighted inline in each
                  description so the relevant signal jumps off the page.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stack — full breakdown */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5500]">
            The Stack
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            How it&apos;s built end-to-end
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Modern fullstack stack picked for two reasons: I trust each piece
            in production, and the combination supports the long-running
            scrape jobs without forcing me into a dedicated worker queue.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(STACK).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#ff5500]">
                  {category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5500]" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,31,0.15),transparent_70%)]" />
        <Container className="relative text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Need a system like this for your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            I build production scrapers, workflow automation, and full-stack
            internal tools end-to-end. Available for senior remote contracts.
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

      <Footer />
    </main>
  );
}
