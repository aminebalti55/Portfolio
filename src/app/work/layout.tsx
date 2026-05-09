import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Production engagements for clients in the UK, Germany, Canada, and Tunisia — plus solo builds. SaaS, fleet platforms, marketplaces, and AI tools shipped end-to-end.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
