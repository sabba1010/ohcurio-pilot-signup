/**
 * PhoneMockup — embeds the OhCurio app via <iframe>.
 *
 * Why iframe?
 *  ✅ Scroll works natively (iframe has its own viewport + scrollbar)
 *  ✅ position:fixed bottom nav stays INSIDE the iframe viewport
 *  ✅ Works correctly on all deployments (Vercel, Netlify, etc.)
 *  ✅ transform:scale on the iframe shrinks the whole viewport proportionally
 */

const PHONE_W = 300;
const PHONE_H = 580;
const BORDER  = 12;
const SCREEN_W = PHONE_W - BORDER * 2; // 276
const SCREEN_H = PHONE_H - BORDER * 2; // 556

// App designed for 430px wide mobile viewport
const IFRAME_W = 430;
const SCALE = SCREEN_W / IFRAME_W;        // ≈ 0.6418
const IFRAME_H = SCREEN_H / SCALE;        // ≈ 866px  (unscaled height to fill screen)

const PhoneMockup = () => (
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
      <div style={{ position:"absolute", right:-3, top:110, width:3, height:50, background:"rgba(255,255,255,0.15)", borderRadius:"0 3px 3px 0" }} />
      {/* Vol + */}
      <div style={{ position:"absolute", left:-3, top:90,  width:3, height:30, background:"rgba(255,255,255,0.15)", borderRadius:"3px 0 0 3px" }} />
      {/* Vol - */}
      <div style={{ position:"absolute", left:-3, top:130, width:3, height:30, background:"rgba(255,255,255,0.15)", borderRadius:"3px 0 0 3px" }} />

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
          iframe is IFRAME_W × IFRAME_H in its own world (430 × 866).
          We scale it down so it fits exactly in SCREEN_W × SCREEN_H.
          The iframe's internal viewport = 430px wide, so the app
          renders as if on a real 430px mobile device.
          Scrolling and position:fixed all work inside the iframe.
        */}
        <iframe
          src="/app-preview"
          title="Oh Curio! App Preview"
          style={{
            width: IFRAME_W,
            height: IFRAME_H,
            border: "none",
            display: "block",
            transformOrigin: "top left",
            transform: `scale(${SCALE})`,
            background: "#F9F6F2",
          }}
        />
      </div>

      {/* Glass reflection */}
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

export default PhoneMockup;
