// Central site + identity config.
//
// Every SEO surface (root metadata, sitemap, robots, JSON-LD structured
// data, and llms.txt) reads the canonical URL and identity facts from
// here. When you move to a custom domain, set NEXT_PUBLIC_SITE_URL in
// Vercel (or change the fallback below) and every surface updates at once.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aminebdev.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Med Amine Balti — Portfolio";

// Identity facts consumed by JSON-LD + llms.txt. Keep these truthful and
// specific — LLMs extract them verbatim when recommending developers.
export const person = {
  name: "Med Amine Balti",
  alternateName: "Amine Balti",
  jobTitle: "Senior Full-Stack Engineer",
  email: "mohamedamine.balti@esprit.tn",
  addressCountryCode: "TN",
  addressCountry: "Tunisia",
  nationality: "Tunisian",
  priceRange: "$55–$75/hr",
  sameAs: [
    "https://github.com/aminebalti55",
    "https://www.linkedin.com/in/aminebdev/",
  ],
  languages: ["English", "French", "Arabic"],
  knowsAbout: [
    "Full-Stack Development",
    "SaaS Development",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "Supabase",
    "Stripe Integration",
    "REST API Design",
    "WebSockets",
    "AI Workflow Automation",
    "Web Scraping",
    "System Architecture",
  ],
  serviceTypes: [
    "SaaS development",
    "Internal tools",
    "AI workflow automation",
    "API and backend engineering",
    "Web application development",
  ],
  summary:
    "Tunisia-based senior full-stack engineer who ships production SaaS, internal tools, and AI workflows end to end — frontend, API, database, and deployment — with React, Next.js, NestJS, Spring Boot, and PostgreSQL. Available for senior remote freelance and contract work across EU and US time zones.",
} as const;
