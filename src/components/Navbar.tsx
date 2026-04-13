import type { MouseEvent } from "react";

const navItems = [
  { label: "Why Curio?", target: "problem" },
  { label: "Features", target: "features" },
  { label: "Pilot", target: "pilot-form" },
];

const Navbar = () => {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, target: string) => {
    event.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" onClick={(event) => scrollToSection(event, "hero")} className="text-xl font-semibold tracking-tight text-foreground">
          Oh Curio!
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
        </div>

        <button
          onClick={(event) => scrollToSection(event, "pilot-form")}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          Join Pilot
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
