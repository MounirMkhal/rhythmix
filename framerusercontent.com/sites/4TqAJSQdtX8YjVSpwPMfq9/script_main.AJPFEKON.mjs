import {
  F as v,
  G as _,
  H as f,
  I as F,
  J as k,
  K as E,
  L as I,
  O as P,
  Q as S,
  S as w,
  X as O,
  _ as x,
  d as h,
  da as D,
  f as o,
  ga as M,
  i as b,
  j as l,
  qa as V,
  za as N,
} from "./chunk-L5OYT25A.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as t } from "./chunk-RIUMFBNJ.mjs";
var W = "default" in _ ? v : _,
  m = {},
  U = W;
m.createRoot = U.createRoot;
m.hydrateRoot = U.hydrateRoot;
var u = m.createRoot,
  B = m.hydrateRoot;
var p = {
    augiA20Il: {
      elements: {},
      page: f(() =>
        import("./Vzdz7tnUB_vqFdn7jCxE507Z1ZdWiHGA6LBzyDpxTjM.P2TIUK7G.mjs")
      ),
      path: "/",
    },
  },
  L = [{ code: "en-US", id: "default", name: "English", slug: "" }];
async function J({ routeId: a, pathVariables: n, localeId: r }) {
  await p[a].page.preload();
  let s = o(M, {
      isWebsite: !0,
      routeId: a,
      pathVariables: n,
      routes: p,
      collectionUtils: {},
      framerSiteId:
        "0423b55aa9ece02d047ff436ccd5622d91c7a30c4b59d2289f2712ebcab0aefd",
      notFoundPage: f(() => import("./SitesNotFoundPage.js@1.1-AAHYH2KN.mjs")),
      isReducedMotion: void 0,
      localeId: r,
      locales: L,
      preserveQueryParams: void 0,
    }),
    c = o(D, {
      children: s,
      value: {
        enableAsyncURLUpdates: !0,
        replaceNestedLinks: !0,
        useGranularSuspense: !0,
        wrapUpdatesInTransitions: !1,
      },
    });
  return o(F, { children: c, value: { routes: {} } });
}
var R = typeof document < "u";
if (R) {
  (t.__framer_importFromPackage = (n, r) => () =>
    o(S, {
      error: 'Package component not supported: "' + r + '" in "' + n + '"',
    })),
    (t.process = {
      ...t.process,
      env: { ...(t.process ? t.process.env : void 0), NODE_ENV: "production" },
    }),
    (t.__framer_events = t.__framer_events || []),
    w();
  let a = document.getElementById("main");
  "framerHydrateV2" in a.dataset ? T(!0, a) : T(!1, a);
}
function H() {
  R && t.__framer_events.push(arguments);
}
async function T(a, n) {
  try {
    let y = function (e, z) {
        let d = z?.componentStack;
        console.warn(
          "Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",
          e,
          d
        ),
          !(Math.random() > 0.01) &&
            H("published_site_load_recoverable_error", {
              message: String(e),
              componentStack: d,
              stack: d
                ? void 0
                : e instanceof Error && typeof e.stack == "string"
                ? e.stack
                : null,
            });
      },
      r,
      s,
      c,
      i;
    if (a) {
      let e = JSON.parse(n.dataset.framerHydrateV2);
      (r = e.routeId),
        (s = e.localeId),
        (c = e.pathVariables),
        (i = e.breakpoints);
    } else {
      let e = P(p, decodeURIComponent(location.pathname), !0, L);
      (r = e.routeId), (s = e.localeId), (c = e.pathVariables);
    }
    let g = await J({ routeId: r, localeId: s, pathVariables: c });
    a
      ? (N("framer-rewrite-breakpoints", () => {
          V(i), t.__framer_onRewriteBreakpoints?.(i);
        }),
        l(() => {
          k(), I(), E(), B(n, g, { onRecoverableError: y });
        }))
      : u(n, { onRecoverableError: y }).render(g);
  } catch (r) {
    throw (
      (H("published_site_load_error", {
        message: String(r),
        stack:
          r instanceof Error && typeof r.stack == "string" ? r.stack : null,
      }),
      r)
    );
  }
}
(function () {
  R &&
    l(() => {
      u(document.getElementById("__framer-badge-container")).render(
        o(
          h,
          {},
          o(
            O(x),
            {
              className: "__framer-badge",
              __framer__threshold: 0.5,
              __framer__animateOnce: !0,
              __framer__opacity: 0,
              __framer__targetOpacity: 1,
              __framer__rotate: 0,
              __framer__x: 0,
              __framer__y: 10,
              __framer__scale: 1,
              __framer__transition: {
                type: "spring",
                ease: [0.44, 0, 0.56, 1],
                duration: 0.3,
                delay: 1,
                stiffness: 350,
                damping: 40,
                mass: 1.5,
              },
              __framer__rotateX: 0,
              __framer__rotateY: 0,
              __framer__perspective: 1200,
            },
            o(b(() => import("./PX9hIOIVM-OBTNTYA7.mjs")))
          )
        )
      );
    });
})();
export { J as getPageRoot };
//# sourceMappingURL=script_main.AJPFEKON.mjs.map
