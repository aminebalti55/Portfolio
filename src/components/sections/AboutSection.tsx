"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import BlurText from "@/components/reactbits/BlurText";
import CountUp from "@/components/reactbits/CountUp";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32 dark:bg-zinc-950"
    >

      <Container>
        {/* Top Section - Hero style intro */}
        <motion.div
          className="grid gap-16 lg:grid-cols-2 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left - Main Content */}
          <div className="flex flex-col justify-center">
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5500]"
              variants={itemVariants}
            >
              {about.eyebrow}
            </motion.p>

            {/* Animated Title with BlurText */}
            <div className="mt-6">
              <BlurText
                text={about.title}
                delay={80}
                animateBy="words"
                direction="bottom"
                className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15] dark:text-zinc-50"
              />
            </div>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
              variants={itemVariants}
            >
              {about.description}
            </motion.p>

            {/* Tags with stagger animation */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {about.tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Badge>{tag}</Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              variants={itemVariants}
            >
              <Button
                href="#contact"
                variant="primary"
                withDot
                className="sm:w-auto"
              >
                Book a 20-min call
              </Button>
              <Button href="#work" variant="secondary" className="sm:w-auto">
                View all projects
              </Button>
            </motion.div>
          </div>

          {/* Right - Stats with CountUp animation */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <SpotlightCard
                    className="h-full rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/80"
                    spotlightColor="rgba(255, 85, 0, 0.12)"
                  >
                    <div className="relative flex h-full flex-col">
                      {/* Decorative accent */}
                      <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-gradient-to-br from-[#ff5500]/10 to-transparent" />

                      <p className="relative text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        <CountUp
                          to={parseInt(stat.value.replace(/\D/g, ""))}
                          duration={2.5}
                          delay={0.3 + index * 0.2}
                          suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                        />
                      </p>
                      <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        {stat.label}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          className="my-20 h-px"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,85,0,0.3), transparent)",
          }}
        />

      </Container>
    </section>
  );
}
