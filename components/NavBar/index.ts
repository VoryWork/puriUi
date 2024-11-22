import type { App } from 'vue'
import NavBar from './navBar.vue'

// 使用install方法，在app.use挂载
NavBar.install = (app: App): void => {
  app.component(<string>NavBar.__name, NavBar)
}

export default NavBar