<template>
  <div
    class="puri-infiniteprogress-container"
    :class="{
      'default-color': !props.customColor,
      'puri-progress-filled': props.variant === 'filled',
      'puri-progress-text': props.variant === 'text',
    }">
    <div class="puri-infiniteprogress-container-shadow flex-0" :class="indicatorClass"></div>
    <div class="puri-infiniteprogress-container-indicator-container">
      <div class="puri-infiniteprogress-container-indicator"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: "line" | "filled" | "text";
  linearClass?: string;
  label?: string;
  customColor?: boolean;
  indicatorClass?: string;
  indicatorSpaceClass?: string;
}>();
</script>

<style class="scss">
.puri-infiniteprogress-container {
  @apply relative rounded-md leading-none font-medium text-xs h-1;
}
.puri-infiniteprogress-container.default-color {
  @apply bg-gray-300 dark:bg-neutral-700;
}
.puri-infiniteprogress-container.puri-progress-filled {
  @apply h-2;
}
.puri-infiniteprogress-container.puri-progress-text {
  @apply h-6;
}
.puri-infiniteprogress-container-shadow {
  @apply absolute h-full;
  box-shadow: 0px 0px 12px 0px var(--color-primary-500);
  animation: puri-progress-anime 8s linear infinite;
}

@keyframes puri-progress-anime {
  0% {
    width: 0%;
  }
  16.67% {
    width: 0%;
  }
  33.33% {
    left:0%;
    width: 25%;
  }
  83.33% {
    left:75%;
    width: 25%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
}
@keyframes puri-progress-anime2 {
  0% {
    width: 25%;
    left: -50%;
  }
  50% {
    width: 25%;
    left: 25%;
  }
  100% {
    width: 25%;
    left: 100%;
  }
}
.puri-infiniteprogress-container-indicator-container {
  @apply absolute h-full w-full overflow-hidden;
}
.puri-infiniteprogress-container-indicator {
  @apply absolute rounded-r-full w-[200%] h-full from-primary-200 via-primary-400 via-50% to-primary-500 bg-gradient-to-l;
  animation: puri-progress-anime2 8s linear infinite;
}
</style>
