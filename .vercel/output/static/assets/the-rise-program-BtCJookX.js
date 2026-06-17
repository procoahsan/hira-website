import { r as i, j as n, R as x, a as K, L as we } from "./index-CLEWXjBW.js";
import { c as Ce, S as Ne, A as z } from "./SiteLayout-ClMWzJak.js";
import { P as je } from "./PageHeader-cvIMhO7K.js";
import { b as Q, u as A, a as L, U as Re, S as Ie } from "./utils-DX3kBZPO.js";
import { C as Ae } from "./calendar-f1B8MORA.js";
const Se = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Ee = Ce("chevron-down", Se);
function W(e, t = []) {
  let o = [];
  function r(a, c) {
    const l = i.createContext(c),
      d = o.length;
    o = [...o, c];
    const u = (m) => {
      const { scope: v, children: h, ...w } = m,
        y = v?.[e]?.[d] || l,
        g = i.useMemo(() => w, Object.values(w));
      return n.jsx(y.Provider, { value: g, children: h });
    };
    u.displayName = a + "Provider";
    function p(m, v) {
      const h = v?.[e]?.[d] || l,
        w = i.useContext(h);
      if (w) return w;
      if (c !== void 0) return c;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [u, p];
  }
  const s = () => {
    const a = o.map((c) => i.createContext(c));
    return function (l) {
      const d = l?.[e] || a;
      return i.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: d } }), [l, d]);
    };
  };
  return ((s.scopeName = e), [r, ke(s, ...t)]);
}
function ke(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (a) {
      const c = r.reduce((l, { useScope: d, scopeName: u }) => {
        const m = d(a)[`__scope${u}`];
        return { ...l, ...m };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return ((o.scopeName = t.scopeName), o);
}
function G(e) {
  const t = Pe(e),
    o = i.forwardRef((r, s) => {
      const { children: a, ...c } = r,
        l = i.Children.toArray(a),
        d = l.find(Te);
      if (d) {
        const u = d.props.children,
          p = l.map((m) =>
            m === d
              ? i.Children.count(u) > 1
                ? i.Children.only(null)
                : i.isValidElement(u)
                  ? u.props.children
                  : null
              : m,
          );
        return n.jsx(t, {
          ...c,
          ref: s,
          children: i.isValidElement(u) ? i.cloneElement(u, void 0, p) : null,
        });
      }
      return n.jsx(t, { ...c, ref: s, children: a });
    });
  return ((o.displayName = `${e}.Slot`), o);
}
function Pe(e) {
  const t = i.forwardRef((o, r) => {
    const { children: s, ...a } = o;
    if (i.isValidElement(s)) {
      const c = Oe(s),
        l = Me(a, s.props);
      return (s.type !== i.Fragment && (l.ref = r ? Q(r, c) : c), i.cloneElement(s, l));
    }
    return i.Children.count(s) > 1 ? i.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var _e = Symbol("radix.slottable");
function Te(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === _e
  );
}
function Me(e, t) {
  const o = { ...t };
  for (const r in t) {
    const s = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? s && a
        ? (o[r] = (...l) => {
            const d = a(...l);
            return (s(...l), d);
          })
        : s && (o[r] = s)
      : r === "style"
        ? (o[r] = { ...s, ...a })
        : r === "className" && (o[r] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function Oe(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    o = t && "isReactWarning" in t && t.isReactWarning;
  return o
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (o = t && "isReactWarning" in t && t.isReactWarning),
      o ? e.props.ref : e.props.ref || e.ref);
}
function De(e) {
  const t = e + "CollectionProvider",
    [o, r] = W(t),
    [s, a] = o(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (y) => {
      const { scope: g, children: C } = y,
        f = x.useRef(null),
        b = x.useRef(new Map()).current;
      return n.jsx(s, { scope: g, itemMap: b, collectionRef: f, children: C });
    };
  c.displayName = t;
  const l = e + "CollectionSlot",
    d = G(l),
    u = x.forwardRef((y, g) => {
      const { scope: C, children: f } = y,
        b = a(l, C),
        N = A(g, b.collectionRef);
      return n.jsx(d, { ref: N, children: f });
    });
  u.displayName = l;
  const p = e + "CollectionItemSlot",
    m = "data-radix-collection-item",
    v = G(p),
    h = x.forwardRef((y, g) => {
      const { scope: C, children: f, ...b } = y,
        N = x.useRef(null),
        I = A(g, N),
        R = a(p, C);
      return (
        x.useEffect(
          () => (
            R.itemMap.set(N, { ref: N, ...b }),
            () => {
              R.itemMap.delete(N);
            }
          ),
        ),
        n.jsx(v, { [m]: "", ref: I, children: f })
      );
    });
  h.displayName = p;
  function w(y) {
    const g = a(e + "CollectionConsumer", y);
    return x.useCallback(() => {
      const f = g.collectionRef.current;
      if (!f) return [];
      const b = Array.from(f.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (R, O) => b.indexOf(R.ref.current) - b.indexOf(O.ref.current),
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: c, Slot: u, ItemSlot: h }, w, r];
}
function Z(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
  return function (s) {
    if ((e?.(s), o === !1 || !s.defaultPrevented)) return t?.(s);
  };
}
var S = globalThis?.document ? i.useLayoutEffect : () => {},
  $e = K[" useInsertionEffect ".trim().toString()] || S;
function q({ prop: e, defaultProp: t, onChange: o = () => {}, caller: r }) {
  const [s, a, c] = Le({ defaultProp: t, onChange: o }),
    l = e !== void 0,
    d = l ? e : s;
  {
    const p = i.useRef(e !== void 0);
    i.useEffect(() => {
      const m = p.current;
      (m !== l &&
        console.warn(
          `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (p.current = l));
    }, [l, r]);
  }
  const u = i.useCallback(
    (p) => {
      if (l) {
        const m = We(p) ? p(e) : p;
        m !== e && c.current?.(m);
      } else a(p);
    },
    [l, e, a, c],
  );
  return [d, u];
}
function Le({ defaultProp: e, onChange: t }) {
  const [o, r] = i.useState(e),
    s = i.useRef(o),
    a = i.useRef(t);
  return (
    $e(() => {
      a.current = t;
    }, [t]),
    i.useEffect(() => {
      s.current !== o && (a.current?.(o), (s.current = o));
    }, [o, s]),
    [o, r, a]
  );
}
function We(e) {
  return typeof e == "function";
}
function qe(e) {
  const t = Ve(e),
    o = i.forwardRef((r, s) => {
      const { children: a, ...c } = r,
        l = i.Children.toArray(a),
        d = l.find(Ue);
      if (d) {
        const u = d.props.children,
          p = l.map((m) =>
            m === d
              ? i.Children.count(u) > 1
                ? i.Children.only(null)
                : i.isValidElement(u)
                  ? u.props.children
                  : null
              : m,
          );
        return n.jsx(t, {
          ...c,
          ref: s,
          children: i.isValidElement(u) ? i.cloneElement(u, void 0, p) : null,
        });
      }
      return n.jsx(t, { ...c, ref: s, children: a });
    });
  return ((o.displayName = `${e}.Slot`), o);
}
function Ve(e) {
  const t = i.forwardRef((o, r) => {
    const { children: s, ...a } = o;
    if (i.isValidElement(s)) {
      const c = Fe(s),
        l = Ye(a, s.props);
      return (s.type !== i.Fragment && (l.ref = r ? Q(r, c) : c), i.cloneElement(s, l));
    }
    return i.Children.count(s) > 1 ? i.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var He = Symbol("radix.slottable");
function Ue(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === He
  );
}
function Ye(e, t) {
  const o = { ...t };
  for (const r in t) {
    const s = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? s && a
        ? (o[r] = (...l) => {
            const d = a(...l);
            return (s(...l), d);
          })
        : s && (o[r] = s)
      : r === "style"
        ? (o[r] = { ...s, ...a })
        : r === "className" && (o[r] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...o };
}
function Fe(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    o = t && "isReactWarning" in t && t.isReactWarning;
  return o
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (o = t && "isReactWarning" in t && t.isReactWarning),
      o ? e.props.ref : e.props.ref || e.ref);
}
var Be = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  E = Be.reduce((e, t) => {
    const o = qe(`Primitive.${t}`),
      r = i.forwardRef((s, a) => {
        const { asChild: c, ...l } = s,
          d = c ? o : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          n.jsx(d, { ...l, ref: a })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function ze(e, t) {
  return i.useReducer((o, r) => t[o][r] ?? o, e);
}
var J = (e) => {
  const { present: t, children: o } = e,
    r = Ge(t),
    s = typeof o == "function" ? o({ present: r.isPresent }) : i.Children.only(o),
    a = A(r.ref, Ke(s));
  return typeof o == "function" || r.isPresent ? i.cloneElement(s, { ref: a }) : null;
};
J.displayName = "Presence";
function Ge(e) {
  const [t, o] = i.useState(),
    r = i.useRef(null),
    s = i.useRef(e),
    a = i.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [l, d] = ze(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    i.useEffect(() => {
      const u = k(r.current);
      a.current = l === "mounted" ? u : "none";
    }, [l]),
    S(() => {
      const u = r.current,
        p = s.current;
      if (p !== e) {
        const v = a.current,
          h = k(u);
        (e
          ? d("MOUNT")
          : h === "none" || u?.display === "none"
            ? d("UNMOUNT")
            : d(p && v !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, d]),
    S(() => {
      if (t) {
        let u;
        const p = t.ownerDocument.defaultView ?? window,
          m = (h) => {
            const y = k(r.current).includes(CSS.escape(h.animationName));
            if (h.target === t && y && (d("ANIMATION_END"), !s.current)) {
              const g = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = p.setTimeout(() => {
                  t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
                })));
            }
          },
          v = (h) => {
            h.target === t && (a.current = k(r.current));
          };
        return (
          t.addEventListener("animationstart", v),
          t.addEventListener("animationcancel", m),
          t.addEventListener("animationend", m),
          () => {
            (p.clearTimeout(u),
              t.removeEventListener("animationstart", v),
              t.removeEventListener("animationcancel", m),
              t.removeEventListener("animationend", m));
          }
        );
      } else d("ANIMATION_END");
    }, [t, d]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: i.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), o(u));
      }, []),
    }
  );
}
function k(e) {
  return e?.animationName || "none";
}
function Ke(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    o = t && "isReactWarning" in t && t.isReactWarning;
  return o
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (o = t && "isReactWarning" in t && t.isReactWarning),
      o ? e.props.ref : e.props.ref || e.ref);
}
var Qe = K[" useId ".trim().toString()] || (() => {}),
  Ze = 0;
function X(e) {
  const [t, o] = i.useState(Qe());
  return (
    S(() => {
      o((r) => r ?? String(Ze++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
var _ = "Collapsible",
  [Je, ee] = W(_),
  [Xe, V] = Je(_),
  te = i.forwardRef((e, t) => {
    const {
        __scopeCollapsible: o,
        open: r,
        defaultOpen: s,
        disabled: a,
        onOpenChange: c,
        ...l
      } = e,
      [d, u] = q({ prop: r, defaultProp: s ?? !1, onChange: c, caller: _ });
    return n.jsx(Xe, {
      scope: o,
      disabled: a,
      contentId: X(),
      open: d,
      onOpenToggle: i.useCallback(() => u((p) => !p), [u]),
      children: n.jsx(E.div, {
        "data-state": U(d),
        "data-disabled": a ? "" : void 0,
        ...l,
        ref: t,
      }),
    });
  });
te.displayName = _;
var oe = "CollapsibleTrigger",
  ne = i.forwardRef((e, t) => {
    const { __scopeCollapsible: o, ...r } = e,
      s = V(oe, o);
    return n.jsx(E.button, {
      type: "button",
      "aria-controls": s.contentId,
      "aria-expanded": s.open || !1,
      "data-state": U(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      disabled: s.disabled,
      ...r,
      ref: t,
      onClick: Z(e.onClick, s.onOpenToggle),
    });
  });
ne.displayName = oe;
var H = "CollapsibleContent",
  re = i.forwardRef((e, t) => {
    const { forceMount: o, ...r } = e,
      s = V(H, e.__scopeCollapsible);
    return n.jsx(J, {
      present: o || s.open,
      children: ({ present: a }) => n.jsx(et, { ...r, ref: t, present: a }),
    });
  });
re.displayName = H;
var et = i.forwardRef((e, t) => {
  const { __scopeCollapsible: o, present: r, children: s, ...a } = e,
    c = V(H, o),
    [l, d] = i.useState(r),
    u = i.useRef(null),
    p = A(t, u),
    m = i.useRef(0),
    v = m.current,
    h = i.useRef(0),
    w = h.current,
    y = c.open || l,
    g = i.useRef(y),
    C = i.useRef(void 0);
  return (
    i.useEffect(() => {
      const f = requestAnimationFrame(() => (g.current = !1));
      return () => cancelAnimationFrame(f);
    }, []),
    S(() => {
      const f = u.current;
      if (f) {
        ((C.current = C.current || {
          transitionDuration: f.style.transitionDuration,
          animationName: f.style.animationName,
        }),
          (f.style.transitionDuration = "0s"),
          (f.style.animationName = "none"));
        const b = f.getBoundingClientRect();
        ((m.current = b.height),
          (h.current = b.width),
          g.current ||
            ((f.style.transitionDuration = C.current.transitionDuration),
            (f.style.animationName = C.current.animationName)),
          d(r));
      }
    }, [c.open, r]),
    n.jsx(E.div, {
      "data-state": U(c.open),
      "data-disabled": c.disabled ? "" : void 0,
      id: c.contentId,
      hidden: !y,
      ...a,
      ref: p,
      style: {
        "--radix-collapsible-content-height": v ? `${v}px` : void 0,
        "--radix-collapsible-content-width": w ? `${w}px` : void 0,
        ...e.style,
      },
      children: y && s,
    })
  );
});
function U(e) {
  return e ? "open" : "closed";
}
var tt = te,
  ot = ne,
  nt = re,
  rt = i.createContext(void 0);
function st(e) {
  const t = i.useContext(rt);
  return e || t || "ltr";
}
var j = "Accordion",
  at = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [Y, it, lt] = De(j),
  [T] = W(j, [lt, ee]),
  F = ee(),
  se = x.forwardRef((e, t) => {
    const { type: o, ...r } = e,
      s = r,
      a = r;
    return n.jsx(Y.Provider, {
      scope: e.__scopeAccordion,
      children: o === "multiple" ? n.jsx(mt, { ...a, ref: t }) : n.jsx(ut, { ...s, ref: t }),
    });
  });
se.displayName = j;
var [ae, ct] = T(j),
  [ie, dt] = T(j, { collapsible: !1 }),
  ut = x.forwardRef((e, t) => {
    const { value: o, defaultValue: r, onValueChange: s = () => {}, collapsible: a = !1, ...c } = e,
      [l, d] = q({ prop: o, defaultProp: r ?? "", onChange: s, caller: j });
    return n.jsx(ae, {
      scope: e.__scopeAccordion,
      value: x.useMemo(() => (l ? [l] : []), [l]),
      onItemOpen: d,
      onItemClose: x.useCallback(() => a && d(""), [a, d]),
      children: n.jsx(ie, {
        scope: e.__scopeAccordion,
        collapsible: a,
        children: n.jsx(le, { ...c, ref: t }),
      }),
    });
  }),
  mt = x.forwardRef((e, t) => {
    const { value: o, defaultValue: r, onValueChange: s = () => {}, ...a } = e,
      [c, l] = q({ prop: o, defaultProp: r ?? [], onChange: s, caller: j }),
      d = x.useCallback((p) => l((m = []) => [...m, p]), [l]),
      u = x.useCallback((p) => l((m = []) => m.filter((v) => v !== p)), [l]);
    return n.jsx(ae, {
      scope: e.__scopeAccordion,
      value: c,
      onItemOpen: d,
      onItemClose: u,
      children: n.jsx(ie, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: n.jsx(le, { ...a, ref: t }),
      }),
    });
  }),
  [pt, M] = T(j),
  le = x.forwardRef((e, t) => {
    const { __scopeAccordion: o, disabled: r, dir: s, orientation: a = "vertical", ...c } = e,
      l = x.useRef(null),
      d = A(l, t),
      u = it(o),
      m = st(s) === "ltr",
      v = Z(e.onKeyDown, (h) => {
        if (!at.includes(h.key)) return;
        const w = h.target,
          y = u().filter((D) => !D.ref.current?.disabled),
          g = y.findIndex((D) => D.ref.current === w),
          C = y.length;
        if (g === -1) return;
        h.preventDefault();
        let f = g;
        const b = 0,
          N = C - 1,
          I = () => {
            ((f = g + 1), f > N && (f = b));
          },
          R = () => {
            ((f = g - 1), f < b && (f = N));
          };
        switch (h.key) {
          case "Home":
            f = b;
            break;
          case "End":
            f = N;
            break;
          case "ArrowRight":
            a === "horizontal" && (m ? I() : R());
            break;
          case "ArrowDown":
            a === "vertical" && I();
            break;
          case "ArrowLeft":
            a === "horizontal" && (m ? R() : I());
            break;
          case "ArrowUp":
            a === "vertical" && R();
            break;
        }
        const O = f % C;
        y[O].ref.current?.focus();
      });
    return n.jsx(pt, {
      scope: o,
      disabled: r,
      direction: s,
      orientation: a,
      children: n.jsx(Y.Slot, {
        scope: o,
        children: n.jsx(E.div, { ...c, "data-orientation": a, ref: d, onKeyDown: r ? void 0 : v }),
      }),
    });
  }),
  P = "AccordionItem",
  [ft, B] = T(P),
  ce = x.forwardRef((e, t) => {
    const { __scopeAccordion: o, value: r, ...s } = e,
      a = M(P, o),
      c = ct(P, o),
      l = F(o),
      d = X(),
      u = (r && c.value.includes(r)) || !1,
      p = a.disabled || e.disabled;
    return n.jsx(ft, {
      scope: o,
      open: u,
      disabled: p,
      triggerId: d,
      children: n.jsx(tt, {
        "data-orientation": a.orientation,
        "data-state": he(u),
        ...l,
        ...s,
        ref: t,
        disabled: p,
        open: u,
        onOpenChange: (m) => {
          m ? c.onItemOpen(r) : c.onItemClose(r);
        },
      }),
    });
  });
ce.displayName = P;
var de = "AccordionHeader",
  ue = x.forwardRef((e, t) => {
    const { __scopeAccordion: o, ...r } = e,
      s = M(j, o),
      a = B(de, o);
    return n.jsx(E.h3, {
      "data-orientation": s.orientation,
      "data-state": he(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      ...r,
      ref: t,
    });
  });
ue.displayName = de;
var $ = "AccordionTrigger",
  me = x.forwardRef((e, t) => {
    const { __scopeAccordion: o, ...r } = e,
      s = M(j, o),
      a = B($, o),
      c = dt($, o),
      l = F(o);
    return n.jsx(Y.ItemSlot, {
      scope: o,
      children: n.jsx(ot, {
        "aria-disabled": (a.open && !c.collapsible) || void 0,
        "data-orientation": s.orientation,
        id: a.triggerId,
        ...l,
        ...r,
        ref: t,
      }),
    });
  });
me.displayName = $;
var pe = "AccordionContent",
  fe = x.forwardRef((e, t) => {
    const { __scopeAccordion: o, ...r } = e,
      s = M(j, o),
      a = B(pe, o),
      c = F(o);
    return n.jsx(nt, {
      role: "region",
      "aria-labelledby": a.triggerId,
      "data-orientation": s.orientation,
      ...c,
      ...r,
      ref: t,
      style: {
        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
        ...e.style,
      },
    });
  });
fe.displayName = pe;
function he(e) {
  return e ? "open" : "closed";
}
var ht = se,
  gt = ce,
  xt = ue,
  ge = me,
  xe = fe;
const yt = ht,
  ye = i.forwardRef(({ className: e, ...t }, o) =>
    n.jsx(gt, { ref: o, className: L("border-b", e), ...t }),
  );
ye.displayName = "AccordionItem";
const ve = i.forwardRef(({ className: e, children: t, ...o }, r) =>
  n.jsx(xt, {
    className: "flex",
    children: n.jsxs(ge, {
      ref: r,
      className: L(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        e,
      ),
      ...o,
      children: [
        t,
        n.jsx(Ee, {
          className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
        }),
      ],
    }),
  }),
);
ve.displayName = ge.displayName;
const be = i.forwardRef(({ className: e, children: t, ...o }, r) =>
  n.jsx(xe, {
    ref: r,
    className:
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...o,
    children: n.jsx("div", { className: L("pb-4 pt-0", e), children: t }),
  }),
);
be.displayName = xe.displayName;
const vt = [
    {
      number: "01",
      title: "Personal Management",
      summary: "Build self-awareness and take ownership of your time, energy, and daily direction.",
      body: "You cannot pour from an empty cup but most women have never been taught to fill their own. This module builds the foundation of everything that follows: deep self-awareness, an honest reflection of how you're currently spending your time and energy, and practical tools to take ownership of your day on your own terms. You'll stop reacting and start leading.",
    },
    {
      number: "02",
      title: "Stress Management",
      summary:
        "Understand your stress patterns and build tools to regulate, recover, and keep moving.",
      body: "Stress isn't just a feeling it's a signal which most of us have learned to ignore until it becomes a life crisis. This module helps you understand what's actually driving your stress, break the cycles that keep you stuck in overwhelm, and build a personalised toolkit of strategies that work with your life, not against it. You'll finish this module knowing how to regulate, recover, and keep moving.",
    },
    {
      number: "03",
      title: "Health Management",
      summary:
        "Care for your body and mind through sustainable habits that support your real life.",
      body: "Your body is an amanah, and yet it's often the first thing sacrificed when life gets busy. This module takes a holistic look at your physical and mental wellbeing which includes major things like sleep, nourishment, movement, and the habits that either drain or sustain you. No extreme overhauls. Just sustainable, values-aligned choices that help you feel like yourself again.",
    },
    {
      number: "04",
      title: "Relationship Management",
      summary:
        "Learn clearer communication, healthier boundaries, and stronger relationship patterns.",
      body: "Your relationships shape your inner world more than almost anything else. This module gives you the frameworks and language to understand your patterns, communicate with clarity, set boundaries without guilt, and nurture the connections that matter most while releasing the ones that don't serve your growth. Healthier relationships start with a clearer, stronger you.",
    },
    {
      number: "05",
      title: "Household Management",
      summary:
        "Create home systems that reduce mental load and bring rhythm back into family life.",
      body: "A well-run home is not a small thing it is the infrastructure of your family's life. This module reframes household management not as a burden to endure but as a domain to lead with intention. You'll build systems that reduce mental load, create rhythm and order in your home, and reclaim the time and headspace that chaos has been quietly stealing from you.",
    },
    {
      number: "06",
      title: "Vision Management",
      summary:
        "Turn your growth into a clear long-term vision, meaningful goals, and a real roadmap.",
      body: "This is where everything comes together. With a stronger foundation across each and every area of your life, you're now ready to dream and plan with clarity and conviction. This module guides you through defining your long-term vision, setting meaningful goals, and building a sustainable action plan that keeps you moving forward long after the program ends. You don't just leave with intentions. You leave with a roadmap.",
    },
  ],
  bt = [
    {
      icon: Re,
      title: "Weekly Live Sessions",
      body: "Meet each week in a focused learning space that keeps the work grounded, practical, and consistent.",
    },
    {
      icon: Ae,
      title: "Monthly 1:1 Coaching",
      body: "Receive personalised coaching tailored specifically to your journey and challenges.",
    },
    {
      icon: Ie,
      title: "Post-Course Quarterly Support",
      body: "True change takes time. You'll receive quarterly check-in sessions for two full years after the program ends, keeping you accountable and supported as you continue to RISE.",
    },
  ],
  wt = [
    {
      question: "What makes RISE different from other programs?",
      answer:
        "RISE integrates proven personal development frameworks while keeping Islamic values at the foundation, not as an afterthought. But the most important difference is personalisation. Every participant receives a dedicated 1:1 session with each module, so the work is applied to your life, your circumstances, and your specific challenges.",
    },
    {
      question: "Do I need to be at a certain stage in my personal development journey?",
      answer:
        "No. RISE is designed for women at any stage of their personal development journey, whether you are just beginning to invest in yourself or have done significant work already. What matters is that you are ready to show up honestly and do the work.",
    },
    {
      question: "What is the fee for the program?",
      answer:
        "RISE is $74.99 per month for 6 months. This includes all group sessions, your module workbooks, your dedicated 1:1 session per module, and your quarterly post-graduation follow-up sessions. Given the level of personalisation built into the program, this is considerably lower than comparable 1:1 coaching arrangements.",
    },
    {
      question: "What if I miss a group session?",
      answer:
        "Life happens and we understand that. If you miss a group session, you will not lose your place or your progress. You will get the recording of the session which you can go through at your own convenience.",
    },
    {
      question: "What if the live session time doesn't suit me?",
      answer:
        "If the time does not suit you, you can still benefit as you get a lifetime access to recordings of the sessions.",
    },
    {
      question: "Is there an application process?",
      answer:
        "RISE is application-based, not to create barriers, but to ensure every woman who joins is in the right place at the right time and that the cohort is a genuine fit for one another. You can apply via the button on this page.",
    },
    {
      question: "Is there any support after the program ends?",
      answer:
        "RISE doesn’t end at six months. Every graduate receives quarterly 1:1 follow-up sessions for post-course implementation support. These sessions ensure you continue to build on what you worked through during the program rather than returning to old patterns.",
    },
    {
      question: "How big are the groups?",
      answer:
        "Cohorts are intentionally small. It is an intimate group where every woman is known, supported, and held accountable. The small size is what makes the depth of the program possible.",
    },
    {
      question: "When do the live sessions take place?",
      answer:
        "The live group sessions run every Thursday from 9:00–11:00 AM KSA time. In addition to the group session, you will have your monthly 1:1 session with Hira, plus time for reading, reflection, and completing your worksheets. Women who get the most from RISE treat it as a genuine investment of time, not something to fit into the margins.",
    },
    {
      question: "Are there any materials provided?",
      answer:
        "Every module comes with a participant handouts designed specifically for RISE. They guide you through the frameworks, reflective exercises, and practical tools for each area of life. You keep them after the program ends.",
    },
    {
      question: "I have more questions, how can I contact you?",
      answer:
        "Simply send a message via the contact page or DM on Instagram. Every message is read personally and we will be happy to help you decide if RISE is right for you.",
    },
  ];
function At() {
  return n.jsxs(Ne, {
    children: [
      n.jsx(je, {
        eyebrow: "The RISE Program",
        title: "Stop putting yourself last. Start rising.",
        intro:
          "A transformative 6-month coaching experience designed exclusively for women to address the core facets of your life in an integrated, supportive, and sustainable way.",
      }),
      n.jsx("section", {
        className: "py-20",
        children: n.jsx("div", {
          className: "mx-auto max-w-4xl px-6",
          children: n.jsxs("div", {
            className: "bg-card border border-border rounded-3xl p-10 md:p-14 shadow-soft",
            children: [
              n.jsx("p", {
                className: "text-lg leading-relaxed text-foreground/85",
                children:
                  "Are you a woman who feels like you're constantly juggling the needs of everyone else, while your own dreams and well-being get left on the back burner? Do you feel pulled in a dozen directions, managing a household, a career, and relationships, all while trying to process the weight of past experiences?",
              }),
              n.jsx("p", {
                className: "mt-6 text-lg leading-relaxed text-foreground/85",
                children:
                  "You are capable, you are strong, but even the strongest among us need a dedicated space to heal, grow, and design a life that truly fulfills them.",
              }),
              n.jsxs("div", {
                className: "mt-8 flex flex-wrap items-center gap-6",
                children: [
                  n.jsxs("div", {
                    className: "text-gold font-display text-3xl",
                    children: [
                      "US$ 74.99",
                      n.jsx("span", {
                        className: "text-lg text-muted-foreground",
                        children: "/month",
                      }),
                    ],
                  }),
                  n.jsxs("a", {
                    href: "https://forms.gle/ThLpNzCgYx5qgCoo7",
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition",
                    children: ["Register now ", n.jsx(z, { className: "w-4 h-4" })],
                  }),
                  n.jsx("span", {
                    className: "text-sm text-muted-foreground italic",
                    children: "Limited seats only",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      n.jsx("section", {
        className: "py-20 bg-secondary/40 border-y border-border/60",
        children: n.jsxs("div", {
          className: "mx-auto max-w-7xl px-6",
          children: [
            n.jsxs("div", {
              className: "text-center mb-16",
              children: [
                n.jsx("div", {
                  className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament",
                  children: "Course Structure",
                }),
                n.jsx("h2", {
                  className: "font-display text-4xl md:text-5xl",
                  children: "Six modules. One transformation.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: vt.map((e) =>
                n.jsxs(
                  "article",
                  {
                    tabIndex: 0,
                    className:
                      "bg-card border border-border rounded-3xl p-8 hover:shadow-soft focus:shadow-soft focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 group",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center gap-4 mb-5",
                        children: [
                          n.jsx("div", {
                            className:
                              "w-12 h-12 rounded-2xl bg-emerald-gradient text-primary-foreground grid place-items-center font-display text-xl",
                            children: e.number,
                          }),
                          n.jsx("h3", { className: "font-display text-xl", children: e.title }),
                        ],
                      }),
                      n.jsx("p", {
                        className: "text-muted-foreground leading-relaxed text-[15px]",
                        children: e.summary,
                      }),
                      n.jsx("div", {
                        className:
                          "max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-80 group-hover:opacity-100 group-focus:max-h-80 group-focus:opacity-100",
                        children: n.jsx("p", {
                          className:
                            "mt-5 border-t border-border/70 pt-5 text-muted-foreground leading-relaxed text-[15px]",
                          children: e.body,
                        }),
                      }),
                      n.jsx("div", {
                        className:
                          "mt-5 text-xs uppercase tracking-widest text-gold transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0",
                        children: "Hover to read more",
                      }),
                    ],
                  },
                  e.number,
                ),
              ),
            }),
          ],
        }),
      }),
      n.jsx("section", {
        className: "py-20",
        children: n.jsxs("div", {
          className: "mx-auto max-w-5xl px-6",
          children: [
            n.jsxs("div", {
              className: "text-center mb-14",
              children: [
                n.jsx("div", {
                  className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament",
                  children: "Course Framework",
                }),
                n.jsx("h2", {
                  className: "font-display text-4xl md:text-5xl",
                  children: "How it works",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-3 gap-6",
              children: bt.map(({ icon: e, title: t, body: o }) =>
                n.jsxs(
                  "div",
                  {
                    className: "bg-card border border-border rounded-3xl p-8 text-center",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-14 h-14 mx-auto rounded-2xl bg-emerald-gradient text-primary-foreground grid place-items-center mb-6",
                        children: n.jsx(e, { className: "w-6 h-6" }),
                      }),
                      n.jsx("h3", { className: "font-display text-xl mb-3", children: t }),
                      n.jsx("p", {
                        className: "text-muted-foreground leading-relaxed",
                        children: o,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      n.jsx("section", {
        className: "py-20 bg-secondary/20 border-t border-border/60",
        children: n.jsxs("div", {
          className: "mx-auto max-w-3xl px-6",
          children: [
            n.jsxs("div", {
              className: "text-center mb-14",
              children: [
                n.jsx("div", {
                  className: "text-xs uppercase tracking-[0.3em] text-gold mb-4 ornament",
                  children: "Questions",
                }),
                n.jsx("h2", {
                  className: "font-display text-4xl md:text-5xl",
                  children: "Frequently Asked Questions",
                }),
              ],
            }),
            n.jsx(yt, {
              type: "single",
              collapsible: !0,
              className: "w-full",
              children: wt.map((e, t) =>
                n.jsxs(
                  ye,
                  {
                    value: `item-${t}`,
                    className: "border-border/60",
                    children: [
                      n.jsx(ve, {
                        className:
                          "text-left font-display text-lg hover:text-primary transition-colors",
                        children: e.question,
                      }),
                      n.jsx(be, {
                        className: "text-muted-foreground leading-relaxed text-base",
                        children: e.answer,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      n.jsx("section", {
        className: "py-20 bg-emerald-gradient text-primary-foreground",
        children: n.jsxs("div", {
          className: "mx-auto max-w-3xl px-6 text-center",
          children: [
            n.jsx("h2", {
              className: "font-display text-4xl md:text-5xl mb-6",
              children: "Ready to RISE?",
            }),
            n.jsx("p", {
              className: "text-lg opacity-90 leading-relaxed mb-10",
              children:
                "If you're ready to stop putting yourself last, let's talk. Book a no-pressure discovery call to see if RISE is the right fit for you.",
            }),
            n.jsxs("div", {
              className: "flex flex-wrap justify-center gap-4",
              children: [
                n.jsxs("a", {
                  href: "https://forms.gle/ThLpNzCgYx5qgCoo7",
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition font-medium",
                  children: ["Register now ", n.jsx(z, { className: "w-4 h-4" })],
                }),
                n.jsx(we, {
                  to: "/bookings",
                  className:
                    "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 hover:bg-background/20 transition",
                  children: "Book a discovery call",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { At as component };
