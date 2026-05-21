import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Heart, Compass, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hira Saqib" },
      { name: "description", content: "One-on-one coaching, faith-centred mentorship, and Urdu/English sessions for Muslim women worldwide." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Heart,
    title: "One-on-One Coaching",
    price: "From $90 / session",
    body: "Private, personalised sessions for whatever is most alive in your life right now — relationships, identity, confidence, direction.",
    items: ["Single session or package", "60 minutes", "English or Urdu", "Worldwide via video"],
  },
  {
    icon: Compass,
    title: "Faith-Centred Mentorship",
    price: "By application",
    body: "A longer-term holding for the woman ready to commit. We meet regularly across months as your practice deepens.",
    items: ["3 or 6 month container", "Bi-weekly sessions", "WhatsApp between calls", "Reading & reflection"],
  },
  {
    icon: Sparkles,
    title: "Group Workshops",
    price: "From $35",
    body: "Themed live workshops for women's groups, masjids, and organisations on motherhood, marriage, identity, and Seerah.",
    items: ["90 minutes live", "Up to 50 attendees", "Custom themes welcome", "Recording included"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Honest support, on the terms that fit your life."
        intro="Coaching, mentorship, and workshops — choose the shape, the language, and the season."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, ...s }) => (
            <div key={s.title} className="bg-card border border-border rounded-3xl p-8 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-emerald-gradient text-primary-foreground grid place-items-center mb-6">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl mb-1">{s.title}</h3>
              <div className="text-gold text-sm mb-4">{s.price}</div>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.body}</p>
              <ul className="space-y-2 text-sm text-foreground/80 mb-8">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-gold">✦</span> {i}</li>
                ))}
              </ul>
              <Link to="/bookings" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:-translate-y-0.5 transition">
                Begin <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
