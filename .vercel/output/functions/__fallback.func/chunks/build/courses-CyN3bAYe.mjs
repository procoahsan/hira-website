import { Q as reactExports, I as jsxRuntimeExports } from "./server-KbOrpO-8.mjs";
import { L as Link } from "./router-DWjYwRDo.mjs";
import { S as SiteLayout, A as ArrowRight } from "./SiteLayout-Btn55CIq.mjs";
import { P as PageHeader } from "./PageHeader-B4oFJ_3v.mjs";
import { h as homeSchoolingImg } from "./home-schooling-SUzWtAC6.mjs";
import { m as motion } from "./proxy-B21NDEYf.mjs";
import { C as Check } from "./check-D12B-h_Z.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const riseImg = "/assets/rise-program-CBbZ-sHJ.jpeg";
const seerahImg = "/assets/seerah-64ESgd6-.jpeg";
const courses = [{
  tag: "6-Month Flagship",
  title: "The RISE Program",
  body: "A complete personal development journey covering mindset, relationships, habits, and purpose — built around Islamic values and the texture of real life.",
  bullets: ["Weekly live coaching", "Workbooks & reflection prompts", "Private WhatsApp circle", "Lifetime alumni access"],
  cta: "Learn more",
  to: "/the-rise-program",
  image: riseImg
}, {
  tag: "6-Month Introductory",
  title: "Seerah — Introductory Course",
  body: "A structured introduction to the life of the Prophet Muhammad ﷺ. Over six months, covering the full span of his life — from the world into which he was born to the legacy he left behind.",
  bullets: ["Weekly live sessions via Zoom", "6-month duration", "Open to all levels", "Free of charge"],
  cta: "Learn more",
  to: "/seerah-introductory",
  image: seerahImg
}, {
  tag: "2–3 Year In-Depth",
  title: "Seerah — Detailed Study",
  body: "A comprehensive, in-depth study integrating Quranic revelation alongside the Prophetic biography — not a summary, but a true immersion into his life ﷺ.",
  bullets: ["Weekly 1.5-hour live sessions", "Quran integrated with Seerah", "2–3 year commitment", "Free of charge"],
  cta: "Learn more",
  to: "/seerah-detailed",
  image: seerahImg
}, {
  tag: "Coming soon",
  title: "Homeschooling — What, Why & How",
  body: "Practical, faith-aligned mentorship for mothers choosing intentional education at home. From confidence to curriculum to rhythm.",
  bullets: ["Foundations & philosophy", "Choosing a curriculum", "Routines that actually hold", "Community of homeschool mothers"],
  cta: "Notify me",
  to: "/bookings",
  image: homeSchoolingImg
}];
function Courses() {
  const [hoveredIndex, setHoveredIndex] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Courses", title: "Structured journeys for the woman ready to do the work.", intro: "Four programmes, each a different doorway into the same practice: substance, rooted in faith." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 items-start", children: courses.map((c, i) => {
      const isHovered = hoveredIndex === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { layout: true, onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(null), transition: {
        layout: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      }, className: "bg-card border border-border rounded-3xl overflow-hidden flex flex-col hover:shadow-soft transition-shadow min-h-[520px]", style: {
        zIndex: isHovered ? 10 : 1
      }, children: [
        c.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "overflow-hidden", animate: {
          height: isHovered ? "auto" : 230
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { layout: true, src: c.image, alt: c.title, loading: "lazy", className: "w-full", style: {
          objectFit: isHovered ? "contain" : "cover",
          height: isHovered ? "auto" : 230
        } }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-gradient text-primary-foreground p-5 h-56 flex flex-col justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] opacity-80", children: c.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mt-1", children: c.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-gold mb-1", children: c.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-4", children: c.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5", children: c.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }),
            " ",
            b
          ] }, b)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:-translate-y-0.5 transition self-start", children: [
            c.cta,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }, c.title);
    }) }) })
  ] });
}
export {
  Courses as component
};
