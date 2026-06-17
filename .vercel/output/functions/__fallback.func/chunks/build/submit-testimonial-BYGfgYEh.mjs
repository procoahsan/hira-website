import { Q as reactExports, I as jsxRuntimeExports } from "./server-KbOrpO-8.mjs";
import { S as SiteLayout } from "./SiteLayout-Btn55CIq.mjs";
import { P as PageHeader } from "./PageHeader-B4oFJ_3v.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./router-DWjYwRDo.mjs";
function SubmitTestimonial() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Testimonial", title: "Share your experience.", intro: "Your words help other women find the courage to begin. Thank you for sharing your journey." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
    }, className: "bg-card border border-border rounded-3xl p-8 md:p-10 space-y-5 shadow-soft", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3 text-gold", children: "✦" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: "Jazakum'Allahu khayran." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your testimonial has been submitted successfully. It will be reviewed before appearing on the website." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Submit your testimonial" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Please note that all testimonials are reviewed before they are published on the website. You can choose to remain anonymous or use initials." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-muted-foreground", children: "Your Name (or Initials)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "name", className: "mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-muted-foreground", children: "Program or Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "service", placeholder: "e.g. 1:1 Coaching, The RISE Program, Seerah Course", className: "mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-muted-foreground", children: "Your Testimonial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, name: "testimonial", rows: 6, className: "mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:-translate-y-0.5 transition shadow-elegant mt-2", children: "Submit Testimonial" })
    ] }) }) }) })
  ] });
}
export {
  SubmitTestimonial as component
};
