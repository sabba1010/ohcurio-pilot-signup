const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("pilot-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
        A patron engagement platform for public libraries
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[1.1]">
        Oh Curio!
      </h1>
      <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
        Reconnect your library with the community it serves. Curio helps libraries engage patrons 
        through meaningful, personalized communication — effortlessly.
      </p>
      <button
        onClick={scrollToForm}
        className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
      >
        Join Pilot Program
      </button>
    </section>
  );
};

export default Hero;
