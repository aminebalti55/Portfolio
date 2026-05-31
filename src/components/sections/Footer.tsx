import Link from "next/link";
import { brand, navLinks, socials } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070305] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_15%_85%,rgba(255,77,31,0.35),transparent_60%),radial-gradient(900px_circle_at_85%_10%,rgba(255,0,92,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/35 to-black/70" />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {brand.location}
            </p>
            <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Have a SaaS, internal tool, or AI workflow to ship?
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
              Currently open to senior full-stack contracts — remote, EU/US time
              zones, ~20–40h per week. Reply within 24–48 hours.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-white">Contact</p>
                <div className="mt-3 space-y-2 text-sm text-white/70">
                  <a
                    href={`mailto:${socials.email}`}
                    className="block transition hover:text-white"
                  >
                    {socials.email}
                  </a>
                  <a
                    href={`tel:${socials.phone.replace(/\s+/g, "")}`}
                    className="block transition hover:text-white"
                  >
                    {socials.phone}
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06s.93-2.06 2.06-2.06 2.06.93 2.06 2.06-.93 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Menu</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="w-fit transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-1 text-sm text-white/60">
              <p>
                © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
              </p>
              <p className="text-white/40">
                Designed and built by Amine with Next.js, Tailwind CSS, and Framer Motion. Deployed on Vercel.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-10">
            <div className="font-script text-[clamp(3rem,10vw,7rem)] leading-none tracking-tight text-white/90">
              {brand.wordmark}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
