<template>
  <div class="puri-list-indicator-container">
    <div
      v-for="(i) in props.length"
      class="puri-list-indecator-item"
      :class="i-1 === props.value ? 'active' : undefined"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ length: number; value: number }>();
</script>

<style scoped>
.puri-list-indicator-container {
  @apply flex flex-row p-1 gap-1;
}
.puri-list-indecator-item {
  @apply w-1.5 h-1.5 rounded-full  bg-gray-300 dark:bg-neutral-800 transition-all duration-300;
}
.puri-list-indecator-item.active {
  @apply w-4 bg-primary-400 dark:bg-primary-500;
}
</style>
