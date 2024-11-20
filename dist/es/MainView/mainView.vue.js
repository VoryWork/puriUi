import { defineComponent as r, openBlock as n, createElementBlock as s, normalizeClass as c, createCommentVNode as t, renderSlot as l } from "vue";
const u = ["src"], i = r({ __name: "mainView", props: { background: {} }, setup(o) {
  const e = o;
  return (a, d) => (n(), s("div", { class: c(["puri-screen", [e.background ? "bannered" : ""]]) }, [e.background ? (n(), s("img", { key: 0, class: "puri-banner-img", src: a.background }, null, 8, u)) : t("", !0), l(a.$slots, "default")], 2));
} });
export {
  i as default
};
//# sourceMappingURL=mainView.vue.js.map
