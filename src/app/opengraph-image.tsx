import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/site";

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "Med Amine Balti — Senior Full-Stack Product Engineer";

const DISPLAY_TEXT = [
  "M/",
  "MED AMINE BALTI",
  "PRODUCT ENGINEER",
  "I BUILD",
  "PRODUCTION",
  "SAAS",
  "FROM FIRST DECISION",
  "TO PRODUCTION.",
  "SENIOR FULL-STACK PRODUCT ENGINEERING",
  "SAAS / INTERNAL TOOLS / OPERATIONAL SYSTEMS",
  "REMOTE / EU + US OVERLAP",
].join("");

async function loadDisplayFont() {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@800&text=${encodeURIComponent(
    DISPLAY_TEXT,
  )}`;
  const css = await (await fetch(cssUrl)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (!resource) throw new Error("Failed to resolve the Open Graph font");

  const response = await fetch(resource[1]);
  if (!response.ok) throw new Error("Failed to load the Open Graph font");
  return response.arrayBuffer();
}

export default async function OpenGraphImage() {
  const interTight = await loadDisplayFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          overflow: "hidden",
          background: "#100706",
          color: "#f1eee6",
          fontFamily: "Inter Tight",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.34,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 460,
            height: 460,
            left: 390,
            top: 104,
            display: "flex",
            borderRadius: 999,
            background: "#ff4f17",
            boxShadow: "0 0 100px rgba(255,79,23,.18)",
          }}
        />

        {/* ImageResponse renders this directly into the generated PNG. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${SITE_URL}/images/amine-portrait.png`}
          alt=""
          width="470"
          height="570"
          style={{
            position: "absolute",
            zIndex: 3,
            left: 388,
            bottom: -38,
            width: 470,
            height: 570,
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />

        <div
          style={{
            position: "absolute",
            zIndex: 5,
            top: 42,
            left: 54,
            right: 54,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 18,
            borderBottom: "1px solid rgba(241,238,230,.18)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                fontSize: 31,
                fontWeight: 800,
                letterSpacing: "-.08em",
              }}
            >
              <span style={{ color: "#f1eee6" }}>M</span>
              <span style={{ color: "#ff4f17" }}>/</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 18,
                lineHeight: 1,
              }}
            >
              <span style={{ fontSize: 14, letterSpacing: "-.02em" }}>
                MED AMINE BALTI
              </span>
              <span
                style={{
                  marginTop: 7,
                  color: "rgba(241,238,230,.45)",
                  fontSize: 8,
                  letterSpacing: ".16em",
                }}
              >
                PRODUCT ENGINEER
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              color: "rgba(241,238,230,.55)",
              fontSize: 10,
              letterSpacing: ".13em",
            }}
          >
            PORTFOLIO / 2026
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 4,
            left: 54,
            top: 205,
            width: 560,
            display: "flex",
            flexDirection: "column",
            fontSize: 83,
            fontWeight: 800,
            letterSpacing: "-.065em",
            lineHeight: 0.86,
          }}
        >
          <span style={{ display: "flex" }}>I BUILD</span>
          <span style={{ display: "flex" }}>PRODUCTION</span>
          <span style={{ display: "flex" }}>SAAS</span>
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 5,
            top: 216,
            right: 54,
            width: 286,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              display: "flex",
              color: "#f1eee6",
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: "-.045em",
              lineHeight: 1.02,
            }}
          >
            FROM FIRST DECISION
          </span>
          <span
            style={{
              display: "flex",
              color: "#ff4f17",
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: "-.045em",
              lineHeight: 1.02,
            }}
          >
            TO PRODUCTION.
          </span>

          <div
            style={{
              display: "flex",
              width: 52,
              height: 4,
              marginTop: 28,
              background: "#ff4f17",
            }}
          />

          <span
            style={{
              display: "flex",
              marginTop: 26,
              color: "rgba(241,238,230,.62)",
              fontSize: 12,
              letterSpacing: ".07em",
              lineHeight: 1.45,
            }}
          >
            SAAS / INTERNAL TOOLS / OPERATIONAL SYSTEMS
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 6,
            left: 54,
            right: 54,
            bottom: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 17,
            borderTop: "1px solid rgba(241,238,230,.18)",
            color: "rgba(241,238,230,.56)",
            fontSize: 9,
            letterSpacing: ".14em",
          }}
        >
          <span style={{ display: "flex" }}>
            SENIOR FULL-STACK PRODUCT ENGINEERING
          </span>
          <span style={{ display: "flex" }}>REMOTE / EU + US OVERLAP</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter Tight",
          data: interTight,
          style: "normal",
          weight: 800,
        },
      ],
    },
  );
}
