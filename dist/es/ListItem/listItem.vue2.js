import { defineComponent as c, openBlock as a, createElementBlock as i, normalizeClass as o, createElementVNode as t, createCommentVNode as n, toDisplayString as p, renderSlot as r } from "vue";
const m = { key: 0, class: "puri-list-item-icon" }, d = { class: "puri-list-item-title" }, v = c({ __name: "listItem", props: { prependIcon: {}, title: {}, compact: { type: Boolean }, clickable: { type: Boolean } }, setup(s) {
  const e = s;
  return (l, u) => (a(), i("div", { class: o(["puri-list-item", [e.compact ? "compact" : "", l.clickable ? "puri-clickable" : ""]]) }, [e.prependIcon ? (a(), i("div", m, [t("i", { class: o(["bi", e.prependIcon]) }, null, 2)])) : n("", !0), t("div", d, p(e.title), 1), t("div", null, [r(l.$slots, "append", {}, void 0, !0)])], 2));
} });
export {
  v as default
};
//# sourceMappingURL=listItem.vue2.js.map
