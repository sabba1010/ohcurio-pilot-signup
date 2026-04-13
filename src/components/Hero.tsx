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
      <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
        <p className="text-sm font-bold tracking-widest uppercase text-accent mb-6 font-body">
          {t("hero_tag")}
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-[0.95] tracking-tight font-heading">
          {t("hero_title")}
        </h1>
        <p className="max-w-xl text-2xl md:text-3xl font-medium text-foreground mb-8 leading-snug">
          {t("hero_subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground hover:scale-105 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95"
          >
            {t("hero_cta")}
          </button>
        </div>
        <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
          {t("hero_desc")}
        </p>
      </div>

      <div className="relative h-[600px] hidden lg:block animate-in fade-in zoom-in duration-1000">
        <div className="absolute top-10 right-10 w-80 p-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float translate-x-10">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Coming up Tomorrow</p>
          <p className="text-xl font-bold text-foreground mb-1 font-heading">Seed Library Workshop</p>
          <p className="text-sm text-muted-foreground">Join us @ 10:00 AM in the Community Garden</p>
        </div>

        <div className="absolute top-1/2 left-0 w-80 p-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float [animation-delay:-2s] -translate-y-1/2">
          <p className="text-xs font-bold text-success uppercase tracking-widest mb-3">Ready for Pickup</p>
          <p className="text-xl font-bold text-foreground mb-1 font-heading">The Midnight Library</p>
          <p className="text-sm text-muted-foreground">Main branch · Pickup available until 8:00 PM</p>
        </div>

        <div className="absolute bottom-10 right-0 w-80 p-6 bg-white rounded-[2rem] shadow-2xl border border-border/50 animate-float [animation-delay:-4s] translate-x-10">
          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Personalized for you</p>
          <p className="text-xl font-bold text-foreground mb-1 font-heading">New Photography Collection</p>
          <p className="text-sm text-muted-foreground">Based on your recent interest in Art & Design</p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
