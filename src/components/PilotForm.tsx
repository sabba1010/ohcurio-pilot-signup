import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  library: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  library?: string;
  email?: string;
}

const PilotForm = () => {
  const [form, setForm] = useState<FormData>({ name: "", library: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.library.trim()) e.library = "Library name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setForm({ name: "", library: "", email: "", message: "" });
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition";

  return (
    <section id="pilot-form" className="px-6 py-24 max-w-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        Bring Oh Curio to your library
      </h2>
      <p className="text-muted-foreground text-center mb-4 text-lg">
        Join our pilot program and be among the first libraries to transform patron engagement.
      </p>
      <p className="mx-auto max-w-xl text-center text-sm font-semibold text-accent mb-10">
        Pilot spots are limited — early access for selected libraries.
      </p>

      <div className="bg-card p-8 md:p-10 rounded-[2.5rem] border border-border/50 shadow-xl shadow-primary/5">
        {submitted ? (
          <div className="text-center py-12">
            <p className="text-xl font-semibold text-success">
              Thank you — we'll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
              <input id="name" type="text" className={inputClass} placeholder="Your name"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="library" className="block text-sm font-medium text-foreground mb-2">Library Name *</label>
              <input id="library" type="text" className={inputClass} placeholder="Your library"
                value={form.library} onChange={(e) => setForm({ ...form, library: e.target.value })} />
              {errors.library && <p className="text-destructive text-sm mt-1">{errors.library}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <input id="email" type="email" className={inputClass} placeholder="you@library.org"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea id="message" rows={4} className={inputClass} placeholder="Anything you'd like us to know"
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" disabled={submitting}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60 active:scale-[0.98]">
              {submitting ? "Submitting..." : "Apply for Pilot"}
            </button>
            <p className="text-center text-sm text-muted-foreground mt-4">
              We’ll reach out personally to schedule your onboarding.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default PilotForm;
