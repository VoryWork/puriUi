import type { App } from 'vue'
import collapse from './collapse.vue'

// 使用install方法，在app.use挂载
collapse.install = (app: App): void => {
  app.component(<string>collapse.__name, collapse)
}

export default collapse