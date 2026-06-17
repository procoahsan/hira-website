import { u as j, r as c, c as k, b as y, d as N, j as e, L as i } from "./index-CLEWXjBW.js";
function C(a) {
  const r = j({ warn: a?.router === void 0 }),
    s = a?.router || r,
    o = c.useRef(void 0);
  return k(s.stores.__store, (n) => {
    if (a?.select) {
      if (a.structuralSharing ?? s.options.defaultStructuralSharing) {
        const l = y(o.current, a.select(n));
        return ((o.current = l), l);
      }
      return a.select(n);
    }
    return n;
  });
}
const v = (...a) =>
  a
    .filter((r, s, o) => !!r && r.trim() !== "" && o.indexOf(r) === s)
    .join(" ")
    .trim();
const S = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const M = (a) =>
  a.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, s, o) => (o ? o.toUpperCase() : s.toLowerCase()));
const p = (a) => {
  const r = M(a);
  return r.charAt(0).toUpperCase() + r.slice(1);
};
var z = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const L = (a) => {
  for (const r in a) if (r.startsWith("aria-") || r === "role" || r === "title") return !0;
  return !1;
};
const R = c.forwardRef(
  (
    {
      color: a = "currentColor",
      size: r = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: o,
      className: n = "",
      children: l,
      iconNode: u,
      ...d
    },
    t,
  ) =>
    c.createElement(
      "svg",
      {
        ref: t,
        ...z,
        width: r,
        height: r,
        stroke: a,
        strokeWidth: o ? (Number(s) * 24) / Number(r) : s,
        className: v("lucide", n),
        ...(!l && !L(d) && { "aria-hidden": "true" }),
        ...d,
      },
      [...u.map(([m, w]) => c.createElement(m, w)), ...(Array.isArray(l) ? l : [l])],
    ),
);
const h = (a, r) => {
  const s = c.forwardRef(({ className: o, ...n }, l) =>
    c.createElement(R, {
      ref: l,
      iconNode: r,
      className: v(`lucide-${S(p(a))}`, `lucide-${a}`, o),
      ...n,
    }),
  );
  return ((s.displayName = p(a)), s);
};
const _ = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  g = h("arrow-right", _);
const A = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  $ = h("menu", A);
const E = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  q = h("moon", E);
const B = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  H = h("sun", B);
const I = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  V = h("x", I),
  b = "/assets/dark-logo-BLREXsAk.png",
  f = "/assets/light-logo-DJmlBq-I.png",
  x = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/courses", label: "Courses" },
    { to: "/book-clubs", label: "Book Clubs" },
    { to: "/services", label: "Services" },
    { to: "/bookings", label: "Bookings" },
    { to: "/contact", label: "Contact" },
    { to: "/newsletter", label: "Newsletter" },
  ],
  D = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/worthwhilelearning/?hl=en",
      icon: e.jsx("svg", {
        className: "w-5 h-5",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: e.jsx("path", {
          fillRule: "evenodd",
          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
          clipRule: "evenodd",
        }),
      }),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hira-saqib-acma-92a5a716",
      icon: e.jsx("svg", {
        className: "w-5 h-5",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: e.jsx("path", {
          d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        }),
      }),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100063738618659",
      icon: e.jsx("svg", {
        className: "w-5 h-5",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: e.jsx("path", {
          fillRule: "evenodd",
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
          clipRule: "evenodd",
        }),
      }),
    },
  ];
