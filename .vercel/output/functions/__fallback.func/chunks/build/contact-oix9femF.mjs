import { P as reactExports, H as jsxRuntimeExports } from "./server-RjP8p9T3.mjs";
import { S as SiteLayout, c as createLucideIcon } from "./SiteLayout-1s3FMlQ6.mjs";
import { P as PageHeader } from "./PageHeader-DFfh1pAp.mjs";
import { M as Mail } from "./mail-DYTNOCT9.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./router-uEAFJVBU.mjs";
const __iconNode$2 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode);
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Contact", title: "Say salaam.", intro: "For coaching enquiries, speaking, or simply to say hello — this inbox and these socials are read by me." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        [{
          icon: Mail,
          t: "Email",
          v: "info@hirasaqib.com",
          href: "mailto:info@hirasaqib.com"
        }, {
          icon: Instagram,
          t: "Instagram",
          v: "@worthwhilelearning",
          href: "https://www.instagram.com/worthwhilelearning/?hl=en"
        }, {
          icon: Linkedin,
          t: "LinkedIn",
          v: "Hira Saqib",
          href: "https://www.linkedin.com/in/hira-saqib-acma-92a5a716"
        }, {
          icon: Facebook,
          t: "Facebook",
          v: "Hira Saqib",
          href: "https://www.facebook.com/profile.php?id=100063738618659"
        }].map(({
          icon: Icon,
          t,
          v,
          href
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: href.startsWith("mailto") ? void 0 : "_blank", rel: "noreferrer", className: "flex gap-4 items-start group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl bg-accent/40 grid place-items-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl group-hover:text-primary transition-colors", children: v })
          ] })
        ] }, t)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-10 pl-6 border-l-2 border-gold italic text-lg text-muted-foreground", children: `"And whoever puts their trust in Allah — He will be enough for them." — Qur'an 65:3` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "bg-card border border-border rounded-3xl p-8 space-y-4 shadow-soft", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: "Message received. Jazakum'Allahu khayran." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Send a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "name", placeholder: "Your name", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", name: "email", placeholder: "Email", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "subject", placeholder: "Subject", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, name: "msg", rows: 6, placeholder: "Your message", className: "w-full rounded-2xl border border-input bg-background px-4 py-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:-translate-y-0.5 transition shadow-elegant", children: "Send" })
      ] }) })
    ] }) })
  ] });
}
export {
  Contact as component
};
