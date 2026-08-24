import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FallenThroneSoundtrack } from "@/components/fallen-throne/FallenThroneSoundtrack";
import { SITE_URL } from "@/lib/site";

const title = "Fallen Throne — Pixel-Art Bidding Leaderboard";
const description = "A live pixel-art bidding leaderboard where cumulative spend determines who rules the board.";
const liveUrl = "https://fallenthrone.lol/";
const buttonLabelStyle = {
  fontFamily: "var(--font-pixel-body), monospace",
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: ".035em",
  transform: "translateY(1.5px)",
} as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/fallen-throne" },
  openGraph: {
    title,
    description,
    url: "/work/fallen-throne",
    type: "article",
    images: [{
      url: "/images/projects/fallen-throne/fallen-throne-social-share.jpg",
      width: 1200,
      height: 630,
      alt: "Fallen Throne pixel-art bidding leaderboard",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/projects/fallen-throne/fallen-throne-social-share.jpg"],
  },
};

const interactionSteps = [
  ["01", "Claim a place", "Submit a website, X profile, or Instagram profile. The target is normalised into one stable listing, so repeat bids top up the same claim."],
  ["02", "Bid to rise", "Stripe captures a whole-dollar bid. The board ranks cumulative paid spend, not a temporary auction window or an invented score."],
  ["03", "Rule in public", "The hierarchy moves from the crown down through dukes, knights, commoners, and the chained floor of the board."],
];

const reliability = [
  ["Cumulative by design", "Every successful top-up strengthens the same listing instead of creating duplicates."],
  ["Deterministic ties", "Equal spend is resolved by outbound clicks, then the earlier paid claim, then a stable identifier."],
  ["Immediate paid return", "Stripe Search is eventually consistent, so checkout return verifies and merges the payment directly without double-counting it later."],
  ["Failure stays honest", "Unpaid, expired, foreign, zero-value, and malformed events never enter the board as successful bids."],
];

const technology = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Stripe Checkout",
  "PaymentIntents",
  "Cloudflare Workers",
  "OpenNext",
  "Durable Objects",
  "Wrangler",
  "Custom CSS",
  "AVIF + PNG",
  "Node test runner",
];

