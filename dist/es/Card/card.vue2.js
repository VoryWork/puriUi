import { defineComponent as r, openBlock as o, createElementBlock as a, normalizeClass as i, createElementVNode as c, toDisplayString as d, renderSlot as s, createCommentVNode as n } from "vue";
const p = { key: 0, class: "puri-row-center relative p-4" }, m = { class: "puri-card-title" }, f = r({ __name: "card", props: { title: {}, customColor: { type: Boolean } }, setup(l) {
  const e = l;
  return (t, u) => (o(), a("div", { class: i(["puri-card", [e.customColor ? "" : "default-color"]]) }, [e.title ? (o(), a("div", p, [c("div", m, d(e.title), 1), s(t.$slots, "title-append", {}, void 0, !0)])) : n("", !0), s(t.$slots, "default", {}, void 0, !0)], 2));
} });
export {
  f as default
};
//# sourceMappingURL=card.vue2.js.map
