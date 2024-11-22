<template>
    <div class="max-w-2xl mx-auto px-4 md:px-0">
        <ul aria-label="Steps" class="items-center text-gray-600 font-medium md:flex">
            <li v-for="(item, idx) in stepsItems" :key="idx" :aria-current="currentStep == idx + 1 ? 'step' : false"
                class="flex gap-x-3 md:flex-col md:flex-1 md:gap-x-0">
                <div class="flex flex-col items-center md:flex-row md:flex-1">
                    <hr
                        :class="{ 'w-full border hidden md:block': true, 'border-none': idx == 0, 'border-indigo-600': currentStep >= idx + 1 }" />
                    <div
                        :class="{ 'w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center': true, 'bg-indigo-600 border-indigo-600': currentStep > idx + 1, 'border-indigo-600': currentStep == idx + 1 }">
                        <span
                            :class="{ 'w-2.5 h-2.5 rounded-full bg-indigo-600': true, 'hidden': currentStep != idx + 1 }"></span>
                        <svg v-if="currentStep > idx + 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" class="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <hr
                        :class="{ 'h-12 border md:w-full md:h-auto': true, 'border-none': idx + 1 == stepsItems.length, 'border-indigo-600': currentStep > idx + 1 }" />
                </div>
                <div class="h-8 flex justify-center items-center md:mt-3 md:h-auto">
                    <h3 :class="{ 'text-sm': true, 'text-indigo-600': currentStep == idx + 1 }">{{ item }}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const stepsItems = ref(["Profile", "Contact", "Identity", "Passport"])
const currentStep = ref(2)
</script>

<style scoped></style>