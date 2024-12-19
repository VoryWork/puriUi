import type { App } from 'vue'
import InfiniteProgress from './InfiniteProgress.vue'

// 使用install方法，在app.use挂载
InfiniteProgress.install = (app: App): void => {
  app.component(<string>InfiniteProgress.__name, InfiniteProgress)
}

export default InfiniteProgress