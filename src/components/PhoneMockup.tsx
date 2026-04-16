import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const notifications = [
  {
    icon: "📚",
    labelKey: "card_1_label",
    titleKey: "card_1_title",
    descKey: "card_1_desc",
    accentColor: "#C8763A", // primary terracotta
    bgColor: "#FFF8F4",
  },
  {
    icon: "🔔",
    labelKey: "card_2_label",
    titleKey: "card_2_title",
    descKey: "card_2_desc",
    accentColor: "#2A4D6E", // secondary navy
    bgColor: "#F4F8FF",
  },
  {
    icon: "✨",
    labelKey: "card_3_label",
    titleKey: "card_3_title",
    descKey: "card_3_desc",
    accentColor: "#8A6820", // accent gold
    bgColor: "#FFFBF0",
  },
];

const PhoneMockup = () => {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveCard((prev) => (prev + 1) % notifications.length);
        setAnimating(false);
      }, 400);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const n = notifications[activeCard];

  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* Phone shell */}
      <div
        style={{
          width: 300,
          height: 580,
          borderRadius: 44,
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 1px 0 rgba(255,255,255,0.2) inset",
          padding: "12px",
          position: "relative",
        }}
      >
        {/* Side button */}
        <div
          style={{
            position: "absolute",
            right: -3,
            top: 110,
            width: 3,
            height: 50,
            background: "rgba(255,255,255,0.15)",
            borderRadius: "0 3px 3px 0",
          }}
        />
        {/* Volume buttons */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 90,
            width: 3,
            height: 30,
            background: "rgba(255,255,255,0.15)",
            borderRadius: "3px 0 0 3px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 130,
            width: 3,
            height: 30,
            background: "rgba(255,255,255,0.15)",
            borderRadius: "3px 0 0 3px",
          }}
        />

        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 34,
            background: "#F5F0EB",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
        <style>{`
          .phone-scroll::-webkit-scrollbar { width: 3px; }
          .phone-scroll::-webkit-scrollbar-track { background: transparent; }
          .phone-scroll::-webkit-scrollbar-thumb { background: #C8763A55; border-radius: 10px; }
          .phone-scroll::-webkit-scrollbar-thumb:hover { background: #C8763A99; }
        `}</style>
          {/* Status bar */}
          <div
            style={{
              background: "#1a1a2e",
              padding: "12px 20px 8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "white", fontSize: 11, fontWeight: 700, fontFamily: "Lato, sans-serif" }}>
              9:41
            </span>
            {/* Dynamic island */}
            <div
              style={{
                width: 72,
                height: 22,
                background: "#000",
                borderRadius: 14,
              }}
            />
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              {/* Signal */}
              {[3, 5, 7, 9].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: 3,
                    height: h,
                    background: i < 3 ? "white" : "rgba(255,255,255,0.35)",
                    borderRadius: 2,
                  }}
                />
              ))}
              {/* Battery */}
              <div
                style={{
                  width: 18,
                  height: 9,
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  borderRadius: 3,
                  marginLeft: 3,
                  display: "flex",
                  alignItems: "center",
                  padding: "1px",
                  position: "relative",
                }}
              >
                <div style={{ width: "75%", height: "100%", background: "#4CAF50", borderRadius: 1 }} />
                <div
                  style={{
                    position: "absolute",
                    right: -4,
                    width: 2,
                    height: 5,
                    background: "rgba(255,255,255,0.6)",
                    borderRadius: "0 1px 1px 0",
                  }}
                />
              </div>
            </div>
          </div>

          {/* App header */}
          <div
            style={{
              background: "#1a1a2e",
              padding: "10px 20px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "linear-gradient(135deg, #C8763A, #E8904A)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              📖
            </div>
            <div>
              <div
                style={{
                  color: "white",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 15,
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                Oh Curio!
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 9,
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                }}
              >
                Your Library, Personalized
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div
            className="phone-scroll"
            style={{
              flex: 1,
              overflowY: "scroll",
              overflowX: "hidden",
              padding: "16px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Greeting */}
            <div style={{ marginBottom: 4 }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  margin: 0,
                }}
              >
                Good morning, Sarah 👋
              </p>
              <p style={{ fontSize: 10, color: "#8a7a6a", fontFamily: "Lato, sans-serif", margin: "2px 0 0" }}>
                3 updates for you today
              </p>
            </div>

            {/* Animated notification card */}
            <div
              style={{
                background: n.bgColor,
                borderRadius: 18,
                padding: "14px 16px",
                border: `1.5px solid ${n.accentColor}22`,
                boxShadow: `0 4px 20px ${n.accentColor}18`,
                transition: "opacity 0.4s ease, transform 0.4s ease",
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(8px)" : "translateY(0)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 12,
                    background: `${n.accentColor}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {n.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: n.accentColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: "0 0 2px",
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    {t(n.labelKey)}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1a1a2e",
                      margin: "0 0 3px",
                      fontFamily: "'Cormorant Garamond', serif",
                      lineHeight: 1.2,
                    }}
                  >
                    {t(n.titleKey)}
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      color: "#6a5a4a",
                      margin: 0,
                      fontFamily: "Lato, sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {t(n.descKey)}
                  </p>
                </div>
              </div>
            </div>

            {/* Page indicator dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 5, margin: "2px 0" }}>
              {notifications.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveCard(i)}
                  style={{
                    width: i === activeCard ? 18 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === activeCard ? "#C8763A" : "#C8763A44",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Quick stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div
                style={{
                  background: "white",
                  borderRadius: 14,
                  padding: "12px 14px",
                  border: "1px solid #e8e0d8",
                }}
              >
                <p style={{ fontSize: 20, fontWeight: 700, color: "#C8763A", margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>
                  12
                </p>
                <p style={{ fontSize: 9, color: "#8a7a6a", margin: "2px 0 0", fontFamily: "Lato, sans-serif" }}>
                  Books checked out
                </p>
              </div>
              <div
                style={{
                  background: "white",
                  borderRadius: 14,
                  padding: "12px 14px",
                  border: "1px solid #e8e0d8",
                }}
              >
                <p style={{ fontSize: 20, fontWeight: 700, color: "#2A4D6E", margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>
                  3
                </p>
                <p style={{ fontSize: 9, color: "#8a7a6a", margin: "2px 0 0", fontFamily: "Lato, sans-serif" }}>
                  Events this week
                </p>
              </div>
            </div>

            {/* Family Card Hub */}
            <div
              style={{
                background: "linear-gradient(135deg, #C8763A 0%, #E8904A 100%)",
                borderRadius: 14,
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p style={{ color: "white", fontSize: 11, fontWeight: 700, margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>
                  Family Card Hub
                </p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 9, margin: "2px 0 0", fontFamily: "Lato, sans-serif" }}>
                  4 family members linked
                </p>
              </div>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                }}
              >
                👨‍👩‍👧‍👦
              </div>
            </div>

            {/* Section header */}
            <p style={{ fontSize: 11, fontWeight: 700, color: "#1a1a2e", margin: "4px 0 0", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.05em" }}>
              Upcoming Events
            </p>

            {/* Event rows */}
            {[
              { emoji: "🌱", title: "Seed Library Workshop", time: "Tomorrow · 10:00 AM", tag: "Garden" },
              { emoji: "📖", title: "Summer Reading Kickoff", time: "Sat · 2:00 PM", tag: "Kids" },
              { emoji: "🎨", title: "Art & Design Talk", time: "Sun · 11:00 AM", tag: "Adults" },
              { emoji: "🎵", title: "Live Music in the Stacks", time: "Fri · 6:30 PM", tag: "All Ages" },
            ].map((ev) => (
              <div
                key={ev.title}
                style={{
                  background: "white",
                  borderRadius: 14,
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  border: "1px solid #e8e0d8",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "#F5F0EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {ev.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#1a1a2e", margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>
                    {ev.title}
                  </p>
                  <p style={{ fontSize: 9, color: "#8a7a6a", margin: "1px 0 0", fontFamily: "Lato, sans-serif" }}>
                    {ev.time}
                  </p>
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: "#C8763A",
                    background: "#C8763A18",
                    padding: "2px 7px",
                    borderRadius: 20,
                    fontWeight: 700,
                    fontFamily: "Lato, sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  {ev.tag}
                </div>
              </div>
            ))}

            {/* Spacer so last item isn't hidden behind bottom nav */}
            <div style={{ height: 8 }} />
          </div>

          {/* Bottom nav */}
          <div
            style={{
              padding: "10px 4px",
              background: "white",
              borderTop: "1px solid #e8e0d8",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {[
              { icon: "🏠", label: "Home", active: true },
              { icon: "🔍", label: "Search", active: false },
              { icon: "📅", label: "Events", active: false },
              { icon: "👤", label: "Profile", active: false },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <div style={{ fontSize: 16 }}>{item.icon}</div>
                <p
                  style={{
                    fontSize: 8,
                    color: item.active ? "#C8763A" : "#8a7a6a",
                    fontWeight: item.active ? 700 : 400,
                    margin: 0,
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  {item.label}
                </p>
                {item.active && (
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#C8763A",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reflection overlay */}
        <div
          style={{
            position: "absolute",
            inset: 12,
            borderRadius: 34,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
      </div>


    </div>
  );
};

export default PhoneMockup;
