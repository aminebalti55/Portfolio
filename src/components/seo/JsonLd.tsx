import { SITE_URL, SITE_NAME, person } from "@/lib/site";

// Server component. Emits a JSON-LD @graph so Google (rich results) and
// LLMs (entity extraction for "recommend a developer" answers) can read a
// clean, machine-readable model of who Amine is and what he offers.
//
// Three linked entities:
//   - Person          → the identity node everything else points to
//   - WebSite         → the site itself
//   - ProfessionalService → the freelance offering (service types, rate, reach)
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: person.name,
        alternateName: person.alternateName,
        url: SITE_URL,
        jobTitle: person.jobTitle,
        email: `mailto:${person.email}`,
        description: person.summary,
        nationality: person.nationality,
        address: {
          "@type": "PostalAddress",
          addressCountry: person.addressCountryCode,
        },
        knowsLanguage: person.languages,
        knowsAbout: person.knowsAbout,
        sameAs: person.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${person.name} — Freelance Full-Stack Engineering`,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        description:
          "Freelance and contract full-stack engineering: production SaaS, internal tools, AI workflows, marketplaces, and backend systems, shipped end to end.",
        provider: { "@id": `${SITE_URL}/#person` },
        serviceType: person.serviceTypes,
        priceRange: person.priceRange,
        areaServed: [
          "Worldwide",
          "European Union",
          "United States",
          "United Kingdom",
          "Tunisia",
        ],
        availableLanguage: person.languages,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; no user input is involved.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
