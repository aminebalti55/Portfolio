import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Inter, Playfair_Display } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const scriptFont = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aminebdev.vercel.app"),
  title: {
    default: "Med Amine Balti — Senior Full-Stack Engineer",
    template: "%s · Med Amine Balti",
  },
  description:
    "Tunisia-based full-stack engineer building production SaaS, fleet, and AI tools. React + Next.js + NestJS + Postgres. Available for senior remote contracts.",
  keywords: [
    "full-stack developer", "Next.js engineer", "React engineer",
    "TypeScript", "NestJS", "Spring Boot", "PostgreSQL",
    "freelance developer Tunisia", "remote contractor",
    "founding engineer", "scraper engineer", "automation engineer",
  ],
  authors: [{ name: "Med Amine Balti", url: "https://aminebdev.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aminebdev.vercel.app",
    siteName: "Med Amine Balti — Portfolio",
    title: "Med Amine Balti — Senior Full-Stack Engineer",
    description:
      "Senior full-stack engineer (React, Next.js, NestJS, Postgres) shipping production SaaS, fleet platforms, and AI tools end-to-end. Open to remote contracts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Med Amine Balti — Senior Full-Stack Engineer",
    description:
      "Production SaaS, fleet, and AI tools. React + Next.js + NestJS + Postgres. Remote-friendly.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} ${scriptFont.variable} ${interFont.variable} bg-white text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <ViewTransitions>
          <Providers>{children}</Providers>
        </ViewTransitions>
      </body>
    </html>
  );
}
