import { H as jsxRuntimeExports } from "./server-CN7MSrCz.mjs";
function PageHeader({
  eyebrow,
  title,
  intro
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hero border-b border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24 md:py-32 text-center animate-in-up", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-5 ornament", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl text-balance leading-[1.05]", children: title }),
    intro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance", children: intro })
  ] }) });
}
export {
  PageHeader as P
};
