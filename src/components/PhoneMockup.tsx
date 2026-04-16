/**
 * PhoneMockup — embeds the OhCurio app inside a phone shell via <iframe>.
 *
 * Why iframe?
 *  • scroll works natively inside the iframe
 *  • position:fixed elements (bottom nav) stay clamped to iframe viewport
 *  • transform:scale on the iframe shrinks both visuals AND iframe viewport,
 *    so everything renders exactly as if on a real 430px device
 */

// Phone shell dimensions (what the user sees on the landing page)
const PHONE_W = 300;
const PHONE_H = 580;
const BORDER = 12;
const SCREEN_W = PHONE_W - BORDER * 2; // 276px
const SCREEN_H = PHONE_H - BORDER * 2; // 556px

// The OhCurio app is built for a 430px-wide device viewport
const IFRAME_W = 430;
const IFRAME_H = 900; // taller than screen so content can scroll

// Scale the iframe down so it fits inside SCREEN_W
const SCALE = SCREEN_W / IFRAME_W; // ≈ 0.6418

const PhoneMockup = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>

      {/* Phone shell */}
      <div
        style={{
          width: PHONE_W,
          height: PHONE_H,
          borderRadius: 44,
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 1px 0 rgba(255,255,255,0.2) inset",
          padding: BORDER,
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Side power button */}
        <div style={{ position: "absolute", right: -3, top: 110, width: 3, height: 50, background: "rgba(255,255,255,0.15)", borderRadius: "0 3px 3px 0" }} />
        {/* Volume up */}
        <div style={{ position: "absolute", left: -3, top: 90, width: 3, height: 30, background: "rgba(255,255,255,0.15)", borderRadius: "3px 0 0 3px" }} />
        {/* Volume down */}
        <div style={{ position: "absolute", left: -3, top: 130, width: 3, height: 30, background: "rgba(255,255,255,0.15)", borderRadius: "3px 0 0 3px" }} />

        {/* Screen — clips the scaled iframe */}
        <div
          style={{
            width: SCREEN_W,
            height: SCREEN_H,
            borderRadius: 34,
            overflow: "hidden",
            position: "relative",
            background: "#F9F6F2",
          }}
        >
          {/*
            The iframe is IFRAME_W × IFRAME_H (430 × 900) in its own viewport.
            We scale it down by SCALE so it fits in SCREEN_W.
            transform-origin: top left keeps the top-left corner anchored.
            The parent div clips any overflow from the scaled iframe.
          */}
          <iframe
            src="/app-preview"
            title="Oh Curio! App Preview"
            scrolling="yes"
            style={{
              width: IFRAME_W,
              height: IFRAME_H,
              border: "none",
              transformOrigin: "top left",
              transform: `scale(${SCALE})`,
              display: "block",
              background: "#F9F6F2",
              // These stop pointer events from reaching the page behind during scroll
              pointerEvents: "auto",
            }}
          />
        </div>

        {/* Glass reflection overlay */}
        <div
          style={{
            position: "absolute",
            inset: BORDER,
            borderRadius: 34,
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};

export default PhoneMockup;
