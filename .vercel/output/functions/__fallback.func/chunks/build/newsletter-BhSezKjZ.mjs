import { P as reactExports, H as jsxRuntimeExports } from "./server-CN7MSrCz.mjs";
import { S as SiteLayout } from "./SiteLayout-CT-9fgpQ.mjs";
import { P as PageHeader } from "./PageHeader-Cu9L6E9R.mjs";
import { M as Mail } from "./mail-DXi6gyXC.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./router-BMrmmywF.mjs";
function Newsletter() {
  const [sub, setSub] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Newsletter", title: "A monthly letter — soft, slow, substantive.", intro: "One thoughtful note per month. Reflections, Seerah, reading lists, and the occasional invitation." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-3xl p-10 shadow-soft text-center", children: sub ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "✦" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl", children: "Welcome to the letter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Check your inbox to confirm your subscription, insha'Allah." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 mx-auto rounded-2xl bg-emerald-gradient text-primary-foreground grid place-items-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-3", children: "Subscribe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-7", children: "No noise. No selling. Just a quiet monthly note." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSub(true);
      }, className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "you@example.com", className: "flex-1 rounded-full border border-input bg-background px-5 py-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-elegant hover:-translate-y-0.5 transition", children: "Subscribe" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xs text-muted-foreground", children: "Unsubscribe anytime. We never share your address." })
    ] }) }) }) })
  ] });
}
export {
  Newsletter as component
};
