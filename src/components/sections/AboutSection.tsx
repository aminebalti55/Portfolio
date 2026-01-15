"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import BlurText from "@/components/reactbits/BlurText";
import CountUp from "@/components/reactbits/CountUp";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const caseStudies = [
  {
    id: "01",
    title: "InvoiceBirds",
    slug: "invoicebirds",
    category: "Full-Stack Development",
    year: "2025",
    description:
      "A comprehensive invoicing and business management platform for freelancers and small businesses",
    color: "#ff5500",
    image: "/images/projects/invoicebirds/invoicebirds-01-hero.png",
  },
  {
    id: "02",
    title: "EasyRHIS",
    slug: "easyrhis",
    category: "HR Software Management",
    year: "2024",
    description:
      "A comprehensive HR management software for streamlining employee operations and workflows",
    color: "#ff7733",
    image: "/images/projects/easyrhis/easyrhis.png",
  },
  {
    id: "03",
    title: "Cassandra",
    slug: "cassandra",
    category: "Health Tech",
    year: "2025",
    description: "A personal health organization platform helping people document their health journey and prepare for doctor appointments",
    color: "#8b5cf6",
    image: "/images/projects/cassandra/herosection.png",
  },
];

// Animation variants
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
                Get in touch
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

        {/* Case Studies Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            className="mb-12 flex items-end justify-between"
            variants={itemVariants}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Featured Work
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Recent Case Studies
              </h3>
            </div>
            <Button href="/work" variant="ghost" className="hidden sm:flex">
              View all →
            </Button>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={`/work/${study.slug}`}
                  className="group block h-full cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700"
                >
                  {/* Cover Image - No overlay, clean display */}
                  {study.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Number Badge */}
                    <div className={`${study.image ? 'mb-4' : 'mb-8'} flex items-center justify-between`}>
                      <motion.span
                        className="text-6xl font-black text-zinc-100 transition-colors group-hover:text-zinc-200 dark:text-zinc-800/80 dark:group-hover:text-zinc-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {study.id}
                      </motion.span>
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        {study.year}
                      </span>
                    </div>

                    {/* Category */}
                    <p
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: study.color }}
                    >
                      {study.category}
                    </p>

                    {/* Title */}
                    <h4 className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                      {study.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {study.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors group-hover:text-zinc-600">
                      <span>View project</span>
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <motion.div className="mt-8 sm:hidden" variants={itemVariants}>
            <Button href="/work" variant="secondary" className="w-full">
              View all projects →
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
