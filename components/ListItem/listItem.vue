<template>
  <div class="puri-list-item" :class="[props.compact ? 'compact' : '',clickable?'puri-clickable':'']">
    <div class="puri-list-item-icon" v-if="props.prependIcon">
      <i class="bi" :class="props.prependIcon"></i>
    </div>
    <div class="puri-list-item-title">{{ props.title }}</div>
    <div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ prependIcon?: string; title?: string; compact?: boolean,clickable?:boolean }>();
</script>

<style scoped>
.puri-list-item {
  @apply flex flex-row items-center text-base p-3 text-gray-900 dark:text-neutral-400 duration-300;
}
.puri-list-item.compact {
  @apply p-3;
}
.puri-list-item-title {
  @apply flex-grow;
}
.puri-list-item-icon {
  @apply text-base mr-2;
}
.puri-list-item.compact .puri-list-item-title {
  @apply text-sm;
}
.puri-list-item.compact .puri-list-item-icon {
  @apply text-sm mr-1;
}
</style>
