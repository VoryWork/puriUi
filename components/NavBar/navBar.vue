<template>
  <div class="puri-screen-navbar-container">
    <nav class="puri-screen-navbar" :style="`grid-template-columns: repeat(${col || items.length}, minmax(0, 1fr));`">
      <button
        v-for="item in props.items"
        :class="item.name === model ? 'active' : undefined"
        @click="
          model = item.name;
          item.clickHander(item.name);
        ">
        <i class="bi" :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { NavBarItem } from "../interface";
const model = defineModel<string>();
const props = defineProps<{
  col?: number;
  items: NavBarItem[];
}>();
</script>

<style scoped>
.puri-screen-navbar-container {
  @apply fixed bottom-0 w-full z-20 flex items-center justify-center;
}
.puri-screen-navbar {
  @apply bg-white transition-all w-full dark:bg-neutral-800 dark:border-t border-neutral-700 border-opacity-50 shadow-md grid sm:w-2/3 md:w-1/3 xl:w-1/4 xxl:w-1/6 sm:rounded-xl sm:mb-2;
}
.puri-screen-navbar button {
  @apply flex flex-col items-center justify-center py-2 rounded-md transition-transform active:scale-90 duration-300;
}
.puri-screen-navbar button i.bi {
  @apply text-gray-400 dark:text-neutral-500 text-xl transition-colors;
}
.puri-screen-navbar button.active i.bi {
  @apply text-primary-500 dark:text-primary-400;
}
.puri-screen-navbar button span {
  @apply text-xs text-gray-400 dark:text-neutral-500 transition-colors;
}
.puri-screen-navbar button.active span {
  @apply text-primary-500 dark:text-primary-400;
}
</style>
