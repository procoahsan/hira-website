import { I as jsxRuntimeExports } from "./server-KbOrpO-8.mjs";
import { S as SiteLayout } from "./SiteLayout-Btn55CIq.mjs";
import { P as PageHeader } from "./PageHeader-B4oFJ_3v.mjs";
import { w as womensImg } from "./rising-woman-DEg1ydyn.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./router-DWjYwRDo.mjs";
const teenGirlsImg = "/assets/teen-girls-book-club-Cs92bqKV.jpeg";
const ladiesImg = "/assets/ladies-book-club-DVoF21BC.jpeg";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, {
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, {
        eyebrow: "Book Clubs",
        title: "Slow reading, in good company.",
        intro: "Three circles, one practice: meeting each other through the books that shape us.",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
        className: "py-12",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8",
          children: clubs.map((c) =>
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                className:
                  "bg-card border border-border rounded-[2rem] overflow-hidden flex flex-col hover:shadow-soft transition group min-h-[620px]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "h-72 overflow-hidden",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                      src: c.image,
                      alt: c.name,
                      loading: "lazy",
                      className:
                        "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "p-6 flex flex-col flex-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "text-xs uppercase tracking-widest text-gold mb-1",
                        children: c.age,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                        className: "font-display text-3xl mb-3",
                        children: c.name,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className: "text-muted-foreground leading-relaxed flex-1 text-[16px]",
                        children: c.body,
                      }),
                      c.extra &&
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "mt-4 p-4 rounded-2xl bg-secondary/60 border border-border/60",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                              className: "text-sm font-medium text-foreground/85",
                              children: c.extra,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                              className: "text-xs text-muted-foreground mt-1 italic",
                              children: "June is a free trial month",
                            }),
                          ],
                        }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                        href: c.link,
                        target: c.link.startsWith("http") ? "_blank" : void 0,
                        rel: "noreferrer",
                        className:
                          "mt-5 inline-flex items-center gap-2 text-sm text-primary font-medium",
                        children: [c.cta, " →"],
                      }),
                    ],
                  }),
                ],
              },
              c.name,
            ),
          ),
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
        className: "py-20 bg-secondary/40 border-y border-border/60",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "mx-auto max-w-3xl px-6 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
              className: "font-display text-4xl mb-4",
              children: "What we're reading now",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-muted-foreground",
              children:
                "From Seerah classics to contemporary memoir, our shelves are a mix of the timeless and the timely. Join a circle to see the current list.",
            }),
          ],
        }),
      }),
    ],
  });
}
export { BookClubs as component };
