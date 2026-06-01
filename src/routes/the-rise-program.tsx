import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, Check, Users, BookOpen, Calendar, Sparkles } from "lucide-react";

export const Route = createFileRoute("/the-rise-program")({
  head: () => ({
    meta: [
      { title: "The RISE Program — Hira Saqib" },
      { name: "description", content: "A transformative 6-month coaching experience for women — covering personal, stress, health, relationship, household, and vision management." },
    ],
  }),
  component: TheRiseProgram,
});

const modules = [
  {
    number: "01",
    title: "Personal Management",
    body: "You cannot pour from an empty cup but most women have never been taught to fill their own. This module builds the foundation of everything that follows: deep self-awareness, an honest reflection of how you're currently spending your time and energy, and practical tools to take ownership of your day on your own terms. You'll stop reacting and start leading.",
  },
  {
    number: "02",
    title: "Stress Management",
    body: "Stress isn't just a feeling it's a signal which most of us have learned to ignore until it becomes a life crisis. This module helps you understand what's actually driving your stress, break the cycles that keep you stuck in overwhelm, and build a personalised toolkit of strategies that work with your life, not against it. You'll finish this module knowing how to regulate, recover, and keep moving.",
  },
  {
    number: "03",
    title: "Health Management",
    body: "Your body is an amanah, and yet it's often the first thing sacrificed when life gets busy. This module takes a holistic look at your physical and mental wellbeing which includes major things like sleep, nourishment, movement, and the habits that either drain or sustain you. No extreme overhauls. Just sustainable, values-aligned choices that help you feel like yourself again.",
  },
  {
    number: "04",
    title: "Relationship Management",
    body: "Your relationships shape your inner world more than almost anything else. This module gives you the frameworks and language to understand your patterns, communicate with clarity, set boundaries without guilt, and nurture the connections that matter most while releasing the ones that don't serve your growth. Healthier relationships start with a clearer, stronger you.",
  },
  {
    number: "05",
    title: "Household Management",
    body: "A well-run home is not a small thing it is the infrastructure of your family's life. This module reframes household management not as a burden to endure but as a domain to lead with intention. You'll build systems that reduce mental load, create rhythm and order in your home, and reclaim the time and headspace that chaos has been quietly stealing from you.",
  },
  {
    number: "06",
    title: "Vision Management",
    body: "This is where everything comes together. With a stronger foundation across each and every area of your life, you're now ready to dream and plan with clarity and conviction. This module guides you through defining your long-term vision, setting meaningful goals, and building a sustainable action plan that keeps you moving forward long after the program ends. You don't just leave with intentions. You leave with a roadmap.",
  },
];

const framework = [
  {
    icon: Users,
    title: "Weekly Live Sessions",
    body: "Meet each week in a focused learning space that keeps the work grounded, practical, and consistent.",
  },
  {
    icon: Calendar,
    title: "Monthly 1:1 Coaching",
    body: "Receive personalised coaching tailored specifically to your journey and challenges.",
  },
  {
    icon: Sparkles,
    title: "Post-Course Quarterly Support",
    body: "True change takes time. You'll receive quarterly check-in sessions for two full years after the program ends, keeping you accountable and supported as you continue to RISE.",
  },
];

function TheRiseProgram() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The RISE Program"
        title="Stop putting yourself last. Start rising."
        intro="A transformative 6-month coaching experience designed exclusively for women to address the core facets of your life in an integrated, supportive, and sustainable way."
      />

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-card border border-border rounded-3xl p-10 md:p-14 shadow-soft">
            <p className="text-lg leading-relaxed text-foreground/85">
              Are you a woman who feels like you're constantly juggling the needs of everyone else,
              while your own dreams and well-being get left on the back burner? Do you feel pulled in
              a dozen directions, managing a household, a career, and relationships, all while trying
              to process the weight of past experiences?
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              You are capable, you are strong, but even the strongest among us need a dedicated space
              to heal, grow, and design a life that truly fulfills them.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="text-gold font-display text-3xl">US$ 74.99<span className="text-lg text-muted-foreground">/month</span></div>
              <a
                href="https://forms.gle/ThLpNzCgYx5qgCoo7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition"
              >
                Register now <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-sm text-muted-foreground italic">Limited seats only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
              Course Structure
            </div>
            <h2 className="font-display text-4xl md:text-5xl">Six modules. One transformation.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <article
                key={m.number}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-soft transition group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-gradient text-primary-foreground grid place-items-center font-display text-xl">
                    {m.number}
                  </div>
                  <h3 className="font-display text-xl">{m.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
              Course Framework
            </div>
            <h2 className="font-display text-4xl md:text-5xl">How it works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {framework.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card border border-border rounded-3xl p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-gradient text-primary-foreground grid place-items-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-gradient text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to RISE?</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-10">
            If you're ready to stop putting yourself last, let's talk. Book a no-pressure discovery
            call to see if RISE is the right fit for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/ThLpNzCgYx5qgCoo7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition font-medium"
            >
              Register now <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/bookings"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
