import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight, Manrope, Syne } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/providers/Providers";
import { SITE_URL, SITE_NAME, person } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-art",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Med Amine Balti — Senior Full-Stack Product Engineer",
    template: "%s · Med Amine Balti",
  },
  description:
    "Med Amine Balti is a Tunisia-based senior full-stack engineer building production SaaS, internal tools, and AI workflows with React, Next.js, NestJS, and PostgreSQL. Available for senior remote freelance and contract work across EU and US time zones.",
  keywords: [
    "Med Amine Balti", "full-stack developer", "full-stack product engineer", "freelance full-stack engineer",
    "hire full-stack developer", "Next.js developer", "React developer",
    "TypeScript", "NestJS", "Spring Boot", "PostgreSQL",
    "SaaS developer", "MVP developer", "AI workflow developer",
    "freelance developer Tunisia", "remote contract developer",
  ],
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  publisher: person.name,
  alternates: { canonical: SITE_URL },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Med Amine Balti — Senior Full-Stack Product Engineer",
    description:
      "Senior full-stack engineer (React, Next.js, NestJS, PostgreSQL) shipping production SaaS, internal tools, and AI workflows end to end. Open to remote freelance and contract work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Med Amine Balti — Senior Full-Stack Product Engineer",
    description:
      "Production SaaS, internal tools, and AI workflows. React + Next.js + NestJS + PostgreSQL. Remote, EU/US time zones.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${interTight.variable} ${syne.variable} ${geistMono.variable} antialiased`}
      >
        <ViewTransitions>
          <Providers>{children}</Providers>
        </ViewTransitions>
        {/* Vercel Analytics — visitor count + traffic sources, free tier.
            View at vercel.com/<your-team>/<project>/analytics. */}
        <Analytics />
        {/* Vercel Speed Insights — real-user Core Web Vitals (LCP, INP,
            CLS) from actual visitors. View at .../speed-insights. */}
        <SpeedInsights />
      </body>
    </html>
  );
}
