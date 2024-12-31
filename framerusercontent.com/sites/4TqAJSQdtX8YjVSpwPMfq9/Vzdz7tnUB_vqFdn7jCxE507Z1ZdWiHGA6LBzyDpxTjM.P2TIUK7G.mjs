import { a as nr } from "./chunk-YAMWVKYW.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as Wr,
  B as qr,
  C as Yr,
  D as Xr,
  E as Jr,
  M as ar,
  N as K,
  P as _r,
  R as E,
  U as $,
  V as Y,
  W as He,
  Y as ne,
  Z as y,
  _ as F,
  aa as ee,
  b as tr,
  ba as Qr,
  c as f,
  ca as Kr,
  e as br,
  fa as Ne,
  g as Er,
  h as X,
  ha as h,
  ia as ir,
  k as Hr,
  l as ie,
  m as Ve,
  n as J,
  o as Gr,
  oa as Ae,
  p as Q,
  pa as $r,
  q as T,
  r as Pr,
  ra as oe,
  sa as U,
  t as e,
  ta as p,
  u as s,
  v as Ur,
  va as ze,
  w as P,
  wa as B,
  x as d,
  xa as re,
  y as W,
  ya as le,
  z as Zr,
} from "./chunk-L5OYT25A.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as D } from "./chunk-RIUMFBNJ.mjs";
var Ge = (r) => r;
var or = { ms: (r) => 1e3 * r, s: (r) => r / 1e3 };



function kr(r, t) {
  return t ? r * (1e3 / t) : 0;
}
var et = (r, t, n) =>
    (((1 - 3 * n + 3 * t) * r + (3 * n - 6 * t)) * r + 3 * t) * r,
  kt = 1e-7,
  zt = 12;
function Mt(r, t, n, i, l) {
  let m,
    c,
    u = 0;
  do (c = t + (n - t) / 2), (m = et(c, i, l) - r), m > 0 ? (n = c) : (t = c);
  while (Math.abs(m) > kt && ++u < zt);
  return c;
}
function Pe(r, t, n, i) {
  if (r === t && n === i) return Ge;
  let l = (m) => Mt(m, 0, 1, r, n);
  return (m) => (m === 0 || m === 1 ? m : et(l(m), t, i));
}
var L2 = {
  ease: Pe(0.25, 0.1, 0.25, 1),
  "ease-in": Pe(0.42, 0, 1, 1),
  "ease-in-out": Pe(0.42, 0, 0.58, 1),
  "ease-out": Pe(0, 0, 0.58, 1),
};
function rt(r, t) {
  var n = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") {
    var l = 0;
    for (i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      t.indexOf(i[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[l]) &&
        (n[i[l]] = r[i[l]]);
  }
  return n;
}
var Te = {};
Object.defineProperty(Te, "__esModule", { value: !0 });
Te.warning = function () {};
Te.invariant = function () {};
var j2 = Te.__esModule,
  F2 = Te.warning,
  Vt = Te.invariant;
var Nt = 5;
function lr(r, t, n) {
  let i = Math.max(t - Nt, 0);
  return kr(n - r(i), t - i);
}
var je = { stiffness: 100, damping: 10, mass: 1 },
  At = (r = je.stiffness, t = je.damping, n = je.mass) =>
    t / (2 * Math.sqrt(r * n));
function Tt(r, t, n) {
  return (r < t && n >= t) || (r > t && n <= t);
}
var Mr = ({
    stiffness: r = je.stiffness,
    damping: t = je.damping,
    mass: n = je.mass,
    from: i = 0,
    to: l = 1,
    velocity: m = 0,
    restSpeed: c = 2,
    restDistance: u = 0.5,
  } = {}) => {
    m = m ? or.s(m) : 0;
    let g = { done: !1, hasReachedTarget: !1, current: i, target: l },
      o = l - i,
      C = Math.sqrt(r / n) / 1e3,
      x = At(r, t, n),
      I;
    if (x < 1) {
      let w = C * Math.sqrt(1 - x * x);
      I = (L) =>
        l -
        Math.exp(-x * C * L) *
          (((x * C * o - m) / w) * Math.sin(w * L) + o * Math.cos(w * L));
    } else I = (w) => l - Math.exp(-C * w) * (o + (C * o - m) * w);
    return (w) => {
      g.current = I(w);
      let L = w === 0 ? m : lr(I, w, g.current),
        O = Math.abs(L) <= c,
        b = Math.abs(l - g.current) <= u;
      return (g.done = O && b), (g.hasReachedTarget = Tt(i, l, g.current)), g;
    };
  },
  tt = ({
    from: r = 0,
    velocity: t = 0,
    power: n = 0.8,
    decay: i = 0.325,
    bounceDamping: l,
    bounceStiffness: m,
    changeTarget: c,
    min: u,
    max: g,
    restDistance: o = 0.5,
    restSpeed: C,
  }) => {
    i = or.ms(i);
    let x = { hasReachedTarget: !1, done: !1, current: r, target: r },
      I = (v) => (u !== void 0 && v < u) || (g !== void 0 && v > g),
      w = (v) =>
        u === void 0
          ? g
          : g === void 0 || Math.abs(u - v) < Math.abs(g - v)
          ? u
          : g,
      L = n * t,
      O = r + L,
      b = c === void 0 ? O : c(O);
    (x.target = b), b !== O && (L = b - r);
    let V = (v) => -L * Math.exp(-v / i),
      _ = (v) => b + V(v),
      z = (v) => {
        let k = V(v),
          se = _(v);
        (x.done = Math.abs(k) <= o), (x.current = x.done ? b : se);
      },
      S,
      A,
      N = (v) => {
        I(x.current) &&
          ((S = v),
          (A = Mr({
            from: x.current,
            to: w(x.current),
            velocity: lr(_, v, x.current),
            damping: l,
            stiffness: m,
            restDistance: o,
            restSpeed: C,
          })));
      };
    return (
      N(0),
      (v) => {
        let k = !1;
        return (
          !A && S === void 0 && ((k = !0), z(v), N(v)),
          S !== void 0 && v > S
            ? ((x.hasReachedTarget = !0), A(v - S))
            : ((x.hasReachedTarget = !1), !k && z(v), x)
        );
      }
    );
  },
  zr = 10,
  jt = 1e4;
function at(r) {
  let t,
    n = zr,
    i = r(0),
    l = [i.current];
  for (; !i.done && n < jt; )
    (i = r(n)),
      l.push(i.done ? i.target : i.current),
      t === void 0 && i.hasReachedTarget && (t = n),
      (n += zr);
  let m = n - zr;
  return (
    l.length === 1 && l.push(i.current),
    { keyframes: l, duration: m / 1e3, overshootDuration: (t ?? m) / 1e3 }
  );
}
var Ft = ["", "X", "Y", "Z"],
  Rt = ["translate", "scale", "rotate", "skew"];
var it = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (r) => r + "deg",
  },
  Dt = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (r) => r + "px",
    },
    rotate: it,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: Ge },
    skew: it,
  },
  Ot = new Map(),
  Ht = (r) => `--motion-${r}`,
  ft = ["x", "y", "z"];
Rt.forEach((r) => {
  Ft.forEach((t) => {
    ft.push(r + t), Ot.set(Ht(r + t), Dt[r]);
  });
});
var mi = new Set(ft);
var nt = (r) => document.createElement("div").animate(r, { duration: 0.001 }),
  ot = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        nt({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!nt({ opacity: [0, 1] }).finished,
  },
  Br = {},
  Gt = {};
for (let r in ot) Gt[r] = () => (Br[r] === void 0 && (Br[r] = ot[r]()), Br[r]);
function mt(r, t) {
  var n;
  return (
    typeof r == "string"
      ? t
        ? (((n = t[r]) !== null && n !== void 0) ||
            (t[r] = document.querySelectorAll(r)),
          (r = t[r]))
        : (r = document.querySelectorAll(r))
      : r instanceof Element && (r = [r]),
    Array.from(r || [])
  );
}
function ct(r) {
  let t = new WeakMap();
  return (n = {}) => {
    let i = new Map(),
      l = (c = 0, u = 100, g = 0, o = !1) => {
        let C = `${c}-${u}-${g}-${o}`;
        return (
          i.has(C) ||
            i.set(
              C,
              r(
                Object.assign(
                  {
                    from: c,
                    to: u,
                    velocity: g,
                    restSpeed: o ? 0.05 : 2,
                    restDistance: o ? 0.01 : 0.5,
                  },
                  n
                )
              )
            ),
          i.get(C)
        );
      },
      m = (c) => (t.has(c) || t.set(c, at(c)), t.get(c));
    return {
      createAnimation: (c, u, g, o, C) => {
        var x, I;
        let w,
          L = c.length;
        if (g && L <= 2 && c.every(Pt)) {
          let b = c[L - 1],
            V = L === 1 ? null : c[0],
            _ = 0,
            z = 0,
            S = C?.generator;
          if (S) {
            let { animation: v, generatorStartTime: k } = C,
              se = v?.startTime || k || 0,
              pe = v?.currentTime || performance.now() - se,
              M = S(pe).current;
            (z = (x = V) !== null && x !== void 0 ? x : M),
              (L === 1 || (L === 2 && c[0] === null)) &&
                (_ = lr((fe) => S(fe).current, pe, M));
          } else z = (I = V) !== null && I !== void 0 ? I : parseFloat(u());
          let A = l(z, b, _, o?.includes("scale")),
            N = m(A);
          (w = Object.assign(Object.assign({}, N), { easing: "linear" })),
            C &&
              ((C.generator = A), (C.generatorStartTime = performance.now()));
        } else w = { easing: "ease", duration: m(l(0, 100)).overshootDuration };
        return w;
      },
    };
  };
}
var Pt = (r) => typeof r != "string",
  ci = ct(Mr),
  di = ct(tt),
  Zt = { any: 0, all: 1 };
function Wt(r, t, { root: n, margin: i, amount: l = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let m = mt(r),
    c = new WeakMap(),
    u = (o) => {
      o.forEach((C) => {
        let x = c.get(C.target);
        if (C.isIntersecting !== !!x)
          if (C.isIntersecting) {
            let I = t(C);
            typeof I == "function" ? c.set(C.target, I) : g.unobserve(C.target);
          } else x && (x(C), c.delete(C.target));
      });
    },
    g = new IntersectionObserver(u, {
      root: n,
      rootMargin: i,
      threshold: typeof l == "number" ? l : Zt[l],
    });
  return m.forEach((o) => g.observe(o)), () => g.disconnect();
}
var sr = new WeakMap(),
  ye;
function qt(r, t) {
  if (t) {
    let { inlineSize: n, blockSize: i } = t[0];
    return { width: n, height: i };
  }
  return r instanceof SVGElement && "getBBox" in r
    ? r.getBBox()
    : { width: r.offsetWidth, height: r.offsetHeight };
}
function Yt({ target: r, contentRect: t, borderBoxSize: n }) {
  var i;
  (i = sr.get(r)) === null ||
    i === void 0 ||
    i.forEach((l) => {
      l({
        target: r,
        contentSize: t,
        get size() {
          return qt(r, n);
        },
      });
    });
}
function Xt(r) {
  r.forEach(Yt);
}
function Jt() {
  typeof ResizeObserver < "u" && (ye = new ResizeObserver(Xt));
}
function Qt(r, t) {
  ye || Jt();
  let n = mt(r);
  return (
    n.forEach((i) => {
      let l = sr.get(i);
      l || ((l = new Set()), sr.set(i, l)), l.add(t), ye?.observe(i);
    }),
    () => {
      n.forEach((i) => {
        let l = sr.get(i);
        l?.delete(t), l?.size || ye?.unobserve(i);
      });
    }
  );
}
var fr = new Set(),
  Ze;
function Kt() {
  (Ze = () => {
    let r = { width: D.innerWidth, height: D.innerHeight },
      t = { target: D, size: r, contentSize: r };
    fr.forEach((n) => n(t));
  }),
    D.addEventListener("resize", Ze);
}
function $t(r) {
  return (
    fr.add(r),
    Ze || Kt(),
    () => {
      fr.delete(r), !fr.size && Ze && (Ze = void 0);
    }
  );
}
function dt(r, t) {
  return typeof r == "function" ? $t(r) : Qt(r, t);
}
function Ir(r, t, n) {
  r.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function lt(r, t, n) {
  r.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var ea = {
    isActive: (r) => !!r.inView,
    subscribe: (r, { enable: t, disable: n }, { inViewOptions: i = {} }) => {
      let { once: l } = i,
        m = rt(i, ["once"]);
      return Wt(
        r,
        (c) => {
          if ((t(), lt(r, "viewenter", c), !l))
            return (u) => {
              n(), lt(r, "viewleave", u);
            };
        },
        m
      );
    },
  },
  st = (r, t, n) => (i) => {
    (!i.pointerType || i.pointerType === "mouse") && (n(), Ir(r, t, i));
  },
  ra = {
    isActive: (r) => !!r.hover,
    subscribe: (r, { enable: t, disable: n }) => {
      let i = st(r, "hoverstart", t),
        l = st(r, "hoverend", n);
      return (
        r.addEventListener("pointerenter", i),
        r.addEventListener("pointerleave", l),
        () => {
          r.removeEventListener("pointerenter", i),
            r.removeEventListener("pointerleave", l);
        }
      );
    },
  },
  ta = {
    isActive: (r) => !!r.press,
    subscribe: (r, { enable: t, disable: n }) => {
      let i = (m) => {
          n(), Ir(r, "pressend", m), D.removeEventListener("pointerup", i);
        },
        l = (m) => {
          t(), Ir(r, "pressstart", m), D.addEventListener("pointerup", i);
        };
      return (
        r.addEventListener("pointerdown", l),
        () => {
          r.removeEventListener("pointerdown", l),
            D.removeEventListener("pointerup", i);
        }
      );
    },
  },
  aa = { inView: ea, hover: ra, press: ta },
  pi = ["initial", "animate", ...Object.keys(aa), "exit"];
var ia = 100,
  na = {
    left: (r) => `translateX(-${r}px)`,
    right: (r) => `translateX(${r}px)`,
    top: (r) => `translateY(-${r}px)`,
    bottom: (r) => `translateY(${r}px)`,
  },
  Sr =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function Me(r) {
  let {
      slots: t,
      gap: n,
      padding: i,
      paddingPerSide: l,
      paddingTop: m,
      paddingRight: c,
      paddingBottom: u,
      paddingLeft: g,
      speed: o,
      hoverFactor: C,
      direction: x,
      alignment: I,
      sizingOptions: w,
      fadeOptions: L,
      style: O,
    } = r,
    {
      fadeContent: b,
      overflow: V,
      fadeWidth: _,
      fadeInset: z,
      fadeAlpha: S,
    } = L,
    { widthType: A, heightType: N } = w,
    v = l ? `${m}px ${c}px ${u}px ${g}px` : `${i}px`,
    k = _r.current() === _r.canvas,
    se = t.filter(Boolean),
    pe = tr.count(se),
    M = pe > 0;
  x === !0 && (x = "left");
  let fe = x === "left" || x === "right",
    Se = Zr(0),
    we = na[x],
    a = Wr(Se, we),
    Z = T(null),
    me = Q(() => [Er(), Er()], []),
    [Ee, wt] = Pr({ parent: null, children: null }),
    Tr = [],
    gr = [],
    Oe = 0,
    ur = 0;
  k && ((Oe = pe ? Math.floor(10 / pe) : 0), (ur = 1)),
    !k &&
      M &&
      Ee.parent &&
      ((Oe = Math.round((Ee.parent / Ee.children) * 2) + 1),
      (Oe = Math.min(Oe, ia)),
      (ur = 1));
  let jr = Hr(() => {
      if (M && Z.current) {
        let H = fe ? Z.current.offsetWidth : Z.current.offsetHeight,
          G = me[0].current
            ? fe
              ? me[0].current.offsetLeft
              : me[0].current.offsetTop
            : 0,
          ce =
            (me[1].current
              ? fe
                ? me[1].current.offsetLeft + me[1].current.offsetWidth
                : me[1].current.offsetTop + me[1].current.offsetHeight
              : 0) -
            G +
            n;
        wt({ parent: H, children: ce });
      }
    }, []),
    Fr = k ? { contentVisibility: "auto" } : {};
  if (M) {
    if (!k) {
      let H = T(!0);
      Ve(
        () => (
          Ur.read(jr),
          dt(Z.current, ({ contentSize: G }) => {
            !H.current && (G.width || G.height) && Ur.read(jr),
              (H.current = !1);
          })
        ),
        []
      );
    }
    Tr = tr.map(se, (H, G) => {
      var Ce, ce, Ue, _e;
      let ke;
      G === 0 && (ke = me[0]), G === se.length - 1 && (ke = me[1]);
      let Le = {
        width: A
          ? (Ce = H.props) === null || Ce === void 0
            ? void 0
            : Ce.width
          : "100%",
        height: N
          ? (ce = H.props) === null || ce === void 0
            ? void 0
            : ce.height
          : "100%",
      };
      return e(W, {
        inherit: "id",
        children: e("li", {
          ref: ke,
          style: Le,
          children: br(
            H,
            {
              style: {
                ...((Ue = H.props) === null || Ue === void 0
                  ? void 0
                  : Ue.style),
                ...Le,
                flexShrink: 0,
                ...Fr,
              },
              layoutId: H.props.layoutId
                ? H.props.layoutId + "-original-" + G
                : void 0,
            },
            (_e = H.props) === null || _e === void 0 ? void 0 : _e.children
          ),
        }),
      });
    });
  }
  if (!k)
    for (let H = 0; H < Oe; H++)
      gr = [
        ...gr,
        ...tr.map(se, (G, Ce) => {
          var ce, Ue, _e, ke, Le, yr;
          let _t = {
            width: A
              ? (ce = G.props) === null || ce === void 0
                ? void 0
                : ce.width
              : "100%",
            height: N
              ? (Ue = G.props) === null || Ue === void 0
                ? void 0
                : Ue.height
              : "100%",
            willChange: "transform",
          };
          return e(
            W,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: _t,
                  "aria-hidden": !0,
                  children: br(
                    G,
                    {
                      key: H + " " + Ce,
                      style: {
                        ...((_e = G.props) === null || _e === void 0
                          ? void 0
                          : _e.style),
                        width: A
                          ? (ke = G.props) === null || ke === void 0
                            ? void 0
                            : ke.width
                          : "100%",
                        height: N
                          ? (Le = G.props) === null || Le === void 0
                            ? void 0
                            : Le.height
                          : "100%",
                        flexShrink: 0,
                        ...Fr,
                      },
                      layoutId: G.props.layoutId
                        ? G.props.layoutId + "-dupe-" + H
                        : void 0,
                    },
                    (yr = G.props) === null || yr === void 0
                      ? void 0
                      : yr.children
                  ),
                },
                H + "li" + Ce
              ),
            },
            H + "lg" + Ce
          );
        }),
      ];
  let ge = Ee.children + Ee.children * Math.round(Ee.parent / Ee.children),
    xr = T(null),
    Cr = T(null),
    rr = T(0),
    vr = T(!1),
    Rr = Yr(),
    Dr = T(null),
    he = T(null);
  if (!k) {
    let H = Jr(Z);
    Sr
      ? (Ve(() => {
          if (!(Rr || !ge || !o))
            return (
              (he.current = Dr.current.animate(
                { transform: [we(0), we(ge)] },
                {
                  duration: (Math.abs(ge) / o) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => he.current.cancel()
            );
        }, [C, ge, o]),
        Ve(() => {
          he.current &&
            (H && he.current.playState === "paused"
              ? he.current.play()
              : !H && he.current.playState === "running" && he.current.pause());
        }, [H]))
      : qr((G) => {
          if (!ge || Rr || Sr) return;
          xr.current === null && (xr.current = G), (G = G - xr.current);
          let ce = (Cr.current === null ? 0 : G - Cr.current) * (o / 1e3);
          vr.current && (ce *= C),
            (rr.current += ce),
            (rr.current = Xr(0, ge, rr.current)),
            (Cr.current = G),
            H && Se.set(rr.current);
        });
  }
  let yt = fe ? "to right" : "to bottom",
    Or = _ / 2,
    bt = 100 - _ / 2,
    Et = ma(z, 0, Or),
    Ut = 100 - z,
    wr = `linear-gradient(${yt}, rgba(0, 0, 0, ${S}) ${Et}%, rgba(0, 0, 0, 1) ${Or}%, rgba(0, 0, 0, 1) ${bt}%, rgba(0, 0, 0, ${S}) ${Ut}%)`;
  return M
    ? e("section", {
        style: {
          ...pt,
          opacity: ur,
          WebkitMaskImage: b ? wr : void 0,
          MozMaskImage: b ? wr : void 0,
          maskImage: b ? wr : void 0,
          overflow: V ? "visible" : "hidden",
          padding: v,
        },
        ref: Z,
        children: s(d.ul, {
          ref: Dr,
          style: {
            ...pt,
            gap: n,
            top: x === "bottom" && ht(ge) ? -ge : void 0,
            left: x === "right" && ht(ge) ? -ge : void 0,
            placeItems: I,
            position: "relative",
            flexDirection: fe ? "row" : "column",
            ...O,
            willChange: k ? "auto" : "transform",
            transform: Sr ? we(0) : a,
          },
          onMouseEnter: () => {
            (vr.current = !0), he.current && (he.current.playbackRate = C);
          },
          onMouseLeave: () => {
            (vr.current = !1), he.current && (he.current.playbackRate = 1);
          },
          children: [Tr, gr],
        }),
      })
    : s("section", {
        style: oa,
        children: [
          e("div", { style: la, children: "\u2728" }),
          e("p", { style: sa, children: "Connect to Content" }),
          e("p", {
            style: fa,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
Me.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
$(Me, {
  slots: {
    type: E.Array,
    title: "Children",
    control: { type: E.ComponentInstance },
  },
  speed: {
    type: E.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: E.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: E.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: E.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: E.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: E.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: E.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: E.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: E.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: E.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: E.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: E.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: E.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: E.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: E.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var pt = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  oa = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  la = { fontSize: 32, marginBottom: 10 },
  sa = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  fa = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  ma = (r, t, n) => Math.min(Math.max(r, t), n),
  ht = (r) => typeof r == "number" && !isNaN(r);
var ca = ["ZIxQj7pFq", "mHdBcNnRs"],
  da = "framer-vziqB",
  pa = { mHdBcNnRs: "framer-v-1m00189", ZIxQj7pFq: "framer-v-19o15e" };
function ha(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var ga = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ua = ({ value: r, children: t }) => {
    let n = ie(P),
      i = r ?? n.transition,
      l = Q(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(P.Provider, { value: l, children: t });
  },
  xa = d.create(f),
  Ca = { Close: "mHdBcNnRs", Open: "ZIxQj7pFq" },
  va = ({
    click: r,
    height: t,
    id: n,
    number: i,
    text: l,
    title: m,
    width: c,
    ...u
  }) => {
    var g, o, C, x, I;
    return {
      ...u,
      cRdFL1YVM: (g = i ?? u.cRdFL1YVM) !== null && g !== void 0 ? g : "1",
      id5Vq3a9l:
        (o = m ?? u.id5Vq3a9l) !== null && o !== void 0
          ? o
          : "Unparalleled Customization",
      jxRdRtuT9:
        (C = l ?? u.jxRdRtuT9) !== null && C !== void 0
          ? C
          : "Music creation is deeply personal, and Rhythmix understands that one size doesn\u2019t fit all. That\u2019s why we offer",
      Lc8nkdLXh: r ?? u.Lc8nkdLXh,
      variant:
        (I = (x = Ca[u.variant]) !== null && x !== void 0 ? x : u.variant) !==
          null && I !== void 0
          ? I
          : "ZIxQj7pFq",
    };
  },
  wa = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  ya = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: u,
        cRdFL1YVM: g,
        id5Vq3a9l: o,
        jxRdRtuT9: C,
        Lc8nkdLXh: x,
        ...I
      } = va(r),
      {
        baseVariant: w,
        classNames: L,
        clearLoadingGesture: O,
        gestureHandlers: b,
        gestureVariant: V,
        isLoading: _,
        setGestureState: z,
        setVariant: S,
        variants: A,
      } = oe({
        cycleOrder: ca,
        defaultVariant: "ZIxQj7pFq",
        variant: u,
        variantClassNames: pa,
      }),
      N = wa(r, A),
      { activeVariantCallback: v, delay: k } = Ae(w),
      se = v(async (...Z) => {
        if ((z({ isPressed: !1 }), x && (await x(...Z)) === !1)) return !1;
        S("mHdBcNnRs");
      }),
      pe = v(async (...Z) => {
        if ((z({ isPressed: !1 }), x && (await x(...Z)) === !1)) return !1;
        S("ZIxQj7pFq");
      }),
      M = T(null),
      fe = () => w !== "mHdBcNnRs",
      Se = J(),
      we = [],
      a = ne();
    return e(W, {
      id: c ?? Se,
      children: e(xa, {
        animate: A,
        initial: !1,
        children: e(ua, {
          value: ga,
          children: s(d.div, {
            ...I,
            ...b,
            className: Y(da, ...we, "framer-19o15e", m, L),
            "data-border": !0,
            "data-framer-name": "Open",
            "data-highlight": !0,
            layoutDependency: N,
            layoutId: "ZIxQj7pFq",
            onTap: se,
            ref: t ?? M,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(255, 255, 255, 0.1)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              boxShadow: "inset 0px -71px 120px -70px rgba(245, 186, 0, 0.16)",
              ...l,
            },
            variants: {
              mHdBcNnRs: {
                boxShadow: "inset 0px -71px 120px -70px rgba(245, 186, 0, 0)",
              },
            },
            ...ha(
              { mHdBcNnRs: { "data-framer-name": "Close", onTap: pe } },
              w,
              V
            ),
            children: [
              s(d.div, {
                className: "framer-18roh88",
                layoutDependency: N,
                layoutId: "IymX8SyTu",
                children: [
                  e(p, {
                    __fromCanvasComponent: !0,
                    children: e(f, {
                      children: e(d.h1, {
                        style: {
                          "--font-selector":
                            "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBNZWRpdW0=",
                          "--framer-font-family":
                            '"Helvetica Now Display Medium", "Helvetica Now Display Medium Placeholder", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-letter-spacing": "0px",
                          "--framer-line-height": "1.3em",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-gdpscs, rgb(255, 255, 255))",
                        },
                        children: "1",
                      }),
                    }),
                    className: "framer-1m9w676",
                    fonts: ["CUSTOM;Helvetica Now Display Medium"],
                    layoutDependency: N,
                    layoutId: "K085YtaXN",
                    style: {
                      "--extracted-gdpscs": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: g,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(p, {
                    __fromCanvasComponent: !0,
                    children: e(f, {
                      children: e(d.h1, {
                        style: {
                          "--font-selector":
                            "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBNZWRpdW0=",
                          "--framer-font-family":
                            '"Helvetica Now Display Medium", "Helvetica Now Display Medium Placeholder", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-letter-spacing": "0px",
                          "--framer-line-height": "1.3em",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-gdpscs, rgb(255, 255, 255))",
                        },
                        children: "Unparalleled Customization",
                      }),
                    }),
                    className: "framer-e19nxz",
                    fonts: ["CUSTOM;Helvetica Now Display Medium"],
                    layoutDependency: N,
                    layoutId: "oKxBmetI6",
                    style: {
                      "--extracted-gdpscs": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: o,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              fe() &&
                e(p, {
                  __fromCanvasComponent: !0,
                  children: e(f, {
                    children: e(d.h1, {
                      style: {
                        "--framer-font-size": "19px",
                        "--framer-letter-spacing": "0px",
                        "--framer-line-height": "1.5em",
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-gdpscs, rgb(178, 173, 173))",
                      },
                      children:
                        "Music creation is deeply personal, and Rhythmix understands that one size doesn\u2019t fit all. That\u2019s why we offer",
                    }),
                  }),
                  className: "framer-18v4igy",
                  fonts: ["Inter"],
                  layoutDependency: N,
                  layoutId: "AHncnIgg7",
                  style: {
                    "--extracted-gdpscs": "rgb(178, 173, 173)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  text: C,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
            ],
          }),
        }),
      }),
    });
  }),
  ba = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vziqB.framer-1huitov, .framer-vziqB .framer-1huitov { display: block; }",
    ".framer-vziqB.framer-19o15e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 1360px; }",
    ".framer-vziqB .framer-18roh88 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-vziqB .framer-1m9w676 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-vziqB .framer-e19nxz { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-vziqB .framer-18v4igy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vziqB.framer-19o15e, .framer-vziqB .framer-18roh88 { gap: 0px; } .framer-vziqB.framer-19o15e > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-vziqB.framer-19o15e > :first-child { margin-top: 0px; } .framer-vziqB.framer-19o15e > :last-child { margin-bottom: 0px; } .framer-vziqB .framer-18roh88 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-vziqB .framer-18roh88 > :first-child { margin-left: 0px; } .framer-vziqB .framer-18roh88 > :last-child { margin-right: 0px; } }",
    '.framer-vziqB[data-border="true"]::after, .framer-vziqB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  We = ee(ya, ba, "framer-vziqB"),
  qe = We;
We.displayName = "Single Tab";
We.defaultProps = { height: 132, width: 1360 };
$(We, {
  variant: {
    options: ["ZIxQj7pFq", "mHdBcNnRs"],
    optionTitles: ["Open", "Close"],
    title: "Variant",
    type: E.Enum,
  },
  cRdFL1YVM: {
    defaultValue: "1",
    displayTextArea: !1,
    title: "Number",
    type: E.String,
  },
  id5Vq3a9l: {
    defaultValue: "Unparalleled Customization",
    displayTextArea: !1,
    title: "Title",
    type: E.String,
  },
  jxRdRtuT9: {
    defaultValue:
      "Music creation is deeply personal, and Rhythmix understands that one size doesn\u2019t fit all. That\u2019s why we offer",
    displayTextArea: !1,
    title: "Text",
    type: E.String,
  },
  Lc8nkdLXh: { title: "Click", type: E.EventHandler },
});
re(
  We,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Helvetica Now Display Medium",
          source: "custom",
          url: "https://framerusercontent.com/assets/IVXY5mkDfw4ct15ejiMQhb73Ua8.woff2",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ea = le(qe),
  Ua = ["BYBNQotIF", "HDVM3XE4i", "ezn47bBPQ"],
  _a = "framer-JwMTd",
  ka = {
    BYBNQotIF: "framer-v-amu96o",
    ezn47bBPQ: "framer-v-14y3zh9",
    HDVM3XE4i: "framer-v-mpmyux",
  };
function mr(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var za = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Ma = ({ value: r, children: t }) => {
    let n = ie(P),
      i = r ?? n.transition,
      l = Q(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(P.Provider, { value: l, children: t });
  },
  Ba = d.create(f),
  Ia = {
    "Variant 1": "BYBNQotIF",
    "Variant 2": "HDVM3XE4i",
    "Variant 3": "ezn47bBPQ",
  },
  Sa = ({ height: r, id: t, width: n, ...i }) => {
    var l, m;
    return {
      ...i,
      variant:
        (m = (l = Ia[i.variant]) !== null && l !== void 0 ? l : i.variant) !==
          null && m !== void 0
          ? m
          : "BYBNQotIF",
    };
  },
  La = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  Va = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      { style: l, className: m, layoutId: c, variant: u, ...g } = Sa(r),
      {
        baseVariant: o,
        classNames: C,
        clearLoadingGesture: x,
        gestureHandlers: I,
        gestureVariant: w,
        isLoading: L,
        setGestureState: O,
        setVariant: b,
        variants: V,
      } = oe({
        cycleOrder: Ua,
        defaultVariant: "BYBNQotIF",
        variant: u,
        variantClassNames: ka,
      }),
      _ = La(r, V),
      { activeVariantCallback: z, delay: S } = Ae(o),
      A = z(async (...fe) => {
        b("BYBNQotIF");
      }),
      N = z(async (...fe) => {
        b("HDVM3XE4i");
      }),
      v = z(async (...fe) => {
        b("ezn47bBPQ");
      }),
      k = T(null),
      se = J(),
      pe = [],
      M = ne();
    return e(W, {
      id: c ?? se,
      children: e(Ba, {
        animate: V,
        initial: !1,
        children: e(Ma, {
          value: za,
          children: s(d.div, {
            ...g,
            ...I,
            className: Y(_a, ...pe, "framer-amu96o", m, C),
            "data-border": !0,
            "data-framer-name": "Variant 1",
            layoutDependency: _,
            layoutId: "BYBNQotIF",
            ref: t ?? k,
            style: {
              "--border-bottom-width": "0px",
              "--border-color": "rgba(255, 255, 255, 0.1)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              ...l,
            },
            ...mr(
              {
                ezn47bBPQ: { "data-framer-name": "Variant 3" },
                HDVM3XE4i: { "data-framer-name": "Variant 2" },
              },
              o,
              w
            ),
            children: [
              e(y, {
                height: 132,
                width: M?.width || "100vw",
                y:
                  (M?.y || 0) +
                  0 +
                  (((M?.height || 290) - 0 - 396) / 2 + 0 + 0),
                children: e(d.div, {
                  className: "framer-19o1xq4-container",
                  layoutDependency: _,
                  layoutId: "X5CagUESd-container",
                  children: e(qe, {
                    cRdFL1YVM: "1",
                    height: "100%",
                    id: "X5CagUESd",
                    id5Vq3a9l: "Unparalleled Customization",
                    jxRdRtuT9:
                      "Music creation is deeply personal, and Rhythmix understands that one size doesn\u2019t fit all. That\u2019s why we offer",
                    layoutId: "X5CagUESd",
                    Lc8nkdLXh: A,
                    style: { width: "100%" },
                    variant: "ZIxQj7pFq",
                    width: "100%",
                    ...mr(
                      {
                        ezn47bBPQ: { variant: "mHdBcNnRs" },
                        HDVM3XE4i: { variant: "mHdBcNnRs" },
                      },
                      o,
                      w
                    ),
                  }),
                }),
              }),
              e(y, {
                height: 132,
                width: M?.width || "100vw",
                y:
                  (M?.y || 0) +
                  0 +
                  (((M?.height || 290) - 0 - 396) / 2 + 132 + 0),
                children: e(d.div, {
                  className: "framer-it5wjx-container",
                  layoutDependency: _,
                  layoutId: "jDzGe6vcH-container",
                  children: e(qe, {
                    cRdFL1YVM: "2",
                    height: "100%",
                    id: "jDzGe6vcH",
                    id5Vq3a9l: "Multi-Use Flexibility",
                    jxRdRtuT9:
                      "Music creation is deeply personal, and Rhythmix understands that one size doesn\u2019t fit all. That\u2019s why we offer",
                    layoutId: "jDzGe6vcH",
                    Lc8nkdLXh: N,
                    style: { width: "100%" },
                    variant: "mHdBcNnRs",
                    width: "100%",
                    ...mr({ HDVM3XE4i: { variant: "ZIxQj7pFq" } }, o, w),
                  }),
                }),
              }),
              e(y, {
                height: 132,
                width: M?.width || "100vw",
                y:
                  (M?.y || 0) +
                  0 +
                  (((M?.height || 290) - 0 - 396) / 2 + 264 + 0),
                children: e(d.div, {
                  className: "framer-pgj77s-container",
                  layoutDependency: _,
                  layoutId: "jCAwkfHNa-container",
                  children: e(qe, {
                    cRdFL1YVM: "3",
                    height: "100%",
                    id: "jCAwkfHNa",
                    id5Vq3a9l: "Seamless Integration",
                    jxRdRtuT9:
                      "Music creation is deeply personal, and Rhythmix understands that one size doesn\u2019t fit all. That\u2019s why we offer",
                    layoutId: "jCAwkfHNa",
                    Lc8nkdLXh: v,
                    style: { width: "100%" },
                    variant: "mHdBcNnRs",
                    width: "100%",
                    ...mr({ ezn47bBPQ: { variant: "ZIxQj7pFq" } }, o, w),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Na = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-JwMTd.framer-3jgugu, .framer-JwMTd .framer-3jgugu { display: block; }",
    ".framer-JwMTd.framer-amu96o { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1360px; }",
    ".framer-JwMTd .framer-19o1xq4-container, .framer-JwMTd .framer-it5wjx-container, .framer-JwMTd .framer-pgj77s-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JwMTd.framer-amu96o { gap: 0px; } .framer-JwMTd.framer-amu96o > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-JwMTd.framer-amu96o > :first-child { margin-top: 0px; } .framer-JwMTd.framer-amu96o > :last-child { margin-bottom: 0px; } }",
    '.framer-JwMTd[data-border="true"]::after, .framer-JwMTd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ye = ee(Va, Na, "framer-JwMTd"),
  Lr = Ye;
Ye.displayName = "Tabs";
Ye.defaultProps = { height: 290, width: 1360 };
$(Ye, {
  variant: {
    options: ["BYBNQotIF", "HDVM3XE4i", "ezn47bBPQ"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: E.Enum,
  },
});
re(Ye, [{ explicitInter: !0, fonts: [] }, ...Ea], {
  supportsExplicitInterCodegen: !0,
});
var Aa = ["JwEBX2eQj", "TMvMhHiAG"],
  Ta = "framer-ADLrG",
  ja = { JwEBX2eQj: "framer-v-17prf89", TMvMhHiAG: "framer-v-zod73o" };
function gt(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var Fa = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ut = (r) =>
    typeof r == "object" && r !== null && typeof r.src == "string"
      ? r
      : typeof r == "string"
      ? { src: r }
      : void 0,
  Ra = ({ value: r, children: t }) => {
    let n = ie(P),
      i = r ?? n.transition,
      l = Q(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(P.Provider, { value: l, children: t });
  },
  Da = d.create(f),
  Oa = { "Variant 2": "TMvMhHiAG", Desktop: "JwEBX2eQj" },
  Ha = ({ backgroundColor: r, height: t, icon: n, id: i, width: l, ...m }) => {
    var c, u, g, o;
    return {
      ...m,
      IS7oaphFo:
        (c = r ?? m.IS7oaphFo) !== null && c !== void 0
          ? c
          : "rgba(5, 0, 13, 0.12)",
      variant:
        (g = (u = Oa[m.variant]) !== null && u !== void 0 ? u : m.variant) !==
          null && g !== void 0
          ? g
          : "JwEBX2eQj",
      VmubYJzin:
        (o = n ?? m.VmubYJzin) !== null && o !== void 0
          ? o
          : {
              src: "https://framerusercontent.com/images/bH3XcIVWVCDFck5SDQOhw7xVQQ.svg",
            },
    };
  },
  Ga = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  Pa = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: u,
        IS7oaphFo: g,
        VmubYJzin: o,
        ...C
      } = Ha(r),
      {
        baseVariant: x,
        classNames: I,
        clearLoadingGesture: w,
        gestureHandlers: L,
        gestureVariant: O,
        isLoading: b,
        setGestureState: V,
        setVariant: _,
        variants: z,
      } = oe({
        cycleOrder: Aa,
        defaultVariant: "JwEBX2eQj",
        variant: u,
        variantClassNames: ja,
      }),
      S = Ga(r, z),
      A = T(null),
      N = J(),
      v = [],
      k = ne();
    return e(W, {
      id: c ?? N,
      children: e(Da, {
        animate: z,
        initial: !1,
        children: e(Ra, {
          value: Fa,
          children: e(d.div, {
            ...C,
            ...L,
            className: Y(Ta, ...v, "framer-17prf89", m, I),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: S,
            layoutId: "JwEBX2eQj",
            ref: t ?? A,
            style: {
              "--border-bottom-width": "1.15px",
              "--border-color": "rgb(45, 44, 54)",
              "--border-left-width": "1.15px",
              "--border-right-width": "1.15px",
              "--border-style": "solid",
              "--border-top-width": "1.15px",
              backgroundColor: g,
              borderBottomLeftRadius: 23.02,
              borderBottomRightRadius: 23.02,
              borderTopLeftRadius: 23.02,
              borderTopRightRadius: 23.02,
              ...l,
            },
            ...gt({ TMvMhHiAG: { "data-framer-name": "Variant 2" } }, x, O),
            children: e(U, {
              background: {
                alt: "",
                fit: "fill",
                loading: B(
                  (k?.y || 0) + (0 + ((k?.height || 144) - 0 - 47) / 2)
                ),
                pixelHeight: 48,
                pixelWidth: 55,
                sizes: `calc(${k?.width || "100vw"} / 2.717)`,
                ...ut(o),
                positionX: "center",
                positionY: "center",
              },
              className: "framer-9064ow",
              "data-framer-name": "Icon",
              layoutDependency: S,
              layoutId: "Wu5n36_tn",
              ...gt(
                {
                  TMvMhHiAG: {
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: B(
                        (k?.y || 0) + (0 + ((k?.height || 144) - 0 - 64) / 2)
                      ),
                      pixelHeight: 48,
                      pixelWidth: 55,
                      sizes: `calc(${k?.width || "100vw"} / 2.25)`,
                      ...ut(o),
                      positionX: "center",
                      positionY: "center",
                    },
                  },
                },
                x,
                O
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Za = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ADLrG.framer-12jwnqc, .framer-ADLrG .framer-12jwnqc { display: block; }",
    ".framer-ADLrG.framer-17prf89 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 144px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 144px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ADLrG .framer-9064ow { aspect-ratio: 1.127659574468085 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 47px); position: relative; width: 37%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ADLrG.framer-17prf89 { gap: 0px; } .framer-ADLrG.framer-17prf89 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-ADLrG.framer-17prf89 > :first-child { margin-left: 0px; } .framer-ADLrG.framer-17prf89 > :last-child { margin-right: 0px; } }",
    ".framer-ADLrG.framer-v-zod73o.framer-17prf89 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 144px); }",
    ".framer-ADLrG.framer-v-zod73o .framer-9064ow { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 64px); width: 44%; }",
    '.framer-ADLrG[data-border="true"]::after, .framer-ADLrG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Xe = ee(Pa, Za, "framer-ADLrG"),
  Be = Xe;
Xe.displayName = "Icon Box";
Xe.defaultProps = { height: 144, width: 144 };
$(Xe, {
  variant: {
    options: ["JwEBX2eQj", "TMvMhHiAG"],
    optionTitles: ["Desktop", "Variant 2"],
    title: "Variant",
    type: E.Enum,
  },
  IS7oaphFo: {
    defaultValue: "rgba(5, 0, 13, 0.12)",
    title: "Background Color",
    type: E.Color,
  },
  VmubYJzin: {
    __defaultAssetReference:
      "data:framer/asset-reference,bH3XcIVWVCDFck5SDQOhw7xVQQ.svg?originalFilename=Filter+1.svg&preferredSize=auto",
    title: "Icon",
    type: E.ResponsiveImage,
  },
});
re(Xe, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var Wa = ["u8ncKtQTv", "r4AVHDPMX"],
  qa = "framer-b6GLm",
  Ya = { r4AVHDPMX: "framer-v-fb9cd5", u8ncKtQTv: "framer-v-4o4j23" };
function Xa(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var Ja = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Qa = ({ value: r, children: t }) => {
    let n = ie(P),
      i = r ?? n.transition,
      l = Q(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(P.Provider, { value: l, children: t });
  },
  Ka = d.create(f),
  $a = { "Variant 1": "u8ncKtQTv", "Variant 2": "r4AVHDPMX" },
  e1 = ({ height: r, id: t, link: n, width: i, ...l }) => {
    var m, c;
    return {
      ...l,
      Uv_dL2Q0B: n ?? l.Uv_dL2Q0B,
      variant:
        (c = (m = $a[l.variant]) !== null && m !== void 0 ? m : l.variant) !==
          null && c !== void 0
          ? c
          : "u8ncKtQTv",
    };
  },
  r1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  t1 = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: u,
        Uv_dL2Q0B: g,
        ...o
      } = e1(r),
      {
        baseVariant: C,
        classNames: x,
        clearLoadingGesture: I,
        gestureHandlers: w,
        gestureVariant: L,
        isLoading: O,
        setGestureState: b,
        setVariant: V,
        variants: _,
      } = oe({
        cycleOrder: Wa,
        defaultVariant: "u8ncKtQTv",
        variant: u,
        variantClassNames: Ya,
      }),
      z = r1(r, _),
      S = T(null),
      A = J(),
      N = [],
      v = ne();
    return e(W, {
      id: c ?? A,
      children: e(Ka, {
        animate: _,
        initial: !1,
        children: e(Qa, {
          value: Ja,
          children: e(Ne, {
            href: g,
            nodeId: "u8ncKtQTv",
            smoothScroll: !0,
            children: e(U, {
              ...o,
              ...w,
              as: "a",
              background: {
                alt: "",
                fit: "fill",
                loading: B(v?.y || 0),
                pixelHeight: 51,
                pixelWidth: 237,
                src: "https://framerusercontent.com/images/rCxyVJdX1WQxFnSAQVzmZ81kFQ.svg",
              },
              className: `${Y(qa, ...N, "framer-4o4j23", m, x)} framer-1gtgb0i`,
              "data-framer-name": "Variant 1",
              layoutDependency: z,
              layoutId: "u8ncKtQTv",
              ref: t ?? S,
              style: { ...l },
              ...Xa(
                {
                  r4AVHDPMX: {
                    "data-framer-name": "Variant 2",
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: B(v?.y || 0),
                      pixelHeight: 22,
                      pixelWidth: 149,
                      src: "https://framerusercontent.com/images/Opt8rXIhUxA68m3IlTYgAPH9idE.svg",
                    },
                  },
                },
                C,
                L
              ),
            }),
          }),
        }),
      }),
    });
  }),
  a1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-b6GLm.framer-1gtgb0i, .framer-b6GLm .framer-1gtgb0i { display: block; }",
    ".framer-b6GLm.framer-4o4j23 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 51px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 237px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-b6GLm.framer-4o4j23 { gap: 0px; } .framer-b6GLm.framer-4o4j23 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-b6GLm.framer-4o4j23 > :first-child { margin-left: 0px; } .framer-b6GLm.framer-4o4j23 > :last-child { margin-right: 0px; } }",
    ".framer-b6GLm.framer-v-fb9cd5.framer-4o4j23 { aspect-ratio: 7.4 / 1; height: var(--framer-aspect-ratio-supported, 20px); width: 148px; }",
  ],
  Je = ee(t1, a1, "framer-b6GLm"),
  Fe = Je;
Je.displayName = "Logo";
Je.defaultProps = { height: 51, width: 237 };
$(Je, {
  variant: {
    options: ["u8ncKtQTv", "r4AVHDPMX"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: E.Enum,
  },
  Uv_dL2Q0B: { title: "Link", type: E.Link },
});
re(Je, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var i1 = ["CKB0q5b3O", "rPwuX_L2P"],
  n1 = "framer-BWSkY",
  o1 = { CKB0q5b3O: "framer-v-g18v41", rPwuX_L2P: "framer-v-heph6f" };
function l1(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var s1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  f1 = ({ value: r, children: t }) => {
    let n = ie(P),
      i = r ?? n.transition,
      l = Q(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(P.Provider, { value: l, children: t });
  },
  m1 = d.create(f),
  c1 = { "Variant 1": "CKB0q5b3O", "Variant 2": "rPwuX_L2P" },
  d1 = ({ height: r, id: t, link: n, text: i, width: l, ...m }) => {
    var c, u, g;
    return {
      ...m,
      J2lsbMWlm:
        (c = i ?? m.J2lsbMWlm) !== null && c !== void 0 ? c : "Get Started",
      KJ_tI1NgS: n ?? m.KJ_tI1NgS,
      variant:
        (g = (u = c1[m.variant]) !== null && u !== void 0 ? u : m.variant) !==
          null && g !== void 0
          ? g
          : "CKB0q5b3O",
    };
  },
  p1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  h1 = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: u,
        J2lsbMWlm: g,
        KJ_tI1NgS: o,
        ...C
      } = d1(r),
      {
        baseVariant: x,
        classNames: I,
        clearLoadingGesture: w,
        gestureHandlers: L,
        gestureVariant: O,
        isLoading: b,
        setGestureState: V,
        setVariant: _,
        variants: z,
      } = oe({
        cycleOrder: i1,
        defaultVariant: "CKB0q5b3O",
        variant: u,
        variantClassNames: o1,
      }),
      S = p1(r, z),
      A = T(null),
      N = J(),
      v = [],
      k = ne();
    return e(W, {
      id: c ?? N,
      children: e(m1, {
        animate: z,
        initial: !1,
        children: e(f1, {
          value: s1,
          children: e(Ne, {
            href: o,
            nodeId: "CKB0q5b3O",
            children: e(d.a, {
              ...C,
              ...L,
              className: `${Y(n1, ...v, "framer-g18v41", m, I)} framer-13etzj`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              layoutDependency: S,
              layoutId: "CKB0q5b3O",
              ref: t ?? A,
              style: {
                "--border-bottom-width": "1px",
                "--border-color": "rgba(255, 255, 255, 0.12)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backdropFilter: "blur(24px)",
                background:
                  "linear-gradient(270deg, rgba(11, 11, 14, 0.1) 0%, rgba(11, 11, 14, 0.1) 100%)",
                backgroundColor: "rgba(11, 11, 14, 0.1)",
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                WebkitBackdropFilter: "blur(24px)",
                ...l,
              },
              variants: {
                rPwuX_L2P: {
                  "--border-bottom-width": "2px",
                  "--border-color": "rgba(225, 150, 37, 0.12)",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-top-width": "2px",
                  background:
                    "linear-gradient(270deg, rgb(166, 83, 15) 0%, rgb(230, 181, 8) 100%)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                },
              },
              ...l1({ rPwuX_L2P: { "data-framer-name": "Variant 2" } }, x, O),
              children: e(p, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(d.h1, {
                    style: {
                      "--font-selector": "SW50ZXItTWVkaXVt",
                      "--framer-font-family":
                        '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "18px",
                      "--framer-font-weight": "500",
                      "--framer-letter-spacing": "0px",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-gdpscs, rgb(255, 255, 255))",
                    },
                    children: "Get Started",
                  }),
                }),
                className: "framer-1b9j1mp",
                fonts: ["Inter-Medium"],
                layoutDependency: S,
                layoutId: "PJbHp0X7c",
                style: {
                  "--extracted-gdpscs": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--framer-paragraph-spacing": "0px",
                },
                text: g,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  g1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-BWSkY.framer-13etzj, .framer-BWSkY .framer-13etzj { display: block; }",
    ".framer-BWSkY.framer-g18v41 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-BWSkY .framer-1b9j1mp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BWSkY.framer-g18v41 { gap: 0px; } .framer-BWSkY.framer-g18v41 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-BWSkY.framer-g18v41 > :first-child { margin-left: 0px; } .framer-BWSkY.framer-g18v41 > :last-child { margin-right: 0px; } }",
    '.framer-BWSkY[data-border="true"]::after, .framer-BWSkY [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Qe = ee(h1, g1, "framer-BWSkY"),
  ue = Qe;
Qe.displayName = "Button";
Qe.defaultProps = { height: 54, width: 162 };
$(Qe, {
  variant: {
    options: ["CKB0q5b3O", "rPwuX_L2P"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: E.Enum,
  },
  J2lsbMWlm: {
    defaultValue: "Get Started",
    displayTextArea: !1,
    title: "Text",
    type: E.String,
  },
  KJ_tI1NgS: { title: "Link", type: E.Link },
});
re(
  Qe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var u1 = { BdZouIuwn: { hover: !0 }, iVNsVpudA: { hover: !0 } },
  x1 = ["BdZouIuwn", "iVNsVpudA"],
  C1 = "framer-W08Yv",
  v1 = { BdZouIuwn: "framer-v-2soxd0", iVNsVpudA: "framer-v-11urhdy" };
function xt(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var w1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  y1 = ({ value: r, children: t }) => {
    let n = ie(P),
      i = r ?? n.transition,
      l = Q(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(P.Provider, { value: l, children: t });
  },
  b1 = d.create(f),
  E1 = { "Variant 1": "BdZouIuwn", "Variant 2": "iVNsVpudA" },
  U1 = ({ height: r, id: t, link: n, text: i, width: l, ...m }) => {
    var c, u, g;
    return {
      ...m,
      JrV8YSXQf:
        (c = i ?? m.JrV8YSXQf) !== null && c !== void 0
          ? c
          : "120+ Music ai Avatars",
      NIwyxpQjh: n ?? m.NIwyxpQjh,
      variant:
        (g = (u = E1[m.variant]) !== null && u !== void 0 ? u : m.variant) !==
          null && g !== void 0
          ? g
          : "BdZouIuwn",
    };
  },
  _1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  k1 = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: u,
        JrV8YSXQf: g,
        NIwyxpQjh: o,
        ...C
      } = U1(r),
      {
        baseVariant: x,
        classNames: I,
        clearLoadingGesture: w,
        gestureHandlers: L,
        gestureVariant: O,
        isLoading: b,
        setGestureState: V,
        setVariant: _,
        variants: z,
      } = oe({
        cycleOrder: x1,
        defaultVariant: "BdZouIuwn",
        enabledGestures: u1,
        variant: u,
        variantClassNames: v1,
      }),
      S = _1(r, z),
      A = T(null),
      N = J(),
      v = [],
      k = ne();
    return e(W, {
      id: c ?? N,
      children: e(b1, {
        animate: z,
        initial: !1,
        children: e(y1, {
          value: w1,
          children: e(Ne, {
            href: o,
            nodeId: "BdZouIuwn",
            children: e(d.a, {
              ...C,
              ...L,
              className: `${Y(C1, ...v, "framer-2soxd0", m, I)} framer-qalm0t`,
              "data-framer-name": "Variant 1",
              layoutDependency: S,
              layoutId: "BdZouIuwn",
              ref: t ?? A,
              style: { ...l },
              ...xt(
                {
                  "BdZouIuwn-hover": { "data-framer-name": void 0 },
                  "iVNsVpudA-hover": { "data-framer-name": void 0 },
                  iVNsVpudA: { "data-framer-name": "Variant 2" },
                },
                x,
                O
              ),
              children: e(p, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(d.h1, {
                    style: {
                      "--font-selector":
                        "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBSZWd1bGFy",
                      "--framer-font-family":
                        '"Helvetica Now Display Regular", "Helvetica Now Display Regular Placeholder", sans-serif',
                      "--framer-font-size": "22px",
                      "--framer-letter-spacing": "0px",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--extracted-gdpscs, rgba(255, 255, 255, 0.5))",
                    },
                    children: "120+ Music ai Avatars",
                  }),
                }),
                className: "framer-19lhd5z",
                fonts: ["CUSTOM;Helvetica Now Display Regular"],
                layoutDependency: S,
                layoutId: "OqCY2p_1b",
                style: {
                  "--extracted-gdpscs": "rgba(255, 255, 255, 0.5)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--framer-paragraph-spacing": "0px",
                },
                text: g,
                variants: {
                  "BdZouIuwn-hover": {
                    "--extracted-gdpscs": "rgb(230, 181, 8)",
                  },
                  "iVNsVpudA-hover": {
                    "--extracted-gdpscs": "rgb(230, 181, 8)",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...xt(
                  {
                    "BdZouIuwn-hover": {
                      children: e(f, {
                        children: e(d.h1, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBSZWd1bGFy",
                            "--framer-font-family":
                              '"Helvetica Now Display Regular", "Helvetica Now Display Regular Placeholder", sans-serif',
                            "--framer-font-size": "22px",
                            "--framer-letter-spacing": "0px",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-gdpscs, rgb(230, 181, 8))",
                          },
                          children: "120+ Music ai Avatars",
                        }),
                      }),
                    },
                    "iVNsVpudA-hover": {
                      children: e(f, {
                        children: e(d.h1, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBSZWd1bGFy",
                            "--framer-font-family":
                              '"Helvetica Now Display Regular", "Helvetica Now Display Regular Placeholder", sans-serif',
                            "--framer-letter-spacing": "0px",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-gdpscs, rgb(230, 181, 8))",
                          },
                          children: "120+ Music ai Avatars",
                        }),
                      }),
                    },
                    iVNsVpudA: {
                      children: e(f, {
                        children: e(d.h1, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBSZWd1bGFy",
                            "--framer-font-family":
                              '"Helvetica Now Display Regular", "Helvetica Now Display Regular Placeholder", sans-serif',
                            "--framer-letter-spacing": "0px",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-gdpscs, rgba(255, 255, 255, 0.5))",
                          },
                          children: "120+ Music ai Avatars",
                        }),
                      }),
                    },
                  },
                  x,
                  O
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  z1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-W08Yv.framer-qalm0t, .framer-W08Yv .framer-qalm0t { display: block; }",
    ".framer-W08Yv.framer-2soxd0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-W08Yv .framer-19lhd5z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-W08Yv.framer-2soxd0 { gap: 0px; } .framer-W08Yv.framer-2soxd0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-W08Yv.framer-2soxd0 > :first-child { margin-left: 0px; } .framer-W08Yv.framer-2soxd0 > :last-child { margin-right: 0px; } }",
  ],
  Ke = ee(k1, z1, "framer-W08Yv"),
  j = Ke;
Ke.displayName = "Link";
Ke.defaultProps = { height: 26, width: 200 };
$(Ke, {
  variant: {
    options: ["BdZouIuwn", "iVNsVpudA"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: E.Enum,
  },
  JrV8YSXQf: {
    defaultValue: "120+ Music ai Avatars",
    displayTextArea: !1,
    title: "Text",
    type: E.String,
  },
  NIwyxpQjh: { title: "Link", type: E.Link },
});
re(
  Ke,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Helvetica Now Display Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/aF4jiasJv9sAvyjG09EEw9px8.woff2",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var M1 = le(Fe),
  B1 = le(j),
  I1 = le(ue),
  S1 = [
    "sHu_lahHE",
    "Ki3cuZDYJ",
    "QB1Mp2ngR",
    "Je3s6f7e0",
    "LcEesULZX",
    "NQn7mnz8_",
  ],
  L1 = "framer-MT8AP",
  V1 = {
    Je3s6f7e0: "framer-v-hbo1y0",
    Ki3cuZDYJ: "framer-v-8a98yg",
    LcEesULZX: "framer-v-23oz6b",
    NQn7mnz8_: "framer-v-1y6zd5z",
    QB1Mp2ngR: "framer-v-10eyo71",
    sHu_lahHE: "framer-v-xgztlj",
  };
function de(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var N1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  A1 = ({ value: r, children: t }) => {
    let n = ie(P),
      i = r ?? n.transition,
      l = Q(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(P.Provider, { value: l, children: t });
  },
  T1 = d.create(f),
  j1 = {
    "Phone Close": "LcEesULZX",
    "Phone Open": "NQn7mnz8_",
    "Tablet Close": "QB1Mp2ngR",
    "Tablet Open": "Je3s6f7e0",
    Desktop: "sHu_lahHE",
    Laptop: "Ki3cuZDYJ",
  },
  F1 = ({ height: r, id: t, width: n, ...i }) => {
    var l, m;
    return {
      ...i,
      variant:
        (m = (l = j1[i.variant]) !== null && l !== void 0 ? l : i.variant) !==
          null && m !== void 0
          ? m
          : "sHu_lahHE",
    };
  },
  R1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  D1 = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      { style: l, className: m, layoutId: c, variant: u, ...g } = F1(r),
      {
        baseVariant: o,
        classNames: C,
        clearLoadingGesture: x,
        gestureHandlers: I,
        gestureVariant: w,
        isLoading: L,
        setGestureState: O,
        setVariant: b,
        variants: V,
      } = oe({
        cycleOrder: S1,
        defaultVariant: "sHu_lahHE",
        variant: u,
        variantClassNames: V1,
      }),
      _ = R1(r, V),
      { activeVariantCallback: z, delay: S } = Ae(o),
      A = z(async (...Z) => {
        b("Je3s6f7e0");
      }),
      N = z(async (...Z) => {
        b("QB1Mp2ngR");
      }),
      v = z(async (...Z) => {
        b("NQn7mnz8_");
      }),
      k = z(async (...Z) => {
        b("LcEesULZX");
      }),
      se = T(null),
      pe = ar(),
      M = () =>
        !!["QB1Mp2ngR", "Je3s6f7e0", "LcEesULZX", "NQn7mnz8_"].includes(o),
      fe = () => !["QB1Mp2ngR", "LcEesULZX"].includes(o),
      Se = J(),
      we = [],
      a = ne();
    return e(W, {
      id: c ?? Se,
      children: e(T1, {
        animate: V,
        initial: !1,
        children: e(A1, {
          value: N1,
          children: e(d.header, {
            ...g,
            ...I,
            className: Y(L1, ...we, "framer-xgztlj", m, C),
            "data-framer-name": "Desktop",
            layoutDependency: _,
            layoutId: "sHu_lahHE",
            ref: t ?? se,
            style: { ...l },
            ...de(
              {
                Je3s6f7e0: { "data-framer-name": "Tablet Open" },
                Ki3cuZDYJ: { "data-framer-name": "Laptop" },
                LcEesULZX: { "data-framer-name": "Phone Close" },
                NQn7mnz8_: { "data-framer-name": "Phone Open" },
                QB1Mp2ngR: { "data-framer-name": "Tablet Close" },
              },
              o,
              w
            ),
            children: s(d.div, {
              className: "framer-18fr5xy",
              "data-framer-name": "Container",
              layoutDependency: _,
              layoutId: "UDVLJsKdb",
              children: [
                s(d.div, {
                  className: "framer-hu5f18",
                  "data-framer-name": "Logo",
                  layoutDependency: _,
                  layoutId: "YhdPFB4Rw",
                  children: [
                    e(ir, {
                      links: [
                        {
                          href: { webPageId: "augiA20Il" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "augiA20Il" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "augiA20Il" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "augiA20Il" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "augiA20Il" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "augiA20Il" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (Z) =>
                        e(y, {
                          height: 51,
                          y:
                            (a?.y || 0) +
                            20 +
                            (((a?.height || 94) - 40 - 54) / 2 + 0 + 0) +
                            1.5 +
                            0,
                          ...de(
                            {
                              Je3s6f7e0: {
                                y:
                                  (a?.y || 0) +
                                  20 +
                                  (((a?.height || 80) - 40 - 51) / 2 + 0 + 0) +
                                  0 +
                                  0,
                              },
                              LcEesULZX: {
                                y:
                                  (a?.y || 0) +
                                  15 +
                                  (((a?.height || 70) - 30 - 51) / 2 + 0 + 0) +
                                  0 +
                                  0,
                              },
                              NQn7mnz8_: {
                                y:
                                  (a?.y || 0) +
                                  15 +
                                  (((a?.height || 70) - 30 - 51) / 2 + 0 + 0) +
                                  0 +
                                  0,
                              },
                              QB1Mp2ngR: {
                                y:
                                  (a?.y || 0) +
                                  20 +
                                  (((a?.height || 80) - 40 - 51) / 2 + 0 + 0) +
                                  0 +
                                  0,
                              },
                            },
                            o,
                            w
                          ),
                          children: e(d.div, {
                            className: "framer-jxzuho-container",
                            layoutDependency: _,
                            layoutId: "AWdJzmMGI-container",
                            children: e(Fe, {
                              height: "100%",
                              id: "AWdJzmMGI",
                              layoutId: "AWdJzmMGI",
                              Uv_dL2Q0B: Z[0],
                              variant: "r4AVHDPMX",
                              width: "100%",
                              ...de(
                                {
                                  Je3s6f7e0: { Uv_dL2Q0B: Z[3] },
                                  Ki3cuZDYJ: { Uv_dL2Q0B: Z[1] },
                                  LcEesULZX: { Uv_dL2Q0B: Z[4] },
                                  NQn7mnz8_: { Uv_dL2Q0B: Z[5] },
                                  QB1Mp2ngR: { Uv_dL2Q0B: Z[2] },
                                },
                                o,
                                w
                              ),
                            }),
                          }),
                        }),
                    }),
                    M() &&
                      e(d.div, {
                        className: "framer-j7aklv",
                        "data-framer-name": "Trigger",
                        layoutDependency: _,
                        layoutId: "Nc5olmLpn",
                        ...de(
                          {
                            Je3s6f7e0: { "data-highlight": !0, onTap: N },
                            LcEesULZX: { "data-highlight": !0, onTap: v },
                            NQn7mnz8_: { "data-highlight": !0, onTap: k },
                            QB1Mp2ngR: { "data-highlight": !0, onTap: A },
                          },
                          o,
                          w
                        ),
                        children: e(U, {
                          background: {
                            alt: "",
                            fit: "fill",
                            pixelHeight: 24,
                            pixelWidth: 24,
                            src: "https://framerusercontent.com/images/Ftv2Y7JE7wRw9Z51i5zaRSuc.svg",
                          },
                          className: "framer-aqfav8",
                          "data-framer-name": "Icon",
                          layoutDependency: _,
                          layoutId: "FtSmM_1cg",
                          ...de(
                            {
                              Je3s6f7e0: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: B(
                                    (a?.y || 0) +
                                      20 +
                                      (((a?.height || 80) - 40 - 51) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      5.5 +
                                      8
                                  ),
                                  pixelHeight: 24,
                                  pixelWidth: 24,
                                  src: "https://framerusercontent.com/images/ZEJ5tWh3dOzUDYZPx45lneBFqI.svg",
                                },
                              },
                              LcEesULZX: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: B(
                                    (a?.y || 0) +
                                      15 +
                                      (((a?.height || 70) - 30 - 51) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      5.5 +
                                      8
                                  ),
                                  pixelHeight: 24,
                                  pixelWidth: 24,
                                  src: "https://framerusercontent.com/images/Ftv2Y7JE7wRw9Z51i5zaRSuc.svg",
                                },
                              },
                              NQn7mnz8_: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: B(
                                    (a?.y || 0) +
                                      15 +
                                      (((a?.height || 70) - 30 - 51) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      5.5 +
                                      8
                                  ),
                                  pixelHeight: 24,
                                  pixelWidth: 24,
                                  src: "https://framerusercontent.com/images/ZEJ5tWh3dOzUDYZPx45lneBFqI.svg",
                                },
                              },
                              QB1Mp2ngR: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: B(
                                    (a?.y || 0) +
                                      20 +
                                      (((a?.height || 80) - 40 - 51) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      5.5 +
                                      8
                                  ),
                                  pixelHeight: 24,
                                  pixelWidth: 24,
                                  src: "https://framerusercontent.com/images/Ftv2Y7JE7wRw9Z51i5zaRSuc.svg",
                                },
                              },
                            },
                            o,
                            w
                          ),
                        }),
                      }),
                  ],
                }),
                fe() &&
                  s(d.div, {
                    className: "framer-v8pbq3",
                    "data-framer-name": "Nav Content",
                    layoutDependency: _,
                    layoutId: "MVLbSRsKr",
                    style: {
                      backdropFilter: "none",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      boxShadow: "none",
                      WebkitBackdropFilter: "none",
                    },
                    variants: {
                      Je3s6f7e0: {
                        backdropFilter: "blur(24px)",
                        backgroundColor: "rgba(23, 23, 23, 0.1)",
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        boxShadow:
                          "inset 0px 10px 48px 0px rgba(168, 168, 168, 0.3)",
                        WebkitBackdropFilter: "blur(24px)",
                      },
                      NQn7mnz8_: {
                        backdropFilter: "blur(24px)",
                        backgroundColor: "rgba(23, 23, 23, 0.1)",
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        boxShadow:
                          "inset 0px 10px 48px 0px rgba(168, 168, 168, 0.3)",
                        WebkitBackdropFilter: "blur(24px)",
                      },
                    },
                    children: [
                      s(d.div, {
                        className: "framer-1qehtg5",
                        "data-framer-name": "Menu Wrapper",
                        layoutDependency: _,
                        layoutId: "VfTqeJOxg",
                        children: [
                          e(y, {
                            height: 26,
                            y:
                              (a?.y || 0) +
                              20 +
                              (((a?.height || 94) - 40 - 54) / 2 + 0 + 0) +
                              0 +
                              14 +
                              0,
                            ...de(
                              {
                                Je3s6f7e0: {
                                  y:
                                    (a?.y || 0) +
                                    20 +
                                    (((a?.height || 80) - 40 - 51) / 2 +
                                      0 +
                                      0) +
                                    80 +
                                    50 +
                                    0 +
                                    0 +
                                    0,
                                },
                                NQn7mnz8_: {
                                  y:
                                    (a?.y || 0) +
                                    15 +
                                    (((a?.height || 70) - 30 - 51) / 2 +
                                      0 +
                                      0) +
                                    65 +
                                    50 +
                                    0 +
                                    0 +
                                    0,
                                },
                              },
                              o,
                              w
                            ),
                            children: e(d.div, {
                                className: "framer-1s8szhb-container",
                                layoutDependency: _,
                                layoutId: "rMx4msbi1-container",
                                children: e('a', { 
                                    href: "https://rhythmix-ai-1.gitbook.io/rhythmix",
                                    target: "_blank", 
                                    rel: "noopener noreferrer", 
                                    style: { textDecoration: 'none', color: 'inherit' }, 
                                    children: e(j, {
                                        height: "100%",
                                        id: "rMx4msbi1",
                                        JrV8YSXQf: "Documentation",
                                        layoutId: "rMx4msbi1",
                                        variant: "iVNsVpudA",
                                        width: "100%",
                                    }),
                                }),
                            }),
                          }),
                          e(y, {
                            height: 26,
                            y:
                              (a?.y || 0) +
                              20 +
                              (((a?.height || 94) - 40 - 54) / 2 + 0 + 0) +
                              0 +
                              14 +
                              0,
                            ...de(
                              {
                                Je3s6f7e0: {
                                  y:
                                    (a?.y || 0) +
                                    20 +
                                    (((a?.height || 80) - 40 - 51) / 2 +
                                      0 +
                                      0) +
                                    80 +
                                    50 +
                                    0 +
                                    0 +
                                    84,
                                },
                                NQn7mnz8_: {
                                  y:
                                    (a?.y || 0) +
                                    15 +
                                    (((a?.height || 70) - 30 - 51) / 2 +
                                      0 +
                                      0) +
                                    65 +
                                    50 +
                                    0 +
                                    0 +
                                    84,
                                },
                              },
                              o,
                              w
                            ),
                            children: e(d.div, {
                                className: "framer-1s8szhb-container",
                                layoutDependency: _,
                                layoutId: "rMx4msbi1-container",
                                children: e('a', { 
                                    href: "https://github.com/Rhythmix-AI/Rhythmix",
                                    target: "_blank", 
                                    rel: "noopener noreferrer", 
                                    style: { textDecoration: 'none', color: 'inherit' }, 
                                    children: e(j, {
                                        height: "100%",
                                        id: "rMx4msbi1",
                                        JrV8YSXQf: "Github",
                                        layoutId: "rMx4msbi1",
                                        variant: "iVNsVpudA",
                                        width: "100%",
                                    }),
                                }),
                            }),
                          }),
                          e(y, {
                            height: 26,
                            y:
                              (a?.y || 0) +
                              20 +
                              (((a?.height || 94) - 40 - 54) / 2 + 0 + 0) +
                              0 +
                              14 +
                              0,
                            ...de(
                              {
                                Je3s6f7e0: {
                                  y:
                                    (a?.y || 0) +
                                    20 +
                                    (((a?.height || 80) - 40 - 51) / 2 +
                                      0 +
                                      0) +
                                    80 +
                                    50 +
                                    0 +
                                    0 +
                                    126,
                                },
                                NQn7mnz8_: {
                                  y:
                                    (a?.y || 0) +
                                    15 +
                                    (((a?.height || 70) - 30 - 51) / 2 +
                                      0 +
                                      0) +
                                    65 +
                                    50 +
                                    0 +
                                    0 +
                                    126,
                                },
                              },
                              o,
                              w
                            ),
                            children: e(d.div, {
                                className: "framer-1s8szhb-container",
                                layoutDependency: _,
                                layoutId: "rMx4msbi1-container",
                                children: e('a', { 
                                    href: "https://twitter.com/RHYTHMIX_AI",
                                    target: "_blank", 
                                    rel: "noopener noreferrer", 
                                    style: { textDecoration: 'none', color: 'inherit' }, 
                                    children: e(j, {
                                        height: "100%",
                                        id: "rMx4msbi1",
                                        JrV8YSXQf: "Twitter",
                                        layoutId: "rMx4msbi1",
                                        variant: "iVNsVpudA",
                                        width: "100%",
                                    }),
                                }),
                            }),
                          }),
                          e(y, {
                            height: 26,
                            y:
                              (a?.y || 0) +
                              20 +
                              (((a?.height || 94) - 40 - 54) / 2 + 0 + 0) +
                              0 +
                              14 +
                              0,
                            ...de(
                              {
                                Je3s6f7e0: {
                                  y:
                                    (a?.y || 0) +
                                    20 +
                                    (((a?.height || 80) - 40 - 51) / 2 +
                                      0 +
                                      0) +
                                    80 +
                                    50 +
                                    0 +
                                    0 +
                                    168,
                                },
                                NQn7mnz8_: {
                                  y:
                                    (a?.y || 0) +
                                    15 +
                                    (((a?.height || 70) - 30 - 51) / 2 +
                                      0 +
                                      0) +
                                    65 +
                                    50 +
                                    0 +
                                    0 +
                                    168,
                                },
                              },
                              o,
                              w
                            ),
                          }),
                        ],
                      }),
                      e(y, {
                        height: 54,
                        y:
                          (a?.y || 0) +
                          20 +
                          (((a?.height || 94) - 40 - 54) / 2 + 0 + 0) +
                          0 +
                          0,
                        ...de(
                          {
                            Je3s6f7e0: {
                              y:
                                (a?.y || 0) +
                                20 +
                                (((a?.height || 80) - 40 - 51) / 2 + 0 + 0) +
                                80 +
                                50 +
                                272,
                            },
                            NQn7mnz8_: {
                              y:
                                (a?.y || 0) +
                                15 +
                                (((a?.height || 70) - 30 - 51) / 2 + 0 + 0) +
                                65 +
                                50 +
                                272,
                            },
                          },
                          o,
                          w
                        ),
                        children: e(d.div, {
                            className: "framer-1bekb3g-container",
                            layoutDependency: _,
                            layoutId: "QvdRd9wBK-container",
                            children: e('a', { 
                                href: "https://pump.fun",
                                target: "_blank", 
                                rel: "noopener noreferrer", 
                                style: { textDecoration: 'none', color: 'inherit' }, 
                                children: e(ue, {
                                    height: "100%",
                                    id: "QvdRd9wBK",
                                    J2lsbMWlm: "PUMP.FUN",
                                    layoutId: "QvdRd9wBK",
                                    variant: "rPwuX_L2P",
                                    width: "100%",
                                }),
                            }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  O1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-MT8AP.framer-1e6jn4y, .framer-MT8AP .framer-1e6jn4y { display: block; }",
    ".framer-MT8AP.framer-xgztlj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 30px 20px 30px; position: relative; width: 1600px; }",
    ".framer-MT8AP .framer-18fr5xy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1520px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-MT8AP .framer-hu5f18 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-MT8AP .framer-jxzuho-container, .framer-MT8AP .framer-w3zq02-container, .framer-MT8AP .framer-1tf4pl1-container, .framer-MT8AP .framer-4gyq6-container, .framer-MT8AP .framer-1s8szhb-container, .framer-MT8AP .framer-1it80k5-container, .framer-MT8AP .framer-9cp7qv-container, .framer-MT8AP .framer-1bekb3g-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-MT8AP .framer-j7aklv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 40px; }",
    ".framer-MT8AP .framer-aqfav8 { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 200px); position: relative; width: 1px; }",
    ".framer-MT8AP .framer-v8pbq3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-MT8AP .framer-1qehtg5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-MT8AP.framer-xgztlj, .framer-MT8AP .framer-18fr5xy, .framer-MT8AP .framer-hu5f18, .framer-MT8AP .framer-j7aklv, .framer-MT8AP .framer-1qehtg5 { gap: 0px; } .framer-MT8AP.framer-xgztlj > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-MT8AP.framer-xgztlj > :first-child { margin-top: 0px; } .framer-MT8AP.framer-xgztlj > :last-child { margin-bottom: 0px; } .framer-MT8AP .framer-18fr5xy > *, .framer-MT8AP .framer-hu5f18 > *, .framer-MT8AP .framer-j7aklv > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-MT8AP .framer-18fr5xy > :first-child, .framer-MT8AP .framer-hu5f18 > :first-child, .framer-MT8AP .framer-j7aklv > :first-child, .framer-MT8AP .framer-1qehtg5 > :first-child { margin-left: 0px; } .framer-MT8AP .framer-18fr5xy > :last-child, .framer-MT8AP .framer-hu5f18 > :last-child, .framer-MT8AP .framer-j7aklv > :last-child, .framer-MT8AP .framer-1qehtg5 > :last-child { margin-right: 0px; } .framer-MT8AP .framer-1qehtg5 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } }",
    ".framer-MT8AP.framer-v-8a98yg.framer-xgztlj { width: 1200px; }",
    ".framer-MT8AP.framer-v-8a98yg .framer-1qehtg5 { gap: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-MT8AP.framer-v-8a98yg .framer-1qehtg5 { gap: 0px; } .framer-MT8AP.framer-v-8a98yg .framer-1qehtg5 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-MT8AP.framer-v-8a98yg .framer-1qehtg5 > :first-child { margin-left: 0px; } .framer-MT8AP.framer-v-8a98yg .framer-1qehtg5 > :last-child { margin-right: 0px; } }",
    ".framer-MT8AP.framer-v-10eyo71.framer-xgztlj, .framer-MT8AP.framer-v-hbo1y0.framer-xgztlj { overflow: visible; width: 800px; }",
    ".framer-MT8AP.framer-v-10eyo71 .framer-18fr5xy, .framer-MT8AP.framer-v-hbo1y0 .framer-18fr5xy, .framer-MT8AP.framer-v-23oz6b .framer-18fr5xy, .framer-MT8AP.framer-v-1y6zd5z .framer-18fr5xy { overflow: visible; }",
    ".framer-MT8AP.framer-v-10eyo71 .framer-hu5f18, .framer-MT8AP.framer-v-hbo1y0 .framer-hu5f18, .framer-MT8AP.framer-v-23oz6b .framer-hu5f18, .framer-MT8AP.framer-v-1y6zd5z .framer-hu5f18 { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; }",
    ".framer-MT8AP.framer-v-10eyo71 .framer-j7aklv, .framer-MT8AP.framer-v-hbo1y0 .framer-j7aklv, .framer-MT8AP.framer-v-23oz6b .framer-j7aklv, .framer-MT8AP.framer-v-1y6zd5z .framer-j7aklv { cursor: pointer; }",
    ".framer-MT8AP.framer-v-10eyo71 .framer-aqfav8, .framer-MT8AP.framer-v-hbo1y0 .framer-aqfav8, .framer-MT8AP.framer-v-23oz6b .framer-aqfav8, .framer-MT8AP.framer-v-1y6zd5z .framer-aqfav8 { height: var(--framer-aspect-ratio-supported, 40px); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-MT8AP.framer-v-10eyo71 .framer-hu5f18 { gap: 0px; } .framer-MT8AP.framer-v-10eyo71 .framer-hu5f18 > *, .framer-MT8AP.framer-v-10eyo71 .framer-hu5f18 > :first-child, .framer-MT8AP.framer-v-10eyo71 .framer-hu5f18 > :last-child { margin: 0px; } }",
    ".framer-MT8AP.framer-v-hbo1y0 .framer-v8pbq3 { flex: none; flex-direction: column; gap: 36px; justify-content: center; padding: 50px 3px 30px 0px; position: absolute; right: 0px; top: 80px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-MT8AP.framer-v-hbo1y0 .framer-1qehtg5, .framer-MT8AP.framer-v-1y6zd5z .framer-1qehtg5 { flex: none; flex-direction: column; gap: 16px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-MT8AP.framer-v-hbo1y0 .framer-hu5f18, .framer-MT8AP.framer-v-hbo1y0 .framer-v8pbq3, .framer-MT8AP.framer-v-hbo1y0 .framer-1qehtg5 { gap: 0px; } .framer-MT8AP.framer-v-hbo1y0 .framer-hu5f18 > *, .framer-MT8AP.framer-v-hbo1y0 .framer-hu5f18 > :first-child, .framer-MT8AP.framer-v-hbo1y0 .framer-hu5f18 > :last-child { margin: 0px; } .framer-MT8AP.framer-v-hbo1y0 .framer-v8pbq3 > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-MT8AP.framer-v-hbo1y0 .framer-v8pbq3 > :first-child, .framer-MT8AP.framer-v-hbo1y0 .framer-1qehtg5 > :first-child { margin-top: 0px; } .framer-MT8AP.framer-v-hbo1y0 .framer-v8pbq3 > :last-child, .framer-MT8AP.framer-v-hbo1y0 .framer-1qehtg5 > :last-child { margin-bottom: 0px; } .framer-MT8AP.framer-v-hbo1y0 .framer-1qehtg5 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }",
    ".framer-MT8AP.framer-v-23oz6b.framer-xgztlj, .framer-MT8AP.framer-v-1y6zd5z.framer-xgztlj { overflow: visible; padding: 15px 20px 15px 20px; width: 800px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-MT8AP.framer-v-23oz6b .framer-hu5f18 { gap: 0px; } .framer-MT8AP.framer-v-23oz6b .framer-hu5f18 > *, .framer-MT8AP.framer-v-23oz6b .framer-hu5f18 > :first-child, .framer-MT8AP.framer-v-23oz6b .framer-hu5f18 > :last-child { margin: 0px; } }",
    ".framer-MT8AP.framer-v-1y6zd5z .framer-v8pbq3 { flex: none; flex-direction: column; gap: 36px; justify-content: center; padding: 50px 3px 30px 0px; position: absolute; right: 0px; top: 65px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-MT8AP.framer-v-1y6zd5z .framer-hu5f18, .framer-MT8AP.framer-v-1y6zd5z .framer-v8pbq3, .framer-MT8AP.framer-v-1y6zd5z .framer-1qehtg5 { gap: 0px; } .framer-MT8AP.framer-v-1y6zd5z .framer-hu5f18 > *, .framer-MT8AP.framer-v-1y6zd5z .framer-hu5f18 > :first-child, .framer-MT8AP.framer-v-1y6zd5z .framer-hu5f18 > :last-child { margin: 0px; } .framer-MT8AP.framer-v-1y6zd5z .framer-v8pbq3 > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-MT8AP.framer-v-1y6zd5z .framer-v8pbq3 > :first-child, .framer-MT8AP.framer-v-1y6zd5z .framer-1qehtg5 > :first-child { margin-top: 0px; } .framer-MT8AP.framer-v-1y6zd5z .framer-v8pbq3 > :last-child, .framer-MT8AP.framer-v-1y6zd5z .framer-1qehtg5 > :last-child { margin-bottom: 0px; } .framer-MT8AP.framer-v-1y6zd5z .framer-1qehtg5 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }",
  ],
  $e = ee(D1, O1, "framer-MT8AP"),
  Vr = $e;
$e.displayName = "Header";
$e.defaultProps = { height: 94, width: 1600 };
$($e, {
  variant: {
    options: [
      "sHu_lahHE",
      "Ki3cuZDYJ",
      "QB1Mp2ngR",
      "Je3s6f7e0",
      "LcEesULZX",
      "NQn7mnz8_",
    ],
    optionTitles: [
      "Desktop",
      "Laptop",
      "Tablet Close",
      "Tablet Open",
      "Phone Close",
      "Phone Open",
    ],
    title: "Variant",
    type: E.Enum,
  },
});
re($e, [{ explicitInter: !0, fonts: [] }, ...M1, ...B1, ...I1], {
  supportsExplicitInterCodegen: !0,
});
var H1 = "framer-4mhU4",
  G1 = { BKYgERSuG: "framer-v-17bfa1z" };
var P1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Z1 = ({ value: r, children: t }) => {
    let n = ie(P),
      i = r ?? n.transition,
      l = Q(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(P.Provider, { value: l, children: t });
  },
  W1 = d.create(f),
  q1 = ({ height: r, id: t, title: n, width: i, ...l }) => {
    var m;
    return {
      ...l,
      sHraVQ6Fn:
        (m = n ?? l.sHraVQ6Fn) !== null && m !== void 0
          ? m
          : "WELCOME TO RHYTHMIX",
    };
  },
  Y1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  X1 = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: u,
        sHraVQ6Fn: g,
        ...o
      } = q1(r),
      {
        baseVariant: C,
        classNames: x,
        clearLoadingGesture: I,
        gestureHandlers: w,
        gestureVariant: L,
        isLoading: O,
        setGestureState: b,
        setVariant: V,
        variants: _,
      } = oe({
        defaultVariant: "BKYgERSuG",
        variant: u,
        variantClassNames: G1,
      }),
      z = Y1(r, _),
      S = T(null),
      A = J(),
      N = [],
      v = ne();
    return e(W, {
      id: c ?? A,
      children: e(W1, {
        animate: _,
        initial: !1,
        children: e(Z1, {
          value: P1,
          children: e(d.div, {
            ...o,
            ...w,
            className: Y(H1, ...N, "framer-17bfa1z", m, x),
            "data-border": !0,
            "data-framer-name": "Variant 1",
            layoutDependency: z,
            layoutId: "BKYgERSuG",
            ref: t ?? S,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(245, 186, 0, 0.07)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgba(245, 186, 0, 0.04)",
              borderBottomLeftRadius: 200,
              borderBottomRightRadius: 200,
              borderTopLeftRadius: 200,
              borderTopRightRadius: 200,
              ...l,
            },
            children: e(p, {
              __fromCanvasComponent: !0,
              children: e(f, {
                children: e(d.h1, {
                  style: {
                    "--framer-font-size": "12px",
                    "--framer-letter-spacing": "0px",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--extracted-gdpscs, rgb(230, 181, 8))",
                  },
                  children: "WELCOME TO RHYTHMIX",
                }),
              }),
              className: "framer-tvwn64",
              fonts: ["Inter"],
              layoutDependency: z,
              layoutId: "feV5v98jX",
              style: {
                "--extracted-gdpscs": "rgb(230, 181, 8)",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                "--framer-paragraph-spacing": "0px",
              },
              text: g,
              verticalAlignment: "top",
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  J1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-4mhU4.framer-tbsnxw, .framer-4mhU4 .framer-tbsnxw { display: block; }",
    ".framer-4mhU4.framer-17bfa1z { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-4mhU4 .framer-tvwn64 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-4mhU4.framer-17bfa1z { gap: 0px; } .framer-4mhU4.framer-17bfa1z > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-4mhU4.framer-17bfa1z > :first-child { margin-top: 0px; } .framer-4mhU4.framer-17bfa1z > :last-child { margin-bottom: 0px; } }",
    '.framer-4mhU4[data-border="true"]::after, .framer-4mhU4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  er = ee(X1, J1, "framer-4mhU4"),
  cr = er;
er.displayName = "Label";
er.defaultProps = { height: 33, width: 169 };
$(er, {
  sHraVQ6Fn: {
    defaultValue: "WELCOME TO RHYTHMIX",
    displayTextArea: !1,
    title: "Title",
    type: E.String,
  },
});
re(
  er,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Q1 = le(cr),
  K1 = le(ue),
  q = He(d.div),
  $1 = le(Lr),
  xe = He(F),
  Nr = He(p),
  e2 = le(Be),
  r2 = He(U),
  t2 = le(Me),
  a2 = le(Fe),
  i2 = le(j),
  n2 = le(Vr),
  o2 = {
    DBZV3IwOT: "(min-width: 810px) and (max-width: 1199px)",
    E2xrsV1h4: "(max-width: 809px)",
    WQLkyLRf1: "(min-width: 1600px)",
    x7xcyGr7h: "(min-width: 1200px) and (max-width: 1599px)",
  };
var Ct = "framer-E57Ul",
  l2 = {
    DBZV3IwOT: "framer-v-1vsrikx",
    E2xrsV1h4: "framer-v-k6oj97",
    WQLkyLRf1: "framer-v-72rtr7",
    x7xcyGr7h: "framer-v-obzkxz",
  },
  Ie = (r, t) => `translateX(-50%) ${t}`,
  vt = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ve = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Re = { damping: 60, delay: 0.4, mass: 1, stiffness: 400, type: "spring" },
  R = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 50,
  },
  De = { damping: 60, delay: 0.2, mass: 1, stiffness: 400, type: "spring" },
  dr = (r, t) => {
    if (!(!r || typeof r != "object")) return { ...r, alt: t };
  },
  s2 = { damping: 60, delay: 0.3, mass: 1, stiffness: 400, type: "spring" },
  f2 = {
    filter: "blur(10px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10,
  },
  m2 = { bounce: 0, delay: 0.05, duration: 0.4, type: "spring" },
  c2 = {
    effect: f2,
    tokenization: "word",
    transition: m2,
    trigger: "onMount",
    type: "appear",
  },
  Ar = { damping: 60, delay: 0.6, mass: 1, stiffness: 400, type: "spring" },
  d2 = { delay: 0, duration: 15, ease: [0, 0, 1, 1], type: "tween" },
  p2 = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  h2 = { damping: 60, delay: 0.7, mass: 1, stiffness: 400, type: "spring" },
  g2 = { damping: 60, delay: 0.5, mass: 1, stiffness: 400, type: "spring" },
  u2 = { damping: 60, delay: 0.8, mass: 1, stiffness: 400, type: "spring" },
  pr = nr(),
  x2 = {
    Desktop: "WQLkyLRf1",
    Laptop: "x7xcyGr7h",
    Phone: "E2xrsV1h4",
    Tablet: "DBZV3IwOT",
  },
  C2 = ({ height: r, id: t, width: n, ...i }) => {
    var l, m;
    return {
      ...i,
      variant:
        (m = (l = x2[i.variant]) !== null && l !== void 0 ? l : i.variant) !==
          null && m !== void 0
          ? m
          : "WQLkyLRf1",
    };
  },
  v2 = X(function (r, t) {
    let { activeLocale: n, setLocale: i } = K(),
      { style: l, className: m, layoutId: c, variant: u, ...g } = C2(r);
    Ve(() => {
      let b = nr(void 0, n);
      if (b.robots) {
        let V = document.querySelector('meta[name="robots"]');
        V
          ? V.setAttribute("content", b.robots)
          : ((V = document.createElement("meta")),
            V.setAttribute("name", "robots"),
            V.setAttribute("content", b.robots),
            document.head.appendChild(V));
      }
    }, [void 0, n]),
      Gr(() => {
        let b = nr(void 0, n);
        if (((document.title = b.title || ""), b.viewport)) {
          var V;
          (V = document.querySelector('meta[name="viewport"]')) === null ||
            V === void 0 ||
            V.setAttribute("content", b.viewport);
        }
        let _ = b.bodyClassName;
        if (_) {
          let z = document.body;
          z.classList.forEach(
            (S) => S.startsWith("framer-body-") && z.classList.remove(S)
          ),
            z.classList.add(`${b.bodyClassName}-framer-E57Ul`);
        }
        return () => {
          _ &&
            document.body.classList.remove(`${b.bodyClassName}-framer-E57Ul`);
        };
      }, [void 0, n]);
    let [o, C] = $r(u, o2, !1),
      x = void 0,
      I = T(null),
      w = ar(),
      L = J(),
      O = [];
    return (
      Qr({}),
      e(Kr.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: l2 },
        children: s(W, {
          id: c ?? L,
          children: [
            s(d.div, {
              ...g,
              className: Y(Ct, ...O, "framer-72rtr7", m),
              ref: t ?? I,
              style: { ...l },
              children: [
                e(U, {
                  background: {
                    alt: "",
                    fit: "fill",
                    loading: B(0),
                    pixelHeight: 1965,
                    pixelWidth: 1728,
                    sizes: "100vw",
                    src: "https://framerusercontent.com/images/mIXVmrh0M85UjeuFhxk72Uwsvw.svg",
                    srcSet:
                      "https://framerusercontent.com/images/mIXVmrh0M85UjeuFhxk72Uwsvw.svg?scale-down-to=1024 900w,https://framerusercontent.com/images/mIXVmrh0M85UjeuFhxk72Uwsvw.svg 1728w",
                  },
                  className: "framer-ie82ky",
                  "data-framer-name": "Background",
                  name: "Background",
                  transformTemplate: Ie,
                }),
                e("section", {
                  background: {
                    alt: "",
                    fit: "fill",
                    positionX: "center",
                    positionY: "top",
                  },
                  className: "framer-1q6spei",
                  "data-framer-name": "Hero Section",
                  name: "Hero Section",
                  children: s(q, {
                    __framer__animate: { transition: ve },
                    __framer__animateOnce: !0,
                    __framer__enter: vt,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0.5,
                    __perspectiveFX: !1,
                    __targetOpacity: 1,
                    className: "framer-1886rex",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: [
                      e(h, {
                        breakpoint: o,
                        overrides: {
                          DBZV3IwOT: { y: 120 },
                          E2xrsV1h4: { y: 110 },
                        },
                        children: e(y, {
                          height: 33,
                          children: e(F, {
                            className: "framer-88n28h-container",
                            children: e(cr, {
                              height: "100%",
                              id: "SyHUb0__P",
                              layoutId: "SyHUb0__P",
                              sHraVQ6Fn: "WELCOME TO RHYTHMIX",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                      s("div", {
                        className: "framer-lhc96y",
                        "data-framer-name": "Title",
                        name: "Title",
                        children: [
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: {
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBNZWRpdW0=",
                                      "--framer-font-family":
                                        '"Helvetica Now Display Medium", "Helvetica Now Display Medium Placeholder", sans-serif',
                                      "--framer-font-size": "58px",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: e("span", {
                                      "data-text-fill": "true",
                                      style: {
                                        backgroundImage:
                                          "linear-gradient(0deg, rgb(179, 179, 179) 0%, rgb(255, 255, 255) 49%, rgb(179, 179, 179) 62%, rgb(255, 255, 255) 82%)",
                                      },
                                      children:
                                        "Revolutionizing Music Creation with AI",
                                    }),
                                  }),
                                }),
                              },
                              E2xrsV1h4: {
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBNZWRpdW0=",
                                      "--framer-font-family":
                                        '"Helvetica Now Display Medium", "Helvetica Now Display Medium Placeholder", sans-serif',
                                      "--framer-font-size": "48px",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: e("span", {
                                      "data-text-fill": "true",
                                      style: {
                                        backgroundImage:
                                          "linear-gradient(0deg, rgb(179, 179, 179) 0%, rgb(255, 255, 255) 49%, rgb(179, 179, 179) 62%, rgb(255, 255, 255) 82%)",
                                      },
                                      children:
                                        "Revolutionizing Music Creation with AI",
                                    }),
                                  }),
                                }),
                              },
                              x7xcyGr7h: {
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBNZWRpdW0=",
                                      "--framer-font-family":
                                        '"Helvetica Now Display Medium", "Helvetica Now Display Medium Placeholder", sans-serif',
                                      "--framer-font-size": "82px",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: e("span", {
                                      "data-text-fill": "true",
                                      style: {
                                        backgroundImage:
                                          "linear-gradient(0deg, rgb(179, 179, 179) 0%, rgb(255, 255, 255) 49%, rgb(179, 179, 179) 62%, rgb(255, 255, 255) 82%)",
                                      },
                                      children:
                                        "Revolutionizing Music Creation with AI",
                                    }),
                                  }),
                                }),
                              },
                            },
                            children: e(p, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBNZWRpdW0=",
                                    "--framer-font-family":
                                      '"Helvetica Now Display Medium", "Helvetica Now Display Medium Placeholder", sans-serif',
                                    "--framer-font-size": "90px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: e("span", {
                                    "data-text-fill": "true",
                                    style: {
                                      backgroundImage:
                                        "linear-gradient(0deg, rgb(179, 179, 179) 0%, rgb(255, 255, 255) 49%, rgb(179, 179, 179) 62%, rgb(255, 255, 255) 82%)",
                                    },
                                    children:
                                      "Revolutionizing Music Creation with AI",
                                  }),
                                }),
                              }),
                              className: "framer-sriaa8",
                              fonts: ["CUSTOM;Helvetica Now Display Medium"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              E2xrsV1h4: {
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "1.5em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(178, 173, 173)",
                                    },
                                    children:
                                      "Build decentralized AI agents, smart contracts, and intelligent dapps with Rhythmix AI\u2014on your favorite blockchain.",
                                  }),
                                }),
                              },
                            },
                            children: e(p, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--framer-font-size": "19px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-line-height": "1.5em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(178, 173, 173)",
                                  },
                                  children:
                                    "Build decentralized AI agents, smart contracts, and intelligent dapps with Rhythmix AI\u2014on your favorite blockchain.",
                                }),
                              }),
                              className: "framer-1gviu6q",
                              fonts: ["Inter"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      s("div", {
                        className: "framer-qvh3i9",
                        "data-framer-name": "Button Wrapper",
                        name: "Button Wrapper",
                        children: [
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: { y: 343.3 },
                              E2xrsV1h4: {
                                width: "min(100vw - 40px, 390px)",
                                y: 283.8,
                              },
                            },
                          }),
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: { y: 343.3 },
                              E2xrsV1h4: {
                                width: "min(100vw - 40px, 390px)",
                                y: 353.8,
                              },
                            },
                            children: e(y, {
                              height: 54,
                              children: e(F, {
                                className: "framer-tz2x6b-container",
                                children: e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    E2xrsV1h4: { style: { width: "100%" } },
                                  },
                                  children: e('div', { // Wrap the content in an anchor tag
                                    style: { textDecoration: 'none', color: 'inherit' }, // Optional: remove default link styles
                                    children: e(ue, {
                                        height: "100%",
                                        id: "gwqYOqyrW",
                                        J2lsbMWlm: "CA: Coming Soon",
                                        layoutId: "gwqYOqyrW",
                                        variant: "CKB0q5b3O",
                                        width: "100%",
                                    }),
                                }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e(h, {
                  breakpoint: o,
                  overrides: {
                    DBZV3IwOT: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: B(397.3),
                        pixelHeight: 425,
                        pixelWidth: 1728,
                        sizes: "100vw",
                        src: "https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg",
                        srcSet:
                          "https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg?scale-down-to=512 512w,https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg 1728w",
                      },
                    },
                    E2xrsV1h4: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: B(427.8),
                        pixelHeight: 425,
                        pixelWidth: 1728,
                        sizes: "100vw",
                        src: "https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg",
                        srcSet:
                          "https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg?scale-down-to=512 512w,https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg 1728w",
                      },
                    },
                  },
                  children: e(U, {
                    background: {
                      alt: "",
                      fit: "fill",
                      pixelHeight: 425,
                      pixelWidth: 1728,
                      sizes: "100vw",
                      src: "https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg",
                      srcSet:
                        "https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg?scale-down-to=512 512w,https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/R5gpTIJkwzx12i7SxLRz5rYYw.svg 1728w",
                    },
                    className: "framer-x0hdvz",
                    "data-framer-name": "Pattern Image",
                    name: "Pattern Image",
                  }),
                }),
                e("header", {
                  className: "framer-16qkb6x",
                  "data-framer-name": "Section",
                  name: "Section",
                  children: s(q, {
                    __framer__animate: { transition: Re },
                    __framer__animateOnce: !0,
                    __framer__enter: vt,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0.5,
                    __perspectiveFX: !1,
                    __targetOpacity: 1,
                    className: "framer-1h7lb8g",
                    children: [
                      e(p, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e("h1", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                              "--framer-font-family":
                                '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                              "--framer-font-size": "30px",
                              "--framer-letter-spacing": "0px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: "Ask MineMax",
                          }),
                        }),
                        className: "framer-fbneoh",
                        fonts: ["CUSTOM;Helvetica Now Display Bold"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(p, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e("h1", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                              "--framer-font-family":
                                '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                              "--framer-letter-spacing": "0px",
                              "--framer-line-height": "1.5em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(127, 125, 131)",
                            },
                            children: "Feature Coming Soon",
                          }),
                        }),
                        className: "framer-1no6hh1",
                        fonts: ["CUSTOM;Helvetica Now Display Bold"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
                s("section", {
                  className: "framer-7bsjek",
                  "data-framer-name": "Section",
                  name: "Section",
                  children: [
                    e(h, {
                      breakpoint: o,
                      overrides: {
                        DBZV3IwOT: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: B(1370.3),
                            pixelHeight: 1023,
                            pixelWidth: 1023,
                            sizes: "924px",
                            src: "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg",
                            srcSet:
                              "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg?scale-down-to=512 512w,https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg 1023w",
                          },
                        },
                        E2xrsV1h4: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: B(1520.8),
                            pixelHeight: 1023,
                            pixelWidth: 1023,
                            sizes: "780px",
                            src: "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg",
                            srcSet:
                              "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg?scale-down-to=512 512w,https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg 1023w",
                          },
                        },
                        x7xcyGr7h: {
                          background: {
                            alt: "",
                            fit: "fill",
                            pixelHeight: 1023,
                            pixelWidth: 1023,
                            sizes: "1028px",
                            src: "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg",
                            srcSet:
                              "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg?scale-down-to=512 512w,https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg 1023w",
                          },
                        },
                      },
                      children: e(U, {
                        background: {
                          alt: "",
                          fit: "fill",
                          pixelHeight: 1023,
                          pixelWidth: 1023,
                          sizes: "1157px",
                          src: "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg",
                          srcSet:
                            "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg?scale-down-to=512 512w,https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg 1023w",
                        },
                        className: "framer-zlxrfj",
                        "data-framer-name": "Shape",
                        name: "Shape",
                        transformTemplate: Ie,
                      }),
                    }),
                    s("div", {
                      className: "framer-1ww91p4",
                      "data-framer-name": "Container",
                      name: "Container",
                      children: [
                        s("div", {
                          className: "framer-1g37dt7",
                          "data-framer-name": "Content",
                          name: "Content",
                          children: [
                            s(q, {
                              __framer__animate: { transition: ve },
                              __framer__animateOnce: !0,
                              __framer__enter: R,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-1fdp1i9",
                              "data-framer-name": "Title",
                              name: "Title",
                              children: [
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    E2xrsV1h4: {
                                      children: e(f, {
                                        children: e("h1", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                            "--framer-font-family":
                                              '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                            "--framer-font-size": "42px",
                                            "--framer-letter-spacing": "0px",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children:
                                            "Your Partner in AI-Powered Music Creation",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                          "--framer-font-family":
                                            '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                          "--framer-font-size": "48px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Your Partner in AI-Powered Music Creation",
                                      }),
                                    }),
                                    className: "framer-11ewt4t",
                                    fonts: [
                                      "CUSTOM;Helvetica Now Display Bold",
                                    ],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(f, {
                                    children: e("h1", {
                                      style: {
                                        "--framer-font-size": "19px",
                                        "--framer-letter-spacing": "0px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(178, 173, 173)",
                                      },
                                      children:
                                        "Music creation is deeply personal, and Rhythmix understands that one size doesn\u2019t fit all. That\u2019s why we offer",
                                    }),
                                  }),
                                  className: "framer-1lmuywv",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            e(h, {
                              breakpoint: o,
                              overrides: {
                                DBZV3IwOT: {
                                  width: "min(100vw - 60px, 1360px)",
                                  y: 1150.3999999999999,
                                },
                                E2xrsV1h4: {
                                  width: "min(100vw - 40px, 390px)",
                                  y: 1093.7,
                                },
                                x7xcyGr7h: {
                                  width:
                                    "max(min(100vw - 60px, 1360px) * 0.52 - 60px, 1px)",
                                },
                              },
                              children: e(y, {
                                height: 290,
                                width:
                                  "max((min(100vw - 60px, 1360px) - 100px) / 2, 1px)",
                                children: e(xe, {
                                  __framer__animate: { transition: De },
                                  __framer__animateOnce: !0,
                                  __framer__enter: R,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: "framer-1eu15w0-container",
                                  children: e(Lr, {
                                    height: "100%",
                                    id: "XvIkPeDGF",
                                    layoutId: "XvIkPeDGF",
                                    style: { width: "100%" },
                                    variant: "ezn47bBPQ",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            e(Nr, {
                              __framer__animate: { transition: Re },
                              __framer__animateOnce: !0,
                              __framer__enter: R,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--framer-font-size": "19px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-line-height": "1.5em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(178, 173, 173)",
                                  },
                                  children:
                                    "Rhythmix isn\u2019t just a tool \u2014 it\u2019s a creative companion that adapts to your vision.",
                                }),
                              }),
                              className: "framer-hwpbcb",
                              fonts: ["Inter"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        e("div", {
                          className: "framer-v00grj",
                          "data-framer-name": "Right Content",
                          name: "Right Content",
                          children: e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: B(1599.9),
                                  pixelHeight: 562,
                                  pixelWidth: 609,
                                  sizes: "max(min(100vw - 60px, 1360px), 1px)",
                                  src: "https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg",
                                  srcSet:
                                    "https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg?scale-down-to=512 512w,https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg 609w",
                                },
                              },
                              E2xrsV1h4: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: B(1473.1999999999998),
                                  pixelHeight: 562,
                                  pixelWidth: 609,
                                  sizes: "max(min(100vw - 40px, 390px), 1px)",
                                  src: "https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg",
                                  srcSet:
                                    "https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg?scale-down-to=512 512w,https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg 609w",
                                },
                              },
                              x7xcyGr7h: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  pixelHeight: 562,
                                  pixelWidth: 609,
                                  sizes:
                                    "max(min(100vw - 60px, 1360px) * 0.48, 1px)",
                                  src: "https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg",
                                  srcSet:
                                    "https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg?scale-down-to=512 512w,https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg 609w",
                                },
                              },
                            },
                            children: s(U, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 562,
                                pixelWidth: 609,
                                sizes:
                                  "max((min(100vw - 60px, 1360px) - 100px) / 2, 1px)",
                                src: "https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg",
                                srcSet:
                                  "https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg?scale-down-to=512 512w,https://framerusercontent.com/images/pVrb2XIFJwigJdTIbHB6zShVpGs.svg 609w",
                              },
                              className: "framer-lqy1ra",
                              children: [
                                e("div", {
                                  className: "framer-972gnr",
                                  "data-border": !0,
                                  children: e("div", {
                                    className: "framer-gc3szg",
                                    "data-border": !0,
                                    children: e(h, {
                                      breakpoint: o,
                                      overrides: {
                                        DBZV3IwOT: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: B(1847.4),
                                            pixelHeight: 66,
                                            pixelWidth: 52,
                                            src: "https://framerusercontent.com/images/L0AyZcwv96BWH0ovUiOV803MA.svg",
                                          },
                                        },
                                        E2xrsV1h4: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: B(1720.6999999999998),
                                            pixelHeight: 66,
                                            pixelWidth: 52,
                                            src: "https://framerusercontent.com/images/L0AyZcwv96BWH0ovUiOV803MA.svg",
                                          },
                                        },
                                      },
                                      children: e(U, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          pixelHeight: 66,
                                          pixelWidth: 52,
                                          src: "https://framerusercontent.com/images/L0AyZcwv96BWH0ovUiOV803MA.svg",
                                        },
                                        className: "framer-13o7ezb",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: {
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px), 1px) * 0.2341)",
                                      y: 2015.9,
                                    },
                                    E2xrsV1h4: {
                                      width:
                                        "calc(max(min(100vw - 40px, 390px), 1px) * 0.2341)",
                                      y: 1889.1999999999998,
                                    },
                                    x7xcyGr7h: {
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px) * 0.48, 1px) * 0.2341)",
                                    },
                                  },
                                  children: e(y, {
                                    height: 144,
                                    width:
                                      "calc(max((min(100vw - 60px, 1360px) - 100px) / 2, 1px) * 0.2341)",
                                    children: e(xe, {
                                      __framer__spring: {
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring",
                                      },
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 200,
                                            y: -200,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: "onInView",
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-d9k6ex-container",
                                      children: e(Be, {
                                        height: "100%",
                                        id: "siqcTTD78",
                                        IS7oaphFo: "rgb(11, 11, 14)",
                                        layoutId: "siqcTTD78",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "JwEBX2eQj",
                                        VmubYJzin: dr(
                                          {
                                            src: "https://framerusercontent.com/images/GcOhlCxbMfsDq6zbuLh9UPkLuo0.svg",
                                          },
                                          ""
                                        ),
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: {
                                      height: 176,
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px), 1px) * 0.2347)",
                                      y: 1815.9,
                                    },
                                    E2xrsV1h4: {
                                      height: 82,
                                      width:
                                        "calc(max(min(100vw - 40px, 390px), 1px) * 0.2343)",
                                      y: 1869.1999999999998,
                                    },
                                    x7xcyGr7h: {
                                      height: 128,
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px) * 0.48, 1px) * 0.234)",
                                    },
                                  },
                                  children: e(y, {
                                    height: 144,
                                    width:
                                      "calc(max((min(100vw - 60px, 1360px) - 100px) / 2, 1px) * 0.2341)",
                                    children: e(xe, {
                                      __framer__spring: {
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring",
                                      },
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 200,
                                            y: -50,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: "onInView",
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-wz6gc6-container",
                                      children: e(Be, {
                                        height: "100%",
                                        id: "OovU9MXyo",
                                        IS7oaphFo: "rgb(11, 11, 14)",
                                        layoutId: "OovU9MXyo",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "JwEBX2eQj",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: {
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px), 1px) * 0.2341)",
                                      y: 1595.9,
                                    },
                                    E2xrsV1h4: {
                                      height: 82,
                                      width:
                                        "calc(max(min(100vw - 40px, 390px), 1px) / 4.321)",
                                      y: 1473.1999999999998,
                                    },
                                    x7xcyGr7h: {
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px) * 0.48, 1px) * 0.2341)",
                                    },
                                  },
                                  children: e(y, {
                                    height: 144,
                                    width:
                                      "calc(max((min(100vw - 60px, 1360px) - 100px) / 2, 1px) * 0.2341)",
                                    children: e(xe, {
                                      __framer__spring: {
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring",
                                      },
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -50,
                                            y: 200,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: "onInView",
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-1vidff3-container",
                                      transformTemplate: Ie,
                                      children: e(Be, {
                                        height: "100%",
                                        id: "HntLlcg1c",
                                        IS7oaphFo: "rgb(11, 11, 14)",
                                        layoutId: "HntLlcg1c",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "TMvMhHiAG",
                                        VmubYJzin: dr(
                                          {
                                            src: "https://framerusercontent.com/images/G1LnuhHzxuApSLi1vOYUemvGrHM.svg",
                                          },
                                          ""
                                        ),
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: {
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px), 1px) * 0.2341)",
                                      y: 2015.9,
                                    },
                                    E2xrsV1h4: {
                                      height: 82,
                                      width:
                                        "calc(max(min(100vw - 40px, 390px), 1px) * 0.2343)",
                                      y: 1944.1999999999998,
                                    },
                                    x7xcyGr7h: {
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px) * 0.48, 1px) * 0.2341)",
                                    },
                                  },
                                  children: e(y, {
                                    height: 144,
                                    width:
                                      "calc(max((min(100vw - 60px, 1360px) - 100px) / 2, 1px) * 0.2341)",
                                    children: e(xe, {
                                      __framer__spring: {
                                        bounce: 0.2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        durationBasedSpring: !1,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring",
                                      },
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -200,
                                            y: -200,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: "onInView",
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-1b9g78z-container",
                                      children: e(Be, {
                                        height: "100%",
                                        id: "G96LVWXxW",
                                        IS7oaphFo: "rgb(11, 11, 14)",
                                        layoutId: "G96LVWXxW",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "JwEBX2eQj",
                                        VmubYJzin: dr(
                                          {
                                            src: "https://framerusercontent.com/images/wsUsqWuDnyyubRBFnX3dkImhT0.svg",
                                          },
                                          ""
                                        ),
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: {
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px), 1px) * 0.2349)",
                                      y: 1742.9,
                                    },
                                    E2xrsV1h4: {
                                      height: 82,
                                      width:
                                        "calc(max(min(100vw - 40px, 390px), 1px) * 0.2343)",
                                      y: 1553.1999999999998,
                                    },
                                    x7xcyGr7h: {
                                      width:
                                        "calc(max(min(100vw - 60px, 1360px) * 0.48, 1px) * 0.2349)",
                                    },
                                  },
                                  children: e(y, {
                                    height: 148,
                                    width:
                                      "calc(max((min(100vw - 60px, 1360px) - 100px) / 2, 1px) * 0.2349)",
                                    children: e(xe, {
                                      __framer__spring: {
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring",
                                      },
                                      __framer__styleTransformEffectEnabled: !0,
                                      __framer__transformTargets: [
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -200,
                                            y: 20,
                                          },
                                        },
                                        {
                                          target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0,
                                          },
                                        },
                                      ],
                                      __framer__transformTrigger: "onInView",
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-14i19zy-container",
                                      children: e(Be, {
                                        height: "100%",
                                        id: "DDsSB9Gen",
                                        IS7oaphFo: "rgb(11, 11, 14)",
                                        layoutId: "DDsSB9Gen",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "JwEBX2eQj",
                                        VmubYJzin: dr(
                                          {
                                            src: "https://framerusercontent.com/images/7rerrnlQJcbtDw3LfusRaSqeWs.svg",
                                          },
                                          ""
                                        ),
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                s("section", {
                  className: "framer-1jfg39a",
                  "data-framer-name": "Section",
                  name: "Section",
                  children: [
                    e(h, {
                      breakpoint: o,
                      overrides: {
                        DBZV3IwOT: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: B(2672.8999999999996),
                            pixelHeight: 1023,
                            pixelWidth: 1023,
                            sizes: "924px",
                            src: "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg",
                            srcSet:
                              "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg?scale-down-to=512 512w,https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg 1023w",
                          },
                        },
                        E2xrsV1h4: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: B(2096.2),
                            pixelHeight: 1023,
                            pixelWidth: 1023,
                            sizes: "780px",
                            src: "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg",
                            srcSet:
                              "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg?scale-down-to=512 512w,https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg 1023w",
                          },
                        },
                        x7xcyGr7h: {
                          background: {
                            alt: "",
                            fit: "fill",
                            pixelHeight: 1023,
                            pixelWidth: 1023,
                            sizes: "1028px",
                            src: "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg",
                            srcSet:
                              "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg?scale-down-to=512 512w,https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg 1023w",
                          },
                        },
                      },
                      children: e(U, {
                        background: {
                          alt: "",
                          fit: "fill",
                          pixelHeight: 1023,
                          pixelWidth: 1023,
                          sizes: "1157px",
                          src: "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg",
                          srcSet:
                            "https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg?scale-down-to=512 512w,https://framerusercontent.com/images/JuhJL9GDCp5sHPc53KiW9NfgS4.svg 1023w",
                        },
                        className: "framer-1fm4ltu",
                        "data-framer-name": "Shape",
                        name: "Shape",
                        transformTemplate: Ie,
                      }),
                    }),
                    e(h, {
                      breakpoint: o,
                      overrides: {
                        DBZV3IwOT: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: B(2642.8999999999996),
                            pixelHeight: 7130,
                            pixelWidth: 3456,
                            sizes: "990.45px",
                            src: "https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png",
                            srcSet:
                              "https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png?scale-down-to=2048 992w,https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png?scale-down-to=4096 1985w,https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png 3456w",
                          },
                        },
                        E2xrsV1h4: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: B(2896.2),
                            pixelHeight: 7130,
                            pixelWidth: 3456,
                            sizes: "757.95px",
                            src: "https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png",
                            srcSet:
                              "https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png?scale-down-to=2048 992w,https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png?scale-down-to=4096 1985w,https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png 3456w",
                          },
                        },
                      },
                      children: e(U, {
                        background: {
                          alt: "",
                          fit: "fill",
                          pixelHeight: 7130,
                          pixelWidth: 3456,
                          src: "https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png",
                          srcSet:
                            "https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png?scale-down-to=2048 992w,https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png?scale-down-to=4096 1985w,https://framerusercontent.com/images/3Nzyol6evWLTvi3thMUV5NJkDE8.png 3456w",
                        },
                        className: "framer-42w7x7",
                        "data-framer-name": "Shape",
                        name: "Shape",
                      }),
                    }),
                    s("div", {
                      className: "framer-1b1un26",
                      "data-framer-name": "Container",
                      name: "Container",
                      children: [
                        e("div", {
                          className: "framer-yixgl5",
                          "data-framer-name": "Title",
                          name: "Title",
                          children: e(h, {
                            breakpoint: o,
                            overrides: {
                              E2xrsV1h4: {
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                      "--framer-font-family":
                                        '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                      "--framer-font-size": "42px",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children:
                                      "Built for Creators, Innovators, and Businesses",
                                  }),
                                }),
                              },
                            },
                            children: e(Nr, {
                              __framer__animate: { transition: ve },
                              __framer__animateOnce: !0,
                              __framer__enter: R,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                    "--framer-font-family":
                                      '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                    "--framer-font-size": "48px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "Built for Creators, Innovators, and Businesses",
                                }),
                              }),
                              className: "framer-fhy878",
                              fonts: ["CUSTOM;Helvetica Now Display Bold"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        s("div", {
                          className: "framer-17ac30h",
                          "data-framer-name": "Content",
                          name: "Content",
                          children: [
                            s("div", {
                              className: "framer-zzgd34",
                              "data-framer-name": "Left",
                              name: "Left",
                              children: [
                                s("div", {
                                  className: "framer-j9n4s5",
                                  "data-framer-name": "Card 01",
                                  name: "Card 01",
                                  children: [
                                    s(q, {
                                      __framer__animate: { transition: De },
                                      __framer__animateOnce: !0,
                                      __framer__enter: R,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-2pa1bt",
                                      "data-framer-name": "Title",
                                      name: "Title",
                                      children: [
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(f, {
                                            children: e("h1", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                                "--framer-font-family":
                                                  '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                                "--framer-font-size": "28px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Powerful Web App",
                                            }),
                                          }),
                                          className: "framer-1vceg1g",
                                          fonts: [
                                            "CUSTOM;Helvetica Now Display Bold",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(f, {
                                            children: e("h1", {
                                              style: {
                                                "--framer-font-size": "19px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(178, 173, 173)",
                                              },
                                              children:
                                                "Easily generate custom music tracks in just a few clicks. Explore genres, styles, and moods tailored to your needs.",
                                            }),
                                          }),
                                          className: "framer-1nvshyb",
                                          fonts: ["Inter"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    e(h, {
                                      breakpoint: o,
                                      overrides: {
                                        E2xrsV1h4: {
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 115"><g transform="translate(88.954 46.517)" id="ss12830415333_1"><path d="M -0.613 9.645 C -0.613 4.097 22.352 -0.401 50.681 -0.401 C 79.01 -0.401 101.975 4.097 101.975 9.645 C 101.975 15.193 79.01 19.691 50.681 19.691 C 22.352 19.691 -0.613 15.193 -0.613 9.645 Z" fill="rgb(182,135,129)"></path></g><g transform="translate(88.646 7.721)" id="ss12830415333_3"><g><defs><path d="M -0.611 48.154 C -0.611 21.522 22.354 -0.067 50.683 -0.067 C 79.012 -0.067 101.977 21.522 101.977 48.154 C 101.977 74.785 79.012 96.374 50.683 96.374 C 22.354 96.374 -0.611 74.785 -0.611 48.154 Z" id="a1130z"></path><filter id="a1132z" x="-22.7%" y="-33.6%" width="145.3%" height="167.0%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="11.66" in="SourceAlpha" result="a1134z"></feGaussianBlur><feOffset dx="0" dy="9.08" in="a1134z" result="a1135z"></feOffset><feComposite in="a1135z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1136z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.6588235294117647   0 0 0 0 0.6588235294117647   0 0 0 0 0.6588235294117647  0 0 0 0.3 0" type="matrix" in="a1136z" result="a1137z"></feColorMatrix></filter></defs><use xlink:href="#a1130z" fill="rgb(23,23,23)" clip-path="url(#a1131z)"></use><use fill="black" fill-opacity="1" filter="url(#a1132z)" xlink:href="#a1130z"></use></g></g><path d="M 86.814 55.874 C 86.814 28.609 110.326 6.506 139.329 6.506 C 168.333 6.506 191.845 28.609 191.845 55.874 C 191.845 83.14 168.333 105.243 139.329 105.243 C 110.326 105.243 86.814 83.14 86.814 55.874 Z" fill="transparent" stroke-width="2.32" stroke="rgb(28,28,28)" stroke-miterlimit="10"></path><g transform="translate(108.323 26.25)" id="ss12830415333_6"><path d="M 50.547 -0.226 L 11.466 -0.226 C 4.721 -0.226 -0.747 4.914 -0.747 11.255 L -0.747 47.994 C -0.747 54.335 4.721 59.475 11.466 59.475 L 50.547 59.475 C 57.292 59.475 62.76 54.335 62.76 47.994 L 62.76 11.255 C 62.76 4.914 57.292 -0.226 50.547 -0.226 Z" fill="rgb(245,186,0)"></path></g><path d="M 126.917 65.888 C 126.433 65.303 125.644 64.918 124.858 64.975 C 124.761 64.982 124.664 64.987 124.566 64.989 C 123.574 65.016 122.619 65.735 123.07 66.566 C 123.465 67.292 124.066 67.901 124.806 68.327 C 126.053 69.046 127.584 69.178 128.95 68.686 C 129.264 68.573 129.414 68.254 129.384 67.94 C 129.381 67.903 129.378 67.866 129.375 67.829 C 129.353 67.55 129.158 67.31 128.877 67.217 C 128.101 66.96 127.421 66.499 126.917 65.888 Z M 131.954 60.779 C 131.989 60.711 131.955 60.629 131.877 60.613 C 131.717 60.582 131.551 60.588 131.394 60.631 C 131.08 60.719 130.858 61.021 130.628 61.334 C 130.113 62.032 129.568 62.771 127.979 62.474 L 127.979 62.474 C 127.822 62.45 127.666 62.418 127.512 62.377 C 127.267 62.312 126.997 62.419 126.937 62.651 C 126.848 62.996 126.82 63.353 126.853 63.706 C 127.06 65.907 128.76 66.734 130.402 67.146 C 130.608 67.198 130.599 67.442 130.385 67.445 C 130.333 67.445 130.282 67.465 130.245 67.501 C 130.208 67.536 130.187 67.584 130.188 67.633 C 130.229 68.993 131.001 70.241 132.238 70.947 C 133.342 71.578 134.691 71.706 135.907 71.294 C 137.123 70.881 138.075 69.973 138.495 68.824 C 138.728 68.189 137.998 67.724 137.288 67.802 C 136.178 67.924 135.057 67.71 134.087 67.189 C 133.116 66.67 132.347 65.872 131.893 64.912 C 131.267 63.593 131.29 62.082 131.954 60.779 Z M 125.421 61.131 C 124.286 59.903 123.38 58.35 122.392 57.013 C 122.221 56.781 122.066 56.538 121.929 56.286 C 121.609 55.697 120.805 55.42 120.346 55.919 C 119.894 56.412 119.548 56.982 119.328 57.598 C 118.89 58.816 118.967 60.145 119.544 61.311 C 120.117 62.477 121.145 63.391 122.415 63.864 C 123.486 64.264 124.693 64.34 125.858 64.024 C 125.973 63.991 126.046 63.885 126.033 63.773 C 126.009 63.513 126.011 63.252 126.041 62.992 C 126.113 62.318 125.889 61.646 125.421 61.131 Z M 125.391 55.848 C 125.807 55.387 126.178 54.863 126.391 54.292 C 126.891 52.945 126.631 51.298 126.022 49.991 C 126.003 49.952 125.986 49.912 125.968 49.872 C 125.654 49.148 124.779 48.651 124.14 49.151 C 122.959 50.073 122.208 51.392 122.046 52.827 C 121.908 54.05 122.206 55.282 122.895 56.327 C 123.433 57.144 124.664 56.706 125.299 55.953 C 125.329 55.918 125.359 55.883 125.391 55.848 Z M 154.702 62.151 C 154.603 62.312 154.696 62.522 154.893 62.539 C 155.423 62.583 155.957 62.527 156.463 62.375 C 157.524 62.056 158.396 61.335 158.868 60.386 C 159.339 59.438 159.369 58.347 158.948 57.377 C 158.802 57.039 158.346 56.983 158.024 57.186 C 157.624 57.439 157.188 57.642 156.727 57.787 C 155.969 58.027 155.407 58.777 155.422 59.528 C 155.44 60.448 155.191 61.355 154.702 62.151 Z M 147.875 67.412 C 147.867 67.442 147.879 67.474 147.905 67.493 C 149.74 68.787 152.212 68.948 154.219 67.902 C 155.966 66.996 157.097 65.311 157.216 63.439 C 157.231 63.195 156.962 63.035 156.714 63.11 C 156.312 63.231 155.895 63.302 155.474 63.321 C 154.498 63.365 153.501 63.606 152.646 64.052 C 152.188 64.29 151.693 64.466 151.177 64.571 C 150.653 64.678 150.228 65.066 150.017 65.53 C 149.664 66.304 148.974 66.899 148.123 67.162 C 147.999 67.199 147.905 67.294 147.875 67.412 Z M 159.188 61.4 C 158.596 62.192 158.127 63.107 157.97 64.063 C 157.864 64.705 157.652 65.328 157.342 65.909 C 156.052 68.331 153.249 69.695 150.401 69.288 C 148.84 69.065 146.964 69.585 145.641 70.395 C 144.33 71.2 142.703 71.409 141.21 70.962 C 139.99 70.6 138.349 70.83 137.285 71.497 C 135.638 72.532 133.502 72.575 131.81 71.606 C 130.982 71.132 130.314 70.445 129.887 69.627 C 129.774 69.412 129.506 69.314 129.268 69.399 C 128.628 69.632 127.949 69.751 127.263 69.75 C 125.186 69.75 123.284 68.656 122.34 66.917 C 121.58 65.518 120.646 64.063 119.596 62.842 C 119.278 62.471 119.01 62.066 118.797 61.634 C 118.133 60.29 118.044 58.757 118.549 57.353 C 118.849 56.514 119.35 55.75 120.012 55.121 C 120.683 54.487 121.129 53.637 121.229 52.748 C 121.467 50.635 122.82 48.777 124.828 47.803 C 125.289 47.58 125.623 47.172 125.758 46.702 C 126.058 45.651 126.716 44.722 127.632 44.057 C 128.288 43.58 129.054 43.255 129.868 43.108 C 130.29 43.034 130.658 42.794 130.881 42.449 C 132.394 40.066 135.414 38.928 138.259 39.668 C 139.605 40.017 141.089 40.075 142.457 39.812 C 143.735 39.567 145.062 39.676 146.275 40.127 C 148.105 40.806 150.166 41.369 152.041 41.929 C 153.423 42.341 154.585 43.233 155.291 44.423 C 155.619 44.973 155.84 45.574 155.946 46.197 C 156.105 47.137 156.77 48.018 157.653 48.484 C 158.739 49.055 159.583 49.96 160.044 51.048 C 160.493 52.104 160.568 53.301 160.189 54.451 C 159.82 55.575 159.779 56.859 159.993 58.019 C 160.213 59.202 159.923 60.418 159.188 61.4 Z M 149.602 51.24 C 148.571 51.23 148.312 50.936 149.322 50.737 C 149.349 50.732 149.373 50.717 149.39 50.697 C 149.717 50.284 149.901 49.787 149.917 49.273 C 149.936 48.699 149.745 48.136 149.376 47.678 C 148.941 47.138 148.498 46.79 148.076 46.567 C 147.414 46.218 147.355 45.832 148.091 46.006 C 148.866 46.187 149.551 46.613 150.032 47.212 C 150.513 47.81 150.762 48.545 150.738 49.295 C 150.716 49.969 151.181 50.729 151.828 51.02 C 152.795 51.453 153.532 52.238 153.869 53.194 C 154.08 53.792 153.408 53.784 153.094 53.228 C 152.78 52.67 152.328 52.167 151.684 51.819 C 150.909 51.401 150.21 51.246 149.602 51.24 Z M 136.316 54.535 C 135.737 54.933 135.324 54.782 135.819 54.294 C 136.636 53.487 137.737 52.985 138.918 52.883 C 139.707 52.813 140.503 52.924 141.237 53.208 C 141.973 53.492 142.625 53.94 143.137 54.513 C 143.683 55.125 143.907 55.71 144.131 56.294 C 144.486 57.224 145.086 58.386 146.035 59.213 C 146.162 59.323 146.039 59.557 145.885 59.482 C 145.504 59.295 145.15 59.064 144.83 58.794 C 143.922 58.027 143.641 57.291 143.359 56.555 C 143.161 56.038 142.963 55.52 142.507 55.009 C 142.081 54.532 141.538 54.159 140.925 53.922 C 140.313 53.685 139.65 53.592 138.991 53.651 C 137.817 53.754 136.954 54.098 136.316 54.535 Z M 139.443 48.614 C 139.324 48.579 139.331 48.433 139.453 48.413 C 139.541 48.398 139.591 48.31 139.548 48.237 C 138.988 47.272 138.011 46.582 136.869 46.345 C 135.727 46.108 134.532 46.347 133.592 47.001 C 132.903 47.479 132.393 48.151 132.136 48.919 C 131.838 49.808 131.803 50.573 131.902 51.216 C 132.071 52.314 131.758 52.575 131.381 51.523 C 131.225 51.086 130.721 50.804 130.295 51.03 C 129.633 51.382 129.038 51.834 128.532 52.368 C 127.946 52.986 127.491 53.703 127.191 54.481 C 127.158 54.566 127.246 54.648 127.338 54.62 C 127.452 54.585 127.511 54.699 127.412 54.763 C 126.584 55.307 125.071 56.35 125.187 58.548 C 125.205 59.313 125.507 60.049 126.042 60.626 C 126.576 61.204 127.308 61.589 128.111 61.712 L 128.126 61.715 C 129.197 61.919 129.585 61.393 129.952 60.895 C 130.267 60.467 130.571 60.055 131.162 59.89 C 131.516 59.792 131.893 59.798 132.243 59.908 C 132.37 59.95 132.512 59.914 132.599 59.818 C 132.651 59.756 132.674 59.678 132.664 59.6 C 132.654 59.522 132.61 59.451 132.543 59.403 C 131.846 58.915 131.297 58.263 130.951 57.512 C 130.801 57.185 131.211 57.079 131.417 57.378 C 132.159 58.454 133.111 59.135 134.056 59.594 C 134.457 59.79 134.367 60.223 133.938 60.088 C 133.713 60.018 133.458 60.058 133.305 60.229 C 132.841 60.744 132.518 61.359 132.365 62.02 C 131.949 63.795 132.811 65.619 134.492 66.518 C 135.291 66.946 136.233 67.14 137.195 67.034 C 138.828 66.855 140.22 65.838 140.807 64.393 C 140.832 64.33 140.824 64.26 140.786 64.203 C 140.748 64.147 140.684 64.11 140.613 64.103 C 140.331 64.07 140.379 63.712 140.663 63.698 C 142.406 63.614 144.859 63.241 146.911 61.987 C 148.164 61.221 149.129 60.284 149.869 59.341 C 150.227 58.885 150.821 59.086 150.509 59.572 C 148.907 62.067 146.177 63.735 143.101 64.099 C 142.308 64.193 141.627 64.699 141.23 65.352 C 140.969 65.782 140.64 66.173 140.254 66.511 C 140.035 66.703 139.95 67.006 140.095 67.253 C 140.256 67.528 140.431 67.779 140.61 68.007 C 140.904 68.382 140.588 68.85 140.217 68.542 L 140.159 68.494 C 139.927 68.295 139.47 68.418 139.391 68.704 C 139.362 68.802 139.387 68.908 139.456 68.986 C 140.11 69.698 141.002 70.18 141.986 70.35 C 143.097 70.545 144.246 70.329 145.194 69.748 C 146.666 68.846 147.231 67.373 147.355 65.834 C 147.393 65.367 147.926 65.254 147.983 65.719 L 147.99 65.787 C 148.02 66.065 148.323 66.254 148.557 66.083 C 149.27 65.565 149.634 64.667 149.727 63.787 C 149.756 63.516 150.112 63.425 150.18 63.689 C 150.213 63.816 150.332 63.907 150.47 63.895 C 151.941 63.763 153.252 62.97 153.991 61.767 C 155.28 59.667 154.824 58.015 154.652 57.264 C 154.629 57.162 154.729 57.131 154.782 57.223 C 154.801 57.257 154.838 57.279 154.878 57.28 C 155.834 57.303 156.774 57.046 157.567 56.545 C 158.445 55.993 159.093 55.173 159.405 54.225 C 159.718 53.275 159.674 52.254 159.281 51.332 C 158.89 50.41 158.173 49.642 157.251 49.158 C 156.114 48.559 155.137 48.346 154.309 48.345 C 153.527 48.345 153.31 48.028 154.08 47.904 C 154.672 47.809 155.214 47.419 155.191 46.855 C 155.109 44.926 153.751 43.25 151.794 42.664 C 150.774 42.359 149.584 42.451 148.46 42.802 C 147.896 42.978 147.321 42.44 147.857 42.199 C 147.896 42.182 147.923 42.149 147.931 42.11 C 147.938 42.07 147.925 42.03 147.895 42.002 C 146.494 40.739 144.523 40.203 142.621 40.568 C 141.405 40.801 140.456 41.224 139.716 41.707 C 139.22 42.03 138.777 41.763 139.219 41.377 C 139.401 41.218 139.385 40.936 139.164 40.828 C 137.527 40.025 135.579 40.013 133.931 40.794 C 132.081 41.662 131.162 42.996 130.535 44.355 C 130.402 44.644 130.039 44.567 130.112 44.259 C 130.161 44.056 129.981 43.868 129.766 43.919 C 128.383 44.251 127.251 45.183 126.72 46.429 C 126.189 47.674 126.322 49.084 127.079 50.221 C 127.64 51.067 128.864 50.924 129.778 50.419 C 129.853 50.377 129.929 50.337 130.006 50.298 C 130.662 49.963 131.127 49.358 131.351 48.689 C 131.82 47.288 132.975 46.183 134.458 45.719 C 135.941 45.255 137.571 45.488 138.839 46.347 C 139.549 46.826 140.109 47.477 140.459 48.23 C 140.506 48.33 140.601 48.401 140.715 48.421 C 141.829 48.62 142.772 49.311 143.25 50.277 C 143.43 50.641 142.968 50.78 142.7 50.469 C 141.619 49.215 140.348 48.878 139.443 48.614 Z" fill="rgb(26,26,26)"></path><path d="M 128.637 65.287 C 128.493 65.02 128.38 64.74 128.3 64.45 C 128.184 64.025 128.518 63.635 128.962 63.5 C 129.637 63.294 130.436 63.716 130.629 64.358 C 131.034 65.708 131.931 66.88 133.162 67.671 C 134.648 68.626 135.301 70.555 133.542 70.192 C 132.248 69.924 131.241 68.968 130.969 67.749 C 130.926 67.562 130.745 67.431 130.542 67.44 C 130.346 67.45 130.182 67.596 130.195 67.78 C 130.285 69.086 131.048 70.268 132.238 70.947 C 133.656 71.758 135.447 71.723 136.828 70.856 C 137.606 70.369 138.192 69.655 138.495 68.824 C 138.728 68.189 137.998 67.724 137.288 67.802 C 136.179 67.924 135.057 67.71 134.087 67.189 C 133.116 66.67 132.347 65.872 131.893 64.912 C 131.267 63.593 131.289 62.082 131.954 60.779 C 131.989 60.711 131.955 60.629 131.877 60.613 C 131.717 60.582 131.551 60.588 131.394 60.631 C 131.08 60.718 130.858 61.021 130.627 61.334 C 130.146 61.986 129.639 62.674 128.279 62.519 C 128.178 62.508 128.078 62.493 127.979 62.474 C 127.979 62.474 127.979 62.474 127.979 62.474 L 127.979 62.474 C 127.821 62.45 127.665 62.418 127.512 62.377 C 127.267 62.312 126.997 62.419 126.937 62.651 C 126.848 62.996 126.82 63.353 126.853 63.706 C 127.098 66.312 129.436 66.991 131.291 67.337 C 130.142 67.029 129.181 66.286 128.637 65.287 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 136.569 65.84 C 135.45 65.754 134.466 65.11 133.992 64.153 C 133.518 63.196 133.628 62.073 134.279 61.213 C 134.508 60.911 134.313 60.206 133.939 60.088 C 133.713 60.018 133.458 60.058 133.305 60.229 C 132.841 60.745 132.518 61.36 132.365 62.02 C 132.058 63.332 132.445 64.702 133.404 65.698 C 134.363 66.693 135.776 67.191 137.195 67.034 C 138.685 66.871 139.985 66.007 140.646 64.742 C 140.805 64.438 140.567 64.103 140.212 64.049 C 139.936 64.007 139.665 64.148 139.526 64.377 C 138.925 65.361 137.773 65.931 136.569 65.84 Z M 140.254 66.511 C 140.035 66.703 139.95 67.006 140.095 67.253 C 140.256 67.528 140.431 67.779 140.61 68.007 C 140.904 68.382 140.588 68.85 140.217 68.542 L 140.159 68.494 C 139.927 68.295 139.47 68.418 139.391 68.704 C 139.362 68.802 139.387 68.908 139.457 68.986 C 140.11 69.699 141.002 70.18 141.986 70.35 C 143.098 70.545 144.246 70.329 145.194 69.748 C 146.236 69.109 146.823 68.185 147.122 67.153 C 147.183 66.941 146.47 66.71 146.288 66.847 C 145.714 67.281 144.993 67.505 144.257 67.478 C 143.32 67.444 142.383 66.85 142.275 65.974 C 142.19 65.284 142.527 64.608 143.145 64.228 C 143.186 64.203 143.149 64.093 143.102 64.099 C 142.308 64.193 141.627 64.7 141.23 65.352 C 140.969 65.782 140.64 66.173 140.254 66.511 Z M 138.082 54.656 C 139.736 54.548 141.298 55.383 142.045 56.775 C 142.73 58.273 144.127 59.379 145.814 59.758 C 145.984 59.796 146.04 59.558 145.885 59.482 C 145.504 59.295 145.15 59.064 144.83 58.794 C 143.922 58.027 143.641 57.292 143.359 56.555 C 143.161 56.038 142.963 55.52 142.507 55.009 C 142.081 54.532 141.538 54.159 140.925 53.922 C 140.313 53.685 139.65 53.592 138.991 53.651 C 135.342 53.972 134.693 56.612 134.499 57.192 C 135.056 55.756 136.46 54.763 138.082 54.656 Z M 128.398 59.086 C 127.156 58.688 126.45 57.457 126.778 56.263 C 127.112 55.042 128.103 52.888 129.153 52.104 C 129.676 51.714 130.378 51.61 131.003 51.829 C 131.118 51.869 131.42 51.632 131.381 51.523 C 131.225 51.086 130.721 50.804 130.295 51.03 C 128.856 51.796 127.755 53.019 127.191 54.481 C 127.158 54.566 127.246 54.648 127.338 54.62 C 127.452 54.585 127.511 54.699 127.413 54.763 C 126.584 55.307 125.071 56.35 125.187 58.548 C 125.205 59.313 125.507 60.049 126.042 60.626 C 126.576 61.204 127.308 61.589 128.112 61.712 L 128.126 61.715 C 129.198 61.919 129.585 61.393 129.952 60.895 C 130.267 60.467 130.571 60.055 131.162 59.89 C 131.516 59.792 131.893 59.798 132.243 59.908 C 132.37 59.95 132.512 59.915 132.599 59.818 C 132.651 59.756 132.675 59.677 132.664 59.599 C 132.654 59.522 132.61 59.451 132.543 59.403 C 132.408 59.308 132.277 59.207 132.152 59.099 C 131.696 58.706 130.885 58.704 130.331 58.964 C 129.73 59.246 129.034 59.29 128.398 59.086 Z M 132.425 50.265 C 132.896 49.047 134.051 48.178 135.419 48.014 C 137.91 47.713 140.747 49.165 142.62 50.738 C 142.99 51.048 143.31 51.405 143.573 51.8 C 142.381 49.416 140.609 48.954 139.443 48.614 C 139.324 48.579 139.331 48.433 139.454 48.413 C 139.541 48.398 139.591 48.31 139.549 48.237 C 138.834 47.009 137.459 46.248 135.97 46.257 C 135.114 46.262 134.281 46.522 133.593 47.001 C 132.903 47.479 132.393 48.151 132.136 48.919 C 131.52 50.759 132.026 52.065 132.526 52.867 C 132.134 52.045 132.097 51.112 132.425 50.265 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 131.351 48.689 C 131.986 46.792 133.851 45.498 135.967 45.486 C 136.261 45.484 136.409 45.114 136.131 45.022 C 135.18 44.706 134.149 44.667 133.174 44.913 C 132.196 45.159 130.782 44.433 131.467 43.731 C 132.887 42.276 135.005 41.614 137.069 41.98 C 137.26 42.014 137.393 42.103 137.361 42.283 C 137.296 42.649 137.95 42.862 138.166 42.551 C 138.465 42.121 138.818 41.727 139.219 41.377 C 139.401 41.218 139.385 40.936 139.164 40.828 C 137.527 40.025 135.579 40.013 133.931 40.794 C 132.081 41.662 131.162 42.997 130.535 44.355 C 130.402 44.644 130.039 44.567 130.112 44.259 C 130.161 44.056 129.981 43.868 129.766 43.919 C 129.173 44.061 128.618 44.316 128.135 44.668 C 127.361 45.23 126.805 46.014 126.552 46.902 C 126.229 48.029 126.42 49.232 127.079 50.221 C 127.64 51.067 128.864 50.924 129.778 50.419 C 129.853 50.377 129.929 50.337 130.006 50.298 C 130.662 49.963 131.127 49.358 131.351 48.689 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 141.506 41.94 C 142.478 41.84 143.449 41.971 144.334 42.308 C 145.434 42.725 146.788 42.679 147.857 42.199 C 147.896 42.182 147.923 42.149 147.931 42.11 C 147.938 42.07 147.925 42.03 147.895 42.002 C 146.494 40.739 144.523 40.203 142.621 40.568 C 138.926 41.277 137.692 43.737 137.321 44.299 C 138.283 42.977 139.812 42.115 141.506 41.94 Z M 151.794 42.664 C 149.487 41.975 146.304 43.317 145.003 45.09 C 146.63 43.216 149.554 42.911 151.579 44.405 C 153.263 45.649 152.129 47.909 150.914 49.566 C 151.735 48.687 152.853 48.101 154.08 47.904 C 154.672 47.809 155.214 47.42 155.191 46.855 C 155.16 46.133 154.949 45.429 154.574 44.798 C 153.97 43.78 152.976 43.016 151.794 42.664 Z M 150.017 65.53 C 149.665 66.305 148.974 66.899 148.123 67.162 C 147.999 67.199 147.905 67.294 147.874 67.412 C 147.866 67.442 147.878 67.474 147.905 67.493 C 149.74 68.787 152.212 68.947 154.218 67.902 C 155.248 67.368 156.082 66.553 156.608 65.564 C 156.962 64.902 157.168 64.179 157.216 63.439 C 157.231 63.195 156.962 63.035 156.714 63.11 C 156.312 63.231 155.895 63.302 155.474 63.321 C 154.497 63.365 153.501 63.606 152.645 64.052 C 152.188 64.29 151.693 64.466 151.177 64.571 C 150.653 64.678 150.228 65.066 150.017 65.53 Z M 151.303 67.787 C 150.802 67.688 150.826 66.956 150.995 66.502 C 151.138 66.119 151.71 65.481 152.138 65.428 C 152.704 65.358 153.238 65.136 153.673 64.789 C 154.026 64.506 154.711 64.499 155.174 64.522 C 155.51 64.538 156.027 64.784 155.941 65.09 C 155.406 67.007 153.367 68.193 151.303 67.787 Z M 146.973 52.161 C 148.387 51.791 149.9 51.969 151.173 52.656 C 151.699 52.94 152.637 52.503 152.171 52.138 C 152.019 52.018 151.856 51.912 151.684 51.819 C 149.022 50.382 147.268 52.061 146.973 52.161 Z M 155.621 49.667 C 156.925 50.519 157.637 51.968 157.481 53.454 C 157.325 54.94 156.327 56.23 154.871 56.827 C 154.805 56.854 154.754 56.907 154.731 56.971 C 154.707 57.035 154.714 57.106 154.748 57.166 C 154.789 57.235 154.864 57.28 154.949 57.281 C 155.881 57.29 156.794 57.034 157.567 56.545 C 158.445 55.993 159.093 55.173 159.404 54.225 C 159.718 53.276 159.674 52.254 159.281 51.332 C 158.889 50.41 158.173 49.643 157.251 49.158 C 156.661 48.847 156.114 48.64 155.609 48.513 C 155.114 48.389 155.2 49.392 155.621 49.667 Z M 154.668 57.333 C 154.975 59.8 153.232 62.081 150.647 62.596 C 150.249 62.675 150.002 63.138 150.124 63.502 C 150.201 63.733 150.422 63.906 150.677 63.872 C 152.067 63.687 153.289 62.911 153.991 61.767 C 155.242 59.729 154.85 58.113 154.668 57.333 Z M 148.557 66.083 C 149.574 65.343 149.882 63.829 149.703 62.699 C 149.723 63.479 149.262 64.199 148.519 64.547 C 148.155 64.718 147.88 65.099 147.946 65.476 C 147.965 65.58 147.98 65.684 147.99 65.787 C 148.02 66.065 148.323 66.254 148.557 66.083 Z M 147.358 62.634 C 146.991 62.859 147.121 63.308 147.507 63.115 C 149.039 62.348 150.278 61.151 151.053 59.692 C 151.264 59.293 150.754 59.191 150.509 59.572 C 149.718 60.804 148.641 61.85 147.358 62.634 Z M 155.422 59.528 C 155.44 60.448 155.191 61.355 154.702 62.151 C 154.603 62.312 154.696 62.522 154.893 62.539 C 155.423 62.583 155.957 62.527 156.463 62.375 C 157.294 62.125 158.015 61.627 158.516 60.956 C 159.299 59.91 159.462 58.561 158.948 57.377 C 158.802 57.039 158.346 56.983 158.024 57.186 C 157.624 57.439 157.188 57.642 156.727 57.787 C 155.969 58.027 155.407 58.777 155.422 59.528 Z M 157.8 60.819 C 157.209 61.485 156.343 60.724 156.255 59.862 C 156.25 59.808 156.243 59.755 156.235 59.701 C 156.141 59.039 156.599 58.298 157.259 58.052 C 157.896 57.813 158.706 58.043 158.676 58.687 C 158.64 59.469 158.332 60.218 157.8 60.819 Z M 124.838 65.99 C 125.172 65.945 125.507 66.093 125.705 66.351 C 126.178 66.971 126.869 67.414 127.656 67.603 C 128.278 67.752 128.867 68.08 129.236 68.573 C 127.384 69.044 125.414 68.414 124.251 66.979 C 123.926 66.578 124.307 66.061 124.838 65.99 Z M 129.236 68.573 C 129.374 68.513 129.444 68.37 129.421 68.229 C 129.4 68.096 129.385 67.963 129.375 67.829 C 129.353 67.55 129.158 67.31 128.877 67.217 C 128.102 66.96 127.421 66.499 126.917 65.888 C 126.434 65.303 125.644 64.918 124.858 64.975 C 124.761 64.982 124.664 64.987 124.566 64.989 C 123.575 65.016 122.619 65.735 123.071 66.566 C 124.221 68.681 126.941 69.566 129.236 68.573 Z M 126.033 63.773 C 126.008 63.513 126.011 63.252 126.041 62.992 C 126.113 62.318 125.889 61.646 125.421 61.131 C 124.286 59.903 123.38 58.35 122.392 57.013 C 122.221 56.781 122.066 56.538 121.929 56.286 C 121.609 55.697 120.805 55.42 120.345 55.919 C 119.894 56.412 119.548 56.982 119.327 57.598 C 118.89 58.816 118.967 60.145 119.543 61.311 C 120.116 62.477 121.145 63.391 122.415 63.864 C 123.512 64.275 124.723 64.332 125.858 64.025 C 125.973 63.991 126.046 63.885 126.033 63.773 Z M 122.853 59.001 C 123.375 59.301 123.771 59.811 123.962 60.357 C 124.302 61.332 124.209 62.732 123.133 62.56 C 122.161 62.405 121.29 61.904 120.702 61.16 C 120.229 60.563 119.965 59.843 119.946 59.1 C 119.914 57.883 121.639 58.23 122.71 58.914 C 122.757 58.944 122.805 58.973 122.853 59.001 Z M 125.4 53.188 C 125.347 53.327 125.314 53.471 125.302 53.618 C 125.269 53.993 124.822 54.572 124.522 54.821 C 124.253 55.044 123.664 55.234 123.472 54.95 C 122.454 53.443 122.534 51.501 123.672 50.071 C 124.257 49.337 125.323 49.89 125.656 50.753 C 125.675 50.802 125.694 50.85 125.714 50.898 C 126.001 51.585 125.664 52.494 125.4 53.188 Z M 122.895 56.327 C 123.433 57.144 124.664 56.706 125.299 55.953 C 125.329 55.918 125.359 55.883 125.391 55.848 C 125.807 55.387 126.178 54.863 126.39 54.292 C 126.891 52.945 126.631 51.298 126.022 49.991 C 126.003 49.952 125.986 49.912 125.968 49.872 C 125.654 49.148 124.779 48.651 124.14 49.151 C 122.959 50.073 122.207 51.392 122.046 52.827 C 121.907 54.05 122.206 55.282 122.895 56.327 Z" fill="rgba(40,40,40,0.4)"></path><g transform="translate(238.679 19.881)" id="ss12830415333_13"><g><defs><path d="M -1.646 20.495 C -1.646 9.081 8.196 -0.171 20.337 -0.171 C 32.478 -0.171 42.321 9.081 42.321 20.495 C 42.321 31.908 32.478 41.16 20.337 41.16 C 8.196 41.16 -1.646 31.908 -1.646 20.495 Z" id="a1152z"></path><filter id="a1154z" x="-28.0%" y="-39.6%" width="155.9%" height="178.9%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="6.18" in="SourceAlpha" result="a1156z"></feGaussianBlur><feOffset dx="0" dy="4.04" in="a1156z" result="a1157z"></feOffset><feComposite in="a1157z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1158z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1158z" result="a1159z"></feColorMatrix></filter></defs><use xlink:href="#a1152z" fill="rgb(23,23,23)" clip-path="url(#a1153z)"></use><use fill="black" fill-opacity="1" filter="url(#a1154z)" xlink:href="#a1152z"></use></g></g><path d="M 236.728 40.375 C 236.728 28.803 246.706 19.422 259.016 19.422 C 271.326 19.422 281.305 28.803 281.305 40.375 C 281.305 51.947 271.326 61.328 259.016 61.328 C 246.706 61.328 236.728 51.947 236.728 40.375 Z" fill="transparent" stroke-width="0.57" stroke="rgb(28,28,28)" stroke-miterlimit="10"></path><path d="M 260.645 32.721 L 257.388 32.721 C 254.718 32.721 253.383 32.721 252.436 33.344 C 252.086 33.574 251.782 33.861 251.537 34.19 C 250.874 35.079 250.874 36.334 250.874 38.844 C 250.874 41.354 250.874 42.609 251.537 43.499 C 251.782 43.828 252.086 44.114 252.436 44.345 C 253.383 44.967 254.718 44.967 257.388 44.967 L 260.645 44.967 C 263.315 44.967 264.649 44.967 265.596 44.345 C 265.946 44.114 266.25 43.828 266.496 43.499 C 267.158 42.609 267.158 41.354 267.158 38.844 C 267.158 36.334 267.158 35.079 266.496 34.19 C 266.25 33.861 265.946 33.574 265.596 33.344 C 264.649 32.721 263.315 32.721 260.645 32.721 Z" fill="transparent" stroke-width="1.16" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 262.273 37.313 L 263.272 38.123 C 263.692 38.462 263.901 38.633 263.901 38.844 C 263.901 39.056 263.692 39.225 263.272 39.566 L 262.273 40.375 M 255.759 37.313 L 254.761 38.123 C 254.341 38.462 254.131 38.633 254.131 38.844 C 254.131 39.056 254.341 39.225 254.761 39.566 L 255.759 40.375 M 259.83 36.548 L 258.202 41.14" fill="transparent" stroke-width="1.16" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 261.178 48.029 L 260.837 47.709 C 260.069 46.986 259.878 45.882 260.364 44.967 M 256.574 48.029 L 256.915 47.709 C 257.684 46.986 257.874 45.882 257.388 44.967 M 254.945 48.029 L 263.087 48.029" fill="transparent" stroke-width="1.16" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path><g transform="translate(0.717 51.728)" id="ss12830415333_19"><g><defs><path d="M -0.005 20.22 C -0.005 8.807 9.837 -0.446 21.978 -0.446 C 34.119 -0.446 43.962 8.807 43.962 20.22 C 43.962 31.633 34.119 40.886 21.978 40.886 C 9.837 40.886 -0.005 31.633 -0.005 20.22 Z" id="a1168z"></path><filter id="a1170z" x="-28.0%" y="-39.6%" width="155.9%" height="178.9%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="6.18" in="SourceAlpha" result="a1172z"></feGaussianBlur><feOffset dx="0" dy="4.04" in="a1172z" result="a1173z"></feOffset><feComposite in="a1173z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1174z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1174z" result="a1175z"></feColorMatrix></filter></defs><use xlink:href="#a1168z" fill="rgb(23,23,23)" clip-path="url(#a1169z)"></use><use fill="black" fill-opacity="1" filter="url(#a1170z)" xlink:href="#a1168z"></use></g></g><path d="M 0.407 71.948 C 0.407 60.376 10.386 50.995 22.696 50.995 C 35.005 50.995 44.984 60.376 44.984 71.948 C 44.984 83.52 35.005 92.901 22.696 92.901 C 10.386 92.901 0.407 83.52 0.407 71.948 Z" fill="transparent" stroke-width="0.57" stroke="rgb(28,28,28)" stroke-miterlimit="10"></path><path d="M 27.155 69.66 L 27.173 69.66 C 29.197 69.66 30.837 71.205 30.837 73.111 C 30.838 74.867 29.437 76.343 27.581 76.54 M 27.155 69.66 C 27.168 69.534 27.174 69.406 27.174 69.277 C 27.174 66.947 25.169 65.059 22.696 65.059 C 20.353 65.059 18.431 66.753 18.234 68.911 M 27.155 69.66 C 27.075 70.505 26.725 71.307 26.15 71.96 M 18.234 68.911 C 16.145 69.102 14.552 70.754 14.554 72.727 C 14.552 74.548 15.914 76.118 17.811 76.485 M 18.234 68.911 C 19.246 68.817 20.257 69.085 21.068 69.66 M 22.696 78.837 L 22.696 72.713 M 22.696 78.837 C 22.126 78.837 21.06 77.31 20.66 76.923 M 22.696 78.837 C 23.266 78.837 24.331 77.31 24.731 76.923" fill="transparent" stroke-width="1.16" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path><g transform="translate(77.578 37.831)" id="ss12830415333_23"><path d="M -0.535 6.563 C -0.535 2.758 2.746 -0.326 6.793 -0.326 C 10.84 -0.326 14.121 2.758 14.121 6.563 C 14.121 10.367 10.84 13.451 6.793 13.451 C 2.746 13.451 -0.535 10.367 -0.535 6.563 Z" fill="rgb(23,23,23)"></path></g><path d="M 76.738 44.393 C 76.738 40.43 80.155 37.218 84.371 37.218 C 88.587 37.218 92.004 40.43 92.004 44.393 C 92.004 48.356 88.587 51.569 84.371 51.569 C 80.155 51.569 76.738 48.356 76.738 44.393 Z" fill="transparent" stroke-width="0.57" stroke="rgb(255,207,6)" stroke-miterlimit="10"></path><path d="M 85.592 42.097 L 83.15 44.393 L 85.592 46.69" fill="transparent" stroke-width="0.57" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path><g transform="translate(188.258 60.993)" id="ss12830415333_27"><path d="M -1.298 6.363 C -1.298 2.558 1.982 -0.526 6.029 -0.526 C 10.076 -0.526 13.357 2.558 13.357 6.363 C 13.357 10.167 10.076 13.251 6.029 13.251 C 1.982 13.251 -1.298 10.167 -1.298 6.363 Z" fill="rgb(23,23,23)"></path></g><path d="M 186.654 67.356 C 186.654 63.393 190.072 60.18 194.288 60.18 C 198.503 60.18 201.921 63.393 201.921 67.356 C 201.921 71.319 198.503 74.531 194.288 74.531 C 190.072 74.531 186.654 71.319 186.654 67.356 Z" fill="transparent" stroke-width="0.57" stroke="rgb(255,207,6)" stroke-miterlimit="10"></path><path d="M 193.066 65.059 L 195.509 67.356 L 193.066 69.652" fill="transparent" stroke-width="0.57" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                          svgContentId: 12830415333,
                                        },
                                        x7xcyGr7h: {
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 494 205"><g transform="translate(155.425 84.504)" id="ss10213080528_1"><path d="M -0.627 17.909 C -0.627 7.792 39.615 -0.41 89.256 -0.41 C 138.897 -0.41 179.139 7.792 179.139 17.909 C 179.139 28.026 138.897 36.228 89.256 36.228 C 39.615 36.228 -0.627 28.026 -0.627 17.909 Z" fill="rgb(182,135,129)"></path></g><g transform="translate(154.888 14.026)" id="ss10213080528_3"><g><defs><path d="M -0.625 87.864 C -0.625 39.3 39.617 -0.068 89.258 -0.068 C 138.9 -0.068 179.142 39.3 179.142 87.864 C 179.142 136.427 138.9 175.796 89.258 175.796 C 39.617 175.796 -0.625 136.427 -0.625 87.864 Z" id="a1066z"></path><filter id="a1068z" x="-23.7%" y="-33.7%" width="147.4%" height="167.3%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="21.35" in="SourceAlpha" result="a1070z"></feGaussianBlur><feOffset dx="0" dy="16.6" in="a1070z" result="a1071z"></feOffset><feComposite in="a1071z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1072z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.6588235294117647   0 0 0 0 0.6588235294117647   0 0 0 0 0.6588235294117647  0 0 0 0.3 0" type="matrix" in="a1072z" result="a1073z"></feColorMatrix></filter></defs><use xlink:href="#a1066z" fill="rgb(23,23,23)" clip-path="url(#a1067z)"></use><use fill="black" fill-opacity="1" filter="url(#a1068z)" xlink:href="#a1066z"></use></g></g><path d="M 152.123 101.889 C 152.123 52.17 193.324 11.864 244.147 11.864 C 294.97 11.864 336.17 52.17 336.17 101.889 C 336.17 151.609 294.97 191.915 244.147 191.915 C 193.324 191.915 152.123 151.609 152.123 101.889 Z" fill="transparent" stroke-width="4.2" stroke="rgb(28,28,28)" stroke-miterlimit="10"></path><g transform="translate(189.268 47.687)" id="ss10213080528_6"><path d="M 89.12 -0.231 L 20.638 -0.231 C 8.818 -0.231 -0.763 9.142 -0.763 20.705 L -0.763 87.7 C -0.763 99.263 8.818 108.637 20.638 108.637 L 89.12 108.637 C 100.938 108.637 110.521 99.263 110.521 87.7 L 110.521 20.705 C 110.521 9.142 100.938 -0.231 89.12 -0.231 Z" fill="rgb(245,186,0)"></path></g><path d="M 222.396 120.149 C 221.549 119.082 220.165 118.381 218.789 118.484 C 218.618 118.497 218.448 118.506 218.278 118.51 C 216.539 118.56 214.865 119.871 215.656 121.385 C 216.348 122.709 217.4 123.82 218.697 124.596 C 220.882 125.908 223.566 126.15 225.96 125.252 C 226.509 125.046 226.772 124.464 226.72 123.891 C 226.714 123.823 226.709 123.756 226.704 123.688 C 226.666 123.18 226.323 122.742 225.831 122.573 C 224.472 122.105 223.279 121.263 222.396 120.149 Z M 231.223 110.833 C 231.284 110.71 231.225 110.559 231.089 110.531 C 230.808 110.473 230.517 110.484 230.241 110.564 C 229.692 110.723 229.302 111.274 228.899 111.845 C 227.996 113.118 227.042 114.465 224.258 113.923 L 224.258 113.924 C 223.982 113.88 223.709 113.821 223.44 113.747 C 223.011 113.629 222.537 113.824 222.432 114.247 C 222.276 114.876 222.226 115.526 222.285 116.171 C 222.647 120.184 225.627 121.692 228.503 122.443 C 228.865 122.538 228.849 122.983 228.474 122.99 C 228.382 122.99 228.293 123.026 228.228 123.09 C 228.163 123.155 228.127 123.242 228.128 123.332 C 228.201 125.812 229.553 128.087 231.721 129.374 C 233.656 130.526 236.02 130.759 238.15 130.007 C 240.281 129.255 241.948 127.599 242.685 125.504 C 243.093 124.345 241.813 123.497 240.569 123.639 C 238.625 123.863 236.66 123.471 234.96 122.522 C 233.259 121.575 231.912 120.12 231.116 118.37 C 230.019 115.964 230.059 113.208 231.223 110.833 Z M 219.776 111.476 C 217.787 109.235 216.198 106.404 214.468 103.966 C 214.168 103.542 213.896 103.099 213.656 102.64 C 213.095 101.567 211.686 101.06 210.882 101.971 C 210.09 102.869 209.484 103.909 209.098 105.032 C 208.331 107.253 208.466 109.677 209.477 111.803 C 210.48 113.929 212.282 115.597 214.508 116.459 C 216.384 117.188 218.5 117.326 220.541 116.751 C 220.742 116.69 220.871 116.497 220.847 116.293 C 220.805 115.819 220.809 115.342 220.861 114.869 C 220.987 113.64 220.595 112.414 219.776 111.476 Z M 219.722 101.841 C 220.452 101.001 221.102 100.044 221.474 99.004 C 222.352 96.548 221.896 93.544 220.828 91.161 C 220.796 91.089 220.765 91.017 220.734 90.944 C 220.184 89.624 218.65 88.718 217.53 89.63 C 215.461 91.31 214.144 93.715 213.862 96.332 C 213.618 98.562 214.142 100.808 215.348 102.715 C 216.291 104.205 218.449 103.406 219.561 102.033 C 219.614 101.969 219.667 101.905 219.722 101.841 Z M 271.085 113.335 C 270.911 113.629 271.074 114.012 271.419 114.043 C 272.347 114.123 273.283 114.021 274.17 113.743 C 276.03 113.161 277.557 111.847 278.383 110.117 C 279.21 108.387 279.262 106.398 278.525 104.629 C 278.268 104.013 277.47 103.911 276.906 104.281 C 276.204 104.743 275.44 105.112 274.632 105.378 C 273.305 105.814 272.32 107.183 272.346 108.552 C 272.378 110.229 271.942 111.883 271.085 113.335 Z M 259.121 122.928 C 259.107 122.984 259.128 123.042 259.174 123.076 C 262.389 125.436 266.722 125.729 270.238 123.823 C 273.298 122.169 275.28 119.097 275.489 115.683 C 275.516 115.238 275.044 114.947 274.61 115.084 C 273.906 115.304 273.176 115.433 272.437 115.468 C 270.726 115.548 268.98 115.989 267.481 116.801 C 266.679 117.236 265.812 117.556 264.908 117.749 C 263.989 117.943 263.244 118.651 262.875 119.496 C 262.257 120.909 261.047 121.993 259.555 122.472 C 259.339 122.54 259.174 122.713 259.121 122.928 Z M 278.945 111.966 C 277.908 113.41 277.086 115.078 276.81 116.821 C 276.625 117.993 276.253 119.129 275.71 120.188 C 273.449 124.604 268.538 127.092 263.547 126.35 C 260.811 125.943 257.525 126.891 255.206 128.368 C 252.909 129.837 250.058 130.217 247.442 129.402 C 245.305 128.742 242.429 129.161 240.565 130.378 C 237.679 132.265 233.936 132.343 230.971 130.577 C 229.519 129.713 228.349 128.46 227.6 126.967 C 227.402 126.576 226.933 126.396 226.516 126.551 C 225.396 126.976 224.204 127.194 223.003 127.192 C 219.363 127.193 216.031 125.197 214.376 122.026 C 213.045 119.475 211.407 116.821 209.567 114.594 C 209.011 113.919 208.541 113.18 208.168 112.392 C 207.004 109.941 206.849 107.146 207.733 104.586 C 208.259 103.055 209.136 101.663 210.298 100.516 C 211.472 99.359 212.254 97.809 212.43 96.188 C 212.847 92.335 215.217 88.947 218.737 87.171 C 219.544 86.765 220.13 86.021 220.365 85.163 C 220.891 83.247 222.045 81.553 223.65 80.34 C 224.799 79.47 226.141 78.878 227.567 78.609 C 228.307 78.474 228.952 78.037 229.344 77.408 C 231.994 73.062 237.286 70.986 242.271 72.336 C 244.629 72.973 247.23 73.078 249.627 72.599 C 251.867 72.151 254.191 72.351 256.317 73.173 C 259.524 74.411 263.136 75.437 266.422 76.46 C 268.843 77.21 270.88 78.836 272.116 81.006 C 272.691 82.011 273.079 83.106 273.264 84.243 C 273.543 85.957 274.708 87.563 276.256 88.412 C 278.159 89.454 279.638 91.105 280.445 93.087 C 281.231 95.014 281.363 97.196 280.7 99.294 C 280.053 101.344 279.981 103.686 280.356 105.799 C 280.741 107.956 280.234 110.175 278.945 111.966 Z M 262.148 93.439 C 260.341 93.421 259.888 92.884 261.657 92.521 C 261.705 92.512 261.747 92.485 261.776 92.447 C 262.349 91.695 262.671 90.789 262.7 89.852 C 262.732 88.805 262.398 87.778 261.751 86.943 C 260.99 85.958 260.212 85.323 259.473 84.917 C 258.314 84.28 258.21 83.577 259.5 83.893 C 260.857 84.225 262.058 85.002 262.901 86.094 C 263.745 87.184 264.181 88.524 264.138 89.891 C 264.099 91.121 264.914 92.506 266.048 93.038 C 267.743 93.827 269.034 95.258 269.624 97.001 C 269.995 98.091 268.816 98.078 268.267 97.063 C 267.717 96.046 266.924 95.128 265.796 94.495 C 264.437 93.731 263.214 93.449 262.148 93.439 Z M 238.866 99.447 C 237.851 100.172 237.129 99.898 237.996 99.008 C 239.428 97.536 241.357 96.621 243.425 96.434 C 244.809 96.306 246.204 96.51 247.49 97.027 C 248.78 97.545 249.922 98.362 250.819 99.408 C 251.776 100.522 252.168 101.59 252.561 102.655 C 253.183 104.35 254.233 106.469 255.897 107.977 C 256.12 108.178 255.904 108.605 255.634 108.468 C 254.967 108.127 254.345 107.706 253.786 107.213 C 252.194 105.814 251.702 104.473 251.207 103.13 C 250.861 102.188 250.513 101.244 249.714 100.311 C 248.968 99.441 248.017 98.761 246.943 98.328 C 245.871 97.897 244.708 97.728 243.554 97.835 C 241.497 98.023 239.984 98.65 238.866 99.447 Z M 244.346 88.649 C 244.138 88.585 244.149 88.319 244.364 88.283 C 244.518 88.256 244.605 88.095 244.53 87.962 C 243.549 86.202 241.837 84.944 239.836 84.512 C 237.835 84.08 235.741 84.516 234.094 85.708 C 232.886 86.58 231.992 87.805 231.542 89.206 C 231.02 90.827 230.957 92.221 231.131 93.394 C 231.428 95.397 230.879 95.873 230.219 93.954 C 229.945 93.158 229.063 92.643 228.316 93.055 C 227.156 93.697 226.113 94.521 225.227 95.495 C 224.2 96.622 223.402 97.929 222.876 99.348 C 222.818 99.504 222.972 99.653 223.134 99.601 C 223.333 99.538 223.437 99.745 223.265 99.863 C 221.813 100.855 219.161 102.757 219.365 106.764 C 219.396 108.16 219.926 109.501 220.863 110.554 C 221.798 111.609 223.081 112.31 224.489 112.535 L 224.515 112.54 C 226.392 112.911 227.071 111.952 227.714 111.045 C 228.266 110.265 228.799 109.513 229.836 109.213 C 230.455 109.033 231.116 109.044 231.729 109.244 C 231.951 109.322 232.2 109.256 232.353 109.08 C 232.444 108.968 232.485 108.825 232.467 108.682 C 232.449 108.54 232.373 108.411 232.256 108.325 C 231.033 107.434 230.071 106.244 229.466 104.875 C 229.202 104.279 229.92 104.085 230.282 104.63 C 231.582 106.593 233.251 107.834 234.907 108.673 C 235.609 109.029 235.451 109.819 234.7 109.574 C 234.306 109.445 233.859 109.518 233.591 109.829 C 232.777 110.77 232.211 111.891 231.943 113.095 C 231.213 116.334 232.725 119.659 235.671 121.298 C 237.071 122.078 238.721 122.432 240.406 122.239 C 243.268 121.913 245.708 120.058 246.736 117.424 C 246.779 117.309 246.765 117.181 246.699 117.078 C 246.633 116.974 246.521 116.906 246.396 116.895 C 245.902 116.835 245.986 116.181 246.484 116.156 C 249.539 116.003 253.836 115.323 257.432 113.036 C 259.628 111.639 261.319 109.931 262.615 108.211 C 263.242 107.379 264.284 107.746 263.737 108.633 C 260.929 113.183 256.146 116.224 250.756 116.888 C 249.366 117.059 248.173 117.981 247.478 119.172 C 247.02 119.957 246.443 120.669 245.768 121.286 C 245.383 121.637 245.234 122.188 245.488 122.638 C 245.771 123.14 246.077 123.598 246.39 124.014 C 246.905 124.697 246.353 125.552 245.702 124.99 L 245.6 124.901 C 245.194 124.538 244.393 124.763 244.255 125.285 C 244.205 125.464 244.247 125.657 244.369 125.799 C 245.514 127.098 247.078 127.975 248.801 128.286 C 250.75 128.641 252.763 128.248 254.422 127.188 C 257.002 125.544 257.992 122.858 258.21 120.051 C 258.277 119.2 259.211 118.994 259.31 119.842 L 259.323 119.966 C 259.375 120.472 259.906 120.817 260.317 120.505 C 261.565 119.56 262.203 117.922 262.367 116.318 C 262.417 115.824 263.041 115.658 263.16 116.14 C 263.217 116.371 263.426 116.538 263.668 116.515 C 266.245 116.274 268.544 114.828 269.838 112.635 C 272.097 108.805 271.299 105.793 270.997 104.424 C 270.956 104.237 271.131 104.181 271.224 104.349 C 271.258 104.411 271.322 104.451 271.393 104.452 C 273.068 104.495 274.715 104.026 276.105 103.112 C 277.642 102.105 278.779 100.611 279.325 98.881 C 279.873 97.15 279.797 95.288 279.108 93.606 C 278.423 91.924 277.167 90.525 275.551 89.642 C 273.559 88.55 271.847 88.16 270.395 88.16 C 269.025 88.159 268.644 87.581 269.994 87.355 C 271.032 87.182 271.982 86.471 271.941 85.442 C 271.797 81.924 269.418 78.869 265.988 77.8 C 264.202 77.244 262.116 77.412 260.147 78.051 C 259.158 78.372 258.15 77.391 259.091 76.952 C 259.158 76.921 259.206 76.86 259.219 76.789 C 259.232 76.717 259.208 76.644 259.156 76.592 C 256.701 74.29 253.247 73.312 249.915 73.978 C 247.785 74.403 246.121 75.173 244.824 76.054 C 243.956 76.643 243.179 76.156 243.953 75.452 C 244.272 75.163 244.244 74.648 243.857 74.451 C 240.988 72.988 237.576 72.965 234.687 74.39 C 231.445 75.973 229.835 78.405 228.737 80.883 C 228.504 81.409 227.867 81.269 227.995 80.708 C 228.081 80.338 227.765 79.995 227.389 80.089 C 224.965 80.693 222.982 82.393 222.051 84.665 C 221.12 86.936 221.354 89.506 222.68 91.581 C 223.664 93.122 225.808 92.862 227.41 91.94 C 227.541 91.865 227.675 91.791 227.81 91.72 C 228.959 91.11 229.773 90.007 230.167 88.787 C 230.987 86.231 233.013 84.216 235.611 83.37 C 238.21 82.524 241.065 82.95 243.288 84.515 C 244.532 85.39 245.513 86.576 246.126 87.95 C 246.208 88.131 246.376 88.261 246.575 88.297 C 248.526 88.661 250.18 89.921 251.017 91.683 C 251.332 92.346 250.523 92.6 250.052 92.032 C 248.158 89.746 245.932 89.131 244.346 88.649 Z" fill="rgb(26,26,26)"></path><path d="M 225.411 119.053 C 225.157 118.567 224.959 118.055 224.821 117.527 C 224.618 116.752 225.202 116.041 225.979 115.794 C 227.162 115.419 228.563 116.19 228.901 117.36 C 229.611 119.82 231.182 121.958 233.339 123.4 C 235.944 125.142 237.087 128.661 234.006 127.998 C 231.738 127.509 229.974 125.766 229.496 123.543 C 229.421 123.202 229.105 122.964 228.749 122.98 C 228.405 122.998 228.118 123.263 228.141 123.6 C 228.299 125.981 229.635 128.136 231.72 129.374 C 234.206 130.854 237.343 130.789 239.764 129.209 C 241.126 128.321 242.153 127.019 242.685 125.504 C 243.093 124.345 241.813 123.497 240.569 123.639 C 238.625 123.863 236.66 123.471 234.96 122.522 C 233.259 121.575 231.912 120.12 231.116 118.37 C 230.019 115.964 230.058 113.208 231.223 110.833 C 231.284 110.71 231.225 110.559 231.088 110.531 C 230.807 110.473 230.516 110.484 230.241 110.564 C 229.692 110.723 229.302 111.274 228.898 111.845 C 228.055 113.034 227.167 114.289 224.782 114.006 C 224.607 113.985 224.432 113.958 224.258 113.924 C 224.258 113.923 224.258 113.924 224.258 113.924 L 224.257 113.924 C 223.981 113.88 223.708 113.821 223.439 113.747 C 223.011 113.629 222.537 113.824 222.432 114.247 C 222.276 114.876 222.226 115.526 222.285 116.171 C 222.713 120.922 226.811 122.161 230.06 122.792 C 228.048 122.23 226.364 120.876 225.411 119.053 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 239.31 120.061 C 237.349 119.905 235.625 118.73 234.794 116.985 C 233.964 115.24 234.156 113.193 235.296 111.625 C 235.698 111.073 235.356 109.788 234.701 109.574 C 234.306 109.445 233.859 109.518 233.591 109.829 C 232.778 110.77 232.212 111.892 231.943 113.095 C 231.405 115.488 232.084 117.987 233.764 119.802 C 235.445 121.618 237.919 122.526 240.406 122.239 C 243.017 121.942 245.295 120.367 246.453 118.059 C 246.732 117.505 246.316 116.895 245.694 116.796 C 245.21 116.719 244.735 116.977 244.492 117.393 C 243.437 119.188 241.419 120.227 239.31 120.061 Z M 245.768 121.286 C 245.383 121.637 245.234 122.188 245.488 122.638 C 245.771 123.14 246.077 123.598 246.39 124.014 C 246.905 124.698 246.353 125.552 245.702 124.99 L 245.6 124.901 C 245.194 124.538 244.393 124.764 244.255 125.285 C 244.205 125.464 244.247 125.657 244.369 125.799 C 245.514 127.098 247.077 127.976 248.801 128.286 C 250.75 128.641 252.763 128.248 254.422 127.188 C 256.25 126.024 257.279 124.337 257.802 122.456 C 257.909 122.069 256.659 121.649 256.341 121.899 C 255.335 122.69 254.071 123.099 252.782 123.05 C 251.139 122.987 249.497 121.903 249.308 120.306 C 249.159 119.048 249.749 117.816 250.833 117.123 C 250.905 117.078 250.841 116.877 250.757 116.888 C 249.366 117.058 248.173 117.982 247.478 119.172 C 247.02 119.957 246.443 120.669 245.768 121.286 Z M 241.96 99.668 C 244.859 99.471 247.596 100.994 248.905 103.532 C 250.105 106.264 252.554 108.28 255.51 108.972 C 255.808 109.041 255.906 108.606 255.634 108.468 C 254.967 108.127 254.346 107.706 253.786 107.213 C 252.195 105.814 251.702 104.474 251.207 103.13 C 250.861 102.188 250.513 101.244 249.714 100.311 C 248.968 99.441 248.017 98.761 246.943 98.328 C 245.871 97.897 244.708 97.728 243.554 97.835 C 237.16 98.42 236.022 103.235 235.683 104.292 C 236.659 101.673 239.118 99.862 241.96 99.668 Z M 224.992 107.746 C 222.815 107.02 221.578 104.776 222.153 102.598 C 222.739 100.371 224.475 96.444 226.315 95.014 C 227.231 94.303 228.461 94.113 229.557 94.512 C 229.757 94.584 230.288 94.153 230.219 93.954 C 229.945 93.158 229.063 92.643 228.316 93.055 C 225.794 94.451 223.865 96.683 222.876 99.348 C 222.818 99.504 222.972 99.653 223.134 99.601 C 223.333 99.538 223.437 99.745 223.265 99.863 C 221.813 100.855 219.162 102.757 219.365 106.764 C 219.396 108.16 219.926 109.501 220.863 110.554 C 221.798 111.609 223.082 112.31 224.49 112.535 L 224.515 112.54 C 226.393 112.911 227.072 111.952 227.714 111.045 C 228.267 110.265 228.8 109.513 229.836 109.213 C 230.455 109.033 231.117 109.044 231.73 109.244 C 231.952 109.322 232.201 109.257 232.354 109.08 C 232.445 108.968 232.486 108.824 232.467 108.682 C 232.449 108.54 232.373 108.411 232.256 108.325 C 232.018 108.151 231.789 107.966 231.57 107.77 C 230.771 107.053 229.349 107.049 228.379 107.523 C 227.326 108.038 226.106 108.119 224.992 107.746 Z M 232.048 91.66 C 232.874 89.439 234.898 87.855 237.294 87.555 C 241.659 87.007 246.631 89.655 249.913 92.522 C 250.56 93.087 251.123 93.739 251.583 94.459 C 249.494 90.113 246.388 89.27 244.346 88.649 C 244.138 88.585 244.149 88.319 244.365 88.283 C 244.518 88.256 244.605 88.095 244.531 87.962 C 243.278 85.722 240.87 84.336 238.26 84.352 C 236.76 84.36 235.301 84.835 234.094 85.708 C 232.886 86.58 231.992 87.805 231.542 89.206 C 230.463 92.561 231.35 94.942 232.225 96.405 C 231.538 94.906 231.474 93.204 232.048 91.66 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 230.167 88.787 C 231.279 85.327 234.547 82.967 238.254 82.946 C 238.771 82.942 239.029 82.267 238.543 82.099 C 236.876 81.522 235.07 81.453 233.361 81.901 C 231.648 82.35 229.17 81.025 230.369 79.746 C 232.857 77.093 236.57 75.885 240.187 76.553 C 240.52 76.614 240.754 76.777 240.698 77.105 C 240.583 77.773 241.729 78.161 242.108 77.594 C 242.632 76.81 243.251 76.091 243.953 75.453 C 244.272 75.163 244.244 74.648 243.857 74.451 C 240.988 72.988 237.576 72.965 234.687 74.39 C 231.445 75.973 229.835 78.406 228.737 80.883 C 228.504 81.409 227.867 81.269 227.995 80.708 C 228.081 80.338 227.765 79.995 227.389 80.089 C 226.35 80.348 225.377 80.813 224.53 81.455 C 223.175 82.478 222.201 83.909 221.758 85.527 C 221.191 87.582 221.525 89.776 222.68 91.581 C 223.664 93.123 225.808 92.862 227.41 91.94 C 227.541 91.865 227.675 91.791 227.81 91.72 C 228.959 91.11 229.773 90.007 230.167 88.787 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 247.961 76.48 C 249.664 76.297 251.365 76.537 252.917 77.151 C 254.843 77.911 257.216 77.828 259.091 76.952 C 259.158 76.921 259.206 76.86 259.219 76.789 C 259.232 76.717 259.208 76.644 259.156 76.592 C 256.701 74.29 253.247 73.312 249.915 73.978 C 243.44 75.27 241.277 79.755 240.627 80.78 C 242.314 78.37 244.993 76.799 247.961 76.48 Z M 265.988 77.8 C 261.946 76.543 256.369 78.99 254.088 82.224 C 256.939 78.806 262.064 78.25 265.611 80.974 C 268.562 83.242 266.576 87.363 264.446 90.385 C 265.886 88.783 267.845 87.713 269.994 87.355 C 271.032 87.183 271.982 86.472 271.941 85.442 C 271.888 84.126 271.517 82.841 270.86 81.691 C 269.802 79.834 268.059 78.442 265.988 77.8 Z M 262.874 119.496 C 262.257 120.909 261.048 121.994 259.555 122.472 C 259.339 122.54 259.174 122.713 259.12 122.928 C 259.106 122.984 259.127 123.042 259.173 123.076 C 262.389 125.435 266.721 125.728 270.237 123.823 C 272.042 122.849 273.502 121.362 274.425 119.559 C 275.044 118.351 275.406 117.032 275.489 115.683 C 275.516 115.238 275.044 114.947 274.61 115.084 C 273.905 115.304 273.175 115.433 272.437 115.468 C 270.725 115.548 268.979 115.989 267.48 116.801 C 266.679 117.236 265.812 117.557 264.907 117.749 C 263.989 117.943 263.244 118.651 262.874 119.496 Z M 265.129 123.612 C 264.251 123.432 264.292 122.097 264.589 121.268 C 264.839 120.571 265.842 119.407 266.591 119.311 C 267.584 119.184 268.518 118.779 269.282 118.145 C 269.901 117.63 271.1 117.616 271.911 117.658 C 272.5 117.688 273.406 118.137 273.256 118.695 C 272.318 122.19 268.744 124.352 265.129 123.612 Z M 257.542 95.117 C 260.019 94.443 262.67 94.768 264.9 96.021 C 265.822 96.538 267.466 95.741 266.649 95.076 C 266.383 94.858 266.097 94.663 265.796 94.495 C 261.131 91.873 258.058 94.936 257.542 95.117 Z M 272.694 90.569 C 274.98 92.123 276.227 94.765 275.954 97.475 C 275.681 100.185 273.931 102.538 271.38 103.626 C 271.264 103.676 271.175 103.772 271.134 103.889 C 271.093 104.006 271.105 104.135 271.165 104.244 C 271.236 104.37 271.368 104.453 271.516 104.455 C 273.149 104.472 274.749 104.003 276.105 103.112 C 277.642 102.105 278.779 100.611 279.324 98.881 C 279.873 97.15 279.797 95.288 279.108 93.606 C 278.422 91.925 277.166 90.525 275.551 89.642 C 274.517 89.075 273.558 88.698 272.673 88.466 C 271.806 88.239 271.958 90.068 272.694 90.569 Z M 271.025 104.549 C 271.563 109.048 268.509 113.208 263.979 114.147 C 263.281 114.291 262.849 115.134 263.062 115.799 C 263.198 116.22 263.584 116.535 264.031 116.473 C 266.467 116.136 268.609 114.72 269.838 112.635 C 272.03 108.919 271.343 105.972 271.025 104.549 Z M 260.317 120.505 C 262.099 119.156 262.639 116.396 262.325 114.334 C 262.36 115.756 261.552 117.07 260.251 117.704 C 259.611 118.016 259.13 118.71 259.247 119.399 C 259.279 119.587 259.305 119.777 259.323 119.966 C 259.375 120.472 259.906 120.817 260.317 120.505 Z M 258.216 114.216 C 257.572 114.626 257.799 115.446 258.477 115.092 C 261.161 113.694 263.332 111.512 264.69 108.851 C 265.06 108.124 264.166 107.937 263.737 108.633 C 262.351 110.878 260.464 112.787 258.216 114.216 Z M 272.346 108.552 C 272.378 110.229 271.942 111.883 271.085 113.335 C 270.911 113.629 271.074 114.012 271.419 114.043 C 272.347 114.123 273.283 114.021 274.17 113.743 C 275.626 113.288 276.889 112.379 277.767 111.155 C 279.139 109.248 279.425 106.789 278.525 104.629 C 278.268 104.013 277.47 103.911 276.906 104.281 C 276.204 104.743 275.44 105.112 274.632 105.378 C 273.305 105.814 272.32 107.183 272.346 108.552 Z M 276.512 110.906 C 275.478 112.12 273.96 110.733 273.805 109.16 C 273.796 109.063 273.785 108.965 273.771 108.868 C 273.606 107.661 274.409 106.31 275.566 105.859 C 276.682 105.424 278.1 105.845 278.048 107.019 C 277.985 108.444 277.446 109.81 276.512 110.906 Z M 218.753 120.336 C 219.339 120.254 219.926 120.523 220.272 120.994 C 221.102 122.124 222.313 122.932 223.692 123.277 C 224.781 123.548 225.813 124.147 226.461 125.046 C 223.215 125.904 219.762 124.755 217.725 122.139 C 217.156 121.408 217.824 120.466 218.753 120.336 Z M 226.461 125.046 C 226.702 124.937 226.824 124.676 226.785 124.418 C 226.748 124.176 226.721 123.933 226.704 123.688 C 226.666 123.18 226.324 122.742 225.832 122.573 C 224.473 122.105 223.28 121.263 222.396 120.149 C 221.55 119.082 220.165 118.38 218.789 118.484 C 218.618 118.497 218.448 118.506 218.278 118.51 C 216.54 118.56 214.865 119.871 215.657 121.385 C 217.673 125.242 222.439 126.856 226.461 125.046 Z M 220.847 116.293 C 220.805 115.819 220.809 115.342 220.861 114.869 C 220.987 113.64 220.595 112.414 219.776 111.476 C 217.787 109.235 216.198 106.404 214.468 103.966 C 214.168 103.542 213.896 103.099 213.656 102.64 C 213.095 101.567 211.686 101.06 210.881 101.971 C 210.09 102.869 209.484 103.909 209.098 105.032 C 208.331 107.253 208.466 109.677 209.476 111.803 C 210.48 113.929 212.282 115.596 214.508 116.459 C 216.43 117.208 218.552 117.311 220.541 116.751 C 220.742 116.69 220.87 116.498 220.847 116.293 Z M 215.276 107.59 C 216.19 108.137 216.885 109.067 217.218 110.063 C 217.814 111.841 217.652 114.394 215.767 114.08 C 214.063 113.799 212.536 112.884 211.506 111.527 C 210.677 110.439 210.214 109.127 210.181 107.771 C 210.126 105.552 213.148 106.184 215.025 107.431 C 215.107 107.486 215.191 107.54 215.276 107.59 Z M 219.738 96.99 C 219.646 97.243 219.588 97.507 219.566 97.775 C 219.509 98.458 218.726 99.515 218.199 99.968 C 217.728 100.374 216.697 100.721 216.36 100.204 C 214.576 97.455 214.716 93.913 216.711 91.307 C 217.736 89.968 219.603 90.977 220.187 92.55 C 220.22 92.639 220.254 92.727 220.289 92.815 C 220.792 94.067 220.201 95.725 219.738 96.99 Z M 215.348 102.715 C 216.291 104.205 218.448 103.405 219.561 102.033 C 219.613 101.969 219.667 101.904 219.722 101.841 C 220.452 101.001 221.102 100.044 221.473 99.004 C 222.352 96.548 221.896 93.544 220.828 91.161 C 220.796 91.089 220.765 91.017 220.734 90.944 C 220.183 89.624 218.65 88.718 217.53 89.629 C 215.461 91.31 214.144 93.715 213.861 96.332 C 213.618 98.562 214.142 100.808 215.348 102.715 Z" fill="rgba(40,40,40,0.4)"></path><g transform="translate(417.034 36.116)" id="ss10213080528_13"><g><defs><path d="M -1.682 37.51 C -1.682 16.697 15.565 -0.175 36.84 -0.175 C 58.114 -0.175 75.361 16.697 75.361 37.51 C 75.361 58.323 58.114 75.195 36.84 75.195 C 15.565 75.195 -1.682 58.323 -1.682 37.51 Z" id="a1088z"></path><filter id="a1090z" x="-29.4%" y="-40.4%" width="158.7%" height="180.7%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="11.35" in="SourceAlpha" result="a1092z"></feGaussianBlur><feOffset dx="0" dy="7.8" in="a1092z" result="a1093z"></feOffset><feComposite in="a1093z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1094z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1094z" result="a1095z"></feColorMatrix></filter></defs><use xlink:href="#a1088z" fill="rgb(23,23,23)" clip-path="url(#a1089z)"></use><use fill="black" fill-opacity="1" filter="url(#a1090z)" xlink:href="#a1088z"></use></g></g><path d="M 414.817 73.626 C 414.817 52.524 432.303 35.417 453.874 35.417 C 475.444 35.417 492.93 52.524 492.93 73.626 C 492.93 94.728 475.444 111.834 453.874 111.834 C 432.303 111.834 414.817 94.728 414.817 73.626 Z" fill="transparent" stroke-width="1.03" stroke="rgb(28,28,28)" stroke-miterlimit="10"></path><path d="M 456.727 59.668 L 451.02 59.668 C 446.341 59.668 444.003 59.668 442.344 60.804 C 441.731 61.224 441.197 61.746 440.767 62.346 C 439.606 63.969 439.606 66.257 439.606 70.834 C 439.606 75.411 439.606 77.699 440.767 79.322 C 441.197 79.922 441.731 80.444 442.344 80.864 C 444.003 82 446.341 82 451.02 82 L 456.727 82 C 461.406 82 463.745 82 465.403 80.864 C 466.017 80.444 466.55 79.922 466.98 79.322 C 468.141 77.699 468.141 75.411 468.141 70.834 C 468.141 66.257 468.141 63.969 466.98 62.346 C 466.55 61.746 466.017 61.224 465.403 60.804 C 463.745 59.668 461.406 59.668 456.727 59.668 Z" fill="transparent" stroke-width="2.1" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 459.581 68.043 L 461.331 69.519 C 462.067 70.138 462.434 70.448 462.434 70.834 C 462.434 71.22 462.067 71.529 461.331 72.15 L 459.581 73.626 M 448.167 68.043 L 446.417 69.519 C 445.682 70.138 445.313 70.448 445.313 70.834 C 445.313 71.22 445.682 71.529 446.417 72.15 L 448.167 73.626 M 455.3 66.647 L 452.447 75.021" fill="transparent" stroke-width="2.1" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 457.662 87.583 L 457.065 86.999 C 455.718 85.681 455.384 83.667 456.236 82 M 449.594 87.583 L 450.192 86.999 C 451.539 85.681 451.873 83.667 451.021 82 M 446.74 87.583 L 461.007 87.583" fill="transparent" stroke-width="2.1" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path><g transform="translate(1.253 93.971)" id="ss10213080528_19"><g><defs><path d="M -0.005 37.229 C -0.005 16.416 17.242 -0.456 38.516 -0.456 C 59.791 -0.456 77.038 16.416 77.038 37.229 C 77.038 58.042 59.791 74.914 38.516 74.914 C 17.242 74.914 -0.005 58.042 -0.005 37.229 Z" id="a1104z"></path><filter id="a1106z" x="-29.4%" y="-40.4%" width="158.7%" height="180.7%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="11.35" in="SourceAlpha" result="a1108z"></feGaussianBlur><feOffset dx="0" dy="7.8" in="a1108z" result="a1109z"></feOffset><feComposite in="a1109z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1110z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1110z" result="a1111z"></feColorMatrix></filter></defs><use xlink:href="#a1104z" fill="rgb(23,23,23)" clip-path="url(#a1105z)"></use><use fill="black" fill-opacity="1" filter="url(#a1106z)" xlink:href="#a1104z"></use></g></g><path d="M 0.713 131.2 C 0.713 110.098 18.199 92.992 39.77 92.992 C 61.34 92.992 78.826 110.098 78.826 131.2 C 78.826 152.302 61.34 169.409 39.77 169.409 C 18.199 169.409 0.713 152.302 0.713 131.2 Z" fill="transparent" stroke-width="1.03" stroke="rgb(28,28,28)" stroke-miterlimit="10"></path><path d="M 47.584 127.028 L 47.616 127.028 C 51.162 127.028 54.036 129.845 54.036 133.321 C 54.038 136.522 51.582 139.214 48.33 139.574 M 47.585 127.028 C 47.606 126.798 47.617 126.564 47.617 126.329 C 47.617 122.081 44.103 118.638 39.77 118.638 C 35.665 118.638 32.297 121.726 31.952 125.662 M 47.585 127.028 C 47.443 128.568 46.83 130.03 45.823 131.223 M 31.952 125.662 C 28.291 126.011 25.5 129.023 25.503 132.621 C 25.5 135.941 27.885 138.805 31.209 139.473 M 31.952 125.662 C 33.724 125.491 35.496 125.979 36.917 127.028 M 39.77 143.762 L 39.77 132.596 M 39.77 143.762 C 38.771 143.762 36.904 140.978 36.203 140.272 M 39.77 143.762 C 40.768 143.762 42.635 140.978 43.336 140.272" fill="transparent" stroke-width="2.1" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path><g transform="translate(135.549 68.725)" id="ss10213080528_23"><path d="M -0.547 12.228 C -0.547 5.29 5.202 -0.334 12.294 -0.334 C 19.385 -0.334 25.134 5.29 25.134 12.228 C 25.134 19.166 19.385 24.79 12.294 24.79 C 5.202 24.79 -0.547 19.166 -0.547 12.228 Z" fill="rgb(23,23,23)"></path></g><path d="M 134.468 80.953 C 134.468 73.726 140.456 67.868 147.843 67.868 C 155.23 67.868 161.219 73.726 161.219 80.953 C 161.219 88.18 155.23 94.038 147.843 94.038 C 140.456 94.038 134.468 88.18 134.468 80.953 Z" fill="transparent" stroke-width="1.03" stroke="rgb(255,207,6)" stroke-miterlimit="10"></path><path d="M 149.983 76.766 L 145.703 80.953 L 149.983 85.14" fill="transparent" stroke-width="1.5" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path><g transform="translate(328.936 110.802)" id="ss10213080528_27"><path d="M -1.326 12.024 C -1.326 5.086 4.423 -0.538 11.514 -0.538 C 18.606 -0.538 24.355 5.086 24.355 12.024 C 24.355 18.961 18.606 24.586 11.514 24.586 C 4.423 24.586 -1.326 18.961 -1.326 12.024 Z" fill="rgb(23,23,23)"></path></g><path d="M 327.074 122.826 C 327.074 115.599 333.063 109.74 340.45 109.74 C 347.837 109.74 353.825 115.599 353.825 122.826 C 353.825 130.052 347.837 135.911 340.45 135.911 C 333.063 135.911 327.074 130.052 327.074 122.826 Z" fill="transparent" stroke-width="1.03" stroke="rgb(255,207,6)" stroke-miterlimit="10"></path><path d="M 338.31 118.638 L 342.59 122.826 L 338.31 127.013" fill="transparent" stroke-width="1.5" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                          svgContentId: 10213080528,
                                        },
                                      },
                                      children: e(ze, {
                                        className: "framer-nljd63",
                                        "data-framer-name": "Graphic",
                                        layout: "position",
                                        name: "Graphic",
                                        opacity: 1,
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 554 235"><g transform="translate(173.6 96.4)" id="ss9606197608_1"><path d="M 0 21 C 0 9.402 45.13 0 100.8 0 C 156.47 0 201.6 9.402 201.6 21 C 201.6 32.598 156.47 42 100.8 42 C 45.13 42 0 32.598 0 21 Z" fill="rgb(182,135,129)"></path></g><g transform="translate(173 16)" id="ss9606197608_3"><g><defs><path d="M 0 100.8 C 0 45.13 45.13 0 100.8 0 C 156.47 0 201.6 45.13 201.6 100.8 C 201.6 156.47 156.47 201.6 100.8 201.6 C 45.13 201.6 0 156.47 0 100.8 Z" id="a1002z"></path><filter id="a1004z" x="-24.3%" y="-33.7%" width="148.5%" height="167.4%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="24.5" in="SourceAlpha" result="a1006z"></feGaussianBlur><feOffset dx="0" dy="19" in="a1006z" result="a1007z"></feOffset><feComposite in="a1007z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1008z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.6588235294117647   0 0 0 0 0.6588235294117647   0 0 0 0 0.6588235294117647  0 0 0 0.3 0" type="matrix" in="a1008z" result="a1009z"></feColorMatrix></filter></defs><use xlink:href="#a1002z" fill="rgb(23,23,23)" clip-path="url(#a1003z)"></use><use fill="black" fill-opacity="1" filter="url(#a1004z)" xlink:href="#a1002z"></use></g></g><path d="M 170.6 116.8 C 170.6 59.804 216.804 13.6 273.8 13.6 C 330.796 13.6 377 59.804 377 116.8 C 377 173.796 330.796 220 273.8 220 C 216.804 220 170.6 173.796 170.6 116.8 Z" fill="transparent" stroke-width="4.8" stroke="rgb(28,28,28)" stroke-miterlimit="10" stroke-dasharray=""></path><g transform="translate(211.4 54.4)" id="ss9606197608_6"><path d="M 100.8 0 L 24 0 C 10.745 0 0 10.745 0 24 L 0 100.8 C 0 114.055 10.745 124.8 24 124.8 L 100.8 124.8 C 114.054 124.8 124.8 114.055 124.8 100.8 L 124.8 24 C 124.8 10.745 114.054 0 100.8 0 Z" fill="rgb(245,186,0)"></path></g><path d="M 249.408 137.732 C 248.458 136.509 246.906 135.705 245.363 135.823 C 245.171 135.838 244.98 135.848 244.789 135.853 C 242.839 135.91 240.962 137.413 241.849 139.149 C 242.625 140.667 243.805 141.94 245.259 142.83 C 247.71 144.333 250.72 144.611 253.404 143.581 C 254.02 143.345 254.315 142.678 254.257 142.021 C 254.25 141.944 254.244 141.866 254.239 141.789 C 254.196 141.206 253.812 140.704 253.26 140.511 C 251.736 139.974 250.398 139.009 249.408 137.732 Z M 259.307 127.053 C 259.375 126.911 259.309 126.738 259.156 126.706 C 258.841 126.64 258.515 126.653 258.206 126.744 C 257.59 126.926 257.153 127.558 256.7 128.212 C 255.688 129.672 254.618 131.216 251.496 130.595 L 251.496 130.596 C 251.186 130.546 250.88 130.478 250.578 130.393 C 250.097 130.258 249.566 130.481 249.448 130.966 C 249.273 131.687 249.217 132.433 249.283 133.172 C 249.689 137.772 253.031 139.5 256.256 140.362 C 256.662 140.47 256.644 140.98 256.224 140.988 C 256.12 140.988 256.021 141.03 255.948 141.103 C 255.875 141.177 255.835 141.277 255.836 141.381 C 255.917 144.224 257.434 146.831 259.865 148.307 C 262.035 149.628 264.686 149.894 267.075 149.032 C 269.465 148.17 271.335 146.272 272.161 143.87 C 272.618 142.542 271.183 141.57 269.788 141.733 C 267.608 141.989 265.404 141.54 263.498 140.452 C 261.59 139.366 260.079 137.698 259.187 135.692 C 257.957 132.934 258.001 129.775 259.307 127.053 Z M 246.469 127.789 C 244.239 125.221 242.457 121.975 240.517 119.181 C 240.18 118.695 239.876 118.187 239.606 117.66 C 238.977 116.43 237.397 115.849 236.495 116.894 C 235.607 117.923 234.927 119.115 234.494 120.403 C 233.634 122.949 233.786 125.727 234.919 128.164 C 236.045 130.602 238.065 132.513 240.562 133.502 C 242.665 134.338 245.038 134.496 247.327 133.836 C 247.553 133.766 247.697 133.546 247.671 133.311 C 247.623 132.768 247.628 132.221 247.686 131.679 C 247.828 130.271 247.388 128.865 246.469 127.789 Z M 246.409 116.745 C 247.227 115.782 247.956 114.685 248.374 113.492 C 249.358 110.677 248.847 107.233 247.649 104.502 C 247.613 104.419 247.578 104.336 247.544 104.253 C 246.927 102.74 245.207 101.701 243.951 102.746 C 241.63 104.672 240.154 107.429 239.837 110.429 C 239.564 112.986 240.151 115.561 241.504 117.747 C 242.561 119.454 244.981 118.538 246.228 116.965 C 246.287 116.891 246.348 116.817 246.409 116.745 Z M 304.01 129.921 C 303.815 130.258 303.998 130.697 304.385 130.732 C 305.426 130.824 306.475 130.707 307.47 130.388 C 309.555 129.722 311.268 128.215 312.195 126.232 C 313.122 124.249 313.18 121.968 312.354 119.941 C 312.066 119.234 311.171 119.117 310.538 119.542 C 309.751 120.071 308.894 120.494 307.988 120.799 C 306.5 121.299 305.395 122.868 305.424 124.438 C 305.46 126.36 304.971 128.256 304.01 129.921 Z M 290.593 140.918 C 290.577 140.981 290.601 141.048 290.653 141.087 C 294.258 143.793 299.117 144.128 303.06 141.943 C 306.493 140.048 308.715 136.526 308.949 132.612 C 308.98 132.102 308.45 131.769 307.963 131.925 C 307.174 132.177 306.355 132.326 305.527 132.366 C 303.608 132.458 301.65 132.963 299.969 133.894 C 299.069 134.392 298.097 134.759 297.083 134.98 C 296.052 135.203 295.217 136.014 294.803 136.983 C 294.11 138.602 292.754 139.845 291.08 140.395 C 290.838 140.473 290.653 140.671 290.593 140.918 Z M 312.825 128.351 C 311.662 130.006 310.74 131.919 310.431 133.917 C 310.223 135.26 309.807 136.562 309.197 137.777 C 306.662 142.839 301.154 145.691 295.557 144.84 C 292.489 144.374 288.803 145.46 286.203 147.154 C 283.626 148.838 280.429 149.273 277.496 148.339 C 275.099 147.582 271.874 148.063 269.783 149.458 C 266.547 151.621 262.349 151.71 259.024 149.686 C 257.396 148.695 256.084 147.259 255.244 145.548 C 255.022 145.1 254.496 144.893 254.028 145.071 C 252.772 145.558 251.436 145.807 250.088 145.806 C 246.007 145.806 242.27 143.518 240.414 139.883 C 238.921 136.959 237.084 133.917 235.021 131.364 C 234.396 130.59 233.87 129.742 233.452 128.84 C 232.147 126.03 231.972 122.826 232.964 119.891 C 233.554 118.137 234.537 116.541 235.84 115.226 C 237.157 113.899 238.034 112.123 238.231 110.264 C 238.699 105.848 241.357 101.963 245.304 99.928 C 246.209 99.462 246.866 98.609 247.13 97.626 C 247.72 95.43 249.014 93.487 250.814 92.097 C 252.102 91.1 253.607 90.421 255.207 90.113 C 256.036 89.957 256.76 89.457 257.199 88.736 C 260.171 83.754 266.106 81.374 271.697 82.922 C 274.341 83.652 277.258 83.772 279.946 83.223 C 282.458 82.71 285.065 82.939 287.449 83.881 C 291.045 85.3 295.096 86.477 298.781 87.649 C 301.496 88.509 303.78 90.373 305.167 92.861 C 305.811 94.012 306.247 95.268 306.454 96.571 C 306.767 98.536 308.073 100.377 309.809 101.35 C 311.943 102.545 313.602 104.437 314.507 106.71 C 315.389 108.918 315.537 111.42 314.793 113.825 C 314.067 116.175 313.987 118.859 314.407 121.282 C 314.839 123.755 314.27 126.298 312.825 128.351 Z M 293.988 107.113 C 291.961 107.092 291.453 106.477 293.437 106.061 C 293.491 106.05 293.538 106.02 293.571 105.976 C 294.213 105.114 294.574 104.075 294.607 103.001 C 294.643 101.801 294.268 100.624 293.543 99.666 C 292.689 98.537 291.817 97.809 290.988 97.344 C 289.688 96.614 289.572 95.808 291.018 96.17 C 292.54 96.55 293.886 97.441 294.832 98.693 C 295.778 99.943 296.268 101.479 296.219 103.046 C 296.176 104.456 297.09 106.044 298.362 106.653 C 300.262 107.558 301.71 109.198 302.372 111.196 C 302.788 112.446 301.466 112.431 300.85 111.267 C 300.233 110.101 299.344 109.049 298.079 108.323 C 296.555 107.448 295.183 107.125 293.988 107.113 Z M 267.878 114 C 266.74 114.831 265.93 114.517 266.902 113.497 C 268.508 111.809 270.671 110.761 272.991 110.546 C 274.543 110.4 276.107 110.633 277.549 111.226 C 278.996 111.82 280.277 112.757 281.283 113.955 C 282.356 115.233 282.796 116.457 283.236 117.678 C 283.934 119.621 285.112 122.05 286.978 123.778 C 287.228 124.009 286.985 124.498 286.683 124.341 C 285.934 123.951 285.238 123.468 284.61 122.903 C 282.825 121.299 282.273 119.762 281.718 118.222 C 281.33 117.142 280.94 116.06 280.044 114.991 C 279.207 113.993 278.14 113.213 276.936 112.718 C 275.734 112.224 274.43 112.029 273.136 112.152 C 270.829 112.368 269.132 113.086 267.878 114 Z M 274.024 101.622 C 273.79 101.549 273.803 101.244 274.044 101.202 C 274.216 101.172 274.314 100.987 274.23 100.834 C 273.129 98.817 271.21 97.375 268.966 96.879 C 266.722 96.384 264.373 96.884 262.526 98.251 C 261.172 99.251 260.17 100.654 259.664 102.26 C 259.079 104.119 259.009 105.717 259.204 107.061 C 259.537 109.358 258.921 109.903 258.181 107.703 C 257.874 106.791 256.884 106.2 256.047 106.673 C 254.746 107.409 253.576 108.354 252.582 109.47 C 251.431 110.762 250.536 112.261 249.946 113.887 C 249.881 114.065 250.054 114.236 250.235 114.177 C 250.459 114.104 250.575 114.342 250.382 114.477 C 248.754 115.614 245.78 117.795 246.008 122.388 C 246.043 123.988 246.638 125.526 247.689 126.733 C 248.737 127.942 250.176 128.745 251.755 129.003 L 251.784 129.009 C 253.889 129.435 254.651 128.335 255.372 127.295 C 255.991 126.401 256.588 125.539 257.751 125.195 C 258.446 124.99 259.187 125.002 259.874 125.231 C 260.124 125.32 260.402 125.245 260.574 125.043 C 260.676 124.914 260.722 124.75 260.702 124.587 C 260.681 124.424 260.596 124.276 260.465 124.177 C 259.094 123.156 258.015 121.792 257.336 120.223 C 257.04 119.539 257.846 119.317 258.251 119.942 C 259.709 122.192 261.581 123.615 263.438 124.576 C 264.226 124.984 264.048 125.89 263.206 125.609 C 262.764 125.461 262.263 125.545 261.962 125.902 C 261.049 126.98 260.415 128.266 260.114 129.646 C 259.296 133.358 260.991 137.17 264.295 139.049 C 265.865 139.943 267.715 140.349 269.605 140.128 C 272.815 139.754 275.551 137.627 276.704 134.608 C 276.752 134.476 276.737 134.33 276.662 134.211 C 276.588 134.092 276.463 134.015 276.323 134.001 C 275.769 133.933 275.863 133.183 276.421 133.154 C 279.847 132.979 284.666 132.199 288.699 129.578 C 291.162 127.976 293.058 126.018 294.511 124.047 C 295.215 123.093 296.383 123.514 295.77 124.53 C 292.621 129.746 287.257 133.233 281.212 133.993 C 279.653 134.189 278.316 135.247 277.536 136.612 C 277.022 137.511 276.375 138.328 275.618 139.035 C 275.187 139.437 275.019 140.069 275.304 140.585 C 275.622 141.16 275.965 141.686 276.316 142.162 C 276.894 142.945 276.274 143.925 275.544 143.281 L 275.43 143.179 C 274.975 142.763 274.076 143.021 273.922 143.619 C 273.865 143.825 273.913 144.045 274.05 144.209 C 275.334 145.698 277.087 146.703 279.02 147.06 C 281.205 147.467 283.463 147.016 285.324 145.801 C 288.217 143.916 289.327 140.837 289.572 137.619 C 289.647 136.644 290.694 136.408 290.805 137.38 L 290.82 137.522 C 290.878 138.102 291.473 138.498 291.934 138.14 C 293.334 137.057 294.05 135.179 294.233 133.34 C 294.289 132.774 294.989 132.584 295.123 133.136 C 295.187 133.401 295.421 133.592 295.693 133.566 C 298.583 133.289 301.16 131.632 302.612 129.118 C 305.145 124.728 304.25 121.275 303.912 119.705 C 303.866 119.491 304.062 119.427 304.166 119.62 C 304.204 119.691 304.276 119.736 304.356 119.738 C 306.234 119.787 308.081 119.25 309.64 118.202 C 311.364 117.047 312.639 115.334 313.251 113.351 C 313.866 111.367 313.78 109.232 313.008 107.304 C 312.239 105.377 310.831 103.772 309.019 102.76 C 306.785 101.508 304.865 101.062 303.237 101.061 C 301.7 101.06 301.273 100.398 302.787 100.139 C 303.951 99.94 305.016 99.125 304.97 97.946 C 304.809 93.912 302.14 90.411 298.294 89.185 C 296.291 88.548 293.952 88.74 291.744 89.473 C 290.635 89.841 289.504 88.716 290.559 88.213 C 290.635 88.178 290.688 88.108 290.703 88.026 C 290.718 87.944 290.691 87.86 290.632 87.801 C 287.879 85.161 284.006 84.041 280.269 84.804 C 277.88 85.291 276.014 86.174 274.56 87.184 C 273.586 87.859 272.715 87.301 273.583 86.494 C 273.941 86.162 273.909 85.572 273.475 85.346 C 270.258 83.669 266.431 83.643 263.192 85.276 C 259.556 87.091 257.75 89.879 256.519 92.719 C 256.257 93.323 255.543 93.162 255.687 92.519 C 255.783 92.095 255.429 91.701 255.007 91.809 C 252.289 92.502 250.065 94.451 249.021 97.055 C 247.977 99.659 248.239 102.604 249.726 104.983 C 250.83 106.75 253.234 106.451 255.031 105.395 C 255.178 105.309 255.328 105.224 255.479 105.142 C 256.768 104.443 257.681 103.179 258.122 101.78 C 259.042 98.85 261.314 96.54 264.228 95.57 C 267.142 94.6 270.344 95.089 272.837 96.883 C 274.233 97.886 275.332 99.246 276.02 100.821 C 276.112 101.028 276.3 101.177 276.523 101.219 C 278.712 101.635 280.566 103.08 281.505 105.1 C 281.858 105.86 280.951 106.151 280.423 105.5 C 278.299 102.88 275.802 102.174 274.024 101.622 Z" fill="rgb(26,26,26)"></path><path d="M 252.789 136.475 C 252.504 135.918 252.282 135.332 252.127 134.726 C 251.899 133.838 252.554 133.023 253.426 132.74 C 254.753 132.31 256.324 133.193 256.703 134.535 C 257.499 137.355 259.261 139.806 261.68 141.459 C 264.601 143.455 265.883 147.489 262.428 146.729 C 259.885 146.169 257.906 144.171 257.37 141.623 C 257.286 141.232 256.932 140.959 256.532 140.977 C 256.146 140.998 255.825 141.302 255.85 141.688 C 256.028 144.417 257.526 146.888 259.864 148.307 C 262.652 150.003 266.17 149.929 268.885 148.118 C 270.413 147.099 271.564 145.607 272.161 143.87 C 272.618 142.542 271.183 141.57 269.788 141.733 C 267.608 141.989 265.404 141.54 263.498 140.452 C 261.59 139.366 260.079 137.698 259.187 135.692 C 257.957 132.934 258.001 129.775 259.307 127.053 C 259.375 126.911 259.309 126.738 259.155 126.706 C 258.84 126.64 258.514 126.653 258.206 126.744 C 257.59 126.926 257.153 127.558 256.699 128.212 C 255.754 129.576 254.758 131.014 252.084 130.69 C 251.887 130.666 251.691 130.635 251.496 130.596 C 251.496 130.595 251.496 130.596 251.496 130.596 L 251.495 130.596 C 251.185 130.545 250.879 130.478 250.577 130.393 C 250.097 130.258 249.566 130.481 249.448 130.966 C 249.273 131.687 249.217 132.433 249.283 133.172 C 249.763 138.618 254.359 140.038 258.003 140.762 C 255.746 140.117 253.858 138.565 252.789 136.475 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 268.376 137.631 C 266.177 137.452 264.243 136.105 263.312 134.105 C 262.381 132.104 262.596 129.758 263.875 127.96 C 264.325 127.328 263.942 125.854 263.207 125.609 C 262.764 125.461 262.263 125.545 261.962 125.902 C 261.05 126.981 260.416 128.266 260.114 129.646 C 259.511 132.388 260.272 135.253 262.157 137.334 C 264.041 139.416 266.816 140.457 269.605 140.128 C 272.533 139.787 275.088 137.982 276.387 135.336 C 276.699 134.701 276.233 134.002 275.535 133.888 C 274.993 133.8 274.46 134.096 274.187 134.573 C 273.005 136.631 270.741 137.822 268.376 137.631 Z M 275.618 139.035 C 275.187 139.437 275.019 140.069 275.304 140.585 C 275.622 141.161 275.965 141.686 276.316 142.162 C 276.894 142.946 276.274 143.925 275.544 143.281 L 275.43 143.179 C 274.975 142.763 274.076 143.022 273.922 143.619 C 273.865 143.825 273.913 144.045 274.05 144.209 C 275.333 145.698 277.087 146.704 279.02 147.06 C 281.205 147.467 283.463 147.016 285.324 145.801 C 287.373 144.466 288.527 142.533 289.114 140.376 C 289.234 139.933 287.832 139.451 287.475 139.738 C 286.347 140.645 284.93 141.113 283.484 141.057 C 281.642 140.985 279.8 139.743 279.588 137.912 C 279.421 136.47 280.083 135.057 281.299 134.263 C 281.379 134.211 281.307 133.981 281.213 133.993 C 279.653 134.189 278.316 135.248 277.536 136.612 C 277.022 137.511 276.375 138.328 275.618 139.035 Z M 271.348 114.254 C 274.599 114.027 277.669 115.773 279.136 118.683 C 280.482 121.815 283.229 124.126 286.544 124.919 C 286.878 124.998 286.988 124.5 286.683 124.341 C 285.934 123.951 285.238 123.468 284.61 122.903 C 282.826 121.299 282.273 119.763 281.718 118.222 C 281.33 117.142 280.94 116.06 280.044 114.991 C 279.207 113.993 278.14 113.213 276.936 112.718 C 275.734 112.224 274.43 112.029 273.136 112.152 C 265.965 112.823 264.689 118.342 264.308 119.554 C 265.403 116.552 268.161 114.476 271.348 114.254 Z M 252.319 123.514 C 249.878 122.681 248.49 120.109 249.135 117.612 C 249.792 115.06 251.739 110.558 253.803 108.919 C 254.83 108.104 256.209 107.885 257.438 108.343 C 257.663 108.426 258.258 107.931 258.181 107.703 C 257.874 106.791 256.884 106.2 256.047 106.673 C 253.218 108.274 251.055 110.832 249.946 113.887 C 249.881 114.065 250.054 114.236 250.235 114.177 C 250.459 114.104 250.575 114.342 250.382 114.477 C 248.754 115.614 245.781 117.795 246.008 122.388 C 246.043 123.988 246.638 125.526 247.689 126.733 C 248.738 127.942 250.177 128.745 251.756 129.003 L 251.784 129.009 C 253.89 129.435 254.652 128.335 255.372 127.295 C 255.992 126.401 256.589 125.539 257.751 125.195 C 258.446 124.989 259.187 125.001 259.875 125.231 C 260.125 125.32 260.404 125.246 260.575 125.043 C 260.677 124.914 260.723 124.75 260.702 124.587 C 260.682 124.424 260.596 124.276 260.465 124.177 C 260.198 123.978 259.942 123.766 259.696 123.541 C 258.8 122.719 257.205 122.715 256.117 123.258 C 254.936 123.849 253.568 123.941 252.319 123.514 Z M 260.232 105.074 C 261.158 102.528 263.428 100.712 266.115 100.368 C 271.01 99.74 276.586 102.775 280.267 106.062 C 280.993 106.71 281.623 107.457 282.14 108.282 C 279.797 103.3 276.314 102.334 274.024 101.622 C 273.79 101.549 273.803 101.244 274.045 101.202 C 274.216 101.172 274.314 100.987 274.231 100.834 C 272.826 98.267 270.125 96.678 267.199 96.696 C 265.516 96.706 263.88 97.25 262.527 98.251 C 261.172 99.25 260.17 100.654 259.664 102.26 C 258.454 106.106 259.449 108.836 260.431 110.513 C 259.66 108.795 259.588 106.844 260.232 105.074 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 258.122 101.78 C 259.369 97.814 263.035 95.108 267.192 95.084 C 267.771 95.08 268.061 94.306 267.516 94.114 C 265.647 93.452 263.621 93.373 261.705 93.886 C 259.783 94.401 257.004 92.882 258.349 91.416 C 261.14 88.375 265.303 86.991 269.359 87.756 C 269.733 87.826 269.995 88.013 269.933 88.389 C 269.804 89.154 271.089 89.599 271.514 88.949 C 272.101 88.05 272.796 87.226 273.583 86.495 C 273.941 86.162 273.909 85.572 273.475 85.346 C 270.258 83.669 266.431 83.643 263.192 85.276 C 259.556 87.091 257.75 89.88 256.519 92.719 C 256.257 93.323 255.543 93.162 255.687 92.519 C 255.783 92.095 255.429 91.702 255.007 91.809 C 253.842 92.106 252.751 92.639 251.801 93.375 C 250.281 94.548 249.189 96.188 248.692 98.043 C 248.056 100.399 248.431 102.914 249.726 104.983 C 250.83 106.751 253.234 106.451 255.031 105.395 C 255.178 105.309 255.328 105.224 255.479 105.142 C 256.768 104.443 257.681 103.179 258.122 101.78 Z" fill="rgba(40,40,40,0.4)"></path><path d="M 278.078 87.672 C 279.988 87.462 281.895 87.737 283.636 88.441 C 285.796 89.313 288.457 89.217 290.559 88.213 C 290.635 88.178 290.688 88.108 290.703 88.026 C 290.718 87.944 290.691 87.86 290.632 87.801 C 287.879 85.161 284.006 84.041 280.269 84.804 C 273.008 86.285 270.582 91.427 269.853 92.602 C 271.745 89.838 274.749 88.038 278.078 87.672 Z M 298.294 89.185 C 293.761 87.744 287.507 90.549 284.949 94.257 C 288.147 90.338 293.893 89.701 297.872 92.824 C 301.181 95.424 298.954 100.148 296.565 103.612 C 298.18 101.775 300.376 100.549 302.787 100.139 C 303.951 99.941 305.016 99.126 304.97 97.946 C 304.91 96.437 304.495 94.964 303.758 93.646 C 302.572 91.517 300.617 89.921 298.294 89.185 Z M 294.802 136.983 C 294.11 138.603 292.754 139.846 291.08 140.395 C 290.838 140.473 290.653 140.671 290.592 140.918 C 290.576 140.981 290.6 141.048 290.652 141.087 C 294.258 143.792 299.116 144.127 303.059 141.943 C 305.083 140.827 306.721 139.123 307.756 137.056 C 308.45 135.671 308.856 134.159 308.949 132.612 C 308.98 132.102 308.45 131.769 307.963 131.925 C 307.173 132.177 306.354 132.326 305.526 132.366 C 303.607 132.458 301.649 132.963 299.968 133.894 C 299.069 134.392 298.097 134.76 297.082 134.98 C 296.052 135.203 295.217 136.014 294.802 136.983 Z M 297.331 141.701 C 296.346 141.495 296.392 139.965 296.725 139.015 C 297.006 138.215 298.13 136.881 298.97 136.771 C 300.084 136.625 301.132 136.161 301.988 135.434 C 302.682 134.844 304.027 134.828 304.937 134.876 C 305.597 134.911 306.613 135.425 306.445 136.065 C 305.393 140.072 301.385 142.55 297.331 141.701 Z M 288.822 109.037 C 291.6 108.264 294.573 108.637 297.074 110.073 C 298.108 110.666 299.952 109.752 299.036 108.989 C 298.737 108.739 298.417 108.517 298.079 108.323 C 292.847 105.318 289.401 108.829 288.822 109.037 Z M 305.815 103.823 C 308.378 105.604 309.777 108.633 309.471 111.74 C 309.165 114.846 307.202 117.544 304.341 118.791 C 304.211 118.849 304.111 118.958 304.066 119.092 C 304.02 119.227 304.032 119.374 304.1 119.499 C 304.18 119.644 304.328 119.739 304.494 119.741 C 306.325 119.76 308.12 119.223 309.64 118.202 C 311.364 117.047 312.639 115.334 313.25 113.351 C 313.866 111.367 313.78 109.232 313.008 107.304 C 312.238 105.377 310.83 103.773 309.019 102.76 C 307.859 102.11 306.784 101.678 305.791 101.412 C 304.819 101.152 304.989 103.249 305.815 103.823 Z M 303.943 119.849 C 304.546 125.007 301.121 129.775 296.041 130.851 C 295.259 131.016 294.774 131.983 295.013 132.745 C 295.165 133.228 295.598 133.589 296.099 133.518 C 298.831 133.132 301.234 131.509 302.612 129.118 C 305.07 124.858 304.3 121.48 303.943 119.849 Z M 291.934 138.14 C 293.933 136.593 294.538 133.429 294.186 131.066 C 294.226 132.696 293.319 134.202 291.86 134.929 C 291.143 135.287 290.603 136.082 290.734 136.872 C 290.77 137.088 290.799 137.305 290.82 137.522 C 290.878 138.102 291.473 138.498 291.934 138.14 Z M 289.578 130.931 C 288.856 131.4 289.111 132.34 289.871 131.935 C 292.881 130.332 295.316 127.831 296.839 124.78 C 297.254 123.947 296.251 123.733 295.77 124.53 C 294.216 127.104 292.099 129.292 289.578 130.931 Z M 305.424 124.438 C 305.46 126.36 304.971 128.256 304.01 129.921 C 303.815 130.258 303.998 130.697 304.385 130.732 C 305.426 130.824 306.475 130.707 307.47 130.388 C 309.102 129.866 310.519 128.825 311.504 127.422 C 313.043 125.236 313.363 122.417 312.354 119.941 C 312.066 119.234 311.171 119.117 310.538 119.542 C 309.751 120.071 308.894 120.494 307.988 120.799 C 306.5 121.299 305.395 122.868 305.424 124.438 Z M 310.097 127.136 C 308.937 128.528 307.234 126.938 307.061 125.135 C 307.051 125.023 307.038 124.911 307.023 124.8 C 306.837 123.416 307.738 121.867 309.035 121.351 C 310.287 120.852 311.877 121.334 311.819 122.68 C 311.749 124.314 311.144 125.879 310.097 127.136 Z M 245.322 137.946 C 245.979 137.852 246.638 138.161 247.026 138.7 C 247.957 139.996 249.315 140.922 250.861 141.317 C 252.082 141.628 253.24 142.315 253.966 143.345 C 250.327 144.329 246.454 143.012 244.169 140.013 C 243.531 139.175 244.28 138.095 245.322 137.946 Z M 253.966 143.345 C 254.237 143.22 254.374 142.921 254.33 142.626 C 254.288 142.348 254.258 142.069 254.239 141.789 C 254.196 141.206 253.812 140.704 253.261 140.511 C 251.736 139.974 250.399 139.009 249.408 137.732 C 248.459 136.509 246.906 135.704 245.363 135.823 C 245.171 135.838 244.98 135.848 244.789 135.853 C 242.84 135.91 240.962 137.413 241.85 139.149 C 244.111 143.57 249.456 145.421 253.966 143.345 Z M 247.671 133.311 C 247.623 132.768 247.628 132.221 247.686 131.679 C 247.828 130.271 247.388 128.865 246.469 127.789 C 244.239 125.221 242.457 121.975 240.517 119.181 C 240.18 118.695 239.876 118.187 239.606 117.66 C 238.977 116.43 237.397 115.849 236.494 116.894 C 235.606 117.923 234.927 119.115 234.494 120.403 C 233.634 122.949 233.786 125.727 234.918 128.164 C 236.045 130.602 238.065 132.513 240.562 133.502 C 242.717 134.361 245.097 134.479 247.327 133.837 C 247.553 133.766 247.697 133.546 247.671 133.311 Z M 241.423 123.335 C 242.448 123.962 243.227 125.028 243.601 126.17 C 244.269 128.208 244.087 131.135 241.973 130.775 C 240.062 130.452 238.351 129.403 237.195 127.848 C 236.266 126.601 235.746 125.097 235.709 123.542 C 235.647 120.999 239.036 121.723 241.141 123.153 C 241.233 123.216 241.328 123.277 241.423 123.335 Z M 246.427 111.184 C 246.324 111.474 246.259 111.776 246.234 112.083 C 246.17 112.867 245.292 114.078 244.701 114.598 C 244.173 115.063 243.016 115.461 242.639 114.868 C 240.638 111.717 240.795 107.657 243.032 104.669 C 244.182 103.134 246.275 104.291 246.93 106.094 C 246.967 106.196 247.005 106.297 247.045 106.398 C 247.609 107.833 246.946 109.733 246.427 111.184 Z M 241.504 117.747 C 242.561 119.454 244.98 118.538 246.228 116.965 C 246.287 116.891 246.347 116.817 246.409 116.745 C 247.227 115.782 247.956 114.685 248.373 113.492 C 249.358 110.677 248.847 107.233 247.649 104.502 C 247.613 104.419 247.578 104.336 247.544 104.253 C 246.926 102.74 245.207 101.701 243.951 102.746 C 241.63 104.672 240.153 107.429 239.836 110.429 C 239.564 112.986 240.151 115.561 241.504 117.747 Z" fill="rgba(40,40,40,0.4)"></path><g transform="translate(465.8 41.2)" id="ss9606197608_13"><g><defs><path d="M 0 43.2 C 0 19.341 19.341 0 43.2 0 C 67.059 0 86.4 19.341 86.4 43.2 C 86.4 67.059 67.059 86.4 43.2 86.4 C 19.341 86.4 0 67.059 0 43.2 Z" id="a1024z"></path><filter id="a1026z" x="-30.1%" y="-40.5%" width="160.0%" height="180.8%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="13" in="SourceAlpha" result="a1028z"></feGaussianBlur><feOffset dx="0" dy="9" in="a1028z" result="a1029z"></feOffset><feComposite in="a1029z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1030z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1030z" result="a1031z"></feColorMatrix></filter></defs><use xlink:href="#a1024z" fill="rgb(23,23,23)" clip-path="url(#a1025z)"></use><use fill="black" fill-opacity="1" filter="url(#a1026z)" xlink:href="#a1024z"></use></g></g><path d="M 465.2 84.4 C 465.2 60.21 484.81 40.6 509 40.6 C 533.19 40.6 552.8 60.21 552.8 84.4 C 552.8 108.59 533.19 128.2 509 128.2 C 484.81 128.2 465.2 108.59 465.2 84.4 Z" fill="transparent" stroke-width="1.2" stroke="rgb(28,28,28)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 512.2 68.4 L 505.8 68.4 C 500.553 68.4 497.93 68.4 496.07 69.702 C 495.382 70.184 494.784 70.782 494.302 71.47 C 493 73.33 493 75.953 493 81.2 C 493 86.447 493 89.07 494.302 90.93 C 494.784 91.618 495.382 92.216 496.07 92.698 C 497.93 94 500.553 94 505.8 94 L 512.2 94 C 517.447 94 520.07 94 521.93 92.698 C 522.618 92.216 523.216 91.618 523.698 90.93 C 525 89.07 525 86.447 525 81.2 C 525 75.953 525 73.33 523.698 71.47 C 523.216 70.782 522.618 70.184 521.93 69.702 C 520.07 68.4 517.447 68.4 512.2 68.4 Z" fill="transparent" stroke-width="2.4" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 515.4 78 L 517.363 79.692 C 518.188 80.402 518.6 80.758 518.6 81.2 C 518.6 81.642 518.188 81.997 517.363 82.708 L 515.4 84.4 M 502.6 78 L 500.638 79.692 C 499.813 80.402 499.4 80.758 499.4 81.2 C 499.4 81.642 499.813 81.997 500.638 82.708 L 502.6 84.4 M 510.6 76.4 L 507.4 86" fill="transparent" stroke-width="2.4" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 513.249 100.4 L 512.579 99.73 C 511.068 98.219 510.694 95.911 511.649 94 M 504.201 100.4 L 504.871 99.73 C 506.382 98.219 506.756 95.911 505.801 94 M 501 100.4 L 517 100.4" fill="transparent" stroke-width="2.4" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><g transform="translate(1.4 107.2)" id="ss9606197608_19"><g><defs><path d="M 0 43.2 C 0 19.341 19.341 0 43.2 0 C 67.059 0 86.4 19.341 86.4 43.2 C 86.4 67.059 67.059 86.4 43.2 86.4 C 19.341 86.4 0 67.059 0 43.2 Z" id="a1040z"></path><filter id="a1042z" x="-30.1%" y="-40.5%" width="160.0%" height="180.8%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="13" in="SourceAlpha" result="a1044z"></feGaussianBlur><feOffset dx="0" dy="9" in="a1044z" result="a1045z"></feOffset><feComposite in="a1045z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1046z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1046z" result="a1047z"></feColorMatrix></filter></defs><use xlink:href="#a1040z" fill="rgb(23,23,23)" clip-path="url(#a1041z)"></use><use fill="black" fill-opacity="1" filter="url(#a1042z)" xlink:href="#a1040z"></use></g></g><path d="M 0.8 150.4 C 0.8 126.21 20.41 106.6 44.6 106.6 C 68.79 106.6 88.4 126.21 88.4 150.4 C 88.4 174.59 68.79 194.2 44.6 194.2 C 20.41 194.2 0.8 174.59 0.8 150.4 Z" fill="transparent" stroke-width="1.2" stroke="rgb(28,28,28)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 53.363 145.618 L 53.399 145.618 C 57.376 145.618 60.599 148.847 60.599 152.831 C 60.601 156.501 57.847 159.587 54.2 160 M 53.364 145.618 C 53.388 145.354 53.4 145.086 53.4 144.816 C 53.4 139.947 49.46 136 44.6 136 C 39.997 136 36.22 139.54 35.833 144.051 M 53.364 145.618 C 53.206 147.383 52.517 149.059 51.389 150.426 M 35.833 144.051 C 31.727 144.451 28.597 147.904 28.6 152.029 C 28.598 155.835 31.272 159.118 35 159.884 M 35.833 144.051 C 37.82 143.856 39.808 144.415 41.401 145.618 M 44.6 164.8 L 44.6 152 M 44.6 164.8 C 43.48 164.8 41.386 161.609 40.6 160.8 M 44.6 164.8 C 45.72 164.8 47.813 161.609 48.6 160.8" fill="transparent" stroke-width="2.4" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><g transform="translate(151.4 78.4)" id="ss9606197608_23"><path d="M 0 14.4 C 0 6.447 6.447 0 14.4 0 C 22.353 0 28.8 6.447 28.8 14.4 C 28.8 22.353 22.353 28.8 14.4 28.8 C 6.447 28.8 0 22.353 0 14.4 Z" fill="rgb(23,23,23)"></path></g><path d="M 150.8 92.8 C 150.8 84.516 157.516 77.8 165.8 77.8 C 174.084 77.8 180.8 84.516 180.8 92.8 C 180.8 101.084 174.084 107.8 165.8 107.8 C 157.516 107.8 150.8 101.084 150.8 92.8 Z" fill="transparent" stroke-width="1.2" stroke="rgb(255,207,6)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 168.2 88 L 163.4 92.8 L 168.2 97.6" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><g transform="translate(367.4 126.4)" id="ss9606197608_27"><path d="M 0 14.4 C 0 6.447 6.447 0 14.4 0 C 22.353 0 28.8 6.447 28.8 14.4 C 28.8 22.353 22.353 28.8 14.4 28.8 C 6.447 28.8 0 22.353 0 14.4 Z" fill="rgb(23,23,23)"></path></g><path d="M 366.8 140.8 C 366.8 132.516 373.516 125.8 381.8 125.8 C 390.084 125.8 396.8 132.516 396.8 140.8 C 396.8 149.084 390.084 155.8 381.8 155.8 C 373.516 155.8 366.8 149.084 366.8 140.8 Z" fill="transparent" stroke-width="1.2" stroke="rgb(255,207,6)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 379.4 136 L 384.2 140.8 L 379.4 145.6" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                        svgContentId: 9606197608,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                s("div", {
                                  className: "framer-jxs8e",
                                  "data-framer-name": "Card 02",
                                  name: "Card 02",
                                  children: [
                                    e(h, {
                                      breakpoint: o,
                                      overrides: {
                                        E2xrsV1h4: {
                                          style: { rotate: 90 },
                                          transformTemplate: Ie,
                                        },
                                      },
                                      children: e(d.div, {
                                        className: "framer-87nixp",
                                        children: e(h, {
                                          breakpoint: o,
                                          overrides: {
                                            E2xrsV1h4: {
                                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 174 204"><g transform="translate(-182.4 -30.823)" id="ss11305511506_1"><g><defs><linearGradient id="idss11305511506_2g-160" x1="1" x2="0" y1="0.4983752646347368" y2="0.5016247353652632"><stop offset="0" stop-color="rgba(245,186,0,0.3)" stop-opacity="0.3"></stop><stop offset="1" stop-color="rgba(245,186,0,0.1)" stop-opacity="0.1"></stop></linearGradient></defs><path d="M 0 132.555 C 0 59.347 66.62 0 148.8 0 C 230.98 0 297.6 59.347 297.6 132.555 C 297.6 205.764 230.98 265.111 148.8 265.111 C 66.62 265.111 0 205.764 0 132.555 Z" fill="url(#idss11305511506_2g-160)"></path></g><path d="M 0.6 132.555 C 0.6 59.642 66.951 0.534 148.8 0.534 C 230.649 0.534 297 59.642 297 132.555 C 297 205.469 230.649 264.576 148.8 264.576 C 66.951 264.576 0.6 205.469 0.6 132.555 Z" fill="transparent" stroke-width="1.45" stroke="rgba(245,186,0,0.4)" stroke-miterlimit="10"></path></g><g transform="translate(86 67.52)" id="ss11305511506_4"><g><defs><path d="M 0 34 C 0 15.222 15.222 0 34 0 C 52.778 0 68 15.222 68 34 C 68 52.778 52.778 68 34 68 C 15.222 68 0 52.778 0 34 Z" id="a1400z"></path><filter id="a1402z" x="-33.7%" y="-34.5%" width="167.3%" height="168.9%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="11.48" in="SourceAlpha" result="a1404z"></feGaussianBlur><feOffset dx="0" dy="0.54" in="a1404z" result="a1405z"></feOffset><feComposite in="a1405z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1406z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1406z" result="a1407z"></feColorMatrix></filter></defs><use xlink:href="#a1400z" fill="rgb(23,23,23)" clip-path="url(#a1401z)"></use><use fill="black" fill-opacity="1" filter="url(#a1402z)" xlink:href="#a1400z"></use></g></g><path d="M 128 101.733 C 128 104.488 125.493 106.721 122.4 106.721 C 119.307 106.721 116.8 104.488 116.8 101.733 C 116.8 98.978 119.307 96.744 122.4 96.744 C 125.493 96.744 128 98.978 128 101.733 Z" fill="transparent" stroke-width="2.1" stroke="rgb(240,240,240)" stroke-miterlimit="10"></path><path d="M 136.817 104.721 C 137.652 104.52 138.07 104.42 138.235 104.228 C 138.4 104.036 138.4 103.728 138.4 103.111 L 138.4 100.355 C 138.4 99.738 138.4 99.429 138.235 99.238 C 138.07 99.046 137.652 98.945 136.817 98.745 C 133.697 97.995 131.744 95.089 132.549 92.326 C 132.771 91.567 132.881 91.188 132.775 90.965 C 132.67 90.743 132.366 90.588 131.759 90.282 L 129 88.886 C 128.404 88.585 128.107 88.434 127.839 88.466 C 127.572 88.499 127.271 88.766 126.667 89.302 C 124.333 91.377 120.47 91.377 118.135 89.302 C 117.532 88.766 117.23 88.499 116.963 88.466 C 116.696 88.434 116.398 88.585 115.802 88.885 L 113.043 90.281 C 112.436 90.588 112.132 90.742 112.027 90.964 C 111.921 91.187 112.032 91.567 112.253 92.326 C 113.058 95.089 111.103 97.995 107.982 98.745 C 107.147 98.945 106.73 99.046 106.565 99.238 C 106.4 99.429 106.4 99.738 106.4 100.355 L 106.4 103.111 C 106.4 103.728 106.4 104.036 106.565 104.228 C 106.73 104.42 107.147 104.52 107.982 104.721 C 111.103 105.471 113.056 108.377 112.251 111.139 C 112.029 111.898 111.918 112.278 112.024 112.501 C 112.13 112.724 112.433 112.877 113.04 113.184 L 115.8 114.58 C 116.395 114.881 116.693 115.032 116.96 115 C 117.228 114.968 117.529 114.7 118.132 114.163 C 120.468 112.087 124.334 112.087 126.67 114.163 C 127.273 114.7 127.574 114.968 127.842 115 C 128.109 115.032 128.407 114.88 129.002 114.579 L 131.762 113.184 C 132.369 112.877 132.672 112.724 132.778 112.501 C 132.884 112.278 132.773 111.898 132.551 111.139 C 131.746 108.377 133.697 105.471 136.817 104.721 Z" fill="transparent" stroke-width="2.1" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path><g transform="translate(58.6 150.98)" id="ss11305511506_8"><g><defs><path d="M 0 25 C 0 11.193 11.193 0 25 0 C 38.807 0 50 11.193 50 25 C 50 38.807 38.807 50 25 50 C 11.193 50 0 38.807 0 25 Z" id="a1412z"></path><filter id="a1414z" x="-45.8%" y="-62.0%" width="191.5%" height="223.8%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="11.48" in="SourceAlpha" result="a1416z"></feGaussianBlur><feOffset dx="0" dy="8.11" in="a1416z" result="a1417z"></feOffset><feComposite in="a1417z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1418z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1418z" result="a1419z"></feColorMatrix></filter></defs><use xlink:href="#a1412z" fill="rgb(23,23,23)" clip-path="url(#a1413z)"></use><use fill="black" fill-opacity="1" filter="url(#a1414z)" xlink:href="#a1412z"></use></g></g><path d="M 89.03 176.694 C 89.571 176.473 89.842 176.362 89.921 176.252 C 90.001 176.142 90.001 175.967 90.001 175.617 L 90.001 175.37 C 90.001 175.02 90.001 174.845 89.921 174.735 C 89.842 174.625 89.571 174.514 89.03 174.293 C 88.227 173.964 87.711 173.244 87.74 172.49 C 87.76 171.915 87.77 171.627 87.7 171.519 C 87.63 171.409 87.461 171.326 87.122 171.16 L 86.799 171.003 C 86.47 170.842 86.306 170.762 86.165 170.769 C 86.025 170.774 85.785 170.918 85.308 171.207 C 84.516 171.676 83.485 171.676 82.693 171.207 C 82.216 170.918 81.977 170.774 81.836 170.769 C 81.696 170.762 81.531 170.842 81.202 171.003 L 80.88 171.16 C 80.54 171.326 80.37 171.409 80.3 171.519 C 80.23 171.627 80.241 171.915 80.262 172.49 C 80.29 173.244 79.774 173.964 78.971 174.293 C 78.429 174.514 78.158 174.625 78.079 174.735 C 78 174.845 78 175.02 78 175.37 L 78 175.617 C 78 175.967 78 176.142 78.08 176.252 C 78.158 176.362 78.429 176.473 78.97 176.694 C 79.773 177.023 80.289 177.743 80.261 178.496 C 80.241 179.072 80.23 179.36 80.3 179.469 C 80.37 179.578 80.54 179.661 80.879 179.826 L 81.201 179.984 C 81.531 180.145 81.695 180.225 81.835 180.219 C 81.975 180.213 82.215 180.069 82.692 179.78 C 83.485 179.311 84.516 179.311 85.309 179.78 C 85.787 180.069 86.025 180.213 86.166 180.219 C 86.306 180.225 86.471 180.145 86.8 179.984 L 87.123 179.826 C 87.462 179.661 87.632 179.578 87.702 179.468 C 87.772 179.36 87.762 179.072 87.74 178.496 C 87.712 177.743 88.227 177.023 89.03 176.694 Z" fill="transparent" stroke-width="1.78" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 84 177.052 C 84.966 177.052 85.75 176.354 85.75 175.493 C 85.75 174.632 84.966 173.934 84 173.934 C 83.033 173.934 82.25 174.632 82.25 175.493 C 82.25 176.354 83.033 177.052 84 177.052 Z" fill="transparent" stroke-width="1.78" stroke="rgb(240,240,240)" stroke-miterlimit="10"></path><path d="M 91 166.585 L 91 169.132 C 89.133 167.497 86.618 166.582 84 166.585 C 78.477 166.585 74 170.573 74 175.493 C 73.998 176.72 74.282 177.933 74.832 179.057 M 77 184.402 L 77 181.856 C 78.867 183.49 81.382 184.405 84 184.402 C 89.523 184.402 94 180.413 94 175.493 C 94.002 174.267 93.719 173.054 93.168 171.93" fill="transparent" stroke-width="1.78" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path><g transform="translate(58.6 3)" id="ss11305511506_13"><g><defs><path d="M 0 25 C 0 11.193 11.193 0 25 0 C 38.807 0 50 11.193 50 25 C 50 38.807 38.807 50 25 50 C 11.193 50 0 38.807 0 25 Z" id="a1426z"></path><filter id="a1428z" x="-45.8%" y="-62.0%" width="191.5%" height="223.8%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="11.48" in="SourceAlpha" result="a1430z"></feGaussianBlur><feOffset dx="0" dy="8.11" in="a1430z" result="a1431z"></feOffset><feComposite in="a1431z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1432z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1432z" result="a1433z"></feColorMatrix></filter></defs><use xlink:href="#a1426z" fill="rgb(23,23,23)" clip-path="url(#a1427z)"></use><use fill="black" fill-opacity="1" filter="url(#a1428z)" xlink:href="#a1426z"></use></g></g><path d="M 83.003 19.064 L 82.006 19.064 C 78.724 19.064 77.083 19.064 75.92 19.789 C 75.49 20.057 75.115 20.39 74.814 20.773 C 74 21.808 74 23.269 74 26.19 C 74 29.112 74 30.572 74.814 31.608 C 75.115 31.991 75.49 32.324 75.92 32.592 C 77.083 33.317 78.724 33.317 82.006 33.317 L 86.009 33.317 C 89.291 33.317 90.932 33.317 92.095 32.592 C 92.525 32.325 92.9 31.991 93.201 31.608 C 93.816 30.826 93.966 29.837 94 28.864" fill="transparent" stroke-width="1.78" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 90 25.936 L 90 27.081 M 90 25.936 C 88.897 25.942 87.86 25.466 87.226 24.662 M 90 25.935 C 91.103 25.941 92.139 25.465 92.773 24.661 M 87.226 24.661 L 86 25.362 M 87.226 24.66 C 86.48 23.705 86.48 22.438 87.226 21.483 M 92.773 24.66 L 93.999 25.362 M 92.774 24.66 C 93.52 23.705 93.52 22.438 92.774 21.483 M 90 20.209 C 91.157 20.209 92.176 20.715 92.774 21.484 M 90 20.209 C 88.897 20.203 87.86 20.68 87.226 21.484 M 90 20.209 L 90 19.064 M 92.774 21.484 L 94 20.782 M 87.226 21.484 L 86 20.782" fill="transparent" stroke-width="1.78" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 83 30.645 L 85 30.645" fill="transparent" stroke-width="1.78" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 84 33.317 L 84 36.88" fill="transparent" stroke-width="1.78" stroke="rgb(240,240,240)" stroke-miterlimit="10"></path><path d="M 80 36.88 L 88 36.88" fill="transparent" stroke-width="1.78" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                                              svgContentId: 11305511506,
                                            },
                                          },
                                          children: e(ze, {
                                            className: "framer-1nmgg57",
                                            "data-framer-name": "Graphic",
                                            layout: "position",
                                            name: "Graphic",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 174 229"><g transform="translate(-182.4 -34.6)" id="ss10906365386_1"><g><defs><linearGradient id="idss10906365386_2g-160" x1="1" x2="0" y1="0.4983752646347368" y2="0.5016247353652632"><stop offset="0" stop-color="rgba(245,186,0,0.3)" stop-opacity="0.3"></stop><stop offset="1" stop-color="rgba(245,186,0,0.1)" stop-opacity="0.1"></stop></linearGradient></defs><path d="M 0 148.8 C 0 66.62 66.62 0 148.8 0 C 230.98 0 297.6 66.62 297.6 148.8 C 297.6 230.98 230.98 297.6 148.8 297.6 C 66.62 297.6 0 230.98 0 148.8 Z" fill="url(#idss10906365386_2g-160)"></path></g><path d="M 0.6 148.8 C 0.6 66.951 66.951 0.6 148.8 0.6 C 230.649 0.6 297 66.951 297 148.8 C 297 230.649 230.649 297 148.8 297 C 66.951 297 0.6 230.649 0.6 148.8 Z" fill="transparent" stroke-width="1.2" stroke="rgba(245,186,0,0.4)" stroke-miterlimit="10" stroke-dasharray=""></path></g><g transform="translate(84 75.8)" id="ss10906365386_4"><g><defs><path d="M 0 38.4 C 0 17.192 17.192 0 38.4 0 C 59.608 0 76.8 17.192 76.8 38.4 C 76.8 59.608 59.608 76.8 38.4 76.8 C 17.192 76.8 0 59.608 0 38.4 Z" id="a1196z"></path><filter id="a1198z" x="-33.8%" y="-35.1%" width="167.5%" height="170.1%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="13" in="SourceAlpha" result="a1200z"></feGaussianBlur><feOffset dx="0" dy="1" in="a1200z" result="a1201z"></feOffset><feComposite in="a1201z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1202z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1202z" result="a1203z"></feColorMatrix></filter></defs><use xlink:href="#a1196z" fill="rgb(23,23,23)" clip-path="url(#a1197z)"></use><use fill="black" fill-opacity="1" filter="url(#a1198z)" xlink:href="#a1196z"></use></g></g><path d="M 128 114.2 C 128 117.293 125.493 119.8 122.4 119.8 C 119.307 119.8 116.8 117.293 116.8 114.2 C 116.8 111.107 119.307 108.6 122.4 108.6 C 125.493 108.6 128 111.107 128 114.2 Z" fill="transparent" stroke-width="2.4" stroke="rgb(240,240,240)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 136.817 117.555 C 137.652 117.329 138.07 117.217 138.235 117.001 C 138.4 116.786 138.4 116.44 138.4 115.747 L 138.4 112.653 C 138.4 111.961 138.4 111.614 138.235 111.399 C 138.07 111.184 137.652 111.071 136.817 110.846 C 133.697 110.004 131.744 106.742 132.549 103.641 C 132.771 102.789 132.881 102.363 132.775 102.113 C 132.67 101.863 132.366 101.69 131.759 101.346 L 129 99.779 C 128.404 99.441 128.107 99.272 127.839 99.308 C 127.572 99.344 127.271 99.644 126.667 100.246 C 124.333 102.575 120.47 102.575 118.135 100.246 C 117.532 99.644 117.23 99.344 116.963 99.308 C 116.696 99.271 116.398 99.441 115.802 99.778 L 113.043 101.345 C 112.436 101.69 112.132 101.862 112.027 102.112 C 111.921 102.362 112.032 102.789 112.253 103.641 C 113.058 106.742 111.103 110.004 107.982 110.846 C 107.147 111.071 106.73 111.184 106.565 111.399 C 106.4 111.614 106.4 111.961 106.4 112.653 L 106.4 115.747 C 106.4 116.44 106.4 116.786 106.565 117.001 C 106.73 117.217 107.147 117.329 107.982 117.555 C 111.103 118.396 113.056 121.659 112.251 124.759 C 112.029 125.611 111.918 126.038 112.024 126.288 C 112.13 126.538 112.433 126.71 113.04 127.055 L 115.8 128.622 C 116.395 128.96 116.693 129.129 116.96 129.093 C 117.228 129.057 117.529 128.756 118.132 128.154 C 120.468 125.823 124.334 125.823 126.67 128.154 C 127.273 128.756 127.574 129.057 127.842 129.093 C 128.109 129.129 128.407 128.959 129.002 128.621 L 131.762 127.055 C 132.369 126.71 132.672 126.538 132.778 126.288 C 132.884 126.038 132.773 125.611 132.551 124.759 C 131.746 121.659 133.697 118.396 136.817 117.555 Z" fill="transparent" stroke-width="2.4" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><g transform="translate(57.6 170.6)" id="ss10906365386_8"><g><defs><path d="M 0 26.4 C 0 11.82 11.82 0 26.4 0 C 40.98 0 52.8 11.82 52.8 26.4 C 52.8 40.98 40.98 52.8 26.4 52.8 C 11.82 52.8 0 40.98 0 26.4 Z" id="a1208z"></path><filter id="a1210z" x="-49.1%" y="-66.2%" width="198.1%" height="232.1%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="13" in="SourceAlpha" result="a1212z"></feGaussianBlur><feOffset dx="0" dy="9" in="a1212z" result="a1213z"></feOffset><feComposite in="a1213z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1214z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1214z" result="a1215z"></feColorMatrix></filter></defs><use xlink:href="#a1208z" fill="rgb(23,23,23)" clip-path="url(#a1209z)"></use><use fill="black" fill-opacity="1" filter="url(#a1210z)" xlink:href="#a1208z"></use></g></g><path d="M 89.03 198.348 C 89.571 198.099 89.842 197.975 89.921 197.851 C 90.001 197.728 90.001 197.532 90.001 197.139 L 90.001 196.861 C 90.001 196.469 90.001 196.272 89.921 196.149 C 89.842 196.025 89.571 195.901 89.03 195.652 C 88.227 195.283 87.711 194.475 87.74 193.629 C 87.76 192.983 87.77 192.66 87.7 192.538 C 87.63 192.415 87.461 192.322 87.122 192.136 L 86.799 191.959 C 86.47 191.779 86.306 191.689 86.165 191.696 C 86.025 191.702 85.785 191.864 85.308 192.188 C 84.516 192.715 83.485 192.715 82.693 192.188 C 82.216 191.864 81.977 191.702 81.836 191.696 C 81.696 191.689 81.531 191.779 81.202 191.959 L 80.88 192.136 C 80.54 192.322 80.37 192.415 80.3 192.538 C 80.23 192.66 80.241 192.983 80.262 193.629 C 80.29 194.475 79.774 195.283 78.971 195.652 C 78.429 195.901 78.158 196.025 78.079 196.149 C 78 196.272 78 196.468 78 196.861 L 78 197.139 C 78 197.532 78 197.728 78.08 197.851 C 78.158 197.975 78.429 198.099 78.97 198.348 C 79.773 198.717 80.289 199.525 80.261 200.371 C 80.241 201.017 80.23 201.34 80.3 201.463 C 80.37 201.585 80.54 201.678 80.879 201.864 L 81.201 202.041 C 81.531 202.221 81.695 202.311 81.835 202.305 C 81.975 202.298 82.215 202.136 82.692 201.812 C 83.485 201.285 84.516 201.285 85.309 201.812 C 85.787 202.136 86.025 202.298 86.166 202.305 C 86.306 202.311 86.471 202.221 86.8 202.041 L 87.123 201.864 C 87.462 201.678 87.632 201.585 87.702 201.462 C 87.772 201.34 87.762 201.017 87.74 200.371 C 87.712 199.525 88.227 198.717 89.03 198.348 Z" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 84 198.75 C 84.966 198.75 85.75 197.966 85.75 197 C 85.75 196.034 84.966 195.25 84 195.25 C 83.034 195.25 82.25 196.034 82.25 197 C 82.25 197.966 83.034 198.75 84 198.75 Z" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 91 187 L 91 189.859 C 89.133 188.023 86.618 186.996 84 187 C 78.477 187 74 191.477 74 197 C 73.998 198.376 74.282 199.738 74.832 201 M 77 207 L 77 204.142 C 78.867 205.977 81.382 207.004 84 207 C 89.523 207 94 202.523 94 197 C 94.002 195.624 93.719 194.262 93.168 193" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><g transform="translate(57.6 5)" id="ss10906365386_13"><g><defs><path d="M 0 26.4 C 0 11.82 11.82 0 26.4 0 C 40.98 0 52.8 11.82 52.8 26.4 C 52.8 40.98 40.98 52.8 26.4 52.8 C 11.82 52.8 0 40.98 0 26.4 Z" id="a1222z"></path><filter id="a1224z" x="-49.1%" y="-66.2%" width="198.1%" height="232.1%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="13" in="SourceAlpha" result="a1226z"></feGaussianBlur><feOffset dx="0" dy="9" in="a1226z" result="a1227z"></feOffset><feComposite in="a1227z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1228z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 0.5 0" type="matrix" in="a1228z" result="a1229z"></feColorMatrix></filter></defs><use xlink:href="#a1222z" fill="rgb(23,23,23)" clip-path="url(#a1223z)"></use><use fill="black" fill-opacity="1" filter="url(#a1224z)" xlink:href="#a1222z"></use></g></g><path d="M 83.003 21.4 L 82.006 21.4 C 78.724 21.4 77.083 21.4 75.92 22.214 C 75.49 22.515 75.115 22.889 74.814 23.319 C 74 24.481 74 26.121 74 29.4 C 74 32.68 74 34.319 74.814 35.481 C 75.115 35.911 75.49 36.285 75.92 36.586 C 77.083 37.4 78.724 37.4 82.006 37.4 L 86.009 37.4 C 89.291 37.4 90.932 37.4 92.095 36.586 C 92.525 36.286 92.9 35.911 93.201 35.481 C 93.816 34.604 93.966 33.494 94 32.401" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 90 29.114 L 90 30.4 M 90 29.114 C 88.897 29.121 87.86 28.587 87.226 27.684 M 90 29.113 C 91.103 29.12 92.139 28.585 92.773 27.683 M 87.226 27.683 L 86 28.47 M 87.226 27.682 C 86.48 26.61 86.48 25.188 87.226 24.116 M 92.773 27.682 L 93.999 28.47 M 92.774 27.682 C 93.52 26.61 93.52 25.188 92.774 24.116 M 90 22.686 C 91.157 22.686 92.176 23.254 92.774 24.117 M 90 22.686 C 88.897 22.679 87.86 23.214 87.226 24.117 M 90 22.686 L 90 21.4 M 92.774 24.117 L 94 23.329 M 87.226 24.117 L 86 23.329" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 83 34.4 L 85 34.4" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 84 37.4 L 84 41.4" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 80 41.4 L 88 41.4" fill="transparent" stroke-width="1.8" stroke="rgb(240,240,240)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                            svgContentId: 10906365386,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                    s(q, {
                                      __framer__animate: { transition: s2 },
                                      __framer__animateOnce: !0,
                                      __framer__enter: R,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-1tqgfra",
                                      "data-framer-name": "Title",
                                      name: "Title",
                                      children: [
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(f, {
                                            children: e("h1", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                                "--framer-font-family":
                                                  '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                                "--framer-font-size": "28px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Royalty-Free Music",
                                            }),
                                          }),
                                          className: "framer-1s1hx5",
                                          fonts: [
                                            "CUSTOM;Helvetica Now Display Bold",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(f, {
                                            children: e("h1", {
                                              style: {
                                                "--framer-font-size": "19px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(178, 173, 173)",
                                              },
                                              children:
                                                "All tracks are yours to use, modify, and distribute without limits.",
                                            }),
                                          }),
                                          className: "framer-161ae2y",
                                          fonts: ["Inter"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    e(ze, {
                                      className: "framer-4jop8i",
                                      "data-framer-name": "Circle",
                                      fill: "black",
                                      intrinsicHeight: 184,
                                      intrinsicWidth: 148,
                                      name: "Circle",
                                      svg: '<svg width="148" height="184" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><circle cx="144.647" cy="7.4" r="2.4" fill="#F5BA00"/></g><g filter="url(#b)"><circle cx="2.4" cy="143" r="2.4" fill="#F5BA00"/></g><g filter="url(#c)"><circle cx="26.4" cy="1.4" r="1.2" fill="#F5BA00"/></g><g filter="url(#d)"><circle cx="117" cy="178.4" r="3" fill="#F5BA00"/></g><g filter="url(#e)"><circle cx="37.799" cy="167.6" r=".6" fill="#F5BA00"/></g><g filter="url(#f)"><circle cx="39.6" cy="182.6" r="1.2" fill="#F5BA00"/></g><g filter="url(#g)"><circle cx="126" cy="87.8" r="1.2" fill="#F5BA00"/></g><defs><filter id="a" x="142.247" y="5" width="4.8" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="b" x="0" y="140.6" width="4.8" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="c" x="25.2" y=".2" width="2.4" height="3.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="d" x="114" y="175.4" width="6" height="7.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="e" x="37.2" y="167" width="1.199" height="2.399" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="f" x="38.4" y="181.4" width="2.4" height="3.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="g" x="124.8" y="86.6" width="2.4" height="3.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter></defs></svg>',
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s("div", {
                              className: "framer-uinpui",
                              "data-framer-name": "Right",
                              name: "Right",
                              children: [
                                s("div", {
                                  className: "framer-ev64i2",
                                  "data-framer-name": "Card 01",
                                  name: "Card 01",
                                  children: [
                                    e("div", {
                                      className: "framer-188o3cm",
                                      children: e(ze, {
                                        className: "framer-11743wu",
                                        "data-framer-name": "Shape",
                                        layout: "position",
                                        name: "Shape",
                                        opacity: 1,
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 196 228"><g transform="translate(40 38.4)" id="ss9948591413_1"><g><defs><path d="M 0 75.6 C 0 33.847 33.847 0 75.6 0 C 117.353 0 151.2 33.847 151.2 75.6 C 151.2 117.353 117.353 151.2 75.6 151.2 C 33.847 151.2 0 117.353 0 75.6 Z" id="a1288z"></path><filter id="a1290z" x="-31.1%" y="-43.6%" width="162.1%" height="187.2%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="23.5" in="SourceAlpha" result="a1292z"></feGaussianBlur><feOffset dx="0" dy="19" in="a1292z" result="a1293z"></feOffset><feComposite in="a1293z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1294z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.6588235294117647   0 0 0 0 0.6588235294117647   0 0 0 0 0.6588235294117647  0 0 0 0.3 0" type="matrix" in="a1294z" result="a1295z"></feColorMatrix></filter></defs><use xlink:href="#a1288z" fill="rgb(23,23,23)" clip-path="url(#a1289z)"></use><use fill="black" fill-opacity="1" filter="url(#a1290z)" xlink:href="#a1288z"></use></g></g><path d="M 37.6 114 C 37.6 70.922 72.522 36 115.6 36 C 158.678 36 193.6 70.922 193.6 114 C 193.6 157.078 158.678 192 115.6 192 C 72.522 192 37.6 157.078 37.6 114 Z" fill="transparent" stroke-width="4.8" stroke="rgb(28,28,28)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 112.343 74.57 C 108.325 75.331 104.242 78.076 102.274 81.333 L 101.712 82.243 L 99.315 82.259 C 96.537 82.259 95.545 82.457 93.809 83.366 C 90.106 85.317 87.973 89.467 88.568 93.518 C 88.668 94.262 88.898 95.238 89.08 95.684 C 89.246 96.13 89.395 96.51 89.395 96.544 C 89.395 96.577 88.899 96.692 88.287 96.808 C 86.865 97.056 84.765 98.031 83.657 98.974 C 82.417 99.999 81.376 101.47 80.781 103.008 C 80.351 104.083 80.235 104.645 80.169 106.017 C 80.069 108.166 80.301 109.406 81.161 111.175 C 82.269 113.49 84.385 115.325 86.997 116.235 C 87.527 116.417 88.601 116.565 89.94 116.631 L 92.04 116.731 L 90.37 118.797 C 88.055 121.674 88.22 121.525 87.625 121.211 C 86.765 120.781 85.129 120.583 83.955 120.765 C 81.707 121.129 80.02 122.369 79.028 124.386 C 78.416 125.593 78.4 125.708 78.4 127.378 C 78.4 128.998 78.433 129.213 78.912 130.205 C 79.586 131.607 80.718 132.739 82.12 133.413 C 83.112 133.892 83.327 133.925 85.013 133.925 C 86.667 133.925 86.915 133.892 87.774 133.462 C 89.824 132.454 91.164 130.668 91.56 128.403 C 91.808 127.047 91.544 125.493 90.866 124.27 C 90.469 123.509 90.42 123.327 90.585 123.079 C 90.701 122.914 91.925 121.41 93.28 119.723 L 95.76 116.665 L 100.935 116.665 L 106.093 116.648 L 106.093 126.651 L 103.514 129.792 C 102.55 130.952 101.597 132.12 100.654 133.297 L 100.356 133.644 L 99.315 133.132 C 98.323 132.636 98.141 132.603 96.421 132.603 C 94.801 132.603 94.503 132.652 93.661 133.049 C 90.949 134.322 89.345 137.364 89.874 140.241 C 90.271 142.424 91.709 144.308 93.66 145.218 C 94.503 145.614 94.784 145.664 96.504 145.664 C 98.339 145.664 98.438 145.648 99.447 145.118 C 100.836 144.391 101.861 143.333 102.506 141.977 C 103.002 140.952 103.035 140.754 103.018 139.133 C 103.018 137.712 102.952 137.249 102.654 136.604 C 102.456 136.157 102.34 135.711 102.406 135.612 C 102.472 135.496 103.266 134.488 104.192 133.347 C 105.232 132.066 106.268 130.781 107.3 129.494 L 108.739 127.725 L 108.739 116.648 L 113.864 116.648 L 113.864 140.406 L 113.087 140.704 C 111.963 141.134 111.235 141.613 110.425 142.506 C 107.383 145.813 108.424 151.137 112.492 153.071 C 113.533 153.567 113.748 153.6 115.352 153.6 C 116.989 153.6 117.171 153.567 118.179 153.071 C 119.502 152.41 120.808 151.087 121.436 149.764 C 121.833 148.905 121.883 148.624 121.883 146.987 C 121.883 145.366 121.833 145.069 121.436 144.226 C 120.659 142.556 118.758 140.936 117.138 140.555 L 116.675 140.456 L 116.675 116.648 L 122.296 116.648 L 122.296 127.858 L 125.536 131.842 L 128.777 135.843 L 128.397 136.703 C 128.066 137.43 128 137.827 128 139.299 C 128 140.836 128.05 141.134 128.446 141.994 C 129.058 143.3 130.381 144.639 131.654 145.267 C 133.72 146.292 136.515 146.061 138.449 144.738 C 141.789 142.44 142.202 137.43 139.309 134.521 C 137.259 132.487 134.25 132.007 131.637 133.281 C 130.844 133.677 130.678 133.71 130.496 133.496 C 130.364 133.363 129.058 131.776 127.603 129.974 L 124.941 126.684 L 124.941 116.648 L 130.116 116.665 L 135.275 116.665 L 137.953 119.988 L 140.631 123.311 L 140.235 123.989 C 138.945 126.237 139.077 129.114 140.565 131.33 C 141.227 132.305 142.119 133.016 143.459 133.661 C 144.269 134.041 144.566 134.091 146.104 134.091 C 147.708 134.091 147.923 134.058 148.915 133.578 C 150.485 132.818 151.444 131.908 152.172 130.404 C 152.783 129.197 152.8 129.081 152.8 127.395 C 152.8 125.708 152.783 125.593 152.188 124.386 C 151.444 122.881 150.485 121.955 148.948 121.228 C 147.923 120.732 147.708 120.699 146.104 120.699 C 144.682 120.699 144.219 120.765 143.591 121.062 L 142.814 121.41 L 140.912 119.045 L 139.028 116.681 L 140.863 116.615 C 142.301 116.549 142.996 116.433 143.938 116.102 C 149.725 114.069 152.32 107.356 149.444 101.851 C 148.104 99.271 145.244 97.205 142.417 96.775 C 141.375 96.61 141.16 96.527 141.243 96.312 C 141.904 94.824 142.037 94.179 142.037 92.262 C 142.053 90.724 141.987 90.079 141.739 89.368 C 140.78 86.541 138.978 84.408 136.597 83.251 C 134.994 82.457 133.902 82.259 131.224 82.259 L 128.827 82.242 L 128.264 81.332 C 126.512 78.44 122.792 75.745 119.237 74.802 C 117.485 74.356 114.128 74.24 112.343 74.571 Z M 118.774 77.547 C 121.37 78.307 124.015 80.109 125.421 82.06 L 125.768 82.556 L 124.859 83.019 C 123.106 83.895 121.469 86.177 121.205 88.079 C 121.106 88.789 121.139 88.889 121.618 89.385 C 122.064 89.815 122.23 89.881 122.66 89.798 C 123.404 89.649 123.85 89.17 124.098 88.26 C 124.411 87.044 125.238 86.024 126.363 85.466 C 127.223 85.053 127.537 84.986 129.339 84.937 C 133.191 84.805 135.308 85.384 137.06 87.037 C 139.028 88.889 139.788 91.667 139.011 94.147 C 138.366 96.197 137.424 97.304 135.523 98.197 C 134.547 98.66 134.299 98.709 132.795 98.709 C 131.505 98.693 130.926 98.61 130.133 98.329 C 129.008 97.916 128.479 97.999 128.016 98.659 C 127.306 99.652 127.901 100.561 129.604 101.123 C 130.612 101.454 131.141 101.52 132.795 101.52 C 135.093 101.503 136.217 101.206 137.97 100.098 C 138.978 99.486 139.077 99.453 140.416 99.453 C 142.665 99.453 144.368 100.164 145.872 101.735 C 147.377 103.306 148.154 105.736 147.774 107.753 C 147.146 111.093 144.632 113.441 141.276 113.854 C 140.4 113.953 130.728 114.003 114.277 113.97 L 88.651 113.92 L 87.659 113.523 C 85.691 112.73 84.269 111.407 83.393 109.572 C 82.897 108.53 82.863 108.348 82.863 106.645 C 82.863 104.959 82.897 104.761 83.376 103.752 C 84.749 100.875 87.146 99.453 90.601 99.453 C 92.503 99.453 93.181 99.685 94.255 100.726 C 95.264 101.702 95.76 102.909 95.776 104.496 C 95.81 106.265 95.793 106.182 96.173 106.563 C 96.636 107.026 97.529 106.993 98.108 106.497 C 98.521 106.133 98.571 105.984 98.62 104.81 C 98.736 102.727 98.157 100.826 96.934 99.288 C 96.256 98.445 94.636 97.288 93.66 96.973 C 92.817 96.693 92.668 96.543 92.023 95.221 C 90.717 92.509 91.163 89.566 93.247 87.268 C 94.718 85.665 96.851 84.921 99.943 84.904 L 101.166 84.904 L 101.034 85.434 C 100.968 85.731 100.918 86.69 100.918 87.566 C 100.94 90.497 102.054 93.315 104.043 95.469 L 105.101 96.609 L 104.853 98.065 C 104.721 98.842 104.605 99.834 104.605 100.263 C 104.605 102.198 105.382 105.223 105.961 105.653 C 106.523 106.034 107.366 105.967 107.829 105.488 C 108.342 104.992 108.342 104.496 107.879 103.091 C 107.416 101.669 107.383 99.156 107.813 97.717 C 108.573 95.171 110.524 92.691 112.674 91.55 C 113.781 90.955 114.029 90.658 114.029 89.864 C 114.029 89.087 113.351 88.475 112.574 88.591 C 111.235 88.773 108.474 90.873 107.135 92.741 C 106.804 93.204 106.49 93.617 106.457 93.667 C 106.341 93.815 105.316 92.526 104.804 91.55 C 102.968 88.128 103.63 83.598 106.358 80.87 C 109.648 77.58 114.459 76.29 118.774 77.547 Z M 86.518 123.84 C 87.344 124.187 88.171 125.03 88.568 125.94 C 89.593 128.304 87.89 130.982 85.245 131.164 C 84.666 131.214 84.055 131.148 83.724 131.032 C 81.74 130.238 80.665 128.006 81.376 126.138 C 82.203 123.956 84.385 122.98 86.518 123.84 Z M 147.559 124.022 C 150.32 125.394 150.336 129.23 147.575 130.602 C 143.855 132.454 140.466 127.659 143.392 124.683 C 144.517 123.542 146.104 123.294 147.559 124.022 Z M 98.025 135.777 C 98.372 135.909 98.935 136.356 99.281 136.753 C 100.373 137.976 100.588 139.431 99.91 140.886 C 98.372 144.176 93.544 143.664 92.701 140.109 C 92.221 138.158 93.478 136.108 95.479 135.562 C 96.322 135.331 97.049 135.38 98.025 135.777 Z M 136.316 135.843 C 137.788 136.554 138.714 138.439 138.35 139.993 C 137.92 141.878 136.399 143.101 134.531 143.101 C 131.703 143.101 129.885 140.076 131.158 137.513 C 132.133 135.546 134.25 134.868 136.316 135.843 Z M 116.807 143.531 C 119.336 144.573 119.965 147.946 117.981 149.83 C 115.55 152.129 111.5 150.393 111.5 147.053 C 111.5 145.003 113.203 143.267 115.22 143.267 C 115.749 143.267 116.46 143.382 116.807 143.531 Z" fill="rgb(245,186,0)"></path></svg>',
                                        svgContentId: 9948591413,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    s(q, {
                                      __framer__animate: { transition: Re },
                                      __framer__animateOnce: !0,
                                      __framer__enter: R,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-2ylzwx",
                                      "data-framer-name": "Title",
                                      name: "Title",
                                      children: [
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(f, {
                                            children: e("h1", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                                "--framer-font-family":
                                                  '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                                "--framer-font-size": "28px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Dynamic API",
                                            }),
                                          }),
                                          className: "framer-18lyfai",
                                          fonts: [
                                            "CUSTOM;Helvetica Now Display Bold",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                        e(p, {
                                          __fromCanvasComponent: !0,
                                          children: e(f, {
                                            children: e("h1", {
                                              style: {
                                                "--framer-font-size": "19px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "rgb(178, 173, 173)",
                                              },
                                              children:
                                                "Integrate AI-generated music directly into your platforms. Deliver seamless, creative solutions for your users.",
                                            }),
                                          }),
                                          className: "framer-k6fguw",
                                          fonts: ["Inter"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    e(ze, {
                                      className: "framer-91fv8x",
                                      "data-framer-name": "Circle",
                                      fill: "black",
                                      intrinsicHeight: 184,
                                      intrinsicWidth: 148,
                                      name: "Circle",
                                      svg: '<svg width="148" height="184" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><circle cx="144.647" cy="7.4" r="2.4" fill="#F5BA00"/></g><g filter="url(#b)"><circle cx="2.4" cy="143" r="2.4" fill="#F5BA00"/></g><g filter="url(#c)"><circle cx="26.4" cy="1.4" r="1.2" fill="#F5BA00"/></g><g filter="url(#d)"><circle cx="117" cy="178.4" r="3" fill="#F5BA00"/></g><g filter="url(#e)"><circle cx="37.799" cy="167.6" r=".6" fill="#F5BA00"/></g><g filter="url(#f)"><circle cx="39.6" cy="182.6" r="1.2" fill="#F5BA00"/></g><g filter="url(#g)"><circle cx="126" cy="87.8" r="1.2" fill="#F5BA00"/></g><defs><filter id="a" x="142.247" y="5" width="4.8" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="b" x="0" y="140.6" width="4.8" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="c" x="25.2" y=".2" width="2.4" height="3.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="d" x="114" y="175.4" width="6" height="7.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="e" x="37.2" y="167" width="1.199" height="2.399" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="f" x="38.4" y="181.4" width="2.4" height="3.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter><filter id="g" x="124.8" y="86.6" width="2.4" height="3.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.2"/><feGaussianBlur stdDeviation="1.2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend in2="shape" result="effect1_innerShadow_4015_5"/></filter></defs></svg>',
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s("div", {
                                  className: "framer-fvs9me",
                                  children: [
                                    s("div", {
                                      className: "framer-1q1honf",
                                      "data-framer-name": "Card 04",
                                      name: "Card 04",
                                      children: [
                                        s("div", {
                                          className: "framer-ww9eo8",
                                          "data-framer-name": "Text Ticker",
                                          name: "Text Ticker",
                                          children: [
                                            e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(f, {
                                                children: e("h1", {
                                                  style: {
                                                    "--framer-font-size":
                                                      "18px",
                                                    "--framer-letter-spacing":
                                                      "0px",
                                                    "--framer-line-height":
                                                      "1.5em",
                                                    "--framer-text-alignment":
                                                      "center",
                                                    "--framer-text-color":
                                                      "rgb(178, 173, 173)",
                                                  },
                                                  children:
                                                    "Add AI to your smart contracts with a few lines of code. Add AI to your smart contracts with a few lines of code. Add AI to your smart contracts with a few lines of code. Add AI to your smart contracts with a few lines of code. Add AI to your smart contracts with a few lines of code. Add AI to your smart contracts with a few lines of code. Add AI to your smart contracts with a few lines of code. Add AI to your smart contracts with a few lines of code.",
                                                }),
                                              }),
                                              className: "framer-1orbyd8",
                                              effect: c2,
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e("div", {
                                              className: "framer-5dgxji",
                                              "data-framer-name": "Shadow",
                                              name: "Shadow",
                                            }),
                                            e(ze, {
                                              className: "framer-6i7ha0",
                                              "data-framer-name": "Graphic",
                                              fill: "black",
                                              intrinsicHeight: 78,
                                              intrinsicWidth: 171,
                                              name: "Graphic",
                                              svg: '<svg width="171" height="78" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.2" y="2" width="168" height="74.4" rx="37.2" fill="#F5BA00" stroke="#0B0B0E" stroke-width="2.4"/><path d="M97.467 34.7H79.125c-3.85-.117-3.858-5.708 0-5.833h18.342c3.85.116 3.858 5.708 0 5.833ZM80.4 46.408c-3.067-2.35-10.225-1.166-10.233 2.825 0 2.267 2.617 4.042 5.95 4.042s5.95-1.775 5.95-4.033V35.533H80.4v10.875Zm14.133 0c-3.066-2.35-10.216-1.166-10.225 2.825 0 2.267 2.609 4.042 5.942 4.042 3.334 0 5.95-1.775 5.95-4.033V35.533h-1.666v10.875ZM70.35 41.375l-.441-2.533-1.734-1.9 2.534-.442 1.9-1.742.441 2.542 1.734 1.892-2.534.441-1.9 1.742Zm1.109-3.317.016.034.025-.017-.016-.025h-.025v.008Zm29.816 14.134.484-1.75-1.734.541-1.75-.483.542 1.733-.483 1.75 1.733-.541 1.75.483-.542-1.733ZM90.258 25.675l1-1.825 1.826-1-1.826-1-1-1.825-1 1.825-1.825 1 1.825 1 1 1.825Z" fill="#000"/></svg>',
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        s(q, {
                                          __framer__animate: { transition: Ar },
                                          __framer__animateOnce: !0,
                                          __framer__enter: R,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: "framer-184zmu8",
                                          "data-framer-name": "Title",
                                          name: "Title",
                                          children: [
                                            e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(f, {
                                                children: e("h1", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                                    "--framer-font-family":
                                                      '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "28px",
                                                    "--framer-letter-spacing":
                                                      "0px",
                                                    "--framer-text-alignment":
                                                      "left",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children:
                                                    "AI-Powered Smart Contracts",
                                                }),
                                              }),
                                              className: "framer-f3rele",
                                              fonts: [
                                                "CUSTOM;Helvetica Now Display Bold",
                                              ],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(p, {
                                              __fromCanvasComponent: !0,
                                              children: e(f, {
                                                children: e("h1", {
                                                  style: {
                                                    "--framer-font-size":
                                                      "19px",
                                                    "--framer-letter-spacing":
                                                      "0px",
                                                    "--framer-line-height":
                                                      "1.5em",
                                                    "--framer-text-alignment":
                                                      "left",
                                                    "--framer-text-color":
                                                      "rgb(178, 173, 173)",
                                                  },
                                                  children:
                                                    "Add AI to your smart contracts with a few lines of code.",
                                                }),
                                              }),
                                              className: "framer-d4t462",
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e(q, {
                                      __framer__loop: p2,
                                      __framer__loopEffectEnabled: !0,
                                      __framer__loopRepeatDelay: 0,
                                      __framer__loopRepeatType: "loop",
                                      __framer__loopTransition: d2,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: "framer-e4v7t5",
                                      "data-framer-name": "Shadow",
                                      name: "Shadow",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e("section", {
                  className: "framer-csicch",
                  "data-framer-name": "Section",
                  name: "Section",
                  children: s("div", {
                    className: "framer-1kinkxu",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: [
                      e("div", {
                        className: "framer-1psee8d",
                        "data-framer-name": "Title",
                        name: "Title",
                        children: e(h, {
                          breakpoint: o,
                          overrides: {
                            E2xrsV1h4: {
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                    "--framer-font-family":
                                      '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                    "--framer-font-size": "42px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "How It Works",
                                }),
                              }),
                            },
                          },
                          children: e(Nr, {
                            __framer__animate: { transition: ve },
                            __framer__animateOnce: !0,
                            __framer__enter: R,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(f, {
                              children: e("h1", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                  "--framer-font-family":
                                    '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                  "--framer-font-size": "48px",
                                  "--framer-letter-spacing": "0px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "How It Works",
                              }),
                            }),
                            className: "framer-138ah7g",
                            fonts: ["CUSTOM;Helvetica Now Display Bold"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      s("div", {
                        className: "framer-kygsqq",
                        children: [
                          s("div", {
                            className: "framer-17dfo87",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [
                              s(q, {
                                __framer__animate: { transition: De },
                                __framer__animateOnce: !0,
                                __framer__enter: R,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-hbdtr7",
                                "data-framer-name": "Single",
                                name: "Single",
                                children: [
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                          "--framer-font-family":
                                            '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                          "--framer-font-size": "28px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Step 01",
                                      }),
                                    }),
                                    className: "framer-109wa54",
                                    fonts: [
                                      "CUSTOM;Helvetica Now Display Bold",
                                    ],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--framer-font-size": "19px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(178, 173, 173)",
                                        },
                                        children:
                                          "Explore \u2013 Choose your desired genre, mood, and style.",
                                      }),
                                    }),
                                    className: "framer-qr4wjm",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(q, {
                                __framer__animate: { transition: Re },
                                __framer__animateOnce: !0,
                                __framer__enter: R,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-o74pt",
                                "data-framer-name": "Single",
                                name: "Single",
                                children: [
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                          "--framer-font-family":
                                            '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                          "--framer-font-size": "28px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Step 02",
                                      }),
                                    }),
                                    className: "framer-1ooz8vx",
                                    fonts: [
                                      "CUSTOM;Helvetica Now Display Bold",
                                    ],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--framer-font-size": "19px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(178, 173, 173)",
                                        },
                                        children:
                                          "Generate \u2013 Let our AI craft a track that perfectly fits your vision.",
                                      }),
                                    }),
                                    className: "framer-e2q2cl",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(q, {
                                __framer__animate: { transition: Ar },
                                __framer__animateOnce: !0,
                                __framer__enter: R,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-94gicw",
                                "data-framer-name": "Single",
                                name: "Single",
                                children: [
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                          "--framer-font-family":
                                            '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                          "--framer-font-size": "28px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Step 03",
                                      }),
                                    }),
                                    className: "framer-11mn0n5",
                                    fonts: [
                                      "CUSTOM;Helvetica Now Display Bold",
                                    ],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--framer-font-size": "19px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(178, 173, 173)",
                                        },
                                        children:
                                          "Create \u2013 Download, tweak, and use your music anywhere you like.",
                                      }),
                                    }),
                                    className: "framer-7f94v5",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: { y: 4018.4999999999995 },
                              E2xrsV1h4: { y: 3842.7 },
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e("section", {
                  className: "framer-jhf3y",
                  "data-framer-name": "Section",
                  name: "Section",
                  children: s("div", {
                    className: "framer-oa70m1",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: [
                      s("div", {
                        className: "framer-1gd6503",
                        "data-framer-name": "Content",
                        name: "Content",
                        children: [
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: { y: 4247.5 },
                              E2xrsV1h4: { y: 3971.7 },
                            },
                            children: e(y, {
                              height: 33,
                              children: e(xe, {
                                __framer__animate: { transition: ve },
                                __framer__animateOnce: !0,
                                __framer__enter: R,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1ask3cj-container",
                                children: e(cr, {
                                  height: "100%",
                                  id: "MdrZ10khY",
                                  layoutId: "MdrZ10khY",
                                  sHraVQ6Fn: "Decentralized Agents",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          s(q, {
                            __framer__animate: { transition: De },
                            __framer__animateOnce: !0,
                            __framer__enter: R,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-135za1q",
                            "data-framer-name": "Title",
                            name: "Title",
                            children: [
                              e(h, {
                                breakpoint: o,
                                overrides: {
                                  E2xrsV1h4: {
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                          "--framer-font-family":
                                            '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                          "--framer-font-size": "42px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Unlock Music Innovation with Our API",
                                      }),
                                    }),
                                  },
                                },
                                children: e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(f, {
                                    children: e("h1", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                        "--framer-font-family":
                                          '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                        "--framer-font-size": "48px",
                                        "--framer-letter-spacing": "0px",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "Unlock Music Innovation with Our API",
                                    }),
                                  }),
                                  className: "framer-14ntk0u",
                                  fonts: ["CUSTOM;Helvetica Now Display Bold"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              e(p, {
                                __fromCanvasComponent: !0,
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--framer-font-size": "19px",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "1.5em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(178, 173, 173)",
                                    },
                                    children:
                                      "Rhythmix\u2019s powerful API allows you to embed AI music generation into your own apps, websites, or services. Whether it\u2019s enhancing a music streaming platform, leveling up your video game, or personalizing content creation tools, our API gives you the tools to innovate with sound.",
                                  }),
                                }),
                                className: "framer-vb7dgo",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: { y: 4438.6 },
                              E2xrsV1h4: {
                                width: "min(100vw - 40px, 390px)",
                                y: 4155.599999999999,
                              },
                            },
                            children: e(y, {
                              height: 54,
                              children: e(xe, {
                                __framer__animate: { transition: Re },
                                __framer__animateOnce: !0,
                                __framer__enter: R,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-9demjg-container",
                              }),
                            }),
                          }),
                        ],
                      }),
                      s("div", {
                        className: "framer-dpsgi4",
                        children: [
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 348,
                                  intrinsicWidth: 652,
                                  loading: B(4542.6),
                                  pixelHeight: 1392,
                                  pixelWidth: 2608,
                                  sizes: "max(min(100vw - 60px, 1360px), 1px)",
                                  src: "https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=1024",
                                  srcSet:
                                    "https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=512 512w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png 2608w",
                                },
                              },
                              E2xrsV1h4: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 348,
                                  intrinsicWidth: 652,
                                  loading: B(4249.599999999999),
                                  pixelHeight: 1392,
                                  pixelWidth: 2608,
                                  sizes: "max(min(100vw - 40px, 390px), 1px)",
                                  src: "https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=1024",
                                  srcSet:
                                    "https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=512 512w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png 2608w",
                                },
                              },
                            },
                            children: e(r2, {
                              __framer__animate: { transition: g2 },
                              __framer__animateOnce: !0,
                              __framer__enter: R,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 348,
                                intrinsicWidth: 652,
                                pixelHeight: 1392,
                                pixelWidth: 2608,
                                sizes:
                                  "max(min(100vw - 60px, 1360px) * 0.45, 1px)",
                                src: "https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=512 512w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/LndiQMzjPzCFmkFAGyNhqUO6Fk.png 2608w",
                              },
                              className: "framer-acnq4w",
                              "data-framer-name": "Graphic",
                              name: "Graphic",
                            }),
                          }),
                          e(h, {
                            breakpoint: o,
                            overrides: {
                              DBZV3IwOT: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 2388,
                                  intrinsicWidth: 2692,
                                  loading: B(4300.6),
                                  pixelHeight: 2388,
                                  pixelWidth: 2692,
                                  sizes: "854px",
                                  src: "https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=512 512w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png 2692w",
                                },
                              },
                              E2xrsV1h4: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 2388,
                                  intrinsicWidth: 2692,
                                  loading: B(4007.5999999999995),
                                  pixelHeight: 2388,
                                  pixelWidth: 2692,
                                  sizes: "854px",
                                  src: "https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=512 512w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png 2692w",
                                },
                              },
                            },
                            children: e(U, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 2388,
                                intrinsicWidth: 2692,
                                pixelHeight: 2388,
                                pixelWidth: 2692,
                                sizes: "854px",
                                src: "https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png",
                                srcSet:
                                  "https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=512 512w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/AUDq4LhOBmD5h7YjcGex5ZoYHU.png 2692w",
                              },
                              className: "framer-bv4sx0",
                              "data-framer-name": "Image",
                              name: "Image",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e("section", {
                  className: "framer-s3qa9y",
                  "data-framer-name": "CTA",
                  name: "CTA",
                  children: e(h, {
                    breakpoint: o,
                    overrides: {
                      DBZV3IwOT: {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: B(5772.200000000001),
                          pixelHeight: 480,
                          pixelWidth: 1368,
                          sizes: "min(100vw - 60px, 1360px)",
                          src: "https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg",
                          srcSet:
                            "https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg?scale-down-to=512 512w,https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg 1368w",
                        },
                      },
                      E2xrsV1h4: {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: B(5401.999999999999),
                          pixelHeight: 480,
                          pixelWidth: 1368,
                          sizes: "min(100vw - 40px, 390px)",
                          src: "https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg",
                          srcSet:
                            "https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg?scale-down-to=512 512w,https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg 1368w",
                        },
                      },
                      x7xcyGr7h: {
                        background: {
                          alt: "",
                          fit: "fill",
                          pixelHeight: 480,
                          pixelWidth: 1368,
                          sizes: "min(100vw - 60px, 1170px)",
                          src: "https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg",
                          srcSet:
                            "https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg?scale-down-to=512 512w,https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg 1368w",
                        },
                      },
                    },
                    children: s(U, {
                      background: {
                        alt: "",
                        fit: "fill",
                        pixelHeight: 480,
                        pixelWidth: 1368,
                        sizes: "min(100vw - 60px, 1360px)",
                        src: "https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg",
                        srcSet:
                          "https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg?scale-down-to=512 512w,https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/TUTg52v65jDwSRMw9vMxfS6f0gE.svg 1368w",
                      },
                      className: "framer-1daask",
                      "data-border": !0,
                      "data-framer-name": "Container",
                      name: "Container",
                      children: [
                        s("div", {
                          className: "framer-1f83p6q",
                          "data-framer-name": "Content",
                          name: "Content",
                          children: [
                            s(q, {
                              __framer__animate: { transition: ve },
                              __framer__animateOnce: !0,
                              __framer__enter: R,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-r88ben",
                              "data-framer-name": "Title",
                              name: "Title",
                              children: [
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    E2xrsV1h4: {
                                      children: e(f, {
                                        children: e("h1", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                            "--framer-font-family":
                                              '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                            "--framer-font-size": "42px",
                                            "--framer-letter-spacing": "0px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Community Share Pool",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(p, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("h1", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                          "--framer-font-family":
                                            '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                          "--framer-font-size": "48px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Community Share Pool",
                                      }),
                                    }),
                                    className: "framer-1y175g6",
                                    fonts: [
                                      "CUSTOM;Helvetica Now Display Bold",
                                    ],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(f, {
                                    children: e("h1", {
                                      style: {
                                        "--framer-font-size": "19px",
                                        "--framer-letter-spacing": "0px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(178, 173, 173)",
                                      },
                                      children:
                                        "Begin your investment journey with us and experience the power and profits of AI.",
                                    }),
                                  }),
                                  className: "framer-794now",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            e(h, {
                              breakpoint: o,
                              overrides: {
                                DBZV3IwOT: { y: 5970.300000000001 },
                                E2xrsV1h4: {
                                  width:
                                    "calc(min(100vw - 40px, 390px) - 40px)",
                                  y: 5592.899999999999,
                                },
                              },
                              children: e(y, {
                                height: 54,
                                children: e(xe, {
                                  __framer__animate: { transition: De },
                                  __framer__animateOnce: !0,
                                  __framer__enter: R,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: "framer-2w9kws-container",
                                  children: e(h, {
                                    breakpoint: o,
                                    overrides: {
                                      E2xrsV1h4: { style: { width: "100%" } },
                                    },
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        e(h, {
                          breakpoint: o,
                          overrides: {
                            DBZV3IwOT: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: B(5706.300000000001),
                                pixelHeight: 380,
                                pixelWidth: 1368,
                                sizes: "min(100vw - 60px, 1360px)",
                                src: "https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg",
                                srcSet:
                                  "https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg?scale-down-to=512 512w,https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg 1368w",
                              },
                            },
                            E2xrsV1h4: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: B(5545.899999999999),
                                pixelHeight: 380,
                                pixelWidth: 1368,
                                sizes:
                                  "calc(min(100vw - 40px, 390px) * 1.3514)",
                                src: "https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg",
                                srcSet:
                                  "https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg?scale-down-to=512 512w,https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg 1368w",
                              },
                            },
                            x7xcyGr7h: {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 380,
                                pixelWidth: 1368,
                                sizes: "min(100vw - 60px, 1170px)",
                                src: "https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg",
                                srcSet:
                                  "https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg?scale-down-to=512 512w,https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg 1368w",
                              },
                            },
                          },
                          children: e(U, {
                            background: {
                              alt: "",
                              fit: "fill",
                              pixelHeight: 380,
                              pixelWidth: 1368,
                              sizes: "min(100vw - 60px, 1360px)",
                              src: "https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg",
                              srcSet:
                                "https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg?scale-down-to=512 512w,https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/w9rkejdswYl3RkuZUtBP2GUA9No.svg 1368w",
                            },
                            className: "framer-1fzgd8h",
                            transformTemplate: Ie,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                e(h, {
                  breakpoint: o,
                  overrides: {
                    DBZV3IwOT: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: B(4685.100000000001),
                        pixelHeight: 4924,
                        pixelWidth: 3456,
                        sizes: "min(100vw, 1600px)",
                        src: "https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png",
                        srcSet:
                          "https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=1024 718w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=2048 1437w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=4096 2874w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png 3456w",
                      },
                    },
                    E2xrsV1h4: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: B(4648.299999999999),
                        pixelHeight: 4924,
                        pixelWidth: 3456,
                        sizes: "min(100vw, 1600px)",
                        src: "https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png",
                        srcSet:
                          "https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=1024 718w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=2048 1437w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=4096 2874w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png 3456w",
                      },
                    },
                  },
                  children: e(U, {
                    background: {
                      alt: "",
                      fit: "fill",
                      pixelHeight: 4924,
                      pixelWidth: 3456,
                      sizes: "min(100vw, 1600px)",
                      src: "https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png",
                      srcSet:
                        "https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=1024 718w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=2048 1437w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png?scale-down-to=4096 2874w,https://framerusercontent.com/images/taoJGjmxZedVucLLNXga3jHhqvg.png 3456w",
                    },
                    className: "framer-1qq2om0",
                    "data-framer-name": "Shape 02",
                    name: "Shape 02",
                  }),
                }),
                e(h, {
                  breakpoint: o,
                  overrides: {
                    DBZV3IwOT: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: B(5779.100000000001),
                        pixelHeight: 2279,
                        pixelWidth: 2467,
                        sizes: "840px",
                        src: "https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png",
                        srcSet:
                          "https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=512 512w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png 2467w",
                      },
                    },
                    E2xrsV1h4: {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: B(5302.299999999999),
                        pixelHeight: 2279,
                        pixelWidth: 2467,
                        sizes: "840px",
                        src: "https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png",
                        srcSet:
                          "https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=512 512w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png 2467w",
                      },
                    },
                  },
                  children: e(U, {
                    background: {
                      alt: "",
                      fit: "fill",
                      pixelHeight: 2279,
                      pixelWidth: 2467,
                      sizes: "840px",
                      src: "https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png",
                      srcSet:
                        "https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=512 512w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/otBOJbBZHnYtbYDGFYHSoHTgDc.png 2467w",
                    },
                    className: "framer-11j9ung",
                    "data-framer-name": "Shape 01",
                    name: "Shape 01",
                  }),
                }),
                s("div", {
                  className: "framer-1jl1fuk",
                  "data-framer-name": "Footer",
                  name: "Footer",
                  children: [
                    s("div", {
                      className: "framer-1tv667z",
                      "data-framer-name": "Container",
                      name: "Container",
                      children: [
                        s(q, {
                          __framer__animate: { transition: ve },
                          __framer__animateOnce: !0,
                          __framer__enter: R,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1yhc99i",
                          "data-framer-name": "Single Row",
                          name: "Single Row",
                          children: [
                            e(ir, {
                              links: [
                                {
                                  href: { webPageId: "augiA20Il" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "augiA20Il" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "augiA20Il" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "augiA20Il" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (b) =>
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6164.300000000001 },
                                    E2xrsV1h4: { y: 5766.899999999999 },
                                  },
                                  children: e(y, {
                                    height: 51,
                                    width: "237px",
                                    children: e(F, {
                                      className: "framer-y31yb6-container",
                                      children: e(h, {
                                        breakpoint: o,
                                        overrides: {
                                          DBZV3IwOT: { Uv_dL2Q0B: b[2] },
                                          E2xrsV1h4: { Uv_dL2Q0B: b[3] },
                                          x7xcyGr7h: { Uv_dL2Q0B: b[1] },
                                        },
                                        children: e(Fe, {
                                          height: "100%",
                                          id: "WEOcNheke",
                                          layoutId: "WEOcNheke",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          Uv_dL2Q0B: b[0],
                                          variant: "u8ncKtQTv",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBSZWd1bGFy",
                                    "--framer-font-family":
                                      '"Helvetica Now Display Regular", "Helvetica Now Display Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "1025 Nine North Drive, Suite G Alpharetta, GA 30004",
                                }),
                              }),
                              className: "framer-17w6xw2",
                              fonts: ["CUSTOM;Helvetica Now Display Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        s(q, {
                          __framer__animate: { transition: Re },
                          __framer__animateOnce: !0,
                          __framer__enter: R,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-7jyqlg",
                          "data-framer-name": "Single Row",
                          name: "Single Row",
                          children: [
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                    "--framer-font-family":
                                      '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                    "--framer-font-size": "26px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "FEATURE",
                                }),
                              }),
                              className: "framer-vi5rf2",
                              fonts: ["CUSTOM;Helvetica Now Display Bold"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            s("div", {
                              className: "framer-1apdecz",
                              "data-framer-name": "Link List",
                              name: "Link List",
                              children: [
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6227.500000000001 },
                                    E2xrsV1h4: { y: 5953.499999999998 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-19lphpb-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "x1bL8tztY",
                                        JrV8YSXQf: "120+ Music ai Avatars",
                                        layoutId: "x1bL8tztY",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6277.500000000001 },
                                    E2xrsV1h4: { y: 5995.499999999998 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-18cxmou-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "LeHoNBZt8",
                                        JrV8YSXQf: "130+ Languages",
                                        layoutId: "LeHoNBZt8",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6327.500000000001 },
                                    E2xrsV1h4: { y: 6037.499999999998 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-16766ov-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "XK62FTz4s",
                                        JrV8YSXQf: "60+ music ai Templates",
                                        layoutId: "XK62FTz4s",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6377.500000000001 },
                                    E2xrsV1h4: { y: 6079.499999999998 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-1cwhq7h-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "i1l0xbUTI",
                                        JrV8YSXQf: "Custom Avatars",
                                        layoutId: "i1l0xbUTI",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6427.500000000001 },
                                    E2xrsV1h4: { y: 6121.499999999998 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-plz1yu-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "EIK3lXNmV",
                                        JrV8YSXQf: "Free music ai Generator",
                                        layoutId: "EIK3lXNmV",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(q, {
                          __framer__animate: { transition: Ar },
                          __framer__animateOnce: !0,
                          __framer__enter: R,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1snhjv8",
                          "data-framer-name": "Single Row",
                          name: "Single Row",
                          children: [
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                    "--framer-font-family":
                                      '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                    "--framer-font-size": "26px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "USE CASES",
                                }),
                              }),
                              className: "framer-5dc4tf",
                              fonts: ["CUSTOM;Helvetica Now Display Bold"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            s("div", {
                              className: "framer-1l8di36",
                              "data-framer-name": "Link List",
                              name: "Link List",
                              children: [
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6532.700000000001 },
                                    E2xrsV1h4: { y: 6232.699999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-1qdz0f7-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "ZUj8Iivox",
                                        JrV8YSXQf: "Learning &\xA0Development",
                                        layoutId: "ZUj8Iivox",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6582.700000000001 },
                                    E2xrsV1h4: { y: 6274.699999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-1yoc5aq-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "S8_QpZQI3",
                                        JrV8YSXQf: "Sales Enablement",
                                        layoutId: "S8_QpZQI3",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6632.700000000001 },
                                    E2xrsV1h4: { y: 6316.699999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-13rby6n-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "GqX6f0kww",
                                        JrV8YSXQf: "Information Technology",
                                        layoutId: "GqX6f0kww",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6682.700000000001 },
                                    E2xrsV1h4: { y: 6358.699999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-gkcq35-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "bYYybptyS",
                                        JrV8YSXQf: "Customer Service",
                                        layoutId: "bYYybptyS",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6732.700000000001 },
                                    E2xrsV1h4: { y: 6400.699999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-dszrik-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "XEHG528XE",
                                        JrV8YSXQf: "Training music ai",
                                        layoutId: "XEHG528XE",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(q, {
                          __framer__animate: { transition: u2 },
                          __framer__animateOnce: !0,
                          __framer__enter: R,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-g27v2a",
                          "data-framer-name": "Single Row",
                          name: "Single Row",
                          children: [
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBCb2xk",
                                    "--framer-font-family":
                                      '"Helvetica Now Display Bold", "Helvetica Now Display Bold Placeholder", sans-serif',
                                    "--framer-font-size": "26px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "COMPANY",
                                }),
                              }),
                              className: "framer-1veerd0",
                              fonts: ["CUSTOM;Helvetica Now Display Bold"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            s("div", {
                              className: "framer-1fzgisn",
                              "data-framer-name": "Link List",
                              name: "Link List",
                              children: [
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6532.700000000001 },
                                    E2xrsV1h4: { y: 6511.899999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-1wt0b3h-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "aM4fkGjrf",
                                        JrV8YSXQf: "About Us",
                                        layoutId: "aM4fkGjrf",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6582.700000000001 },
                                    E2xrsV1h4: { y: 6553.899999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-nmbx4b-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "mNZNsjZlx",
                                        JrV8YSXQf: "Ethics Guidelines",
                                        layoutId: "mNZNsjZlx",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6632.700000000001 },
                                    E2xrsV1h4: { y: 6595.899999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-4w88t2-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "wvBzhhEgD",
                                        JrV8YSXQf: "Security",
                                        layoutId: "wvBzhhEgD",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6682.700000000001 },
                                    E2xrsV1h4: { y: 6637.899999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-1aoyx5m-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "C9wBj6MP4",
                                        JrV8YSXQf: "Contact Us",
                                        layoutId: "C9wBj6MP4",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(h, {
                                  breakpoint: o,
                                  overrides: {
                                    DBZV3IwOT: { y: 6732.700000000001 },
                                    E2xrsV1h4: { y: 6679.899999999999 },
                                  },
                                  children: e(y, {
                                    height: 26,
                                    children: e(F, {
                                      className: "framer-1m39n09-container",
                                      children: e(j, {
                                        height: "100%",
                                        id: "yBqDIFPOr",
                                        JrV8YSXQf: "Resources",
                                        layoutId: "yBqDIFPOr",
                                        variant: "BdZouIuwn",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s("div", {
                      className: "framer-13ksx2j",
                      "data-border": !0,
                      "data-framer-name": "Container",
                      name: "Container",
                      children: [
                        e(q, {
                          __framer__animate: { transition: ve },
                          __framer__animateOnce: !0,
                          __framer__enter: R,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-sz0t6e",
                          children: e(h, {
                            breakpoint: o,
                            overrides: {
                              E2xrsV1h4: {
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBSZWd1bGFy",
                                      "--framer-font-family":
                                        '"Helvetica Now Display Regular", "Helvetica Now Display Regular Placeholder", sans-serif',
                                      "--framer-font-size": "22px",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children:
                                      "\xA9 2024 Rhythmix.ai Limited. All rights reserved.",
                                  }),
                                }),
                              },
                            },
                            children: e(p, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0hlbHZldGljYSBOb3cgRGlzcGxheSBSZWd1bGFy",
                                    "--framer-font-family":
                                      '"Helvetica Now Display Regular", "Helvetica Now Display Regular Placeholder", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "\xA9 2024 Rhythmix.ai Limited. All rights reserved.",
                                }),
                              }),
                              className: "framer-cdbbeo",
                              fonts: ["CUSTOM;Helvetica Now Display Regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        s(q, {
                          __framer__animate: { transition: De },
                          __framer__animateOnce: !0,
                          __framer__enter: R,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1y4e7n7",
                          "data-framer-name": "Link Wrapper",
                          name: "Link Wrapper",
                          children: [
                            e(h, {
                              breakpoint: o,
                              overrides: {
                                DBZV3IwOT: { y: 6878.900000000001 },
                                E2xrsV1h4: { y: 6842.299999999998 },
                              },
                              children: e(y, {
                                height: 26,
                                children: e(F, {
                                  className: "framer-6drsnp-container",
                                  children: e(j, {
                                    height: "100%",
                                    id: "viTyI6gYp",
                                    JrV8YSXQf: "D-ID Privacy Policy",
                                    layoutId: "viTyI6gYp",
                                    variant: "BdZouIuwn",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            e(h, {
                              breakpoint: o,
                              overrides: {
                                DBZV3IwOT: { y: 6878.900000000001 },
                                E2xrsV1h4: { y: 6842.299999999998 },
                              },
                              children: e(y, {
                                height: 26,
                                children: e(F, {
                                  className: "framer-1uvxuaa-container",
                                  children: e(j, {
                                    height: "100%",
                                    id: "eUtWClvnE",
                                    JrV8YSXQf: "Terms of Use",
                                    layoutId: "eUtWClvnE",
                                    variant: "BdZouIuwn",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e(y, {
                  height: 94,
                  width: "100vw",
                  y: 0,
                  children: e(F, {
                    className: "framer-lxctoc-container",
                    children: e(h, {
                      breakpoint: o,
                      overrides: {
                        DBZV3IwOT: { variant: "QB1Mp2ngR" },
                        E2xrsV1h4: { variant: "LcEesULZX" },
                        x7xcyGr7h: { variant: "Ki3cuZDYJ" },
                      },
                      children: e(Vr, {
                        height: "100%",
                        id: "jAZIEdjiv",
                        layoutId: "jAZIEdjiv",
                        style: { width: "100%" },
                        variant: "sHu_lahHE",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: Y(Ct, ...O), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  w2 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${pr.bodyClassName}-framer-E57Ul { background: rgb(11, 11, 14); }`,
    ".framer-E57Ul.framer-lux5qc, .framer-E57Ul .framer-lux5qc { display: block; }",
    ".framer-E57Ul.framer-72rtr7 { align-content: center; align-items: center; background-color: #0b0b0e; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1600px; }",
    ".framer-E57Ul .framer-ie82ky { aspect-ratio: 0.8793893129770992 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1819px); left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: 100%; z-index: 0; }",
    ".framer-E57Ul .framer-1q6spei { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 200px 30px 0px 30px; position: relative; width: 100%; z-index: 5; }",
    ".framer-E57Ul .framer-1886rex { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 37px; height: min-content; justify-content: center; max-width: 900px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-88n28h-container, .framer-E57Ul .framer-1tyz8rd-container, .framer-E57Ul .framer-tz2x6b-container, .framer-E57Ul .framer-1ask3cj-container, .framer-E57Ul .framer-19lphpb-container, .framer-E57Ul .framer-18cxmou-container, .framer-E57Ul .framer-16766ov-container, .framer-E57Ul .framer-1cwhq7h-container, .framer-E57Ul .framer-plz1yu-container, .framer-E57Ul .framer-1qdz0f7-container, .framer-E57Ul .framer-1yoc5aq-container, .framer-E57Ul .framer-13rby6n-container, .framer-E57Ul .framer-gkcq35-container, .framer-E57Ul .framer-dszrik-container, .framer-E57Ul .framer-1wt0b3h-container, .framer-E57Ul .framer-nmbx4b-container, .framer-E57Ul .framer-4w88t2-container, .framer-E57Ul .framer-1aoyx5m-container, .framer-E57Ul .framer-1m39n09-container, .framer-E57Ul .framer-6drsnp-container, .framer-E57Ul .framer-1uvxuaa-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-E57Ul .framer-lhc96y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-sriaa8, .framer-E57Ul .framer-fbneoh, .framer-E57Ul .framer-1no6hh1, .framer-E57Ul .framer-11ewt4t, .framer-E57Ul .framer-1lmuywv, .framer-E57Ul .framer-1vceg1g, .framer-E57Ul .framer-1nvshyb, .framer-E57Ul .framer-1s1hx5, .framer-E57Ul .framer-161ae2y, .framer-E57Ul .framer-18lyfai, .framer-E57Ul .framer-k6fguw, .framer-E57Ul .framer-1orbyd8, .framer-E57Ul .framer-f3rele, .framer-E57Ul .framer-138ah7g, .framer-E57Ul .framer-109wa54, .framer-E57Ul .framer-qr4wjm, .framer-E57Ul .framer-1ooz8vx, .framer-E57Ul .framer-e2q2cl, .framer-E57Ul .framer-11mn0n5, .framer-E57Ul .framer-7f94v5, .framer-E57Ul .framer-14ntk0u, .framer-E57Ul .framer-vb7dgo, .framer-E57Ul .framer-1o49mf, .framer-E57Ul .framer-3ssaic, .framer-E57Ul .framer-1w8drcz, .framer-E57Ul .framer-1ol9ic3, .framer-E57Ul .framer-jay3gp, .framer-E57Ul .framer-mmeejp, .framer-E57Ul .framer-l8s64p, .framer-E57Ul .framer-1y175g6, .framer-E57Ul .framer-vi5rf2, .framer-E57Ul .framer-5dc4tf, .framer-E57Ul .framer-1veerd0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-1gviu6q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 700px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-qvh3i9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-x0hdvz { align-content: center; align-items: center; aspect-ratio: 4.087058823529412 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: var(--framer-aspect-ratio-supported, 391px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }",
    ".framer-E57Ul .framer-16qkb6x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 20px 40px 20px; position: relative; width: 100%; z-index: 8; }",
    ".framer-E57Ul .framer-1h7lb8g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 5; }",
    ".framer-E57Ul .framer-7bsjek { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 120px 30px 120px 30px; position: relative; width: 100%; z-index: 5; }",
    ".framer-E57Ul .framer-zlxrfj { align-content: center; align-items: center; aspect-ratio: 1.1407407407407408 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 1015px); justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: -260px; transform: translateX(-50%); width: 1157px; z-index: 0; }",
    ".framer-E57Ul .framer-1ww91p4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1360px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 5; }",
    ".framer-E57Ul .framer-1g37dt7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-E57Ul .framer-1fdp1i9, .framer-E57Ul .framer-yixgl5, .framer-E57Ul .framer-2pa1bt, .framer-E57Ul .framer-135za1q, .framer-E57Ul .framer-252xgu, .framer-E57Ul .framer-r88ben { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-1eu15w0-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-hwpbcb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 80%; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-v00grj { align-content: center; align-items: center; aspect-ratio: 1.0865724381625441 / 1; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: var(--framer-aspect-ratio-supported, 580px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-E57Ul .framer-lqy1ra { align-content: center; align-items: center; aspect-ratio: 1.0857142857142856 / 1; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: var(--framer-aspect-ratio-supported, 580px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 3; }",
    ".framer-E57Ul .framer-972gnr { --border-bottom-width: 1.15px; --border-color: rgba(255, 255, 255, 0.12); --border-left-width: 1.15px; --border-right-width: 1.15px; --border-style: solid; --border-top-width: 1.15px; align-content: center; align-items: center; aspect-ratio: 1 / 1; border-bottom-left-radius: 23px; border-bottom-right-radius: 23px; border-top-left-radius: 23px; border-top-right-radius: 23px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: var(--framer-aspect-ratio-supported, 294px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 47%; will-change: var(--framer-will-change-override, transform); z-index: 5; }",
    ".framer-E57Ul .framer-gc3szg { --border-bottom-width: 1.73px; --border-color: #f5ba00; --border-left-width: 1.73px; --border-right-width: 1.73px; --border-style: solid; --border-top-width: 1.73px; align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: #000000; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: inset 0px 34.53px 287.73px 0px rgba(245, 186, 0, 0.2); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: var(--framer-aspect-ratio-supported, 261px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 89%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-13o7ezb { align-content: center; align-items: center; aspect-ratio: 0.7846153846153846 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: var(--framer-aspect-ratio-supported, 65px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 51px; }",
    ".framer-E57Ul .framer-d9k6ex-container { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 147px); left: 23px; position: absolute; width: 23%; z-index: 3; }",
    ".framer-E57Ul .framer-wz6gc6-container { aspect-ratio: 1 / 1; bottom: 143px; flex: none; height: var(--framer-aspect-ratio-supported, 147px); left: 23px; position: absolute; width: 23%; z-index: 3; }",
    ".framer-E57Ul .framer-1vidff3-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 148px); left: 60%; position: absolute; top: -4px; transform: translateX(-50%); width: 23%; z-index: 3; }",
    ".framer-E57Ul .framer-1b9g78z-container { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 147px); left: 449px; position: absolute; width: 23%; z-index: 3; }",
    ".framer-E57Ul .framer-14i19zy-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 148px); position: absolute; right: 20px; top: 143px; width: 23%; z-index: 3; }",
    ".framer-E57Ul .framer-1jfg39a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 30px 120px 30px; position: relative; width: 100%; z-index: 0; }",
    ".framer-E57Ul .framer-1fm4ltu { align-content: center; align-items: center; aspect-ratio: 1.1407407407407408 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 1014px); justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: -200px; transform: translateX(-50%); width: 1157px; }",
    ".framer-E57Ul .framer-42w7x7 { align-content: center; align-items: center; aspect-ratio: 0.484375 / 1; bottom: -1064px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; width: var(--framer-aspect-ratio-supported, 992px); z-index: 0; }",
    ".framer-E57Ul .framer-1b1un26 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-fhy878 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 665px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-17ac30h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 28px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-zzgd34, .framer-E57Ul .framer-uinpui { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-E57Ul .framer-j9n4s5 { align-content: flex-start; align-items: flex-start; background-color: rgba(25, 25, 25, 0.6); border-bottom-left-radius: 38px; border-bottom-right-radius: 38px; border-top-left-radius: 38px; border-top-right-radius: 38px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 30px 50px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-nljd63 { flex: none; height: 235px; position: relative; width: 554px; }",
    ".framer-E57Ul .framer-jxs8e, .framer-E57Ul .framer-ev64i2 { align-content: center; align-items: center; background-color: rgba(25, 25, 25, 0.6); border-bottom-left-radius: 38px; border-bottom-right-radius: 38px; border-top-left-radius: 38px; border-top-right-radius: 38px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-87nixp, .framer-E57Ul .framer-188o3cm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 5; }",
    ".framer-E57Ul .framer-1nmgg57 { flex: none; height: 229px; position: relative; width: 174px; }",
    ".framer-E57Ul .framer-1tqgfra, .framer-E57Ul .framer-2ylzwx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-E57Ul .framer-4jop8i, .framer-E57Ul .framer-91fv8x { aspect-ratio: 0.8043478260869565 / 1; flex: none; height: 100%; left: 0px; position: absolute; top: 47%; transform: translateY(-50%); width: var(--framer-aspect-ratio-supported, 148px); z-index: 1; }",
    ".framer-E57Ul .framer-11743wu { flex: none; height: 228px; position: relative; width: 196px; }",
    ".framer-E57Ul .framer-fvs9me { align-content: center; align-items: center; border-bottom-left-radius: 38px; border-bottom-right-radius: 38px; border-top-left-radius: 38px; border-top-right-radius: 38px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 2px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-1q1honf { align-content: flex-start; align-items: flex-start; background-color: #191919; border-bottom-left-radius: 38px; border-bottom-right-radius: 38px; border-top-left-radius: 38px; border-top-right-radius: 38px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 50px 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 5; }",
    ".framer-E57Ul .framer-ww9eo8 { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgb(25, 25, 25) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 50px 50px 20px 50px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-5dgxji { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgb(25, 25, 25) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 93% / 2); overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 93%; z-index: 1; }",
    ".framer-E57Ul .framer-6i7ha0 { aspect-ratio: 2.1923076923076925 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 78px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 171px; z-index: 1; }",
    ".framer-E57Ul .framer-184zmu8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 0px 30px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-d4t462 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 70%; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-e4v7t5 { align-content: center; align-items: center; background: conic-gradient(from 0deg at 50% 50%, #191919 56.75675675675678deg, rgb(255, 207, 6) 360deg); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 499%; justify-content: center; left: calc(50.00000000000002% - 150% / 2); overflow: hidden; padding: 0px; position: absolute; top: calc(50.00000000000002% - 498.83720930232556% / 2); width: 150%; z-index: 1; }",
    ".framer-E57Ul .framer-csicch, .framer-E57Ul .framer-s3qa9y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 30px 120px 30px; position: relative; width: 100%; z-index: 7; }",
    ".framer-E57Ul .framer-1kinkxu, .framer-E57Ul .framer-1up4sc6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-1psee8d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-kygsqq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 0; }",
    ".framer-E57Ul .framer-17dfo87 { background-color: rgba(25, 25, 25, 0.3); border-bottom-left-radius: 38px; border-bottom-right-radius: 38px; border-top-left-radius: 38px; border-top-right-radius: 38px; display: grid; flex: none; gap: 100px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 100px 90px 100px 90px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-hbdtr7, .framer-E57Ul .framer-o74pt, .framer-E57Ul .framer-94gicw { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-1qc0q68-container { bottom: -25px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }",
    ".framer-E57Ul .framer-jhf3y, .framer-E57Ul .framer-1910m0a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 30px 120px 30px; position: relative; width: 100%; z-index: 5; }",
    ".framer-E57Ul .framer-oa70m1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1360px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }",
    ".framer-E57Ul .framer-1gd6503 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 42%; z-index: 5; }",
    ".framer-E57Ul .framer-9demjg-container, .framer-E57Ul .framer-2w9kws-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-E57Ul .framer-dpsgi4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 45%; }",
    ".framer-E57Ul .framer-acnq4w { aspect-ratio: 1.8735632183908046 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 327px); overflow: visible; position: relative; width: 1px; z-index: 5; }",
    ".framer-E57Ul .framer-bv4sx0 { aspect-ratio: 1.1273031825795645 / 1; bottom: -100px; flex: none; height: var(--framer-aspect-ratio-supported, 758px); overflow: visible; position: absolute; right: -80px; width: 854px; z-index: 0; }",
    ".framer-E57Ul .framer-12ew6j8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 0; }",
    ".framer-E57Ul .framer-1epytz9-container, .framer-E57Ul .framer-1iokeef-container { flex: none; height: 260px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-217dk3, .framer-E57Ul .framer-ncp4du, .framer-E57Ul .framer-c7sq5t, .framer-E57Ul .framer-18odiei { align-content: center; align-items: center; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 260px; justify-content: flex-start; overflow: hidden; padding: 30px; position: relative; width: 450px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-1xexsea, .framer-E57Ul .framer-o8u1mj, .framer-E57Ul .framer-1nurdwu, .framer-E57Ul .framer-dhmd2d, .framer-E57Ul .framer-f64smc, .framer-E57Ul .framer-1qzjttq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-n7jdkn, .framer-E57Ul .framer-13xh1cd, .framer-E57Ul .framer-1siera5, .framer-E57Ul .framer-b9gsgz, .framer-E57Ul .framer-1rv43kt, .framer-E57Ul .framer-wma5l9 { align-content: center; align-items: center; aspect-ratio: 1 / 1; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 44px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 44px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-nzdv7t, .framer-E57Ul .framer-o9anbk, .framer-E57Ul .framer-ntftm6, .framer-E57Ul .framer-pno02h, .framer-E57Ul .framer-123ntch, .framer-E57Ul .framer-zn1zwz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-E57Ul .framer-1huqfr6, .framer-E57Ul .framer-1aaw67a, .framer-E57Ul .framer-o0qg4u, .framer-E57Ul .framer-rdw1ce, .framer-E57Ul .framer-kludxa, .framer-E57Ul .framer-1m4f510, .framer-E57Ul .framer-c49w6g, .framer-E57Ul .framer-ie6ely, .framer-E57Ul .framer-1pm9kah, .framer-E57Ul .framer-1efvaal, .framer-E57Ul .framer-1g2ssbu, .framer-E57Ul .framer-1n4lhsw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-n6fqbf, .framer-E57Ul .framer-l9uor9 { align-content: center; align-items: center; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 259px; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 450px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-1daask { --border-bottom-width: 1px; --border-color: rgba(255, 207, 6, 0.5); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 1360px; overflow: hidden; padding: 100px 50px 130px 50px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-E57Ul .framer-1f83p6q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }",
    ".framer-E57Ul .framer-794now { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-1fzgd8h { aspect-ratio: 3.6 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 377px); left: 50%; position: absolute; transform: translateX(-50%); width: 100%; z-index: 1; }",
    ".framer-E57Ul .framer-1qq2om0 { align-content: center; align-items: center; aspect-ratio: 0.70166015625 / 1; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 2280px); justify-content: center; max-width: 1600px; overflow: hidden; padding: 0px; position: absolute; right: 0px; width: 100%; z-index: 0; }",
    ".framer-E57Ul .framer-11j9ung { align-content: center; align-items: center; aspect-ratio: 1.082492321193506 / 1; bottom: 110px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 776px); justify-content: center; left: -90px; overflow: hidden; padding: 0px; position: absolute; width: 840px; z-index: 0; }",
    ".framer-E57Ul .framer-1jl1fuk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 60px 30px; position: relative; width: 100%; z-index: 7; }",
    ".framer-E57Ul .framer-1tv667z { display: grid; flex: none; gap: 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: start; max-width: 1360px; overflow: hidden; padding: 0px 0px 60px 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-1yhc99i, .framer-E57Ul .framer-7jyqlg, .framer-E57Ul .framer-1snhjv8, .framer-E57Ul .framer-g27v2a { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 100%; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-y31yb6-container { flex: none; height: 51px; position: relative; width: 237px; }",
    ".framer-E57Ul .framer-17w6xw2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.5; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-1apdecz, .framer-E57Ul .framer-1l8di36, .framer-E57Ul .framer-1fzgisn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-13ksx2j { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.12); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 1360px; overflow: visible; padding: 60px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-E57Ul .framer-sz0t6e { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-E57Ul .framer-cdbbeo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; opacity: 0.5; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-E57Ul .framer-1y4e7n7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-E57Ul .framer-lxctoc-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-E57Ul.framer-72rtr7, .framer-E57Ul .framer-1q6spei, .framer-E57Ul .framer-1886rex, .framer-E57Ul .framer-lhc96y, .framer-E57Ul .framer-qvh3i9, .framer-E57Ul .framer-x0hdvz, .framer-E57Ul .framer-16qkb6x, .framer-E57Ul .framer-1h7lb8g, .framer-E57Ul .framer-7bsjek, .framer-E57Ul .framer-zlxrfj, .framer-E57Ul .framer-1ww91p4, .framer-E57Ul .framer-1g37dt7, .framer-E57Ul .framer-1fdp1i9, .framer-E57Ul .framer-v00grj, .framer-E57Ul .framer-lqy1ra, .framer-E57Ul .framer-972gnr, .framer-E57Ul .framer-gc3szg, .framer-E57Ul .framer-13o7ezb, .framer-E57Ul .framer-1jfg39a, .framer-E57Ul .framer-1fm4ltu, .framer-E57Ul .framer-42w7x7, .framer-E57Ul .framer-1b1un26, .framer-E57Ul .framer-yixgl5, .framer-E57Ul .framer-17ac30h, .framer-E57Ul .framer-zzgd34, .framer-E57Ul .framer-j9n4s5, .framer-E57Ul .framer-2pa1bt, .framer-E57Ul .framer-jxs8e, .framer-E57Ul .framer-87nixp, .framer-E57Ul .framer-1tqgfra, .framer-E57Ul .framer-uinpui, .framer-E57Ul .framer-ev64i2, .framer-E57Ul .framer-188o3cm, .framer-E57Ul .framer-2ylzwx, .framer-E57Ul .framer-fvs9me, .framer-E57Ul .framer-1q1honf, .framer-E57Ul .framer-ww9eo8, .framer-E57Ul .framer-5dgxji, .framer-E57Ul .framer-184zmu8, .framer-E57Ul .framer-e4v7t5, .framer-E57Ul .framer-csicch, .framer-E57Ul .framer-1kinkxu, .framer-E57Ul .framer-1psee8d, .framer-E57Ul .framer-kygsqq, .framer-E57Ul .framer-hbdtr7, .framer-E57Ul .framer-o74pt, .framer-E57Ul .framer-94gicw, .framer-E57Ul .framer-jhf3y, .framer-E57Ul .framer-1gd6503, .framer-E57Ul .framer-135za1q, .framer-E57Ul .framer-dpsgi4, .framer-E57Ul .framer-1910m0a, .framer-E57Ul .framer-1up4sc6, .framer-E57Ul .framer-252xgu, .framer-E57Ul .framer-12ew6j8, .framer-E57Ul .framer-217dk3, .framer-E57Ul .framer-1xexsea, .framer-E57Ul .framer-n7jdkn, .framer-E57Ul .framer-nzdv7t, .framer-E57Ul .framer-ncp4du, .framer-E57Ul .framer-o8u1mj, .framer-E57Ul .framer-13xh1cd, .framer-E57Ul .framer-o9anbk, .framer-E57Ul .framer-c7sq5t, .framer-E57Ul .framer-1nurdwu, .framer-E57Ul .framer-1siera5, .framer-E57Ul .framer-ntftm6, .framer-E57Ul .framer-18odiei, .framer-E57Ul .framer-dhmd2d, .framer-E57Ul .framer-b9gsgz, .framer-E57Ul .framer-pno02h, .framer-E57Ul .framer-n6fqbf, .framer-E57Ul .framer-f64smc, .framer-E57Ul .framer-1rv43kt, .framer-E57Ul .framer-123ntch, .framer-E57Ul .framer-l9uor9, .framer-E57Ul .framer-1qzjttq, .framer-E57Ul .framer-wma5l9, .framer-E57Ul .framer-zn1zwz, .framer-E57Ul .framer-s3qa9y, .framer-E57Ul .framer-1daask, .framer-E57Ul .framer-1f83p6q, .framer-E57Ul .framer-r88ben, .framer-E57Ul .framer-1qq2om0, .framer-E57Ul .framer-11j9ung, .framer-E57Ul .framer-1jl1fuk, .framer-E57Ul .framer-1yhc99i, .framer-E57Ul .framer-7jyqlg, .framer-E57Ul .framer-1apdecz, .framer-E57Ul .framer-1snhjv8, .framer-E57Ul .framer-1l8di36, .framer-E57Ul .framer-g27v2a, .framer-E57Ul .framer-1fzgisn, .framer-E57Ul .framer-13ksx2j, .framer-E57Ul .framer-sz0t6e, .framer-E57Ul .framer-1y4e7n7 { gap: 0px; } .framer-E57Ul.framer-72rtr7 > *, .framer-E57Ul .framer-nzdv7t > *, .framer-E57Ul .framer-o9anbk > *, .framer-E57Ul .framer-ntftm6 > *, .framer-E57Ul .framer-pno02h > *, .framer-E57Ul .framer-123ntch > *, .framer-E57Ul .framer-zn1zwz > *, .framer-E57Ul .framer-1jl1fuk > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-E57Ul.framer-72rtr7 > :first-child, .framer-E57Ul .framer-1q6spei > :first-child, .framer-E57Ul .framer-1886rex > :first-child, .framer-E57Ul .framer-lhc96y > :first-child, .framer-E57Ul .framer-16qkb6x > :first-child, .framer-E57Ul .framer-1h7lb8g > :first-child, .framer-E57Ul .framer-7bsjek > :first-child, .framer-E57Ul .framer-1g37dt7 > :first-child, .framer-E57Ul .framer-1fdp1i9 > :first-child, .framer-E57Ul .framer-1jfg39a > :first-child, .framer-E57Ul .framer-1b1un26 > :first-child, .framer-E57Ul .framer-yixgl5 > :first-child, .framer-E57Ul .framer-zzgd34 > :first-child, .framer-E57Ul .framer-j9n4s5 > :first-child, .framer-E57Ul .framer-2pa1bt > :first-child, .framer-E57Ul .framer-1tqgfra > :first-child, .framer-E57Ul .framer-uinpui > :first-child, .framer-E57Ul .framer-2ylzwx > :first-child, .framer-E57Ul .framer-1q1honf > :first-child, .framer-E57Ul .framer-ww9eo8 > :first-child, .framer-E57Ul .framer-184zmu8 > :first-child, .framer-E57Ul .framer-csicch > :first-child, .framer-E57Ul .framer-1kinkxu > :first-child, .framer-E57Ul .framer-1psee8d > :first-child, .framer-E57Ul .framer-kygsqq > :first-child, .framer-E57Ul .framer-hbdtr7 > :first-child, .framer-E57Ul .framer-o74pt > :first-child, .framer-E57Ul .framer-94gicw > :first-child, .framer-E57Ul .framer-jhf3y > :first-child, .framer-E57Ul .framer-1gd6503 > :first-child, .framer-E57Ul .framer-135za1q > :first-child, .framer-E57Ul .framer-1910m0a > :first-child, .framer-E57Ul .framer-1up4sc6 > :first-child, .framer-E57Ul .framer-252xgu > :first-child, .framer-E57Ul .framer-12ew6j8 > :first-child, .framer-E57Ul .framer-217dk3 > :first-child, .framer-E57Ul .framer-nzdv7t > :first-child, .framer-E57Ul .framer-ncp4du > :first-child, .framer-E57Ul .framer-o9anbk > :first-child, .framer-E57Ul .framer-c7sq5t > :first-child, .framer-E57Ul .framer-ntftm6 > :first-child, .framer-E57Ul .framer-18odiei > :first-child, .framer-E57Ul .framer-pno02h > :first-child, .framer-E57Ul .framer-n6fqbf > :first-child, .framer-E57Ul .framer-123ntch > :first-child, .framer-E57Ul .framer-l9uor9 > :first-child, .framer-E57Ul .framer-zn1zwz > :first-child, .framer-E57Ul .framer-s3qa9y > :first-child, .framer-E57Ul .framer-1daask > :first-child, .framer-E57Ul .framer-1f83p6q > :first-child, .framer-E57Ul .framer-r88ben > :first-child, .framer-E57Ul .framer-1jl1fuk > :first-child, .framer-E57Ul .framer-1yhc99i > :first-child, .framer-E57Ul .framer-7jyqlg > :first-child, .framer-E57Ul .framer-1apdecz > :first-child, .framer-E57Ul .framer-1snhjv8 > :first-child, .framer-E57Ul .framer-1l8di36 > :first-child, .framer-E57Ul .framer-g27v2a > :first-child, .framer-E57Ul .framer-1fzgisn > :first-child { margin-top: 0px; } .framer-E57Ul.framer-72rtr7 > :last-child, .framer-E57Ul .framer-1q6spei > :last-child, .framer-E57Ul .framer-1886rex > :last-child, .framer-E57Ul .framer-lhc96y > :last-child, .framer-E57Ul .framer-16qkb6x > :last-child, .framer-E57Ul .framer-1h7lb8g > :last-child, .framer-E57Ul .framer-7bsjek > :last-child, .framer-E57Ul .framer-1g37dt7 > :last-child, .framer-E57Ul .framer-1fdp1i9 > :last-child, .framer-E57Ul .framer-1jfg39a > :last-child, .framer-E57Ul .framer-1b1un26 > :last-child, .framer-E57Ul .framer-yixgl5 > :last-child, .framer-E57Ul .framer-zzgd34 > :last-child, .framer-E57Ul .framer-j9n4s5 > :last-child, .framer-E57Ul .framer-2pa1bt > :last-child, .framer-E57Ul .framer-1tqgfra > :last-child, .framer-E57Ul .framer-uinpui > :last-child, .framer-E57Ul .framer-2ylzwx > :last-child, .framer-E57Ul .framer-1q1honf > :last-child, .framer-E57Ul .framer-ww9eo8 > :last-child, .framer-E57Ul .framer-184zmu8 > :last-child, .framer-E57Ul .framer-csicch > :last-child, .framer-E57Ul .framer-1kinkxu > :last-child, .framer-E57Ul .framer-1psee8d > :last-child, .framer-E57Ul .framer-kygsqq > :last-child, .framer-E57Ul .framer-hbdtr7 > :last-child, .framer-E57Ul .framer-o74pt > :last-child, .framer-E57Ul .framer-94gicw > :last-child, .framer-E57Ul .framer-jhf3y > :last-child, .framer-E57Ul .framer-1gd6503 > :last-child, .framer-E57Ul .framer-135za1q > :last-child, .framer-E57Ul .framer-1910m0a > :last-child, .framer-E57Ul .framer-1up4sc6 > :last-child, .framer-E57Ul .framer-252xgu > :last-child, .framer-E57Ul .framer-12ew6j8 > :last-child, .framer-E57Ul .framer-217dk3 > :last-child, .framer-E57Ul .framer-nzdv7t > :last-child, .framer-E57Ul .framer-ncp4du > :last-child, .framer-E57Ul .framer-o9anbk > :last-child, .framer-E57Ul .framer-c7sq5t > :last-child, .framer-E57Ul .framer-ntftm6 > :last-child, .framer-E57Ul .framer-18odiei > :last-child, .framer-E57Ul .framer-pno02h > :last-child, .framer-E57Ul .framer-n6fqbf > :last-child, .framer-E57Ul .framer-123ntch > :last-child, .framer-E57Ul .framer-l9uor9 > :last-child, .framer-E57Ul .framer-zn1zwz > :last-child, .framer-E57Ul .framer-s3qa9y > :last-child, .framer-E57Ul .framer-1daask > :last-child, .framer-E57Ul .framer-1f83p6q > :last-child, .framer-E57Ul .framer-r88ben > :last-child, .framer-E57Ul .framer-1jl1fuk > :last-child, .framer-E57Ul .framer-1yhc99i > :last-child, .framer-E57Ul .framer-7jyqlg > :last-child, .framer-E57Ul .framer-1apdecz > :last-child, .framer-E57Ul .framer-1snhjv8 > :last-child, .framer-E57Ul .framer-1l8di36 > :last-child, .framer-E57Ul .framer-g27v2a > :last-child, .framer-E57Ul .framer-1fzgisn > :last-child { margin-bottom: 0px; } .framer-E57Ul .framer-1q6spei > *, .framer-E57Ul .framer-7bsjek > *, .framer-E57Ul .framer-1jfg39a > *, .framer-E57Ul .framer-csicch > *, .framer-E57Ul .framer-jhf3y > *, .framer-E57Ul .framer-1910m0a > *, .framer-E57Ul .framer-s3qa9y > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-E57Ul .framer-1886rex > * { margin: 0px; margin-bottom: calc(37px / 2); margin-top: calc(37px / 2); } .framer-E57Ul .framer-lhc96y > *, .framer-E57Ul .framer-1apdecz > *, .framer-E57Ul .framer-1l8di36 > *, .framer-E57Ul .framer-1fzgisn > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-E57Ul .framer-qvh3i9 > *, .framer-E57Ul .framer-zlxrfj > *, .framer-E57Ul .framer-1fm4ltu > *, .framer-E57Ul .framer-42w7x7 > *, .framer-E57Ul .framer-87nixp > *, .framer-E57Ul .framer-188o3cm > *, .framer-E57Ul .framer-fvs9me > *, .framer-E57Ul .framer-5dgxji > *, .framer-E57Ul .framer-e4v7t5 > *, .framer-E57Ul .framer-dpsgi4 > *, .framer-E57Ul .framer-n7jdkn > *, .framer-E57Ul .framer-13xh1cd > *, .framer-E57Ul .framer-1siera5 > *, .framer-E57Ul .framer-b9gsgz > *, .framer-E57Ul .framer-1rv43kt > *, .framer-E57Ul .framer-wma5l9 > *, .framer-E57Ul .framer-1qq2om0 > *, .framer-E57Ul .framer-11j9ung > *, .framer-E57Ul .framer-sz0t6e > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-E57Ul .framer-qvh3i9 > :first-child, .framer-E57Ul .framer-x0hdvz > :first-child, .framer-E57Ul .framer-zlxrfj > :first-child, .framer-E57Ul .framer-1ww91p4 > :first-child, .framer-E57Ul .framer-v00grj > :first-child, .framer-E57Ul .framer-lqy1ra > :first-child, .framer-E57Ul .framer-972gnr > :first-child, .framer-E57Ul .framer-gc3szg > :first-child, .framer-E57Ul .framer-13o7ezb > :first-child, .framer-E57Ul .framer-1fm4ltu > :first-child, .framer-E57Ul .framer-42w7x7 > :first-child, .framer-E57Ul .framer-17ac30h > :first-child, .framer-E57Ul .framer-jxs8e > :first-child, .framer-E57Ul .framer-87nixp > :first-child, .framer-E57Ul .framer-ev64i2 > :first-child, .framer-E57Ul .framer-188o3cm > :first-child, .framer-E57Ul .framer-fvs9me > :first-child, .framer-E57Ul .framer-5dgxji > :first-child, .framer-E57Ul .framer-e4v7t5 > :first-child, .framer-E57Ul .framer-dpsgi4 > :first-child, .framer-E57Ul .framer-1xexsea > :first-child, .framer-E57Ul .framer-n7jdkn > :first-child, .framer-E57Ul .framer-o8u1mj > :first-child, .framer-E57Ul .framer-13xh1cd > :first-child, .framer-E57Ul .framer-1nurdwu > :first-child, .framer-E57Ul .framer-1siera5 > :first-child, .framer-E57Ul .framer-dhmd2d > :first-child, .framer-E57Ul .framer-b9gsgz > :first-child, .framer-E57Ul .framer-f64smc > :first-child, .framer-E57Ul .framer-1rv43kt > :first-child, .framer-E57Ul .framer-1qzjttq > :first-child, .framer-E57Ul .framer-wma5l9 > :first-child, .framer-E57Ul .framer-1qq2om0 > :first-child, .framer-E57Ul .framer-11j9ung > :first-child, .framer-E57Ul .framer-13ksx2j > :first-child, .framer-E57Ul .framer-sz0t6e > :first-child, .framer-E57Ul .framer-1y4e7n7 > :first-child { margin-left: 0px; } .framer-E57Ul .framer-qvh3i9 > :last-child, .framer-E57Ul .framer-x0hdvz > :last-child, .framer-E57Ul .framer-zlxrfj > :last-child, .framer-E57Ul .framer-1ww91p4 > :last-child, .framer-E57Ul .framer-v00grj > :last-child, .framer-E57Ul .framer-lqy1ra > :last-child, .framer-E57Ul .framer-972gnr > :last-child, .framer-E57Ul .framer-gc3szg > :last-child, .framer-E57Ul .framer-13o7ezb > :last-child, .framer-E57Ul .framer-1fm4ltu > :last-child, .framer-E57Ul .framer-42w7x7 > :last-child, .framer-E57Ul .framer-17ac30h > :last-child, .framer-E57Ul .framer-jxs8e > :last-child, .framer-E57Ul .framer-87nixp > :last-child, .framer-E57Ul .framer-ev64i2 > :last-child, .framer-E57Ul .framer-188o3cm > :last-child, .framer-E57Ul .framer-fvs9me > :last-child, .framer-E57Ul .framer-5dgxji > :last-child, .framer-E57Ul .framer-e4v7t5 > :last-child, .framer-E57Ul .framer-dpsgi4 > :last-child, .framer-E57Ul .framer-1xexsea > :last-child, .framer-E57Ul .framer-n7jdkn > :last-child, .framer-E57Ul .framer-o8u1mj > :last-child, .framer-E57Ul .framer-13xh1cd > :last-child, .framer-E57Ul .framer-1nurdwu > :last-child, .framer-E57Ul .framer-1siera5 > :last-child, .framer-E57Ul .framer-dhmd2d > :last-child, .framer-E57Ul .framer-b9gsgz > :last-child, .framer-E57Ul .framer-f64smc > :last-child, .framer-E57Ul .framer-1rv43kt > :last-child, .framer-E57Ul .framer-1qzjttq > :last-child, .framer-E57Ul .framer-wma5l9 > :last-child, .framer-E57Ul .framer-1qq2om0 > :last-child, .framer-E57Ul .framer-11j9ung > :last-child, .framer-E57Ul .framer-13ksx2j > :last-child, .framer-E57Ul .framer-sz0t6e > :last-child, .framer-E57Ul .framer-1y4e7n7 > :last-child { margin-right: 0px; } .framer-E57Ul .framer-x0hdvz > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-E57Ul .framer-16qkb6x > *, .framer-E57Ul .framer-1h7lb8g > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-E57Ul .framer-1ww91p4 > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-E57Ul .framer-1g37dt7 > *, .framer-E57Ul .framer-zzgd34 > *, .framer-E57Ul .framer-uinpui > *, .framer-E57Ul .framer-1gd6503 > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-E57Ul .framer-1fdp1i9 > *, .framer-E57Ul .framer-yixgl5 > *, .framer-E57Ul .framer-2pa1bt > *, .framer-E57Ul .framer-1tqgfra > *, .framer-E57Ul .framer-2ylzwx > *, .framer-E57Ul .framer-ww9eo8 > *, .framer-E57Ul .framer-184zmu8 > *, .framer-E57Ul .framer-1psee8d > *, .framer-E57Ul .framer-hbdtr7 > *, .framer-E57Ul .framer-o74pt > *, .framer-E57Ul .framer-94gicw > *, .framer-E57Ul .framer-135za1q > *, .framer-E57Ul .framer-252xgu > *, .framer-E57Ul .framer-12ew6j8 > *, .framer-E57Ul .framer-r88ben > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-E57Ul .framer-v00grj > *, .framer-E57Ul .framer-lqy1ra > *, .framer-E57Ul .framer-972gnr > *, .framer-E57Ul .framer-gc3szg > *, .framer-E57Ul .framer-13o7ezb > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-E57Ul .framer-1b1un26 > *, .framer-E57Ul .framer-1kinkxu > *, .framer-E57Ul .framer-1up4sc6 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-E57Ul .framer-17ac30h > * { margin: 0px; margin-left: calc(28px / 2); margin-right: calc(28px / 2); } .framer-E57Ul .framer-j9n4s5 > *, .framer-E57Ul .framer-1q1honf > *, .framer-E57Ul .framer-kygsqq > *, .framer-E57Ul .framer-217dk3 > *, .framer-E57Ul .framer-ncp4du > *, .framer-E57Ul .framer-c7sq5t > *, .framer-E57Ul .framer-18odiei > *, .framer-E57Ul .framer-n6fqbf > *, .framer-E57Ul .framer-l9uor9 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-E57Ul .framer-jxs8e > *, .framer-E57Ul .framer-ev64i2 > *, .framer-E57Ul .framer-1y4e7n7 > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-E57Ul .framer-1xexsea > *, .framer-E57Ul .framer-o8u1mj > *, .framer-E57Ul .framer-1nurdwu > *, .framer-E57Ul .framer-dhmd2d > *, .framer-E57Ul .framer-f64smc > *, .framer-E57Ul .framer-1qzjttq > *, .framer-E57Ul .framer-13ksx2j > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-E57Ul .framer-1daask > *, .framer-E57Ul .framer-1f83p6q > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-E57Ul .framer-1yhc99i > *, .framer-E57Ul .framer-7jyqlg > *, .framer-E57Ul .framer-1snhjv8 > *, .framer-E57Ul .framer-g27v2a > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }",
    `@media (min-width: 1200px) and (max-width: 1599px) { .${pr.bodyClassName}-framer-E57Ul { background: rgb(11, 11, 14); } .framer-E57Ul.framer-72rtr7 { width: 1200px; } .framer-E57Ul .framer-ie82ky { height: var(--framer-aspect-ratio-supported, 1365px); } .framer-E57Ul .framer-1q6spei { padding: 160px 30px 0px 30px; } .framer-E57Ul .framer-x0hdvz { height: var(--framer-aspect-ratio-supported, 294px); } .framer-E57Ul .framer-7bsjek { padding: 100px 30px 100px 30px; } .framer-E57Ul .framer-zlxrfj, .framer-E57Ul .framer-1fm4ltu { height: var(--framer-aspect-ratio-supported, 901px); top: -197px; width: 1028px; } .framer-E57Ul .framer-1ww91p4 { gap: 60px; } .framer-E57Ul .framer-v00grj { aspect-ratio: 1.0963597430406853 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 504px); width: 48%; } .framer-E57Ul .framer-lqy1ra { height: var(--framer-aspect-ratio-supported, 504px); } .framer-E57Ul .framer-972gnr { height: var(--framer-aspect-ratio-supported, 256px); overflow: visible; } .framer-E57Ul .framer-gc3szg { height: var(--framer-aspect-ratio-supported, 227px); } .framer-E57Ul .framer-d9k6ex-container, .framer-E57Ul .framer-1vidff3-container, .framer-E57Ul .framer-1b9g78z-container { height: var(--framer-aspect-ratio-supported, 128px); } .framer-E57Ul .framer-wz6gc6-container { bottom: 124px; height: var(--framer-aspect-ratio-supported, 128px); left: 18px; width: 23%; } .framer-E57Ul .framer-14i19zy-container { height: var(--framer-aspect-ratio-supported, 129px); } .framer-E57Ul .framer-42w7x7 { width: var(--framer-aspect-ratio-supported, 1017px); } .framer-E57Ul .framer-nljd63 { height: 205px; width: 494px; } .framer-E57Ul .framer-17dfo87 { gap: 50px; padding: 100px 50px 100px 50px; } .framer-E57Ul .framer-jhf3y { padding: 0px 30px 100px 30px; } .framer-E57Ul .framer-acnq4w { height: var(--framer-aspect-ratio-supported, 274px); } .framer-E57Ul .framer-1daask { max-width: 1170px; padding: 100px 50px 110px 50px; } .framer-E57Ul .framer-1fzgd8h { height: var(--framer-aspect-ratio-supported, 317px); } .framer-E57Ul .framer-1qq2om0 { height: var(--framer-aspect-ratio-supported, 1711px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-E57Ul .framer-1ww91p4, .framer-E57Ul .framer-17dfo87 { gap: 0px; } .framer-E57Ul .framer-1ww91p4 > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-E57Ul .framer-1ww91p4 > :first-child { margin-left: 0px; } .framer-E57Ul .framer-1ww91p4 > :last-child { margin-right: 0px; } .framer-E57Ul .framer-17dfo87 > *, .framer-E57Ul .framer-17dfo87 > :first-child, .framer-E57Ul .framer-17dfo87 > :last-child { margin: 0px; } }}`,
    `@media (min-width: 810px) and (max-width: 1199px) { .${pr.bodyClassName}-framer-E57Ul { background: rgb(11, 11, 14); } .framer-E57Ul.framer-72rtr7 { width: 810px; } .framer-E57Ul .framer-ie82ky { height: var(--framer-aspect-ratio-supported, 921px); } .framer-E57Ul .framer-1q6spei { padding: 120px 30px 0px 30px; } .framer-E57Ul .framer-x0hdvz { height: var(--framer-aspect-ratio-supported, 199px); } .framer-E57Ul .framer-7bsjek, .framer-E57Ul .framer-jhf3y { padding: 80px 30px 80px 30px; } .framer-E57Ul .framer-zlxrfj, .framer-E57Ul .framer-1fm4ltu { height: var(--framer-aspect-ratio-supported, 810px); left: 31%; top: 430px; width: 924px; } .framer-E57Ul .framer-1ww91p4, .framer-E57Ul .framer-17ac30h { flex-direction: column; } .framer-E57Ul .framer-1g37dt7, .framer-E57Ul .framer-zzgd34, .framer-E57Ul .framer-uinpui { flex: none; width: 100%; } .framer-E57Ul .framer-v00grj { flex: none; height: var(--framer-aspect-ratio-supported, 691px); width: 100%; } .framer-E57Ul .framer-lqy1ra { height: var(--framer-aspect-ratio-supported, 691px); } .framer-E57Ul .framer-972gnr { height: var(--framer-aspect-ratio-supported, 350px); } .framer-E57Ul .framer-gc3szg { height: var(--framer-aspect-ratio-supported, 311px); } .framer-E57Ul .framer-d9k6ex-container, .framer-E57Ul .framer-1b9g78z-container { height: var(--framer-aspect-ratio-supported, 175px); } .framer-E57Ul .framer-wz6gc6-container { bottom: 168px; height: var(--framer-aspect-ratio-supported, 176px); left: 25px; width: 23%; } .framer-E57Ul .framer-1vidff3-container { height: var(--framer-aspect-ratio-supported, 176px); } .framer-E57Ul .framer-14i19zy-container { height: var(--framer-aspect-ratio-supported, 177px); } .framer-E57Ul .framer-1jfg39a, .framer-E57Ul .framer-1910m0a, .framer-E57Ul .framer-s3qa9y { padding: 0px 30px 80px 30px; } .framer-E57Ul .framer-42w7x7 { top: 400px; width: var(--framer-aspect-ratio-supported, 1124px); } .framer-E57Ul .framer-17dfo87 { gap: 30px; grid-template-columns: repeat(2, minmax(50px, 1fr)); padding: 60px 30px 60px 30px; } .framer-E57Ul .framer-oa70m1 { flex-direction: column; gap: 50px; justify-content: center; } .framer-E57Ul .framer-1gd6503, .framer-E57Ul .framer-dpsgi4 { width: 100%; } .framer-E57Ul .framer-acnq4w { height: var(--framer-aspect-ratio-supported, 401px); } .framer-E57Ul .framer-1daask { padding: 60px 50px 60px 50px; } .framer-E57Ul .framer-1fzgd8h { height: var(--framer-aspect-ratio-supported, 208px); } .framer-E57Ul .framer-1qq2om0 { height: var(--framer-aspect-ratio-supported, 1155px); } .framer-E57Ul .framer-11j9ung { bottom: 410px; left: -270px; } .framer-E57Ul .framer-1tv667z { grid-template-columns: repeat(2, minmax(50px, 1fr)); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-E57Ul .framer-1ww91p4, .framer-E57Ul .framer-17ac30h, .framer-E57Ul .framer-17dfo87, .framer-E57Ul .framer-oa70m1 { gap: 0px; } .framer-E57Ul .framer-1ww91p4 > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-E57Ul .framer-1ww91p4 > :first-child, .framer-E57Ul .framer-17ac30h > :first-child, .framer-E57Ul .framer-oa70m1 > :first-child { margin-top: 0px; } .framer-E57Ul .framer-1ww91p4 > :last-child, .framer-E57Ul .framer-17ac30h > :last-child, .framer-E57Ul .framer-oa70m1 > :last-child { margin-bottom: 0px; } .framer-E57Ul .framer-17ac30h > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-E57Ul .framer-17dfo87 > *, .framer-E57Ul .framer-17dfo87 > :first-child, .framer-E57Ul .framer-17dfo87 > :last-child { margin: 0px; } .framer-E57Ul .framer-oa70m1 > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } }}`,
    `@media (max-width: 809px) { .${pr.bodyClassName}-framer-E57Ul { background: rgb(11, 11, 14); } .framer-E57Ul.framer-72rtr7 { width: 390px; } .framer-E57Ul .framer-ie82ky { height: var(--framer-aspect-ratio-supported, 443px); } .framer-E57Ul .framer-1q6spei { padding: 110px 20px 20px 20px; } .framer-E57Ul .framer-1886rex { gap: 24px; max-width: 390px; } .framer-E57Ul .framer-lhc96y, .framer-E57Ul .framer-1apdecz, .framer-E57Ul .framer-1l8di36, .framer-E57Ul .framer-1fzgisn { gap: 16px; } .framer-E57Ul .framer-qvh3i9 { flex-direction: column; flex-wrap: wrap; gap: 16px; } .framer-E57Ul .framer-1tyz8rd-container, .framer-E57Ul .framer-tz2x6b-container, .framer-E57Ul .framer-hwpbcb, .framer-E57Ul .framer-1gd6503, .framer-E57Ul .framer-9demjg-container, .framer-E57Ul .framer-dpsgi4, .framer-E57Ul .framer-2w9kws-container, .framer-E57Ul .framer-1y4e7n7 { width: 100%; } .framer-E57Ul .framer-x0hdvz { height: var(--framer-aspect-ratio-supported, 95px); } .framer-E57Ul .framer-16qkb6x { padding: 20px; } .framer-E57Ul .framer-7bsjek { padding: 40px 20px 60px 20px; z-index: 3; } .framer-E57Ul .framer-zlxrfj { height: var(--framer-aspect-ratio-supported, 684px); left: 32%; top: 590px; width: 780px; } .framer-E57Ul .framer-1ww91p4 { flex-direction: column; gap: 30px; max-width: 390px; } .framer-E57Ul .framer-1g37dt7, .framer-E57Ul .framer-zzgd34, .framer-E57Ul .framer-uinpui, .framer-E57Ul .framer-2ylzwx, .framer-E57Ul .framer-sz0t6e { flex: none; width: 100%; } .framer-E57Ul .framer-v00grj { flex: none; height: var(--framer-aspect-ratio-supported, 323px); width: 100%; } .framer-E57Ul .framer-lqy1ra { height: var(--framer-aspect-ratio-supported, 323px); } .framer-E57Ul .framer-972gnr { height: var(--framer-aspect-ratio-supported, 163px); } .framer-E57Ul .framer-gc3szg { height: var(--framer-aspect-ratio-supported, 145px); } .framer-E57Ul .framer-d9k6ex-container { height: var(--framer-aspect-ratio-supported, 82px); left: 11px; } .framer-E57Ul .framer-wz6gc6-container { bottom: 82px; height: var(--framer-aspect-ratio-supported, 82px); left: 11px; width: 23%; } .framer-E57Ul .framer-1vidff3-container { height: var(--framer-aspect-ratio-supported, 81px); left: 57%; top: 0px; width: 23%; } .framer-E57Ul .framer-1b9g78z-container { bottom: 7px; height: var(--framer-aspect-ratio-supported, 82px); left: unset; right: 11px; width: 23%; } .framer-E57Ul .framer-14i19zy-container { height: var(--framer-aspect-ratio-supported, 82px); right: 11px; top: 80px; width: 23%; } .framer-E57Ul .framer-1jfg39a { padding: 20px 20px 60px 20px; } .framer-E57Ul .framer-1fm4ltu { height: var(--framer-aspect-ratio-supported, 683px); left: 32%; top: 0px; width: 780px; } .framer-E57Ul .framer-42w7x7 { top: 800px; width: var(--framer-aspect-ratio-supported, 1118px); } .framer-E57Ul .framer-1b1un26, .framer-E57Ul .framer-1kinkxu, .framer-E57Ul .framer-1up4sc6 { gap: 30px; max-width: 390px; } .framer-E57Ul .framer-17ac30h { flex-direction: column; } .framer-E57Ul .framer-j9n4s5 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; padding: 30px; } .framer-E57Ul .framer-nljd63 { height: 115px; width: 288px; } .framer-E57Ul .framer-jxs8e { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex-direction: column; gap: 20px; padding: 200px 20px 20px 0px; } .framer-E57Ul .framer-87nixp { aspect-ratio: 0.8529411764705882 / 1; height: var(--framer-aspect-ratio-supported, 204px); left: 47%; position: absolute; top: -27px; transform: translateX(-50%); width: 174px; } .framer-E57Ul .framer-1nmgg57 { height: 204px; } .framer-E57Ul .framer-1tqgfra { flex: none; padding: 0px 0px 0px 20px; width: 100%; } .framer-E57Ul .framer-4jop8i { aspect-ratio: 0.7567567567567568 / 1; height: var(--framer-aspect-ratio-supported, 148px); top: 19%; width: 32%; } .framer-E57Ul .framer-ev64i2 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex-direction: column; gap: 0px; padding: 0px 30px 20px 20px; } .framer-E57Ul .framer-91fv8x { aspect-ratio: 0.8348214285714286 / 1; height: var(--framer-aspect-ratio-supported, 131px); top: 17%; width: 36%; } .framer-E57Ul .framer-fvs9me { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; } .framer-E57Ul .framer-1q1honf { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; padding: 0px 0px 20px 0px; } .framer-E57Ul .framer-ww9eo8 { padding: 20px 10px 10px 10px; } .framer-E57Ul .framer-6i7ha0 { height: var(--framer-aspect-ratio-supported, 66px); width: 145px; } .framer-E57Ul .framer-184zmu8 { padding: 0px 20px 0px 30px; } .framer-E57Ul .framer-e4v7t5 { background: conic-gradient(from 0deg at 50% 50%, #191919 303.2432432432433deg, rgb(255, 207, 6) 360deg); height: 800%; top: calc(50.00000000000002% - 800% / 2); } .framer-E57Ul .framer-csicch, .framer-E57Ul .framer-1910m0a, .framer-E57Ul .framer-s3qa9y { padding: 0px 20px 60px 20px; } .framer-E57Ul .framer-17dfo87 { gap: 30px; grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 40px 20px 60px 20px; } .framer-E57Ul .framer-jhf3y { padding: 40px 20px 60px 20px; } .framer-E57Ul .framer-oa70m1 { flex-direction: column; gap: 40px; justify-content: center; max-width: 390px; } .framer-E57Ul .framer-acnq4w { height: var(--framer-aspect-ratio-supported, 187px); } .framer-E57Ul .framer-1daask { gap: 30px; max-width: 390px; padding: 60px 20px 60px 20px; } .framer-E57Ul .framer-1fzgd8h { bottom: 30px; height: var(--framer-aspect-ratio-supported, 131px); width: 135%; } .framer-E57Ul .framer-1qq2om0 { height: var(--framer-aspect-ratio-supported, 556px); } .framer-E57Ul .framer-11j9ung { bottom: 850px; left: -400px; } .framer-E57Ul .framer-1tv667z { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; justify-content: center; max-width: 390px; padding: 0px 0px 40px 0px; } .framer-E57Ul .framer-1yhc99i, .framer-E57Ul .framer-7jyqlg, .framer-E57Ul .framer-1snhjv8, .framer-E57Ul .framer-g27v2a { align-self: unset; gap: 24px; height: min-content; } .framer-E57Ul .framer-13ksx2j { flex-direction: column; gap: 30px; max-width: 390px; padding: 40px 0px 0px 0px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-E57Ul .framer-1886rex, .framer-E57Ul .framer-lhc96y, .framer-E57Ul .framer-qvh3i9, .framer-E57Ul .framer-1ww91p4, .framer-E57Ul .framer-1b1un26, .framer-E57Ul .framer-17ac30h, .framer-E57Ul .framer-jxs8e, .framer-E57Ul .framer-ev64i2, .framer-E57Ul .framer-1kinkxu, .framer-E57Ul .framer-17dfo87, .framer-E57Ul .framer-oa70m1, .framer-E57Ul .framer-1up4sc6, .framer-E57Ul .framer-1daask, .framer-E57Ul .framer-1tv667z, .framer-E57Ul .framer-1yhc99i, .framer-E57Ul .framer-7jyqlg, .framer-E57Ul .framer-1apdecz, .framer-E57Ul .framer-1snhjv8, .framer-E57Ul .framer-1l8di36, .framer-E57Ul .framer-g27v2a, .framer-E57Ul .framer-1fzgisn, .framer-E57Ul .framer-13ksx2j { gap: 0px; } .framer-E57Ul .framer-1886rex > *, .framer-E57Ul .framer-1yhc99i > *, .framer-E57Ul .framer-7jyqlg > *, .framer-E57Ul .framer-1snhjv8 > *, .framer-E57Ul .framer-g27v2a > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-E57Ul .framer-1886rex > :first-child, .framer-E57Ul .framer-lhc96y > :first-child, .framer-E57Ul .framer-qvh3i9 > :first-child, .framer-E57Ul .framer-1ww91p4 > :first-child, .framer-E57Ul .framer-1b1un26 > :first-child, .framer-E57Ul .framer-17ac30h > :first-child, .framer-E57Ul .framer-jxs8e > :first-child, .framer-E57Ul .framer-ev64i2 > :first-child, .framer-E57Ul .framer-1kinkxu > :first-child, .framer-E57Ul .framer-oa70m1 > :first-child, .framer-E57Ul .framer-1up4sc6 > :first-child, .framer-E57Ul .framer-1daask > :first-child, .framer-E57Ul .framer-1tv667z > :first-child, .framer-E57Ul .framer-1yhc99i > :first-child, .framer-E57Ul .framer-7jyqlg > :first-child, .framer-E57Ul .framer-1apdecz > :first-child, .framer-E57Ul .framer-1snhjv8 > :first-child, .framer-E57Ul .framer-1l8di36 > :first-child, .framer-E57Ul .framer-g27v2a > :first-child, .framer-E57Ul .framer-1fzgisn > :first-child, .framer-E57Ul .framer-13ksx2j > :first-child { margin-top: 0px; } .framer-E57Ul .framer-1886rex > :last-child, .framer-E57Ul .framer-lhc96y > :last-child, .framer-E57Ul .framer-qvh3i9 > :last-child, .framer-E57Ul .framer-1ww91p4 > :last-child, .framer-E57Ul .framer-1b1un26 > :last-child, .framer-E57Ul .framer-17ac30h > :last-child, .framer-E57Ul .framer-jxs8e > :last-child, .framer-E57Ul .framer-ev64i2 > :last-child, .framer-E57Ul .framer-1kinkxu > :last-child, .framer-E57Ul .framer-oa70m1 > :last-child, .framer-E57Ul .framer-1up4sc6 > :last-child, .framer-E57Ul .framer-1daask > :last-child, .framer-E57Ul .framer-1tv667z > :last-child, .framer-E57Ul .framer-1yhc99i > :last-child, .framer-E57Ul .framer-7jyqlg > :last-child, .framer-E57Ul .framer-1apdecz > :last-child, .framer-E57Ul .framer-1snhjv8 > :last-child, .framer-E57Ul .framer-1l8di36 > :last-child, .framer-E57Ul .framer-g27v2a > :last-child, .framer-E57Ul .framer-1fzgisn > :last-child, .framer-E57Ul .framer-13ksx2j > :last-child { margin-bottom: 0px; } .framer-E57Ul .framer-lhc96y > *, .framer-E57Ul .framer-qvh3i9 > *, .framer-E57Ul .framer-1apdecz > *, .framer-E57Ul .framer-1l8di36 > *, .framer-E57Ul .framer-1fzgisn > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-E57Ul .framer-1ww91p4 > *, .framer-E57Ul .framer-1b1un26 > *, .framer-E57Ul .framer-1kinkxu > *, .framer-E57Ul .framer-1up4sc6 > *, .framer-E57Ul .framer-1daask > *, .framer-E57Ul .framer-1tv667z > *, .framer-E57Ul .framer-13ksx2j > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-E57Ul .framer-17ac30h > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-E57Ul .framer-jxs8e > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-E57Ul .framer-ev64i2 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-E57Ul .framer-17dfo87 > *, .framer-E57Ul .framer-17dfo87 > :first-child, .framer-E57Ul .framer-17dfo87 > :last-child { margin: 0px; } .framer-E57Ul .framer-oa70m1 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }}`,
    '.framer-E57Ul[data-border="true"]::after, .framer-E57Ul [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  hr = ee(v2, w2, "framer-E57Ul"),
  kn = hr;
hr.displayName = "Home";
hr.defaultProps = { height: 5949, width: 1600 };
re(
  hr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Helvetica Now Display Medium",
          source: "custom",
          url: "https://framerusercontent.com/assets/IVXY5mkDfw4ct15ejiMQhb73Ua8.woff2",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Helvetica Now Display Bold",
          source: "custom",
          url: "https://framerusercontent.com/assets/EjvJsmi6VH1SIHjfwQ1295XtFWQ.woff2",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
          weight: "500",
        },
        {
          family: "Helvetica Now Display Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/aF4jiasJv9sAvyjG09EEw9px8.woff2",
        },
      ],
    },
    ...Q1,
    ...K1,
    ...$1,
    ...e2,
    ...t2,
    ...a2,
    ...i2,
    ...n2,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var zn = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerResponsiveScreen: "",
        framerIntrinsicWidth: "1600",
        framerIntrinsicHeight: "5949",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"x7xcyGr7h":{"layout":["fixed","auto"]},"DBZV3IwOT":{"layout":["fixed","auto"]},"E2xrsV1h4":{"layout":["fixed","auto"]}}}',
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { zn as __FramerMetadata__, kn as default };

