import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, Check, Calendar, Clock, Globe, BookOpen, Heart } from "lucide-react";

export const Route = createFileRoute("/seerah-detailed")({
  head: () => ({
    meta: [
      { title: "Detailed Seerah Course — Hira Saqib" },
      {
        name: "description",
        content:
          "A comprehensive 2–3 year study of the life of the Prophet ﷺ — integrating Quranic revelation with the Prophetic biography.",
      },
    ],
  }),
  component: SeerahDetailed,
});

const details = [
  { icon: Calendar, label: "Start Date", value: "July 2026" },
  { icon: Clock, label: "Duration", value: "2–3 years" },
  { icon: Globe, label: "Format", value: "Weekly 1.5-hour live sessions via Zoom" },
  { icon: BookOpen, label: "Fee", value: "Free of charge" },
];

const whoFor = [
  "The mother who wants to know the Prophet ﷺ so well that she can bring him to life for her children at the dinner table.",
  "The student of Islamic knowledge who wants a rigorous, sustained, and spiritually nourishing study — not a weekend workshop, but a true commitment.",
  "Anyone who has read the short versions and felt: there must be more.",
];

function SeerahDetailed() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Detailed Seerah Course"
        title="A Detailed Study of the Life of the Prophet ﷺ"
        intro="Commencing July 2026 · Live Weekly Sessions · Duration: 2–3 Years"
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-5 gap-12">
          {/* Main content */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h2 className="font-display text-3xl mb-5">
                What If You Could Know Him — Really Know Him?
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
                <p>
                  Not the summarised version. Not the highlights reel. But his full life — the years
                  before revelation, the quiet grief, the fierce hope, the battles and the letters
                  and the tears — woven together with the very words Allah revealed to accompany him
                  on the journey.
                </p>
                <p className="font-display text-xl text-primary italic">This is that course.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl mb-5">About the Course</h2>
              <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
                <p>
                  This is a comprehensive, in-depth study of the Seerah of the Prophet Muhammad ﷺ —
                  not as a series of events, but as a living narrative that shaped a civilisation
                  and continues to shape our souls.
                </p>
                <p>
                  What makes this course distinct is its integration of Quranic study alongside the
                  Seerah. You will not simply learn what happened — you will read the ayaat that
                  were revealed in response, understand the context in which they descended, and
                  experience the Quran the way the Companions did: as a real-time, living revelation
                  tied to real moments in a real life.
                </p>
                <p>
                  We will move carefully, thoughtfully, and deeply — covering the full arc of the
                  Prophetic life over two to three years of weekly live sessions.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl mb-5">Who This Course Is For</h2>
              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                This course is for Muslim women who are ready to go beyond the surface — women who
                want depth, who ask questions, who carry a hunger for real knowledge.
              </p>
              <ul className="space-y-4">
                {whoFor.map((item) => (
                  <li key={item} className="flex gap-4 text-foreground/85">
                    <Heart className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl mb-5">How It Works</h2>
              <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
                <p>
                  We meet once a week, live, via Zoom — a dedicated 1.5 hours carved out of your
                  week for knowledge that will stay with you for a lifetime. Sessions are designed
                  to be immersive and focused, with space for questions and reflection.
                </p>
                <p>
                  The course is free of charge, in keeping with the belief that knowledge of the
                  Prophet ﷺ should never sit behind a paywall.
                </p>
              </div>
            </div>

            <blockquote className="border-l-2 border-gold pl-6 py-2 italic font-display text-2xl text-primary">
              "The depth we are aiming for cannot be rushed. This is an invitation to sit with the
              life of the best of creation ﷺ for long enough to truly be changed by it."
            </blockquote>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-2xl mb-6">Course Details</h3>
              <div className="space-y-5">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-2xl bg-accent/40 grid place-items-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {label}
                      </div>
                      <div className="font-display text-lg">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-secondary/60 border border-border/60">
                <p className="text-sm text-muted-foreground italic">
                  Registrations opening soon for July intake. Fill the form below to join the
                  waitlist.
                </p>
              </div>

              <a
                href="https://forms.gle/vzmvrXmnLisdeRJc6"
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition"
              >
                Join the waitlist <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-emerald-gradient text-primary-foreground rounded-3xl p-8">
              <h4 className="font-display text-xl mb-3">A 2–3 Year Journey</h4>
              <p className="text-sm opacity-90 leading-relaxed">
                This is not a commitment to be taken lightly — it is an invitation to sit with the
                life of the best of creation ﷺ for long enough to truly be changed by it.
              </p>
              <ul className="mt-4 space-y-2 text-sm opacity-90">
                {[
                  "Quran integrated with Seerah",
                  "Space for questions & reflection",
                  "Free of charge",
                  "For women ready for depth",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-gradient text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl mb-6">
            If you have been waiting — this is your moment.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join the waitlist and be among the first to know when registration opens for the July
            2026 intake.
          </p>
          <a
            href="https://forms.gle/vzmvrXmnLisdeRJc6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition font-medium"
          >
            Join the waitlist <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
