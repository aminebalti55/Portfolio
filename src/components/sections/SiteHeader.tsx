"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { brand, navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

function MobileMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button type="button" variant="ghost" size="sm" className="px-3">
          <Menu className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          className="z-50 w-64 overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-2 text-white shadow-lg backdrop-blur-xl"
        >
          <div className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Menu
          </div>
          {navLinks.map((item) => (
            <DropdownMenu.Item key={item.href} asChild>
              <Link
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm text-white/90 outline-none transition hover:bg-white/10 focus:bg-white/10"
              >
                {item.label}
              </Link>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="my-2 h-px bg-white/10" />
          <DropdownMenu.Item asChild>
            <Link
              href="/#contact"
              className="block rounded-xl px-3 py-2 text-sm font-medium text-white outline-none transition hover:bg-white/10 focus:bg-white/10"
            >
              Get in touch
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function SiteHeader({ className }: { className?: string }) {
  return (
    <motion.header 
      className={cn("absolute inset-x-0 top-0 z-20", className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <Container className="flex items-center justify-between py-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="font-script text-[2.75rem] leading-none text-white transition-opacity hover:opacity-80">
            {brand.wordmark}
          </Link>
        </motion.div>

        <div className="flex items-center gap-10">
          <NavigationMenu.Root className="hidden md:block">
            <NavigationMenu.List className="flex items-center gap-8 text-[15px] text-white/70">
            {navLinks.map((item, index) => (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="rounded-lg px-2 py-1 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          </NavigationMenu.Root>

          <motion.div 
            className="flex items-center gap-2 md:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/95 px-5 py-2 text-sm font-semibold text-zinc-900 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:bg-white"
            >
              Get in touch
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-300 group-hover:rotate-45">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M10 7h7v7" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
          </motion.div>
        </div>
      </Container>
    </motion.header>
  );
}
