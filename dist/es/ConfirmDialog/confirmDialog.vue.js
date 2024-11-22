import { defineComponent as p, mergeModels as C, useModel as x, openBlock as c, createBlock as V, unref as m, withCtx as t, createVNode as r, createElementBlock as _, toDisplayString as n, createCommentVNode as k, createElementVNode as d, renderSlot as v, createTextVNode as u, normalizeClass as g } from "vue";
import "../Dialog/index.js";
import "../Card/index.js";
import f from "../Button/Button.vue.js";
/* empty css                    */
import h from "../Dialog/dialog.vue.js";
import y from "../Card/card.vue.js";
const T = { key: 0, class: "puri-confirmer-title" }, B = { class: "puri-confirmer-content" }, N = { class: "puri-confirmer-actions" }, j = p({ __name: "confirmDialog", props: C({ maxWidth: {}, title: {}, confirmText: {}, cancelText: {}, confirmColorClass: {}, onConfirm: { type: Function }, onCancel: { type: Function } }, { modelValue: { type: Boolean }, modelModifiers: {} }), emits: ["update:modelValue"], setup(i) {
  const s = x(i, "modelValue"), a = i;
  return (e, o) => (c(), V(m(h), { "max-width": e.maxWidth, modelValue: s.value, "onUpdate:modelValue": o[2] || (o[2] = (l) => s.value = l) }, { default: t(() => [r(m(y), { class: "puri-confirmer" }, { default: t(() => [a.title ? (c(), _("div", T, n(a.title), 1)) : k("", !0), d("p", B, [v(e.$slots, "default")]), d("div", N, [r(f, { "custom-color": "", onClick: o[0] || (o[0] = (l) => e.onCancel ? e.onCancel() : void 0), class: "puri-confirmer-actions-cancel" }, { default: t(() => [u(n(a.cancelText || "取消"), 1)]), _: 1 }), r(f, { onClick: o[1] || (o[1] = (l) => e.onConfirm ? e.onConfirm() : void 0), class: g(["px-2", a.confirmColorClass ?? "text-green-500 dark:text-green-400"]), "custom-color": "" }, { default: t(() => [u(n(a.confirmText || "确认"), 1)]), _: 1 }, 8, ["class"])])]), _: 3 })]), _: 3 }, 8, ["max-width", "modelValue"]));
} });
export {
  j as default
};
//# sourceMappingURL=confirmDialog.vue.js.map
