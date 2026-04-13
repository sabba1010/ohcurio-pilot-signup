import { useLanguage } from "../contexts/LanguageContext";

const Problem = () => {
  const { t } = useLanguage();
  return (
    <section id="problem" className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
        {t("prob_title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        <div className="rounded-[2rem] bg-muted p-8">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            {t("prob_label")}
          </h3>
          <ul className="space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <li>{t("prob_p1")}</li>
            <li>{t("prob_p2")}</li>
            <li>{t("prob_p3")}</li>
            <li>{t("prob_p4")}</li>
          </ul>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            {t("sol_label")}
          </h3>
          <ul className="space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <li>{t("sol_p1")}</li>
            <li>{t("sol_p2")}</li>
            <li>{t("sol_p3")}</li>
            <li>{t("sol_p4")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;
