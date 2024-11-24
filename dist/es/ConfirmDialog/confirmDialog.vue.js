import { defineComponent as p, mergeModels as C, useModel as x, openBlock as c, createBlock as V, unref as m, withCtx as t, createVNode as n, createElementBlock as _, toDisplayString as i, createCommentVNode as k, createElementVNode as d, renderSlot as v, createTextVNode as u, normalizeClass as g } from "vue";
import "../Dialog/index.js";
import "../Card/index.js";
import f from "../Button/Button.vue.js";
/* empty css                    */
import h from "../Dialog/dialog.vue.js";
import y from "../Card/card.vue.js";
const T = { key: 0, class: "puri-confirmer-title" }, B = { class: "puri-confirmer-content" }, N = { class: "puri-confirmer-actions" }, j = p({ __name: "confirmDialog", props: C({ maxWidth: {}, title: {}, confirmText: {}, cancelText: {}, confirmColorClass: {}, onConfirm: { type: Function }, onCancel: { type: Function } }, { modelValue: { type: Boolean }, modelModifiers: {} }), emits: ["update:modelValue"], setup(s) {
  const l = x(s, "modelValue"), a = s;
  return (e, o) => (c(), V(m(h), { "max-width": e.maxWidth, modelValue: l.value, "onUpdate:modelValue": o[2] || (o[2] = (r) => l.value = r) }, { default: t(() => [n(m(y), { class: "puri-confirmer" }, { default: t(() => [a.title ? (c(), _("div", T, i(a.title), 1)) : k("", !0), d("p", B, [v(e.$slots, "default")]), d("div", N, [n(f, { "custom-color": "", onClick: o[0] || (o[0] = (r) => e.onCancel ? e.onCancel() : void 0), class: "puri-confirmer-actions-cancel" }, { default: t(() => [u(i(a.cancelText || "取消"), 1)]), _: 1 }), n(f, { onClick: o[1] || (o[1] = (r) => e.onConfirm ? e.onConfirm() : l.value = !1), class: g(["px-2", a.confirmColorClass ?? "text-green-500 dark:text-green-400"]), "custom-color": "" }, { default: t(() => [u(i(a.confirmText || "确认"), 1)]), _: 1 }, 8, ["class"])])]), _: 3 })]), _: 3 }, 8, ["max-width", "modelValue"]));
} });
export {
  j as default
};
//# sourceMappingURL=confirmDialog.vue.js.map
