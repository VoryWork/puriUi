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

      <Transition :name="`puri-date-${moveAnimation}-container`">
        <div class="puri-date-picker-date-container">
          <div
            class="puri-date-picker-date-p-item"
            @click="
              moveAnimation = 'prev';
              selectDate(
                dateShow.month === 0 ? dateShow.year - 1 : dateShow.year,
                dateShow.month === 0 ? 11 : dateShow.month - 1,
                i
              );
            "
            :class="
              getShowStyle(
                dateShow.month === 0 ? dateShow.year - 1 : dateShow.year,
                dateShow.month === 0 ? 11 : dateShow.month - 1,
                i
              )
            "
            v-for="i in previousMonthDatePart"
            :key="`${dateShow.month === 0 ? dateShow.year - 1 : dateShow.year},${
              dateShow.month === 0 ? 11 : dateShow.month - 1
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
        </div>
      </Transition>
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
  /**
   * 时区
   */
  timeZone?: number;
  /**
   * 最大日期
   */
  max?: string;
  /**
   * 最小日期
   */
  min?: string;
}
const props = defineProps<PuriDatePickerProps>();
if (props.range && !Array.isArray(model.value)) {
  throw new Error("range模式下，v-model的值必须是数组类型");
}
if (!props.range && Array.isArray(model.value)) {
  throw new Error("非range模式下，v-model的值不能是数组类型");
}
const splitMax = (Array.isArray(model.value) ? model.value[1] ?? model.value[0] : model.value).split("-");
const splitMin = (Array.isArray(model.value) ? model.value[0] : model.value).split("-");
const dateMin = ref({
  year: parseInt(splitMin[0]),
  month: parseInt(splitMin[1]) - 1,
  day: parseInt(splitMin[2]),
});
const dateMax = ref({
  year: parseInt(splitMax[0]),
  month: parseInt(splitMax[1]) - 1,
  day: parseInt(splitMax[2]),
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
  if(props.max){
    if(new Date(year, month, day).getTime() > new Date(props.max).getTime()){
      return;
    }
  }
  if(props.min){
    if(new Date(year, month, day).getTime() < new Date(props.min).getTime()){
      return;
    }
  }
  if (props.range) {
    //范围
    if (dateMax.value.year === 0 && dateMax.value.month === 0 && dateMax.value.day === 0) {
      if (
        new Date(dateMin.value.year, dateMin.value.month, dateMin.value.day).getTime() <
        new Date(year, month, day).getTime()
      ) {
        //选择之后的日期
        dateMax.value = { year, month, day };
      } else {
        //选择之前的日期
        dateMax.value = dateMin.value;
        dateMin.value = { year, month, day };
      }
      //选第二项
      model.value = [
        `${dateMin.value.year}-${String(dateMin.value.month + 1).padStart(2, "0")}-${String(dateMin.value.day).padStart(
          2,
          "0"
        )}`,
        `${dateMax.value.year}-${String(dateMax.value.month + 1).padStart(2, "0")}-${String(dateMax.value.day).padStart(
          2,
          "0"
        )}`,
      ];
    } else {
      //选第一项
      dateMin.value = { year, month, day };
      dateMax.value = { year: 0, month: 0, day: 0 };
      model.value = [`${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`];
    }
  } else {
    dateShow.value = { year, month };
    dateMin.value = { year, month, day };
    model.value = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }
}

function getShowStyle(year: number, month: number, day: number) {
  if (props.max) {
    if (new Date(year, month, day).getTime() > new Date(props.max).getTime()) {
      return "disabled";
    }
  }
  if (props.min) {
    if (new Date(year, month, day).getTime() < new Date(props.min).getTime()) {
      return "disabled";
    }
  }
  if (props.range) {
    if (dateMin.value.year === year && dateMin.value.month === month && dateMin.value.day === day) {
      if (dateMax.value.year === 0 && dateMax.value.month === 0 && dateMax.value.day === 0) {
        return "selecting";
      } else if (
        dateMax.value.year === dateMin.value.year &&
        dateMax.value.month === dateMin.value.month &&
        dateMax.value.day === dateMin.value.day
      ) {
        return "selected";
      }
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
  @apply flex items-center text-center select-none cursor-pointer transition-colors justify-center text-sm py-1 text-transparent active:scale-95;
}
.puri-date-picker-month-item {
  @apply flex items-center text-center select-none cursor-pointer transition-colors justify-center text-sm py-3 text-gray-700 dark:text-neutral-200 active:scale-95;
}
.puri-date-picker-date-item.range-start,
.puri-date-picker-month-item.range-start {
  @apply rounded-l-lg bg-primary-500 text-white;
}
.puri-date-picker-date-item.range-end,
.puri-date-picker-month-item.range-end {
  @apply rounded-r-lg bg-primary-500 text-white;
}
.puri-date-picker-date-item.range,
.puri-date-picker-month-item.range {
  @apply bg-neutral-500/10 text-gray-700 dark:text-neutral-200;
}
.puri-date-picker-date-item.selected,
.puri-date-picker-date-p-item.selected,
.puri-date-picker-month-item.selected {
  @apply text-white bg-primary-500 rounded-lg;
}
.puri-date-picker-date-item.disabled,
.puri-date-picker-date-p-item.diasbled,
.puri-date-picker-month-item.diasbled {
  @apply text-gray-400/50 dark:text-neutral-600/50 rounded-lg;
}
.puri-date-picker-date-item.selecting,
.puri-date-picker-date-p-item.selecting {
  @apply text-gray-700 dark:text-neutral-200 bg-primary-200 dark:bg-primary-800 rounded-lg;
}
.puri-date-picker-date-p-item.range {
  @apply bg-neutral-500/5 text-gray-400 dark:text-neutral-300;
}
.puri-date-switch {
  @apply text-gray-500 w-12 h-12 dark:text-neutral-400 active:scale-95 rounded-lg hover:bg-neutral-500/20;
}
.puri-date-picker-date-p-item.range-start {
  @apply rounded-l-lg bg-neutral-500/20 text-gray-400 dark:text-neutral-500;
}
.puri-date-picker-date-p-item.range-end {
  @apply rounded-r-lg bg-neutral-500/20 text-gray-400 dark:text-neutral-500;
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
}
.puri-date-prev-container-leave-to {
  opacity: 0;
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.puri-date-prev-container-leave-active,
.puri-date-next-container-leave-active {
  position: absolute;
}

.puri-date-next-container-enter-from {
  opacity: 0;
}
.puri-date-next-container-leave-to {
  opacity: 0;
}
</style>
