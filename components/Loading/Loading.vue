<template>
  <Teleport to="body">
    <Dialog v-model="model" persistent max-width="160px">
      <Card class="p-4 puri-col-center space-y-4">
        <div class="puri-loading mt-4"></div>
        <slot name="text">
          <div class="text-sm text-gray-700 font-medium dark:text-gray-300 pb-2">{{ props.text }}</div>
        </slot>
      </Card>
    </Dialog>
  </Teleport>
</template>

<script setup lang="ts">
const model = defineModel<boolean>();
const props = defineProps({
  text: {
    type: String,
    default: "加载中...",
  },
});
import Card from "../Card/card.vue";
import Dialog from "../Dialog/dialog.vue";
</script>

<style scoped>
.puri-loading {
  @apply ring-primary-500 dark:ring-primary-400 ring-2 w-12 h-12 rounded-full shadow-primary-500;
  animation: puri-loading-rotation 1.5s cubic-bezier(0.6, -0.18, 0.49, 1.14) infinite;
}
.puri-loading:after {
  @apply bg-primary-500 dark:bg-primary-400 w-3 h-3 rounded-full absolute;

  content: "";
}
@keyframes puri-loading-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
