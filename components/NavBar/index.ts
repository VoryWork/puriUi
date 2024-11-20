import type { App } from 'vue'
import navBar from './navBar.vue'

// 使用install方法，在app.use挂载
navBar.install = (app: App): void => {
  app.component(<string>navBar.__name, navBar)
}

export default navBar