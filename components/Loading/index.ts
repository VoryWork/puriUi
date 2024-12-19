import type { App } from 'vue'
import Loading from './Loading.vue'

// 使用install方法，在app.use挂载
Loading.install = (app: App): void => {
  app.component(<string>Loading.__name, Loading)
}

export default Loading