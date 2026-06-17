import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Users,
  Heart,
  Compass,
  Star,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRevealAll } from "@/hooks/useReveal";
import hero from "@/assets/about.jpeg";

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

const latestOfferings = [
  {
    icon: Heart,
    title: "The RISE Program",
    body: "A six-month growth journey with weekly live sessions, practical reflection, and faith-rooted momentum for women ready to lead their lives with clarity.",
    to: "/the-rise-program",
    accent: "from-rose-500/10 to-orange-400/10",
  },
  {
    icon: Compass,
    title: "Seerah Courses",
    body: "Choose the introductory or detailed Seerah path and learn through dedicated pages designed for depth, clarity, and reflection.",
    to: "/courses",
    accent: "from-blue-500/10 to-indigo-400/10",
  },
  {
    icon: BookOpen,
    title: "Home Learning Plan",
    body: "A personalised roadmap for mothers who want a clearer, more intentional approach to homeschooling and learning at home.",
    to: "/services",
    accent: "from-emerald-500/10 to-teal-400/10",
  },
];

const stats = [
  { value: "200+", label: "Women Coached" },
  { value: "6+", label: "Years Experience" },
  { value: "15+", label: "Countries Reached" },
  { value: "4.9", label: "Average Rating", suffix: "★" },
];

const heroCourses = [
  {
    tag: "Flagship",
    title: "The RISE Program",
    body: "A 6-month personal development journey built around Islamic values.",
    to: "/the-rise-program",
    icon: Heart,
  },
  {
    tag: "Seerah",
    title: "Introductory Course",
    body: "A structured path through the life of the Prophet Muhammad ﷺ.",
    to: "/seerah-introductory",
    icon: Compass,
  },
  {
    tag: "Seerah",
    title: "Detailed Study",
    body: "A deeper 2-3 year study of Seerah with Quranic revelation.",
    to: "/seerah-detailed",
    icon: BookOpen,
  },
  {
    tag: "Mentorship",
    title: "Home Learning Plan",
    body: "A practical roadmap for intentional homeschooling at home.",
    to: "/services",
    icon: Users,
  },
];

const feedbacks = [
  {
    name: "Anonymous participant",
    location: "Seerah course",
    quote:
      "It's a life changing course Alhamdulillah. Learning Seerah to me has become an essential part of life. I'm loving the feeling of knowing Prophet SAW.",
  },
  {
    name: "Asma Naeem",
    location: "Faisalabad",
    quote:
      "It deepened my understanding and interest in the Quran. Practical lessons from the life of Prophet PBUH.",
  },
  {
    name: "Anonymous participant",
    location: "Seerah course",
    quote:
      "The lessons about how Prophet reacted in certain conditions give us strength to do the same in our lives. I am trying to instill the love of Seerah in my kids.",
  },
  {
    name: "Asma Zahid",
    location: "Karachi",
    quote:
      "The open discussions and thought provoking questions encourage deeper reflection and engagement.",
  },
  {
    name: "Anonymous participant",
    location: "Seerah course",
    quote:
      "We pause, reflect, and relate at every step. These discussions make it possible to incorporate the teachings of Rasool Allah in our lives.",
  },
  {
    name: "Beena Sarfaraz",
    location: "Dammam",
    quote:
      "Gaining a deeper emotional and spiritual connection with the Prophet Muhammad ﷺ has transformed the way I view my own challenges and responsibilities.",
  },
  {
    name: "Anonymous participant",
    location: "Seerah course",
    quote:
      "The biggest change is that when life happens, I pause and think what my Beloved SAW would have done at this moment.",
  },
  {
    name: "Faryal Imran",
    location: "Karachi",
    quote:
      "It has strengthened my connection with Allah and improved my understanding of the Quran.",
  },
  {
    name: "Anonymous participant",
    location: "Seerah course",
    quote:
      "Everyone in the group was very supportive and encouraging, so I felt totally at ease whenever I had something to say.",
  },
  {
    name: "Fatima Irfan",
    location: "Sialkot",
    quote:
      "My love and connection with Rasoolallah has increased. I feel closer to him, and I have become more reflective relating to Seerah.",
  },
  {
    name: "Momima Abbasi",
    location: "Islamabad",
    quote:
      "The discussion helps us reflect on different aspects of the Seerah and connect the lessons to our own lives.",
  },
  {
    name: "Anonymous participant",
    location: "Seerah course",
    quote:
      "I have started loving my Prophet and Sahaba in a way that I never did before. Every day I started reading and listening to Sahaba's life.",
  },
];

function HeroCourseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCourses.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 max-w-xl overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-3 shadow-soft backdrop-blur reveal">
      <div className="flex  items-center justify-between gap-3 px-2 pb-3">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Courses</div>
        <div className="flex gap-1.5">
          {heroCourses.map((course, index) => (
            <button
              key={course.title}
              type="button"
              aria-label={`Show ${course.title}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${activeIndex === index ? "w-6 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
      <motion.div
        className="flex gap-2 items-center mr-4"
        animate={{ x: `-${activeIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 130, damping: 22 }}
      >
        {heroCourses.map(({ icon: Icon, title, tag, body, to }) => (
          <Link key={title} to={to} className="min-w-full">
            <div className="flex min-h-[150px] gap-4 rounded-2xl bg-background/80 p-5 transition hover:bg-muted/70">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-widest text-gold">{tag}</div>
                <h3 className="mt-1 font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

function FeedbackCard({ feedback }: { feedback: (typeof feedbacks)[number] }) {
  return (
    <div className="feedback-card w-[340px] md:w-[380px] shrink-0 rounded-3xl border border-border bg-card p-8 shadow-soft flex flex-col group transition-all hover:-translate-y-2 hover:shadow-elegant">
      <Quote className="h-10 w-10 text-gold/30 mb-6 group-hover:text-gold/70 transition-colors" />
      <p className="text-lg leading-relaxed text-foreground/85 flex-grow italic">
        "{feedback.quote}"
      </p>
      <div className="mt-8 flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-gradient text-sm font-bold text-primary-foreground shadow-sm">
          {feedback.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold">{feedback.name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{feedback.location}</div>
        </div>
      </div>
    </div>
  );
}

function FeedbackCarousel() {
  const row1 = feedbacks.slice(0, 6);
  const row2 = feedbacks.slice(6);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 md:px-12">
      <div className="text-center mb-16 reveal">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">Feedback</div>
        <h2 className="font-display text-4xl md:text-5xl text-balance">
          What students felt shift.
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Seerah participants shared these reflections after studying, discussing, and applying the
          lessons.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="space-y-6 reveal">
        {/* Row 1 — scrolls left */}
        <div className="marquee-track overflow-hidden">
          <div className="marquee-scroll flex gap-6">
            {[...row1, ...row1].map((fb, i) => (
              <FeedbackCard key={`r1-${i}`} feedback={fb} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-track overflow-hidden">
          <div className="marquee-scroll marquee-reverse flex gap-6">
            {[...row2, ...row2].map((fb, i) => (
              <FeedbackCard key={`r2-${i}`} feedback={fb} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  useRevealAll();

  return (
    <SiteLayout>
      {/* ══ HERO ══ */}
      <section className="relative bg-hero overflow-hidden particle-field">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-36 grid md:grid-cols-2 gap-14 items-center relative z-10">
          <div className="animate-in-up">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Faith · Coaching · Seerah
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Helping Muslim women grow{" "}
              <span className="italic text-gradient drop-shadow-sm">from the inside out.</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl text-balance leading-relaxed">
              I am Hira Saqib — a certified life coach, Seerah educator, and homeschooling mentor. I
              help women find their substance through personal coaching, structured programmes, and
              faith-centred learning. In English and Urdu, worldwide.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/bookings"
                className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-1 transition-all duration-300 btn-shine"
              >
                Book a discovery call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted hover:border-primary/30 transition-all duration-300"
              >
                Meet Hira
              </Link>
            </div>
            <HeroCourseCarousel />
          </div>

          <div className="relative animate-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-8 bg-emerald-gradient rounded-[2.5rem] rotate-[-3deg] opacity-25 blur-3xl animate-pulse" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/60 hover-lift">
              <img
                src={hero}
                alt="Hira Saqib — life coach for Muslim women"
                width={1080}
                height={1620}
                className="w-full h-[560px] md:h-[640px] object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 hidden md:block max-w-[260px] animate-float shimmer-border">
              <div className="flex gap-0.5 text-gold mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed italic">
                "She helped me come home to myself — gently, and with the Qur'an as our compass."
              </p>
              <p className="text-xs text-muted-foreground mt-2">— A. M., Coaching Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SOCIAL PROOF STRIP ══ */}
      <section className="py-10 bg-card border-y border-border/40 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="font-display text-4xl md:text-5xl text-primary counter-glow">
                {s.value}
                {s.suffix && <span className="text-gold">{s.suffix}</span>}
              </div>
              <div className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ LATEST OFFERINGS ══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[150px]" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-12 reveal">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
                Latest offerings
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-balance">
                The newest ways to work together.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl text-balance">
              If you are deciding where to begin, these are the strongest entry points right now.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {latestOfferings.map(({ icon: Icon, title, body, to, accent }) => (
              <Link
                key={title}
                to={to}
                className="group glass-card rounded-3xl p-8 transition-all hover:-translate-y-3 hover:scale-[1.02] duration-500 relative overflow-hidden"
              >
                {/* Subtle accent gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-gradient grid place-items-center text-primary-foreground mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-soft">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{body}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium">
                    Explore{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THIS IS FOR YOU ══ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
              For you
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-balance">This is for you if…</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {forYou.map((line, i) => (
              <li
                key={line}
                className="flex gap-4 group reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="text-gold mt-1 text-lg group-hover:scale-125 transition-transform duration-300">
                  ✦
                </span>
                <span className="text-lg leading-relaxed text-foreground/85 group-hover:text-foreground transition">
                  {line}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-14 text-center italic text-xl text-primary text-balance max-w-2xl mx-auto font-display reveal">
            If you read even one of those and felt seen — you are in exactly the right place.
          </p>
        </div>
      </section>

      {/* ══ COURSES STRIP ══ */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
              Programmes
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-balance">
              Structured journeys, deep roots.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                tag: "Flagship",
                title: "The RISE Program",
                body: "A 6-month personal development journey — mindset, relationships, habits, purpose — built around Islamic values.",
                to: "/the-rise-program",
              },
              {
                tag: "Live cohort",
                title: "Seerah Awareness",
                body: "Reconnect with the life of the Prophet ﷺ through intimate, discussion-based sessions that move from page to life.",
                to: "/courses",
              },
              {
                tag: "Coming soon",
                title: "Homeschooling — What, Why & How",
                body: "Practical, faith-aligned mentorship for mothers choosing intentional education at home.",
                to: "/courses",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="glass-card rounded-3xl p-8 flex flex-col group transition-all hover:-translate-y-3 duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <span className="text-xs uppercase tracking-widest text-gold mb-4 relative z-10">
                  {c.tag}
                </span>
                <h3 className="font-display text-2xl mb-3 relative z-10">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1 relative z-10">
                  {c.body}
                </p>
                <Link
                  to={c.to}
                  className="mt-6 text-sm text-primary inline-flex items-center gap-2 relative z-10"
                >
                  Explore{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-24 md:py-32 border-y border-border/60 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[200px]" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FeedbackCarousel />
          <div className="hidden">
            <div className="text-center mb-16 reveal">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament">
                Testimonials
              </div>
              <h2 className="font-display text-4xl md:text-6xl">Words from the community</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  quote:
                    "She helped me come home to myself — gently, and with the Qur'an as our compass. Hira's coaching provided the exact balance of accountability and empathy I needed.",
                  name: "A. M.",
                  role: "Coaching Client",
                },
                {
                  quote:
                    "The Seerah sessions are profound. Hira has a gift for connecting the life of the Prophet ﷺ to the realities we face today. It changed how I view my own challenges.",
                  name: "S. K.",
                  role: "Seerah Student",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="glass-card rounded-3xl p-8 reveal relative overflow-hidden group"
                >
                  <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-gold" />
                  </div>
                  <div className="flex gap-1 text-gold mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-foreground/85 italic mb-6 relative z-10">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-gradient grid place-items-center text-primary-foreground text-sm font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center reveal">
              <Link
                to="/submit-testimonial"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted hover:border-primary/30 transition-all text-sm font-medium"
              >
                Share your experience <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="mt-4 text-xs text-muted-foreground">
                All testimonials are reviewed before they appear on the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MEET HIRA ══ */}
      <section className="py-24 bg-emerald-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/10 rounded-full" />
        </div>
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <Users className="w-8 h-8 mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-4xl md:text-5xl mb-6">Meet Hira</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed text-balance">
            I am passionate about nurturing thoughtful, confident, purpose-driven women through
            faith-centred guidance and structured learning. My coaching is offered in English and
            Urdu — wherever you are in the world, we can meet in the language closest to your heart.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300"
          >
            Learn more about my journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[200px]" />
        <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament reveal">
            Begin
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-balance reveal">
            You don't have to do it alone.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance reveal">
            Take the first step today. Book a free 30-minute discovery call and let us talk about
            where you are and where you want to be.
          </p>
          <div className="reveal">
            <Link
              to="/bookings"
              className="mt-10 relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-1 transition-all duration-300 btn-shine pulse-ring"
            >
              Book my free discovery call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-8 text-sm italic text-muted-foreground reveal">
            Sessions available in English and Urdu. Online, worldwide.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
