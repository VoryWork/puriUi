import { defineComponent as t, openBlock as l, createElementBlock as s, normalizeClass as r, createTextVNode as c, toDisplayString as n, renderSlot as p } from "vue";
const u = t({ __name: "Badge", props: { clickable: { type: Boolean }, text: {}, customColor: { type: Boolean }, color: {} }, setup(o) {
  const e = o;
  return (a, i) => (l(), s("span", { class: r(["puri-badge", [e.clickable ? "puri-clickable" : "", e.customColor ? "" : e.color]]) }, [c(n(e.text) + " ", 1), p(a.$slots, "default")], 2));
} });
export {
  u as default
};
//# sourceMappingURL=Badge.vue.js.map
