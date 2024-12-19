<template>
  <TextField
    v-model:container-ref="textFieldRef"
    @click="showRef"
    :variant
    :placeholder
    :prepend-icon
    :label
    v-model="textmodel"
    :readonly="!props.customValue"></TextField>
  <Teleport to="body">
    <div @click="showSelect = false" v-if="showSelect" class="fixed z-20 w-full h-dvh top-0 right-0"></div>
    <Transition name="selectitem-fade">
      <div v-if="showSelect" class="absolute z-30" :style="locate">
        <div class="bg-white/100 dark:bg-neutral-800 border dark:border-neutral-700 rounded-md shadow-md w-full">
          <ul class="max-h-64 overflow-auto divide-y divide-gray-100 dark:divide-neutral-600/50">
            <slot name="items" v-for="(item, index) in items" :item :index :select="(v:string)=>{model=v}">
              <li @click="model = item;showSelect=false" class="py-2 px-3 text-sm text-gray-800 dark:text-neutral-200">{{ item }}</li>
            </slot>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import TextField from "../TextField/textField.vue";
const textFieldRef = ref<any>(null);
const showSelect = ref(false);
const locate = ref({ top: "", left: "", width: "" });
function showRef() {
  if (textFieldRef.value) {
    const containerLocate: DOMRect = textFieldRef.value.getBoundingClientRect();
    console.log(containerLocate);
    locate.value = {
      top: containerLocate.bottom-4 + "px",
      left: containerLocate.left + "px",
      width: containerLocate.width + "px",
    };
    showSelect.value = true;
  }
}
function onResize() {
  const containerLocate: DOMRect = textFieldRef.value.getBoundingClientRect();
  console.log(containerLocate);
  locate.value = {
    top: containerLocate.bottom-4 + "px",
    left: containerLocate.left + "px",
    width: containerLocate.width + "px",
  };
}
function onBlur() {
  showSelect.value = false;
}
onMounted(() => {
  window.addEventListener("resize", onResize);
  textFieldRef.value.addEventListener("blur", onBlur);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
  textFieldRef.value.removeEventListener("blur", onBlur);
});
const model = defineModel();
const textmodel = computed({
  get() {
    return model.value;
  },
  set(v: string) {
    model.value=v
  },
});
const props = defineProps({
  variant: {
    type: String,
    allow: ["outline", "plain"],
    default: "outline",
  },
  placeholder: {
    type: String,
    required: false,
  },
  prependIcon: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  customValue: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.selectitem-fade-enter-active,
.selectitem-fade-leave-active {
  @apply transition-all;
}

.selectitem-fade-enter-from,
.selectitem-fade-leave-to {
    transform: translateY(-20px);
  opacity: 0;
}
</style>
