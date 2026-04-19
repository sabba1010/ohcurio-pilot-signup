import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const features = [
    t("about_feat_1"),
    t("about_feat_2"),
    t("about_feat_3"),
    t("about_feat_4"),
    t("about_feat_5"),
    t("about_feat_6"),
  ];

  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
              {t("nav_about")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              {t("about_title")}
            </h3>
          </div>
          
          <p className="text-xl text-foreground font-medium leading-relaxed">
            {t("about_intro")}
          </p>
          
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
          </div>

          <div className="p-8 rounded-3xl bg-secondary/50 border border-border/50">
            <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full block" />
              {t("about_mission_title")}
            </h4>
            <p className="text-muted-foreground text-lg italic">
              "{t("about_mission_desc")}"
            </p>
          </div>
        </div>

        <div className="lg:mt-12 space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-card border border-border shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
            
            <h4 className="text-2xl font-bold text-foreground mb-8 relative">
              {t("about_features_title")}
            </h4>
            
            <ul className="grid gap-6">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-secondary/30"
                >
                  <span className="text-lg leading-relaxed text-foreground/90 font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl border border-dashed border-border/60 bg-muted/30">
             <p className="text-sm text-muted-foreground leading-relaxed">
               Oh Curio! is a modern library platform that simplifies how users explore books, manage activities, and engage with library services, while providing staff with powerful tools for efficient management and insights.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
