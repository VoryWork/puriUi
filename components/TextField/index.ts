import type { App } from 'vue'
import TextField from './textField.vue'

// 使用install方法，在app.use挂载
TextField.install = (app: App): void => {
  app.component(<string>TextField.__name, TextField)
}

export default TextField