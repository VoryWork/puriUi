import { defineComponent as g, openBlock as u, createElementBlock as v, normalizeClass as y, createTextVNode as Z, toDisplayString as f, renderSlot as h, createCommentVNode as k, createElementVNode as s, useModel as T, ref as b, createBlock as K, Transition as Q, withCtx as w, mergeModels as H, unref as ee, createVNode as E, computed as X, Fragment as D, renderList as I, TransitionGroup as le, normalizeStyle as ne, withDirectives as oe, vModelDynamic as ie, onMounted as re, onBeforeUnmount as ue } from "vue";
const q = g({ __name: "Badge", props: { clickable: { type: Boolean }, text: {}, customColor: { type: Boolean }, color: {} }, setup(e) {
  const t = e;
  return (l, c) => (u(), v("span", { class: y(["puri-badge", [t.clickable ? "puri-clickable" : "", t.customColor ? "" : t.color]]) }, [Z(f(t.text) + " ", 1), h(l.$slots, "default")], 2));
} });
q.install = (e) => {
  e.component(q.__name, q);
};
const V = g({ __name: "Button", props: { prependIcon: {}, appendIcon: {}, customColor: { type: Boolean }, size: {}, solo: { type: Boolean } }, setup(e) {
  const t = e;
  return (l, c) => (u(), v("button", { class: y(["puri-button", [t.customColor ? "" : "default-color", { small: "puri-button-small", large: "puri-button-large", normal: "" }[t.size ?? "normal"], t.solo ? "puri-button-solo" : ""]]) }, [h(l.$slots, "prepend"), t.prependIcon ? (u(), v("i", { key: 0, class: y(["bi", t.prependIcon]) }, null, 2)) : k("", !0), h(l.$slots, "default"), t.appendIcon ? (u(), v("i", { key: 1, class: y(["bi", t.appendIcon]) }, null, 2)) : k("", !0), h(l.$slots, "append")], 2));
} });
V.install = (e) => {
  e.component(V.__name, V);
};
const se = { key: 0, class: "puri-row-center relative p-4" }, ce = { class: "puri-card-title" }, C = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [c, d] of t) l[c] = d;
  return l;
}, S = C(g({ __name: "card", props: { title: {}, customColor: { type: Boolean } }, setup(e) {
  const t = e;
  return (l, c) => (u(), v("div", { class: y(["puri-card", [t.customColor ? "" : "default-color"]]) }, [t.title ? (u(), v("div", se, [s("div", ce, f(t.title), 1), h(l.$slots, "title-append", {}, void 0, !0)])) : k("", !0), h(l.$slots, "default", {}, void 0, !0)], 2));
} }), [["__scopeId", "data-v-2e19dedc"]]);
S.install = (e) => {
  e.component(S.__name, S);
};
const N = C(g({ __name: "collapse", props: { modelValue: { type: Boolean }, modelModifiers: {} }, emits: ["update:modelValue"], setup(e) {
  const t = T(e, "modelValue"), l = b(""), c = b(""), d = b("");
  function n(i) {
    c.value = i.style.paddingBottom, l.value = i.style.paddingTop, i.style.paddingTop = "0", i.style.paddingBottom = "0", i.style.maxHeight = "0";
  }
  function m(i, B) {
    d.value = i.style.overflow;
    let _ = i.scrollHeight;
    i.style.maxHeight = _ > 0 ? _ + "px" : "0", i.style.paddingTop = l.value, i.style.paddingBottom = c.value, i.style.overflow = "hidden";
    let $ = function() {
      B(), i.removeEventListener("transitionend", $, !1), i.removeEventListener("transitioncancel", $, !1);
    };
    i.addEventListener("transitionend", $, !1), i.addEventListener("transitioncancel", $, !1);
  }
  function a(i) {
    i.style.maxHeight = "", i.style.overflow = d.value;
  }
  function A(i) {
    c.value = i.style.paddingBottom, l.value = i.style.paddingTop, d.value = i.style.overflow, i.style.maxHeight = i.scrollHeight + "px", i.style.overflow = "hidden";
  }
  function F(i, B) {
    i.scrollHeight !== 0 && (i.style.maxHeight = "0", i.style.paddingBottom = "0", i.style.paddingTop = "0");
    let _ = function() {
      B(), i.removeEventListener("transitionend", _, !1), i.removeEventListener("transitioncancel", _, !1);
    };
    i.addEventListener("transitionend", _, !1), i.addEventListener("transitioncancel", _, !1);
  }
  function R(i) {
    i.style.maxHeight = "", i.style.overflow = d.value, i.style.paddingBottom = c.value, i.style.paddingTop = l.value, d.value = c.value = l.value = "";
  }
  return (i, B) => (u(), K(Q, { onBeforeEnter: n, onEnter: m, onAfterEnter: a, onBeforeLeave: A, onLeave: F, onAfterLeave: R, name: "puri-collapse-transition" }, { default: w(() => [t.value ? h(i.$slots, "default", { key: 0 }, void 0, !0) : k("", !0)]), _: 3 }));
} }), [["__scopeId", "data-v-65335719"]]);
N.install = (e) => {
  e.component(N.__name, N);
};
const de = { key: 0, class: "puri-dialog" }, M = C(g({ __name: "dialog", props: H({ maxWidth: {} }, { modelValue: { type: Boolean }, modelModifiers: {} }), emits: ["update:modelValue"], setup(e) {
  const t = T(e, "modelValue"), l = e;
  return (c, d) => (u(), K(Q, { name: "puri-dialoger" }, { default: w(() => [t.value ? (u(), v("div", de, [s("div", { class: "puri-dialog-background", onClick: d[0] || (d[0] = (n) => t.value = !1) }), s("div", { class: y(["puri-dialog-container", l.maxWidth ? `max-w-[${l.maxWidth}]` : void 0]) }, [h(c.$slots, "default", {}, void 0, !0)], 2)])) : k("", !0)]), _: 3 }));
} }), [["__scopeId", "data-v-76edc8b5"]]);
M.install = (e) => {
  e.component(M.__name, M);
};
const ve = { key: 0, class: "puri-confirmer-title" }, pe = { class: "puri-confirmer-content" }, me = { class: "puri-confirmer-actions" }, O = g({ __name: "confirmDialog", props: H({ maxWidth: {}, title: {}, confirmText: {}, cancelText: {}, confirmColorClass: {}, onConfirm: { type: Function }, onCancel: { type: Function } }, { modelValue: { type: Boolean }, modelModifiers: {} }), emits: ["update:modelValue"], setup(e) {
  const t = T(e, "modelValue"), l = e;
  return (c, d) => (u(), K(ee(M), { "max-width": c.maxWidth, modelValue: t.value, "onUpdate:modelValue": d[2] || (d[2] = (n) => t.value = n) }, { default: w(() => [E(ee(S), { class: "puri-confirmer" }, { default: w(() => [l.title ? (u(), v("div", ve, f(l.title), 1)) : k("", !0), s("p", pe, [h(c.$slots, "default")]), s("div", me, [E(V, { "custom-color": "", onClick: d[0] || (d[0] = (n) => c.onCancel ? c.onCancel() : void 0), class: "puri-confirmer-actions-cancel" }, { default: w(() => [Z(f(l.cancelText || "取消"), 1)]), _: 1 }), E(V, { onClick: d[1] || (d[1] = (n) => c.onConfirm ? c.onConfirm() : void 0), class: y(["px-2", l.confirmColorClass ?? "text-green-500 dark:text-green-400"]), "custom-color": "" }, { default: w(() => [Z(f(l.confirmText || "确认"), 1)]), _: 1 }, 8, ["class"])])]), _: 3 })]), _: 3 }, 8, ["max-width", "modelValue"]));
} });
O.install = (e) => {
  e.component(O.__name, O);
};
const W = g({ __name: "container", props: { native: { type: Boolean }, navbar: { type: Boolean }, titlebar: { type: Boolean }, flexCentered: { type: Boolean } }, setup(e) {
  const t = e;
  return (l, c) => (u(), v("div", { class: y(["puri-container", [t.native ? "padding-mobile" : "padding-web", t.navbar ? "padding-navbar" : "", t.titlebar ? "padding-titlebar" : "", t.flexCentered ? "puri-container-flex-centered" : ""]]) }, [E(Q, { name: "puri-fade", mode: "out-in" }, { default: w(() => [h(l.$slots, "default")]), _: 3 })], 2));
} });
W.install = (e) => {
  e.component(W.__name, W);
};
const ye = { key: 0 }, fe = { class: "puri-row-center" }, he = { class: "flex-grow text-center active:scale-95 transition-all" }, ge = { class: "puri-date-picker-month-container" }, _e = ["onClick"], be = { key: 1 }, ke = { class: "puri-row-center" }, xe = { class: "puri-date-picker-date-title-container" }, we = { class: "puri-date-picker-date-item" }, Ce = { class: "puri-date-picker-date-container" }, Be = ["onClick"], De = ["onClick"], Ie = ["onClick"], z = C(g({ __name: "datePicker", props: H({ range: { type: Boolean }, month: { type: Boolean }, firstDay: {} }, { modelValue: { required: !0 }, modelModifiers: {} }), emits: ["update:modelValue"], setup(e) {
  const t = T(e, "modelValue"), l = e, c = b(new Date(Array.isArray(t.value) ? t.value[0] : t.value)), d = b(new Date(Array.isArray(t.value) ? t.value[1] : t.value)), n = b({ year: c.value.getFullYear(), month: c.value.getMonth(), day: c.value.getDate() }), m = b({ year: d.value.getFullYear(), month: d.value.getMonth(), day: d.value.getDate() }), a = b({ year: n.value.year, month: n.value.month }), A = b(["日", "一", "二", "三", "四", "五", "六"]), F = X(() => new Date(a.value.year, a.value.month + 1, 0).getDate()), R = X(() => {
    const p = new Date(a.value.year, a.value.month, 0), o = (p.getDay() + 1 - (l.firstDay ?? 0)) % 7 + (i.value.length + F.value <= 35 ? 7 : 0);
    return new Array(o).fill("").map((r, x) => p.getDate() - o + 1 + x);
  }), i = X(() => {
    const p = new Date(a.value.year, a.value.month + 1, 0), o = 7 + ((l.firstDay ?? 0) - p.getDay() - 1) % 7;
    return new Array(o).fill("").map((r, x) => 1 + x);
  });
  function B(p, o, r) {
    l.range ? n.value.year === m.value.year && n.value.month === m.value.month && n.value.day === m.value.day ? (new Date(n.value.year, n.value.month, n.value.day).getTime() < new Date(p, o, r).getTime() ? m.value = { year: p, month: o, day: r } : n.value = { year: p, month: o, day: r }, t.value = [new Date(n.value.year, n.value.month, n.value.day).toISOString().slice(0, 10), new Date(m.value.year, m.value.month, m.value.day).toISOString().slice(0, 10)]) : (n.value = { year: p, month: o, day: r }, m.value = { year: p, month: o, day: r }, t.value = [new Date(p, o, r).toISOString().slice(0, 10)]) : (a.value = { year: p, month: o }, n.value = { year: p, month: o, day: r }, t.value = new Date(p, o, r).toISOString().slice(0, 10));
  }
  function _(p, o, r) {
    if (l.range) {
      if (n.value.year === p && n.value.month === o && n.value.day === r) return "range-start";
      if (m.value.year === p && m.value.month === o && m.value.day === r) return "range-end";
      if (new Date(n.value.year, n.value.month, n.value.day).getTime() < new Date(p, o, r).getTime() && new Date(m.value.year, m.value.month, m.value.day).getTime() > new Date(p, o, r).getTime()) return "range";
    } else if (n.value.year === p && n.value.month === o && n.value.day === r) return "selected";
    return "";
  }
  function $(p, o) {
    if (l.range) {
      if (n.value.year === p && n.value.month === o && n.value.month === m.value.month && n.value.year === m.value.year) return "selected";
      if (n.value.year === p && n.value.month === o) return "range-start";
      if (m.value.year === p && m.value.month === o) return "range-end";
      if (new Date(n.value.year, n.value.month).getTime() < new Date(p, o).getTime() && new Date(m.value.year, m.value.month).getTime() > new Date(p, o).getTime()) return "range";
    } else if (n.value.year === p && n.value.month === o) return "selected";
  }
  const L = b("prev");
  function ae() {
    L.value = "prev", a.value = { year: a.value.month === 0 ? a.value.year - 1 : a.value.year, month: a.value.month === 0 ? 11 : a.value.month - 1 };
  }
  function te() {
    L.value = "next", a.value = { year: a.value.month === 11 ? a.value.year + 1 : a.value.year, month: a.value.month === 11 ? 0 : a.value.month + 1 };
  }
  return (p, o) => (u(), K(Q, null, { default: w(() => [a.value.month === -1 ? (u(), v("div", ye, [s("div", fe, [s("button", { class: "puri-date-switch", onClick: o[0] || (o[0] = (r) => a.value.year--) }, o[3] || (o[3] = [s("i", { class: "bi bi-chevron-compact-left" }, null, -1)])), s("button", he, f(`${a.value.year}年`), 1), s("button", { class: "puri-date-switch", onClick: o[1] || (o[1] = (r) => a.value.year++) }, o[4] || (o[4] = [s("i", { class: "bi bi-chevron-compact-right" }, null, -1)]))]), o[5] || (o[5] = s("div", { class: "puri-date-picker-date-title-container" }, [s("div", { class: "puri-date-picker-date-item col-span-7" }, "选择月份")], -1)), o[6] || (o[6] = s("div", { class: "h-[1px] bg-gray-200/50 dark:bg-neutral-700/50 my-2" }, null, -1)), s("div", ge, [(u(), v(D, null, I(["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], (r, x) => s("div", { class: y(["puri-date-picker-month-item", $(a.value.year, x)]), onClick: (Oe) => a.value.month = x }, f(r), 11, _e)), 64))])])) : (u(), v("div", be, [s("div", ke, [s("button", { class: "puri-date-switch", onClick: ae }, o[7] || (o[7] = [s("i", { class: "bi bi-chevron-compact-left" }, null, -1)])), s("button", { onClick: o[2] || (o[2] = (r) => a.value.month = -1), class: "flex-grow text-center active:scale-95 transition-all" }, f(`${a.value.year}年${a.value.month + 1}月`), 1), s("button", { class: "puri-date-switch", onClick: te }, o[8] || (o[8] = [s("i", { class: "bi bi-chevron-compact-right" }, null, -1)]))]), s("div", xe, [(u(), v(D, null, I(7, (r) => s("div", null, [s("div", we, f(A.value[(r + (l.firstDay ?? 0) - 1) % A.value.length]), 1)])), 64))]), o[9] || (o[9] = s("div", { class: "h-[1px] bg-gray-200/50 dark:bg-neutral-700/50 my-2" }, null, -1)), s("div", Ce, [E(le, { name: `puri-date-${L.value}-container` }, { default: w(() => [(u(!0), v(D, null, I(R.value, (r) => (u(), v("div", { class: y(["puri-date-picker-date-p-item", _(a.value.month === 0 ? a.value.year - 1 : a.value.year, a.value.month === 0 ? 12 : a.value.month - 1, r)]), onClick: (x) => {
    L.value = "prev", B(a.value.month === 0 ? a.value.year - 1 : a.value.year, a.value.month === 0 ? 12 : a.value.month - 1, r);
  }, key: `${a.value.month === 0 ? a.value.year - 1 : a.value.year},${a.value.month === 0 ? 12 : a.value.month - 1},${r}` }, f(r), 11, Be))), 128)), (u(!0), v(D, null, I(F.value, (r) => (u(), v("div", { class: y(["puri-date-picker-date-item", _(a.value.year, a.value.month, r)]), onClick: (x) => B(a.value.year, a.value.month, r), key: `${a.value.year},${a.value.month},${r}` }, f(r), 11, De))), 128)), (u(!0), v(D, null, I(i.value, (r) => (u(), v("div", { class: y(["puri-date-picker-date-p-item", _(a.value.month === 11 ? a.value.year + 1 : a.value.year, a.value.month === 11 ? 0 : a.value.month + 1, r)]), onClick: (x) => {
    L.value = "next", B(a.value.month === 11 ? a.value.year + 1 : a.value.year, a.value.month === 11 ? 0 : a.value.month + 1, r);
  }, key: `${a.value.month === 11 ? a.value.year + 1 : a.value.year},${a.value.month === 11 ? 0 : a.value.month + 1},${r}` }, f(r), 11, Ie))), 128))]), _: 1 }, 8, ["name"])])]))]), _: 1 }));
} }), [["__scopeId", "data-v-fe728508"]]);
z.install = (e) => {
  e.component(z.__name, z);
};
const $e = { class: "puri-list-indicator-container" }, P = C(g({ __name: "ItemIndicator", props: { length: {}, value: {} }, setup(e) {
  const t = e;
  return (l, c) => (u(), v("div", $e, [(u(!0), v(D, null, I(t.length, (d) => (u(), v("div", { class: y(["puri-list-indecator-item", d - 1 === t.value ? "active" : void 0]) }, null, 2))), 256))]));
} }), [["__scopeId", "data-v-5c86557e"]]);
P.install = (e) => {
  e.component(P.__name, P);
};
const Ve = { key: 0, class: "puri-list-item-icon" }, Te = { class: "puri-list-item-title" }, U = C(g({ __name: "listItem", props: { prependIcon: {}, title: {}, compact: { type: Boolean }, clickable: { type: Boolean } }, setup(e) {
  const t = e;
  return (l, c) => (u(), v("div", { class: y(["puri-list-item", [t.compact ? "compact" : "", l.clickable ? "puri-clickable" : ""]]) }, [t.prependIcon ? (u(), v("div", Ve, [s("i", { class: y(["bi", t.prependIcon]) }, null, 2)])) : k("", !0), s("div", Te, f(t.title), 1), s("div", null, [h(l.$slots, "append", {}, void 0, !0)])], 2));
} }), [["__scopeId", "data-v-77530347"]]);
U.install = (e) => {
  e.component(U.__name, U);
};
const Le = ["src"], Y = g({ __name: "mainView", props: { background: {} }, setup(e) {
  const t = e;
  return (l, c) => (u(), v("div", { class: y(["puri-screen", [t.background ? "bannered" : ""]]) }, [t.background ? (u(), v("img", { key: 0, class: "puri-banner-img", src: l.background }, null, 8, Le)) : k("", !0), h(l.$slots, "default")], 2));
} });
Y.install = (e) => {
  e.component(Y.__name, Y);
};
const Ee = { class: "puri-screen-navbar-container" }, Se = ["onClick"], G = C(g({ __name: "navBar", props: H({ col: {}, items: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(e) {
  const t = T(e, "modelValue"), l = e;
  return (c, d) => (u(), v("div", Ee, [s("nav", { class: "puri-screen-navbar", style: ne(`grid-template-columns: repeat(${c.col || c.items.length}, minmax(0, 1fr));`) }, [(u(!0), v(D, null, I(l.items, (n) => (u(), v("button", { class: y(n.name === t.value ? "active" : void 0), onClick: (m) => {
    t.value = n.name, n.clickHander(n.name);
  } }, [s("i", { class: y(["bi", n.icon]) }, null, 2), s("span", null, f(n.title), 1)], 10, Se))), 256))], 4)]));
} }), [["__scopeId", "data-v-c0dc0e9f"]]);
G.install = (e) => {
  e.component(G.__name, G);
};
const Me = { class: "group" }, He = { key: 0, class: "puri-textfield-label" }, Ae = { class: "puri-textfield-container group" }, Fe = { class: "flex-grow" }, qe = ["type", "autocomplete", "placeholder"], j = C(g({ __name: "textField", props: H({ type: { type: String, default: "text" }, label: { type: String, required: !1 }, placeholder: { type: String, required: !1 }, prependIcon: { type: String, required: !1 }, cleaner: { type: Boolean, default: !1 }, validation: { type: Array, required: !1 }, autoComplete: { type: String, default: "off" } }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(e) {
  const t = T(e, "modelValue"), l = e;
  return (c, d) => (u(), v("div", Me, [l.label ? (u(), v("div", He, f(l.label), 1)) : k("", !0), s("div", Ae, [l.prependIcon ? (u(), v("i", { key: 0, class: y(["bi puri-textfield-icon", l.prependIcon]) }, null, 2)) : k("", !0), h(c.$slots, "prepend", {}, void 0, !0), s("div", Fe, [oe(s("input", { type: e.type, autocomplete: l.autoComplete, "onUpdate:modelValue": d[0] || (d[0] = (n) => t.value = n), class: "puri-textfield-input w-full", placeholder: e.placeholder }, null, 8, qe), [[ie, t.value]])]), e.cleaner ? (u(), v("button", { key: 1, onClick: d[1] || (d[1] = (n) => t.value = ""), class: "puri-textfield-cleaner" }, d[2] || (d[2] = [s("i", { class: "bi bi-x-circle-fill text-xs text-gray-400 dark:text-neutral-500" }, null, -1)]))) : k("", !0), h(c.$slots, "append", {}, void 0, !0)])]));
} }), [["__scopeId", "data-v-35411244"]]);
j.install = (e) => {
  e.component(j.__name, j);
};
const J = C(g({ __name: "titlebar", props: { native: { type: Boolean }, titleAutoHide: { type: Boolean } }, setup(e) {
  const t = e, l = b();
  let c;
  return re(() => {
    c = window.addEventListener("scroll", function() {
      var d, n;
      window.scrollY > 10 ? (d = l.value) == null || d.classList.add("puri-titlebar-float") : (n = l.value) == null || n.classList.remove("puri-titlebar-float");
    });
  }), ue(() => {
    window.removeEventListener("scroll", c);
  }), (d, n) => (u(), v("div", { ref_key: "titlebar", ref: l, class: y(["puri-titlebar", [t.native ? "mt-8" : "mt-0", t.titleAutoHide ? "puri-titlebar-hide" : ""]]) }, [h(d.$slots, "default", {}, void 0, !0)], 2));
} }), [["__scopeId", "data-v-bc492f9f"]]);
J.install = (e) => {
  e.component(J.__name, J);
};
const Ne = [q, V, S, N, O, W, z, M, P, U, Y, G, j, J], ze = function(e) {
  Ne.forEach((t) => e.component(`Puri${t.__name}`, t));
};
export {
  q as Badge,
  V as Button,
  S as Card,
  N as Collapse,
  O as ConfirmDialog,
  W as Container,
  z as DatePicker,
  M as Dialog,
  P as ItemIndicator,
  U as ListItem,
  Y as MainView,
  G as NavBar,
  j as TextField,
  J as Titlebar,
  ze as default
};
//# sourceMappingURL=index.js.map
