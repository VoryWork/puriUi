import { defineComponent as i, ref as n, onMounted as s, onBeforeUnmount as d, openBlock as u, createElementBlock as p, normalizeClass as c, renderSlot as f } from "vue";
const v = i({ __name: "titlebar", props: { native: { type: Boolean }, titleAutoHide: { type: Boolean } }, setup(r) {
  const a = r, t = n();
  let l;
  return s(() => {
    l = window.addEventListener("scroll", function() {
      var e, o;
      window.scrollY > 10 ? (e = t.value) == null || e.classList.add("puri-titlebar-float") : (o = t.value) == null || o.classList.remove("puri-titlebar-float");
    });
  }), d(() => {
    window.removeEventListener("scroll", l);
  }), (e, o) => (u(), p("div", { ref_key: "titlebar", ref: t, class: c(["puri-titlebar", [a.native ? "mt-8" : "mt-0", a.titleAutoHide ? "puri-titlebar-hide" : ""]]) }, [f(e.$slots, "default", {}, void 0, !0)], 2));
} });
export {
  v as default
};
//# sourceMappingURL=titlebar.vue2.js.map
