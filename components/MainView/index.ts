import type { App } from 'vue'
import mainView from './mainView.vue'

// 使用install方法，在app.use挂载
mainView.install = (app: App): void => {
  app.component(<string>mainView.__name, mainView)
}

export default mainView