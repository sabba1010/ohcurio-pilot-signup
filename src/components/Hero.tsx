import { useLanguage } from "../contexts/LanguageContext";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToForm = () => {
    document.getElementById("pilot-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative flex items-center overflow-hidden py-14 lg:min-h-[90vh] lg:py-0">
        {/* Background Overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center px-6 py-12 lg:py-16 max-w-7xl mx-auto w-full relative z-10">
          {/* Left: Copy */}
          <div className="text-left animate-in fade-in slide-in-from-left duration-1000 max-w-2xl">
            <p className="text-[22px] font-bold tracking-[0.2em] text-primary mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
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

          {/* Right: Phone mockup with light mobile shadow */}
          <div className="flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300 overflow-visible p-12 lg:p-20">
            <div className="min-w-[340px] w-full lg:max-w-[380px]">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Floating Cards Section ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 animate-in fade-in zoom-in duration-1000">
            {/* Card 1 */}
            <div className="w-full sm:w-80 pt-5 pb-7 px-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float z-30">
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

            {/* Card 2 */}
            <div className="w-full sm:w-80 pt-5 pb-7 px-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float [animation-delay:-2s] z-20">
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

            {/* Card 3 */}
            <div className="w-full sm:w-80 pt-5 pb-7 px-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float [animation-delay:-4s] z-10">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
