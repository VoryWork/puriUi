import { defineComponent as i, mergeModels as r, useModel as n, openBlock as s, createBlock as m, Transition as u, withCtx as c, createElementBlock as p, createElementVNode as d, normalizeClass as g, renderSlot as v, createCommentVNode as f } from "vue";
const k = { key: 0, class: "puri-dialog" }, V = i({ __name: "dialog", props: r({ maxWidth: {} }, { modelValue: { type: Boolean }, modelModifiers: {} }), emits: ["update:modelValue"], setup(e) {
  const a = n(e, "modelValue"), o = e;
  return (t, l) => (s(), m(u, { name: "puri-dialoger" }, { default: c(() => [a.value ? (s(), p("div", k, [d("div", { class: "puri-dialog-background", onClick: l[0] || (l[0] = (x) => a.value = !1) }), d("div", { class: g(["puri-dialog-container", o.maxWidth ? `max-w-[${o.maxWidth}]` : void 0]) }, [v(t.$slots, "default", {}, void 0, !0)], 2)])) : f("", !0)]), _: 3 }));
} });
export {
  V as default
};
//# sourceMappingURL=dialog.vue2.js.map
