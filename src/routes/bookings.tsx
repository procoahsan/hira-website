import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, Clock, Globe, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/bookings")({
  head: () => ({
    meta: [
      { title: "Book a Discovery Call — Hira Saqib" },
      { name: "description", content: "Book a free 30-minute discovery call with Hira Saqib. Available in English and Urdu, online worldwide." },
    ],
  }),
  component: Bookings,
});

function Bookings() {
  const [done, setDone] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Bookings"
        title="Let's begin with a conversation."
        intro="Book a free 30-minute discovery call. We'll talk about where you are, where you want to be, and whether we're a fit."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Clock, t: "30 minutes", b: "Long enough to listen, short enough to honour your day." },
              { icon: Globe, t: "Online, worldwide", b: "Via Google Meet or Zoom — wherever you are." },
              { icon: MessageCircle, t: "English or Urdu", b: "Choose the language closest to your heart." },
              { icon: Calendar, t: "No pressure", b: "If we're not the right fit, I'll happily point you onward." },
            ].map(({ icon: Icon, t, b }) => (
              <div key={t} className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-accent/40 grid place-items-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl">{t}</h3>
                  <p className="text-muted-foreground">{b}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft">
            {done ? (
              <div className="py-16 text-center">
                <div className="text-5xl mb-4">✦</div>
                <h3 className="font-display text-3xl mb-3">Thank you.</h3>
                <p className="text-muted-foreground">
                  Your request has arrived. I'll be in touch within 48 hours, insha'Allah.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <h3 className="font-display text-3xl mb-2">Request a call</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="WhatsApp (optional)" name="whatsapp" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Select label="Preferred language" name="lang" options={["English", "Urdu", "Either"]} />
                  <Select
                    label="What's calling you here?"
                    name="topic"
                    options={["Personal coaching", "RISE Program", "Seerah", "Homeschooling", "Just exploring"]}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Anything you'd like me to know</label>
                  <textarea
                    name="notes"
                    rows={4}
                    className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition"
                >
                  Request my call
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm text-muted-foreground">{label}</label>
      <select
        name={name}
        className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
