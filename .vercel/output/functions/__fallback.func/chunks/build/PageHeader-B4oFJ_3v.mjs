import { I as jsxRuntimeExports } from "./server-KbOrpO-8.mjs";
function PageHeader({
  eyebrow,
  title,
  intro
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-hero border-b border-border/50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-60 h-60 bg-gold/10 rounded-full blur-[100px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pattern-dots opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24 md:py-32 text-center animate-in-up relative z-10", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-5 ornament", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl text-balance leading-[1.05]", children: title }),
      intro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed", children: intro }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-center gap-3 text-gold/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-current" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-current" })
      ] })
    ] })
  ] });
}
export {
  PageHeader as P
};
