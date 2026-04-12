const features = [
  { title: "Understand what your patrons care about", description: "Understand interests and preferences to tailor every interaction." },
  { title: "Send messages people actually open", description: "Send the right message to the right patron at the right time." },
  { title: "Event Discovery", description: "Help patrons find programs they'll actually attend and love." },
  { title: "Feedback Loops", description: "Collect real-time input to shape better library services." },
  { title: "See what’s working instantly", description: "See what's working and where engagement is growing." },
  { title: "Simple Setup", description: "Get started in days, not months. No technical expertise required." },
];

const Features = () => {
  return (
    <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        Tools that make library communication feel human
      </h2>
      <p className="text-muted-foreground text-center mb-16 text-lg max-w-xl mx-auto">
        Built specifically for public libraries and the communities they serve.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="p-6 rounded-xl border border-border bg-card">
            <h3 className="text-lg font-bold text-foreground mb-2 font-sans" style={{ fontFamily: 'var(--font-body)' }}>
              {f.title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
