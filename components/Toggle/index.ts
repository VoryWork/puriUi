import type { App } from 'vue'
import Toggle from './Toggle.vue'

// 使用install方法，在app.use挂载
Toggle.install = (app: App): void => {
  app.component(<string>Toggle.__name, Toggle)
}

export default Toggle