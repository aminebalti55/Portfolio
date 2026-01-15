"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SiteHeader } from "@/components/sections/SiteHeader";
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
            {/* Center column - Portrait with glow - CENTERED */}
            <motion.div
              className="absolute inset-0 z-0 flex items-end justify-center"
              initial="hidden"
              animate="visible"
              variants={fadeInScale}
            >
              {/* Outer orange radiation/glow - blurry spread like reference */}
              <div className="pointer-events-none absolute bottom-[0%] left-1/2 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,90,25,0.4)_0%,rgba(255,60,15,0.25)_30%,rgba(200,45,10,0.12)_55%,transparent_75%)] blur-[60px] lg:h-[620px] lg:w-[900px]" />
              
              {/* Main orange glow circle - two-toned gradient like reference (bright yellow-orange top, deep red bottom) */}
              <div className="absolute bottom-[8%] left-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_100%_120%_at_50%_15%,#ff7b25_0%,#ff6018_20%,#ff4d10_35%,#e83d12_50%,#c52a0a_65%,#8a1805_80%,rgba(60,12,5,0.4)_92%,transparent_100%)] blur-[2px] sm:bottom-[10%] sm:h-[420px] sm:w-[420px] lg:bottom-[4%] lg:h-[540px] lg:w-[540px]" />
              
              {/* Inner hot center glow - warm highlight */}
              <div className="absolute bottom-[14%] left-1/2 z-0 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,160,100,0.4)_0%,rgba(255,120,60,0.2)_50%,transparent_75%)] blur-[25px] sm:bottom-[16%] sm:h-[260px] sm:w-[260px] lg:bottom-[10%] lg:h-[340px] lg:w-[340px]" />

              {/* Portrait image - centered, touching bottom edge with fade */}
              <div className="relative z-10 -mb-24 h-[520px] w-[400px] sm:-mb-28 sm:h-[620px] sm:w-[480px] lg:-mb-32 lg:h-[750px] lg:w-[600px]">
                <Image
                  src="/images/amine-portrait.png"
                  alt="Amine - Senior Software Engineer"
                  fill
                  sizes="(min-width: 1024px) 600px, (min-width: 640px) 480px, 400px"
                  className="object-contain object-bottom"
                  priority
                />
                {/* Bottom blur/fade gradient overlay - matches dark vignette */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0505] via-[#0f0808]/80 to-transparent sm:h-48 lg:h-56" />
              </div>
            </motion.div>

            {/* 3-column grid: Title | Space | Description+CTA - ON TOP */}
            <div className="relative grid min-h-[500px] items-end gap-8 lg:min-h-[620px] lg:grid-cols-[1.15fr_1fr_1.15fr] lg:gap-0" style={{ zIndex: 10 }}>
              {/* Left column - Title */}
              <motion.div
                className="relative z-20 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:pb-24 lg:text-left"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0.1}
              >
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
                  Hey, I Am
                </p>
                <h1 className="font-inter mt-3 text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.03em] text-white">
                  Software
                  <br />
                  Engineer
                </h1>
              </motion.div>

              {/* Center column - Empty space for portrait */}
              <div className="order-1 lg:order-2" />

              {/* Right column - Description and CTA - LEFT ALIGNED like reference */}
              <motion.div
                className="order-3 flex flex-col items-center text-center lg:items-start lg:pb-28 lg:text-left"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0.3}
              >
                <p className="max-w-[400px] text-[13px] leading-[1.8] text-white/60 lg:max-w-[360px]">
                  Portfolio of Amine — Full-stack engineer crafting digital products & experiences with precision and purpose.
                </p>
                {/* CTA Button - Longer and thinner like reference */}
                <motion.button
                  type="button"
                  className="group mt-5 flex w-full max-w-[400px] items-center justify-between rounded-full bg-white py-2.5 pl-5 pr-2 text-[13px] font-medium text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all lg:max-w-[360px]"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 60px rgba(0,0,0,0.6)"
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
                </motion.button>
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