export default function FallenThroneCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fallen Throne",
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    url: liveUrl,
    datePublished: "2026",
    author: {
      "@type": "Person",
      name: "Med Amine Balti",
      url: SITE_URL,
    },
    description,
    image: `${SITE_URL}/images/projects/fallen-throne/fallen-throne-social-share.jpg`,
  };

  return (
    <main className="fallen-throne-case">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <FallenThroneSoundtrack />

      <nav className="ft-nav" aria-label="Fallen Throne case study navigation">
        <Link href="/work"><span aria-hidden="true">←</span> Leave the kingdom</Link>
        <a href={liveUrl} target="_blank" rel="noreferrer">Play the live board <span aria-hidden="true">↗</span></a>
      </nav>

      <header className="ft-hero">
        <Image
          src="/images/projects/fallen-throne/generated/throne-room-hero.png"
          alt="A pixel-art throne room lit by braziers, with a crown waiting below the throne"
          fill
          priority
          sizes="100vw"
          className="ft-hero__backdrop"
        />
        <div className="ft-hero__shade" />
        <div className="ft-hero__content">
          <h1 className="sr-only">Fallen Throne</h1>
          <Image
            className="ft-hero__wordmark"
            src="/images/projects/fallen-throne/generated/fallen-throne-wordmark.png"
            alt="Fallen Throne"
            width={1535}
            height={1024}
            priority
          />
          <p className="ft-hero__lede">A live pixel-art bidding leaderboard where cumulative spend determines who rules the board.</p>
          <p className="ft-hero__support">Visitors submit a website or social profile, place a Stripe-backed bid, and climb a public hierarchy built to feel like a game.</p>
          <div className="ft-actions">
            <a className="ft-button ft-button--gold" href={liveUrl} target="_blank" rel="noreferrer"><span className="ft-button__label" style={buttonLabelStyle}>Enter the live kingdom</span></a>
            <a className="ft-button ft-button--ghost" href="#overview"><span className="ft-button__label" style={buttonLabelStyle}>Read the build story</span></a>
          </div>
        </div>
        <div className="ft-hero__scroll" aria-hidden="true">Scroll to descend ↓</div>
      </header>

      <section className="ft-section ft-overview" id="overview">
        <div className="ft-section__heading">
          <p className="ft-kicker">Chapter I · The premise</p>
          <h2>The product makes status <em>visible.</em></h2>
        </div>
        <div className="ft-overview__grid">
          <div className="ft-premise-copy">
            <span className="ft-illuminated-t" aria-hidden="true" />
            <p><span className="sr-only">T</span>he brief was intentionally simple: turn a paid leaderboard into a world people understand before they read the rules. The art attracts attention, but the interaction model has to stay legible, fair, and immediate once money enters the loop.</p>
          </div>
          <dl>
            <div><span className="ft-meta-asset ft-meta-asset--role" aria-hidden="true" /><div><dt>Role</dt><dd>Product design and full-stack engineering.</dd></div></div>
            <div><span className="ft-meta-asset ft-meta-asset--status" aria-hidden="true" /><div><dt>Status</dt><dd>Live product with real payments.</dd></div></div>
            <div><span className="ft-meta-asset ft-meta-asset--loop" aria-hidden="true" /><div><dt>Core loop</dt><dd>Submit, pay, climb, defend.</dd></div></div>
            <div><span className="ft-meta-asset ft-meta-asset--delivery" aria-hidden="true" /><div><dt>Delivery</dt><dd>Fast worldwide through Cloudflare&apos;s edge.</dd></div></div>
          </dl>
        </div>
      </section>

      <section className="ft-section ft-loop" id="interaction">
        <div className="ft-section__heading ft-section__heading--center">
          <p className="ft-kicker">Chapter II · Interaction model</p>
          <h2>Three moves to <em>the crown.</em></h2>
        </div>
        <div className="ft-loop__steps">
          {interactionSteps.map(([number, heading, copy]) => (
            <article key={number}>
              <span className="ft-loop__number">{number}</span>
              <div className="ft-loop__copy">
                <h3>{heading}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="ft-character-lineup" aria-label="The Fallen Throne rank hierarchy">
          {[
            ["king", "King", "Stripe confirms the money"],
            ["knight", "Knight", "The Worker checks every return"],
            ["commoner", "Commoner", "Durable Objects count visits"],
            ["bidder", "Bottom rank", "Cloudflare keeps the hall fast"],
          ].map(([rank, label, detail]) => (
            <figure key={rank}>
              <div className={`ft-character ft-character--${rank}`} aria-hidden="true" />
              <figcaption><strong>{label}</strong><span>{detail}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="ft-section ft-judgment">
        <div className="ft-judgment__quote">
          <p className="ft-kicker">Product judgment</p>
          <blockquote>“The joke works because the system doesn’t cheat.”</blockquote>
        </div>
        <div className="ft-judgment__copy">
          <h2>Theme everywhere.<br /><em>Rules underneath.</em></h2>
          <p>The medieval hierarchy is not decoration pasted over a dashboard. Each rank has its own placement, costume, plaque, price-to-pass action, and responsive composition. Under that theatre, every monetary decision stays explicit and testable.</p>
          <p>The board also gives a bidder something immediately after checkout: a verified place in the hierarchy, a public destination link, and a clear path to defend or improve the rank.</p>
        </div>
      </section>

      <section className="ft-section ft-live-board">
        <div className="ft-section__heading">
          <p className="ft-kicker">Chapter III · Live interface</p>
          <h2>One hall.<br /><em>Every viewport.</em></h2>
        </div>
        <figure className="ft-live-board__desktop">
          <Image
            src="/images/projects/fallen-throne/live/board-complete.png"
            alt="Desktop Fallen Throne leaderboard with the king, dukes, knights, commoners, and lower rank"
            width={1440}
            height={900}
            sizes="(min-width: 900px) 88vw, 96vw"
          />
          <figcaption><span>01</span> The live hall fits status, rules, bidding, and hierarchy into one game board.</figcaption>
        </figure>
        <div className="ft-live-board__mobile-grid">
          <figure>
            <Image src="/images/projects/fallen-throne/live/board-mobile-430.png" alt="Fallen Throne mobile leaderboard" width={430} height={932} sizes="(max-width: 700px) 86vw, 31vw" />
            <figcaption>Responsive rank composition</figcaption>
          </figure>
          <div className="ft-live-board__mobile-copy">
            <p className="ft-kicker">Mobile is not a crop</p>
            <h3>The hierarchy recomposes.</h3>
            <p>The mobile version introduces its own controls, tighter character tiers, and a bottom game dock. The board still reads from crown to floor without turning the experience into a generic stacked list.</p>
          </div>
          <figure>
            <Image src="/images/projects/fallen-throne/live/join-mobile-430.png" alt="Fallen Throne mobile join form" width={430} height={932} sizes="(max-width: 700px) 86vw, 31vw" />
            <figcaption>Composited checkout entrance</figcaption>
          </figure>
        </div>
      </section>

      <section className="ft-section ft-payment">
        <div className="ft-section__heading">
          <p className="ft-kicker">Chapter IV · Payment architecture</p>
          <h2>Money in.<br /><em>Rank out.</em></h2>
        </div>
        <div className="ft-payment__plain">
          <article><strong>Stripe is the cashier.</strong><p>It collects the bid and tells the app what was actually paid. The browser never gets to invent that number.</p></article>
          <article><strong>The Cloudflare Worker is the doorman.</strong><p>It validates requests, creates checkouts, limits abuse, and rebuilds the board close to the visitor.</p></article>
          <article><strong>Durable Objects are the shared counters.</strong><p>They keep click totals consistent even when many people visit different listings at the same time.</p></article>
        </div>
        <div className="ft-payment__rail" aria-label="Fallen Throne payment flow">
          {[
            ["01", "Normalise", "Turn a domain or social profile into one stable listing identity."],
            ["02", "Open checkout", "A Cloudflare Worker asks Stripe for a branded payment page."],
            ["03", "Confirm payment", "Stripe reports the money it captured, not the number sent by the browser."],
            ["04", "Return instantly", "The exact payment is verified so the bidder sees their new place immediately."],
            ["05", "Build the ranks", "Paid totals are added together and the public hierarchy is recalculated."],
            ["06", "Count attention", "Durable Objects record outbound visits without making the payment board wait."],
          ].map(([number, heading, copy]) => (
            <article key={number}>
              <span>{number}</span><h3>{heading}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ft-section ft-reliability">
        <div className="ft-reliability__intro">
          <p className="ft-kicker">The unglamorous work</p>
          <h2>Edge cases guard <em>the throne.</em></h2>
          <p>A playful interface can still handle payments like production software. The real engineering lives in the moments that could make a bidder lose trust.</p>
        </div>
        <div className="ft-reliability__grid">
          {reliability.map(([heading, copy], index) => (
            <article key={heading}>
              <span>0{index + 1}</span>
              <h3>{heading}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ft-section ft-tech">
        <div className="ft-tech__proof">
          <span>106</span>
          <div><strong>/ 106 tests passing</strong><p>Ranking, payment verification, responsive regressions, audio, checkout return, and hierarchy behavior.</p></div>
        </div>
        <div className="ft-tech__stack">
          <p className="ft-kicker">Technology</p>
          <h2>A game face on an <em>edge stack.</em></h2>
          <div>{technology.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="ft-outcome">
        <Image src="/images/projects/fallen-throne/generated/royal-ui-kit.png" alt="" fill sizes="100vw" className="ft-outcome__ornaments" aria-hidden="true" />
        <div className="ft-outcome__content">
          <p className="ft-kicker">Outcome</p>
          <h2>Not a mockup.<br /><em>A live kingdom.</em></h2>
          <p>Fallen Throne shipped as a public product experiment with a complete payment loop, a responsive game interface, edge deployment, and a regression suite that protects the parts most likely to break trust.</p>
          <div className="ft-actions">
            <a className="ft-button ft-button--gold" href={liveUrl} target="_blank" rel="noreferrer"><span className="ft-button__label" style={buttonLabelStyle}>Challenge the board</span></a>
            <Link className="ft-button ft-button--ghost" href="/work"><span className="ft-button__label" style={buttonLabelStyle}>Return to selected work</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
