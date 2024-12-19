<script setup lang="ts">
import { ref } from "vue";
import Steps from "../components/Steps/Steps.vue";
import MainView from "../components/MainView/mainView.vue";
import Container from "../components/Container/container.vue";
import PuriProgress from "../components/Progress/Progress.vue";
import Toggle from "../components/Toggle/Toggle.vue";
import BottomSheets from "../components/BottomSheets/BottomSheets.vue";
import Card from "../components/Card/card.vue";
import Select from "../components/Select/Select.vue";
import Loading from "../components/Loading/Loading.vue";
import InfiniteProgress from "../components/InfiniteProgress/InfiniteProgress.vue";
const e = ref(0);
const n = ref(0.1);
const o = ref(0);
const g = ref(true);
const t = ref("A");
</script>

<template>
  <MainView>
    <Container>
      <div class="flex-grow space-y-2 theme-indigo">
        <Steps @click="g = true" v-model="e" :items="['AAAA', 'BBBBB', 'CCCCC']"></Steps>
        <PuriProgress variant="line" label="70%" v-model="n"></PuriProgress>
        <Toggle :items="['本月', '本年', '本日']" class="bg-white rounded-xl" v-model="o">
          <template #buttons="{ item, index, choose }">
            <div
              class="p-2 text-xs text-gray-500 text-center transition-colors"
              :class="{ 'text-gray-500': index !== o, 'text-white': index === o }"
              @click="choose">
              {{ item }}
            </div>
          </template>
          <template #background>
            <div class="p-1 w-full h-full">
              <div class="rounded-lg bg-primary-500 w-full h-full"></div>
            </div>
          </template>
        </Toggle>
        <Select label="masd " custom-value v-model="t" :items="['A', 'B', 'C']"></Select>
        <InfiniteProgress variant="line" label="70%" :model-value="1"></InfiniteProgress>
      </div>
    </Container>
  </MainView>
</template>

<style scoped></style>
