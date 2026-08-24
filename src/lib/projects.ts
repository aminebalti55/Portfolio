/**
 * Single source of truth for every project.
 *
 * Previously this data existed twice — `clientProjects`/`personalProjects` in
 * app/work/page.tsx and a separate `projects` block in content.ts — and the two
 * had already drifted (Compass carried different descriptions in each). The
 * home page and /work now both read from here.
 *
 * Note there is no per-project `color`. Arbitrary accent colours were the
 * main reason the set read as incoherent; the palette is one accent (#ff5500)
 * plus neutrals, and category is carried by type, not by hue.
 */

export type Project = {
  slug: string;
  title: string;
  /** Short category label — rendered as a letterspaced micro-label. */
  category: string;
  /** "client" work leads; "personal" builds follow. */
  kind: "client" | "personal";
  /** Who it was for. Omitted for solo builds. */
  client?: string;
  region?: string;
  year: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  /** Surfaced on the home page. Everything appears on /work regardless. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "compass",
    title: "Compass Solutions",
    category: "GPS Fleet Tracking SaaS",
    kind: "client",
    client: "Compass Solutions",
    region: "Tunisia · Remote",
    year: "2026 — Present",
    description:
      "A production control plane for fleet operations: GPS telemetry, driver, fuel, and maintenance workflows, partner access, and an AI assistant grounded in operational data.",
    image: "/images/projects/compass/compass-live-01-hero.png",
    tech: ["Next.js", "Hono", "TypeScript", "PostgreSQL", "Real-time map", "AI assistant", "RBAC"],
    liveUrl: "https://www.compasssolutions.ai/",
    featured: true,
  },
  {
    slug: "invoicebirds",
    title: "InvoiceBirds",
    category: "Invoicing & Billing SaaS",
    kind: "client",
    client: "INVOICEBIRDS LTD",
    region: "UK · Remote",
    year: "Feb — Sep 2025",
    description:
      "A connected billing workspace for freelancers and small businesses, spanning document creation, invoice lifecycle, payments, clients, expenses, and reporting.",
    image: "/images/projects/invoicebirds/live-2026/landing-hero.png",
    tech: ["Next.js", "NestJS", "Supabase", "Stripe", "Tailwind CSS"],
    liveUrl: "https://www.invoicebirds.com/",
    featured: true,
  },
  {
    slug: "fledem",
    title: "FLEDEM",
    category: "Enterprise Fleet Analytics",
    kind: "client",
    client: "FEV Software GmbH",
    region: "Germany · Remote",
    year: "Sep 2025 — Jan 2026",
    description:
      "Fleet-analytics platform for FEV Software GmbH — analysis configuration flows, calibration management, and events across a large React + ASP.NET Core codebase processing CAN-signal telemetry.",
    image: "/images/projects/fledem/fledem-telemetry-cover-v1.png",
    tech: ["ASP.NET Core", "React", "MongoDB", "SignalR", "Python"],
  },
  {
    slug: "easyrhis",
    title: "EasyRHIS",
    category: "Multi-Brand HR SaaS",
    kind: "client",
    client: "Multi-brand QSR HR platform",
    region: "Tunisia · Full-time",
    year: "2024",
    // "1,500+ clients" is the figure on RHIS Solutions' own site (visible in
    // easyrhis.png), so it's independently checkable by a prospect.
    description:
      "Multi-tenant workforce software supporting 1,500+ QSR sites, with brand-aware employee data, scheduling, permissions, and payroll workflows.",
    image: "/images/projects/easyrhis/easyrhis.png",
    tech: ["Spring Boot", "Angular", "PostgreSQL", "JWT"],
    featured: true,
  },
  {
    slug: "autoally",
    title: "AutoAlly",
    category: "Used-Car Marketplace",
    kind: "client",
    client: "Upwork client",
    region: "Remote · International",
    year: "2025",
    description:
      "A verified used-car marketplace combining seller identity checks, inspection-backed listings, secure escrow, messaging, price alerts, and protected delivery workflows.",
    image: "/images/projects/autoally/live-2026/landing-hero.png",
    tech: ["Next.js", "NestJS", "Socket.io", "PostgreSQL", "KYC · Escrow · Twilio APIs"],
    liveUrl: "https://www.usedcarmarketplace.io/",
    featured: true,
  },
  {
    slug: "romorquage",
    title: "Romorquage Mont Rapido",
    category: "Towing Service · Landing Page",
    kind: "client",
    client: "Mont Rapido Towing Services",
    region: "Canada (Montréal) · Remote",
    year: "2025",
    description:
      "Mobile-first landing page with real-time location mapping for a Montréal towing and roadside-assistance service. Stranded drivers reach dispatch instantly through the request flow.",
    image: "/images/projects/live-screenshots/romorquage-live-01-hero.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Mapbox"],
    liveUrl: "https://www.remorquagemontrapido.com/",
  },
  {
    slug: "fallen-throne",
    title: "Fallen Throne",
    category: "Competitive Bidding Leaderboard",
    kind: "personal",
    region: "Independent product experiment",
    year: "2026",
    description:
      "A live pixel-art bidding leaderboard where cumulative spend determines who rules the board. Visitors submit a website or social profile, place a Stripe-backed bid, and climb a public hierarchy.",
    image: "/images/projects/fallen-throne/fallen-throne-social-share.jpg",
    tech: ["Next.js", "TypeScript", "Stripe", "Cloudflare Workers", "Durable Objects"],
    liveUrl: "https://fallenthrone.lol/",
    featured: true,
  },
  {
    slug: "pulse",
    title: "Pulse",
    category: "Lead-Prospecting Platform",
    kind: "personal",
    region: "Solo build",
    year: "2026",
    description:
      "A solo-built acquisition workspace that turns twelve lead sources into one verified, searchable opportunity inbox with outreach sequences built in.",
    image: "/images/projects/pulse/pulse-05-bundle-picker.png",
    tech: ["Next.js", "FastAPI", "Supabase", "Playwright", "Scrapling"],
  },
  {
    slug: "atlas",
    title: "Atlas",
    category: "Personal Finance",
    kind: "personal",
    region: "Solo build",
    year: "2025",
    description:
      "Wealth-management app for tracking expenses, savings goals, and income — built for my own money triage, then kept building because it was useful.",
    image: "/images/projects/Atlas/dashboard.png",
    tech: ["React", "Supabase", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://atlas-wealth-app.netlify.app/",
  },
  {
    slug: "cassandra",
    title: "Cassandra",
    category: "Health-Organization Tool",
    kind: "personal",
    region: "Solo build",
    year: "2025",
    description:
      "Helps patients document their medical journey and prepare for doctor appointments — appointment-prep tools and a health document wallet.",
    image: "/images/projects/cassandra/herosection.png",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
  },
];

/**
 * Home page rail.
 *
 * Chosen for buying signal, not recency:
 *  - Compass      — live, current, and the biggest number in the portfolio
 *                   (879 devices / 666 client orgs)
 *  - EasyRHIS     — the only entry carrying names a stranger already trusts
 *                   (KFC, Five Guys, Burger King franchise networks)
 *  - InvoiceBirds — live, a registered UK client, real payments infrastructure
 *  - AutoAlly     — live, and the clearest "I ship complex features" story
 *                   (escrow, KYC, real-time messaging)
 *
 * Deliberately excluded: FLEDEM has no screenshot yet and a placeholder card
 * undercuts the row; Romorquage is a landing page next to four platforms; the
 * solo builds are strong but a prospect is buying paid delivery first.
 */
export const featuredProjects = projects.filter((p) => p.featured);
