import type { App } from 'vue'
import container from './container.vue'

// 使用install方法，在app.use挂载
container.install = (app: App): void => {
  app.component(<string>container.__name, container)
}

export default container