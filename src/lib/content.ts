export type NavLink = {
  label: string;
  href: string;
};

export const brand = {
  name: "Amine",
  wordmark: "Amine",
  role: "Senior Developer",
  location: "Remote / Your City",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/#blog" },
];

export const hero = {
  greeting: "Hey! I am",
  headlineTop: "Creative",
  headlineBottom: "Developer",
  description:
    "Placeholder intro text. Use this space to describe what you build, who you help, and what makes your work different.",
  primaryCta: { label: "Schedule a Call", href: "#contact" },
  secondaryCta: { label: "View Work", href: "#work" },
};

export const capabilities = [
  { number: "01", label: "Web Apps" },
  { number: "02", label: "UI Engineering" },
  { number: "03", label: "Design Systems" },
  { number: "04", label: "Performance" },
  { number: "05", label: "Product Thinking" },
];

export const logoCloud = [
  "Logoipsum",
  "Logoplace",
  "Pixelworks",
  "Designify",
  "StudioLab",
  "Northwind",
];

export const about = {
  eyebrow: "About",
  title: "Building products that feel effortless, useful, and memorable.",
  description:
    "Placeholder body copy. Explain your approach, the kinds of problems you solve, and how you collaborate with teams to ship quality work.",
  tags: [
    "Frontend",
    "Backend",
    "UX",
    "Accessibility",
    "TypeScript",
    "Next.js",
    "APIs",
  ],
  stats: [
    { value: "75+", label: "projects shipped" },
    { value: "99%", label: "positive feedback" },
    { value: "30+", label: "happy clients" },
  ],
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "spark" | "layout" | "compass" | "users";
  featured?: boolean;
};

export const services = {
  eyebrow: "Services",
  title: "Building scalable solutions that work.",
  description:
    "From concept to deployment, I deliver end-to-end web applications that solve real business problems. Specialized in SaaS platforms, enterprise software, and modern web technologies.",
  cta: { label: "Start a project", href: "#contact" },
  items: [
    {
      title: "Full-Stack Development",
      description:
        "Complete web applications built with modern tech stacks — React, Next.js, Node.js, and scalable databases.",
      icon: "spark",
      featured: true,
    },
    {
      title: "SaaS Development",
      description:
        "Multi-tenant platforms with authentication, subscriptions, and enterprise-grade features built to scale.",
      icon: "layout",
    },
    {
      title: "API & Backend",
      description:
        "RESTful APIs, microservices, and robust backend architectures using Node.js, NestJS, Spring Boot, and PostgreSQL.",
      icon: "compass",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Pixel-perfect, responsive interfaces with modern design systems, animations, and accessibility in mind.",
      icon: "users",
    },
  ] satisfies ServiceItem[],
};

export type ProjectItem = {
  badge: string;
  title: string;
  description: string;
  image: string;
};

export const projects = {
  eyebrow: "Projects",
  title: "Best Project",
  year: "2025",
  featured: {
    badge: "Landing Page",
    title: "Romorquage Mont Rapido",
    description:
      "A modern towing service landing page with real-time location mapping and mobile-first design.",
    image: "/images/projects/romorquage/hero.png",
  },
  items: [
    {
      badge: "Marketplace Platform",
      title: "AutoAlly",
      description: "Car marketplace with real-time messaging, secure escrow payments, and KYC verification.",
      image: "/images/projects/autoally/herosectioj.png",
    },
    {
      badge: "Personal Finance",
      title: "Atlas",
      description: "Personal finance app with expense tracking, income management, and savings goals.",
      image: "/images/projects/Atlas/dashboard.png",
    },
    {
      badge: "Enterprise Fleet Management",
      title: "FLEDEM",
      description: "Enterprise fleet management platform with real-time telemetry, Python analytics, and CAN signal processing.",
      image: "/placeholders/device.svg",
    },
  ] satisfies ProjectItem[],
};

export const ctaBand = {
  title: "Building solutions that scale",
  description:
    "From concept to deployment, I focus on creating robust, user-centric applications that solve real problems. Whether it's a SaaS platform serving thousands of users or an enterprise system processing real-time data, I deliver production-ready solutions built with modern technologies and best practices.",
  cta: { label: "Let's work together", href: "#contact" },
};

export const testimonials = {
  eyebrow: "Testimonials",
  title: "What clients say",
  items: [
    {
      name: "Marcus Thompson",
      title: "Operations Manager, Five Guys Regional",
      quote:
        "Working with Amine on EasyRHIS transformed how we manage our restaurant operations. The platform handles complex HR workflows across multiple locations seamlessly — from employee scheduling to payroll management. The multi-tenant architecture scales effortlessly as we add new franchise locations. Outstanding work.",
    },
    {
      name: "Michael Chen",
      title: "Engineering Director, FEV Group",
      quote:
        "Amine's contributions to FLEDEM were outstanding. He designed and implemented critical modules including the calibration system and events management with remarkable technical depth. His ability to understand complex CAN signal processing and translate it into intuitive user interfaces made a significant impact on our fleet management platform.",
    },
    {
      name: "Andrew Mitchell",
      title: "Founder & CEO, AutoAlly",
      quote:
        "The car marketplace platform Amine built exceeded our expectations. Real-time messaging with Socket.io, secure escrow payments, and KYC integration — all working flawlessly together. His full-stack expertise with Spring Boot and Next.js delivered a robust, scalable solution that handles thousands of daily transactions.",
    },
    {
      name: "Raed Hcini",
      title: "Founder, Mont Rapido Towing Services",
      quote:
        "Our towing service needed a modern digital presence with real-time location tracking. Amine delivered a beautiful, mobile-first landing page with Supabase integration that transformed how we connect with stranded drivers. The attention to UX details and performance optimization was impressive.",
    },
    {
      name: "James Richardson",
      title: "Startup Founder, Atlas Finance",
      quote:
        "Amine built our personal finance app from concept to launch in record time. The expense tracking, savings goals, and financial reports work seamlessly together. Using React and Supabase, he created a beautiful, intuitive interface that our users love. Communication was clear throughout, and the code quality was excellent.",
    },
    {
      name: "Dr. Emily Parker",
      title: "Healthcare Advocate, Cassandra Health",
      quote:
        "The health management platform Amine developed addresses a critical gap in patient care. The appointment preparation tools and health document wallet help patients be heard and organized. His understanding of both the technical requirements and the human side of healthcare made all the difference.",
    },
  ],
};

export const insights = {
  eyebrow: "Blog",
  title: "Latest insights",
  description:
    "Technical deep-dives, architectural decisions, and lessons learned from building production-scale applications.",
  items: [
    {
      badge: "Architecture",
      title: "Building Multi-Tenant SaaS: Lessons from EasyRHIS",
      date: "Jan 10, 2026",
      slug: "multi-tenant-saas-architecture",
      image: "/placeholders/blog.svg",
    },
    {
      badge: "Real-Time",
      title: "Scaling WebSocket Connections: SignalR in Enterprise Systems",
      date: "Dec 15, 2025",
      slug: "scaling-websocket-signalr",
      image: "/placeholders/blog.svg",
    },
    {
      badge: "Full-Stack",
      title: "From Concept to Production: My Development Workflow",
      date: "Nov 28, 2025",
      slug: "development-workflow",
      image: "/placeholders/blog.svg",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Fill out our form to get in touch",
  description:
    "Placeholder copy. Invite people to reach out and clarify what info you need to respond quickly.",
  submitLabel: "Send message",
};
