"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Footer } from "@/components/sections/Footer";

// All projects consolidated
const allProjects = [
  {
    id: "01",
    title: "Romorquage Mont Rapido",
    slug: "romorquage",
    category: "Landing Page",
    year: "2025",
    description: "A modern towing service landing page with real-time location mapping and mobile-first design — helping stranded drivers find reliable roadside assistance fast.",
    image: "/images/projects/romorquage/hero.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Mapbox"],
    color: "#f97316",
    featured: true,
  },
  {
    id: "02",
    title: "AutoAlly",
    slug: "autoally",
    category: "Marketplace Platform",
    year: "2025",
    description: "A comprehensive car marketplace with real-time messaging, secure escrow payments, KYC verification, and price alerts.",
    image: "/images/projects/autoally/herosectioj.png",
    tech: ["Next.js", "Spring Boot", "Socket.io", "PostgreSQL"],
    color: "#3b82f6",
    featured: true,
  },
  {
    id: "03",
    title: "EasyRHIS",
    slug: "easyrhis",
    category: "SaaS Platform",
    year: "2024",
    description: "Multi-tenant HR management software for restaurant chains — handling employee data, shifts, and payroll across brands like Five Guys and KFC.",
    image: "/images/projects/easyrhis/easyrhis.png",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    color: "#ff7733",
    featured: true,
  },
  {
    id: "04",
    title: "FLEDEM",
    slug: "fledem",
    category: "Enterprise System",
    year: "2024",
    description: "Enterprise fleet management platform with real-time telemetry, CAN signal processing, calibration systems, and Python analytics.",
    image: "/placeholders/device.svg",
    tech: ["ASP.NET Core", "React", "MongoDB", "SignalR", "Python"],
    color: "#6366f1",
    featured: true,
  },
  {
    id: "05",
    title: "Atlas",
    slug: "atlas",
    category: "Personal Finance",
    year: "2025",
    description: "Personal finance app with expense tracking, income management, savings goals, and beautiful financial reports.",
    image: "/images/projects/Atlas/dashboard.png",
    tech: ["React", "Supabase", "Tailwind CSS", "Chart.js"],
    color: "#10b981",
    featured: false,
  },
  {
    id: "06",
    title: "Cassandra",
    slug: "cassandra",
    category: "Health Tech",
    year: "2025",
    description: "A personal health organization platform helping people document their health journey and prepare for doctor appointments.",
    image: "/images/projects/cassandra/herosection.png",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
    color: "#8b5cf6",
    featured: false,
  },
  {
    id: "07",
    title: "InvoiceBirds",
    slug: "invoicebirds",
    category: "Full-Stack Development",
    year: "2025",
    description: "A comprehensive invoicing and business management platform for freelancers and small businesses.",
    image: "/images/projects/invoicebirds/invoicebirds-01-hero.png",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    color: "#ff5500",
    featured: false,
  },
];

const categories = ["All", "SaaS Platform", "Marketplace Platform", "Enterprise System", "Landing Page", "Health Tech", "Personal Finance"];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,100,50,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <SiteHeader />

        <Container className="relative pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
              Portfolio
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-white">Selected</span>
              <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              A collection of production-grade applications — from SaaS platforms serving thousands of users to enterprise systems processing real-time data.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/" variant="ghost" withDot className="w-full sm:w-auto">
                Back home
              </ButtonLink>
              <ButtonLink
                href="/#contact"
                variant="primary"
                withDot
                className="w-full sm:w-auto"
              >
                Start a project
              </ButtonLink>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-10 sm:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: "7+", label: "Projects Delivered" },
              { value: "5+", label: "Happy Clients" },
              { value: "3+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="relative bg-zinc-950 py-20 sm:py-28">
        <Container>
          {/* Filter Tags */}
          <motion.div 
            className="mb-12 flex flex-wrap items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((label, index) => (
                <motion.button
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    label === "All"
                      ? "bg-white text-zinc-900"
                      : "border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
            <p className="text-sm text-zinc-500">
              {allProjects.length} projects
            </p>
          </motion.div>

          {/* Featured Projects - Large Cards */}
          <div className="mb-12">
            <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Featured Work
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {allProjects.filter(p => p.featured).slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/work/${project.slug}`} className="group block">
                    <article className="relative h-[500px] overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20" />
                      </div>

                      {/* Content */}
                      <div className="relative flex h-full flex-col justify-end p-8">
                        {/* Category Badge */}
                        <div className="mb-4">
                          <span 
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                            style={{ 
                              backgroundColor: `${project.color}20`,
                              color: project.color,
                              border: `1px solid ${project.color}40`
                            }}
                          >
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold text-white transition-colors group-hover:text-orange-400 sm:text-4xl">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-400 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* View Button */}
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
                          <span className="h-2 w-2 rounded-full bg-orange-500" />
                          View case study
                          <svg 
                            className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* More Featured - Medium Cards */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {allProjects.filter(p => p.featured).slice(2, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <article className="relative h-[380px] overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/10" />
                    </div>

                    {/* Content */}
                    <div className="relative flex h-full flex-col justify-end p-6">
                      <span 
                        className="mb-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium"
                        style={{ 
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                          border: `1px solid ${project.color}40`
                        }}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-orange-400">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white">
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        View case study
                        <svg 
                          className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Other Projects - Smaller Cards */}
          <div className="mb-8">
            <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              More Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allProjects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link href={`/work/${project.slug}`} className="group block">
                    <article className="overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                        
                        {/* Category Badge on Image */}
                        <div className="absolute left-4 top-4">
                          <span 
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm"
                            style={{ 
                              backgroundColor: `${project.color}30`,
                              color: project.color,
                              border: `1px solid ${project.color}50`
                            }}
                          >
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-orange-400">
                            {project.title}
                          </h3>
                          <span className="text-xs text-zinc-500">{project.year}</span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-zinc-800/80 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* View Link */}
                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                          View project
                          <svg 
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent_70%)]" />
        <Container className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
              Let's discuss how I can help bring your ideas to life with modern, scalable solutions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/#contact" variant="primary" withDot>
                Start a conversation
              </ButtonLink>
              <ButtonLink href="/" variant="ghost" withDot>
                Back to home
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
