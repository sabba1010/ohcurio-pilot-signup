/**
 * PhoneMockup — iPhone 15 Pro Space Black style
 * Features: real-time clock, signal/wifi/battery status bar, Dynamic Island
 */
import { useEffect, useState } from "react";

const PHONE_W  = 340;
const PHONE_H  = 660;
const BORDER   = 12;
const SCREEN_W = PHONE_W - BORDER * 2;  // 316
const SCREEN_H = PHONE_H - BORDER * 2;  // 636

const IFRAME_W = 430;
const SCALE    = SCREEN_W / IFRAME_W;   // smaller content inside the phone

// Status bar sits above the iframe — reduce iframe's available height accordingly
const STATUS_H  = 50;
const IFRAME_H  = (SCREEN_H - STATUS_H) / SCALE;  // unscaled height for the app area

const PhoneMockup = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, "0");
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m} ${ampm}`);
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <style>{`
        @keyframes point-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .try-me-animation {
          animation: point-down 1.2s ease-in-out infinite;
        }

        /* Space Black titanium frame */
        .iphone-frame-black {
          background: linear-gradient(
            160deg,
            #3A3A3C 0%,
            #2C2C2E 20%,
            #1C1C1E 40%,
            #2A2A2C 55%,
            #3C3C3E 70%,
            #2C2C2E 85%,
            #1A1A1C 100%
          );
          box-shadow:
            0 50px 100px -20px rgba(0, 0, 0, 0.25),
            0 30px 60px -30px rgba(0, 0, 0, 0.3),
            inset 0 -2px 6px 0 rgba(255, 255, 255, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.12) inset;
        }
        .iphone-btn-black {
          background: linear-gradient(180deg, #3A3A3C 0%, #1C1C1E 100%);
          box-shadow: 1px 0 2px rgba(0,0,0,0.5), -1px 0 1px rgba(255,255,255,0.06);
        }
        .iphone-btn-black-r {
          background: linear-gradient(180deg, #3A3A3C 0%, #1C1C1E 100%);
          box-shadow: -1px 0 2px rgba(0,0,0,0.5), 1px 0 1px rgba(255,255,255,0.06);
        }
      `}</style>

      {/* ── Phone frame (Space Black) ── */}
      <div
        className="iphone-frame-black"
        style={{
          width: PHONE_W,
          height: PHONE_H,
          borderRadius: 54,
          padding: BORDER,
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* ── Try Me! Arrow ── */}
        <div style={{
          position: "absolute",
          top: -85,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          zIndex: 100,
          pointerEvents: "none",
        }}>
          <span style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "hsl(var(--primary))",
            whiteSpace: "nowrap",
            textShadow: "0 2px 10px rgba(0,0,0,0.05)",
            letterSpacing: "0.02em"
          }}>
            Try me!
          </span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="try-me-animation"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Action button (left top) */}
        <div className="iphone-btn-black" style={{ position:"absolute", left:-3.5, top:130, width:4, height:30, borderRadius:"3px 0 0 3px" }} />
        {/* Volume Up */}
        <div className="iphone-btn-black" style={{ position:"absolute", left:-3.5, top:178, width:4, height:66, borderRadius:"3px 0 0 3px" }} />
        {/* Volume Down */}
        <div className="iphone-btn-black" style={{ position:"absolute", left:-3.5, top:256, width:4, height:66, borderRadius:"3px 0 0 3px" }} />
        {/* Power / Sleep-wake (right) */}
        <div className="iphone-btn-black-r" style={{ position:"absolute", right:-3.5, top:200, width:4, height:90, borderRadius:"0 3px 3px 0" }} />

        {/* ── Screen glass ── */}
        <div
          style={{
            width: SCREEN_W,
            height: SCREEN_H,
            borderRadius: 42,
            overflow: "hidden",
            position: "relative",
            background: "#000",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          {/* ── Status Bar (overlaid on top of iframe) ── */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: STATUS_H,
              zIndex: 30,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 18,
              paddingBottom: 8,
              background: "linear-gradient(180deg, rgba(249,246,242,0.97) 0%, rgba(249,246,242,0.95) 100%)",
            }}
          >
            {/* Time */}
            <span style={{
              fontFamily: "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#1C1C1E",
              letterSpacing: "-0.2px",
              lineHeight: 1,
            }}>
              {time}
            </span>

            {/* Dynamic Island — positioned in center via absolute */}
            <div style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 110,
              height: 32,
              background: "#000",
              borderRadius: 18,
              boxShadow: "0 0 0 1px rgba(255,255,255,0.03)",
            }}>
              {/* Front camera dot */}
              <div style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
              }} />
            </div>

            {/* Right side icons: Signal + WiFi + Battery */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>

              {/* Cellular signal bars */}
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <rect x="0"  y="7" width="3" height="5" rx="1" fill="#1C1C1E"/>
                <rect x="4"  y="5" width="3" height="7" rx="1" fill="#1C1C1E"/>
                <rect x="8"  y="3" width="3" height="9" rx="1" fill="#1C1C1E"/>
                <rect x="12" y="0" width="3" height="12" rx="1" fill="#1C1C1E"/>
              </svg>

              {/* WiFi */}
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                <path d="M7.5 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#1C1C1E"/>
                <path d="M3.2 7C4.4 5.8 5.9 5 7.5 5s3.1.8 4.3 2" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M0.8 4.5C2.6 2.7 4.9 1.5 7.5 1.5S12.4 2.7 14.2 4.5" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>

              {/* Battery */}
              <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                <div style={{
                  width: 22,
                  height: 11,
                  border: "1.5px solid #1C1C1E",
                  borderRadius: 3.5,
                  padding: 1.5,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <div style={{ width: "80%", height: "100%", background: "#1C1C1E", borderRadius: 1.5 }} />
                </div>
                {/* Battery tip */}
                <div style={{
                  width: 2,
                  height: 5,
                  background: "#1C1C1E",
                  borderRadius: "0 1px 1px 0",
                }} />
              </div>
            </div>
          </div>

          {/* ── iframe app content ── */}
          {/* position absolute so it sits exactly below the status bar */}
          <div style={{
            position: "absolute",
            top: STATUS_H,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          }}>
            <iframe
              src="https://no-delete-red.vercel.app/"
              title="Oh Curio! Mobile Preview"
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

          {/* Home indicator */}
          <div style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 130,
            height: 5,
            background: "rgba(0,0,0,0.22)",
            borderRadius: 3,
            zIndex: 25,
          }} />

          {/* Glass reflection */}
          <div style={{
            position: "absolute",
            inset: 0,
            borderRadius: 42,
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
            pointerEvents: "none",
            zIndex: 20,
          }} />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
