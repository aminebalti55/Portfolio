import { ImageResponse } from "next/og";

// ─── OG image · editorial magazine cover ──────────────────────────────
//
// Composition:
//   ▸ Masthead at top (folio left · édition right + hairline rule)
//   ▸ Wordmark (Great Vibes script) + italic byline anchored bottom-left
//   ▸ Single emerald availability marker bottom-right
//
// Implementation notes (don't break these):
//   • Pass UPPERCASE text directly to the font loader instead of relying
//     on `textTransform: uppercase` — Satori subsets the binary by the
//     EXACT glyphs in the `text` query, then transforms at render time.
//     If you transform CSS-side, the binary won't have the uppercase
//     glyphs and Satori falls back to whatever font does (here: Great
//     Vibes), giving you script `B`s and curly `2`s mid-strap.
//   • Keep the wordmark ≤ 140px so "Med Amine Balti" stays on one line
//     within the 1008px content area (1200px - 2×96px padding).

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "Med Amine Balti — Software Engineer";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );
  if (resource) {
    const res = await fetch(resource[1]);
    if (res.status === 200) return res.arrayBuffer();
  }
  throw new Error(`failed to load font: ${font}`);
}

const NAME = "Med Amine Balti";
const SUBTITLE = "Software Engineer";

// ⚠️ Pass these as the FINAL rendered strings (already uppercase). No
// CSS textTransform — Satori needs the exact glyphs in the font subset.
const FOLIO_LEFT = "N° 01 · PORTFOLIO";
const FOLIO_RIGHT = "ÉDITION · MMXXVI";
const FOOTER_LABEL = "AVAILABLE · Q2 2026";

// Cream off-white — slightly warm. Pure #fff reads as digital chrome;
// a touch of cream reads as printed paper.
const PAPER = "#fafaf5";
const PAPER_55 = "rgba(250,250,245,0.55)";
const PAPER_42 = "rgba(250,250,245,0.42)";
const PAPER_62 = "rgba(250,250,245,0.62)";
const HAIRLINE = "rgba(250,250,245,0.14)";
const EMERALD = "#34d399";
const EMERALD_GLOW = "rgba(52,211,153,0.65)";

export default async function OG() {
  // Three font fetches in parallel. Each gets a glyph-subset tied to
  // the exact text it renders.
  const [greatVibes, playfair, playfairItalic] = await Promise.all([
    loadGoogleFont("Great+Vibes", NAME),
    loadGoogleFont(
      "Playfair+Display",
      `${FOLIO_LEFT}${FOLIO_RIGHT}${FOOTER_LABEL}`,
    ),
    loadGoogleFont("Playfair+Display:ital,wght@1,400", `— ${SUBTITLE}`),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px 96px",
          backgroundColor: "#080406",
          backgroundImage:
            "radial-gradient(1200px circle at 85% 22%, rgba(255,77,31,0.42), transparent 58%), radial-gradient(900px circle at 8% 92%, rgba(255,0,92,0.18), transparent 55%)",
          color: PAPER,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {/* ─── Masthead · absolute top strip ─────────────────────── */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 96,
            right: 96,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 18,
              letterSpacing: "0.36em",
              color: PAPER_42,
              fontWeight: 400,
            }}
          >
            <div style={{ display: "flex" }}>{FOLIO_LEFT}</div>
            <div style={{ display: "flex" }}>{FOLIO_RIGHT}</div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: 1,
              marginTop: 24,
              backgroundColor: HAIRLINE,
            }}
          />
        </div>

        {/* ─── Wordmark + italic byline · natural flow at bottom ──── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "'Great Vibes', cursive",
              fontSize: 140,
              lineHeight: 1.05,
              color: PAPER,
              letterSpacing: "0em",
            }}
          >
            {NAME}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 6,
              paddingLeft: 14,
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: 32,
              fontWeight: 400,
              color: PAPER_62,
              lineHeight: 1.1,
            }}
          >
            <div style={{ display: "flex", opacity: 0.5, marginRight: 18 }}>
              —
            </div>
            <div style={{ display: "flex" }}>{SUBTITLE}</div>
          </div>
        </div>

        {/* ─── Footer · availability marker bottom-right ─────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            fontSize: 16,
            letterSpacing: "0.36em",
            color: PAPER_55,
            fontWeight: 400,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 8,
              height: 8,
              marginRight: 16,
              borderRadius: 999,
              backgroundColor: EMERALD,
              boxShadow: `0 0 14px 2px ${EMERALD_GLOW}`,
            }}
          />
          <div style={{ display: "flex" }}>{FOOTER_LABEL}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Great Vibes",
          data: greatVibes,
          style: "normal",
          weight: 400,
        },
        {
          name: "Playfair Display",
          data: playfair,
          style: "normal",
          weight: 400,
        },
        {
          name: "Playfair Display",
          data: playfairItalic,
          style: "italic",
          weight: 400,
        },
      ],
    },
  );
}
