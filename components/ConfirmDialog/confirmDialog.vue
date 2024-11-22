<template>
  <Dialog :max-width v-model="model">
    <Card class="puri-confirmer">
      <div class="puri-confirmer-title" v-if="props.title">{{ props.title }}</div>
      <p class="puri-confirmer-content"><slot></slot></p>
      <div class="puri-confirmer-actions">
        <Button custom-color @click="onCancel?onCancel():undefined" class="puri-confirmer-actions-cancel">{{ props.cancelText||'取消' }}</Button>
        <Button @click="onConfirm?onConfirm():undefined" class="px-2" :class="props.confirmColorClass ?? 'text-green-500 dark:text-green-400'" custom-color>
          {{ props.confirmText || "确认" }}
        </Button>
      </div>
    </Card>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "../Dialog";
import Card from "../Card";
import Button from "../Button/Button.vue";
const model = defineModel<boolean>();
const props = defineProps<{
  maxWidth?: string;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  confirmColorClass?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}>();
</script>

<style>
.puri-confirmer-content {
  @apply px-4 text-sm text-gray-500 dark:text-neutral-500;
}
.puri-confirmer {
  @apply space-y-2 py-4;
}
.puri-confirmer-title {
  @apply px-4 text-lg flex-grow relative font-medium text-gray-800 dark:text-neutral-200;
}
.puri-confirmer-actions {
  @apply px-4 flex justify-end space-x-2 pt-2;
}
.puri-confirmer-actions .puri-confirmer-actions-cancel {
  @apply px-2 text-gray-800 dark:text-neutral-300;
}
</style>
