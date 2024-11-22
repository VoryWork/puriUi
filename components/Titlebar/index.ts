import type { App } from 'vue'
import Titlebar from './titlebar.vue'

// 使用install方法，在app.use挂载
Titlebar.install = (app: App): void => {
  app.component(<string>Titlebar.__name, Titlebar)
}

export default Titlebar