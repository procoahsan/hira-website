import { I as jsxRuntimeExports, Q as reactExports } from "./server-CUff86dv.mjs";
import { L as Link } from "./router-BTdp4RvQ.mjs";
import { S as SiteLayout, A as ArrowRight, c as createLucideIcon } from "./SiteLayout-CjNpYs7d.mjs";
import { S as Sparkles, U as Users } from "./users-BmbSWBWq.mjs";
import { H as Heart } from "./heart-BTdHYmbQ.mjs";
import { B as BookOpen } from "./book-open-oXdKrNKX.mjs";
import { m as motion } from "./proxy-MqxwfiGo.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ]
];
const Compass = createLucideIcon("compass", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function useRevealAll(selector = ".reveal") {
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
const hero = "/assets/about-C-bmHM_c.jpeg";
const forYou = ["You feel there is more to life than what you are currently living", "You are overwhelmed by your roles and have lost sight of who you are", "You want to raise your children with intention", "You are curious about homeschooling but feel unsure", "You want to reconnect with your faith in a real, living way", "You want guidance rooted in Islamic values — not generic self-help"];
const latestOfferings = [{
  icon: Heart,
  title: "The RISE Program",
  body: "A six-month growth journey with weekly live sessions, practical reflection, and faith-rooted momentum for women ready to lead their lives with clarity.",
  to: "/the-rise-program",
  accent: "from-rose-500/10 to-orange-400/10"
}, {
  icon: Compass,
  title: "Seerah Courses",
  body: "Choose the introductory or detailed Seerah path and learn through dedicated pages designed for depth, clarity, and reflection.",
  to: "/courses",
  accent: "from-blue-500/10 to-indigo-400/10"
}, {
  icon: BookOpen,
  title: "Home Learning Plan",
  body: "A personalised roadmap for mothers who want a clearer, more intentional approach to homeschooling and learning at home.",
  to: "/services",
  accent: "from-emerald-500/10 to-teal-400/10"
}];
const stats = [{
  value: "200+",
  label: "Women Coached"
}, {
  value: "6+",
  label: "Years Experience"
}, {
  value: "15+",
  label: "Countries Reached"
}, {
  value: "4.9",
  label: "Average Rating",
  suffix: "★"
}];
const heroCourses = [{
  tag: "Flagship",
  title: "The RISE Program",
  body: "A 6-month personal development journey built around Islamic values.",
  to: "/the-rise-program",
  icon: Heart
}, {
  tag: "Seerah",
  title: "Introductory Course",
  body: "A structured path through the life of the Prophet Muhammad ﷺ.",
  to: "/seerah-introductory",
  icon: Compass
}, {
  tag: "Seerah",
  title: "Detailed Study",
  body: "A deeper 2-3 year study of Seerah with Quranic revelation.",
  to: "/seerah-detailed",
  icon: BookOpen
}, {
  tag: "Mentorship",
  title: "Home Learning Plan",
  body: "A practical roadmap for intentional homeschooling at home.",
  to: "/services",
  icon: Users
}];
const feedbacks = [{
  name: "Anonymous participant",
  location: "Seerah course",
  quote: "It's a life changing course Alhamdulillah. Learning Seerah to me has become an essential part of life. I'm loving the feeling of knowing Prophet SAW."
}, {
  name: "Asma Naeem",
  location: "Faisalabad",
  quote: "It deepened my understanding and interest in the Quran. Practical lessons from the life of Prophet PBUH."
}, {
  name: "Anonymous participant",
  location: "Seerah course",
  quote: "The lessons about how Prophet reacted in certain conditions give us strength to do the same in our lives. I am trying to instill the love of Seerah in my kids."
}, {
  name: "Asma Zahid",
  location: "Karachi",
  quote: "The open discussions and thought provoking questions encourage deeper reflection and engagement."
}, {
  name: "Anonymous participant",
  location: "Seerah course",
  quote: "We pause, reflect, and relate at every step. These discussions make it possible to incorporate the teachings of Rasool Allah in our lives."
}, {
  name: "Beena Sarfaraz",
  location: "Dammam",
  quote: "Gaining a deeper emotional and spiritual connection with the Prophet Muhammad ﷺ has transformed the way I view my own challenges and responsibilities."
}, {
  name: "Anonymous participant",
  location: "Seerah course",
  quote: "The biggest change is that when life happens, I pause and think what my Beloved SAW would have done at this moment."
}, {
  name: "Faryal Imran",
  location: "Karachi",
  quote: "It has strengthened my connection with Allah and improved my understanding of the Quran."
}, {
  name: "Anonymous participant",
  location: "Seerah course",
  quote: "Everyone in the group was very supportive and encouraging, so I felt totally at ease whenever I had something to say."
}, {
  name: "Fatima Irfan",
  location: "Sialkot",
  quote: "My love and connection with Rasoolallah has increased. I feel closer to him, and I have become more reflective relating to Seerah."
}, {
  name: "Momima Abbasi",
  location: "Islamabad",
  quote: "The discussion helps us reflect on different aspects of the Seerah and connect the lessons to our own lives."
}, {
  name: "Anonymous participant",
  location: "Seerah course",
  quote: "I have started loving my Prophet and Sahaba in a way that I never did before. Every day I started reading and listening to Sahaba's life."
}];
function HeroCourseCarousel() {
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCourses.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 max-w-xl overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-3 shadow-soft backdrop-blur reveal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex  items-center justify-between gap-3 px-2 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Courses" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: heroCourses.map((course, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": `Show ${course.title}`, onClick: () => setActiveIndex(index), className: `h-1.5 rounded-full transition-all ${activeIndex === index ? "w-6 bg-primary" : "w-2 bg-border"}` }, course.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "flex gap-2 items-center mr-4", animate: {
      x: `-${activeIndex * 100}%`
    }, transition: {
      type: "spring",
      stiffness: 130,
      damping: 22
    }, children: heroCourses.map(({
      icon: Icon,
      title,
      tag,
      body,
      to
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "min-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[150px] gap-4 rounded-2xl bg-background/80 p-5 transition hover:bg-muted/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-gold", children: tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl leading-tight", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: body }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary", children: [
          "Explore ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] })
    ] }) }, title)) })
  ] });
}
function FeedbackCard({
  feedback
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feedback-card w-[340px] md:w-[380px] shrink-0 rounded-3xl border border-border bg-card p-8 shadow-soft flex flex-col group transition-all hover:-translate-y-2 hover:shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-gold/30 mb-6 group-hover:text-gold/70 transition-colors" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground/85 flex-grow italic", children: [
      '"',
      feedback.quote,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-gradient text-sm font-bold text-primary-foreground shadow-sm", children: feedback.name.charAt(0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: feedback.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: feedback.location })
      ] })
    ] })
  ] });
}
function FeedbackCarousel() {
  const row1 = feedbacks.slice(0, 6);
  const row2 = feedbacks.slice(6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-6xl px-4 md:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "Feedback" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-balance", children: "What students felt shift." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "Seerah participants shared these reflections after studying, discussing, and applying the lessons." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-scroll flex gap-6", children: [...row1, ...row1].map((fb, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackCard, { feedback: fb }, `r1-${i}`)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-scroll marquee-reverse flex gap-6", children: [...row2, ...row2].map((fb, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackCard, { feedback: fb }, `r2-${i}`)) }) })
    ] })
  ] });
}
function Index() {
  useRevealAll();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-hero overflow-hidden particle-field", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-36 grid md:grid-cols-2 gap-14 items-center relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 animate-pulse" }),
          " Faith · Coaching · Seerah"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl leading-[1.02] text-balance", children: [
          "Helping Muslim women grow",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient drop-shadow-sm", children: "from the inside out." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg text-muted-foreground max-w-xl text-balance leading-relaxed", children: "I am Hira Saqib — a certified life coach, Seerah educator, and homeschooling mentor. I help women find their substance through personal coaching, structured programmes, and faith-centred learning. In English and Urdu, worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/bookings", className: "relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-1 transition-all duration-300 btn-shine", children: [
            "Book a discovery call ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted hover:border-primary/30 transition-all duration-300", children: "Meet Hira" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCourseCarousel, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-in-up", style: {
        animationDelay: "0.2s"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 bg-emerald-gradient rounded-[2.5rem] rotate-[-3deg] opacity-25 blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/60 hover-lift", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Hira Saqib — life coach for Muslim women", width: 1080, height: 1620, className: "w-full h-[560px] md:h-[640px] object-cover object-top" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 hidden md:block max-w-[260px] animate-float shimmer-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-gold mb-2", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed italic", children: `"She helped me come home to myself — gently, and with the Qur'an as our compass."` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "— A. M., Coaching Client" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-card border-y border-border/40 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center reveal", style: {
      transitionDelay: "0.1s"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-4xl md:text-5xl text-primary counter-glow", children: [
        s.value,
        s.suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: s.suffix })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1 uppercase tracking-wider", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 md:py-28 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[150px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-12 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "Latest offerings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-balance", children: "The newest ways to work together." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl text-balance", children: "If you are deciding where to begin, these are the strongest entry points right now." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 stagger-children", children: latestOfferings.map(({
          icon: Icon,
          title,
          body,
          to,
          accent
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "group glass-card rounded-3xl p-8 transition-all hover:-translate-y-3 hover:scale-[1.02] duration-500 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-emerald-gradient grid place-items-center text-primary-foreground mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: body }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium", children: [
              "Explore",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" })
            ] })
          ] })
        ] }, title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 md:py-32 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pattern-dots opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "For you" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-balance", children: "This is for you if…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid md:grid-cols-2 gap-x-12 gap-y-5", children: forYou.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 group reveal", style: {
          transitionDelay: `${i * 0.08}s`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold mt-1 text-lg group-hover:scale-125 transition-transform duration-300", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-relaxed text-foreground/85 group-hover:text-foreground transition", children: line })
        ] }, line)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-14 text-center italic text-xl text-primary text-balance max-w-2xl mx-auto font-display reveal", children: "If you read even one of those and felt seen — you are in exactly the right place." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "Programmes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-balance", children: "Structured journeys, deep roots." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 stagger-children", children: [{
        tag: "Flagship",
        title: "The RISE Program",
        body: "A 6-month personal development journey — mindset, relationships, habits, purpose — built around Islamic values.",
        to: "/the-rise-program"
      }, {
        tag: "Live cohort",
        title: "Seerah Awareness",
        body: "Reconnect with the life of the Prophet ﷺ through intimate, discussion-based sessions that move from page to life.",
        to: "/courses"
      }, {
        tag: "Coming soon",
        title: "Homeschooling — What, Why & How",
        body: "Practical, faith-aligned mentorship for mothers choosing intentional education at home.",
        to: "/courses"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-card rounded-3xl p-8 flex flex-col group transition-all hover:-translate-y-3 duration-500 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-gold mb-4 relative z-10", children: c.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3 relative z-10", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed flex-1 relative z-10", children: c.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "mt-6 text-sm text-primary inline-flex items-center gap-2 relative z-10", children: [
          "Explore",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" })
        ] })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 md:py-32 border-y border-border/60 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[200px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackCarousel, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "Testimonials" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl", children: "Words from the community" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 mb-12", children: [{
            quote: "She helped me come home to myself — gently, and with the Qur'an as our compass. Hira's coaching provided the exact balance of accountability and empathy I needed.",
            name: "A. M.",
            role: "Coaching Client"
          }, {
            quote: "The Seerah sessions are profound. Hira has a gift for connecting the life of the Prophet ﷺ to the realities we face today. It changed how I view my own challenges.",
            name: "S. K.",
            role: "Seerah Student"
          }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl p-8 reveal relative overflow-hidden group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-16 h-16 text-gold" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold mb-4", children: Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground/85 italic mb-6 relative z-10", children: [
              '"',
              t.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-emerald-gradient grid place-items-center text-primary-foreground text-sm font-bold", children: t.name.charAt(0) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
              ] })
            ] })
          ] }, t.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/submit-testimonial", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted hover:border-primary/30 transition-all text-sm font-medium", children: [
              "Share your experience ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "All testimonials are reviewed before they appear on the website." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-emerald-gradient text-primary-foreground relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 left-10 w-64 h-64 border border-primary-foreground/20 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/20 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/10 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 mx-auto mb-6 opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "Meet Hira" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed text-balance", children: "I am passionate about nurturing thoughtful, confident, purpose-driven women through faith-centred guidance and structured learning. My coaching is offered in English and Urdu — wherever you are in the world, we can meet in the language closest to your heart." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300", children: [
          "Learn more about my journey ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 md:py-32 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pattern-dots opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[200px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament reveal", children: "Begin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-balance reveal", children: "You don't have to do it alone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground text-balance reveal", children: "Take the first step today. Book a free 30-minute discovery call and let us talk about where you are and where you want to be." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/bookings", className: "mt-10 relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-1 transition-all duration-300 btn-shine pulse-ring", children: [
          "Book my free discovery call ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm italic text-muted-foreground reveal", children: "Sessions available in English and Urdu. Online, worldwide." })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
