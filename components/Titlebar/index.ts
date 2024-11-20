import type { App } from 'vue'
import titlebar from './titlebar.vue'

// 使用install方法，在app.use挂载
titlebar.install = (app: App): void => {
  app.component(<string>titlebar.__name, titlebar)
}

export default titlebar