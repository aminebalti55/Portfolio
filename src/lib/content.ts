export type NavLink = {
  label: string;
  href: string;
};

export const brand = {
  name: "Amine",
  legalName: "Med Amine Balti",
  wordmark: "Amine",
  role: "Senior Full-Stack Engineer",
  location: "Tunisia · Remote-friendly · GMT+1",
};

export const socials = {
  email: "mohamedamine.balti@esprit.tn",
  phone: "+216 92 358 690",
  github: "https://github.com/aminebalti55",
  linkedin: "https://www.linkedin.com/in/aminebdev/",
  calendly:
    "https://calendly.com/mohamedamine-balti-esprit",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Hire", href: "/hire" },
  { label: "Blog", href: "/#blog" },
];

export const hero = {
  greeting: "Senior Full-Stack Engineer",
  headlineTop: "I Build",
  headlineBottom: "Production SaaS",
  description:
    "Internal tools and AI workflows for founders and teams who need senior execution without agency overhead. Remote, EU and US time zones.",
  primaryCta: { label: "Book a 20-min call", href: "#contact" },
  secondaryCta: { label: "View Work", href: "#work" },
};

export const capabilities = [
  { number: "01", label: "Web Apps" },
  { number: "02", label: "UI Engineering" },
  { number: "03", label: "Design Systems" },
  { number: "04", label: "Performance" },
  { number: "05", label: "Product Thinking" },
];

export const logoCloud = [
  "Logoipsum",
  "Logoplace",
  "Pixelworks",
  "Designify",
  "StudioLab",
  "Northwind",
];

export const about = {
  eyebrow: "About",
  title: "Product judgment backed by implementation.",
  description:
    "I'm a full-stack engineer who ships production systems end-to-end — frontend, backend, data layer, integrations, and the boring deployment glue. Four years in, I've worked across fleet analytics in Germany, invoicing SaaS in the UK, GPS-tracking in Tunisia, marketplaces and roadside-assistance products in North America — all remote. I care about turning fuzzy product asks into reliable software, fast — usually with React, Next.js, NestJS or Spring Boot, and Postgres on top.",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Spring Boot",
    "PostgreSQL",
    "Supabase",
    "Stripe",
    "Tailwind",
    "Playwright / Scrapers",
  ],
  stats: [
    { value: "6+", label: "production apps shipped" },
    { value: "3", label: "remote clients (UK · DE · TN)" },
    { value: "4+", label: "years building SaaS" },
  ],
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "spark" | "layout" | "compass" | "users";
  featured?: boolean;
};

export const services = {
  eyebrow: "Services",
  title: "One owner from first decision to release.",
  description:
    "I take on SaaS products, internal tools, and difficult product surfaces where the interface, API, data model, and release plan need to be considered together.",
  cta: { label: "Book a 20-min call", href: "#contact" },
  items: [
    {
      title: "Full-Stack Development",
      description:
        "Product interfaces, application logic, data models, integrations, and deployment handled as one connected build.",
      icon: "spark",
      featured: true,
    },
    {
      title: "SaaS Development",
      description:
        "Multi-tenant platforms with deliberate boundaries for identity, billing, permissions, and organisation data.",
      icon: "layout",
    },
    {
      title: "API & Backend",
      description:
        "APIs and backend services shaped around the product's real workflows, failure modes, and integrations.",
      icon: "compass",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Responsive interfaces that make dense workflows understandable, with reusable patterns and accessible interaction states.",
      icon: "users",
    },
  ] satisfies ServiceItem[],
};

// Projects now live in src/lib/projects.ts — a single source shared by the
// home rail and /work. This block used to duplicate them and had drifted.

export const ctaBand = {
  title: "Have a SaaS MVP, internal tool, or backend rescue to ship?",
  description:
    "I'm open to one new senior remote contract this quarter. 20-minute scoping call → scope I can ship in the first sprint. SaaS MVPs in 6 weeks, internal tools in 2–3 weeks, API rescues on a fixed scope.",
  cta: { label: "Book a 20-min call", href: "#contact" },
};

// "Outcomes Delivered" — first-person, anonymized client snapshots.
// Each entry is structured: scope of engagement + role + specific
// outcome shipped + tech used. These are *truthful, verifiable claims*
// derived from the projects in /work — they read like testimonials
// but make no third-party attributions, so there's no risk of a client
// disputing a quote. When real LinkedIn recommendations come in,
// upgrade individual entries by replacing `attribution` with a real
// name + linkedin URL.

export type OutcomeItem = {
  attribution: string;          // e.g. "Full-Stack Engineer · Contract"
  client: string;               // anonymized client descriptor
  region: string;               // "UK · Remote", "Germany · Remote", etc.
  period: string;               // "Feb–Sep 2025"
  quote: string;                // first-person delivery snapshot
  linkedinUrl?: string;         // upgrade path: paste real recommendation URL
};

