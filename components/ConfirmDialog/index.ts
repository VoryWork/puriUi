import type { App } from 'vue'
import ConfirmDialog from './confirmDialog.vue'

// 使用install方法，在app.use挂载
ConfirmDialog.install = (app: App): void => {
  app.component(ConfirmDialog.__name as string, ConfirmDialog)
}

export default ConfirmDialog