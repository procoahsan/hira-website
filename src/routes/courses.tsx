import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Programs — Hira Saqib" },
      { name: "description", content: "The RISE Program, Seerah Awareness, and Homeschooling mentorship — structured faith-centred journeys for Muslim women." },
    ],
  }),
  component: Courses,
});

const courses = [
  {
    tag: "6-Month Flagship",
    title: "The RISE Program",
    body: "A complete personal development journey covering mindset, relationships, habits, and purpose — built around Islamic values and the texture of real life.",
    bullets: ["Bi-weekly live coaching", "Workbooks & reflection prompts", "Private WhatsApp circle", "Lifetime alumni access"],
    cta: "Apply now",
  },
  {
    tag: "Live cohort",
    title: "Seerah Awareness",
    body: "Reconnect with the life of the Prophet ﷺ through intimate, discussion-based sessions that bring the Seerah out of the page and into your everyday.",
    bullets: ["12 thematic sessions", "Primary-source readings", "Discussion in English & Urdu", "Recordings included"],
    cta: "Join the waitlist",
  },
  {
    tag: "Coming soon",
    title: "Homeschooling — What, Why & How",
    body: "Practical, faith-aligned mentorship for mothers choosing intentional education at home. From confidence to curriculum to rhythm.",
    bullets: ["Foundations & philosophy", "Choosing a curriculum", "Routines that actually hold", "Community of homeschool mothers"],
    cta: "Notify me",
  },
];

function Courses() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Courses"
        title="Structured journeys for the woman ready to do the work."
        intro="Three programmes, each a different doorway into the same practice: substance, rooted in faith."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {courses.map((c, i) => (
            <article
              key={c.title}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-elegant transition-all grid md:grid-cols-3"
            >
              <div className="bg-emerald-gradient text-primary-foreground p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] opacity-80">{c.tag}</div>
                  <div className="font-display text-5xl mt-6 opacity-30">0{i + 1}</div>
                </div>
                <h3 className="font-display text-3xl mt-10">{c.title}</h3>
              </div>
              <div className="md:col-span-2 p-10 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed">{c.body}</p>
                <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-foreground/85">
                      <Check className="w-4 h-4 text-gold" /> {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/bookings"
                  className="mt-9 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:-translate-y-0.5 transition"
                >
                  {c.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
