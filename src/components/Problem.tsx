import { useLanguage } from "../contexts/LanguageContext";

const Problem = () => {
  const { t } = useLanguage();
  return (
    <section id="problem" className="px-6 py-24 max-w-7xl mx-auto">
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

      {/* Before vs After Experience - Hidden as requested
      <div className="mt-20 md:mt-32 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center relative">
          
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background rounded-full items-center justify-center border border-border shadow-sm text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>

          <div className="flex-1 bg-muted/30 rounded-[2rem] p-8 md:p-10 border border-border/40 relative overflow-hidden group">
            <h4 className="text-sm font-bold text-muted-foreground mb-8 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive/50"></span>
              {t("ui_old_way")}
            </h4>
            
            <div className="bg-background/80 p-6 rounded-md border border-border flex flex-col gap-2 grayscale opacity-70 font-mono text-sm md:text-base leading-relaxed shadow-inner">
              <p className="text-foreground">
                {t("ui_before_msg")}
              </p>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-[2rem] p-8 md:p-10 border border-primary/20 shadow-2xl shadow-primary/5 relative overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            
            <h4 className="text-sm font-bold text-primary mb-8 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              {t("ui_curio_way")}
            </h4>
            
            <div className="space-y-4 relative z-10">
              <div className="bg-background p-6 rounded-2xl border border-primary/10 shadow-lg flex flex-col gap-3 transform transition-transform hover:scale-[1.02] duration-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-primary uppercase">{t("ui_pers_msg")}</span>
                  <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></span>
                </div>
                <p className="text-lg md:text-xl font-bold text-foreground leading-snug">
                  {t("ui_after_msg")}
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="bg-primary/10 text-primary text-xs font-semibold py-1.5 px-3 rounded-full flex items-center gap-1.5 transition-colors hover:bg-primary/20 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                    Tap to renew
                  </span>
                  <span className="bg-success/10 text-success text-xs font-semibold py-1.5 px-3 rounded-full flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                    Add more time
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      */}
    </section>
  );
};

export default Problem;
