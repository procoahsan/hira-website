import { H as jsxRuntimeExports } from "./server-RjP8p9T3.mjs";
import { S as SiteLayout, c as createLucideIcon } from "./SiteLayout-1s3FMlQ6.mjs";
import { P as PageHeader } from "./PageHeader-DFfh1pAp.mjs";
import { B as BookOpen } from "./book-open-Ok7GnuGn.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./router-uEAFJVBU.mjs";
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
const clubs = [{
  name: "Girls' Book Club",
  age: "Teens",
  body: "A curated reading space for girls with age-appropriate books and guided discussion. A gentle entry into the life of the mind.",
  link: "https://forms.gle/etNSWi2htn3fLy8c9",
  cta: "Sign up",
  isOpen: true
}, {
  name: "Rising Women Book Club",
  age: "All Women",
  body: "A membership-based guided reading club with bi-monthly sessions, a reading guide, and a WhatsApp community. June is our trial month — join us and experience the circle before committing.",
  extra: "Membership: $99 per annum or $30 per quarter",
  link: "https://chat.whatsapp.com/GDwd53NI3e7LF42V6NsEQY?s=cl&p=a&mlu=2",
  cta: "Join WhatsApp",
  isOpen: true
}, {
  name: "Women's Book Discussion",
  age: "Closed Circle",
  body: "An intimate book discussion group for a closed circle of women. Currently reading: آدابِ اختلاف — exploring the etiquettes of disagreement with depth and reflection.",
  link: "/contact",
  cta: "Enquire",
  isOpen: false
}];
function BookClubs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Book Clubs", title: "Slow reading, in good company.", intro: "Three circles, one practice: meeting each other through the books that shape us." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6", children: clubs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card border border-border rounded-3xl p-8 flex flex-col hover:shadow-soft transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-accent/40 text-primary grid place-items-center mb-6", children: c.isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-gold mb-2", children: c.age }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: c.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed flex-1", children: c.body }),
      c.extra && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 rounded-xl bg-secondary/60 border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground/85", children: c.extra }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 italic", children: "June is a free trial month" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.link, target: c.link.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium", children: [
        c.cta,
        " →"
      ] })
    ] }, c.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary/40 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mb-4", children: "What we're reading now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "From Seerah classics to contemporary memoir, our shelves are a mix of the timeless and the timely. Join a circle to see the current list." })
    ] }) })
  ] });
}
export {
  BookClubs as component
};
