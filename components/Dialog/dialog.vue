<template>
  <Teleport to="body">
    <Transition name="puri-dialoger">
      <div v-if="model" class="puri-dialog">
        <div class="puri-dialog-background" v-if="!props.noBackground" @click="persistent ? undefined : (model = false)">
          <slot name="background"></slot>
        </div>

        <!--背景板-->
        <!-- 对话框内容 -->
        <div class="puri-dialog-container" :style="{ maxWidth: props.maxWidth }">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const model = defineModel<boolean>();
const props = defineProps<{ maxWidth?: string; persistent?: boolean,noBackground?:boolean }>();
</script>

<style scoped>
.puri-dialog {
  @apply fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[60] p-5;
}
.puri-dialog-background {
  @apply fixed top-0 left-0 dark:bg-neutral-900/60 backdrop-blur-sm right-0 z-20 w-screen overflow-x-hidden overflow-y-auto md:inset-0 h-dvh max-h-dvh bg-gray-900/60;
}
.puri-dialog-container {
  @apply z-30 flex-grow max-w-[36rem];
}

.puri-dialoger-enter-active,
.puri-dialoger-leave-active {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.puri-dialoger-enter-from,
.puri-dialoger-leave-to {
  opacity: 0;
}
.puri-dialoger-enter-active .puri-dialog-container,
.puri-dialoger-leave-active .puri-dialog-container {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.puri-dialoger-enter-active .puri-dialog-container {
  transition-delay: 50ms;
}
.puri-dialoger-enter-from .puri-dialog-container,
.puri-dialoger-leave-to .puri-dialog-container {
  transform: translateY(30px) scale(0.75);
  opacity: 0;
}
</style>
