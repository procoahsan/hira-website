import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Sparkles, BookOpen, Users, Heart, Compass, Star } from "lucide-react";
import hero from "@/assets/profile.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const forYou = [
  "You feel there is more to life than what you are currently living",
  "You are overwhelmed by your roles and have lost sight of who you are",
  "You want to raise your children with intention",
  "You are curious about homeschooling but feel unsure",
  "You want to reconnect with your faith in a real, living way",
  "You want guidance rooted in Islamic values — not generic self-help",
];

const offerings = [
  {
    icon: Heart,
    title: "One-on-One Counselling",
    body: "Private, personalised sessions for the seasons of life — relationships, identity, confidence, direction. At your pace, in your language.",
    to: "/services",
  },
  {
    icon: Compass,
    title: "Structured Programs",
    body: "Guided journeys that braid Islamic principles with research-backed coaching, so transformation lasts.",
    to: "/courses",
  },
  {
    icon: BookOpen,
    title: "Book Clubs",
    body: "Curated reading circles for teens, women, and rising professionals — slow, thoughtful, in community.",
    to: "/book-clubs",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-hero overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-14 items-center">
          <div className="animate-in-up">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Faith · Coaching · Seerah
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Helping Muslim women grow{" "}
              <span className="italic text-primary">from the inside out.</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl text-balance">
              I am Hira Saqib — a certified life coach, Seerah educator, and homeschooling mentor.
              I help women find their substance through personal coaching, structured programmes,
              and faith-centred learning. In English and Urdu, worldwide.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/bookings"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition"
              >
                Book a discovery call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition"
              >
                Meet Hira
              </Link>
            </div>
          </div>

          <div className="relative animate-in-up">
            <div className="absolute -inset-6 bg-emerald-gradient rounded-[2rem] rotate-[-3deg] opacity-30 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/60">
              <img
                src={hero}
                alt="Hira Saqib — life coach for Muslim women"
                width={1080}
                height={1620}
                className="w-full h-[560px] md:h-[640px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-soft hidden md:block max-w-[240px]">
              <div className="flex gap-0.5 text-gold mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed italic">
                "She helped me come home to myself — gently, and with the Qur'an as our compass."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THIS IS FOR YOU */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
              For you
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-balance">
              This is for you if…
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {forYou.map((line) => (
              <li key={line} className="flex gap-4 group">
                <span className="text-gold mt-1 text-lg">✦</span>
                <span className="text-lg leading-relaxed text-foreground/85 group-hover:text-foreground transition">
                  {line}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center italic text-xl text-primary text-balance max-w-2xl mx-auto font-display">
            If you read even one of those and felt seen — you are in exactly the right place.
          </p>
        </div>
      </section>

      {/* WHAT I OFFER */}
      <section className="py-24 bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
              What I offer
            </div>
            <h2 className="font-display text-4xl md:text-6xl">Three ways to walk together</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map(({ icon: Icon, title, body, to }) => (
              <Link
                key={title}
                to={to}
                className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-gradient grid place-items-center text-primary-foreground mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES STRIP */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          {[
            { tag: "Flagship", title: "The RISE Program", body: "A 6-month personal development journey — mindset, relationships, habits, purpose — built around Islamic values.", to: "/courses" },
            { tag: "Live cohort", title: "Seerah Awareness", body: "Reconnect with the life of the Prophet ﷺ through intimate, discussion-based sessions that move from page to life.", to: "/courses" },
            { tag: "Coming soon", title: "Homeschooling — What, Why & How", body: "Practical, faith-aligned mentorship for mothers choosing intentional education at home.", to: "/courses" },
          ].map((c) => (
            <article key={c.title} className="border border-border rounded-3xl p-8 flex flex-col bg-card">
              <span className="text-xs uppercase tracking-widest text-gold mb-4">{c.tag}</span>
              <h3 className="font-display text-2xl mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{c.body}</p>
              <Link to={c.to} className="mt-6 text-sm text-primary inline-flex items-center gap-2">
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* MEET HIRA */}
      <section className="py-24 bg-emerald-gradient text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Users className="w-8 h-8 mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-4xl md:text-5xl mb-6">Meet Hira</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed text-balance">
            I am passionate about nurturing thoughtful, confident, purpose-driven women through
            faith-centred guidance and structured learning. My coaching is offered in English and
            Urdu — wherever you are in the world, we can meet in the language closest to your heart.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition"
          >
            Learn more about my journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
            Begin
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            You don't have to do it alone.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            Take the first step today. Book a free 30-minute discovery call and let us talk about
            where you are and where you want to be.
          </p>
          <Link
            to="/bookings"
            className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition"
          >
            Book my free discovery call <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-6 text-sm italic text-muted-foreground">
            Sessions available in English and Urdu. Online, worldwide.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
