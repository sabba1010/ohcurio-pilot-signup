import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { MouseEvent } from "react";

const Navbar = () => {
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav_about"), target: "about" },
    { label: t("nav_why"), target: "problem" },
    { label: t("nav_features"), target: "features" },
    { label: t("nav_pilot"), target: "pilot-form" },
  ];

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, target: string) => {
    event.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" onClick={(event) => scrollToSection(event, "hero")} className="group flex items-center gap-3">
          <img src="/logo 1.png" alt="Oh Curio! Logo" className="h-12 md:h-16 object-contain w-auto rounded-sm overflow-hidden shadow-sm" />
          {/* <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary font-heading italic">
            Oh Curio!
          </span> */}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(event) => scrollToSection(event, item.target)}
              className="text-sm font-medium text-foreground transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
          <button
            onClick={(event) => scrollToSection(event, "pilot-form")}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {t("nav_join")}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
