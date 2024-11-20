import { defineComponent as f, useModel as g, ref as s, openBlock as h, createBlock as B, Transition as E, withCtx as L, renderSlot as x, createCommentVNode as H } from "vue";
const T = f({ __name: "collapse", props: { modelValue: { type: Boolean }, modelModifiers: {} }, emits: ["update:modelValue"], setup(d) {
  const r = g(d, "modelValue"), n = s(""), o = s(""), a = s("");
  function v(e) {
    o.value = e.style.paddingBottom, n.value = e.style.paddingTop, e.style.paddingTop = "0", e.style.paddingBottom = "0", e.style.maxHeight = "0";
  }
  function u(e, l) {
    a.value = e.style.overflow;
    let t = e.scrollHeight;
    e.style.maxHeight = t > 0 ? t + "px" : "0", e.style.paddingTop = n.value, e.style.paddingBottom = o.value, e.style.overflow = "hidden";
    let i = function() {
      l(), e.removeEventListener("transitionend", i, !1), e.removeEventListener("transitioncancel", i, !1);
    };
    e.addEventListener("transitionend", i, !1), e.addEventListener("transitioncancel", i, !1);
  }
  function p(e) {
    e.style.maxHeight = "", e.style.overflow = a.value;
  }
  function m(e) {
    o.value = e.style.paddingBottom, n.value = e.style.paddingTop, a.value = e.style.overflow, e.style.maxHeight = e.scrollHeight + "px", e.style.overflow = "hidden";
  }
  function c(e, l) {
    e.scrollHeight !== 0 && (e.style.maxHeight = "0", e.style.paddingBottom = "0", e.style.paddingTop = "0");
    let t = function() {
      l(), e.removeEventListener("transitionend", t, !1), e.removeEventListener("transitioncancel", t, !1);
    };
    e.addEventListener("transitionend", t, !1), e.addEventListener("transitioncancel", t, !1);
  }
  function y(e) {
    e.style.maxHeight = "", e.style.overflow = a.value, e.style.paddingBottom = o.value, e.style.paddingTop = n.value, a.value = o.value = n.value = "";
  }
  return (e, l) => (h(), B(E, { onBeforeEnter: v, onEnter: u, onAfterEnter: p, onBeforeLeave: m, onLeave: c, onAfterLeave: y, name: "puri-collapse-transition" }, { default: L(() => [r.value ? x(e.$slots, "default", { key: 0 }, void 0, !0) : H("", !0)]), _: 3 }));
} });
export {
  T as default
};
//# sourceMappingURL=collapse.vue2.js.map
