import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, Check } from "lucide-react";

import risingWomanImg from "@/assets/rising-woman.jpeg";
import homeSchoolingImg from "@/assets/home-schooling.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hira Saqib" },
      { name: "description", content: "One-on-one coaching and homeschool support for Muslim women worldwide — personalised, faith-centred, practical." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Honest support, on the terms that fit your life."
        intro="Coaching and homeschool support — choose the shape, the language, and the season."
      />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
          {/* One-on-One Coaching */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col group">
            <div className="h-48 overflow-hidden">
              <img
                src={risingWomanImg}
                alt="One-on-One Coaching"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display text-2xl mb-1">One-on-One Coaching</h3>
              <div className="text-gold text-sm mb-3">$30 / session</div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Private, personalised sessions for whatever is most alive in your life right now —
                relationships, identity, confidence, direction.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 mb-5">
                {["Single session or package", "60 minutes", "English or Urdu", "Worldwide via video"].map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-gold">✦</span> {i}</li>
                ))}
              </ul>
              <Link to="/bookings" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:-translate-y-0.5 transition">
                Book a session <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Homeschool Support */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col group">
            <div className="h-48 overflow-hidden">
              <img
                src={homeSchoolingImg}
                alt="Home Learning Plan"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display text-2xl mb-1">Home Learning Plan</h3>
              <div className="text-gold text-sm mb-3">$197</div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A personalised roadmap for your child's learning journey.
              </p>
              <p className="text-foreground/85 leading-relaxed mb-4 text-[15px]">
                Every child is different in the way they think, the way they learn, and the gifts they carry.
                Yet most curricula are built for the average child, leaving many mothers frustrated,
                second-guessing themselves, and wondering why what works for others simply isn't working at home.
              </p>
              <p className="text-foreground/85 leading-relaxed mb-4 text-[15px]">
                Through a series of guided conversations, I work with you to build a clear, honest picture
                of your child: their learning style, personality, natural strengths, areas of difficulty,
                and what genuinely lights them up. Where needed, I may also spend time with your child
                directly to deepen that understanding.
              </p>
              <p className="text-foreground/85 leading-relaxed mb-4 text-[15px]">
                At the end of our work together, you will receive a <strong>written Home Learning Plan</strong> —
                a practical, faith-aligned roadmap that tells you exactly how to approach your child's
                education, what to prioritise, and which direction to move in with confidence.
              </p>
              <Link to="/bookings" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:-translate-y-0.5 transition">
                Get started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* This is for you section */}
      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl text-center mb-10">The Home Learning Plan is for you if…</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "You are homeschooling and feel lost about where to start or where to go next",
              "Your child seems disengaged, resistant, or struggling — and you don't know why",
              "You have tried multiple curricula, and nothing seems to stick",
              "You want an education that honours both your child's fitrah and their individuality",
            ].map((item) => (
              <div key={item} className="flex gap-3 bg-card border border-border rounded-2xl p-5">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground/85 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
