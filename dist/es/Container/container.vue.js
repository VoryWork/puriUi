import { defineComponent as t, openBlock as o, createElementBlock as r, normalizeClass as i, createVNode as l, Transition as d, withCtx as s, renderSlot as p } from "vue";
const m = t({ __name: "container", props: { native: { type: Boolean }, navbar: { type: Boolean }, titlebar: { type: Boolean }, flexCentered: { type: Boolean } }, setup(a) {
  const e = a;
  return (n, c) => (o(), r("div", { class: i(["puri-container", [e.native ? "padding-mobile" : "padding-web", e.navbar ? "padding-navbar" : "", e.titlebar ? "padding-titlebar" : "", e.flexCentered ? "puri-container-flex-centered" : ""]]) }, [l(d, { name: "puri-fade", mode: "out-in" }, { default: s(() => [p(n.$slots, "default")]), _: 3 })], 2));
} });
export {
  m as default
};
//# sourceMappingURL=container.vue.js.map
