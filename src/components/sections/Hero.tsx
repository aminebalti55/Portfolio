"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { socials } from "@/lib/content";
import { motion } from "framer-motion";

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
    <section className="relative isolate min-h-screen overflow-hidden rounded-b-[48px] bg-[#1a0a08] text-white">
      {/* Background orange ambient glow - more prominent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,rgba(255,80,20,0.18)_0%,rgba(200,50,10,0.08)_40%,transparent_65%)]" />
      {/* Dark vignette overlay for dramatic depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,transparent_0%,rgba(15,5,5,0.3)_50%,rgba(10,5,5,0.8)_80%,#0a0505_100%)]" />
      
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
              <div className="pointer-events-none absolute bottom-[0%] left-1/2 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,90,25,0.4)_0%,rgba(255,60,15,0.25)_30%,rgba(200,45,10,0.12)_55%,transparent_75%)] blur-[60px] lg:h-[620px] lg:w-[900px]" />
              <div className="absolute bottom-[8%] left-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_100%_120%_at_50%_15%,#ff7b25_0%,#ff6018_20%,#ff4d10_35%,#e83d12_50%,#c52a0a_65%,#8a1805_80%,rgba(60,12,5,0.4)_92%,transparent_100%)] blur-[2px] sm:bottom-[10%] sm:h-[420px] sm:w-[420px] lg:bottom-[4%] lg:h-[540px] lg:w-[540px]" />
              <div className="absolute bottom-[14%] left-1/2 z-0 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,160,100,0.4)_0%,rgba(255,120,60,0.2)_50%,transparent_75%)] blur-[25px] sm:bottom-[16%] sm:h-[260px] sm:w-[260px] lg:bottom-[10%] lg:h-[340px] lg:w-[340px]" />

              <div className="relative z-10 -mb-24 h-[520px] w-[400px] sm:-mb-28 sm:h-[620px] sm:w-[480px] lg:-mb-32 lg:h-[750px] lg:w-[600px]">
                <Image
                  src="/images/amine-portrait.png"
                  alt="Amine - Senior Software Engineer"
                  fill
                  sizes="(min-width: 1024px) 600px, (min-width: 640px) 480px, 400px"
                  className="object-contain object-bottom"
                  priority
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0505] via-[#0f0808]/80 to-transparent sm:h-48 lg:h-56" />
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
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Available · Q2 2026
                </span>
                <p className="mt-4 text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
                  Hey, I Am
                </p>
                <h1 className="font-inter mt-3 text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.03em] text-white">
                  Software
                  <br />
                  Engineer
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
                <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-[280px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_55%,rgba(255,90,25,0.45)_0%,rgba(255,60,15,0.22)_45%,transparent_75%)] blur-[40px]" />
                <div className="absolute bottom-[12%] left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_100%_120%_at_50%_15%,#ff7b25_0%,#ff6018_20%,#ff4d10_35%,#e83d12_50%,#c52a0a_65%,#8a1805_80%,rgba(60,12,5,0.4)_92%,transparent_100%)] blur-[1px]" />
                <div className="relative z-10 h-[340px] w-[260px] sm:h-[400px] sm:w-[300px]">
                  <Image
                    src="/images/amine-portrait.png"
                    alt="Amine - Senior Software Engineer"
                    fill
                    sizes="(max-width: 640px) 260px, 300px"
                    className="object-contain object-bottom"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0505] via-[#0f0808]/80 to-transparent" />
                </div>
              </motion.div>

              {/* Desktop-only spacer cell so the 3-column grid alignment holds. */}
              <div className="hidden lg:order-2 lg:block" />

              {/* Right column - Description, CTA, secondary actions */}
              <motion.div
                className="order-3 flex flex-col items-center text-center lg:items-start lg:pb-28 lg:text-left"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0.3}
              >
                <p className="max-w-[400px] text-[13px] leading-[1.8] text-white/80 lg:max-w-[360px]">
                  I build production SaaS, internal tools, and AI workflows
                  for founders and teams who need senior execution without
                  agency overhead. Remote across the UK, Germany, Canada, and
                  Tunisia.
                </p>
                <p className="mt-3 max-w-[400px] text-[12px] leading-[1.6] text-white/55 lg:max-w-[360px]">
                  $55–75/hr · One contract slot open this quarter.
                </p>

                {/* Primary CTA — anchor to #contact (smooth scroll via CSS) */}
                <motion.a
                  href="#contact"
                  className="group mt-5 flex w-full max-w-[400px] items-center justify-between rounded-full bg-white py-2.5 pl-5 pr-2 text-[13px] font-medium text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all lg:max-w-[360px]"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="whitespace-nowrap">Schedule a Free Call</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff5500] text-white transition-transform duration-300 group-hover:rotate-45">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M10 7h7v7" />
                    </svg>
                  </span>
                </motion.a>

                {/* Secondary: direct email — no JS, no form, no friction. */}
                <a
                  href={`mailto:${socials.email}?subject=Project%20enquiry`}
                  className="mt-3 inline-flex items-center gap-1.5 text-[12px] text-white/65 transition hover:text-white"
                >
                  Or email me directly
                  <span aria-hidden="true">→</span>
                </a>

                {/* Profile chips — LinkedIn + GitHub trust signals */}
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06s.93-2.06 2.06-2.06 2.06.93 2.06 2.06-.93 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub
                  </a>
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
