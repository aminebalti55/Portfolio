import Link from "next/link";
import { brand, navLinks } from "@/lib/content";
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
              Create a striking visual identity that leaves a lasting impression.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
              Placeholder footer text. Add a short closing pitch, availability, and
              what you’re looking for next.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-white">Contact</p>
                <div className="mt-3 space-y-2 text-sm text-white/70">
                  <p>mohamedamine.balti@esprit.tn</p>
                  <p>+216 92 358 690</p>
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
            <div className="text-sm text-white/60">
              <p>
                © {new Date().getFullYear()} {brand.wordmark}. Crafted with intention.
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
