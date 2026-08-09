import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// Q&A pairs. Kept truthful and specific: these answer the exact questions a
// prospective client (or an AI assistant recommending a developer) asks,
// and they double as FAQPage structured data below. Plain-text answers so
// the on-page copy and the JSON-LD stay identical (Google requires a match).
const faqs = [
  {
    q: "What does Med Amine Balti build?",
    a: "I work on SaaS platforms, internal tools, marketplaces, and operational software across the interface, API, data model, integrations, and deployment. Recent projects include a verified car marketplace, an invoicing product, fleet operations software, and a multi-source prospecting tool.",
  },
  {
    q: "Are you available for freelance or contract work?",
    a: "Yes. I take on senior remote freelance and contract engagements with practical overlap for European and US teams. The best fit is a full product build, a difficult product surface, or an existing system that needs a clear owner.",
  },
  {
    q: "What is your tech stack?",
    a: "I most often use React, Next.js, and TypeScript for product interfaces; NestJS, Hono, or Spring Boot for services; and PostgreSQL or MongoDB for data. The exact stack follows the product constraints, including payments, realtime events, AI integrations, and browser automation where they are actually useful.",
  },
  {
    q: "How does an engagement begin?",
    a: "We start with a short call to identify the user, the difficult constraint, and the smallest release that proves the direction. I then turn that into a concrete first slice, visible milestones, and the decisions that need to be made before implementation expands.",
  },
  {
    q: "What kinds of engagements are a good fit?",
    a: "Work with a meaningful product or engineering constraint is the best fit: a new SaaS build, a critical workflow, or a system rescue where one engineer needs to understand the whole path. Simple brochure sites and disconnected ticket queues are usually not the right match.",
  },
  {
    q: "Do you work remotely, and where are you based?",
    a: "I work remotely from Tunisia (GMT+1) and collaborate across European and US time zones. Each engagement starts with explicit overlap hours, communication rhythm, and decision owners so the work does not depend on constant meetings.",
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
                Quick answers on scope, stack, process, and collaboration.
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
