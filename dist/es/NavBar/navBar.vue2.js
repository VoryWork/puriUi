import { defineComponent as m, mergeModels as c, useModel as u, openBlock as a, createElementBlock as l, createElementVNode as s, normalizeStyle as d, Fragment as p, renderList as v, normalizeClass as i, toDisplayString as f } from "vue";
const g = { class: "puri-screen-navbar-container" }, k = ["onClick"], y = m({ __name: "navBar", props: c({ col: {}, items: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(n) {
  const t = u(n, "modelValue"), r = n;
  return (o, b) => (a(), l("div", g, [s("nav", { class: "puri-screen-navbar", style: d(`grid-template-columns: repeat(${o.col || o.items.length}, minmax(0, 1fr));`) }, [(a(!0), l(p, null, v(r.items, (e) => (a(), l("button", { class: i(e.name === t.value ? "active" : void 0), onClick: (C) => {
    t.value = e.name, e.clickHander(e.name);
  } }, [s("i", { class: i(["bi", e.icon]) }, null, 2), s("span", null, f(e.title), 1)], 10, k))), 256))], 4)]));
} });
export {
  y as default
};
//# sourceMappingURL=navBar.vue2.js.map
