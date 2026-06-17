import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, Check, Calendar, Clock, Globe, BookOpen } from "lucide-react";

export const Route = createFileRoute("/seerah-introductory")({
  head: () => ({
    meta: [
      { title: "6-Month Seerah Course — Hira Saqib" },
      {
        name: "description",
        content:
          "An introductory 6-month study of the life of the Prophet Muhammad ﷺ — structured, coherent, and accessible to all levels.",
      },
    ],
  }),
  component: SeerahIntroductory,
});

const details = [
  { icon: Calendar, label: "Start Date", value: "October 2026" },
  { icon: Clock, label: "Duration", value: "6 months" },
  { icon: Globe, label: "Format", value: "Weekly live sessions via Zoom" },
  { icon: BookOpen, label: "Fee", value: "Free of charge" },
];

function SeerahIntroductory() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Seerah Course"
        title="Seerah of the Prophet Muhammad ﷺ"
        intro="An Introductory Study Programme — Commencing October 2026"
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-5 gap-12">
          {/* Main content */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h2 className="font-display text-3xl mb-5">About This Course</h2>
              <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
                <p>
                  For those who are beginning their study of the Prophetic biography, or who have
                  encountered the Seerah in fragments and wish to see it whole — this course offers
                  a structured, coherent introduction to the life of the Prophet Muhammad ﷺ.
                </p>
                <p>
                  Over six months, we cover the full span of his life ﷺ: from the world into which
                  he was born to the legacy he left behind. The aim is not merely familiarity with
                  events and dates, but an understanding of the Seerah as a unified, purposeful
                  narrative — one that carries lessons for faith, character, and how we live today.
                </p>
                <p>
                  This course is the natural entry point for those who intend to go on to deeper
                  study, and a complete and meaningful experience in its own right for those who are
                  not.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl mb-5">Who Should Join</h2>
              <p className="text-lg leading-relaxed text-foreground/85">
                This course is suited to anyone who wants a reliable, well-structured foundation in
                the Seerah — whether you are new to Islamic study, returning after a long gap, or
                simply looking for a course that treats the subject with the seriousness it deserves
                without assuming prior scholarly background.
              </p>
            </div>

            <blockquote className="border-l-2 border-gold pl-6 py-2 italic font-display text-2xl text-primary">
              "No prior knowledge required — just a sincere desire to know him ﷺ."
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
                  Registration is currently closed. Join the waitlist to be notified when it opens.
                </p>
                <p className="mt-2 text-sm font-medium text-primary">
                  Start date: October 2nd, 2026
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

            <div className="bg-card border border-border rounded-3xl p-8">
              <h4 className="font-display text-lg mb-3">Open to all</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                {[
                  "No prior knowledge required",
                  "Beginners welcome",
                  "Suitable for all ages",
                  "English language",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {item}
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
          <h2 className="font-display text-4xl mb-6">Begin your Seerah journey</h2>
          <p className="text-lg opacity-90 mb-8">
            Join the waitlist and be among the first to know when registration opens.
          </p>
          <a
            href="https://forms.gle/vzmvrXmnLisdeRJc6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition font-medium"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
