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
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const preferredDate = String(formData.get("preferredDate") ?? "").trim();
    const preferredTime = String(formData.get("preferredTime") ?? "").trim();
    const timezone = String(formData.get("timezone") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();

    const subject = encodeURIComponent(`Discovery call request from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || "N/A"}`,
        `Email: ${email || "N/A"}`,
        `Preferred date: ${preferredDate || "N/A"}`,
        `Preferred time: ${preferredTime || "N/A"}`,
        `Timezone: ${timezone || "N/A"}`,
        "",
        "Message:",
        notes || "N/A",
      ].join("\n")
    );

    window.location.href = `mailto:info@hirasaqib.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

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
            <h3 className="font-display text-3xl mb-2">Schedule your call</h3>
            <p className="text-muted-foreground mb-6">
              Use the form below to request a discovery call. I’ll review your note and reply with
              a time that fits my current availability.
            </p>

            {sent ? (
              <div className="rounded-2xl border border-border bg-secondary/40 p-8 text-center">
                <div className="text-4xl mb-3 text-gold">✦</div>
                <h4 className="font-display text-2xl">Request received.</h4>
                <p className="mt-3 text-muted-foreground">
                  Your email app should open with the details filled in. If it does not, please
                  email info@hirasaqib.com directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    required
                    type="date"
                    name="preferredDate"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3"
                  />
                  <input
                    required
                    type="time"
                    name="preferredTime"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3"
                  />
                  <input
                    required
                    name="timezone"
                    placeholder="Timezone"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3"
                  />
                </div>
                <textarea
                  required
                  name="notes"
                  rows={6}
                  placeholder="Tell me a little about what you’d like support with"
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3"
                />
                <button className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:-translate-y-0.5 transition shadow-elegant">
                  Request my call
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  This replaces the broken embed and works directly from the website.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
