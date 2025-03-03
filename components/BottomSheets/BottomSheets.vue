<template>
  <Transition @enter="onEnter" name="puri-bottom-sheets-transition">
    <div v-if="backgroundShow" class="puri-bottom-sheets" :class="{'puri-bottom-sheets-fixed':!props.noBackground}">
      <div class="puri-dialog-background" v-if="!props.noBackground" @click="props.persistent?undefined:(model = false)">
        <slot name="background"></slot>
      </div>

      <!--背景板-->
      <!-- 对话框内容 -->
      <Transition @leave="onAfterLeave" name="puri-bottom-sheets-container">
        <div
          v-if="containerShow"
          class="puri-bottom-sheets-container"
          :style="{maxWidth:props.maxWidth}">
          <slot></slot>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const model = defineModel<boolean>();
const props = defineProps<{ maxWidth?: string ,persistent?:boolean ,noBackground?:boolean}>();
const backgroundShow = ref(false);
const containerShow = ref(false);
onMounted(() => {
  if (model.value) {
    backgroundShow.value = true;
  }
});
watch(model, (v) => {
  if (v) {
    backgroundShow.value = true;
  } else {
    containerShow.value = false;
  }
});
function onAfterLeave() {
  backgroundShow.value = false;
}
function onEnter(){
  containerShow.value = true;
}
</script>

<style scoped>
.puri-bottom-sheets {
  @apply fixed left-0 w-dvw flex items-end justify-center bottom-0 z-[60];
}
.puri-bottom-sheets.puri-bottom-sheets-fixed {
  @apply h-dvh top-0;
}
.puri-dialog-background {
  @apply fixed top-0 left-0 dark:bg-neutral-900/60 backdrop-blur-sm right-0 z-20 w-dvw overflow-x-hidden overflow-y-auto md:inset-0 h-dvh max-h-dvh bg-gray-800/60;
}
.puri-bottom-sheets-container {
  @apply w-full z-30 flex-grow bottom-0 max-h-dvh;
}

.puri-bottom-sheets-transition-enter-active,
.puri-bottom-sheets-transition-leave-active {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.puri-bottom-sheets-transition-enter-from,
.puri-bottom-sheets-transition-leave-to {
  opacity: 0;
}
.puri-bottom-sheets-container-enter-active,
.puri-bottom-sheets-container-leave-active {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.puri-bottom-sheets-container-enter-active {
  transition-delay: 50ms;
}
.puri-bottom-sheets-container-enter-from,
.puri-bottom-sheets-container-leave-to {
  transform: translateY(100%);
}
</style>
