"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"Badge",props:{clickable:{type:Boolean},text:{},customColor:{type:Boolean},color:{}},setup(t){const o=t;return(l,a)=>(e.openBlock(),e.createElementBlock("span",{class:e.normalizeClass(["puri-badge",[o.clickable?"puri-clickable":"",o.customColor?"":o.color]])},[e.createTextVNode(e.toDisplayString(o.text)+" ",1),e.renderSlot(l.$slots,"default")],2))}});exports.default=r;
//# sourceMappingURL=Badge.vue.js.map
