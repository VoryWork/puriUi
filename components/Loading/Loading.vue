<template>
  <Teleport to="body">
    <Dialog v-model="model" persistent max-width="160px">
      <template #background>
        <button v-if="showCancel" @click="props.onClose()" class="puri-loading-cancel-button puri-clickable"> <i class="bi bi-x"></i></button>
      </template>
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
import { onBeforeUnmount, onMounted, ref } from "vue";
import Card from "../Card/card.vue";
import Dialog from "../Dialog/dialog.vue";

const model = defineModel<boolean>();
const props = defineProps({
  text: {
    type: String,
    default: "加载中...",
  },
  timeout:{
    type:Number,
    default:0
  }
  ,
  onClose: {
    type: Function,
    default: () => {},
  },
});
const showCancel= ref(false);
const timeout = ref<any>(null)
onMounted(() => {
  if(props.timeout>0){
    timeout.value = setTimeout(() => {
      showCancel.value=true;
    }, props.timeout);
  }
});
onBeforeUnmount(() => {
  clearTimeout(timeout.value);
});
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
.puri-loading-cancel-button{
  @apply flex items-center justify-center leading-none absolute top-8 right-8 text-lg bg-white dark:bg-neutral-800 rounded-full w-8 h-8;
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
