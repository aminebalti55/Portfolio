import { SITE_URL, person } from "@/lib/site";

// A concise, factual index for crawlers and AI assistants. It deliberately
// avoids delivery promises, rates, and claims that are not supported by the
// public case studies.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${person.name} — ${person.jobTitle}

> ${person.summary}

## About
${person.name} (also known as ${person.alternateName}) is a ${person.addressCountry}-based ${person.jobTitle.toLowerCase()} available for senior remote freelance and contract work with European and US teams. He works across product interfaces, APIs, data models, integrations, and deployment.

## Core skills
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: NestJS, Hono, Node.js, Spring Boot, REST APIs, WebSockets
- Data: PostgreSQL, Supabase, MongoDB, Redis
- Integrations: Stripe, escrow, KYC, Twilio, LLM tools, browser automation

## Selected work
- [Compass](${SITE_URL}/work/compass): Fleet-operations product with GPS telemetry, partner tooling, and a database-grounded assistant (Next.js, Hono, PostgreSQL).
- [InvoiceBirds](${SITE_URL}/work/invoicebirds): Invoicing and billing workspace covering documents, clients, expenses, reporting, and payments.
- [FLEDEM](${SITE_URL}/work/fledem): Enterprise fleet analytics and calibration workflows inside a large React and ASP.NET Core product.
- [EasyRHIS](${SITE_URL}/work/easyrhis): Multi-tenant workforce software used across large franchise networks.
- [AutoAlly](${SITE_URL}/work/autoally): Used-car marketplace with NestJS services, identity checks, escrow, messaging, and protected transaction flows.

## Field notes
- [Multi-tenant SaaS without leaking complexity](${SITE_URL}/blog/multi-tenant-saas-architecture)
- [What enterprise SignalR work taught me about live products](${SITE_URL}/blog/scaling-websocket-signalr)
- [From ambiguous brief to production software](${SITE_URL}/blog/development-workflow)

## Languages
${person.languages.join(", ")}

## Contact
- Work archive: ${SITE_URL}/work
- Engagement page: ${SITE_URL}/hire
- GitHub: ${person.sameAs[0]}
- LinkedIn: ${person.sameAs[1]}
- Email: ${person.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
