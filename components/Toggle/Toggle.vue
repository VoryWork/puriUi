<template>
  <div class="puri-toggle-container">
    <div class="puri-toggle-background" :style="{width:`${(100/items.length)}%`,left:`${(model??0)*100/items.length}%`}">
        <slot name="background"></slot>
    </div>
    <div class="relative grid" :style="{ 'grid-template-columns': `repeat(${items.length}, minmax(0, 1fr))` }">
      <template v-for="(item, index) in props.items">
        <slot name="buttons" :index="index" :item="item" :choose="()=>{model=index}"></slot>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ items: unknown[] }>();
const model = defineModel<number>();
</script>

<style scoped>
.puri-toggle-container {
  @apply relative;
}
.puri-toggle-background{
    @apply transition-all h-full absolute ease-out;
}
</style>