function U({ children: a }) {
  const { theme: r, toggle: s } = N(),
    [o, n] = c.useState(!1),
    [l, u] = c.useState(!1),
    d = C({ select: (t) => t.location.pathname });
  return (
    c.useEffect(() => {
      const t = () => u(window.scrollY > 20);
      return (
        window.addEventListener("scroll", t, { passive: !0 }),
        () => window.removeEventListener("scroll", t)
      );
    }, []),
    e.jsxs("div", {
      className: "min-h-screen flex flex-col bg-background text-foreground",
      children: [
        e.jsxs("header", {
          className: `sticky top-0 z-50 transition-all duration-300 ${l ? "backdrop-blur-2xl bg-background/85 border-b border-border/60 shadow-soft" : "backdrop-blur-xl bg-background/60"}`,
          children: [
            e.jsxs("div", {
              className: `mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-300 ${l ? "h-16" : "h-20"}`,
              children: [
                e.jsxs(i, {
                  to: "/",
                  className: "flex items-center gap-0.5 group",
                  children: [
                    e.jsx("img", {
                      src: r === "dark" ? b : f,
                      alt: "Hira Saqib",
                      className:
                        "h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]",
                    }),
                    e.jsxs("span", {
                      className: "flex flex-col leading-tight",
                      children: [
                        e.jsx("span", {
                          className: "font-display text-xl tracking-tight",
                          children: "Hira Saqib",
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
                          children: "Substance · Faith · Growth",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("nav", {
                  className: "hidden lg:flex items-center gap-1",
                  children: x.map((t) => {
                    const m = d === t.to;
                    return e.jsxs(
                      i,
                      {
                        to: t.to,
                        className: `relative px-3 py-2 text-sm transition-all duration-200 rounded-lg ${m ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"}`,
                        children: [
                          t.label,
                          m &&
                            e.jsx("span", {
                              className:
                                "absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gold rounded-full",
                            }),
                        ],
                      },
                      t.to,
                    );
                  }),
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("button", {
                      onClick: s,
                      "aria-label": "Toggle theme",
                      className: "p-2 rounded-full hover:bg-muted transition-colors",
                      children:
                        r === "dark"
                          ? e.jsx(H, { className: "w-5 h-5" })
                          : e.jsx(q, { className: "w-5 h-5" }),
                    }),
                    e.jsxs(i, {
                      to: "/bookings",
                      className:
                        "hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-soft btn-shine relative",
                      children: ["Book a call ", e.jsx(g, { className: "w-3.5 h-3.5" })],
                    }),
                    e.jsx("button", {
                      className: "lg:hidden p-2 rounded-full hover:bg-muted",
                      onClick: () => n((t) => !t),
                      "aria-label": "Menu",
                      children: o
                        ? e.jsx(V, { className: "w-5 h-5" })
                        : e.jsx($, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: `lg:hidden overflow-hidden transition-all duration-300 ease-out ${o ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
              children: e.jsx("div", {
                className: "border-t border-border/60 bg-background/95 backdrop-blur-2xl",
                children: e.jsxs("div", {
                  className: "px-6 py-4 flex flex-col gap-1",
                  children: [
                    x.map((t) =>
                      e.jsx(
                        i,
                        {
                          to: t.to,
                          onClick: () => n(!1),
                          className: `py-2.5 px-3 text-sm rounded-xl transition-all ${d === t.to ? "text-primary bg-primary/5 font-medium" : "text-foreground/80 hover:text-primary hover:bg-muted/50"}`,
                          children: t.label,
                        },
                        t.to,
                      ),
                    ),
                    e.jsxs(i, {
                      to: "/bookings",
                      onClick: () => n(!1),
                      className:
                        "mt-2 flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-soft",
                      children: ["Book a call ", e.jsx(g, { className: "w-3.5 h-3.5" })],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        e.jsx("main", { className: "flex-1", children: a }),
        e.jsxs("footer", {
          className: "border-t border-border/60 mt-24 relative overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[200px]",
            }),
            e.jsxs("div", {
              className: "mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10 relative z-10",
              children: [
                e.jsxs("div", {
                  className: "md:col-span-2",
                  children: [
                    e.jsx("img", {
                      src: r === "dark" ? b : f,
                      alt: "Hira Saqib",
                      className: "h-12 w-auto object-contain mb-4",
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground max-w-md leading-relaxed",
                      children:
                        "Helping Muslim women grow — from the inside out. Coaching, Seerah, and structured learning available in English and Urdu, worldwide.",
                    }),
                    e.jsx("div", {
                      className: "mt-6 flex gap-3",
                      children: D.map((t) =>
                        e.jsx(
                          "a",
                          {
                            href: t.href,
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": t.label,
                            className:
                              "w-10 h-10 rounded-full bg-accent/40 grid place-items-center text-foreground/70 hover:text-primary hover:bg-accent/60 hover:scale-110 transition-all duration-200",
                            children: t.icon,
                          },
                          t.label,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h4", {
                      className: "text-sm uppercase tracking-widest text-muted-foreground mb-4",
                      children: "Explore",
                    }),
                    e.jsx("ul", {
                      className: "space-y-2 text-sm",
                      children: x
                        .slice(1, 5)
                        .map((t) =>
                          e.jsx(
                            "li",
                            {
                              children: e.jsx(i, {
                                to: t.to,
                                className: "hover:text-primary transition-colors",
                                children: t.label,
                              }),
                            },
                            t.to,
                          ),
                        ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h4", {
                      className: "text-sm uppercase tracking-widest text-muted-foreground mb-4",
                      children: "Connect",
                    }),
                    e.jsxs("ul", {
                      className: "space-y-2 text-sm",
                      children: [
                        e.jsx("li", {
                          children: e.jsx(i, {
                            to: "/contact",
                            className: "hover:text-primary transition-colors",
                            children: "Contact",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(i, {
                            to: "/newsletter",
                            className: "hover:text-primary transition-colors",
                            children: "Newsletter",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx(i, {
                            to: "/bookings",
                            className: "hover:text-primary transition-colors",
                            children: "Discovery call",
                          }),
                        }),
                        e.jsx("li", {
                          children: e.jsx("a", {
                            href: "mailto:info@hirasaqib.com",
                            className: "hover:text-primary transition-colors",
                            children: "info@hirasaqib.com",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "border-t border-border/60",
              children: e.jsxs("div", {
                className:
                  "mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between",
                children: [
                  e.jsxs("span", {
                    children: ["© ", new Date().getFullYear(), " Hira Saqib. All rights reserved."],
                  }),
                  e.jsx("span", {
                    className: "italic",
                    children: `"Indeed, with hardship comes ease." — Qur'an 94:6`,
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
export { g as A, U as S, h as c };
