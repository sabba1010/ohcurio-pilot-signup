import OhCurioApp from "./OhCurioApp";

// Phone dimensions
const PHONE_W = 300;
const PHONE_H = 580;
const BORDER = 12;
const SCREEN_W = PHONE_W - BORDER * 2; // 276
const SCREEN_H = PHONE_H - BORDER * 2; // 556

// The OhCurio app is built for 430px wide
const APP_DESIGN_W = 430;
const SCALE = SCREEN_W / APP_DESIGN_W; // ≈ 0.6418

// The actual rendered height of the un-scaled app is ~2400px (rough).
// We expose SCREEN_H worth of content at a time and let the
// outer scroll container handle the rest.
// Trick: scale() doesn't affect layout, so we use a spacer div
// to push the scrollable height AND use css `zoom` fallback.

const PhoneMockup = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <style>{`
        .phone-scroll-track::-webkit-scrollbar { display: none; }
        .phone-scroll-track { -ms-overflow-style: none; scrollbar-width: none; }
        .app-scale-root { zoom: ${SCALE}; width: ${APP_DESIGN_W}px; }
      `}</style>

      {/* Phone shell */}
      <div
        style={{
          width: PHONE_W,
          height: PHONE_H,
          borderRadius: 44,
          background:
            "linear-gradient(145deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 1px 0 rgba(255,255,255,0.2) inset",
          padding: BORDER,
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Side power button */}
        <div style={{ position: "absolute", right: -3, top: 110, width: 3, height: 50, background: "rgba(255,255,255,0.15)", borderRadius: "0 3px 3px 0" }} />
        {/* Volume buttons */}
        <div style={{ position: "absolute", left: -3, top: 90, width: 3, height: 30, background: "rgba(255,255,255,0.15)", borderRadius: "3px 0 0 3px" }} />
        <div style={{ position: "absolute", left: -3, top: 130, width: 3, height: 30, background: "rgba(255,255,255,0.15)", borderRadius: "3px 0 0 3px" }} />

        {/* Screen — scrollable viewport */}
        <div
          className="phone-scroll-track"
          style={{
            width: SCREEN_W,
            height: SCREEN_H,
            borderRadius: 34,
            overflow: "hidden",
            overflowY: "scroll",
            background: "#F9F6F2",
            position: "relative",
          }}
        >
          {/* zoom-scaled app — layout height is naturally correct with zoom */}
          <div className="app-scale-root">
            <OhCurioApp />
          </div>
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
};

export default PhoneMockup;
