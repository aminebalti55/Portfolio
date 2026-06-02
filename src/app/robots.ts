import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// robots.txt — generated. Open to everyone, and explicitly welcomes the
// AI search + indexing crawlers. Being in their index is the prerequisite
// for surfacing inside ChatGPT / Claude / Perplexity / Google AI Overviews
// answers, which is where a growing share of "recommend me a developer"
// queries now happen.
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot", // OpenAI training
    "OAI-SearchBot", // ChatGPT search index
    "ChatGPT-User", // ChatGPT live fetch
    "ClaudeBot", // Anthropic training
    "Claude-User", // Claude live fetch
    "Claude-SearchBot", // Claude search index
    "anthropic-ai",
    "PerplexityBot", // Perplexity index
    "Perplexity-User", // Perplexity live fetch
    "Google-Extended", // Gemini / AI Overviews
    "Applebot-Extended",
    "Amazonbot",
    "cohere-ai",
    "CCBot", // Common Crawl (feeds many models)
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
