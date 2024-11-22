<template>
  <span class="puri-badge" :class="[props.clickable ? 'puri-clickable' : '', props.customColor ? '' : props.color]">
    {{ props.text }}
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  clickable?: boolean;
  text?: string;
  customColor?: boolean;
  color: "negative" | "warning" | "positive" | "error";
}>();
</script>

<style>
.puri-badge.negative {
  @apply bg-gray-500/30 text-gray-600 dark:text-neutral-400;
}
.puri-badge.warning {
  @apply bg-amber-500/30 text-amber-600 dark:text-amber-400;
}
.puri-badge.positive {
  @apply bg-green-500/30 text-green-600 dark:text-green-400;
}
.puri-badge.error {
  @apply bg-rose-500/30 text-rose-600 dark:text-rose-400;
}
</style>
