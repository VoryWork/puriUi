import { defineComponent as _, openBlock as s, createElementBlock as d, normalizeClass as y, createElementVNode as u, toDisplayString as g, renderSlot as b, createCommentVNode as D, useModel as T, ref as f, createBlock as J, Transition as W, withCtx as V, createVNode as K, mergeModels as Y, computed as G, Fragment as B, renderList as C, TransitionGroup as X, normalizeStyle as Z, withDirectives as ee, vModelDynamic as ae, onMounted as te, onBeforeUnmount as le } from "vue";
const ne = { key: 0, class: "puri-row-center relative p-4" }, oe = { class: "puri-card-title" }, w = (a, l) => {
  const r = a.__vccOpts || a;
  for (const [m, c] of l) r[m] = c;
  return r;
}, S = w(_({ __name: "card", props: { title: {}, customColor: { type: Boolean } }, setup(a) {
  const l = a;
  return (r, m) => (s(), d("div", { class: y(["puri-card", [l.customColor ? "" : "default-color"]]) }, [l.title ? (s(), d("div", ne, [u("div", oe, g(l.title), 1), b(r.$slots, "title-append", {}, void 0, !0)])) : D("", !0), b(r.$slots, "default", {}, void 0, !0)], 2));
} }), [["__scopeId", "data-v-2e19dedc"]]);
S.install = (a) => {
  a.component(S.__name, S);
};
const H = w(_({ __name: "collapse", props: { modelValue: { type: Boolean }, modelModifiers: {} }, emits: ["update:modelValue"], setup(a) {
  const l = T(a, "modelValue"), r = f(""), m = f(""), c = f("");
  function t(o) {
    m.value = o.style.paddingBottom, r.value = o.style.paddingTop, o.style.paddingTop = "0", o.style.paddingBottom = "0", o.style.maxHeight = "0";
  }
  function p(o, x) {
    c.value = o.style.overflow;
    let h = o.scrollHeight;
    o.style.maxHeight = h > 0 ? h + "px" : "0", o.style.paddingTop = r.value, o.style.paddingBottom = m.value, o.style.overflow = "hidden";
    let $ = function() {
      x(), o.removeEventListener("transitionend", $, !1), o.removeEventListener("transitioncancel", $, !1);
    };
    o.addEventListener("transitionend", $, !1), o.addEventListener("transitioncancel", $, !1);
  }
  function e(o) {
    o.style.maxHeight = "", o.style.overflow = c.value;
  }
  function E(o) {
    m.value = o.style.paddingBottom, r.value = o.style.paddingTop, c.value = o.style.overflow, o.style.maxHeight = o.scrollHeight + "px", o.style.overflow = "hidden";
  }
  function L(o, x) {
    o.scrollHeight !== 0 && (o.style.maxHeight = "0", o.style.paddingBottom = "0", o.style.paddingTop = "0");
    let h = function() {
      x(), o.removeEventListener("transitionend", h, !1), o.removeEventListener("transitioncancel", h, !1);
    };
    o.addEventListener("transitionend", h, !1), o.addEventListener("transitioncancel", h, !1);
  }
  function j(o) {
    o.style.maxHeight = "", o.style.overflow = c.value, o.style.paddingBottom = m.value, o.style.paddingTop = r.value, c.value = m.value = r.value = "";
  }
  return (o, x) => (s(), J(W, { onBeforeEnter: t, onEnter: p, onAfterEnter: e, onBeforeLeave: E, onLeave: L, onAfterLeave: j, name: "puri-collapse-transition" }, { default: V(() => [l.value ? b(o.$slots, "default", { key: 0 }, void 0, !0) : D("", !0)]), _: 3 }));
} }), [["__scopeId", "data-v-65335719"]]);
H.install = (a) => {
  a.component(H.__name, H);
};
const A = _({ __name: "container", props: { native: { type: Boolean }, navbar: { type: Boolean }, titlebar: { type: Boolean }, flexCentered: { type: Boolean } }, setup(a) {
  const l = a;
  return (r, m) => (s(), d("div", { class: y(["puri-container", [l.native ? "padding-mobile" : "padding-web", l.navbar ? "padding-navbar" : "", l.titlebar ? "padding-titlebar" : "", l.flexCentered ? "puri-container-flex-centered" : ""]]) }, [K(W, { name: "puri-fade", mode: "out-in" }, { default: V(() => [b(r.$slots, "default")]), _: 3 })], 2));
} });
A.install = (a) => {
  a.component(A.__name, A);
};
const re = { key: 0 }, ie = { class: "puri-row-center" }, ue = { class: "flex-grow text-center active:scale-95 transition-all" }, se = { class: "puri-date-picker-month-container" }, ce = ["onClick"], de = { key: 1 }, ve = { class: "puri-row-center" }, me = { class: "puri-date-picker-date-title-container" }, pe = { class: "puri-date-picker-date-item" }, ye = { class: "puri-date-picker-date-container" }, he = ["onClick"], ge = ["onClick"], fe = ["onClick"], M = w(_({ __name: "datePicker", props: Y({ range: { type: Boolean }, month: { type: Boolean }, firstDay: {} }, { modelValue: { required: !0 }, modelModifiers: {} }), emits: ["update:modelValue"], setup(a) {
  const l = T(a, "modelValue"), r = a, m = f(new Date(Array.isArray(l.value) ? l.value[0] : l.value)), c = f(new Date(Array.isArray(l.value) ? l.value[1] : l.value)), t = f({ year: m.value.getFullYear(), month: m.value.getMonth(), day: m.value.getDate() }), p = f({ year: c.value.getFullYear(), month: c.value.getMonth(), day: c.value.getDate() }), e = f({ year: t.value.year, month: t.value.month }), E = f(["日", "一", "二", "三", "四", "五", "六"]), L = G(() => new Date(e.value.year, e.value.month + 1, 0).getDate()), j = G(() => {
    const v = new Date(e.value.year, e.value.month, 0), n = (v.getDay() + 1 - (r.firstDay ?? 0)) % 7 + (o.value.length + L.value <= 35 ? 7 : 0);
    return new Array(n).fill("").map((i, k) => v.getDate() - n + 1 + k);
  }), o = G(() => {
    const v = new Date(e.value.year, e.value.month + 1, 0), n = 7 + ((r.firstDay ?? 0) - v.getDay() - 1) % 7;
    return new Array(n).fill("").map((i, k) => 1 + k);
  });
  function x(v, n, i) {
    r.range ? t.value.year === p.value.year && t.value.month === p.value.month && t.value.day === p.value.day ? (new Date(t.value.year, t.value.month, t.value.day).getTime() < new Date(v, n, i).getTime() ? p.value = { year: v, month: n, day: i } : t.value = { year: v, month: n, day: i }, l.value = [new Date(t.value.year, t.value.month, t.value.day).toISOString().slice(0, 10), new Date(p.value.year, p.value.month, p.value.day).toISOString().slice(0, 10)]) : (t.value = { year: v, month: n, day: i }, p.value = { year: v, month: n, day: i }, l.value = [new Date(v, n, i).toISOString().slice(0, 10)]) : (e.value = { year: v, month: n }, t.value = { year: v, month: n, day: i }, l.value = new Date(v, n, i).toISOString().slice(0, 10));
  }
  function h(v, n, i) {
    if (r.range) {
      if (t.value.year === v && t.value.month === n && t.value.day === i) return "range-start";
      if (p.value.year === v && p.value.month === n && p.value.day === i) return "range-end";
      if (new Date(t.value.year, t.value.month, t.value.day).getTime() < new Date(v, n, i).getTime() && new Date(p.value.year, p.value.month, p.value.day).getTime() > new Date(v, n, i).getTime()) return "range";
    } else if (t.value.year === v && t.value.month === n && t.value.day === i) return "selected";
    return "";
  }
  function $(v, n) {
    if (r.range) {
      if (t.value.year === v && t.value.month === n && t.value.month === p.value.month && t.value.year === p.value.year) return "selected";
      if (t.value.year === v && t.value.month === n) return "range-start";
      if (p.value.year === v && p.value.month === n) return "range-end";
      if (new Date(t.value.year, t.value.month).getTime() < new Date(v, n).getTime() && new Date(p.value.year, p.value.month).getTime() > new Date(v, n).getTime()) return "range";
    } else if (t.value.year === v && t.value.month === n) return "selected";
  }
  const I = f("prev");
  function Q() {
    I.value = "prev", e.value = { year: e.value.month === 0 ? e.value.year - 1 : e.value.year, month: e.value.month === 0 ? 11 : e.value.month - 1 };
  }
  function R() {
    I.value = "next", e.value = { year: e.value.month === 11 ? e.value.year + 1 : e.value.year, month: e.value.month === 11 ? 0 : e.value.month + 1 };
  }
  return (v, n) => (s(), J(W, null, { default: V(() => [e.value.month === -1 ? (s(), d("div", re, [u("div", ie, [u("button", { class: "puri-date-switch", onClick: n[0] || (n[0] = (i) => e.value.year--) }, n[3] || (n[3] = [u("i", { class: "bi bi-chevron-compact-left" }, null, -1)])), u("button", ue, g(`${e.value.year}年`), 1), u("button", { class: "puri-date-switch", onClick: n[1] || (n[1] = (i) => e.value.year++) }, n[4] || (n[4] = [u("i", { class: "bi bi-chevron-compact-right" }, null, -1)]))]), n[5] || (n[5] = u("div", { class: "puri-date-picker-date-title-container" }, [u("div", { class: "puri-date-picker-date-item col-span-7" }, "选择月份")], -1)), n[6] || (n[6] = u("div", { class: "h-[1px] bg-gray-200/50 dark:bg-neutral-700/50 my-2" }, null, -1)), u("div", se, [(s(), d(B, null, C(["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], (i, k) => u("div", { class: y(["puri-date-picker-month-item", $(e.value.year, k)]), onClick: (Se) => e.value.month = k }, g(i), 11, ce)), 64))])])) : (s(), d("div", de, [u("div", ve, [u("button", { class: "puri-date-switch", onClick: Q }, n[7] || (n[7] = [u("i", { class: "bi bi-chevron-compact-left" }, null, -1)])), u("button", { onClick: n[2] || (n[2] = (i) => e.value.month = -1), class: "flex-grow text-center active:scale-95 transition-all" }, g(`${e.value.year}年${e.value.month + 1}月`), 1), u("button", { class: "puri-date-switch", onClick: R }, n[8] || (n[8] = [u("i", { class: "bi bi-chevron-compact-right" }, null, -1)]))]), u("div", me, [(s(), d(B, null, C(7, (i) => u("div", null, [u("div", pe, g(E.value[(i + (r.firstDay ?? 0) - 1) % E.value.length]), 1)])), 64))]), n[9] || (n[9] = u("div", { class: "h-[1px] bg-gray-200/50 dark:bg-neutral-700/50 my-2" }, null, -1)), u("div", ye, [K(X, { name: `puri-date-${I.value}-container` }, { default: V(() => [(s(!0), d(B, null, C(j.value, (i) => (s(), d("div", { class: y(["puri-date-picker-date-p-item", h(e.value.month === 0 ? e.value.year - 1 : e.value.year, e.value.month === 0 ? 12 : e.value.month - 1, i)]), onClick: (k) => {
    I.value = "prev", x(e.value.month === 0 ? e.value.year - 1 : e.value.year, e.value.month === 0 ? 12 : e.value.month - 1, i);
  }, key: `${e.value.month === 0 ? e.value.year - 1 : e.value.year},${e.value.month === 0 ? 12 : e.value.month - 1},${i}` }, g(i), 11, he))), 128)), (s(!0), d(B, null, C(L.value, (i) => (s(), d("div", { class: y(["puri-date-picker-date-item", h(e.value.year, e.value.month, i)]), onClick: (k) => x(e.value.year, e.value.month, i), key: `${e.value.year},${e.value.month},${i}` }, g(i), 11, ge))), 128)), (s(!0), d(B, null, C(o.value, (i) => (s(), d("div", { class: y(["puri-date-picker-date-p-item", h(e.value.month === 11 ? e.value.year + 1 : e.value.year, e.value.month === 11 ? 0 : e.value.month + 1, i)]), onClick: (k) => {
    I.value = "next", x(e.value.month === 11 ? e.value.year + 1 : e.value.year, e.value.month === 11 ? 0 : e.value.month + 1, i);
  }, key: `${e.value.month === 11 ? e.value.year + 1 : e.value.year},${e.value.month === 11 ? 0 : e.value.month + 1},${i}` }, g(i), 11, fe))), 128))]), _: 1 }, 8, ["name"])])]))]), _: 1 }));
} }), [["__scopeId", "data-v-fe728508"]]);
M.install = (a) => {
  a.component(M.__name, M);
};
const _e = { key: 0, class: "puri-dialog" }, q = w(_({ __name: "dialog", props: Y({ maxWidth: {} }, { modelValue: { type: Boolean }, modelModifiers: {} }), emits: ["update:modelValue"], setup(a) {
  const l = T(a, "modelValue"), r = a;
  return (m, c) => (s(), J(W, { name: "puri-dialoger" }, { default: V(() => [l.value ? (s(), d("div", _e, [u("div", { class: "puri-dialog-background", onClick: c[0] || (c[0] = (t) => l.value = !1) }), u("div", { class: y(["puri-dialog-container", r.maxWidth ? `max-w-[${r.maxWidth}]` : void 0]) }, [b(m.$slots, "default", {}, void 0, !0)], 2)])) : D("", !0)]), _: 3 }));
} }), [["__scopeId", "data-v-76edc8b5"]]);
q.install = (a) => {
  a.component(q.__name, q);
};
const be = { class: "puri-list-indicator-container" }, F = w(_({ __name: "ItemIndicator", props: { length: {}, value: {} }, setup(a) {
  const l = a;
  return (r, m) => (s(), d("div", be, [(s(!0), d(B, null, C(l.length, (c) => (s(), d("div", { class: y(["puri-list-indecator-item", c - 1 === l.value ? "active" : void 0]) }, null, 2))), 256))]));
} }), [["__scopeId", "data-v-5c86557e"]]);
F.install = (a) => {
  a.component(F.__name, F);
};
const ke = { key: 0, class: "puri-list-item-icon" }, we = { class: "puri-list-item-title" }, O = w(_({ __name: "listItem", props: { prependIcon: {}, title: {}, compact: { type: Boolean }, clickable: { type: Boolean } }, setup(a) {
  const l = a;
  return (r, m) => (s(), d("div", { class: y(["puri-list-item", [l.compact ? "compact" : "", r.clickable ? "puri-clickable" : ""]]) }, [l.prependIcon ? (s(), d("div", ke, [u("i", { class: y(["bi", l.prependIcon]) }, null, 2)])) : D("", !0), u("div", we, g(l.title), 1), u("div", null, [b(r.$slots, "append", {}, void 0, !0)])], 2));
} }), [["__scopeId", "data-v-77530347"]]);
O.install = (a) => {
  a.component(O.__name, O);
};
const xe = ["src"], z = _({ __name: "mainView", props: { background: {} }, setup(a) {
  const l = a;
  return (r, m) => (s(), d("div", { class: y(["puri-screen", [l.background ? "bannered" : ""]]) }, [l.background ? (s(), d("img", { key: 0, class: "puri-banner-img", src: r.background }, null, 8, xe)) : D("", !0), b(r.$slots, "default")], 2));
} });
z.install = (a) => {
  a.component(z.__name, z);
};
const De = { class: "puri-screen-navbar-container" }, Be = ["onClick"], N = w(_({ __name: "navBar", props: Y({ col: {}, items: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(a) {
  const l = T(a, "modelValue"), r = a;
  return (m, c) => (s(), d("div", De, [u("nav", { class: "puri-screen-navbar", style: Z(`grid-template-columns: repeat(${m.col || m.items.length}, minmax(0, 1fr));`) }, [(s(!0), d(B, null, C(r.items, (t) => (s(), d("button", { class: y(t.name === l.value ? "active" : void 0), onClick: (p) => {
    l.value = t.name, t.clickHander(t.name);
  } }, [u("i", { class: y(["bi", t.icon]) }, null, 2), u("span", null, g(t.title), 1)], 10, Be))), 256))], 4)]));
} }), [["__scopeId", "data-v-c0dc0e9f"]]);
N.install = (a) => {
  a.component(N.__name, N);
};
const Ce = { class: "group" }, $e = { key: 0, class: "puri-textfield-label" }, Ie = { class: "puri-textfield-container group" }, Ve = { class: "flex-grow" }, Te = ["type", "autocomplete", "placeholder"], P = w(_({ __name: "textField", props: Y({ type: { type: String, default: "text" }, label: { type: String, required: !1 }, placeholder: { type: String, required: !1 }, prependIcon: { type: String, required: !1 }, cleaner: { type: Boolean, default: !1 }, validation: { type: Array, required: !1 }, autoComplete: { type: String, default: "off" } }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(a) {
  const l = T(a, "modelValue"), r = a;
  return (m, c) => (s(), d("div", Ce, [r.label ? (s(), d("div", $e, g(r.label), 1)) : D("", !0), u("div", Ie, [r.prependIcon ? (s(), d("i", { key: 0, class: y(["bi puri-textfield-icon", r.prependIcon]) }, null, 2)) : D("", !0), b(m.$slots, "prepend", {}, void 0, !0), u("div", Ve, [ee(u("input", { type: a.type, autocomplete: r.autoComplete, "onUpdate:modelValue": c[0] || (c[0] = (t) => l.value = t), class: "puri-textfield-input w-full", placeholder: a.placeholder }, null, 8, Te), [[ae, l.value]])]), a.cleaner ? (s(), d("button", { key: 1, onClick: c[1] || (c[1] = (t) => l.value = ""), class: "puri-textfield-cleaner" }, c[2] || (c[2] = [u("i", { class: "bi bi-x-circle-fill text-xs text-gray-400 dark:text-neutral-500" }, null, -1)]))) : D("", !0), b(m.$slots, "append", {}, void 0, !0)])]));
} }), [["__scopeId", "data-v-35411244"]]);
P.install = (a) => {
  a.component(P.__name, P);
};
const Ee = _({ __name: "titlebar", props: { native: { type: Boolean }, titleAutoHide: { type: Boolean } }, setup(a) {
  const l = a, r = f();
  let m;
  return te(() => {
    m = window.addEventListener("scroll", function() {
      var c, t;
      window.scrollY > 10 ? (c = r.value) == null || c.classList.add("puri-titlebar-float") : (t = r.value) == null || t.classList.remove("puri-titlebar-float");
    });
  }), le(() => {
    window.removeEventListener("scroll", m);
  }), (c, t) => (s(), d("div", { ref_key: "titlebar", ref: r, class: y(["puri-titlebar", [l.native ? "mt-8" : "mt-0", l.titleAutoHide ? "puri-titlebar-hide" : ""]]) }, [b(c.$slots, "default", {}, void 0, !0)], 2));
} }), U = w(Ee, [["__scopeId", "data-v-bc492f9f"]]);
U.install = (a) => {
  a.component(U.__name, U);
};
const Le = [S, M, q, F, O, U, H, N, z, A, P], Ae = function(a) {
  Le.forEach((l) => a.component(`Puri${l.__name}`, l));
};
export {
  S as Card,
  M as DatePicker,
  q as Dialog,
  F as ItemIndicator,
  H as collapse,
  A as container,
  Ae as default,
  O as listItem,
  z as mainView,
  N as navBar,
  P as textField,
  U as titlebar
};
//# sourceMappingURL=index.js.map
