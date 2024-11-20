<template>
  <Transition
    @before-enter="collapseBeforeEnter"
    @enter="collapseEnter"
    @after-enter="collapseAfterEnter"
    @before-leave="collapseBeforeLeave"
    @leave="collapseLeave"
    @after-leave="collapseAfterLeave"
    name="puri-collapse-transition">
    <slot v-if="model"></slot>
  </Transition>
</template>

<script setup lang="ts">
import { ref, type RendererElement } from "vue";

const model = defineModel<boolean>();
const oldPaddingTop = ref(""),
  oldPaddingBottom = ref(""),
  oldOverflow = ref("");
function collapseBeforeEnter(el: RendererElement) {
  // console.log('11, collapseBeforeEnter');
  oldPaddingBottom.value = el.style.paddingBottom;
  oldPaddingTop.value = el.style.paddingTop;
  // 过渡效果开始前设置元素的maxHeight为0，让元素maxHeight有一个初始值
  el.style.paddingTop = "0";
  el.style.paddingBottom = "0";
  el.style.maxHeight = "0";
}
function collapseEnter(el: RendererElement, done: () => void) {
  // console.log('22, collapseEnter');
  //
  oldOverflow.value = el.style.overflow;
  let elHeight = el.scrollHeight;
  // 过渡效果进入后将元素的maxHeight设置为元素本身的高度，将元素maxHeight设置为auto不会有过渡效果
  if (elHeight > 0) {
    el.style.maxHeight = elHeight + "px";
  } else {
    el.style.maxHeight = "0";
  }
  el.style.paddingTop = oldPaddingTop.value;
  el.style.paddingBottom = oldPaddingBottom.value;

  el.style.overflow = "hidden";
  // done();
  let onTransitionDone = function () {
    done();
    // console.log('enter onTransitionDone');
    el.removeEventListener("transitionend", onTransitionDone, false);
    el.removeEventListener("transitioncancel", onTransitionDone, false);
  };
  // 绑定元素的transition完成事件，在transition完成后立即完成vue的过度动效
  el.addEventListener("transitionend", onTransitionDone, false);
  el.addEventListener("transitioncancel", onTransitionDone, false);
}
function collapseAfterEnter(el: RendererElement) {
  // console.log('33, collapseAfterEnter');
  // 过渡效果完成后恢复元素的maxHeight
  el.style.maxHeight = "";
  el.style.overflow = oldOverflow.value;
}

function collapseBeforeLeave(el: RendererElement) {
  // console.log('44, collapseBeforeLeave', el.scrollHeight);

  oldPaddingBottom.value = el.style.paddingBottom;
  oldPaddingTop.value = el.style.paddingTop;
  oldOverflow.value = el.style.overflow;

  el.style.maxHeight = el.scrollHeight + "px";
  el.style.overflow = "hidden";
}
function collapseLeave(el: RendererElement, done: () => void) {
  // console.log('55, collapseLeave', el.scrollHeight);

  if (el.scrollHeight !== 0) {
    el.style.maxHeight = "0";
    el.style.paddingBottom = "0";
    el.style.paddingTop = "0";
  }
  // done();
  let onTransitionDone = function () {
    done();
    // console.log('leave onTransitionDone');
    el.removeEventListener("transitionend", onTransitionDone, false);
    el.removeEventListener("transitioncancel", onTransitionDone, false);
  };
  // 绑定元素的transition完成事件，在transition完成后立即完成vue的过度动效
  el.addEventListener("transitionend", onTransitionDone, false);
  el.addEventListener("transitioncancel", onTransitionDone, false);
}
function collapseAfterLeave(el: RendererElement) {
  // console.log('66, collapseAfterLeave');
  el.style.maxHeight = "";
  el.style.overflow = oldOverflow.value;
  el.style.paddingBottom = oldPaddingBottom.value;
  el.style.paddingTop = oldPaddingTop.value;

  oldOverflow.value = oldPaddingBottom.value = oldPaddingTop.value = "";
}
</script>

<style scoped>
.puri-collapse-transition-enter-active,
.puri-collapse-transition-leave-active {
  @apply transition-all duration-500 overflow-hidden;
}
</style>
