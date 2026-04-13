import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToForm = () => {
    document.getElementById("pilot-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Brand Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/herobg.png" 
          alt="" 
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center px-6 py-16 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-left animate-in fade-in slide-in-from-left duration-1000 max-w-2xl">
        <p className="text-lg font-bold tracking-[0.2em] uppercase text-primary mb-8 font-body">
          {t("hero_tag")}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight font-heading">
          {t("hero_title")}
        </h1>
        <div className="flex flex-col sm:flex-row gap-5 mb-12">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 active:translate-y-0"
          >
            {t("hero_cta")}
          </button>
        </div>
        <p className="max-w-lg text-lg text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-6">
          {t("hero_desc")}
        </p>
      </div>

      <div className="relative h-[600px] hidden lg:block animate-in fade-in zoom-in duration-1000">
        {/* Final Balanced "Just Right" Cluster of Cards */}
        <div className="absolute top-[12%] right-[10%] w-80 pt-5 pb-7 px-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float z-30">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">
            {t("card_1_label")}
          </p>
          <p className="text-xl font-bold text-foreground mb-1 font-heading">
            {t("card_1_title")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("card_1_desc")}
          </p>
        </div>

        <div className="absolute top-[40%] left-[5%] w-80 pt-5 pb-7 px-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float [animation-delay:-2s] z-20">
          <p className="text-xs font-bold text-success uppercase tracking-widest mb-3">
            {t("card_2_label")}
          </p>
          <p className="text-xl font-bold text-foreground mb-1 font-heading">
            {t("card_2_title")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("card_2_desc")}
          </p>
        </div>

        <div className="absolute top-[68%] right-[5%] w-80 pt-5 pb-7 px-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float [animation-delay:-4s] z-10">
          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
            {t("card_3_label")}
          </p>
          <p className="text-xl font-bold text-foreground mb-1 font-heading">
            {t("card_3_title")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("card_3_desc")}
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
