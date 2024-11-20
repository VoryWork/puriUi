import { defineComponent as V, mergeModels as I, useModel as _, ref as m, computed as b, openBlock as v, createBlock as F, Transition as E, withCtx as S, createElementBlock as i, createElementVNode as u, toDisplayString as c, Fragment as d, renderList as p, normalizeClass as g, createVNode as Y, TransitionGroup as q } from "vue";
const z = { key: 0 }, G = { class: "puri-row-center" }, N = { class: "flex-grow text-center active:scale-95 transition-all" }, P = { class: "puri-date-picker-month-container" }, j = ["onClick"], H = { key: 1 }, J = { class: "puri-row-center" }, K = { class: "puri-date-picker-date-title-container" }, L = { class: "puri-date-picker-date-item" }, Q = { class: "puri-date-picker-date-container" }, R = ["onClick"], U = ["onClick"], W = ["onClick"], ee = V({ __name: "datePicker", props: I({ range: { type: Boolean }, month: { type: Boolean }, firstDay: {} }, { modelValue: { required: !0 }, modelModifiers: {} }), emits: ["update:modelValue"], setup(C) {
  const o = _(C, "modelValue"), y = C, k = m(new Date(Array.isArray(o.value) ? o.value[0] : o.value)), f = m(new Date(Array.isArray(o.value) ? o.value[1] : o.value)), l = m({ year: k.value.getFullYear(), month: k.value.getMonth(), day: k.value.getDate() }), r = m({ year: f.value.getFullYear(), month: f.value.getMonth(), day: f.value.getDate() }), e = m({ year: l.value.year, month: l.value.month }), $ = m(["日", "一", "二", "三", "四", "五", "六"]), T = b(() => new Date(e.value.year, e.value.month + 1, 0).getDate()), A = b(() => {
    const n = new Date(e.value.year, e.value.month, 0), a = (n.getDay() + 1 - (y.firstDay ?? 0)) % 7 + (x.value.length + T.value <= 35 ? 7 : 0);
    return new Array(a).fill("").map((t, s) => n.getDate() - a + 1 + s);
  }), x = b(() => {
    const n = new Date(e.value.year, e.value.month + 1, 0), a = 7 + ((y.firstDay ?? 0) - n.getDay() - 1) % 7;
    return new Array(a).fill("").map((t, s) => 1 + s);
  });
  function w(n, a, t) {
    y.range ? l.value.year === r.value.year && l.value.month === r.value.month && l.value.day === r.value.day ? (new Date(l.value.year, l.value.month, l.value.day).getTime() < new Date(n, a, t).getTime() ? r.value = { year: n, month: a, day: t } : l.value = { year: n, month: a, day: t }, o.value = [new Date(l.value.year, l.value.month, l.value.day).toISOString().slice(0, 10), new Date(r.value.year, r.value.month, r.value.day).toISOString().slice(0, 10)]) : (l.value = { year: n, month: a, day: t }, r.value = { year: n, month: a, day: t }, o.value = [new Date(n, a, t).toISOString().slice(0, 10)]) : (e.value = { year: n, month: a }, l.value = { year: n, month: a, day: t }, o.value = new Date(n, a, t).toISOString().slice(0, 10));
  }
  function D(n, a, t) {
    if (y.range) {
      if (l.value.year === n && l.value.month === a && l.value.day === t) return "range-start";
      if (r.value.year === n && r.value.month === a && r.value.day === t) return "range-end";
      if (new Date(l.value.year, l.value.month, l.value.day).getTime() < new Date(n, a, t).getTime() && new Date(r.value.year, r.value.month, r.value.day).getTime() > new Date(n, a, t).getTime()) return "range";
    } else if (l.value.year === n && l.value.month === a && l.value.day === t) return "selected";
    return "";
  }
  function B(n, a) {
    if (y.range) {
      if (l.value.year === n && l.value.month === a && l.value.month === r.value.month && l.value.year === r.value.year) return "selected";
      if (l.value.year === n && l.value.month === a) return "range-start";
      if (r.value.year === n && r.value.month === a) return "range-end";
      if (new Date(l.value.year, l.value.month).getTime() < new Date(n, a).getTime() && new Date(r.value.year, r.value.month).getTime() > new Date(n, a).getTime()) return "range";
    } else if (l.value.year === n && l.value.month === a) return "selected";
  }
  const h = m("prev");
  function M() {
    h.value = "prev", e.value = { year: e.value.month === 0 ? e.value.year - 1 : e.value.year, month: e.value.month === 0 ? 11 : e.value.month - 1 };
  }
  function O() {
    h.value = "next", e.value = { year: e.value.month === 11 ? e.value.year + 1 : e.value.year, month: e.value.month === 11 ? 0 : e.value.month + 1 };
  }
  return (n, a) => (v(), F(E, null, { default: S(() => [e.value.month === -1 ? (v(), i("div", z, [u("div", G, [u("button", { class: "puri-date-switch", onClick: a[0] || (a[0] = (t) => e.value.year--) }, a[3] || (a[3] = [u("i", { class: "bi bi-chevron-compact-left" }, null, -1)])), u("button", N, c(`${e.value.year}年`), 1), u("button", { class: "puri-date-switch", onClick: a[1] || (a[1] = (t) => e.value.year++) }, a[4] || (a[4] = [u("i", { class: "bi bi-chevron-compact-right" }, null, -1)]))]), a[5] || (a[5] = u("div", { class: "puri-date-picker-date-title-container" }, [u("div", { class: "puri-date-picker-date-item col-span-7" }, "选择月份")], -1)), a[6] || (a[6] = u("div", { class: "h-[1px] bg-gray-200/50 dark:bg-neutral-700/50 my-2" }, null, -1)), u("div", P, [(v(), i(d, null, p(["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], (t, s) => u("div", { class: g(["puri-date-picker-month-item", B(e.value.year, s)]), onClick: (X) => e.value.month = s }, c(t), 11, j)), 64))])])) : (v(), i("div", H, [u("div", J, [u("button", { class: "puri-date-switch", onClick: M }, a[7] || (a[7] = [u("i", { class: "bi bi-chevron-compact-left" }, null, -1)])), u("button", { onClick: a[2] || (a[2] = (t) => e.value.month = -1), class: "flex-grow text-center active:scale-95 transition-all" }, c(`${e.value.year}年${e.value.month + 1}月`), 1), u("button", { class: "puri-date-switch", onClick: O }, a[8] || (a[8] = [u("i", { class: "bi bi-chevron-compact-right" }, null, -1)]))]), u("div", K, [(v(), i(d, null, p(7, (t) => u("div", null, [u("div", L, c($.value[(t + (y.firstDay ?? 0) - 1) % $.value.length]), 1)])), 64))]), a[9] || (a[9] = u("div", { class: "h-[1px] bg-gray-200/50 dark:bg-neutral-700/50 my-2" }, null, -1)), u("div", Q, [Y(q, { name: `puri-date-${h.value}-container` }, { default: S(() => [(v(!0), i(d, null, p(A.value, (t) => (v(), i("div", { class: g(["puri-date-picker-date-p-item", D(e.value.month === 0 ? e.value.year - 1 : e.value.year, e.value.month === 0 ? 12 : e.value.month - 1, t)]), onClick: (s) => {
    h.value = "prev", w(e.value.month === 0 ? e.value.year - 1 : e.value.year, e.value.month === 0 ? 12 : e.value.month - 1, t);
  }, key: `${e.value.month === 0 ? e.value.year - 1 : e.value.year},${e.value.month === 0 ? 12 : e.value.month - 1},${t}` }, c(t), 11, R))), 128)), (v(!0), i(d, null, p(T.value, (t) => (v(), i("div", { class: g(["puri-date-picker-date-item", D(e.value.year, e.value.month, t)]), onClick: (s) => w(e.value.year, e.value.month, t), key: `${e.value.year},${e.value.month},${t}` }, c(t), 11, U))), 128)), (v(!0), i(d, null, p(x.value, (t) => (v(), i("div", { class: g(["puri-date-picker-date-p-item", D(e.value.month === 11 ? e.value.year + 1 : e.value.year, e.value.month === 11 ? 0 : e.value.month + 1, t)]), onClick: (s) => {
    h.value = "next", w(e.value.month === 11 ? e.value.year + 1 : e.value.year, e.value.month === 11 ? 0 : e.value.month + 1, t);
  }, key: `${e.value.month === 11 ? e.value.year + 1 : e.value.year},${e.value.month === 11 ? 0 : e.value.month + 1},${t}` }, c(t), 11, W))), 128))]), _: 1 }, 8, ["name"])])]))]), _: 1 }));
} });
export {
  ee as default
};
//# sourceMappingURL=datePicker.vue2.js.map
