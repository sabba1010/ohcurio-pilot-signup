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
      <div className="max-w-6xl mx-auto px-6">

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="overflow-hidden h-[240px]">
                <img
                  src={photo.src}
                  alt={photo.cap}
                  className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed italic">
                  "{photo.cap}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-100 rounded-3xl p-8 md:p-12 mb-10 bg-white shadow-sm max-w-4xl"
        >
          <p className="text-[17px] text-gray-700 leading-[1.8] font-sans mb-8">
            {t("about_story_p1")}
          </p>

          {/* Monospace notification block */}
          <div className="bg-[#f9f9f5] border-l-4 border-primary/30 rounded-r-lg px-6 py-5 mb-8">
            <p className="font-mono text-[14px] text-gray-500 leading-relaxed tracking-tight">
              {t("about_notif_quote")}
            </p>
          </div>

          <p className="text-[17px] text-gray-700 leading-[1.8] font-sans">
            {t("about_story_p2")}
          </p>
        </motion.div>

        {/* Badges Row */}
        <div className="border border-gray-100 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-3 mb-12 bg-gray-50/30">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center py-10 px-6 ${
                i < 2 ? "md:border-r border-gray-100" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-gray-100" : ""}`}
            >
              <span className="text-primary/40 text-lg mb-4">{badge.icon}</span>
              <p className="text-[14px] font-bold text-gray-800 mb-1">{badge.l1}</p>
              <p className="text-[13px] text-gray-500 font-medium">{badge.l2}</p>
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
