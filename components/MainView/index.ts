import type { App } from 'vue'
import MainView from './mainView.vue'

// 使用install方法，在app.use挂载
MainView.install = (app: App): void => {
  app.component(<string>MainView.__name, MainView)
}

export default MainView