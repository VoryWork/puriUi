<template>
  <div class="group">
    <div class="puri-textfield-label" v-if="props.label && props.variant === 'outline'">{{ props.label }}</div>
    <div class="puri-textfield-container group" :class="{ fluid: props.variant === 'plain' }">
      <i v-if="props.prependIcon" class="bi puri-textfield-icon" :class="props.prependIcon"></i>
      <slot name="prepend"></slot>
      <div class="flex-grow">
        <input
          :type
          :autocomplete="props.autoComplete"
          :readonly
          :max
          :min
          :step
          v-model="model"
          class="puri-textfield-input w-full"
          :placeholder />
      </div>
      <button @click="model = ''" class="puri-textfield-cleaner" v-if="cleaner">
        <i class="bi bi-x-circle-fill text-xs text-gray-400 dark:text-neutral-500"></i>
      </button>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
const props = defineProps({
  variant: {
    type: String,
    allow: ["outline", "plain"],
    default: "outline",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  prependIcon: {
    type: String,
    required: false,
  },
  cleaner: {
    type: Boolean,
    default: false,
  },
  validation: {
    type: Array<(v: any) => string | void>,
    required: false,
  },
  autoComplete: {
    type: String,
    default: "off",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  min: {
    type: [Number, String],
    required: false,
  },
  max: {
    type: [Number, String],
    required: false,
  },
  step: {
    type: [Number, String],
    required: false,
  },
});
</script>

<style scoped>
.puri-textfield-container {
  @apply transition leading-none relative duration-300 flex flex-row items-center text-sm border border-gray-300 rounded-lg
 dark:border-neutral-700 p-2 space-x-2 dark:group-hover:border-primary-400 group-hover:border-primary-500 has-[:focus]:border-primary-500 dark:has-[:focus]:border-primary-400
 bg-white/50 dark:bg-neutral-800/50;
}
.puri-textfield-container.fluid {
  @apply border-none rounded-none p-0 bg-transparent dark:bg-transparent ;
}
.puri-textfield-input {
  @apply focus:outline-none leading-none bg-transparent  placeholder:text-gray-500 dark:placeholder:text-neutral-500 text-gray-700
    dark:text-neutral-300;
}
.puri-textfield-label {
  @apply text-xs text-gray-600 pl-2 leading-none mb-1 dark:text-neutral-400 group-hover:text-primary-500 transition-colors dark:group-hover:text-primary-400 group-has-[:focus]:text-primary-500 dark:group-has-[:focus]:text-primary-400;
}
.puri-textfield-icon {
  @apply text-sm text-gray-600 pl-1 leading-none dark:text-neutral-500 group-hover:text-primary-500 transition-colors dark:group-hover:text-primary-400 group-has-[:focus]:text-primary-500 dark:group-has-[:focus]:text-primary-400;
}
.puri-textfield-cleaner {
  @apply transition-opacity leading-none opacity-0 group-has-[:focus]:opacity-100;
}
</style>
