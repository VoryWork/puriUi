<template>
  <Transition>
    <div v-if="dateShow.month === -1">
      <div class="puri-row-center">
        <button class="puri-date-switch" @click="dateShow.year--">
          <i class="bi bi-chevron-compact-left"></i>
        </button>
        <button class="flex-grow text-center active:scale-95 transition-all">
          {{ `${dateShow.year}年` }}
        </button>
        <button class="puri-date-switch" @click="dateShow.year++">
          <i class="bi bi-chevron-compact-right"></i>
        </button>
      </div>
      <div class="puri-date-picker-date-title-container">
        <div class="puri-date-picker-date-item col-span-7">选择月份</div>
      </div>
      <div class="h-[1px] bg-gray-200/50 dark:bg-neutral-700/50 my-2"></div>
      <div class="puri-date-picker-month-container">
        <div
          class="puri-date-picker-month-item"
          @click="dateShow.month = index"
          :class="getMonthShowStyle(dateShow.year, index)"
          v-for="(item, index) in [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月',
          ]">
          {{ item }}
        </div>
      </div>
    </div>

    <div v-else>
      <div class="puri-row-center">
        <button class="puri-date-switch" @click="previousMonth">
          <i class="bi bi-chevron-compact-left"></i>
        </button>
        <button @click="dateShow.month = -1" class="flex-grow text-center active:scale-95 transition-all">
          {{ `${dateShow.year}年${dateShow.month + 1}月` }}
        </button>
        <button class="puri-date-switch" @click="nextMonth">
          <i class="bi bi-chevron-compact-right"></i>
        </button>
      </div>

      <div class="puri-date-picker-date-title-container">
        <div v-for="i in 7">
          <div class="puri-date-picker-date-item">
            {{ weekDays[(i + (props.firstDay ?? 0) - 1) % weekDays.length] }}
          </div>
        </div>
      </div>
      <div class="h-[1px] bg-gray-200/50 dark:bg-neutral-700/50 my-2"></div>
      <div class="puri-date-picker-date-container">
        <TransitionGroup :name="`puri-date-${moveAnimation}-container`">
          <div
            class="puri-date-picker-date-p-item"
            @click="
              moveAnimation = 'prev';
              selectDate(
                dateShow.month === 0 ? dateShow.year - 1 : dateShow.year,
                dateShow.month === 0 ? 12 : dateShow.month - 1,
                i
              );
            "
            :class="
              getShowStyle(
                dateShow.month === 0 ? dateShow.year - 1 : dateShow.year,
                dateShow.month === 0 ? 12 : dateShow.month - 1,
                i
              )
            "
            v-for="i in previousMonthDatePart"
            :key="`${dateShow.month === 0 ? dateShow.year - 1 : dateShow.year},${
              dateShow.month === 0 ? 12 : dateShow.month - 1
            },${i}`">
            {{ i }}
          </div>
          <div
            class="puri-date-picker-date-item"
            @click="selectDate(dateShow.year, dateShow.month, i)"
            :class="getShowStyle(dateShow.year, dateShow.month, i)"
            v-for="i in thisMonthDateCount"
            :key="`${dateShow.year},${dateShow.month},${i}`">
            {{ i }}
          </div>
          <div
            class="puri-date-picker-date-p-item"
            @click="
              moveAnimation = 'next';
              selectDate(
                dateShow.month === 11 ? dateShow.year + 1 : dateShow.year,
                dateShow.month === 11 ? 0 : dateShow.month + 1,
                i
              );
            "
            :class="
              getShowStyle(
                dateShow.month === 11 ? dateShow.year + 1 : dateShow.year,
                dateShow.month === 11 ? 0 : dateShow.month + 1,
                i
              )
            "
            v-for="i in nextMonthDatePart"
            :key="`${dateShow.month === 11 ? dateShow.year + 1 : dateShow.year},${
              dateShow.month === 11 ? 0 : dateShow.month + 1
            },${i}`">
            {{ i }}
          </div>
        </TransitionGroup>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const model = defineModel<string | string[]>({ required: true });
interface PuriDatePickerProps {
  /**
   * 是否是范围选择
   */
  range?: boolean;
  /**
   * 是否是月选择
   */
  month?: boolean;
  /**
   *第一天是周几
   */
  firstDay?: number;
}
const props = defineProps<PuriDatePickerProps>();
const dateObjectMin = ref<Date>(new Date(Array.isArray(model.value) ? model.value[0] : model.value));
const dateObjectMax = ref<Date>(new Date(Array.isArray(model.value) ? model.value[1] : model.value));
const dateMin = ref({
  year: dateObjectMin.value.getFullYear(),
  month: dateObjectMin.value.getMonth(),
  day: dateObjectMin.value.getDate(),
});
const dateMax = ref({
  year: dateObjectMax.value.getFullYear(),
  month: dateObjectMax.value.getMonth(),
  day: dateObjectMax.value.getDate(),
});
const dateShow = ref({
  year: dateMin.value.year,
  month: dateMin.value.month,
});
const weekDays = ref(["日", "一", "二", "三", "四", "五", "六"]);
const thisMonthDateCount = computed(() => {
  return new Date(dateShow.value.year, dateShow.value.month + 1, 0).getDate();
});
const previousMonthDatePart = computed(() => {
  const lastDate = new Date(dateShow.value.year, dateShow.value.month, 0);
  //需要填充的数字个数
  const needCount =
    ((lastDate.getDay() + 1 - (props.firstDay ?? 0)) % 7) +
    (nextMonthDatePart.value.length + thisMonthDateCount.value <= 35 ? 7 : 0);

  return new Array(needCount).fill("").map((_, i) => lastDate.getDate() - needCount + 1 + i);
});
const nextMonthDatePart = computed(() => {
  const lastDate = new Date(dateShow.value.year, dateShow.value.month + 1, 0);
  //需要填充的数字个数
  const needCount = 7 + (((props.firstDay ?? 0) - lastDate.getDay() - 1) % 7);
  return new Array(needCount).fill("").map((_, i) => 1 + i);
});

function selectDate(year: number, month: number, day: number) {
  if (props.range) {
    //范围
    if (
      dateMin.value.year === dateMax.value.year &&
      dateMin.value.month === dateMax.value.month &&
      dateMin.value.day === dateMax.value.day
    ) {
      if (
        new Date(dateMin.value.year, dateMin.value.month, dateMin.value.day).getTime() <
        new Date(year, month, day).getTime()
      ) {
        dateMax.value = { year, month, day };
      } else {
        dateMin.value = { year, month, day };
      }
      //选第二项

      model.value = [
        new Date(dateMin.value.year, dateMin.value.month, dateMin.value.day).toISOString().slice(0, 10),
        new Date(dateMax.value.year, dateMax.value.month, dateMax.value.day).toISOString().slice(0, 10),
      ];
    } else {
      //选第一项
      dateMin.value = { year, month, day };
      dateMax.value = { year, month, day };
      model.value = [new Date(year, month, day).toISOString().slice(0, 10)];
    }
  } else {
    dateShow.value = { year, month };
    dateMin.value = { year, month, day };
    model.value = new Date(year, month, day).toISOString().slice(0, 10);
  }
}

function getShowStyle(year: number, month: number, day: number) {
  if (props.range) {
    if (dateMin.value.year === year && dateMin.value.month === month && dateMin.value.day === day) {
      return "range-start";
    } else if (dateMax.value.year === year && dateMax.value.month === month && dateMax.value.day === day) {
      return "range-end";
    } else if (
      new Date(dateMin.value.year, dateMin.value.month, dateMin.value.day).getTime() <
        new Date(year, month, day).getTime() &&
      new Date(dateMax.value.year, dateMax.value.month, dateMax.value.day).getTime() >
        new Date(year, month, day).getTime()
    ) {
      return "range";
    }
  } else if (dateMin.value.year === year && dateMin.value.month === month && dateMin.value.day === day) {
    return "selected";
  }
  return "";
}
function getMonthShowStyle(year: number, month: number) {
  if (props.range) {
    if (
      dateMin.value.year === year &&
      dateMin.value.month === month &&
      dateMin.value.month === dateMax.value.month &&
      dateMin.value.year === dateMax.value.year
    ) {
      return "selected";
    }
    if (dateMin.value.year === year && dateMin.value.month === month) return "range-start";
    if (dateMax.value.year === year && dateMax.value.month === month) return "range-end";
    if (
      new Date(dateMin.value.year, dateMin.value.month).getTime() < new Date(year, month).getTime() &&
      new Date(dateMax.value.year, dateMax.value.month).getTime() > new Date(year, month).getTime()
    ) {
      return "range";
    }
  } else {
    if (dateMin.value.year === year && dateMin.value.month === month) return "selected";
  }
}
const moveAnimation = ref("prev");
function previousMonth() {
  moveAnimation.value = "prev";
  dateShow.value = {
    year: dateShow.value.month === 0 ? dateShow.value.year - 1 : dateShow.value.year,
    month: dateShow.value.month === 0 ? 11 : dateShow.value.month - 1,
  };
}
function nextMonth() {
  moveAnimation.value = "next";
  dateShow.value = {
    year: dateShow.value.month === 11 ? dateShow.value.year + 1 : dateShow.value.year,
    month: dateShow.value.month === 11 ? 0 : dateShow.value.month + 1,
  };
}
</script>

<style scoped>
.puri-date-picker-date-title-container {
  @apply grid grid-cols-7 font-semibold text-gray-800 dark:text-neutral-300;
}
.puri-date-picker-date-container {
  @apply grid grid-cols-7 gap-y-2;
}
.puri-date-picker-month-container {
  @apply grid grid-cols-4 gap-y-2;
}
.puri-date-picker-date-item {
  @apply flex items-center text-center select-none cursor-pointer transition-colors justify-center text-sm py-1 text-gray-700 dark:text-neutral-200 active:scale-95;
}
.puri-date-picker-date-p-item {
  @apply flex items-center text-center select-none cursor-pointer transition-colors justify-center text-sm py-1 text-gray-400 dark:text-neutral-500 active:scale-95;
}
.puri-date-picker-month-item {
  @apply flex items-center text-center select-none cursor-pointer transition-colors justify-center text-sm py-3 text-gray-700 dark:text-neutral-200 active:scale-95;
}
.puri-date-picker-date-item.range-start,
.puri-date-picker-month-item.range-start {
  @apply rounded-l-full bg-primary-500 text-white;
}
.puri-date-picker-date-item.range-end,
.puri-date-picker-month-item.range-end {
  @apply rounded-r-full bg-primary-500 text-white;
}
.puri-date-picker-date-item.range,
.puri-date-picker-month-item.range {
  @apply text-white bg-neutral-500/10 text-gray-700 dark:text-neutral-200;
}
.puri-date-picker-date-item.selected,
.puri-date-picker-month-item.selected {
  @apply text-white bg-primary-500 rounded-lg;
}
.puri-date-picker-date-p-item.range {
  @apply text-white bg-neutral-500/5 text-gray-400 dark:text-neutral-300;
}
.puri-date-switch {
  @apply text-gray-500 w-12 h-12 dark:text-neutral-400 active:scale-95 rounded-lg hover:bg-neutral-500/20;
}
.puri-date-picker-date-p-item.range-start {
  @apply text-white rounded-l-full bg-neutral-500/20 text-gray-400 dark:text-neutral-500;
}
.puri-date-picker-date-p-item.range-end {
  @apply text-white rounded-r-full bg-neutral-500/20 text-gray-400 dark:text-neutral-500;
}
.puri-date-prev-container-move, /* 对移动中的元素应用的过渡 */
.puri-date-prev-container-enter-active,
.puri-date-next-container-move, 
.puri-date-next-container-enter-active {
  @apply transition-all duration-500 delay-75;
}
.puri-date-prev-container-leave-active,
.puri-date-next-container-leave-active {
  @apply transition-all duration-300;
}

.puri-date-prev-container-enter-from {
  opacity: 0;
  transform: translateY(-90px);
}
.puri-date-prev-container-leave-to {
  opacity: 0;
  transform: translateY(90px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.puri-date-prev-container-leave-active,
.puri-date-next-container-leave-active {
  position: absolute;
}

.puri-date-next-container-enter-from {
  opacity: 0;
  transform: translateY(90px);
}
.puri-date-next-container-leave-to {
  opacity: 0;
  transform: translateY(-90px);
}
</style>
