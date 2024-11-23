<script setup lang="ts">
import { ref } from "vue";
import Steps from "../components/Steps/Steps.vue";
const e = ref(0);
</script>

<template>
  <div class="container theme-rose">
    <Steps v-model="e" :items="['手机号码', '验证码', '完成']"></Steps>
  </div>
</template>

<style scoped></style>
