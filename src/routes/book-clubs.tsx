import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import teenGirlsImg from "@/assets/teen-girls-book-club.jpeg";
import ladiesImg from "@/assets/ladies-book-club.jpeg";
import womensImg from "@/assets/rising-woman.jpeg";

export const Route = createFileRoute("/book-clubs")({
  head: () => ({
    meta: [
      { title: "Book Clubs — Hira Saqib" },
      {
        name: "description",
        content:
          "Girls', Rising Women, and Women's book clubs — guided reading with discussion and community.",
      },
    ],
  }),
  component: BookClubs,
});

const clubs = [
  {
    name: "Girls' Book Club",
    age: "Teens",
    body: "A curated reading space for girls with age-appropriate books and guided discussion. A gentle entry into the life of the mind.",
    link: "https://forms.gle/etNSWi2htn3fLy8c9",
    cta: "Sign up",
    isOpen: true,
    image: teenGirlsImg,
  },
  {
    name: "Rising Women Book Club",
    age: "All Women",
    body: "A membership-based guided reading club with bi-monthly sessions, a reading guide, and a WhatsApp community. June is our trial month — join us and experience the circle before committing.",
    extra: "Membership: $99 per annum or $30 per quarter",
    link: "https://chat.whatsapp.com/GDwd53NI3e7LF42V6NsEQY?s=cl&p=a&mlu=2",
    cta: "Join WhatsApp",
    isOpen: true,
    image: ladiesImg,
  },
  {
    name: "Women's Book Discussion",
    age: "Closed Circle",
    body: "An intimate book discussion group for a closed circle of women. Currently reading: آدابِ اختلاف — exploring the etiquettes of disagreement with depth and reflection.",
    link: "/contact",
    cta: "Enquire",
    isOpen: false,
    image: womensImg,
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

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {clubs.map((c) => (
            <article
              key={c.name}
              className="bg-card border border-border rounded-[2rem] overflow-hidden flex flex-col hover:shadow-soft transition group min-h-[620px]"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs uppercase tracking-widest text-gold mb-1">{c.age}</div>
                <h3 className="font-display text-3xl mb-3">{c.name}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1 text-[16px]">{c.body}</p>
                {c.extra && (
                  <div className="mt-4 p-4 rounded-2xl bg-secondary/60 border border-border/60">
                    <p className="text-sm font-medium text-foreground/85">{c.extra}</p>
                    <p className="text-xs text-muted-foreground mt-1 italic">
                      June is a free trial month
                    </p>
                  </div>
                )}
                <a
                  href={c.link}
                  target={c.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-primary font-medium"
                >
                  {c.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl mb-4">What we're reading now</h2>
          <p className="text-muted-foreground">
            From Seerah classics to contemporary memoir, our shelves are a mix of the timeless and
            the timely. Join a circle to see the current list.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
