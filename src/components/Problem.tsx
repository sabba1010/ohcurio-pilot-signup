const Problem = () => {
  return (
    <section id="problem" className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
        Libraries deserve better tools
      </h2>
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            The Problem
          </h3>
          <ul className="space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <li>Patron engagement relies on outdated flyers and generic emails</li>
            <li>Libraries struggle to reach the right people with the right programs</li>
            <li>Communication feels impersonal and one-directional</li>
            <li>Valuable community feedback goes uncollected</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            The Oh Curio Way
          </h3>
          <ul className="space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <li>Personalized outreach that matches patrons with relevant programs</li>
            <li>Two-way communication that builds real community connections</li>
            <li>Smart insights that help libraries understand what patrons actually want</li>
            <li>Simple tools that save staff time and increase impact</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;
