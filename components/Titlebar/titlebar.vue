<template>
  <Transition name="titlebar-fade">
    <header v-if="visiable" ref="titlebar" class="puri-titlebar" :class="[props.native ? 'pt-8 h-20' : 'pt-0 h-12']">
      <slot></slot>
    </header>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{ native?: boolean; titleAutoHide?: boolean }>();
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
const titlebar = ref<HTMLElement>();
const visiable = ref(!props.titleAutoHide);
let scListener: any;
watch(props, (v) => {
  visiable.value = !v.titleAutoHide;
});
onMounted(() => {
  scListener = window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      titlebar.value?.classList.add("puri-titlebar-float");
      visiable.value = true;
    } else {
      titlebar.value?.classList.remove("puri-titlebar-float");
      if (props.titleAutoHide) {
        visiable.value = false;
      }
    }
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", scListener);
});
</script>

<style scoped>
.puri-titlebar {
  @apply fixed flex flex-row w-screen top-0 items-center text-lg font-medium z-20 justify-center transition-all backdrop-blur-md border-b border-gray-300/0 dark:border-neutral-700/0;
}
.puri-titlebar-float {
  @apply opacity-100 dark:border-neutral-700/20 border-gray-400/20;
}
.titlebar-fade-enter-active,
.titlebar-fade-leave-active {
  @apply transition-all;
}

.titlebar-fade-enter-from,
.titlebar-fade-leave-to {
  opacity: 0;
}
</style>
