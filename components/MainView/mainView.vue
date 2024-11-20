<template>
  <div class="puri-screen" :class="[props.background?'bannered':'']">
    <img v-if="props.background" class="puri-banner-img" :src="background">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{background?: string}>();
</script>

<style>
.puri-banner-img{
  @apply fixed top-0 z-0 w-full;
}
.puri-screen {
  @apply bg-gray-100 min-h-dvh dark:bg-neutral-900 transition-colors w-full;
}
.puri-screen.bannered {
  @apply bg-white dark:bg-neutral-900 z-10 ;
}
</style>
