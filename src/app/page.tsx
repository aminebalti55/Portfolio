import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Hero />
      <LogoCloud />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CtaBand />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
