import type { App } from 'vue'
import Steps from "./Steps.vue"

// 使用install方法，在app.use挂载
Steps.install = (app: App): void => {
  app.component(<string>Steps.__name, Steps)
}

export default Steps