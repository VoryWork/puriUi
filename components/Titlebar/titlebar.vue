<template>
  <header
    ref="titlebar"
    class="puri-titlebar"
    :class="[props.native ? 'mt-8' : 'mt-0', props.titleAutoHide ? 'puri-titlebar-hide' : '']">
    <slot></slot>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{native?:boolean,titleAutoHide?:boolean}>();
import { onBeforeUnmount, onMounted, ref } from "vue";
const titlebar = ref<HTMLElement>();
let scListener: any;
onMounted(() => {
  scListener = window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      titlebar.value?.classList.add("puri-titlebar-float");
    } else {
      titlebar.value?.classList.remove("puri-titlebar-float");
    }
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", scListener);
});
</script>

<style scoped>
.puri-titlebar {
  @apply fixed flex flex-row w-screen top-0 items-center text-lg font-medium z-20 h-12 justify-center transition-all backdrop-blur-md border-b border-gray-300/0 dark:border-neutral-700/0;
}
.puri-titlebar-hide {
  @apply opacity-0;
}
.puri-titlebar-float {
  @apply opacity-100 dark:border-neutral-700/20 border-gray-400/20;
}
</style>
