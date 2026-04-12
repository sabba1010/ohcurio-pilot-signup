const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("pilot-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-16">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-5">
        A patron engagement platform for public libraries
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-5 leading-[1.1]">
        Oh Curio!
      </h1>
      <p className="mx-auto max-w-2xl text-xl md:text-2xl font-semibold text-foreground mb-6">
        Make every message your patrons actually read.
      </p>
      <button
        onClick={scrollToForm}
        className="mb-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Request Early Access
      </button>
      <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
        Reconnect your library with the community it serves. Curio helps libraries engage patrons through meaningful, personalized communication — effortlessly.
      </p>
    </section>
  );
};

export default Hero;
