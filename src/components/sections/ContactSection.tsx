"use client";

import { useEffect } from "react";
import Balancer from "react-wrap-balancer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
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
                    href="mailto:mohamedamine.balti@esprit.tn"
                    className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mohamedamine.balti@esprit.tn
                  </a>
                  <a 
                    href="tel:+21692358690"
                    className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +216 92 358 690
                  </a>
                </div>
                <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300">
                  Response time: 24–48 hours
                </p>
              </div>
            </div>

            {/* Calendly Widget */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/mohamedamine-balti-esprit?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
