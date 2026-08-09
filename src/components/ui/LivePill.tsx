/**
 * Deployed-URL chip.
 *
 * Deliberately quiet: the credibility here is the domain itself, not the
 * decoration around it. The previous version stacked an emerald border, an
 * emerald fill, backdrop-blur, a drop shadow and a pulsing glowing dot — five
 * effects competing, in a green that fought the brand orange. A pulsing dot
 * also reads as "system status monitor", which is the wrong claim: this says
 * "you can go look at it", not "it is up right now".
 */
export function LivePill({ href }: { href?: string }) {
  if (!href) return null;

  const host = new URL(href).hostname.replace(/^www\./, "");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/pill inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/50 px-2.5 py-1 font-mono text-[11px] leading-none text-zinc-300 backdrop-blur-sm transition-colors hover:border-white/25 hover:text-white"
    >
      <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#4ade80]" />
      {host}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3 w-3 text-zinc-500 transition-colors group-hover/pill:text-zinc-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7" />
        <path d="M10 7h7v7" />
      </svg>
    </a>
  );
}
