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
  title: "Portfolio — Placeholder",
  description: "Dribbble-inspired portfolio landing page built with Next.js.",
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
