import type { App } from 'vue'
import Container from './container.vue'

// 使用install方法，在app.use挂载
Container.install = (app: App): void => {
  app.component(<string>Container.__name, Container)
}

export default Container