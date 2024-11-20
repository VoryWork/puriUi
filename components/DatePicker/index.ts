import type { App } from 'vue'
import DatePicker from './datePicker.vue'

// 使用install方法，在app.use挂载
DatePicker.install = (app: App): void => {
  app.component(<string>DatePicker.__name, DatePicker)
}

export default DatePicker