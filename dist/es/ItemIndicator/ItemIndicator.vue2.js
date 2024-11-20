import { defineComponent as i, openBlock as e, createElementBlock as t, Fragment as l, renderList as o, normalizeClass as r } from "vue";
const c = { class: "puri-list-indicator-container" }, u = i({ __name: "ItemIndicator", props: { length: {}, value: {} }, setup(n) {
  const a = n;
  return (d, m) => (e(), t("div", c, [(e(!0), t(l, null, o(a.length, (s) => (e(), t("div", { class: r(["puri-list-indecator-item", s - 1 === a.value ? "active" : void 0]) }, null, 2))), 256))]));
} });
export {
  u as default
};
//# sourceMappingURL=ItemIndicator.vue2.js.map
