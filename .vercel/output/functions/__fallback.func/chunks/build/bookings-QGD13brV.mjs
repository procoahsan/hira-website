import { P as reactExports, H as jsxRuntimeExports } from "./server-CN7MSrCz.mjs";
import { S as SiteLayout, c as createLucideIcon } from "./SiteLayout-CT-9fgpQ.mjs";
import { P as PageHeader } from "./PageHeader-Cu9L6E9R.mjs";
import { C as Clock, G as Globe } from "./globe-Cu5tBsH_.mjs";
import { C as Calendar } from "./calendar-Do50-e4o.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./router-BMrmmywF.mjs";
const __iconNode = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
function Bookings() {
  const [sent, setSent] = reactExports.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const preferredDate = String(formData.get("preferredDate") ?? "").trim();
    const preferredTime = String(formData.get("preferredTime") ?? "").trim();
    const timezone = String(formData.get("timezone") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();
    const subject = encodeURIComponent(`Discovery call request from ${name || "website visitor"}`);
    const body = encodeURIComponent([`Name: ${name || "N/A"}`, `Email: ${email || "N/A"}`, `Preferred date: ${preferredDate || "N/A"}`, `Preferred time: ${preferredTime || "N/A"}`, `Timezone: ${timezone || "N/A"}`, "", "Message:", notes || "N/A"].join("\n"));
    window.location.href = `mailto:info@hirasaqib.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Bookings", title: "Let's begin with a conversation.", intro: "Book a free 30-minute discovery call. We'll talk about where you are, where you want to be, and whether we're a fit." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-6", children: [{
        icon: Clock,
        t: "30 minutes",
        b: "Long enough to listen, short enough to honour your day."
      }, {
        icon: Globe,
        t: "Online, worldwide",
        b: "Via Google Meet or Zoom — wherever you are."
      }, {
        icon: MessageCircle,
        t: "English or Urdu",
        b: "Choose the language closest to your heart."
      }, {
        icon: Calendar,
        t: "No pressure",
        b: "If we're not the right fit, I'll happily point you onward."
      }].map(({
        icon: Icon,
        t,
        b
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 shrink-0 rounded-2xl bg-accent/40 grid place-items-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: b })
        ] })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-2", children: "Schedule your call" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Use the form below to request a discovery call. I’ll review your note and reply with a time that fits my current availability." }),
        sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-secondary/40 p-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3 text-gold", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl", children: "Request received." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Your email app should open with the details filled in. If it does not, please email info@hirasaqib.com directly." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "grid gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "name", placeholder: "Your name", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", name: "email", placeholder: "Email address", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "date", name: "preferredDate", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "time", name: "preferredTime", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "timezone", placeholder: "Timezone", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, name: "notes", rows: 6, placeholder: "Tell me a little about what you’d like support with", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:-translate-y-0.5 transition shadow-elegant", children: "Request my call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "This replaces the broken embed and works directly from the website." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Bookings as component
};
