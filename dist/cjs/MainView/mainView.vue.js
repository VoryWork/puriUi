"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),t=["src"],l=e.defineComponent({__name:"mainView",props:{background:{}},setup(o){const n=o;return(r,a)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["puri-screen",[n.background?"bannered":""]])},[n.background?(e.openBlock(),e.createElementBlock("img",{key:0,class:"puri-banner-img",src:r.background},null,8,t)):e.createCommentVNode("",!0),e.renderSlot(r.$slots,"default")],2))}});exports.default=l;
//# sourceMappingURL=mainView.vue.js.map
