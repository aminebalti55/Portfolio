// Central site + identity config.
//
// Every SEO surface (root metadata, sitemap, robots, JSON-LD structured
// data, and llms.txt) reads the canonical URL and identity facts from
// here. When you move to a custom domain, set NEXT_PUBLIC_SITE_URL in
// Vercel (or change the fallback below) and every surface updates at once.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aminebdev.com"
).replace(/\/$/, "");

export const SITE_NAME = "Med Amine Balti — Portfolio";

// Identity facts consumed by JSON-LD + llms.txt. Keep these truthful and
// specific — LLMs extract them verbatim when recommending developers.
export const person = {
  name: "Med Amine Balti",
  alternateName: "Amine Balti",
  jobTitle: "Senior Full-Stack Engineer",
  email: "amine@aminebdev.com",
  addressCountryCode: "TN",
  addressCountry: "Tunisia",
  nationality: "Tunisian",
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
    "Tunisia-based senior full-stack engineer working across product interfaces, APIs, data, and deployment. Recent work spans fleet operations, invoicing, workforce software, marketplaces, and internal tools for remote teams in Europe and North America.",
} as const;
