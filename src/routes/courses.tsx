import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import riseImg from "@/assets/rise-program.jpeg";
import seerahImg from "@/assets/seerah.jpeg";
import homeSchoolingImg from "@/assets/home-schooling.png";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Programs — Hira Saqib" },
      { name: "description", content: "The RISE Program, Seerah courses, and Homeschooling mentorship — structured faith-centred journeys for Muslim women." },
    ],
  }),
  component: Courses,
});

const courses = [
  {
    tag: "6-Month Flagship",
    title: "The RISE Program",
    body: "A complete personal development journey covering mindset, relationships, habits, and purpose — built around Islamic values and the texture of real life.",
    bullets: ["Weekly live coaching", "Workbooks & reflection prompts", "Private WhatsApp circle", "Lifetime alumni access"],
    cta: "Learn more",
    to: "/the-rise-program",
    image: riseImg,
  },
  {
    tag: "6-Month Introductory",
    title: "Seerah — Introductory Course",
    body: "A structured introduction to the life of the Prophet Muhammad ﷺ. Over six months, covering the full span of his life — from the world into which he was born to the legacy he left behind.",
    bullets: ["Weekly live sessions via Zoom", "6-month duration", "Open to all levels", "Free of charge"],
    cta: "Learn more",
    to: "/seerah-introductory",
    image: seerahImg,
  },
  {
    tag: "2–3 Year In-Depth",
    title: "Seerah — Detailed Study",
    body: "A comprehensive, in-depth study integrating Quranic revelation alongside the Prophetic biography — not a summary, but a true immersion into his life ﷺ.",
    bullets: ["Weekly 1.5-hour live sessions", "Quran integrated with Seerah", "2–3 year commitment", "Free of charge"],
    cta: "Learn more",
    to: "/seerah-detailed",
    image: seerahImg,
  },
  {
    tag: "Coming soon",
    title: "Homeschooling — What, Why & How",
    body: "Practical, faith-aligned mentorship for mothers choosing intentional education at home. From confidence to curriculum to rhythm.",
    bullets: ["Foundations & philosophy", "Choosing a curriculum", "Routines that actually hold", "Community of homeschool mothers"],
    cta: "Notify me",
    to: "/bookings",
    image: homeSchoolingImg,
  },
];

function Courses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Courses"
        title="Structured journeys for the woman ready to do the work."
        intro="Four programmes, each a different doorway into the same practice: substance, rooted in faith."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 items-start">
          {courses.map((c, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.article
                key={c.title}
                layout
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
                className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col hover:shadow-soft transition-shadow min-h-[520px]"
                style={{ zIndex: isHovered ? 10 : 1 }}
              >
                {c.image ? (
                  <motion.div
                    layout
                    className="overflow-hidden"
                    animate={{ height: isHovered ? "auto" : 230 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <motion.img
                      layout
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="w-full"
                      style={{ objectFit: isHovered ? "contain" : "cover", height: isHovered ? "auto" : 230 }}
                    />
                  </motion.div>
                ) : (
                  <div className="bg-emerald-gradient text-primary-foreground p-5 h-56 flex flex-col justify-end">
                    <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">{c.tag}</div>
                    <h3 className="font-display text-lg mt-1">{c.title}</h3>
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-gold mb-1">{c.tag}</div>
                  <h3 className="font-display text-xl mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{c.body}</p>
                  <ul className="mt-3 space-y-1.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={c.to}
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:-translate-y-0.5 transition self-start"
                  >
                    {c.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
