<template>
  <div
    class="puri-container"
    :class="[
      props.native ? 'padding-mobile' : 'padding-web',
      props.navbar ? 'padding-navbar' : '',
      props.titlebar ? 'padding-titlebar' : '',
      props.flexCentered? 'puri-container-flex-centered':''
    ]">
    <Transition name="puri-fade" mode="out-in">
      <slot></slot>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ native?: boolean; navbar?: boolean; titlebar?: boolean,flexCentered?:boolean }>();
</script>

<style>
.puri-container {
  @apply w-full pb-2 mx-auto md:container p-4 space-y-2 transition-all;
}
.puri-container.padding-navbar {
  @apply pb-[4rem] md:pb-[4.25rem];
}
.puri-fade-enter-active,
.puri-fade-leave-active {
  @apply transition duration-300 ease-in-out;
}
.puri-container.padding-mobile {
  @apply pt-8;
}
.puri-container.padding-web {
  @apply pt-0;
}
.puri-container.padding-mobile.padding-titlebar {
  @apply pt-[5rem];
}
.puri-container.padding-web.padding-titlebar {
  @apply pt-12;
}
.puri-fade-enter-from,
.puri-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.puri-container.puri-container-flex-centered{
  @apply flex flex-col justify-center items-center min-h-dvh;
}
</style>
