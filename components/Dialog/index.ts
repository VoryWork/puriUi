import type { App } from 'vue'
import Dialog from './dialog.vue'

// 使用install方法，在app.use挂载
Dialog.install = (app: App): void => {
  app.component(<string>Dialog.__name, Dialog)
}

export default Dialog