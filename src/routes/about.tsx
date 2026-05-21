import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import hero from "@/assets/profile.jpeg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hira Saqib — Life Coach, Seerah Educator, Homeschool Mentor" },
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
        title="A quiet practice, rooted in faith."
        intro="My work bridges knowledge with real-life growth — for the woman who wants more than motivation, who wants substance."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-border/60">
              <img src={hero} alt="Hira Saqib" loading="lazy" className="w-full h-[520px] object-cover object-top" />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              I'm Hira — a certified life coach, Seerah educator, and homeschooling mentor. My work
              sits at the intersection of three things I love most: the Qur'an and Sunnah, the
              science of growth, and the everyday lives of women trying to do beautiful work in the
              world.
            </p>
            <p>
              For years I sat with women who knew something needed to change but felt stuck between
              ritual and real life. I built my practice as the bridge I wished I'd had — one that
              honours both deen and the daily.
            </p>
            <p>
              I coach in English and Urdu so language is never a barrier to depth. I work slowly,
              honestly, and one woman at a time.
            </p>
            <blockquote className="border-l-2 border-gold pl-6 py-2 italic font-display text-2xl text-primary">
              "Substance is not built in a weekend. It is gathered, gently, over a life."
            </blockquote>
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
