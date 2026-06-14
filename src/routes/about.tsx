import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import hero from "@/assets/profile.jpeg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hira Saqib — Qualified Life Coach, Seerah Educator, Homeschool Mentor" },
      { name: "description", content: "Learn about Hira Saqib's journey, philosophy, and faith-centred approach to coaching Muslim women in English and Urdu." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Accountant. Mother. Educator. Coach."
        intro="A journey that led me here, and to the women I work with now."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-border/60">
              <img src={hero} alt="Hira Saqib" loading="lazy" className="w-full h-[520px] object-cover object-top" />
            </div>
          </div>
          <div className="md:col-span-3 space-y-10 text-lg leading-relaxed text-foreground/85">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
                My Story
              </div>
              <div className="space-y-5">
                <p>
                  Before I became a coach, I was a Cost and Management Accountant. I built a career
                  in the corporate world, gained real experience, and by most measures was doing
                  well. But something kept pulling at me — a deep, quiet love for teaching, for
                  people, for understanding what makes us who we are. When I became a mother, that
                  pull became impossible to ignore.
                </p>
                <p>
                  I made the decision to leave my career and devote myself fully to the upbringing
                  of my three children. That decision opened a door I never expected. My desire to
                  truly understand my children — to nurture not just their minds but their
                  character and their tarbiyah — led me into the world of psychology. And from there,
                  into homeschooling and unschooling, an approach I have now lived and refined for
                  years from the inside out.
                </p>
                <p>
                  To deepen my knowledge further, I completed my PTCC training through ERDC Pakistan
                  and a Life Coaching certification from the UK. I have been coaching mothers and
                  teenagers, formally and informally, ever since. Alongside my coaching work, I run
                  courses and clubs on the Seerah of the Prophet ﷺ, a subject I am deeply passionate
                  about.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
                  My Background and Experience
                </div>
                <ul className="space-y-3 text-base leading-relaxed text-foreground/85">
                  {[
                    "Qualified Cost and Management Accountant with corporate experience",
                    "PTCC certified through ERDC Pakistan",
                    "Certified Life Coach from the UK",
                    "Years of coaching mothers and teenagers, formally and informally",
                    "Practising homeschooling and unschooling mother of three boys",
                    "Seerah educator running short and long-term courses and clubs",
                    "Home-schooling mother with hands-on experience building an effective home education",
                    "Islamic studies background with a deep focus on the Seerah of the Prophet ﷺ",
                    "Coaching available in English and Urdu for Muslim women worldwide",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-gold mt-1">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <blockquote className="border-l-2 border-gold pl-6 py-2 italic font-display text-2xl text-primary">
                "I work from a place of deep faith, genuine care, and honest guidance. I will not
                tell you what you want to hear — I will help you see what you need to see, with
                compassion and without judgement."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-4xl text-center mb-14">How I work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Slow & honest", b: "We start where you are, not where you should be. No performative growth." },
              { n: "02", t: "Faith-centred", b: "Qur'an, Sunnah, and Seerah are not decoration — they are the framework." },
              { n: "03", t: "Practical", b: "Every session ends with something you can carry into Monday morning." },
            ].map((x) => (
              <div key={x.n} className="bg-card border border-border rounded-3xl p-8">
                <div className="text-gold font-display text-3xl mb-3">{x.n}</div>
                <h3 className="font-display text-xl mb-2">{x.t}</h3>
                <p className="text-muted-foreground">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <Link to="/bookings" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition">
          Book a discovery call <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
