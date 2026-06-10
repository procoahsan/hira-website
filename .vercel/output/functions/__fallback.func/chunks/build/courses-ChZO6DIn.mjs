import { H as jsxRuntimeExports } from "./server-RjP8p9T3.mjs";
import { L as Link } from "./router-uEAFJVBU.mjs";
import { S as SiteLayout, A as ArrowRight } from "./SiteLayout-1s3FMlQ6.mjs";
import { P as PageHeader } from "./PageHeader-DFfh1pAp.mjs";
import { C as Check } from "./check-DXs6hRIR.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const courses = [{
  tag: "6-Month Flagship",
  title: "The RISE Program",
  body: "A complete personal development journey covering mindset, relationships, habits, and purpose — built around Islamic values and the texture of real life.",
  bullets: ["Weekly live coaching", "Workbooks & reflection prompts", "Private WhatsApp circle", "Lifetime alumni access"],
  cta: "Learn more",
  to: "/the-rise-program"
}, {
  tag: "6-Month Introductory",
  title: "Seerah — Introductory Course",
  body: "A structured introduction to the life of the Prophet Muhammad ﷺ. Over six months, covering the full span of his life — from the world into which he was born to the legacy he left behind.",
  bullets: ["Weekly live sessions via Zoom", "6-month duration", "Open to all levels", "Free of charge"],
  cta: "Learn more",
  to: "/seerah-introductory"
}, {
  tag: "2–3 Year In-Depth",
  title: "Seerah — Detailed Study",
  body: "A comprehensive, in-depth study integrating Quranic revelation alongside the Prophetic biography — not a summary, but a true immersion into his life ﷺ.",
  bullets: ["Weekly 1.5-hour live sessions", "Quran integrated with Seerah", "2–3 year commitment", "Free of charge"],
  cta: "Learn more",
  to: "/seerah-detailed"
}, {
  tag: "Coming soon",
  title: "Homeschooling — What, Why & How",
  body: "Practical, faith-aligned mentorship for mothers choosing intentional education at home. From confidence to curriculum to rhythm.",
  bullets: ["Foundations & philosophy", "Choosing a curriculum", "Routines that actually hold", "Community of homeschool mothers"],
  cta: "Notify me",
  to: "/bookings"
}];
function Courses() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Courses", title: "Structured journeys for the woman ready to do the work.", intro: "Four programmes, each a different doorway into the same practice: substance, rooted in faith." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 space-y-8", children: courses.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-elegant transition-all grid md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-gradient text-primary-foreground p-10 md:p-12 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] opacity-80", children: c.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-5xl mt-6 opacity-30", children: [
            "0",
            i + 1
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mt-10", children: c.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 p-10 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: c.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 grid sm:grid-cols-2 gap-3", children: c.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-foreground/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-gold" }),
          " ",
          b
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "mt-9 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:-translate-y-0.5 transition", children: [
          c.cta,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }, c.title)) }) })
  ] });
}
export {
  Courses as component
};
