"use client";

import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { socials } from "@/lib/content";

export function ContactSection() {
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                <Balancer>Let's work together</Balancer>
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                Schedule a call to discuss your project, or reach out directly via email or phone.
              </p>
              
              {/* Contact Details Card */}
              <div className="mt-8 rounded-3xl border border-black/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-zinc-900/40">
                <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  Get in touch
                </p>
                <div className="mt-4 space-y-3">
                  <a
                    href={`mailto:${socials.email}`}
                    className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {socials.email}
                  </a>
                  <a
                    href={`tel:${socials.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {socials.phone}
                  </a>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06s.93-2.06 2.06-2.06 2.06.93 2.06 2.06-.93 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    linkedin.com/in/aminebdev
                  </a>
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    github.com/aminebalti55
                  </a>
                </div>
                <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300">
                  Response time: 24–48 hours
                </p>
              </div>
            </div>

            {/* Calendly Widget — with skeleton placeholder + always-visible
                direct booking link as a fallback so users never see a blank box. */}
            <div className="lg:col-span-7">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="text-zinc-500 dark:text-zinc-400">
                    Pick a 20-minute slot below
                  </span>
                  <a
                    href={socials.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    Or open in new tab
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
                  {!calendlyReady && (
                    <div
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-zinc-900"
                      aria-hidden="true"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">
                          Loading calendar…
                        </p>
                      </div>
                      <a
                        href={socials.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-white/25"
                      >
                        Book directly on Calendly →
                      </a>
                    </div>
                  )}
                  <div
                    className="calendly-inline-widget"
                    data-url={`${socials.calendly}?hide_event_type_details=1&hide_gdpr_banner=1`}
                    style={{ minWidth: "320px", height: "700px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
