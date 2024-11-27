<template>
    <div>
        <ul class="puri-steps">
            <li v-for="(item, index) in  props.items " :key="index" class="puri-steps-item"
                @click="handerStepsChange(index)" :class="{ clickable: props.clickable }">
                <div class="puri-row-center flex-1">
                    <hr class="puri-steps-line"
                        :class="{ 'border-none': index === 0, 'finished': (currentStep ?? 0) >= index }" />
                    <slot name="icon" :index="index">
                        <div class="puri-steps-icon"
                            :class="{ 'finished': (currentStep ?? 0) > index, 'now': (currentStep ?? 0) === index }">

                            <i class="bi leading-none bi-check text-xs text-white" v-if="(currentStep ?? 0) > index"></i>
                        </div>
                    </slot>

                    <hr class="puri-steps-line"
                        :class="{ 'border-none': index + 1 == props.items.length, 'finished': (currentStep ?? 0) > index }" />
                </div>
                <slot name="text" :index="index" :item="item">
                    <div class="puri-steps-text-container">
                        <h3 :class="{ 'text-primary-500': (currentStep ?? 0) === index }">{{ item }}</h3>
                    </div>
                </slot>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ items: string[], clickable?: boolean, maxStep?: number }>();
const currentStep = defineModel<number>();
function handerStepsChange(index: number) {
    if (props.clickable) {
        if (props.maxStep !== undefined && index <= props.maxStep) {
            currentStep.value = index;
        }else if(props.maxStep===undefined){
            currentStep.value = index;
        }
    }
}
</script>

<style scoped>
.puri-steps {
    @apply items-center text-gray-600 dark:text-neutral-700 flex;
}

.puri-steps-item.clickable {
    @apply hover:bg-neutral-500/10 select-none cursor-pointer py-2 rounded-md transition-colors;
}

.puri-steps-item {
    @apply flex flex-col flex-1 gap-x-0;
}

.puri-steps-line {
    @apply w-full border block border-gray-600 dark:border-neutral-700;
}

.puri-steps-line.finished {
    @apply border-primary-500;
}

.puri-steps-icon {
    @apply w-4 h-4 rounded-full border-2 flex-none flex items-center justify-center border-gray-600 dark:border-neutral-700;
}

.puri-steps-icon.now {
    @apply border-primary-500;
}

.puri-steps-icon.finished {
    @apply border-primary-500 bg-primary-500;
}

.puri-steps-text-container {
    @apply flex text-xs justify-center items-center mt-2 font-medium;
}
</style>