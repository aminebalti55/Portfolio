"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { socials } from "@/lib/content";

const nav = [
  { index: "01", label: "Work", href: "/work", match: "work" },
  { index: "02", label: "Experience", href: "/#about", section: "about" },
  { index: "03", label: "Notes", href: "/#notes", section: "notes" },
  { index: "04", label: "Hire", href: "/hire", match: "hire" },
];

export function SiteHeader({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 24);
      setScrollProgress(available > 0 ? Math.min(window.scrollY / available, 1) : 0);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = ["about", "notes"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0, 0.15, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (item: (typeof nav)[number]) => {
    if (item.section) return pathname === "/" && activeSection === item.section;
    return item.match ? pathname.startsWith(`/${item.match}`) : false;
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""} ${className}`}>
      <div className="site-header__inner">
        <Link href="/" className="site-wordmark" aria-label="Med Amine Balti — home" onClick={() => setMenuOpen(false)}>
          <span className="site-wordmark__monogram">M<span>/</span></span>
          <span className="site-wordmark__copy">
            <strong>Med Amine Balti</strong>
            <small>Product engineer</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link className={isActive(item) ? "is-active" : ""} key={item.href} href={item.href}>
              <small>{item.index}</small>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <a className="site-header__cta" href={socials.calendly} target="_blank" rel="noreferrer">
          <span>Start a project</span>
          <strong aria-hidden="true">↗</strong>
        </a>

        <button
          className="site-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <span className="site-header__progress" aria-hidden="true" style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <div className="site-menu-panel" id="mobile-navigation" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link className={isActive(item) ? "is-active" : ""} key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <small>{item.index}</small>
              <span>{item.label}</span>
              <strong aria-hidden="true">↗</strong>
            </Link>
          ))}
        </nav>
        <a className="site-menu-panel__cta" href={socials.calendly} target="_blank" rel="noreferrer">
          <span>Book a 20-minute call</span>
          <strong aria-hidden="true">↗</strong>
        </a>
      </div>
    </header>
  );
}
