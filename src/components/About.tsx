import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useLanguage();

  const photos = [
    { src: "https://i.ibb.co.com/VprpF6DW/about1.jpg", cap: t("about_gallery_cap_1") },
    { src: "https://i.ibb.co.com/G3dZSNLY/about2.jpg", cap: t("about_gallery_cap_2") },
    { src: "https://i.ibb.co.com/KjtmRF8J/about3.jpg", cap: t("about_gallery_cap_3") },
  ];

  const badges = [
    { icon: "®", l1: t("about_badge_1_l1"), l2: t("about_badge_1_l2") },
    { icon: "🔐", l1: t("about_badge_2_l1"), l2: t("about_badge_2_l2") },
    { icon: "📍", l1: t("about_badge_3_l1"), l2: t("about_badge_3_l2") },
  ];

  const rotations = [-4, 0, 4];

  return (
    <section id="about" className="py-6 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[15px] font-bold tracking-[0.18em] text-[#c0392b] uppercase mb-3 text-center " style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t("about_tag")}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[34px] md:text-[40px] font-serif font-bold text-gray-900 leading-tight mb-1 text-center"
        >
          {t("about_title_1")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[30px] md:text-[36px] font-serif font-bold text-[#c0392b] leading-tight mb-16 text-center"
        >
          {t("about_title_2")}
        </motion.h2>

        {/* Polaroid Photo Grid — bigger gap, no hover effect */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-10 mb-20 py-8">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
              style={{
                rotate: `${rotations[i]}deg`,
                backgroundColor: "#fdfbf7",
                boxShadow: "0 6px 28px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08)",
              }}
              className="relative cursor-pointer"
            >
              {/* Polaroid frame */}
              <div
                style={{
                  width: "290px",
                  padding: "14px 14px 0 14px",
                  backgroundColor: "#fdfbf7",
                }}
              >
                {/* Photo area */}
                <div
                  style={{
                    width: "262px",
                    height: "300px",
                    overflow: "hidden",
                    backgroundColor: "#e5e5e5",
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.cap}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                    draggable={false}
                  />
                </div>

                {/* Caption area */}
                <div
                  style={{
                    padding: "14px 6px 18px",
                    textAlign: "center",
                    minHeight: "64px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Courier New', Courier, monospace",
                      fontSize: "11.5px",
                      color: "#555",
                      lineHeight: "1.5",
                      fontStyle: "normal",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {photo.cap}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-100 rounded-3xl p-8 md:p-12 mb-10 bg-white shadow-sm max-w-4xl mx-auto"
        >
          <p className="text-[17px] text-gray-700 leading-[1.8] font-sans mb-8">
            {t("about_story_p1")}
          </p>

          {/* Monospace notification block */}
          <div className="bg-[#f9f9f5] border-l-4 border-primary/30 rounded-r-lg px-6 py-5 mb-8">
            <div className="flex justify-center items-center w-full">
              {/* <p className="font-mono text-[14px] text-gray-500 leading-relaxed tracking-tight flex-1">
                {t("about_notif_quote")}
              </p> */}
              <img src="/client image 2.png" alt="Client Image" className="max-w-full w-auto max-h-[400px] object-contain rounded-md shadow-sm border border-gray-200" />
            </div>
          </div>

          <p className="text-[17px] text-gray-700 leading-[1.8] font-sans">
            {t("about_story_p2")}
          </p>
        </motion.div>

        {/* Badges Row */}
        <div className="border border-gray-100 grid grid-cols-1 md:grid-cols-3 mb-12 bg-white">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center py-10 px-6 ${i < 2 ? "md:border-r border-gray-100" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-gray-100" : ""}`}
            >
              <span className="text-gray-400 text-lg mb-4">{badge.icon}</span>
              <p className="text-[14px] font-bold text-gray-800 mb-1">{badge.l1}</p>
              <p className="text-[13px] text-gray-500 font-medium">{badge.l2}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );

};

export default About;