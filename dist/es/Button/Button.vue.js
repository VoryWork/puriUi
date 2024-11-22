import { defineComponent as r, openBlock as n, createElementBlock as l, normalizeClass as s, renderSlot as t, createCommentVNode as a } from "vue";
const d = r({ __name: "Button", props: { prependIcon: {}, appendIcon: {}, customColor: { type: Boolean }, size: {}, solo: { type: Boolean } }, setup(p) {
  const o = p;
  return (e, u) => (n(), l("button", { class: s(["puri-button", [o.customColor ? "" : "default-color", { small: "puri-button-small", large: "puri-button-large", normal: "" }[o.size ?? "normal"], o.solo ? "puri-button-solo" : ""]]) }, [t(e.$slots, "prepend"), o.prependIcon ? (n(), l("i", { key: 0, class: s(["bi", o.prependIcon]) }, null, 2)) : a("", !0), t(e.$slots, "default"), o.appendIcon ? (n(), l("i", { key: 1, class: s(["bi", o.appendIcon]) }, null, 2)) : a("", !0), t(e.$slots, "append")], 2));
} });
export {
  d as default
};
//# sourceMappingURL=Button.vue.js.map
