import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/book-clubs")({
  head: () => ({
    meta: [
      { title: "Book Clubs — Hira Saqib" },
      { name: "description", content: "Teen Girls', Ladies, and Rising Women book clubs — guided reading with discussion and community." },
    ],
  }),
  component: BookClubs,
});

const clubs = [
  {
    name: "Girls' Book Club",
    age: "Teens",
    body: "A curated reading space for girls with age-appropriate books and guided discussion. A gentle entry into the life of the mind.",
    link: "https://forms.gle/qCA2QB3ZMi2SSGV5A",
    cta: "Sign up",
  },
  {
    name: "Rising Women Book Club",
    age: "Young women",
    body: "Guided reading with bi-monthly sessions, a reading guide, and a WhatsApp community. First month is free.",
    link: "https://chat.whatsapp.com/GDwd53NI3e7LF42V6NsEQY",
    cta: "Join WhatsApp",
  },
  {
    name: "Women's Book Discussion",
    age: "Open to all",
    body: "An informal book discussion group for women — no commitment, no pressure, just conversation around the books that move us.",
    link: "/contact",
    cta: "Get in touch",
  },
];

function BookClubs() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Book Clubs"
        title="Slow reading, in good company."
        intro="Three circles, one practice: meeting each other through the books that shape us."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {clubs.map((c) => (
            <article key={c.name} className="bg-card border border-border rounded-3xl p-8 flex flex-col hover:shadow-soft transition">
              <div className="w-12 h-12 rounded-2xl bg-accent/40 text-primary grid place-items-center mb-6">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gold mb-2">{c.age}</div>
              <h3 className="font-display text-2xl mb-3">{c.name}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{c.body}</p>
              <a
                href={c.link}
                target={c.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium"
              >
                {c.cta} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl mb-4">What we're reading now</h2>
          <p className="text-muted-foreground">
            From Seerah classics to contemporary memoir, our shelves are a mix of the timeless and the
            timely. Join a circle to see the current list.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
