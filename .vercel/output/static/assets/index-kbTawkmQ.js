import { r as N, j as r, a as Et, L as X } from "./index-CLEWXjBW.js";
import { c as Ne, A as ee, S as Ct } from "./SiteLayout-ClMWzJak.js";
import { b as kt, c as At, a as le, S as Lt, U as rt } from "./utils-DX3kBZPO.js";
import { H as st } from "./heart-mQXPHXV0.js";
import { B as ot } from "./book-open-iRm0b3zv.js";
import { m as Pt } from "./proxy-DtwS0EBc.js";
const Tt = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  Mt = Ne("arrow-left", Tt);
const Ot = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      {
        d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
        key: "9ktpf1",
      },
    ],
  ],
  at = Ne("compass", Ot);
const Dt = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  it = Ne("quote", Dt);
const zt = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  We = Ne("star", zt);
function Ft(e = ".reveal") {
  N.useEffect(() => {
    const t = new IntersectionObserver(
      (n) => {
        n.forEach((s) => {
          s.isIntersecting && (s.target.classList.add("visible"), t.unobserve(s.target));
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    return (document.querySelectorAll(e).forEach((n) => t.observe(n)), () => t.disconnect());
  }, [e]);
}
const Rt = "/assets/about-C-bmHM_c.jpeg";
function Vt(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ze(e) {
  return Vt(e) || Array.isArray(e);
}
function Bt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function De(e, t) {
  const n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})),
    o = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== o
    ? !1
    : n.every((i) => {
        const d = e[i],
          c = t[i];
        return typeof d == "function" ? `${d}` == `${c}` : !Ze(d) || !Ze(c) ? d === c : De(d, c);
      });
}
function Je(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function Ht(e, t) {
  if (e.length !== t.length) return !1;
  const n = Je(e),
    s = Je(t);
  return n.every((a, o) => {
    const i = s[o];
    return De(a, i);
  });
}
function ze(e) {
  return typeof e == "number";
}
function Pe(e) {
  return typeof e == "string";
}
function je(e) {
  return typeof e == "boolean";
}
function Xe(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function T(e) {
  return Math.abs(e);
}
function Fe(e) {
  return Math.sign(e);
}
function he(e, t) {
  return T(e - t);
}
function qt(e, t) {
  if (e === 0 || t === 0 || T(e) <= T(t)) return 0;
  const n = he(T(e), T(t));
  return T(n / e);
}
function _t(e) {
  return Math.round(e * 100) / 100;
}
function pe(e) {
  return xe(e).map(Number);
}
function B(e) {
  return e[ye(e)];
}
function ye(e) {
  return Math.max(0, e.length - 1);
}
function Re(e, t) {
  return t === ye(e);
}
function et(e, t = 0) {
  return Array.from(Array(e), (n, s) => t + s);
}
function xe(e) {
  return Object.keys(e);
}
function lt(e, t) {
  return [e, t].reduce(
    (n, s) => (
      xe(s).forEach((a) => {
        const o = n[a],
          i = s[a],
          d = Xe(o) && Xe(i);
        n[a] = d ? lt(o, i) : i;
      }),
      n
    ),
    {},
  );
}
function Te(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function $t(e, t) {
  const n = { start: s, center: a, end: o };
  function s() {
    return 0;
  }
  function a(c) {
    return o(c) / 2;
  }
  function o(c) {
    return t - c;
  }
  function i(c, l) {
    return Pe(e) ? n[e](c) : e(t, c, l);
  }
  return { measure: i };
}
function ge() {
  let e = [];
  function t(a, o, i, d = { passive: !0 }) {
    let c;
    if ("addEventListener" in a)
      (a.addEventListener(o, i, d), (c = () => a.removeEventListener(o, i, d)));
    else {
      const l = a;
      (l.addListener(i), (c = () => l.removeListener(i)));
    }
    return (e.push(c), s);
  }
  function n() {
    e = e.filter((a) => a());
  }
  const s = { add: t, clear: n };
  return s;
}
function Gt(e, t, n, s) {
  const a = ge(),
    o = 1e3 / 60;
  let i = null,
    d = 0,
    c = 0;
  function l() {
    a.add(e, "visibilitychange", () => {
      e.hidden && u();
    });
  }
  function x() {
    (v(), a.clear());
  }
  function f(g) {
    if (!c) return;
    i || ((i = g), n(), n());
    const m = g - i;
    for (i = g, d += m; d >= o; ) (n(), (d -= o));
    const y = d / o;
    (s(y), c && (c = t.requestAnimationFrame(f)));
  }
  function h() {
    c || (c = t.requestAnimationFrame(f));
  }
  function v() {
    (t.cancelAnimationFrame(c), (i = null), (d = 0), (c = 0));
  }
  function u() {
    ((i = null), (d = 0));
  }
  return { init: l, destroy: x, start: h, stop: v, update: n, render: s };
}
function Ut(e, t) {
  const n = t === "rtl",
    s = e === "y",
    a = s ? "y" : "x",
    o = s ? "x" : "y",
    i = !s && n ? -1 : 1,
    d = x(),
    c = f();
  function l(u) {
    const { height: p, width: g } = u;
    return s ? p : g;
  }
  function x() {
    return s ? "top" : n ? "right" : "left";
  }
  function f() {
    return s ? "bottom" : n ? "left" : "right";
  }
  function h(u) {
    return u * i;
  }
  return { scroll: a, cross: o, startEdge: d, endEdge: c, measureSize: l, direction: h };
}
function se(e = 0, t = 0) {
  const n = T(e - t);
  function s(l) {
    return l < e;
  }
  function a(l) {
    return l > t;
  }
  function o(l) {
    return s(l) || a(l);
  }
  function i(l) {
    return o(l) ? (s(l) ? e : t) : l;
  }
  function d(l) {
    return n ? l - n * Math.ceil((l - t) / n) : l;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: o,
    reachedMax: a,
    reachedMin: s,
    removeOffset: d,
  };
}
function ct(e, t, n) {
  const { constrain: s } = se(0, e),
    a = e + 1;
  let o = i(t);
  function i(h) {
    return n ? T((a + h) % a) : s(h);
  }
  function d() {
    return o;
  }
  function c(h) {
    return ((o = i(h)), f);
  }
  function l(h) {
    return x().set(d() + h);
  }
  function x() {
    return ct(e, d(), n);
  }
  const f = { get: d, set: c, add: l, clone: x };
  return f;
}
function Yt(e, t, n, s, a, o, i, d, c, l, x, f, h, v, u, p, g, m, y) {
  const { cross: w, direction: I } = e,
    L = ["INPUT", "SELECT", "TEXTAREA"],
    E = { passive: !1 },
    j = ge(),
    S = ge(),
    C = se(50, 225).constrain(v.measure(20)),
    M = { mouse: 300, touch: 400 },
    k = { mouse: 500, touch: 600 },
    F = u ? 43 : 25;
  let H = !1,
    q = 0,
    _ = 0,
    te = !1,
    Z = !1,
    U = !1,
    Y = !1;
  function ce(b) {
    if (!y) return;
    function A(z) {
      (je(y) || y(b, z)) && ue(z);
    }
    const O = t;
    j.add(O, "dragstart", (z) => z.preventDefault(), E)
      .add(O, "touchmove", () => {}, E)
      .add(O, "touchend", () => {})
      .add(O, "touchstart", A)
      .add(O, "mousedown", A)
      .add(O, "touchcancel", D)
      .add(O, "contextmenu", D)
      .add(O, "click", Q, !0);
  }
  function $() {
    (j.clear(), S.clear());
  }
  function oe() {
    const b = Y ? n : t;
    S.add(b, "touchmove", R, E)
      .add(b, "touchend", D)
      .add(b, "mousemove", R, E)
      .add(b, "mouseup", D);
  }
  function ae(b) {
    const A = b.nodeName || "";
    return L.includes(A);
  }
  function K() {
    return (u ? k : M)[Y ? "mouse" : "touch"];
  }
  function de(b, A) {
    const O = f.add(Fe(b) * -1),
      z = x.byDistance(b, !u).distance;
    return u || T(b) < C ? z : g && A ? z * 0.5 : x.byIndex(O.get(), 0).distance;
  }
  function ue(b) {
    const A = Te(b, s);
    ((Y = A),
      (U = u && A && !b.buttons && H),
      (H = he(a.get(), i.get()) >= 2),
      !(A && b.button !== 0) &&
        (ae(b.target) ||
          ((te = !0),
          o.pointerDown(b),
          l.useFriction(0).useDuration(0),
          a.set(i),
          oe(),
          (q = o.readPoint(b)),
          (_ = o.readPoint(b, w)),
          h.emit("pointerDown"))));
  }
  function R(b) {
    if (!Te(b, s) && b.touches.length >= 2) return D(b);
    const O = o.readPoint(b),
      z = o.readPoint(b, w),
      G = he(O, q),
      W = he(z, _);
    if (!Z && !Y && (!b.cancelable || ((Z = G > W), !Z))) return D(b);
    const ne = o.pointerMove(b);
    (G > p && (U = !0),
      l.useFriction(0.3).useDuration(0.75),
      d.start(),
      a.add(I(ne)),
      b.preventDefault());
  }
  function D(b) {
    const O = x.byDistance(0, !1).index !== f.get(),
      z = o.pointerUp(b) * K(),
      G = de(I(z), O),
      W = qt(z, G),
      ne = F - 10 * W,
      J = m + W / 50;
    ((Z = !1),
      (te = !1),
      S.clear(),
      l.useDuration(ne).useFriction(J),
      c.distance(G, !u),
      (Y = !1),
      h.emit("pointerUp"));
  }
  function Q(b) {
    U && (b.stopPropagation(), b.preventDefault(), (U = !1));
  }
  function V() {
    return te;
  }
  return { init: ce, destroy: $, pointerDown: V };
}
function Kt(e, t) {
  let s, a;
  function o(f) {
    return f.timeStamp;
  }
  function i(f, h) {
    const u = `client${(h || e.scroll) === "x" ? "X" : "Y"}`;
    return (Te(f, t) ? f : f.touches[0])[u];
  }
  function d(f) {
    return ((s = f), (a = f), i(f));
  }
  function c(f) {
    const h = i(f) - i(a),
      v = o(f) - o(s) > 170;
    return ((a = f), v && (s = f), h);
  }
  function l(f) {
    if (!s || !a) return 0;
    const h = i(a) - i(s),
      v = o(f) - o(s),
      u = o(f) - o(a) > 170,
      p = h / v;
    return v && !u && T(p) > 0.1 ? p : 0;
  }
  return { pointerDown: d, pointerMove: c, pointerUp: l, readPoint: i };
}
function Qt() {
  function e(n) {
    const { offsetTop: s, offsetLeft: a, offsetWidth: o, offsetHeight: i } = n;
    return { top: s, right: a + o, bottom: s + i, left: a, width: o, height: i };
  }
  return { measure: e };
}
function Wt(e) {
  function t(s) {
    return e * (s / 100);
  }
  return { measure: t };
}
function Zt(e, t, n, s, a, o, i) {
  const d = [e].concat(s);
  let c,
    l,
    x = [],
    f = !1;
  function h(g) {
    return a.measureSize(i.measure(g));
  }
  function v(g) {
    if (!o) return;
    ((l = h(e)), (x = s.map(h)));
    function m(y) {
      for (const w of y) {
        if (f) return;
        const I = w.target === e,
          L = s.indexOf(w.target),
          E = I ? l : x[L],
          j = h(I ? e : s[L]);
        if (T(j - E) >= 0.5) {
          (g.reInit(), t.emit("resize"));
          break;
        }
      }
    }
    ((c = new ResizeObserver((y) => {
      (je(o) || o(g, y)) && m(y);
    })),
      n.requestAnimationFrame(() => {
        d.forEach((y) => c.observe(y));
      }));
  }
  function u() {
    ((f = !0), c && c.disconnect());
  }
  return { init: v, destroy: u };
}
function Jt(e, t, n, s, a, o) {
  let i = 0,
    d = 0,
    c = a,
    l = o,
    x = e.get(),
    f = 0;
  function h() {
    const E = s.get() - e.get(),
      j = !c;
    let S = 0;
    return (
      j
        ? ((i = 0), n.set(s), e.set(s), (S = E))
        : (n.set(e), (i += E / c), (i *= l), (x += i), e.add(i), (S = x - f)),
      (d = Fe(S)),
      (f = x),
      L
    );
  }
  function v() {
    const E = s.get() - t.get();
    return T(E) < 0.001;
  }
  function u() {
    return c;
  }
  function p() {
    return d;
  }
  function g() {
    return i;
  }
  function m() {
    return w(a);
  }
  function y() {
    return I(o);
  }
  function w(E) {
    return ((c = E), L);
  }
  function I(E) {
    return ((l = E), L);
  }
  const L = {
    direction: p,
    duration: u,
    velocity: g,
    seek: h,
    settled: v,
    useBaseFriction: y,
    useBaseDuration: m,
    useFriction: I,
    useDuration: w,
  };
  return L;
}
function Xt(e, t, n, s, a) {
  const o = a.measure(10),
    i = a.measure(50),
    d = se(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function x(v) {
    if (!l()) return;
    const u = e.reachedMin(t.get()) ? "min" : "max",
      p = T(e[u] - t.get()),
      g = n.get() - t.get(),
      m = d.constrain(p / i);
    (n.subtract(g * m),
      !v && T(g) < o && (n.set(e.constrain(n.get())), s.useDuration(25).useBaseFriction()));
  }
  function f(v) {
    c = !v;
  }
  return { shouldConstrain: l, constrain: x, toggleActive: f };
}
function en(e, t, n, s, a) {
  const o = se(-t + e, 0),
    i = f(),
    d = x(),
    c = h();
  function l(u, p) {
    return he(u, p) <= 1;
  }
  function x() {
    const u = i[0],
      p = B(i),
      g = i.lastIndexOf(u),
      m = i.indexOf(p) + 1;
    return se(g, m);
  }
  function f() {
    return n
      .map((u, p) => {
        const { min: g, max: m } = o,
          y = o.constrain(u),
          w = !p,
          I = Re(n, p);
        return w ? m : I || l(g, y) ? g : l(m, y) ? m : y;
      })
      .map((u) => parseFloat(u.toFixed(3)));
  }
  function h() {
    if (t <= e + a) return [o.max];
    if (s === "keepSnaps") return i;
    const { min: u, max: p } = d;
    return i.slice(u, p);
  }
  return { snapsContained: c, scrollContainLimit: d };
}
function tn(e, t, n) {
  const s = t[0],
    a = n ? s - e : B(t);
  return { limit: se(a, s) };
}
function nn(e, t, n, s) {
  const o = t.min + 0.1,
    i = t.max + 0.1,
    { reachedMin: d, reachedMax: c } = se(o, i);
  function l(h) {
    return h === 1 ? c(n.get()) : h === -1 ? d(n.get()) : !1;
  }
  function x(h) {
    if (!l(h)) return;
    const v = e * (h * -1);
    s.forEach((u) => u.add(v));
  }
  return { loop: x };
}
function rn(e) {
  const { max: t, length: n } = e;
  function s(o) {
    const i = o - t;
    return n ? i / -n : 0;
  }
  return { get: s };
}
function sn(e, t, n, s, a) {
  const { startEdge: o, endEdge: i } = e,
    { groupSlides: d } = a,
    c = f().map(t.measure),
    l = h(),
    x = v();
  function f() {
    return d(s)
      .map((p) => B(p)[i] - p[0][o])
      .map(T);
  }
  function h() {
    return s.map((p) => n[o] - p[o]).map((p) => -T(p));
  }
  function v() {
    return d(l)
      .map((p) => p[0])
      .map((p, g) => p + c[g]);
  }
  return { snaps: l, snapsAligned: x };
}
function on(e, t, n, s, a, o) {
  const { groupSlides: i } = a,
    { min: d, max: c } = s,
    l = x();
  function x() {
    const h = i(o),
      v = !e || t === "keepSnaps";
    return n.length === 1
      ? [o]
      : v
        ? h
        : h.slice(d, c).map((u, p, g) => {
            const m = !p,
              y = Re(g, p);
            if (m) {
              const w = B(g[0]) + 1;
              return et(w);
            }
            if (y) {
              const w = ye(o) - B(g)[0] + 1;
              return et(w, B(g)[0]);
            }
            return u;
          });
  }
  return { slideRegistry: l };
}
function an(e, t, n, s, a) {
  const { reachedAny: o, removeOffset: i, constrain: d } = s;
  function c(u) {
    return u.concat().sort((p, g) => T(p) - T(g))[0];
  }
  function l(u) {
    const p = e ? i(u) : d(u),
      g = t.map((y, w) => ({ diff: x(y - p, 0), index: w })).sort((y, w) => T(y.diff) - T(w.diff)),
      { index: m } = g[0];
    return { index: m, distance: p };
  }
  function x(u, p) {
    const g = [u, u + n, u - n];
    if (!e) return u;
    if (!p) return c(g);
    const m = g.filter((y) => Fe(y) === p);
    return m.length ? c(m) : B(g) - n;
  }
  function f(u, p) {
    const g = t[u] - a.get(),
      m = x(g, p);
    return { index: u, distance: m };
  }
  function h(u, p) {
    const g = a.get() + u,
      { index: m, distance: y } = l(g),
      w = !e && o(g);
    if (!p || w) return { index: m, distance: u };
    const I = t[m] - y,
      L = u + x(I, 0);
    return { index: m, distance: L };
  }
  return { byDistance: h, byIndex: f, shortcut: x };
}
function ln(e, t, n, s, a, o, i) {
  function d(f) {
    const h = f.distance,
      v = f.index !== t.get();
    (o.add(h),
      h && (s.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      v && (n.set(t.get()), t.set(f.index), i.emit("select")));
  }
  function c(f, h) {
    const v = a.byDistance(f, h);
    d(v);
  }
  function l(f, h) {
    const v = t.clone().set(f),
      u = a.byIndex(v.get(), h);
    d(u);
  }
  return { distance: c, index: l };
}
function cn(e, t, n, s, a, o, i, d) {
  const c = { passive: !0, capture: !0 };
  let l = 0;
  function x(v) {
    if (!d) return;
    function u(p) {
      if (new Date().getTime() - l > 10) return;
      (i.emit("slideFocusStart"), (e.scrollLeft = 0));
      const y = n.findIndex((w) => w.includes(p));
      ze(y) && (a.useDuration(0), s.index(y, 0), i.emit("slideFocus"));
    }
    (o.add(document, "keydown", f, !1),
      t.forEach((p, g) => {
        o.add(
          p,
          "focus",
          (m) => {
            (je(d) || d(v, m)) && u(g);
          },
          c,
        );
      }));
  }
  function f(v) {
    v.code === "Tab" && (l = new Date().getTime());
  }
  return { init: x };
}
function me(e) {
  let t = e;
  function n() {
    return t;
  }
  function s(c) {
    t = i(c);
  }
  function a(c) {
    t += i(c);
  }
  function o(c) {
    t -= i(c);
  }
  function i(c) {
    return ze(c) ? c : c.get();
  }
  return { get: n, set: s, add: a, subtract: o };
}
function dt(e, t) {
  const n = e.scroll === "x" ? i : d,
    s = t.style;
  let a = null,
    o = !1;
  function i(h) {
    return `translate3d(${h}px,0px,0px)`;
  }
  function d(h) {
    return `translate3d(0px,${h}px,0px)`;
  }
  function c(h) {
    if (o) return;
    const v = _t(e.direction(h));
    v !== a && ((s.transform = n(v)), (a = v));
  }
  function l(h) {
    o = !h;
  }
  function x() {
    o || ((s.transform = ""), t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: x, to: c, toggleActive: l };
}
function dn(e, t, n, s, a, o, i, d, c) {
  const x = pe(a),
    f = pe(a).reverse(),
    h = m().concat(y());
  function v(j, S) {
    return j.reduce((C, M) => C - a[M], S);
  }
  function u(j, S) {
    return j.reduce((C, M) => (v(C, S) > 0 ? C.concat([M]) : C), []);
  }
  function p(j) {
    return o.map((S, C) => ({ start: S - s[C] + 0.5 + j, end: S + t - 0.5 + j }));
  }
  function g(j, S, C) {
    const M = p(S);
    return j.map((k) => {
      const F = C ? 0 : -n,
        H = C ? n : 0,
        q = C ? "end" : "start",
        _ = M[k][q];
      return {
        index: k,
        loopPoint: _,
        slideLocation: me(-1),
        translate: dt(e, c[k]),
        target: () => (d.get() > _ ? F : H),
      };
    });
  }
  function m() {
    const j = i[0],
      S = u(f, j);
    return g(S, n, !1);
  }
  function y() {
    const j = t - i[0] - 1,
      S = u(x, j);
    return g(S, -n, !0);
  }
  function w() {
    return h.every(({ index: j }) => {
      const S = x.filter((C) => C !== j);
      return v(S, t) <= 0.1;
    });
  }
  function I() {
    h.forEach((j) => {
      const { target: S, translate: C, slideLocation: M } = j,
        k = S();
      k !== M.get() && (C.to(k), M.set(k));
    });
  }
  function L() {
    h.forEach((j) => j.translate.clear());
  }
  return { canLoop: w, clear: L, loop: I, loopPoints: h };
}
function un(e, t, n) {
  let s,
    a = !1;
  function o(c) {
    if (!n) return;
    function l(x) {
      for (const f of x)
        if (f.type === "childList") {
          (c.reInit(), t.emit("slidesChanged"));
          break;
        }
    }
    ((s = new MutationObserver((x) => {
      a || ((je(n) || n(c, x)) && l(x));
    })),
      s.observe(e, { childList: !0 }));
  }
  function i() {
    (s && s.disconnect(), (a = !0));
  }
  return { init: o, destroy: i };
}
function fn(e, t, n, s) {
  const a = {};
  let o = null,
    i = null,
    d,
    c = !1;
  function l() {
    ((d = new IntersectionObserver(
      (u) => {
        c ||
          (u.forEach((p) => {
            const g = t.indexOf(p.target);
            a[g] = p;
          }),
          (o = null),
          (i = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: s },
    )),
      t.forEach((u) => d.observe(u)));
  }
  function x() {
    (d && d.disconnect(), (c = !0));
  }
  function f(u) {
    return xe(a).reduce((p, g) => {
      const m = parseInt(g),
        { isIntersecting: y } = a[m];
      return (((u && y) || (!u && !y)) && p.push(m), p);
    }, []);
  }
  function h(u = !0) {
    if (u && o) return o;
    if (!u && i) return i;
    const p = f(u);
    return (u && (o = p), u || (i = p), p);
  }
  return { init: l, destroy: x, get: h };
}
function mn(e, t, n, s, a, o) {
  const { measureSize: i, startEdge: d, endEdge: c } = e,
    l = n[0] && a,
    x = u(),
    f = p(),
    h = n.map(i),
    v = g();
  function u() {
    if (!l) return 0;
    const y = n[0];
    return T(t[d] - y[d]);
  }
  function p() {
    if (!l) return 0;
    const y = o.getComputedStyle(B(s));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n
      .map((y, w, I) => {
        const L = !w,
          E = Re(I, w);
        return L ? h[w] + x : E ? h[w] + f : I[w + 1][d] - y[d];
      })
      .map(T);
  }
  return { slideSizes: h, slideSizesWithGaps: v, startGap: x, endGap: f };
}
function hn(e, t, n, s, a, o, i, d, c) {
  const { startEdge: l, endEdge: x, direction: f } = e,
    h = ze(n);
  function v(m, y) {
    return pe(m)
      .filter((w) => w % y === 0)
      .map((w) => m.slice(w, w + y));
  }
  function u(m) {
    return m.length
      ? pe(m)
          .reduce((y, w, I) => {
            const L = B(y) || 0,
              E = L === 0,
              j = w === ye(m),
              S = a[l] - o[L][l],
              C = a[l] - o[w][x],
              M = !s && E ? f(i) : 0,
              k = !s && j ? f(d) : 0,
              F = T(C - k - (S + M));
            return (I && F > t + c && y.push(w), j && y.push(m.length), y);
          }, [])
          .map((y, w, I) => {
            const L = Math.max(I[w - 1] || 0);
            return m.slice(L, y);
          })
      : [];
  }
  function p(m) {
    return h ? v(m, n) : u(m);
  }
  return { groupSlides: p };
}
function pn(e, t, n, s, a, o, i) {
  const {
      align: d,
      axis: c,
      direction: l,
      startIndex: x,
      loop: f,
      duration: h,
      dragFree: v,
      dragThreshold: u,
      inViewThreshold: p,
      slidesToScroll: g,
      skipSnaps: m,
      containScroll: y,
      watchResize: w,
      watchSlides: I,
      watchDrag: L,
      watchFocus: E,
    } = o,
    j = 2,
    S = Qt(),
    C = S.measure(t),
    M = n.map(S.measure),
    k = Ut(c, l),
    F = k.measureSize(C),
    H = Wt(F),
    q = $t(d, F),
    _ = !f && !!y,
    te = f || !!y,
    { slideSizes: Z, slideSizesWithGaps: U, startGap: Y, endGap: ce } = mn(k, C, M, n, te, a),
    $ = hn(k, F, g, f, C, M, Y, ce, j),
    { snaps: oe, snapsAligned: ae } = sn(k, q, C, M, $),
    K = -B(oe) + B(U),
    { snapsContained: de, scrollContainLimit: ue } = en(F, K, ae, y, j),
    R = _ ? de : ae,
    { limit: D } = tn(K, R, f),
    Q = ct(ye(R), x, f),
    V = Q.clone(),
    P = pe(n),
    b = ({ dragHandler: ie, scrollBody: ke, scrollBounds: Ae, options: { loop: ve } }) => {
      (ve || Ae.constrain(ie.pointerDown()), ke.seek());
    },
    A = (
      {
        scrollBody: ie,
        translate: ke,
        location: Ae,
        offsetLocation: ve,
        previousLocation: yt,
        scrollLooper: vt,
        slideLooper: bt,
        dragHandler: wt,
        animation: Nt,
        eventHandler: $e,
        scrollBounds: jt,
        options: { loop: Ge },
      },
      Ue,
    ) => {
      const Ye = ie.settled(),
        St = !jt.shouldConstrain(),
        Ke = Ge ? Ye : Ye && St,
        Qe = Ke && !wt.pointerDown();
      Qe && Nt.stop();
      const It = Ae.get() * Ue + yt.get() * (1 - Ue);
      (ve.set(It),
        Ge && (vt.loop(ie.direction()), bt.loop()),
        ke.to(ve.get()),
        Qe && $e.emit("settle"),
        Ke || $e.emit("scroll"));
    },
    O = Gt(
      s,
      a,
      () => b(Ce),
      (ie) => A(Ce, ie),
    ),
    z = 0.68,
    G = R[Q.get()],
    W = me(G),
    ne = me(G),
    J = me(G),
    re = me(G),
    fe = Jt(W, J, ne, re, h, z),
    Ie = an(f, R, K, D, re),
    Ee = ln(O, Q, V, fe, Ie, re, i),
    He = rn(D),
    qe = ge(),
    xt = fn(t, n, i, p),
    { slideRegistry: _e } = on(_, y, R, ue, $, P),
    gt = cn(e, n, _e, Ee, fe, qe, i, E),
    Ce = {
      ownerDocument: s,
      ownerWindow: a,
      eventHandler: i,
      containerRect: C,
      slideRects: M,
      animation: O,
      axis: k,
      dragHandler: Yt(k, e, s, a, re, Kt(k, a), W, O, Ee, fe, Ie, Q, i, H, v, u, m, z, L),
      eventStore: qe,
      percentOfView: H,
      index: Q,
      indexPrevious: V,
      limit: D,
      location: W,
      offsetLocation: J,
      previousLocation: ne,
      options: o,
      resizeHandler: Zt(t, i, a, n, k, w, S),
      scrollBody: fe,
      scrollBounds: Xt(D, J, re, fe, H),
      scrollLooper: nn(K, D, J, [W, J, ne, re]),
      scrollProgress: He,
      scrollSnapList: R.map(He.get),
      scrollSnaps: R,
      scrollTarget: Ie,
      scrollTo: Ee,
      slideLooper: dn(k, F, K, Z, U, oe, R, J, n),
      slideFocus: gt,
      slidesHandler: un(t, i, I),
      slidesInView: xt,
      slideIndexes: P,
      slideRegistry: _e,
      slidesToScroll: $,
      target: re,
      translate: dt(k, t),
    };
  return Ce;
}
function xn() {
  let e = {},
    t;
  function n(l) {
    t = l;
  }
  function s(l) {
    return e[l] || [];
  }
  function a(l) {
    return (s(l).forEach((x) => x(t, l)), c);
  }
  function o(l, x) {
    return ((e[l] = s(l).concat([x])), c);
  }
  function i(l, x) {
    return ((e[l] = s(l).filter((f) => f !== x)), c);
  }
  function d() {
    e = {};
  }
  const c = { init: n, emit: a, off: i, on: o, clear: d };
  return c;
}
const gn = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function yn(e) {
  function t(o, i) {
    return lt(o, i || {});
  }
  function n(o) {
    const i = o.breakpoints || {},
      d = xe(i)
        .filter((c) => e.matchMedia(c).matches)
        .map((c) => i[c])
        .reduce((c, l) => t(c, l), {});
    return t(o, d);
  }
  function s(o) {
    return o
      .map((i) => xe(i.breakpoints || {}))
      .reduce((i, d) => i.concat(d), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: s };
}
function vn(e) {
  let t = [];
  function n(o, i) {
    return (
      (t = i.filter(({ options: d }) => e.optionsAtMedia(d).active !== !1)),
      t.forEach((d) => d.init(o, e)),
      i.reduce((d, c) => Object.assign(d, { [c.name]: c }), {})
    );
  }
  function s() {
    t = t.filter((o) => o.destroy());
  }
  return { init: n, destroy: s };
}
function be(e, t, n) {
  const s = e.ownerDocument,
    a = s.defaultView,
    o = yn(a),
    i = vn(o),
    d = ge(),
    c = xn(),
    { mergeOptions: l, optionsAtMedia: x, optionsMediaQueries: f } = o,
    { on: h, off: v, emit: u } = c,
    p = k;
  let g = !1,
    m,
    y = l(gn, be.globalOptions),
    w = l(y),
    I = [],
    L,
    E,
    j;
  function S() {
    const { container: P, slides: b } = w;
    E = (Pe(P) ? e.querySelector(P) : P) || e.children[0];
    const O = Pe(b) ? E.querySelectorAll(b) : b;
    j = [].slice.call(O || E.children);
  }
  function C(P) {
    const b = pn(e, E, j, s, a, P, c);
    if (P.loop && !b.slideLooper.canLoop()) {
      const A = Object.assign({}, P, { loop: !1 });
      return C(A);
    }
    return b;
  }
  function M(P, b) {
    g ||
      ((y = l(y, P)),
      (w = x(y)),
      (I = b || I),
      S(),
      (m = C(w)),
      f([y, ...I.map(({ options: A }) => A)]).forEach((A) => d.add(A, "change", k)),
      w.active &&
        (m.translate.to(m.location.get()),
        m.animation.init(),
        m.slidesInView.init(),
        m.slideFocus.init(V),
        m.eventHandler.init(V),
        m.resizeHandler.init(V),
        m.slidesHandler.init(V),
        m.options.loop && m.slideLooper.loop(),
        E.offsetParent && j.length && m.dragHandler.init(V),
        (L = i.init(V, I))));
  }
  function k(P, b) {
    const A = $();
    (F(), M(l({ startIndex: A }, P), b), c.emit("reInit"));
  }
  function F() {
    (m.dragHandler.destroy(),
      m.eventStore.clear(),
      m.translate.clear(),
      m.slideLooper.clear(),
      m.resizeHandler.destroy(),
      m.slidesHandler.destroy(),
      m.slidesInView.destroy(),
      m.animation.destroy(),
      i.destroy(),
      d.clear());
  }
  function H() {
    g || ((g = !0), d.clear(), F(), c.emit("destroy"), c.clear());
  }
  function q(P, b, A) {
    !w.active ||
      g ||
      (m.scrollBody.useBaseFriction().useDuration(b === !0 ? 0 : w.duration),
      m.scrollTo.index(P, A || 0));
  }
  function _(P) {
    const b = m.index.add(1).get();
    q(b, P, -1);
  }
  function te(P) {
    const b = m.index.add(-1).get();
    q(b, P, 1);
  }
  function Z() {
    return m.index.add(1).get() !== $();
  }
  function U() {
    return m.index.add(-1).get() !== $();
  }
  function Y() {
    return m.scrollSnapList;
  }
  function ce() {
    return m.scrollProgress.get(m.offsetLocation.get());
  }
  function $() {
    return m.index.get();
  }
  function oe() {
    return m.indexPrevious.get();
  }
  function ae() {
    return m.slidesInView.get();
  }
  function K() {
    return m.slidesInView.get(!1);
  }
  function de() {
    return L;
  }
  function ue() {
    return m;
  }
  function R() {
    return e;
  }
  function D() {
    return E;
  }
  function Q() {
    return j;
  }
  const V = {
    canScrollNext: Z,
    canScrollPrev: U,
    containerNode: D,
    internalEngine: ue,
    destroy: H,
    off: v,
    on: h,
    emit: u,
    plugins: de,
    previousScrollSnap: oe,
    reInit: p,
    rootNode: R,
    scrollNext: _,
    scrollPrev: te,
    scrollProgress: ce,
    scrollSnapList: Y,
    scrollTo: q,
    selectedScrollSnap: $,
    slideNodes: Q,
    slidesInView: ae,
    slidesNotInView: K,
  };
  return (M(t, n), setTimeout(() => c.emit("init"), 0), V);
}
be.globalOptions = void 0;
function Ve(e = {}, t = []) {
  const n = N.useRef(e),
    s = N.useRef(t),
    [a, o] = N.useState(),
    [i, d] = N.useState(),
    c = N.useCallback(() => {
      a && a.reInit(n.current, s.current);
    }, [a]);
  return (
    N.useEffect(() => {
      De(n.current, e) || ((n.current = e), c());
    }, [e, c]),
    N.useEffect(() => {
      Ht(s.current, t) || ((s.current = t), c());
    }, [t, c]),
    N.useEffect(() => {
      if (Bt() && i) {
        be.globalOptions = Ve.globalOptions;
        const l = be(i, n.current, s.current);
        return (o(l), () => l.destroy());
      } else o(void 0);
    }, [i, o]),
    [d, a]
  );
}
Ve.globalOptions = void 0;
var bn = Symbol.for("react.lazy"),
  we = Et[" use ".trim().toString()];
function wn(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function ut(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === bn &&
    "_payload" in e &&
    wn(e._payload)
  );
}
function Nn(e) {
  const t = Sn(e),
    n = N.forwardRef((s, a) => {
      let { children: o, ...i } = s;
      ut(o) && typeof we == "function" && (o = we(o._payload));
      const d = N.Children.toArray(o),
        c = d.find(En);
      if (c) {
        const l = c.props.children,
          x = d.map((f) =>
            f === c
              ? N.Children.count(l) > 1
                ? N.Children.only(null)
                : N.isValidElement(l)
                  ? l.props.children
                  : null
              : f,
          );
        return r.jsx(t, {
          ...i,
          ref: a,
          children: N.isValidElement(l) ? N.cloneElement(l, void 0, x) : null,
        });
      }
      return r.jsx(t, { ...i, ref: a, children: o });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var jn = Nn("Slot");
function Sn(e) {
  const t = N.forwardRef((n, s) => {
    let { children: a, ...o } = n;
    if ((ut(a) && typeof we == "function" && (a = we(a._payload)), N.isValidElement(a))) {
      const i = kn(a),
        d = Cn(o, a.props);
      return (a.type !== N.Fragment && (d.ref = s ? kt(s, i) : i), N.cloneElement(a, d));
    }
    return N.Children.count(a) > 1 ? N.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var In = Symbol("radix.slottable");
function En(e) {
  return (
    N.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === In
  );
}
function Cn(e, t) {
  const n = { ...t };
  for (const s in t) {
    const a = e[s],
      o = t[s];
    /^on[A-Z]/.test(s)
      ? a && o
        ? (n[s] = (...d) => {
            const c = o(...d);
            return (a(...d), c);
          })
        : a && (n[s] = a)
      : s === "style"
        ? (n[s] = { ...a, ...o })
        : s === "className" && (n[s] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function kn(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
const tt = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  nt = At,
  An = (e, t) => (n) => {
    var s;
    if (t?.variants == null) return nt(e, n?.class, n?.className);
    const { variants: a, defaultVariants: o } = t,
      i = Object.keys(a).map((l) => {
        const x = n?.[l],
          f = o?.[l];
        if (x === null) return null;
        const h = tt(x) || tt(f);
        return a[l][h];
      }),
      d =
        n &&
        Object.entries(n).reduce((l, x) => {
          let [f, h] = x;
          return (h === void 0 || (l[f] = h), l);
        }, {}),
      c =
        t == null || (s = t.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((l, x) => {
              let { class: f, className: h, ...v } = x;
              return Object.entries(v).every((u) => {
                let [p, g] = u;
                return Array.isArray(g) ? g.includes({ ...o, ...d }[p]) : { ...o, ...d }[p] === g;
              })
                ? [...l, f, h]
                : l;
            }, []);
    return nt(e, i, c, n?.class, n?.className);
  },
  Ln = An(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Be = N.forwardRef(({ className: e, variant: t, size: n, asChild: s = !1, ...a }, o) => {
    const i = s ? jn : "button";
    return r.jsx(i, { className: le(Ln({ variant: t, size: n, className: e })), ref: o, ...a });
  });
Be.displayName = "Button";
const ft = N.createContext(null);
function Se() {
  const e = N.useContext(ft);
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const mt = N.forwardRef(
  (
    {
      orientation: e = "horizontal",
      opts: t,
      setApi: n,
      plugins: s,
      className: a,
      children: o,
      ...i
    },
    d,
  ) => {
    const [c, l] = Ve({ ...t, axis: e === "horizontal" ? "x" : "y" }, s),
      [x, f] = N.useState(!1),
      [h, v] = N.useState(!1),
      u = N.useCallback((y) => {
        y && (f(y.canScrollPrev()), v(y.canScrollNext()));
      }, []),
      p = N.useCallback(() => {
        l?.scrollPrev();
      }, [l]),
      g = N.useCallback(() => {
        l?.scrollNext();
      }, [l]),
      m = N.useCallback(
        (y) => {
          y.key === "ArrowLeft"
            ? (y.preventDefault(), p())
            : y.key === "ArrowRight" && (y.preventDefault(), g());
        },
        [p, g],
      );
    return (
      N.useEffect(() => {
        !l || !n || n(l);
      }, [l, n]),
      N.useEffect(() => {
        if (l)
          return (
            u(l),
            l.on("reInit", u),
            l.on("select", u),
            () => {
              l?.off("select", u);
            }
          );
      }, [l, u]),
      r.jsx(ft.Provider, {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: p,
          scrollNext: g,
          canScrollPrev: x,
          canScrollNext: h,
        },
        children: r.jsx("div", {
          ref: d,
          onKeyDownCapture: m,
          className: le("relative", a),
          role: "region",
          "aria-roledescription": "carousel",
          ...i,
          children: o,
        }),
      })
    );
  },
);
mt.displayName = "Carousel";
const ht = N.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: s, orientation: a } = Se();
  return r.jsx("div", {
    ref: s,
    className: "overflow-hidden",
    children: r.jsx("div", {
      ref: n,
      className: le("flex", a === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t,
    }),
  });
});
ht.displayName = "CarouselContent";
const pt = N.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: s } = Se();
  return r.jsx("div", {
    ref: n,
    role: "group",
    "aria-roledescription": "slide",
    className: le("min-w-0 shrink-0 grow-0 basis-full", s === "horizontal" ? "pl-4" : "pt-4", e),
    ...t,
  });
});
pt.displayName = "CarouselItem";
const Me = N.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...s }, a) => {
  const { orientation: o, scrollPrev: i, canScrollPrev: d } = Se();
  return r.jsxs(Be, {
    ref: a,
    variant: t,
    size: n,
    className: le(
      "absolute  h-8 w-8 rounded-full",
      o === "horizontal"
        ? "-left-12 top-1/2 -translate-y-1/2"
        : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
      e,
    ),
    disabled: !d,
    onClick: i,
    ...s,
    children: [
      r.jsx(Mt, { className: "h-4 w-4" }),
      r.jsx("span", { className: "sr-only", children: "Previous slide" }),
    ],
  });
});
Me.displayName = "CarouselPrevious";
const Oe = N.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...s }, a) => {
  const { orientation: o, scrollNext: i, canScrollNext: d } = Se();
  return r.jsxs(Be, {
    ref: a,
    variant: t,
    size: n,
    className: le(
      "absolute h-8 w-8 rounded-full",
      o === "horizontal"
        ? "-right-12 top-1/2 -translate-y-1/2"
        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
      e,
    ),
    disabled: !d,
    onClick: i,
    ...s,
    children: [
      r.jsx(ee, { className: "h-4 w-4" }),
      r.jsx("span", { className: "sr-only", children: "Next slide" }),
    ],
  });
});
Oe.displayName = "CarouselNext";
const Pn = [
    "You feel there is more to life than what you are currently living",
    "You are overwhelmed by your roles and have lost sight of who you are",
    "You want to raise your children with intention",
    "You are curious about homeschooling but feel unsure",
    "You want to reconnect with your faith in a real, living way",
    "You want guidance rooted in Islamic values — not generic self-help",
  ],
  Tn = [
    {
      icon: st,
      title: "The RISE Program",
      body: "A six-month growth journey with weekly live sessions, practical reflection, and faith-rooted momentum for women ready to lead their lives with clarity.",
      to: "/the-rise-program",
      accent: "from-rose-500/10 to-orange-400/10",
    },
    {
      icon: at,
      title: "Seerah Courses",
      body: "Choose the introductory or detailed Seerah path and learn through dedicated pages designed for depth, clarity, and reflection.",
      to: "/courses",
      accent: "from-blue-500/10 to-indigo-400/10",
    },
    {
      icon: ot,
      title: "Home Learning Plan",
      body: "A personalised roadmap for mothers who want a clearer, more intentional approach to homeschooling and learning at home.",
      to: "/services",
      accent: "from-emerald-500/10 to-teal-400/10",
    },
  ],
  Mn = [
    { value: "200+", label: "Women Coached" },
    { value: "6+", label: "Years Experience" },
    { value: "15+", label: "Countries Reached" },
    { value: "4.9", label: "Average Rating", suffix: "★" },
  ],
  Le = [
    {
      tag: "Flagship",
      title: "The RISE Program",
      body: "A 6-month personal development journey built around Islamic values.",
      to: "/the-rise-program",
      icon: st,
    },
    {
      tag: "Seerah",
      title: "Introductory Course",
      body: "A structured path through the life of the Prophet Muhammad ﷺ.",
      to: "/seerah-introductory",
      icon: at,
    },
    {
      tag: "Seerah",
      title: "Detailed Study",
      body: "A deeper 2-3 year study of Seerah with Quranic revelation.",
      to: "/seerah-detailed",
      icon: ot,
    },
    {
      tag: "Mentorship",
      title: "Home Learning Plan",
      body: "A practical roadmap for intentional homeschooling at home.",
      to: "/services",
      icon: rt,
    },
  ],
  On = [
    {
      name: "Anonymous participant",
      location: "Seerah course",
      quote:
        "It's a life changing course Alhamdulillah. Learning Seerah to me has become an essential part of life. I'm loving the feeling of knowing Prophet SAW.",
    },
    {
      name: "Asma Naeem",
      location: "Faisalabad",
      quote:
        "It deepened my understanding and interest in the Quran. Practical lessons from the life of Prophet PBUH.",
    },
    {
      name: "Anonymous participant",
      location: "Seerah course",
      quote:
        "The lessons about how Prophet reacted in certain conditions give us strength to do the same in our lives. I am trying to instill the love of Seerah in my kids.",
    },
    {
      name: "Asma Zahid",
      location: "Karachi",
      quote:
        "The open discussions and thought provoking questions encourage deeper reflection and engagement.",
    },
    {
      name: "Anonymous participant",
      location: "Seerah course",
      quote:
        "We pause, reflect, and relate at every step. These discussions make it possible to incorporate the teachings of Rasool Allah in our lives.",
    },
    {
      name: "Beena Sarfaraz",
      location: "Dammam",
      quote:
        "Gaining a deeper emotional and spiritual connection with the Prophet Muhammad ﷺ has transformed the way I view my own challenges and responsibilities.",
    },
    {
      name: "Anonymous participant",
      location: "Seerah course",
      quote:
        "The biggest change is that when life happens, I pause and think what my Beloved SAW would have done at this moment.",
    },
    {
      name: "Faryal Imran",
      location: "Karachi",
      quote:
        "It has strengthened my connection with Allah and improved my understanding of the Quran.",
    },
    {
      name: "Anonymous participant",
      location: "Seerah course",
      quote:
        "Everyone in the group was very supportive and encouraging, so I felt totally at ease whenever I had something to say.",
    },
    {
      name: "Fatima Irfan",
      location: "Sialkot",
      quote:
        "My love and connection with Rasoolallah has increased. I feel closer to him, and I have become more reflective relating to Seerah.",
    },
    {
      name: "Momima Abbasi",
      location: "Islamabad",
      quote:
        "The discussion helps us reflect on different aspects of the Seerah and connect the lessons to our own lives.",
    },
    {
      name: "Anonymous participant",
      location: "Seerah course",
      quote:
        "I have started loving my Prophet and Sahaba in a way that I never did before. Every day I started reading and listening to Sahaba's life.",
    },
  ];
function Dn() {
  const [e, t] = N.useState(0);
  return (
    N.useEffect(() => {
      const n = window.setInterval(() => {
        t((s) => (s + 1) % Le.length);
      }, 3200);
      return () => window.clearInterval(n);
    }, []),
    r.jsxs("div", {
      className:
        "mt-8 max-w-xl overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-3 shadow-soft backdrop-blur reveal",
      children: [
        r.jsxs("div", {
          className: "flex items-center justify-between gap-3 px-2 pb-3",
          children: [
            r.jsx("div", {
              className: "text-xs uppercase tracking-[0.3em] text-gold",
              children: "Courses",
            }),
            r.jsx("div", {
              className: "flex gap-1.5",
              children: Le.map((n, s) =>
                r.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Show ${n.title}`,
                    onClick: () => t(s),
                    className: `h-1.5 rounded-full transition-all ${e === s ? "w-6 bg-primary" : "w-2 bg-border"}`,
                  },
                  n.title,
                ),
              ),
            }),
          ],
        }),
        r.jsx(Pt.div, {
          className: "flex gap-2 items-center mr-4",
          animate: { x: `-${e * 100}%` },
          transition: { type: "spring", stiffness: 130, damping: 22 },
          children: Le.map(({ icon: n, title: s, tag: a, body: o, to: i }) =>
            r.jsx(
              X,
              {
                to: i,
                className: "min-w-full",
                children: r.jsxs("div", {
                  className:
                    "flex min-h-[150px] gap-4 rounded-2xl bg-background/80 p-5 transition hover:bg-muted/70",
                  children: [
                    r.jsx("div", {
                      className:
                        "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground",
                      children: r.jsx(n, { className: "h-5 w-5" }),
                    }),
                    r.jsxs("div", {
                      className: "min-w-0",
                      children: [
                        r.jsx("div", {
                          className: "text-[11px] uppercase tracking-widest text-gold",
                          children: a,
                        }),
                        r.jsx("h3", {
                          className: "mt-1 font-display text-2xl leading-tight",
                          children: s,
                        }),
                        r.jsx("p", {
                          className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                          children: o,
                        }),
                        r.jsxs("div", {
                          className:
                            "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary",
                          children: ["Explore ", r.jsx(ee, { className: "h-3.5 w-3.5" })],
                        }),
                      ],
                    }),
                  ],
                }),
              },
              s,
            ),
          ),
        }),
      ],
    })
  );
}
function zn() {
  return r.jsxs("div", {
    className: "mx-auto w-full max-w-6xl px-4 md:px-12",
    children: [
      r.jsxs("div", {
        className: "text-center mb-16 reveal",
        children: [
          r.jsx("div", {
            className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament",
            children: "Feedback",
          }),
          r.jsx("h2", {
            className: "font-display text-4xl md:text-5xl text-balance",
            children: "What students felt shift.",
          }),
          r.jsx("p", {
            className: "mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto",
            children:
              "Seerah participants shared these reflections after studying, discussing, and applying the lessons.",
          }),
        ],
      }),
      r.jsxs(mt, {
        opts: { align: "start", loop: !0 },
        className: "w-full reveal",
        children: [
          r.jsx(ht, {
            className: "-ml-4 md:-ml-6",
            children: On.map((e, t) =>
              r.jsx(
                pt,
                {
                  className: "pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3",
                  children: r.jsxs("div", {
                    className:
                      "h-full rounded-3xl border border-border bg-card p-8 shadow-soft flex flex-col group transition-all hover:-translate-y-2 hover:shadow-elegant",
                    children: [
                      r.jsx(it, {
                        className:
                          "h-10 w-10 text-gold/30 mb-6 group-hover:text-gold/70 transition-colors",
                      }),
                      r.jsxs("p", {
                        className: "text-lg leading-relaxed text-foreground/85 flex-grow italic",
                        children: ['"', e.quote, '"'],
                      }),
                      r.jsxs("div", {
                        className: "mt-8 flex items-center gap-4",
                        children: [
                          r.jsx("div", {
                            className:
                              "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-gradient text-sm font-bold text-primary-foreground shadow-sm",
                            children: e.name.charAt(0),
                          }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("div", {
                                className: "text-sm font-semibold",
                                children: e.name,
                              }),
                              r.jsx("div", {
                                className: "text-xs text-muted-foreground mt-0.5",
                                children: e.location,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                `${e.name}-${t}`,
              ),
            ),
          }),
          r.jsxs("div", {
            className: "hidden md:block",
            children: [
              r.jsx(Me, { className: "left-[-3rem]" }),
              r.jsx(Oe, { className: "right-[-3rem]" }),
            ],
          }),
          r.jsxs("div", {
            className: "flex items-center justify-center gap-4 mt-8 md:hidden",
            children: [
              r.jsx(Me, { className: "static translate-y-0 h-10 w-10" }),
              r.jsx(Oe, { className: "static translate-y-0 h-10 w-10" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _n() {
  return (
    Ft(),
    r.jsxs(Ct, {
      children: [
        r.jsx("section", {
          className: "relative bg-hero overflow-hidden particle-field",
          children: r.jsxs("div", {
            className:
              "mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-36 grid md:grid-cols-2 gap-14 items-center relative z-10",
            children: [
              r.jsxs("div", {
                className: "animate-in-up",
                children: [
                  r.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-6",
                    children: [
                      r.jsx(Lt, { className: "w-3.5 h-3.5 animate-pulse" }),
                      " Faith · Coaching · Seerah",
                    ],
                  }),
                  r.jsxs("h1", {
                    className: "font-display text-5xl md:text-7xl leading-[1.02] text-balance",
                    children: [
                      "Helping Muslim women grow",
                      " ",
                      r.jsx("span", {
                        className: "italic text-gradient drop-shadow-sm",
                        children: "from the inside out.",
                      }),
                    ],
                  }),
                  r.jsx("p", {
                    className:
                      "mt-7 text-lg text-muted-foreground max-w-xl text-balance leading-relaxed",
                    children:
                      "I am Hira Saqib — a certified life coach, Seerah educator, and homeschooling mentor. I help women find their substance through personal coaching, structured programmes, and faith-centred learning. In English and Urdu, worldwide.",
                  }),
                  r.jsxs("div", {
                    className: "mt-9 flex flex-wrap gap-3",
                    children: [
                      r.jsxs(X, {
                        to: "/bookings",
                        className:
                          "relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-1 transition-all duration-300 btn-shine",
                        children: ["Book a discovery call ", r.jsx(ee, { className: "w-4 h-4" })],
                      }),
                      r.jsx(X, {
                        to: "/about",
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted hover:border-primary/30 transition-all duration-300",
                        children: "Meet Hira",
                      }),
                    ],
                  }),
                  r.jsx(Dn, {}),
                ],
              }),
              r.jsxs("div", {
                className: "relative animate-in-up",
                style: { animationDelay: "0.2s" },
                children: [
                  r.jsx("div", {
                    className:
                      "absolute -inset-8 bg-emerald-gradient rounded-[2.5rem] rotate-[-3deg] opacity-25 blur-3xl animate-pulse",
                  }),
                  r.jsxs("div", {
                    className:
                      "relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/60 hover-lift",
                    children: [
                      r.jsx("img", {
                        src: Rt,
                        alt: "Hira Saqib — life coach for Muslim women",
                        width: 1080,
                        height: 1620,
                        className: "w-full h-[560px] md:h-[640px] object-cover object-top",
                      }),
                      r.jsx("div", {
                        className:
                          "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className:
                      "absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 hidden md:block max-w-[260px] animate-float shimmer-border",
                    children: [
                      r.jsx("div", {
                        className: "flex gap-0.5 text-gold mb-2",
                        children: Array.from({ length: 5 }).map((e, t) =>
                          r.jsx(We, { className: "w-3.5 h-3.5 fill-current" }, t),
                        ),
                      }),
                      r.jsx("p", {
                        className: "text-sm leading-relaxed italic",
                        children: `"She helped me come home to myself — gently, and with the Qur'an as our compass."`,
                      }),
                      r.jsx("p", {
                        className: "text-xs text-muted-foreground mt-2",
                        children: "— A. M., Coaching Client",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        r.jsx("section", {
          className: "py-10 bg-card border-y border-border/40 relative overflow-hidden",
          children: r.jsx("div", {
            className: "mx-auto max-w-5xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8",
            children: Mn.map((e) =>
              r.jsxs(
                "div",
                {
                  className: "text-center reveal",
                  style: { transitionDelay: "0.1s" },
                  children: [
                    r.jsxs("div", {
                      className: "font-display text-4xl md:text-5xl text-primary counter-glow",
                      children: [
                        e.value,
                        e.suffix && r.jsx("span", { className: "text-gold", children: e.suffix }),
                      ],
                    }),
                    r.jsx("div", {
                      className: "text-sm text-muted-foreground mt-1 uppercase tracking-wider",
                      children: e.label,
                    }),
                  ],
                },
                e.label,
              ),
            ),
          }),
        }),
        r.jsxs("section", {
          className: "py-20 md:py-28 relative",
          children: [
            r.jsx("div", {
              className: "absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[150px]",
            }),
            r.jsxs("div", {
              className: "mx-auto max-w-7xl px-6 relative z-10",
              children: [
                r.jsxs("div", {
                  className:
                    "flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-12 reveal",
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsx("div", {
                          className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament",
                          children: "Latest offerings",
                        }),
                        r.jsx("h2", {
                          className: "font-display text-4xl md:text-5xl text-balance",
                          children: "The newest ways to work together.",
                        }),
                      ],
                    }),
                    r.jsx("p", {
                      className: "text-muted-foreground max-w-xl text-balance",
                      children:
                        "If you are deciding where to begin, these are the strongest entry points right now.",
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "grid md:grid-cols-3 gap-6 stagger-children",
                  children: Tn.map(({ icon: e, title: t, body: n, to: s, accent: a }) =>
                    r.jsxs(
                      X,
                      {
                        to: s,
                        className:
                          "group glass-card rounded-3xl p-8 transition-all hover:-translate-y-3 hover:scale-[1.02] duration-500 relative overflow-hidden",
                        children: [
                          r.jsx("div", {
                            className: `absolute inset-0 bg-gradient-to-br ${a} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`,
                          }),
                          r.jsxs("div", {
                            className: "relative z-10",
                            children: [
                              r.jsx("div", {
                                className:
                                  "w-14 h-14 rounded-2xl bg-emerald-gradient grid place-items-center text-primary-foreground mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-soft",
                                children: r.jsx(e, { className: "w-6 h-6" }),
                              }),
                              r.jsx("h3", { className: "font-display text-2xl mb-3", children: t }),
                              r.jsx("p", {
                                className: "text-muted-foreground leading-relaxed",
                                children: n,
                              }),
                              r.jsxs("div", {
                                className:
                                  "mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium",
                                children: [
                                  "Explore ",
                                  r.jsx(ee, {
                                    className:
                                      "w-4 h-4 group-hover:translate-x-2 transition-transform duration-300",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        r.jsxs("section", {
          className: "py-24 md:py-32 relative overflow-hidden",
          children: [
            r.jsx("div", { className: "absolute inset-0 pattern-dots opacity-40" }),
            r.jsxs("div", {
              className: "mx-auto max-w-5xl px-6 relative z-10",
              children: [
                r.jsxs("div", {
                  className: "text-center mb-14 reveal",
                  children: [
                    r.jsx("div", {
                      className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament",
                      children: "For you",
                    }),
                    r.jsx("h2", {
                      className: "font-display text-4xl md:text-6xl text-balance",
                      children: "This is for you if…",
                    }),
                  ],
                }),
                r.jsx("ul", {
                  className: "grid md:grid-cols-2 gap-x-12 gap-y-5",
                  children: Pn.map((e, t) =>
                    r.jsxs(
                      "li",
                      {
                        className: "flex gap-4 group reveal",
                        style: { transitionDelay: `${t * 0.08}s` },
                        children: [
                          r.jsx("span", {
                            className:
                              "text-gold mt-1 text-lg group-hover:scale-125 transition-transform duration-300",
                            children: "✦",
                          }),
                          r.jsx("span", {
                            className:
                              "text-lg leading-relaxed text-foreground/85 group-hover:text-foreground transition",
                            children: e,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                r.jsx("p", {
                  className:
                    "mt-14 text-center italic text-xl text-primary text-balance max-w-2xl mx-auto font-display reveal",
                  children:
                    "If you read even one of those and felt seen — you are in exactly the right place.",
                }),
              ],
            }),
          ],
        }),
        r.jsx("section", {
          className: "py-24 md:py-32 bg-secondary/30",
          children: r.jsxs("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
              r.jsxs("div", {
                className: "text-center mb-14 reveal",
                children: [
                  r.jsx("div", {
                    className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament",
                    children: "Programmes",
                  }),
                  r.jsx("h2", {
                    className: "font-display text-4xl md:text-5xl text-balance",
                    children: "Structured journeys, deep roots.",
                  }),
                ],
              }),
              r.jsx("div", {
                className: "grid md:grid-cols-3 gap-8 stagger-children",
                children: [
                  {
                    tag: "Flagship",
                    title: "The RISE Program",
                    body: "A 6-month personal development journey — mindset, relationships, habits, purpose — built around Islamic values.",
                    to: "/the-rise-program",
                  },
                  {
                    tag: "Live cohort",
                    title: "Seerah Awareness",
                    body: "Reconnect with the life of the Prophet ﷺ through intimate, discussion-based sessions that move from page to life.",
                    to: "/courses",
                  },
                  {
                    tag: "Coming soon",
                    title: "Homeschooling — What, Why & How",
                    body: "Practical, faith-aligned mentorship for mothers choosing intentional education at home.",
                    to: "/courses",
                  },
                ].map((e) =>
                  r.jsxs(
                    "article",
                    {
                      className:
                        "glass-card rounded-3xl p-8 flex flex-col group transition-all hover:-translate-y-3 duration-500 relative overflow-hidden",
                      children: [
                        r.jsx("div", {
                          className:
                            "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full",
                        }),
                        r.jsx("span", {
                          className:
                            "text-xs uppercase tracking-widest text-gold mb-4 relative z-10",
                          children: e.tag,
                        }),
                        r.jsx("h3", {
                          className: "font-display text-2xl mb-3 relative z-10",
                          children: e.title,
                        }),
                        r.jsx("p", {
                          className: "text-muted-foreground leading-relaxed flex-1 relative z-10",
                          children: e.body,
                        }),
                        r.jsxs(X, {
                          to: e.to,
                          className:
                            "mt-6 text-sm text-primary inline-flex items-center gap-2 relative z-10",
                          children: [
                            "Explore ",
                            r.jsx(ee, {
                              className:
                                "w-4 h-4 group-hover:translate-x-2 transition-transform duration-300",
                            }),
                          ],
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          }),
        }),
        r.jsxs("section", {
          className: "py-24 md:py-32 border-y border-border/60 relative overflow-hidden",
          children: [
            r.jsx("div", {
              className:
                "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[200px]",
            }),
            r.jsxs("div", {
              className: "mx-auto max-w-7xl px-6 relative z-10",
              children: [
                r.jsx(zn, {}),
                r.jsxs("div", {
                  className: "hidden",
                  children: [
                    r.jsxs("div", {
                      className: "text-center mb-16 reveal",
                      children: [
                        r.jsx("div", {
                          className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament",
                          children: "Testimonials",
                        }),
                        r.jsx("h2", {
                          className: "font-display text-4xl md:text-6xl",
                          children: "Words from the community",
                        }),
                      ],
                    }),
                    r.jsx("div", {
                      className: "grid md:grid-cols-2 gap-8 mb-12",
                      children: [
                        {
                          quote:
                            "She helped me come home to myself — gently, and with the Qur'an as our compass. Hira's coaching provided the exact balance of accountability and empathy I needed.",
                          name: "A. M.",
                          role: "Coaching Client",
                        },
                        {
                          quote:
                            "The Seerah sessions are profound. Hira has a gift for connecting the life of the Prophet ﷺ to the realities we face today. It changed how I view my own challenges.",
                          name: "S. K.",
                          role: "Seerah Student",
                        },
                      ].map((e) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "glass-card rounded-3xl p-8 reveal relative overflow-hidden group",
                            children: [
                              r.jsx("div", {
                                className:
                                  "absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity",
                                children: r.jsx(it, { className: "w-16 h-16 text-gold" }),
                              }),
                              r.jsx("div", {
                                className: "flex gap-1 text-gold mb-4",
                                children: Array.from({ length: 5 }).map((t, n) =>
                                  r.jsx(We, { className: "w-4 h-4 fill-current" }, n),
                                ),
                              }),
                              r.jsxs("p", {
                                className:
                                  "text-lg leading-relaxed text-foreground/85 italic mb-6 relative z-10",
                                children: ['"', e.quote, '"'],
                              }),
                              r.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  r.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full bg-emerald-gradient grid place-items-center text-primary-foreground text-sm font-bold",
                                    children: e.name.charAt(0),
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("div", {
                                        className: "text-sm font-medium",
                                        children: e.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: e.role,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.name,
                        ),
                      ),
                    }),
                    r.jsxs("div", {
                      className: "text-center reveal",
                      children: [
                        r.jsxs(X, {
                          to: "/submit-testimonial",
                          className:
                            "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted hover:border-primary/30 transition-all text-sm font-medium",
                          children: ["Share your experience ", r.jsx(ee, { className: "w-4 h-4" })],
                        }),
                        r.jsx("p", {
                          className: "mt-4 text-xs text-muted-foreground",
                          children:
                            "All testimonials are reviewed before they appear on the website.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        r.jsxs("section", {
          className: "py-24 bg-emerald-gradient text-primary-foreground relative overflow-hidden",
          children: [
            r.jsxs("div", {
              className: "absolute inset-0 opacity-10",
              children: [
                r.jsx("div", {
                  className:
                    "absolute top-10 left-10 w-64 h-64 border border-primary-foreground/20 rounded-full",
                }),
                r.jsx("div", {
                  className:
                    "absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/20 rounded-full",
                }),
                r.jsx("div", {
                  className:
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/10 rounded-full",
                }),
              ],
            }),
            r.jsxs("div", {
              className: "mx-auto max-w-5xl px-6 text-center relative z-10",
              children: [
                r.jsx(rt, { className: "w-8 h-8 mx-auto mb-6 opacity-80" }),
                r.jsx("h2", {
                  className: "font-display text-4xl md:text-5xl mb-6",
                  children: "Meet Hira",
                }),
                r.jsx("p", {
                  className:
                    "text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed text-balance",
                  children:
                    "I am passionate about nurturing thoughtful, confident, purpose-driven women through faith-centred guidance and structured learning. My coaching is offered in English and Urdu — wherever you are in the world, we can meet in the language closest to your heart.",
                }),
                r.jsxs(X, {
                  to: "/about",
                  className:
                    "mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition-all duration-300",
                  children: ["Learn more about my journey ", r.jsx(ee, { className: "w-4 h-4" })],
                }),
              ],
            }),
          ],
        }),
        r.jsxs("section", {
          className: "py-24 md:py-32 relative overflow-hidden",
          children: [
            r.jsx("div", { className: "absolute inset-0 pattern-dots opacity-30" }),
            r.jsx("div", {
              className:
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[200px]",
            }),
            r.jsxs("div", {
              className: "mx-auto max-w-3xl px-6 text-center relative z-10",
              children: [
                r.jsx("div", {
                  className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament reveal",
                  children: "Begin",
                }),
                r.jsx("h2", {
                  className: "font-display text-4xl md:text-6xl text-balance reveal",
                  children: "You don't have to do it alone.",
                }),
                r.jsx("p", {
                  className: "mt-6 text-lg text-muted-foreground text-balance reveal",
                  children:
                    "Take the first step today. Book a free 30-minute discovery call and let us talk about where you are and where you want to be.",
                }),
                r.jsx("div", {
                  className: "reveal",
                  children: r.jsxs(X, {
                    to: "/bookings",
                    className:
                      "mt-10 relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-1 transition-all duration-300 btn-shine pulse-ring",
                    children: ["Book my free discovery call ", r.jsx(ee, { className: "w-4 h-4" })],
                  }),
                }),
                r.jsx("p", {
                  className: "mt-8 text-sm italic text-muted-foreground reveal",
                  children: "Sessions available in English and Urdu. Online, worldwide.",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
export { _n as component };
