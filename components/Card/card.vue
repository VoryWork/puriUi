<template>
  <div class="puri-card" :class="[props.customColor?'':'default-color']">
    <div class="puri-row-center relative p-4"  v-if="props.title">
      <div class="puri-card-title">{{ props.title }}</div>
      <slot name="title-append"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title?: string ,customColor?:boolean }>();
</script>

<style scoped>
.puri-card {
  @apply transition-colors rounded-xl overflow-hidden relative;
}
.puri-card.default-color{
  @apply bg-white dark:bg-neutral-800 dark:border-t border-neutral-700 border-opacity-50
}
.puri-card-title {
  @apply text-lg flex-grow relative font-medium text-gray-800 dark:text-neutral-200;
}
</style>
