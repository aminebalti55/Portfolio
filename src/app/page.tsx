import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Structured data — Person + WebSite + ProfessionalService graph. */}
      <JsonLd />
      <Hero />
      <LogoCloud />
      {/* Projects up first — strongest proof leads, per portfolio audit. */}
      <ProjectsSection />
      <CtaBand />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <InsightsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
