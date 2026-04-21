import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const FAQ = () => {
  const { t } = useLanguage();

  const questions = [
    {
      badge: t("faq_q1_badge"),
      badgeColor: "text-green-600",
      title: t("faq_q1_title"),
      body: t("faq_q1_body"),
      bgColor: "bg-[#fdfcf6]", // Very light cream/peach as in image
    },
    {
      title: t("faq_q2_title"),
      body: t("faq_q2_body"),
      bgColor: "bg-white",
    },
    {
      badge: t("faq_q3_badge"),
      badgeColor: "text-amber-600",
      title: t("faq_q3_title"),
      body: t("faq_q3_body"),
      bgColor: "bg-[#fdfcf6]",
    },
    {
      title: t("faq_q4_title"),
      body: t("faq_q4_body"),
      bgColor: "bg-white",
    },
    {
      title: t("faq_q5_title"),
      body: t("faq_q5_body"),
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold tracking-[0.18em] text-[#c0392b] uppercase mb-3 text-center"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[30px] md:text-[36px] font-serif font-bold text-gray-900 leading-tight mb-16 text-center"
        >
          {t("about_directors_link")}
        </motion.h2>

        <div className="space-y-6">
          {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${q.bgColor} border border-gray-100 rounded-2xl p-8 shadow-sm`}
          >
            {q.badge && (
              <span className={`text-[11px] font-bold tracking-wider uppercase ${q.badgeColor} mb-2 block`}>
                {q.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
              {q.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {q.body}
            </p>
          </motion.div>
        ))}

        {/* Blue Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: questions.length * 0.1 }}
          className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-8 shadow-sm flex gap-6 items-start"
        >
          <div className="w-8 h-8 bg-blue-600 rounded flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              {t("faq_footer_title")}
            </h3>
            <p className="text-blue-800/80 leading-relaxed text-[15px]">
              {t("faq_footer_body")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
};

export default FAQ;
