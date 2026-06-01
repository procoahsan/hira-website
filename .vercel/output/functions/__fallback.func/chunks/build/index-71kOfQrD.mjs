import { H as jsxRuntimeExports } from "./server-CN7MSrCz.mjs";
import { L as Link } from "./router-BMrmmywF.mjs";
import { S as SiteLayout, c as createLucideIcon } from "./SiteLayout-CT-9fgpQ.mjs";
import { S as Sparkles, U as Users } from "./users-D3YWJqcB.mjs";
import { A as ArrowRight } from "./arrow-right-C7f08lHp.mjs";
import { H as Heart } from "./heart-CAujRaeX.mjs";
import { B as BookOpen } from "./book-open-BRVjxOCB.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ]
];
const Compass = createLucideIcon("compass", __iconNode$1);
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
const hero = "/assets/profile-CN2aaYYT.jpeg";
const forYou = ["You feel there is more to life than what you are currently living", "You are overwhelmed by your roles and have lost sight of who you are", "You want to raise your children with intention", "You are curious about homeschooling but feel unsure", "You want to reconnect with your faith in a real, living way", "You want guidance rooted in Islamic values — not generic self-help"];
const latestOfferings = [{
  icon: Heart,
  title: "The RISE Program",
  body: "A six-month growth journey with weekly live sessions, practical reflection, and faith-rooted momentum for women ready to lead their lives with clarity.",
  to: "/the-rise-program"
}, {
  icon: Compass,
  title: "Seerah Courses",
  body: "Choose the introductory or detailed Seerah path and learn through dedicated pages designed for depth, clarity, and reflection.",
  to: "/courses"
}, {
  icon: BookOpen,
  title: "Home Learning Plan",
  body: "A personalised roadmap for mothers who want a clearer, more intentional approach to homeschooling and learning at home.",
  to: "/services"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-hero overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
          " Faith · Coaching · Seerah"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl leading-[1.02] text-balance", children: [
          "Helping Muslim women grow",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "from the inside out." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg text-muted-foreground max-w-xl text-balance", children: "I am Hira Saqib — a certified life coach, Seerah educator, and homeschooling mentor. I help women find their substance through personal coaching, structured programmes, and faith-centred learning. In English and Urdu, worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/bookings", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition", children: [
            "Book a discovery call ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition", children: "Meet Hira" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-in-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-emerald-gradient rounded-[2rem] rotate-[-3deg] opacity-30 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Hira Saqib — life coach for Muslim women", width: 1080, height: 1620, className: "w-full h-[560px] md:h-[640px] object-cover object-top" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-soft hidden md:block max-w-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-gold mb-2", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed italic", children: `"She helped me come home to myself — gently, and with the Qur'an as our compass."` })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "Latest offerings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-balance", children: "The newest ways to work together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl text-balance", children: "If you are deciding where to begin, these are the strongest entry points right now." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: latestOfferings.map(({
        icon: Icon,
        title,
        body,
        to
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "group bg-card border border-border rounded-3xl p-8 hover:shadow-elegant transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-emerald-gradient grid place-items-center text-primary-foreground mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: body }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium", children: [
          "Explore ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" })
        ] })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "For you" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-balance", children: "This is for you if…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid md:grid-cols-2 gap-x-12 gap-y-5", children: forYou.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold mt-1 text-lg", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-relaxed text-foreground/85 group-hover:text-foreground transition", children: line })
      ] }, line)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-12 text-center italic text-xl text-primary text-balance max-w-2xl mx-auto font-display", children: "If you read even one of those and felt seen — you are in exactly the right place." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8", children: [{
      tag: "Flagship",
      title: "The RISE Program",
      body: "A 6-month personal development journey — mindset, relationships, habits, purpose — built around Islamic values.",
      to: "/courses"
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
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border rounded-3xl p-8 flex flex-col bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-gold mb-4", children: c.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed flex-1", children: c.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "mt-6 text-sm text-primary inline-flex items-center gap-2", children: [
        "Explore ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }, c.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-secondary/40 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl", children: "Words from the community" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-3xl p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold mb-4", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/85 italic mb-6", children: `"She helped me come home to myself — gently, and with the Qur'an as our compass. Hira's coaching provided the exact balance of accountability and empathy I needed."` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium uppercase tracking-widest text-muted-foreground", children: "— A. M. (Coaching Client)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-3xl p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold mb-4", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/85 italic mb-6", children: '"The Seerah sessions are profound. Hira has a gift for connecting the life of the Prophet ﷺ to the realities we face today. It changed how I view my own challenges."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium uppercase tracking-widest text-muted-foreground", children: "— S. K. (Seerah Student)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/submit-testimonial", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition text-sm font-medium", children: [
          "Share your experience ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "All testimonials are reviewed before they appear on the website." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-emerald-gradient text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 mx-auto mb-6 opacity-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "Meet Hira" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed text-balance", children: "I am passionate about nurturing thoughtful, confident, purpose-driven women through faith-centred guidance and structured learning. My coaching is offered in English and Urdu — wherever you are in the world, we can meet in the language closest to your heart." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition", children: [
        "Learn more about my journey ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament", children: "Begin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-balance", children: "You don't have to do it alone." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground text-balance", children: "Take the first step today. Book a free 30-minute discovery call and let us talk about where you are and where you want to be." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/bookings", className: "mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition", children: [
        "Book my free discovery call ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm italic text-muted-foreground", children: "Sessions available in English and Urdu. Online, worldwide." })
    ] }) })
  ] });
}
export {
  Index as component
};
