<template>
  <button
    class="puri-button"
    :class="[
      props.customColor ? '' : 'default-color',
      { small: 'puri-button-small', large: 'puri-button-large', 'normal': '' }[props.size ?? 'normal'],
      props.solo ? 'puri-button-solo' : '',
    ]">
    <slot name="prepend"></slot>
    <i v-if="props.prependIcon" class="bi" :class="props.prependIcon"></i>

    <slot></slot>
    <i v-if="props.appendIcon" class="bi" :class="props.appendIcon"></i>
    <slot name="append"></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  prependIcon?: string;
  appendIcon?: string;
  customColor?: boolean;
  size?: "small" | "large";
  solo?: boolean;
}>();
</script>

<style>
.puri-button {
  @apply py-1 leading-normal flex flex-row items-center text-sm active:scale-95 transition-all;
}
.puri-button.default-color {
  @apply text-gray-500 dark:text-neutral-400;
}
.puri-button.puri-button-solo {
  @apply text-center px-2 block w-full rounded-md;
}
.puri-button.puri-button-solo.default-color {
  @apply text-gray-800 bg-gray-200 dark:bg-neutral-800 dark:text-neutral-400;
}
.puri-button.puri-button-small {
  @apply text-xs;
}
.puri-button.puri-button-large {
  @apply text-base rounded-lg px-2 py-1.5;
}
.puri-button.puri-button-large-button-solo {
  @apply px-3;
}
.puri-button i {
  @apply text-xs;
}
</style>
