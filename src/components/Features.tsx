import { useLanguage } from "../contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    { title: t("feat_1_title"), description: t("feat_1_desc") },
    { title: t("feat_2_title"), description: t("feat_2_desc") },
    { title: t("feat_3_title"), description: t("feat_3_desc") },
    { title: t("feat_4_title"), description: t("feat_4_desc") },
    { title: t("feat_5_title"), description: t("feat_5_desc") },
    { title: t("feat_6_title"), description: t("feat_6_desc") },
    { title: t("feat_7_title"), description: t("feat_7_desc") },
  ];

  return (
    <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        {t("feat_title")}
      </h2>
      <p className="text-muted-foreground text-center mb-4 text-lg max-w-xl mx-auto">
        {t("feat_desc")}
      </p>
      <p className="text-center text-sm font-semibold text-foreground/80 mb-12 max-w-xl mx-auto">
        {t("feat_trust")}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, index) => (
          <div
            key={f.title}
            className={`p-8 rounded-3xl border border-border bg-card transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 ${
              index === features.length - 1 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
            }`}
          >
            <h3 className="text-lg font-bold text-foreground mb-2 font-sans" style={{ fontFamily: 'var(--font-body)' }}>
              {f.title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
