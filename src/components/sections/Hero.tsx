"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { socials } from "@/lib/content";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const services = [
  { id: "01", label: "Full-Stack Development" },
  { id: "02", label: "SaaS Creation" },
  { id: "03", label: "Design Systems" },
  { id: "04", label: "Performance" },
  { id: "05", label: "Product Thinking" },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden rounded-b-[48px] bg-[#100706] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_72%_at_50%_42%,rgba(155,44,12,0.25)_0%,rgba(68,20,10,0.18)_46%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,7,6,0.12)_0%,rgba(12,5,4,0.02)_38%,rgba(5,3,3,0.56)_100%)]" />
      
      <SiteHeader />

      {/* Main content */}
      <Container className="relative flex min-h-screen max-w-7xl flex-col pt-24 lg:pt-28">
        <div className="flex flex-1 flex-col justify-end pb-8 lg:pb-0">
          {/* Hero content wrapper - relative positioning context */}
          <div className="relative">
            {/* Desktop-only: absolute portrait with full glow stack.
                Hidden on mobile to prevent the headline from overlapping
                the face — mobile gets its own inline portrait below. */}
            <motion.div
              className="absolute inset-0 z-0 hidden items-end justify-center lg:flex"
              initial="hidden"
              animate="visible"
              variants={fadeInScale}
            >
              <div className="pointer-events-none absolute bottom-[0%] left-1/2 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,81,19,0.30)_0%,rgba(180,44,10,0.16)_42%,transparent_73%)] blur-[68px] lg:h-[620px] lg:w-[900px]" />
              <div className="absolute bottom-[8%] left-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_43%_34%,#ff7b35_0%,#ff571c_42%,#e43a10_70%,#9f210a_100%)] shadow-[0_0_90px_rgba(255,73,15,0.18)] sm:bottom-[10%] sm:h-[420px] sm:w-[420px] lg:bottom-[4%] lg:h-[540px] lg:w-[540px]" />

              <div className="relative z-10 -mb-24 h-[520px] w-[400px] sm:-mb-28 sm:h-[620px] sm:w-[480px] lg:-mb-32 lg:h-[750px] lg:w-[600px]">
                <Image
                  src="/images/amine-portrait.png"
                  alt="Amine - Senior Software Engineer"
                  fill
                  sizes="(min-width: 1024px) 600px, (min-width: 640px) 480px, 400px"
                  className="object-contain object-bottom [filter:contrast(1.04)_saturate(.88)_brightness(.98)]"
                  priority
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#100706] via-[#100706]/80 to-transparent sm:h-48 lg:h-56" />
              </div>
            </motion.div>

            {/* 3-column grid: Title | (mobile portrait OR desktop empty) | CTA */}
            <div className="relative grid min-h-[500px] items-end gap-8 lg:min-h-[620px] lg:grid-cols-[1.15fr_1fr_1.15fr] lg:gap-0" style={{ zIndex: 10 }}>
              {/* Left column - Title */}
              <motion.div
                className="relative z-20 order-1 flex flex-col items-center text-center lg:order-1 lg:items-start lg:pb-24 lg:text-left"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0.1}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ff7740]/35 bg-[#ff5a1f]/10 px-3 py-1 text-[11px] font-semibold text-[#ff9b73]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff641f] shadow-[0_0_12px_rgba(255,100,31,0.8)]" />
                  Open for select engagements
                </span>
                <p className="mt-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/55">
                  Senior full-stack product engineer
                </p>
                <h1 className="font-inter mt-3 text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.03em] text-white">
                  I Build
                  <br />
                  Production SaaS
                </h1>
              </motion.div>

              {/* Mobile-only inline portrait — sits between headline and CTA so
                  the face never overlaps text. Hidden on lg+ where the absolute
                  portrait above takes over. */}
              <motion.div
                className="relative order-2 flex items-end justify-center lg:hidden"
                initial="hidden"
                animate="visible"
                variants={fadeInScale}
              >
                <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-[280px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_55%,rgba(255,81,19,0.32)_0%,rgba(180,44,10,0.14)_50%,transparent_75%)] blur-[44px]" />
                <div className="absolute bottom-[12%] left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_43%_34%,#ff7b35_0%,#ff571c_42%,#e43a10_70%,#9f210a_100%)] shadow-[0_0_65px_rgba(255,73,15,0.18)]" />
                <div className="relative z-10 h-[340px] w-[260px] sm:h-[400px] sm:w-[300px]">
                  <Image
                    src="/images/amine-portrait.png"
                    alt="Amine - Senior Software Engineer"
                    fill
                    sizes="(max-width: 640px) 260px, 300px"
                    className="object-contain object-bottom [filter:contrast(1.04)_saturate(.88)_brightness(.98)]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#100706] via-[#100706]/80 to-transparent" />
                </div>
              </motion.div>

              {/* Desktop-only spacer cell so the 3-column grid alignment holds. */}
              <div className="hidden lg:order-2 lg:block" />

              {/* Right column - Description, CTA, secondary actions */}
              <motion.div
                className="hero-brief order-3 lg:pb-24"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0.3}
              >
                <h2 className="hero-brief__statement">
                  From first decision
                  <span>to production.</span>
                </h2>
                <p className="hero-brief__summary">
                  Senior product engineering for complex SaaS and internal tools, owned end to end.
                </p>
                <div className="hero-brief__engagement">
                  <span>Remote · EU + US overlap</span>
                </div>

                <motion.a
                  href={socials.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-brief__cta"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Book a 20-minute call</span>
                  <strong aria-hidden="true">↗</strong>
                </motion.a>

                <div className="hero-brief__contact">
                  <a href={`mailto:${socials.email}?subject=Project%20enquiry`}>
                    <span>Email directly</span>
                    <strong>{socials.email}</strong>
                  </a>
                  <div>
                    <a className="inline-flex items-center gap-1.5" href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                      <FaLinkedinIn size={13} aria-hidden="true" />
                      LinkedIn
                    </a>
                    <a className="inline-flex items-center gap-1.5" href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                      <FaGithub size={13} aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services bar */}
        <motion.div
          className="relative z-10 border-t border-white/[0.08] py-6 sm:py-7 lg:py-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-8 lg:justify-between lg:gap-0">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="flex items-start gap-2 sm:gap-2.5"
                variants={staggerItem}
              >
                <span className="mt-0.5 text-base font-black leading-none text-[#ff5500] sm:text-lg">
                  /
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-[#ff5500]/90 sm:text-[11px]">
                    {service.id}
                  </p>
                  <p className="mt-0.5 text-[12px] font-medium text-white/85 sm:mt-1 sm:text-[13px]">
                    {service.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
