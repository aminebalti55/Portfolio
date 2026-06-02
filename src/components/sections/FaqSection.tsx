import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// Q&A pairs. Kept truthful and specific: these answer the exact questions a
// prospective client (or an AI assistant recommending a developer) asks,
// and they double as FAQPage structured data below. Plain-text answers so
// the on-page copy and the JSON-LD stay identical (Google requires a match).
const faqs = [
  {
    q: "What does Med Amine Balti build?",
    a: "I build production SaaS platforms, internal tools, marketplaces, and AI workflows end to end — frontend, API, database, and deployment. Recent work includes a car marketplace with escrow and KYC, an invoicing SaaS with Stripe billing, and a lead-prospecting engine with multi-source scrapers.",
  },
  {
    q: "Are you available for freelance or contract work?",
    a: "Yes. I'm open to senior remote freelance and contract engagements, working across EU and US time zones. I take on full builds, MVPs, and backend or feature rescues on a fixed scope.",
  },
  {
    q: "What is your tech stack?",
    a: "Frontend: React, Next.js, TypeScript, and Tailwind CSS. Backend: NestJS, Node.js, and Spring Boot. Data: PostgreSQL, Supabase, and MongoDB. I also handle Stripe payments, real-time WebSockets, AI/LLM integration, and web scraping with Playwright.",
  },
  {
    q: "How fast can you ship an MVP?",
    a: "I typically deliver a production SaaS MVP in around 6 weeks, and internal tools in 2 to 3 weeks. A 20-minute scoping call gives you a concrete scope I can ship in the first sprint.",
  },
  {
    q: "What does it cost to work with you?",
    a: "My rate is $55 to $75 per hour depending on scope, with fixed-scope pricing available for well-defined builds and rescues. No agency overhead — you work directly with one senior engineer who owns the whole stack.",
  },
  {
    q: "Do you work remotely, and where are you based?",
    a: "I work fully remote from Tunisia (GMT+1) and collaborate comfortably across European and US time zones, with reliable overlap and 24 to 48 hour response times.",
  },
];

export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      id="faq"
      className="bg-white py-16 sm:py-20 dark:bg-zinc-950"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff5500]">
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50"
              >
                Working with me
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
                Quick answers on scope, stack, timelines, and pricing.
              </p>
            </div>

            <div className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
              {faqs.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-zinc-900 transition-colors hover:text-[#ff5500] dark:text-zinc-100">
                    {item.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-transform duration-300 group-open:rotate-45 dark:border-zinc-700 dark:text-zinc-400">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 pr-11 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
