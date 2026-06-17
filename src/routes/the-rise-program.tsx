import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, Check, Users, BookOpen, Calendar, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    summary: "Build self-awareness and take ownership of your time, energy, and daily direction.",
    body: "You cannot pour from an empty cup but most women have never been taught to fill their own. This module builds the foundation of everything that follows: deep self-awareness, an honest reflection of how you're currently spending your time and energy, and practical tools to take ownership of your day on your own terms. You'll stop reacting and start leading.",
  },
  {
    number: "02",
    title: "Stress Management",
    summary: "Understand your stress patterns and build tools to regulate, recover, and keep moving.",
    body: "Stress isn't just a feeling it's a signal which most of us have learned to ignore until it becomes a life crisis. This module helps you understand what's actually driving your stress, break the cycles that keep you stuck in overwhelm, and build a personalised toolkit of strategies that work with your life, not against it. You'll finish this module knowing how to regulate, recover, and keep moving.",
  },
  {
    number: "03",
    title: "Health Management",
    summary: "Care for your body and mind through sustainable habits that support your real life.",
    body: "Your body is an amanah, and yet it's often the first thing sacrificed when life gets busy. This module takes a holistic look at your physical and mental wellbeing which includes major things like sleep, nourishment, movement, and the habits that either drain or sustain you. No extreme overhauls. Just sustainable, values-aligned choices that help you feel like yourself again.",
  },
  {
    number: "04",
    title: "Relationship Management",
    summary: "Learn clearer communication, healthier boundaries, and stronger relationship patterns.",
    body: "Your relationships shape your inner world more than almost anything else. This module gives you the frameworks and language to understand your patterns, communicate with clarity, set boundaries without guilt, and nurture the connections that matter most while releasing the ones that don't serve your growth. Healthier relationships start with a clearer, stronger you.",
  },
  {
    number: "05",
    title: "Household Management",
    summary: "Create home systems that reduce mental load and bring rhythm back into family life.",
    body: "A well-run home is not a small thing it is the infrastructure of your family's life. This module reframes household management not as a burden to endure but as a domain to lead with intention. You'll build systems that reduce mental load, create rhythm and order in your home, and reclaim the time and headspace that chaos has been quietly stealing from you.",
  },
  {
    number: "06",
    title: "Vision Management",
    summary: "Turn your growth into a clear long-term vision, meaningful goals, and a real roadmap.",
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

const faqs = [
  {
    question: "What makes RISE different from other programs?",
    answer: "RISE integrates proven personal development frameworks while keeping Islamic values at the foundation, not as an afterthought. But the most important difference is personalisation. Every participant receives a dedicated 1:1 session with each module, so the work is applied to your life, your circumstances, and your specific challenges."
  },
  {
    question: "Do I need to be at a certain stage in my personal development journey?",
    answer: "No. RISE is designed for women at any stage of their personal development journey, whether you are just beginning to invest in yourself or have done significant work already. What matters is that you are ready to show up honestly and do the work."
  },
  {
    question: "What is the fee for the program?",
    answer: "RISE is $74.99 per month for 6 months. This includes all group sessions, your module workbooks, your dedicated 1:1 session per module, and your quarterly post-graduation follow-up sessions. Given the level of personalisation built into the program, this is considerably lower than comparable 1:1 coaching arrangements."
  },
  {
    question: "What if I miss a group session?",
    answer: "Life happens and we understand that. If you miss a group session, you will not lose your place or your progress. You will get the recording of the session which you can go through at your own convenience."
  },
  {
    question: "What if the live session time doesn't suit me?",
    answer: "If the time does not suit you, you can still benefit as you get a lifetime access to recordings of the sessions."
  },
  {
    question: "Is there an application process?",
    answer: "RISE is application-based, not to create barriers, but to ensure every woman who joins is in the right place at the right time and that the cohort is a genuine fit for one another. You can apply via the button on this page."
  },
  {
    question: "Is there any support after the program ends?",
    answer: "RISE doesn’t end at six months. Every graduate receives quarterly 1:1 follow-up sessions for post-course implementation support. These sessions ensure you continue to build on what you worked through during the program rather than returning to old patterns."
  },
  {
    question: "How big are the groups?",
    answer: "Cohorts are intentionally small. It is an intimate group where every woman is known, supported, and held accountable. The small size is what makes the depth of the program possible."
  },
  {
    question: "When do the live sessions take place?",
    answer: "The live group sessions run every Thursday from 9:00–11:00 AM KSA time. In addition to the group session, you will have your monthly 1:1 session with Hira, plus time for reading, reflection, and completing your worksheets. Women who get the most from RISE treat it as a genuine investment of time, not something to fit into the margins."
  },
  {
    question: "Are there any materials provided?",
    answer: "Every module comes with a participant handouts designed specifically for RISE. They guide you through the frameworks, reflective exercises, and practical tools for each area of life. You keep them after the program ends."
  },
  {
    question: "I have more questions, how can I contact you?",
    answer: "Simply send a message via the contact page or DM on Instagram. Every message is read personally and we will be happy to help you decide if RISE is right for you."
  }
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
                tabIndex={0}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-soft focus:shadow-soft focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-gradient text-primary-foreground grid place-items-center font-display text-xl">
                    {m.number}
                  </div>
                  <h3 className="font-display text-xl">{m.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{m.summary}</p>
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-80 group-hover:opacity-100 group-focus:max-h-80 group-focus:opacity-100">
                  <p className="mt-5 border-t border-border/70 pt-5 text-muted-foreground leading-relaxed text-[15px]">
                    {m.body}
                  </p>
                </div>
                <div className="mt-5 text-xs uppercase tracking-widest text-gold transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0">
                  Hover to read more
                </div>
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

      {/* FAQ */}
      <section className="py-20 bg-secondary/20 border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
              Questions
            </div>
            <h2 className="font-display text-4xl md:text-5xl">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                <AccordionTrigger className="text-left font-display text-lg hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
