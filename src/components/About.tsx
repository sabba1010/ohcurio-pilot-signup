import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useLanguage();

  const photos = [
    { src: "/about1.jpeg", cap: t("about_gallery_cap_1") },
    { src: "/about2.jpeg", cap: t("about_gallery_cap_2") },
    { src: "/about3.jpeg", cap: t("about_gallery_cap_3") },
  ];

  const badges = [
    { icon: "®", l1: t("about_badge_1_l1"), l2: t("about_badge_1_l2") },
    { icon: "■", l1: t("about_badge_2_l1"), l2: t("about_badge_2_l2") },
    { icon: "■", l1: t("about_badge_3_l1"), l2: t("about_badge_3_l2") },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold tracking-[0.18em] text-[#c0392b] uppercase mb-3"
        >
          {t("about_tag")}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[34px] md:text-[40px] font-serif font-bold text-gray-900 leading-tight mb-1"
        >
          {t("about_title_1")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[30px] md:text-[36px] font-serif font-bold text-[#c0392b] leading-tight mb-10"
        >
          {t("about_title_2")}
        </motion.h2>

        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-200 rounded-sm overflow-hidden bg-gray-50"
            >
              <img
                src={photo.src}
                alt={photo.cap}
                className="w-full h-[200px] object-cover block"
              />
              <p className="text-[12px] text-gray-500 font-normal leading-snug px-2 py-1.5">
                {photo.cap}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-md p-7 md:p-10 mb-7 bg-white"
        >
          <p className="text-[15px] text-gray-700 leading-[1.75] font-sans mb-7">
            {t("about_story_p1")}
          </p>

          {/* Monospace notification block */}
          <div className="bg-[#f5f5f0] border border-[#e0ddd5] rounded px-5 py-4 mb-7">
            <p className="font-mono text-[13px] text-gray-400 leading-relaxed tracking-tight">
              {t("about_notif_quote")}
            </p>
          </div>

          <p className="text-[15px] text-gray-700 leading-[1.75] font-sans">
            {t("about_story_p2")}
          </p>
        </motion.div>

        {/* Badges Row */}
        <div className="border border-gray-200 rounded-md overflow-hidden grid grid-cols-3 mb-10">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center py-6 px-4 ${
                i < 2 ? "border-r border-gray-200" : ""
              }`}
            >
              <span className="text-gray-400 text-sm mb-2">{badge.icon}</span>
              <p className="text-[13px] font-semibold text-gray-600 mb-0.5">{badge.l1}</p>
              <p className="text-[12px] text-gray-400">{badge.l2}</p>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="border-t border-gray-100 pt-6 text-center">
          <a
            href="#"
            className="text-[11px] font-bold tracking-[0.15em] text-[#c0392b] hover:text-[#922b21] transition-colors uppercase"
          >
            {t("about_directors_link")}
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
