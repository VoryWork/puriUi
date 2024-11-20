import type { App } from 'vue'
import textField from './textField.vue'

// 使用install方法，在app.use挂载
textField.install = (app: App): void => {
  app.component(<string>textField.__name, textField)
}

export default textField