export const testimonials = {
  eyebrow: "Outcomes Delivered",
  title: "What I've shipped",
  description:
    "First-person delivery snapshots from real engagements. Specific scope, specific tech, specific outcomes — no fabricated quotes.",
  items: [
    {
      attribution: "Full-Stack Developer · Contract",
      client: "UK invoicing & business-management SaaS",
      region: "UK · Remote",
      period: "Feb – Sep 2025",
      quote:
        "Built end-to-end invoicing platform: invoice setup, payment configuration, Stripe checkout & payment tracking, document statuses, transactional email delivery, multi-currency, expense tracking, and client-management flows. Shipped MVP in 6 weeks; production version centralizes invoices, estimates, contracts, proposals, and payments for freelancers and SMBs.",
    },
    {
      attribution: "Full-Stack Software Engineer · Contractor",
      client: "Enterprise fleet-analytics platform",
      region: "Germany · Remote",
      period: "Sep 2025 – Jan 2026",
      quote:
        "Contributed to a complex fleet-analytics product processing CAN signal data. Reduced workflow friction by enabling fleet engineers to define, validate, and reuse analysis logic inside the platform. Simplified configuration-heavy create/edit flows, standardized UI patterns, and contributed to RBAC, automated testing, API documentation, and security review.",
    },
    {
      attribution: "Software Engineer",
      client: "Fleet-management & GPS-tracking platform",
      region: "Tunisia · Remote",
      period: "Jan 2026 – Present",
      quote:
        "Build dashboard, vehicle, driver, map, and fleet-management flows for daily operational tracking. Work across the web app, backend API, PostgreSQL data layer, generated API contracts, and deployment workflows. Reduce engineering friction with reusable UI patterns, structured service logic, database migrations, seed scripts, and build-quality improvements.",
    },
    {
      attribution: "Solo Project · 2026",
      client: "Pulse — Lead-prospecting platform",
      region: "Personal · Production tool",
      period: "2026",
      quote:
        "Built end-to-end: 12-source scraper engine (HN hiring, YC Companies, ProductHunt, IndieHackers, Google Maps, LinkedIn, Tanit, RemoteOK, Indeed, Reddit, Twitter, Clutch), 4-stage SMTP email verifier with third-party widget filtering, sequence outreach engine, and a 1,832-keyword preset library across 42 industry/role bundles. React + FastAPI + Supabase + Playwright/Scrapling.",
    },
    {
      attribution: "Full-Stack Developer · Upwork client",
      client: "Car marketplace startup",
      region: "Remote · International",
      period: "2025",
      quote:
        "Delivered a car marketplace platform with real-time messaging (Socket.io), secure escrow payments, and KYC verification. Spring Boot backend + Next.js frontend handling listings, transactions, and dispute resolution — architected for high concurrency with persistent WebSocket connections and Redis-backed message routing.",
    },
    {
      attribution: "Freelance Developer",
      client: "Canadian towing & roadside-assistance service",
      region: "Canada · Remote",
      period: "2025",
      quote:
        "Built a modern, mobile-first landing page with real-time location-mapping integration (Supabase + Mapbox). Stranded drivers connect with the dispatch team instantly via the request flow. Optimized for fast load on mobile networks and high Lighthouse scores across performance, accessibility, and SEO.",
    },
  ] satisfies OutcomeItem[],
};

export const insights = {
  eyebrow: "Blog",
  title: "Latest insights",
  description:
    "Technical deep-dives, architectural decisions, and lessons learned from building production-scale applications.",
  items: [
    {
      badge: "Architecture",
      title: "Building Multi-Tenant SaaS: Lessons from EasyRHIS",
      date: "Jan 10, 2026",
      slug: "multi-tenant-saas-architecture",
      image: "/placeholders/blog.svg",
    },
    {
      badge: "Real-Time",
      title: "Scaling WebSocket Connections: SignalR in Enterprise Systems",
      date: "Dec 15, 2025",
      slug: "scaling-websocket-signalr",
      image: "/placeholders/blog.svg",
    },
    {
      badge: "Full-Stack",
      title: "From Concept to Production: My Development Workflow",
      date: "Nov 28, 2025",
      slug: "development-workflow",
      image: "/placeholders/blog.svg",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Let's work together",
  description:
    "Looking for a senior remote contractor for your SaaS, internal tool, or AI workflow? Schedule a 20-minute call below — I'll come back with a scope I can ship in the first sprint. Email or phone work too. Response time: 24–48 hours.",
  submitLabel: "Send message",
};
