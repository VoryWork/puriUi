<template>
  <div
    class="puri-progress-container"
    :class="{
      'default-color': !props.customColor,
      'puri-progress-filled': props.variant === 'filled',
      'puri-progress-text': props.variant === 'text',
    }">
    <div class="puri-progress-container-indicator flex-0" :class="indicatorClass" :style="{ width: percentage }">
      <span v-if="props.variant === 'text' && (model || 0) >= 0.5">{{ props.label }}</span>
    </div>
    <div class="puri-progress-container-indicator-space" :class="indicatorSpaceClass">
      <span v-if="props.variant === 'text' && (model || 0) < 0.5">{{ props.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const model = defineModel<number>();
const props = defineProps<{
  variant?: "line" | "filled" | "text";
  linearClass?: string;
  label?: string;
  customColor?: boolean;
  indicatorClass?: string;
  indicatorSpaceClass?: string;
}>();
const percentage = computed(() => {
  return `${Math.max(Math.min((model.value || 0) * 100, 100), 0).toFixed(2)}%`;
});
</script>

<style>
.puri-progress-container {
  @apply flex flex-row rounded-md leading-none font-medium text-xs overflow-hidden h-1;
}
.puri-progress-container.default-color {
  @apply bg-gray-300 dark:bg-neutral-800;
}
.puri-progress-container.puri-progress-filled {
  @apply h-2;
}
.puri-progress-container.puri-progress-text {
  @apply h-6;
}
.puri-progress-container-indicator {
  @apply h-full transition-all flex flex-row items-center justify-center bg-primary-500 text-center dark:bg-primary-400 text-white flex-grow-0;
}
.puri-progress-container.default-color .puri-progress-container-indicator {
  @apply bg-primary-500 text-center dark:bg-primary-400 text-white;
}
.puri-progress-container-indicator-space {
  @apply h-full transition-all flex flex-row items-center dark:text-neutral-400 text-gray-600 justify-center flex-grow;
}
</style>
