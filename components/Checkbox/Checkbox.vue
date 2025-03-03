<template>
  <div class="puri-checkbox">
    <div class="puri-checkbox-icon-container" @click="model = !model">
      <div class="puri-checkbox-icon" :class="{ selected: model }">
        <i v-if="model" class="bi bi-check-lg leading-none text-white/100"></i>
      </div>
    </div>
    <slot name="label">
      <div class="puri-checkbox-label" @click="model = !model">{{ props.label }}</div>
    </slot>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<boolean>();
const props = defineProps<{ label?: string }>();
</script>

<style>
.puri-checkbox {
  @apply flex flex-row items-center space-x-0.5 select-none cursor-pointer;
}
.puri-checkbox-icon-container {
  @apply w-10 h-10 rounded-full transition-all hover:bg-gray-500/20 dark:hover:bg-neutral-500/20 duration-75 flex flex-row items-center justify-center leading-none cursor-pointer;
}
.puri-checkbox-icon {
  @apply w-5 h-5 rounded appearance-none bg-transparent leading-none cursor-pointer;
  @apply transition-all duration-75;
  @apply flex flex-row items-center justify-center;
  @apply border border-gray-400 dark:border-neutral-600;
}
.puri-checkbox-icon.selected {
  @apply bg-primary-500;
}
.puri-checkbox-label {
  @apply text-gray-700 dark:text-neutral-300;
}
</style>
