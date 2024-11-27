<script setup lang="ts">
import { ref } from "vue";
import Steps from "../components/Steps/Steps.vue";
import MainView from "../components/MainView/mainView.vue";
import Container from "../components/Container/container.vue";
import  PuriProgress from "../components/Progress/Progress.vue";
const e = ref(0);
const n = ref(0.1);
</script>

<template>
  <MainView>
    <Container>
      <div class="flex-grow space-y-2 theme-indigo">
        <Steps v-model="e" :items="['AAAA','BBBBB','CCCCC']"></Steps>
      <PuriProgress variant="line" label="70%" v-model="n"></PuriProgress>
    </div>
    </Container>
  </MainView>
</template>

<style scoped></style>
